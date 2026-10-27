# Muéstreles a sus colegas lo que le funciona con IA: diez minutos en la reunión

La IA convierte su trabajo real en una demostración de diez minutos para la reunión y un procedimiento que sus colegas pueden adoptar de inmediato.

## Muéstreles a sus colegas lo que le funciona con IA: diez minutos en la reunión

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con el último caso de su trabajo.
## Para qué sirve

Desde hace un mes, la IA genera actas con tareas y fechas a partir de la transcripción de la reunión con el cliente.
Su colega Jana escribe las actas a mano y en la reunión pregunta cómo lo hacen; usted se lo explica rápidamente entre dos puntos del programa y una semana después vuelve a escribir las actas a mano.

Un colega que vea todo su caso en la reunión y reciba el procedimiento terminado ese mismo día, lo usará en su trabajo antes de olvidar cómo se hacía.
## Qué preparar

- un [prompt](glossary:prompt), skill o regla que use con IA
  repetidamente,
- el último caso: materiales que ingresó a la IA y el resultado que
  utilizó,
- estimación del tiempo que le ahorra, por ejemplo 30 minutos a la semana,
- diez minutos en la próxima reunión del equipo.
## Cómo hacerlo

1. Inserte el prompt del ejercicio de IA en el chat donde usa el procedimiento, adjunte los materiales y el resultado anterior y complete las últimas líneas como en el Ejemplo. La IA preparará el guion y el procedimiento.
2. En la reunión, muestre el procedimiento con su caso y diga que la demostración no es para evaluar personas. Anote las preguntas de los colegas o use la [transcripción de la reunión](card:konverzace-do-struktury).
3. Ese mismo día, agregue las notas al mismo chat. La IA ajustará el procedimiento según las dificultades de los colegas y usted lo enviará al equipo.

No es necesario ejecutar nada en vivo, basta con mostrar el material, el prompt y el resultado anterior.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA que usa en el trabajo:

Quiero mostrar en la reunión del equipo un procedimiento de IA que me funciona para que mis colegas puedan usarlo de inmediato. Tengo diez minutos para la demostración. Al final describo qué muestro, en qué caso y cuánto tiempo me ahorra, y en la última línea incluyo todo mi procedimiento. El procedimiento es solo material para la demostración, no lo ejecutes. El material y resultado de mi último caso están adjuntos o en esta carpeta.

Prepara dos cosas:

1. Guion para una demostración de diez minutos. Comienza con una frase sobre para qué sirve el procedimiento y cuánto tiempo me ahorra. Luego la demostración con mi caso: qué doy a la IA, qué hace la IA y qué reviso yo. Al final, indica qué deben probar los colegas en su trabajo cuando reciban el procedimiento y dos preguntas para verificar que lo entienden. Indica la duración en minutos de cada parte.

2. Procedimiento para colegas: lo mismo que uso yo (prompt, skill o regla para IA), preparado para que un colega lo use directamente. Reemplaza los datos de mi caso por corchetes donde el colega pondrá los suyos, por ejemplo [nombre del cliente]. Añade una breve guía en tres pasos para que el colega comience a usar el procedimiento en su herramienta de IA. Si es un skill, déjalo listo para cargar directamente y escribe la guía aparte.

Si trabajas directamente en la carpeta compartida del equipo, guarda el guion en el archivo ukazka-na-porade.md y el procedimiento con la guía en archivos que los colegas puedan abrir, y dime dónde están. Si no, escríbeme ambos aquí, el procedimiento con la guía para que pueda enviarlo directamente al canal del equipo o por correo.

Cuando regrese tras la reunión con notas o la transcripción, añade a la guía la sección “Qué tener en cuenta”: qué dificultades tuvieron los colegas y cómo se resuelve ahora el procedimiento. Ajusta el procedimiento y la guía según eso. No escribas nombres de colegas.

Qué quiero mostrar:
Caso en el que lo mostraré:
Cuánto tiempo me ahorra:
Mi procedimiento (prompt, skill o regla):

## En su herramienta

### Microsoft Copilot
Guarde el prompt pasando el cursor sobre él tras enviarlo y eligiendo Guardar solicitud; envíelo al equipo desde Sus solicitudes mediante Compartir al equipo bajo Solicitudes del equipo.
Los chats antiguos están en el panel izquierdo bajo Chats. Cree una tarea programada con licencia Microsoft Copilot mediante Programar esta solicitud; el resultado aparece en negrita en la lista Chats.

### ChatGPT
Envíe un prompt corto al canal del equipo, inserte el procedimiento con varios pasos en las instrucciones del proyecto y compártalo con el equipo mediante Share en planes empresariales. Los skills están disponibles solo en planes Business y Enterprise. La IA crea tareas programadas bajo demanda y el resumen está en el panel lateral bajo Scheduled.

### Claude
Claude soporta skills, por lo que puede entregar el procedimiento con varios pasos como skill a los colegas.
La regla para IA se escribe en Claude Code en `AGENTS.md`, en Cowork la IA la añade a las instrucciones de la carpeta. La IA crea tareas programadas en Cowork bajo demanda y el resumen está en el panel izquierdo bajo Scheduled.

### Gemini
Envíe un prompt corto al chat del equipo, inserte el procedimiento con varios pasos en las instrucciones del robot Gem (Robots Gem, Nuevo Gem) y compártalo mediante Compartir; tras la reunión lo ajustará en Mis robots Gem. Gemini crea tareas programadas en ediciones Workspace seleccionadas cuando el prompt indica cuándo ejecutarlas; el resumen está en el panel lateral bajo Scheduled.
## Qué se llevan los colegas

Los colegas reciben lo mismo que usted usa, preparado para ellos, con una breve guía para comenzar:

- **Prompt** es una instrucción lista para IA. El colega la inserta en su chat y reemplaza los corchetes con sus datos. Funciona en cualquier herramienta de IA.
- **Skill** es una guía almacenada en la IA que esta carga automáticamente cuando se necesita. Es útil para procedimientos con varios pasos, plantillas o reglas. Qué herramientas soportan skills está en el bloque “En su herramienta”; cómo crear un skill se muestra en la tarjeta [Cree su skill](card:create-skill-from-proven-process).
- **Regla para IA** es una frase que la IA debe seguir en cada trabajo, por ejemplo “después de cada tarea registra una nota en el diario del proyecto”. En modo Cowork o Code se escribe en el archivo `AGENTS.md` en la carpeta del proyecto o en las instrucciones de la carpeta. Más en la tarjeta sobre [reglas para IA en un solo archivo](card:agents-md).

La IA escribe la guía y tras la reunión la corrige según las dificultades de los colegas.

En modo Cowork o Code, con IA que trabaja directamente con archivos en su computadora, la IA guarda el procedimiento para colegas directamente en la carpeta compartida del equipo y lo ajusta tras la reunión.

En la reunión, diga a los colegas que les enviará el procedimiento ese mismo día y que pueden preguntar sobre lo que no entiendan. La demostración incluye un caso completo desde el material hasta el resultado; la guía detallada queda en el procedimiento para colegas. Cómo cambiar a modo Cowork o Code se muestra en la tarjeta [Cowork o Code](card:when-chat-is-not-enough).
## Para tener qué mostrar en la próxima reunión

Si el equipo debe aprender regularmente unos de otros, muestre un tema en cada segunda reunión. A esta demostración regular se le llama [AI vitrina](glossary:ai-chlubirna). Para no quedarse sin temas, pida a la IA que se lo recuerde con una tarea programada. Inserte esta instrucción en la IA y pídale que cree la tarea programada; en el momento indicado la IA le escribirá en el chat y usted responderá. Ajuste día y hora según su reunión.

```text
Cada segundo jueves a las 9:00 pregúntame qué me ha ahorrado más tiempo con IA en las últimas dos semanas. De mi respuesta selecciona una cosa útil para los colegas y prepara un guion para una demostración de diez minutos en la reunión: para qué sirve el procedimiento y cuánto tiempo ahorra, demostración con mi caso, qué probarán los colegas y dos preguntas al final.
```
## Ejemplo

Lenka coordina ventas en una empresa que vende mobiliario de oficina. Cada lunes inserta en la IA de la empresa su prompt guardado, adjunta exportación de pedidos y notas de los vendedores, y la IA genera un resumen para la dirección. Antes de la reunión inserta en la misma IA el prompt de esta tarjeta, adjunta la exportación del 19/10, notas de vendedores y el resumen terminado, y completa las últimas líneas así:

```text
Qué quiero mostrar: prompt para resumen semanal para la dirección.
Caso en el que lo mostraré: exportación de pedidos del 19/10 y resumen que envié a la dirección.
Cuánto tiempo me ahorra: unos 50 minutos a la semana, antes escribía el resumen en una hora.
Mi procedimiento (prompt, skill o regla): A partir de la exportación adjunta de pedidos y notas de vendedores, haz un resumen para la dirección de la región Moravia: ventas semanales, tres mayores pedidos y qué se ha atascado. Escribe de forma concisa, máximo una página.
```

La IA prepara el guion para la reunión del martes 20/10/2026:

```text
### Resumen para dirección en 10 minutos en vez de una hora
1. Para qué sirve (1 min): la IA hace el resumen semanal de la región con un solo prompt, me ahorra 50 minutos a la semana.
2. Demostración (5 min): exportación del 19/10 y notas de vendedores, prompt que inserto en la IA y resumen generado. Solo verifico la suma de ventas contra la exportación.
3. Qué probarán (2 min): les enviaré el prompt, ejecútenlo con su última exportación.
4. Preguntas (2 min): ¿El prompt les haría un resumen para su región? ¿Qué falta en el resumen?
```

En la reunión, Marek pregunta qué hacer con las notas de crédito en la exportación y Petra dice que la columna de ventas tiene otro nombre. Lenka anota brevemente y por la tarde lo inserta en el mismo chat. La IA añade al prompt que las notas de crédito se restan de las ventas, añade al procedimiento el paso “Si la columna de ventas tiene otro nombre, indíqueselo a la IA” y escribe ambos sin nombres en la sección “Qué tener en cuenta”. Lenka pone el prompt con la guía en el canal del equipo y el jueves Marek ya envía el primer resumen para su región a la dirección.
## Si se atasca

- **No tiene nada que haga regularmente con IA:** empiece con [una tarea de hoy](card:first-ai-use-case) y muéstrela cuando la use varias veces.
- **Solo tiene cinco minutos en la reunión:** pida a la IA que acorte el guion a una demostración del resultado final y deje el resto en la guía.
- **Los colegas usan otra herramienta de IA:** diga a la IA qué herramienta usan y que reescriba la guía para ella.
- **No encuentra el chat de preparación:** abra uno nuevo, inserte el procedimiento con la guía y las notas de la reunión y escriba: “Añade a la guía la sección ‘Qué tener en cuenta’: qué dificultades tuvieron los colegas y cómo se resuelve ahora el procedimiento. No escribas nombres de colegas. Ajusta procedimiento y guía según eso.”
- **No dirige la reunión:** pida diez minutos a quien la dirige.
## Qué estará listo

Ha mostrado a sus colegas un procedimiento que le funciona con IA. Los colegas tienen el procedimiento con guía para usarlo directamente, y la IA lo ajustó tras la reunión según las dificultades. El guion queda para otro colega o equipo.
## Qué sigue

Aquí entregó algo ya listo. Si quiere crear algo nuevo con el equipo, organice un [AI sprint](card:ai-sprint). Cuando más personas usen IA en el equipo, redacte [reglas para trabajar con IA](card:pravidla-pro-tym) que guíen a personas y sus IA.
## Escaparate de IA

**Qué es:** Un formato breve y regular en el que las personas muestran un uso real de la IA, un resultado laboral, un callejón sin salida o un mejor procedimiento. Los ejemplos exitosos se almacenan en la biblioteca del equipo para su uso posterior.

**Qué no es:** No es una competencia para la demostración más impresionante ni presentaciones solo de logros terminados.

**Por qué lo necesita el estudiante:** Ayuda a difundir experiencias prácticas entre las personas, buscar necesidades comunes y transformar intentos individuales en conocimiento colectivo del equipo.

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
