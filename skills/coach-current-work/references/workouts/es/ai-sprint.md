# Organice un sprint de IA: un producto terminado en una tarde que el equipo usa

La IA propone qué construirá el equipo en una tarde, redacta el encargo, invita al equipo y tras el sprint guarda el proceso que funcionó.

## Organice un sprint de IA: un producto terminado en una tarde que el equipo usa

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con materiales del equipo en una carpeta compartida.
## Para qué sirve

En las reuniones se repite desde hace un mes que la IA podría elaborar el reporte mensual para la dirección. Todos están de acuerdo, pero entre reuniones nadie lo hace, y Petra lo sigue armando manualmente dos horas al final del mes a partir de exportaciones.

Si el equipo reserva una tarde solo para esto y lo construye con IA para su trabajo habitual, al día siguiente ya lo usa.
## Qué preparar

- Carpeta compartida del equipo con lista de tareas y actas de reuniones,
- Nombres de participantes y tarde en que pueden dedicar dos a cuatro horas solo al sprint,
- IA en modo Cowork o Code para usted y cada participante del sprint,
- IA con calendario conectado, donde se crean las reuniones.
## Cómo hacerlo

1. Abra la carpeta del equipo en IA en modo Cowork o Code, inserte el prompt del ejercicio de IA y debajo escriba quién participará y cuándo. De las propuestas de IA elija una tarea.
2. La IA redacta el encargo; corríjalo y escriba “Envíalo”. La IA guarda el encargo y crea la invitación para el equipo. Durante el sprint cada uno inserta en su IA la frase del encargo y trabaja en su parte.
3. Tras la demostración escriba a la IA “Sprint terminado” y qué funcionó. La IA registra el resultado en el worklog y guarda el procedimiento como [skill](glossary:skill) o regla.

Solo con chat común ayuda la sección Cuando se atasque.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en IA en modo Cowork o Code, abierta en su carpeta:

Prepárenos un sprint de IA: una tarde en la que el equipo con IA construye una cosa que necesita y al día siguiente empieza a usar. Si no tienes acceso a la carpeta del equipo ni puedes guardar archivos, dímelo de inmediato para cambiar a Cowork o Code.

Revisa los materiales en la carpeta del equipo: lista de tareas, actas de reuniones, worklog y otros archivos que muestran qué hace el equipo y qué lo retrasa. Propón tres tareas que se puedan completar en el sprint para que el equipo las use habitualmente. Para cada una escribe en una frase qué se creará, quién la usará y con qué materiales. Reduce la tarea grande a la primera versión que quepa en el sprint. Espera a que elija una.

Para la tarea elegida redacta un encargo de una página:
- Qué se creará y quién lo usará.
- Quién hace qué. Divide el trabajo entre las personas que te escribiré al final del mensaje, para que cada uno introduzca su parte en la IA. Para cada uno indica el archivo donde guardará su parte y la frase que insertará al inicio del sprint en su IA. Esa frase siempre empieza con: Lee AGENTS.md en esta carpeta y asegúrate de leerlo al comenzar cada trabajo.
- Qué accesos y archivos se necesitan y dónde están.
- Quién al final unirá en un archivo lo que el equipo mostrará y en qué casos de trabajo habitual lo probará.

Agrega al encargo la sección Después del sprint con esta instrucción para la IA: “Cuando alguien escriba que el sprint terminó, revisa qué se creó en la carpeta durante el sprint y las notas de la demostración. Registra en worklog.md con fecha del sprint: qué construyó el equipo, cómo funcionó en la demostración y quién hará qué después. Si worklog.md no existe, créalo. Del procedimiento que funcionó escribe un skill, guárdalo en la carpeta del equipo y añade en AGENTS.md la regla de cuándo la IA lo usará y en qué archivo está. Si el procedimiento se basa en una frase, basta con la regla en lugar del skill.”

Muéstrame el encargo y espera correcciones. Cuando escriba que lo envíes, guarda el encargo en la carpeta del equipo como zadani-sprintu-RRRR-MM-DD.md con la fecha del sprint. Añade en AGENTS.md en la misma carpeta la regla de que los encargos de sprints de IA están en archivos zadani-sprintu y que la IA usa el más reciente durante el sprint. Si AGENTS.md no existe, créalo. Asegúrate de leerlo en esta herramienta al comenzar cada trabajo; en Cowork ponlo en las instrucciones de la carpeta. Luego crea la invitación para todos los del encargo en el calendario para la fecha del sprint mediante el conector. Pon en la descripción el encargo sin la parte Después del sprint y el nombre del archivo donde está. Busca los correos en el correo o calendario y pide los que falten. Si no tienes conector o el calendario solo se lee, conecta el calendario vía Composio. Dime exactamente dónde debo iniciar sesión si es necesario. Finalmente dime a quién se envió la invitación.

Quién participará, cuándo y cuánto durará:

## En su herramienta

### Microsoft Copilot
Cowork está en Copilot junto al interruptor Chat; quien no lo ve, pida a IT. Trabaja con archivos en OneDrive y SharePoint, así que dígale dónde está la carpeta del equipo; crea la invitación en Outlook con participantes, por lo que no usa Composio del prompt. Si no todos tienen Cowork, siga el punto “El equipo solo tiene chat común”: el proyecto es un Notebook (Bloc de notas, Nuevo bloc), compartido por Share, Invite.

### ChatGPT
Con la carpeta trabaja Codex en la app ChatGPT para PC: cambie a Codex y elija open y folder; lee AGENTS.md solo. Si no ve Codex, pida al administrador Allow members to use Codex locally o siga el punto “El equipo solo tiene chat común”. Conecte calendario en Settings bajo Plugins; la IA crea reuniones cuando el administrador activa acciones de registro.

### Claude
En la app Claude para PC elija Cowork y en el campo de mensaje Work in a folder; en Cowork la IA anota en instrucciones de carpeta que lea AGENTS.md. El conector Microsoft 365 puede crear reuniones en Outlook si el administrador activa acciones de registro. El conector Google Calendar solo lee calendario, así que la IA crea invitación vía Composio.

### Gemini
La app Gemini con cuenta laboral no trabaja con carpeta en PC, prepare el sprint según “El equipo solo tiene chat común” con el bot compartido Gem. Crea evento en Google Calendar si escribe @Google Calendar y qué crear; invitados se añaden en calendario. Con Gemini CLI trabaja con carpeta si la empresa tiene licencia Gemini Code Assist.
## Qué es un sprint de IA

Sprint en inglés es carrera corta a fondo. En empresas es tiempo reservado en que el equipo trabaja en una cosa y al final muestra resultado. [Sprint de IA](glossary:ai-sprint) dura dos a cuatro horas y el equipo encarga el trabajo a la IA. El resultado suele ser un archivo en la carpeta del equipo: plantilla de oferta, reporte o guía con que la IA responde a clientes. En ese tiempo no se programan otras reuniones, así que lo que espera meses en reuniones se termina en una tarde.

El encargo del sprint es un archivo de texto común en la carpeta del equipo, para que cada participante lo tenga a mano con su IA. AGENTS.md es archivo con reglas para IA en la misma carpeta, que la IA lee al comenzar cada trabajo. Más en las tarjetas sobre [worklog](card:project-worklog) y sobre [archivo con reglas para IA](card:agents-md).

Al final del sprint la persona designada en el encargo hace que la IA una las partes en un archivo y el equipo prueba el resultado con trabajo del día. La tarea que no cabe en la tarde la IA reduce a primera versión que el equipo usará al día siguiente. Worklog es diario del proyecto en la carpeta y la invitación la crea la IA vía conector, es decir, conexión con calendario.

Si la IA pregunta si puede guardar archivos en la carpeta, autorícela. Puede elegir la tarea luego con el equipo: vuelva al mismo chat y diga cuál eligió. En el sprint cada uno guarda en su archivo para no sobrescribir trabajo. Cómo pasar de chat común a modo Cowork o Code muestra la tarjeta [Cowork o Code](card:when-chat-is-not-enough).
## Que el sprint se repita

Un sprint construye una cosa. Si se repite, por ejemplo, una vez al mes, el equipo hará poco a poco lo que solo se habla en reuniones. Basta una tarea programada que la IA ejecute el primer lunes del mes y guarde propuestas para el próximo sprint en la carpeta del equipo. Inserte en IA en modo Cowork o Code este encargo y pídale que cree la tarea programada:

```text
Cada primer lunes del mes a las 9:00 revisa en la carpeta del equipo worklog.md, lista de tareas, actas de reuniones del último mes y encargos de sprints pasados. Propón tres tareas para el próximo sprint de IA que se puedan construir en una tarde para que el equipo las use habitualmente. Para cada una indica quién la usará y por qué conviene ahora. No propongas nada que el equipo haya construido en sprints anteriores. Añade las propuestas arriba en navrhy-na-sprint.md en la carpeta del equipo.
```

Si la tarea trabaja con carpeta en su PC, solo funcionará si el PC está encendido y la app abierta.
## Ejemplo

Markéta lidera un equipo de seis en soporte al cliente de una tienda online de electrodomésticos de cocina. El equipo responde cuarenta consultas diarias y busca respuestas en tres documentos: reglamento de reclamaciones, condiciones de garantía y manuales. El lunes 12/10 abre la carpeta compartida Soporte en modo Cowork, inserta el prompt y debajo escribe: “Markéta, Lucie, Pavel, Jana, Ondřej y Karel, jueves 22/10 de 13:00 a 16:00.” La IA, de actas y exportación de consultas de septiembre, propone:

```text
1. Asistente para respuestas a clientes: de la consulta escribe un borrador de respuesta y debajo el documento y artículo de donde proviene. Lo usa todo el equipo, con base en tres documentos en la carpeta.
2. Reporte mensual de reclamaciones para dirección. Lo usa Markéta, basado en exportación de consultas.
3. Respuestas a las 20 consultas más frecuentes para ayuda web. Lo usan clientes, basado en exportación de consultas.
```

El martes en reunión el equipo elige el asistente. La IA redacta el encargo: Lucie y Pavel con IA seleccionan las 30 consultas más frecuentes del export, Jana y Ondřej con IA redactan cómo debe responder el asistente y citar la fuente, Markéta y Karel lo unen y prueban con cinco consultas de la mañana. Lucie tiene junto a su nombre la frase “Lee AGENTS.md en esta carpeta y asegúrate de leerlo al comenzar cada trabajo. Luego busca en exportación de consultas de septiembre las 30 más frecuentes y guárdalas en archivo `nejcastejsi-dotazy.md`.” Markéta escribe “Envíalo” y la IA crea invitación en calendario para los seis.

El jueves a las 15:30 el asistente responde bien cuatro de cinco consultas y muestra para cada el artículo del reglamento o condiciones. Para la quinta, cambio de pieza fuera de garantía, ningún documento tiene respuesta. Markéta escribe a la IA que el sprint terminó y esta registra en worklog:

```text
### 2026-10-22: Sprint de IA, asistente para respuestas a clientes
- Qué se creó: asistente que de la consulta escribe borrador de respuesta y debajo documento y artículo de origen.
- Cómo funcionó: en cinco consultas de la mañana respondió bien cuatro. Ningún documento describe cambio de pieza fuera de garantía.
- Después: desde viernes 23/10 el equipo escribe borradores con el asistente. Karel para 30/10 añadirá cambio de piezas fuera de garantía a condiciones.
```

Guarda el procedimiento en la carpeta como skill Respuesta al cliente y añade en AGENTS.md la regla para que la IA responda según él. El viernes por la mañana Lucie inserta en IA en carpeta Soporte la primera consulta del día y la IA escribe borrador con fuente sin explicaciones.
## Cuando se atasque

- **No se creó la invitación:** pregunte a la IA si tiene conector al calendario que crea reuniones. Si no, que conecte calendario vía Composio, servicio que conecta IA con más de mil apps; si puede usarlo decide su IT. Sin él la IA prepara texto de invitación y usted la envía desde su calendario. En calendario corporativo el permiso para crear reuniones vía IA a veces lo activa el administrador; cómo pedirlo está en la tarjeta [Conecte su conector](card:plugin-connector).
- **Las tres propuestas son muy grandes para un sprint:** pida a la IA que divida cada tarea en pasos y elija solo el primero para el sprint que el equipo usará. La IA le desglosará el proyecto dividido entre personas en [AI-WBS](card:ai-wbs-project).
- **El equipo solo tiene chat común:** inserte el prompt en chat, adjunte materiales del equipo y añada: “Trabajamos solo en chat común y no usamos Composio. Redacta el encargo para ponerlo en instrucciones del proyecto compartido, y en lugar de archivos y AGENTS.md da a cada uno la frase que insertará en chat en este proyecto.” Ponga el encargo en instrucciones del [proyecto](card:asistent) compartido del equipo; el nombre del proyecto en su herramienta lo muestra el bloque “En su herramienta”. En el sprint cada uno trabaja en chat en este proyecto y al final envía su parte a la persona del encargo, que la une en un chat y deja que la IA la combine. Tras la demostración escriba a la IA en ese chat que el sprint terminó; le escribirá registro y procedimiento para poner en instrucciones del proyecto.
- **La IA del colega no usa el skill del sprint:** que su IA en carpeta del equipo escriba: “Lee AGENTS.md y asegúrate de leerlo al comenzar cada trabajo.”
## Qué estará listo

Tras la preparación queda en la carpeta del equipo el encargo del sprint y todo el equipo tiene invitación en calendario. Tras el sprint el equipo usa el producto construido en una tarde. En el worklog hay registro de qué se creó y cómo seguir, y el skill o regla en AGENTS.md asegura que la IA del equipo use el resultado automáticamente.
## Qué sigue

Si quiere mostrar el resultado del sprint a otros colegas o departamentos, basta con [diez minutos en reunión](card:team-adoption-cycle). Si el skill del sprint responde distinto de lo esperado, modifíquelo según la tarjeta [Cree su skill](card:create-skill-from-proven-process).
## Sprint de IA

**Qué es:** Un bloque de trabajo continuo para un pequeño equipo, durante el cual se crea y prueba la primera versión funcional de uno o varios proyectos reales de IA. Cuenta con tiempo asignado, enfoques, apoyo y un camino definido para el resultado.

**Qué no es:** No es una capacitación común, una competencia ni un trabajo adicional para las personas entre otras reuniones.

**Por qué el estudiante lo necesita:** Ayuda a distinguir el tiempo protegido para la construcción real de un ejercicio corto y muestra qué debe estar preparado para que el bloque produzca un resultado útil.

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
