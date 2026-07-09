const DATA = window.CG_DATA;
const STORAGE_KEY = "contabilidad-gerencial-progress-v2";

const state = {
  view: "dashboard",
  selectedUnit: "ut23",
  selectedExercise: DATA.guidedExercises[0].id,
  selectedRealExam: DATA.realExams[0].id,
  exerciseStep: 0,
  quizIndex: 0,
  quizUnit: "all",
  quizAnswers: {},
  examQuestions: [],
  examAnswers: {},
  examFinished: false,
};

const progress = loadProgress();
const viewEl = document.querySelector("#view");
const viewTitle = document.querySelector("#viewTitle");

function loadProgress() {
  const fallback = { seenLessons: [], completedExercises: [], quizCorrect: 0, quizTotal: 0, examRuns: [] };
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

function uniquePush(list, item) {
  if (!list.includes(item)) list.push(item);
}

function unitLessons(unit) {
  return (unit.topics || []).flatMap((topic) => topic.lessons || []);
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
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
    realExam: "Simulacros reales",
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

function renderUnits() {
  const tabs = DATA.units.map((unit) => `
    <button class="tab ${state.selectedUnit === unit.id ? "active" : ""}" data-action="select-unit" data-unit="${unit.id}">
      ${unit.short}
    </button>
  `).join("");
  const unit = DATA.units.find((item) => item.id === state.selectedUnit);
  const topicBlocks = unit.topics.map((topic) => {
    const lessons = topic.lessons.map((lesson) => {
      const seen = progress.seenLessons.includes(lesson.id);
      return `
        <section class="lesson">
          <h4>${lesson.title}</h4>
          <p>${lesson.body}</p>
          <div class="feedback">${lesson.tutor}</div>
          <button class="${seen ? "plain-btn" : "primary-btn"}" data-action="mark-lesson" data-lesson="${lesson.id}">
            ${seen ? "Visto" : "Marcar como visto"}
          </button>
        </section>
      `;
    }).join("");
    return `<section class="topic-block"><h3>${topic.title}</h3>${lessons}</section>`;
  }).join("");
  const formulas = unit.formulas.length
    ? unit.formulas.map((formula) => `<div class="formula"><strong>${formula.label}:</strong> ${formula.value}</div>`).join("")
    : `<p>No hay formulas centrales en esta unidad; concentra el estudio en conceptos y diferencias.</p>`;

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
      ${card(`<h3>Teoria por subtemas</h3>${topicBlocks}`)}
      ${card(`<h3>Formulas y alertas</h3>${formulas}`)}
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
      ${item.title}
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
  const tabs = DATA.realExams.map((exam) => `
    <button class="tab ${state.selectedRealExam === exam.id ? "active" : ""}" data-action="select-real-exam" data-exam="${exam.id}">
      ${exam.title.replace("Examen ", "")}
    </button>
  `).join("");
  const exam = DATA.realExams.find((item) => item.id === state.selectedRealExam);
  const items = exam.items.map((item, index) => `
    <section class="real-question">
      <span class="pill">Item ${index + 1}</span>
      <h4>${item.title}</h4>
      <p>${item.prompt}</p>
      <div class="feedback">${item.guide}</div>
    </section>
  `).join("");

  viewEl.innerHTML = `
    <div class="tabs">${tabs}</div>
    ${card(`
      <h3>${exam.title}</h3>
      <p>${exam.meta}</p>
      <div class="exam-note">Esta seccion usa los examenes reales como entrenamiento guiado. Para evitar aprender de memoria, las consignas estan convertidas en focos de resolucion y criterios de correccion.</div>
      ${items}
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
  viewEl.innerHTML = `
    ${card(`
      <h3>Material procesado</h3>
      <p>La app esta armada a partir del material teorico, practico y examenes que compartiste. El articulo obligatorio de Yardin esta integrado en UT2/3.</p>
      <div class="source-list">${sources}</div>
    `)}
  `;
}

function render() {
  viewTitle.textContent = titleForView(state.view);
  document.querySelector("#daysLeft").textContent = daysToExam();
  renderProgress();
  if (state.view === "dashboard") renderDashboard();
  if (state.view === "units") renderUnits();
  if (state.view === "practice") renderPractice();
  if (state.view === "quiz") renderQuiz();
  if (state.view === "exam") renderExam();
  if (state.view === "realExam") renderRealExam();
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
  }
  state.quizAnswers[question.id] = answer;
  saveProgress();
  renderQuiz();
}

function finishExam() {
  const correct = state.examQuestions.filter((question) => state.examAnswers[question.id] === question.answer).length;
  const score = Math.round((correct / state.examQuestions.length) * 100);
  progress.examRuns.push({ date: new Date().toISOString(), score });
  saveProgress();
  state.examFinished = true;
  renderExam();
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
  }
  if (action === "practice-unit") {
    const exercise = DATA.guidedExercises.find((item) => item.unit === target.dataset.unit) || DATA.guidedExercises[0];
    state.selectedExercise = exercise.id;
    state.exerciseStep = 0;
    setView("practice");
  }
  if (action === "mark-lesson") {
    uniquePush(progress.seenLessons, target.dataset.lesson);
    saveProgress();
    renderUnits();
  }
  if (action === "select-exercise") {
    state.selectedExercise = target.dataset.exercise;
    state.exerciseStep = 0;
    renderPractice();
  }
  if (action === "select-real-exam") {
    state.selectedRealExam = target.dataset.exam;
    renderRealExam();
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
});

document.addEventListener("change", (event) => {
  if (event.target.id === "quizUnitSelect") {
    state.quizUnit = event.target.value;
    state.quizIndex = 0;
    renderQuiz();
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
  render();
});

render();
