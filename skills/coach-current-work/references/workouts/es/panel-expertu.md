# Convoca un panel de expertos: revisión crítica por IA

La IA interpretará de tres a cinco expertos, incluido un escéptico, y analizará tu propuesta antes de que la vea la dirección o el cliente.

## Convoca un panel de expertos: revisión crítica por IA

**Dificultad: fácil.**\
**Tiempo: aproximadamente 20 minutos** con una propuesta casi terminada.
## Para qué sirve

El jueves presentas a la dirección un plan para que la empresa cambie al nuevo
sistema de control de asistencia antes de fin de año. Lo lees por tercera vez y ya no ves errores. Tus colegas no tienen tiempo para revisarlo, así que las debilidades solo te las mostrará la reunión donde el plan no será aprobado.

El panel de expertos te dará una revisión crítica, es decir, una evaluación rigurosa de la propuesta, antes de la reunión: escucharás dos días antes las objeciones que surgirían allí y decidirás tú mismo sobre los cambios.
## Qué preparar

- una propuesta casi terminada, por ejemplo un plan de proyecto o una oferta,
- documentos base en que se apoya, como el encargo, presupuesto o correo electrónico,
- la IA que usas en el trabajo o una IA en [modo Cowork o Code](glossary:workmode).
## Cómo hacerlo

1. Introduce el prompt; en el chat adjunta la propuesta y los documentos base. La IA preguntará para quién es la propuesta, sugerirá el panel y, tras tu confirmación, dejará que el panel analice la propuesta.
2. Elige entre los cambios recomendados cuáles aceptarás y explica por qué no aceptas los demás. La IA incorporará los cambios aceptados y guardará la nueva versión, el acta y el procedimiento para la próxima vez.
3. Da la nueva versión con el acta a otra IA, preferiblemente de otra empresa: “Encuentra lo que el panel pasó por alto.” Sin una segunda IA, en un chat nuevo elige otro modelo o un nivel superior de [profundidad de pensamiento](glossary:reasoning-mode).
## Ejercicio de IA

Introduce este [prompt](glossary:prompt) en la IA que usas en el trabajo:

Convoca un panel de expertos que critique mi propuesta antes de que la envíe. La propuesta está en esta carpeta o te la adjunto; si no sabes cuál es el archivo, pregúntame.

Lee la propuesta y pregúntame para quién es y qué no puede fallar. Según eso, elige de tres a cinco expertos como roles profesionales que realmente leerían, ejecutarían o sufrirían las consecuencias de la propuesta. Uno debe ser un escéptico que busque por qué la propuesta podría fracasar. Máximo dos pueden ser del mismo campo. Para cada uno escribe en una frase por qué está en el panel y espera a que confirme o modifique la composición.

Luego deja que el panel discuta la propuesta en cuatro rondas:
1. Posturas: cada experto dice qué sostiene de la propuesta y qué le molesta más.
2. Revisión crítica: los expertos responden entre sí y el escéptico ataca la suposición más débil.
3. Resumen: en qué están de acuerdo, dónde quedó el desacuerdo y qué surgió de la discusión.
4. Viabilidad: qué puede fallar en la ejecución y cuánto costaría según los documentos base.

Cada experto habla en cada ronda con no más de dos frases. Si no hay acuerdo, deja el desacuerdo y no inventes compromisos. Verifica en los documentos los números y hechos que sustentan los argumentos. Marca lo que no se pueda verificar.

Al final escribe los cambios recomendados ordenados por beneficio. Para cada uno indica quién del panel lo propuso y quién está en desacuerdo. No decidas por mí y espera a que acepte los cambios.

Luego:
- Incorpora los cambios aceptados y guarda la propuesta como nueva versión en el mismo formato junto al archivo original.
- Guarda junto a la propuesta el acta del panel en un archivo con el mismo nombre que la propuesta y terminación -panel.md. Registra en él la composición del panel, las principales objeciones, qué cambios acepto y cuáles no, y por qué.
- Registra el procedimiento para la próxima vez en el archivo expert-panel.md en esta carpeta: cómo compones y diriges el panel y a quién elegimos para este tipo de propuesta. Si el archivo existe, complétalo.

Si no tienes acceso a la carpeta, dame la nueva versión de la propuesta en el mismo formato que el original, el acta y expert-panel.md como archivos para descargar.

## En tu herramienta

### Microsoft Copilot
Adjunta la propuesta y los documentos base en Copilot Chat con + en el campo de mensaje. Copilot te escribirá la nueva versión y el acta en el chat y, con licencia, los guardará como documentos Word en OneDrive mediante el agente Word del menú Tools o Agents. Copilot guardará el procedimiento para la próxima vez si escribes “Recuerda el procedimiento del panel de expertos.”
Para la segunda lectura abre un chat nuevo y en la esquina superior derecha elige Think deeper.

### ChatGPT
En un chat normal adjunta la propuesta y ChatGPT te dará la nueva versión, el acta y el procedimiento para descargar. Codex, modo en la app ChatGPT para escritorio, trabaja con la carpeta y guarda los archivos junto a la propuesta. Para la segunda lectura abre un chat nuevo y en el campo de mensaje elige High o Extra High.

### Claude
En un chat normal Claude crea la nueva versión y el acta como archivos para descargar. En Cowork eliges la carpeta con la propuesta al asignar la tarea y la IA guarda los archivos allí. Para la segunda lectura elige en un chat nuevo otro modelo o mayor Effort en el menú junto al botón de enviar.

### Gemini
Adjunta la propuesta con Add files desde tu PC o Google Drive. Escribe “Solo enumera la nueva versión de la propuesta” y guarda la respuesta con Share & export › Export to Docs como Documento Google; igual para el acta y el procedimiento. Para la segunda lectura abre un chat nuevo, haz clic en el nombre del modelo en el campo de mensaje y elige Pro con nivel de pensamiento High, si tu licencia lo permite.
## Qué es un panel de expertos

Panel de expertos es el nombre en inglés para un grupo de especialistas que evalúan juntos una propuesta. Aquí todos los expertos los interpreta una sola IA: por ejemplo, alguien de la dirección que aprueba el plan, un colega que lo ejecutará y un escéptico que busca por qué el plan fallaría. Los expertos se critican mutuamente y al final resumen las conclusiones del debate. Sus puntos de vista son simulados y los datos en que se basan deben verificarse. Es útil para cualquier propuesta que no se pueda revertir fácilmente tras enviarla.

Una IA en el rol de cinco expertos puede tener un punto ciego común para todos. Por eso otra IA, preferiblemente de otra empresa, lee la nueva versión. Cada modelo, es decir, cada versión de IA, pasa por alto cosas distintas, así que la segunda suele encontrar lo que todo el panel omitió.

`expert-panel.md` y el acta que termina en `-panel.md` son archivos de texto simples en la carpeta. La extensión `.md` indica que están escritos en
[Markdown](glossary:markdown), un formato sencillo para texto.
## Que el panel se convoque solo

Si escribes propuestas con IA en la misma carpeta, no necesitas convocar el panel manualmente.
Solo hace falta una regla en `AGENTS.md`, archivo con reglas para la IA en la carpeta. La IA en modo Cowork o Code lo lee al iniciar cada trabajo y donde la herramienta lo requiera, lo configura según la instrucción siguiente. Para cada plan u oferta terminada convocará el panel automáticamente y te mostrará los cambios recomendados antes de entregarte la propuesta. La regla la escribe sola si le dices:

```text
Añade al archivo AGENTS.md en esta carpeta la regla: “Antes de entregarme un plan u oferta terminada, convoca un panel de expertos según expert-panel.md y muéstrame los cambios recomendados. Yo decido cuáles acepto.” Si AGENTS.md no existe, créalo. Asegúrate de que en esta herramienta se lea AGENTS.md al iniciar cada trabajo; en Cowork inclúyelo en las instrucciones de la carpeta.
```
## Ejemplo

Petra coordina en una empresa logística de 140 personas el cambio a un nuevo sistema de control de asistencia. El martes 13/10/2026 tiene listo un plan para la dirección: lanzamiento el 1/12 en los tres almacenes a la vez y presupuesto de 380 000 CZK. El jueves lo presenta en reunión. La IA le propone un panel: director financiero que aprueba el plan, jefe de turno del almacén, contable de nóminas y un escéptico. Petra confirma el panel y tras cuatro rondas recibe:

```text
Cambios recomendados ordenados por beneficio

1. Fecha: el 1/12 comienza la temporada alta navideña, los almacenes trabajan en tres turnos y no habrá tiempo para capacitación. Lanzar primero un almacén en noviembre, los otros dos en enero.
   Propuesto por: jefe de turno. En desacuerdo: nadie.
2. Nóminas: el cambio a mitad de mes implica dos registros para un solo pago. Lanzar cada almacén el primer día del mes.
   Propuesto por: contable de nóminas. En desacuerdo: nadie.
3. Lectores: eliminar del plan los lectores nuevos por 120 000 CZK, según oferta del proveedor los antiguos funcionan con el nuevo sistema.
   Propuesto por: director financiero. En desacuerdo: escéptico, en el almacén B dos de cinco lectores antiguos están fuera de servicio.
```

Petra acepta los dos primeros cambios y mantiene los lectores nuevos en el plan porque en el almacén B igual tendría que cambiar los antiguos. La IA guarda la nueva versión del plan, el acta en `plan-dochazka-panel.md` y el procedimiento en `expert-panel.md`. Luego Petra adjunta la nueva versión con el acta a otra IA que usa la empresa y que es de otra empresa. Esta encuentra que el plan no indica quién y cuándo informará a los empleados del cambio, así que la IA añade al plan un correo a todos los empleados una semana antes del lanzamiento. El jueves la dirección aprueba el plan.
## Si te atascas

- **Todos los expertos dicen casi lo mismo:** pide a la IA que cambie a uno por alguien a quien la propuesta le dé más trabajo o le quite dinero, y que el escéptico sea más riguroso.
- **El panel habla en general y no conoce tu situación:** añade a la carpeta el encargo o correo del que parte la propuesta y haz que la IA repita la ronda de revisión crítica. Para que la IA conozca tu situación siempre, regístrala en el [archivo de reglas para IA](card:agents-md).
- **El argumento se basa en un dato no verificado:** haz que lo busque con [Deep Research](card:deep-research), modo en que la IA consulta fuentes web, y solo entonces cambia la propuesta.
- **Las rondas son largas para leer:** basta con la lista de cambios recomendados al final. Consulta las rondas solo si no entiendes por qué un experto propone algo.
## Qué tendrás listo

Tendrás una nueva versión de la propuesta analizada por el panel de expertos y revisada por una segunda IA, con solo los cambios que aceptaste. Junto a ella estará el acta, donde tú y tu colega verán por qué aceptaste o rechazaste cada cambio. En `expert-panel.md` está el procedimiento para que la IA convoque el panel la próxima vez cuando escribas “Convoca panel de expertos según expert-panel.md para esta propuesta”. En un chat normal adjunta esa frase, `expert-panel.md` y la propuesta; si la IA tiene el procedimiento en memoria, basta con la propuesta.
## Qué sigue

Compara los datos y afirmaciones que el panel marcó para verificar con los documentos base según la tarjeta [Verifica la salida de IA](card:kontrola-vysledku). Si quieres tener el panel disponible en cada carpeta, haz que la IA convierta `expert-panel.md` en un [skill](card:create-skill-from-proven-process), es decir, una guía que la IA carga sola cada vez que escribes “convoca panel de expertos”.
## Markdown

**Qué es:** Un formato simple de texto plano en el que los encabezados, listas, enlaces y otras estructuras se escriben usando unos pocos caracteres comunes. Los archivos suelen tener la extensión `.md`.

**Qué no es:** No es un lenguaje de programación ni un formato exclusivo para desarrolladores.

**Por qué lo necesita el estudiante:** Permanece fácilmente legible y editable tanto para personas como para IA, y puede transferirse entre diferentes herramientas.

## Prompt

**Qué es:** Instrucción para una interacción específica con la IA.

**Qué no es:** No es lo mismo que un contexto a largo plazo, un asistente almacenado o un agente.

**Por qué lo necesita el estudiante:** Inicia el ejercicio y guía su desarrollo; no es el contenido principal de aprendizaje.

## Modo de razonamiento profundo

**Qué es:** Una opción en la que la IA dedica más tiempo computacional a analizar la tarea antes de generar una respuesta. La implementación específica y el nombre dependen del producto.

**Qué no es:** No es una garantía automática de exactitud ni siempre la mejor opción para cada tarea.

**Por qué el estudiante lo necesita:** Ayuda a decidir cuándo la complejidad o importancia de la tarea justifica una espera más larga, mayor consumo o disponibilidad limitada.

## Modo de trabajo

**Qué es:** Tipo de interacción con la IA: chat, lienzo/artefacto, agente, codificación, búsqueda. Diferentes tareas requieren diferentes modos.

**Qué no es:** No es un nivel de sofisticación. El modo lo elige la persona según la tarea, no según su puntuación.

**Por qué lo necesita el estudiante:** Enseña a reconocer cuándo cambiar del chat a otro entorno para obtener un mejor resultado.

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
