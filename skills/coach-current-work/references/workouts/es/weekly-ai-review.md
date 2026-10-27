# Implante una revisión semanal: limpieza de su configuración de IA

La IA detecta cada semana un problema recurrente en sus chats, lo corrige y limpia lo que no usa.

## Implante una revisión semanal: limpieza de su configuración de IA

**Dificultad: media.**\
**Tiempo: aproximadamente 15 minutos** con una semana de trabajo en modo Code completada.
## Para qué sirve

El jueves corrigió por tercera vez en la semana los precios en la oferta porque la IA los volvió a escribir con IVA. Sin embargo, usted envía a los clientes los precios sin IVA, se lo explicó cada vez y en el siguiente chat el error reapareció. Además, la IA sigue la regla de primavera de que la oferta es válida 14 días, aunque desde septiembre es válida 30 días.

La revisión semanal es una limpieza regular: la IA revisa sus chats de la última semana y corrige donde se repitieron errores, en la fuente de las reglas que usa para trabajar.
## Qué preparar

- IA en [modo](glossary:workmode) Code que pueda ver el historial de chats en su computadora,
- la carpeta donde trabaja más frecuentemente con la IA; el informe se guardará allí,
- chats de la última semana realizados en modo Code.
## Cómo hacerlo

1. En modo Code abra su carpeta y pegue el prompt; no necesita entender las rutas de las carpetas. Cuando la aplicación pida acceso al historial de chats y archivos, permita el acceso.
2. Lea el informe y para cada problema diga si quiere la corrección. La IA la escribirá donde propuso y devolverá lo que necesite del archivo.
3. En un chat nuevo, pida el trabajo donde apareció el problema y verifique que la IA lo haga correctamente. Luego inserte la tarea del bloque “Que la revisión se realice cada viernes” como tarea programada.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA en modo Code, abierta en su carpeta:

Haz una revisión semanal de mi configuración de IA: detecta qué problemas recurrentes tuve contigo en la última semana y propone cómo corregirlos.

Revisa mis chats contigo de los últimos siete días. Claude Code los guarda en ~/.claude/projects, Codex en ~/.codex/sessions. Si no tienes acceso, dímelo de inmediato y aconseja qué activar o dónde cambiar. Revisa también mi configuración: reglas para IA, por ejemplo el archivo AGENTS.md, skills y conectores conectados.

Encuentra problemas que aparecieron al menos en dos chats diferentes: cosas que te explico o corrijo repetidamente, y errores de herramientas que se repiten. No cuentes lo que pasó una vez, caídas de servicios ni errores que se resolvieron en el siguiente paso. Elige máximo tres y ordénalos desde el que me costó más tiempo. Para cada uno indica en qué chats y cuándo apareció, y propone una corrección en el lugar correcto:
- si afecta un solo trabajo, por ejemplo ofertas: la corrección va en el skill para ese trabajo, y si falta el skill, propone uno nuevo,
- si afecta todo el trabajo: la corrección va en las reglas para IA,
- si falla una herramienta o conector: la corrección va en su configuración.
Para cada corrección escribe el texto exacto que añadirás o cambiarás.

Luego encuentra skills que en todo el historial que ves nunca se activaron, y reglas para trabajos que ya no hago o reglas que se contradicen. Skills para trabajos que se hacen una vez al mes o trimestre déjalos. Máximo tres de estas cosas muévelas a la carpeta revize-ai/archiv y no borres nada: mueve el skill completo, extrae la regla de AGENTS.md y añádela a revize-ai/archiv/pravidla.md. Lo que no puedas mover, dime dónde desactivarlo.

Escribe todo en un informe corto revize-ai/RRRR-MM-DD.md con la fecha de hoy: cuántos chats cubrió la revisión, problemas con propuestas de corrección y qué hay nuevo en el archivo y de dónde. Muéstrame el informe y pregúntame qué correcciones quiero. Las correcciones aprobadas escríbelas donde la IA realmente las lea en el trabajo y añade al informe qué cambió.

## En su herramienta

### Microsoft Copilot
Microsoft no indica que Copilot pueda revisar sus chats de la última semana. Por eso haga la revisión en una herramienta con modo Code, como Claude Code o Codex en la aplicación ChatGPT, y pida acceso al administrador de TI. Mientras tanto, las correcciones que ya conoce van en Custom instructions o Saved memories (Settings and more, Chat settings, Personalization).

### ChatGPT
La revisión la hace Codex, que guarda los chats en la computadora: en la aplicación ChatGPT para PC cambie a Codex, elija abrir carpeta (open a folder) y pegue el prompt. La revisión cuenta con chats hechos en Codex. Codex crea la tarea programada cuando se la pide en el chat y la encontrará en el panel lateral bajo Scheduled.

### Claude
La revisión la hace Claude Code en la aplicación Claude para PC, que guarda los chats en la computadora: seleccione su carpeta y pegue el prompt. La revisión cuenta con chats hechos en Claude Code, no en chat normal ni en Cowork. La IA crea la tarea programada cuando se la pide y la encontrará en el panel izquierdo bajo Scheduled.

### Gemini
Las cuentas corporativas en Gemini no tienen memoria de chats anteriores, por lo que la IA no los revisará en una semana. Gemini CLI, que trabaja con archivos en la computadora, será reemplazado por Google en junio de 2026 por Antigravity CLI y el prompt no considera su historial de chats. Por eso haga la revisión en una herramienta con modo Code, como Claude Code o Codex en ChatGPT, y pida acceso al administrador de TI.
## Qué es la revisión semanal

Un problema es un detalle que hace que trabajar con IA tome un poco más de tiempo cada vez: algo que explica una y otra vez a la IA o un conector que se desconecta cada semana. Un problema cuesta unos minutos, pero en un mes suman horas. La revisión cuenta solo problemas que se repitieron en al menos dos chats y escribe la corrección solo con su aprobación. Lo que encontró y cambió lo escribe en un informe para que en un mes vea qué problemas desaparecieron.

La IA escribe la corrección donde corresponde:
- problema en un solo trabajo, por ejemplo ofertas, en el skill para ese trabajo,
- problema en todo el trabajo, por ejemplo saludo o formato de fecha, en las reglas para IA,
- herramienta que falla, en su configuración.

Las reglas para IA están en el archivo `AGENTS.md` en la carpeta donde trabaja. Si su herramienta lee reglas de otro archivo, la IA escribirá la corrección allí. Las reglas de la configuración del chat normal no las ve la revisión en Code y la corrección en `AGENTS.md` vale solo para trabajo en modo Code. El informe es un archivo de texto simple con extensión `.md` y la IA se lo muestra directamente en el chat.

En unos meses tendrá decenas de skills y reglas y muchas nunca las activará la IA. La IA sigue usando reglas obsoletas y skills no usados dificultan elegir el correcto. Por eso la revisión las mueve a la carpeta `revize-ai/archiv`, donde la IA no las carga al trabajar, y en el informe indica de dónde las tomó. No mueve sus documentos, solo reglas y skills, y si no tiene nada sin usar, el informe solo lo indica.

La revisión también revisa su configuración: reglas para IA, [skills](glossary:skill) y conectores. Un skill es un procedimiento guardado para un tipo de trabajo y un conector es la conexión de IA con otra aplicación, por ejemplo correo. Un error que ocurrió una vez no necesita regla nueva porque la IA lee reglas en cada trabajo y en una lista larga puede pasar por alto algunas.

Las herramientas en modo Code guardan el historial de chats en la computadora, así que la IA lo revisa sola; el chat normal no hace esta revisión. Si la semana pasada trabajó principalmente en chat normal o Cowork, [cambie a Code](card:when-chat-is-not-enough), trabaje allí una semana y luego haga la revisión.
## Que la revisión se realice cada viernes

La revisión ayuda más si se repite. Basta una tarea programada que la IA ejecute cada viernes por la tarde. Encontrará el nuevo informe en `revize-ai` junto a los anteriores y verá qué problemas de la semana pasada desaparecieron. Inserte en la IA en modo Code esta tarea y pídale que cree la tarea programada:

```text
Cada viernes a las 14:00 haz una revisión semanal de mi configuración de IA. Primero revisa el último informe en la carpeta revize-ai y detecta qué problemas desaparecieron y cuáles siguen. Luego revisa mis chats contigo de los últimos siete días, encuentra problemas que aparecieron en al menos dos chats y para cada uno propone una corrección en el lugar correcto. Mueve máximo tres skills no usados o reglas inválidas a revize-ai/archiv y escribe de dónde son. Guarda el informe en revize-ai con la fecha de hoy y pregúntame qué correcciones quiero.
```

La tarea se ejecuta en su computadora, por lo que solo se activa si la computadora está encendida y la aplicación abierta. Si no está en la computadora a las 14:00 del viernes, escriba en la tarea la hora en que suele estar. El resumen con la pregunta sobre qué correcciones quiere lo encontrará entre las tareas programadas y allí responderá.
## Ejemplo

Pavla gestiona pedidos en una imprenta pequeña. El viernes 16/10 la IA revisa sus chats de la semana y escribe en `revize-ai/2026-10-16.md`:

```text
### Revisión semanal 16/10/2026
La revisión cubrió 14 chats del 9 al 16 de octubre.

### Problemas
1. Precios en ofertas con IVA, aunque los envía sin IVA a los clientes. Lo corrigió en tres chats (12, 14 y 15 de octubre).
   Corrección: en el skill “Oferta para cliente” añadiré la línea “Los precios se indican sin IVA, el IVA se escribe aparte debajo del total.”
2. Fechas en correos las escribo en formato 10/14/2026. Las corrigió en dos chats (13 y 15 de octubre).
   Corrección: en AGENTS.md añadiré la regla “Escribe la fecha en español, por ejemplo 14/10/2026.”

### Archivado
- Skill “Traducción al alemán” de la carpeta de skills: nunca activado en el historial.
- Regla con firma antigua en AGENTS.md: contradice regla más reciente con firma corporativa.
```

Pavla aprueba ambas correcciones. El lunes pide en un chat nuevo una oferta para una agencia publicitaria y la IA escribe los precios sin IVA sin que ella lo recuerde. El siguiente viernes el informe indica que ambos problemas desaparecieron.
## Si se atasca

- **La IA dice que no ve sus chats anteriores:** probablemente pegó el prompt en un chat normal, que no ve el historial en su computadora. Péguelo en la IA en [modo Code](card:when-chat-is-not-enough), abierta en su carpeta.
- **La IA encontró pocos chats o nada repetido:** probablemente la semana pasada trabajó principalmente en chat normal o Cowork. Trabaje una semana en Code y haga la revisión de nuevo. Si trabaja más tiempo en Code, pida a la IA que revise un período más largo, por ejemplo el último mes.
- **El problema reaparece en un chat nuevo:** escriba a la IA: “Este problema se repite. Averigua de dónde lees realmente las reglas y escribe la corrección allí.”
- **Falta algo del archivo:** pida a la IA que lo devuelva según el informe desde la carpeta `revize-ai/archiv` a su lugar original.
## Qué tendrá listo

En la carpeta `revize-ai` tiene el informe de la primera revisión. La corrección del problema que se repitió esta semana está escrita donde la IA la lee y en un chat nuevo verificó que el problema no vuelve. Los skills no usados y reglas inválidas, si tuvo, están en el archivo y puede devolverlos cuando quiera. La revisión está programada para cada viernes, así que el siguiente informe llegará solo.
## Qué sigue

Si la revisión propone un skill nuevo, ajústelo según la tarjeta del [skill](card:create-skill-from-proven-process). Para que la revisión del viernes funcione confiablemente y reporte errores sola, continúe con la [tarea programada](card:recurring-ai-task).
## Prompt

**Qué es:** Instrucción para una interacción específica con la IA.

**Qué no es:** No es lo mismo que un contexto a largo plazo, un asistente almacenado o un agente.

**Por qué lo necesita el estudiante:** Inicia el ejercicio y guía su desarrollo; no es el contenido principal de aprendizaje.

## Habilidad

**Qué es:** Un procedimiento reutilizable para un tipo específico de tarea. Puede incluir instrucciones, reglas, ejemplos, plantillas y otros recursos necesarios. La forma de creación y ejecución varía según la herramienta.

**Qué no es:** No es un rol general del asistente ni una conversación exitosa guardada sin cambios.

**Por qué lo necesita el estudiante:** Ayuda a convertir una práctica comprobada en una forma estable que se puede usar de manera consistente nuevamente.

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
