# CHANGELOG AUDIT-2026-07

Auditoria de cobertura contra examenes reales de Diciembre 2022, Agosto 2022 y Julio 2023.

## Correcciones de errores

- `ag22-4` Mascotas SRL: corregido el punto de indiferencia a 115 unidades. La sucursal tambien conserva el costo variable del producto de $65; mejora por unidad = `(300 - 65 - 30) - (120 - 65) = 150`.
- `jul23-2` La Cerealera: corregida la explicacion FIFO del punto de equilibrio. Se reemplazo el margen normalizado por `RAII = 5Q + 5.000 - 37.730 = 0`.

## Lecciones agregadas

- `ut4-audit-esp-variaciones`: variaciones del Estado de Situacion Patrimonial. Cubre Diciembre 2022 P6 y Julio 2023 P9.
- `ut4-audit-er-variaciones`: variaciones del Estado de Resultados y gastos de estructura. Cubre Diciembre 2022 P10 y Julio 2023 P11.
- `ut4-audit-iva-presupuesto`: IVA en presupuestacion, deudores, cobranzas y ciclos. Cubre Julio 2023 P6 y P10.
- `ut4-audit-centros-transferencias`: centros de responsabilidad y precios de transferencia. Cubre Julio 2023 P12/P15 y teoricas relacionadas.
- `ut4-audit-er-lineas`: Estado de resultados por lineas, CF directos e indirectos. Cubre Julio 2023 P4.
- `ut4-audit-market-share`: presupuesto de ventas con market share. Cubre Diciembre 2022 P7.
- `ut4-audit-patrimonio-presupuestado`: presupuesto patrimonial y prestamos de accionistas. Cubre Diciembre 2022 P4.
- `ut4-audit-ciclo-creditos`: ciclo de conversion de creditos por ventas. Cubre Diciembre 2022 P11 y Julio 2023 P6.
- `ut4-audit-pe-financiero`: punto de equilibrio financiero. Cubre Agosto 2022 P6.
- `ut4-audit-prestamos`: cronogramas de prestamos e intereses. Cubre Julio 2023 P7, Febrero 2023 P9/P10 y Diciembre 2022 P6.
- `ut23-audit-produccion-conjunta`: produccion conjunta y subproductos. Cubre Diciembre 2022 P2.

## Formulas agregadas

- UT4: `Delta CT = Delta PF + Delta Patrimonio - Delta BU - Delta Disp`.
- UT4: `Delta Disp = Delta PF + Delta Patrimonio - Delta CT - Delta BU`.
- UT4: ciclo de creditos por ventas con IVA cuando corresponde.
- UT4: punto de equilibrio financiero.
- UT2/3: contribucion por unidad de proceso en produccion conjunta.

## Ejercicios guiados agregados

- `audit-reutilice-exportacion`: Diciembre 2022 P1 y validacion de Mascotas SRL/ag22-4.
- `audit-esp-diciembre-p6`: Diciembre 2022 P6.
- `audit-esp-julio-p9`: Julio 2023 P9.
- `audit-er-diciembre-p10`: Diciembre 2022 P10.
- `audit-iva-creditos-julio`: Julio 2023 P6.
- `audit-er-lineas-julio-p4`: Julio 2023 P4.
- `audit-prestamo-julio-p7`: Julio 2023 P7.
- `audit-produccion-conjunta-dic22`: Diciembre 2022 P2.
- `audit-market-share-dic22`: Diciembre 2022 P7.
- `audit-patrimonio-dic22`: Diciembre 2022 P4.

## Replicas de examenes reescritas

- Diciembre 2022 P1-P16: explicaciones reemplazadas por desarrollo paso a paso; opciones mezcladas para no dejar siempre la correcta en primer lugar.
- Julio 2023 P1, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12 y P15: explicaciones reemplazadas por desarrollo numerico o teorico.
- Febrero 2023 P1, P4, P6, P9, P10, P11 y P15: se eliminaron explicaciones genericas del tipo "respuesta correcta".
