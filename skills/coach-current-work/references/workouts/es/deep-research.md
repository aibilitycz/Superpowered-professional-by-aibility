# Realice una Investigación Profunda

Diga qué necesita averiguar y por qué. La IA revisará fuentes actuales, las comparará y preparará un informe que le ayudará a tomar una decisión.

## Realice una Investigación Profunda

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** para la formulación y revisión. La investigación en sí puede tomar más tiempo.
## Para qué sirve

Use Investigación Profunda cuando una respuesta rápida del chat no sea suficiente. Por ejemplo, al elegir un proveedor, comparar herramientas, prepararse para una reunión o buscar reglas actuales para un nuevo mercado.

El mejor resultado no surge de un tema amplio. “Herramientas para reportes” devolverá una lista general. “¿Cuáles tres herramientas pueden manejar reportes mensuales desde Excel para una empresa mediana en la UE y pueden implementarse en tres meses?” ya indica qué debe averiguar realmente la IA.
## Qué preparar

- la pregunta o tema,
- la decisión para la cual necesita la investigación,
- limitaciones importantes: período, mercado, presupuesto o las opciones que desea comparar,
- fuentes que prefiera o que quiera evitar.

Use una [herramienta de IA aprobada](card:bezpecne-pouzivani). También puede adjuntar
[el contexto de su trabajo](card:custom-instructions), si está permitido.
## Cómo hacerlo

1. Dígale a la IA qué necesita averiguar y qué hará con el resultado.
2. Revise la breve formulación de la investigación. Solo entonces inicie Research o
   Deep Research.
3. Abra las fuentes de dos afirmaciones en las que se base principalmente la conclusión. Si la fuente no respalda la afirmación, pida a la IA que corrija la conclusión.

El número de referencias por sí solo no prueba nada. Para precios o funciones de un producto, tiene sentido la documentación oficial. Para experiencias de implementación, también necesita una fuente independiente.
## Antes de iniciar la investigación

La función se llama Research o
[Deep Research](glossary:deepresearch) según la herramienta. En ChatGPT se inicia desde el panel lateral, el menú de herramientas (+) en la ventana de entrada o con el comando `/Deepresearch`.
La frase
“inicia Deep Research” no garantiza que la IA realmente busque en la web. Verifique que el modo esté disponible y activado en su cuenta. Si no lo está, la IA debe preparar la formulación que transferirá a otra herramienta aprobada.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt):

Ayúdame a hacer una Investigación Profunda sobre el tema que estoy tratando.

Primero averigua qué necesito saber y para qué decisión o tarea usaré el resultado. Completa solo los límites faltantes, por ejemplo, período, mercado, opciones a comparar, presupuesto o tipos de fuentes. Si ya tengo una investigación hecha, solicítala y pasa directamente a revisar fuentes y conclusiones.

Antes de iniciar, muéstrame una breve formulación de la investigación:
- la pregunta principal,
- qué compararás,
- qué es importante para la decisión,
- qué fuentes usarás preferentemente,
- qué debe contener el resultado.

Déjame corregir la formulación y espera confirmación.

Luego verifica si realmente tienes disponible en este entorno Research, Deep Research o búsqueda web. Si no puedes confirmarlo, no finjas haber realizado la investigación. Devuélveme la formulación lista para copiar a otra herramienta aprobada.

Al buscar:
- usa fuentes actuales para el período elegido y distingue la fecha de publicación del período al que se refiere el dato,
- da preferencia a documentos originales, datos, leyes y estudios,
- verifica información sobre funciones y condiciones del producto en su documentación oficial,
- compara afirmaciones de marketing del proveedor con una fuente independiente,
- distingue el estado actual de planes y funciones en desarrollo,
- muestra contradicciones entre fuentes y explica por qué pueden diferir,
- no presentes como verificado nada que no se haya podido abrir o comprobar.

Escribe el resultado como base para mi decisión:
1. respuesta breve a la pregunta principal,
2. comparación de opciones según lo que es importante para mí,
3. afirmaciones más importantes con enlaces directos y fecha de la fuente,
4. contradicciones y áreas que quedaron poco claras,
5. recomendación y sus desventajas,
6. qué debo hacer o verificar a continuación.

Elige dos afirmaciones en las que dependa más la recomendación. Para cada una dame un enlace directo y dime qué debo revisar en la fuente. Espera a que abra la fuente. Si la afirmación no se confirma o no aplica a mi situación, corrige la conclusión.

Devuelve el resultado para que pueda copiarlo. Puedes ofrecer guardarlo en un archivo, pero no escribas nada sin mi consentimiento.

## Ejemplo

El equipo financiero elige una herramienta para reportes mensuales. Añaden a la formulación Excel,
cuentas corporativas, operación en la UE e implementación en tres meses.

La IA no devolverá solo una lista de aplicaciones conocidas. Las comparará según estas condiciones. Precio y exportación de datos los respaldará con documentación oficial; experiencias de implementación las buscará en ejemplos independientes de empresas similares. Donde las fuentes difieran, dejará visible la diferencia.
## Si se atasca

- **El resultado es demasiado general:** añada mercado, período u opciones concretas.
  Ayuda el [acuerdo sobre el resultado](card:first-ai-use-case).
- **El enlace no confirma la afirmación:** muestre la diferencia a la IA y pida corregir la conclusión. Luego use la [Revisión del resultado](card:kontrola-vysledku).
- **Las fuentes se contradicen:** compare fechas y condiciones. La contradicción puede quedar abierta.
- **Research no está disponible:** lleve la formulación preparada a otro entorno aprobado. Para elegir, ayuda el [Modo de trabajo con IA](card:when-chat-is-not-enough).
## Qué obtendrá

Recibirá una Investigación Profunda con fuentes, contradicciones y áreas claramente señaladas que no se pudieron verificar. También sabrá qué dos afirmaciones verificó usted mismo y qué falta para la decisión.
## Qué sigue

Puede convertir la investigación en una [página web](card:web-page-output), guardar el proceso como [skill](card:create-skill-from-proven-process) o revisarla nuevamente con la
[Revisión del resultado](card:kontrola-vysledku).
## Investigación Profunda / Investigación

**Qué es:** Un modo o herramienta especializada para la búsqueda en múltiples pasos, comparación y síntesis de información de diversas fuentes en un resultado verificable.

**Qué no es:** No es una respuesta rápida común de chat ni una garantía de que cada enlace citado respalde realmente la afirmación en el texto.

**Por qué el estudiante lo necesita:** Ayuda a elegir el modo correcto para una pregunta compleja y recuerda que las fuentes importantes deben ser abiertas y evaluadas por una persona.

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

## Mecánica: Comprobación de preparación del argumento

Una breve comprobación al inicio de las tarjetas que generan una salida para otra persona. No es una tarjeta independiente y no tiene cumplimiento propio. Es el contrapunto a la mecánica `data-readiness-check`: aquella verifica si los datos están listos, esta verifica si la intención está preparada.

## Cuándo se activa

Cuando una persona prepara una salida que verá alguien más: presentación, informe, recomendación, propuesta, correo para la dirección, resumen para el cliente. No se activa para salidas propias, ni para investigación ni para notas en desarrollo.

## Por qué existe

La IA puede generar veinte diapositivas o tres páginas de informe de cualquier cosa y parecerá terminado. Una salida vacía no se diferencia a simple vista de una buena porque la parte que falta es la intención, no la forma. Tres frases de una persona son la forma más económica de detectarlo antes de crear, no después.

## Qué solicita a la persona

Tres cosas, y ninguna la propone la IA:

| Qué | Por qué la IA no puede determinarlo |
|---|---|
| **Audiencia** | quién está delante y qué saben esas personas, solo lo sabe la persona |
| **Cambio** | qué debe hacer o decidir diferente la audiencia tras leerlo |
| **Frase clave** | la única frase que deben recordar si olvidan todo lo demás |

## Prueba de inversión

La frase clave se reconoce por dos propiedades: se puede estar en desacuerdo con ella y cabe en una sola respiración. La prueba es invertirla al opuesto.

- *Queremos mejorar la experiencia del cliente* → el opuesto es absurdo, por lo que la frase no dice nada.
- *Detengamos el desarrollo de la segunda aplicación y volvamos a la primera* → el opuesto tiene sentido y alguien lo defenderá. Esta es la frase clave.

Si la frase no pasa, la IA lo dice y deja que la persona la reescriba. No la reescribe por ella.

## Qué hace la IA

1. Solicita las tres frases y espera a que las entreguen. No las sugiere ni comenta.
2. Realiza la prueba de inversión. Si la frase no pasa, explica por qué y la devuelve a la persona.
3. Pregunta si el formato corresponde a la intención. Si otro formato provocaría mejor el cambio, ofrece la tarjeta `output-beyond-document` y deja la decisión a la persona.
4. Cuando las tres frases están listas, continúa directamente con el ejercicio principal de la tarjeta y no vuelve a ellas.

## Qué queda para la persona

- determinar la audiencia y el cambio,
- escribir y, si es necesario, reescribir la frase clave,
- decidir si el formato se ajusta a la intención,
- decidir qué es contexto y qué se omite si falta tiempo.

## Salida de la mecánica

Tres líneas dentro del resultado principal de trabajo, sin documento independiente ni otro check-in:

```text
Audiencia: ...
Cambio que debe provocar la salida: ...
Frase clave: ...
```

## Enrutamiento

- **Las tres frases están claras:** continuar con el ejercicio principal de la tarjeta.
- **La frase clave no pasa la prueba de inversión:** dejar que la persona la reescriba, no continuar.
- **No se puede escribir la frase:** generalmente la decisión no se ha tomado o la salida tiene dos objetivos. Dividir en dos salidas.
- **El cambio se provocaría mejor con otro formato:** tarjeta `output-beyond-document`.
- **Faltan materiales o contexto:** tarjeta `prace-s-kontextem`.
- **La salida ya existe y se va a enviar:** tarjeta `kontrola-vysledku`.

## Límites

- La mecánica no evalúa la calidad del contenido ni la veracidad de las afirmaciones. Eso lo hace la revisión del resultado sobre la salida terminada.
- No se activa para salidas propias; preguntar por la audiencia en notas propias es un ritual, no ayuda.
- Si la persona conoce y escribe las tres frases en medio minuto, la mecánica termina. No retrasa a quien tiene la intención.

## Bloque mínimo de prompt

```text
Antes de empezar a crear cualquier cosa, pídeme tres cosas y espera a que las entregue: para quién es la salida, qué debe cambiar tras ella y cuál es la única frase que debe transmitir. No me las sugieras.

Luego intenta invertir mi frase clave al opuesto. Si el opuesto suena absurdo, dime que la frase no afirma nada y déjame reescribirla. No la reescribas por mí.

Cuando las tres frases estén listas, continúa directamente con la tarea principal y no vuelvas a ellas. Si otro formato provocaría mejor el cambio que el que quiero, dilo en una frase y deja la decisión en mí.
```

## Guardar para la próxima vez

Mecánica opcional de producto tras generar una salida utilizable. No es una tarjeta independiente, no tiene finalización propia ni incrementa el conteo de métodos completados.

## Cuándo se ofrece
- la persona marcó la salida como utilizable,
- durante el trabajo se creó una instrucción corregida, estilo, árbol de decisiones, handoff u otro elemento repetible,
- es probable que el mismo tipo de trabajo vuelva a aparecer.

La mecánica no aparece para resultados únicos sin parte transferible o donde no está claro un guardado seguro.

## Qué verá la persona
Una opción breve **Guardar para la próxima vez** junto al check-in común. Al abrirse, la IA sugerirá automáticamente:

- qué del resultado es aplicable repetidamente,
- qué cambiará cada vez,
- qué debe revisar la persona en el próximo uso.

La persona solo confirma o corrige la sugerencia. La mecánica no crea formularios obligatorios adicionales.

## Qué crea la IA
La salida reutilizable mínima que corresponde al trabajo real:

- una preferencia personal breve,
- una instrucción o prompt,
- un registro en Markdown o second brain,
- actualización de proyecto o asistente,
- base para skill,
- cambio en workflow existente.

Si ya existe un artefacto adecuado, la IA actualiza su versión actual en lugar de crear una copia nueva.

## Dónde pertenece el contenido
| Tipo de contenido | Lugar predeterminado |
|---|---|
| Preferencia personal pequeña sin pasos procesales | memoria o perfil, si esta función está disponible y es adecuada |
| Instrucción canónica, ejemplo o descripción de procedimiento | Markdown, documento o second brain personal |
| Contexto limitado a un proyecto | instrucciones y archivos del proyecto |
| Rol repetido con contexto estable | asistente |
| Procedimiento estable con reglas, ejemplos y plantillas | skill |
| Varios pasos consecutivos | workflow; al elegir pasos y acciones, posiblemente rama agente |

La memoria no es almacenamiento canónico de procedimientos versionados. Puede guardar preferencia o enlace a fuente actual.

## Cuando la forma objetivo no está clara
La mecánica crea un handoff breve a la tarjeta [Cree un proyecto en su herramienta AI](card:asistent). No elige forma sin persona ni reemplaza tarjeta skill independiente.

## Seguridad y compartición
- La mecánica usa almacenes aprobados y reglas corporativas conocidas.
- Se separan datos del caso específico de la parte estable.
- Sin permisos no escribe en sistema compartido ni cambia accesos.
- Compartición en equipo inicia tras uso repetido, asignación de propietario y verificación por otra persona.

## Registro
Se puede añadir al check-in información de creación o cambio de artefacto reutilizable. No es cumplimiento independiente de tarjeta.

## Primeras tarjetas soportadas
- `when-chat-is-not-enough`
- `output-beyond-document`
- `asistent`
- `ai-workflow`
- `deep-research`
- `kontrola-vysledku`
- `custom-instructions`

## Planificar un bloque

Mecánica opcional de producto tras completar una tarjeta, cuyo resultado continúa con un trabajo que no cabe en quince minutos. No es una tarjeta independiente, no tiene finalización propia ni aumenta el número de métodos completados.

Las tarjetas son de quince minutos y terminan con un artefacto. Sin embargo, algunas tarjetas solo comienzan con un artefacto: se crea un mapa de fase, un resumen de investigación, un diseño de habilidad o dos ramas para integrar. La persona se va con un plan y sin tiempo, y luego vuelve al trabajo tras diez minutos entre reuniones, donde no se puede completar nada.

## Cuándo se ofrece

- la tarjeta terminó con un resultado utilizable y ese resultado es la tarea siguiente,
- ese trabajo tiene un final claro que se puede nombrar en una sola frase,
- al dividirlo en segmentos cortos habituales se descompondría, porque cada retorno comienza recargando el contexto.

La mecánica no aparece cuando el trabajo tras la tarjeta realmente cabe en quince minutos, cuando el siguiente paso espera a otra persona o a una aprobación, ni cuando el resultado de la tarjeta no tiene trabajo posterior.

## Qué verá la persona

Una opción corta **Planificar un bloque** junto al check-in común. Al abrirse, la IA solo pregunta una cosa: cuándo se dispone realmente de ese tiempo. El resto lo propone ella misma a partir de lo que surgió en la tarjeta.

## Qué crea la IA

Un resumen del bloque. La fuente es el resultado de la tarjeta recién completada; la mecánica no inventa un nuevo tema. Contiene cinco elementos:

- **una cosa**, nombrada tal como se ve terminada,
- **duración** entre 60 y 120 minutos, con lo que cabe y lo que no,
- **qué debe estar preparado de antemano**: accesos, datos, materiales, prompt de la tarjeta,
- **qué estará terminado al final**, es decir, un resultado concreto, no "avanzado" ni "en progreso",
- **qué hacer con el resto**, que no cabe en el bloque, para que no quede pendiente sin decisión.

Si resulta que una cosa son en realidad tres, la IA lo indicará y ofrecerá cuál pertenece al primer bloque. No propone dividir en tres bloques por adelantado.

## Tiempo activo versus espera

El bloque con IA tiene una estructura distinta al bloque de trabajo independiente, porque parte del tiempo lo ocupa la herramienta. La investigación, el agente, la generación larga o el procesamiento de datos duran minutos o decenas de minutos y la persona no tiene que estar presente.

Por eso el resumen distingue tres tipos de tiempo: trabajo activo de la persona, ejecución de la IA y espera por alguien más. Para la ejecución de la IA propone qué hacer mientras tanto, y esa actividad suele ser la preparación del siguiente paso del mismo resultado. Saltar a un trabajo no relacionado rompe el bloque, aunque parezca tiempo aprovechado.

Si la espera ocupa la mayor parte del bloque, la mecánica lo indica directamente: esa tarea pertenece más bien a [Deje que la IA trabaje cuando usted no está](card:recurring-ai-task).

## Calendario

La mecánica prepara el texto del evento: título según la cosa, duración y en la descripción lo que debe estar preparado de antemano. La persona puede anotarlo por sí misma.

La mecánica no escribe nada en el calendario ni en otro sistema compartido sin permiso ni envía invitaciones.

## Límites respecto a las tarjetas

| Qué no es | Dónde está |
|---|---|
| Tiempo reservado para un equipo que necesita decisiones del líder, reuniones canceladas y mentor disponible | tarjeta [Dé al equipo un bloque para un proyecto real de IA](card:ai-sprint) |
| Trabajo de IA cuando la persona no está presente | tarjeta [Deje que la IA trabaje cuando usted no está](card:recurring-ai-task) |
| Desglose del proyecto en pasos y roles | tarjeta [Cree AI-WBS para la primera fase del proyecto](card:ai-wbs-project) |

La persona se asigna el bloque por sí misma y no necesita permiso de nadie. Así se diferencia del sprint, donde ese permiso es parte esencial del trabajo.

## Qué no contiene la mecánica

Instrucciones para concentrarse, recomendaciones sobre el teléfono, notificaciones y ambiente. La biblioteca enseña recorridos. Consejos de este tipo convertirían la mecánica en un sermón sobre el trabajo en lugar de preparar un bloque concreto.

## Registro

Se puede añadir al check-in la información de que se creó un resumen del bloque. No es un cumplimiento independiente de la tarjeta. La mecánica no supervisa si el bloque se realizó.

## Primeras tarjetas soportadas

- `ai-wbs-project`
- `deep-research`
- `ai-workflow`
- `create-skill-from-proven-process`
- `parallel-ai-workstreams`

Otras tarjetas con trabajo posterior de más de quince minutos, como `risk-based-prototyping`, `optimize-then-automate`, `prace-s-daty` y `sjednotit-data-z-vice-zdroju`, son candidatas para una segunda ola. Implementar la mecánica en la mitad de la biblioteca desde el principio convertiría la opción en ruido.
