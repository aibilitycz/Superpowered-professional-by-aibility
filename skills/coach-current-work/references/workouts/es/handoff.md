# Prepare el handoff: entrega del trabajo en curso

La IA redacta un handoff de una página para que un colega o un nuevo chat continúen sin leer el historial.

## Prepare el handoff: entrega del trabajo en curso

**Dificultad: fácil.**\
**Tiempo: aproximadamente 15 minutos** con un trabajo en curso.
## Para qué sirve

Desde el viernes está de vacaciones una semana y el colega Pavel debe finalizar
la selección del nuevo proveedor de limpieza. Le escribirá tres frases por correo.
El lunes, Pavel pasa media mañana averiguando qué oferta sigue vigente y luego le
llama desde la playa para preguntar si puede negociar de nuevo el precio con el proveedor.

Bastaría con una entrega breve de una página, llamada handoff. La IA la redacta
basándose en el chat y los documentos, y Pavel sabrá dónde quedó el trabajo y qué
hacer primero.
## Qué preparar

- un trabajo en curso que va a entregar, posponer o mover a un nuevo chat,
- el chat donde trabajó en ese trabajo, o los correos y notas principales relacionados,
- la IA que usa en el trabajo; preferiblemente en [modo](glossary:workmode) Cowork o Code.
## Cómo hacerlo

1. Pegue el prompt en el chat donde trabajó por última vez en el trabajo. Si fue fuera de la IA,
   péguelo en un chat nuevo con los documentos principales y unas frases sobre el estado actual.
2. Lea el handoff como si fuera un colega que no estuvo en el trabajo y diga a la IA qué falta o sobra.
   En Cowork o Code se guarda en `handoff.md`, en chat normal aparece en la respuesta.
3. Abra un chat nuevo y escriba “Continúa según `handoff.md`”, en chat normal pegue el handoff con los documentos.
   La IA debería decir sin preguntar dónde quedó el trabajo y proponer el siguiente paso.
## Ejercicio de IA

Pegue este [prompt](glossary:prompt) en la IA que usa en el trabajo:

Prepara un handoff: entrega breve del trabajo en curso. Un colega o un chat nuevo debe continuar sin leer todo el historial ni hacer preguntas.

Basate en nuestro chat, en los documentos que adjunto, pego o escribo bajo esta tarea, y en los archivos de la carpeta del proyecto si tienes acceso. Si falta algo en algún punto, pregúntame, máximo cinco cosas a la vez. Escribe el handoff así:

### Handoff: nombre del trabajo (fecha)
- Objetivo: qué debe entregarse al final, para quién y para cuándo.
- Hecho y verificado: qué está terminado y cómo lo sabemos, por ejemplo archivo, enlace o confirmación de alguien.
- En curso: qué está empezado y en qué estado.
- Siguiente paso: una acción concreta que el receptor debe hacer primero.
- Se considera terminado cuando: cómo reconocer que el trabajo está acabado.
- Límites: qué no debe cambiarse ni hacerse sin acuerdo.
- Qué falta: preguntas abiertas y documentos o accesos que el receptor aún no tiene.
- Documentos: archivos y enlaces con los que debe trabajar.

Escribe para alguien que no estuvo en el trabajo y quepa en una página. No copies el chat ni incluyas callejones sin salida, contraseñas o datos personales que el receptor no necesita. Lo que no puedas confirmar con el chat, documentos o mis respuestas, ponlo en “Qué falta” y no lo inventes.

Si trabajas en la carpeta del proyecto, guarda el handoff en el archivo handoff.md. Si ya existe, sobrescríbelo porque solo vale la última entrega. Si no sabes trabajar con archivos, no guardes nada y escríbeme el handoff completo en la respuesta.

Finalmente guarda esta regla para la próxima: “Cuando escriba ‘handoff’, prepara la entrega en este formato.” En chat normal la IA guarda la regla y el formato en la memoria, y si no tiene memoria, dímelo. En la carpeta del proyecto escribe la regla y el formato en AGENTS.md, y si no existe, créalo. Añade a la regla: “Guarda la entrega en handoff.md. Si hay handoff.md en la carpeta, léelo al comenzar cada trabajo nuevo. Cuando el trabajo esté terminado, escribe en la primera línea ‘Cerrado’ y la fecha, y no consideres el handoff cerrado como tarea.” Asegúrate de que AGENTS.md se lea al comenzar cada trabajo; en Cowork ponlo en las instrucciones de la carpeta.

## En su herramienta

### Microsoft Copilot
En Copilot Chat recibirá el handoff en la respuesta. Si está activado Work IQ, Copilot ve sus correos, reuniones y archivos, por lo que no necesita pegarlos; solo escriba a qué trabajo se refiere. Copilot guarda la regla para la próxima en la memoria (Saved memories en Settings and more, Chat settings, Personalization), salvo que el administrador la haya desactivado.

### ChatGPT
En chat normal de ChatGPT recibirá el handoff en la respuesta y la IA guardará la regla en la memoria (Settings, Personalization, Memory), salvo que la empresa la haya desactivado. Para trabajar con carpetas en el ordenador use Codex: en la app de ChatGPT para PC cambie a Codex y elija abrir carpeta (open a folder). Codex lee `AGENTS.md` automáticamente y las tareas programadas están en Scheduled.

### Claude
En chat normal de Claude recibirá el handoff en la respuesta y la IA guardará la regla en la memoria (Settings, Memory), que el administrador puede habilitar en cuentas corporativas. En Cowork de la app Claude para PC la IA guarda `handoff.md` en la carpeta seleccionada y escribe la regla en las instrucciones de la carpeta (Folder instructions); Claude Code lee `AGENTS.md`.

### Gemini
En Gemini recibirá el handoff en la respuesta y podrá guardarlo como Documento de Google mediante Share & export, Export to Docs. Encuentra correos de Gmail si escribe @Gmail y el tema del hilo en el prompt. Las cuentas corporativas no tienen memoria, así que guarde el formato del handoff como skill (escriba “Guárdalo como skill”) y la próxima vez solo escriba “handoff”.
## Qué es un handoff

Handoff es el término inglés para entrega, como el relevo o el cambio de turno. Contiene el objetivo, lo hecho y verificado, el siguiente paso, cómo saber que está terminado, qué no se debe cambiar y qué falta. En Cowork o Code es un archivo de texto simple `handoff.md` en la carpeta del proyecto, que puede abrir con cualquier editor. Solo vale el último handoff: la IA lo sobrescribe en la siguiente entrega y cuando el trabajo está terminado lo marca como cerrado.

El handoff también sirve si se ausenta unos días o si el chat es tan largo que la IA olvida lo acordado al principio. La IA solo mantiene una cantidad limitada de texto en un chat, y en chats muy largos pierde el inicio y confunde versiones antiguas con nuevas. El handoff transfiere al nuevo chat solo lo que vale ahora.

`AGENTS.md` es un archivo con reglas para la IA en la misma carpeta. Muchas herramientas en modo Code lo leen al comenzar cada trabajo; donde no lo hacen, la IA guarda la regla en su configuración o le indica dónde ponerla. La próxima vez basta escribir “handoff” y la IA sabe qué y dónde escribir.

En el handoff solo va lo imprescindible para que el receptor continúe; la IA omite chats, callejones sin salida y datos personales que no necesita. En chat normal la IA guarda la regla para la próxima en la memoria. Luego pegue el handoff en un correo al colega y adjunte los documentos referidos.
## Que el handoff se escriba solo

Si en Cowork o Code trabaja en varios proyectos en una carpeta común, los handoffs pueden generarse solos cada viernes antes de salir por el fin de semana. Basta con una tarea programada. Abra la IA en modo Cowork o Code en esa carpeta común, pegue esta tarea y pídale que cree la tarea programada:

```text
Cada viernes a las 16:00 revisa las subcarpetas de esta carpeta donde se trabajó esta semana y el trabajo no está terminado. Guarda un nuevo handoff.md en cada una con el formato de AGENTS.md de esa subcarpeta. Si no hay regla, usa el formato del handoff.md existente, y si falta ambos, salta la subcarpeta. Al final dime en qué proyectos quedó algo en “Qué falta”.
```

Si la tarea trabaja con archivos en su ordenador, solo funcionará si el ordenador está encendido y la aplicación abierta.

El lunes abra un chat nuevo en la carpeta del proyecto y escriba solo “Continúa según `handoff.md`.”
## Ejemplo

Eva selecciona un nuevo proveedor de limpieza para la empresa. El jueves 15/10, un día antes de sus vacaciones, pega el prompt en el chat en modo Cowork donde comparó ofertas con la IA. Al leer nota que falta a quién llamar en EkoClean; la IA lo añade y en `handoff.md` queda:

```text
### Handoff: selección de proveedor de limpieza (15/10/2026)
- Objetivo: contrato firmado con el proveedor que empezará a limpiar el 1/12, antes del 30/10.
- Hecho y verificado: comparación de tres ofertas en el archivo srovnani-nabidek.xlsx; Čistota Plus y Úklid Brno confirmaron precios por correo el 13/10.
- En curso: EkoClean prometió oferta ajustada para el 20/10.
- Siguiente paso: el lunes 19/10 llamar a Petra Horáková de EkoClean para confirmar si la oferta llegará a tiempo.
- Se considera terminado cuando: la directora financiera apruebe un proveedor y el contrato esté firmado.
- Límites: no negociar precio de nuevo, el tope es 42 000 CZK mensuales.
- Qué falta: modelo de contrato del departamento legal; Pavel aún no tiene acceso a la carpeta compartida Compras.
- Documentos: srovnani-nabidek.xlsx y ofertas en la carpeta nabidky.
```

Luego Eva abre un chat nuevo en la misma carpeta y escribe “Continúa según `handoff.md`.” La IA responde que la selección espera la oferta de EkoClean y propone llamar a la señora Horáková el lunes. No pregunta nada, así que Eva envía el handoff por correo a Pavel y adjunta la tabla comparativa. Si la IA preguntara de qué selección se trata, el chat nuevo probablemente estaría en otra carpeta que el handoff.

En chat normal Eva pegaría los correos de los proveedores y la tabla comparativa en el chat nuevo. Recibiría el mismo handoff en la respuesta, lo pegaría en otro chat nuevo con la frase “Continúa según este handoff.” y se lo enviaría a Pavel por correo.
## Si se atasca

- **En chat normal la IA no guarda nada:** no sabe guardar archivos y si el chat no tiene memoria, tampoco guarda la regla. Tiene el handoff en la respuesta y debe pegar el prompt otra vez; para que la IA guarde el handoff automáticamente, cambie a [Cowork o Code](card:when-chat-is-not-enough).
- **El chat nuevo pregunta cosas ya decididas:** escriba sus preguntas en el chat original, deje que la IA complete el handoff y abra el chat nuevo otra vez.
- **El handoff es casi tan largo como el chat:** pida a la IA que acorte cada punto a una o dos frases y deje detalles en los documentos referidos.
- **El chat es tan largo que la IA olvidó el inicio:** abra un chat nuevo, pegue los documentos principales y el prompt, y bajo el prompt escriba unas frases sobre el estado actual.
## Qué tendrá listo

Tendrá un handoff con el que un chat nuevo continuó sin preguntas, y el mismo handoff puede enviarse al colega. En Cowork o Code está en `handoff.md` en la carpeta del proyecto y en `AGENTS.md` la regla para que la IA escriba el handoff cuando solo escriba “handoff”. En chat normal la IA tiene la regla en la memoria; si no, pegará el mismo prompt la próxima vez. Puede cerrar el chat antiguo saturado.
## Qué sigue

Si el siguiente paso con IA es, por ejemplo, crear un contrato a partir de la oferta seleccionada y luego un informe para la dirección, y lo hace repetidamente, [guarde todo el proceso como skill](card:create-skill-from-proven-process). El estado del proyecto lo resume la [página inicial del proyecto](card:project-start-here), que la IA redacta igual que el handoff.
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
