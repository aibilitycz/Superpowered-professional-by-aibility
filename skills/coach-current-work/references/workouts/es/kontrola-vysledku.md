# Verifique la salida de la IA: números y afirmaciones contra las fuentes

La IA compara números y afirmaciones en la salida con las fuentes, corrige errores y guarda una regla para evitar que se repitan.

## Verifique la salida de la IA: números y afirmaciones contra las fuentes

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con una salida de IA y sus fuentes.
## Para qué sirve

El martes por la mañana envía al director un resumen mensual de ventas. El comentario sobre los números fue escrito por la IA a partir de una exportación y dice que las ventas en septiembre aumentaron un 12 % principalmente gracias a Eslovaquia. En la reunión, el director pregunta de dónde salen esos 12 %, y usted no sabe si la IA vio toda la tabla o solo su primera hoja.

Cuando la IA busca cada número en las fuentes y explica por qué ocurrió el error, puede decirle al director exactamente de dónde salen esos 12 %.
## Qué preparar

- salida de la IA que desea enviar: informe, oferta, acta o tabla,
- fuentes de las que se generó: exportación, lista de precios, contrato o transcripción de reunión,
- IA que usa en el trabajo o IA en [modo Cowork o Code](glossary:workmode).
## Cómo hacerlo

1. Inserte el prompt y bajo "Salida:" y "Fuentes:" ponga el texto o nombres de archivos; en el chat adjunte las fuentes. Si la salida se generó según un [skill](glossary:skill) o tarea programada, indíquelo bajo el prompt.
2. La IA devolverá hallazgos, salida corregida y un número clave con su ubicación en la fuente. Abra la fuente y compare el número usted mismo, porque la IA puede pasar por alto su error otra vez.
3. Escriba qué correcciones no desea y añada lugares con `[VERIFICAR]`, o déjelos tachados. La IA completará la salida, guardará la regla contra la causa del error y le dirá dónde.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA que usa en el trabajo:

Verifica la salida que preparó la IA antes de que la envíe. La salida y las fuentes de las que proviene están al final del mensaje: como texto, nombres de archivos en la carpeta o adjuntos.

Al principio, escribe qué archivos tienes cargados y si completos: cuántas páginas, hojas o filas. Si alguno no está completo, revisa lo que tienes y dime qué hojas o páginas debo enviar por separado porque la salida se basa en ellas. Luego encuentra en la salida cada número, precio, fecha, nombre, afirmación y decisión que se pueda verificar en las fuentes y compáralos. Revisa también al revés: qué hay en las fuentes y falta en la salida, por ejemplo, un ítem de la solicitud o una tarea de la reunión. Recalcula los números que resultan de un cálculo y muestra el cálculo. No corrijas estilo ni tono, solo verifica que el contenido coincida.

En la primera respuesta devuelve:
- tabla de hallazgos: cita de la salida, qué dice la fuente y dónde exactamente (archivo, página o hoja y fila tal como lo veré al abrir el archivo), corrección y causa,
- toda la salida corregida,
- un número en el que se base más la salida y dónde exactamente encontrarlo en la fuente para que pueda verificarlo.

Elige la causa entre estas: falta la fuente, la instrucción fue confusa, la IA interpretó mal la fuente, no se cargó toda la fuente o el chat fue muy largo, la fuente está desactualizada, error en el cálculo. Si no estás seguro de la causa, indica que es una estimación. No inventes lo que no encuentres en las fuentes: márcalo como [VERIFICAR] y pregúntame.

Luego espera. Te diré qué correcciones no quiero y añadiré lugares con [VERIFICAR]. Después guarda la versión corregida en un archivo nuevo junto al original y dime su nombre; en el chat sin carpeta devuélvela completa.

Finalmente escribe en una frase una regla contra la causa que pueda repetirse. Si ninguna puede repetirse, toma la regla "Para cada número indica el archivo y la página o hoja de donde proviene." Si te digo que la salida se generó según un skill o tarea programada, corrige la regla directamente allí. Si no, guárdala en el archivo AGENTS.md en la carpeta donde trabajas; si no existe, créalo. Asegúrate de que se lea en esta herramienta al comenzar cada trabajo; en Cowork anótalo en las instrucciones de la carpeta. En chat normal sin carpeta guarda la regla en la memoria, y si no es posible, dime exactamente dónde insertarla en la configuración. Dime dónde está guardada la regla.

Salida:
Fuentes:

## En su herramienta

### Microsoft Copilot
En Copilot Chat adjunte hasta 20 archivos con +, cada uno hasta 50 MB, incluyendo Excel y PDF. Copilot guarda la regla en memoria y muestra el mensaje Memory updated; el resumen está en configuración bajo Chat settings › Personalization › Saved memories. La regla general para todos los chats va en Custom instructions en el mismo lugar.

### ChatGPT
En chat normal adjunte las fuentes con + junto al campo de mensaje. ChatGPT guarda la regla en memoria que encuentra en configuración bajo Personalization › Memory; la regla general para todos los chats va en Custom Instructions en el mismo lugar. Codex, modo en la app ChatGPT para PC, trabaja con carpeta y lee `AGENTS.md` y abre archivos directamente en la carpeta.

### Claude
En chat normal Claude guarda la regla en memoria. En Cowork selecciona la carpeta con salida y fuentes al asignar la tarea y la IA registra el enlace a `AGENTS.md` en las instrucciones de la carpeta; Claude Code lee `AGENTS.md` solo.

### Gemini
Adjunte fuentes con Add files desde PC o Google Drive, máximo 10 archivos hasta 100 MB. La hoja faltante de Google Sheets ábrala y descargue con File › Download en formato CSV. Gemini no tiene memoria ni instrucciones propias en cuenta laboral, así que guarde todo el prompt y regla como skill (escriba "Guárdalo como skill"); para la siguiente revisión solo dé salida y fuentes.
## Por qué la salida de la IA no coincide

El error en la salida suele tener una de seis causas y cada una necesita una regla distinta para evitarla:

| Causa | Cómo se reconoce | Regla para la próxima |
|---|---|---|
| Falta la fuente | La IA inventó número o promesa, no está en las fuentes | Lo que la IA no encuentre en las fuentes, marque `[VERIFICAR]`. |
| La instrucción fue confusa | Precios unas veces con IVA y otras sin, o para otro período | Los precios siempre sin IVA y para todo el mes calendario. |
| La IA interpretó mal la fuente | En la salida hay decisión que en la reunión fue solo propuesta, o números de otra columna | Solo se considera decisión lo que alguien aprobó explícitamente en la fuente. |
| No se cargó toda la fuente | Faltan últimas páginas PDF, segunda hoja de tabla o inicio de chat largo | La IA escribe al principio cuántas páginas y hojas cargó. |
| La fuente está desactualizada | En la carpeta hay lista de precios del año pasado junto a la nueva y la IA tomó la vieja | Los precios se toman solo de la lista más reciente y su nombre está bajo la salida. |
| Error en el cálculo | La suma o porcentaje no coincide al recalcular | La IA recalcula cada número y muestra el cálculo. |

`AGENTS.md` es un archivo de texto con reglas para la IA en la carpeta donde trabaja. La IA en modo Cowork o Code lo lee al comenzar cada trabajo, así no hay que repetir la regla; donde la herramienta lo requiera, la IA lo configura según el prompt. En chat normal la IA guarda la regla en memoria.

Skill es una guía guardada para la IA y tarea programada es una instrucción que la IA ejecuta sola a la hora establecida. Si el error surgió allí, la IA corrige la regla directamente y la corrección vale para todas las salidas siguientes.
## Que la IA se controle sola

La regla general hace que la IA compare cada salida con números contra las fuentes antes de mostrársela; la regla del ejercicio solo vigila una causa. En la carpeta la IA la escribe en `AGENTS.md`, en chat normal en memoria. Basta con dar:

```text
Guarda una regla para todo el trabajo conmigo: Antes de mostrarme informe, oferta, presentación o correo con números, compara cada número y afirmación con las fuentes. Bajo la salida escribe en una frase de qué archivos proviene y qué no se pudo verificar. Lo que no esté en las fuentes, marca [VERIFICAR]. En carpeta escribe la regla en AGENTS.md y asegúrate de que se lea en esta herramienta al comenzar cada trabajo; en Cowork en instrucciones de carpeta. En chat normal sin carpeta guárdala en memoria.
```
## Ejemplo

Lucie Benešová de la agencia que organiza eventos corporativos envía el 16/10/2026 a la empresa Kovo Jihlava una oferta para la fiesta navideña para 120 invitados. La oferta la preparó la IA en la carpeta `Ofertas` a partir de la solicitud y listas de precios. La revisión devuelve tres hallazgos:

| En la salida | En la fuente | Causa |
|---|---|---|
| catering 120 × 690 CZK | `cenik-2026-10.pdf`, página 2: 740 CZK por persona | fuente desactualizada, la IA tomó la lista del año pasado en la misma carpeta |
| alquiler de sala 18 000 CZK con IVA | mismo archivo: 18 000 CZK sin IVA | instrucción confusa, no decía si los precios son con IVA |
| vestuario falta en la oferta | `poptavka-kovo.pdf`, página 3: vestuario para 120 invitados | no se cargó toda la fuente, la IA leyó solo las dos primeras páginas de la solicitud |

La IA recalcula el catering a 88 800 CZK, añade el vestuario según la lista y corrige el precio total. Lucie abre la lista y compara el precio del catering en la página 2 por sí misma. En `AGENTS.md` en la carpeta `Ofertas` la IA escribe:

```text
Toma precios solo de la lista más reciente en la carpeta, indica para cada uno si es con IVA o sin, y bajo la oferta pon el nombre de la lista. Lee toda la solicitud y al principio escribe cuántas páginas tiene.
```

La siguiente oferta que la IA prepare en la misma carpeta una semana después termina con la línea "Precios sin IVA según `cenik-2026-10.pdf`."
## Si se atasca

- **La IA no carga toda la fuente o dice que es muy grande:** te dirá qué hojas o páginas faltan. Guarda cada hoja faltante de Excel con Guardar como en formato CSV, que guarda solo una hoja, y envíala en el mismo chat con el mensaje "Aquí están las hojas faltantes, termina la revisión." La IA revisará toda la fuente de una vez en [Cowork o Code](card:when-chat-is-not-enough), donde abrirá el archivo directamente en la carpeta.
- **La afirmación no tiene fuente en tus documentos:** si es dato externo, como precio de competencia o cifra de mercado, deja que la IA busque la fuente en internet con [Deep Research](card:deep-research). Si no, tacha la afirmación en la salida.
- **Casi toda la salida está mal:** la causa está en la instrucción o en las fuentes y corregir por partes no la elimina. Añade la fuente faltante, agrega la regla de revisión a la instrucción y deja que la IA genere la salida de nuevo.
- **La IA repetirá el mismo error:** pregúntale dónde tiene guardada la regla. En carpeta debe estar en `AGENTS.md`. En chat normal debe estar activada la memoria; si la empresa la desactivó, guarda la regla según el bloque "En su herramienta" o [cámbiate a Cowork o Code](card:when-chat-is-not-enough), donde la IA la escribirá en `AGENTS.md`.
## Qué tendrá listo

Tiene la salida corregida, donde números y afirmaciones coinciden con las fuentes, y sabe por qué surgió cada error corregido. Un número clave en que se basa la salida lo verificó usted mismo en la fuente. La IA tiene guardada la regla contra la causa del error en `AGENTS.md`, en el skill, en la tarea o en memoria, para usarla automáticamente en el siguiente trabajo.
## Qué sigue

Cuando los números coincidan y el texto deba sonar aún humano, páselo por [anti-slop](card:anti-slop), es decir, revisión de giros que delatan IA. Si revisa el mismo tipo de salida cada semana, convierta la revisión en un [skill](card:create-skill-from-proven-process), es decir, una guía que la IA abre sola.
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
