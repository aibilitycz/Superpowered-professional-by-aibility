# Prepare un idea file: idea en una página

La IA redacta su idea en una página para que un colega u otra IA puedan trabajar con ella sin usted.

## Prepare un idea file: idea en una página

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con una idea.
## Para qué sirve

En la reunión del martes propone una idea para que cada nuevo empleado tenga un compañero de otro departamento durante las primeras dos semanas. La gerente responde: “Redáctalo y envíalo a Lenka de RRHH para que lo desarrolle antes del viernes.” Usted escribe tres líneas en un correo. Lenka vuelve el viernes con la propuesta de que los propios gerentes dediquen más atención a los nuevos, porque del correo no entendió por qué el compañero debe ser de otro departamento.

El idea file es una página que explica qué quiere hacer y por qué; cómo hacerlo queda a quien tome la idea.
## Qué preparar

- una idea que quiera transmitir a un colega o IA; basta tenerla en la cabeza,
- la IA que usa en el trabajo,
- otra IA para verificar, o un nuevo chat sin memoria en la primera.
## Cómo hacerlo

1. Inserte el prompt y después de la línea “Idea:” escriba o
   [dicte](card:voice-as-primary-ai-input) la idea junto con lo que la motivó.
   La IA hará hasta tres preguntas y guardará el idea file.
2. Adjunte el idea file a la segunda IA y escriba: “Lee este archivo y dime con tus palabras qué quiere hacer el autor y por qué. ¿Qué le preguntarías antes de empezar?”
3. Pegue la respuesta de la segunda IA en la primera para que complete el idea file donde la segunda lo entendió distinto. Envíe el archivo terminado al colega o déelo a la IA para que lo desarrolle.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA que usa en el trabajo:

Haz un idea file de mi idea: una página con la que un colega u otra IA pueda trabajar sin mí. La idea está al final, después de la línea “Idea:”.

Primero pregúntame hasta tres cosas sin las cuales nadie entendería la idea. No preguntes nada más; lo que no sepas, anótalo en preguntas abiertas.

Escribe el idea file en checo, máximo una página, con esta estructura:

### Título de la idea
Una o dos frases: qué es.

### Por qué
Qué problema resuelve la idea, a quién ayuda y cómo se hace hoy.

### Idea principal
En qué se diferencia la idea del procedimiento actual.

### Cómo funcionaría
Cómo sería para las personas involucradas, con un ejemplo concreto.

### Qué está decidido y qué está abierto
Dos listas: lo que ya está definido y lo que aún no tiene respuesta.

Describe qué quiero hacer y por qué. Deja herramientas y procedimiento a quien tome la idea, salvo que sean el núcleo de la idea. No inventes números ni acuerdos que no tengas de mí.

Si trabajas en una carpeta, guarda el idea file como archivo .md en la carpeta ideas y nómbralo según la idea. Luego añade en el archivo AGENTS.md de la misma carpeta la regla: “Cuando diga ‘haz un idea file de esto’, pregúntame hasta tres cosas, redacta la idea con la misma estructura que los archivos en la carpeta ideas y guárdalo allí.” Si AGENTS.md no existe, créalo y asegúrate de leerlo al inicio de cada trabajo en esta herramienta; en Cowork anótalo en las instrucciones de la carpeta.

Si no sabes trabajar con archivos en la carpeta, no crees nada. Dame el idea file como archivo .md para descargar y guarda en memoria que cuando diga “haz un idea file de esto”, me preguntarás hasta tres cosas y redactarás la idea con esta estructura. Después de cada corrección, dame un nuevo archivo para descargar.

Idea:

## En tu herramienta

### Microsoft Copilot
En Copilot Chat, antes de insertar el prompt, selecciona en Tools o Agents el agente Word y añade sobre la línea “Idea:” “Dame el idea file como documento Word.” Copilot guarda la regla en memoria (Saved memories) y la usa en chats nuevos, así que pasa el idea file a un colega para que lo revise. Las skills están en Cowork (Customize, Skills).

### ChatGPT
En un chat normal de ChatGPT obtienes el idea file en la respuesta y la IA guarda la regla en memoria (Settings, Personalization, Memory). Para revisar abre un chat temporal (Temporary chat) que no usa memoria. Las skills están en planes Business y Enterprise en el panel lateral bajo Plugins, en la pestaña Skills.

### Claude
En un chat normal Claude crea un archivo descargable si tienes activado Code execution and file creation (Settings, Capabilities) y guarda la regla en memoria (Settings, Memory). Para revisar abre un chat incógnito que no usa memoria. Las skills están en Customize, Skills y funcionan en chat y Cowork.

### Gemini
Guarda el idea file terminado con Share & export, Export to Docs y compártelo con el colega mediante enlace. Las cuentas corporativas no tienen memoria, así que para revisar basta un chat nuevo. Guarda la regla para la próxima como skill: escribe “Guárdalo como skill” y la encontrarás en Customize, Skills.
## Qué es un idea file

El idea file es un archivo de texto común con extensión `.md`, escrito en [Markdown](glossary:markdown): los encabezados se indican con `###` al inicio de línea. Lo escribe la IA con lo que le dices y solo respondes unas preguntas. Lo puede leer cualquier IA que use tu colega, y él puede abrirlo en un editor simple como el Bloc de notas.

Se diferencia de una tarea en que no dice cómo proceder. El colega o su IA inventan la ejecución según sus posibilidades, y aunque elijan un camino distinto al tuyo, la idea sigue igual. Lo verificas con otra IA porque esta, igual que el colega, no conoce el chat donde se creó el idea file.

`AGENTS.md` es un archivo con reglas para IA en la misma carpeta. Muchas herramientas en modo Code lo leen al inicio de cada trabajo; donde no lo hacen, la IA guarda la regla en su configuración o te indica dónde ponerla. Así, en una nueva tarea en la misma carpeta basta decir “haz un idea file de esto”.

En modo Cowork o Code la IA guarda el idea file en la carpeta `ideas` y la regla para la próxima en `AGENTS.md`; si no tienes la carpeta, crea una vacía. En chat normal te da el idea file para descargar o en la respuesta y guarda la regla en memoria si está activada. Cuándo conviene cambiarlo muestra la pestaña [Chat, Cowork o Code](card:when-chat-is-not-enough).

El idea file debe contener principalmente por qué la idea tiene sentido; cómo realizarla déjalo a quien la tome.
## Que la IA escriba idea file en todas partes

La regla en `AGENTS.md` vale solo en la carpeta donde la IA la guardó. Pero las ideas surgen en otros sitios, incluso en medio de otro proyecto. Para que la IA escriba idea file en cualquier lugar, haz que cree de este procedimiento un [skill](glossary:skill): una guía guardada que la IA usa sola cuando dices “haz un idea file de esto”. No todas las herramientas soportan skills; cuáles sí, muestra el bloque “En tu herramienta”. En el chat donde se creó el idea file escribe:

```text
De cómo escribimos el idea file ahora, crea un skill llamado idea-file. Úsalo cuando diga “haz un idea file de esto”, en cualquier carpeta o chat. Mantén la estructura del archivo y máximo tres preguntas. Guarda el skill para que esta herramienta lo cargue sola y si no se puede aquí, dime dónde añadirlo.
```
## Ejemplo

Petra coordina proyectos en una empresa de ingeniería. El miércoles 7/10/2026 inserta el prompt en la IA en modo Cowork, abierta en la carpeta del proyecto, y dicta tras la última línea: “Quiero que cada nuevo empleado tenga un compañero de otro departamento durante las primeras dos semanas, a quien pueda preguntar cualquier cosa que no quiera tratar con el gerente.” La IA pregunta por qué de otro departamento, qué les falta hoy a los nuevos y cuántas personas afecta. Petra responde que los nuevos temen preguntar al gerente detalles, que el año pasado cuatro de doce nuevos se fueron en tres meses y que este año la empresa contratará unos quince. La IA guarda
`ideas/compañero-para-nuevos.md`:

```text
### Compañero para nuevos
Cada nuevo empleado tendrá un compañero de otro departamento durante las primeras dos semanas, a quien pueda preguntar cualquier cosa.

### Por qué
Los nuevos temen preguntar al gerente detalles, como dónde encontrar plantillas o cómo justificar un viaje de trabajo. El año pasado cuatro de doce nuevos se fueron en tres meses. Este año la empresa contratará unos quince.

### Idea principal
El compañero de otro departamento no evalúa al nuevo, por eso este no teme preguntarle nada.

### Cómo funcionaría
El primer día el nuevo y el compañero almuerzan juntos. Las siguientes dos semanas se reúnen dos veces por semana quince minutos. Así, una nueva diseñadora puede preguntar a su compañera de contabilidad cómo justificar su primer viaje de trabajo sin acudir al gerente.

### Qué está decidido y qué está abierto
- Decidido: el compañero siempre es de otro departamento, el programa dura dos semanas.
- Abierto: ¿quién elige a los compañeros? ¿Tienen tiempo en horario laboral?
```

La segunda IA resume bien la idea pero pregunta si el compañero es obligatorio para el nuevo. Petra pega su respuesta en la primera IA, añade que sí es obligatorio y la IA lo añade a lo decidido. Ese mismo día Petra envía el archivo a Lenka de RRHH, que lo usa con su IA para el programa de noviembre.
## Si se atasca

- **La IA dice que guardó el idea file pero no está en la carpeta:** probablemente trabaja en un chat normal que no guarda en carpeta. Pida el archivo para descargar o cambie a [Cowork o Code](card:when-chat-is-not-enough).
- **La idea no cabe en una frase:** díctela tal cual, con lo que le molesta del estado actual; cómo hacerlo muestra la pestaña [Dicte la tarea a la IA](card:voice-as-primary-ai-input). Lo que la IA no entienda lo anotará en preguntas abiertas.
- **La IA escribe un procedimiento detallado en vez de la idea:** dígale: “Elimina herramientas y pasos, deja solo qué y por qué.”
- **La segunda IA entendió la idea distinto:** no se la explique en chat porque el colega no recibirá esa explicación. Pegue su respuesta en la primera IA para que complete el idea file y páselo otra vez a la segunda IA.
## Qué tendrá listo

Tendrá un idea file con una idea que otra IA entendió igual que usted, listo para enviar al colega o para que la IA la desarrolle. En Cowork o Code está en la carpeta `ideas` y la regla para la próxima en `AGENTS.md`; en chat normal la IA recuerda la regla. La próxima idea la redactará la IA cuando escriba “haz un idea file de esto”.
## Qué sigue

Si duda de la idea, hágala revisar desde varios ángulos en el [panel de expertos](card:panel-expertu). Si es una idea para herramienta o aplicación, hágala construir según el idea file con [vibe coding](card:risk-based-prototyping).
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
