# Guarde su tono de voz: su estilo de escritura en un archivo

La IA extrae de sus textos exitosos cómo escribe y la primera versión de cada correo suena como usted.

## Guarde su tono de voz: su estilo de escritura en un archivo

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con textos preparados.
## Para qué sirve

El jueves necesita escribirle al cliente que la entrega se pospone una semana. La IA escribe el correo en un minuto, pero empieza con un párrafo sobre lo mucho que valora la colaboración y termina con "No dude en contactarme". Usted no escribe así, y por eso reescribe el correo veinte minutos. La próxima semana pasa lo mismo en otro chat.

Cuando la IA recibe un archivo con su estilo y ejemplos, cambia una palabra en el correo en lugar de veinte minutos reescribiendo.
## Qué preparar

- 3 a 5 textos propios con los que esté satisfecho: correos, mensajes, publicaciones,
- un texto que necesite escribir esta semana, por ejemplo un correo al cliente,
- la IA que usa en el trabajo o la IA en [modo Cowork o Code](glossary:workmode).
## Cómo hacerlo

1. Inserte el prompt y añada sus textos, o deje que la IA los busque en el correo. La IA escribirá el estilo en `tone-of-voice.md`: lo guardará en la carpeta o lo ofrecerá para descargar en el chat.
2. Dígale a la IA qué no encaja, por ejemplo que usa el usted para la dirección. La IA anotará las correcciones; si el archivo está disponible para descargar, baje la última versión.
3. En un chat nuevo, escriba el correo sin el archivo, por ejemplo "Escribe al cliente que la entrega se pospone una semana." Luego adjunte el archivo: "Escríbelo de nuevo según este archivo."

Los nombres de clientes no deben incluirse en las reglas.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA que usa en el trabajo:

Escribe mi tono de voz: un archivo con el que cualquier IA escribirá como yo.

Revisa los textos que te adjunto o que encuentres en la carpeta donde trabajas. Todos son míos y me gustan. Si no te adjunto ninguno y tienes acceso a mi correo, busca en los correos enviados del último mes cinco textos largos que sean míos y muéstrame cuáles elegiste. Si hay menos de tres, dímelo y pide más.

Escribe mi estilo en el archivo tone-of-voice.md en estas secciones:

### En resumen
Tres frases sobre cómo sueno y a quién escribo más frecuentemente.

### Frases y párrafos
Qué tan largas son mis frases y párrafos, cómo empiezo y cómo termino el texto.

### Tratamientos
A quién tuteo, a quién trato de usted y cómo saludo.

### Palabras
Palabras y expresiones que uso. Debajo, palabras y expresiones que nunca escribo.

### Según tipo de texto
Qué cambia en un correo, en un mensaje a colegas y en una publicación. Omite tipos de texto que no aparezcan en los ejemplos.

### Ejemplos
Tres fragmentos cortos de mis textos que muestran mejor mi estilo.

### Revisión
Una pregunta que te harás sobre cada texto antes de dármelo.

Apoya cada regla en una frase concreta de mis textos. Considera regla solo lo que se repite en al menos dos textos. Describe cómo escribo, no adivines mi personalidad. No traslades nombres, números ni fechas de los textos a las reglas y reemplázalos en los ejemplos por palabras generales como [cliente] o [fecha].

Si trabajas en una carpeta, guarda allí tone-of-voice.md y añade al archivo AGENTS.md en la misma carpeta la regla: "Cuando escribas un correo, mensaje u otro texto por mí, sigue tone-of-voice.md." Si AGENTS.md no existe, créalo. Asegúrate de que AGENTS.md se lea al inicio de cada trabajo en esa carpeta; en Cowork anótalo en las instrucciones de la carpeta. Si no tienes acceso a la carpeta, ofréceme tone-of-voice.md para descargar.

Finalmente muéstrame el archivo completo y pregúntame qué no encaja. Anota las correcciones en el archivo; si trabajas sin carpeta, ofréceme la versión corregida para descargar.

## En su herramienta

### Microsoft Copilot
Copilot Chat con licencia ve el correo laboral y encuentra los correos enviados solo. No ofrece archivo para descargar, así que haga el paso 3 así: en un chat nuevo pida un correo sin estilo, luego inserte las reglas en Custom instructions (Configuración de chat › Personalización) y dé la misma instrucción en otro chat nuevo. Si las reglas no caben, pida a la IA que las acorte.

### ChatGPT
Con Gmail o Outlook conectados en Plugins, ChatGPT encuentra los textos en el correo solo. Ofrece archivo para descargar y en el paso 3 lo adjunta con +. Para tenerlo en cada chat, súbalo al proyecto (Nuevo proyecto, Añadir fuente) y escriba en sus chats. ChatGPT maneja skills en planes Business, Enterprise y Edu, también Codex.

### Claude
Con correo conectado en Customize, Connectors, Claude encuentra los textos solo. Crea archivo para descargar; para tenerlo en cada chat, súbalo al proyecto (Nuevo Proyecto). En Cowork la IA lo guarda en la carpeta y añade el enlace a `AGENTS.md` en las instrucciones de la carpeta. Claude maneja skills en chat, Cowork y Claude Code; en planes Team y Enterprise el administrador los publica para toda la empresa.

### Gemini
Escriba al inicio del mensaje @Gmail y Gemini encontrará los correos enviados solo si tiene activado Keep Activity y funciones inteligentes de Gmail. Tras correcciones, escriba "Guarda la última versión en mi Google Drive" y en el paso 3 adjúntela con Add from Drive. Cree un Gem permanente (Gems › New Gem) con el archivo en Knowledge; en Gmail ponga las reglas en Ask Gemini › Settings › Personalization.
## Qué es el tono de voz

Tone of voice es el nombre en inglés para el estilo con que escribe una persona o empresa; en español se traduce como "tono de voz". En escritura son las costumbres que permiten reconocer que un texto es suyo: la longitud de las frases, a quién tutea o trata de usted, qué tan directo es y cómo termina el correo. Con el mismo método puede escribir el estilo del director para sus publicaciones o el estilo de toda la empresa.

`tone-of-voice.md` es un archivo de texto común que puede abrir en el Bloc de notas. La extensión `.md` indica que está escrito en [Markdown](glossary:markdown); los signos `###` marcan títulos. Lo lee cualquier IA que acepte adjuntos, por lo que puede usarlo en cualquier herramienta y llevarlo consigo si cambia de herramienta. También puede insertarlo en instrucciones permanentes en la configuración, como muestra la tarjeta [Configure Custom Instructions](card:custom-instructions).

`AGENTS.md` es un archivo con reglas para IA en la carpeta. La IA en modo Cowork o Code lo lee al inicio de cada trabajo en esa carpeta y configura lo que la herramienta necesite según el prompt. Así no tendrá que adjuntar el archivo de estilo cada vez.
## Que la IA escriba con su estilo en todas partes

Si no quiere adjuntar el archivo cada vez, convierta `tone-of-voice.md` en un [skill](glossary:skill): una guía guardada que la IA abre sola cada vez que escribe por usted. La regla en `AGENTS.md` solo vale para trabajo en carpeta. Dónde hay skills en su herramienta, lo verá en el bloque "En su herramienta". Dígale a la IA:

```text
Convierte tone-of-voice.md en un skill que uses siempre que escribas un texto para enviar a personas en mi nombre. Guárdalo donde esta herramienta lo cargue y verifica que lo vea también un chat nuevo. Si no puedes guardarlo, dime exactamente dónde hacer clic.
```

El tono corporativo basta con escribirlo una vez. En planes empresariales el skill se puede compartir con colegas para que todos los que escriban por la empresa lo tengan.
## Ejemplo

Martín es gerente de proyectos en una empresa constructora. El lunes 12/10/2026 da a la IA en la carpeta con textos laborales cuatro correos a proveedores y un informe del viernes para la dirección. La IA escribe en `tone-of-voice.md`, entre otras cosas:

```text
### En resumen
Escribo corto y directo. En la primera frase está el estado o lo que necesito. A proveedores y dirección trato de usted, a colegas de obra tuteo.

### Frases y párrafos
Las frases suelen tener hasta 15 palabras y el párrafo máximo tres frases. Termino con el siguiente paso y fecha.

### Palabras
Uso: "estado", "necesito de ustedes", "para el viernes".
No uso: "permítame", "en seguimiento a", "no dude en contactarme".

### Revisión
¿Se lo diría así al proveedor por teléfono?
```

El jueves 15/10 necesita escribir al inversor que el hormigonado se pospone. En un chat nuevo sin archivo recibe un correo que empieza "Permítame informarle sobre el desarrollo actual" y la nueva fecha aparece en el tercer párrafo. Con el archivo, el correo empieza "El hormigonado se pospone una semana, al jueves 22/10" y termina con lo que Martín necesita del inversor para el viernes. Martín cambia una palabra y envía el correo.
## Si se atasca

- **Las reglas son generales, por ejemplo "escribe amigable":** dígale a la IA: "Para cada regla pon una frase de mis textos en la que se base y borra las reglas sin frase."
- **El texto con el archivo sigue sin sonar a usted:** marque la frase que escribiría diferente, añada su versión y pida a la IA que añada la regla a `tone-of-voice.md` según la diferencia.
- **No tiene suficientes textos buenos:** tres bastan. Ayudan también correos que haya reescrito con IA: déle la versión de la IA y la suya y la diferencia mostrará mejor su estilo.
- **No puede descargar el archivo o la IA no lo usa en la carpeta:** escriba en el chat "Dame `tone-of-voice.md` como archivo para descargar." Si el chat no puede, cambie a [Cowork o Code](card:when-chat-is-not-enough). Allí escriba "Lee `AGENTS.md` y haz que lo leas al inicio de cada trabajo sola."
## Qué tendrá listo

Tendrá el archivo `tone-of-voice.md` con reglas de su estilo y tres ejemplos. En Cowork o Code estará en la carpeta y la regla en `AGENTS.md` hará que la IA lo siga sola; en el chat lo tendrá descargado o guardado en la configuración. En un chat nuevo verá el mismo correo sin archivo y con él, y el segundo sonará como usted.
## Qué sigue

Si escribe solo en chat común, inserte el archivo en un [proyecto con materiales e instrucciones](card:asistent) y la IA lo tendrá en cada chat de ese proyecto. Antes de enviar el texto, revíselo con la IA según la tarjeta [Revise la salida de la IA](card:kontrola-vysledku).
## Markdown

**Qué es:** Un formato simple de texto plano en el que los encabezados, listas, enlaces y otras estructuras se escriben usando unos pocos caracteres comunes. Los archivos suelen tener la extensión `.md`.

**Qué no es:** No es un lenguaje de programación ni un formato exclusivo para desarrolladores.

**Por qué lo necesita el estudiante:** Permanece fácilmente legible y editable tanto para personas como para IA, y puede transferirse entre diferentes herramientas.

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
