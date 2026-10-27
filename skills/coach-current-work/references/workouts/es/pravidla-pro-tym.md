# Redacte reglas para el equipo sobre IA: una página para colegas y su IA

La IA, a partir de la directriz y dos situaciones reales, redacta para el equipo qué está permitido con la IA y qué siempre decide una persona.

## Redacte reglas para el equipo sobre IA: una página para colegas y su IA

**Dificultad: media.**\
**Tiempo: aproximadamente 15 minutos** con directriz y dos situaciones a mano.
## Para qué sirve

Esta tarjeta es para un gerente o líder de equipo que decide cómo el equipo trabaja con
IA. El lunes Ondra le pregunta si puede subir un export de reclamaciones con nombres y
números de teléfono de clientes a su cuenta personal de IA. El miércoles descubre que Lucie
dejó que la IA propusiera a qué clientes rechazar reclamaciones, y envió tres rechazos
sin revisar las órdenes.

Cuando las reglas del equipo están en una sola página en una carpeta compartida y la IA de los colegas las lee al inicio de cada trabajo, quien dude, pregunta a su IA y esta responde según
sus reglas.
## Qué preparar

- la directriz corporativa sobre IA o un correo del área de TI; si no tiene nada así, no importa,
- dos situaciones en las que alguien del equipo dudó sobre cómo proceder con IA, al menos una sobre decisiones que afectan a personas,
- la carpeta compartida del equipo abierta en la IA en modo Cowork o Code,
- un colega que no haya escrito la página y tenga cinco minutos al final.
## Cómo hacerlo

1. Abra la carpeta compartida en la IA en modo Cowork o Code, inserte el prompt del
   ejercicio de IA y la directriz, y debajo del prompt escriba ambas situaciones. La IA guardará la página
   `pravidla-ai.md` en la carpeta.
2. Lea la página y corrija lo que no encaje: nombres para TI, datos personales
   y legales, y lo que siempre decide una persona. La IA listará preguntas abiertas al
   final.
3. El colega que no escribió la página abrirá la carpeta en su IA y preguntará sobre un nuevo
   caso, por ejemplo, sobre bonificaciones anuales. Donde no sepa qué hacer, que la IA complemente la página.

Con un chat común, consulte la sección Cuando se atasque.
## Ejercicio de IA

Inserte este [prompt](glossary:prompt) en la IA en modo Cowork o Code, abierta en su carpeta:

Redacta para nuestro equipo reglas para trabajar con IA en una sola página. La leerán colegas y la IA con la que trabajan.

Basate en las reglas corporativas que te doy o que encuentres en esta carpeta, y en dos situaciones de nuestro trabajo donde colegas dudaron cómo proceder con IA. Las reglas corporativas y contratos con clientes tienen prioridad. No inventes lo que no está en los documentos, escríbelo en la sección Preguntas abiertas, con el nombre de la persona que decidirá. Si no sabes quién, pregúntame.

La página tendrá cinco partes:
- Herramientas: qué herramientas de IA usa el equipo y para qué trabajo.
- Datos: qué datos pueden ir a qué herramienta, qué se reemplaza antes con términos generales (por ejemplo Cliente A) y qué nunca debe ir a la IA, como contraseñas.
- Lo que siempre decide una persona: decisiones sobre personas (selección, evaluación, bonificaciones, asignación de trabajo), respuestas a clientes que impliquen dinero o promesas, y todo lo que no se puede revertir fácilmente. Para cada caso, indica quién decide y qué revisa antes de usar el resultado de la IA, incluyendo casos que la IA descartó.
- A quién preguntar: nombres y contactos para TI, datos personales y legales.
- Qué hacer en caso de error: qué hacer inmediatamente, a quién reportar y con qué rapidez.

Ilustra cada regla con un ejemplo de nuestras situaciones, sin nombres de colegas. Escribe de forma breve para que lo entienda un nuevo colega y que quepa en una pantalla. Arriba indica quién es el responsable de las reglas y cuándo será la próxima revisión. Si el equipo usa IA para selección, evaluación o asignación de trabajo, añade una pregunta abierta para la persona responsable legal o de RRHH: cómo evalúa el AI Act europeo ese uso.

Guarda la página como reglas-ia.md en esta carpeta. Luego, en AGENTS.md de esta carpeta escribe: “Al iniciar cualquier trabajo en esta carpeta, lee reglas-ia.md y síguela. Si encuentras una situación no cubierta, indícalo y añádela con fecha, sin nombres ni datos personales, en Preguntas abiertas. No modifiques las reglas.” Si AGENTS.md no existe, créalo. En Cowork, añade la misma instrucción en las instrucciones de la carpeta.

Finalmente, muéstrame la página y lista las preguntas abiertas.

## En su herramienta

### Microsoft Copilot
Cowork en Copilot solo trabaja con archivos en OneDrive y SharePoint y Microsoft no indica que lea
`AGENTS.md`, por lo que siga el punto “La empresa solo permite chat común”. Añada el documento Reglas de IA al Notebook (Bloc de notas, Nuevo bloc), inserte en Instructions “Sigue el documento Reglas de IA; lo que no cubra, propónlo como pregunta para [nombre].” y comparta el Notebook con el equipo vía Share.

### ChatGPT
Con carpeta compartida trabaja Codex en la app ChatGPT para PC (cambie a Codex, open y folder) y lee `AGENTS.md` solo. Sin Codex, siga el punto “La empresa solo permite chat común”: ponga el documento en un proyecto, inserte en sus instrucciones “Sigue el documento Reglas de IA; lo que no cubra, propónlo como pregunta para [nombre].” y comparta el proyecto vía Share.

### Claude
En la app Claude para PC elija Cowork y Work in a folder, o abra la carpeta en Claude Code, que lee `AGENTS.md` solo. En Cowork la IA anotará la instrucción en las instrucciones de la carpeta y cada colega en Cowork le dirá a su IA que haga lo mismo. Quien solo use chat, cargará la página en un proyecto (Projects).

### Gemini
Gemini con cuenta laboral no trabaja con carpetas en PC, por eso siga el punto “La empresa solo permite chat común” con el robot Gem. En Robots Gem, Nuevo Gem añada el documento a Conocimientos, inserte en instrucciones “Sigue el documento Reglas de IA; lo que no cubra, propónlo como pregunta para [nombre].” y comparta Gem vía Compartir. Suba la nueva versión del documento a Conocimientos reemplazando la antigua.
## Lo que siempre decide una persona

La IA puede preparar datos, orden o propuesta. La decisión que cambia la situación de una persona concreta la toma una persona: quién va a entrevista, a quién se le aumenta, qué trabajo recibe y a quién se rechaza la reclamación. Esa persona conoce los criterios, ve los datos, tiene tiempo para revisar y puede rechazar la propuesta de la IA. Si falta alguna de esas cosas, la revisión es solo hacer clic en “acepto”.

El error suele esconderse en lo que la IA descartó. Por eso la persona debe abrir también algunos casos descartados, por ejemplo cinco currículos aleatorios que la IA dejó aparte.
Quien decide debe poder explicar la decisión con sus propias palabras, sin decir “salió de la IA”.

Si la IA ayuda en selección, evaluación, promociones o despidos, asignación según comportamiento o características personales o seguimiento de desempeño, según el
[AI Act europeo](glossary:ai-act) puede ser un sistema de alto riesgo. Desde el 2 de diciembre de 2027 la empresa deberá, entre otras cosas, asignar supervisión a una persona experta con poder para cambiar resultados, e informar a empleados y representantes antes de usar esa IA. Si aplica a su uso, lo evaluará la persona responsable legal o de RRHH. El AI Act prohíbe desde febrero de 2025 reconocer emociones con IA en el trabajo, salvo por razones médicas o de seguridad.
## Cómo la IA de los colegas sigue las reglas

Además de la página, la IA escribe en el archivo `AGENTS.md` en la carpeta compartida la instrucción de seguirla; en Cowork también la añade a las instrucciones de la carpeta.

Cuando un colega abre directamente la carpeta compartida, la IA lee `AGENTS.md` al inicio del trabajo. La herramienta que no lo haga sola, debe registrar la instrucción de `AGENTS.md` en su configuración para esa carpeta; cómo hacerlo se muestra en el bloque “En su herramienta”. Luego la IA de los colegas lee las reglas y anota en preguntas abiertas las situaciones no cubiertas.

Quien solo trabaja en chat común, cargará la página en un [proyecto](card:asistent), lugar en la IA donde en todas las conversaciones ve los mismos archivos e instrucciones. Pero las preguntas abiertas del chat debe enviarlas a usted.
## Que las reglas crezcan con el equipo

La instrucción en `AGENTS.md` hará que la IA de los colegas añada a preguntas abiertas cada situación que la página no cubra. Una tarea programada puede revisarlas mensualmente y preparar una propuesta para ampliar la página. Inserte en la IA en modo Cowork o Code esta orden y pídale que cree la tarea programada:

```text
Cada primer día laboral del mes revisa reglas-ia.md en la carpeta compartida del equipo. Si hay nuevas situaciones en Preguntas abiertas, propón una regla con ejemplo para cada una y quién debe aprobarla. Si la fecha de próxima revisión pasó, recuérdamela. Si no hay novedades, escribe solo una frase.
```

Si la tarea trabaja con la carpeta en su PC, solo funcionará con el PC encendido y la aplicación abierta.
## Ejemplo

Martina lidera un equipo de seis en atención al cliente de una tienda online de electrónica. La empresa tiene una directriz de TI de marzo: los datos laborales solo van a la IA corporativa que paga la empresa. Martina abrió la carpeta del equipo “Soporte” en modo Cowork, insertó el prompt, la directriz y las dos situaciones del lunes y miércoles. La IA escribió la página, Martina corrigió un nombre y acortó la parte sobre qué datos van a dónde:

```text
Reglas de IA en soporte (responsable: Martina Horáková, próxima revisión: 15. 1. 2027)

Herramientas: IA corporativa para respuestas a clientes, informes y propuestas. No usamos cuentas personales de IA para trabajo.
Datos: exportación de reclamaciones solo a IA corporativa. Nombres y teléfonos de clientes nunca a cuentas personales, contraseñas a ningún lado.
Lo que siempre decide una persona: rechazo de reclamaciones, descuentos mayores a 500 CZK y evaluación de colegas. La IA prepara propuesta con motivo. El operador decide sobre reclamaciones, Martina sobre evaluaciones. Antes de rechazar, el operador abre la orden y fotos.
A quién preguntar: TI Pavel Krejčí, datos personales Jana Malá (responsable de protección de datos), todo lo demás Martina.
En caso de error: no usar más la conversación y ese mismo día informar a Pavel y Jana Malá qué y dónde se envió.
Preguntas abiertas: ¿podemos poner evaluaciones de llamadas de clientes en la IA corporativa y dejar que proponga a quién ayudar con llamadas difíciles? Deciden Jana Malá y RRHH.
```

Al día siguiente Ondra abrió la misma carpeta en su IA y preguntó: un cliente quiere un descuento de 800 CZK por retraso y la IA propone aceptarlo, ¿puede enviarlo? La IA respondió según la página que descuentos mayores a 500 CZK los decide una persona y ella no puede prometerlo sola. Pero la página no decía quién. Martina dijo a la IA que añadiera en la sección de decisiones “Descuentos mayores a 500 CZK los aprueba Martina” y la IA lo añadió.
## Cuando se atasque

- **La empresa solo permite chat común:** inserte el prompt sin el párrafo que empieza con “Guarda la página como”, añada la directriz como archivo y escriba ambas situaciones bajo el prompt. La IA le escribirá la página directamente en el chat. Guárdela como documento llamado Reglas de IA en la carpeta compartida del equipo y póngala en un [proyecto](card:asistent) donde los colegas preguntan; cómo hacerlo en su herramienta se muestra en el bloque “En su herramienta”. Allí el colega preguntará también sobre el nuevo caso del paso 3 y le enviará las preguntas abiertas.
- **La IA dice que guardó la página pero no está en la carpeta:** probablemente trabaja en chat común que no puede guardar archivos. Cambie a [Cowork o Code](card:when-chat-is-not-enough) y abra la carpeta compartida allí. Si no puede usarlo, siga el punto anterior.
- **La IA de los colegas no sigue las reglas:** que el colega abra directamente la carpeta compartida, no una subcarpeta, y pregunte a la IA si ve `pravidla-ai.md`. Si su herramienta no lee `AGENTS.md` sola, que registre la instrucción en la configuración de la carpeta.
- **La página es larga o solo prohibiciones:** pida a la IA que acorte cada sección a tres líneas y para cada prohibición escriba qué puede hacer el equipo en su lugar.
## Qué estará listo

En la carpeta compartida del equipo tiene la página de reglas de IA con ejemplos de su trabajo,
nombres y preguntas abiertas. La IA de los colegas la sigue gracias a `AGENTS.md` o
configuración de carpeta y anota en preguntas abiertas las situaciones no cubiertas. En equipos que solo usan chat común, los colegas tienen la página en su proyecto. Un colega que no escribió la página resolvió un nuevo caso según ella.
## Límites legales

Esta tarjeta le ayuda a redactar reglas para el equipo, no reemplaza asesoría legal ni confirma que las reglas cumplen GDPR o AI Act. Lo que puede hacer lo determinan las reglas de su empresa, contratos con clientes,
[GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/ces) y
[AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/ces). El AI Act obliga a empresas que usan IA a tomar medidas para apoyar la alfabetización en IA de quienes trabajan con ella. La página de reglas del equipo puede ser una de esas medidas.
## Qué sigue

Muestre las reglas al equipo en reunión y deje que la IA complemente la página según las preguntas de los colegas. Cómo hacerlo muestra la tarjeta
[muestra al equipo el procedimiento de IA](card:team-adoption-cycle). Otras instrucciones para IA en la carpeta compartida, como cómo redactar respuestas a clientes, añádalas en `AGENTS.md`.
Cómo hacerlo muestra la [tarjeta independiente](card:agents-md).
## Ley de IA de la UE

**Qué es:** Reglamento europeo sobre inteligencia artificial. Distingue diferentes roles, modos de uso y niveles de riesgo, y establece obligaciones específicas para los proveedores y sujetos que implementan o utilizan IA en la práctica profesional.

**Qué no es:** No es una prohibición general de la IA ni una regla única aplicable por igual a cada herramienta y tarea. El solo hecho de que algo use IA no determina la categoría legal ni una obligación concreta.

**Por qué lo necesita el estudiante:** Ayuda a identificar qué situación práctica requiere un control adicional y hacia dónde continuar en la biblioteca.

| Su situación | Continúe aquí |
|---|---|
| La IA influye en decisiones sobre una persona concreta | [Reglas de IA para el equipo](card:pravidla-pro-tym) |
| Decide sobre el uso de IA en nombre de una organización, cliente o su propia práctica profesional | [Reglas de IA para el equipo](card:pravidla-pro-tym) |
| Los datos sobre personas están en el material base | [Qué puede introducir en IA](card:bezpecne-pouzivani); aquí se aplican simultáneamente las reglas del RGPD |

La alfabetización en IA de las personas que usan IA para la organización, así como el hecho de que siempre decide un humano al trabajar con IA, se abordan en la tarjeta `pravidla-pro-tym`.

**Fuente:** [Reglamento (UE) 2024/1689, especialmente artículo 4 y artículo 50](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/ces)

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
