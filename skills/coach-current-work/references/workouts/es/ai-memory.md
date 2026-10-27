# Organice la memoria de la IA: qué recuerda de usted entre chats

La IA revisa lo que recuerda de usted, corrige lo obsoleto y elimina lo incorrecto, para que el nuevo chat parta de su estado actual.

## Organice la memoria de la IA: qué recuerda de usted entre chats

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con la IA que usa desde hace unas semanas.
## Para qué sirve

El proyecto de la nueva tienda online terminó en septiembre, pero la IA sigue recordándolo en
sugerencias de correos y considera sus fechas. Además, le pone todo en una tabla,
aunque la tabla era solo para un informe.

La IA guarda en su [memoria](glossary:memory) lo que descubre sobre usted y no sabe por sí sola qué ya terminó.
Si de vez en cuando le muestra lo que sabe, la IA puede corregirlo en minutos.
## Qué preparar

- La IA que usa en el trabajo desde hace unas semanas,
- la configuración de memoria en su herramienta; dónde está, lo muestra el bloque “En su herramienta”.
## Cómo hacerlo

1. Pegue el prompt en un chat nuevo y vea qué sabe la IA sobre usted. Para
   cada registro sugerirá si conservarlo, corregirlo o eliminarlo.
2. Dígale a la IA qué sugerencias son válidas, por ejemplo “sí, excepto el punto 3”, y ella hará los cambios
   en la memoria. Revise también la lista en la configuración, la IA puede no mostrar todo.
3. En un chat nuevo pregunte sobre algo que corrigió. Si la IA responde con información antigua,
   dígale qué es correcto o elimine el registro en la configuración.

Para registros dudosos, ayuda preguntar si seguirán siendo válidos dentro de un mes.
## Ejercicio de IA

Pegue este [prompt](glossary:prompt) en la IA que usa en el trabajo:

Repasa conmigo lo que recuerdas sobre mí y organízalo.

Enumera todo lo que tienes almacenado en memoria o sabes de chats anteriores. Divide en cuatro grupos: quién soy y qué hago, cómo quiero las respuestas y cómo trabajar conmigo, en qué estoy trabajando, dónde encontrar qué (documentos, herramientas, personas). Escribe cada ítem en una frase corta y añade si está en memoria o lo sabes de un chat previo.

Para cada ítem sugiere si conservarlo, corregirlo (escribe la versión nueva) o eliminarlo. Sugiere eliminar lo obsoleto, mal entendido o que solo aplicaba a una tarea. Fusiona ítems que digan lo mismo. Si no sabes si algo sigue vigente, pregúntame.

Cuando te diga qué es válido, haz los cambios en memoria. Lo que no puedas cambiar, indícame dónde encontrarlo en la configuración. Para ítems de chats previos que ya no valen, guarda en memoria lo que sí vale ahora y, si sabes de qué chat vienen, dímelo.

Finalmente, guarda esta regla en memoria, y si ya tienes una parecida, reemplázala: “Cuando te corrija y la corrección deba aplicarse siempre, guárdala en una frase: qué vale, por qué y cuándo usarla. Si hay un registro antiguo similar, reescríbelo para que no haya dos versiones.” Luego muéstrame cómo queda la memoria.

## En su herramienta

### Microsoft Copilot
En Copilot Chat en `copilot.cloud.microsoft` abra arriba a la derecha
Configuración y más, Configuración de chat, Personalización y en el mosaico Recuerdos guardados elija Administrar recuerdos guardados. Puede eliminar un recuerdo con el icono de la papelera o todos con el botón Eliminar todos los recuerdos. Si le dice a Copilot en el chat que olvide algo, lo elimina él mismo.

### ChatGPT
En Configuración, Personalización, Memoria (en la versión en español en el mismo lugar) hay un resumen (Memory summary), donde puede corregir una línea o elegir No mencionar esto de nuevo, o una lista de Recuerdos guardados con opción de borrar. Codex tiene memoria propia que puede borrar en el mismo lugar con Eliminar recuerdos de Codex; añada al prompt “No modifiques la memoria, lo que debe valer siempre escríbelo en `AGENTS.md`.”

### Claude
En Configuración, Memoria está dividida por temas (Topics): abra un tema, corríjalo con el icono de editar o elimínelo con Eliminar. En planes empresariales la habilita el propietario de la organización y usted la activa. Claude Code tiene memoria para cada proyecto en archivos con lista `MEMORY.md`, por eso ejecute el prompt en cada proyecto; la carpeta se abre con el comando `/memory`.

### Gemini
Gemini con cuenta laboral no tiene memoria, por lo que no guarda nada de los chats. Lo que debe valer siempre está en las instrucciones del robot Gem (Gems). Pegue el prompt en el chat junto con las instrucciones del Gem que usa más frecuentemente: la IA las revisará igual que la memoria y guardará la versión corregida en el Gem.
## Qué es la memoria de IA

La memoria de IA, en configuración Memory o Memoria, es el lugar donde la IA guarda lo que descubre sobre usted en los chats: quién es, cómo quiere las respuestas y en qué trabaja. Algunas herramientas leen también sus chats previos, por lo que la memoria puede incluir información que solo valía para una tarea.

La IA usa la memoria como referencia y elige de ella por sí misma. Lo que debe valer en cada chat, póngalo en [Instrucciones personalizadas](card:custom-instructions), es decir, instrucciones fijas en configuración que usted escribe.

Herramientas que trabajan con carpetas en su computadora suelen guardar la memoria en archivos de texto simples. La IA los modifica directamente y usted puede abrirlos y leerlos.
## Que la memoria se mantenga sola

La regla al final del prompt asegura que la IA guarde cada corrección nueva en una frase con motivo y reemplace la versión anterior, evitando duplicados en la memoria.

Cuando la IA trabaja en [modo](glossary:workmode) Code con carpeta en su computadora y la memoria está en archivos, la limpieza puede hacerse sola una vez al mes. Déle esta tarea y pídale que cree la tarea programada:

```text
Cada primer lunes del mes a las 9:00 revisa tu memoria. Fusiona registros que digan lo mismo. Borra registros que contradigan otros más recientes o que sean de cosas terminadas. Si dudas, deja el registro y pregúntame. Si la herramienta mantiene la memoria sola y no se deben modificar los archivos manualmente, no cambies nada y solo dime qué no encaja. Al final dame un resumen: qué se fusionó, qué se borró y qué preguntas.
```

La tarea se ejecutará solo si la computadora está encendida y la aplicación abierta. Si ya tiene una [revisión semanal](card:weekly-ai-review), puede añadir la limpieza de memoria allí en vez de tarea separada. En un chat normal basta con pegar el prompt del ejercicio de IA cada pocos meses.
## Ejemplo

Klára Novotná coordina proyectos en una empresa que fabrica muebles de oficina. La nueva tienda online se lanzó en septiembre y desde octubre Klára prepara un stand para la feria de primavera. El martes 3/11/2026 pega el prompt y la IA muestra, entre otras cosas:

```text
### Cómo quiero las respuestas
- Quiere respuestas cortas, máximo cinco puntos. Guardado en memoria, fusionado de dos registros. Sugerencia: conservar.
- Quiere resultados siempre en tabla. Guardado en memoria. Sugerencia: eliminar, la tabla era solo para el informe de agosto.

### En qué trabajo
- Dirige el lanzamiento de la nueva tienda online con fecha 30/9. Guardado en memoria. Sugerencia: corregir a “La tienda online está activa desde septiembre, ahora prepara el stand para la feria.”
- Gestiona la reclamación de una entrega de sillas. De chat previo “Reclamación silla”. Sugerencia: guardar que la reclamación está cerrada.

### Dónde encontrar qué
- Las fechas del proyecto están en la tabla “Cronograma tienda online”. Guardado en memoria. Sugerencia: corregir a la tabla “Feria 2027”.
```

Klára responde “sí, excepto la tabla: quiero seguir viendo los plazos en tabla”. La IA corrige el registro de la tabla, corrige dos más y guarda que la reclamación terminó. En un chat nuevo Klára escribe “prepara un correo al proveedor del stand con lo que necesitamos para fin de noviembre” y recibe un correo breve sin mención de la tienda online.
## Si se atasca

- **La IA dice que no recuerda nada o muestra dos frases generales:** probablemente la memoria está desactivada o casi vacía y no hay nada que limpiar. Actívela en configuración y si no puede en cuenta empresarial, guarde instrucciones fijas en [Instrucciones personalizadas](card:custom-instructions).
- **La IA dice que borró un registro pero sigue en configuración:** elimínelo directamente en la lista de memoria. En ChatGPT borrar el chat no elimina el registro guardado.
- **El chat nuevo sigue usando información antigua:** la IA probablemente la toma de un chat previo, no de la memoria. Dígale qué es válido ahora para que lo guarde; en ChatGPT elija No mencionar esto de nuevo en el resumen de memoria para la información antigua. Si sigue reapareciendo, borre el chat de donde la toma.
- **La IA muestra pocos ítems pero hay más en configuración:** pídale que revise cada grupo por separado. Lo que no muestre, corríjalo o elimínelo directamente en configuración.
## Qué estará listo

En la memoria de su IA queda solo lo que vale hoy y en un chat nuevo verificó que la IA parte de la versión corregida. La IA tiene guardada la regla para registrar futuras correcciones sin duplicados.
## Qué sigue

Las reglas para que la IA trabaje en todo el proyecto las escribirá en el [archivo de reglas para IA](card:agents-md). Cuando quiera limpiar regularmente toda la configuración de IA, no solo la memoria, continúe con la [revisión semanal](card:weekly-ai-review).
## Memoria de IA

**Qué es:** Un lugar donde la IA guarda lo que aprende sobre la persona en los chats: correcciones, preferencias, nombres y trabajo en progreso. En chats nuevos, la IA selecciona automáticamente lo que considera relevante. Dónde encontrar la memoria y quién puede activarla varía según la herramienta.

**Qué no es:** No son instrucciones permanentes escritas por la persona (Instrucciones Personalizadas), ni el historial de chats. Lo que debe aplicarse en cada chat pertenece a las instrucciones, porque la IA usa de la memoria solo lo que considera importante.

**Por qué lo necesita el estudiante:** Ayuda a decidir qué recordar, qué incluir en las instrucciones y cuándo limpiar la memoria para que la IA no trabaje con información obsoleta.

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
