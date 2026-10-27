# Configure un hook: revisión de documentos que la IA no pasará por alto

Antes de que la IA le informe que ha terminado, revisará cada documento que haya escrito en la carpeta.

## Configure un hook: revisión de documentos que la IA no pasará por alto

**Dificultad: media.**\
**Tiempo: aproximadamente 15 minutos** con la carpeta donde la IA escribe documentos.
## Para qué sirve

Un cliente recibió el martes una oferta en la que quedó una línea con su margen de cálculo interno. La instrucción “no incluir margen en la oferta” estaba en las reglas de la IA, pero la pasó por alto tras un trabajo largo.

El hook es un paso que la herramienta ejecuta automáticamente cada vez que la IA termina un trabajo, por lo que la revisión se realiza incluso si la IA olvida la regla.
## Qué preparar

- una carpeta donde la IA escribe documentos directamente en archivos, por ejemplo ofertas en Word,
- reglas que la IA a veces incumple en esos documentos,
- IA en [modo](glossary:workmode) Code que trabaja con archivos en el ordenador.
## Cómo hacerlo

1. Seleccione con la IA las reglas que el hook debe supervisar. Inserte el prompt en la IA en modo Code abierta en la carpeta con los documentos; si la herramienta pide permiso, concédalo.
2. Revise lo que la revisión encontró en documentos antiguos; la IA solo los lee. Si la revisión informa algo innecesario, dígaselo a la IA y ella lo ajustará.
3. En el próximo trabajo que la IA realice en la carpeta, verifique que al final aparezca una línea con el resultado de la revisión. Lo que la revisión detecte, la IA lo corregirá antes de decir que ha terminado.

La revisión debe incluir reglas que se puedan verificar con precisión: una palabra que no debe aparecer en el documento o un dato que no debe faltar.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA en modo Code, abierta en su carpeta:

Configura en esta carpeta un hook: una revisión de documentos que esta herramienta ejecutará automáticamente cada vez que termines un trabajo. Si aquí no se pueden ejecutar hooks, por ejemplo en Cowork o en el chat normal, dímelo y no configures nada.

Primero propón reglas para la revisión. Revisa si hay un archivo AGENTS.md en la carpeta y los documentos aquí, y sugiere hasta cinco reglas que se puedan verificar con precisión: una palabra o dato que no debe estar o faltar en el documento. Por ejemplo, “La oferta no contiene margen ni precio de compra.” Pregúntame cuáles quiero y añade también las que yo te diga.

Convierte las reglas aprobadas en una revisión en un script que lea también documentos Word y funcione sin instalar programas adicionales. Guarda el script en una subcarpeta llamada control y las reglas en un archivo separado junto a él, para que una nueva regla no requiera aprobación del hook. Añade en AGENTS.md dónde está la revisión para poder modificarla en otro chat; si no hay AGENTS.md en la carpeta, créalo.

Luego ejecuta la revisión una vez en todos los documentos que ya hay en la carpeta y muéstrame lo que encontró. No corrijas nada en ellos, podrían haber sido enviados a clientes. Solo después activa el hook que supervisa solo los documentos nuevos o modificados desde entonces.

Configura el hook para que ejecute la revisión siempre que termines un trabajo. Si la revisión encuentra algo, que te devuelva el trabajo para que corrijas el error antes de decirme que terminó. Si el error persiste tras tu corrección, que te deje continuar. Cada vez que el hook revise un documento, que imprima automáticamente una línea con el resultado, por ejemplo “Revisión: 2 documentos correctos”, y si queda algún error, también qué quedó. Si debo aprobar el hook o la carpeta en la herramienta, dime exactamente dónde. Si el hook solo empieza a funcionar en un chat nuevo, avísame.

Si luego te digo una regla nueva, añádela a la revisión.

## En su herramienta

### Microsoft Copilot
Microsoft no indica que Copilot pueda ejecutar hooks. Guarde las reglas de revisión en Custom instructions (Configuración y más, Configuración de chat, Personalización) y al final del trabajo escriba “Revisa el documento según mis reglas”. Configure el hook en una herramienta con modo Code, por ejemplo Claude Code o Codex en la aplicación ChatGPT; pida ayuda al administrador de TI.

### ChatGPT
El hook lo configura Codex: en la aplicación ChatGPT para ordenador cambie a Codex, elija abrir carpeta y pegue el prompt. Codex ejecutará el hook cuando marque la carpeta como confiable y apruebe el hook; la IA le indicará dónde. En el chat normal de ChatGPT las reglas de revisión van en Custom instructions (Configuración, Personalización).

### Claude
El hook lo configura Claude Code: en la aplicación Claude para ordenador cambie a Code, seleccione la carpeta y pegue el prompt; la IA escribirá el hook en la configuración automáticamente. Cowork solo ejecuta hooks como parte de un plugin, por eso haga el ejercicio en Claude Code. En el chat normal de Claude las reglas de revisión van en instrucciones del proyecto (Set project instructions).

### Gemini
La aplicación Gemini no trabaja con carpetas en el ordenador, por lo que no puede configurar hooks. Guarde las reglas de revisión como skill (escriba “Guárdalo como skill”) y solicite la revisión al final del trabajo. Configure el hook en una herramienta con modo Code, por ejemplo Claude Code o Codex en ChatGPT; pida ayuda al administrador de TI.
## Qué es un hook

Hook, en inglés hook, es un paso que la herramienta con IA ejecuta automáticamente en un momento dado del trabajo, por ejemplo al inicio o al terminar. La regla en `AGENTS.md`, archivo con instrucciones para la IA en su carpeta, la IA la lee pero puede pasarla por alto en trabajos largos. El hook no depende de la atención de la IA.

La revisión la escribe la IA como un script, es decir, un programa corto que recorre los documentos y muestra lo que no encaja. El script reconoce solo cosas que se pueden verificar con precisión, como una palabra prohibida o un dato faltante. No detecta si los números coinciden con las bases; para eso está la [revisión de resultados](card:kontrola-vysledku).

El hook se guarda en la configuración de la herramienta en esta carpeta, por lo que aplica a cada trabajo de la IA en ella. Los documentos que escriba usted mismo los revisará si le dice a la IA “Revisa la carpeta”. El chat normal ni Cowork configuran hooks automáticamente; cómo cambiar a Code lo muestra la tarjeta [Chat, Cowork o Code](card:when-chat-is-not-enough). Si no tiene modo Code, guarde las reglas de revisión en las instrucciones de su herramienta y pida la revisión al final del trabajo, como muestra el bloque En su herramienta.
## Ejemplo

Tereza prepara ofertas para eventos corporativos en una empresa de catering. El lunes 19/10 configura en la carpeta `Ofertas 2026` un hook con dos reglas: la oferta no contiene margen ni precio de compra y la oferta indica hasta cuándo es válida. La primera revisión analiza 23 documentos y muestra:

```text
Revisión: 23 documentos, 3 hallazgos
- Oferta Panadería Novák.docx: falta la fecha de validez de la oferta.
- Oferta Cristalería Horák.docx: falta la fecha de validez de la oferta.
- Oferta Taller Dvořák.docx: en la tabla de precios hay una línea “Margen 18 %”.
```

El miércoles 21/10 Tereza introduce una oferta para la fiesta navideña de 80 personas desde el correo del cliente y el cálculo interno. La IA copia a la tabla también la columna con el precio de compra. La revisión la detecta al final del trabajo y devuelve el trabajo a la IA, que borra la columna. Luego Tereza recibe la oferta terminada con la línea “Revisión: 1 documento correcto”.
## Si se atasca

- **La IA dice que no puede configurar el hook:** probablemente está en el chat normal o en Cowork. Cambie a [modo Code](card:when-chat-is-not-enough) y abra la carpeta allí.
- **No aparece la línea con el resultado o el hook da error:** escriba a la IA: “El hook no se ejecutó correctamente. Averigua por qué y corrígelo; si debo aprobarlo, dime dónde.”
- **La revisión reporta errores que no son errores:** la regla es demasiado amplia, por ejemplo la palabra “margen” en una frase sobre beneficios para el cliente o la fecha de validez en un documento que no es una oferta. Dígale a la IA que restrinja la revisión para esa regla.
- **La revisión no supervisa documentos que escribe usted mismo:** el hook se ejecuta cuando la IA termina un trabajo. Dígale a la IA “Revisa la carpeta” para que también los revise.
## Qué tendrá listo

En la carpeta tiene un hook que tras cada trabajo con la IA revisa los documentos nuevos y modificados según sus reglas, y sabe qué encontró la revisión en documentos antiguos. En el próximo trabajo verá una línea con el resultado de la revisión y la IA corregirá el error detectado antes de mostrarle el trabajo terminado. La IA añadirá una nueva regla a la revisión cuando se la indique.
## Qué sigue

Los números y afirmaciones que el script no puede verificar con precisión déjelos que la IA los compare con las bases en la [revisión de resultados](card:kontrola-vysledku). Si quiere revisar toda la carpeta sin hacer trabajos en ella, por ejemplo cada lunes por la mañana, configure una [tarea programada](card:recurring-ai-task).
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
