# Cambie el modelo según la tarea: rápido para clasificar, potente para decidir

Compare un modelo rápido y uno potente en dos tareas y AI registrará cuál usar para cada trabajo.

## Cambie el modelo según la tarea: rápido para clasificar, potente para decidir

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con dos tareas de esta semana.
## Para qué sirve

El cliente quiere saber antes del viernes si podrá entregar su pedido antes de fin de noviembre. Le das a la IA una tabla con las capacidades del equipo y en segundos tienes la respuesta afirmativa. Pero la IA no detectó que dos personas del equipo estarán de vacaciones en noviembre porque usaba el modelo predeterminado y no sabías que se podía cambiar.

Un modelo rápido es suficiente para clasificar y transcribir, y si dejas la decisión a un modelo potente con más tiempo para pensar, es más probable que note condiciones que el rápido pasa por alto.
## Qué preparar

- trabajo masivo de esta semana, por ejemplo 30 a 50 tareas de reuniones o consultas para clasificar,
- una decisión, por ejemplo elegir entre tres ofertas según precio, plazo y condiciones,
- materiales para ambas tareas,
- la IA que usas en el trabajo o IA en [modo Cowork o Code](glossary:workmode).
## Cómo hacerlo

1. En el menú de modelo elige la configuración más rápida; dónde está lo muestra el bloque En
   tu herramienta. Inserta el prompt y en las dos últimas líneas escribe cada
   tarea en una frase.
2. Cambia a la configuración más potente y escribe “Segunda ronda”, en Cowork o
   Code en un chat nuevo “Segunda ronda según `ulohy.md`”. La IA hará las tareas de nuevo y comparará las rondas.
3. Para cada tarea elige el resultado que usarías. La IA registrará un resumen de qué modelo para qué y guardará la regla para avisarte la próxima vez cuándo cambiar.
## Ejercicio de IA

Inserta este [prompt](glossary:prompt) en la IA que usas en el trabajo:

Comparamos cómo dos tareas laborales mías las maneja un modelo rápido y uno potente. Las tareas están en las dos últimas líneas, los materiales están en la carpeta donde trabajas o en los adjuntos. Si no trabajas directamente en la carpeta de mi computadora, no crees archivos y deja todo en el chat.

Primera ronda:
- Escribe en qué modelo y con qué configuración de pensamiento estás funcionando. Si no lo sabes seguro, pregúntame.
- Haz ambas tareas completas. Solicita los materiales faltantes.
- Para cada tarea anota al inicio y al final la hora actual y cuánto duró. Si no puedes, escribe “no medido” y al comparar pregúntame cuánto esperé aproximadamente por cada ronda.
- Guarda la asignación de ambas tareas y el resto de este prompt desde “Segunda ronda” en el archivo ulohy.md. Guarda los resultados en porovnani-modelu.md bajo un título con el nombre del modelo y configuración de pensamiento.

Lanzaré la segunda ronda con el mensaje “Segunda ronda” en configuración más potente:
- Si estás en el mismo modelo y configuración que en la primera ronda, avísame para que cambie.
- Toma las tareas de ulohy.md o de la primera ronda en el chat y hazlas de nuevo desde cero igual que en la primera ronda. No uses resultados de la primera ronda; abre porovnani-modelu.md cuando tengas tus resultados y añádelos bajo un nuevo título.
- Luego compara ambas rondas. Para cada tarea muestra hasta tres diferencias que indiquen si el resultado es usable y cuánto duró cada ronda. Texto más largo o espera más larga no significan mejor resultado por sí solos.
- Pregúntame qué resultado usaré para cada tarea y márcalo como seleccionado en porovnani-modelu.md.

Finalmente, según mi elección crea el archivo modely.md con un resumen: tipo de trabajo, modelo y configuración de pensamiento y una frase explicativa. Al final del resumen añade la línea: “Decisión final o análisis debe ser revisado por otro modelo antes de usar.” En el archivo AGENTS.md en la misma carpeta añade la regla: “Antes de empezar la tarea, revisa modely.md. Si para esa tarea conviene otro modelo o configuración diferente a la que usas, dímelo en una frase al inicio.” Si AGENTS.md no existe, créalo. Asegúrate de leerlo al inicio de cada trabajo en esta herramienta; en Cowork escríbelo en las instrucciones de la carpeta. Si no trabajas en carpeta, guarda el resumen y la regla en memoria, y si no tienes memoria, escríbeme el resumen en el chat.

Trabajo masivo:
Decisión o análisis:

## En tu herramienta

### Microsoft Copilot
En Copilot Chat la selección está arriba a la derecha: en la primera ronda Quick response, en la segunda Think deeper, y responde igual cuando la IA pregunte en qué modelo está. No puedes elegir otro modelo en Copilot Chat, comparas la duración del pensamiento. Copilot guarda el resumen en memoria (mensaje Memory updated), sin memoria ponlo en Custom instructions bajo Chat settings › Personalization.

### ChatGPT
La selección está en la web en el campo de mensaje, en móvil arriba en la conversación: en la primera ronda Instant, en la segunda el nivel más alto que tengas (High o Extra High), en cuenta gratuita opción Think. ChatGPT guarda el resumen en memoria (Personalization › Memory), sin ella ponlo en Custom Instructions. En Codex la selección está bajo el campo de mensaje.

### Claude
La selección de modelo está junto al botón de enviar: rápido puede ser Haiku, más potente Sonnet y el más potente Opus. En Effort configuras el pensamiento de Low a Max. En Claude Code cambias modelo con el comando `/model` y pensamiento con `/effort`.

### Gemini
Abajo en el campo de mensaje haz clic en el nombre del modelo: en la primera ronda elige Flash o Flash-Lite, en la segunda Pro y justo después el nivel de pensamiento High; donde las opciones se llaman Fast, Thinking y Pro, elige Fast y luego Pro. Gemini no tiene memoria en cuenta laboral, así que pon el resumen con la regla en las instrucciones de Gem (Gems › New Gem) y asigna tareas ahí.
## Qué es modelo y pensamiento

[Modelo](glossary:ai-model) es la IA que responde y cada aplicación ofrece varios. [Pensamiento](glossary:reasoning-mode) es la configuración de cuánto tiempo el modelo analiza la tarea antes de responder; en inglés según la aplicación se llama thinking, reasoning o effort. Un modelo rápido con poco pensamiento basta para trabajo masivo y responde al instante. Un modelo potente con pensamiento largo vale para decisiones y análisis complejos, pero responde más lento, por eso no quieres usarlo para todo. Ambos se cambian en el menú de modelo; dónde está en cada herramienta lo ves en el bloque “En tu herramienta”.

`ulohy.md`, `porovnani-modelu.md` y `modely.md` son archivos de texto simples en la carpeta con materiales, ábrelos con el Bloc de notas por ejemplo.
`AGENTS.md` es un archivo con reglas para IA en la misma carpeta. La IA en modo Cowork o Code lo lee al inicio de cada trabajo y donde la herramienta lo necesita, la IA lo configura según el prompt, así no tienes que repetir la regla de selección de modelo.
## Que revise otro modelo el resultado

La decisión que usarás debe ser revisada antes por otro modelo distinto al que la escribió. Cada modelo pasa por alto cosas diferentes, así que el segundo suele encontrar lo que el primero omitió. Lo mejor es usar IA de otra empresa que la que hizo la decisión. En modo Cowork o Code ábrela en la misma carpeta, en chat normal adjunta los materiales y pon la decisión en el mensaje bajo la asignación. Si solo tienes una IA, elige otro modelo potente en ella, y si no tienes, pide revisión al menos en un chat nuevo con la misma configuración que en la segunda ronda. Asignación para revisión:

```text
Revisa la decisión seleccionada (en porovnani-modelu.md, arriba en este chat o en adjunto) contra los materiales. Encuentra condiciones que el autor pasó por alto, afirmaciones no respaldadas por los materiales y números incorrectos. Para cada hallazgo indica dónde está en los materiales y sugiere corrección. Si la decisión está correcta, escríbelo en una frase.
```

La línea al final del resumen en modely.md te recordará revisar otras decisiones.
## Ejemplo

Lenka dirige la operación de una pequeña tienda online de cosméticos. El lunes 5/10/2026 abre la IA en la carpeta Transporte y le da dos tareas: clasificar 48 consultas de clientes de la semana pasada en reclamaciones, transporte y pagos, y elegir entre tres ofertas de nuevo transportista.

En la primera ronda con el modelo más rápido y pensamiento corto la IA clasifica las consultas en un minuto y recomienda la oferta más barata para transporte. En la segunda ronda con el modelo más potente y pensamiento largo clasifica igual, pero tarda cuatro minutos. En las ofertas nota que la más barata cobra penalización si la tienda envía menos de 200 paquetes al mes, y Lenka envía 120. Por eso recomienda la segunda más barata.

Lenka elige la clasificación de la primera ronda y el transportista de la segunda. La IA escribe en `modely.md`:

```text
### Qué modelo para qué
- Clasificación y transcripción (consultas, listas, tablas): modelo rápido, pensamiento corto. Resultado igual que el potente, listo en un minuto.
- Elección entre ofertas y contratos: modelo más potente, pensamiento largo. El rápido pasó por alto la penalización en condiciones del transportista.
- Decisión final o análisis debe ser revisado por otro modelo antes de usar.
```

Una semana después Lenka pide al modelo más potente transcribir la lista de precios a una tabla. La IA escribe al inicio que para eso basta un modelo rápido.
## Si te atascas

- **No tienes modelo más potente ni pensamiento más largo en el menú:** en versión gratuita suele haber solo opción de pensamiento más largo; actívala para la segunda ronda. En cuenta empresarial el administrador puede ocultar modelos; pídele acceso a un modelo más potente.
- **La IA en la segunda ronda no sabe qué hacer:** en modo Cowork o Code abre un chat nuevo en la misma carpeta y escribe “Segunda ronda según `ulohy.md`”. En chat normal quédate en el mismo chat y solo cambia el modelo.
- **Ambos modelos cometen el mismo error:** probablemente el error está en la asignación o materiales. Cómo encontrarlo muestra la tarjeta [Revisa la salida de IA](card:kontrola-vysledku).
- **La IA no te recuerda nada la próxima vez:** verifica que `AGENTS.md` esté en la carpeta y la regla esté ahí. En chat normal verifica en configuración que tengas memoria activada. Si la empresa la desactivó, [cambia a Cowork o Code](card:when-chat-is-not-enough).
## Qué tendrás listo

Tienes dos tareas de esta semana terminadas y para cada el resultado que elegiste. Sabes dónde cambiar modelo y duración de pensamiento en tu aplicación y tienes un resumen de qué modelo para qué trabajo. En Cowork o Code el resumen está en `modely.md` y la regla en `AGENTS.md`, así la IA te avisa al inicio si usas modelo inadecuado. En chat normal la IA tiene resumen y regla en memoria.
## Qué sigue

Revisa el resultado del modelo potente antes de enviar
[contra los materiales](card:kontrola-vysledku). Si la decisión necesita fuentes de internet que no tienes en la carpeta, pide
[Investigación profunda](card:deep-research).
## Modelo de IA

**Qué es:** Un sistema que procesa la entrada y genera una respuesta. Una herramienta de IA puede ofrecer varios modelos o esconder su selección bajo nombres de modos.

**Qué no es:** No es una herramienta de IA completa ni una garantía de cierta calidad del resultado.

**Por qué lo necesita el estudiante:** Ayuda a separar las capacidades del modelo del contexto, la tarea, las herramientas disponibles y el entorno en el que se ejecuta el modelo.

## Prompt

**Qué es:** Instrucción para una interacción específica con la IA.

**Qué no es:** No es lo mismo que un contexto a largo plazo, un asistente almacenado o un agente.

**Por qué lo necesita el estudiante:** Inicia el ejercicio y guía su desarrollo; no es el contenido principal de aprendizaje.

## Modo de razonamiento profundo

**Qué es:** Una opción en la que la IA dedica más tiempo computacional a analizar la tarea antes de generar una respuesta. La implementación específica y el nombre dependen del producto.

**Qué no es:** No es una garantía automática de exactitud ni siempre la mejor opción para cada tarea.

**Por qué el estudiante lo necesita:** Ayuda a decidir cuándo la complejidad o importancia de la tarea justifica una espera más larga, mayor consumo o disponibilidad limitada.

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
