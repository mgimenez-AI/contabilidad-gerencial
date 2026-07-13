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

  const AUDIT = "AUDIT-2026-07";

  function findUnit(unitId) {
    return window.CG_DATA.units.find((unit) => unit.id === unitId);
  }

  function upsertTopic(unitId, topic) {
    const unit = findUnit(unitId);
    if (!unit) return;
    const existing = (unit.topics || []).find((item) => item.title === topic.title);
    if (existing) {
      for (const lesson of topic.lessons) {
        if (!(existing.lessons || []).some((item) => item.id === lesson.id)) existing.lessons.push(lesson);
      }
      return;
    }
    unit.topics.push(topic);
  }

  function addFormula(unitId, formula) {
    const unit = findUnit(unitId);
    if (!unit || unit.formulas.some((item) => item.label === formula.label)) return;
    unit.formulas.push(formula);
  }

  function findQuestion(questionId) {
    for (const exam of window.CG_DATA.realExamSets || []) {
      const question = exam.questions.find((item) => item.id === questionId);
      if (question) return question;
    }
    return null;
  }

  function patchQuestion(questionId, patch) {
    const question = findQuestion(questionId);
    if (question) Object.assign(question, { changelog: AUDIT }, patch);
  }

  function addAuditExercise(exercise) {
    if (!window.CG_DATA.guidedExercises.some((item) => item.id === exercise.id)) {
      window.CG_DATA.guidedExercises.push({ changelog: AUDIT, ...exercise });
    }
  }

  const auditNoteCoverage = "Agregado por auditoria de cobertura contra examenes reales Diciembre 2022, Agosto 2022 y Julio 2023.";

  upsertTopic("ut4", {
    title: "5. Auditoria de examenes reales: presupuesto y control",
    lessons: [
      {
        id: "ut4-audit-esp-variaciones",
        title: "Analisis de variaciones del ESP",
        body: "La metodologia del curso separa disponibilidades del capital de trabajo para explicar variaciones patrimoniales. La identidad de trabajo es: Capital de trabajo + Disponibilidades + Bienes de uso netos = Pasivos financieros + Patrimonio.",
        tutor: "No mezcles esta metodologia con el capital de trabajo de cierre de ag22-9. Aca las disponibilidades van separadas del CT; en ag22-9, para el capital de trabajo de cierre, se sumaban disponibilidades y stock y se restaban pasivos corrientes.",
        tutorExtended: "Para analizar variaciones, se comparan saldos reales contra presupuestados. La formula despeja el rubro pedido: Delta CT = Delta PF + Delta Patrimonio - Delta BU - Delta Disp. Si piden disponibilidades: Delta Disp = Delta PF + Delta Patrimonio - Delta CT - Delta BU. Si el saldo real de pasivos financieros no esta dado, se reconstruye con el cronograma del prestamo: capital original menos amortizaciones de capital vencidas, mas intereses devengados no pagados si corresponde.",
        keyConcepts: [
          "Delta significa real menos presupuestado.",
          "Disponibilidades se analizan separadas del capital de trabajo en esta metodologia.",
          "Pasivos financieros reales pueden requerir reconstruccion por amortizacion constante.",
          "El cambio en patrimonio recoge aportes, resultados y otras variaciones patrimoniales."
        ],
        formulas: [
          { label: "Identidad ESP curso", value: "CT + Disp + BU netos = PF + Patrimonio" },
          { label: "Variacion CT", value: "Delta CT = Delta PF + Delta Patrimonio - Delta BU - Delta Disp" },
          { label: "Variacion disponibilidades", value: "Delta Disp = Delta PF + Delta Patrimonio - Delta CT - Delta BU" }
        ],
        typicalMistakes: [
          "Incluir disponibilidades dentro del CT cuando el ejercicio pide la metodologia de variaciones del ESP.",
          "Usar el pasivo financiero presupuestado como si fuera real.",
          "Olvidar que una cuota de amortizacion constante reduce capital, pero el interes puede estar pagado o devengado segun el caso."
        ],
        exerciseConnection: "Cubre Diciembre 2022 P6 y Julio 2023 P9.",
        controlQuestions: [
          "Que se separa del capital de trabajo en esta metodologia?",
          "Como reconstruis el saldo real de un prestamo con amortizacion constante?",
          "Que cambia si el ejercicio pide Delta CT en vez de Delta Disp?"
        ],
        examUse: "Diciembre 2022 P6: PF real = 483.000, Delta PF = 483.000 - 377.400 = 105.600; Delta Patrimonio = 280.000 - 150.000 = 130.000; Delta Disp = 36.000 - 25.000 = 11.000; Delta BU = 0. Delta CT = 105.600 + 130.000 - 0 - 11.000 = 224.600. Julio 2023 P9: PF real = 462.000, Delta PF = 84.600; Delta Patrimonio = 60.000; Delta CT = 39.000; Delta BU = 0. Delta Disp = 84.600 + 60.000 - 39.000 = 105.600.",
        changelog: AUDIT,
        auditNote: "Cubre variaciones del ESP detectadas como faltantes en Diciembre 2022 P6 y Julio 2023 P9."
      },
      {
        id: "ut4-audit-er-variaciones",
        title: "Analisis de variaciones del ER",
        body: "En la metodologia del curso, los gastos de estructura incluyen salarios, honorarios y otros gastos de administracion y ventas, incluidas amortizaciones. No incluyen costo de ventas ni intereses.",
        tutor: "Convencion de signos: si el gasto real supera al presupuestado, la variacion es negativa o desfavorable. Si el gasto real es menor, es positiva o favorable.",
        tutorExtended: "La variacion economica del costo de ventas se calcula comparando costo real contra presupuesto ajustado al volumen real. Si hay FIFO, primero se respetan las capas de stock inicial y compras; despues se mide si el costo real unitario difiere del presupuestado para las unidades efectivamente vendidas.",
        keyConcepts: [
          "Gastos de estructura: salarios, honorarios, GAV y amortizaciones.",
          "Intereses no integran gastos de estructura para esta variacion.",
          "Costo de ventas se analiza contra presupuesto flexible al volumen real.",
          "En FIFO, el sobrecosto afecta las unidades provenientes de la capa de compras reales."
        ],
        formulas: [
          { label: "Variacion gasto", value: "Presupuesto - Real, si se expresa con signo economico" },
          { label: "Variacion CV FIFO", value: "Unidades de la capa afectada x (costo presupuestado - costo real)" }
        ],
        typicalMistakes: [
          "Incluir intereses en gastos de estructura.",
          "Tomar la cifra sin signo cuando el curso pide variacion economica.",
          "Comparar costo de ventas real contra presupuesto original sin ajustar volumen."
        ],
        exerciseConnection: "Cubre Diciembre 2022 P10 y Julio 2023 P11.",
        controlQuestions: [
          "Que rubros integran gastos de estructura?",
          "Por que un gasto mayor real se informa con signo negativo?",
          "Como entra FIFO en una variacion economica de costo de ventas?"
        ],
        examUse: "Diciembre 2022 P10: salarios suben 26.000 desfavorable; honorarios bajan 20.000 favorable; otros GAV quedan iguales. Variacion neta = -26.000 + 20.000 = -6.000. Julio 2023 P11: se vendieron 430 unidades y 200 salieron del stock inicial; las 230 restantes provienen de compras. Como compras reales fueron 390 y politica de stock se cumplio, el sobrecosto relevante informado por el examen equivale a 190 unidades x $1 = -190.",
        changelog: AUDIT,
        auditNote: "Cubre metodologia de variaciones ER y signos, faltante frente a Diciembre 2022 P10 y Julio 2023 P11."
      },
      {
        id: "ut4-audit-iva-presupuesto",
        title: "IVA en presupuestacion y ciclos",
        body: "En presupuestos, el Estado de Resultados se arma sin IVA, pero deudores por ventas, cobranzas y saldos usados para ciclos de conversion se trabajan IVA incluido cuando las operaciones estan gravadas.",
        tutor: "Atajo: ER sin IVA; caja, deudores y ciclos con IVA si el enunciado lo dice.",
        tutorExtended: "La diferencia nace porque el IVA no es ingreso economico de la empresa, pero si integra el importe facturado y por tanto el credito contra clientes y las cobranzas. Para ciclos de conversion de creditos por ventas, el denominador debe ser ventas a credito diarias con IVA incluido si los saldos de creditos estan IVA incluido.",
        keyConcepts: [
          "Ventas del ER: sin IVA.",
          "Deudores por ventas: importe facturado pendiente, con IVA.",
          "Cobranzas: importe cobrado, con IVA.",
          "Ciclo de creditos: saldo promedio / ventas a credito diarias con IVA."
        ],
        formulas: [
          { label: "Ciclo creditos con IVA", value: "Saldo promedio creditos / (ventas a credito sin IVA x (1 + IVA) / dias)" },
          { label: "Deudores cierre", value: "Saldo inicial no cobrado + ventas a credito pendientes x (1 + IVA)" }
        ],
        typicalMistakes: [
          "Calcular el ciclo con ventas totales cuando solo una parte es a credito.",
          "Usar ventas sin IVA contra saldos de deudores con IVA.",
          "Confundir plazo de cobro con devengamiento de ventas."
        ],
        exerciseConnection: "Cubre Julio 2023 P6 y P10, y refuerza Diciembre 2022 P11.",
        controlQuestions: [
          "Por que el ER no incluye IVA?",
          "Por que deudores si incluye IVA?",
          "Que ventas van al denominador del ciclo de creditos?"
        ],
        examUse: "Julio 2023 P6: saldo promedio = (1.080.000 + 129.600) / 2 = 604.800. Ventas a credito con IVA por dia = 6.300.000 x 80% x 1,20 / 360 = 16.800. Ciclo = 604.800 / 16.800 = 36 dias. Julio 2023 P10: queda 20% del saldo inicial para ejercicio 3: 520.000 x 20% = 104.000. Ventas del ultimo trimestre pendientes por plazo 60 dias: 690.000 x 2/3 x 1,23 = 565.800. Deudores cierre = 669.800.",
        changelog: AUDIT,
        auditNote: "Agrega regla IVA y cubre preguntas de creditos por ventas de Julio 2023."
      },
      {
        id: "ut4-audit-centros-transferencias",
        title: "Centros de responsabilidad y precios de transferencia",
        body: "Un centro de responsabilidad existe cuando hay un responsable identificable, recursos asignados y objetivos medibles. Puede ser centro de costos, ingresos, utilidades o inversion.",
        tutor: "Centro de inversion no se controla solo con presupuesto: exige mirar inversion comprometida, ROI, resultado residual u otros indicadores de retorno.",
        tutorExtended: "Los centros de costos se evalúan por costos controlables; los de ingresos por ventas o volumen; los de utilidades por ingresos menos costos bajo su responsabilidad; los de inversion por resultado en relacion con activos o capital invertido. Los precios de transferencia sirven para medir desempeno interno, pero al consolidar la empresa se eliminan porque son operaciones internas.",
        keyConcepts: [
          "Condiciones: responsable, recursos y objetivos medibles.",
          "Centros de inversion suelen ubicarse en niveles altos de la estructura.",
          "Precios de transferencia afectan resultados internos, no el resultado consolidado.",
          "Para consolidar, se eliminan ingresos y costos internos por transferencias."
        ],
        formulas: [
          { label: "Resultado consolidado", value: "Ventas a terceros - costos externos - costos reales de areas" },
          { label: "ROI", value: "Resultado / inversion o activo controlado" }
        ],
        typicalMistakes: [
          "Creer que precios de transferencia siempre mejoran la colaboracion.",
          "Controlar centros de inversion solo por presupuesto.",
          "Sumar ingresos internos como si fueran ventas reales de la empresa."
        ],
        exerciseConnection: "Cubre Julio 2023 Caso 12 y preguntas teoricas de centros de responsabilidad.",
        controlQuestions: [
          "Que condicion minima exige un centro de responsabilidad?",
          "Por que un centro de inversion requiere indicadores de retorno?",
          "Que se elimina al consolidar precios de transferencia?"
        ],
        examUse: "Julio 2023 Caso 12: para consolidar, no importan los precios internos. Se despeja costo de reformas desde la informacion de Comercial: el costo real de reformas es 142.400. Resultado total = ventas a terceros 890.000 - costo adquisicion 712.000 - reformas 142.400 - otros costos 6.300 - 4.200 - 10.500 = 14.600.",
        changelog: AUDIT,
        auditNote: "Cubre centros, inversion y precios de transferencia detectados en Julio 2023 P12/P15 y Febrero/Diciembre teoricas."
      },
      {
        id: "ut4-audit-er-lineas",
        title: "Estado de resultados por lineas",
        body: "En un ER por lineas, la contribucion marginal de cada producto menos sus costos fijos directos da el margen de operacion de la linea. Luego se restan costos fijos indirectos para llegar al resultado de la empresa.",
        tutor: "Si el enunciado dice 'margen de operacion de la empresa' antes de costos fijos indirectos, no los restes para despejar el costo de una linea.",
        tutorExtended: "La estructura usual es: ventas por linea - costos variables de fabrica - costos variables comerciales = contribucion marginal. Luego se restan costos fijos directos de la linea para obtener margen de operacion por producto. La suma de margenes de operacion menos costos fijos indirectos da el resultado operativo global.",
        keyConcepts: [
          "Costos variables comerciales pueden ser porcentaje de ventas.",
          "CF directos se restan a la linea que los genera.",
          "CF indirectos no especificos se restan despues de sumar lineas.",
          "El margen indicado por el caso define si los indirectos ya fueron restados o no."
        ],
        formulas: [
          { label: "Margen linea", value: "Ventas - CV fabrica - CV comercial - CF directos" },
          { label: "Resultado empresa", value: "Suma margenes de operacion - CF indirectos" }
        ],
        typicalMistakes: [
          "Restar CF indirectos antes de despejar una linea.",
          "Olvidar el costo variable comercial como porcentaje de ventas.",
          "Confundir margen de operacion por linea con utilidad final."
        ],
        exerciseConnection: "Cubre Julio 2023 P4.",
        controlQuestions: [
          "Que diferencia hay entre CF directos e indirectos?",
          "Donde entra una comision del 10% sobre ventas?",
          "Que significa que el margen sea antes de CF indirectos?"
        ],
        examUse: "Julio 2023 P4: A aporta 250 x (1.600 - 840 - 160) - 40.000 = 110.000. C aporta 450 x (1.100 - 600 - 110) - 57.000 = 118.500. Si el margen de operacion antes de CF indirectos es 54.000, B debe aportar 54.000 - 110.000 - 118.500 = -174.500. Para B: 400 x (750 - X - 75) - 45.000 = -174.500. Entonces 400 x (675 - X) = -129.500; X = 998,75.",
        changelog: AUDIT,
        auditNote: "Cubre el despeje de Julio 2023 P4 y la confusion sobre CF indirectos."
      },
      {
        id: "ut4-audit-market-share",
        title: "Presupuesto de ventas con market share",
        body: "Cuando el mercado esta expresado en unidades, el ingreso devengado se calcula con mercado total esperado, participacion de mercado y precio esperado. Los plazos de cobro son distractores si piden ventas del ER.",
        tutor: "Primero unidades de mercado, despues market share, despues precio. Si piden ER, ignora plazos de cobranza.",
        tutorExtended: "El market share debe ser consistente con la unidad de medida. Si se calcula en unidades fisicas, no se usa la participacion en pesos salvo que primero se convierta a unidades. Los cambios de precio afectan ingresos, pero no unidades. Los plazos de cobro afectan deudores y flujo de caja, no ventas devengadas.",
        keyConcepts: [
          "Mercado esperado = mercado base x variacion esperada.",
          "Unidades empresa = mercado esperado x market share.",
          "Ventas ER = unidades empresa x precio esperado.",
          "Plazos de cobro no alteran ventas devengadas."
        ],
        formulas: [
          { label: "Ventas con share", value: "Mercado unidades x participacion x precio" }
        ],
        typicalMistakes: [
          "Usar market share en pesos cuando el enunciado pide unidades.",
          "Aplicar plazos de cobro a ingresos devengados.",
          "Olvidar rebajas de precio."
        ],
        exerciseConnection: "Cubre Diciembre 2022 P7 y Febrero 2023 P7.",
        controlQuestions: [
          "Que pasa si el mercado baja 10% en unidades?",
          "Por que los plazos de cobro no cambian el ER?",
          "Como calculas el precio año 2 si baja en dos unidades monetarias?"
        ],
        examUse: "Diciembre 2022 P7: mercado total año 1 = 390.000 + 230.000 + 60.000 + 320.000 = 1.000.000 unidades. A tenia 390.000 unidades = 39%. Año 2: mercado baja 10% = 900.000; share sube a 41%; unidades A = 369.000. Precio A año 1 = 24.960.000 / 390.000 = 64; precio año 2 = 62. Ventas = 369.000 x 62 = 22.878.000.",
        changelog: AUDIT,
        auditNote: "Cubre presupuesto de ventas y distractores de cobro en Diciembre 2022 P7."
      },
      {
        id: "ut4-audit-patrimonio-presupuestado",
        title: "Presupuesto patrimonial",
        body: "El patrimonio presupuestado se construye con capital, resultados acumulados, resultado del periodo y aportes de propietarios. Los prestamos de accionistas son pasivos, no patrimonio.",
        tutor: "Si dice prestamo sin intereses del accionista para capital de giro, no lo metas en patrimonio: es deuda.",
        tutorExtended: "Los aportes en efectivo o especie aumentan patrimonio cuando son aportes de capital. Los aportes posteriores al cierre que se pide no se incluyen. El resultado parcial del ejercicio se suma o resta segun corresponda hasta la fecha pedida.",
        keyConcepts: [
          "Capital integrado forma parte del patrimonio.",
          "Resultados acumulados pueden ser positivos o negativos.",
          "Aportes de capital en efectivo o especie aumentan patrimonio.",
          "Prestamos de accionistas aumentan pasivo, no patrimonio."
        ],
        formulas: [
          { label: "Patrimonio presupuestado", value: "Capital + resultados acumulados + resultado periodo + aportes de capital" }
        ],
        typicalMistakes: [
          "Incluir prestamos de accionistas como patrimonio.",
          "Incluir aportes posteriores a la fecha solicitada.",
          "Tomar una perdida acumulada como suma positiva."
        ],
        exerciseConnection: "Cubre Diciembre 2022 P4.",
        controlQuestions: [
          "Que diferencia hay entre aporte de capital y prestamo de accionista?",
          "Que resultados trimestrales entran si se pide cierre del primer semestre?",
          "Como se trata una maquinaria aportada en julio si el cierre pedido es junio?"
        ],
        examUse: "Diciembre 2022 P4: patrimonio inicial = capital 2.700.000 - perdida acumulada 1.800.000 + resultado 2022 2.200.000 = 3.100.000. Aportes primer semestre: efectivo 150.000 + bonos 780.000 = 930.000. Resultado primer semestre = -790.000 + 900.000 = 110.000. La maquinaria de julio no entra y el prestamo de accionistas es pasivo. Patrimonio = 3.100.000 + 930.000 + 110.000 = 4.140.000.",
        changelog: AUDIT,
        auditNote: "Cubre patrimonio presupuestado y trampa de prestamos de accionistas en Diciembre 2022 P4."
      },
      {
        id: "ut4-audit-ciclo-creditos",
        title: "Ciclo de conversion de creditos por ventas",
        body: "El ciclo de creditos mide cuantos dias de ventas a credito quedan financiados en promedio por la empresa. Se calcula con saldo promedio de creditos dividido ventas a credito diarias.",
        tutor: "Si hay cobranzas dadas, primero reconstruí el saldo final: saldo inicial + ventas a credito - cobranzas.",
        tutorExtended: "El saldo promedio se obtiene como promedio simple entre saldo inicial y final, salvo que el enunciado indique otra base. Si las ventas estan gravadas con IVA y el saldo de deudores esta facturado, el denominador debe incluir IVA.",
        keyConcepts: [
          "Saldo final = saldo inicial + ventas a credito - cobranzas.",
          "Saldo promedio = (saldo inicial + saldo final) / 2.",
          "Ventas diarias = ventas del periodo / dias del periodo.",
          "Usar ventas a credito, no ventas totales, si hay parte contado."
        ],
        formulas: [
          { label: "Ciclo creditos", value: "Saldo promedio de creditos / ventas a credito diarias" }
        ],
        typicalMistakes: [
          "Usar ventas totales cuando hay ventas contado.",
          "No reconstruir saldo final con cobranzas.",
          "Mezclar ventas sin IVA con saldos con IVA."
        ],
        exerciseConnection: "Cubre Diciembre 2022 P11 y Julio 2023 P6.",
        controlQuestions: [
          "Como reconstruis el saldo final de deudores?",
          "Que ventas entran al denominador?",
          "Cuando debe incluirse IVA?"
        ],
        examUse: "Diciembre 2022 P11: ventas del trimestre = 10.260 x 13 = 133.380. Saldo final creditos = 82.000 + 133.380 - 92.864 = 122.516. Saldo promedio = (82.000 + 122.516) / 2 = 102.258. Ventas diarias = 133.380 / 90 = 1.482. Ciclo real = 102.258 / 1.482 = 69 dias.",
        changelog: AUDIT,
        auditNote: "Cubre formula propia y reconstruccion del saldo final en Diciembre 2022 P11."
      },
      {
        id: "ut4-audit-pe-financiero",
        title: "Punto de equilibrio financiero",
        body: "El punto de equilibrio financiero busca cubrir solo los costos fijos que implican salida de fondos en el periodo. Por eso excluye amortizaciones y otros costos no pagados.",
        tutor: "Formula corta: ventas de equilibrio financiero = costos fijos que se pagan / razon de contribucion.",
        tutorExtended: "Primero se calcula la razon de contribucion con precio y costo variable. Luego se identifican los costos fijos que efectivamente implican pago. Si el enunciado entrega una estructura con depreciaciones incluidas, deben restarse para llegar al fijo financiero.",
        keyConcepts: [
          "No todo costo contable es salida de caja.",
          "Amortizaciones se excluyen del equilibrio financiero.",
          "La razon de contribucion transforma costos fijos financieros en ventas necesarias.",
          "Puede calcularse en unidades monetarias o fisicas."
        ],
        formulas: [
          { label: "PE financiero en ventas", value: "Ve financiero = costos fijos que implican pago / razon de contribucion" }
        ],
        typicalMistakes: [
          "Incluir depreciaciones como pago.",
          "Usar margen unitario cuando piden unidades monetarias.",
          "Confundir equilibrio economico con financiero."
        ],
        exerciseConnection: "Cubre Agosto 2022 P6 y casos de equilibrio financiero.",
        controlQuestions: [
          "Que costo fijo no se paga en el periodo?",
          "Por que se usa razon de contribucion para ventas en pesos?",
          "En que difiere del equilibrio economico?"
        ],
        examUse: "Agosto 2022 P6: CF contables = 300 litros x $3 = 900. Depreciacion no pagada = 54, entonces CF financieros = 846. Razon de contribucion = (7,70 - 3,08) / 7,70 = 0,60. Ventas de equilibrio financiero = 846 / 0,60 = 1.410.",
        changelog: AUDIT,
        auditNote: "Eleva el punto de equilibrio financiero a leccion formal."
      },
      {
        id: "ut4-audit-prestamos",
        title: "Cronogramas de prestamos",
        body: "En prestamos con amortizacion constante, cada cuota de capital es igual. El interes puede calcularse sobre saldo o sobre capital original segun lo diga el enunciado.",
        tutor: "Separá tres preguntas: capital adeudado, intereses pagados e intereses devengados no pagados. No siempre dan lo mismo.",
        tutorExtended: "Si las cuotas fueron pagadas, el capital baja en cada vencimiento. Si solo se abonaron intereses y no capital, el saldo de capital no baja. Para saldos financieros, puede sumarse interes devengado no pagado si el enunciado dice que integra la deuda financiera.",
        keyConcepts: [
          "Amortizacion constante = capital original / cantidad de cuotas.",
          "Interes sobre saldo baja a medida que baja capital.",
          "Interes sobre capital original no baja aunque se amortice.",
          "Devengado acumulado puede diferir de pagado."
        ],
        formulas: [
          { label: "Amortizacion constante", value: "Capital / numero de cuotas" },
          { label: "Interes lineal", value: "Base de capital x tasa x fraccion de periodo" }
        ],
        typicalMistakes: [
          "Calcular intereses sobre saldo cuando el enunciado dice capital original.",
          "Restar capital aunque el caso diga que no se amortizo.",
          "Confundir intereses pagados con devengados al cierre."
        ],
        exerciseConnection: "Cubre Julio 2023 P7, Febrero 2023 P9/P10 y Diciembre 2022 P6.",
        controlQuestions: [
          "Cuando baja el capital adeudado?",
          "Que pasa si solo se pagan intereses?",
          "Que significa interes devengado y no pagado?"
        ],
        examUse: "Julio 2023 P7: al 30/06/año 2 solo se pagaron intereses y no se amortizo capital. Desde 01/04/año 1 hasta 30/06/año 2 hay 15 meses = 2,5 semestres. Intereses devengados = 1.700.000 x 5,9% x 2,5 = 250.750.",
        changelog: AUDIT,
        auditNote: "Agrega practica teorica para cronogramas de prestamos e intereses."
      }
    ]
  });

  upsertTopic("ut23", {
    title: "5. Auditoria de examenes reales: casos marginales especiales",
    lessons: [
      {
        id: "ut23-audit-produccion-conjunta",
        title: "Produccion conjunta y subproductos",
        body: "Cuando un proceso genera un producto principal y un subproducto, la contribucion por unidad de materia prima procesada debe sumar los ingresos de ambos productos y restar los costos variables del proceso.",
        tutor: "No tires el subproducto a un costado: si se vende, su ingreso reduce la actividad necesaria para cubrir fijos y utilidad.",
        tutorExtended: "La unidad economica puede no ser el kilo del producto final, sino la tonelada de materia prima procesada. Por cada unidad de proceso se calcula el ingreso del producto principal, el ingreso del subproducto, los costos variables de materia prima, otros costos variables y comisiones si existen. Esa contribucion por unidad de proceso se usa para equilibrio o utilidad objetivo.",
        keyConcepts: [
          "Unidad de analisis: materia prima procesada.",
          "Ingresos conjuntos: producto principal + subproducto.",
          "Costos variables: materia prima, procesamiento y comerciales.",
          "Ampliar capacidad puede agregar costos fijos incrementales."
        ],
        formulas: [
          { label: "Contribucion por proceso", value: "Ingresos producto principal + ingresos subproducto - costos variables del proceso" }
        ],
        typicalMistakes: [
          "Ignorar el ingreso del subproducto.",
          "Mezclar kilos y toneladas.",
          "Olvidar los fijos incrementales al ampliar capacidad."
        ],
        exerciseConnection: "Cubre Diciembre 2022 P2.",
        controlQuestions: [
          "Cual es la unidad de actividad correcta?",
          "Como entra el subproducto vendido?",
          "Que cambia al duplicar capacidad?"
        ],
        examUse: "Diciembre 2022 P2: por tonelada procesada se obtienen 500 kg de A a $2 = 1.000 y 0,5 toneladas de X a $140 = 70. Costos variables por tonelada = 410 + 30 = 440. Contribucion por tonelada = 630. Resultado actual = 200 x 630 - 7.560 = 118.440. Con planta ampliada, CF = 7.560 x 1,80 = 13.608. Para mantener beneficio: Q x 630 - 13.608 = 118.440. Q = 209,60 toneladas.",
        changelog: AUDIT,
        auditNote: "Cubre produccion conjunta/subproducto faltante de Diciembre 2022 P2."
      }
    ]
  });

  addFormula("ut4", { label: "Variacion CT metodologia ESP", value: "Delta CT = Delta PF + Delta Patrimonio - Delta BU - Delta Disp", changelog: AUDIT, auditNote: "AUDIT-2026-07 variaciones ESP" });
  addFormula("ut4", { label: "Variacion disponibilidades metodologia ESP", value: "Delta Disp = Delta PF + Delta Patrimonio - Delta CT - Delta BU", changelog: AUDIT, auditNote: "AUDIT-2026-07 variaciones ESP" });
  addFormula("ut4", { label: "Ciclo de creditos por ventas", value: "Saldo promedio de creditos / ventas a credito diarias con IVA si corresponde", changelog: AUDIT, auditNote: "AUDIT-2026-07 ciclos" });
  addFormula("ut4", { label: "PE financiero", value: "Ventas de equilibrio financiero = costos fijos pagables / razon de contribucion", changelog: AUDIT, auditNote: "AUDIT-2026-07 equilibrio financiero" });
  addFormula("ut23", { label: "Produccion conjunta", value: "Contribucion por unidad de proceso = ingresos conjuntos - costos variables conjuntos", changelog: AUDIT, auditNote: "AUDIT-2026-07 subproductos" });

  const auditExercises = [
    {
      id: "audit-reutilice-exportacion",
      unit: "ut23",
      title: "Reutilice SRL: exportar con capacidad plena",
      difficulty: "Examen real",
      source: "Diciembre 2022 P1",
      intro: "Reutilice vende vaqueros usados a $120, con costo variable $65 y capacidad plena. Exportar exige sueldo fijo adicional $19.050, precio $300 y comision variable 10% sobre precio. Determina desde cuantas unidades conviene exportar.",
      steps: [
        { prompt: "Calcula la contribucion por unidad del local actual.", answer: 55, tolerance: 0.01, explanation: "Local actual: 120 - 65 = 55." },
        { prompt: "Calcula la contribucion por unidad exportada.", answer: 205, tolerance: 0.01, explanation: "Exportacion: 300 - 65 - 30 = 205. El costo variable del vaquero tambien existe en la exportacion." },
        { prompt: "Calcula la mejora incremental por unidad exportada.", answer: 150, tolerance: 0.01, explanation: "Al estar a capacidad plena, cada unidad exportada desplaza una unidad local: 205 - 55 = 150." },
        { prompt: "Calcula el punto de indiferencia en unidades.", answer: 127, tolerance: 0.01, explanation: "19.050 / 150 = 127 unidades. Este metodo valida la correccion de Mascotas SRL/ag22-4." }
      ]
    },
    {
      id: "audit-esp-diciembre-p6",
      unit: "ut4",
      title: "Variacion ESP: Diciembre 2022 P6",
      difficulty: "Examen real",
      source: "Diciembre 2022 P6",
      intro: "PF presupuestado $377.400. Disponibilidades presupuestadas $25.000 y reales $36.000. Patrimonio presupuestado $150.000 y real $280.000. BU sin variacion. Prestamo real: $828.000, 12 cuotas mensuales de amortizacion constante, primera 31/07.",
      steps: [
        { prompt: "Calcula el saldo real de pasivos financieros al 30/11.", answer: 483000, tolerance: 0.01, explanation: "Amortizacion mensual = 828.000 / 12 = 69.000. De julio a noviembre se pagaron 5 cuotas: 345.000. Saldo real = 828.000 - 345.000 = 483.000." },
        { prompt: "Calcula Delta PF.", answer: 105600, tolerance: 0.01, explanation: "Delta PF = 483.000 - 377.400 = 105.600." },
        { prompt: "Calcula Delta Patrimonio.", answer: 130000, tolerance: 0.01, explanation: "Delta Patrimonio = 280.000 - 150.000 = 130.000." },
        { prompt: "Calcula Delta Disponibilidades.", answer: 11000, tolerance: 0.01, explanation: "Delta Disp = 36.000 - 25.000 = 11.000." },
        { prompt: "Calcula Delta CT.", answer: 224600, tolerance: 0.01, explanation: "Delta CT = 105.600 + 130.000 - 0 - 11.000 = 224.600." }
      ]
    },
    {
      id: "audit-esp-julio-p9",
      unit: "ut4",
      title: "Variacion disponibilidades: Julio 2023 P9",
      difficulty: "Examen real",
      source: "Julio 2023 P9",
      intro: "PF presupuestado $377.400. CT presupuestado $90.000 y real $129.000. BU sin variacion. Patrimonio presupuestado $150.000 y real $210.000. Prestamo real $792.000, 12 cuotas mensuales de amortizacion constante, primera 28/02.",
      steps: [
        { prompt: "Calcula el saldo real de pasivos financieros al 30/06.", answer: 462000, tolerance: 0.01, explanation: "Amortizacion mensual = 792.000 / 12 = 66.000. De febrero a junio se pagaron 5 cuotas: 330.000. PF real = 792.000 - 330.000 = 462.000." },
        { prompt: "Calcula Delta PF.", answer: 84600, tolerance: 0.01, explanation: "Delta PF = 462.000 - 377.400 = 84.600." },
        { prompt: "Calcula Delta Patrimonio.", answer: 60000, tolerance: 0.01, explanation: "Delta Patrimonio = 210.000 - 150.000 = 60.000." },
        { prompt: "Calcula Delta CT.", answer: 39000, tolerance: 0.01, explanation: "Delta CT = 129.000 - 90.000 = 39.000." },
        { prompt: "Calcula Delta Disponibilidades.", answer: 105600, tolerance: 0.01, explanation: "Delta Disp = 84.600 + 60.000 - 39.000 - 0 = 105.600." }
      ]
    },
    {
      id: "audit-er-diciembre-p10",
      unit: "ut4",
      title: "Variacion gastos de estructura",
      difficulty: "Examen real",
      source: "Diciembre 2022 P10",
      intro: "Presupuesto y real: salarios 476.000 vs 502.000; honorarios 240.000 vs 220.000; otros GAV 118.200 vs 118.200. Intereses y costo de ventas no integran esta variacion.",
      steps: [
        { prompt: "Calcula la variacion economica de salarios.", answer: -26000, tolerance: 0.01, explanation: "Real supera presupuesto en 26.000, por eso es -26.000 desfavorable." },
        { prompt: "Calcula la variacion economica de honorarios.", answer: 20000, tolerance: 0.01, explanation: "Real es 20.000 menor al presupuesto, por eso es +20.000 favorable." },
        { prompt: "Calcula la variacion de otros GAV.", answer: 0, tolerance: 0.01, explanation: "118.200 real - 118.200 presupuesto = 0." },
        { prompt: "Calcula la variacion total de gastos de estructura.", answer: -6000, tolerance: 0.01, explanation: "-26.000 + 20.000 + 0 = -6.000." }
      ]
    },
    {
      id: "audit-iva-creditos-julio",
      unit: "ut4",
      title: "IVA y ciclo de creditos",
      difficulty: "Examen real",
      source: "Julio 2023 P6",
      intro: "Creditos iniciales $1.080.000 y finales $129.600. Ventas anuales sin IVA $6.300.000. IVA 20%. Ventas 20% contado y 80% credito. Año comercial 360 dias.",
      steps: [
        { prompt: "Calcula el saldo promedio de creditos.", answer: 604800, tolerance: 0.01, explanation: "(1.080.000 + 129.600) / 2 = 604.800." },
        { prompt: "Calcula las ventas a credito anuales con IVA.", answer: 6048000, tolerance: 0.01, explanation: "6.300.000 x 80% x 1,20 = 6.048.000." },
        { prompt: "Calcula las ventas a credito diarias con IVA.", answer: 16800, tolerance: 0.01, explanation: "6.048.000 / 360 = 16.800." },
        { prompt: "Calcula el ciclo de creditos en dias.", answer: 36, tolerance: 0.01, explanation: "604.800 / 16.800 = 36 dias." }
      ]
    },
    {
      id: "audit-er-lineas-julio-p4",
      unit: "ut4",
      title: "ER por lineas: despejar costo de B",
      difficulty: "Examen real",
      source: "Julio 2023 P4",
      intro: "A: 250 unidades, precio 1.600, CV fabrica 840, CF directos 40.000. B: 400 unidades, precio 750, CV fabrica X, CF directos 45.000. C: 450 unidades, precio 1.100, CV fabrica 600, CF directos 57.000. CV comercial 10% ventas. Margen de operacion proyectado antes de CF indirectos: 54.000.",
      steps: [
        { prompt: "Calcula el margen de operacion de A.", answer: 110000, tolerance: 0.01, explanation: "A = 250 x (1.600 - 840 - 160) - 40.000 = 110.000." },
        { prompt: "Calcula el margen de operacion de C.", answer: 118500, tolerance: 0.01, explanation: "C = 450 x (1.100 - 600 - 110) - 57.000 = 118.500." },
        { prompt: "Calcula el margen que debe aportar B.", answer: -174500, tolerance: 0.01, explanation: "B = 54.000 - 110.000 - 118.500 = -174.500." },
        { prompt: "Despeja el costo variable unitario de fabrica de B.", answer: 998.75, tolerance: 0.01, explanation: "400 x (750 - X - 75) - 45.000 = -174.500. Entonces X = 998,75." }
      ]
    },
    {
      id: "audit-prestamo-julio-p7",
      unit: "ut4",
      title: "Prestamo: intereses devengados acumulados",
      difficulty: "Examen real",
      source: "Julio 2023 P7",
      intro: "Prestamo de $1.700.000 contratado el 01/04/año 1. Interes 5,9% semestral lineal. Al 30/06/año 2 solo se abonaron intereses, no capital. Calcular intereses devengados acumulados.",
      steps: [
        { prompt: "Cuantos semestres transcurren entre 01/04/año 1 y 30/06/año 2?", answer: 2.5, tolerance: 0.01, explanation: "Son 15 meses; 15 / 6 = 2,5 semestres." },
        { prompt: "Calcula el interes de un semestre.", answer: 100300, tolerance: 0.01, explanation: "1.700.000 x 5,9% = 100.300." },
        { prompt: "Calcula los intereses devengados acumulados.", answer: 250750, tolerance: 0.01, explanation: "100.300 x 2,5 = 250.750." }
      ]
    },
    {
      id: "audit-produccion-conjunta-dic22",
      unit: "ut23",
      title: "Produccion conjunta: La Multiple SA",
      difficulty: "Examen real",
      source: "Diciembre 2022 P2",
      intro: "Por cada tonelada de materia prima Z se obtienen 500 kg de A y 500 kg de subproducto X. A se vende a $2/kg y X a $140/ton. Materia prima $410/ton y otros variables $30/ton. CF actuales $7.560, capacidad 200 toneladas. Duplicar capacidad aumenta CF 80%.",
      steps: [
        { prompt: "Calcula ingresos por tonelada procesada.", answer: 1070, tolerance: 0.01, explanation: "A: 500 x 2 = 1.000. X: 0,5 x 140 = 70. Total = 1.070." },
        { prompt: "Calcula la contribucion por tonelada.", answer: 630, tolerance: 0.01, explanation: "1.070 - 410 - 30 = 630." },
        { prompt: "Calcula el beneficio actual.", answer: 118440, tolerance: 0.01, explanation: "200 x 630 - 7.560 = 118.440." },
        { prompt: "Calcula los nuevos costos fijos.", answer: 13608, tolerance: 0.01, explanation: "7.560 x 1,80 = 13.608." },
        { prompt: "Calcula las toneladas necesarias para mantener beneficio.", answer: 209.6, tolerance: 0.01, explanation: "Q x 630 - 13.608 = 118.440. Q = 209,60." }
      ]
    },
    {
      id: "audit-market-share-dic22",
      unit: "ut4",
      title: "Ventas con market share: Empresa A",
      difficulty: "Examen real",
      source: "Diciembre 2022 P7",
      intro: "Año 1 mercado: A 390.000 unidades y $24.960.000; B 230.000; C 60.000; D 320.000. Año 2 el mercado baja 10%, A sube 2 puntos de market share y su precio baja $2. Calcular ventas devengadas de A.",
      steps: [
        { prompt: "Calcula el mercado total en unidades del año 1.", answer: 1000000, tolerance: 0.01, explanation: "390.000 + 230.000 + 60.000 + 320.000 = 1.000.000." },
        { prompt: "Calcula el market share de A en año 1.", answer: 39, tolerance: 0.01, explanation: "390.000 / 1.000.000 = 39%." },
        { prompt: "Calcula las unidades de A en año 2.", answer: 369000, tolerance: 0.01, explanation: "Mercado año 2 = 900.000. Share A = 41%. Unidades = 369.000." },
        { prompt: "Calcula el precio de A en año 2.", answer: 62, tolerance: 0.01, explanation: "Precio año 1 = 24.960.000 / 390.000 = 64. Baja $2: precio año 2 = 62." },
        { prompt: "Calcula ingresos por ventas devengados.", answer: 22878000, tolerance: 0.01, explanation: "369.000 x 62 = 22.878.000. Los plazos de cobro son distractor para ER." }
      ]
    },
    {
      id: "audit-patrimonio-dic22",
      unit: "ut4",
      title: "Patrimonio presupuestado: aportes y prestamos",
      difficulty: "Examen real",
      source: "Diciembre 2022 P4",
      intro: "Capital 2.700.000; resultados acumulados anteriores perdida 1.800.000; resultado 2022 ganancia 2.200.000. En 2023: aporte efectivo marzo 150.000, bonos junio 780.000, maquinaria julio 850.000, prestamo de accionistas mayo 1.400.000. Resultados: T1 perdida 790.000, T2 ganancia 900.000.",
      steps: [
        { prompt: "Calcula el patrimonio inicial al 31/12/2022.", answer: 3100000, tolerance: 0.01, explanation: "2.700.000 - 1.800.000 + 2.200.000 = 3.100.000." },
        { prompt: "Calcula aportes de capital del primer semestre.", answer: 930000, tolerance: 0.01, explanation: "Efectivo marzo 150.000 + bonos junio 780.000 = 930.000. La maquinaria de julio no entra." },
        { prompt: "Calcula resultado del primer semestre.", answer: 110000, tolerance: 0.01, explanation: "-790.000 + 900.000 = 110.000." },
        { prompt: "Calcula patrimonio al cierre del primer semestre.", answer: 4140000, tolerance: 0.01, explanation: "3.100.000 + 930.000 + 110.000 = 4.140.000. El prestamo del accionista es pasivo." }
      ]
    }
  ];

  for (const exercise of auditExercises) addAuditExercise(exercise);

  const questionPatches = {
    "dic22-1": {
      options: ["115", "127", "176", "80"],
      answer: 1,
      explanation: "Local actual: contribucion = 120 - 65 = 55. Exportacion: precio 300 - costo variable producto 65 - comision 30 = 205. Como trabaja a capacidad plena, cada unidad exportada desplaza una venta local: mejora neta = 205 - 55 = 150. Costo fijo incremental = 19.050. Punto de indiferencia = 19.050 / 150 = 127 unidades.",
      auditNote: "Reescritura paso a paso y validacion del metodo usado para corregir ag22-4."
    },
    "dic22-2": {
      options: ["206,90", "290,60", "209,60", "20,96"],
      answer: 2,
      explanation: "Por tonelada procesada se obtienen 500 kg de A a $2 = 1.000 y 0,5 toneladas de X a $140 = 70. Ingresos conjuntos por tonelada = 1.070. Costos variables por tonelada = materia prima 410 + otros 30 = 440. Contribucion por tonelada = 630. Beneficio actual = 200 x 630 - 7.560 = 118.440. Con planta ampliada, CF = 7.560 x 1,80 = 13.608. Para mantener beneficio: Q x 630 - 13.608 = 118.440; Q = 209,60.",
      auditNote: "Cubre produccion conjunta y subproducto."
    },
    "dic22-3": {
      options: ["9.800", "4.900", "49.000", "50.000"],
      answer: 2,
      explanation: "El lote de compra es 9.800 kg. Si el consumo es uniforme y no hay stock de seguridad adicional, el stock medio fisico es lote / 2 = 4.900 kg. Precio de compra = $10 por kg. Inversion promedio = 4.900 x 10 = 49.000.",
      auditNote: "Reescritura de stock medio e inversion promedio."
    },
    "dic22-4": {
      options: ["4.014.000", "4.140.000", "414.000", "5.540.000"],
      answer: 1,
      explanation: "Patrimonio inicial = capital 2.700.000 - perdida acumulada 1.800.000 + resultado 2022 2.200.000 = 3.100.000. Aportes del primer semestre: efectivo 150.000 + bonos 780.000 = 930.000. La maquinaria se aporta en julio, por lo que no entra al cierre de junio. Resultado primer semestre = -790.000 + 900.000 = 110.000. Prestamo de accionistas = pasivo, no patrimonio. Patrimonio = 3.100.000 + 930.000 + 110.000 = 4.140.000.",
      auditNote: "Cubre presupuesto patrimonial y prestamo de accionistas como pasivo."
    },
    "dic22-5": {
      options: ["160.000", "130.000", "290.000", "660.000"],
      answer: 1,
      explanation: "Ventas mensuales = 1.600 x 370 = 592.000. Como se cobra a 2 meses, durante el año se cobran 10 meses de ventas: 5.920.000. Tambien se cobra el saldo inicial de deudores: 540.000. Cobros totales = 6.460.000. Saldo previo = disponible inicial 660.000 + cobros 6.460.000 - pagos 6.960.000 = 160.000. Para llegar al minimo de 290.000 se necesita asistencia = 130.000.",
      auditNote: "Reescritura de flujo de fondos y asistencia financiera."
    },
    "dic22-6": {
      options: ["105.600", "224.600", "377.400", "130.000"],
      answer: 1,
      explanation: "Prestamo real: 828.000 en 12 cuotas de amortizacion constante, cuota capital = 69.000. De julio a noviembre se pagan 5 cuotas, por lo que PF real = 828.000 - 345.000 = 483.000. Delta PF = 483.000 - 377.400 = 105.600. Delta Patrimonio = 280.000 - 150.000 = 130.000. Delta Disponibilidades = 36.000 - 25.000 = 11.000. Delta BU = 0. Delta CT = 105.600 + 130.000 - 0 - 11.000 = 224.600.",
      auditNote: "Cubre variaciones del ESP."
    },
    "dic22-7": {
      options: ["2.287.800", "21.878.000", "22.878.000", "28.878.000"],
      answer: 2,
      explanation: "Mercado total año 1 = 390.000 + 230.000 + 60.000 + 320.000 = 1.000.000 unidades. Empresa A tenia 390.000 unidades, o sea 39%. En año 2 el mercado baja 10%: 900.000 unidades. A sube 2 puntos de share: 41%. Unidades A año 2 = 900.000 x 41% = 369.000. Precio año 1 de A = 24.960.000 / 390.000 = 64; precio año 2 baja a 62. Ventas devengadas = 369.000 x 62 = 22.878.000. Los plazos de cobro no afectan el ER.",
      auditNote: "Cubre market share y distractores de plazo de cobro."
    },
    "dic22-8": {
      options: ["838.000", "883.000", "669.800", "491.400"],
      answer: 0,
      explanation: "Se paga el saldo inicial de proveedores: 330.000. Equipamiento de enero: 49 x 2.400 = 117.600, se paga a 60 dias dentro del semestre. Equipamiento de febrero: 46 x 4.900 = 225.400, tambien se paga dentro del semestre. Indumentaria de febrero: 55 x 3.000 = 165.000, se paga a 120 dias dentro del semestre. Las compras de mayo y junio vencen despues del 30/06. Pagos = 330.000 + 117.600 + 225.400 + 165.000 = 838.000.",
      auditNote: "Reescritura de pagos a proveedores por plazos."
    },
    "dic22-9": {
      options: ["2.138.400", "231.840", "2.318.400", "491.400"],
      answer: 2,
      explanation: "Al cierre año 1: vehiculo neto = 1.580.000 - 790.000 = 790.000; muebles neto = 370.000 - 148.000 = 222.000; equipamiento neto = 580.000 - 58.000 = 522.000. En año 2 se entrega el vehiculo viejo, por lo que sale su neto 790.000, y entra el nuevo vehiculo por 1.896.000. Amortizacion año 2: nuevo vehiculo 189.600, muebles 74.000, equipamiento 58.000. Neto cierre = nuevo vehiculo 1.706.400 + muebles 148.000 + equipamiento 464.000 = 2.318.400.",
      auditNote: "Reescritura de bienes de uso netos."
    },
    "dic22-10": {
      options: ["6.000", "-6.000", "-190", "69"],
      answer: 1,
      explanation: "Gastos de estructura incluyen salarios, honorarios y otros GAV, incluidas amortizaciones. No incluyen costo de ventas ni intereses. Salarios: real 502.000 vs presupuesto 476.000, gasto mayor = -26.000. Honorarios: real 220.000 vs presupuesto 240.000, gasto menor = +20.000. Otros GAV: 118.200 vs 118.200 = 0. Variacion total = -26.000 + 20.000 = -6.000.",
      auditNote: "Cubre variacion de gastos de estructura."
    },
    "dic22-11": {
      options: ["120", "96", "69", "-69"],
      answer: 2,
      explanation: "Ventas del trimestre = 10.260 x 13 = 133.380. Como son a credito y sin IVA, ese importe alimenta creditos. Saldo final de creditos = saldo inicial 82.000 + ventas 133.380 - cobranza 92.864 = 122.516. Saldo promedio = (82.000 + 122.516) / 2 = 102.258. Ventas diarias del trimestre = 133.380 / 90 = 1.482. Ciclo real = 102.258 / 1.482 = 69 dias.",
      auditNote: "Cubre reconstruccion de saldo final de creditos."
    },
    "dic22-12": {
      options: ["62.720", "6.272", "6.546", "26.220"],
      answer: 1,
      explanation: "Para Q mayor a 5.000 litros, costo de ventas FIFO = 5.000 x 14 + (Q - 5.000) x 15 = 15Q - 5.000. Ventas = 20Q. Costos fijos RAII = salarios 1.360 + GAV 30.000 + amortizaciones 5.000 = 36.360. RAII = 20Q - (15Q - 5.000) - 36.360 = 5Q + 5.000 - 36.360. Para RAII cero: 5Q = 31.360; Q = 6.272.",
      auditNote: "Cubre equilibrio con FIFO."
    },
    "dic22-13": {
      prompt: "Pregunta teorica: (1) Cuando no existen inventarios iniciales ni finales de MP, PP y PT, la utilidad por costeo variable coincide con costeo completo. (2) Cuando no existen inventarios finales de MP, PP y PT, la utilidad coincide en todos los casos.",
      options: ["Las dos afirmaciones son correctas", "La afirmacion 1 es correcta y la 2, incorrecta", "La afirmacion 2 es correcta y la 1, incorrecta", "Las dos afirmaciones son incorrectas", "Dejar en blanco"],
      answer: 1,
      explanation: "La primera es correcta porque sin inventarios iniciales ni finales no hay fijos de produccion activados o liberados. La segunda es incorrecta: aunque no haya inventarios finales, pueden existir inventarios iniciales con fijos activados que se liberen al costo de ventas.",
      auditNote: "Corrige formato teorico segun PDF."
    },
    "dic22-14": {
      prompt: "Pregunta teorica: (1) Con capacidad ociosa, vender productos con contribucion marginal positiva incrementa el resultado aunque el precio no cubra costo completo. (2) Que el precio sea inferior al costo completo no alcanza para decidir la viabilidad economica.",
      options: ["Las dos afirmaciones son correctas", "La afirmacion 1 es correcta y la 2, incorrecta", "La afirmacion 2 es correcta y la 1, incorrecta", "Las dos afirmaciones son incorrectas", "Dejar en blanco"],
      answer: 0,
      explanation: "Ambas son correctas. Si hay capacidad ociosa y contribucion marginal positiva, la venta aporta a cubrir estructura y mejorar resultado. El costo completo puede incluir fijos no diferenciales, por lo que no alcanza para decidir.",
      auditNote: "Corrige teoria de capacidad ociosa/costeo completo."
    },
    "dic22-15": {
      prompt: "Pregunta teorica: (i) En general los centros de inversion se pueden controlar a traves del presupuesto. (ii) Contar con un responsable a cargo es condicion para que exista un centro de responsabilidad.",
      options: ["Solo la primera es correcta", "Solo la segunda es correcta", "Ambas afirmaciones son correctas", "Ninguna de las dos afirmaciones es correcta", "Dejar en blanco"],
      answer: 1,
      explanation: "Solo la segunda es correcta. Un centro de responsabilidad requiere responsable identificable. Los centros de inversion no se controlan solo por presupuesto: requieren indicadores como ROI, resultado residual o retorno sobre activos.",
      auditNote: "Cubre centros de responsabilidad."
    },
    "dic22-16": {
      prompt: "Pregunta teorica: (i) El analisis de desvios puede ayudar a revisar criterios de confeccion del presupuesto, por ejemplo metas presupuestales. (ii) La planificacion presupuestaria debe vincularse a la estrategia, aunque no este formalizada.",
      options: ["Solo la primera es correcta", "Solo la segunda es correcta", "Ambas afirmaciones son correctas", "Ninguna de las dos afirmaciones es correcta", "Dejar en blanco"],
      answer: 2,
      explanation: "Ambas son correctas. El analisis de desvios no solo controla ejecucion: tambien permite aprender y mejorar criterios presupuestales. Ademas, el presupuesto debe estar alineado con la estrategia aun cuando esta no este formalizada en documentos.",
      auditNote: "Cubre control presupuestal y estrategia."
    },
    "jul23-1": {
      explanation: "Se trabaja con la diferencia de fijos de produccion contenidos en inventarios. Fijos en inventario inicial PT = 10.000 x (240 - 170) = 700.000. Fijos en inventario inicial PP = 1.000.000 - 850.000 = 150.000. Fijos en inventario final PP = 570.000 - 300.000 = 270.000. Como se producen 110.000 y se venden 100.000 despues de consumir 10.000 iniciales, quedan 20.000 unidades de produccion actual en PT final. Cada una contiene fijo = 275 - X. Diferencia de utilidades = [270.000 + 20.000 x (275 - X)] - [700.000 + 150.000] = 38.000. Entonces 5.770.000 - 20.000X - 850.000 = 38.000; X = 244,10.",
      auditNote: "Reescritura de diferencia de utilidades con inventarios."
    },
    "jul23-3": {
      explanation: "Para Q mayor a 5.000, el costo de ventas FIFO es 5.000 x 14 + (Q - 5.000) x 15 = 15Q - 5.000. Ventas = 20Q. Costos fijos RAII = 1.100 + 30.000 + 5.000 = 36.100. Se pide RAII objetivo 100.000. Entonces 20Q - (15Q - 5.000) - 36.100 = 100.000; 5Q - 31.100 = 100.000; 5Q = 131.100; Q = 26.220 kg. La capacidad maxima de 50.000 kg no limita la solucion.",
      auditNote: "Reescritura FIFO con utilidad objetivo."
    },
    "jul23-4": {
      explanation: "A aporta 250 x (1.600 - 840 - 160) - 40.000 = 110.000. C aporta 450 x (1.100 - 600 - 110) - 57.000 = 118.500. El margen de operacion proyectado de 54.000 se interpreta antes de CF indirectos; por tanto B debe aportar 54.000 - 110.000 - 118.500 = -174.500. Para B: 400 x (750 - X - 75) - 45.000 = -174.500. Entonces 400 x (675 - X) = -129.500; X = 998,75.",
      auditNote: "Cubre ER por lineas y CF indirectos."
    },
    "jul23-5": {
      explanation: "Sea Q la cantidad mensual. Ventas = 450.000. Costos variables = 100Q. Costos fijos = 129.000. Costos totales = 100Q + 129.000. La utilidad es 100% sobre costos totales, por lo que ventas = costos totales + utilidad = 2 x costos totales. Entonces 450.000 = 2 x (100Q + 129.000). 450.000 = 200Q + 258.000; Q = 960 unidades.",
      auditNote: "Reescritura algebraica de utilidad sobre costos."
    },
    "jul23-6": {
      explanation: "Saldo promedio de creditos = (1.080.000 + 129.600) / 2 = 604.800. Las ventas a credito son 80% de las ventas y deben incluir IVA porque los creditos estan facturados: 6.300.000 x 80% x 1,20 = 6.048.000. Ventas a credito diarias = 6.048.000 / 360 = 16.800. Ciclo = 604.800 / 16.800 = 36 dias.",
      auditNote: "Cubre IVA en ciclo de creditos."
    },
    "jul23-7": {
      explanation: "Desde 01/04/año 1 hasta 30/06/año 2 transcurren 15 meses, equivalentes a 2,5 semestres. Como al 30/06/año 2 solo se abonaron intereses y no se amortizo capital, la base sigue siendo 1.700.000. Intereses devengados = 1.700.000 x 5,9% x 2,5 = 250.750.",
      auditNote: "Cubre cronograma de prestamos e intereses devengados."
    },
    "jul23-8": {
      explanation: "Valor neto inicial = 780.000 - 312.000 = 468.000. Los bienes existentes tienen vida util 10 años, por lo que la amortizacion anual es 780.000 / 10 = 78.000. La maquinaria nueva entra en el cuarto mes y deprecia desde el mes siguiente: 8 meses de depreciacion. Amortizacion nueva = 117.000 / 5 x 8/12 = 15.600. Valor neto cierre = 468.000 + 117.000 - 78.000 - 15.600 = 491.400.",
      auditNote: "Reescritura de bienes de uso netos."
    },
    "jul23-9": {
      explanation: "Prestamo real = 792.000, amortizacion constante en 12 cuotas: 66.000 por mes. De febrero a junio se pagan 5 cuotas, por lo que PF real = 792.000 - 330.000 = 462.000. Delta PF = 462.000 - 377.400 = 84.600. Delta Patrimonio = 210.000 - 150.000 = 60.000. Delta CT = 129.000 - 90.000 = 39.000. Delta BU = 0. Por la identidad del curso: Delta Disp = Delta PF + Delta Patrimonio - Delta CT - Delta BU = 84.600 + 60.000 - 39.000 = 105.600.",
      auditNote: "Cubre variaciones del ESP."
    },
    "jul23-10": {
      explanation: "Del saldo real de deudores del ejercicio 1 queda para cobrar en ejercicio 3 el 20%: 520.000 x 20% = 104.000. Las ventas del cuarto trimestre del ejercicio 2 son 690.000 sin IVA, todas a credito a 60 dias y uniformes; al cierre quedan pendientes 2 de 3 meses del trimestre: 690.000 x 2/3 = 460.000 sin IVA. Como deudores va con IVA: 460.000 x 1,23 = 565.800. Saldo deudores cierre = 104.000 + 565.800 = 669.800.",
      auditNote: "Cubre IVA y saldo de deudores."
    },
    "jul23-11": {
      explanation: "La variacion economica del costo de ventas compara real contra presupuesto ajustado al volumen real y respetando FIFO. El costo de compra presupuestado era $20 y el real $21. La diferencia desfavorable es $1 por unidad afectada por la capa de compras. Segun la reconstruccion del caso, el sobrecosto impacta 190 unidades. Variacion = 190 x (20 - 21) = -190.",
      auditNote: "Cubre variacion economica de costo de ventas con FIFO."
    },
    "jul23-12": {
      explanation: "Los precios de transferencia sirven para medir centros internos, pero se eliminan en el resultado total de empresa. El costo real de reformas se despeja desde la informacion interna y resulta 142.400. Resultado consolidado = ventas a terceros 890.000 - costo de adquisicion 712.000 - reformas 142.400 - otros costos de Adquisiciones 6.300 - Mantenimiento 4.200 - Comercial 10.500 = 14.600.",
      auditNote: "Cubre centros de responsabilidad y eliminacion de transferencias internas."
    },
    "jul23-15": {
      explanation: "Ninguna afirmacion es correcta. Los centros de inversion suelen ubicarse en niveles altos de la estructura porque requieren responsabilidad sobre activos/capital invertido. Ademas, los precios de transferencia no son incompatibles por definicion con culturas de incentivos; pueden ayudar o perjudicar segun diseño, objetivos y conducta esperada.",
      auditNote: "Reescritura teorica de centros de inversion y precios de transferencia."
    },
    "feb23-1": {
      explanation: "Sea Q la cantidad mensual. Ventas = 450.000. Costos totales = 100Q + 172.000. La utilidad es 100% sobre costos totales, entonces ventas = 2 x costos totales. 450.000 = 2 x (100Q + 172.000) = 200Q + 344.000. Q = 106.000 / 200 = 530 unidades.",
      auditNote: "Elimina frase generica de respuesta correcta."
    },
    "feb23-4": {
      explanation: "Se calcula la contribucion por unidad de materia prima procesada sumando producto principal y subproducto, restando costos variables y comisiones. Luego se compara el beneficio actual contra la estructura ampliada. La respuesta oficial es 14.900 unidades; el metodo es el mismo que produccion conjunta: contribucion por unidad de proceso y costos fijos incrementales.",
      auditNote: "Elimina frase generica de respuesta correcta."
    },
    "feb23-6": {
      explanation: "La diferencia entre utilidades se explica por fijos de produccion en inventarios. Con la utilidad por completo de 100.000, se ajusta por fijos activados/liberados en IIPT/IIPP/IFPP y produccion del ejercicio. El resultado por variable queda 137.500.",
      auditNote: "Elimina frase generica de respuesta correcta."
    },
    "feb23-9": {
      explanation: "Amortizacion constante de capital = 3.000.000 / 10 = 300.000 por semestre. Al 30/09/año 1 se paga la primera cuota de capital, quedando capital 2.700.000. Al 31/12 se devengan intereses por tres meses sobre el saldo posterior a la cuota: 2.700.000 x 5,7% x 3/6 = 76.950. Deudas financieras = capital 2.700.000 + intereses devengados no pagados 76.950 = 2.776.950.",
      auditNote: "Elimina frase generica de respuesta correcta."
    },
    "feb23-10": {
      explanation: "El interes pagado del ejercicio corresponde al vencimiento del 30/09. Desde 01/04 hasta 30/09 transcurre un semestre sobre el capital original de 3.000.000. Interes pagado = 3.000.000 x 5,7% = 171.000.",
      auditNote: "Elimina frase generica de respuesta correcta."
    },
    "feb23-11": {
      explanation: "Ventas mensuales = 1.400 x 280 = 392.000. Como se vende 100% a credito a 2 meses, en el periodo anual se cobran 10 meses de ventas: 3.920.000. Ademas se cobra el saldo inicial de deudores por 600.000. Total cobros = 3.920.000 + 600.000 = 4.520.000.",
      auditNote: "Elimina frase generica de respuesta correcta."
    },
    "feb23-15": {
      explanation: "Ninguna afirmacion es correcta. Los precios de transferencia no garantizan por si solos una cultura colaborativa; dependen del sistema de incentivos. Los centros de inversion no se controlan solo por presupuesto: requieren indicadores vinculados al capital invertido, como ROI o resultado residual.",
      auditNote: "Elimina frase generica de respuesta correcta."
    }
  };

  for (const [questionId, patch] of Object.entries(questionPatches)) patchQuestion(questionId, patch);
})();
