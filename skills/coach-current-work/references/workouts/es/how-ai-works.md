# Conozca cómo funciona la IA: cuándo confiar en ella y cuándo verificar la respuesta

En su trabajo descubrirá cuándo confiar en la IA, cuándo dejar que busque en la web y qué verificar, y la IA guardará esa regla.

## Conozca cómo funciona la IA: cuándo confiar en ella y cuándo verificar la respuesta

**Dificultad: fácil.**\
**Tiempo: aproximadamente 20 minutos** con una tarea de esta semana.
## Para qué sirve

En la reunión de mañana con un cliente quiere decir cuánto han subido los precios este año en
el sector, y la IA le dio un 7 % junto con el nombre de la encuesta. La respuesta suena segura, pero no sabe si la IA conoce ese número o se lo inventó, ni si puede saber algo sobre este año.

Si sabe cómo la IA compone la respuesta y cuándo busca en la web, reconocerá qué frases verificar antes de decírselas al cliente.
## Qué preparar

- la tarea de esta semana, que dirá en una frase, por ejemplo estado del proyecto o correo electrónico,
- un trabajo similar que haya hecho bien, como un correo o propuesta del año pasado,
- una novedad del sector y una pregunta para la que necesita un número; si no las tiene, la IA las elegirá,
- la IA que usa en el trabajo, preferiblemente con búsqueda en la web.
## Cómo hacerlo

1. Introduzca el prompt en un chat nuevo, añada al final el sector y la tarea y envíelo.
   La novedad y la pregunta son opcionales. Cómo obtener la respuesta sin web se muestra
   en el bloque “En su herramienta”.
2. Escriba “siguiente” y abra la fuente que la IA le dé para el número. Busque el número con Ctrl+F
   y dígale a la IA si está.
3. Responda a las preguntas de la IA sobre la tarea y añada un trabajo similar que haya hecho bien. La IA
   guardará la regla; en un chat nuevo pregunte “¿Qué regla de verificación conoces de mí?”

La IA siempre le dirá qué enviarle a continuación.
## Ejercicio de IA

Introduzca este [prompt](glossary:prompt) en la IA que usa en el trabajo:

Quiero ver en mi trabajo cómo funcionas y, según eso, ajustar cuándo confiar en ti y cuándo verificar. Haremos juntos dos pruebas cortas, los datos están al final del mensaje. Escribe de forma sencilla, apenas empiezo con IA. Cada prueba termina con dos frases: qué mostró sobre cómo funcionas y qué significa para mi trabajo. Al final de cada respuesta, dime en una frase qué debo enviarte a continuación y espera.

Prueba 1: sin web y con web.
a) Ahora no busques en la web. Escribe hasta qué mes y año llegan los textos con los que te entrenaron y responde solo con ellos a dos cosas: qué sabes de mi novedad y cuál es el número para mi pregunta, con la fuente. Escribe el número concretamente, como sueles responder; si no lo sabes sin web, dilo. Si no doy novedad o pregunta, elige un tema de mi sector donde las cosas cambian rápido y una pregunta para la que la gente en mi sector suele buscar un número. Si no sabes evitar la búsqueda en la web, dímelo al principio de la respuesta.
b) Cuando escriba “siguiente”, busca ambos en la web. Compara con tu respuesta sin web: qué faltó, qué estaba desactualizado y si el número coincide. Para cada afirmación da la fuente con enlace y fecha. Luego dime qué fuente abrir y qué buscar con Ctrl+F, exactamente como está en la fuente, y espera a que te diga si está. Después explícame por qué tu respuesta sin web sonaba igual de segura, aunque fuera correcta o no.

Si no tienes web, dímelo. Buscaré la fuente yo y te enviaré el enlace.

Prueba 2: qué hace el contexto. Escribe la salida para mi tarea solo con esa frase. No añadas nada que sepas de mí de otro lado: ni de la prueba 1, ni de la memoria ni de documentos adjuntos. Luego pregúntame en un solo mensaje todo lo que necesites: para quién es la salida, qué debe cumplir, qué sé yo además y si puedo darte un trabajo similar que hice bien. Si no lo tengo, te bastará mi descripción. Cuando responda, escribe la segunda versión. Muestra dos lugares concretos donde difieren y para cada uno escribe qué información mía causó la diferencia.

Finalmente, con lo que mostraron las pruebas, escribe mi regla “Cuándo confío en la IA y cuándo verifico”: tres o cuatro líneas cortas para mi trabajo, sin consejos generales. Al menos una línea dirá qué debes hacer tú, por ejemplo buscar en la web para números y novedades, citar fuente con enlace y fecha, y si no tienes fuente, escribir “no verificado”. Guarda la regla en la memoria para que valga en cada chat nuevo y dime que está guardada. En Cowork o Code escríbela en tus instrucciones fijas que lees en cada trabajo. Si nada de eso es posible, dime exactamente dónde ponerla.

Mi sector y trabajo:
Tarea de esta semana en una frase:
Novedad de los últimos meses (puede quedar vacía):
Pregunta para la que necesito un número (puede quedar vacía):

## En su herramienta

### Microsoft Copilot
Copilot Chat busca en la web solo y muestra fuentes bajo el botón Fuentes, por lo que
la respuesta sin web puede no salir. Si la quiere, apague el interruptor Buscar en la web (tres puntos arriba a la derecha, Configuración y más, Configuración de chat,
Personalización, Avanzado) y antes de “siguiente” vuelva a encenderlo. Copilot guarda la regla en la memoria, si no, póngala en Instrucciones personalizadas en Personalización.

### ChatGPT
ChatGPT busca en la web solo cuando la pregunta necesita información actual. Se le obliga manualmente con View all tools, Search o con barra inclinada en el campo de mensaje y opción Search. Abra la fuente haciendo clic en la cita en el texto. ChatGPT guarda la regla en la memoria; si no tiene memoria, póngala en Custom Instructions en Settings, Personalization.

### Claude
La búsqueda se activa con el botón + abajo a la izquierda, opción Web search; donde no hay botón, Claude busca solo. En planes Team y Enterprise el propietario debe activar web y memoria primero. Claude guarda la regla en la memoria (Settings, Memory), si no, póngala en Instructions for Claude en Settings. En Cowork y Claude Code la IA puede preguntar si puede buscar en la web o guardar la regla; permita.

### Gemini
Gemini busca en Google solo y no tiene interruptor; muestra fuentes bajo el botón Fuentes (Sources). Por eso la respuesta sin web puede no salir; lo que es más reciente que la fecha de conocimiento de la IA, Gemini solo lo sabe de la web. La cuenta laboral no tiene memoria ni instrucciones propias, así que guarde la regla como skill, es decir, instrucción guardada: escriba “Guárdalo como skill” y la encontrará en Customize, Skills.
## Qué es un modelo de lenguaje

Un modelo de lenguaje es la IA con la que chatea. Cuatro de sus características
explican lo que vio en las pruebas y por qué un chat largo se enreda:

- **Escribe palabra por palabra.** La respuesta la compone estimando cada vez qué palabra sigue mejor, como el autocompletado del teléfono, pero mucho más capaz. Por eso suena igual de segura cuando acierta que cuando se equivoca.
- **Conoce el mundo hasta cierta fecha.** El modelo se entrenó con textos hasta una fecha llamada fecha de conocimiento (knowledge cutoff). De cosas más recientes solo sabe si busca en la web o si le da documentos.
- **Solo puede manejar una cantidad limitada de texto a la vez.** Todo lo que ve en una conversación, sus mensajes, adjuntos y respuestas, debe caber en la ventana de contexto (context window). Es grande, pero en chats largos la IA pierde de vista el principio. Por eso deje que la IA resuma trabajos largos y ponga el resumen en un chat nuevo.
- **Se guía por lo que escribe usted.** La misma tarea con diferente contexto da respuestas distintas, así que usted decide en gran parte la calidad del resultado.

La búsqueda en la web es una herramienta que el modelo usa cuando no le basta lo que aprendió: lee unas páginas actuales y responde con ellas. Pero ni la fuente con enlace garantiza que diga lo que está en ella, por eso vale la pena abrir una.
## Ejemplo

Tereza Malá compra material para una empresa de ingeniería en Olomouc. Hace el Workout el 12/10/2026 y al final del prompt escribe: compra de perfiles de aluminio, correo al proveedor sobre descuento, cambio de precios del aluminio este año y pregunta sobre cuánto tardan en promedio las empresas de ingeniería en cobrar facturas. Necesita ese número para un informe al director.

- **Prueba 1:** Sin web la IA escribe hasta cuándo llegan sus conocimientos, no sabe nada de los precios del aluminio este año y responde sin dudar con días y nombre de la encuesta. Con web trae tres informes de precios del último mes y encuentra la encuesta. Tereza la abre, busca el número con Ctrl+F y ve otro, que es para todos los sectores juntos.
- **Prueba 2:** De la frase “Escribe al proveedor un correo pidiendo descuento” sale un correo cortés sin ningún número. Cuando Tereza añade consumo anual de 40 toneladas, oferta de la competencia un 6 % más barata y el correo del año pasado que funcionó, la segunda versión tiene cinco frases, el descuento pedido y fecha límite de respuesta al 31/10.

La IA guarda en memoria:

```text
Cuándo confío en la IA y cuándo verifico:
- Para precios y novedades del último año busca en la web, aunque no se lo pida.
- Para cada número y cita da fuente con enlace y fecha; si no hay fuente, escribe “no verificado”.
- El número en que se basa la decisión lo abro yo en la fuente.
- El correo al proveedor te lo doy con volumen, oferta de la competencia y modelo, y leo la propuesta completa.
```

Una semana después la IA añade en el informe para la reunión un enlace al resumen bursátil del 19/10 y para un número “no verificado”.
## Si se atasca

- **La IA busca en la web también en la parte sin web:** algunas herramientas buscan solas, como muestra el bloque “En su herramienta”. No importa: lo que en las fuentes es más reciente que la fecha de conocimiento, la IA solo lo sabe de la web. Continúe con “siguiente”.
- **No encuentra el número en la fuente o no puede abrir el enlace:** dígaselo a la IA y pídale otra fuente. Eso también es resultado de la prueba y va en la regla.
- **La IA no puede acceder a la web:** busque la fuente en un buscador y ponga el enlace en el chat, la IA lo comparará con su respuesta. El administrador de TI activa la búsqueda en la empresa, pídala.
- **No sabe si la IA guardó la regla:** en un chat nuevo pregunte “¿Qué regla de verificación conoces de mí?” Si no la conoce, probablemente la memoria está apagada; póngala en [Custom Instructions](card:custom-instructions), instrucciones fijas para cada chat.
## Qué tendrá listo

Tiene una mejor versión de la tarea de esta semana, el número que encontró usted mismo en la fuente y la regla “Cuándo confío en la IA y cuándo verifico” guardada en la IA. Sabe por su trabajo por qué la IA suena segura aunque se equivoque y cuándo enviarla a la web.
## Qué sigue

Cuando la IA le prepare un resultado con números para enviar,
[compruébelo con las fuentes](card:kontrola-vysledku). Si necesita más de una respuesta de la web, como comparar decenas de fuentes, deje que la IA haga una [Investigación Profunda](card:deep-research). Si necesita números de la web regularmente, deje que la IA [descargue datos en vivo](card:live-web-data) con fuente y fecha.
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
