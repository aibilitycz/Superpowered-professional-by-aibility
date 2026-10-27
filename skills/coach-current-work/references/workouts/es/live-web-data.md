# Deje que la IA descargue datos en vivo: cifras actuales con fuente y fecha

La IA descarga automáticamente cifras actuales sobre empresas, competencia o mercado desde la web, indicando la fuente y la fecha para cada dato.

## Deje que la IA descargue datos en vivo: cifras actuales con fuente y fecha

**Dificultad: media.**\
**Tiempo: aproximadamente 15 minutos** con una pregunta que carece de cifras.
## Para qué sirve

El jueves firma un contrato con un nuevo proveedor y quiere saber qué tan grande es
la empresa, si está creciendo y si no tiene problemas. El chat le escribe un párrafo general del
sitio web y usted busca los datos en registros durante media hora.

Es útil que la IA descargue los datos directamente de la fuente, escriba un enlace y
fecha para cada uno y guarde el procedimiento, para que la próxima vez pueda verificar otro proveedor con una sola frase.
## Qué preparar

- una pregunta laboral para la que necesite cifras actuales y qué decidirá con ellas,
- la IA que usa en el trabajo; dónde empezar en ella lo muestra el bloque “En su herramienta”,
- IA en [modo](glossary:workmode) Cowork o Code, solo si el chat normal no encuentra datos.
## Cómo hacerlo

1. Dígale a la IA qué cifras necesita y qué decidirá con ellas. La IA encontrará
   dónde están realmente los datos y los descargará sola. Si se requiere inicio de sesión o
   administrador de TI, se lo indicará.
2. Abra el enlace del dato en el que se basa más la conclusión y verifique que la
   fuente realmente lo proporcione. Si no coincide, dígaselo a la IA para que corrija la tabla.
3. En un chat nuevo, ingrese la misma tarea en una frase, por ejemplo para otra empresa.
   En modo Cowork o Code, abra un chat nuevo en la misma carpeta.

Solo deben incluirse en la tabla los datos con los que se tomará la decisión.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA que usa en el trabajo y al final
escriba su pregunta:

Necesito datos actuales de la web para la tarea que estoy resolviendo. Lo que necesito y para qué está en la última línea.

Primero averigua dónde están realmente esos datos: registro público o estadística, sitio web de la empresa, ofertas de trabajo, biblioteca de anuncios, herramienta de búsqueda de palabras clave o perfil en red social. Si existe una fuente directa, toma los datos de ella; usa artículos que los describen solo si falta la fuente directa.

Descarga los datos tú mismo. Lee las páginas públicas mediante búsqueda web. Si los datos están en una herramienta a la que tengo acceso en el navegador (por ejemplo, planificador de palabras clave o biblioteca de anuncios) y sabes manejar el navegador, navega allí. Si los datos están en una base de datos que requiere conector de datos (servidor MCP), usa el que tengas. Si no tienes ninguno y sabes conectarlo aquí, conéctalo; donde deba iniciar sesión, dime exactamente dónde y espera. Si no sabes conectarlo, dime qué fuente sería útil y quién puede activarla, y mientras tanto devuelve lo que encuentres en la web pública. Si la fuente es de pago, dime el precio antes de usarla.

Pon el resultado en una tabla con columnas dato, cifra, enlace a la fuente y fecha a la que corresponde la cifra. Lo que no encuentres, márcalo como faltante y no hagas estimaciones. Debajo de la tabla escribe en dos frases qué implican los datos para mi tarea, qué cifra debo verificar en la fuente y dónde exactamente encontrarla.

Si trabajas en una carpeta, guarda la tabla arriba en el archivo zive-data.md en la carpeta del proyecto bajo un título con la fecha de hoy y el nombre de la tarea; si el archivo no existe, créalo. Finalmente guarda el procedimiento como skill: de dónde tomas los datos, cómo los descargas y cómo es la tabla, para que la próxima vez me baste una frase, por ejemplo “descarga los mismos datos para otra empresa”. Si no puedes guardar el skill, guarda el procedimiento en la memoria o instrucciones propias de esta herramienta.

Lo que necesito y para qué:

## En su herramienta

### Microsoft Copilot
Inserte el prompt en Copilot Chat en `copilot.cloud.microsoft`; las líneas sobre archivo
y skill se omiten. Si en la respuesta faltan enlaces a sitios web, active la búsqueda en
Settings, Personalization, y si no se puede, el administrador la ha desactivado. El procedimiento
se guarda con la frase “Recuerda este procedimiento”, Cowork lo guarda como skill y
las tareas se planifican en la página Automations. Los datos de pago los trae el conector Copilot
desde el administrador.

### ChatGPT
Inserte el prompt en un chat normal; las líneas sobre archivo y skill se omiten. ChatGPT
busca en la web solo, y si faltan enlaces en los datos, escriba / y seleccione Search.
El procedimiento se guarda con la frase “Recuerda este procedimiento”; si tiene memoria,
lo verá en Settings, Personalization. Para registros públicos no necesita conector,
para bases de datos de pago el administrador lo añade en Plugins y las tareas programadas están en Scheduled.

### Claude
Inserte el prompt en Cowork en la carpeta del proyecto o en el chat; si faltan enlaces en los datos,
active Web search bajo +. La biblioteca de anuncios o el planificador de palabras clave
los recorre Cowork en su Chrome mediante la extensión Claude in Chrome. El conector de datos
en planes Team y Enterprise lo añade el propietario de la organización (Organization
settings, Connectors).
Claude guarda el procedimiento como skill, las tareas están en Scheduled.

### Gemini
Inserte el prompt en un chat normal; Gemini busca en Google solo y omite las líneas sobre archivo y
skill. No puede añadir conector de datos propio con cuenta laboral, por eso
los datos de bases especializadas los descargue la IA en modo Cowork o
Code, o solicite a TI. Guarde el procedimiento como skill (Customize,
Skills) y las tareas programadas están en Scheduled.
## Qué son datos en vivo y conector de datos

Los datos en vivo son cifras que cambian cada día o semana, como ingresos e
insolvencias de una empresa o anuncios activos de la competencia. La IA no los conoce
por sí sola porque aprendió con datos antiguos y sin descargarlos solo los estima. Las páginas públicas,
como el registro mercantil o el sitio web de la empresa, las lee mediante búsqueda web. Si
necesita un informe de decenas de fuentes con comparación de opciones, use
[Deep Research](card:deep-research).

Parte de los datos no está en páginas comunes. La búsqueda de palabras, es decir cuántas personas
la buscan mensualmente, o el tráfico web de la competencia están en bases de datos
de herramientas especializadas y la IA accede a ellas mediante conector de datos. En configuración suele llamarse servidor MCP; [MCP](glossary:mcp) es
un estándar técnico por el que la IA se conecta a aplicaciones y fuentes de datos.
El conector suele requerir cuenta con el proveedor de datos y algunas fuentes cobran
por consulta. Si tiene acceso en navegador a la herramienta, por ejemplo al
Planificador de palabras clave de Google Ads, la IA puede navegarla mediante
[control del navegador](card:browser-control) sin conector. Si no, marcará esos
datos como faltantes y dirá quién podría activar el conector.

La IA guarda el procedimiento como [skill](glossary:skill), es decir una guía que busca
ella misma cuando le dé una tarea similar. Los resultados los guarda en `zive-data.md`,
un archivo de texto simple en la carpeta del proyecto, donde la descarga más reciente
está arriba.
## Que los datos se descarguen solos

Los datos que sigue regularmente, como insolvencia de proveedores clave
o anuncios de la competencia, la IA puede descargarlos semanalmente sola y solo
informarle los cambios. Inserte en la IA que puede programar tareas esta instrucción y pídale
que cree una tarea programada. Dónde encontrarlas en su herramienta lo muestra
el bloque “En su herramienta”.

```text
Cada lunes a las 8:00 descarga según el procedimiento guardado los mismos datos que la vez anterior y compáralos con la última descarga en zive-data.md, o con el resultado anterior de esta tarea. Si trabajas con archivo, añade los datos nuevos arriba bajo la fecha de hoy. Solo escríbeme qué cambió y qué significa para mi tarea; si no hubo cambios relevantes, basta una frase.
```

Si la tarea trabaja con archivos en su computadora, solo funcionará si la computadora
está encendida y la aplicación abierta.
## Ejemplo

Lucía dirige compras en una empresa logística y el jueves 22.10.2026 firma
un contrato marco con un nuevo transportista. El lunes escribe en la última línea del prompt:

```text
Autotransportes Lipan, s.r.o.: cuánto tiempo lleva la empresa, cuáles son sus ingresos y si no tiene insolvencia ni problemas con IVA. El jueves firmo con ellos un contrato marco para reparto.
```

La IA revisa el registro mercantil, de insolvencias y el registro de contribuyentes de IVA. En
`zive-data.md` escribe:

```text
### 2026-10-19: Autotransportes Lipan, s.r.o., antes de la firma 22.10.
| Dato | Cifra | Fuente | Válido al |
|---|---|---|---|
| Empresa fundada | 2014 | or.justice.cz, extracto del registro mercantil | 19.10.2026 |
| Ingresos | 86 millones CZK, año anterior 79 millones CZK | or.justice.cz, balance contable en colección de documentos | año 2025 |
| Insolvencia | ninguna | isir.justice.cz | 19.10.2026 |
| Contribuyente IVA no fiable | no | registro de contribuyentes IVA | 19.10.2026 |
| Número de vehículos | faltante, ninguna fuente lo indica | | |

Los ingresos aumentaron un 9 % y en los registros la empresa no tiene problemas. Verificar: ingresos en el estado de pérdidas y ganancias en el balance contable, línea Ingresos por venta de productos y servicios.
```

Lucía abre el balance desde el enlace, encuentra la línea de ingresos en el estado de pérdidas y ganancias y la cifra coincide. Una semana después en un chat nuevo escribe solo “Verifica igual al transportista con el que negociamos el martes” y recibe la tabla en el mismo formato.
Un colega de marketing descarga con el mismo prompt anuncios de la competencia y búsqueda de palabras mediante conector de datos que le activó el administrador.
## Si se atasca

- **La IA escribe cifras sin enlace o con “aproximadamente”:** no buscó en la web y
  estima de memoria. Active la búsqueda según el bloque “En su herramienta” y
  escriba: “Para cada cifra pon enlace a fuente y fecha; lo que no encuentres márcalo
  como faltante.”
- **La IA responde que no tiene acceso a los datos:** los datos están en base y la IA necesita
  conector de datos. Pídale que escriba una solicitud breve para el administrador de la cuenta corporativa
  IA: qué fuente y para qué la necesita. En modo Code la IA lo conecta sola;
  cómo cambiar a ese modo lo muestra la tarjeta [Chat, Cowork o Code](card:when-chat-is-not-enough).
- **El dato está solo en PDF o en página con filtros:** pida a la IA que abra el PDF
  directamente desde el enlace. La página que hay que navegar, como la biblioteca
  de anuncios Meta, deje que la IA la recorra en el navegador, como muestra la tarjeta
  [Control del navegador](card:browser-control).
- **En chat nuevo la IA no encuentra el procedimiento:** pregunte qué recuerda del procedimiento
  y dónde lo guardó. Si no tiene memoria, que lo guarde en modo Cowork o Code como skill,
  y luego abra un chat nuevo en la misma carpeta.
## Qué tendrá listo

Tiene una tabla con cifras actuales para su tarea, con enlace y fecha para cada dato,
y la cifra en la que se basa la conclusión la verificó en la fuente. La IA tiene el procedimiento guardado como
skill o en memoria y en un chat nuevo descargó datos con una sola frase.
## Qué sigue

Si quiere que el informe regular llegue confiable y reporte errores solo,
continúe con la [tarea programada](card:recurring-ai-task). Cómo convertir otro trabajo exitoso en [skill](card:create-skill-from-proven-process) lo muestra
una tarjeta independiente.
## MCP

**Qué es:** Un estándar técnico abierto (Model Context Protocol) mediante el cual la IA se conecta a aplicaciones y fuentes de datos. La aplicación o el proveedor de datos ofrece un servidor MCP y la IA lee datos o realiza acciones autorizadas a través de él. En la configuración de herramientas, esta conexión suele llamarse conector o servidor MCP.

**Qué no es:** No es una aplicación independiente ni un modelo de IA. El estándar en sí no descarga nada; requiere un servidor del proveedor, a menudo una cuenta con él y permisos que activa una persona o administrador.

**Por qué lo necesita el estudiante:** Ayuda a entender cuándo la IA accede a datos fuera de la web pública y quién debe activar la conexión.

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
