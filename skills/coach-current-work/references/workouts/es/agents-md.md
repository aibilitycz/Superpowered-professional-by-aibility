# Cree su AGENTS.md: reglas para IA en un solo archivo

La IA escribe las instrucciones que repite constantemente en un solo archivo y las sigue en cada tarea.

## Cree su AGENTS.md: reglas para IA en un solo archivo

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con la carpeta en la que trabaja con la IA.
## Para qué sirve

El lunes escribe a la IA para una nueva oferta lo mismo que la semana pasada: tratar al cliente de usted y mostrar precios con IVA. El miércoles abre un chat nuevo para otra oferta y vuelve a escribir las instrucciones. Su compañera, que hace las ofertas cuando usted está de vacaciones, tiene reglas diferentes en la IA, y el cliente recibe precios una vez con IVA y otra sin.

`AGENTS.md` es un archivo con reglas en su carpeta de trabajo que la IA lee al inicio de cada tarea, así que solo dice las instrucciones una vez y valen también para la compañera que trabaja en la misma carpeta.
## Qué preparar

- la carpeta en la que trabaja con la IA, por ejemplo la carpeta del proyecto en curso,
- las instrucciones que repite constantemente a la IA o sus propias instrucciones de otra IA,
- IA en [modo](glossary:workmode) Cowork o Code que trabaja con archivos en el ordenador.
## Cómo hacerlo

1. Abra Cowork o Code en la carpeta preparada, habilite la edición de archivos e inserte el prompt. La IA le preguntará por las instrucciones, las escribirá en `AGENTS.md` y se asegurará de leerlo en cada tarea.
2. Lea las reglas que la IA le muestre. Si algo no encaja o falta, dígaselo a la IA y ella corregirá el archivo.
3. En un chat nuevo, preferiblemente en la segunda herramienta, introduzca la tarea y escriba: “Enumere los archivos con reglas que se cargaron al inicio del trabajo y las reglas según las cuales se generó el resultado.”
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA en modo Cowork o Code, abierta en su carpeta:

Cree en esta carpeta un archivo AGENTS.md con reglas para IA, para no tener que repetirle las mismas instrucciones en cada chat y en cada herramienta de IA.

Pregúnteme por las instrucciones que más repito a la IA. Pregunte por áreas: idioma y tratamiento, cómo escribir, qué nunca hacer y qué verificar antes de entregar. Si le doy instrucciones propias de otra herramienta de IA o si encuentra en esta carpeta un archivo con reglas para IA, tome de allí las instrucciones que valen para cada tarea.

Cada regla escríbala en una línea con una instrucción concreta, por ejemplo “Escribe precios con IVA y moneda”. Cambie consejos generales como “sé preciso” por instrucciones concretas. Si no está claro por qué la regla vale, añada la razón. Ordene las reglas bajo títulos según las áreas y mantenga el archivo corto para que quepa en una pantalla.

Al final del archivo añada la regla: “Si le corrijo y la corrección debe valer para la próxima vez, escríbala en AGENTS.md como regla nueva y dígame qué añadió.”

Luego compruebe si esta herramienta lee AGENTS.md sola al inicio de cada tarea en esta carpeta. Si no, configúrela para que se cargue automáticamente; en Cowork escríbalo en las instrucciones de la carpeta. Si tomó reglas de otro archivo con reglas para IA, deje en él solo una línea que cargue AGENTS.md para que las reglas no estén en dos sitios, y dígame qué cambió. Si no puede configurarlo usted mismo, dígame dónde en la configuración hacerlo y qué poner.

Finalmente muéstreme el AGENTS.md terminado y dígame si esta herramienta lo lee sola o qué configuró.

## En su herramienta

### Microsoft Copilot
Copilot Chat no lee el archivo: al final del prompt añada “No tienes carpeta, escríbeme las reglas como texto para Custom instructions.” y pegue el texto en Settings and more, Chat settings, Personalization. El paso 3 hágalo en un chat nuevo preguntando según qué instrucciones se generó el resultado. En Cowork, junto al interruptor Chat, las reglas van en Customize, Preferences.

### ChatGPT
En la aplicación ChatGPT para ordenador cambie a Codex y elija abrir carpeta (open a folder); Codex lee `AGENTS.md` solo. En un chat normal la IA le escribirá las reglas como texto para Custom instructions (Settings, Personalization) o para instrucciones del proyecto (Project settings). El paso 3 hágalo en un chat nuevo y pregunte según qué instrucciones se generó el resultado.

### Claude
En Claude Code la IA lee `AGENTS.md` sola. En Cowork, que abra en la aplicación Claude para ordenador y seleccione la carpeta, la IA escribirá en las instrucciones de la carpeta (Folder instructions) que lea el archivo. En un chat normal de Claude las reglas van en instrucciones del proyecto (Set project instructions).

### Gemini
Gemini no lee `AGENTS.md` y las cuentas corporativas no tienen memoria. Inserte el prompt en Gemini y guarde las reglas vía Share & export, Export to Docs. En Gems, New Gem escriba en Instructions “Sigue las reglas del documento adjunto” y añada el documento a Knowledge. El paso 3 hágalo en un chat nuevo con este Gem, que compartirá con sus colegas vía Share.
## Qué es AGENTS.md

`AGENTS.md` es un archivo de texto simple con reglas para IA: qué idioma usar, cómo escribir, qué nunca hacer y qué verificar antes de entregar. Se llama así por los [agentes](glossary:agent), es decir, IA que trabaja con archivos y realiza pasos por usted. La extensión `.md` significa que está escrito en [Markdown](glossary:markdown), donde los signos de número `###` al inicio de línea indican títulos.

Muchas herramientas en modo Code leen el archivo solas al inicio de cada tarea en la carpeta donde está. Donde la herramienta no puede hacerlo sola, la IA guarda la regla en su configuración o le dice dónde ponerla. Y cuando corrige la IA, la nueva regla se añade al archivo.

En el archivo van las instrucciones que valen para cada tarea en esa carpeta; los materiales para una tarea y peticiones puntuales déjelas en el chat. Si en el paso 3 la IA omite una regla que valía para la tarea, pídale que la reescriba más claramente en el archivo.

Un chat normal no lee `AGENTS.md` solo. Si solo usa chat, guarde las instrucciones en [instrucciones propias](card:custom-instructions); cómo cambiar a Cowork o Code muestra la tarjeta [Chat, Cowork o Code](card:when-chat-is-not-enough).
## Que las reglas se completen solas

La regla al final de `AGENTS.md` asegura que si corrige la IA y la corrección debe valer para la próxima vez, la IA la escriba en el archivo. Pero en unas semanas las reglas se repetirán o se contradecirán y un archivo largo la IA cumple peor. Si quiere que siga corto, pídale a la IA que lo limpie una vez al mes con una tarea programada. Inserte esta tarea en IA en modo Cowork o Code y pídale que cree la tarea programada:

```text
Cada primer viernes del mes a las 16:00 revisa AGENTS.md en esta carpeta. Fusiona reglas que digan lo mismo en una sola y ordénalas bajo los títulos correctos. Al final escríbeme qué cambiaste y enumera pares de reglas que se contradicen para que decida cuál vale.
```

Si la tarea trabaja con archivos en su ordenador, solo funcionará si el ordenador está encendido y la aplicación abierta.
## Ejemplo

Lucía dirige el soporte al cliente en una tienda online de electrodomésticos de cocina y escribe respuestas a reclamaciones con IA en dos herramientas que trabajan con una carpeta en el ordenador. El lunes 12/10 abre en la primera herramienta la carpeta `Reclamaciones` e inserta el prompt. Responde a las preguntas, añade sus instrucciones propias guardadas en un chat normal, y la IA escribe:

```text
### Idioma y tratamiento
- Escribe en checo y trate a los clientes de usted.
- Firma como “Lucie Králová, soporte al cliente”.

### Cómo escribir
- En la primera frase diga qué haremos por el cliente.
- La respuesta tiene máximo seis frases y sin frases introductorias como “Espero que esté bien”.

### Qué nunca hacer
- No prometa devolución de dinero. Eso lo decide la gerente de reclamaciones.

### Qué verificar antes de entregar
- Compare el número de pedido y fechas con el correo del cliente.

### Cómo completar las reglas
- Si te corrijo y la corrección debe valer para la próxima vez, escríbela en AGENTS.md como regla nueva y dime qué añadiste.
```

La IA guarda el archivo y se asegura de que la herramienta lo lea al inicio de cada tarea. El martes Lucía abre la misma carpeta en la segunda herramienta y solo escribe: “Responde a la señora Dvořáková sobre la reclamación de la batidora de su correo en la carpeta.” Luego añade: “Enumera los archivos con reglas que se cargaron al inicio del trabajo y las reglas según las cuales se generó la respuesta.” La IA muestra `AGENTS.md`, escribe la respuesta con tratamiento de usted y firma, y enumera cuatro reglas. Omitió la regla de la primera frase y la respuesta empieza con una disculpa. Lucía pide que la IA reescriba esa regla más claramente, y en `AGENTS.md` ahora dice: “Empieza la respuesta con una frase sobre qué haremos por el cliente y para cuándo, por ejemplo ‘Le cambiaremos la batidora antes del viernes 16/10’. La disculpa escríbala después.”
## Si se atasca

- **La IA dice que guardó el archivo pero no está en la carpeta:** probablemente trabaja en un chat normal que no puede modificar archivos en el ordenador. Cambie a [Cowork o Code](card:when-chat-is-not-enough) y abra la carpeta allí.
- **`AGENTS.md` falta entre los archivos cargados:** abra el chat directamente en la carpeta donde está `AGENTS.md`, no en una subcarpeta. Si falta también entonces, escriba: “Haz que `AGENTS.md` se cargue en esta herramienta al inicio de cada tarea.”
- **La IA cumple la regla solo a veces:** probablemente la regla es general, por ejemplo “escribe breve”. Pida a la IA que la reescriba como instrucción concreta, por ejemplo “máximo seis frases”.
- **Necesita las reglas también en otra carpeta:** pida a la IA que las guarde en esta herramienta también en instrucciones comunes que valen en todas las carpetas.
## Qué tendrá listo

Tiene en la carpeta el archivo `AGENTS.md` con instrucciones que antes repetía a la IA, y las herramientas en las que lo probó lo leen al inicio de cada tarea. En un chat nuevo verificó que el archivo se cargó y qué reglas usó la IA, y reescribió reglas poco claras. Cuando corrija la IA la próxima vez, la nueva regla se añadirá al archivo.
## Qué sigue

Si una regla se convierte en un procedimiento completo con varios pasos, por ejemplo cómo preparar un informe mensual, pida a la IA que haga un [manual que use de nuevo](card:create-skill-from-proven-process). Si todo el equipo debe usar los mismos materiales y reglas, pida a la IA que escriba un [README del proyecto](card:project-start-here).
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
