# Haga su AI-WBS: plan de proyecto dividido entre personas e IA

La IA desglosa el plan del proyecto, asigna cada paso a una persona o a la IA, y realiza su primer paso de inmediato.

## Haga su AI-WBS: plan de proyecto dividido entre personas e IA

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con un proyecto que está comenzando.
## Para qué sirve

En una reunión, la dirección le encarga la mudanza de la oficina a un nuevo edificio. Se traslada
1. el 2º piso, y en el calendario solo tiene un ítem "mudanza" sin saber qué puede hacer la IA y cuándo necesitará a los colegas de TI y operaciones.

Un plan donde en cada paso se indica quién lo hará y qué resultado se obtendrá,
está en la carpeta del proyecto, de modo que un nuevo chat o un colega pueden ver qué está terminado y qué sigue.
## Qué preparar

- carpeta del proyecto con documentos: el encargo, correo de la dirección o acta de la reunión,
- unas frases sobre el objetivo del proyecto, fecha límite y personas que trabajan en él,
- IA en modo Cowork o Code, que trabaja directamente con los archivos en su carpeta.
## Cómo hacerlo

1. Abra la carpeta del proyecto en IA en modo Cowork o Code (donde encontrarlo lo muestra el bloque "En su herramienta"), pegue el prompt del ejercicio de IA y debajo escriba el objetivo, fecha y personas del proyecto.
2. La IA mostrará el plan como tabla y preguntas. Responda, corrija la columna "Quién lo hará" y escriba "Guardar": la IA guardará el plan, hará su primer paso y escribirá la regla en `AGENTS.md`.
3. Abra el resultado del primer paso y revíselo. Lo que no encaje, escríbalo a la IA y ella lo corregirá en el archivo y en el plan.

Solo con chat común, consulte la sección Cuando se atasque.
## Ejercicio de IA

Pegue este [prompt](glossary:prompt) en IA en modo Cowork o Code, abierta en su carpeta:

Haz para este proyecto un AI-WBS: plan completo del proyecto dividido entre personas e IA. Si no tienes acceso a la carpeta del proyecto ni puedes guardar archivos, dímelo de inmediato para que pueda cambiar a Cowork o Code.

Revisa los documentos en la carpeta del proyecto y mis notas bajo esta tarea. Si ya hay un plan en la carpeta, modifícalo y no crees otro.

Desglosa todo el proyecto desde el inicio hasta la finalización en cinco a diez pasos principales. Cada paso termina con algo que se pueda mostrar: archivo, lista, decisión u orden. No omitas pasos posteriores, solo descríbelos más brevemente. Ordena los pasos para que lo útil aparezca cuanto antes. Escribe el plan como tabla con tres columnas:
- Paso: qué se hará.
- Quién lo hará: persona específica o IA y nombre de quien revisará el resultado.
- Qué se obtiene: resultado concreto del paso.

Todo lo que pueda prepararse con documentos, asígnalo a la IA. Decisiones, negociaciones y pasos que impliquen enviar, publicar, firmar o pagar, asígnalos a personas. Si no sabes quién hará el paso, pon un signo de interrogación y no inventes nombres.

Muéstrame el plan y debajo todas las preguntas que los documentos no respondieron y que podrían cambiar el plan. Espera mi respuesta para corregir o confirmar el plan. Luego guárdalo como plan-proyecto.md en la carpeta principal del proyecto y escribe arriba el nombre del proyecto, fecha límite y fecha de hoy. Si hay un README.md en la carpeta, añade una línea con enlace al plan.

Luego haz el primer paso que te corresponde y para el que tienes documentos. Elige uno que puedas hacer en pocos minutos. Guarda el resultado en la carpeta del proyecto, añade en la columna Qué se obtiene el nombre del archivo y la palabra terminado, y dime qué debo revisar.

Finalmente añade en el archivo AGENTS.md de la carpeta del proyecto la regla: "Antes de trabajar en el proyecto, lee plan-proyecto.md. Cuando un paso esté terminado, añade en la columna Qué se obtiene dónde está el resultado y la palabra terminado." Si AGENTS.md no existe, créalo. Asegúrate de leerlo al comenzar cada trabajo; en Cowork ponlo en las instrucciones de la carpeta.

Objetivo, fecha y personas en el proyecto:

## En su herramienta

### Microsoft Copilot
Cowork está en Copilot junto al interruptor Chat; si no lo ve, pida a TI.
Trabaja con archivos en OneDrive y SharePoint, indíquele dónde está el proyecto y que guarde el plan como tabla Excel; en Cowork, en Customize, Preferences, deje "Antes de trabajar en el proyecto, lee el plan." Sin Cowork aplica el punto "La IA no guarda el plan en la carpeta" en la sección Cuando se atasque, con proyecto en Notebook (Bloc de notas).

### ChatGPT
Con la carpeta trabaja Codex en la app ChatGPT para PC: cambie a Codex, elija open and folder y seleccione la carpeta del proyecto; no necesita programar. Codex lee `AGENTS.md` solo y crea la tarea planificada a pedido. Si no ve Codex, pida al administrador Allow members to use Codex locally o siga el punto del chat común.

### Claude
En la app Claude para PC elija Cowork y en el campo de mensaje Work in a folder. Claude Code lee `AGENTS.md` solo, en Cowork la IA escribe en las instrucciones de la carpeta que debe leerlo. La tarea planificada la crea la IA a pedido y la verá en el panel izquierdo bajo Scheduled.

### Gemini
La app Gemini con cuenta laboral no trabaja con carpetas en PC, siga el punto del chat común: use el robot Gem y guarde la tabla del plan con Exportar a Hojas. Con la carpeta trabaja Gemini CLI si la empresa tiene licencia Gemini Code Assist Standard o Enterprise; lee `AGENTS.md` solo si está en configuración.
## Qué es AI-WBS

AI-WBS es la sigla en inglés de AI Work Breakdown Structure. Work Breakdown Structure, o desglose del trabajo en partes, lo usan los gerentes de proyecto desde hace décadas. [AI-WBS](glossary:aiwbs) añade para cada paso la pregunta de si lo hará persona o IA. La persona es responsable del resultado, aunque la IA lo prepare, por eso en pasos de IA aparece también quién revisa el resultado.

El plan es un archivo de texto simple `plan-proyecto.md` en la carpeta del proyecto.
La extensión `.md` indica formato [Markdown](glossary:markdown), que la IA lee y edita fácilmente. Ábralo en cualquier editor de texto y si quiere enviarlo a colegas como tabla o documento, solo pídale a la IA.
Si el proyecto tiene [README](card:project-start-here), página inicial del proyecto, la IA añade enlace al plan.

`AGENTS.md` es archivo con reglas para la IA en la misma carpeta. La IA lo lee al comenzar cada trabajo, así conoce el plan sin que se lo recuerde; donde la herramienta no lo hace, la IA escribe la instrucción en la configuración de la carpeta según el prompt. Si la carpeta es compartida con el equipo, ambos archivos los ve todo el equipo y la IA lee las mismas reglas que usted.

El chat común no guarda el plan en la carpeta porque no ve las carpetas en PC; si no tiene otra opción, consulte el punto del chat común en Cuando se atasque. Si el proyecto está en almacenamiento compartido en la nube, basta que la carpeta esté sincronizada en PC.

Si la IA pregunta si puede guardar archivos en la carpeta, autorícela.
## Para que el plan no quede obsoleto

La regla en `AGENTS.md` cubre el trabajo que hace la IA en la carpeta del proyecto. Pero los colegas completan sus pasos fuera de la carpeta, por ejemplo en correo o reuniones, y sus archivos llegan sin la IA. Para eso hay una tarea planificada que la IA ejecuta semanalmente: marca pasos terminados y hace el siguiente paso que le corresponde. Pegue en IA en modo Cowork o Code esta tarea y pídale que la cree:

```text
Cada lunes a las 8:00 revisa plan-proyecto.md, la carpeta del proyecto y correos y reuniones de la semana pasada relacionados con el proyecto a los que tengas acceso. En pasos terminados añade en la columna Qué se obtiene dónde está el resultado y la palabra terminado. Luego haz el siguiente paso que te corresponde y tiene documentos listos, guarda el resultado en la carpeta del proyecto. Al final dime qué está nuevo, qué hiciste y qué paso espera a quién.
```

La IA revisa correos y reuniones solo si tiene acceso a correo y calendario; si no, trabaja solo con la carpeta del proyecto. Si la tarea trabaja con carpeta en su PC, solo funcionará si el PC está encendido y la app abierta.
## Ejemplo

Jitka es coordinadora de marketing en una empresa que fabrica muebles de jardín. El catálogo de primavera 2027 debe imprimirse el 15/1. En la carpeta tiene el catálogo del año pasado, lista de precios de novedades y exportación de ventas actuales. El lunes 12/10 abre la carpeta en modo Cowork, pega el prompt y debajo escribe: "Catálogo primavera 2027, impresión 15/1. Trabajo en él yo, el director comercial Pavel, el fotógrafo Ondřej y la agencia gráfica." La IA muestra el plan y debajo pregunta cuántas páginas tendrá el catálogo y si solo se fotografían novedades:

```text
| Paso | Quién lo hará | Qué se obtiene |
|---|---|---|
| 1. Selección de productos | IA selecciona según ventas, revisa Jitka | lista de 60 productos |
| 2. Parámetros y precios | IA, revisa Jitka | tabla de parámetros |
| 3. Fotos de novedades | fotógrafo Ondřej | 14 fotos |
| 4. Textos de productos | IA, revisa Jitka | textos en archivo |
| 5. Maquetación | agencia gráfica | PDF del catálogo |
| 6. Corrección de precios | IA contra lista de precios, revisa Jitka | lista de correcciones |
| 7. Aprobación e impresión | Jitka, aprueba Pavel | orden de impresión |
```

Jitka responde ambas preguntas. En el primer paso la IA elegiría los productos sola y Jitka solo revisaría. Por eso cambia el paso a "IA prepara propuesta, seleccionan Jitka y Pavel": ventas no reflejan aún lo que pregunta el cliente. Luego escribe "Guardar".

La IA guarda el plan en `plan-proyecto.md` y hace su primer paso: con exportación de ventas y lista de precios prepara `propuesta-productos.xlsx` con 60 productos ordenados por ventas y las 14 novedades. Jitka encuentra dos líneas que ya no se fabrican, lo dice a la IA y la IA las elimina. Con la propuesta lista, Jitka va el miércoles con Pavel y cierran la selección en una reunión.
## Cuando se atasque

- **La IA no guarda el plan en la carpeta porque solo tiene chat común:** cambie a [Cowork o Code](card:when-chat-is-not-enough). Si la empresa solo permite chat común, adjunte documentos al prompt y pida a la IA que continúe en chat y escriba el plan en la respuesta. Pida a la IA el plan como archivo, súbalo al [proyecto](card:asistent) en su herramienta (nombre mostrado en "En su herramienta") y ponga en instrucciones del proyecto la frase "Antes de trabajar, lee el plan del proyecto. Cuando te diga qué está terminado, envíame el plan completo con pasos marcados." Suba la nueva versión al proyecto reemplazando la antigua; el primer paso la IA lo hará en chat en el proyecto.
- **El plan tiene treinta tareas pequeñas:** pida a la IA que las agrupe en pasos principales, cada uno con su resultado.
- **El plan es genérico y sirve para cualquier proyecto:** pregunte a la IA qué documentos leyó en la carpeta. Un archivo solo en la nube se descarga al abrirlo, así que si no lo leyó, que intente de nuevo con conexión. Añada documentos faltantes, como encargo o acta, y pida a la IA que reescriba el plan. Para proyectos grandes cambie a [modelo más potente](card:modely).
- **El resultado del primer paso no encaja:** diga a la IA qué no encaja y de qué documento debe tomarlo. Para números o afirmaciones ayuda la [verificación de salida de IA](card:kontrola-vysledku).
## Qué estará listo

Tiene en la carpeta del proyecto `plan-proyecto.md` con los pasos principales del proyecto y sabe quién hará cada paso y qué resultado tendrá. La IA hizo su primer paso y el resultado está junto al plan. En `AGENTS.md` hay una regla para que la IA lea el plan antes de trabajar y marque los pasos terminados.
## Qué sigue

Si algún paso del plan es un trabajo largo para la IA, como revisar sesenta contratos, asígnelo a un [agente](card:agent-task) que lo complete solo. Si el proyecto no tiene página inicial, pida a la IA que escriba el [README](card:project-start-here). Lo decidido y hecho en el proyecto anótelo en el [worklog](card:project-worklog).
## AI-WBS

**Qué es:** AI Work Breakdown Structure: descomposición del proyecto en entregables, fases y roles de persona, IA, experto o automatización.

**Qué no es:** No es solo una lista común de tareas del proyecto.

**Por qué el equipo lo necesita:** Muestra exactamente dónde trabaja la IA en el proyecto y dónde permanece el paso humano o experto.

## Markdown

**Qué es:** Un formato simple de texto plano en el que los encabezados, listas, enlaces y otras estructuras se escriben usando unos pocos caracteres comunes. Los archivos suelen tener la extensión `.md`.

**Qué no es:** No es un lenguaje de programación ni un formato exclusivo para desarrolladores.

**Por qué lo necesita el estudiante:** Permanece fácilmente legible y editable tanto para personas como para IA, y puede transferirse entre diferentes herramientas.

## Prompt

**Qué es:** Instrucción para una interacción específica con la IA.

**Qué no es:** No es lo mismo que un contexto a largo plazo, un asistente almacenado o un agente.

**Por qué lo necesita el estudiante:** Inicia el ejercicio y guía su desarrollo; no es el contenido principal de aprendizaje.

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

## Planificar un bloque

Mecánica opcional de producto tras completar una tarjeta, cuyo resultado continúa con un trabajo que no cabe en quince minutos. No es una tarjeta independiente, no tiene finalización propia ni aumenta el número de métodos completados.

Las tarjetas son de quince minutos y terminan con un artefacto. Sin embargo, algunas tarjetas solo comienzan con un artefacto: se crea un mapa de fase, un resumen de investigación, un diseño de habilidad o dos ramas para integrar. La persona se va con un plan y sin tiempo, y luego vuelve al trabajo tras diez minutos entre reuniones, donde no se puede completar nada.

## Cuándo se ofrece

- la tarjeta terminó con un resultado utilizable y ese resultado es la tarea siguiente,
- ese trabajo tiene un final claro que se puede nombrar en una sola frase,
- al dividirlo en segmentos cortos habituales se descompondría, porque cada retorno comienza recargando el contexto.

La mecánica no aparece cuando el trabajo tras la tarjeta realmente cabe en quince minutos, cuando el siguiente paso espera a otra persona o a una aprobación, ni cuando el resultado de la tarjeta no tiene trabajo posterior.

## Qué verá la persona

Una opción corta **Planificar un bloque** junto al check-in común. Al abrirse, la IA solo pregunta una cosa: cuándo se dispone realmente de ese tiempo. El resto lo propone ella misma a partir de lo que surgió en la tarjeta.

## Qué crea la IA

Un resumen del bloque. La fuente es el resultado de la tarjeta recién completada; la mecánica no inventa un nuevo tema. Contiene cinco elementos:

- **una cosa**, nombrada tal como se ve terminada,
- **duración** entre 60 y 120 minutos, con lo que cabe y lo que no,
- **qué debe estar preparado de antemano**: accesos, datos, materiales, prompt de la tarjeta,
- **qué estará terminado al final**, es decir, un resultado concreto, no "avanzado" ni "en progreso",
- **qué hacer con el resto**, que no cabe en el bloque, para que no quede pendiente sin decisión.

Si resulta que una cosa son en realidad tres, la IA lo indicará y ofrecerá cuál pertenece al primer bloque. No propone dividir en tres bloques por adelantado.

## Tiempo activo versus espera

El bloque con IA tiene una estructura distinta al bloque de trabajo independiente, porque parte del tiempo lo ocupa la herramienta. La investigación, el agente, la generación larga o el procesamiento de datos duran minutos o decenas de minutos y la persona no tiene que estar presente.

Por eso el resumen distingue tres tipos de tiempo: trabajo activo de la persona, ejecución de la IA y espera por alguien más. Para la ejecución de la IA propone qué hacer mientras tanto, y esa actividad suele ser la preparación del siguiente paso del mismo resultado. Saltar a un trabajo no relacionado rompe el bloque, aunque parezca tiempo aprovechado.

Si la espera ocupa la mayor parte del bloque, la mecánica lo indica directamente: esa tarea pertenece más bien a [Deje que la IA trabaje cuando usted no está](card:recurring-ai-task).

## Calendario

La mecánica prepara el texto del evento: título según la cosa, duración y en la descripción lo que debe estar preparado de antemano. La persona puede anotarlo por sí misma.

La mecánica no escribe nada en el calendario ni en otro sistema compartido sin permiso ni envía invitaciones.

## Límites respecto a las tarjetas

| Qué no es | Dónde está |
|---|---|
| Tiempo reservado para un equipo que necesita decisiones del líder, reuniones canceladas y mentor disponible | tarjeta [Dé al equipo un bloque para un proyecto real de IA](card:ai-sprint) |
| Trabajo de IA cuando la persona no está presente | tarjeta [Deje que la IA trabaje cuando usted no está](card:recurring-ai-task) |
| Desglose del proyecto en pasos y roles | tarjeta [Cree AI-WBS para la primera fase del proyecto](card:ai-wbs-project) |

La persona se asigna el bloque por sí misma y no necesita permiso de nadie. Así se diferencia del sprint, donde ese permiso es parte esencial del trabajo.

## Qué no contiene la mecánica

Instrucciones para concentrarse, recomendaciones sobre el teléfono, notificaciones y ambiente. La biblioteca enseña recorridos. Consejos de este tipo convertirían la mecánica en un sermón sobre el trabajo en lugar de preparar un bloque concreto.

## Registro

Se puede añadir al check-in la información de que se creó un resumen del bloque. No es un cumplimiento independiente de la tarjeta. La mecánica no supervisa si el bloque se realizó.

## Primeras tarjetas soportadas

- `ai-wbs-project`
- `deep-research`
- `ai-workflow`
- `create-skill-from-proven-process`
- `parallel-ai-workstreams`

Otras tarjetas con trabajo posterior de más de quince minutos, como `risk-based-prototyping`, `optimize-then-automate`, `prace-s-daty` y `sjednotit-data-z-vice-zdroju`, son candidatas para una segunda ola. Implementar la mecánica en la mitad de la biblioteca desde el principio convertiría la opción en ruido.
