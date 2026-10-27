# Configure una tarea programada: la IA trabaja sola a una hora fija

La IA empezará a preparar automáticamente el informe que usted elabora manualmente cada semana, en el horario que defina.

## Configure una tarea programada: la IA trabaja sola a una hora fija

**Dificultad: media.**\
**Tiempo: aproximadamente 15 minutos** con un informe que realiza regularmente.
## Para qué sirve

Cada lunes por la mañana selecciona de una tabla los pedidos con fecha límite en dos semanas y busca dónde faltan documentos. Envía el resultado a la dirección, le toma media hora y en la semana que está de vacaciones la reunión comienza sin informe.

Solo debe crear el informe completo una vez con la IA y dejar que escriba la tarea; la [tarea programada](glossary:task) la repetirá en el horario indicado sin su intervención.
## Qué preparar

- un informe que realiza regularmente y su última versión como modelo,
- acceso a los documentos en una carpeta, en una aplicación conectada, por ejemplo en el correo o en la web,
- IA que soporte tareas programadas; dónde encontrarlas lo muestra el bloque “En su herramienta”.
## Cómo hacerlo

1. Inserte el prompt y tras su última línea escriba qué informe quiere y de dónde provienen los documentos. Para documentos en carpeta, abra la IA en modo Cowork o Code en esa carpeta.
2. Dígale a la IA qué falta y qué sobra en el informe: deje solo lo que usará para tomar decisiones. Luego indique cuándo debe ejecutarse la tarea y dónde entregar el resultado.
3. La IA creará la tarea o escribirá la instrucción y le dirá dónde programarla. En la lista de tareas programadas verifique cuándo se ejecutará por primera vez; lo que falte lo añadirá la IA a la instrucción.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA que usa en el trabajo y tras la última línea escriba su informe:

Quiero que un informe que hago regularmente se genere solo. Escribo qué informe es y de dónde provienen los documentos en la última línea.

Primero créalo completo con datos actuales. Busca los documentos tú mismo en la carpeta donde trabajas, en las aplicaciones conectadas o en la web. Si encuentras una versión anterior de mi informe, sigue su formato. Al final del informe indica las fuentes. Si no sabes dónde buscar los documentos, pregúntame.

Luego espera a que revise el informe y aplica las correcciones que te indique. Después escribe la instrucción para la tarea programada: de dónde tomar los documentos, qué seleccionar y cómo debe ser el informe. Añade la regla: si falta la fuente o no se carga completa, no hagas el informe y dime qué falta.

Pregúntame cuándo debe ejecutarse la tarea y dónde entregar el resultado, y ofréceme las opciones disponibles. Luego crea la tarea programada y dime cuándo se ejecutará por primera vez y dónde encontraré el resultado. Si no sabes crearla aquí, escríbeme la instrucción para que la pueda insertar en la herramienta que lo soporte y dime dónde.

Informe:

## En su herramienta

### Microsoft Copilot
Inserte el prompt en Copilot Cowork en `copilot.cloud.microsoft` (interruptor Cowork arriba junto a Chat) y adjunte la tabla con el botón + desde OneDrive. Creará la tarea automáticamente cuando le indique cuándo ejecutarla; la encontrará con los resultados en la página Automations. Funciona en la nube, por lo que puede cerrar el portátil. Sin Cowork en Copilot Chat, pase el cursor sobre el mensaje con la instrucción y elija Schedule this prompt.

### ChatGPT
En ChatGPT la IA crea la tarea si se lo solicita en el chat; las tareas y sus resultados están en el panel izquierdo bajo Scheduled. Esta tarea toma documentos de aplicaciones conectadas, como un disco compartido configurado en Plugins, y de la web, y funciona aunque no esté en línea. Para trabajar con una carpeta local, Codex en la aplicación ChatGPT para escritorio lo hace; esta tarea requiere que el ordenador y la aplicación estén encendidos.

### Claude
En Claude Cowork la IA prepara la tarea y usted la confirma con el botón Schedule; el informe está en el panel izquierdo bajo Scheduled. La tarea con conectores funciona con el ordenador apagado, la que usa carpeta local solo con el ordenador encendido y la aplicación Claude abierta. Con el correo conectado, la IA puede dejar el resultado como borrador de email.

### Gemini
En la aplicación Gemini escriba @, seleccione Disk o Gmail e inserte el prompt; para tablas en Disk añada su nombre. Cuando indique a Gemini cuándo y con qué frecuencia ejecutar la tarea, la programará; las tareas están en el panel izquierdo bajo Scheduled y el resultado aparece como no leído, con notificación en móvil. Puede tener hasta 10 tareas y su edición de Google Workspace debe permitirlo con cuenta empresarial.
## Qué es una tarea programada

Una tarea programada (scheduled task) es una instrucción que la IA ejecuta sola en el horario que defina, por ejemplo cada día laboral a las 8:00 o semanalmente. Cuando la tarea corre, la IA no puede preguntar, por eso la instrucción debe contener todo lo necesario. Puede leer y modificar la instrucción en la lista de tareas programadas en cualquier momento.

Una tarea que solo usa documentos de aplicaciones conectadas y web se ejecuta con el ordenador apagado. Una que usa carpeta local requiere que el ordenador y la aplicación IA estén encendidos. Por eso es más rápido empezar con un informe basado en la web, como novedades del sector, porque no conecta nada. Conecte la aplicación en la configuración de su herramienta IA; en cuentas empresariales a veces debe autorizarlo el administrador.
## Otros informes que pueden generarse solos

Cuando reciba el primer informe, cree otro en el mismo chat con una o dos frases y la IA preguntará qué falta. Así pueden generarse, por ejemplo:

- “Cada día laboral a las 9:00 y 15:00 dime cuánto gastamos en publicidad y cuánto cuesta un cliente nuevo. Si el costo sube más del 20 %, ponlo en la primera línea.”
- “Cada día laboral a las 17:30 revisa qué cambió hoy en la carpeta del proyecto y añade arriba en el diario del proyecto una nota breve de lo hecho y decidido.”
- “Cada lunes a las 7:30 busca en la web novedades del sector de la semana pasada y resume las cinco más importantes con enlace a la fuente.”

Para informes que vigilan cambios, como gastos en publicidad, conviene la frase “Si no hay cambios, no envíes nada.” Un informe que llega vacío pronto dejará de abrirse.
## Ejemplo

Tereza coordina pedidos en una pequeña empresa constructora y cada lunes envía a la dirección un informe de pedidos con fecha límite en dos semanas y documentos faltantes. Tiene la tabla en OneDrive empresarial y la IA conectada a Microsoft 365, es decir OneDrive y Outlook. El lunes 28/09/2026 inserta el prompt y tras la última línea escribe:

```text
Informe semanal de pedidos para dirección desde la tabla Pedidos 2026 en OneDrive: fechas límite en 14 días y documentos faltantes.
```

La IA incluye dos pedidos cerrados. Tereza escribe “solo abiertos” y la IA corrige el informe. Luego elige cada lunes a las 8:30 y el resultado como borrador de email para dirección. La IA crea la tarea y, al trabajar solo con OneDrive y correo, se ejecuta con el ordenador apagado. El lunes 05/10 a las 8:30 espera en borradores:

```text
### Pedidos al 05/10/2026
Fecha límite en 14 días:
- Escuela Kolín, reconstrucción: entrega 12/10, falta informe de revisión eléctrica.
- Nave Mladá Boleslav: aprobación 16/10, documentos completos.
Faltan documentos:
- Edificio residencial Nymburk: acta firmada de recepción de fachada.
Fuente: tabla Pedidos 2026 en OneDrive, hoja Abiertos.
```

Tereza envía el email y escribe en el chat que quiere el nombre del jefe de obra en cada pedido. La IA lo añade a la instrucción y desde el 12/10 aparece en el informe.
## Si se atasca

- **La IA responde que no sabe programar tareas:** su herramienta no tiene tareas programadas o no están activadas en la cuenta empresarial. La IA le escribirá la instrucción lista; insértela en la herramienta que soporte tareas y pida al administrador activarlas. Más en la tarjeta [Chat, Cowork o Code](card:when-chat-is-not-enough).
- **La tarea no se ejecutó o no encontró el archivo:** trabaja con carpeta local y el ordenador estaba apagado o la aplicación cerrada. Cambie la hora a cuando esté en el ordenador o ponga los documentos en un disco compartido conectado a la IA.
- **El informe tiene los mismos números cada semana:** la tarea lee un archivo subido al chat que no se actualiza solo. Ponga la tabla en un disco compartido conectado a la IA y pida que ajuste la instrucción.
- **El informe tiene datos antiguos o faltantes:** diga a la IA qué no cuadra para que encuentre la causa y corrija la instrucción. Más en la tarjeta [Revise la salida de la IA](card:kontrola-vysledku).
## Qué tendrá listo

Tiene el primer informe con datos actuales revisado y corregido, y la tarea programada que lo preparará sola desde la próxima fecha. Sabe cuándo se ejecutará por primera vez y dónde encontrar el resultado. Lo que falte tras la primera ejecución la IA lo añadirá a la instrucción.
## Qué sigue

Si quiere preparar el siguiente paso desde el informe, por ejemplo documentos para una reunión, añádalo a la instrucción de la tarea y [guarde todo el proceso como skill](card:create-skill-from-proven-process).
## Prompt

**Qué es:** Instrucción para una interacción específica con la IA.

**Qué no es:** No es lo mismo que un contexto a largo plazo, un asistente almacenado o un agente.

**Por qué lo necesita el estudiante:** Inicia el ejercicio y guía su desarrollo; no es el contenido principal de aprendizaje.

## Tarea programada

**Qué es:** Trabajo que la herramienta ejecuta según un horario o evento y entrega el resultado sin que tengas que solicitarlo cada vez. La disponibilidad y el nombre varían según la herramienta y la cuenta.

**Qué no es:** No es una skill ni un asistente. Estos esperan a que alguien los use, la tarea se ejecuta automáticamente.

**Por qué el estudiante lo necesita:** Ayuda a distinguir cuándo basta con un procedimiento guardado y cuándo se necesita algo que funcione sin solicitud. Esto también plantea la cuestión de quién supervisa el resultado y qué sucede si la tarea se ejecuta con datos incorrectos.

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
