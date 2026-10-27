# Cree un worklog: diario del proyecto

La IA llevará el diario del proyecto para que un nuevo chat o colega retomen justo donde lo dejó.

## Cree un worklog: diario del proyecto

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con un proyecto en curso.
## Para qué sirve

La semana pasada en la reunión decidieron que la oferta se enviará sin descuento y que la fecha se pospondrá a noviembre. Hoy abres un chat nuevo, la IA no sabe esto y escribe un descuento en el borrador del correo. Un colega que tomó el proyecto mientras tanto te pregunta si debe aplicar el descuento.

El worklog, el diario del proyecto, ayuda: la IA escribe una breve anotación tras cada decisión y el nuevo chat o colega pueden leer qué reglas aplican desde entonces.
## Qué preparar

- Una carpeta con un proyecto en curso,
- Notas, correos, actas de reunión o chat de los últimos trabajos en él,
- IA en [modo](glossary:workmode) Cowork o Code que trabaje con archivos en el equipo.
## Cómo hacerlo

1. Abra la carpeta del proyecto en Cowork o Code y pegue el prompt. La IA escribirá las primeras anotaciones en `worklog.md` y guardará la regla de actualizarlo tras cada trabajo.
2. Lea las primeras anotaciones y corrija lo que no encaje.
3. Abra un chat nuevo en la misma carpeta y pregunte algo ya decidido. La IA debería responder según el worklog.

Solo debe anotarse lo que una persona nueva necesita para no repetir trabajo.
## Ejercicio de IA

Pegue este [prompt](glossary:prompt) en la IA en modo Cowork o Code,
abierta en su carpeta:

Crea para este proyecto un worklog: un diario donde se registre qué se hizo, por qué y qué se decidió.

Revisa los materiales en la carpeta del proyecto y las notas que te doy, y escribe las primeras anotaciones. Cada anotación debe tener esta forma:

### AAAA-MM-DD: título breve
- Qué se hizo: una o dos frases.
- Por qué: motivo o problema que se resolvió.
- Decisión: qué aplica desde ahora. Si no hubo decisión, omite esta línea.
- Próximo paso: qué sigue y quién lo hará.

Pon la anotación más reciente arriba. Escribe para que un colega que no estuvo en el trabajo lo entienda. No copies todo el chat ni detalles menores. Si no reconoces fecha o motivo en los materiales, pregúntame.

Guarda las anotaciones en el archivo worklog.md en la carpeta del proyecto. Si ya existe, añade las nuevas arriba.

Finalmente, guarda la regla “Tras cada trabajo terminado en el proyecto, añade arriba en worklog.md una anotación con la misma forma.” en el archivo AGENTS.md en la carpeta del proyecto. Si no existe, créalo. Asegúrate de que se lea al inicio de cada trabajo en esta herramienta; en Cowork añádelo a las instrucciones de la carpeta.

## En su herramienta

### Microsoft Copilot
Cowork está junto al selector Chat; si no aparece, pida al administrador de IT que lo habilite. Solo ve archivos en OneDrive y SharePoint, por eso añada al final del prompt: “Trabaja en la carpeta del proyecto en OneDrive, lleva el worklog como documento Word y escribe la regla para Customize, Preferences.” En el paso 3, indique en la nueva tarea dónde está el proyecto. Las tareas programadas se ven en la página Automations.

### ChatGPT
En la app de ChatGPT para PC cambie a Codex, elija abrir carpeta y seleccione la carpeta del proyecto. Codex lee `AGENTS.md` automáticamente y crea la tarea programada si se lo pide; la verá en Scheduled. Si no ve Codex, probablemente el administrador lo haya desactivado; pídale que lo active.

### Claude
En la app Claude para PC abra Cowork y seleccione la carpeta del proyecto, o ábrala en Claude Code; ambos requieren suscripción. Cowork guarda la regla en las instrucciones de la carpeta, Claude Code lee `AGENTS.md`. La tarea programada la crea la IA si se lo pide y aparece en el panel izquierdo bajo Scheduled.

### Gemini
Gemini no trabaja con carpetas en el equipo y las cuentas corporativas no tienen memoria, por eso no actualiza el worklog automáticamente. Pero puede escribir las primeras anotaciones: adjunte notas con Add from Drive y guarde el worklog con Share & export, Export to Docs. El paso 3 hágalo en Gemu (Gems, New Gem) con el worklog en Knowledge y la instrucción “Responde según el worklog” en Instructions.
## Qué es el worklog

El worklog, diario de trabajo en inglés, es un archivo de texto simple `worklog.md` en la carpeta del proyecto con la anotación más reciente arriba.
Las anotaciones las escribe y guarda la IA, por eso el diario no le quita tiempo extra. Las líneas que empiezan con `###` son títulos; este formato se llama [Markdown](glossary:markdown).

`AGENTS.md` es un archivo con reglas para la IA en la misma carpeta. Muchos programas en modo Code lo leen al inicio de cada trabajo, así no hay que repetir la regla del worklog. Donde el programa no lo hace, la IA guarda la regla en su configuración o le indica dónde ponerla.

Si solo usa chat común, el worklog no se guarda en la carpeta; cómo [cambiar a Cowork o Code](card:when-chat-is-not-enough) explica otra tarjeta. No se deben incluir chats completos ni detalles menores en las anotaciones.
## Que el worklog se escriba solo

La tarea programada actualizará el worklog incluso por trabajo fuera de la carpeta del proyecto. La regla guardada cubre el trabajo con IA en la carpeta. Pero parte del trabajo ocurre en otros sitios: correos, reuniones o chats distintos. La tarea se ejecuta cada día laboral a las 18:00 y añade anotaciones según lo ocurrido ese día. Dé a la IA en modo Cowork o Code esta instrucción y pídale que cree la tarea programada:

```text
Cada día laboral a las 18:00 revisa qué pasó hoy en mis chats, archivos modificados, correos y reuniones en el calendario. Por cada proyecto donde se hizo o decidió algo hoy, añade arriba en su worklog una anotación con la misma forma que las anteriores. Si no hubo nada, no escribas.
```

Si la tarea trabaja con archivos en su equipo, solo funcionará si el equipo está encendido y la aplicación abierta.
## Ejemplo

Proyecto: nuevo boletín para clientes. De las notas de la primera reunión la IA escribe:

```text
### 2026-10-08: Herramienta y frecuencia del boletín
- Qué se hizo: comparamos tres herramientas de envío y elegimos la que usa ventas.
- Por qué: ventas tiene los contactos ahí, no hay que transferirlos.
- Decisión: el boletín será mensual, el primer número en noviembre.
- Próximo paso: Petra preparará la plantilla para el 15/10.
```

Una semana después, en un chat nuevo preguntas con qué frecuencia debe enviarse el boletín. La respuesta correcta es: mensual, según la anotación del 8/10. Si la IA responde distinto, probablemente no está trabajando en la carpeta del proyecto.
## Si se atasca

- **La IA dice que guardó la anotación pero no está en el archivo:** probablemente trabaja en chat común que no puede modificar archivos. Cambie a [Cowork o Code](card:when-chat-is-not-enough) y abra la carpeta del proyecto ahí.
- **El chat nuevo no ve el worklog:** abra el chat en la misma carpeta del proyecto, no en una ventana común.
- **La IA no actualiza el worklog tras el trabajo:** pregunte dónde tiene guardada la regla del worklog. Debe estar en `AGENTS.md` en la carpeta y, si su herramienta no lo lee, también en su configuración.
- **Las anotaciones son largas:** pida a la IA que las resuma a cuatro líneas cada una.
## Qué tendrá listo

Tiene el worklog del proyecto con las primeras anotaciones y la regla guardada para que la IA lo actualice tras cada trabajo. En un chat nuevo verificó que la IA conoce las decisiones del worklog y no propone lo que ya descartaron.
## Qué sigue

Resuma el estado actual del proyecto en una
[página inicial del proyecto](card:project-start-here). Otras reglas para que la IA trabaje en el proyecto escríbalas en el [archivo de reglas para IA](card:agents-md).
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
