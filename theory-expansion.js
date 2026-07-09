(() => {
  const lessonExtras = {
    "ut1-l1": {
      sources: ["UT1 Contabilidad Gerencial", "Yardin/Kuster - financiera vs gestion"],
      tutorExtended: "Pensalo como dos mapas del mismo territorio. La contabilidad financiera dibuja un mapa para terceros, con reglas comunes y prudencia. La gerencial dibuja un mapa para manejar la empresa: puede cambiar escala, detalle y variables segun la decision.",
      keyConcepts: [
        "Ambas parten de una base comun de hechos economicos, pero no persiguen el mismo objetivo.",
        "La financiera prioriza normas, comparabilidad, verificabilidad y comunicacion externa.",
        "La gerencial prioriza utilidad para decidir, oportunidad, detalle interno y capacidad explicativa.",
        "La contabilidad es un modelo de representacion: no es la realidad, sino una seleccion ordenada de datos para un uso."
      ],
      typicalMistakes: [
        "Decir solo 'externa vs interna' y olvidarse de finalidad, normas, horizonte y tipo de informe.",
        "Usar costos calculados para estados contables como si fueran automaticamente validos para decisiones.",
        "Confundir precision formal con relevancia gerencial: un dato puede estar bien registrado y ser irrelevante para decidir."
      ],
      exerciseConnection: "En pedidos especiales, discontinuacion y fabricar/comprar, esta diferencia aparece cuando el costo contable completo no coincide con el costo diferencial de la decision.",
      controlQuestions: [
        "Por que un costo correcto para inventario puede ser incorrecto para decidir?",
        "Que cambia en el informe si el usuario es un gerente comercial y no un acreedor externo?",
        "Que significa que la contabilidad sea un modelo de representacion?"
      ],
      examUse: "Suelen pedir comparar financiera y gerencial. La respuesta fuerte incluye usuarios, objetivo, normas, horizonte, frecuencia, grado de detalle, informacion no monetaria y efecto sobre decisiones."
    },
    "ut1-l2": {
      sources: ["UT1 Contabilidad Gerencial"],
      tutorExtended: "No memorices columnas. Imagina que el gerente pregunta 'que hago manana?' y el inversor pregunta 'que paso y que tan confiable es?'. Esa diferencia explica por que cambian horizonte, formato y nivel de detalle.",
      keyConcepts: [
        "Usuarios externos: accionistas, acreedores, organismos y terceros interesados.",
        "Usuarios internos: direccion, gerencias, responsables de productos, procesos o centros.",
        "La gerencial puede usar unidades fisicas, tiempos, porcentajes de capacidad, datos proyectados y escenarios.",
        "La frecuencia se adapta a la necesidad: diaria, semanal, por campana, por proyecto o por decision."
      ],
      typicalMistakes: [
        "Suponer que toda informacion gerencial debe estar expresada solo en dinero.",
        "Creer que la falta de formato estandar significa falta de rigor.",
        "No distinguir informacion historica de informacion prospectiva."
      ],
      exerciseConnection: "Cuando un practico usa horas maquina, kilos, unidades o mezcla de productos, estas en lenguaje gerencial: datos fisicos al servicio de una decision economica.",
      controlQuestions: [
        "Por que una gerencia de produccion puede necesitar datos distintos que una gerencia financiera?",
        "Que informacion no monetaria puede ser decisiva en un caso de restriccion?",
        "Por que la oportunidad del dato puede importar mas que su exactitud absoluta?"
      ],
      examUse: "Pueden aparecer afirmaciones tipo multiple opcion sobre usuarios, periodicidad y normativa. La clave es detectar si hablan de informacion para terceros o para gestion interna."
    },
    "ut1-l3": {
      sources: ["UT1 Contabilidad Gerencial", "Definiciones IMA/ACODI"],
      tutorExtended: "El profesional no esta para tirar numeros sobre la mesa: esta para traducirlos en consecuencias. En esta materia, el contador o licenciado debe decir que dato sirve, que supuesto sostiene el calculo y que limitacion tiene la conclusion.",
      keyConcepts: [
        "El profesional de gestion participa en formulacion, implementacion y control de la estrategia.",
        "Debe interpretar, no solo registrar.",
        "Debe distinguir costos para valuar, costos para controlar y costos para decidir.",
        "La informacion debe ayudar a crear, preservar o incrementar valor."
      ],
      typicalMistakes: [
        "Reducir el rol profesional a registrar operaciones.",
        "Responder una decision solo con el resultado numerico sin explicar supuestos.",
        "No advertir cuando un costo asignado no es controlable por el responsable evaluado."
      ],
      exerciseConnection: "En centros de responsabilidad, desvios y presupuestos, el rol profesional aparece al explicar causas y proponer acciones, no solo al calcular diferencias.",
      controlQuestions: [
        "Que significa ser socio del negocio en contabilidad gerencial?",
        "Por que distintos objetivos pueden requerir distintos costos?",
        "Que deberia advertir el profesional antes de recomendar discontinuar un producto?"
      ],
      examUse: "Si preguntan rol del contador o licenciado, agrega planificacion, control, toma de decisiones, uso eficiente de recursos y comunicacion de informacion relevante."
    },
    "ut1-l4": {
      sources: ["UT1 Contabilidad Gerencial", "UT4 presupuesto y control"],
      tutorExtended: "Todo indicador educa conductas. Si medis mal, la gente optimiza lo medido aunque empeore la empresa. Por eso contabilidad gerencial tambien es diseno de incentivos y responsabilidad.",
      keyConcepts: [
        "Planificar es anticipar cursos de accion y traducirlos en datos.",
        "Controlar es comparar, explicar desvios y corregir.",
        "La evaluacion debe respetar controlabilidad.",
        "Una mala asignacion de costos puede distorsionar decisiones y motivaciones."
      ],
      typicalMistakes: [
        "Tomar un desvio como culpa automatica del responsable.",
        "Evaluar un area por costos comunes que no controla.",
        "Creer que presupuesto equivale a pronostico fijo, sin aprendizaje posterior."
      ],
      exerciseConnection: "Se conecta con presupuestos flexibles, analisis de desvios y centros de responsabilidad: no basta calcular, hay que interpretar si el desvio era controlable.",
      controlQuestions: [
        "Que costo no deberia cargarse a un responsable para evaluarlo?",
        "Por que un presupuesto puede generar conductas disfuncionales?",
        "Cual es la diferencia entre medir resultado y gestionar causas?"
      ],
      examUse: "En preguntas teoricas, suelen valorar ejemplos: costos fijos comunes asignados a productos, presupuestos que incentivan gastar lo presupuestado o producir stock para mejorar utilidad."
    },
    "ut1-l5": {
      sources: ["UT1 Contabilidad Gerencial", "UT2/3 Analisis Marginal"],
      tutorExtended: "La pregunta reina es: 'esto cambia si elijo esta alternativa?'. Si no cambia, no decide. Si no esta contabilizado pero se sacrifica por elegir, tambien decide.",
      keyConcepts: [
        "Relevante: futuro y diferencial entre alternativas.",
        "Hundido: ya ocurrido; no se modifica por la decision.",
        "Costo de oportunidad: beneficio de la mejor alternativa sacrificada.",
        "Costo evitable: desaparece si se elimina una actividad o alternativa.",
        "Costo incremental: aparece por tomar una decision."
      ],
      formulas: [
        { label: "Resultado diferencial", value: "Ingresos diferenciales - costos diferenciales" },
        { label: "Conveniencia", value: "Aceptar si el resultado diferencial es positivo, sujeto a restricciones cualitativas" }
      ],
      typicalMistakes: [
        "Incluir costos hundidos porque 'duelen' o porque aparecen en la contabilidad.",
        "Olvidar costos de oportunidad por no tener factura.",
        "Incluir fijos comunes que no cambian al comparar alternativas."
      ],
      exerciseConnection: "Es la base de pedidos especiales, fabricar o comprar, eliminar productos, elegir mix con capacidad limitada y precios minimos.",
      controlQuestions: [
        "Un alquiler ya contratado es relevante para aceptar un pedido con capacidad ociosa?",
        "Cuando un costo fijo se vuelve relevante?",
        "Como detectas un costo de oportunidad en un caso practico?"
      ],
      examUse: "En calculos, arma dos columnas: diferencial positivo y diferencial negativo. En teoria, defini relevancia por futuro + cambio entre alternativas."
    },
    "ut1-l6": {
      sources: ["UT1 Contabilidad Gerencial", "Casos UT2/3"],
      tutorExtended: "El numero decide mucho, pero no decide solo. Una conclusion profesional separa el resultado cuantitativo de las condiciones cualitativas que podrian cambiar la recomendacion.",
      keyConcepts: [
        "Factores cualitativos: calidad, riesgo, clientes, proveedores, capacidad, aprendizaje, estrategia y clima interno.",
        "Los supuestos cualitativos pueden convertirse en escenarios o sensibilidades.",
        "Una alternativa rentable en el corto plazo puede destruir valor estrategico.",
        "La recomendacion debe explicitar limites del calculo."
      ],
      typicalMistakes: [
        "Cerrar la respuesta con 'conviene' sin salvedades.",
        "Usar factores cualitativos genericos que no salen del caso.",
        "Ignorar restricciones de capacidad, calidad o mercado porque el margen da positivo."
      ],
      exerciseConnection: "En pedidos especiales y tercerizacion, agrega siempre riesgos: precio de referencia, saturacion de capacidad, calidad, dependencia y uso alternativo de recursos.",
      controlQuestions: [
        "Que riesgo cualitativo puede tener aceptar un pedido a menor precio?",
        "Por que tercerizar no se decide solo por costo?",
        "Como convertirias un riesgo cualitativo en sensibilidad numerica?"
      ],
      examUse: "Despues del calculo, agrega 2 o 3 factores del caso. Eso suele diferenciar una respuesta mecanica de una respuesta gerencial."
    }
  };

  const ut23Extras = {
    "ut23-l1": ["Costos fijos y variables", "CT = CF + (CVu x Q)", "costo fijo unitario no es costo incremental"],
    "ut23-l2": ["Rango relevante y capacidad", "capacidad ociosa = capacidad disponible - uso comprometido", "costos fijos escalonados"],
    "ut23-l3": ["Costeo completo", "costo completo unitario = CVu + CF absorbido", "sirve para inventarios, cuidado para decidir"],
    "ut23-l4": ["Costeo variable", "ventas - CV = contribucion - CF = resultado", "los fijos comunes no se asignan para decidir"],
    "ut23-l5": ["Yardin: complementariedad", "modelo correcto segun objetivo", "completo patrimonial y variable gestion"],
    "ut23-l6": ["Criticas al completo para decidir", "diferencial = ingresos que cambian - costos que cambian", "no confundir asignado con evitable"],
    "ut23-l7": ["Margen de contribucion", "MCu = precio - CVu; RC = MCu / precio", "contribucion no es utilidad"],
    "ut23-l8": ["Punto de equilibrio", "Qe = CF / MCu; Ve = CF / RC", "sumar utilidad objetivo si la piden"],
    "ut23-l9": ["Margen de seguridad y sensibilidad", "MS = ventas esperadas - ventas de equilibrio", "recalcular margen si cambia precio o CVu"],
    "ut23-l10": ["Multiproducto y mezcla", "equilibrio por paquete = CF / MC del paquete", "ponderar por mix"],
    "ut23-l11": ["Factor escaso", "ranking = MCu / consumo del factor escaso", "no elegir por margen unitario bruto"],
    "ut23-l12": ["Decisiones frecuentes", "resultado incremental = ingresos nuevos - costos nuevos + costos evitados", "considerar oportunidad y cualitativos"]
  };

  for (const [id, [title, formula, warning]] of Object.entries(ut23Extras)) {
    lessonExtras[id] = {
      sources: ["UT2/3 Modelos y Analisis Marginal", "Casos Analisis Marginal", id === "ut23-l5" || id === "ut23-l6" ? "Yardin obligatorio" : "Practicos de catedra"],
      tutorExtended: `Este subtema se estudia como herramienta de decision. Primero entende la idea de ${title.toLowerCase()}, despues identifica que dato del caso alimenta el calculo y recien al final aplica la formula.`,
      keyConcepts: [
        title,
        "La clasificacion o formula solo vale dentro del objetivo y supuestos del caso.",
        "El analisis gerencial separa lo que cambia por la decision de lo que permanece igual.",
        "La conclusion debe incluir lectura economica, no solo resultado numerico."
      ],
      formulas: [{ label: "Recordatorio central", value: formula }],
      typicalMistakes: [
        warning,
        "Aplicar una formula sin revisar si cambio el supuesto del enunciado.",
        "Arrastrar costos fijos comunes al calculo diferencial aunque no cambien."
      ],
      exerciseConnection: "Este punto aparece en los casos de analisis marginal: equilibrio, utilidad objetivo, pedidos especiales, mezcla, restricciones, fabricar/comprar y discontinuacion.",
      controlQuestions: [
        `Que dato necesito para aplicar correctamente ${title.toLowerCase()}?`,
        "Que costos o ingresos cambian si elijo esta alternativa?",
        "Que supuesto del caso podria invalidar el calculo mecanico?"
      ],
      examUse: "En examenes lo toman como calculo aplicado y como justificacion teorica. Antes de responder, identifica si piden unidades, pesos, utilidad, decision incremental, mix o restriccion."
    };
  }

  for (const unit of window.CG_DATA.units) {
    for (const topic of unit.topics || []) {
      for (const lesson of topic.lessons || []) {
        if (lessonExtras[lesson.id]) Object.assign(lesson, lessonExtras[lesson.id]);
      }
    }
  }

  for (const source of window.CG_DATA.sources || []) {
    if (source.type !== "Examen" && source.type !== "Examenes Moodle") source.required = true;
  }

  window.CG_DATA.pdfMap = [
    { pdf: "Unidad Tematica 1 Contabilidad Gerencial", units: ["UT1"], role: "Base teorica obligatoria: financiera vs gerencial, rol profesional, informacion para decidir." },
    { pdf: "Unidad Tematica 2 y 3 Modelos y Analisis Marginal", units: ["UT2/3", "UT3"], role: "Base teorica obligatoria: comportamiento de costos, costeo, contribucion marginal, equilibrio y decisiones." },
    { pdf: "Yardin - Costeo completo y costeo variable", units: ["UT2/3", "UT3"], role: "Lectura obligatoria especifica: complementariedad entre modelos y uso correcto segun objetivo." },
    { pdf: "Casos Analisis Marginal y soluciones", units: ["UT2/3"], role: "Practica obligatoria: punto de equilibrio, utilidad objetivo, pedidos, mezcla y restricciones." },
    { pdf: "Diferencia de Utilidades", units: ["UT3"], role: "Practica obligatoria para inventarios y diferencias entre costeo completo y variable." },
    { pdf: "Presupuesto, desvios, stocks y planillas", units: ["UT4"], role: "Base teorica y practica obligatoria para la segunda tanda de ampliacion." }
  ];
})();
