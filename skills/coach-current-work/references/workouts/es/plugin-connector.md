# Conecte el conector: la IA trabaja directamente en sus aplicaciones

La IA revisa su correo y guarda borradores de respuestas directamente en la bandeja.

## Conecte el conector: la IA trabaja directamente en sus aplicaciones

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con correo y calendario laborales.
## Para qué sirve

Antes de la reunión del martes quiere responder cinco correos que esperan desde la semana pasada.
Copia cada uno en el chat y la respuesta vuelve al correo. En el tercero descubre que
la fecha que la IA propuso ya está ocupada en su calendario.

El conector es la conexión de la IA con la aplicación: la IA lee correo y calendario a través de él, así que
no copia nada y no propone fechas ocupadas.
## Qué preparar

- acceso al correo y calendario laborales; a veces el administrador activa la conexión con la IA,
- la IA que usa en el trabajo; dónde tiene conectores, lo muestra el bloque "En su herramienta",
- para el modo Cowork o Code una carpeta para reglas, por ejemplo una nueva vacía `Correo`.
## Cómo hacerlo

1. Inserte el prompt. La IA detectará qué conectores de correo y calendario tiene, conectará los disponibles y dirá dónde hacer clic para los demás. Usted confirma el inicio de sesión.
2. La IA selecciona hasta cinco correos de la última semana a los que debe responder; solo cuenta newsletters y copias. Guarda borradores en la bandeja, usted los revisa, edita y envía.
3. En un chat nuevo escriba solo “Responde al correo más reciente que espera respuesta.” La IA debería guardar el borrador y verificar la fecha en el calendario.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA que usa en el trabajo:

Conéctate a mi correo y calendario laborales y haz el primer trabajo directamente allí, para no copiar nada al chat.

Pregúntame qué correo y calendario uso en el trabajo. Luego averigua qué conectores o plugins tienes aquí para ellos. Si un plugin cubre varias aplicaciones mías a la vez, dale preferencia. Conecta lo que puedas automáticamente. Donde yo tenga que hacer algo, como iniciar sesión o permitir acceso, dime exactamente dónde hacer clic y espera a que lo haga. Accede al correo y calendario solo a través de conectores. Tras conectar, verifica que el conector pueda guardar borradores de correos. Si no puede, busca otro conector o plugin. Si no encuentras ninguno, conecta el correo vía Composio y si no es posible aquí, dime dónde cambiar.

Cuando todo esté conectado, haz esto:
- Revisa el correo de los últimos siete días y selecciona hasta cinco correos a los que aún no he respondido y debo responder, empezando por los más urgentes. Para cada uno indica remitente, asunto y fecha límite para responder.
- Escribe una respuesta para cada uno y guárdala como borrador directamente en mi bandeja. Si la respuesta depende de una fecha, consulta mi calendario para ver cuándo estoy disponible.
- No envíes los borradores, yo los revisaré y enviaré.

Finalmente guarda una regla para la próxima vez: qué aplicaciones tienes conectadas, que guardas respuestas como borradores y verificas fechas en el calendario. Si trabajas en una carpeta, escríbelo en el archivo AGENTS.md y créalo si no existe. Asegúrate de que leas AGENTS.md al comenzar cada trabajo; en Cowork ponlo en las instrucciones de la carpeta. En un chat normal guarda la regla en la memoria.

## En su herramienta

### Microsoft Copilot
Inserte el prompt en Copilot Cowork en `copilot.cloud.microsoft` (cambie a Cowork arriba junto al chat); tiene correo y calendario conectados directamente y no necesita carpeta.
Guarda respuestas como borradores en Outlook y la regla como skill. Sin Cowork prepara borradores en Copilot Chat y guarda la regla en Personalization.
Las tareas programadas están en la página Automations.

### ChatGPT
Active el conector para Outlook o Gmail en configuración bajo Plugins, en un chat nuevo con + junto al campo de mensaje. Guarda borradores en planes Plus, Pro, Business y Enterprise; en empresa lo activa el administrador. ChatGPT guarda la regla en memoria, Codex en `AGENTS.md`. Las tareas programadas están en Scheduled.

### Claude
Los conectores están en el panel izquierdo en Customize, Connectors; en un chat nuevo se activan con + junto al campo de mensaje. El conector Microsoft 365 guarda borradores solo si el administrador permite escritura. En Cowork la IA conecta el conector y escribe la regla en las instrucciones de la carpeta. Las tareas programadas están en Scheduled.

### Gemini
En la app Gemini escriba @, seleccione Gmail y Calendario e inserte el prompt; responda "continúa solo con Gmail y Calendario" a la oferta de Composio. Gemini encuentra correos y propone respuestas, pero guarda borradores solo en Gmail con Ask Gemini arriba a la derecha. Guarde la regla como skill (Customize, Skills). Las tareas programadas están en Scheduled.
## Qué es un conector y un plugin

Un conector es la conexión de la IA con una aplicación. Según sus capacidades, la IA solo busca y lee o también escribe: guarda borradores de correos o crea citas en el calendario. Así conecta también CRM, el sistema donde gestiona clientes y ventas, o un disco compartido. En configuración a veces se llama MCP server; MCP es un estándar técnico para conectar IA con aplicaciones y no necesita más explicación.

Un plugin es un paquete para un trabajo específico. Añade varios conectores y guías para que la IA trabaje en ellos, por ejemplo para ventas: CRM, correo y procedimiento para redactar ofertas.

Si no hay conector para su aplicación o el conector solo lee correo, use Composio. Es un servicio que conecta la IA con más de mil aplicaciones, como Outlook, Gmail o CRM, y puede guardar borradores en el correo. Se configura en modo Cowork o Code y la IA lo hace sola; usted solo crea cuenta en Composio y confirma acceso a aplicaciones. La cuenta básica es gratuita y no requiere tarjeta. En cuenta empresarial consulte con IT antes de usarlo.

`AGENTS.md` es un archivo de texto con reglas para la IA en la carpeta donde trabaja. La IA en modo Code lo lee al comenzar cada trabajo, así no tiene que explicar las aplicaciones conectadas cada vez.
## Que la IA revise el correo sola

Con correo y calendario conectados, la IA puede revisar el correo cada mañana por usted.
Solo necesita una tarea programada que la IA ejecute cada día laboral por la mañana y deje borradores en la bandeja. Inserte esta instrucción en la IA y pídale que cree la tarea programada. Dónde encontrar tareas programadas en su herramienta muestra el bloque "En su herramienta".

```text
Cada día laboral a las 7:30 revisa por conector el correo recibido desde la última ejecución. Selecciona correos a los que aún no respondí y debo responder, empezando por los más urgentes, y guarda un borrador de respuesta en la bandeja para cada uno. Verifica fechas en el calendario. Si no hay nada que responder, no escribas nada.
```
## Ejemplo

Jana coordina la mudanza de la oficina a un edificio nuevo. El lunes 12/10 por la mañana tiene
38 correos no leídos. Tras conectar Outlook y calendario, la IA devuelve:

```text
Correos para responder (4 de 38)

1. Empresa de mudanzas: quiere confirmar la mudanza el 24/10. Responder hoy.
   Borrador: confirmamos fecha, el día está libre en calendario.
2. Pedro de IT: pregunta cuándo puede conectar la red en el nuevo piso. Responder antes del miércoles.
   Borrador: propongo jueves 15/10 a las 9:00, cuando hay disponibilidad.
3. Proveedor de muebles: necesita fecha para firmar el acta de entrega. Responder antes del viernes.
   Borrador: firmaré el acta al recibir los muebles el 22/10.
4. Dirección: quiere un breve estado del proyecto para la reunión del viernes.
   Borrador: mudanza 24/10, red 15/10, muebles 22/10.

Los borradores están guardados en la bandeja. Los otros 34 correos son newsletters y copias informativas.
```

Jana revisa los borradores, cambia la hora con Pedro a las 10:00 y envía los cuatro. Al día siguiente por la mañana en un chat nuevo escribe solo “Responde al correo más reciente que espera respuesta.” La IA encuentra la consulta de recepción sobre tarjetas de estacionamiento, verifica la fecha en el calendario y guarda el borrador en la bandeja.
## Si se atasca

- **Falta el conector en configuración o no se puede activar:** pregunte a la IA si existe para su aplicación. Si sí, en cuenta empresarial probablemente lo activa el administrador y la IA le enviará una solicitud breve: qué conector necesita y para qué. Si no existe, conecte la aplicación vía Composio.
- **El conector solo lee correo:** en modo Cowork o Code pida a la IA que conecte el correo vía Composio o busque otro conector que también guarde borradores. Cambie de chat normal a [Cowork o Code](card:when-chat-is-not-enough).
- **La IA dice que no ve el correo:** verifique que el conector esté activado en este chat; en ChatGPT y Claude con el botón + junto al campo de mensaje, en Gemini mencionando @Gmail en cada chat nuevo. Si está activado, probablemente no se completó el inicio de sesión o se conectó con otra cuenta. Haga que la IA verifique la cuenta y conéctela de nuevo.
- **La IA no guarda borrador o no verifica fecha en chat nuevo:** en modo Cowork o Code escriba: “Lee `AGENTS.md` y asegúrate de leerlo al comenzar cada trabajo.” En chat normal pregunte si tiene la regla en memoria o instrucciones y si no, que le diga dónde guardarla.
## Qué estará listo

Tiene correo y calendario conectados a la IA y envió respuestas a los correos más urgentes de la última semana. La IA guardó la regla para borradores y calendario y en chat nuevo verificó que trabaja según ella.
## Qué sigue

Si quiere que la revisión matutina del correo funcione confiablemente y reporte errores, continúe con [tarea programada](card:recurring-ai-task). Si de un trabajo surgen dos pasos consecutivos, por ejemplo tabla de correos y respuestas desde la tabla, configure [workflow entre varias aplicaciones](card:cross-app-workflow).
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
