# Cree su PACT: espacio de trabajo para IA

La IA reúne todo su trabajo en curso en una carpeta con un mapa, para que un nuevo chat continúe sin explicaciones.

## Cree su PACT: espacio de trabajo para IA

**Dificultad: media.**\
**Tiempo: aproximadamente 15 minutos** con proyectos en curso en el ordenador.
## Para qué sirve

El lunes abre un chat nuevo para el presupuesto del departamento y pasa diez minutos buscando documentos por todo el ordenador. La tabla del año pasado está en Documentos, las notas de la reunión en el Escritorio y la oferta del proveedor en Descargas. La IA luego calcula con los precios del año pasado porque olvidó incluir la oferta actual en el chat.

PACT es una carpeta con cuatro secciones donde la IA encuentra sola proyectos, documentos y reglas.
## Qué preparar

- archivos de los proyectos en los que está trabajando y saber dónde están en el ordenador,
- IA en [modo](glossary:workmode) Cowork o Code que trabaje con archivos en el ordenador.
## Cómo hacerlo

1. Abra Cowork o Code en la carpeta con su nombre, donde están Documentos, Escritorio y Descargas, y pegue el prompt. La IA mostrará por proyectos qué moverá a la nueva carpeta `PACT`.
2. Confirme la propuesta; deje fuera por ahora el proyecto que no tenga claro. La IA moverá los archivos y escribirá en `AGENTS.md` el mapa de PACT: qué hay dónde y qué reglas aplican.
3. Abra un chat nuevo en la carpeta `PACT` y asigne directamente una tarea en un proyecto, por ejemplo “Continuemos con el presupuesto. ¿Qué falta aún?” La IA tomará los documentos sola.
## Ejercicio de IA

Pegue este [prompt](glossary:prompt) en la IA en modo Cowork o Code, abierta en su carpeta:

Crea en Documentos una carpeta PACT: espacio de trabajo donde todo mi trabajo tenga su lugar. Si no sabes trabajar con archivos en el ordenador, dímelo de inmediato para que pueda cambiar a Cowork o Code.

Dentro crea cuatro secciones:
- 1_Projects: proyectos en curso, cada uno en su propia carpeta,
- 2_Agents: instrucciones para IA, como prompts que uso repetidamente,
- 3_Context: documentos que aplican a varios proyectos, como listas de precios, reglas de empresa o textos modelo,
- 4_Tools: ayudas para el trabajo, como plantillas o calculadoras.

Revisa Documentos, Escritorio y Descargas y pregúntame si tengo archivos de trabajo en otro lugar, por ejemplo OneDrive. Según contenido y fecha de última modificación, identifica en qué proyectos trabajo ahora. Luego muéstrame la propuesta por proyectos: nombre del proyecto y qué archivos se moverían, no cada archivo por separado. Tras mi confirmación, mueve los archivos y guarda la lista de movimientos (de dónde a dónde) en presuny.md dentro de PACT para poder revertirlos. Lo que no pertenezca al trabajo en curso déjalo donde está. No muevas archivos en carpetas compartidas usadas por colegas; solo anota en el mapa dónde están.

Finalmente crea en PACT un archivo AGENTS.md con el mapa de PACT: qué hay en cada sección y qué proyectos, con una frase por proyecto sobre su estado. Añade la regla: “Crea nuevos proyectos como carpetas en 1_Projects. Guarda cada archivo nuevo en la sección que corresponda. Si aparece un proyecto nuevo o cambia su estado, actualiza el mapa en este archivo. Antes de trabajar en un proyecto, lee su carpeta.” Asegúrate de que lo leas en esta herramienta al comenzar cada trabajo; en Cowork escríbelo en las instrucciones de la carpeta.

## En su herramienta

### Microsoft Copilot
Cowork está junto al interruptor de Chat; si no está, pida al administrador de TI que lo habilite. Solo ve OneDrive y SharePoint, así que no selecciona carpeta y al final del prompt añada: “En lugar de Documentos, Escritorio y Descargas, revisa mi OneDrive y crea PACT allí. Guarda el mapa como documento Word y escríbeme las reglas para Customize, Preferences.” En el paso 3, en la nueva tarea, indique que PACT está en OneDrive.

### ChatGPT
En la aplicación ChatGPT para ordenador cambie a Codex, elija abrir carpeta (open a folder) y seleccione la carpeta con su nombre. Codex lee `AGENTS.md` solo y crea la tarea programada cuando se lo pida; la encontrará en Scheduled. Si no ve Codex, probablemente el administrador lo haya desactivado; pídale que lo active.

### Claude
En la aplicación Claude para ordenador abra Cowork y seleccione la carpeta con su nombre, o ábrala en Claude Code; ambos son de pago. Cowork escribe la regla en las instrucciones de la carpeta (Folder instructions), Claude Code lee `AGENTS.md`. La tarea programada la crea la IA cuando se lo pida y la encontrará en el panel izquierdo bajo Scheduled.

### Gemini
Gemini en Google Drive no crea carpetas ni mueve archivos, por lo que no puede montar PACT. Para este workout necesita IA en modo Cowork o Code, como Claude Cowork, Claude Code o Codex en ChatGPT; pregunte al administrador de TI si la empresa la tiene.
## Qué es PACT

[PACT](glossary:pact) es un método para organizar el trabajo para que lo entiendan personas e IA. El nombre viene de las iniciales en inglés de Projects (proyectos), Agents (instrucciones para IA), Context (documentos de referencia) y Tools (herramientas). La forma más simple son cuatro carpetas como en este ejercicio; los números delante de los nombres aseguran que siempre estén en ese orden. Usted decide qué proyectos van en PACT y la IA hace el traslado y organización. No necesita programa especial y si parte del trabajo está en otro lugar, como documentos de empresa en disco compartido, puede quedarse allí y la IA anotará en el mapa dónde encontrarlo.

`AGENTS.md` es un archivo de texto común en la carpeta principal de PACT con las reglas para la IA. Se llama así por los [agentes](glossary:agent), IA que trabajan con archivos, y la extensión `.md` indica formato [Markdown](glossary:markdown). Muchas herramientas en modo Code lo leen al inicio de cada trabajo, así que no hay que repetir mapa ni reglas. Donde la herramienta no lo hace sola, la IA guarda la regla en su configuración o le indica dónde ponerla.

Un chat normal no basta para PACT porque no ve las carpetas en el ordenador; cómo [cambiar a Cowork o Code](card:when-chat-is-not-enough) muestra una tarjeta aparte. En PACT solo van proyectos en curso y sus documentos; archivos antiguos déjelos donde están y la IA los moverá cuando se lo pida.
## Que PACT se mantenga solo

Una tarea programada semanalmente ordena en PACT también archivos nuevos que aparezcan en otros lugares. La regla en `AGENTS.md` cubre el trabajo con IA en la carpeta `PACT`. Los archivos adjuntos de emails acaban en Descargas y notas rápidas en Escritorio. Dé a la IA en modo Cowork o Code esta tarea y pídale que cree la tarea programada:

```text
Cada viernes a las 16:00 revisa Escritorio y Descargas. Archivos de esta semana que pertenezcan a proyectos en PACT, muévelos a la sección correcta según el mapa en AGENTS.md. Si hay un proyecto nuevo, crea su carpeta en 1_Projects y añádelo al mapa. Al final, dime qué moviste y qué archivos no sabes dónde poner.
```

La tarea que trabaja con archivos en su ordenador solo funcionará si el ordenador está encendido y la aplicación abierta.
## Ejemplo

Jana prepara el stand de la empresa para la feria en Brno y un viaje otoñal a los Dolomitas para colegas. Los archivos de ambos están dispersos por el ordenador. La IA identifica ambos proyectos y tras confirmación de Jana crea:

```text
PACT/
  AGENTS.md
  1_Projects/
    feria-brno/         brief, presupuesto del stand, ofertas de tres imprentas
    viaje-dolomitas/    programa y cálculos
  2_Agents/
    prompt-invitacion.md
  3_Context/
    lista-precios-2026.xlsx
    logo-y-colores.pdf  útil para stand e invitación al viaje
  4_Tools/
    calculadora-viaje.xlsx
```

El miércoles 14/10 abre un chat nuevo en `PACT` y escribe: “Continuemos con la feria. ¿Cuál imprenta es la más barata?” La buena respuesta compara las tres ofertas en la carpeta del proyecto sin que Jana tenga que pegar nada. Si la IA pregunta qué feria es, probablemente está trabajando fuera de `PACT`.
## Si se atasca

- **La IA dice que creó las carpetas pero no están en el ordenador:** probablemente está en un chat normal que no puede trabajar con archivos. Cambie a [Cowork o Code](card:when-chat-is-not-enough) y seleccione la carpeta con su nombre.
- **La IA no ve o no puede mover archivos en alguna carpeta:** verifique que en Cowork o Code haya seleccionado la carpeta con su nombre. Si los archivos están fuera, pregunte a la IA cómo darle acceso.
- **Quiere revertir el traslado:** pida a la IA en `PACT` que use `presuny.md` para devolver los archivos, todos o solo un proyecto.
- **El chat nuevo pregunta por cosas que están en la carpeta:** abra el chat en `PACT`, no en ventana normal, y verifique que `AGENTS.md` esté ahí. Luego pida a la IA que lo lea.
## Qué tendrá listo

Tendrá la carpeta `PACT` con cuatro secciones, proyectos en curso y documentos, y en `AGENTS.md` el mapa para que cualquier chat nuevo entienda la carpeta. En una tarea real verificó que la IA continúa el proyecto sin que usted pegue o explique nada.
## Qué sigue

Deje que la IA escriba para cada proyecto una [página inicial](card:project-start-here) que muestre su estado. Del proceso que explica repetidamente a la IA, que cree un [manual que use otra vez](card:create-skill-from-proven-process).
## Agente

**Qué es:** Un sistema de IA que puede planificar múltiples pasos dentro de un objetivo dado, utilizar herramientas disponibles, gestionar el estado y ejecutar acciones autorizadas. El alcance de sus capacidades y el grado de autonomía dependen de la herramienta específica y los permisos.

**Qué no es:** No es solo un prompt almacenado ni un asistente renombrado con una función más avanzada.

**Por qué lo necesita el estudiante:** Ayuda a identificar tareas que requieren herramientas, permisos, puntos de control y una responsabilidad clara sobre las acciones.

## Markdown

**Qué es:** Un formato simple de texto plano en el que los encabezados, listas, enlaces y otras estructuras se escriben usando unos pocos caracteres comunes. Los archivos suelen tener la extensión `.md`.

**Qué no es:** No es un lenguaje de programación ni un formato exclusivo para desarrolladores.

**Por qué lo necesita el estudiante:** Permanece fácilmente legible y editable tanto para personas como para IA, y puede transferirse entre diferentes herramientas.

## PACT

**Qué es:** Modelo para organizar el entorno de trabajo de IA en cuatro tipos de elementos: Projects, Agents, Context y Tools, es decir, proyectos, asistentes o agentes, contexto y herramientas.

**Qué no es:** No es un conjunto obligatorio de cuatro componentes ni un software terminado. La forma concreta depende de cómo trabaja la persona y qué utiliza ya.

**Por qué el estudiante lo necesita:** Ayuda a organizar múltiples proyectos, procedimientos repetidos de IA, contexto estable y herramientas para que tanto la persona como la IA puedan encontrarlos.

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
