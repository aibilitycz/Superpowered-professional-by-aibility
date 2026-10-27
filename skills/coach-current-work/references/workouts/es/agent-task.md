# Asigne una tarea al agente: la IA la completará sola

Una tarea larga con muchos pasos la completa la IA sola, por ejemplo durante la noche, y usted la recibe según las pruebas.

## Asigne una tarea al agente: la IA la completará sola

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con carpeta de materiales para una tarea.
## Para qué sirve

El director financiero debe recibir para el viernes un informe sobre cuáles de los sesenta contratos con proveedores se renovarán automáticamente en enero. Para cada uno también quiere la fecha límite para cancelarlo. Abrir cada contrato, encontrar el artículo sobre duración y cancelación y registrar los datos en una tabla son dos tardes de trabajo meticuloso.

[Agente](glossary:agent) es una IA que realiza esa tarea sola, por ejemplo durante la noche, y continúa hasta cumplir las condiciones que usted establezca al inicio, por ejemplo “cada uno de los 60 contratos tiene su fila en la tabla”.
## Qué preparar

- una tarea con muchos pasos que no quiera hacer usted, como revisar contratos o hacer una investigación,
- materiales en una carpeta,
- IA en modo Cowork o Code; dónde encontrarla se muestra en el bloque “En su herramienta”.
## Cómo hacerlo

1. Abra la IA en modo Cowork o Code en la carpeta con los materiales, inserte el prompt y tras la línea “Tarea:” escriba lo que debe hacer el agente. La IA propondrá condiciones de finalización; corríjalas y escriba “Sí, trabaja”.
2. Cuando la IA pregunte si puede modificar archivos, permita para toda la tarea para que no se detenga durante la noche. El agente trabajará solo y al final escribirá un informe de entrega.
3. En el informe de entrega encontrará dónde está el resultado. Para cada condición abra la prueba y compare uno o dos datos con la fuente; lo que no coincida, devuélvalo al agente con la condición.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA en modo Cowork o Code, abierta en su carpeta, y tras la última línea escriba su tarea:

Haz por mí una tarea con muchos pasos y trabaja solo hasta que esté terminada. La tarea está en la última línea.

Primero revisa los materiales en la carpeta o en los adjuntos y propone de tres a cinco condiciones de finalización, con las que sabré que está lista. Cada condición debe poder verificarse de un vistazo: cantidad, archivo, registro o número que compararé con la fuente. Muéstramelas y espera a que las confirme o corrija.

Cuando confirme las condiciones, añade al archivo AGENTS.md en la carpeta la regla: “Para cada tarea larga primero propone de tres a cinco condiciones verificables de finalización y déjame confirmarlas. Trabaja hasta que todas se cumplan y al final adjunta prueba para cada una.” Si AGENTS.md no existe, créalo. Si esta herramienta no lo lee sola, configura para que lo leas al inicio de cada trabajo; en Cowork escríbelo en las instrucciones de la carpeta. Si no tienes acceso a la carpeta, guarda la regla en memoria; si no sabes cómo, dime exactamente dónde ponerla.

Luego trabaja solo. Tras cada paso importante revisa las condiciones y continúa hasta que todas se cumplan. Decide detalles tú mismo. Si encuentras una decisión que es mía, elige la opción más cautelosa, márcala y sigue; la pregunta escríbela en el informe de entrega. Detente solo si sin mi respuesta no se puede avanzar. Si alguna condición no se puede cumplir, explica por qué y qué propones.

Cuando termines, escríbeme un informe de entrega. Para cada condición indica si está cumplida y la prueba para verificarlo: ruta o enlace al archivo, número y página de donde proviene, registro modificado o captura de pantalla. Bajo las condiciones escribe qué decidiste tú, qué me preguntas y en qué no estás seguro.

Tarea:

## En su herramienta

### Microsoft Copilot
Active Copilot Cowork en `copilot.cloud.microsoft` con el interruptor arriba junto a Chat. Adjunte la carpeta con materiales con el botón + desde OneDrive o SharePoint, o arrastre archivos desde el ordenador. Trabaja en la nube, así que puede cerrar el portátil; los archivos terminados están en el panel derecho y la regla se guarda como skill.
Copilot no tiene el comando `/goal`, confirme condiciones con la frase “Sí, trabaja”.

### ChatGPT
El modo más sencillo es Work: actívelo con el interruptor arriba en la web o en la app ChatGPT para ordenador, suba materiales y la tarea iniciada en la web sigue funcionando aunque cierre el portátil. El resultado está en el informe de entrega en el chat. Si los materiales están en una carpeta en el ordenador, use Codex en la app ChatGPT para ordenador, donde confirma condiciones con el comando `/goal`.

### Claude
En la app Claude para ordenador abra Cowork o Claude Code con la carpeta de materiales. La tarea corre mientras el ordenador esté encendido y la app abierta. En Claude Code confirme condiciones con el comando `/goal` y la app le notificará cuando termine.

### Gemini
Gemini Agent, que completa tareas largas solo, está solo para cuentas personales Google AI Pro o Ultra y no está en la UE. Con cuenta empresarial asigne la tarea por partes en la app Gemini: adjunte hasta 10 archivos con Add from Drive y ponga el prompt, añada más de diez y deje que complete la tabla. Guarde la tabla terminada con Export to Sheets y la regla como skill: escriba “Guárdalo como skill”.
## Qué es un agente

Un agente es una IA que hace pasos por usted: abre archivos y apps, elige el siguiente paso según el resultado y continúa hasta el objetivo. En modo Cowork o Code la IA trabaja así cada vez que le asigna una tarea.

Las condiciones de finalización son el objetivo que el agente persigue: mientras no se cumplan todas, sigue, y usted recibe el resultado al final según ellas. Para cada condición muestra prueba, así que la recepción toma minutos. En trabajos grandes puede haber veinte, para la primera tarea bastan tres a cinco. Una buena condición se verifica de un vistazo: cantidad, archivo, registro o número que compara con la fuente. Palabras como “claro” o “de calidad” el agente no puede cumplir ni probar, por eso cámbielas por algo que se pueda contar o abrir.

`AGENTS.md` es un archivo de texto con reglas para la IA en la carpeta donde trabaja; la extensión `.md` significa texto en [Markdown](glossary:markdown), un formato simple que abre cualquier editor. La IA lee el archivo al inicio de cada trabajo, así que la próxima vez solo escribirá la tarea y la IA propondrá las condiciones sola. La herramienta sin acceso a la carpeta guarda la regla en memoria o le dice dónde ponerla.
## Que el agente trabaje hasta terminar

Para tareas de toda una tarde o noche conviene un seguro para que el agente no termine antes de que se cumplan todas las condiciones. Algunas herramientas tienen el comando `/goal`, palabra que se escribe al inicio del mensaje; cuáles son se muestra en el bloque “En su herramienta”. En lugar de “Sí, trabaja” escriba `/goal` y copie las condiciones que propuso la IA. El agente empieza a trabajar, tras cada paso se revisan las condiciones y mientras no se cumplan todas, sigue solo:

```text
/goal En la tabla contratos-renovacion.xlsx hay una fila para cada uno de los 60 contratos en la carpeta Contratos. Para cada contrato hay fecha de fin, plazo de cancelación, número de artículo de donde proviene y precio anual sin IVA. Arriba están los contratos que hay que cancelar antes de fin de noviembre.
```
## Ejemplo

Petra es asistente del director financiero en una empresa constructora. El jueves 8/10/2026 por la tarde recibe la tarea: para el viernes un informe sobre cuáles de los 60 contratos con proveedores se renovarán automáticamente en enero. Petra abre la carpeta Contratos en IA en modo Cowork, inserta el prompt y tras la última línea escribe:

```text
Revisa los 60 contratos en la carpeta Contratos y averigua cuáles se renovarán automáticamente en enero y hasta cuándo se pueden cancelar.
```

La IA propone cuatro condiciones. Petra añade una quinta sobre el precio anual para que el director vea el monto y responde “Sí, trabaja”:

```text
1. En la tabla contratos-renovacion.xlsx hay una fila para cada uno de los 60 contratos en la carpeta Contratos.
2. Para cada contrato hay fecha de fin, plazo de cancelación y número de artículo de donde proviene.
3. Para cada contrato está indicado si se renueva automáticamente.
4. Arriba están los contratos que hay que cancelar antes de fin de noviembre, ordenados por fecha límite.
5. Para cada contrato está el precio anual sin IVA.
```

Petra deja el ordenador encendido y se va a casa. El viernes por la mañana encuentra en el chat el informe de entrega: 60 contratos y 60 filas en la tabla, once contratos se renuevan solos en enero y cuatro hay que cancelar antes del 30/11. Dos contratos fueron escaneados y el agente marcó datos para verificar. Petra abre tres datos en los contratos originales y todo coincide, en uno escaneado corrige la fecha de fin y envía la tabla al director. La próxima tarea larga la asignará con una frase, porque la IA propondrá las condiciones sola según la regla en `AGENTS.md`.
## Si se atasca

- **La IA termina tras una respuesta o dice que no puede abrir archivos:** está trabajando en un chat normal. Cambie a [Cowork o Code](card:when-chat-is-not-enough) según el bloque “En su herramienta”.
- **El agente termina antes de que se cumplan todas las condiciones:** dígale cuál no cumplió y que continúe. Si su herramienta lo permite, confirme condiciones la próxima vez con el comando `/goal`, como explica el bloque “Que el agente trabaje hasta terminar”.
- **Por la mañana encuentra la tarea detenida a mitad:** probablemente el ordenador se durmió o el agente esperaba permiso para modificar archivos. Dígale que continúe y la próxima vez permita modificaciones para toda la tarea y deje el ordenador enchufado.
- **La prueba no coincide con la fuente:** dígale al agente qué condición y qué no coincide para que corrija y pruebe de nuevo. Si quiere revisar todo el resultado, ayuda la [revisión de salida de IA](card:kontrola-vysledku).
## Qué estará terminado

Tiene una tarea larga terminada sin haber estado sentado y la recibió según la prueba para cada condición de finalización. En `AGENTS.md` en la carpeta o en la memoria de la IA está la regla por la que la IA en la próxima tarea larga propondrá condiciones sola, trabajará hasta que se cumplan todas y al final las probará.
## Qué sigue

Si la misma tarea se repite cada semana, prográmela como [tarea programada](card:recurring-ai-task).

Si un trabajo grande se puede dividir en partes que no se esperan entre sí, ejecútelas simultáneamente en [hilos paralelos](card:parallel-ai-workstreams).
## Agente

**Qué es:** Un sistema de IA que puede planificar múltiples pasos dentro de un objetivo dado, utilizar herramientas disponibles, gestionar el estado y ejecutar acciones autorizadas. El alcance de sus capacidades y el grado de autonomía dependen de la herramienta específica y los permisos.

**Qué no es:** No es solo un prompt almacenado ni un asistente renombrado con una función más avanzada.

**Por qué lo necesita el estudiante:** Ayuda a identificar tareas que requieren herramientas, permisos, puntos de control y una responsabilidad clara sobre las acciones.

## Markdown

**Qué es:** Un formato simple de texto plano en el que los encabezados, listas, enlaces y otras estructuras se escriben usando unos pocos caracteres comunes. Los archivos suelen tener la extensión `.md`.

**Qué no es:** No es un lenguaje de programación ni un formato exclusivo para desarrolladores.

**Por qué lo necesita el estudiante:** Permanece fácilmente legible y editable tanto para personas como para IA, y puede transferirse entre diferentes herramientas.

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
