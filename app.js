const DATA = window.CG_DATA;
const STORAGE_KEY = "contabilidad-gerencial-progress-v2";
const SYNC_KEY = "contabilidad-gerencial-sync-v1";
const GIST_FILENAME = "contabilidad-gerencial-progreso.json";

const state = {
  view: "dashboard",
  selectedUnit: "ut23",
  selectedLesson: "ut23-l1",
  selectedExercise: DATA.guidedExercises[0].id,
  selectedRealExam: DATA.realExams[0].id,
  realExamAnswers: {},
  realExamFinished: false,
  exerciseStep: 0,
  quizIndex: 0,
  quizUnit: "all",
  quizAnswers: {},
  examQuestions: [],
  examAnswers: {},
  examFinished: false,
};

const progress = loadProgress();
const syncState = loadSyncState();
const viewEl = document.querySelector("#view");
const viewTitle = document.querySelector("#viewTitle");

function loadProgress() {
  const fallback = {
    seenLessons: [],
    completedExercises: [],
    quizCorrect: 0,
    quizTotal: 0,
    examRuns: [],
    realExamRuns: [],
    questionAttempts: [],
  };
  try {
    return { ...fallback, ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}) };
  } catch {
    return fallback;
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  renderProgress();
}

function loadSyncState() {
  const fallback = {
    token: "",
    gistId: "",
    lastSync: "",
    status: "",
  };
  try {
    return { ...fallback, ...(JSON.parse(localStorage.getItem(SYNC_KEY)) || {}) };
  } catch {
    return fallback;
  }
}

function saveSyncState() {
  localStorage.setItem(SYNC_KEY, JSON.stringify(syncState));
}

function normalizeProgress(value = {}) {
  const fallback = loadProgress();
  return {
    seenLessons: Array.isArray(value.seenLessons) ? value.seenLessons : fallback.seenLessons,
    completedExercises: Array.isArray(value.completedExercises) ? value.completedExercises : fallback.completedExercises,
    quizCorrect: Number(value.quizCorrect) || 0,
    quizTotal: Number(value.quizTotal) || 0,
    examRuns: Array.isArray(value.examRuns) ? value.examRuns : [],
    realExamRuns: Array.isArray(value.realExamRuns) ? value.realExamRuns : [],
    questionAttempts: Array.isArray(value.questionAttempts) ? value.questionAttempts : [],
  };
}

function uniqueBy(items, keyFn) {
  const seen = new Set();
  return items.filter((item) => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function mergeProgress(local, remote) {
  const safeRemote = normalizeProgress(remote);
  return {
    seenLessons: [...new Set([...(local.seenLessons || []), ...safeRemote.seenLessons])],
    completedExercises: [...new Set([...(local.completedExercises || []), ...safeRemote.completedExercises])],
    quizCorrect: Math.max(Number(local.quizCorrect) || 0, Number(safeRemote.quizCorrect) || 0),
    quizTotal: Math.max(Number(local.quizTotal) || 0, Number(safeRemote.quizTotal) || 0),
    examRuns: uniqueBy([...(local.examRuns || []), ...safeRemote.examRuns], (item) => `${item.date}-${item.score}`),
    realExamRuns: uniqueBy([...(local.realExamRuns || []), ...safeRemote.realExamRuns], (item) => `${item.date}-${item.title}-${item.score}`),
    questionAttempts: uniqueBy([...(local.questionAttempts || []), ...safeRemote.questionAttempts], (item) => `${item.date}-${item.id}-${item.source}`),
  };
}

function syncStatus(message, type = "info") {
  syncState.status = message;
  syncState.statusType = type;
  saveSyncState();
  if (state.view === "sync") renderSync();
}

function uniquePush(list, item) {
  if (!list.includes(item)) list.push(item);
}

function unitLessons(unit) {
  return (unit.topics || []).flatMap((topic) => topic.lessons || []);
}

function findLessonContext(lessonId = state.selectedLesson) {
  for (const unit of DATA.units) {
    for (const topic of unit.topics || []) {
      const lesson = (topic.lessons || []).find((item) => item.id === lessonId);
      if (lesson) return { unit, topic, lesson };
    }
  }
  const unit = DATA.units.find((item) => item.id === state.selectedUnit) || DATA.units[0];
  const topic = unit.topics[0];
  return { unit, topic, lesson: topic.lessons[0] };
}

function relatedDeepDives(unit, lessonOrId) {
  const lesson = typeof lessonOrId === "object" ? lessonOrId : null;
  const lessonId = lesson ? lesson.id : lessonOrId;
  const map = {
    "ut1-l1": [0], "ut1-l2": [0], "ut1-l3": [1], "ut1-l4": [1],
    "ut1-l5": [2], "ut1-l6": [3],
    "ut23-l1": [0], "ut23-l2": [0], "ut23-l3": [1], "ut23-l4": [2],
    "ut23-l5": [3], "ut23-l6": [1, 2, 3], "ut23-l7": [4], "ut23-l8": [4],
    "ut23-l9": [4], "ut23-l10": [5], "ut23-l11": [5], "ut23-l12": [5],
    "ut3-l1": [0], "ut3-l2": [0], "ut3-l3": [1], "ut3-l4": [2],
    "ut3-l5": [3], "ut3-l6": [4],
    "ut4-l1": [0], "ut4-l2": [0], "ut4-l3": [1, 2], "ut4-l4": [1, 2],
    "ut4-l5": [2], "ut4-l6": [3], "ut4-l7": [3], "ut4-l8": [4],
    "ut4-l9": [5],
  };
  const dives = unit.deepDives || [];
  if (lesson && Array.isArray(lesson.deepDives) && lesson.deepDives.length) return lesson.deepDives;
  if (!Object.prototype.hasOwnProperty.call(map, lessonId)) {
    return lessonId && lessonId.includes("-audit-") ? [] : dives;
  }
  const indexes = map[lessonId];
  return indexes.map((index) => dives[index]).filter(Boolean);
}

function renderDevelopmentSections(unit, lesson) {
  const mappedDives = relatedDeepDives(unit, lesson).map((section) => `
    <section class="deep-dive">
      <h3>${section.title}</h3>
      ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      ${section.examTip ? `<div class="exam-note">${section.examTip}</div>` : ""}
    </section>
  `).join("");
  if (mappedDives) return mappedDives;
  if (!lesson.id.includes("-audit-")) return `<p>No hay desarrollo ampliado para este punto todavia.</p>`;

  const formulaDetails = lesson.formulas && lesson.formulas.length
    ? `<p><strong>Formulas del tema:</strong> ${lesson.formulas.map((formula) => `${formula.label}: ${formula.value}`).join(" | ")}</p>`
    : "";
  const controlDetails = lesson.controlQuestions && lesson.controlQuestions.length
    ? `<p><strong>Preguntas de control:</strong> ${lesson.controlQuestions.join(" ")}</p>`
    : "";
  return `
    <section class="deep-dive audit-development">
      <h3>${lesson.title}</h3>
      <p>${lesson.body}</p>
      <p>${lesson.tutorExtended || lesson.tutor}</p>
      ${formulaDetails}
      <p><strong>Conexion con ejercicios:</strong> ${lesson.exerciseConnection || "Usalo para resolver casos integradores y preguntas reales."}</p>
      <p><strong>Como lo toman en examen:</strong> ${lesson.examUse || "Suelen pedir el calculo y la interpretacion del resultado."}</p>
      ${controlDetails}
    </section>
  `;
}

function renderSyllabus(unit, activeLessonId = "") {
  return (unit.topics || []).map((topic) => {
    const lessons = (topic.lessons || []).map((lesson) => {
      const seen = progress.seenLessons.includes(lesson.id);
      const active = activeLessonId === lesson.id;
      return `
        <button class="syllabus-link ${active ? "active" : ""}" data-action="open-topic-page" data-unit="${unit.id}" data-lesson="${lesson.id}">
          <span>${lesson.title}</span>
          ${seen ? `<small>Visto</small>` : `<small>Leer</small>`}
        </button>
      `;
    }).join("");
    return `
      <details class="syllabus-group" open>
        <summary>${topic.title}</summary>
        <div class="syllabus-items">${lessons}</div>
      </details>
    `;
  }).join("");
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    const activeView = view === "topicPage" ? "units" : view;
    btn.classList.toggle("active", btn.dataset.view === activeView);
  });
  render();
}

function titleForView(view) {
  return {
    dashboard: "Plan de estudio",
    units: "Unidades tematicas",
    practice: "Practica guiada",
    quiz: "Multiple opcion",
    exam: "Simulacro de examen",
    topicPage: "Lectura por subtema",
    realExam: "Simulacros reales",
    analytics: "Medicion de avance",
    sync: "Sincronizacion",
    sources: "Material fuente",
  }[view];
}

function daysToExam() {
  const today = new Date();
  const exam = new Date(DATA.examDate);
  const diff = exam.getTime() - today.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function totalTrackableItems() {
  return DATA.units.reduce((sum, unit) => sum + unitLessons(unit).length, 0) + DATA.guidedExercises.length;
}

function completedTrackableItems() {
  return progress.seenLessons.length + progress.completedExercises.length;
}

function renderProgress() {
  const total = totalTrackableItems();
  const pct = total ? Math.round((completedTrackableItems() / total) * 100) : 0;
  document.querySelector("#progressPercent").textContent = `${pct}%`;
  document.querySelector("#progressBar").style.width = `${pct}%`;
  const hint = pct === 0
    ? "Todavia no marcaste temas como vistos."
    : `${completedTrackableItems()} de ${total} bloques completados.`;
  document.querySelector("#progressHint").textContent = hint;
}

function card(content, extraClass = "") {
  return `<article class="card ${extraClass}">${content}</article>`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function unitLabel(unitId) {
  return (DATA.units.find((unit) => unit.id === unitId) || {}).short || "General";
}

function recordQuestionAttempt(question, selected, source) {
  progress.questionAttempts.push({
    id: question.id,
    unit: question.unit,
    prompt: question.prompt,
    correct: isQuestionCorrect(question, selected),
    source,
    date: new Date().toISOString(),
  });
}

function parseAnswerNumber(value) {
  if (value === undefined || value === null || value === "") return NaN;
  const raw = String(value).trim().replace(/\s/g, "");
  const normalized = raw.includes(",")
    ? raw.replace(/\./g, "").replace(",", ".")
    : raw;
  return Number(normalized);
}

function isQuestionCorrect(question, selected) {
  if (question.type === "numeric") {
    const value = parseAnswerNumber(selected);
    const tolerance = question.tolerance ?? 0.01;
    return Number.isFinite(value) && Math.abs(value - question.answer) <= tolerance;
  }
  return Number(selected) === question.answer;
}

function formatCorrectAnswer(question) {
  if (question.type === "numeric") return String(question.answer).replace(".", ",");
  return question.options[question.answer];
}

function renderBulletList(items = []) {
  if (!items.length) return "";
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderStudyBox(title, content, extraClass = "") {
  if (!content || (Array.isArray(content) && !content.length)) return "";
  const body = Array.isArray(content)
    ? renderBulletList(content)
    : String(content).trim().startsWith("<") ? content : `<p>${content}</p>`;
  return `<section class="study-box ${extraClass}"><h4>${title}</h4>${body}</section>`;
}

function unitPerformance() {
  return DATA.units.map((unit) => {
    const attempts = progress.questionAttempts.filter((item) => item.unit === unit.id);
    const correct = attempts.filter((item) => item.correct).length;
    const lessons = unitLessons(unit);
    const seen = lessons.filter((lesson) => progress.seenLessons.includes(lesson.id)).length;
    const exercises = DATA.guidedExercises.filter((exercise) => exercise.unit === unit.id);
    const completed = exercises.filter((exercise) => progress.completedExercises.includes(exercise.id)).length;
    return {
      unit,
      attempts,
      correct,
      accuracy: attempts.length ? Math.round((correct / attempts.length) * 100) : null,
      seen,
      lessons: lessons.length,
      completed,
      exercises: exercises.length,
    };
  });
}

function renderDashboard() {
  const completedLessons = progress.seenLessons.length;
  const completedExercises = progress.completedExercises.length;
  const bestExam = progress.examRuns.length ? Math.max(...progress.examRuns.map((run) => run.score)) : 0;
  const next = DATA.units.find((unit) => unitLessons(unit).some((lesson) => !progress.seenLessons.includes(lesson.id))) || DATA.units[1];

  viewEl.innerHTML = `
    <div class="grid three">
      ${card(`<div class="metric"><span>Dias reales de estudio</span><strong>${Math.ceil(daysToExam() / 2)}</strong></div><p>Como preparas otra materia en paralelo, el plan asume aproximadamente la mitad del tiempo disponible.</p>`)}
      ${card(`<div class="metric"><span>Temas vistos</span><strong>${completedLessons}</strong></div><p>Marca cada tema solo cuando puedas explicarlo sin mirar el PDF.</p>`)}
      ${card(`<div class="metric"><span>Mejor simulacro</span><strong>${bestExam}%</strong></div><p>Objetivo sugerido antes del examen: dos simulacros de 40 preguntas por encima de 80%.</p>`)}
    </div>

    ${card(`
      <h3>Ruta sugerida</h3>
      <div class="pill-row">
        <span class="pill required">1. Yardin obligatorio</span>
        <span class="pill">2. Marginal y equilibrio</span>
        <span class="pill">3. Diferencia de utilidades</span>
        <span class="pill">4. Presupuesto y desvios</span>
      </div>
      <p>Primero estudia UT2/3 porque concentra teoria obligatoria y practica numerica. Despues fija UT3 con inventarios y cerra con UT4, que exige ordenar ciclos y estados.</p>
      <button class="primary-btn" data-action="open-unit" data-unit="${next.id}">Continuar con ${next.short}</button>
    `)}

    <div class="grid two">
      ${card(`
        <h3>Metodo de uso</h3>
        <p>Lee cada subtema en modo tutor, resuelve un ejercicio guiado y despues usa multiple opcion. El simulacro largo mezcla todo y conviene hacerlo cuando ya tengas una primera vuelta completa.</p>
      `)}
      ${card(`
        <h3>Formulas que tienen que salir solas</h3>
        <div class="formula">mc = precio - CVu</div>
        <div class="formula">Qe = CF / mc</div>
        <div class="formula">Ve = CF / rc</div>
        <div class="formula">Compras = consumo + SF deseado - SI</div>
      `)}
    </div>
  `;
}

function renderAnalytics() {
  const stats = unitPerformance();
  const totalLessons = DATA.units.reduce((sum, unit) => sum + unitLessons(unit).length, 0);
  const totalExercises = DATA.guidedExercises.length;
  const readPct = totalLessons ? Math.round((progress.seenLessons.length / totalLessons) * 100) : 0;
  const exercisePct = totalExercises ? Math.round((progress.completedExercises.length / totalExercises) * 100) : 0;
  const totalAttempts = progress.questionAttempts.length;
  const totalCorrect = progress.questionAttempts.filter((item) => item.correct).length;
  const accuracy = totalAttempts ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
  const weakUnits = stats
    .filter((item) => item.attempts.length >= 2 && item.accuracy < 70)
    .sort((a, b) => a.accuracy - b.accuracy);
  const missingLessons = DATA.units.flatMap((unit) =>
    unitLessons(unit)
      .filter((lesson) => !progress.seenLessons.includes(lesson.id))
      .map((lesson) => ({ unit, lesson }))
  );
  const missingExercises = DATA.guidedExercises.filter((exercise) => !progress.completedExercises.includes(exercise.id));
  const recentMistakes = [...progress.questionAttempts].reverse().filter((item) => !item.correct).slice(0, 8);
  const lastRealExam = progress.realExamRuns.length ? progress.realExamRuns[progress.realExamRuns.length - 1] : null;
  const unitRows = stats.map((item) => {
    const readWidth = item.lessons ? Math.round((item.seen / item.lessons) * 100) : 0;
    const exerciseWidth = item.exercises ? Math.round((item.completed / item.exercises) * 100) : 0;
    const accuracyWidth = item.accuracy ?? 0;
    return `
      <div class="kpi-row">
        <div>
          <strong>${item.unit.short}</strong>
          <small>${item.unit.title}</small>
        </div>
        <div class="mini-bars">
          <label>Lectura ${item.seen}/${item.lessons}<span><i style="width:${readWidth}%"></i></span></label>
          <label>Ejercicios ${item.completed}/${item.exercises}<span><i style="width:${exerciseWidth}%"></i></span></label>
          <label>Preguntas ${item.accuracy === null ? "sin datos" : `${item.accuracy}%`}<span><i style="width:${accuracyWidth}%"></i></span></label>
        </div>
      </div>
    `;
  }).join("");
  const focus = weakUnits.length
    ? weakUnits.map((item) => `<span class="pill required">${item.unit.short}: ${item.accuracy}%</span>`).join("")
    : `<span class="pill">Sin focos criticos aun</span>`;

  viewEl.innerHTML = `
    <div class="grid four">
      ${card(`<div class="metric"><span>Lectura</span><strong>${readPct}%</strong></div><p>${progress.seenLessons.length} de ${totalLessons} subtemas vistos.</p>`)}
      ${card(`<div class="metric"><span>Practica</span><strong>${exercisePct}%</strong></div><p>${progress.completedExercises.length} de ${totalExercises} ejercicios guiados completados.</p>`)}
      ${card(`<div class="metric"><span>Precision</span><strong>${accuracy}%</strong></div><p>${totalCorrect} correctas de ${totalAttempts} respuestas registradas.</p>`)}
      ${card(`<div class="metric"><span>Ultimo real</span><strong>${lastRealExam ? `${lastRealExam.score}%` : "--"}</strong></div><p>${lastRealExam ? lastRealExam.title : "Todavia no rendiste un examen real en la app."}</p>`)}
    </div>

    ${card(`
      <h3>Mapa de avance por unidad</h3>
      <div class="kpi-list">${unitRows}</div>
    `)}

    <div class="grid two">
      ${card(`
        <h3>Donde enfocarte ahora</h3>
        <div class="pill-row">${focus}</div>
        <p>${weakUnits.length ? "Prioriza estas unidades: tienen suficientes respuestas registradas y precision baja." : "A medida que respondas quizzes y examenes reales, aca van a aparecer tus zonas flojas."}</p>
      `)}
      ${card(`
        <h3>Te falta leer</h3>
        <div class="study-list">
          ${missingLessons.slice(0, 8).map((item) => `<button class="study-item" data-action="open-topic-page" data-unit="${item.unit.id}" data-lesson="${item.lesson.id}"><strong>${item.unit.short}</strong><span>${item.lesson.title}</span></button>`).join("") || "<p>Lectura completa.</p>"}
        </div>
      `)}
    </div>

    <div class="grid two">
      ${card(`
        <h3>Ejercicios pendientes</h3>
        <div class="study-list">
          ${missingExercises.map((exercise) => `<button class="study-item" data-action="select-exercise" data-exercise="${exercise.id}"><strong>${unitLabel(exercise.unit)}</strong><span>${exercise.title}</span></button>`).join("") || "<p>Ejercicios guiados completos.</p>"}
        </div>
      `)}
      ${card(`
        <h3>Errores recientes</h3>
        <div class="study-list">
          ${recentMistakes.map((item) => `<div class="study-item passive"><strong>${unitLabel(item.unit)}</strong><span>${item.prompt}</span><small>${item.source}</small></div>`).join("") || "<p>Todavia no hay errores registrados.</p>"}
        </div>
      `)}
    </div>
  `;
}

function renderUnits() {
  const tabs = DATA.units.map((unit) => `
    <button class="tab ${state.selectedUnit === unit.id ? "active" : ""}" data-action="select-unit" data-unit="${unit.id}">
      ${unit.short}
    </button>
  `).join("");
  const unit = DATA.units.find((item) => item.id === state.selectedUnit);
  const formulas = unit.formulas.length
    ? unit.formulas.map((formula) => `<div class="formula"><strong>${formula.label}:</strong> ${formula.value}</div>`).join("")
    : `<p>No hay formulas centrales en esta unidad; concentra el estudio en conceptos y diferencias.</p>`;
  const firstLesson = unitLessons(unit).find((lesson) => !progress.seenLessons.includes(lesson.id)) || unitLessons(unit)[0];

  viewEl.innerHTML = `
    <div class="tabs">${tabs}</div>
    ${card(`
      <div class="unit-card">
        <div>
          <h3>${unit.title}</h3>
          <p>${unit.summary}</p>
          <div class="pill-row">
            ${unit.required ? `<span class="pill required">Lectura obligatoria incluida</span>` : ""}
            ${unit.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
          </div>
        </div>
        <button class="primary-btn" data-action="practice-unit" data-unit="${unit.id}">Practicar</button>
      </div>
    `)}
    <div class="grid two wide-left">
      ${card(`
        <div class="section-heading">
          <div>
            <h3>Temario clickeable</h3>
            <p>Abri cada subtema como una pagina propia, con tutor y desarrollo profundo unificados.</p>
          </div>
          <button class="primary-btn" data-action="open-topic-page" data-unit="${unit.id}" data-lesson="${firstLesson.id}">Empezar</button>
        </div>
        ${renderSyllabus(unit)}
      `)}
      ${card(`
        <h3>Formulas y alertas</h3>
        ${formulas}
        <div class="exam-note">Consejo: estudia una pagina de subtema, marcala como vista y recien despues pasa a practica o multiple opcion.</div>
      `)}
    </div>
  `;
}

function renderTopicPage() {
  const { unit, topic, lesson } = findLessonContext();
  state.selectedUnit = unit.id;
  state.selectedLesson = lesson.id;
  const seen = progress.seenLessons.includes(lesson.id);
  const tabs = DATA.units.map((item) => `
    <button class="tab ${unit.id === item.id ? "active" : ""}" data-action="select-unit" data-unit="${item.id}">
      ${item.short}
    </button>
  `).join("");
  const development = renderDevelopmentSections(unit, lesson);
  const formulas = unit.formulas.length
    ? unit.formulas.map((formula) => `<div class="formula"><strong>${formula.label}:</strong> ${formula.value}</div>`).join("")
    : `<p>Este subtema es principalmente conceptual.</p>`;
  const lessonFormulaList = lesson.formulas && lesson.formulas.length
    ? lesson.formulas.map((formula) => `<div class="formula"><strong>${formula.label}:</strong> ${formula.value}</div>`).join("")
    : "";
  const sourceList = lesson.sources && lesson.sources.length
    ? `<div class="source-tags">${lesson.sources.map((source) => `<span class="pill">${source}</span>`).join("")}</div>`
    : "";

  viewEl.innerHTML = `
    <div class="tabs">${tabs}</div>
    <div class="topic-page-layout">
      ${card(`
        <button class="plain-btn back-btn" data-action="back-to-unit">Volver al temario</button>
        <h3>Temario de ${unit.short}</h3>
        ${renderSyllabus(unit, lesson.id)}
      `, "syllabus-card")}
      <article class="card reading-card topic-reading">
        <div class="breadcrumb">${unit.short} / ${topic.title}</div>
        <h3>${lesson.title}</h3>
        <p class="lead-text">${lesson.body}</p>
        <div class="feedback">${lesson.tutor}</div>
        ${sourceList}
        <div class="topic-actions">
          <button class="${seen ? "plain-btn" : "primary-btn"}" data-action="mark-lesson" data-lesson="${lesson.id}">
            ${seen ? "Visto" : "Marcar como visto"}
          </button>
          <button class="plain-btn" data-action="practice-unit" data-unit="${unit.id}">Practicar esta unidad</button>
        </div>
        <section class="formula-panel">
          <h4>Formulas y recordatorios de la unidad</h4>
          ${formulas}
        </section>
        <div class="study-grid">
          ${renderStudyBox("Explicacion estilo tutor", lesson.tutorExtended)}
          ${renderStudyBox("Conceptos clave", lesson.keyConcepts)}
          ${renderStudyBox("Formulas propias del subtema", lessonFormulaList)}
          ${renderStudyBox("Errores tipicos", lesson.typicalMistakes, "warning")}
          ${renderStudyBox("Conexion con ejercicios", lesson.exerciseConnection)}
          ${renderStudyBox("Mini preguntas de control", lesson.controlQuestions)}
          ${renderStudyBox("Como lo toman en examen", lesson.examUse, "exam")}
        </div>
        <h3>Desarrollo teorico del subtema</h3>
        ${development}
      </article>
    </div>
  `;
}

function currentExercise() {
  return DATA.guidedExercises.find((exercise) => exercise.id === state.selectedExercise);
}

function renderPractice() {
  const exercise = currentExercise();
  const step = exercise.steps[state.exerciseStep];
  const done = progress.completedExercises.includes(exercise.id);
  const tabs = DATA.guidedExercises.map((item) => `
    <button class="tab ${state.selectedExercise === item.id ? "active" : ""}" data-action="select-exercise" data-exercise="${item.id}">
      <small>${unitLabel(item.unit)}</small>${item.title}
    </button>
  `).join("");
  const steps = exercise.steps.map((item, index) => `
    <div class="step ${index === state.exerciseStep ? "active" : ""}">
      <strong>Paso ${index + 1}</strong>
      <p>${item.prompt}</p>
    </div>
  `).join("");

  viewEl.innerHTML = `
    <div class="tabs">${tabs}</div>
    <div class="exercise-layout">
      ${card(`
        <h3>${exercise.title}</h3>
        <div class="pill-row">
          <span class="pill">${exercise.difficulty}</span>
          <span class="pill">${exercise.source}</span>
          ${done ? `<span class="pill required">Completado</span>` : ""}
        </div>
        <p>${exercise.intro}</p>
        ${steps}
      `)}
      ${card(`
        <h3>Paso ${state.exerciseStep + 1} de ${exercise.steps.length}</h3>
        <p>${step.prompt}</p>
        <div class="input-row">
          <input id="exerciseAnswer" inputmode="decimal" placeholder="Escribi tu respuesta" />
          <button class="primary-btn" data-action="check-exercise">Corregir</button>
        </div>
        <div id="exerciseFeedback"></div>
        <div class="quiz-footer">
          <button class="plain-btn" data-action="prev-step">Anterior</button>
          <button class="plain-btn" data-action="show-step">Ver explicacion</button>
          <button class="plain-btn" data-action="next-step">Siguiente</button>
        </div>
      `)}
    </div>
  `;
}

function filteredQuestions() {
  return state.quizUnit === "all"
    ? DATA.questions
    : DATA.questions.filter((question) => question.unit === state.quizUnit);
}

function renderQuiz() {
  const questions = filteredQuestions();
  if (state.quizIndex >= questions.length) state.quizIndex = 0;
  const question = questions[state.quizIndex];
  const selected = state.quizAnswers[question.id];
  const unitOptions = [`<option value="all">Todas las unidades</option>`]
    .concat(DATA.units.map((unit) => `<option value="${unit.id}" ${state.quizUnit === unit.id ? "selected" : ""}>${unit.short}</option>`))
    .join("");
  const options = question.options.map((option, index) => {
    let cls = "option";
    if (selected !== undefined) {
      if (index === question.answer) cls += " correct";
      if (index === selected && selected !== question.answer) cls += " incorrect";
    }
    return `<button class="${cls}" data-action="answer-quiz" data-answer="${index}">${option}</button>`;
  }).join("");
  const feedback = selected === undefined ? "" : `
    <div class="feedback ${selected === question.answer ? "ok" : "bad"}">
      ${selected === question.answer ? "Bien." : "Revisa este punto."} ${question.explanation}
    </div>
  `;

  viewEl.innerHTML = `
    ${card(`
      <div class="quiz-footer">
        <h3>Banco de preguntas</h3>
        <select id="quizUnitSelect">${unitOptions}</select>
      </div>
      <p>Pregunta ${state.quizIndex + 1} de ${questions.length}</p>
      <h4>${question.prompt}</h4>
      <div class="option-list">${options}</div>
      ${feedback}
      <div class="quiz-footer">
        <button class="plain-btn" data-action="prev-quiz">Anterior</button>
        <button class="plain-btn" data-action="next-quiz">Siguiente</button>
      </div>
    `)}
  `;
}

function startExam() {
  const shuffled = [...DATA.questions].sort(() => Math.random() - 0.5);
  state.examQuestions = shuffled.slice(0, 40);
  state.examAnswers = {};
  state.examFinished = false;
}

function renderExam() {
  if (!state.examQuestions.length) {
    viewEl.innerHTML = `
      ${card(`
        <h3>Simulacro integral</h3>
        <p>Mezcla las 40 preguntas del banco y corrige al final. Usalo como diagnostico serio: si fallas una pregunta, volve al subtema de esa unidad y resolvelo de nuevo.</p>
        <button class="primary-btn" data-action="start-exam">Iniciar simulacro de 40 preguntas</button>
      `)}
    `;
    return;
  }

  if (state.examFinished) {
    const correct = state.examQuestions.filter((question) => state.examAnswers[question.id] === question.answer).length;
    const score = Math.round((correct / state.examQuestions.length) * 100);
    const review = state.examQuestions.map((question, index) => {
      const selected = state.examAnswers[question.id];
      return `
        <div class="step ${selected === question.answer ? "active" : ""}">
          <strong>${index + 1}. ${selected === question.answer ? "Correcta" : "Para repasar"}</strong>
          <p>${question.prompt}</p>
          <p>${question.explanation}</p>
        </div>
      `;
    }).join("");
    viewEl.innerHTML = `
      ${card(`
        <h3>Resultado: ${score}%</h3>
        <p>${correct} correctas de ${state.examQuestions.length}. ${score >= 80 ? "Buen nivel para seguir con simulacros." : "Conviene volver a teoria y practica guiada antes del proximo simulacro."}</p>
        <button class="primary-btn" data-action="start-exam">Nuevo simulacro</button>
      `)}
      ${card(`<h3>Correccion</h3>${review}`)}
    `;
    return;
  }

  const answered = Object.keys(state.examAnswers).length;
  const questions = state.examQuestions.map((question, index) => {
    const unit = DATA.units.find((item) => item.id === question.unit);
    const options = question.options.map((option, optionIndex) => `
      <button class="option ${state.examAnswers[question.id] === optionIndex ? "selected" : ""}" data-action="answer-exam" data-question="${question.id}" data-answer="${optionIndex}">
        ${option}
      </button>
    `).join("");
    return `
      <section class="lesson">
        <span class="pill">${unit ? unit.short : "General"}</span>
        <h4>${index + 1}. ${question.prompt}</h4>
        <div class="option-list">${options}</div>
      </section>
    `;
  }).join("");

  viewEl.innerHTML = `
    ${card(`
      <div class="quiz-footer sticky-exam">
        <h3>Simulacro en curso</h3>
        <span class="pill">${answered}/${state.examQuestions.length} respondidas</span>
      </div>
      ${questions}
      <button class="primary-btn" data-action="finish-exam" ${answered < state.examQuestions.length ? "disabled" : ""}>Finalizar y corregir</button>
    `)}
  `;
}

function renderRealExam() {
  const exams = DATA.realExamSets || [];
  const tabs = exams.map((exam) => `
    <button class="tab ${state.selectedRealExam === exam.id ? "active" : ""}" data-action="select-real-exam" data-exam="${exam.id}">
      ${exam.title.replace("Examen ", "")}
    </button>
  `).join("");
  const exam = exams.find((item) => item.id === state.selectedRealExam) || exams[0];
  if (!exam) {
    viewEl.innerHTML = `${card(`<h3>Examenes reales</h3><p>No hay examenes cargados todavia.</p>`)}`;
    return;
  }
  const answered = Object.keys(state.realExamAnswers).length;

  if (state.realExamFinished) {
    const correct = exam.questions.filter((question) => isQuestionCorrect(question, state.realExamAnswers[question.id])).length;
    const score = Math.round((correct / exam.questions.length) * 100);
    const review = exam.questions.map((question, index) => {
      const selected = state.realExamAnswers[question.id];
      const ok = isQuestionCorrect(question, selected);
      return `
        <div class="step ${ok ? "active" : ""}">
          <strong>${index + 1}. ${ok ? "Correcta" : "Para repasar"} - ${unitLabel(question.unit)}</strong>
          <p>${question.prompt}</p>
          <p><strong>Respuesta correcta:</strong> ${formatCorrectAnswer(question)}</p>
          <p>${question.explanation}</p>
        </div>
      `;
    }).join("");
    viewEl.innerHTML = `
      <div class="tabs">${tabs}</div>
      ${card(`
        <h3>${exam.title}: ${score}%</h3>
        <p>${correct} correctas de ${exam.questions.length}. Este resultado queda incluido en el tablero de avance.</p>
        <button class="primary-btn" data-action="reset-real-exam">Volver a rendir</button>
      `)}
      ${card(`<h3>Correccion del examen</h3>${review}`)}
    `;
    return;
  }

  const questions = exam.questions.map((question, index) => {
    const answerControl = question.type === "numeric"
      ? `
        <div class="numeric-answer">
          <input data-real-number="${question.id}" inputmode="decimal" placeholder="Escribi tu respuesta numerica" value="${state.realExamAnswers[question.id] || ""}" />
          <small>Usa coma o punto decimal. No hace falta escribir $ ni %.</small>
        </div>
      `
      : `<div class="option-list">${question.options.map((option, optionIndex) => `
          <button class="option ${state.realExamAnswers[question.id] === optionIndex ? "selected" : ""}" data-action="answer-real-exam" data-question="${question.id}" data-answer="${optionIndex}">
            ${option}
          </button>
        `).join("")}</div>`;
    return `
      <section class="lesson">
        <span class="pill">${unitLabel(question.unit)}</span>
        <h4>${index + 1}. ${question.prompt}</h4>
        ${question.context ? `<div class="case-context">${question.context}</div>` : ""}
        ${answerControl}
      </section>
    `;
  }).join("");

  viewEl.innerHTML = `
    <div class="tabs">${tabs}</div>
    ${card(`
      <h3>${exam.title}</h3>
      <p>${exam.meta}</p>
      <div class="quiz-footer sticky-exam">
        <span class="pill">${answered}/${exam.questions.length} respondidas</span>
        <button class="primary-btn" data-action="finish-real-exam">Finalizar y corregir</button>
      </div>
      ${questions}
    `)}
  `;
}

function renderSources() {
  const sources = DATA.sources.map((source) => `
    <div class="source-item">
      <div>
        <strong>${source.name}</strong>
        <div><small>${source.unit} - ${source.type}${source.pages ? ` - ${source.pages} pags.` : ""}</small></div>
      </div>
      ${source.required ? `<span class="pill required">Obligatorio</span>` : `<span class="pill">Fuente</span>`}
    </div>
  `).join("");
  const pdfMap = (DATA.pdfMap || []).map((item) => `
    <div class="source-item">
      <div>
        <strong>${item.pdf}</strong>
        <div><small>${item.units.join(", ")} - ${item.role}</small></div>
      </div>
      <span class="pill required">Mapeado</span>
    </div>
  `).join("");
  viewEl.innerHTML = `
    ${card(`
      <h3>Material procesado</h3>
      <p>La app esta armada a partir del material teorico, practico y examenes que compartiste. El articulo obligatorio de Yardin esta integrado en UT2/3.</p>
      <div class="source-list">${sources}</div>
    `)}
    ${pdfMap ? card(`
      <h3>Mapa PDF a unidades</h3>
      <p>Este mapa guia la ampliacion por tandas: cada PDF alimenta las paginas teoricas, la practica y las alertas de examen de su unidad.</p>
      <div class="source-list">${pdfMap}</div>
    `) : ""}
  `;
}

function renderSync() {
  const lastSync = syncState.lastSync
    ? new Date(syncState.lastSync).toLocaleString("es-UY")
    : "Todavia no sincronizaste.";
  const tokenLabel = syncState.token ? "Token guardado en este navegador" : "Sin token guardado";
  const gistLabel = syncState.gistId ? escapeHtml(syncState.gistId) : "Se creara automaticamente al subir por primera vez";
  const statusClass = syncState.statusType ? ` ${syncState.statusType}` : "";

  viewEl.innerHTML = `
    <div class="grid two wide-left">
      ${card(`
        <div class="section-heading">
          <div>
            <h3>Guardar avance en GitHub</h3>
            <p>Usa un Gist privado como archivo de progreso. Asi podes estudiar en PC y despues seguir desde el celular.</p>
          </div>
        </div>

        <div class="sync-form">
          <label>
            Token de GitHub
            <input id="githubTokenInput" type="password" autocomplete="off" placeholder="Pega aca tu token con permiso gist" value="${escapeHtml(syncState.token)}" />
          </label>
          <label>
            Gist ID opcional
            <input id="gistIdInput" autocomplete="off" placeholder="Solo si ya tenes uno creado" value="${escapeHtml(syncState.gistId)}" />
          </label>
          <div class="topic-actions">
            <button class="primary-btn" data-action="save-sync-settings">Guardar conexion</button>
            <button class="plain-btn" data-action="clear-sync-settings">Quitar token de este navegador</button>
          </div>
        </div>

        <div class="sync-actions">
          <button class="primary-btn" data-action="upload-progress">Subir progreso a GitHub</button>
          <button class="plain-btn" data-action="download-progress">Bajar progreso desde GitHub</button>
        </div>

        ${syncState.status ? `<div class="sync-status${statusClass}">${escapeHtml(syncState.status)}</div>` : ""}
      `)}

      ${card(`
        <h3>Estado</h3>
        <dl class="sync-meta">
          <div><dt>Conexion</dt><dd>${tokenLabel}</dd></div>
          <div><dt>Gist</dt><dd>${gistLabel}</dd></div>
          <div><dt>Ultima sincronizacion</dt><dd>${lastSync}</dd></div>
        </dl>
        <div class="note-box">
          <strong>Como usarlo en el celular</strong>
          <p>Abri la app, entra en Sincronizacion, pega el mismo token, guarda la conexion y toca "Bajar progreso desde GitHub".</p>
        </div>
        <div class="note-box soft">
          <strong>Permiso necesario</strong>
          <p>Al crear el token en GitHub, alcanza con darle permiso de <b>gist</b>. No lo pegues en chats ni lo subas al repositorio.</p>
        </div>
      `)}
    </div>
  `;
}

function progressPayload() {
  return JSON.stringify({
    app: "contabilidad-gerencial",
    version: 1,
    updatedAt: new Date().toISOString(),
    progress,
  }, null, 2);
}

async function gistRequest(path, options = {}) {
  if (!syncState.token) throw new Error("Primero guarda un token de GitHub.");
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${syncState.token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {}),
    },
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub respondio ${response.status}. ${text}`);
  }
  return response.json();
}

async function uploadProgressToGist() {
  syncStatus("Subiendo tu progreso a GitHub...", "info");
  const body = {
    description: "Progreso Contabilidad Gerencial",
    public: false,
    files: {
      [GIST_FILENAME]: {
        content: progressPayload(),
      },
    },
  };
  const gist = syncState.gistId
    ? await gistRequest(`/gists/${syncState.gistId}`, { method: "PATCH", body: JSON.stringify(body) })
    : await gistRequest("/gists", { method: "POST", body: JSON.stringify(body) });
  syncState.gistId = gist.id;
  syncState.lastSync = new Date().toISOString();
  syncStatus("Progreso subido correctamente. Ya podes bajarlo desde otro dispositivo.", "ok");
}

async function downloadProgressFromGist() {
  if (!syncState.gistId) throw new Error("Falta el Gist ID. Subi el progreso una vez o pega el ID del Gist.");
  syncStatus("Bajando progreso desde GitHub...", "info");
  const gist = await gistRequest(`/gists/${syncState.gistId}`);
  const file = gist.files && gist.files[GIST_FILENAME];
  if (!file || !file.content) throw new Error("No encontre el archivo de progreso dentro del Gist.");
  const payload = JSON.parse(file.content);
  const merged = mergeProgress(progress, payload.progress || payload);
  Object.assign(progress, merged);
  saveProgress();
  syncState.lastSync = new Date().toISOString();
  syncStatus("Progreso bajado y fusionado con este dispositivo.", "ok");
  render();
}

function render() {
  viewTitle.textContent = titleForView(state.view);
  document.querySelector("#daysLeft").textContent = daysToExam();
  renderProgress();
  if (state.view === "dashboard") renderDashboard();
  if (state.view === "units") renderUnits();
  if (state.view === "topicPage") renderTopicPage();
  if (state.view === "practice") renderPractice();
  if (state.view === "quiz") renderQuiz();
  if (state.view === "exam") renderExam();
  if (state.view === "realExam") renderRealExam();
  if (state.view === "analytics") renderAnalytics();
  if (state.view === "sync") renderSync();
  if (state.view === "sources") renderSources();
}

function checkExerciseAnswer() {
  const exercise = currentExercise();
  const step = exercise.steps[state.exerciseStep];
  const value = Number(String(document.querySelector("#exerciseAnswer").value).replace(",", "."));
  const ok = Math.abs(value - step.answer) <= step.tolerance;
  const feedback = document.querySelector("#exerciseFeedback");
  feedback.innerHTML = `<div class="feedback ${ok ? "ok" : "bad"}">${ok ? "Correcto." : "Todavia no."} ${step.explanation}</div>`;
  if (ok && state.exerciseStep === exercise.steps.length - 1) {
    uniquePush(progress.completedExercises, exercise.id);
    saveProgress();
  }
}

function showCurrentStepExplanation() {
  const exercise = currentExercise();
  const step = exercise.steps[state.exerciseStep];
  document.querySelector("#exerciseFeedback").innerHTML = `<div class="feedback">${step.explanation}</div>`;
}

function answerQuiz(answer) {
  const question = filteredQuestions()[state.quizIndex];
  if (state.quizAnswers[question.id] === undefined) {
    progress.quizTotal += 1;
    if (answer === question.answer) progress.quizCorrect += 1;
    recordQuestionAttempt(question, answer, "Banco multiple opcion");
  }
  state.quizAnswers[question.id] = answer;
  saveProgress();
  renderQuiz();
}

function finishExam() {
  const correct = state.examQuestions.filter((question) => state.examAnswers[question.id] === question.answer).length;
  const score = Math.round((correct / state.examQuestions.length) * 100);
  progress.examRuns.push({ date: new Date().toISOString(), score });
  state.examQuestions.forEach((question) => recordQuestionAttempt(question, state.examAnswers[question.id], "Simulacro integral"));
  saveProgress();
  state.examFinished = true;
  renderExam();
}

function finishRealExam() {
  const exams = DATA.realExamSets || [];
  const exam = exams.find((item) => item.id === state.selectedRealExam) || exams[0];
  const correct = exam.questions.filter((question) => isQuestionCorrect(question, state.realExamAnswers[question.id])).length;
  const score = Math.round((correct / exam.questions.length) * 100);
  progress.realExamRuns.push({ date: new Date().toISOString(), title: exam.title, score });
  exam.questions.forEach((question) => recordQuestionAttempt(question, state.realExamAnswers[question.id], exam.title));
  saveProgress();
  state.realExamFinished = true;
  renderRealExam();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action], .nav-btn");
  if (!target) return;

  if (target.classList.contains("nav-btn")) {
    setView(target.dataset.view);
    return;
  }

  const action = target.dataset.action;
  if (action === "open-unit" || action === "select-unit") {
    state.selectedUnit = target.dataset.unit;
    setView("units");
    return;
  }
  if (action === "open-topic-page") {
    state.selectedUnit = target.dataset.unit;
    state.selectedLesson = target.dataset.lesson;
    setView("topicPage");
    requestAnimationFrame(() => {
      document.querySelector(".topic-reading")?.scrollIntoView({ block: "start", behavior: "smooth" });
    });
    return;
  }
  if (action === "back-to-unit") {
    setView("units");
    return;
  }
  if (action === "practice-unit") {
    const exercise = DATA.guidedExercises.find((item) => item.unit === target.dataset.unit) || DATA.guidedExercises[0];
    state.selectedExercise = exercise.id;
    state.exerciseStep = 0;
    setView("practice");
    return;
  }
  if (action === "mark-lesson") {
    uniquePush(progress.seenLessons, target.dataset.lesson);
    saveProgress();
    if (state.view === "topicPage") renderTopicPage();
    else renderUnits();
    return;
  }
  if (action === "select-exercise") {
    state.selectedExercise = target.dataset.exercise;
    state.exerciseStep = 0;
    setView("practice");
    return;
  }
  if (action === "select-real-exam") {
    state.selectedRealExam = target.dataset.exam;
    state.realExamAnswers = {};
    state.realExamFinished = false;
    renderRealExam();
    return;
  }
  if (action === "check-exercise") checkExerciseAnswer();
  if (action === "show-step") showCurrentStepExplanation();
  if (action === "next-step") {
    const exercise = currentExercise();
    state.exerciseStep = Math.min(exercise.steps.length - 1, state.exerciseStep + 1);
    renderPractice();
  }
  if (action === "prev-step") {
    state.exerciseStep = Math.max(0, state.exerciseStep - 1);
    renderPractice();
  }
  if (action === "answer-quiz") answerQuiz(Number(target.dataset.answer));
  if (action === "next-quiz") {
    state.quizIndex = (state.quizIndex + 1) % filteredQuestions().length;
    renderQuiz();
  }
  if (action === "prev-quiz") {
    state.quizIndex = (state.quizIndex - 1 + filteredQuestions().length) % filteredQuestions().length;
    renderQuiz();
  }
  if (action === "start-exam") {
    startExam();
    renderExam();
  }
  if (action === "answer-exam") {
    state.examAnswers[target.dataset.question] = Number(target.dataset.answer);
    renderExam();
  }
  if (action === "finish-exam") finishExam();
  if (action === "answer-real-exam") {
    state.realExamAnswers[target.dataset.question] = Number(target.dataset.answer);
    renderRealExam();
  }
  if (action === "finish-real-exam") finishRealExam();
  if (action === "reset-real-exam") {
    state.realExamAnswers = {};
    state.realExamFinished = false;
    renderRealExam();
  }
  if (action === "save-sync-settings") {
    syncState.token = document.querySelector("#githubTokenInput").value.trim();
    syncState.gistId = document.querySelector("#gistIdInput").value.trim();
    syncStatus(syncState.token ? "Conexion guardada en este navegador." : "Guarda un token para poder sincronizar.", syncState.token ? "ok" : "bad");
  }
  if (action === "clear-sync-settings") {
    if (!confirm("Quitar token y Gist ID guardados en este navegador?")) return;
    syncState.token = "";
    syncState.gistId = "";
    syncState.lastSync = "";
    syncStatus("Conexion quitada de este navegador.", "info");
  }
  if (action === "upload-progress") {
    uploadProgressToGist().catch((error) => syncStatus(error.message, "bad"));
  }
  if (action === "download-progress") {
    downloadProgressFromGist().catch((error) => syncStatus(error.message, "bad"));
  }
});

document.addEventListener("change", (event) => {
  if (event.target.id === "quizUnitSelect") {
    state.quizUnit = event.target.value;
    state.quizIndex = 0;
    renderQuiz();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.dataset.realNumber) {
    state.realExamAnswers[event.target.dataset.realNumber] = event.target.value;
  }
});

document.querySelector("#exportProgressBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "progreso-contabilidad-gerencial.json";
  link.click();
  URL.revokeObjectURL(url);
});

document.querySelector("#resetProgressBtn").addEventListener("click", () => {
  if (!confirm("Reiniciar progreso local?")) return;
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(progress, loadProgress());
  state.quizAnswers = {};
  state.examQuestions = [];
  state.examAnswers = {};
  state.examFinished = false;
  state.realExamAnswers = {};
  state.realExamFinished = false;
  render();
});

render();
