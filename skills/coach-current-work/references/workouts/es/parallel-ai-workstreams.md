# Divida el trabajo en hilos paralelos: la IA hace todas las partes a la vez

El trabajo más grande se termina antes porque la IA lo divide en partes y ejecuta cada una simultáneamente en su propio hilo.

## Divida el trabajo en hilos paralelos: la IA hace todas las partes a la vez

**Dificultad: media.**\
**Tiempo: aproximadamente 15 minutos** con trabajo más grande, los hilos luego corren solos.
## Para qué sirve

El jueves presentas a la dirección un resumen trimestral: cifras de exportación, quejas
de clientes y novedades de la competencia. Una IA haría las partes una tras otra,
pero ninguna espera a otra y pueden ejecutarse simultáneamente.

Ayudan los [hilos paralelos](glossary:parallel-ai-workstreams): cada parte
recibe su propio hilo, es decir, un chat independiente con su tarea, y todos corren
al mismo tiempo. Al final, el primer hilo, el coordinador, compara los resultados y te prepara
los puntos para decidir.
## Qué preparar

- un trabajo más grande que tenga al menos dos partes que no se esperen entre sí,
- materiales en una carpeta,
- IA en modo Cowork o Code; dónde encontrarlo se muestra en el bloque “En tu
  herramienta”.
## Cómo hacerlo

1. Deja que la IA divida el trabajo en partes que no se esperen entre sí. Abre la IA en
   la carpeta con los materiales, inserta el prompt y escribe lo que se necesita. Confirma la división.
2. Ejecuta todos los hilos a la vez. La IA los iniciará sola, o te escribirá una frase para cada parte;
   pégala en un nuevo hilo en la misma carpeta. Cuando el hilo pregunte, respóndele.
3. Decide los puntos abiertos de la comparación. Cuando los hilos terminen, escribe
   “terminado” en el primer hilo. La IA mostrará discrepancias y, tras tu decisión,
   unirá los resultados.

Cada hilo escribe solo en su propia carpeta.
## Ejercicio de IA

Inserta este [prompt](glossary:prompt) en la IA en modo Cowork o Code,
abierta en tu carpeta, y al último renglón escribe lo que hay que hacer:

Ayúdame a hacer un trabajo más grande más rápido: divídelo en partes que correrán simultáneamente, cada una en su propio hilo. Tú serás el coordinador. El trabajo está en el último renglón.

Revisa los materiales en la carpeta y propone de dos a cinco partes. Para cada una, escribe en una frase por qué puede terminar sin conocer el resultado de las otras. Lo que dependa de otra parte, déjalo con esa parte o ponlo al final para la unión. Muéstrame la división y espera a que la confirme o corrija.

Para cada parte confirmada crea la carpeta hilos/01-nombre, hilos/02-nombre, etc., y dentro un archivo zadani.md. La tarea debe incluir: objetivo de la parte, de qué materiales parte, dos o tres condiciones para saber que está terminada, y la instrucción “Escribe solo en esta carpeta, no cambies nada más. Al final guarda aquí resultado.md: qué está terminado, qué no encaja y qué preguntas tienes.” En hilos/comparacion.md escribe la lista de partes y su estado.

Guarda en el archivo AGENTS.md en la carpeta la regla: “Cuando recibas un trabajo con al menos dos partes que no se esperan entre sí, propone dividirlo en hilos paralelos. Cada hilo tiene su propia tarea y carpeta; dos hilos nunca escriben en la misma carpeta. Cuando ejecutes partes como subagentes, lanza máximo diez a la vez y antes del siguiente lote dame un breve estado de lo que regresó. Al final compara los resultados lado a lado y dame los puntos abiertos para decidir.” Si AGENTS.md no existe, créalo. Si esta herramienta no lo lee sola, configura para que lo lea al inicio de cada trabajo; en Cowork ponlo en las instrucciones de la carpeta. Si no tienes acceso a la carpeta, guarda la regla en memoria; si no sabes cómo, dime exactamente dónde ponerla.

Luego lanza las partes simultáneamente como hilos independientes que pueda ver y en los que pueda escribir. Si sabes iniciar o proponer un hilo tú mismo, hazlo. Si no, escríbeme una frase para cada parte que pegaré en un nuevo hilo en la misma carpeta, por ejemplo “Haz la tarea del archivo hilos/01-cifras/zadani.md.” Si no sabes trabajar con carpetas, escríbeme la tarea completa y te pegaré los resultados.

Cuando escriba “terminado”, lee lado a lado todos los archivos resultado.md y las salidas o resultados que te pegue. En hilos/comparacion.md escribe para cada parte si cumplió las condiciones, dónde los resultados se contradicen o falta algo, y los puntos abiertos que decido yo. No combines discrepancias en un compromiso, muéstrame ambos lados. Tras mi decisión une las salidas en un solo resultado en el formato que necesite (por ejemplo Word o presentación) y guárdalo en la carpeta; si no digo formato, pregúntame.

Trabajo:

## En tu herramienta

### Microsoft Copilot
Activa Copilot Cowork en `copilot.cloud.microsoft` con el interruptor arriba junto a
Chat y adjunta materiales con el botón +. Una tarea nueva no ve lo que escribió otra,
por eso añade bajo tu tarea “Escríbeme toda la tarea completa”. Inserta cada una en una tarea nueva con los materiales nombrados; luego pega los resultados con “terminado” en la primera
que vuelvas a abrir en Tasks. La regla se guarda como skill, es decir, una guía guardada.

### ChatGPT
En la app ChatGPT para PC cambia a Codex y elige abrir carpeta (open a folder); si no ves Codex, pide al administrador que lo active. Cada hilo inicia como chat nuevo en el mismo proyecto, es decir, carpeta abierta; los chats están en Chats y puedes escribir en el que está activo. Para código elige Worktree bajo el campo de mensaje.

### Claude
En la app Claude para PC lanza cada parte como tarea nueva en Cowork, o como sesión nueva en Claude Code (New session); Claude Code ofrece sesiones nuevas y solo hay que hacer clic. Corren lado a lado en el panel lateral y puedes escribir en cada hilo. Para código elige worktree al iniciar sesión para que tenga copia propia del repositorio.

### Gemini
Gemini no trabaja con carpetas en PC y el agente que completa la tarea solo es para cuentas personales fuera de la UE. Por eso te escribirá las tareas de los hilos en la respuesta: inserta cada una en un chat nuevo, adjunta materiales con Add from Drive y pega los resultados terminados en el primer chat para comparar. Si lo haces seguido, pide a IT una herramienta con modo Code.
## Qué son los hilos paralelos

Un hilo es un chat o tarea independiente con su propia tarea, visible en el panel lateral de la herramienta y en el que puedes escribir en cualquier momento. Los hilos paralelos corren simultáneamente, cada uno en una parte del trabajo. El primer hilo, donde diste la tarea, es el coordinador: divide, escribe la tarea y al final compara resultados.

La división funciona solo si las partes no se esperan entre sí. Antes de lanzar una parte, pregunta: ¿la terminará el hilo aunque no conozca el resultado de los demás? Si no, pertenece a la parte de la que depende. La segunda regla es un solo escritor por carpeta: dos hilos que modifican el mismo archivo se sobreescriben, por eso cada uno tiene su carpeta. Las tareas y resultados de los hilos son archivos de texto `.md`, que lee principalmente la IA; el resultado final se guarda en el formato que necesites.

En trabajos grandes con muchas partes, el coordinador puede lanzar las partes como [subagentes](glossary:subagent), es decir, ayudantes en segundo plano, cuyos resultados recoge y te pasa las preguntas. La regla que guarda el prompt en `AGENTS.md`, archivo de texto con reglas para la IA en tu carpeta, limita a diez simultáneos y antes del siguiente lote da un breve estado para que sepas qué regresó.
## Ejemplo

Jana es gerente de atención al cliente en una tienda online de muebles. El martes 13/10/2026 por la mañana recibe la tarea de preparar para la reunión del jueves un resumen del tercer trimestre. En la carpeta Resumen Q3 tiene la exportación de 2,300 tickets del trimestre con textos de quejas y enlaces a webs de tres competidores. Inserta el prompt y al último renglón escribe:

```text
Resumen de atención al cliente Q3 para la reunión del jueves: cifras de exportación de tickets, cinco quejas más frecuentes de tickets y qué cambiaron tres competidores en el trimestre.
```

La IA propone tres partes (cifras, quejas, competencia) y para cada una escribe por qué no espera a las otras. Jana confirma la división y lanza los tres hilos a la vez. El hilo de quejas pregunta a los diez minutos si debe contar las reclamaciones por productos dañados como quejas. Jana responde “sí, por separado” y en 40 minutos los tres están listos.

El coordinador encuentra una discrepancia en la comparación: según las cifras, el tiempo de respuesta bajó de 14 a 6 horas, pero la segunda queja más frecuente es la respuesta lenta. La mayoría de esas quejas son de julio, cuando el cambio aún no aplicaba. Jana decide mostrar tiempo de respuesta y quejas por meses y la IA une las partes en un documento Word `resumen-q3.docx`.
El resumen está listo el martes antes del mediodía y Jana tiene el miércoles para preparar la reunión.
## Si te atascas

- **Una parte espera el resultado de otra:** escribe en el primer hilo que la una con la parte de la que depende o que la deje para el final en la unión.
- **Dos hilos modificaron el mismo archivo:** falta carpeta propia en la tarea.
  Pide al primer hilo que corrija la tarea y lanza la parte de nuevo.
- **La IA dice que no ve archivos en la carpeta:** trabajas en chat normal.
  Cambia a [Cowork o Code](card:when-chat-is-not-enough) según el bloque “En tu herramienta”.
- **Los resultados se contradicen:** deja la discrepancia en la comparación y decídela tú mismo.
  Para revisar todo el resultado ayuda
  [revisión de salida IA](card:kontrola-vysledku).
## Qué estará listo

Tienes un trabajo más grande terminado, cuyas partes corrieron simultáneamente, cada una en su propio hilo y carpeta, y una comparación con discrepancias y decisiones que tomaste. En
`AGENTS.md`, o en las instrucciones de la carpeta o memoria IA, está la regla para que la IA divida sola trabajos similares la próxima vez.
## Qué sigue

Si la división te funciona y el trabajo se repite, por ejemplo cada trimestre,
guárdalo como [skill](card:create-skill-from-proven-process).
## Hilos paralelos

**Qué es:** Dos o más partes de un mismo proyecto que reciben asignaciones propias y pueden trabajar simultáneamente en hilos o herramientas de IA separados. Sus resultados se integran finalmente de forma controlada.

**Qué no es:** No son varios roles comentando la misma decisión ni una serie de pasos donde el segundo espera el resultado del primero.

**Por qué lo necesita el estudiante:** Ayuda a identificar cuándo el trabajo paralelo realmente aumenta la capacidad y cuándo solo añade una coordinación más compleja.

## Prompt

**Qué es:** Instrucción para una interacción específica con la IA.

**Qué no es:** No es lo mismo que un contexto a largo plazo, un asistente almacenado o un agente.

**Por qué lo necesita el estudiante:** Inicia el ejercicio y guía su desarrollo; no es el contenido principal de aprendizaje.

## Subagente

**Qué es:** Un agente independiente que el agente coordinador crea para una tarea parcial específica. Recibe su propia asignación y contexto, trabaja por separado y devuelve el resultado al coordinador.

**Qué no es:** No es simplemente una bifurcación de una conversación. Un fork crea una nueva rama para una persona; el subagente puede ser iniciado, dirigido e integrado en el resultado común por el propio coordinador.

**Por qué el estudiante lo necesita:** Ayuda a distinguir el trabajo manual paralelo en varios chats de una configuración de agentes, en la que la delegación y el seguimiento de tareas parciales los asume el coordinador.

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
