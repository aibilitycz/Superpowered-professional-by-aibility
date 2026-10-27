# Configure los permisos del agente: qué puede hacer solo y qué nunca sin usted

La IA dejará de preguntar por pasos rutinarios y esperará su confirmación antes de enviar correos o eliminar datos.

## Configure los permisos del agente: qué puede hacer solo y qué nunca sin usted

**Dificultad: media.**\
**Tiempo: aproximadamente 15 minutos** con la carpeta en la que trabaja la IA.
## Para qué sirve

El agente debe actualizar el nuevo tarifario en 20 ofertas durante el almuerzo y, tras una hora, espera en la primera con la pregunta de si puede guardar el archivo. Una colega resolvió esto permitiendo todo a su agente, y en una tarea similar, este envió directamente al cliente una oferta que nadie había revisado aún.

Ayuda dividir el trabajo del [agente](glossary:agent) en rutina, que según el modo de permisos en la herramienta hará sin preguntar, y límites estrictos en `AGENTS.md`, el archivo con reglas para la IA, ante los cuales se detendrá y esperará por usted.
## Qué preparar

- la carpeta en la que trabaja con la IA; `AGENTS.md` puede no estar,
- una tarea real que termine con un correo saliente, por ejemplo un reporte o respuesta a un cliente,
- correo conectado a la IA mediante [conector](card:plugin-connector) para que envíe el correo tras su "ENVIAR",
- IA en [modo](glossary:workmode) Cowork o Code ([cómo cambiar desde chat](card:when-chat-is-not-enough)).
## Cómo hacerlo

1. Inserte el prompt y diga a la IA qué es rutina y qué no se puede revertir. La IA detectará cómo están configurados los permisos y propondrá dos listas.
2. Corrija y apruebe las listas. La IA las escribirá en `AGENTS.md` y le indicará qué modo de permisos elegir y dónde cambiarlo.
3. En un chat nuevo, introduzca la tarea preparada. La IA hará la rutina sin preguntas y se detendrá en el correo: mostrará el borrador y no enviará nada sin su "ENVIAR".

En la lista "Nunca sin mí" van los pasos irreversibles o que salen fuera de la empresa, normalmente cinco a ocho.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en IA en modo Cowork o Code, abierta en su carpeta:

Configura qué puedes hacer solo en esta carpeta y en qué siempre te detendrás y esperarás por mí. No debes preguntarme por rutina; en pasos irreversibles detente siempre.

Primero detecta en qué modo de permisos trabajas ahora y qué permisos o prohibiciones tienes guardados en esta herramienta. Si no puedes detectar el modo o la herramienta no lo tiene, dilo y no lo supongas. Si hay un AGENTS.md en la carpeta, léelo. Luego pregúntame dos cosas: qué pasos rutinarios debo aprobar siempre y qué acciones en mi trabajo son irreversibles o salen fuera, como correos a clientes, pagos, eliminaciones, publicaciones o cambios en hojas y sistemas compartidos.

De las respuestas, propone dos listas:
- Puedes solo: rutina que haces sin preguntar, por ejemplo leer y editar archivos en esta carpeta, ejecutar comandos comunes y preparar borradores.
- Nunca sin mí: cinco a ocho límites estrictos, pasos irreversibles o que salen fuera, con el procedimiento para detenerse. Para correos y mensajes externos: prepara el borrador, muéstrame destinatario, asunto y texto completo y envíalo solo tras mi mensaje separado con la palabra ENVIAR; si no sabes enviar, guarda el borrador en el correo y avísame. Para eliminación de datos irreversibles: enumera qué borrarás y espera dos confirmaciones en dos mensajes. Tras cada escritura en otra aplicación, recarga y muéstrame el resultado. Nunca pongas contraseñas ni claves en chat o archivos; si se requiere acceso, pídeme que lo haga con el gestor de contraseñas.
Si quiero una excepción, escríbela bajo el título "Excepciones" en una frase con condición, por ejemplo "Puedes guardar solo la oferta en la carpeta compartida si la aprobé en chat."

Muéstrame ambas listas y espera a que las corrija o apruebe. Luego escríbelas en AGENTS.md bajo los títulos "Puedes solo" y "Nunca sin mí"; si no existe el archivo, créalo. Si ya hay prohibiciones, muévelas a "Nunca sin mí" para que no estén duplicadas. Añade la regla: "Si me preguntas por un paso rutinario que apruebo, sugiere añadirlo a Puedes solo. Si encuentras un paso irreversible que falta en Nunca sin mí, detente y sugiere añadirlo." Asegúrate de leer AGENTS.md al inicio de cada trabajo en esta herramienta; en Cowork ponlo en las instrucciones de la carpeta. Si no trabajas con carpeta, guarda las listas en memoria o escríbeme el texto para ponerlo en instrucciones propias.

Finalmente dime qué modo de permisos debo elegir en esta herramienta para que no preguntes por rutina y revises los pasos riesgosos antes, y dónde cambiarlo. Si se puede activar permanentemente comandos rutinarios aprobados, configúralo; si no puedes, dime exactamente dónde poner qué.

## En su herramienta

### Microsoft Copilot
Copilot en modo Cowork (interruptor arriba junto a Chat) no tiene modo de permisos y pregunta solo antes de enviar correo, mensaje en Teams o invitación. No abren carpeta; al final del prompt añada "No crear archivo, escríbeme las listas como texto para Customize, Preferences." y pegue el texto en Customize en la página inicial de Cowork. No use Always allow para correos salientes, pues enviará otros sin preguntar.

### ChatGPT
En la app ChatGPT para PC cambie a Codex, elija abrir carpeta (open a folder) y bajo el campo de mensaje seleccione Approve for me (aprueba por mí): Codex preguntará solo en pasos que evalúe como riesgosos. Con Full access trabaja sin aprobación. Codex lee `AGENTS.md` solo; si no tiene correo conectado, el paso 3 termina en el borrador del correo.

### Claude
En Claude Code elija Auto en el menú de modos junto al botón de enviar: la rutina se ejecuta sin preguntar y los pasos riesgosos los evalúa un segundo modelo. Permisos permanentes y excepciones descritas en palabras se guardan con el comando `/permissions`. En Cowork deje la opción predeterminada Automatically approve; la eliminación permanente de archivos siempre la confirma con usted. Con Gmail conectado Claude solo prepara el correo como borrador.

### Gemini
Gemini Agent que hace pasos solo está solo para cuentas personales Google AI Pro y Ultra y no está en la UE, por lo que no puede configurar modo de permisos con cuenta empresarial. Si necesita que la IA haga pasos sola, pida a IT una herramienta con modo Cowork o Code. La lista "Nunca sin mí" para escribir correos guárdela como skill: escriba "Guárdalo como skill" y la encontrará en Customize, Skills.
## Qué es el modo de permisos

El modo de permisos (permissions en inglés) es una configuración que determina qué le preguntará la IA antes de actuar. Las herramientas suelen tener tres niveles: la IA pregunta casi todo, pregunta solo pasos que evalúa riesgosos, o no pregunta nada. El nivel medio es buen punto de partida para trabajo diario. El nivel sin preguntas es elección consciente para quienes tienen límites escritos y revisan resultados, y no debe configurarse como predeterminado para colegas.

La herramienta detecta comandos riesgosos, como borrados masivos. Pero no sabe que un correo para un cliente específico o borrar una tabla de pedidos es un riesgo para usted. Eso la IA lo sabe por `AGENTS.md`, archivo en [Markdown](glossary:markdown), que lee al inicio de cada trabajo, y por eso cada límite tiene un procedimiento con momento claro para que decida usted. El mensaje separado "ENVIAR" es seguro: la frase "y luego envíalo" en medio de una instrucción larga no envía. Tras escribir en otra aplicación, la IA recarga el resultado para que vea que se guardó.

Escriba la excepción con palabras y condición; la IA la pondrá bajo el título Excepciones. Si solo usa chat común, cómo [cambiar a Cowork o Code](card:when-chat-is-not-enough) se muestra en tarjeta aparte.
## Que las listas se actualicen solas

La regla del prompt hace que la IA proponga un nuevo paso en la lista cada vez que le pregunte. Pero una vez al mes conviene revisar dónde preguntó de más y una tarea programada lo hará por usted. Inserte en IA en modo Code esta tarea y pídale que la programe:

```text
Cada primer lunes del mes a las 9:00 revisa AGENTS.md en esta carpeta y mis chats en ella del último mes. Enumera pasos por los que me preguntaste y que siempre aprobé, y sugiere cuáles mover a "Puedes solo". Enumera también nuevas acciones irreversibles que faltan en "Nunca sin mí". Ajusta las listas hasta que apruebe la propuesta.
```

Si la tarea trabaja con archivos en su PC, solo funcionará si el PC está encendido y la app abierta. Si ya tiene [revisión semanal](card:weekly-ai-review), añada este punto allí en vez de tarea aparte.
## Ejemplo

Tereza gestiona proyectos en una pequeña agencia de publicidad y con IA en modo Cowork prepara reportes mensuales para seis clientes. Tiene activada la aprobación de cada paso, y en una hora la IA le preguntó once veces si podía guardar archivo. El lunes 19/10/2026 abre la carpeta Reportes e inserta el prompt. A la pregunta qué no se puede revertir responde: correos a clientes y eliminación de exportaciones; facturas en el sistema contable la IA no debe cambiar.
La IA escribe:

```text
### Puedes solo
- Leer y editar archivos en la carpeta Reportes y crear nuevos.
- Descargar exportaciones de cuentas publicitarias y calcular tablas.
- Preparar borradores de correos a clientes.

### Nunca sin mí
- Correo externo: muestra destinatario, asunto y texto completo y envíalo solo tras mi mensaje separado ENVIAR.
- Borrar exportaciones y archivos irreversibles: enumera qué borrarás y espera dos confirmaciones en dos mensajes.
- No cambies facturas en el sistema contable; dime qué cambiar.
- Tras cada escritura en otra aplicación recarga y muéstrame el resultado.
- Nunca pongas contraseñas ni claves en chat o archivos; haré el acceso con gestor de contraseñas.

### Excepciones
- Puedes enviar reporte final a colega Martín en chat de equipo si lo aprobé.
```

La IA le dice que trabaja en modo donde Tereza aprueba cada paso y muestra dónde cambiar al modo que pregunta solo en riesgos. El martes 20/10 Tereza escribe en chat nuevo: "Prepara el reporte de octubre para Panadería Novák y envíaselo a la señora Novák." La IA descarga exportación de cuenta publicitaria y guarda el reporte sin preguntar. Luego muestra el borrador del correo con dirección, asunto y texto y espera. Tereza corrige el saludo, envía "ENVIAR" y la IA le muestra en el correo enviado que el mensaje salió con adjunto.
## Si se atasca

- **La IA sigue preguntando por pasos rutinarios:** probablemente la herramienta está en modo que aprueba cada paso. Cambie según el bloque "En su herramienta" y pida a la IA que permita comandos rutinarios permanentemente.
- **La IA hizo paso de "Nunca sin mí" sin preguntar:** escriba "Enumera las reglas cargadas al inicio." Si falta `AGENTS.md`, cómo cargarlo se muestra en tarjeta [archivo de reglas para IA](card:agents-md); si está, deje que la IA cambie el límite a procedimiento con paso, por ejemplo "muestra borrador y espera ENVIAR".
- **La herramienta detiene paso que quería:** apruébelo en ventana o diga a la IA exactamente qué hacer y con qué, por ejemplo "mueve reporte a carpeta compartida `Clientes/Panadería Novák`."
- **No ve modo de permisos:** trabaja en chat común o el administrador lo limitó. Cambie a [Cowork o Code](card:when-chat-is-not-enough) o pida a IT que lo habilite.
## Qué tendrá listo

Tiene dos listas cortas de qué la IA puede hacer sola y cuándo siempre se detiene, guardadas en `AGENTS.md` o en configuración de su herramienta. Si la herramienta tiene modos de permisos, funciona en el que no pregunta por rutina. En tarea real verificó que la IA completa sin preguntas y espera su "ENVIAR" antes de enviar correo. Si la próxima vez pregunta por paso rutinario nuevo, lo propondrá para la lista.
## Qué sigue

Cuando la IA sabe dónde detenerse, confíele [tarea larga que completará sola](card:agent-task), por ejemplo durante la noche. El trabajo repetido semanalmente configúrelo como [tarea programada](card:recurring-ai-task).
## Agente

**Qué es:** Un sistema de IA que puede planificar múltiples pasos dentro de un objetivo dado, utilizar herramientas disponibles, gestionar el estado y ejecutar acciones autorizadas. El alcance de sus capacidades y el grado de autonomía dependen de la herramienta específica y los permisos.

**Qué no es:** No es solo un prompt almacenado ni un asistente renombrado con una función más avanzada.

**Por qué lo necesita el estudiante:** Ayuda a identificar tareas que requieren herramientas, permisos, puntos de control y una responsabilidad clara sobre las acciones.

## Markdown

**Qué es:** Un formato simple de texto plano en el que los encabezados, listas, enlaces y otras estructuras se escriben usando unos pocos caracteres comunes. Los archivos suelen tener la extensión `.md`.

**Qué no es:** No es un lenguaje de programación ni un formato exclusivo para desarrolladores.

**Por qué lo necesita el estudiante:** Permanece fácilmente legible y editable tanto para personas como para IA, y puede transferirse entre diferentes herramientas.

## Prompt

**Qué es:** Instrucción para una interacción específica con la IA.

**Qué no es:** No es lo mismo que un contexto a largo plazo, un asistente almacenado o un agente.

**Por qué lo necesita el estudiante:** Inicia el ejercicio y guía su desarrollo; no es el contenido principal de aprendizaje.

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
