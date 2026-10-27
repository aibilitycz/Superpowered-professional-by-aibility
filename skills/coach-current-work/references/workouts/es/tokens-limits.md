# Ahorre tokens: que su límite de IA dure toda la semana

Traslade el trabajo de un chat largo a uno nuevo, la IA dejará de olvidar y su límite durará más.

## Ahorre tokens: que su límite de IA dure toda la semana

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con un chat largo.
## Para qué sirve

Lleva tres semanas preparando con IA una feria en un solo chat. En los últimos días, la IA responde más lento, confunde versiones antiguas del catálogo con las nuevas y el miércoles por la tarde le avisa que agotó el límite semanal. Así, termina la oferta que debe entregar el viernes sin IA.

La IA lee todo el chat de nuevo con cada mensaje nuevo, por eso ahorra más si cambia el chat largo por uno nuevo que continúe según un resumen corto.
## Qué preparar

- el chat donde trabaja más tiempo en un proyecto,
- la IA con la que mantiene ese chat.
## Cómo hacerlo

1. Inserte el prompt en el chat donde trabaja más tiempo. En Cowork o Code AI guarda el resumen en `handoff.md` y las reglas en `AGENTS.md`; en un chat común los pone en la respuesta y en la memoria.
2. Lea el resumen, corrija lo que no encaje y abra un chat nuevo: en Cowork o Code escriba “Continúa según `handoff.md`”, en un chat común pegue el resumen y los archivos.
3. Si su herramienta muestra el límite, vea cuánto queda y cuándo se renueva. Dónde encontrarlo muestra el bloque “En su herramienta”.

Al resumen solo debe incluir lo que el chat nuevo necesita para continuar.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA que usa en el trabajo:

Este chat es largo y con cada mensaje nuevo lo lees entero otra vez, por eso me consume límite y respondes peor. Prepara el traslado del trabajo a un chat nuevo y establece reglas para que no vuelva a pasar.

Primero escribe un resumen para que el chat nuevo continúe sin leer este chat. Divídelo bajo estos títulos con ###:
- Objetivo,
- Hecho,
- Vigente: decisiones y reglas acordadas,
- Queda: próximos pasos en orden,
- Archivos para continuar: solo los que realmente se necesitan.
Limítate a una página. No reescribas el desarrollo del chat ni incluyas callejones sin salida. Si dudas si algo sigue vigente, pregúntame.

Luego escribe estas reglas para el trabajo futuro:
- Cuando el chat se alargue o terminemos una tarea y empecemos otra, escribe un nuevo resumen igual y sugiere continuar en un chat nuevo.
- Al comenzar, parte del resumen y trabaja solo con los archivos que la tarea necesita. No revises toda la carpeta ni pidas adjuntos que no se requieren.
- Para trabajo masivo con decisiones repetidas en decenas o cientos de ítems, usa un modelo más barato: si puedes, lanza subagentes con modelo pequeño, si no, dime a cuál cambiar. Devuelve solo el resultado al chat principal.

Dónde guardar qué:
- Si trabajas en la carpeta del proyecto, guarda el resumen en handoff.md, si ya existe, sobrescríbelo y sigue su formato. Añade las reglas en AGENTS.md, créalo si no existe. Asegúrate de que AGENTS.md se lea al inicio de cada trabajo en esta herramienta; en Cowork ponlo en las instrucciones de la carpeta.
- Si no tienes acceso a la carpeta, no crees archivos descargables. Escríbeme el resumen en la respuesta y guarda las reglas en memoria; si no tienes memoria activada, escríbeme las reglas bajo el resumen para que las pegue en el chat nuevo.

Finalmente, dime en una frase qué ocupaba más espacio en este chat para evitarlo la próxima vez.

## En su herramienta

### Microsoft Copilot
Microsoft no publica límites para Copilot con licencia ni muestra consumo; la licencia da acceso prioritario. Pero trasladar a un chat nuevo ayuda también aquí, porque la IA solo lee el resumen y deja de confundir versiones antiguas con nuevas. Copilot guarda las reglas en memoria (Saved memories en Settings and more, Chat settings, Personalization).

### ChatGPT
En planes empresariales el modelo común casi no tiene límite, pero sí los modelos que piensan más tiempo y Codex. Si lo agota, ChatGPT sigue con otro modelo y muestra cuándo se renueva el límite. El consumo de Codex se ve en Settings, Usage y con el comando `/status` en Codex (también espacio libre en chat); el chat común no tiene resumen.
Las reglas las guarda la IA en memoria en chat común (Settings, Personalization, Memory).

### Claude
Claude tiene límite cada cinco horas y un límite semanal; ambos cuentan chat común, Cowork y Claude Code. Lo que queda se ve en Settings, Usage y en Claude Code con `/usage`; `/context` muestra qué ocupa espacio en el chat. Para trabajo masivo basta un modelo menor Haiku o Sonnet en vez del más potente Opus.

### Gemini
El límite restante se ve en Gemini en Settings (abajo a la izquierda), Usage Limits. Los modelos más potentes tienen límite de mensajes por horas o día, y si se agota, puede continuar en el mismo chat con el modelo rápido Fast. Las cuentas empresariales no tienen memoria, por eso guarde las reglas en Gemu (Gems, New Gem, Instructions) y abra el chat nuevo ahí.
## Qué son tokens y límites

La IA lee y escribe texto en fragmentos llamados tokens; un token es aproximadamente parte de una palabra. De los tokens se calcula el límite que tiene en su suscripción o que le asignó la empresa. Cómo lo calcula su herramienta lo encuentra en el bloque “En su herramienta”.

Un chat largo es costoso porque la IA lee todo el chat desde el inicio con cada mensaje nuevo, incluyendo todos los adjuntos. Por eso, incluso una pregunta corta en un chat que lleva todo el día consume límite por todo el chat. Además, cada chat tiene una ventana de contexto, es decir, cuánto texto la IA puede mantener a la vez. Cuando se llena, la IA mantiene solo un resumen abreviado de la parte antigua, por eso olvida acuerdos.

`handoff.md` es un archivo de texto común en la carpeta del proyecto con el estado actual del trabajo. El mismo archivo sirve para [transferir trabajo](card:handoff) a un colega. Los títulos con `###` indican encabezados; este formato se llama [Markdown](glossary:markdown). `AGENTS.md` es un archivo con reglas para la IA en la misma carpeta. Muchas herramientas en modo Code lo leen al inicio de cada trabajo; donde no, la IA guarda la regla en su configuración o le indica dónde pegarla.
[Subagente](glossary:subagent) es una IA auxiliar que la IA principal lanza para tareas parciales. Trabaja en su propio chat y devuelve solo el resultado, manteniendo el chat principal corto.

Si no tiene memoria activada, la IA le escribe las reglas bajo el resumen y usted las pega en el chat nuevo. Para que la IA guarde el resumen automáticamente necesita IA en [modo](glossary:workmode) Cowork o Code; cómo cambiarlo muestra la tarjeta [Chat, Cowork o Code](card:when-chat-is-not-enough).
## Que la IA ahorre sola

Las reglas en `AGENTS.md` valen en cada chat nuevo en la carpeta del proyecto. La IA le sugerirá un chat nuevo cuando el actual se alargue, lee solo los archivos que la tarea necesita y envía trabajo masivo a un modelo más barato. Para clasificar o reescribir cientos de ítems basta un modelo pequeño y consume mucho menos límite.

Si trabaja en varios proyectos, deje las reglas vigentes en todos. Las herramientas en modo Code tienen además reglas generales para todos sus proyectos. Basta con escribir en cualquier proyecto:

```text
Agrega las reglas de ahorro de tokens de AGENTS.md en esta carpeta también a tus reglas que valen para todos mis proyectos.
```

Cómo ahorrar en listados de comandos y longitud de respuestas muestra el bloque “Cómo ahorrar en modo Code”.
## Cómo ahorrar en modo Code

En [modo Code](glossary:workmode) la IA ahorra más cuando grandes búsquedas las lanza fuera del chat principal y acorta textos que lee y escribe durante el trabajo.

Una búsqueda grande, por ejemplo multas contractuales en 300 contratos, la IA la envía a un [subagente](glossary:subagent) que devuelve solo el resultado al chat principal. El subagente también consume límite, por eso la IA lo usa solo para búsquedas cuyos resultados llenarían el chat principal.

Si el chat se llena, la IA reemplaza la parte antigua con un resumen corto y sigue trabajando. Esto también ahorra límite porque la IA lee todo el chat y de mensajes antiguos quedan solo puntos clave. Tras terminar la tarea es más barato empezar un chat nuevo según `handoff.md`. Qué ocupa espacio en el chat muestra un comando que escribe en el campo de mensaje; cuál es lo encuentra en el bloque “En su herramienta”.

Dos ahorros más requieren instalación. La IA en modo Code ejecuta comandos durante el trabajo, por ejemplo para convertir tablas o revisar cambios en archivos, y lee todo lo que imprimen. La herramienta RTK, gratuita, acorta salidas de comandos comunes según autores entre 60 y 90 % antes de que la IA las lea. El plugin Caveman, complemento para IA, acorta sus respuestas en chat a pocas palabras, como si hablara un hombre de las cavernas. Si no le gustan respuestas cortas, escriba “stop caveman” y la IA responderá como antes hasta el fin del chat; la IA lo desactiva permanentemente si se lo pide.

Según el prompt, la IA primero escribe las reglas y luego instala las herramientas cuando usted confirme. Si no puede instalar en el equipo de la empresa o no sabe si puede, la IA le prepara un mensaje para el administrador IT.

Inserte este prompt en la IA en modo Code abierta en su carpeta:

```text
Configura ahorro de tokens para trabajo en modo Code.

1. Añade estas reglas a AGENTS.md (créalo si no existe) y asegúrate de leerlo al inicio de cada trabajo en esta herramienta:
- Si la tarea requiere buscar en toda la carpeta o leer salidas largas, lanza un subagente con modelo pequeño si puedes, y devuelve solo el resultado al chat principal.
- Si usas RTK, compara archivos con comando que RTK no acorta (en Mac y Linux /usr/bin/diff, en Windows fc.exe), porque comparación acortada puede pasar por alto diferencias.
- Los textos que escribas en archivos para mí, escríbelos completos aunque respondas brevemente en chat.

2. Luego dime en dos frases qué instalarás, de dónde y qué cambiará en todos mis proyectos, y espera que confirme que puedo y quiero instalarlo en la empresa:
- RTK según README en github.com/rtk-ai/rtk, no con cargo install rtk. En Claude Code actívalo con rtk init -g --auto-patch, en Codex con rtk init -g --codex. Verifica que rtk gain muestre resumen de ahorros; si no reconoce el comando, tienes otro paquete llamado rtk, desinstálalo y vuelve a instalar RTK.
- Caveman según instrucciones para esta herramienta en github.com/JuliusBrussee/caveman, para que respondas brevemente en chat y se active solo al inicio de cada trabajo.

Si algo impide la instalación, como falta de permisos o necesitas contraseña de administrador o dudas si puedes instalar, déjalo y escríbeme un mensaje corto para el administrador IT. Si debo terminar la instalación yo, dime exactamente qué hacer. Finalmente dime qué configuraste, si debo abrir chat nuevo o reiniciar herramienta y cómo revertir todo si algo falla.
```
## Ejemplo

Lucía coordina la participación de su empresa en la feria de octubre. Desde el 21/9 la prepara con IA en modo Code en un chat en la carpeta del proyecto. El miércoles 7/10 ve que ha consumido el 85 % del límite semanal y la IA escribe precios en coronas en la invitación, aunque hace dos semanas se decidió que serían en euros. Lucía inserta el prompt y la IA escribe en `handoff.md`:

```text
### Objetivo
Preparar el stand para la feria del 20 al 23 de octubre e invitar clientes.

### Hecho
- Stand pedido, gráfica aprobada el 2/10.
- Texto de invitación listo, hay que cambiar precios a euros.

### Vigente
- Los precios solo en euros.
- La invitación solo para clientes que compraron en los últimos dos años.

### Queda
1. Clasificar 1.400 contactos de la feria pasada.
2. Corregir precios en la invitación y enviarla antes del 14/10.

### Archivos para continuar
- contactos-feria-2025.xlsx
- catalogo-2026.pdf
```

La IA añade que lo que más espacio ocupaba eran tres versiones completas del catálogo que Lucía fue subiendo. Lucía abre un chat nuevo, escribe “Continúa según `handoff.md`” y la IA corrige precios en la invitación a euros. Para clasificar contactos la IA lanza subagentes con modelo pequeño y devuelve solo el resultado: invitar personalmente a 230 clientes, enviar invitación por email a 760 y excluir 410 por no haber comprado o estar duplicados.
## Si se atasca

- **Se acabó su límite:** espere a que se renueve; verá la hora exacta en el mensaje de límite. Haga este workout primero antes de continuar en el chat viejo.
- **La IA dice que guardó el resumen pero no hay `handoff.md` en la carpeta:** probablemente trabaja en un chat común que no puede guardar archivos. Tiene el resumen en la respuesta; si quiere tenerlo en la carpeta, cambie a [Cowork o Code](card:when-chat-is-not-enough).
- **El chat nuevo no sabe algo acordado:** escríbalo y pídale que lo añada al resumen bajo Vigente.
- **El modelo barato comete errores en trabajo masivo:** revise al azar diez ítems. Precise la regla de clasificación y si no ayuda, use modelo potente solo en ítems dudosos.
## Qué estará listo

Tiene el trabajo en curso en un chat corto nuevo que continuó según el resumen, y ya no necesita el chat largo viejo. En Cowork o Code el resumen está en `handoff.md` y las reglas en `AGENTS.md` para que la IA ahorre tokens sola; en chat común la IA tiene las reglas en memoria o las recibió junto con el resumen en el chat nuevo.
## Qué sigue

Cuándo conviene un modelo potente lo verá en la [elección de modelo para su tarea](card:modely). Si vuelve al proyecto tras tiempo usted o un colega, déjele una [página inicial permanente del proyecto](card:project-start-here); en `handoff.md` quedará solo la tarea en curso.
## Markdown

**Qué es:** Un formato simple de texto plano en el que los encabezados, listas, enlaces y otras estructuras se escriben usando unos pocos caracteres comunes. Los archivos suelen tener la extensión `.md`.

**Qué no es:** No es un lenguaje de programación ni un formato exclusivo para desarrolladores.

**Por qué lo necesita el estudiante:** Permanece fácilmente legible y editable tanto para personas como para IA, y puede transferirse entre diferentes herramientas.

## Prompt

**Qué es:** Instrucción para una interacción específica con la IA.

**Qué no es:** No es lo mismo que un contexto a largo plazo, un asistente almacenado o un agente.

**Por qué lo necesita el estudiante:** Inicia el ejercicio y guía su desarrollo; no es el contenido principal de aprendizaje.

## Subagente

**Qué es:** Un agente independiente que el agente coordinador crea para una tarea parcial específica. Recibe su propia asignación y contexto, trabaja por separado y devuelve el resultado al coordinador.

**Qué no es:** No es simplemente una bifurcación de una conversación. Un fork crea una nueva rama para una persona; el subagente puede ser iniciado, dirigido e integrado en el resultado común por el propio coordinador.

**Por qué el estudiante lo necesita:** Ayuda a distinguir el trabajo manual paralelo en varios chats de una configuración de agentes, en la que la delegación y el seguimiento de tareas parciales los asume el coordinador.

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
