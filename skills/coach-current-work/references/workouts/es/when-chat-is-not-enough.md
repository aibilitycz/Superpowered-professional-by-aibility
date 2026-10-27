# Deje que la IA acceda a su carpeta: cuando el chat común no es suficiente

Cuando el chat no basta para varios archivos a la vez, cambie al modo Cowork o Code y la IA guardará el resultado directamente en la carpeta.

## Deje que la IA acceda a su carpeta: cuando el chat común no es suficiente

**Dificultad: media.**\
**Tiempo: aproximadamente 15 minutos** con la carpeta de trabajo en curso.
## Para qué sirve

Hasta el jueves 15/10 debe recomendar a la dirección un proveedor de nuevos portátiles. Cinco ofertas están en la carpeta como PDFs. Las sube al chat una por una, copia la tabla comparativa de la respuesta a Word, y cuando el miércoles llega una sexta oferta, empieza de nuevo.

En el [modo de trabajo](glossary:workmode) Cowork o Code, la IA tiene acceso a toda la carpeta, por lo que solo añade la sexta oferta a la tabla ya hecha.
## Qué preparar

- una carpeta con trabajo en curso para un proyecto, en el ordenador o en el disco corporativo,
- una tarea que no pudo hacer en el chat; si no tiene ninguna, la IA hará un resumen de los documentos,
- la IA que usa; si tiene Cowork o Code, lo muestra el bloque "En su herramienta".
## Cómo hacerlo

1. Abra en su herramienta de IA el modo Cowork o Code. En algunas herramientas es una aplicación para ordenador que debe instalar primero.
2. Dé a la IA acceso a la carpeta y, si pregunta si puede trabajar con ella, permita. Inserte el prompt y debajo escriba en una frase la tarea que no pudo hacer en el chat.
3. Abra el archivo que la IA guardó en la carpeta. Si algo no encaja, escríbalo a la IA en el mismo chat y ella corregirá el archivo.

Lo que falte en los documentos, la IA lo marcará con [COMPLETAR] y usted lo completará.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA en modo Cowork o Code,
abierto en su carpeta, y debajo escriba su tarea:

Trabajas en mi carpeta con trabajo en curso. Si no puedes ver dentro o no sabes guardar un archivo, dímelo de inmediato: probablemente estoy en un chat común y debo cambiar al modo Cowork o Code.

Revisa todos los archivos en la carpeta y dime en dos frases qué hay en ella.

Luego haz la tarea que te escribo debajo de esta instrucción. Si no hay ninguna, haz un resumen de los documentos en la carpeta: para cada uno, el nombre, de qué trata, números y fechas importantes y qué implica para mí. Toma números y hechos solo de los documentos; lo que no encuentres, marca con [COMPLETAR].

Guarda el resultado en un archivo nuevo en esta carpeta, como documento Word, y si es tabla o números, como tabla Excel. Dime el nombre del archivo y qué contiene.

Finalmente guarda las reglas para esta carpeta: en una frase, qué hay en ella, el nombre del archivo con el resultado y la regla "Cuando se añada o cambie un documento en la carpeta, complétalo en el resultado de la misma forma." Si trabajas en Cowork, escríbelas en las instrucciones de la carpeta. Si no, escríbelas en el archivo AGENTS.md en la carpeta, y si no existe, créalo. Dime dónde guardaste las reglas.

## En su herramienta

### Microsoft Copilot
El modo Cowork está en Copilot como Copilot Cowork: en `copilot.cloud.microsoft` selecciónelo con el interruptor arriba junto a Chat; requiere licencia Copilot y activación por administrador. No accede a archivos en el ordenador, ponga la carpeta en OneDrive o SharePoint y adjúntela con el botón +. Los archivos nuevos los guarda en la carpeta Cowork en OneDrive y los encuentra en el panel derecho. Guarda las reglas como skill.

### ChatGPT
El modo Code está en ChatGPT como Codex en la aplicación ChatGPT para ordenador, que descarga en la web de ChatGPT; no necesita programar. Tras iniciar sesión, elija Codex, luego New chat y abra la carpeta (open a folder). Codex está en todos los planes de ChatGPT, incluso el gratuito, pero en cuentas corporativas el administrador puede desactivarlo. La IA guarda las reglas para la próxima vez en el archivo `AGENTS.md` en la carpeta.

### Claude
Los modos Cowork y Code están en la aplicación Claude para ordenador, que descarga en `claude.com/download`; Cowork está en planes de pago. Cambie el campo de mensaje de Chat a Cowork; si no ve la opción, tiene la versión nueva donde Cowork funciona en cualquier chat. Abra la carpeta en el panel izquierdo vía Projects, + y Use an existing folder. La IA guarda las reglas para la próxima vez en las instrucciones de la carpeta.

### Gemini
Gemini no tiene modo Cowork ni Code, pero maneja varios archivos en la aplicación Gemini: adjunte hasta 10 archivos con Add from Drive, inserte el prompt y al pedir cambiar de modo escriba "continúa aquí". Guarde el resultado con Export to Sheets, el texto con Share & export y Export to Docs. Pregunte sobre toda la carpeta en Drive con clic derecho y Ask Gemini. Guarde las reglas como skill (Customize, Skills).
## Qué son los modos Cowork y Code

El modo Cowork es para trabajar con documentos: la IA lee y guarda archivos en la carpeta que le abra y trabaja sola en la tarea. El modo Code es para código, webs y scripts, pero trabaja igual con la carpeta, así que puede usarlo también para documentos.

La IA guarda las reglas para la próxima vez en el archivo `AGENTS.md` en la carpeta o en instrucciones que la herramienta recuerda, por lo que valen en cualquier chat nuevo sobre la misma carpeta. En carpeta compartida, el archivo `AGENTS.md` lo ven también los colegas; déjelo ahí, la IA lo sigue. En modo Cowork o Code también puede programar tareas que se ejecutan solas en horario regular.
## Cuándo basta el chat común

El chat común en cualquier herramienta basta en dos casos:

- **Salida puntual de lo que ponga en el chat:** respuesta a un correo, resumen de un documento o puntos para reunión. Inserta el material una vez y usa el resultado de inmediato.
- **Trabajo en correo, calendario o documentos corporativos que el chat tiene [conectados](card:plugin-connector):** por ejemplo, borrador de respuesta en Outlook o resumen de reuniones para la próxima semana.

Cambie a Cowork o Code cuando el material sean varios archivos en una carpeta o cuando el resultado debe quedar como archivo para volver a él.
## Ejemplo

Ondřej coordina la remodelación de oficinas y debe enviar al inversor antes del viernes 16/10 una lista de defectos aún no reparados. En la carpeta `Remodelación de oficinas` tiene siete actas de días de inspección en Word. Abre la IA en modo Cowork, le da acceso a la carpeta y bajo el prompt escribe: "Haz una lista de defectos que según las actas aún no están reparados, con fecha y empresa responsable."

La IA guarda en la carpeta la tabla `defectos-abiertos.xlsx` con catorce defectos. En dos actas falta la fecha, así que los marca con [COMPLETAR]. En las reglas de la carpeta escribe que hay actas de inspección y lista de defectos abiertos, y la regla de que de cada acta nueva debe añadir defectos y marcar los reparados.

El lunes 19/10 Ondřej guarda en la carpeta el acta de otro día de inspección, abre un chat nuevo en la misma carpeta y solo escribe "Se añadió un acta nueva." La IA actualiza la lista y marca dos defectos como reparados.
## Si se atasca

- **La IA responde que no ve la carpeta o no sabe guardar archivo:** está escribiendo en chat común. Cambie a modo Cowork o Code según el bloque "En su herramienta" y dé acceso a la IA.
- **Falta modo Cowork o Code en su herramienta:** en cuentas corporativas suele activarlo el administrador, pídale que lo active. Claude no tiene Cowork gratis, Copilot Cowork requiere licencia Microsoft 365 Copilot y Gemini no tiene este modo; el procedimiento está en "En su herramienta". Si falta Codex en ChatGPT con cuenta personal, descargue la nueva aplicación ChatGPT para ordenador.
- **No puede instalar nada:** Copilot Cowork y Gemini en Google Drive funcionan en navegador y trabajan con carpeta en disco corporativo sin instalación. Si no, envíe a IT el mensaje "Necesito una aplicación con IA para ordenador para que la IA pueda trabajar con archivos del proyecto en carpeta local."
- **La IA omitió algunos archivos:** dígale sus nombres para que los añada. Si hay cientos de archivos, abra solo la subcarpeta relacionada con la tarea.
## Qué tendrá listo

Tiene IA en modo Cowork o Code trabajando con su carpeta. En la carpeta hay un archivo nuevo con el resultado de la tarea que no pudo hacer en el chat, y la IA le indicó dónde guardó las reglas: qué hay en la carpeta y cómo completar el resultado cuando se añada un documento. La próxima vez abra la misma carpeta en un chat nuevo y solo escriba qué cambió.
## Qué sigue

Si quiere tener así todo el trabajo en curso, cree un [espacio de trabajo PACT](card:pact-workspace). Para que el resultado se actualice solo, por ejemplo cada lunes por la mañana, configure una [tarea programada](card:recurring-ai-task).
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

## Guardar para la próxima vez

Mecánica opcional de producto tras generar una salida utilizable. No es una tarjeta independiente, no tiene finalización propia ni incrementa el conteo de métodos completados.

## Cuándo se ofrece
- la persona marcó la salida como utilizable,
- durante el trabajo se creó una instrucción corregida, estilo, árbol de decisiones, handoff u otro elemento repetible,
- es probable que el mismo tipo de trabajo vuelva a aparecer.

La mecánica no aparece para resultados únicos sin parte transferible o donde no está claro un guardado seguro.

## Qué verá la persona
Una opción breve **Guardar para la próxima vez** junto al check-in común. Al abrirse, la IA sugerirá automáticamente:

- qué del resultado es aplicable repetidamente,
- qué cambiará cada vez,
- qué debe revisar la persona en el próximo uso.

La persona solo confirma o corrige la sugerencia. La mecánica no crea formularios obligatorios adicionales.

## Qué crea la IA
La salida reutilizable mínima que corresponde al trabajo real:

- una preferencia personal breve,
- una instrucción o prompt,
- un registro en Markdown o second brain,
- actualización de proyecto o asistente,
- base para skill,
- cambio en workflow existente.

Si ya existe un artefacto adecuado, la IA actualiza su versión actual en lugar de crear una copia nueva.

## Dónde pertenece el contenido
| Tipo de contenido | Lugar predeterminado |
|---|---|
| Preferencia personal pequeña sin pasos procesales | memoria o perfil, si esta función está disponible y es adecuada |
| Instrucción canónica, ejemplo o descripción de procedimiento | Markdown, documento o second brain personal |
| Contexto limitado a un proyecto | instrucciones y archivos del proyecto |
| Rol repetido con contexto estable | asistente |
| Procedimiento estable con reglas, ejemplos y plantillas | skill |
| Varios pasos consecutivos | workflow; al elegir pasos y acciones, posiblemente rama agente |

La memoria no es almacenamiento canónico de procedimientos versionados. Puede guardar preferencia o enlace a fuente actual.

## Cuando la forma objetivo no está clara
La mecánica crea un handoff breve a la tarjeta [Cree un proyecto en su herramienta AI](card:asistent). No elige forma sin persona ni reemplaza tarjeta skill independiente.

## Seguridad y compartición
- La mecánica usa almacenes aprobados y reglas corporativas conocidas.
- Se separan datos del caso específico de la parte estable.
- Sin permisos no escribe en sistema compartido ni cambia accesos.
- Compartición en equipo inicia tras uso repetido, asignación de propietario y verificación por otra persona.

## Registro
Se puede añadir al check-in información de creación o cambio de artefacto reutilizable. No es cumplimiento independiente de tarjeta.

## Primeras tarjetas soportadas
- `when-chat-is-not-enough`
- `output-beyond-document`
- `asistent`
- `ai-workflow`
- `deep-research`
- `kontrola-vysledku`
- `custom-instructions`
