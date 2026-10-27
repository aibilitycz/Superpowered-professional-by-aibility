# Cree una skill: una guía que la IA recuerda

De una tarea que completó con la IA, esta escribe una skill y la siguiente ronda la asigna con una sola frase.

## Cree una skill: una guía que la IA recuerda

**Dificultad: media.**\
**Tiempo: aproximadamente 15 minutos** con el chat donde completó la tarea.
## Para qué sirve

Cada viernes envía a la dirección el estado de sus tres proyectos. La IA le ayuda con ello, pero
cada vez debe explicarle de nuevo con qué materiales armarlo, que arriba deben
estar tres frases, debajo una tabla de fechas y los riesgos al final. Si olvida algo,
el estado se ve diferente que la semana pasada y el director pregunta qué cambió.

[Skill](glossary:skill) es una guía para la IA sobre un tipo de trabajo, que la IA escribe
a partir de un chat terminado y usa sola la próxima vez, para que no tenga que explicarle nada otra vez.
## Qué preparar

- chat donde completó con la IA una tarea que hace regularmente y de la misma forma,
- materiales para la siguiente tarea del mismo tipo; ahí usará la skill de inmediato,
- IA que pueda guardar skills, por ejemplo en [modo](glossary:workmode) Cowork o Code.
## Cómo hacerlo

1. Abra el chat donde completó la tarea con la IA. Si no tiene uno, haga la tarea con la IA y corríjala hasta que el resultado sea correcto.
2. Al final del chat inserte el prompt. La IA escribirá la skill a partir del chat, la guardará y le dirá dónde encontrarla; si necesita que haga clic, le indicará dónde.
3. Abra un chat nuevo, adjunte los materiales para la siguiente tarea y asígnele con una sola frase, por ejemplo “Escribe el estado del proyecto Mudanza de almacén”. La IA debería usar la skill automáticamente.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA que usa en el trabajo:

Esta tarea la haré de nuevo. Escribe a partir de lo que hicimos en este chat una skill para que la próxima vez baste con asignarla con una sola frase y no haya que explicar nada.

Revisa todo el chat y toma lo que funcionó: pasos, materiales que necesitaste y la forma del resultado que finalmente me convenció. Incorpora mis correcciones durante el trabajo directamente en los pasos. Lo que cambie la próxima vez, como el nombre del proyecto, fecha o números, no lo pongas en la skill; solo indica que debes solicitarlo.

La skill debe tener estas partes:
- nombre según el trabajo, por ejemplo Estado del proyecto para dirección,
- cuándo usarla: frases con las que normalmente asigno esa tarea,
- qué necesitas recibir y qué preguntar si falta algo,
- pasos,
- cómo es el resultado final.

Al final de la skill añade una regla: si corrijo el resultado, ofrece ajustar la skill según la corrección.

Guarda la skill para que esta herramienta la encuentre y use sola en el próximo trabajo. Si para guardar necesitas que haga clic, dime exactamente dónde. Si esta herramienta no sabe guardar skills, dímelo directamente. Finalmente dime dónde encontrar la skill y la frase con la que asignaré la tarea la próxima vez.

## En su herramienta

### Microsoft Copilot
Cowork tiene skills junto al interruptor Chat; si no está, pida al administrador de TI que lo habilite. En Cowork crea la skill en Customize, Skills (Add, Create new), o pídale a la IA que la cree en la tarea. Sin Cowork, pida que la IA escriba la skill como texto en Copilot Chat y péguela en un nuevo agente (New agent, Skip to configure, Instructions); en el paso 3 asigne la tarea en ese agente.

### ChatGPT
Las skills están en las tarifas empresariales Business y Enterprise en el panel lateral bajo Plugins, en la pestaña Skills, y el administrador las activa en la empresa. Si pide la skill en el chat, ChatGPT la escribe y ofrece instalarla (Install). Si no tiene skills activadas, pida que la IA escriba la skill como texto, péguela en las instrucciones del proyecto (New project, Project settings) y en el paso 3 asigne la tarea en ese proyecto.

### Claude
Claude soporta skills en todas las tarifas, en chat normal y en Cowork, y se encuentran en Customize, Skills. Requieren activar Code execution and file creation en Settings, Capabilities; en cuentas empresariales lo activa el administrador. Claude muestra durante el trabajo el nombre de la skill que usa.

### Gemini
Si en Customize ve Skills, crea la skill ahí (Create o Upload); Google las activa progresivamente en cuentas empresariales. Mientras tanto, pida a Gemini que escriba la skill como texto y guárdela como Gem, es decir, un asistente guardado con instrucciones propias: en Gems, New Gem pegue el texto en Instructions y añada el resultado anterior en Knowledge. En el paso 3 abra ese Gem y asigne la tarea ahí.
## Qué es una skill

Skill, en inglés habilidad, es una guía para la IA sobre un tipo de trabajo: cuándo usarla, qué necesita, pasos y cómo debe ser el resultado. La escribe la IA: completa la tarea una vez con ella y la IA escribe y guarda la skill a partir de lo que funcionó. Es un archivo de texto común, al que la IA puede añadir una plantilla o un resultado modelo.

La IA reconoce qué skill usar por la descripción de cuándo usarla. Por eso incluye frases con las que normalmente asigna la tarea, y por eso puede tener decenas de skills y la IA elige la correcta. Las herramientas que soportan skills suelen usar el mismo formato, por lo que la skill se puede trasladar a otra herramienta.

Las skills las usa la IA en modo Cowork o Code y en algunas herramientas también en chat normal; si su IA no sabe guardar skills, cambie según la pestaña [Chat, Cowork o Code](card:when-chat-is-not-enough). Si la IA usó la skill, lo verá por su nombre durante el trabajo (en Cowork en la tarea nueva); si no lo ve, pregúntele. El resultado debe tener la misma forma que antes y la IA volverá a pedir nombre del proyecto, fecha o números.

En la skill va lo que se repite: procedimiento, forma del resultado y sus correcciones.
## Que las skills se creen solas

El mejor momento para una skill es al terminar un trabajo que salió bien. Para que la IA le recuerde ese momento, déjela guardar una regla. En Cowork o Code, donde la IA trabaja con una carpeta en su computadora, la escribe en el archivo `AGENTS.md`. Es un archivo de texto común con reglas para la IA, que muchas herramientas en modo Code leen al iniciar cada trabajo; donde la herramienta no lo haga sola, la IA guarda la regla en su configuración o le dice dónde ponerla. En chat normal la IA guarda la regla en memoria. Inserte esto:

```text
Guarda una regla para cada trabajo siguiente: “Cuando terminemos una tarea que haré de nuevo, ofréceme escribir una skill a partir de ella.” Si trabajas en una carpeta, escríbela en el archivo AGENTS.md, y si no existe, créalo. Asegúrate de que esta herramienta la lea al iniciar cada trabajo; en Cowork ponlo en las instrucciones de la carpeta. En chat normal guarda la regla en memoria.
```
## Ejemplo

Jana coordina tres proyectos en una empresa constructora y cada viernes envía a la dirección su estado. El viernes 9/10 hace con la IA en modo Cowork el estado del proyecto Nuevo almacén. Le da el acta de la reunión y la tabla de fechas y la corrige dos veces: la dirección quiere tres frases arriba y los riesgos al final, no ocultos en el texto. Luego inserta el prompt y la IA guarda la skill:

```text
Estado del proyecto para dirección
- Cuándo usarla: “estado del proyecto”, “informe para dirección”, “cómo vamos con el proyecto”.
- Qué necesitas: nombre del proyecto, último acta de reunión y tabla de fechas. Si falta algo, pídelo.
- Pasos: del material selecciona lo hecho esta semana, compara fechas con el plan y encuentra retrasos.
- Resultado: tres frases arriba, debajo tabla de hitos con fecha y estado, al final riesgos y responsables.
- Si corrijo el resultado, ofrece ajustar esta skill según la corrección.
```

Esa misma tarde abre un chat nuevo, adjunta el acta y fechas del proyecto Mudanza de almacén y escribe solo “Escribe el estado del proyecto Mudanza de almacén”. La IA muestra que usa la skill Estado del proyecto para dirección y devuelve tres frases, tabla y riesgos sin que Jana explique nada. El tercer proyecto lo tiene listo en cinco minutos. Para fin de mes hará skills para actas y pedidos de materiales.
## Si se atasca

- **La IA responde que no sabe guardar la skill:** en cuentas empresariales el administrador suele activar las skills, así que escríbale; dónde activar muestra el bloque “En su herramienta”. Mientras tanto cambie a modo Cowork o Code. El chat no se transfiere, así que empiece de nuevo desde el paso 1. Más en la pestaña [Chat, Cowork o Code](card:when-chat-is-not-enough).
- **La IA no usó la skill en chat nuevo:** la descripción de cuándo usarla no coincide con las palabras con que asigna la tarea. Escriba su frase a la IA y pídale que ajuste la descripción en la skill. Mientras tanto escriba directamente “Usa skill” y su nombre.
- **La skill describe una tarea concreta:** nombre del proyecto, fecha o números anteriores no deben estar en la skill. Pida a la IA que los quite y los pida la próxima vez.
- **El resultado sigue sin ser correcto:** corríjalo en el chat y acepte si la IA ofrece ajustar la skill. Si el mismo error vuelve, busque la causa con la IA según la pestaña [Revise la salida de la IA](card:kontrola-vysledku).
## Qué tendrá listo

Tiene una skill para una tarea que hace regularmente y sabe dónde encontrarla. En chat nuevo la IA la usó sola y devolvió la siguiente tarea del mismo tipo con la misma forma que antes. Si corrige el resultado, la IA ofrece ajustar la skill según la corrección.
## Qué sigue

La skill no se ejecuta sola, espera que asigne la tarea. Si el estado de proyectos debe generarse cada viernes a las 12:00 sin usted, prográmelo como
[tarea programada](card:recurring-ai-task). Si usa el resultado de una skill como base para otro trabajo, por ejemplo un resumen para todo el departamento a partir de los estados, añada el segundo paso directamente en la skill.
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
