# Configure un flujo de trabajo entre varias aplicaciones: la IA transferirá los datos por usted

La IA transfiere automáticamente los datos que normalmente copia entre aplicaciones, como solicitudes de correo electrónico a una hoja de cálculo.

## Configure un flujo de trabajo entre varias aplicaciones: la IA transferirá los datos por usted

**Dificultad: media.**\
**Tiempo: aproximadamente 15 minutos** con datos que normalmente copia manualmente.
## Para qué sirve

En una semana recibió 23 solicitudes para el puesto de asistente de producción y el gerente de producción debe tener la lista para el viernes. Usted las transcribe una a una en una tabla, responde a los candidatos que recibió su solicitud, y al llegar a la número quince descubre que anotó mal un teléfono.

Este tipo de trabajo se llama [flujo de trabajo](glossary:workflow) entre varias aplicaciones y la IA lo hace todo: lee los correos, registra los datos en la tabla y prepara borradores de respuestas.
## Qué preparar

- El trabajo en el que copia datos, por ejemplo solicitudes de correo a una tabla,
- Acceso a ambas aplicaciones; en cuentas corporativas la conexión con la IA a veces debe aprobarla el administrador,
- IA en modo Cowork o Code; dónde encontrarlo lo muestra el bloque “En su herramienta”,
- Una carpeta para guardar instrucciones para la próxima vez, por ejemplo una nueva carpeta vacía `Reclutamiento`.
## Cómo hacerlo

1. Abra la IA en modo Cowork o Code en su carpeta y en un chat nuevo pegue el prompt. Después de la línea “Instrucción:” escriba en una frase de dónde toma los datos, dónde los registra y qué sigue.
2. La IA conectará las aplicaciones que falten; usted confirmará el inicio de sesión. Luego hará todo el trabajo y guardará los correos solo como borradores, mientras usted se ocupa de otra cosa.
3. Compare dos o tres registros en la aplicación destino con la fuente y envíe los borradores. Dígale a la IA qué debe hacer diferente la próxima vez y ella lo añadirá a la instrucción.
## Ejercicio de IA

Pegue este [prompt](glossary:prompt) en la IA en modo Cowork o Code,
abierta en su carpeta, y después de la última línea escriba su trabajo:

Haz el trabajo por mí en el que copio datos manualmente de una aplicación a otra. La instrucción está en la última línea.

Primero verifica a qué aplicaciones del encargo tienes acceso y si puedes escribir en la aplicación destino. Usa los conectores que tienes aquí. Si falta alguno o solo puede leer, conecta la aplicación tú mismo, por ejemplo a través del servicio Composio. Si debo hacer algo, como iniciar sesión, dime exactamente dónde hacer clic y espera. Si aquí no se puede escribir en aplicaciones o guardar archivos en la carpeta, dímelo de inmediato y sugiéreme dónde cambiar.

Luego haz todo el trabajo. Revisa la fuente, extrae los datos y regístralos en la aplicación destino. Si la tabla o lista no existe, créala y diseña las columnas según la instrucción. No inventes datos que falten en la fuente: deja el campo vacío y marca el registro. Si después de registrar siguen correos o mensajes, guárdalos como borradores, yo los enviaré.

Después escribe la instrucción para la próxima vez en el archivo procedimientos-entre-aplicaciones.md en la carpeta donde trabajas. Bajo el título ### con el nombre del trabajo escribe de dónde tomas los datos, dónde los registras, qué datos, qué sigue y cómo reconocer los registros ya terminados. Si el archivo existe, añade el trabajo al final.

Al final dime cuántos registros transferiste, dónde encontrarlos, cuáles no pudiste y por qué, y dónde está guardada la instrucción. Cuando revise el resultado y te diga qué hacer diferente, corrígelo y añádelo a la instrucción.

Instrucción:

## En su herramienta

### Microsoft Copilot
Pegue el prompt en Copilot Cowork en `copilot.cloud.microsoft` (interruptor Cowork arriba junto a Chat), Outlook lee directamente. Adjunte Excel desde OneDrive o SharePoint con el botón +, Cowork crea la tabla nueva solo. No necesita carpeta, Cowork guarda la instrucción para la próxima vez como skill; las tareas programadas están en la página Automations. Agregue CRM y otras aplicaciones desde Browse plugins si el administrador las autorizó.

### ChatGPT
El modo Code está en ChatGPT Codex en la aplicación ChatGPT para PC: elija Codex, New chat y abra carpeta (open a folder). Tenga la tabla de OneDrive en una carpeta sincronizada con el PC para que Codex escriba directamente. Conecte Outlook en configuración bajo Plugins; si falta en cuenta corporativa, el administrador lo activa. Las tareas programadas están en el panel izquierdo bajo Scheduled.

### Claude
En la aplicación Claude para PC abra Cowork o Claude Code y seleccione carpeta; ambos en planes pagos. Los conectores están en el panel izquierdo en Customize, Connectors; la IA conecta los que faltan. Las tareas programadas están en Cowork en el panel izquierdo bajo Scheduled.

### Gemini
El trabajo repetitivo entre aplicaciones Google lo crea Workspace Studio (`studio.workspace.google.com`): elija Describe it with AI y descríbalo en una frase. Test run ejecuta los pasos reales, Turn on activa el proceso que luego corre solo. Sin Studio escriba en Gemini “@Gmail lista las solicitudes de esta semana como tabla” y guárdela con Export to Sheets.
## Qué es un flujo de trabajo entre varias aplicaciones

Workflow es una palabra inglesa para un proceso de trabajo con varios pasos donde el resultado de uno es la entrada del siguiente. Así como la IA transfiere solicitudes de un formulario web a un CRM, sistema para gestionar clientes, o de 33 correos de un cliente crea una tabla con las 27 preguntas aún sin respuesta.

El conector por el que la IA accede a la aplicación en modo Cowork o Code lo conecta la IA sola, como muestra la tarjeta [Conecte su conector](card:plugin-connector); en chat normal se activa en configuración. Según lo que el conector permita, la IA solo lee o también escribe.

Si no tiene conector para la aplicación o solo puede leer, la IA usa el servicio Composio. A través de él se conecta a más de mil aplicaciones, como Outlook, Gmail, Excel, Google Sheets, Airtable o CRM. En modo Cowork o Code la IA lo configura sola. Usted crea cuenta y confirma acceso a cada aplicación por separado, así Composio solo ve las aplicaciones autorizadas. La cuenta básica es gratuita y no requiere tarjeta. En cuentas corporativas consulte con IT antes de usarlo.

`procedimientos-entre-aplicaciones.md` es un archivo de texto común con instrucciones de sus trabajos entre aplicaciones. Cada trabajo tiene su título, así la próxima vez solo escribirá su nombre y el archivo. La extensión `.md` indica que está escrito en [Markdown](glossary:markdown), un formato simple donde los signos de número `###` al inicio de línea indican títulos.
## Que el trabajo se ejecute solo

El trabajo que se repite cada día o semana puede ejecutarse automáticamente. Pegue en la IA que maneja tareas programadas esta instrucción, solo cambie el nombre del trabajo por el suyo, y pídale que cree la tarea programada. Dónde encontrarlas muestra el bloque “En su herramienta”.

```text
Cada día laboral a las 8:00 haz el trabajo “Solicitudes a tabla” según el archivo procedimientos-entre-aplicaciones.md. Procesa solo lo que haya llegado desde la última ejecución. En el resumen dime cuántos registros nuevos hay y cuántos borradores esperan en la bandeja. Si no hay nada nuevo, no escribas nada.
```

La tarea lee el archivo en la carpeta del PC, por eso solo funcionará si el PC está encendido y la aplicación con IA abierta.
## Ejemplo

Lucía del departamento de RRHH de una empresa de ingeniería busca asistente de producción. Del 5 al 9 de octubre de 2026 recibió 23 solicitudes por correo. El lunes 12 de octubre abre la IA en modo Cowork en la carpeta `Reclutamiento asistente`, pega el prompt y escribe después de la última línea:

```text
De los correos con solicitudes para asistente de producción recibidos desde el 5 de octubre, registra en la tabla Candidatos en Excel en SharePoint nombre, teléfono, años de experiencia, posible fecha de inicio y enlace al correo. Prepara para cada candidato un borrador de respuesta diciendo que recibimos la solicitud y que responderemos en 10 días hábiles.
```

La IA conecta Outlook y Excel, Lucía confirma el inicio de sesión en su cuenta corporativa y la IA revisa los 23 correos. Luego responde:

```text
Transferidas 23 solicitudes a la tabla Candidatos.
- 21 registros están completos.
- 2 solicitudes no indican experiencia, las filas están marcadas en amarillo.
- 23 borradores de respuesta esperan en Outlook.
La instrucción está guardada en procedimientos-entre-aplicaciones.md bajo el título Solicitudes a tabla.
```

Lucía abre la tabla y compara teléfono y experiencia de dos candidatos con sus correos; coinciden. Luego escribe a la IA: “Agrega columna de dónde se enteraron del puesto y en las respuestas a solicitudes incompletas pregunta por experiencia.” La IA actualiza la tabla y dos borradores y modifica la instrucción así:

```text
### Solicitudes a tabla
- De dónde: correos con solicitud para puesto abierto.
- Dónde: tabla Candidatos en Excel en SharePoint, una fila por candidato.
- Datos: nombre, teléfono, años de experiencia, posible inicio, fuente de información, enlace al correo.
- Qué sigue: borrador de respuesta diciendo que recibimos la solicitud y responderemos en 10 días hábiles. Si falta experiencia, preguntar en la respuesta.
- Registros terminados: no procesar correos que ya tengan fila en la tabla.
```

Lucía revisa y envía los borradores en Outlook. Cuando el jueves llegan cuatro solicitudes más, solo escribe “Haz solicitudes a tabla según procedimientos-entre-aplicaciones.md” y la IA procesa solo las cuatro nuevas.
## Si se atasca

- **La IA no accede a la aplicación:** pregúntele si existe conector para la aplicación. Si sí y no puede activarlo en cuenta corporativa, la IA escribirá una solicitud breve al administrador. Si no existe, deje que la IA conecte la aplicación vía Composio; en cuenta corporativa consulte antes con IT.
- **La IA lee la aplicación pero no escribe:** el conector solo puede leer. En modo Cowork o Code pida a la IA que conecte la aplicación vía Composio. En chat normal cambie a [Cowork o Code](card:when-chat-is-not-enough).
- **Los datos en destino no coinciden con la fuente:** muestre a la IA un registro erróneo y dónde está el dato correcto. Que corrija todos similares y añada la regla a la instrucción.
- **Registros duplicados en la tabla:** pida a la IA que elimine duplicados y añada a la instrucción cómo reconocer registros terminados, por ejemplo por enlace al correo.
## Qué estará listo

Los datos que normalmente copiaría manualmente están en la aplicación destino, comparó dos o tres registros con la fuente y revisó y envió los borradores. La instrucción con sus ajustes está en `procedimientos-entre-aplicaciones.md`, así la próxima vez iniciará el trabajo con una frase.
## Qué sigue

Si después de transferir datos sigue otro trabajo de IA, por ejemplo preparar entrevistas desde la tabla de candidatos, añádalo a la instrucción y guarde todo el proceso como [skill](card:create-skill-from-proven-process). Si quiere que la tarea programada supervise sus propios errores y los reporte, configúrela como [tarea programada](card:recurring-ai-task).
## Markdown

**Qué es:** Un formato simple de texto plano en el que los encabezados, listas, enlaces y otras estructuras se escriben usando unos pocos caracteres comunes. Los archivos suelen tener la extensión `.md`.

**Qué no es:** No es un lenguaje de programación ni un formato exclusivo para desarrolladores.

**Por qué lo necesita el estudiante:** Permanece fácilmente legible y editable tanto para personas como para IA, y puede transferirse entre diferentes herramientas.

## Prompt

**Qué es:** Instrucción para una interacción específica con la IA.

**Qué no es:** No es lo mismo que un contexto a largo plazo, un asistente almacenado o un agente.

**Por qué lo necesita el estudiante:** Inicia el ejercicio y guía su desarrollo; no es el contenido principal de aprendizaje.

## Flujo de trabajo de IA

**Qué es:** Un proceso repetible que consiste en varios pasos consecutivos, donde la salida de un paso se convierte en la entrada del siguiente. Los pasos pueden ser realizados por personas, IA o diversas herramientas.

**Qué no es:** No es automáticamente automatización ni un agente. Los pasos pueden ser controlados por humanos y la transferencia puede ocurrir entre diferentes entornos.

**Por qué lo necesita el estudiante:** Ayuda a conectar tareas de IA dominadas individualmente en un proceso que puede ser probado, mejorado y eventualmente automatizado.

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
