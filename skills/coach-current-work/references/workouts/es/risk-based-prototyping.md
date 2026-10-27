# Use vibe coding: AI construirá una herramienta para tus colegas

Los colegas calculan el precio de la oferta por sí mismos en una pequeña herramienta que la IA crea a partir de tu tabla.

## Use vibe coding: AI construirá una herramienta para tus colegas

**Dificultad: media.**\
**Tiempo: aproximadamente 15 minutos** con tarifario y un caso resuelto.
## Para qué sirve

Tus colegas de ventas te llaman varias veces a la semana para que calcules el precio de la oferta.
Solo tú sabes manejar la tabla con el tarifario y las fórmulas. La semana pasada estuviste de vacaciones y un colega envió al cliente un precio sin el recargo de fin de semana.

Con [vibe coding](glossary:vibe-coding), es decir, programación por descripción, solo describes qué debe calcularse y la IA escribe la herramienta donde el colega ingresa el número de invitados y ve inmediatamente el precio con el desglose.
## Qué preparar

- El tarifario desde el que los colegas calculan, en una carpeta compartida que también tienes en tu computadora,
- En la misma carpeta un caso resuelto con el resultado correcto, por ejemplo una oferta enviada,
- Un colega que pruebe la herramienta primero,
- IA en modo Cowork o Code; dónde encontrarla lo muestra el bloque “En tu herramienta”.
## Cómo hacerlo

1. Abre la IA en modo Cowork o Code en la carpeta compartida con el tarifario y pega el prompt. En la última línea añade qué debe calcular la herramienta, quién la usará y dónde está el caso resuelto.
2. La IA guardará la herramienta como `kalkulacka.html`. Ábrela con doble clic, ingresa el caso resuelto y compara el resultado; si algo no coincide o no funciona, escríbele a la IA para que lo corrija.
3. Indica a tu colega dónde encontrar `kalkulacka.html` en la carpeta compartida para que calcule su próximo caso. Lo que no pueda hacer, envíaselo a la IA con sus palabras.
## Ejercicio de IA

Inserta este [prompt](glossary:prompt) en la IA en modo Cowork o Code,
abierta en tu carpeta con el tarifario, y en la última línea añade qué debe
calcular la herramienta, quién la usará y en qué archivo está el caso resuelto. Cómo es esa línea
puedes verlo en el Ejemplo.

Construye a partir del cálculo que los colegas hacen repetidamente a mano en la tabla, una pequeña herramienta que ellos mismos puedan abrir. Qué debe calcular, quién la usará y en qué archivo está el caso resuelto con el resultado correcto, lo encontrarás en la última línea. Si no trabajas directamente en la carpeta con el tarifario, dímelo de inmediato.

Revisa el tarifario o la tabla en la carpeta y extrae todas las reglas de cálculo: precios, recargos, descuentos, redondeos y condiciones. Si no reconoces alguna regla ni por las fórmulas en la tabla o los datos se contradicen, pregúntame y muéstrame un ejemplo.

Guarda la herramienta en un solo archivo kalkulacka.html en la misma carpeta que el tarifario. Debe abrirse con doble clic en un navegador común sin instalación ni internet, así que incluye el tarifario directamente en ella. Arriba habrá campos que el colega llenará, debajo el resultado con desglose que muestre cómo se llegó al número, y un botón que copie el desglose para que el colega lo pegue en un correo o oferta. Usa palabras que los colegas usan para las etiquetas. Si un campo queda vacío o con un valor absurdo, la herramienta debe indicar claramente qué corregir.

Calcula en la herramienta el caso resuelto y compara el resultado con el correcto. Si difiere, encuentra la regla que calcula mal, corrígela y compara de nuevo. Luego dime dónde encontrar kalkulacka.html y qué debo ingresar para verificar el resultado por mí mismo.

Escribe las reglas de cálculo en palabras comunes en el archivo kalkulacka-pravidla.md en la misma carpeta, incluyendo la fecha del tarifario y el caso resuelto con el que verificaste la herramienta. Añade en el archivo AGENTS.md de esta carpeta la regla: “Cuando cambie el tarifario o las reglas de cálculo, ajusta kalkulacka.html y kalkulacka-pravidla.md según corresponda. Luego calcula el caso resuelto con el nuevo tarifario y escribe cuánto y por qué ítems difiere el resultado del original.” Si AGENTS.md no existe, créalo. Asegúrate de leer AGENTS.md al comenzar cada trabajo en esta carpeta; en Cowork inclúyelo en las instrucciones de la carpeta.

Qué debe calcular la herramienta, quién la usará y en qué archivo está el caso resuelto:

## En tu herramienta

### Microsoft Copilot
Copilot Cowork en `copilot.cloud.microsoft` guarda nuevos archivos en su carpeta
Cowork en OneDrive, no en tu carpeta compartida. Adjunta el tarifario y el caso resuelto con el botón +, pega el prompt y añade “Construye la calculadora como un libro de Excel, no necesitas trabajar en la carpeta.” Mueve el libro a la carpeta compartida y envía el enlace a los colegas; Copilot guardará la regla como skill.

### ChatGPT
El modo Code está en ChatGPT Codex en la app de ChatGPT para PC: elige Codex y abre la carpeta compartida con el tarifario (open a folder). Codex guardará `kalkulacka.html` directamente allí y la regla en `AGENTS.md`.

### Claude
En la app Claude para PC abre Cowork o Claude Code con la carpeta compartida con el tarifario. La IA guardará `kalkulacka.html` directamente allí; en Cowork anotará la regla en las instrucciones de la carpeta.

### Gemini
Gemini construye la herramienta en Canvas: en la app Gemini elige bajo + Canvas, adjunta el tarifario y el caso resuelto y pega el prompt. Si dice que no trabaja en carpeta, responde “continúa en Canvas” y prueba el caso en la vista previa. Envía a los colegas por Share & export y Share; quien tenga el enlace verá también el tarifario. Tras cambiar el tarifario, escribe en el mismo chat para que ajuste la herramienta.
## Qué es vibe coding

Vibe coding es el nombre en inglés para programación por descripción: la IA escribe el código y tú la diriges con frases comunes. Describes qué debe calcular la herramienta, la IA escribe el código y tú pruebas la herramienta con un caso cuyo resultado conoces.
No necesitas programar y la herramienta solo calcula, así que no cambia nada en la tabla ni en los sistemas de la empresa. Sirve para todo lo que se calcula siempre con las mismas reglas: precio de oferta según tarifario, gastos de viaje, presupuesto de evento corporativo o número de personas en turno. La herramienta incluye solo los campos que los colegas realmente llenan y el resultado que necesitan enviar; añade funciones extra cuando alguien las pida.

La herramienta de esta tarjeta es una página web que calcula. El archivo `kalkulacka.html` se abre en el navegador como cualquier página, pero el colega no necesita internet ni IA. Un chat común también puede escribir la herramienta, pero no la guardará en la carpeta ni la actualizará tras cambiar el tarifario.

A diferencia de la página de la tarjeta [Envía enlace en lugar de adjunto](card:web-page-output), que muestra el mismo contenido a todos, en esta herramienta el colega ingresa sus números y obtiene su resultado. Si necesitas una respuesta de los datos solo para ti, basta con [preguntar a tus datos](card:prace-s-daty).

Mientras la herramienta calcule solo con copia del tarifario y el colega lea el resultado por sí mismo, puedes dársela de inmediato; si debe escribir en el sistema de la empresa, por ejemplo en CRM con clientes, o la abren directamente los clientes, coordina primero con el administrador del sistema.

`kalkulacka-pravidla.md` y `AGENTS.md` son archivos de texto comunes que la IA escribe sola y no necesitas abrir. En `AGENTS.md` están las reglas para la IA en la carpeta compartida y la IA las lee al comenzar cada trabajo.
## Que la herramienta siga el ritmo del tarifario

La regla en `AGENTS.md` asegura que la IA, tras cada cambio en el tarifario, ajuste la herramienta y las reglas escritas y te muestre cómo cambió el precio del caso resuelto. Si desde enero hay un nuevo tarifario, guárdalo en la misma carpeta y escribe:

```text
Desde el 1.1. rige el nuevo tarifario cenik-2027.xlsx. Ajusta la calculadora según él y dime qué precios cambiaron.
```

Como la herramienta está en carpeta compartida, los colegas abrirán la nueva versión tras la actualización y no tendrás que enviar nada.
## Ejemplo

Petra es asistente comercial en una empresa de catering en Brno. Los vendedores calculan el precio del buffet en una tabla: menú por persona, un camarero por cada 20 invitados, recargo del 15 % sábados y domingos, y transporte 30 CZK por kilómetro ida y vuelta. El 13/10/2026 Petra abre la IA en modo Cowork en la carpeta compartida Ofertas, donde están `cenik-2026.xlsx` y la oferta que la semana pasada envió a una oficina contable en Boskovice: buffet para 80 invitados el sábado 24/10, 42 km desde Brno, 52 200 CZK sin IVA. Inserta el prompt y en la última línea añade:

```text
Precio del buffet desde cenik-2026.xlsx para vendedores que lo dicen a los clientes por teléfono. El caso resuelto es nabidka-boskovice.pdf.
```

En el primer intento la calculadora muestra 52 578 CZK. Al comparar, la IA detecta que el recargo de fin de semana se aplica también al transporte, lo corrige y obtiene el mismo número que en la oferta. Petra abre la herramienta, ingresa el mismo buffet y con un botón copia el desglose:

```text
Buffet Estándar, 80 invitados × 450 CZK: 36 000 CZK
Servicio, 4 camareros × 1 800 CZK: 7 200 CZK
Recargo sábado 15 %: 6 480 CZK
Transporte 42 km ida y vuelta: 2 520 CZK
Total sin IVA: 52 200 CZK
```

Luego escribe a Ondřej para que calcule en la calculadora de la carpeta Ofertas la boda que está gestionando. Ondřej responde que no sabía si ingresar kilómetros solo de ida o ida y vuelta. Petra envía su frase a la IA y ahora el campo se llama “Distancia desde Brno, solo ida (km)”.
## Si te atascas

- **La IA dice que guardó la herramienta pero no está en la carpeta:** probablemente trabajas en un chat común que no guarda archivos. Cambia a [Cowork o Code](card:when-chat-is-not-enough) y abre allí la carpeta compartida con el tarifario.
- **La IA pregunta por una regla que no sabes:** pídele que te muestre la fórmula de la tabla de la que deduce la regla y que calcule un caso con ella. Si aún no sabes, pregunta al colega que más usa la tabla.
- **El colega ve código en lugar de la herramienta o no la abre:** que descargue `kalkulacka.html` a su computadora y la abra con doble clic, no desde la web de OneDrive o Teams. También puedes enviar un enlace: pide a la IA que convierta la herramienta en una página con enlace compartido y compártela solo con gente de la empresa como en la tarjeta [Envía enlace en lugar de adjunto](card:web-page-output).
- **La herramienta calcula distinto que la tabla:** escribe a la IA qué ingresaste, qué mostró la herramienta y cuál es el resultado correcto. La IA encontrará la regla errónea y la corregirá en la herramienta y en `kalkulacka-pravidla.md`.
## Qué estará listo

En la carpeta compartida tienes la herramienta `kalkulacka.html` que calculó el caso resuelto igual que tu tabla, y el primer colega sabe dónde encontrarla. Junto a ella está `kalkulacka-pravidla.md` con las reglas de cálculo y en `AGENTS.md` la regla para que la IA, tras cambiar el tarifario, ajuste la herramienta y muestre cómo cambió el precio del caso resuelto. Así solo escribes una frase para actualizar el tarifario.
## Qué sigue

Antes de dar la herramienta a todo el equipo, deja que la IA compare varios resultados con la tabla, como muestra la [verificación de salida de IA](card:kontrola-vysledku). Cuando más personas en el equipo empiecen a construir herramientas con IA, redacten juntos las [reglas para IA](card:pravidla-pro-tym).
## Prompt

**Qué es:** Instrucción para una interacción específica con la IA.

**Qué no es:** No es lo mismo que un contexto a largo plazo, un asistente almacenado o un agente.

**Por qué lo necesita el estudiante:** Inicia el ejercicio y guía su desarrollo; no es el contenido principal de aprendizaje.

## Codificación Vibe

**Qué es:** Una forma de crear sitios web, aplicaciones, scripts u otro producto de software en la que una persona describe la intención y el comportamiento deseado, y la IA genera o modifica el código. La persona prueba y corrige el resultado de forma continua.

**Qué no es:** No es un lenguaje de programación independiente ni una garantía de que el código generado sea correcto, seguro o listo para producción.

**Por qué el estudiante lo necesita:** Ayuda a identificar un camino accesible hacia un prototipo propio y, al mismo tiempo, a distinguir un experimento rápido de una solución que requiere pruebas y revisión experta.

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
