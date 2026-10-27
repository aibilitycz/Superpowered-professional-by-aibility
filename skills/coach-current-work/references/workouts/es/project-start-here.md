# Cree su README: página de inicio del proyecto

La IA redacta la página de inicio del proyecto, para que el colega y el nuevo chat reconozcan al instante el estado y el documento vigente.

## Cree su README: página de inicio del proyecto

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con un proyecto en curso.
## Para qué sirve

Dentro de una semana se va de vacaciones y el colega Marek se encargará de preparar la conferencia empresarial en Olomouc. En la carpeta del proyecto están `catering_final.docx`, `catering_final_2.docx`, notas de la reunión y el programa del año pasado. Usted sabe que la segunda oferta de catering es la válida y que el programa del año pasado solo sirve como modelo. Ni Marek ni el nuevo chat lo reconocerán por los nombres de los archivos, y usted tendría que explicárselo apresuradamente por teléfono.

Sería útil una página de inicio del proyecto, un README en inglés. La IA la redactará a partir de los materiales en la carpeta y Marek y el nuevo chat sabrán al instante qué documento es válido y cuál es el siguiente paso.
## Qué preparar

- una carpeta con un proyecto en curso en el ordenador o sincronizada con él,
- notas o correos electrónicos del proyecto que no estén en la carpeta,
- IA en [modo](glossary:workmode) Cowork o Code, que trabaje con los archivos en el ordenador.
## Cómo hacerlo

1. Abra Cowork o Code en la carpeta del proyecto e introduzca el prompt, seguido de las notas que no están en la carpeta. La IA revisará los materiales y preguntará sobre lo que no reconozca.
2. Responda a las preguntas. La IA guardará `README.md` y añadirá en `AGENTS.md` la regla para que lo lea y mantenga actualizado. Verifique especialmente si identificó correctamente qué documento es válido.
3. En un nuevo chat en la misma carpeta pregunte qué documento se está usando y cuál es el siguiente paso. Una buena respuesta nombrará el documento que el README señala como válido.
## Ejercicio de IA

Introduzca este [prompt](glossary:prompt) en la IA en modo Cowork o Code, abierta en su carpeta:

Escribe para este proyecto un README: página de inicio que permita a un colega o a un nuevo chat entender al instante de qué se trata y cómo continuar. Si no tienes acceso a la carpeta del proyecto ni puedes guardar archivos en ella, dímelo de inmediato para que pueda cambiar a Cowork o Code.

Revisa todos los materiales en la carpeta del proyecto y las notas que te doy bajo esta instrucción. Si ya hay un README u otra página de inicio, modifícalo y no crees otro.

Escribe el README para que quepa en una página, con estas secciones:
- De qué se trata: objetivo del proyecto, para quién es y fecha límite.
- Estado actual: qué está hecho, qué no, siguiente paso y quién lo hará.
- Qué no pertenece al proyecto: lo que se ha excluido o pospuesto.
- Documentos válidos: para cada archivo importante, enlace, propósito y si es válido, solo modelo o ya no válido.
- Dónde está qué: breve resumen de carpetas y archivos.
- Actualizado: fecha de hoy.

No reescribas el contenido de los documentos, solo enlázalos. Si dos documentos dicen cosas diferentes o no sabes cuál es válido, pregúntame. No decidas por la palabra “final” ni por la fecha. Haz todas las preguntas juntas y solo las que no respondan los materiales. Tras mis respuestas, guarda la página como README.md en la carpeta principal del proyecto.

Finalmente, añade en el archivo AGENTS.md de la carpeta del proyecto la regla: “Antes de trabajar en el proyecto, lee README.md. Si cambia el objetivo, estado, siguiente paso o documento válido, actualiza README.md.” Si AGENTS.md no existe, créalo. Asegúrate de que esta herramienta lo lea al comenzar cada trabajo; en Cowork ponlo en las instrucciones de la carpeta.

## En su herramienta

### Microsoft Copilot
Cowork está junto al interruptor de Chat; si no está, pida al administrador de TI que lo habilite. Solo ve archivos en OneDrive y SharePoint, por eso añada al final del prompt: “Trabaja en la carpeta del proyecto en OneDrive, mantén README como documento Word y escribe la regla para Customize, Preferences.” En el paso 3, indique en la nueva tarea dónde está el proyecto. Las tareas programadas están en la página Automations.

### ChatGPT
En la aplicación ChatGPT para ordenador cambie a Codex, elija abrir carpeta (open a folder) y seleccione la carpeta del proyecto. Codex lee `AGENTS.md` automáticamente y crea la tarea programada si se lo pide; la encontrará en Scheduled. Si no ve Codex, probablemente el administrador lo haya desactivado; pídale que lo active.

### Claude
En la aplicación Claude para ordenador abra Cowork y seleccione la carpeta del proyecto, o ábrala en Claude Code; ambos son de pago. Cowork escribe la regla en las instrucciones de la carpeta (Folder instructions), Claude Code lee `AGENTS.md`. La IA crea la tarea programada si se lo pide y la encontrará en el panel izquierdo bajo Scheduled.

### Gemini
Gemini no guarda en la carpeta del ordenador. Adjunte documentos con Add from Drive, añada al final del prompt “No tienes acceso a la carpeta, no me cambies de modo y trabaja con los documentos adjuntos.” y guarde el README mediante Share & export, Export to Docs. El paso 3 hágalo en Gemu (Gems, New Gem) con el README en Knowledge y la instrucción “Responde según el README”; compártalo con el colega mediante Share.
## Qué es README

[README](glossary:readme) significa en inglés “léeme”. Es el archivo inicial que una persona abre primero en la carpeta del proyecto. En una página explica de qué trata el proyecto, su estado, siguiente paso, documento válido y dónde encontrar todo. También le ayuda si vuelve al proyecto tras dos semanas.

La extensión `.md` indica formato [Markdown](glossary:markdown): texto plano donde los signos `#` al inicio de línea marcan títulos. Ábralo con cualquier editor de texto, en Windows por ejemplo con el Bloc de notas, y la IA lo leerá y modificará sin conversión.

`AGENTS.md` es un archivo con reglas para la IA en la misma carpeta. Muchos programas en modo Code lo leen al iniciar el trabajo, así no hay que recordarle a la IA que lea el README. Donde el programa no lo hace, la IA guarda la regla en su configuración o le indica dónde ponerla.

El README solo enlaza documentos y explica su propósito; si la IA no sabe cuál es válido, le preguntará. Para Marek, la respuesta correcta en el paso 3 nombraría `catering_final_2.docx`.

Un chat común no guarda README en la carpeta porque no tiene acceso. Si no tiene otra IA, cree al menos un [proyecto en chat](card:asistent) o vea cómo [cambiar a Cowork o Code](card:when-chat-is-not-enough).

La palabra `final` en el nombre ni la fecha más reciente prueban que un documento sea válido.
## Para que README no quede obsoleto

Una tarea programada actualiza README semanalmente según reuniones y correos. La regla en `AGENTS.md` cubre el trabajo que hace con la IA en la carpeta. Pero el estado cambia también en reuniones o correos. Dé a la IA en modo Cowork o Code esta instrucción y pídale que cree la tarea programada:

```text
Cada viernes a las 15:00 revisa la carpeta del proyecto y los correos y reuniones de esta semana relacionados con el proyecto a los que tengas acceso. Si cambió el estado, siguiente paso o documento válido, actualiza README.md: cambia solo las líneas afectadas y la fecha de actualización. Si no hay cambios, deja README como está. Al final, dime qué cambiaste.
```

Si la tarea trabaja con archivos en su ordenador, solo funcionará si el ordenador está encendido y la aplicación abierta.
## Ejemplo

Lucie elige un nuevo proveedor de limpieza para las sucursales de Brno y Zlín. La IA revisa la carpeta y pregunta dos cosas: cuál de las dos ofertas de la empresa Čistota es válida y si la empresa Blesk sigue en la selección. Luego escribe:

```text
# Selección de proveedor de limpieza
Actualizado: 9. 10. 2026

### De qué se trata
Nuevo proveedor de limpieza para las sucursales de Brno y Zlín desde el 1. 1. 2027.

### Estado actual
Las inspecciones de los edificios se realizaron, quedan dos empresas en la selección.
Siguiente paso: Lucie concertará reuniones con ambas empresas antes del 20. 10.

### Qué no pertenece al proyecto
El lavado de ventanas sigue con la empresa actual.

### Documentos válidos
- nabidka_cistota_v2.pdf: válido, precio tras inspección.
- nabidka_cistota.pdf: no válido, reemplazado por v2.
- nabidka_uklidplus.pdf: válido.
- porovnani-cen.xlsx: válido, comparación de ambas ofertas.
- nabidka_blesk.pdf: no válido, empresa Blesk fuera de la selección.

### Dónde está qué
Ofertas en la carpeta nabidky, fotos y notas de inspecciones en la carpeta prohlidky.
```

Una semana después, Lucie pregunta en un nuevo chat qué precio de Čistota debe poner en la comparación. Una buena respuesta toma el precio de `nabidka_cistota_v2.pdf` y no menciona a Blesk. Si la IA usa la oferta antigua, dígale que corrija la línea del documento en README.
## Si se atasca

- **La IA dice que guardó README pero no está en la carpeta:** probablemente trabaja en un chat común que no puede modificar archivos. Cambie a [Cowork o Code](card:when-chat-is-not-enough) y abra la carpeta del proyecto allí.
- **Ni usted sabe qué documento es válido:** pida a la IA que le muestre las diferencias entre documentos. Decida usted o quien dirija el proyecto y la IA lo anotará.
- **README es largo o copia documentos:** pida a la IA que lo reduzca a una página y solo deje enlaces en lugar de contenido.
- **El nuevo chat responde según un documento antiguo:** abra el chat en la misma carpeta del proyecto y verifique que `README.md` y `AGENTS.md` estén allí. Luego pida a la IA que lea el README.
## Qué tendrá listo

Tiene `README.md` para que cualquiera continúe el proyecto sin más preguntas. En `AGENTS.md` está la regla para que la IA lo lea antes de trabajar y lo actualice tras cambios. En un nuevo chat verificó que la IA identifica el documento válido y sabe el siguiente paso según el README.
## Qué sigue

Si quiere tener así todos los proyectos en orden, cree [PACT](card:pact-workspace). Si quiere configurar otras tareas que la IA haga regularmente, vea la [tarea programada](card:recurring-ai-task).
## Markdown

**Qué es:** Un formato simple de texto plano en el que los encabezados, listas, enlaces y otras estructuras se escriben usando unos pocos caracteres comunes. Los archivos suelen tener la extensión `.md`.

**Qué no es:** No es un lenguaje de programación ni un formato exclusivo para desarrolladores.

**Por qué lo necesita el estudiante:** Permanece fácilmente legible y editable tanto para personas como para IA, y puede transferirse entre diferentes herramientas.

## Prompt

**Qué es:** Instrucción para una interacción específica con la IA.

**Qué no es:** No es lo mismo que un contexto a largo plazo, un asistente almacenado o un agente.

**Por qué lo necesita el estudiante:** Inicia el ejercicio y guía su desarrollo; no es el contenido principal de aprendizaje.

## README / Comience aquí

**Qué es:** Un archivo o página introductoria breve que explica qué contiene el proyecto, qué está actualizado, dónde encontrar recursos importantes y cómo deben trabajar con ellos las personas o la IA.

**Qué no es:** No es una copia de todos los documentos ni otro manual extenso del proyecto.

**Por qué lo necesita el estudiante:** Ayuda a personas y a la IA a descubrir rápidamente dónde comenzar y qué materiales están actualizados y son vinculantes.

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
