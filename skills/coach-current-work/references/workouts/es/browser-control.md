# Use Browser control: la IA hace clic por ti en el navegador

Una tarea web que realizas manualmente cada semana, como descargar un informe, la hace la IA automáticamente en el navegador.

## Use Browser control: la IA hace clic por ti en el navegador

**Dificultad: media.**\
**Tiempo: aproximadamente 15 minutos** con una tarea en la web.
## Para qué sirve

Cada viernes por la tarde descargas del sistema un exporte de informes de trabajo y transcribes las horas totales a una tabla para la dirección. Siempre filtras manualmente el proyecto y la semana. Nadie más sabe hacerlo, así que cuando estás de vacaciones, la dirección no recibe los datos.

Browser control significa que la IA controla el navegador: abre la página, hace clic, rellena y descarga mientras tú haces otro trabajo.
## Qué preparar

- una tarea en la web que repites manualmente, por ejemplo descargar un reporte,
- una cuenta en la web donde se realiza la tarea; inicias sesión tú mismo cuando la IA te lo pida,
- una carpeta con el trabajo al que pertenece la tarea; la IA guardará ahí el procedimiento para la próxima vez,
- una IA que controle el navegador; si la tuya lo hace, verás el bloque "En tu herramienta".
## Cómo hacerlo

1. Abre la IA que controla el navegador en la carpeta preparada y pega el prompt. Después de la línea "Tarea:", escribe a dónde debe ir, qué debe hacer y en qué formato quieres el resultado.
2. En la página de inicio de sesión, accede tú mismo y escribe a la IA que continúe. Luego haz otro trabajo; la IA te avisará cuando termine o necesite una decisión.
3. En la página que la IA indique como resultado, verifica uno o dos números. La IA guardará el procedimiento para la próxima vez en el archivo `ulohy-v-prohlizeci.md`.
## Ejercicio de IA

Inserta este [prompt](glossary:prompt) en la IA en modo Cowork o Code, abierta en tu carpeta, y añade tu tarea en la última línea:

Haz por mí en el navegador una tarea que hago regularmente a mano en la web. La tarea está en la última línea.

Abre la página y recórrela hasta el resultado: haz clic, rellena, filtra y descarga lo necesario. Si encuentras un inicio de sesión, avísame; iniciaré sesión y te diré que continúes. Si no sabes qué opción elegir, pregúntame.

Devuélveme el resultado en el formato que pido en la tarea. Para cada número o cambio, añade la dirección de la página de donde proviene para que pueda verificarlo.

Finalmente, escribe el procedimiento para la próxima vez: bajo el título con el nombre de la tarea, indica a dónde ir, los pasos que funcionaron (dirección de la página, filtros, nombres de botones) y cómo debe ser el resultado. Guárdalo en el archivo ulohy-v-prohlizeci.md en la carpeta donde trabajas; si el archivo existe, añade la tarea al final. Si no tienes acceso a la carpeta, omite este paso.

Tarea:

## En tu herramienta

### Microsoft Copilot
El navegador lo controla Copilot Cowork, solo en la web `copilot.cloud.microsoft` abierta en Edge y con permiso del administrador. Pega el prompt en Cowork (interruptor arriba junto a Chat); la IA trabaja en tu Edge, donde ya has iniciado sesión. Si la web pide contraseña, te mostrará la pestaña del navegador y tras iniciar sesión continúa. Cuando termine, escribe "Guardar procedimiento como skill"; las tareas programadas están en la página Automations.

### ChatGPT
En ChatGPT el navegador lo controla el modo Work: en la aplicación de escritorio cambia a Work y pega el prompt. Work tiene navegador integrado donde inicias sesión tú mismo; con la extensión ChatGPT para Chrome, confirmada en la configuración Computer Use, también funciona en tu Chrome. Work no guarda el procedimiento en archivo, por eso convierte la tarea en una tarea programada (Scheduled en el panel izquierdo).

### Claude
La extensión Claude in Chrome para planes de pago se añade desde la Chrome Web Store y se inicia sesión con cuenta Claude; funciona solo en Google Chrome, no en Edge. En la aplicación Claude se activa entre conectores (Connectors) en Claude in Chrome y la IA en Cowork o Claude Code trabaja en tu Chrome donde has iniciado sesión. Las tareas programadas están en Cowork en el panel izquierdo bajo Scheduled.

### Gemini
Gemini en Chrome, que controla el navegador, no está disponible en la UE incluyendo República Checa, por eso haz la tarea a medias. Descarga tú mismo el exporte de la web, súbelo en Gemini con Add from Drive o desde el ordenador y escribe qué quieres hacer con él, por ejemplo "suma las horas por cada persona". Si la tarea se repite, que Gemini escriba una solicitud IT para descargar esos datos automáticamente.
## Qué es Browser control

Browser control es el nombre en inglés para control del navegador. La IA ve la página que tiene abierta y hace clic y escribe en ella como tú. Así puede manejar webs a las que de otro modo no accedería: configura algo en una aplicación o recorre tu web buscando enlaces rotos. Si la aplicación tiene un conector, es decir, conexión directa con la IA, úsalo preferiblemente porque es más rápido y fiable. Antes de un paso que requiera tu aprobación, como una compra, envío o trabajo en una web nueva, la IA se detiene y pregunta.

Algunas herramientas trabajan en tu navegador donde ya has iniciado sesión y acceden a todo lo que tú, incluso sistemas corporativos tras VPN. Otras tienen navegador propio integrado donde inicias sesión aparte.

`ulohy-v-prohlizeci.md` es un archivo de texto común con la lista de tus tareas en el navegador y los pasos que funcionaron. La extensión `.md` indica que está escrito en [Markdown](glossary:markdown), un formato sencillo donde los signos `###` al inicio de línea indican títulos.
## Que la tarea se ejecute sola

Una tarea que se repite cada semana ni siquiera tienes que iniciarla. Inserta en la IA que maneja tareas programadas esta instrucción, solo cambia el nombre de la tarea por el tuyo, y pídele que cree la tarea programada. Dónde encontrarlas en tu herramienta lo muestra el bloque "En tu herramienta".

```text
Cada viernes a las 15:00 haz la tarea "Horas semanales en proyecto" según el archivo ulohy-v-prohlizeci.md. Guarda el resultado en la misma carpeta con la fecha de hoy en el nombre del archivo y escríbeme los tres números principales en el resumen.
```

La tarea usa archivos en tu ordenador y tu navegador, así que solo funcionará si el ordenador está encendido, la aplicación de IA abierta y la VPN conectada si es necesaria.
## Ejemplo

Jana coordina la construcción de un nuevo almacén en una empresa logística y cada viernes envía a la dirección las horas que el equipo ha trabajado en el proyecto. El viernes 9/10/2026 abre la carpeta del proyecto en la IA que controla el navegador, pega el prompt y añade en la última línea:

```text
En el sistema de informes de trabajo descarga las horas de esta semana para el proyecto Nuevo almacén y devuélveme la suma por cada miembro del equipo y el total.
```

La IA abre el sistema de informes, filtra el proyecto y la semana del 5 al 9 de octubre y descarga el exporte. El equipo trabajó 86 horas, más Petr (31) y Lucie (24); la IA indica la dirección de la página para cada número. Jana abre el resumen en el sistema y el total coincide. La IA escribe en `ulohy-v-prohlizeci.md`:

```text
### Horas semanales en proyecto
- Dónde: sistema de informes de trabajo, sección Reportes.
- Pasos: filtro Proyecto Nuevo almacén, periodo de lunes a viernes de esta semana, botón Exportar a Excel.
- Resultado: horas por cada miembro del equipo y total, con dirección de página para cada número.
```

El siguiente viernes Jana solo escribe "Haz horas semanales en proyecto según `ulohy-v-prohlizeci.md`" y recibe los números de la nueva semana.
## Si te quedas atascado

- **La IA responde que no sabe controlar el navegador:** el chat normal no puede hacerlo. Activa el control del navegador según el bloque "En tu herramienta". Más en la tarjeta [Chat, Cowork o Code](card:when-chat-is-not-enough).
- **IT no permite instalar la extensión:** usa un navegador que no requiera instalación: el navegador integrado en ChatGPT Work, Copilot Cowork en Edge o el navegador propio de Claude Cowork, que eliges en configuración con Preferred browser. Inicia sesión aparte.
- **La IA se pierde mucho en la web:** añade en la tarea el nombre de la sección o la dirección donde buscar y ejecútala de nuevo.
- **La IA no guarda el procedimiento para la próxima vez:** trabajas sin acceso a la carpeta. Configura la tarea como programada o ejecútala la próxima vez en modo Cowork o Code abierto en la carpeta.
## Qué tendrás listo

Tendrás una tarea web que antes hacías manualmente y el resultado verificado en la página de origen. El procedimiento con los pasos que funcionaron estará en `ulohy-v-prohlizeci.md`, así que la próxima vez solo tendrás que dar la tarea con una frase.
## Qué sigue

Del informe que la IA descarga puede preparar directamente un material para la reunión; si lo haces cada semana, [guarda ambos pasos como skill](card:create-skill-from-proven-process). Si un colega también debe recibir el resultado y la tarea debe reportar errores, configúrala como [tarea programada](card:recurring-ai-task).
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
