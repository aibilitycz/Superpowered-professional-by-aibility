# Configure Custom Instructions: directivas permanentes para cada chat

La IA crea directivas permanentes a partir de cinco de tus respuestas y cada nuevo chat te responde según tus preferencias.

## Configure Custom Instructions: directivas permanentes para cada chat

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con una tarea real para verificar.
## Para qué sirve

El lunes quieres extraer cinco tareas para el equipo de las notas de la reunión y la IA las oculta hasta el tercer párrafo. Añades "sin introducción, solo puntos, soy coordinadora de proyectos" y el miércoles en un chat nuevo escribes lo mismo otra vez.

Custom Instructions son directivas personalizadas en la configuración de la IA que la IA recibe en cada chat nuevo, así que solo escribes una vez quién eres y cómo quieres que te responda.
## Qué preparar

- La IA que usas en el trabajo,
- las directivas que escribes repetidamente, por ejemplo "breve" o "sin introducción",
- una tarea de esta semana, por ejemplo el acta de una reunión; con ella verificarás las instrucciones.
## Cómo hacerlo

1. Abre un chat nuevo y pega el prompt del ejercicio de IA. La IA preguntará lo que no sabe de ti y escribirá las Custom Instructions.
2. Lo que no encaje, díselo a la IA, por ejemplo que usas el tratamiento de cortesía. La versión final pégala en el campo de directivas personalizadas; dónde está, muestra el bloque "En tu herramienta".
3. En un chat nuevo introduce la tarea preparada sin explicarte. Si la respuesta no encaja, dile a la IA qué debe hacer diferente la próxima vez y ella lo recordará.
## Ejercicio de IA

Pega este [prompt](glossary:prompt) en la IA que usas en el trabajo:

Escríbeme Custom Instructions: directivas breves que pondré en la configuración de esta herramienta de IA para que cada chat nuevo sepa quién soy y cómo responderme.

Necesitas de mí estas cinco cosas:
1. Mi rol y responsabilidades.
2. El sector y para quién trabajo.
3. En qué me ayuda la IA más frecuentemente en el trabajo.
4. La longitud y formato que quiero en las respuestas.
5. Qué no quiero en las respuestas.

Si sabes algo de mí por memoria o chats anteriores, primero escribe lo que sabes y pregunta solo lo que falta. Pregunta lo que falta de una vez, responderé con pocas palabras. Si ya tengo directivas en la configuración, úsalas como base.

Escribe las instrucciones en dos partes con títulos “Quién soy:” y “Cómo responderme:”. En la primera pon rol, sector, para quién trabajo y en qué me ayuda la IA; en la segunda, idioma, longitud y formato de respuestas y qué no quiero en ellas.

Cada directiva debe ser una frase que permita verificar si la respuesta la cumple. Cambia consejos generales como “escribe breve” por directivas concretas, por ejemplo “responde con máximo cinco puntos”. No incluyas fechas, números, nombres de clientes ni detalles de un proyecto en las instrucciones. Mantén todo el texto bajo 1.500 caracteres para que quepa en ChatGPT gratuito.

Al final de “Cómo responderme:” añade la directiva: “Si te corrijo y la corrección debe aplicarse siempre, guárdala en memoria. Si no tienes memoria activada, escríbeme la frase que añadiré a las Custom Instructions.”

Finalmente, muéstrame las instrucciones en un bloque para copiar y pregúntame qué no encaja. Aplica las correcciones y muéstrame la versión corregida completa.

## En tu herramienta

### Microsoft Copilot
Las directivas personalizadas están en Copilot Chat en `copilot.cloud.microsoft` bajo los tres puntos arriba a la derecha: Configuración y más, Configuración de chat, Personalización, Directivas personalizadas. Pega las instrucciones con Editar directivas y Guardar directivas. Si le dices a Copilot “recuerda…”, lo guarda en memoria. Si falta el campo, pega las instrucciones en las directivas del Bloc de notas (Bloc de notas, Nuevo bloc).

### ChatGPT
En el menú de cuenta (clic en tu nombre) abre Settings, luego Personalization y pega las instrucciones en el campo Custom Instructions; el interruptor Enable customization debe estar activado. En la versión en español los ítems están en el mismo lugar, solo en español. Las cuentas de pago y empresariales aceptan 5.000 caracteres, la gratuita 1.500. La memoria está en Settings, Personalization, Memory.

### Claude
Abajo a la izquierda haz clic en tus iniciales, luego en Settings. El campo se llama Instructions for Claude y aplica en todas las conversaciones. La memoria está en Settings bajo Memory; en planes empresariales Team y Enterprise la activa el propietario de la organización.

### Gemini
Las directivas permanentes las pones en Gemini en el robot Gem, porque la cuenta de trabajo no tiene directivas ni memoria: en `gemini.google.com` abre Robots Gem, Nuevo Gem, pega las instrucciones y guarda. Los chats nuevos ábrelos en ese Gem. La frase que la IA te dé para las Custom Instructions añádela en las instrucciones del Gem en la sección Mis robots Gem.
## Qué son las Custom Instructions

Tu herramienta usa las Custom Instructions en cada chat nuevo. La IA las conoce aunque no las menciones en el chat, y si ya tienes algunas, el prompt de este ejercicio las toma en cuenta. Valen hasta que las cambies en configuración.

Además, la mayoría de herramientas de IA tienen memoria donde la IA guarda cosas de tus chats y las actualiza continuamente. Sirve para correcciones acumuladas durante el trabajo. Lo que debe valer siempre, trasládalo de vez en cuando a las Custom Instructions porque estas no cambian solas.

Solo pon en las instrucciones lo que vale en cada chat. Fecha, número o nombre de cliente dáselos a la IA directamente en el chat con la tarea, si no los arrastraría a las respuestas donde no deben estar.
## Plantilla de Custom Instructions

La plantilla añade a las instrucciones reglas para que la IA busque en la web temas actuales y te avise si no está segura.

No tienes que rellenar nada, la IA completará los corchetes con lo que sabe de ti y preguntará lo que no sabe. Lo mejor es pegarla justo después del ejercicio en el mismo chat, antes de guardar las instrucciones en configuración. Si ya las tienes guardadas, abre un chat nuevo; la IA las verá. En ambos casos pega este prompt:

```text
Añade a mis Custom Instructions las reglas de esta plantilla. Completa los corchetes con lo que sabes de mí y pregunta lo que no sabes. No dupliques reglas que ya tengo y si alguna regla de la plantilla contradice la mía, deja la mía. Deja la directiva sobre guardar correcciones en memoria al final. Mantén todo bajo 1.500 caracteres y muéstrame el bloque para copiar.

Quién soy:
[rol] en [nombre de la empresa], principalmente gestiono [dos o tres áreas].

Cómo responderme:
- Responde en checo y [tutea o trate de usted] conmigo.
- Empieza con el resultado o respuesta, detalles después. Sin introducción ni resumen final.
- Explica con una frase términos que pueda no conocer.
- Sobre temas actuales, como normativas, precios o novedades del sector, busca en la web y cita fuentes.
- Si no estás seguro, dilo y señala qué hay que verificar. No inventes cifras.
- Nunca envíes correo o mensaje por mí sin mi confirmación explícita.
- Bajo documentos largos o tablas añade una frase sobre lo que falta.
```

Pega todo el bloque que te devuelva la IA en el campo de directivas personalizadas. Si ya tienes instrucciones, reemplázalas.

La línea sobre el correo es una salvaguarda: la IA con acceso a tu correo puede enviarlo y esta línea evita que lo haga sin tu permiso. Si no tiene acceso, no importa.

Si la IA no cita fuentes en temas actuales, dile “búscalo en la web”. Si aún no busca, activa la búsqueda web; en algunas herramientas está bajo el botón + junto al campo de mensaje, en otras en configuración. En cuentas empresariales el administrador puede desactivarla.
## Que la IA recuerde correcciones sola

La directiva al final de las instrucciones asegura que si corriges a la IA y la corrección debe aplicarse siempre, la IA la guarda en memoria. No necesitas comprobar si tienes memoria activada. En cuentas empresariales la activa el administrador y si la IA no tiene memoria, te escribirá la frase para añadir a las Custom Instructions.

En unos meses la memoria acumula tantas correcciones que vale la pena pasarlas a las instrucciones. Abre un chat nuevo y escribe:

```text
Toma mis Custom Instructions actuales y añade lo que guardaste en memoria sobre mí y que vale para todos los chats. Fusiona directivas iguales y elimina las que ya no valen. Mantén el resultado bajo 1.500 caracteres y muéstrame los cambios.
```

Luego pega la nueva versión en configuración en lugar de la antigua.
## Ejemplo

Jana coordina proyectos en una empresa que implementa sistemas de almacén para e-commerce. El lunes 12/10/2026 pega el prompt en la IA que usa en el trabajo. Esta recuerda de chats anteriores que Jana coordina proyectos y solo pregunta la longitud de respuestas y qué no quiere en ellas. Jana responde “breve, en tareas siempre quién y para cuándo, y no expliques términos de gestión de proyectos”. La IA escribe:

```text
Quién soy:
Coordino proyectos de implementación de sistemas de almacén para e-commerce. Superviso plazos, proveedores y reuniones. La IA me ayuda principalmente con actas de reuniones, correos a proveedores y reportes para dirección.

Cómo responderme:
- Escribe en checo y empieza directamente con el resultado, sin introducción ni resumen final.
- Responde con máximo cinco puntos o cinco frases si no quiero más.
- Escribe las tareas en forma: quién, qué, para cuándo.
- No expliques términos de gestión de proyectos, los conozco.
- Si te corrijo y la corrección debe aplicarse siempre, guárdala en memoria. Si no tienes memoria activada, escríbeme la frase que añadiré a las Custom Instructions.
```

Jana pega las instrucciones en configuración. El martes abre un chat nuevo, pega las notas de la reunión con el proveedor y solo escribe “haz un acta para el equipo”. Recibe cinco tareas en forma quién, qué, para cuándo y sin introducción. La fecha de inicio 2/11 la tomó de las notas del martes; no hay fecha en las instrucciones, así que no se mezcla con otro acta al mes siguiente. En “quién” solo pone iniciales, así que Jana escribe “escribe nombres completos”. La IA lo guarda en memoria y el acta del jueves ya tiene nombres completos.
## Si te atascas

- **La IA responde igual que antes:** abre un chat nuevo y verifica en configuración que las instrucciones se guardaron. En ChatGPT el interruptor Enable customization debe estar activado, en Gemini abre un chat nuevo directamente en el robot Gem.
- **En cuenta empresarial falta el campo para instrucciones:** probablemente el administrador lo desactivó. Guarda las instrucciones en un [proyecto](card:asistent) donde valen para todos los chats dentro.
- **Las instrucciones no caben en el campo:** dile a la IA: “Reduce las instrucciones a menos de 1.500 caracteres. Fusiona directivas iguales y elimina las que no cambian la respuesta.”
- **La IA cumple la directiva solo a veces:** probablemente es general, como “escribe breve”. Pide a la IA que la convierta en una directiva concreta, por ejemplo “máximo cinco puntos”, y pega la nueva versión en configuración.
## Qué tendrás listo

En la configuración de tu IA hay Custom Instructions sobre tu trabajo y cómo quieres las respuestas. En un chat nuevo con una tarea real viste que la IA responde con la longitud y formato que configuraste. Si la corriges, guardará la corrección en memoria o te escribirá la frase para añadir a las instrucciones.
## Qué sigue

El estilo con que la IA escribe correos y publicaciones no cabe en unas pocas líneas de instrucciones. La IA lo redacta en un documento aparte según la tarjeta [Tone of voice](card:tone-of-voice). Guarda directivas para un proyecto o trabajo repetido en un [proyecto](card:asistent). Cuando trabajes con IA en modo Cowork o Code, es decir directamente con una carpeta en tu ordenador, haz que tome las instrucciones en el archivo `AGENTS.md` según la tarjeta [Reglas para IA en un solo archivo](card:agents-md).
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
