# Envíe un enlace en lugar de un archivo adjunto: página web creada por IA

En lugar de un PDF adjunto, envíe un enlace a una página clara que la IA genere a partir del documento.

## Envíe un enlace en lugar de un archivo adjunto: página web creada por IA

**Dificultad: media.**\
**Tiempo: aproximadamente 15 minutos** con un documento que desea enviar.
## Para qué sirve

El lunes envió a la dirección un informe mensual como PDF adjunto. El miércoles
la directora le pregunta en la reunión por un número de la segunda página porque
no abrió el archivo adjunto en el teléfono, y un colega mientras tanto reenvió
una versión antigua con un error en el total.

La página que la IA crea a partir del documento tiene arriba el mensaje principal,
se lee en el teléfono sin necesidad de acercar y tras la corrección todos ven la
versión actual.
## Qué preparar

- un documento que desea enviar, por ejemplo un informe mensual o una oferta, en
  una carpeta,
- el logo de la empresa como imagen en la misma carpeta, o la dirección del sitio
  web de la empresa,
- IA que cree la página con enlace; donde esté disponible, lo indica el bloque
  "En su herramienta".
## Cómo hacerlo

1. Abra la IA en la carpeta con el documento, preferiblemente en modo Cowork o Code,
   o adjunte el documento. Inserte el prompt y añada el nombre del documento, para
   quién es la página y la dirección web.
2. Revise la página y diga a la IA qué cambiar. Luego configure quién abrirá la página
   y copie el enlace; dónde hacerlo lo indica el bloque "En su herramienta".
3. Abra el enlace en el teléfono y, si es fuera de la empresa, también en una ventana
   anónima del navegador para ver la página como el destinatario. Luego envíelo en lugar
   del archivo adjunto.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA que usa en el trabajo y en la última línea
agregue el nombre del documento, para quién es la página y, si procede, la dirección
web de la empresa:

Crea una página web a partir del documento que enviaré por enlace en lugar de adjunto.
El documento y para quién es la página están en la última línea.

Lee todo el documento y determina qué debe saber y hacer el lector. Pon arriba una frase
con el mensaje principal y justo debajo el siguiente paso para el lector: fecha, decisión
o contacto. Luego desarrolla los detalles en secciones cortas con títulos. Copia números,
precios, fechas y nombres exactamente del documento. No inventes lo que falta y dime qué
debo añadir.

Usa colores, tipografía y logo de la empresa. El logo está en la carpeta, toma los colores
del logo o del sitio web de la empresa si en la última línea me das su dirección. La página
debe ser legible en el teléfono.

Crea la página para compartir por enlace: en Claude como artifact, en ChatGPT como Site (website).
Luego muéstramela.

Después guarda en el archivo sablona-stranek.md en la carpeta donde trabajas la plantilla para
la próxima vez: colores, tipografía, ubicación del logo y orden de las secciones. Si te pido
cambiar el diseño o el orden, hazlo en la página y en la plantilla. Añade en el archivo AGENTS.md
en la misma carpeta la regla: “Cuando prepares informe, guía u oferta para colegas, clientes o
la dirección, crea también una página web según sablona-stranek.md.” Si AGENTS.md no existe, créalo.
Asegúrate de que esta herramienta lo lea al inicio de cada trabajo; en Cowork ponlo en las instrucciones
de la carpeta.

Documento, destinatario y, si procede, dirección web de la empresa:

## En su herramienta

### Microsoft Copilot
Inserte el prompt en Copilot Chat y adjunte el documento; si la IA no guarda nada en la carpeta,
no importa. Bajo la respuesta elija los tres puntos y Edit in Pages; luego comparte la página con
Copy link y los colegas la abren en Loop. No tiene sus colores y personas fuera de la empresa no
pueden abrirla, por eso envíe el documento como antes a clientes. La plantilla se guarda si escribe
“Recuerda el diseño de la página para la próxima vez.”

### ChatGPT
La página como Site la crea el modo Work o Codex en la app ChatGPT para PC, Codex directamente con
la carpeta. En la vista previa haga clic en Share, elija Anyone on the internet o para colegas Anyone
in the workspace, luego Publish y Copy link. Las ediciones están en Sites en el panel izquierdo.
Si no tiene Sites, el administrador las activa; por ahora envíe el documento como antes.

### Claude
En la app Claude elija Cowork y seleccione la carpeta; la página se crea como artifact y la plantilla
se guarda en la carpeta. En tarifa empresarial haga clic en Share y en Who has access elija Anyone at
el nombre de su empresa. En tarifa Pro o Max publíquela para personas sin cuenta Claude con Publish.
Copie el enlace con Copy link; con tarifa gratuita no se puede compartir.

### Gemini
En la app Gemini elija + Canvas, adjunte documento y logo e inserte el prompt; si no guarda en la carpeta,
no importa. Cree la página con Create a Web page, enlace con Share & export y Share. Con cuenta empresarial
es una captura compartida por Drive: tras editar compártala de nuevo y fuera de la empresa solo si Drive lo permite.
Guarde la plantilla en Gemu (Gems, New Gem, instrucciones, Save).
## Qué es una página creada por IA

Una página creada por IA es un producto terminado que la IA genera aparte del chat y le asigna un enlace
propio. El enlace se abre en navegador en PC y teléfono, así el destinatario no descarga nada. A diferencia
de un archivo compartido en OneDrive o Google Drive, la página reorganiza el documento: arriba una frase
con el mensaje principal y fecha, el texto se lee en el teléfono sin acercar y la página tiene colores y
logo de su empresa. Es útil para informes, guías para colegas o clientes y ofertas.

El enlace público lo abre cualquiera a quien se lo envíe, incluso si se reenvía. En tarifa empresarial el
administrador activa compartir fuera de la empresa.

`sablona-stranek.md` es un archivo de texto con colores, tipografía, logo y orden de secciones. `AGENTS.md`
es un archivo con reglas para la IA en la misma carpeta. Ambos los escribe la IA y no necesita abrirlos.
## Que la IA cree las páginas sola

La IA crea páginas automáticamente según la regla guardada en `AGENTS.md` o en las instrucciones de la carpeta;
solo la guarda en modo [Cowork o Code](card:when-chat-is-not-enough). La lee al inicio de cada trabajo, así que el siguiente
documento que envíe ya lo prepara como página con sus colores. Para crear una página de un documento concreto
inmediatamente, basta una frase:

```text
Crea una página para cliente desde oferta-viaje-empresa.docx según sablona-stranek.md.
```

No necesita enviar de nuevo el informe mensual. Abra la conversación donde se creó la página, pida a la IA
que la actualice con los nuevos datos y publique la modificación igual que la primera vez. Los usuarios verán
los nuevos números en su enlace.
## Ejemplo

Lukáš trabaja en una asesoría contable y se encarga de nuevos clientes. Envía a cada uno un PDF de ocho páginas
sobre cómo subir documentos al portal online, pero los clientes llaman porque no abren el adjunto en el teléfono.
El 14/10/2026 abre la IA en modo Code en la carpeta Nuevos clientes, donde está la guía `nahravani-dokladu.docx`
y el logo de la asesoría. Inserta el prompt y en la última línea añade:

```text
nahravani-dokladu.docx, para nuevos clientes: deben subir documentos de septiembre antes de fin de mes
```

La IA crea la página y muestra la vista previa. Arriba dice: “Suba los documentos de septiembre antes del 31/10
por el portal, toma diez minutos.” Debajo hay cuatro pasos numerados con capturas de pantalla de la guía y el
número de teléfono de Lukáš por si hay problemas. Lukáš pide a la IA que agrande los pasos porque los clientes
los leen en el teléfono. Luego configura que cualquiera con el enlace pueda abrir la página, copia el enlace y lo
abre en ventana anónima y en el teléfono. A los tres primeros clientes les envía en lugar del PDF una frase con el enlace.

En noviembre el portal mueve el botón para subir documentos. Lukáš abre la conversación donde se creó la página
y escribe:

```text
El botón Subir está ahora arriba a la derecha en el portal, ajusta el paso 2.
```

Tras publicar la modificación, los clientes abren el mismo enlace y ven el nuevo procedimiento.
## Si se atasca

- **La IA devuelve solo código o archivo en vez de página:** dígale “haz una página con enlace compartido”. En Claude
  active en Settings, Capabilities la opción Code execution and file creation, en ChatGPT ponga al inicio del prompt
  `@Sites`, en Gemini active Canvas. En tarifa empresarial el administrador activa la creación de páginas.
- **La opción para personas fuera de la empresa está gris o falta:** en tarifa empresarial la activa el administrador de
  su herramienta IA. Pídale que active compartir fuera de la empresa o por ahora comparta solo con colegas.
- **El destinatario ve inicio de sesión en vez de página:** revise en configuración de compartir quién tiene acceso. El enlace
  de Share en Claude solo abre para usuarios registrados; a clientes sin cuenta envíe la página publicada con Publish en
  Claude Pro o Max, o Site de ChatGPT con Anyone on the internet.
- **La página muestra un número distinto al documento:** pida a la IA que compare todos los números de la página con el documento
y liste las diferencias. Más en la tarjeta [Control de resultado](card:kontrola-vysledku).
## Qué tendrá listo

Tendrá una página creada desde su documento y un enlace que abrió en el teléfono tal como lo verá el destinatario y lo envió
en lugar del archivo adjunto. La plantilla de diseño la IA guardó para la próxima vez en modo Cowork o Code en el archivo
`sablona-stranek.md`, así que la próxima página la pedirá con una sola frase.
## Qué sigue

Si necesita presentar el contenido en vivo en una reunión, pida preparar desde el documento un [esquema de presentación](card:tvorba-prezentace).
Antes de enviar la página con datos importantes, revise el [Control de resultado](card:kontrola-vysledku).
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
