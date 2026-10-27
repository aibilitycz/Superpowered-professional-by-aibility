# Deje que la IA registre el estado de las tareas: el colega sabe dónde está su trabajo

La IA encuentra o crea automáticamente una tarea en la herramienta de su equipo para cada trabajo, la avanza y la cierra.

## Deje que la IA registre el estado de las tareas: el colega sabe dónde está su trabajo

**Dificultad: media.**\
**Tiempo: aproximadamente 15 minutos** con un trabajo que realiza hoy.
## Para qué sirve

Tiene la comparación de tres ofertas para nuevas ventanas lista desde el martes, pero la tarea en la herramienta sigue en estado Por hacer. El jueves la gerente le escribe por eso y mientras tanto una colega empezó a comparar las ofertas otra vez.

Ayuda una regla para la IA: la tarea cambia de estado sola durante el trabajo y al final escribe el resultado con un enlace, así el estado es correcto aunque usted lo olvide.
## Qué preparar

- un trabajo que hará hoy con la IA, por ejemplo comparar ofertas o preparar materiales para una reunión,
- la herramienta de tareas del equipo, como Planner, Asana o Jira; la conexión a veces la autoriza IT,
- una carpeta del proyecto compartida con el equipo, por ejemplo sincronizada desde OneDrive o SharePoint,
- IA en [modo](glossary:workmode) Cowork o Code; donde esté, lo muestra el bloque En su herramienta.
## Cómo hacerlo

1. Inserte el prompt en la IA en modo Cowork o Code y añada la herramienta de tareas y el trabajo de hoy. La IA se conectará a la herramienta; usted confirmará el inicio de sesión.
2. Confirme la cuenta con la que la IA escribe y diga qué estados significan en progreso y terminado. La IA guardará los estados o columnas en la regla y hará el trabajo.
3. Abra la tarea en la herramienta y vea qué ve el colega. El estado y el enlace deben coincidir con el informe de la IA.

En la tarea basta con el estado, una frase con el resultado y el enlace; el resto va en el worklog, el diario del proyecto.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA en modo Cowork o Code, abierta en la carpeta del proyecto, y en las dos últimas líneas añada la herramienta y el trabajo:

Quiero que el estado de mi trabajo se registre solo en la herramienta de tareas que usa nuestro equipo, y que los colegas vean dónde está el trabajo sin preguntarme. Configúralo y úsalo inmediatamente para el trabajo que te asignaré. La herramienta y el trabajo están en las dos últimas líneas.

1. Conéctate a la herramienta de tareas. Usa el conector que tienes aquí. Si falta o solo puede leer, conecta la herramienta tú mismo, por ejemplo a través del servidor MCP (para Planner, Work IQ de Microsoft) o el servicio Composio. Si debo iniciar sesión o autorizar algo, dime exactamente dónde y espera. Si la conexión debe autorizarla IT en la empresa, escríbeme una solicitud breve para IT con qué y por qué conectar. Si el equipo gestiona tareas en una tabla o archivo, trabaja en él. Si aquí no puedes escribir en archivos en la carpeta del proyecto, dímelo de inmediato y aconseja a dónde cambiar.

2. Averigua directamente en la herramienta con qué cuenta escribes y escríbemela junto con el proyecto o tablero donde escribirás. Si puedes escribir con varias cuentas, pregúntame cuál usar. Enumera los estados y columnas de tareas que ves en la herramienta y pregúntame cuáles significan en progreso y terminado.

3. Escribe en AGENTS.md en la carpeta del proyecto esta regla y rellena los corchetes según lo que descubrimos. Si AGENTS.md no existe, créalo. Asegúrate de que lo leas en esta herramienta al comenzar cada trabajo; en Cowork escribe la regla en las instrucciones de la carpeta.

### Estado del trabajo
- Gestionamos las tareas en [herramienta, proyecto o tablero]. Siempre escribe en ella con la cuenta [cuenta] y nómbrala en cada informe.
- Al comenzar el trabajo, encuentra la tarea correspondiente y cámbiala a [en progreso]. Si no hay ninguna, créala con un nombre corto y asígnamela.
- Si el trabajo espera a alguien más, escribe en la tarea en una frase a quién y para qué.
- Al final, añade arriba en worklog.md en la carpeta del proyecto un registro con enlace al resultado en el formato de registros anteriores. Si worklog.md no existe, créalo y escribe el registro así: fecha, qué se hizo, enlace al resultado y siguiente paso. Si ya hay una regla para worklog en AGENTS.md, omite esta línea y solo añade el enlace al resultado a esa regla.
- Escribe un comentario en la tarea con el resultado en una frase y con un enlace que el colega pueda abrir, y cámbiala a [terminado]. Si el resultado está solo en esta computadora, pregúntame dónde guardarlo. Si el trabajo no está terminado, déjala en progreso y escribe qué falta.
- Después de cada escritura, recarga la tarea y el worklog y verifica que contengan lo que escribiste. Solo entonces dime que está terminado. Si la escritura no coincide, corrígela y si no puedes, dímelo.

4. Luego haz el trabajo de la última línea según esa regla. Al final, escríbeme el enlace a la tarea, su estado, cómo la ves ahora en la herramienta y con qué cuenta escribiste.

Herramienta de tareas:
Trabajo:

## En su herramienta

### Microsoft Copilot
Inserte el prompt en Copilot Cowork en `copilot.cloud.microsoft` (selector junto a Chat; licencia Microsoft 365 Copilot). Añada la herramienta de tareas en Customize, Plugins, o pida a IT. Al final del prompt añada: “No tengo carpeta: mantén el worklog como Word en OneDrive, no crees archivo de reglas y escribe la regla como texto que empiece ‘En el proyecto [nombre]:’.” Pegue el texto a la izquierda en Customize, Preferences.

### ChatGPT
El modo Code está en ChatGPT Codex: en la app de ChatGPT para PC selecciónelo y abra la carpeta del proyecto (open a folder). Codex lee `AGENTS.md` solo y conecta la herramienta de tareas vía servidor MCP; lo encontrará en Settings, MCP servers, donde puede autenticarse con Authenticate. Si no ve Codex, probablemente el administrador lo haya desactivado en la empresa, pídale que lo active.

### Claude
En la app Claude para PC abra Cowork o Claude Code y seleccione la carpeta del proyecto; ambos están en planes pagos. Cowork escribe la regla en las instrucciones de la carpeta (Folder instructions), Claude Code lee `AGENTS.md`. Conecte la herramienta de tareas, como Asana o Linear, en el panel izquierdo en Customize, Connectors; en la empresa lo añade el propietario de la organización.

### Gemini
La app Gemini añade la tarea a Google Tasks y la marca como terminada si en el prompt escribe @Google Tasks. Pero no mantiene el worklog en la carpeta porque no trabaja con carpetas en PC. Todo el ejercicio lo hace Antigravity, herramienta Google que trabaja directamente en su carpeta y lee `AGENTS.md`; con cuenta empresarial la usa vía Gemini Enterprise, pida a IT.
## Tarea, worklog y archivo de reglas

La IA escribe en dos lugares y sigue un archivo de reglas. La tarea en la herramienta la ve todo el equipo: la IA escribe el estado y al final una frase con enlace al resultado. El estado es columna, etiqueta o progreso de la tarea, por ejemplo Por hacer, En progreso o Terminado. Si el equipo no tiene herramienta, sirve una tabla o archivo `ukoly.md` en carpeta compartida.

[Worklog](card:project-worklog), diario del proyecto, es el archivo `worklog.md` en la carpeta del proyecto. La IA añade al final qué se hizo con enlace al resultado, para que pueda volver al trabajo incluso meses después.

`AGENTS.md` es un archivo con instrucciones para la IA en la carpeta del proyecto, que la IA lee al comenzar cada trabajo; en Cowork cumple igual la función las instrucciones de la carpeta. La IA se conecta a la herramienta de tareas vía conector o [MCP](glossary:mcp), estándar abierto para conectar apps a IA. Si falta conector, usa un servicio de integración, como Composio; cómo la IA configura ese servicio muestra la tarjeta sobre [transferencia de datos entre apps](card:cross-app-workflow).
## Por qué la IA nombra la cuenta y verifica la escritura

Dos reglas en el prompt, la cuenta en cada informe y la verificación tras escribir, surgieron de errores que cometimos. Gestionamos tareas en Linear y la IA escribe vía un servicio que conecta varias apps, algunas con varias cuentas. Si no elegía cuenta explícitamente, a veces escribía con otra cuenta distinta a la esperada. Desde entonces siempre la elige y la nombra en el informe.

El segundo error: la herramienta confirmó la escritura pero el estado no cambió. Por eso la IA recarga la tarea tras cada escritura y solo dice terminado cuando ve lo que escribió.
## Ejemplo

Jakub es gerente de proyecto en una constructora y su equipo usa Asana. El martes 20/10/2026 abre la IA en modo Cowork en la carpeta `Rekonstrukce školy Lipová`, inserta el prompt y añade:

```text
Herramienta de tareas: Asana, proyecto Rekonstrukce školy Lipová
Trabajo: Compara tres ofertas para cambiar ventanas de la carpeta Ofertas en tabla (precio, plazo, garantía) y escribe recomendación para la directora técnica.
```

Jakub confirma el inicio de sesión con cuenta empresarial. La IA enumera las columnas Por hacer, En progreso, Esperando aprobación y Completado y Jakub dice que el trabajo terminado va a Esperando aprobación porque la directora técnica aprueba las ofertas. La IA encuentra la tarea “Comparar ofertas de ventanas”, la cambia a En progreso y compara las ofertas. Tras la última escritura recarga la tarea y ve que sigue en En progreso. La mueve otra vez, verifica el estado y responde:

```text
Escrito con la cuenta Jakub Dvořák (Asana, Stavby Morava).
- La tarea “Comparar ofertas de ventanas” está en la columna Esperando aprobación, con recomendación y enlace a la tabla Comparación ventanas.xlsx en SharePoint.
- El primer cambio no se guardó; tras el segundo intento el cambio está verificado.
- Worklog: registro 2026-10-20 está arriba en worklog.md.
```

El miércoles por la mañana la directora técnica Hana abre el proyecto en Asana, ve la tarea en Esperando aprobación con enlace a la tabla y aprueba la recomendación sin escribir a Jakub.
## Si se atasca

- **La IA no accede a la herramienta de tareas:** falta conector o no se puede activar en la empresa. Pida a la IA que prepare una solicitud breve para el administrador IT. La IA en modo Code conecta Planner vía Work IQ, servidor MCP de Microsoft, que IT activa una vez. Cuando IT autorice la conexión, escriba en el mismo chat “IT lo activó, continúa”. Cómo la IA conecta otras apps muestra la tarjeta [Conecte su conector](card:plugin-connector).
- **La IA crea una tarea nueva aunque ya exista una:** dígale cómo reconocer la tarea, por ejemplo por proyecto y nombre, y que lo añada a la regla.
- **La IA dice terminado pero la tarea está en estado antiguo:** escriba “Recarga la tarea y muéstrame qué ves”. Si no aparece la verificación en el informe, pida a la IA que compruebe que tiene la regla en `AGENTS.md` o en instrucciones de la carpeta.
- **La IA trabaja fuera de la carpeta del proyecto y no conoce la regla:** probablemente trabaja en un chat normal. Cambie a [Cowork o Code](card:when-chat-is-not-enough) y abra la carpeta del proyecto allí.
## Qué estará listo

El trabajo de hoy tiene una tarea que la IA misma avanzó hasta terminado y escribió el resultado con enlace, y en el worklog está su registro. La regla en `AGENTS.md`, en instrucciones de carpeta o en configuración de su IA hará lo mismo con cada trabajo siguiente. El colega encontrará el estado de su trabajo en la herramienta de tareas sin preguntarle.
## Qué sigue

Para que el estado se actualice también por trabajo en correos y reuniones, configure una [tarea programada](card:recurring-ai-task) que cada noche actualice las tareas según correos, chats y reuniones del día. Si la regla sigue funcionando tras unas semanas, lo verifica la [revisión semanal de configuración](card:weekly-ai-review).
## MCP

**Qué es:** Un estándar técnico abierto (Model Context Protocol) mediante el cual la IA se conecta a aplicaciones y fuentes de datos. La aplicación o el proveedor de datos ofrece un servidor MCP y la IA lee datos o realiza acciones autorizadas a través de él. En la configuración de herramientas, esta conexión suele llamarse conector o servidor MCP.

**Qué no es:** No es una aplicación independiente ni un modelo de IA. El estándar en sí no descarga nada; requiere un servidor del proveedor, a menudo una cuenta con él y permisos que activa una persona o administrador.

**Por qué lo necesita el estudiante:** Ayuda a entender cuándo la IA accede a datos fuera de la web pública y quién debe activar la conexión.

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
