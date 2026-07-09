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

  Object.assign(lessonExtras, {
    "ut3-l1": {
      sources: ["UT3 Diferencia de Utilidades", "UT2/3 Modelos y Analisis Marginal", "Yardin obligatorio"],
      tutorExtended: "El estado por costeo variable esta pensado para leer gestion: muestra ventas, costos variables, contribucion y luego estructura. Su pregunta no es cuanto vale el inventario para terceros, sino cuanto aportaron las ventas del periodo.",
      keyConcepts: [
        "El costo variable de produccion integra el costo de las unidades vendidas y de los inventarios.",
        "Los costos fijos de produccion se cargan al resultado del periodo.",
        "La contribucion marginal muestra el excedente disponible para cubrir estructura.",
        "Es especialmente claro para analizar desempeno comercial y decisiones de corto plazo."
      ],
      formulas: [
        { label: "Estado variable", value: "Ventas - costos variables = contribucion marginal - costos fijos = utilidad" },
        { label: "Inventario variable", value: "Unidades en stock x costo variable unitario" }
      ],
      typicalMistakes: [
        "Restar costos fijos de produccion dentro del costo de ventas variable.",
        "Confundir contribucion marginal con utilidad neta.",
        "No separar costos fijos productivos de otros costos fijos del periodo."
      ],
      exerciseConnection: "En Pangolin/Ponderosa, el estado variable permite ver que todos los fijos de produccion del ejercicio pasan por resultado, aunque haya stock final.",
      controlQuestions: [
        "Donde quedan los costos fijos de produccion en costeo variable?",
        "Que muestra la contribucion marginal?",
        "Por que este formato ayuda a decisiones gerenciales?"
      ],
      examUse: "Te pueden pedir armar estados comparativos. En variable, no actives fijos de produccion en PT o PP; cargalos al periodo."
    },
    "ut3-l2": {
      sources: ["UT3 Diferencia de Utilidades", "Yardin obligatorio"],
      tutorExtended: "El costeo completo mira el producto como portador de costos de fabricacion, incluidos fijos de produccion absorbidos. Por eso los inventarios pueden llevar costos fijos al activo.",
      keyConcepts: [
        "El costo completo incluye costos variables y fijos de produccion absorbidos.",
        "El costo de ventas completo depende de las unidades vendidas y del criterio de salida, como FIFO.",
        "El inventario final puede contener costos fijos de produccion.",
        "La utilidad puede diferir del variable por activacion o liberacion de fijos."
      ],
      formulas: [
        { label: "Costo completo unitario", value: "Costo variable unitario + fijo de produccion absorbido unitario" },
        { label: "Fijo absorbido", value: "Costo completo unitario - costo variable unitario" }
      ],
      typicalMistakes: [
        "Restar dos veces el fijo de produccion: dentro del costo completo y otra vez como fijo del periodo.",
        "Olvidar el criterio FIFO cuando hay inventarios iniciales.",
        "Pensar que mayor utilidad por completo siempre significa mejor gestion."
      ],
      exerciseConnection: "Los casos Pangolin y Ponderosa obligan a completar ER y ESP por ambos modelos para aislar que parte de los fijos queda en inventarios.",
      controlQuestions: [
        "Que costo queda activado en el inventario bajo costeo completo?",
        "Por que el FIFO importa si hay inventario inicial?",
        "Cuando coinciden completo y variable?"
      ],
      examUse: "Si te dan costo completo unitario y variable unitario, la diferencia suele revelar el fijo absorbido por unidad."
    },
    "ut3-l3": {
      sources: ["UT3 Diferencia de Utilidades"],
      tutorExtended: "Cuando producis mas de lo que vendes, parte de la estructura productiva queda estacionada en el stock bajo costeo completo. En variable, esa estructura se reconoce entera en el periodo.",
      keyConcepts: [
        "Produccion mayor que ventas implica aumento de inventario de productos terminados o en proceso.",
        "Bajo completo, el aumento de inventario retiene fijos de produccion en el activo.",
        "Bajo variable, esos fijos se reconocen como gasto del periodo.",
        "Por eso la utilidad por completo suele ser mayor que por variable."
      ],
      formulas: [
        { label: "Diferencia por aumento de PT", value: "Aumento de unidades en PT x fijo absorbido unitario" },
        { label: "Regla", value: "Produccion > ventas => utilidad completo > utilidad variable" }
      ],
      typicalMistakes: [
        "Concluir que la empresa gano mas economicamente solo porque produjo stock.",
        "Olvidar productos en proceso al analizar inventarios.",
        "Usar unidades vendidas para calcular fijo activado, cuando corresponde mirar inventario."
      ],
      exerciseConnection: "Pangolin I y Ponderosa I muestran inventario final: el foco esta en cuanto fijo quedo activado en PT o PP.",
      controlQuestions: [
        "Por que completo da mayor utilidad si sube el inventario?",
        "Que riesgo gerencial hay en producir para stock?",
        "Que inventarios debes revisar: PT, PP o ambos?"
      ],
      examUse: "Pregunta clasica: explicar el signo de la diferencia. Si aumenta inventario, completo suele quedar por encima."
    },
    "ut3-l4": {
      sources: ["UT3 Diferencia de Utilidades"],
      tutorExtended: "Cuando vendes mas de lo que producis, estas sacando del activo costos fijos de periodos anteriores. El completo 'trae' esos fijos al resultado actual.",
      keyConcepts: [
        "Ventas mayores que produccion implican reduccion de inventarios.",
        "Bajo completo, salen del inventario costos fijos activados anteriormente.",
        "Bajo variable, esos fijos no estaban activados en el inventario.",
        "Por eso la utilidad por completo suele ser menor que por variable."
      ],
      formulas: [
        { label: "Diferencia por baja de inventario", value: "Disminucion de unidades en stock x fijo absorbido historico" },
        { label: "Regla", value: "Ventas > produccion => utilidad completo < utilidad variable" }
      ],
      typicalMistakes: [
        "Usar el fijo unitario del periodo para inventarios iniciales con otra cuota.",
        "Ignorar FIFO cuando se venden unidades de inventario inicial.",
        "No distinguir costo fijo del ejercicio y fijo contenido en inventarios previos."
      ],
      exerciseConnection: "Pangolin II/III/IV y Ponderosa II trabajan inventarios iniciales, produccion del ejercicio y FIFO; ahi se ve la liberacion de fijos.",
      controlQuestions: [
        "Que pasa con la utilidad completa si disminuye el inventario?",
        "Por que puede importar la cuota fija de periodos anteriores?",
        "Que rol cumple FIFO en estos ejercicios?"
      ],
      examUse: "Si el enunciado trae IIPT/IIPP, no resuelvas de memoria: identifica que fijos historicos salen al costo de ventas."
    },
    "ut3-l5": {
      sources: ["UT3 Diferencia de Utilidades"],
      tutorExtended: "La formula conceptual no reemplaza al estado, pero te da un radar: la diferencia entre utilidades vive en los costos fijos de produccion que entran o salen de inventarios.",
      keyConcepts: [
        "La diferencia se explica por fijos de produccion activados o liberados.",
        "Productos terminados y productos en proceso pueden contener diferencias entre costo completo y variable.",
        "Si no hay variacion de inventarios, las utilidades tienden a coincidir.",
        "Cuando hay inventarios iniciales y finales, conviene comparar saldos de fijos contenidos."
      ],
      formulas: [
        { label: "Fijos en inventario", value: "Valor inventario completo - valor inventario variable" },
        { label: "Diferencia de utilidades", value: "Fijos en IF - fijos en II" }
      ],
      typicalMistakes: [
        "Mirar solo inventario final y olvidar inventario inicial.",
        "No considerar productos en proceso.",
        "Usar la diferencia de costos unitarios sin multiplicar por unidades correctas."
      ],
      exerciseConnection: "Los ejercicios piden ecuaciones de diferencia de utilidades y de costos fijos del ejercicio: separa fijos del periodo y fijos en inventarios.",
      controlQuestions: [
        "Como calculas los fijos contenidos en un inventario?",
        "Por que se resta el inventario inicial?",
        "Que significa que no haya diferencia relevante entre modelos?"
      ],
      examUse: "Muy probable como calculo corto: identificar fijos contenidos en inventarios y deducir utilidad por el otro modelo."
    },
    "ut3-l6": {
      sources: ["UT3 Diferencia de Utilidades", "Yardin obligatorio"],
      tutorExtended: "La lectura gerencial es la parte jugosa: una utilidad que sube por producir mas que vender no necesariamente significa mejor negocio. Puede ser stock acumulado disfrazado de resultado.",
      keyConcepts: [
        "El costeo completo puede incentivar producir para aumentar utilidad contable.",
        "El stock inmoviliza capital y puede generar obsolescencia, almacenamiento y riesgo comercial.",
        "El costeo variable muestra mejor la contribucion de lo efectivamente vendido.",
        "La diferencia entre modelos debe interpretarse, no solo calcularse."
      ],
      typicalMistakes: [
        "Celebrar mayor utilidad completa sin revisar inventarios.",
        "No vincular UT3 con la complementariedad de Yardin.",
        "Confundir resultado contable con flujo de caja o desempeno comercial."
      ],
      exerciseConnection: "En examenes, despues de calcular diferencias, pueden pedir interpretacion. La respuesta debe advertir si la utilidad surge por stock y no por ventas.",
      controlQuestions: [
        "Por que producir para stock puede mejorar utilidad completa?",
        "Que riesgos tiene acumular inventario?",
        "Como se conecta esta unidad con Yardin?"
      ],
      examUse: "Para preguntas teoricas, explica que ambos modelos pueden ser correctos, pero sirven para objetivos distintos y generan incentivos distintos."
    },
    "ut4-l1": {
      sources: ["UT4 Ficha ciclo elaboracion presupuesto", "Casos UT IV"],
      tutorExtended: "El presupuesto es una conversacion ordenada entre estrategia y numeros. No nace en Excel: nace en objetivos, recursos, responsables y supuestos.",
      keyConcepts: [
        "Forma parte de la planificacion de corto plazo.",
        "Distribuye recursos a actividades especificas.",
        "Debe elaborarse antes del periodo y aprobarse por la alta direccion.",
        "Requiere participacion de responsables de ingresos, costos e inversiones."
      ],
      formulas: [
        { label: "Idea base", value: "Objetivos + recursos + supuestos => ER, ESP y FC presupuestados" }
      ],
      typicalMistakes: [
        "Tratar el presupuesto como simple pronostico.",
        "Armarlo sin participacion de responsables.",
        "No conectar ventas con compras, stock, cobranza y caja."
      ],
      exerciseConnection: "Casos como MODELA, LA FORTALEZA y LA INTEGRADORA arrancan por supuestos de ventas y luego exigen derivar el resto de estados.",
      controlQuestions: [
        "Por que el presupuesto empieza por ventas?",
        "Que significa que sea una herramienta de coordinacion?",
        "Que documentos finales produce el proceso?"
      ],
      examUse: "Pueden pedir finalidad y requisitos: plan previo, aprobacion, participacion, control posterior y medidas correctivas."
    },
    "ut4-l2": {
      sources: ["UT4 Ficha ciclo elaboracion presupuesto", "Casos UT IV"],
      tutorExtended: "Presupuestar sin controlar es escribir deseos. El valor aparece cuando comparas realidad contra plan, entendes causas y corregis.",
      keyConcepts: [
        "Etapas: planificacion, presupuesto, ejecucion, registro, comparacion, analisis de desvios y correccion.",
        "La contabilidad registra hechos reales para compararlos con lo presupuestado.",
        "El control permite aprendizaje y ajuste.",
        "Los objetivos cumplidos pueden vincularse a incentivos."
      ],
      typicalMistakes: [
        "Calcular desvios sin explicar causas.",
        "No distinguir cambios de precio, volumen, eficiencia o oportunidad.",
        "Comparar contra un presupuesto que ya no refleja el nivel real de actividad."
      ],
      exerciseConnection: "NOVUELA pide analizar variaciones en ER y ESP: ahi se ve que el control no termina en la resta presupuestado-real.",
      controlQuestions: [
        "Que informacion necesitas para explicar un desvio?",
        "Por que el control puede llevar a medidas correctivas?",
        "Que diferencia hay entre presupuesto y realidad contable?"
      ],
      examUse: "Si preguntan proceso presupuestal, nombra etapas y remata con comparacion, analisis y correccion."
    },
    "ut4-l3": {
      sources: ["UT4 Ficha ciclo elaboracion presupuesto", "Caso Integrador"],
      tutorExtended: "Venta, cobranza y deudores son tres caras de la misma operacion. Si las mezclas, el presupuesto se rompe: el ER muestra devengado, el FC muestra caja y el ESP muestra saldo pendiente.",
      keyConcepts: [
        "Ventas estimadas impactan en ER por devengado.",
        "Cobranzas impactan en FC cuando se perciben.",
        "Deudores por ventas quedan en ESP al cierre.",
        "Las condiciones contado/credito determinan la distribucion temporal."
      ],
      formulas: [
        { label: "Ventas", value: "Unidades x precio" },
        { label: "Deudores finales", value: "Ventas a credito no cobradas al cierre" },
        { label: "Cobranzas", value: "Ventas contado + cobro de creditos del periodo + cobro de saldos iniciales" }
      ],
      typicalMistakes: [
        "Poner toda venta como cobranza.",
        "Olvidar saldos iniciales de deudores.",
        "No separar clientes contado y credito."
      ],
      exerciseConnection: "LA INTEGRADORA cobra 60% contado y 40% al mes siguiente; MODELA separa mayoristas a credito y minoristas contado.",
      controlQuestions: [
        "Donde va la venta devengada?",
        "Donde va el saldo no cobrado?",
        "Como afecta vender a 90 dias al flujo de caja?"
      ],
      examUse: "Muy tomable en presupuesto: si te piden ER, ESP y FC, etiqueta cada dato antes de calcular."
    },
    "ut4-l4": {
      sources: ["UT4 Ficha ciclo elaboracion presupuesto", "Caso Integrador", "Casos UT IV"],
      tutorExtended: "Compras no es lo mismo que costo de ventas, y pagos no es lo mismo que compras. Este subtema es el corazon de los presupuestos con stock.",
      keyConcepts: [
        "Las compras dependen de ventas/consumo esperado, stock inicial y stock final deseado.",
        "El costo de ventas impacta en ER cuando se venden las unidades.",
        "El stock final impacta en ESP.",
        "Los pagos a proveedores dependen de condiciones de credito."
      ],
      formulas: [
        { label: "Compras en unidades", value: "Consumo o ventas + stock final deseado - stock inicial" },
        { label: "Stock final", value: "Stock inicial + compras - salidas" },
        { label: "Pagos", value: "Compras contado + pagos de compras a credito vencidas + saldos iniciales" }
      ],
      typicalMistakes: [
        "Confundir unidades compradas con unidades vendidas.",
        "Llevar compras completas al costo de ventas.",
        "Olvidar pagos diferidos a proveedores."
      ],
      exerciseConnection: "LA INTEGRADORA exige FIFO con stock inicial y compras de distintos costos; MODELA agrega stock de seguridad y plazo de proveedores.",
      controlQuestions: [
        "Por que una compra puede no ser costo de ventas del periodo?",
        "Como se calcula stock final deseado?",
        "Que cambia si el proveedor financia a 60 dias?"
      ],
      examUse: "En presupuestos, arma primero el cuadro fisico de unidades; despues valoriza y recien ahi separa ER, ESP y FC."
    },
    "ut4-l5": {
      sources: ["UT4 Ficha ciclo elaboracion presupuesto", "Casos UT IV"],
      tutorExtended: "Cada rubro tiene una personalidad presupuestal: algunos afectan resultado y caja, otros resultado sin caja, otros caja y balance. La habilidad es ubicar cada impacto.",
      keyConcepts: [
        "Gastos operativos pueden ser fijos, variables, contado o credito.",
        "Inversiones van al ESP y su pago al FC.",
        "Amortizaciones afectan ER y valor neto del activo, pero no caja.",
        "Prestamos afectan caja y pasivo; intereses afectan ER y FC si se pagan.",
        "IVA e impuestos pueden generar pasivos aunque no se paguen en el periodo."
      ],
      formulas: [
        { label: "Amortizacion lineal", value: "Valor amortizable / vida util" },
        { label: "Interes sobre saldo", value: "Saldo de deuda x tasa" }
      ],
      typicalMistakes: [
        "Poner amortizaciones en flujo de caja.",
        "Olvidar deuda final despues de pagar cuotas.",
        "No separar capital de intereses en prestamos."
      ],
      exerciseConnection: "NOVUELA y MODELA incluyen prestamos, intereses, ventas de activos, amortizaciones e impuestos: cada elemento debe ubicarse en ER, ESP y FC.",
      controlQuestions: [
        "Por que la amortizacion no es salida de caja?",
        "Que parte de un prestamo va al ER?",
        "Como se refleja una inversion financiada?"
      ],
      examUse: "Te pueden dar muchos datos mezclados. Clasifica cada uno: ER, ESP, FC o combinacion."
    },
    "ut4-l6": {
      sources: ["Casos UT IV - NOVUELA", "UT4 Ficha presupuesto"],
      tutorExtended: "Un desvio no es un numero rojo o verde: es una pista. La pregunta gerencial es que lo causo, si era controlable y que accion corresponde.",
      keyConcepts: [
        "Desvio: diferencia entre presupuestado y real.",
        "Puede ser favorable o desfavorable segun su efecto en resultado, caja o patrimonio.",
        "Debe analizarse por causa: precio, volumen, costo, eficiencia, financiamiento, timing.",
        "El analisis de ESP muestra impactos acumulados, no solo resultado del periodo."
      ],
      formulas: [
        { label: "Desvio", value: "Real - Presupuestado, interpretado segun el rubro" },
        { label: "Desvio de ventas", value: "Efecto precio + efecto volumen, si el caso lo permite" }
      ],
      typicalMistakes: [
        "Llamar favorable a todo aumento de saldo.",
        "No explicar causa del desvio.",
        "Mezclar desvio economico con desvio financiero."
      ],
      exerciseConnection: "NOVUELA pide analizar variaciones del resultado y del estado patrimonial: precio menor, cantidad mayor, costos distintos y operaciones no realizadas.",
      controlQuestions: [
        "Un mayor saldo de deudores es favorable?",
        "Como separarias efecto precio y volumen?",
        "Por que un desvio de caja puede no coincidir con un desvio de resultado?"
      ],
      examUse: "Si piden analisis de variaciones, escribi causa y consecuencia. No entregues solo una tabla."
    },
    "ut4-l7": {
      sources: ["UT4 Ficha presupuesto", "Casos UT IV"],
      tutorExtended: "El presupuesto flexible evita castigar o premiar por vender mas o menos sin separar eficiencia. Ajusta lo que deberia haber pasado al nivel real de actividad.",
      keyConcepts: [
        "Presupuesto original: armado para el nivel esperado.",
        "Presupuesto flexible: reexpresado para el nivel real de actividad.",
        "Permite separar desvios por volumen de desvios por eficiencia o precio.",
        "Es especialmente util con costos variables."
      ],
      formulas: [
        { label: "Costo variable flexible", value: "CVu presupuestado x actividad real" },
        { label: "Desvio controlable", value: "Real - presupuesto flexible" }
      ],
      typicalMistakes: [
        "Comparar costo variable real contra presupuesto fijo cuando cambio el volumen.",
        "Tratar todo aumento de costos como ineficiencia.",
        "No identificar que costos son variables respecto de la actividad."
      ],
      exerciseConnection: "En NOVUELA, vender mas pasajes explica parte del mayor costo total; hay que separar volumen de precio/costo unitario.",
      controlQuestions: [
        "Por que gastar mas puede ser razonable si vendiste mas?",
        "Que dato necesitas para flexibilizar un presupuesto?",
        "Que costos no se flexibilizan automaticamente?"
      ],
      examUse: "Si el caso trae presupuesto y real con distinto volumen, sospecha que quieren enfoque flexible."
    },
    "ut4-l8": {
      sources: ["UT4 Gestion de Stocks - Rotacion", "Caso Integrador"],
      tutorExtended: "Stock es disponibilidad, pero tambien dinero detenido. Gestionarlo es equilibrar riesgo de quiebre, costo financiero, almacenamiento y rotacion.",
      keyConcepts: [
        "Stock medio: promedio de unidades o valor inmovilizado.",
        "Rotacion: cuantas veces se renueva el stock promedio en el periodo.",
        "Lote de compra mayor reduce frecuencia pero aumenta stock medio.",
        "Stock de seguridad protege contra rupturas, pero inmoviliza capital."
      ],
      formulas: [
        { label: "Frecuencia de compra", value: "Consumo del periodo / lote de compra" },
        { label: "Stock medio simple", value: "Lote / 2, si consumo es uniforme y no hay stock de seguridad" },
        { label: "Valor stock promedio", value: "Stock medio x costo unitario" },
        { label: "Velocidad de rotacion", value: "Consumo o costo anual / stock promedio" }
      ],
      typicalMistakes: [
        "Pensar que lote mas grande siempre conviene.",
        "Interpretar rotacion alta como siempre positiva.",
        "No distinguir stock fisico de inversion monetaria."
      ],
      exerciseConnection: "El caso Rotativa pide frecuencia de compras, stock medio, inversion en stock y velocidad de rotacion para distintos lotes.",
      controlQuestions: [
        "Que efecto tiene aumentar el lote sobre stock medio?",
        "Por que la rotacion puede ser demasiado alta?",
        "Como calculas inversion promedio en stock?"
      ],
      examUse: "Puede aparecer como calculo corto con lotes, consumo diario y rotacion. Dibuja mentalmente el serrucho de stock."
    },
    "ut4-l9": {
      sources: ["UT4 Principios de construccion de modelos en planilla electronica", "Casos UT IV"],
      tutorExtended: "Un modelo bueno no es el mas ingenioso; es el que otra persona puede revisar, usar y modificar sin romperlo. En examen, esto se traduce en claridad, modularidad y trazabilidad.",
      keyConcepts: [
        "Construir por modulos: ventas, compras, gastos, inversiones, financiamiento, estados.",
        "Separar datos y logica: no mezclar supuestos escritos a mano dentro de formulas.",
        "Preferir formulas claras antes que formulas brillantes e indescifrables.",
        "Autodocumentar con etiquetas, comentarios y flujos logicos.",
        "Usar columnas homogeneas, preferentemente para el tiempo."
      ],
      formulas: [
        { label: "Regla de oro", value: "Datos en celdas de entrada; relaciones en formulas; reportes en salidas" }
      ],
      typicalMistakes: [
        "Poner constantes ocultas dentro de formulas.",
        "Usar formulas largas con anidamientos dificiles de auditar.",
        "Mezclar modulos y generar enlaces imprevisibles.",
        "No dejar etiquetas que expliquen origen y destino de datos."
      ],
      exerciseConnection: "MODELA y LA FORTALEZA son ejercicios de planilla: si el modelo no separa datos y logica, cualquier cambio de inflacion, TC, plazo o mix obliga a rehacer todo.",
      controlQuestions: [
        "Por que separar datos y logica reduce errores?",
        "Que ventaja tiene trabajar por modulos?",
        "Como autodocumentarias un modulo de ventas?"
      ],
      examUse: "En teoria pueden pedir los cuatro principios: modularidad, separar datos/logica, claridad de formulas y autodocumentacion."
    }
  });

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
    { pdf: "Presupuesto, desvios, stocks y planillas", units: ["UT4"], role: "Base teorica y practica obligatoria: presupuesto, control, stocks, rotacion y modelos en planilla." }
  ];

  const extraGuidedExercises = [
    {
      id: "relevancia-pedido-especial",
      unit: "ut1",
      title: "Decision: pedido especial y costos relevantes",
      difficulty: "Inicial",
      source: "UT1 + Analisis marginal",
      intro: "Una empresa tiene capacidad ociosa. Un cliente ofrece comprar 1.000 unidades a $42. El costo variable unitario es $30. Los costos fijos comunes son $25.000 mensuales y no cambian. Para atender el pedido se paga un flete especial total de $4.000.",
      steps: [
        { prompt: "Calcula el ingreso diferencial del pedido.", answer: 42000, tolerance: 0.01, explanation: "Ingreso diferencial = 1.000 x 42 = 42.000." },
        { prompt: "Calcula los costos variables diferenciales de produccion.", answer: 30000, tolerance: 0.01, explanation: "Costo variable diferencial = 1.000 x 30 = 30.000." },
        { prompt: "Calcula el resultado diferencial del pedido.", answer: 8000, tolerance: 0.01, explanation: "42.000 - 30.000 - 4.000 = 8.000. Los fijos comunes no cambian, por eso no entran." }
      ]
    },
    {
      id: "pangolin-diferencia-utilidades",
      unit: "ut3",
      title: "Pangolin: diferencia de utilidades por stock",
      difficulty: "Inicial",
      source: "UT3 Diferencia de Utilidades",
      intro: "Una empresa produce 100 unidades. Costo variable unitario $10 y costo completo unitario $12. Vende 80 unidades a $24. No hay inventario inicial ni otros costos fijos que los de produccion.",
      steps: [
        { prompt: "Calcula el costo fijo de produccion total absorbido.", answer: 200, tolerance: 0.01, explanation: "Diferencia por unidad = 12 - 10 = 2. Fijo total absorbido = 100 x 2 = 200." },
        { prompt: "Calcula la utilidad por costeo variable.", answer: 920, tolerance: 0.01, explanation: "Ventas 80 x 24 = 1.920. CV vendido 80 x 10 = 800. Menos CF 200. Utilidad variable = 920." },
        { prompt: "Calcula la utilidad por costeo completo.", answer: 960, tolerance: 0.01, explanation: "Ventas 1.920 - costo completo vendido 80 x 12 = 960. Utilidad completa = 960." },
        { prompt: "Calcula la diferencia entre utilidad completa y variable.", answer: 40, tolerance: 0.01, explanation: "Completo supera a variable por 40, equivalente a 20 unidades en stock x $2 de fijo activado." }
      ]
    },
    {
      id: "diferencia-utilidades-inventario-inicial",
      unit: "ut3",
      title: "Inventario inicial: fijos que salen del stock",
      difficulty: "Intermedio",
      source: "UT3 Casos Ponderosa/Pangolin",
      intro: "Inventario inicial: 300 unidades con costo completo $125 y variable $110. En el periodo se producen 1.000 unidades con costo completo $132 y variable $114. Se venden 1.100 unidades con FIFO. No necesitas calcular ventas.",
      steps: [
        { prompt: "Calcula el fijo absorbido unitario contenido en el inventario inicial.", answer: 15, tolerance: 0.01, explanation: "125 - 110 = 15 por unidad inicial." },
        { prompt: "Calcula el fijo absorbido unitario de la produccion del periodo.", answer: 18, tolerance: 0.01, explanation: "132 - 114 = 18 por unidad producida." },
        { prompt: "Calcula cuantas unidades finales quedan en stock.", answer: 200, tolerance: 0.01, explanation: "300 iniciales + 1.000 producidas - 1.100 vendidas = 200." },
        { prompt: "Calcula los fijos contenidos en el inventario final.", answer: 3600, tolerance: 0.01, explanation: "Con FIFO, el stock final queda de produccion del periodo: 200 x 18 = 3.600." },
        { prompt: "Calcula la diferencia de utilidades: fijos en IF menos fijos en II.", answer: -900, tolerance: 0.01, explanation: "Fijos en II = 300 x 15 = 4.500. Fijos en IF = 3.600. Diferencia = -900: completo queda por debajo de variable." }
      ]
    },
    {
      id: "presupuesto-compras-stock",
      unit: "ut4",
      title: "Presupuesto: compras, stock y proveedores",
      difficulty: "Intermedio",
      source: "UT4 Ciclo compras",
      intro: "Una empresa comercial espera vender 12.000 unidades. Tiene stock inicial de 2.000 unidades y desea terminar con stock final de seguridad de 3.500 unidades. Costo de compra $18. El proveedor financia 25% de las compras al cierre.",
      steps: [
        { prompt: "Calcula las unidades a comprar.", answer: 13500, tolerance: 0.01, explanation: "Compras = ventas + stock final deseado - stock inicial = 12.000 + 3.500 - 2.000 = 13.500." },
        { prompt: "Calcula el importe total de compras.", answer: 243000, tolerance: 0.01, explanation: "13.500 x 18 = 243.000." },
        { prompt: "Calcula el saldo final de proveedores.", answer: 60750, tolerance: 0.01, explanation: "25% de 243.000 queda financiado: 60.750." },
        { prompt: "Calcula el valor del stock final.", answer: 63000, tolerance: 0.01, explanation: "3.500 unidades x 18 = 63.000." }
      ]
    },
    {
      id: "presupuesto-ventas-caja",
      unit: "ut4",
      title: "Presupuesto: ventas, deudores y caja",
      difficulty: "Intermedio",
      source: "UT4 Ciclo ventas",
      intro: "Ventas presupuestadas: enero $100.000, febrero $120.000 y marzo $90.000. Se cobra 60% contado y 40% al mes siguiente. Hay deudores iniciales por $30.000 que se cobran en enero.",
      steps: [
        { prompt: "Calcula la cobranza total de enero.", answer: 90000, tolerance: 0.01, explanation: "60% de ventas de enero = 60.000, mas deudores iniciales 30.000. Total 90.000." },
        { prompt: "Calcula la cobranza total de febrero.", answer: 112000, tolerance: 0.01, explanation: "60% de febrero = 72.000, mas 40% de enero = 40.000. Total 112.000." },
        { prompt: "Calcula la cobranza total de marzo.", answer: 102000, tolerance: 0.01, explanation: "60% de marzo = 54.000, mas 40% de febrero = 48.000. Total 102.000." },
        { prompt: "Calcula el saldo final de deudores al cierre de marzo.", answer: 36000, tolerance: 0.01, explanation: "Queda pendiente 40% de marzo: 90.000 x 40% = 36.000." }
      ]
    },
    {
      id: "stock-rotacion-lotes",
      unit: "ut4",
      title: "Gestion de stocks: lote, stock medio y rotacion",
      difficulty: "Inicial",
      source: "UT4 Gestion de stocks",
      intro: "Consumo mensual de materia prima: 30.000 kg. La empresa compra en lotes de 10.000 kg. Consumo diario uniforme: 1.000 kg. Precio de compra $2 por kg.",
      steps: [
        { prompt: "Calcula la cantidad de compras por mes.", answer: 3, tolerance: 0.01, explanation: "30.000 / 10.000 = 3 compras por mes." },
        { prompt: "Calcula el stock medio fisico si el lote es 10.000 kg.", answer: 5000, tolerance: 0.01, explanation: "Con consumo uniforme y sin stock de seguridad: lote / 2 = 5.000 kg." },
        { prompt: "Calcula la inversion promedio en stock.", answer: 10000, tolerance: 0.01, explanation: "5.000 kg x $2 = 10.000." },
        { prompt: "Calcula la velocidad de rotacion mensual.", answer: 6, tolerance: 0.01, explanation: "Consumo mensual / stock medio = 30.000 / 5.000 = 6 vueltas por mes." }
      ]
    },
    {
      id: "desvio-presupuesto-flexible",
      unit: "ut4",
      title: "Control: presupuesto flexible",
      difficulty: "Intermedio",
      source: "UT4 Desvios",
      intro: "Se presupuesto vender 1.000 unidades. Costo variable presupuestado $8 por unidad y costo fijo $5.000. Realmente se vendieron 1.200 unidades y el costo total real fue $15.100.",
      steps: [
        { prompt: "Calcula el costo total del presupuesto original.", answer: 13000, tolerance: 0.01, explanation: "1.000 x 8 + 5.000 = 13.000." },
        { prompt: "Calcula el costo flexible para 1.200 unidades.", answer: 14600, tolerance: 0.01, explanation: "1.200 x 8 + 5.000 = 14.600." },
        { prompt: "Calcula el desvio controlable contra presupuesto flexible.", answer: 500, tolerance: 0.01, explanation: "Real 15.100 - flexible 14.600 = 500 desfavorable. No todo el aumento contra el presupuesto original era ineficiencia: parte se explica por mayor volumen." }
      ]
    },
    {
      id: "modelo-planilla-auditable",
      unit: "ut4",
      title: "Planilla: detectar error de modelo",
      difficulty: "Conceptual aplicado",
      source: "UT4 Modelos en planilla",
      intro: "Un presupuesto calcula ventas del anio 2 con la formula: ventas anio 1 x 1,08 x 1,05 x 250. La tasa de crecimiento, la cuota de mercado y el precio estan escritos dentro de la formula.",
      steps: [
        { prompt: "Cuantos supuestos duros estan escondidos dentro de la formula?", answer: 3, tolerance: 0.01, explanation: "Hay tres datos/supuestos dentro de la formula: 1,08, 1,05 y 250." },
        { prompt: "Si ventas anio 1 son 10.000 unidades base, calcula el resultado de la formula.", answer: 2835000, tolerance: 0.01, explanation: "10.000 x 1,08 x 1,05 x 250 = 2.835.000." },
        { prompt: "Cuantos de esos supuestos deberian estar en celdas de datos separadas?", answer: 3, tolerance: 0.01, explanation: "Los tres. La regla del material es separar datos y logica para que el modelo sea auditable y facil de actualizar." }
      ]
    }
  ];

  const existingExercises = new Set((window.CG_DATA.guidedExercises || []).map((exercise) => exercise.id));
  for (const exercise of extraGuidedExercises) {
    if (!existingExercises.has(exercise.id)) window.CG_DATA.guidedExercises.push(exercise);
  }
})();
