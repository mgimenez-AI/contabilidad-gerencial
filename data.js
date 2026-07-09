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
        "La unidad ubica a la contabilidad gerencial como sistema de informacion para usuarios internos. No se limita a registrar: ayuda a planificar, controlar, comparar alternativas y tomar decisiones economicas.",
      topics: [
        {
          title: "1. Contabilidad financiera vs contabilidad gerencial",
          lessons: [
            {
              id: "ut1-l1",
              title: "Diferencia de finalidad",
              body:
                "La contabilidad financiera busca comunicar informacion patrimonial y de resultados a usuarios externos, por eso se apoya en normas, formatos comparables y criterios de valuacion aceptados. La contabilidad gerencial se orienta a la direccion: arma informacion a medida de la decision, aunque eso implique usar unidades fisicas, supuestos, proyecciones o modelos no admitidos para estados contables.",
              tutor:
                "Regla de examen: si la pregunta habla de terceros, normas o inventarios para estados contables, estas en logica financiera. Si habla de decidir, comparar o proyectar, estas en logica gerencial."
            },
            {
              id: "ut1-l2",
              title: "Usuarios, horizonte y formato",
              body:
                "En la financiera predominan usuarios externos, informacion historica y monetaria, periodicidad formal y estados estandarizados. En la gerencial predominan usuarios internos, informacion historica y futura, datos monetarios y no monetarios, informes por producto, linea, sucursal, proceso o responsable, y frecuencia segun necesidad.",
              tutor:
                "No memorices una lista suelta: pensalo como dos preguntas distintas. Financiera: que paso y como lo informo hacia afuera. Gerencial: que conviene hacer y que informacion necesito."
            }
          ]
        },
        {
          title: "2. Rol profesional",
          lessons: [
            {
              id: "ut1-l3",
              title: "De registrador a socio de negocio",
              body:
                "El contador y el licenciado en administracion no solo producen datos: interpretan causas, miden consecuencias, advierten limitaciones del modelo y comunican informacion util para la accion. La materia insiste en que hay distintos costos para distintos objetivos; por eso usar un costo de estados contables para decidir puede llevar a errores.",
              tutor:
                "Cuando respondas teoria, agrega siempre el para que: planificar, controlar, evaluar desempeno, decidir precios, aceptar pedidos, tercerizar, invertir o cambiar capacidad."
            },
            {
              id: "ut1-l4",
              title: "Planificacion, control y conducta",
              body:
                "La contabilidad gerencial influye en conductas. Un presupuesto mal armado puede incentivar decisiones equivocadas; una asignacion arbitraria de costos fijos puede castigar productos rentables; un indicador aislado puede empujar a mejorar una parte y empeorar el conjunto.",
              tutor:
                "Si el caso menciona responsables, areas o desempeno, preguntate si el indicador mide algo controlable por esa persona."
            }
          ]
        },
        {
          title: "3. Informacion relevante para decidir",
          lessons: [
            {
              id: "ut1-l5",
              title: "Costos relevantes, hundidos y de oportunidad",
              body:
                "Para decidir importan los ingresos y costos futuros que cambian entre alternativas. Los costos hundidos ya ocurrieron y no se modifican por la decision; no deben condicionar la conveniencia economica. El costo de oportunidad no siempre esta registrado, pero mide el beneficio que se sacrifica al elegir una alternativa.",
              tutor:
                "Frase util: no todo costo contable es relevante y no todo costo relevante esta contabilizado."
            },
            {
              id: "ut1-l6",
              title: "Cuantitativo y cualitativo",
              body:
                "La decision gerencial no termina en el calculo. Hay factores cualitativos: capacidad futura, relacion con clientes, calidad, riesgo, aprendizaje, dependencia de proveedores, clima interno y estrategia. El calculo ordena la discusion, pero no reemplaza el juicio.",
              tutor:
                "En preguntas abiertas, cerra con una salvedad cualitativa. Suele mostrar comprension y no solo mecanica."
            }
          ]
        }
      ],
      formulas: []
    },
    {
      id: "ut23",
      title: "UT2/3 - Modelos de costeo, Yardin y analisis marginal",
      short: "UT2/3",
      required: true,
      tags: ["Yardin obligatorio", "costeo variable", "punto de equilibrio"],
      summary:
        "Unidad central para el examen: comportamiento de costos, costeo completo y variable, complementariedad segun Yardin, margen de contribucion, punto de equilibrio, mezcla, restricciones y decisiones de corto plazo.",
      topics: [
        {
          title: "1. Comportamiento de costos",
          lessons: [
            {
              id: "ut23-l1",
              title: "Costos fijos y variables",
              body:
                "Un costo variable cambia en total cuando cambia el nivel de actividad dentro de un rango relevante; por unidad suele mantenerse constante. Un costo fijo permanece constante en total para cierta capacidad y periodo; por unidad disminuye si se producen mas unidades. La clasificacion depende del horizonte, del objeto de costo y del rango de actividad analizado.",
              tutor:
                "No confundas fijo con inevitable. Un fijo puede ser evitable o incremental si la decision cambia la estructura."
            },
            {
              id: "ut23-l2",
              title: "Rango relevante y capacidad",
              body:
                "El analisis marginal supone que precios, costos variables unitarios y costos fijos se comportan de forma razonablemente estable dentro de un rango. Si se supera la capacidad, aparecen nuevos costos fijos o cambios en eficiencia; ahi el modelo debe recalcularse por tramos.",
              tutor:
                "Cuando el caso diga 'capacidad maxima' o 'nuevo equipo', revisa si hay salto de costos fijos."
            }
          ]
        },
        {
          title: "2. Costeo completo y costeo variable",
          lessons: [
            {
              id: "ut23-l3",
              title: "Costeo completo",
              body:
                "El costeo completo incorpora al costo del producto los costos necesarios para producir, incluyendo costos fijos de produccion segun el criterio usado. Es adecuado para valuacion patrimonial de inventarios porque busca asignar a los bienes el esfuerzo economico total asociado a su obtencion.",
              tutor:
                "Sirve para estados contables e inventarios. Para decidir, cuidado: repartir fijos por unidad puede fabricar costos unitarios que cambian solo porque cambia el volumen."
            },
            {
              id: "ut23-l4",
              title: "Costeo variable",
              body:
                "El costeo variable carga al producto los costos variables necesarios para producir y vender. Los costos fijos se tratan como costos de estructura o de periodo, salvo que sean diferenciales para la alternativa. Por eso es agil para decisiones: muestra cuanto aporta cada unidad a cubrir estructura y utilidad.",
              tutor:
                "Para un pedido especial con capacidad ociosa, el piso economico suele estar en el costo variable diferencial, no en el costo completo unitario."
            },
            {
              id: "ut23-l5",
              title: "Yardin: complementariedad, no antagonismo",
              body:
                "El articulo obligatorio de Amaro Yardin propone abandonar la pelea 'costeo completo o variable'. Cada modelo responde a un objetivo diferente: el costeo completo es apto para la contabilidad patrimonial y la valuacion de inventarios; el costeo variable es apto para la contabilidad de gestion y decisiones internas. El error aparece cuando se usa el modelo fuera de su finalidad.",
              tutor:
                "Esta es lectura obligatoria: si te preguntan el articulo, la palabra clave es complementariedad. No son rivales, son herramientas con objetivos distintos."
            },
            {
              id: "ut23-l6",
              title: "Criticas al costeo completo para decidir",
              body:
                "El costeo completo puede inducir errores cuando convierte costos fijos en costos unitarios y luego se usan esos importes como si variaran con cada decision. Tambien puede asignar responsabilidades a areas por costos que no controlan. El analisis gerencial debe separar lo variable, lo fijo evitable, lo fijo incremental y lo no relevante.",
              tutor:
                "Pregunta trampa frecuente: rechazar un pedido rentable porque su precio no cubre el costo completo unitario."
            }
          ]
        },
        {
          title: "3. Analisis marginal y punto de equilibrio",
          lessons: [
            {
              id: "ut23-l7",
              title: "Margen de contribucion",
              body:
                "El margen de contribucion unitario es precio menos costo variable unitario. Mide cuanto deja cada unidad para cubrir costos fijos y luego generar utilidad. La razon de contribucion expresa ese margen sobre el precio de venta y permite trabajar en pesos de venta.",
              tutor:
                "Si tenes unidades, usa mc. Si te dan ventas en pesos o varias lineas, suele convenir usar razon de contribucion."
            },
            {
              id: "ut23-l8",
              title: "Punto de equilibrio",
              body:
                "El punto de equilibrio es el nivel de actividad donde ingresos totales igualan costos totales y la utilidad es cero. En unidades: costos fijos divididos margen de contribucion unitario. En valores: costos fijos divididos razon de contribucion. Para utilidad objetivo, se suma la utilidad deseada al numerador.",
              tutor:
                "Formula mental: primero cubro fijos; despues gano. Si quieren utilidad, el numerador es CF + utilidad objetivo."
            },
            {
              id: "ut23-l9",
              title: "Margen de seguridad y sensibilidad",
              body:
                "El margen de seguridad muestra cuanto pueden caer las ventas antes de llegar al equilibrio. La sensibilidad analiza que pasa si cambian precio, costo variable, volumen, mezcla o costos fijos. Una reduccion de precio puede aumentar unidades pero bajar margen; no basta mirar volumen.",
              tutor:
                "En examenes, si cambia el precio, recalcula el margen; no apliques la formula vieja."
            }
          ]
        },
        {
          title: "4. Mezcla, restricciones y decisiones",
          lessons: [
            {
              id: "ut23-l10",
              title: "Multiproducto y mezcla",
              body:
                "Cuando hay varios productos, el equilibrio depende de la mezcla. Se puede trabajar con un paquete o mix promedio, ponderando margenes segun participacion. Si la mezcla cambia, cambia el margen promedio y debe recalcularse todo.",
              tutor:
                "Si el caso dice 'se mantiene la mezcla', podes usar promedio. Si no, hay que analizar producto por producto."
            },
            {
              id: "ut23-l11",
              title: "Factor escaso",
              body:
                "Cuando un recurso limita la produccion, no alcanza con elegir el producto con mayor margen unitario. Debe priorizarse el mayor margen de contribucion por unidad del factor escaso: por hora maquina, kilo de materia prima, metro, turno o cualquier restriccion del caso.",
              tutor:
                "Atajo de examen: ranking = margen / recurso escaso. El mayor margen unitario puede no ser el mejor."
            },
            {
              id: "ut23-l12",
              title: "Decisiones frecuentes",
              body:
                "Aceptar pedidos especiales, discontinuar productos, fabricar o comprar, cambiar precios, usar capacidad ociosa y elegir entre alternativas son aplicaciones del mismo criterio: comparar ingresos y costos diferenciales. Los fijos comunes no se asignan para decidir si no cambian por la alternativa.",
              tutor:
                "Arma una columna 'se modifica si elijo esta alternativa'. Lo que no cambia, sale del calculo."
            }
          ]
        }
      ],
      formulas: [
        { label: "Margen de contribucion unitario", value: "mc = precio - costo variable unitario" },
        { label: "Razon de contribucion", value: "rc = mc / precio" },
        { label: "Equilibrio en unidades", value: "Qe = costos fijos / mc" },
        { label: "Equilibrio en ventas", value: "Ve = costos fijos / rc" },
        { label: "Unidades con utilidad objetivo", value: "Q = (CF + utilidad objetivo) / mc" },
        { label: "Restriccion", value: "prioridad = mc / unidad de factor escaso" }
      ]
    },
    {
      id: "ut3",
      title: "UT3 - Diferencia de utilidades entre costeo completo y variable",
      short: "UT3",
      required: false,
      tags: ["inventarios", "utilidad", "costos fijos activados"],
      summary:
        "Explica por que una misma empresa puede mostrar utilidades distintas bajo costeo completo y variable, especialmente cuando cambian los inventarios.",
      topics: [
        {
          title: "1. Estados de resultado por modelo",
          lessons: [
            {
              id: "ut3-l1",
              title: "Resultado por costeo variable",
              body:
                "El estado por costeo variable separa ventas, costos variables y margen de contribucion. Luego resta costos fijos del periodo. Es util para gestion porque muestra cuanto contribuyen las ventas a cubrir estructura y utilidad.",
              tutor:
                "Estructura: Ventas - CV variables = Contribucion - CF = Resultado."
            },
            {
              id: "ut3-l2",
              title: "Resultado por costeo completo",
              body:
                "El estado por costeo completo lleva al costo de lo vendido costos variables y fijos de produccion absorbidos por las unidades vendidas. Una parte de los costos fijos puede quedar activada en inventarios finales si se produjo mas de lo vendido.",
              tutor:
                "La clave no esta en las ventas: esta en donde quedaron los costos fijos de produccion."
            }
          ]
        },
        {
          title: "2. Inventarios y diferencia de utilidades",
          lessons: [
            {
              id: "ut3-l3",
              title: "Cuando produccion supera ventas",
              body:
                "Si se produce mas de lo que se vende, el inventario final aumenta. Bajo costeo completo, parte de los costos fijos de produccion queda en el inventario final y no pasa al resultado del periodo. Por eso la utilidad por costeo completo suele ser mayor que por variable.",
              tutor:
                "Produccion > ventas: completo tiende a dar mas utilidad."
            },
            {
              id: "ut3-l4",
              title: "Cuando ventas superan produccion",
              body:
                "Si se vende mas de lo que se produce, se consumen inventarios anteriores. Bajo costeo completo entran al costo de ventas costos fijos activados de periodos previos. Por eso la utilidad por completo suele ser menor que por variable.",
              tutor:
                "Ventas > produccion: completo tiende a dar menos utilidad."
            },
            {
              id: "ut3-l5",
              title: "Formula conceptual",
              body:
                "La diferencia entre utilidades se explica por los costos fijos de produccion activados en inventarios. Si no hay inventarios o no cambian los inventarios con costos fijos activados, no deberia existir diferencia relevante entre ambos modelos.",
              tutor:
                "Para resolver rapido: calcula fijos por unidad absorbidos y mira cuantas unidades quedaron o salieron del inventario."
            }
          ]
        },
        {
          title: "3. Interpretacion gerencial",
          lessons: [
            {
              id: "ut3-l6",
              title: "Riesgo de producir para mostrar utilidad",
              body:
                "El costeo completo puede aumentar la utilidad contable cuando se incrementan inventarios, aunque no se hayan vendido mas unidades. Esto no implica mejor desempeno economico: puede esconder acumulacion de stock, costos financieros, obsolescencia o problemas comerciales.",
              tutor:
                "Si ves que sube utilidad solo por stock, sospecha: no hay caja ni mercado detras de esa mejora."
            }
          ]
        }
      ],
      formulas: [
        { label: "Fijo absorbido unitario", value: "CF produccion / unidades producidas" },
        { label: "Diferencia aproximada", value: "variacion de inventario en unidades x CF absorbido unitario" },
        { label: "Si produccion > ventas", value: "UT completo > UT variable" },
        { label: "Si ventas > produccion", value: "UT completo < UT variable" }
      ]
    },
    {
      id: "ut4",
      title: "UT4 - Presupuesto, desvios, stocks y modelos en planilla",
      short: "UT4",
      required: false,
      tags: ["presupuesto", "desvios", "planillas"],
      summary:
        "Integra planificacion de corto plazo, presupuesto economico-financiero, control presupuestal, gestion de stocks y criterios para construir modelos confiables en planilla electronica.",
      topics: [
        {
          title: "1. Presupuesto como proceso",
          lessons: [
            {
              id: "ut4-l1",
              title: "Plan numerico de corto plazo",
              body:
                "El presupuesto traduce objetivos en numeros: ventas, costos, compras, cobros, pagos, inversiones, financiamiento y resultados esperados. No es solo una planilla; es una herramienta de coordinacion, asignacion de recursos y control.",
              tutor:
                "La secuencia importa: primero ventas, despues el resto. Muchas cifras dependen de la prevision comercial."
            },
            {
              id: "ut4-l2",
              title: "Ciclo de planificacion y control",
              body:
                "El proceso incluye planificacion, elaboracion del presupuesto, ejecucion, registro de la realidad, comparacion, analisis de desvios y medidas correctivas. Sin control posterior, el presupuesto queda como una intencion sin aprendizaje.",
              tutor:
                "Si te preguntan para que sirve, menciona anticipar, coordinar, controlar y corregir."
            }
          ]
        },
        {
          title: "2. Ciclos presupuestales",
          lessons: [
            {
              id: "ut4-l3",
              title: "Ventas, deudores y cobranzas",
              body:
                "El ciclo de ventas impacta en el estado de resultados por ventas, en el estado de situacion por deudores y en el flujo de caja por cobranzas. Hay que distinguir devengamiento de cobro: vender no significa cobrar en el mismo periodo.",
              tutor:
                "ER mide ventas devengadas; FC mide cobranza; ESP muestra lo pendiente."
            },
            {
              id: "ut4-l4",
              title: "Compras, stocks, costos y pagos",
              body:
                "Las compras dependen de ventas esperadas, stock inicial y stock final deseado. El costo de ventas afecta resultados, el stock final afecta el estado de situacion y los pagos dependen de condiciones con proveedores.",
              tutor:
                "Formula base: compras = consumo o ventas previstas + stock final deseado - stock inicial."
            },
            {
              id: "ut4-l5",
              title: "Otros ciclos",
              body:
                "Tambien se presupuestan gastos operativos, remuneraciones, impuestos, IVA, inversiones, prestamos, intereses y amortizaciones. Algunos impactan caja y resultado; otros solo uno de los estados en el periodo.",
              tutor:
                "Amortizacion: resultado y activo, pero no caja del periodo. Prestamo: caja y pasivo; intereses: resultado y caja si se pagan."
            }
          ]
        },
        {
          title: "3. Desvios y control",
          lessons: [
            {
              id: "ut4-l6",
              title: "Que es un desvio",
              body:
                "Un desvio es la diferencia entre lo presupuestado y lo real. No alcanza con calcularlo: hay que explicar su causa, identificar si es favorable o desfavorable y decidir si requiere accion correctiva.",
              tutor:
                "Desvio sin causa es solo resta. En examen quieren interpretacion."
            },
            {
              id: "ut4-l7",
              title: "Presupuesto flexible",
              body:
                "Para controlar bien, conviene comparar contra un presupuesto ajustado al nivel real de actividad. Si el volumen cambia, muchos costos variables tambien cambian; comparar contra el presupuesto original puede confundir eficiencia con volumen.",
              tutor:
                "Si vendiste mas, gastar mas en variables no necesariamente es malo."
            }
          ]
        },
        {
          title: "4. Stocks y modelos en planilla",
          lessons: [
            {
              id: "ut4-l8",
              title: "Gestion de stocks",
              body:
                "La gestion de inventarios busca equilibrar disponibilidad y costo. Indicadores como rotacion, stock promedio y dias de inventario ayudan a detectar exceso de capital inmovilizado o riesgo de quiebre.",
              tutor:
                "Rotacion alta no siempre es buena: puede indicar eficiencia o falta de stock. Interpretar contexto."
            },
            {
              id: "ut4-l9",
              title: "Modelos de planilla confiables",
              body:
                "Un buen modelo separa datos, logica y reportes. Usa pasos cortos, modulos claros, formulas consistentes, etiquetas autoexplicativas y validaciones. La regla clave del material es no mezclar datos duros con relaciones logicas dentro de una misma formula.",
              tutor:
                "Si una formula tiene numeros escritos a mano mezclados con calculos, sospecha. Ese supuesto deberia estar en una celda de datos."
            }
          ]
        }
      ],
      formulas: [
        { label: "Compras necesarias", value: "ventas/consumo + stock final deseado - stock inicial" },
        { label: "Cobranza", value: "saldo inicial deudores + ventas cobradas del periodo - saldo final deudores" },
        { label: "Stock promedio", value: "(stock inicial + stock final) / 2" },
        { label: "Rotacion", value: "costo de ventas / stock promedio" },
        { label: "Dias de stock", value: "365 / rotacion" }
      ]
    }
  ],
  guidedExercises: [
    {
      id: "pe-basico",
      unit: "ut23",
      title: "Punto de equilibrio paso a paso",
      difficulty: "Inicial",
      source: "Practico UT2/3",
      intro: "Empresa con precio $120, costo variable unitario $72 y costos fijos $240.000. Calcula margen, equilibrio y ventas para ganar $60.000.",
      steps: [
        { prompt: "Calcula el margen de contribucion unitario.", answer: 48, tolerance: 0.01, explanation: "mc = 120 - 72 = 48. Cada unidad deja $48 para cubrir estructura y utilidad." },
        { prompt: "Calcula el punto de equilibrio en unidades.", answer: 5000, tolerance: 0.01, explanation: "Qe = 240.000 / 48 = 5.000 unidades." },
        { prompt: "Calcula unidades necesarias para ganar $60.000.", answer: 6250, tolerance: 0.01, explanation: "Q = (240.000 + 60.000) / 48 = 6.250 unidades." }
      ]
    },
    {
      id: "el-ajuste-2022",
      unit: "ut23",
      title: "Caso real: El Ajuste SRL",
      difficulty: "Examen real",
      source: "Agosto 2022",
      intro: "Caso inspirado en examen real: en agosto se vendieron 40.000 unidades a $100, costo variable $80 y costos fijos $50.000. En setiembre el costo variable sube a $95, se mantienen unidades y fijos. Determina el precio para conservar la utilidad absoluta.",
      steps: [
        { prompt: "Calcula la utilidad de agosto.", answer: 750000, tolerance: 0.01, explanation: "Ventas 4.000.000 - costos variables 3.200.000 - fijos 50.000 = 750.000." },
        { prompt: "Calcula cuanto debe dejar cada unidad en setiembre antes de costo variable.", answer: 20, tolerance: 0.01, explanation: "Para obtener 750.000 con 40.000 unidades y $50.000 fijos: contribucion total necesaria 800.000; por unidad 20." },
        { prompt: "Calcula el precio de setiembre.", answer: 115, tolerance: 0.01, explanation: "Precio = costo variable 95 + contribucion necesaria 20 = 115." }
      ]
    },
    {
      id: "factor-escaso",
      unit: "ut23",
      title: "Elegir producto con factor escaso",
      difficulty: "Intermedio",
      source: "Analisis marginal",
      intro: "Producto A deja mc $30 y usa 3 horas. Producto B deja mc $24 y usa 2 horas. Hay horas maquina limitadas.",
      steps: [
        { prompt: "Calcula contribucion por hora de A.", answer: 10, tolerance: 0.01, explanation: "A: 30 / 3 = 10 por hora." },
        { prompt: "Calcula contribucion por hora de B.", answer: 12, tolerance: 0.01, explanation: "B: 24 / 2 = 12 por hora." },
        { prompt: "Que producto priorizar? Escribe 12 si es B o 10 si es A.", answer: 12, tolerance: 0.01, explanation: "Se prioriza B porque aporta mas por unidad del recurso escaso, aunque su margen unitario sea menor." }
      ]
    },
    {
      id: "jonhattan-2022",
      unit: "ut3",
      title: "Caso real: costeo completo vs variable",
      difficulty: "Examen real",
      source: "Agosto 2022",
      intro: "Caso inspirado en examen real: se producen 100 unidades, costo variable unitario $10, costo completo unitario $12, se venden 72 a $20. No hay otros costos fijos que los de produccion.",
      steps: [
        { prompt: "Calcula el costo fijo de produccion total absorbido.", answer: 200, tolerance: 0.01, explanation: "La diferencia entre costo completo y variable es 2 por unidad. 100 unidades x 2 = 200." },
        { prompt: "Calcula la utilidad por costeo variable.", answer: 520, tolerance: 0.01, explanation: "Ventas 72 x 20 = 1.440. Costo variable vendido 72 x 10 = 720. Menos CF 200. Utilidad = 520." },
        { prompt: "Calcula la utilidad por costeo completo.", answer: 576, tolerance: 0.01, explanation: "Ventas 1.440 - costo completo vendido 72 x 12 = 864. Utilidad = 576. La diferencia de 56 queda activada en inventario final." }
      ]
    },
    {
      id: "presupuesto-cobranza",
      unit: "ut4",
      title: "Presupuesto: ventas, deudores y cobranza",
      difficulty: "Intermedio",
      source: "UT4 presupuesto",
      intro: "Ventas del periodo $220.000. Se cobra 40% en el periodo y queda 60% del ultimo mes como deudores por $11.000. Saldo inicial de deudores $132.000.",
      steps: [
        { prompt: "Cuanto se cobra de las ventas del periodo si el cobro contado es 40%?", answer: 88000, tolerance: 0.01, explanation: "220.000 x 40% = 88.000." },
        { prompt: "Si la cobranza total del ejemplo es $209.000, cuanto se cobro de saldos anteriores?", answer: 121000, tolerance: 0.01, explanation: "209.000 - 88.000 = 121.000." },
        { prompt: "Que saldo de deudores queda al cierre segun el dato?", answer: 11000, tolerance: 0.01, explanation: "El saldo final informado es 11.000. En presupuesto siempre separa venta devengada de cobranza." }
      ]
    }
  ],
  questions: [
    { id: "q01", unit: "ut1", prompt: "La contabilidad gerencial se diferencia principalmente porque:", options: ["Esta orientada a usuarios internos y decisiones", "Solo registra operaciones historicas", "Debe cumplir siempre normas contables externas", "Se limita a preparar balances"], answer: 0, explanation: "Su finalidad central es apoyar planificacion, control y toma de decisiones internas." },
    { id: "q02", unit: "ut1", prompt: "Un costo hundido debe tratarse como:", options: ["Relevante si fue muy alto", "No relevante para decidir entre alternativas futuras", "Variable siempre", "Costo de oportunidad"], answer: 1, explanation: "Ya ocurrio y no cambia por la decision actual." },
    { id: "q03", unit: "ut1", prompt: "El costo de oportunidad es:", options: ["Un costo siempre registrado", "El beneficio sacrificado por elegir una alternativa", "Un costo fijo asignado", "Una amortizacion"], answer: 1, explanation: "Puede no figurar contablemente, pero es relevante para decidir." },
    { id: "q04", unit: "ut1", prompt: "Un informe por producto, sucursal y unidades fisicas es tipico de:", options: ["Contabilidad gerencial", "Contabilidad patrimonial obligatoria", "Auditoria externa", "Declaracion fiscal"], answer: 0, explanation: "La gerencial adapta formato y detalle al usuario interno." },
    { id: "q05", unit: "ut1", prompt: "La informacion relevante para una decision debe ser:", options: ["Futura y diferencial", "Historica y hundida", "Siempre normativa", "Igual para todas las empresas"], answer: 0, explanation: "Importa lo que cambia entre alternativas futuras." },
    { id: "q06", unit: "ut1", prompt: "El rol moderno del profesional en gerencial es:", options: ["Solo cargar comprobantes", "Socio del proceso de decision", "Emitir dictamen externo", "Evitar toda estimacion"], answer: 1, explanation: "Interpreta informacion para formular, implementar y controlar estrategia." },
    { id: "q07", unit: "ut1", prompt: "Un dato cualitativo relevante podria ser:", options: ["Relacion con un cliente clave", "Costo hundido de una maquina", "Precio historico irrelevante", "Un asiento de cierre"], answer: 0, explanation: "Las decisiones incluyen efectos cualitativos, riesgo y estrategia." },
    { id: "q08", unit: "ut1", prompt: "La frase 'distintos costos para distintos objetivos' implica que:", options: ["Un unico costo sirve para todo", "El costo debe calcularse segun la finalidad", "Solo importan costos completos", "No deben usarse estimaciones"], answer: 1, explanation: "Valuar inventarios y decidir precios pueden requerir modelos distintos." },
    { id: "q09", unit: "ut23", prompt: "Si precio = 100 y CVu = 60, el margen de contribucion unitario es:", options: ["160", "60", "40", "0,40"], answer: 2, explanation: "mc = 100 - 60 = 40." },
    { id: "q10", unit: "ut23", prompt: "Con CF = 80.000 y mc = 20, el equilibrio en unidades es:", options: ["4.000", "1.600", "80.020", "20"], answer: 0, explanation: "Qe = 80.000 / 20 = 4.000." },
    { id: "q11", unit: "ut23", prompt: "La razon de contribucion se calcula como:", options: ["CF / ventas", "mc / precio", "precio / CVu", "utilidad / CF"], answer: 1, explanation: "Expresa el margen de contribucion como porcentaje del precio." },
    { id: "q12", unit: "ut23", prompt: "Segun Yardin, costeo completo y variable son:", options: ["Incompatibles", "Complementarios con objetivos diferentes", "Identicos", "Ambos prohibidos para gestion"], answer: 1, explanation: "Completo para patrimonial; variable para gestion." },
    { id: "q13", unit: "ut23", prompt: "El costeo variable es especialmente util para:", options: ["Valuar inventarios para terceros", "Decisiones internas de corto plazo", "Sustituir toda contabilidad financiera", "Eliminar costos fijos"], answer: 1, explanation: "Muestra esfuerzos economicos relevantes para decisiones." },
    { id: "q14", unit: "ut23", prompt: "Un pedido especial con capacidad ociosa deberia evaluarse mirando:", options: ["Costo variable diferencial y fijos incrementales", "Costo hundido", "Solo costo completo historico", "Promedio de todos los gastos"], answer: 0, explanation: "Si no cambia la estructura, los fijos comunes no son diferenciales." },
    { id: "q15", unit: "ut23", prompt: "Si se busca utilidad objetivo, el numerador del equilibrio incluye:", options: ["Solo CV", "CF + utilidad objetivo", "Precio - CV", "Ventas historicas"], answer: 1, explanation: "Primero se cubren fijos y luego la utilidad deseada." },
    { id: "q16", unit: "ut23", prompt: "En multiproducto, el punto de equilibrio depende de:", options: ["La mezcla de ventas", "Solo el producto mas caro", "Solo costos hundidos", "La cantidad de empleados"], answer: 0, explanation: "La mezcla determina el margen promedio." },
    { id: "q17", unit: "ut23", prompt: "Ante un factor escaso se prioriza el producto con:", options: ["Mayor precio", "Mayor mc por unidad del factor escaso", "Menor costo fijo asignado", "Mayor volumen historico"], answer: 1, explanation: "El recurso limitado debe generar la maxima contribucion posible." },
    { id: "q18", unit: "ut23", prompt: "Una critica al costeo completo para decisiones es que:", options: ["Puede convertir fijos en unitarios y confundir relevancia", "Nunca sirve para inventarios", "No considera costos variables", "No usa datos monetarios"], answer: 0, explanation: "La asignacion de fijos puede llevar a rechazar alternativas convenientes." },
    { id: "q19", unit: "ut23", prompt: "Si precio baja, para analizar equilibrio hay que:", options: ["Mantener el mismo margen", "Recalcular margen y razon de contribucion", "Ignorar costos variables", "Eliminar CF"], answer: 1, explanation: "Todo cambio de precio afecta la contribucion." },
    { id: "q20", unit: "ut23", prompt: "Un costo fijo incremental debe:", options: ["Ignorarse siempre", "Incluirse si aparece por la decision", "Tratarse como hundido", "Dividirse arbitrariamente siempre"], answer: 1, explanation: "Si cambia entre alternativas, es relevante." },
    { id: "q21", unit: "ut23", prompt: "El margen de seguridad indica:", options: ["Caida tolerable de ventas antes del equilibrio", "Costo fijo por unidad", "Inventario final", "Utilidad bruta contable"], answer: 0, explanation: "Mide distancia entre ventas reales/proyectadas y equilibrio." },
    { id: "q22", unit: "ut23", prompt: "Costeo completo es mas adecuado para:", options: ["Valuacion patrimonial de inventarios", "Decidir pedidos con capacidad ociosa", "Eliminar costos fijos", "Calcular mc"], answer: 0, explanation: "Ese es su objetivo patrimonial." },
    { id: "q23", unit: "ut23", prompt: "Si un producto tiene mc positivo pero se le asignan muchos fijos comunes:", options: ["Puede parecer no rentable aunque aporte a cubrir estructura", "Siempre debe eliminarse", "Su mc se vuelve negativo", "No afecta decisiones"], answer: 0, explanation: "Los fijos comunes asignados pueden distorsionar decisiones." },
    { id: "q24", unit: "ut23", prompt: "El punto de equilibrio no es:", options: ["Una herramienta de planificacion", "El unico uso del analisis marginal", "El nivel de utilidad cero", "Una relacion costo-volumen-utilidad"], answer: 1, explanation: "Analisis marginal tambien sirve para precios, mix, pedidos y capacidad." },
    { id: "q25", unit: "ut3", prompt: "Si produccion es mayor que ventas, bajo costeo completo normalmente:", options: ["La utilidad supera a la de variable", "La utilidad siempre baja a cero", "No hay inventarios", "Se eliminan fijos"], answer: 0, explanation: "Parte de los CF queda activada en inventario final." },
    { id: "q26", unit: "ut3", prompt: "Si ventas son mayores que produccion, bajo costeo completo normalmente:", options: ["La utilidad es menor que por variable", "La utilidad es mayor por stock final", "No hay costo de ventas", "No se reconocen costos fijos"], answer: 0, explanation: "Se liberan CF activados en inventarios iniciales." },
    { id: "q27", unit: "ut3", prompt: "La diferencia de utilidades entre modelos se origina principalmente en:", options: ["Costos fijos de produccion activados en inventarios", "Ventas cobradas", "IVA", "Costos hundidos"], answer: 0, explanation: "Sin inventarios con fijos activados, la diferencia desaparece o se reduce." },
    { id: "q28", unit: "ut3", prompt: "Si no hay variacion de inventarios, las utilidades por ambos modelos tienden a:", options: ["Ser iguales", "Diferir siempre por el precio", "Ser negativas", "Depender del IVA"], answer: 0, explanation: "No hay traslado de CF entre periodos via inventarios." },
    { id: "q29", unit: "ut3", prompt: "Producir mas para aumentar utilidad contable bajo completo puede ser riesgoso porque:", options: ["Acumula stock sin ventas reales", "Reduce inventarios siempre", "Elimina costos financieros", "Aumenta caja automaticamente"], answer: 0, explanation: "La utilidad puede subir sin mejora comercial ni de caja." },
    { id: "q30", unit: "ut3", prompt: "Si CF produccion = 10.000 y se producen 1.000 unidades, el fijo absorbido unitario es:", options: ["10", "1.000", "0,10", "11.000"], answer: 0, explanation: "10.000 / 1.000 = 10 por unidad." },
    { id: "q31", unit: "ut4", prompt: "El presupuesto forma parte de:", options: ["Planificacion de corto plazo", "Solo auditoria externa", "Cierre fiscal", "Liquidacion de sueldos"], answer: 0, explanation: "Es un plan numerico para asignar recursos y controlar." },
    { id: "q32", unit: "ut4", prompt: "El ciclo presupuestal suele comenzar por:", options: ["Ventas", "IVA", "Amortizaciones", "Dividendos"], answer: 0, explanation: "Las ventas impulsan compras, costos, cobros y capacidad." },
    { id: "q33", unit: "ut4", prompt: "Ventas devengadas impactan principalmente en:", options: ["Estado de resultados", "Solo flujo de caja", "Solo proveedores", "No impactan"], answer: 0, explanation: "La cobranza puede ocurrir en otro periodo." },
    { id: "q34", unit: "ut4", prompt: "La cobranza impacta en:", options: ["Flujo de caja", "Costo de ventas", "Amortizacion", "Margen unitario"], answer: 0, explanation: "Cobrar es entrada de fondos, no necesariamente venta devengada." },
    { id: "q35", unit: "ut4", prompt: "Compras necesarias se calculan como:", options: ["Ventas/consumo + SF deseado - SI", "SI + SF siempre", "Ventas - precio", "CF / mc"], answer: 0, explanation: "Es la logica de stock: cubrir consumo y terminar con el stock deseado." },
    { id: "q36", unit: "ut4", prompt: "Un desvio presupuestal debe analizarse por:", options: ["Monto, signo, causa y accion", "Solo signo", "Solo total anual", "Solo quien lo detecto"], answer: 0, explanation: "El control requiere interpretacion y medidas correctivas." },
    { id: "q37", unit: "ut4", prompt: "El presupuesto flexible sirve para:", options: ["Comparar ajustando por actividad real", "Cambiar estados contables externos", "Eliminar la planificacion", "Ocultar desvios"], answer: 0, explanation: "Evita confundir variaciones de volumen con eficiencia." },
    { id: "q38", unit: "ut4", prompt: "Una amortizacion presupuestada afecta:", options: ["Resultado y activo, no caja del periodo", "Solo caja", "Solo proveedores", "Solo ventas"], answer: 0, explanation: "Es devengamiento, no salida de fondos actual." },
    { id: "q39", unit: "ut4", prompt: "En modelos de planilla, una regla clave es:", options: ["Separar datos de logica", "Mezclar supuestos dentro de formulas", "No documentar", "Usar formulas distintas en cada columna"], answer: 0, explanation: "Mejora auditabilidad, mantenimiento y reduce errores." },
    { id: "q40", unit: "ut4", prompt: "La rotacion de inventarios se calcula como:", options: ["Costo de ventas / stock promedio", "Stock final / precio", "Ventas / CF", "mc / precio"], answer: 0, explanation: "Luego dias de stock = 365 / rotacion." }
  ],
  realExams: [
    {
      id: "agosto-2022",
      title: "Examen Agosto 2022",
      meta: "Casos practicos extensos. Incluye precio objetivo, analisis marginal y diferencia de utilidades.",
      items: [
        {
          title: "Caso El Ajuste SRL",
          prompt: "Determinar el nuevo precio ante suba del costo variable manteniendo utilidad absoluta, unidades y costos fijos.",
          guide: "La logica es conservar contribucion total: utilidad objetivo + costos fijos. Resultado del caso trabajado: precio $115."
        },
        {
          title: "Caso costeo completo vs variable",
          prompt: "Comparar utilidad cuando se produce mas de lo vendido y queda inventario final con costos fijos absorbidos.",
          guide: "La utilidad por completo supera a variable por el fijo de produccion activado en el inventario final."
        }
      ]
    },
    {
      id: "febrero-2023",
      title: "Examen Febrero 2023",
      meta: "Formato Moodle: 16 preguntas, 72 puntos, tiempo aproximado 1h45. Preguntas obligatorias detectadas: 1, 8 y 12.",
      items: [
        { title: "Entrenamiento teorico", prompt: "Repasar objetivo de costeo variable, costos relevantes y complementariedad de modelos.", guide: "Responder con criterio de decision: ingresos/costos diferenciales y finalidad del modelo." },
        { title: "Entrenamiento practico", prompt: "Resolver punto de equilibrio y utilidad objetivo con cambios en precio o costos.", guide: "Recalcular margen cada vez que cambia precio o CVu." }
      ]
    },
    {
      id: "julio-2023",
      title: "Examen Julio 2023",
      meta: "Formato Moodle: 16 preguntas, 72 puntos, tiempo aproximado 1h45. Preguntas obligatorias detectadas: 2, 6 y 8.",
      items: [
        { title: "Foco de practica", prompt: "Analisis marginal con restricciones, mezcla o comparacion de alternativas.", guide: "Priorizar contribucion por factor escaso y no por precio ni margen unitario aislado." },
        { title: "Foco teorico", prompt: "Distinguir contabilidad gerencial de financiera y uso correcto de modelos de costeo.", guide: "Mencionar usuarios, finalidad, horizonte, normas y flexibilidad del informe." }
      ]
    },
    {
      id: "diciembre-2022",
      title: "Examen Diciembre 2022",
      meta: "Formato Moodle: 16 preguntas, 72 puntos, tiempo aproximado 1h45. Preguntas obligatorias detectadas: 1, 7 y 10.",
      items: [
        { title: "Foco de practica", prompt: "Presupuesto, cobranzas, compras, stock y flujo de caja.", guide: "Separar ER, ESP y FC: devengar no es cobrar ni pagar." },
        { title: "Foco de control", prompt: "Analisis de desvios y presupuesto flexible.", guide: "Explicar causa y accion, no solo calcular diferencia." }
      ]
    },
    {
      id: "julio-2020",
      title: "Examen Julio 2020",
      meta: "El PDF se pudo leer parcialmente por extraccion automatica. Lo dejo identificado como fuente para revisar visualmente mas adelante.",
      items: [
        { title: "Uso sugerido", prompt: "Tomarlo como referencia adicional, pero no como base principal hasta revisar el PDF manualmente.", guide: "La base fuerte de simulacro queda en los examenes 2022 y 2023 que si extrajeron texto util." }
      ]
    }
  ],
  sources: [
    { name: "Unidad Tematica 1 Contabilidad Gerencial", unit: "UT1", type: "Teorico", pages: 21 },
    { name: "Unidad Tematica 2 y 3 Modelos y Analisis Marginal", unit: "UT2/3", type: "Teorico", pages: 38 },
    { name: "Costeo completo y costeo variable: antagonismo o complementariedad - Amaro Yardin", unit: "UT2/3", type: "Articulo", pages: 4, required: true },
    { name: "Casos Analisis Marginal y soluciones", unit: "UT2/3", type: "Practico" },
    { name: "Casos Diferencia de Utilidades", unit: "UT3", type: "Practico" },
    { name: "Ficha ciclo elaboracion presupuesto", unit: "UT4", type: "Teorico" },
    { name: "Principios de construccion de modelos en planilla electronica", unit: "UT4", type: "Teorico" },
    { name: "Casos UT4 presupuesto, desvios, stocks e integrador", unit: "UT4", type: "Practico" },
    { name: "Examen Agosto 2022", unit: "Simulacros reales", type: "Examen" },
    { name: "Examenes Febrero 2023, Julio 2023 y Diciembre 2022", unit: "Simulacros reales", type: "Examenes Moodle" }
  ]
};
