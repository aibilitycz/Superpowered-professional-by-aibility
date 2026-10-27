# Pregunte a sus datos: AI calculará la respuesta desde un exportado

La IA calcula la respuesta a una pregunta basada en un exportado para su decisión y guarda el procedimiento para el próximo mes.

## Pregunte a sus datos: AI calculará la respuesta desde un exportado

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con exportado y una pregunta.
## Para qué sirve

Es lunes 2 de noviembre y el director comercial quiere saber antes del viernes en qué productos lanzar la campaña navideña. El exportado de pedidos de tres meses tiene catorce mil filas y los precios de compra, sin los cuales no se sabe en qué gana la empresa, los lleva el almacén en otro sistema.

La IA une ambos exportados y calcula la respuesta con un programa corto de todas las filas, por lo que no se basa en estimaciones.
## Qué preparar

- exportado desde e-shop, contabilidad o CRM en `.xlsx`, `.csv` o tabla en la nube,
- la pregunta a la que necesita respuesta y para qué la usará,
- la tabla original abierta en un editor de hojas de cálculo para verificar un número,
- IA que pueda calcular con archivos (lo muestra el bloque "En su herramienta").
## Cómo hacerlo

1. Suba el exportado al chat (en modo Cowork o Code abra la carpeta con los exportados), pegue el prompt del ejercicio de IA y debajo escriba la pregunta y para qué necesita la respuesta.
2. La IA describirá qué encontró en el exportado, unirá los exportados y calculará la respuesta. Verifique el número que le da en la tabla original y dígale si coincide.
3. Si coincide, la IA guardará el procedimiento como [skill](glossary:skill), en memoria o en instrucciones y escribirá una frase para el próximo exportado. Dónde, lo muestra el bloque "En su herramienta".

Usted decide qué hacer con el resultado.
## Ejercicio de IA

Pegue este [prompt](glossary:prompt) en la IA que usa en el trabajo:

Necesito una respuesta a una pregunta basada en datos. La pregunta y para qué usaré la respuesta la escribiré debajo de este texto. Los datos están en el exportado adjunto o en la carpeta donde trabajas.

1. Carga todos los archivos y dime qué contienen: cuántas filas, qué columnas y de qué periodo. Si no sabes qué significa alguna columna y es importante para la respuesta, pregúntame.
2. Si necesitas dos exportados para la respuesta, únelos por la columna común, por ejemplo, código de producto. Compara el número de filas antes y después de unir para que no se dupliquen ni se pierdan filas. Lista las filas que no se emparejan y cuántas son.
3. Calcula la respuesta con código usando todas las filas, sin estimar nada. Si falta algo en los datos para la respuesta, como precios de compra para las ventas, indica qué falta y dónde probablemente encontrarlo.
4. Escribe el resultado así: respuesta en una a tres frases, tabla con los números base y descripción del cálculo en palabras simples. Al final dame un número clave para verificar en la tabla original y dime cómo encontrarlo: hoja, columna y filtro.

Si digo que el número no coincide, busca por qué, corrige el cálculo y dame un nuevo número para verificar. Cuando diga que coincide, guarda el procedimiento para que el próximo exportado se pueda procesar con una sola frase. Nómbralo según el tema, por ejemplo Ganancia por productos. En el procedimiento indica qué archivos y columnas esperas, cómo los unes y qué calculas; no pongas números de este exportado. Si trabajas en una carpeta, guárdalo allí como archivo, por ejemplo procedimiento-ganancia-por-productos.md, y junto a él el código usado. En chat normal convierte el procedimiento en skill, y si la herramienta no soporta skills, guárdalo en memoria. Si no es posible ninguno, dame el procedimiento como archivo para descargar y subirlo junto con el exportado la próxima vez. Si necesitas que haga clic, dime exactamente dónde. Al final dime el nombre del procedimiento, dónde está guardado y la frase para usar el próximo exportado; la frase debe incluir el nombre del procedimiento.

## En su herramienta

### Microsoft Copilot
Copilot Chat con cuenta laboral calcula el exportado adjunto en Python; el archivo se añade con el botón + o arrastrando. Cuando el número coincide, Copilot guarda el procedimiento en memoria; dígale que lo escriba completo y péguelo en las instrucciones del Notebook (Bloc de notas, Nuevo bloc), donde subirá el próximo exportado. Exportados regulares en OneDrive los procesa Cowork junto al interruptor Chat (licencia Microsoft Copilot).

### ChatGPT
Adjunte el exportado al chat, la IA ejecutará el programa en Python sola. En planes Business y Enterprise convierte el procedimiento en skill que guarda en su cuenta; se ve en Plugins, pestaña Skills. Otras cuentas guardan el procedimiento en memoria y exportados grandes los procesa Codex en la app ChatGPT para PC directamente en la carpeta.

### Claude
Los cálculos los realiza la función Code execution and file creation en Settings bajo Capabilities; en cuentas personales está activada, en corporativas la administra el gestor. El archivo puede tener hasta 30 MB y Claude puede convertir el procedimiento en skill. Exportados grandes y regulares los procesa Cowork o Claude Code directamente en la carpeta.

### Gemini
Suba el exportado a la app Gemini con Añadir archivos o desde Drive; basta una tabla de Google y puede adjuntar dos exportados a la vez. Que Gemini calcule con código no lo indica la ayuda de Google, por eso no omita el número para verificar. La cuenta laboral no tiene memoria, así que guarde el procedimiento como skill (escriba "Guarda esto como skill"); en el siguiente exportado lo seleccionará tras escribir "/" en el campo de mensaje.
## Qué es cálculo con código

Cuando la IA solo lee la tabla como texto, estima números y en exportados grandes puede omitir filas. Por eso se le pide calcular con código: la IA escribe un programa corto, lo ejecuta sobre todo el archivo y del resultado le da la respuesta. No necesita leer el código, la exactitud se verifica con el número que comprueba en la tabla. En modo Cowork o Code la IA calcula directamente sobre archivos en la carpeta, maneja exportados grandes y guarda el procedimiento junto a ellos como archivo de texto.

La IA une dos exportados por [clave común](glossary:data-key): columna que está en ambos archivos igual, por ejemplo código de producto o número de pedido. Nombre de producto o cliente suele escribirse distinto en cada sistema, por eso no basta para unir.

Si los exportados llegan cada mes o el chat no carga todo, trabaje con IA en modo Cowork o Code, que trabaja directamente con la carpeta en su PC. Cómo empezar lo muestra la tarjeta [Cowork o Code](card:when-chat-is-not-enough).
## Que el próximo exportado lo calcule la IA sola

Tras la primera ronda la IA tiene el procedimiento guardado. El próximo mes le da el nuevo exportado y escribe la frase que la IA le dio, por ejemplo "Usa el procedimiento Ganancia por productos para el exportado de noviembre". La IA calcula igual que antes, así puede comparar cifras de ambos meses.

Si el exportado llega cada mes solo a la misma carpeta en su PC, la IA en modo Cowork o Code puede calcular la respuesta sin usted en el día programado como [tarea programada](card:recurring-ai-task). Déle esta instrucción y pídale que cree la tarea:

```text
Cada mes el día 3 a las 8:00 toma el exportado más reciente en la carpeta y calcula la respuesta según el procedimiento guardado. Guarda el resultado junto al exportado como archivo con el mes en el nombre y al inicio escribe qué cambió respecto al mes anterior.
```

Si la tarea trabaja con la carpeta en su PC, solo funcionará si el PC está encendido y la aplicación abierta.
## Ejemplo

Martina coordina ventas en e-shop de café y cafeteras. El lunes 2/11 descarga el exportado de pedidos de agosto a octubre (`pedidos.xlsx`, 14 200 filas) y del almacén la lista de precios de compra (`precios-compra.xlsx`). Sube ambos archivos a la IA que usa en el trabajo, pega el prompt y debajo escribe: "¿En qué tres productos hacer campaña navideña? Quiero los que más ganamos."

La IA dice qué cargó y avisa que en pedidos solo hay ventas. Según ellas ganaría la cafetera Brio con 1,24 millones CZK, pero no se sabe la ganancia real solo con ventas. Por eso une pedidos con lista de precios por código de producto. Faltan seis códigos en la lista; la IA los lista aparte, Martina reconoce novedades de septiembre y pide precios al almacén. Respuesta: más ganaron café Etiopía 250 g, café Brasil 1 kg y molinillo manual Classic. Brio tiene margen 9 %, cafés más de 40 %.

Para verificar la IA da la venta del café Etiopía: 386 450 CZK, hoja Pedidos, columna Venta, filtro Código producto ETI-250. Martina filtra en la tabla y suma coincide. Le dice a la IA y esta convierte el procedimiento en skill Ganancia por productos; Martina confirma guardarlo con un clic. A inicios de diciembre sube en chat nuevo el exportado de noviembre con lista y solo escribe "Usa procedimiento Ganancia por productos para exportado de noviembre". En dos minutos tiene la misma tabla para noviembre.
## Si se atasca

- **La IA da números pero no ve cómo los calculó:** escriba "Calcula con código sobre todo el archivo y muéstrame el cálculo." Si la IA no puede ejecutar código, revise en "En su herramienta" si debe activar cálculos y nunca omita el número para verificar.
- **Número verificado no coincide:** diga a la IA qué encontró en la tabla y con qué filtro. Usualmente calculó con otro periodo, con pedidos cancelados o la unión duplicó filas. Si el número no coincide en exportado siguiente, pida a la IA que corrija también el procedimiento guardado. Si los errores persisten, continúe con [verificación del resultado](card:kontrola-vysledku).
- **La IA dice que no cargó todo el archivo:** el chat puede no manejar exportados grandes. Cambie a [Cowork o Code](card:when-chat-is-not-enough), donde la IA trabaja con archivo en carpeta. Si no tiene ese modo, pida a la IA qué columnas y periodo necesita y descargue exportado solo con ellos.
- **La IA no guarda el procedimiento o no lo usa en chat nuevo:** active memoria en configuración; en cuenta corporativa a veces la memoria y skills las controla el administrador. Si no es posible, pida el procedimiento como archivo para descargar y súbalo con el exportado la próxima vez. En chat nuevo siempre escriba la frase para la próxima vez con el nombre del procedimiento.
## Qué tendrá listo

Tiene la respuesta a su pregunta calculada de todas las filas del exportado y un número verificado en la tabla original. Sabe qué falta en los datos. El procedimiento está guardado como skill, en memoria, en carpeta o como archivo suyo, y la próxima vez basta con nuevo exportado y la frase que la IA le dio.
## Qué sigue

Puede mejorar el procedimiento guardado según sus correcciones. Cómo hacerlo muestra la tarjeta [Cree su skill](card:create-skill-from-proven-process). Si colegas necesitan el mismo cálculo y no quiere hacerlo cada mes por ellos, pida a la IA crear una app sencilla donde ellos mismos suban el exportado. A eso se le llama [vibe coding](card:risk-based-prototyping).
## Clave común en los datos

**Qué es:** Columna o combinación de columnas que permite identificar de manera segura el mismo registro en dos fuentes, por ejemplo, el ID de pedido o la combinación de mes y centro de costos.

**Qué no es:** No es una contraseña ni una clave técnica de acceso. El mismo nombre de empresa o persona no siempre es una clave común confiable.

**Por qué el estudiante la necesita:** Ayuda a unir filas correspondientes sin pérdida, confusión o duplicación no deseada.

## Prompt

**Qué es:** Instrucción para una interacción específica con la IA.

**Qué no es:** No es lo mismo que un contexto a largo plazo, un asistente almacenado o un agente.

**Por qué lo necesita el estudiante:** Inicia el ejercicio y guía su desarrollo; no es el contenido principal de aprendizaje.

## Habilidad

**Qué es:** Un procedimiento reutilizable para un tipo específico de tarea. Puede incluir instrucciones, reglas, ejemplos, plantillas y otros recursos necesarios. La forma de creación y ejecución varía según la herramienta.

**Qué no es:** No es un rol general del asistente ni una conversación exitosa guardada sin cambios.

**Por qué lo necesita el estudiante:** Ayuda a convertir una práctica comprobada en una forma estable que se puede usar de manera consistente nuevamente.

## Interrupción del servicio, límite o chat saturado

Fallback común para interrupciones operativas en el trabajo con IA. Está disponible desde cualquier tarjeta a través de la entrada **Interrupción o límite agotado**. No crea una tarjeta propia, check-in ni varias copias del mismo texto.

La sección específica **Cuando algo no funciona** en la tarjeta aborda errores de entrada, materiales, herramienta o procedimiento. Esta mecánica se activa cuando la IA no puede continuar técnicamente en el proceso.

## Primero distinga qué ocurrió

| Lo que ve | Situación probable | Primer paso |
|---|---|---|
| La herramienta indica límite agotado, demasiadas solicitudes o tiempo de renovación | límite tarifario o operativo temporal | anote la hora de renovación y guarde un punto de retorno |
| La IA olvida el inicio, rechaza otro adjunto o indica entrada demasiado larga | contexto, archivo o tarea demasiado grande | cree un handoff y continúe en un contexto nuevo o entorno más adecuado |
| La herramienta no responde, devuelve error de servidor o fallan varios modelos | interrupción del servicio | verifique el estado oficial y elija un reemplazo aprobado o pausa |

Si la IA aún responde, puede nombrar la situación y preparar un punto de retorno. Si no responde, omita este paso. Reenviar repetidamente la misma solicitud no salvará el estado del trabajo.

## Guarde un punto de retorno

Antes de esperar o cambiar de lugar, conserve el paquete mínimo desde el cual se pueda continuar con seguridad:

```text
Objetivo: ...
Qué está hecho y dónde está: ...
Decisiones confirmadas y limitaciones: ...
Recursos o archivos usados: ...
Siguiente paso más cercano: ...
Qué no debe cambiarse ni rehacerse: ...
```

Si la IA sigue respondiendo, use:

> Prepárame un punto de retorno conciso para continuar en un chat o herramienta nuevos. Mantén el objetivo, partes hechas, decisiones confirmadas, recursos, limitaciones y un paso siguiente cercano. No inventes nada que no esté en la conversación.

Para trabajos más largos, guarde el punto de retorno en el README del proyecto u otro espacio de trabajo aprobado. Las entradas sensibles permanecen solo en almacenamiento aprobado.

## Se agotó el límite tarifario o operativo

1. Averigüe cuándo se renovará el límite y si afecta al modelo, función o cuenta completa.
2. Decida entre pausa, alcance menor y modelo o entorno alternativo aprobado.
3. Al cambiar, transfiera el punto de retorno y solo los materiales necesarios para el siguiente paso.
4. Verifique que el reemplazo maneje los archivos, herramientas y acciones necesarias. Un modelo más débil puede ser suficiente para formatear y fallar en análisis o trabajo con herramientas.

## El contexto, archivo o tarea es demasiado grande

1. Permita que la IA cree un handoff antes de perder decisiones anteriores, si aún responde.
2. Inicie un chat o proyecto nuevo con el punto de retorno y enlaces a archivos canónicos.
3. Divida el trabajo en unidades significativas y mantenga criterios comunes de resultado. Cortar texto al azar puede perder relaciones entre partes.
4. Si la tarea requiere varios archivos, trabajo en lote o cambios en el proyecto, continúe a través de la tarjeta `when-chat-is-not-enough`.

## La herramienta o modelo tiene una interrupción

1. Verifique el estado oficial del proveedor. Resuelva errores de cuenta solo cuando el servicio funcione en general.
2. Guarde el punto de retorno fuera de la conversación actualmente no funcional, si aún es accesible.
3. Use la herramienta alternativa aprobada solo si tiene las capacidades necesarias y puede recibir los mismos materiales.
4. Si no hay un reemplazo adecuado, pause el trabajo y registre el siguiente paso exacto. Al restaurar, retome desde el último resultado confirmado.

## Límites de seguridad

- El límite o interrupción no es motivo para introducir datos laborales, de clientes o personales en una herramienta personal no aprobada.
- Una cuenta nueva, tarifa gratuita u otro proveedor puede tener condiciones diferentes para datos, almacenamiento y entrenamiento.
- Cambiar entre modelos puede alterar formato, precisión y herramientas disponibles. Compare la primera salida tras el retorno con el último punto confirmado.
- No reenvíe una acción que pudo haberse ejecutado antes del error hasta verificar su estado. Esto aplica especialmente para registros en sistemas, envío de mensajes, compras o eliminaciones.

## Retorno a la tarjeta

Tras restaurar el servicio o cambiar a un entorno adecuado:

1. cargue el punto de retorno,
2. muestre a la IA el último resultado confirmado,
3. solicite solo el siguiente paso más cercano,
4. complete la tarjeta original sin repetir trabajo ya hecho,
5. si cambió la herramienta o modelo, anote la diferencia que pudo afectar el resultado.

## Registro

La mecánica no crea un cumplimiento independiente. Solo puede añadir al resultado de la tarjeta principal el punto de retorno, la ruta elegida y posibles diferencias tras el cambio de herramienta.

## Mecánica: Comprobación de preparación del argumento

Una breve comprobación al inicio de las tarjetas que generan una salida para otra persona. No es una tarjeta independiente y no tiene cumplimiento propio. Es el contrapunto a la mecánica `data-readiness-check`: aquella verifica si los datos están listos, esta verifica si la intención está preparada.

## Cuándo se activa

Cuando una persona prepara una salida que verá alguien más: presentación, informe, recomendación, propuesta, correo para la dirección, resumen para el cliente. No se activa para salidas propias, ni para investigación ni para notas en desarrollo.

## Por qué existe

La IA puede generar veinte diapositivas o tres páginas de informe de cualquier cosa y parecerá terminado. Una salida vacía no se diferencia a simple vista de una buena porque la parte que falta es la intención, no la forma. Tres frases de una persona son la forma más económica de detectarlo antes de crear, no después.

## Qué solicita a la persona

Tres cosas, y ninguna la propone la IA:

| Qué | Por qué la IA no puede determinarlo |
|---|---|
| **Audiencia** | quién está delante y qué saben esas personas, solo lo sabe la persona |
| **Cambio** | qué debe hacer o decidir diferente la audiencia tras leerlo |
| **Frase clave** | la única frase que deben recordar si olvidan todo lo demás |

## Prueba de inversión

La frase clave se reconoce por dos propiedades: se puede estar en desacuerdo con ella y cabe en una sola respiración. La prueba es invertirla al opuesto.

- *Queremos mejorar la experiencia del cliente* → el opuesto es absurdo, por lo que la frase no dice nada.
- *Detengamos el desarrollo de la segunda aplicación y volvamos a la primera* → el opuesto tiene sentido y alguien lo defenderá. Esta es la frase clave.

Si la frase no pasa, la IA lo dice y deja que la persona la reescriba. No la reescribe por ella.

## Qué hace la IA

1. Solicita las tres frases y espera a que las entreguen. No las sugiere ni comenta.
2. Realiza la prueba de inversión. Si la frase no pasa, explica por qué y la devuelve a la persona.
3. Pregunta si el formato corresponde a la intención. Si otro formato provocaría mejor el cambio, ofrece la tarjeta `output-beyond-document` y deja la decisión a la persona.
4. Cuando las tres frases están listas, continúa directamente con el ejercicio principal de la tarjeta y no vuelve a ellas.

## Qué queda para la persona

- determinar la audiencia y el cambio,
- escribir y, si es necesario, reescribir la frase clave,
- decidir si el formato se ajusta a la intención,
- decidir qué es contexto y qué se omite si falta tiempo.

## Salida de la mecánica

Tres líneas dentro del resultado principal de trabajo, sin documento independiente ni otro check-in:

```text
Audiencia: ...
Cambio que debe provocar la salida: ...
Frase clave: ...
```

## Enrutamiento

- **Las tres frases están claras:** continuar con el ejercicio principal de la tarjeta.
- **La frase clave no pasa la prueba de inversión:** dejar que la persona la reescriba, no continuar.
- **No se puede escribir la frase:** generalmente la decisión no se ha tomado o la salida tiene dos objetivos. Dividir en dos salidas.
- **El cambio se provocaría mejor con otro formato:** tarjeta `output-beyond-document`.
- **Faltan materiales o contexto:** tarjeta `prace-s-kontextem`.
- **La salida ya existe y se va a enviar:** tarjeta `kontrola-vysledku`.

## Límites

- La mecánica no evalúa la calidad del contenido ni la veracidad de las afirmaciones. Eso lo hace la revisión del resultado sobre la salida terminada.
- No se activa para salidas propias; preguntar por la audiencia en notas propias es un ritual, no ayuda.
- Si la persona conoce y escribe las tres frases en medio minuto, la mecánica termina. No retrasa a quien tiene la intención.

## Bloque mínimo de prompt

```text
Antes de empezar a crear cualquier cosa, pídeme tres cosas y espera a que las entregue: para quién es la salida, qué debe cambiar tras ella y cuál es la única frase que debe transmitir. No me las sugieras.

Luego intenta invertir mi frase clave al opuesto. Si el opuesto suena absurdo, dime que la frase no afirma nada y déjame reescribirla. No la reescribas por mí.

Cuando las tres frases estén listas, continúa directamente con la tarea principal y no vuelvas a ellas. Si otro formato provocaría mejor el cambio que el que quiero, dilo en una frase y deja la decisión en mí.
```

## Mecánica: Control de preparación de datos

Una breve verificación adaptativa al inicio de las tarjetas de datos. No es una tarjeta independiente, no tiene cumplimiento propio y la persona no necesita buscar artificialmente una tabla problemática por su causa.

## Cuándo se activa

La persona presenta una pregunta real y los datos sobre los que quiere trabajar. Antes de insertar los datos debe estar claro que usa un entorno aprobado. Si no está claro, la mecánica redirige a la ruta de seguridad y no solicita el contenido.

## Qué hace la IA

1. Verifica a partir del objetivo y el conjunto si entiende qué representa una fila, las columnas importantes, las unidades y el período temporal.
2. Realiza una rápida revisión técnica de la estructura, tipos de datos, valores vacíos, posibles duplicados y categorías.
3. Divide los hallazgos en:
   - correcciones técnicas que puede proponer o realizar de forma segura,
   - cuestiones de significado que deben decidir la persona o el propietario de los datos,
   - problemas que requieren otro entorno o una tarjeta independiente.
4. Si nada importante impide el trabajo, continúa directamente con el ejercicio principal de la tarjeta.
5. Si se requiere una corrección técnica, muestra el cambio con un ejemplo, solicita aprobación y crea una copia de trabajo. Conserva el archivo original.
6. Si no entiende el significado, solo formula preguntas que puedan cambiar el resultado. No inventa respuestas.

## Qué queda para la persona

- confirmar el significado de los datos y el propósito del trabajo posterior,
- decidir si las categorías pueden fusionarse y qué significa un valor faltante,
- aprobar cambios que puedan afectar el contenido sustantivo,
- determinar si la ambigüedad requiere al propietario de los datos.

## Resultado de la mecánica

La mecánica crea un registro preflight de hasta tres puntos dentro del resultado principal de trabajo:

```text
Estado de los datos: preparado / modificado / bloqueado
Cambios realizados o supuestos confirmados: ...
Qué queda por verificar: ...
```

No se genera un documento independiente ni otro check-in.

## Enrutamiento

- **Datos preparados:** continuar directamente con el análisis o tarea de decisión.
- **Inconsistencia técnica simple:** la IA la corrige tras aprobación y continúa.
- **Significado comercial ambiguo:** consultar a la persona o propietario de los datos.
- **Varios archivos o sistemas:** tarjeta `unificar-datos-de-multiples-fuentes`.
- **Conversaciones, tickets o feedback:** tarjeta independiente para convertir contenido no estructurado en estructura.
- **Archivo demasiado grande o incapacidad de la herramienta:** tarjeta `cuando-chat-no-es-suficiente`.
- **Incertidumbre sobre si se pueden insertar datos:** tarjetas `uso-seguro` y `manejo-de-datos`.

## Límites

- La IA corrige automáticamente formatos habituales y categorías conocidas, la persona no debe buscarlas manualmente.
- La mecánica no genera problemas si no encuentra ninguno importante.
- La preparación se evalúa respecto a la pregunta concreta. La misma tabla puede ser suficiente para una visión general y no para una conclusión financiera o de personal precisa.
- La revisión del formato no reemplaza la revisión de valores específicos y cálculos en el resultado final.

## Bloque mínimo de prompt

```text
Antes de comenzar a analizar los datos, realiza una breve verificación de su preparación respecto a mi pregunta.

Primero resume qué crees que representa una fila, las columnas importantes, las unidades y el período. Puedes proponer corregir inconsistencias técnicas. Pregunta sobre ambigüedades de significado y no inventes nada.

Si los datos están preparados para la tarea, dilo en una sola frase y continúa directamente. Si algo puede cambiar el resultado, muestra hasta tres puntos. Realiza cambios en el contenido sustantivo o eliminación de filas solo tras mi aprobación y solo en una copia de trabajo.
```
