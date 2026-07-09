window.CG_DATA = {
  examDate: "2026-07-28T09:00:00-03:00",
  units: [
    {
      id: "ut1",
      title: "UT1 - Contabilidad gerencial y rol profesional",
      short: "UT1",
      required: false,
      tags: ["base conceptual", "usuarios", "decisiones"],
      summary:
        "Distingue la contabilidad financiera de la contabilidad gerencial. La materia se enfoca en información para usuarios internos, planificación, control y toma de decisiones.",
      lessons: [
        {
          id: "ut1-l1",
          title: "La idea central",
          body:
            "La contabilidad gerencial transforma datos económicos en información útil para decidir. No busca cumplir normas externas como objetivo principal; busca ayudar a elegir cursos de acción.",
          tutor:
            "Cuando leas un caso, preguntate: ¿quién decide?, ¿qué alternativa compara?, ¿qué dato cambia la decisión?"
        },
        {
          id: "ut1-l2",
          title: "Financiera vs gerencial",
          body:
            "La contabilidad financiera informa a terceros y se apoya en normas. La gerencial informa a la dirección y puede adaptar modelos, formatos y supuestos según la decisión.",
          tutor:
            "Si la pregunta habla de valuación de inventarios y estados contables, pensá en financiera. Si habla de conveniencia, decisión o impacto económico, pensá en gerencial."
        },
        {
          id: "ut1-l3",
          title: "Rol del contador",
          body:
            "El profesional deja de ser solo registrador de hechos pasados y pasa a ser socio del proceso de decisión: interpreta, proyecta, compara alternativas y controla.",
          tutor:
            "En examen suelen valorar que expliques el para qué de la información, no solo la definición."
        }
      ],
      formulas: []
    },
    {
      id: "ut23",
      title: "UT2/3 - Modelos de costeo, Yardin y análisis marginal",
      short: "UT2/3",
      required: true,
      tags: ["Yardin obligatorio", "costeo variable", "punto de equilibrio"],
      summary:
        "Trabaja costeo completo, costeo variable, críticas al costeo completo para decisiones, margen de contribución, razón de contribución y punto de equilibrio.",
      lessons: [
        {
          id: "ut23-l1",
          title: "Costeo variable",
          body:
            "Carga al producto los costos variables necesarios para producir y vender. Los costos fijos se tratan como costos de la empresa o del período, salvo que sean incrementales para una decisión concreta.",
          tutor:
            "Clave práctica: para decidir, mirá ingresos diferenciales, costos variables diferenciales y costos fijos evitables o incrementales."
        },
        {
          id: "ut23-l2",
          title: "Crítica al costeo completo",
          body:
            "Para decisiones de gestión, mezclar costos fijos y variables en un costo unitario puede distorsionar el análisis. El costo unitario completo depende del volumen producido y puede cambiar aunque no cambie el consumo económico relevante.",
          tutor:
            "Si el ejercicio pide aceptar pedido, eliminar producto o elegir mezcla con restricción, no arranques por utilidad contable total: arranca por contribución."
        },
        {
          id: "ut23-l3",
          title: "Yardin obligatorio: complementariedad",
          body:
            "Yardin sostiene que costeo completo y costeo variable no son enemigos. Son complementarios porque responden a objetivos distintos: costeo completo para contabilidad patrimonial; costeo variable para contabilidad de gestión.",
          tutor:
            "Frase de examen: el problema no es que existan dos modelos, sino usar uno en el objetivo del otro."
        },
        {
          id: "ut23-l4",
          title: "Punto de equilibrio",
          body:
            "Es el nivel de actividad donde ventas y costos totales se igualan, por lo que la utilidad es cero. Sirve menos como número aislado y más como mapa de relaciones costo-volumen-utilidad.",
          tutor:
            "Primero calculá mc = precio - costo variable. Luego usá CF / mc si querés unidades, o CF / rc si querés ventas."
        },
        {
          id: "ut23-l5",
          title: "Mezcla y factor limitante",
          body:
            "Con varios productos, la razón de contribución depende de la mezcla de ventas. Si hay recurso escaso, conviene priorizar el margen de contribución por unidad del factor limitante.",
          tutor:
            "No siempre gana el producto con mayor margen por unidad. Gana el que mejor aprovecha el recurso que limita."
        }
      ],
      formulas: [
        { label: "Margen de contribución unitario", value: "mc = p - cv" },
        { label: "Razón de contribución", value: "rc = mc / p" },
        { label: "Punto de equilibrio en unidades", value: "Qe = CF / mc" },
        { label: "Punto de equilibrio en ventas", value: "Ve = CF / rc" },
        { label: "Ventas para utilidad objetivo", value: "V = (CF + utilidad objetivo) / rc" },
        { label: "Utilidad sobre ventas reales", value: "UT = (V real - Ve) x rc" }
      ]
    },
    {
      id: "ut3",
      title: "UT3 - Diferencia de utilidades entre costeo completo y variable",
      short: "UT3",
      required: false,
      tags: ["inventarios", "absorción", "utilidad"],
      summary:
        "Explica por qué la utilidad puede diferir entre costeo completo y costeo variable cuando hay variaciones de inventarios de productos terminados o en proceso.",
      lessons: [
        {
          id: "ut3-l1",
          title: "La fuente de la diferencia",
          body:
            "La diferencia aparece porque el costeo completo lleva parte de los costos fijos de producción al inventario, mientras que el variable los reconoce como costo del período.",
          tutor:
            "Si producción = ventas y no hay cambio de inventario, normalmente no hay diferencia de utilidad."
        },
        {
          id: "ut3-l2",
          title: "Cuando aumenta el stock",
          body:
            "Si se produce más de lo que se vende, el costeo completo difiere una porción de costos fijos en el inventario. Por eso suele mostrar mayor utilidad que el costeo variable.",
          tutor:
            "Stock final mayor suele empujar la utilidad del costeo completo hacia arriba."
        },
        {
          id: "ut3-l3",
          title: "Cuando baja el stock",
          body:
            "Si se vende más de lo producido, el costeo completo libera costos fijos acumulados en inventarios anteriores. La utilidad bajo costeo completo puede ser menor que bajo variable.",
          tutor:
            "La clave es rastrear dónde quedan los costos fijos: resultado del período o inventario."
        }
      ],
      formulas: [
        { label: "Diferencia por inventario final", value: "Dif. utilidad = unidades en stock x cuota fija absorbida" },
        { label: "Cuota fija", value: "CF producción / unidades producidas" }
      ]
    },
    {
      id: "ut4",
      title: "UT4 - Presupuesto, control, stocks y modelos en planilla",
      short: "UT4",
      required: false,
      tags: ["presupuesto", "desvíos", "flujo de caja"],
      summary:
        "Cubre el ciclo de planificación y presupuestación, construcción de modelos, gestión de stocks, control presupuestal y análisis de desvíos.",
      lessons: [
        {
          id: "ut4-l1",
          title: "Presupuesto como plan",
          body:
            "El presupuesto es un plan numérico de corto plazo para asignar recursos. Debe prepararse antes del período, involucrar responsables y servir para controlar desvíos.",
          tutor:
            "No lo pienses solo como planilla: es una herramienta de gestión para coordinar objetivos, recursos y control."
        },
        {
          id: "ut4-l2",
          title: "Secuencia presupuestal",
          body:
            "La previsión de ventas dispara el resto: compras, producción o abastecimiento, gastos, inversiones, flujo de caja, estado de resultados y estado de situación proyectados.",
          tutor:
            "Cuando un caso se tranca, buscá el primer módulo que alimenta a los demás. Muchas veces es ventas y cobranzas."
        },
        {
          id: "ut4-l3",
          title: "Desvíos y control",
          body:
            "Comparar presupuesto con realidad permite identificar diferencias, explicar causas y definir medidas correctivas. El desvío no se mira solo como número: se interpreta.",
          tutor:
            "Separá precio, cantidad, mezcla y eficiencia cuando el caso lo permita."
        },
        {
          id: "ut4-l4",
          title: "Modelos en planilla",
          body:
            "Un buen modelo separa datos de cálculo, documenta supuestos, evita fórmulas opacas y facilita auditoría. La claridad del modelo también es parte de la respuesta.",
          tutor:
            "En casos grandes, no intentes resolver todo mentalmente: armá módulos."
        }
      ],
      formulas: [
        { label: "Compras presupuestadas", value: "Compras = ventas esperadas + stock final deseado - stock inicial" },
        { label: "Cobranzas", value: "Cobranza = ventas contado + cobro de ventas a crédito" },
        { label: "Flujo neto", value: "Saldo final caja = saldo inicial + ingresos - egresos + financiación neta" }
      ]
    }
  ],
  guidedExercises: [
    {
      id: "al-reves",
      unit: "ut23",
      title: "Caso Al Revés S.A. - Punto de equilibrio",
      difficulty: "Primer contacto",
      source: "Práctico UT2/3 y soluciones de análisis marginal",
      intro:
        "Datos del caso: precio $8, costo variable unitario $5,20 y costos fijos $11.760. Vamos a calcular equilibrio, utilidad objetivo y una decisión comercial.",
      steps: [
        {
          prompt: "Calculá el margen de contribución unitario: p - cv.",
          answer: 2.8,
          tolerance: 0.01,
          explanation: "mc = 8 - 5,20 = 2,80. Cada unidad aporta $2,80 para cubrir costos fijos y luego generar utilidad."
        },
        {
          prompt: "Calculá el punto de equilibrio en unidades: CF / mc.",
          answer: 4200,
          tolerance: 0.5,
          explanation: "Qe = 11.760 / 2,80 = 4.200 unidades. En ese volumen la utilidad es cero."
        },
        {
          prompt: "Si se desea una utilidad de $5.040, ¿cuántas unidades hay que vender?",
          answer: 6000,
          tolerance: 0.5,
          explanation: "Q = (CF + UT) / mc = (11.760 + 5.040) / 2,80 = 6.000 unidades."
        },
        {
          prompt: "Si se mantienen precios pero cae la cantidad 15% desde 6.000 unidades, ¿cuántas unidades se venden?",
          answer: 5100,
          tolerance: 0.5,
          explanation: "6.000 x 0,85 = 5.100 unidades."
        },
        {
          prompt: "Con 5.100 unidades y mc $2,80, ¿cuál es el margen de contribución total?",
          answer: 14280,
          tolerance: 1,
          explanation: "MC = 5.100 x 2,80 = 14.280. Se compara contra bajar precio a $7,50, donde MC = 6.000 x 2,30 = 13.800."
        }
      ]
    },
    {
      id: "yardin",
      unit: "ut23",
      title: "Yardin - ¿antagonismo o complementariedad?",
      difficulty: "Lectura obligatoria",
      source: "Costos y Gestión, Año XXVII, N.º 93, págs. 8 a 11",
      intro:
        "Ejercicio conceptual para fijar la tesis central del artículo obligatorio de Amaro Yardin.",
      steps: [
        {
          prompt: "Según Yardin, ¿los modelos de costeo completo y variable son incompatibles? Respondé 1 para sí, 0 para no.",
          answer: 0,
          tolerance: 0,
          explanation: "No. Yardin sostiene que son compatibles y complementarios si se usan para objetivos distintos."
        },
        {
          prompt: "¿Qué modelo corresponde a la contabilidad patrimonial? Escribí 1 para completo, 2 para variable.",
          answer: 1,
          tolerance: 0,
          explanation: "Costeo completo, porque la contabilidad patrimonial busca determinar situación patrimonial, resultados periódicos y valuación de inventarios."
        },
        {
          prompt: "¿Qué modelo corresponde a contabilidad de gestión? Escribí 1 para completo, 2 para variable.",
          answer: 2,
          tolerance: 0,
          explanation: "Costeo variable, porque sirve para decisiones internas comparando ingresos previstos con costos relevantes."
        }
      ]
    },
    {
      id: "pangolin",
      unit: "ut3",
      title: "Pangolín - Diferencia de utilidades",
      difficulty: "Base",
      source: "Práctico UT3 Diferencia de utilidades",
      intro:
        "Una empresa produce 100 unidades. Costo completo unitario $12, variable $10. Quedan 20 unidades en stock final.",
      steps: [
        {
          prompt: "¿Cuál es la cuota fija absorbida por unidad? completo - variable.",
          answer: 2,
          tolerance: 0.01,
          explanation: "La diferencia entre costo completo y variable unitario es $2. Esa es la porción fija absorbida por unidad."
        },
        {
          prompt: "¿Qué monto de costo fijo queda diferido en el stock final de 20 unidades?",
          answer: 40,
          tolerance: 0.01,
          explanation: "20 unidades x $2 = $40. Ese costo queda en inventario bajo costeo completo."
        },
        {
          prompt: "Si aumenta el inventario, ¿qué método suele mostrar mayor utilidad? Escribí 1 para completo, 2 para variable.",
          answer: 1,
          tolerance: 0,
          explanation: "Costeo completo, porque difiere parte del costo fijo en inventario y carga menos al resultado del período."
        }
      ]
    },
    {
      id: "presupuesto",
      unit: "ut4",
      title: "Mini presupuesto de compras",
      difficulty: "Primer contacto",
      source: "Ficha UT4 y casos de presupuesto",
      intro:
        "Ventas esperadas: 1.000 unidades. Stock inicial: 120. Stock final deseado: 180. Costo de compra unitario: $9.",
      steps: [
        {
          prompt: "Calculá las unidades a comprar.",
          answer: 1060,
          tolerance: 0.5,
          explanation: "Compras = ventas + stock final deseado - stock inicial = 1.000 + 180 - 120 = 1.060."
        },
        {
          prompt: "Calculá el presupuesto de compras en pesos.",
          answer: 9540,
          tolerance: 1,
          explanation: "1.060 unidades x $9 = $9.540."
        },
        {
          prompt: "Si el 60% se paga al contado, ¿cuál es el egreso inmediato?",
          answer: 5724,
          tolerance: 1,
          explanation: "$9.540 x 60% = $5.724. El resto alimenta proveedores o pagos futuros."
        }
      ]
    }
  ],
  questions: [
    { id: "q1", unit: "ut1", prompt: "La contabilidad gerencial se orienta principalmente a:", options: ["Usuarios internos y toma de decisiones", "Cumplir normas de publicación", "Liquidar impuestos", "Emitir balances para terceros"], answer: 0, explanation: "Su foco es información útil para gestión, planificación, control y decisiones internas." },
    { id: "q2", unit: "ut1", prompt: "¿Qué dato suele ser más relevante en una decisión gerencial?", options: ["El costo diferencial", "El costo hundido", "El nombre de la cuenta contable", "El formato legal del estado contable"], answer: 0, explanation: "Las decisiones comparan alternativas futuras; interesan ingresos y costos diferenciales." },
    { id: "q3", unit: "ut23", prompt: "Según Yardin, el costeo completo y el variable deben entenderse como:", options: ["Complementarios", "Equivalentes para cualquier fin", "Incompatibles", "Modelos sin aplicación práctica"], answer: 0, explanation: "Cada uno responde a objetivos distintos: patrimonial y gestión." },
    { id: "q4", unit: "ut23", prompt: "Para Yardin, el costeo completo es apropiado principalmente para:", options: ["Contabilidad patrimonial", "Decisiones internas de corto plazo", "Aceptar pedidos especiales", "Elegir mezcla con factor escaso"], answer: 0, explanation: "Su objetivo es compatible con valuación y resultado periódico de la contabilidad patrimonial." },
    { id: "q5", unit: "ut23", prompt: "Si p = 10 y cv = 8, el margen de contribución unitario es:", options: ["2", "8", "10", "18"], answer: 0, explanation: "mc = p - cv = 10 - 8 = 2." },
    { id: "q6", unit: "ut23", prompt: "Si CF = 1.000 y mc = 2, el punto de equilibrio en unidades es:", options: ["500", "1.000", "2.000", "200"], answer: 0, explanation: "Qe = CF / mc = 1.000 / 2 = 500." },
    { id: "q7", unit: "ut23", prompt: "La razón de contribución se calcula como:", options: ["mc / precio", "precio / mc", "CF / ventas", "CV / CF"], answer: 0, explanation: "rc = margen de contribución unitario dividido precio de venta." },
    { id: "q8", unit: "ut23", prompt: "Con factor limitante, conviene priorizar el producto con mayor:", options: ["Contribución por unidad del factor escaso", "Precio de venta", "Margen total histórico", "Costo fijo asignado"], answer: 0, explanation: "El recurso escaso manda. Se maximiza la contribución por unidad de ese recurso." },
    { id: "q9", unit: "ut3", prompt: "Si producción y ventas son iguales, la diferencia de utilidad entre costeo completo y variable normalmente es:", options: ["Nula", "Siempre positiva", "Siempre negativa", "Igual al total de ventas"], answer: 0, explanation: "Sin variación de inventarios, no se difieren o liberan costos fijos de producción." },
    { id: "q10", unit: "ut3", prompt: "Si aumenta el inventario final, el costeo completo suele mostrar:", options: ["Mayor utilidad que el variable", "Menor utilidad que el variable", "La misma utilidad siempre", "Pérdida automática"], answer: 0, explanation: "Parte del costo fijo queda activado en inventarios bajo costeo completo." },
    { id: "q11", unit: "ut4", prompt: "El presupuesto forma parte principalmente de:", options: ["La planificación de corto plazo", "La auditoría externa", "La liquidación fiscal", "La valuación histórica únicamente"], answer: 0, explanation: "Es un plan numérico para asignar recursos y controlar la gestión." },
    { id: "q12", unit: "ut4", prompt: "El resultado final del proceso presupuestal suele incluir:", options: ["ER, ESP y flujo de caja presupuestados", "Solo libro diario", "Solo inventario físico", "Solo conciliación bancaria"], answer: 0, explanation: "Los materiales mencionan ER, Estado de Situación Patrimonial y Flujo de Caja presupuestados." },
    { id: "q13", unit: "ut4", prompt: "Un buen modelo en planilla debería:", options: ["Separar datos, cálculos y resultados", "Mezclar todo en una celda", "Ocultar supuestos", "Evitar controles"], answer: 0, explanation: "La claridad y trazabilidad ayudan a revisar, actualizar y entender el modelo." },
    { id: "q14", unit: "ut4", prompt: "Compras presupuestadas se calcula normalmente como:", options: ["Ventas esperadas + stock final deseado - stock inicial", "Stock inicial - ventas - stock final", "Ventas / precio", "Costo fijo / margen"], answer: 0, explanation: "Es la fórmula base para abastecer ventas y terminar con el stock deseado." },
    { id: "q15", unit: "ut23", prompt: "Si las ventas reales superan las ventas de equilibrio, la utilidad puede calcularse como:", options: ["(V real - Ve) x rc", "Ve / CF", "CV - Ventas", "CF x precio"], answer: 0, explanation: "La diferencia sobre el equilibrio multiplicada por la razón de contribución da utilidad." },
    { id: "q16", unit: "ut23", prompt: "El costo variable es relevante para análisis marginal porque:", options: ["Cambia con el nivel de actividad", "Siempre es fijo", "No existe en decisiones", "Solo sirve para balances publicados"], answer: 0, explanation: "El análisis marginal se apoya en cómo reaccionan ingresos y costos ante cambios de volumen o alternativa." }
  ],
  sources: [
    { unit: "UT1", name: "Unidad Temática 1 Contabilidad Gerencial.pdf", type: "Teórico", pages: 21 },
    { unit: "UT2/3", name: "Unidad Temática 2 y 3 Modelos y Análisis Marginal.pdf", type: "Teórico", pages: 37 },
    { unit: "UT2/3", name: "Revista IAPUCO - Artículo de Amaro Yardin, págs. 8 a 11", type: "Lectura obligatoria", pages: 4, required: true },
    { unit: "UT2/3", name: "Casos Análisis Marginal 2023.pdf", type: "Práctico", pages: 51 },
    { unit: "UT2/3", name: "Soluciones UT1, UT2 y UT3 - Análisis Marginal.pdf", type: "Soluciones", pages: 18 },
    { unit: "UT3", name: "Diferencia de Utilidades Costeo Completo vs Variable.pdf", type: "Práctico", pages: 18 },
    { unit: "UT4", name: "Ficha ciclo elaboración presupuesto.pdf", type: "Teórico", pages: 9 },
    { unit: "UT4", name: "Ficha principios de construcción de modelos en planilla electrónica.pdf", type: "Teórico", pages: 9 },
    { unit: "UT4", name: "Casos UT IV Contabilidad Gerencial.pdf", type: "Práctico", pages: 19 },
    { unit: "UT4", name: "Planillas de soluciones UT4 y caso integrador", type: "Excel", pages: null }
  ]
};
