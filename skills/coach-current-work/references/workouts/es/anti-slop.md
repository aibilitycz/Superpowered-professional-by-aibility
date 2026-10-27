# Revise el texto con anti-slop: que no suene a AI

La IA detecta en el texto frases y promesas que delatan a la IA, las reescribe y supervisa futuros textos automáticamente.

## Revise el texto con anti-slop: que no suene a AI

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con un texto que desea enviar.
## Para qué sirve

El jueves envía a la señora Horáková de compras una oferta para el servicio de las furgonetas de la empresa. La introducción la escribió la IA y comienza con una frase sobre un socio confiable en tiempos difíciles, igual que otras cuatro ofertas sobre su mesa. Además, dice que la reparación se hará en 24 horas, aunque nadie en la empresa lo prometió.

Las frases generales y promesas no confirmadas desaparecen cuando la IA las compara con la solicitud y la lista de precios y las reemplaza por lo que realmente está en ellas.
## Qué preparar

- texto que desea enviar y que fue escrito total o parcialmente por IA,
- documentos base: solicitud, lista de precios o notas de la llamada,
- IA que usa en el trabajo o IA en [modo Cowork o Code](glossary:workmode).
## Cómo hacerlo

1. Inserte el prompt y debajo de la línea “Texto:” ponga el texto o el nombre del archivo en la carpeta; adjunte los documentos en el chat. La IA devolverá hallazgos y texto reescrito y omitirá las partes sobre archivos en el chat.
2. Dígale a la IA qué correcciones no desea y agregue lugares con `[COMPLETAR]` o déjelos tachar. La IA completará el texto, guardará la lista de frases con la regla y le dirá dónde.
3. En un chat nuevo, pida a la IA que escriba otro texto, por ejemplo, una respuesta al cliente. Las frases de la lista no deberían aparecer en él.

Solo deben incluirse en la lista las frases que puedan aparecer en otros textos.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA que usa en el trabajo:

Revise el texto al final de este mensaje antes de enviarlo. Contiene el nombre de un archivo en la carpeta o el texto completo. Encuentre frases que delaten que fue escrito por IA y reescríbalas para que suenen a una persona que conoce el tema.

Revise el texto con cuatro filtros:
- Concreción: afirmaciones y calificativos sin prueba, como “socio confiable” o “ahorrará significativamente”. Reemplace por números, nombres, fechas o situaciones de los documentos.
- Patrones: frases trilladas (“en estos tiempos acelerados”, “lo llevamos al siguiente nivel”, “no dude en contactarnos”), contrastes tipo “no solo X, sino Y” y conclusiones llamativas que no dicen nada.
- Ritmo: tres o más oraciones de igual longitud seguidas, cadena de oraciones cortas y tríos automáticos de palabras.
- Formato: guiones largos, emojis en lugar de viñetas y asteriscos de Markdown en texto donde no generan negrita, como en un correo.
Al final pregunte: ¿podría este texto estar en la web de cualquier empresa? Si es así, reescríbalo más concretamente.

No invente números, fechas, nombres ni promesas. Compare con los documentos en la carpeta o chat. Lo que no encuentre, marque con [COMPLETAR] y pregúnteme.

Devuelva primero los hallazgos: cita del texto, filtro que viola y mejor versión. Debajo, todo el texto reescrito. Le diré qué correcciones no quiero y agregaré lo que falta. Guarde el texto final en un archivo nuevo junto al original y dígame su nombre. Si pegué el texto en el chat, devuélvalo completo.

Luego guarde hasta cinco frases de los hallazgos que probablemente aparezcan en otros textos en el archivo anti-slop.md en la carpeta donde trabaja. Para cada frase, escriba con qué reemplazarla y debajo brevemente los cuatro filtros. Si el archivo existe, agregue solo las nuevas frases. En el archivo AGENTS.md en la misma carpeta agregue la regla: “Antes de mostrarme un texto que se enviará bajo mi nombre, revísalo según anti-slop.md.” Si AGENTS.md no existe, créelo. Asegúrese de leerlo en esta herramienta al comenzar cada trabajo; en Cowork agréguelo a las instrucciones de la carpeta. Si trabaja en chat común sin carpeta, no cree archivos y guarde solo la lista con la regla en su memoria: “Antes de mostrarme un texto que se enviará bajo mi nombre, revísalo según esta lista.” Finalmente, dígame dónde guardó la lista y la regla.

Texto:

## En su herramienta

### Microsoft Copilot
Pegue el texto en Copilot Chat y adjunte los documentos con + en el campo de mensaje.
Copilot confirma guardar en memoria con el mensaje Memory updated; el resumen está en configuración bajo Chat settings › Personalization › Saved memories. Sin memoria, escriba “Escribe la lista como texto” y péguela en Custom instructions en el mismo lugar. Copilot tiene skills en modo Cowork (Customize › Skills) si la empresa los activó.

### ChatGPT
En chat común ChatGPT guarda la lista en memoria (configuración, Personalization › Memory); sin memoria péguela en Custom Instructions en el mismo lugar. Con carpeta trabaja Codex en la app ChatGPT para PC: elija abrir carpeta (open a folder) y guarda anti-slop.md y regla en AGENTS.md automáticamente. ChatGPT tiene skills en planes Business, Enterprise y Edu.

### Claude
En chat común Claude guarda la lista con regla en memoria. En Cowork elige carpeta al asignar tarea y la IA registra el enlace a AGENTS.md en instrucciones de carpeta; Claude Code lee AGENTS.md solo. Claude tiene skills en chat, Cowork y Claude Code.

### Gemini
El lugar permanente para la lista es Gemini Gem, porque la cuenta laboral no tiene memoria.
Al final escriba “Escribe solo la lista de frases con la regla” y guárdela con Share & export › Export to Docs. Luego Gems › New Gem: en instrucciones “Revisa cada texto según la lista en el documento adjunto”, documento agregado desde Knowledge › Add from Drive. El paso 3 y otros textos hágalo en este Gem.
## Qué es anti-slop

Anti-slop es una revisión donde la IA encuentra frases típicas de IA en el texto y las reescribe con frases concretas de sus documentos. Slop es una palabra inglesa para desechos; en internet se usa para textos que la IA produce sin cuidado y que podrían estar en la web de cualquier empresa. La IA no inventa números ni fechas; lo que no encuentra en los documentos marca y pregunta.

La revisión se basa en cuatro filtros del prompt. Concreción vigila frases que podrían aplicarse a cualquier empresa y las reemplaza por números, nombres y situaciones de sus documentos. Patrones son frases que la IA usa repetidamente, como la introducción sobre tiempos difíciles o el cierre con invitación a contactar. Ritmo delata a la IA cuando escribe varias oraciones iguales seguidas o enumera siempre de tres en tres, por ejemplo “rápido, barato y confiable”. Formato vigila guiones largos, que casi nadie escribe en teclado, y emojis en lugar de viñetas.

`anti-slop.md` es un archivo de texto común en la carpeta con el texto. Contiene la lista de frases no deseadas y con qué reemplazarlas. La extensión `.md` indica formato en [Markdown](glossary:markdown). `AGENTS.md` es un archivo con reglas para IA en la misma carpeta. La IA en modo Cowork o Code lo lee al comenzar cada trabajo, así no hay que pedir la revisión otra vez; donde la herramienta lo requiere, la IA lo configura según el prompt. En chat común la IA guarda la lista con la regla en memoria; donde la herramienta no tiene memoria, vea el bloque “En su herramienta”.
## Que la revisión se active sola

Convierta la lista en un [skill](glossary:skill), es decir, una guía guardada, y la revisión funcionará en todos sus proyectos, no solo en la carpeta con AGENTS.md. La IA lo abrirá sola cada vez que escriba texto para personas. Dónde haya skills, lo muestra el bloque En su herramienta. Si solo trabaja en chat común y la IA tiene la lista en memoria, no necesita este paso. En la carpeta con anti-slop.md basta con escribir:

```text
Crea un skill llamado anti-slop con la lista de frases en anti-slop.md; si no ves el archivo, toma la lista de tu memoria. Debe activarse cada vez que escribas o edites texto que se enviará bajo mi nombre: correo, oferta, publicación o texto web. El skill revisa el texto con cuatro filtros del archivo, corrige frases de la lista y no inventa números ni promesas. Si te digo de otra frase que no quiero, agrégala al skill. Guarda el skill para que funcione en todos mis proyectos; si debo guardarlo o activarlo yo, dime exactamente dónde hacer clic.
```
## Ejemplo

Martín Dvořák del servicio de vehículos de empresa envía el 15/10/2026 una oferta a la señora Horáková de una empresa logística. En la solicitud dice que la empresa tiene 38 furgonetas en Brno y Olomouc y que ahora esperan hasta una semana para la reparación. La introducción de la oferta la escribió la IA:

```text
En estos tiempos acelerados, un socio confiable para la gestión de la flota es clave. Ofrecemos servicio integral, respuesta rápida y trato personalizado. Podemos reparar en 24 horas. No dude en contactarnos.
```

La IA devuelve cuatro hallazgos. La primera frase la reemplaza por la situación de la solicitud: “Usted indica que espera hasta una semana para reparar una de sus 38 furgonetas.” En lugar de toda la segunda frase, enumera según la lista de precios qué incluye el servicio: revisiones regulares y vehículo sustituto durante la reparación. La reparación en 24 horas marca `[COMPLETAR]` porque no está en los documentos. El cierre cambia a un paso siguiente: “Escríbame cuál furgoneta revisar primero.”

Martín verifica con el jefe de taller que la reparación común se hace en dos días hábiles. La IA lo añade al texto y escribe en anti-slop.md:

```text
### Frases que no quiero
- “en estos tiempos acelerados”: empezar con la situación del cliente según la solicitud
- “servicio integral”: enumerar qué incluye el servicio
- “no dude en contactarnos”: escribir un paso siguiente concreto
```

El lunes 19/10 Martín deja que la IA responda a otro cliente en la misma carpeta. La respuesta termina con una pregunta sobre qué día le conviene la primera revisión y no contiene frases de la lista.
## Si se atasca

- **La IA corrige solo unas palabras y el texto sigue igual:** pídale que reescriba todo el párrafo empezando con la situación del lector y adjunte el documento base, como la solicitud o notas de llamada.
- **Hay muchos `[COMPLETAR]` en el texto:** la IA no tiene números para usar. Adjunte lista de precios, contrato o solicitud. Deje que la IA tache afirmaciones que no pueda confirmar.
- **La IA dice que guardó anti-slop.md pero no está en la carpeta:** probablemente trabaja en chat común que no puede modificar archivos. Cambie a [Cowork o Code](card:when-chat-is-not-enough) o pida a la IA que guarde la lista en memoria.
- **En chat nuevo la IA vuelve a usar frases de la lista:** en Cowork o Code abra el chat en la misma carpeta y pida a la IA que lea AGENTS.md y haga que la lea al comenzar cada trabajo. En chat común vuelva al chat donde hizo la revisión y pida a la IA que guarde la lista con la regla en memoria. La memoria debe estar activada en configuración.
## Qué tendrá listo

Tiene un texto listo para enviar: sin frases típicas de IA y con números y promesas confirmadas. En la carpeta está anti-slop.md con la lista de frases no deseadas y AGENTS.md con la regla para que la IA revise cada texto nuevo automáticamente; en chat común la IA tiene la lista con la regla en memoria o en instrucciones propias de la herramienta. En chat nuevo verificó que la IA realmente use la regla.
## Qué sigue

Verifique hechos, números y fuentes en reportes o presentaciones con la tarjeta [Verifique la salida de IA](card:kontrola-vysledku). Si la IA debe escribir directamente con su estilo, guárdelo en [Custom Instructions propias](card:custom-instructions).
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
