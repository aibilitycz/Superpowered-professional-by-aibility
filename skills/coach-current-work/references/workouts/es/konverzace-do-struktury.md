# Procese la transcripción de la reunión: decisiones y tareas del proyecto

La IA extrae de la transcripción de la reunión un breve acta con decisiones y tareas para el proyecto y procesa las siguientes reuniones igual.

## Procese la transcripción de la reunión: decisiones y tareas del proyecto

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con la transcripción de una reunión.
## Para qué sirve

El miércoles tuvo una reunión de una hora sobre el nuevo tarifario con finanzas y
marketing y después tiene una transcripción de veinte páginas. El viernes un colega de
ventas le pregunta cuál es el máximo descuento que puede ofrecer a grandes clientes, y usted no está
seguro si el 8 % fue un acuerdo o solo una propuesta.

Un acta breve con decisiones y tareas la encontrarán usted, su colega y el nuevo chat con IA
en la carpeta del proyecto en un minuto, y las palabras exactas quedarán en la transcripción justo al lado.
## Qué preparar

- la carpeta del proyecto a la que pertenece la reunión,
- la transcripción de una reunión reciente como archivo o texto,
- IA en [modo Cowork o Code](glossary:workmode), o el proyecto en la IA que use.
## Cómo hacerlo

1. Abra la IA en modo Cowork o Code en la carpeta del proyecto, pegue el prompt y
   añada la transcripción. La IA guardará la transcripción en `prepisy`, el acta en `schuzky.md` y
   la regla en `AGENTS.md`.
2. En el punto más importante, escriba “Muéstrame el texto exacto de la
   transcripción.” Si es sobre dinero o fecha, busque ese momento en la transcripción
   (Ctrl+F) y léalo usted mismo.
3. En un chat nuevo en la misma carpeta pregunte “¿Quién debe hacer qué y para cuándo?”
   La IA debería responder según el acta.

Las propuestas que nadie aceptó no deben incluirse en el acta.
## Ejercicio de IA

Pegue este [prompt](glossary:prompt) en la IA en modo Cowork o Code, abierta en su carpeta:

Procese la transcripción de la reunión para este proyecto. Le adjunto la transcripción o le diré dónde está en el ordenador. Si en este entorno no puede guardar archivos en la carpeta del proyecto, dígamelo de inmediato para cambiar a Cowork o Code.

Guarde la transcripción sin cambios en la subcarpeta prepisy dentro de la carpeta del proyecto y nómbrela con la fecha y tema de la reunión, por ejemplo 2026-10-07-porada-cenik. Mueva el archivo tal cual, con su extensión, por ejemplo .docx. Si le di la transcripción como texto, guárdela como archivo de texto sin acortar ni modificar nada, para conservar tiempos y nombres en los turnos.

Luego escriba un acta breve basada en la transcripción y añádala al principio del archivo schuzky.md en la carpeta del proyecto. Si el archivo no existe, créelo. El acta debe tener esta forma:

### RRRR-MM-DD: tema de la reunión
Quién estuvo: nombres.
Decisiones:
- qué se decidió y desde cuándo es válido.
Tareas:
- quién, qué y para cuándo.
Preguntas abiertas:
- qué quedó sin decidir y quién lo averiguará.
Transcripción: enlace al archivo en prepisy.

Incluya en decisiones y tareas solo lo acordado en la reunión. Omitir propuestas no aceptadas. Si falta persona o fecha en una tarea, escriba “no indicado”. Añada entre paréntesis el tiempo o lugar en la transcripción donde se mencionó cada decisión y tarea.

Finalmente añada al archivo AGENTS.md en la carpeta del proyecto la regla: “Cuando reciba una transcripción de reunión, guárdela sin cambios en prepisy y añada arriba en schuzky.md un acta con la misma forma que antes: solo lo acordado, con tiempo en la transcripción y datos faltantes como ‘no indicado’. Responda preguntas sobre tareas y decisiones según schuzky.md.” Si AGENTS.md no existe, créelo. Asegúrese de que se lea al comenzar cada trabajo en esta herramienta; en Cowork añádalo a las instrucciones de la carpeta.

Al final muéstreme el acta y dígame dónde guardó cada cosa.

## En su herramienta

### Microsoft Copilot
La transcripción de Teams está en la pestaña Recap del chat de la reunión. El acta
la guarda Cowork junto al interruptor Chat si el administrador lo activó: conecte la carpeta de
OneDrive con Add attachments y añada al final del prompt
“Lleve los actas en un documento Word.” Sin Cowork no use el prompt: cree
un notebook (Notebooks › New notebook) y ponga la frase del bloque Cuando no tiene Cowork ni
Code en More options › Instructions.

### ChatGPT
Codex trabaja con la carpeta: en la app ChatGPT para PC cambie a Codex,
seleccione abrir carpeta (open a folder) y pegue el prompt; las tareas programadas
están en Scheduled. Sin Codex el proyecto es un proyecto en ChatGPT: New
project, transcripciones con Add source, instrucciones en ••• › Project settings y invite colegas con Share.

### Claude
Cowork está en la app Claude para PC en planes de pago: elija la carpeta
al crear la tarea y la IA guardará el enlace a `AGENTS.md` en las instrucciones
de la carpeta. Las tareas programadas están en el panel izquierdo bajo Scheduled y solo corren con el PC encendido. Sin Cowork el proyecto es un proyecto en Claude: New Project,
transcripciones con +, instrucciones en Set project instructions y invite colegas con
Share project.

### Gemini
La transcripción de Google Meet es un documento en el Drive del organizador en la carpeta Meet
Recordings; Take notes for me aún no soporta checo. Gemini no trabaja con carpetas en PC,
el proyecto es un Gem: Gems › New Gem, transcripciones con Knowledge ›
Add from Drive. Guarde el acta con Share & export › Export to Docs y comparta el Gem con
colegas con Share.
## Si no tiene Cowork ni Code

Sin modo Cowork o Code procese las reuniones en el proyecto con su herramienta:
agregue las transcripciones y sus instrucciones valen para cada chat dentro. En
las instrucciones del proyecto escriba:

```text
De cada transcripción escriba un acta: decisiones, tareas con persona y fecha y preguntas abiertas. Solo lo acordado, con tiempo en la transcripción para cada punto.
```

Después de cada reunión añada la transcripción al proyecto y escriba “Haz acta de
la nueva transcripción”. Al preguntar “¿Quién debe hacer qué?” la IA responderá según las transcripciones.
Dónde encontrar el proyecto lo muestra el bloque En su herramienta, y cómo
[cambiar a Cowork o Code](card:when-chat-is-not-enough), tarjeta aparte.
## Qué es la transcripción de la reunión

La transcripción es el texto palabra por palabra de la reunión, normalmente con tiempo y nombre en
cada intervención. De una reunión de una hora salen decenas de páginas. La genera
la herramienta con la que graba la reunión. Dónde encontrarla en Teams y Google
Meet está en el bloque “En su herramienta”. Para otras herramientas:

- **Zoom:** está junto a la grabación en la nube como archivo de subtítulos `.vtt`,
  que la IA lee como texto. Cuando esté listo, recibirá un correo.
- **Plaud**, grabadora de bolsillo: en la app abra la grabación y
  exporte con el icono arriba a la derecha como transcripción en texto o Word.
- **tl;dv**, grabador de reuniones online: en la pestaña de transcripción copie
  con el botón de copiar y péguelo en el chat de la IA.

`schuzky.md` es un archivo de texto común en la carpeta del proyecto con actas de
todas las reuniones, la más reciente arriba. La extensión `.md` indica acta en
[Markdown](glossary:markdown), donde las almohadillas `###` al inicio de línea
indican título. En la subcarpeta `prepisy` están las transcripciones completas, un archivo por reunión.

`AGENTS.md` es un archivo con reglas para la IA en la misma carpeta. La IA en modo
Cowork o Code lo lee al iniciar cada trabajo y donde la herramienta lo necesite
lo configura según el prompt. Tras otra reunión basta añadir la transcripción al chat en la carpeta del proyecto y escribir “Procese la reunión según
`AGENTS.md`”.
## Que las reuniones se procesen solas

Si graba reuniones con frecuencia, basta descargar la transcripción y el resto lo hace
una tarea programada que la IA ejecuta cada día laboral por la tarde. Busca
transcripciones nuevas y procesa cada una en el proyecto correcto según la regla en
`AGENTS.md`. Ponga la tarea en la IA en modo Cowork o Code y pídale que cree la tarea programada; qué herramientas lo soportan está en el bloque
“En su herramienta”. En vez de “Proyectos” escriba la carpeta donde tiene los proyectos:

```text
Cada día laboral a las 17:00 revisa Descargas y busca transcripciones de reuniones. Para cada una reconoce por nombre y contenido a qué proyecto en la carpeta Proyectos pertenece. Si en schuzky.md de ese proyecto ya hay acta para esa reunión, salta la transcripción. Las demás mueve a la subcarpeta prepisy de ese proyecto y procesa según la regla en su AGENTS.md. Si no sabe dónde va la transcripción, déjela donde está. Al final dígame qué reuniones procesó y para qué transcripciones no sabe dónde van.
```

La tarea trabaja con archivos en su PC, por eso solo corre con el PC encendido y la app abierta.
## Ejemplo

Eva coordina la implementación del nuevo tarifario para clientes mayoristas. El
miércoles 7. 10. 2026 tiene una reunión online con Martín de finanzas y Petra de
marketing. Tras la reunión descarga la transcripción, abre la IA en la carpeta `novy-cenik`,
pone el prompt y arrastra la transcripción a la ventana. La IA la guarda como
`prepisy/2026-10-07-porada-cenik.docx` y añade a `schuzky.md`:

```text
### 2026-10-07: Reunión sobre nuevo tarifario
Quién estuvo: Eva, Martín (finanzas), Petra (marketing).
Decisiones:
- El descuento para grandes clientes será máximo 8 %. (12:40)
- El nuevo tarifario es válido desde 1. 1. 2027, los clientes lo recibirán el 1. 12. (31:05)
Tareas:
- Martín calculará márgenes para los nuevos precios antes del 14. 10. (18:20)
- Petra preparará un folleto para clientes, fecha: no indicado. (35:50)
Preguntas abiertas:
- ¿El nuevo tarifario aplica también para la tienda online? Lo averiguarán Eva y la gerente de la tienda.
- ¿Quién enviará el tarifario a los comerciales? Nadie se encargó en la reunión.
Transcripción: prepisy/2026-10-07-porada-cenik.docx
```

Eva escribe “Muéstrame el texto exacto sobre el descuento.” La IA muestra la frase del minuto 12:40,
donde Martín aprobó el 8 %. El viernes Eva en un chat nuevo en la misma
carpeta pregunta quién debe hacer qué y para cuándo. La respuesta correcta es: Martín
calcula márgenes para el 14. 10., falta fecha para el folleto de Petra. Si la IA pregunta qué reunión es, probablemente está trabajando fuera de la carpeta del proyecto.
## Si se atasca

- **La IA dice que guardó el acta pero no hay archivo `schuzky.md` en la carpeta:**
  probablemente trabaja en un chat común que no puede modificar archivos. Cambie a
  [Cowork o Code](card:when-chat-is-not-enough) y seleccione la carpeta
  del proyecto.
- **El acta incluye decisiones que no tomaron:** la IA confundió propuesta con
  acuerdo. Dígale qué es incorrecto para que corrija el acta y revise los demás
  puntos. Cómo verificar el resultado con la fuente está en
  [Verificación del resultado](card:kontrola-vysledku).
- **No tiene la transcripción:** en Teams la descarga el organizador, pídala.
  Si no se grabó la reunión, dígale o dicte a la IA lo que recuerda y el acta se generará igual.
- **La próxima vez la IA no usa la regla:** escriba “Procese la reunión según
  `AGENTS.md`”. Si no funciona, verifique que `AGENTS.md` esté en la carpeta del proyecto y que la regla esté dentro.
## Qué tendrá listo

Tendrá el acta de la reunión en `schuzky.md` en la carpeta del proyecto, la transcripción completa en
la subcarpeta `prepisy` y en `AGENTS.md` la regla para que la IA procese igual
cada reunión siguiente. El punto más importante lo verificó con el texto exacto de la transcripción y en un chat nuevo comprobó que la IA sabe quién debe hacer qué según el acta.
## Qué sigue

De la misma transcripción la IA puede preparar otros resultados además del acta, como un brief para
otra reunión o una respuesta al cliente. Procesa igual hilos largos de
comentarios o correos: en vez de transcripción le da el hilo.
Para reuniones de varios proyectos pida que le hagan
[una guía que la IA usará otra vez](card:create-skill-from-proven-process).
Si los colegas deben recibir los actas, continúe con
[una tarea programada](card:recurring-ai-task).
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
