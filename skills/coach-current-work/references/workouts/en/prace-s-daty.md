# Ask Your Data: AI Calculates the Answer from an Export

AI calculates the answer to your decision question from an export and saves the procedure for next month.

## Ask Your Data: AI Calculates the Answer from an Export

**Difficulty: easy.**\
**Time: approximately 15 minutes** with an export and one question.
## What It’s For

It’s Monday, November 2, and the sales director wants to know by Friday which
products to feature in the Christmas campaign. The order export for three months
has fourteen thousand rows, and purchase prices, without which you can’t tell
what the company profits from, are kept in a warehouse system.

AI merges both exports and calculates the answer with a short program from all
rows, so it doesn’t rely on estimates.
## What to Prepare

- an export from your e-shop, accounting, or CRM as `.xlsx`, `.csv`, or a cloud
  table,
- the question you need answered and what you will use the answer for,
- the original table opened in a spreadsheet editor to verify one number,
- AI capable of calculating with files (see the “In Your Tool” section).
## How to Do It

1. Upload the export to the chat (in Cowork or Code mode, open the folder with
   exports), insert the prompt from the AI exercise, and below it write your
   question and what you need the answer for.
2. AI will describe what it found in the export, merge the exports, and calculate
   the answer. Verify the number it gives you in the original table and tell AI
   if it matches.
3. If it matches, AI saves the procedure as a [skill](glossary:skill), in memory,
   or in instructions and writes a sentence for the next export. Where to save
   it is shown in the “In Your Tool” section.

You decide what to do with the result.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

I need an answer to one question from the data. I will write the question and what
I will use the answer for below this text. The data is in the attached export or
in the folder you are working in.

1. Load the entire files and tell me what’s in them: how many rows, which columns,
and for what period. If you don’t know what a column means and it matters for the
answer, ask me.
2. If you need two exports for the answer, merge them by the column they share,
such as product code. Compare the row counts before and after merging to ensure
no rows are duplicated or lost. List unmatched rows separately and say how many.
3. Calculate the answer with code from all rows; do not estimate anything. If
something is missing in the data for the answer, like purchase prices for sales,
say what is missing and where I might find it.
4. Write the result like this: the answer in one to three sentences, a table with
numbers it’s based on, and a plain-language description of the calculation. Finally,
give me one number the answer depends on that I can verify in the original table,
and tell me how to find it: sheet, column, and filter.

If I say the number doesn’t match, find out why, fix the calculation, and give me
a new number to verify. When I say it matches, save the procedure so the next
export can be processed with one sentence. Name it by topic, e.g., Profit by Product.
In the procedure, write which files and columns you expect, how you merge them,
and what you calculate; do not include numbers from this export. If you work in a
folder, save it there as a file, e.g., procedure-profit-by-product.md, and next to
it the code you used. In a regular chat, turn the procedure into a skill, and if
this tool doesn’t support skills, save the procedure in memory. If neither is
possible, give me the procedure as a downloadable file that I will upload with
next export. If saving requires my click, tell me exactly where. Finally, tell
me the procedure’s name, where it’s saved, and the sentence I will use to submit
next export; the sentence must include the procedure name.

## In Your Tool

### Microsoft Copilot
Copilot Chat with a work account calculates the attached export in Python;
you add the file with the + button or drag and drop. When the number matches,
Copilot saves the procedure in memory; tell it to write the full procedure and
paste it into Notebook instructions (Notebooks, New Notebook), where you upload
next export. Regular exports on OneDrive are processed by Cowork next to the
Chat toggle (Microsoft Copilot license).

### ChatGPT
Attach the export to the chat; AI runs the Python program itself. Business and
Enterprise plans turn the procedure into a skill saved to your account; overview
is under Plugins, Skills tab. Other accounts save the procedure in memory, and
Codex processes large exports in the ChatGPT desktop app directly in the folder.

### Claude
Calculations are handled by Code execution and file creation in Settings under
Capabilities; enabled in personal accounts, managed by admin in corporate ones.
File size limit is 30 MB; Claude can turn the procedure into a skill. Large and
regular exports are processed by Cowork or Claude Code directly in the folder.

### Gemini
Upload the export to Gemini app via Add files or from Disk; Google Sheets works,
and you can attach two exports at once. Google’s help doesn’t mention Gemini
calculates with code, so don’t skip the verification number. Work accounts lack
memory, so save the procedure as a skill (write “Save as skill”); next export,
you select it by typing "/" in the message field.
## What Code Calculation Means

When AI reads the table as text, it estimates numbers and may easily skip rows
in large exports. That’s why you let it calculate with code: AI writes a short
program, runs it on the entire file, and writes the answer from the result. You
don’t have to read the code; correctness is confirmed by the number you verify
in the table. In Cowork or Code mode, AI calculates directly on files in the
folder, handles large exports, and saves the procedure next to them as a plain
text file.

AI merges two exports by a [common key](glossary:data-key): a column present in both
files with identical entries, like product code or order number. Product name or
customer name is usually written slightly differently in each system, so it’s
not enough for merging.

If exports arrive monthly or chat can’t load them fully, work with AI in Cowork
or Code mode, which works directly with the folder on your computer. How to start
is shown on the [Cowork or Code](card:when-chat-is-not-enough) card.
## Let AI Calculate the Next Export Automatically

After the first round, AI has the procedure saved. Next month, give it the new
export and write the sentence AI gave you, e.g., “Use procedure Profit by Product
on the November export.” AI calculates the same way as before, so you can compare
numbers from both months immediately.

If exports arrive monthly to the same folder on your computer, AI in Cowork or
Code mode can calculate the answer without you on a set day as a [scheduled task](card:recurring-ai-task).
Give it this instruction and ask it to create the scheduled task:

```text
Every month on the 3rd at 8:00, take the newest export in the folder and calculate
its answer using the saved procedure. Save the result next to the export as a
file with the month in the name and write at the top what changed compared to
last month.
```

If the task works with a folder on your computer, it runs only when the computer
is on and the app is open.
## Example

Martina coordinates sales for an e-shop selling coffee and coffee machines. On
Monday, November 2, she downloads the order export for August to October
(`orders.xlsx`, 14,200 rows) and the warehouse price list with purchase prices
(`purchase-prices.xlsx`). She uploads both files to the AI she uses at work,
inserts the prompt, and writes below: “Which three products should get a Christmas
campaign? I want those we profit from the most.”

AI describes what it loaded and notes that orders only contain sales. Based on
sales, the Brio coffee machine would win with 1.24 million CZK, but sales alone
don’t show what the company profits from. So AI merges orders with the price list
by product code. Six codes are missing in the price list; AI lists them separately.
Martina recognizes them as September new products and requests prices from the
warehouse. The answer: the most profitable were Ethiopia coffee 250 g, Brazil
coffee 1 kg, and the Classic hand grinder. Brio’s margin is 9%, coffees over 40%.

For verification, AI gives Ethiopia coffee sales: 386,450 CZK, sheet Orders,
column Sales, filter Product code ETI-250. Martina filters it in the table and
the sum matches. She tells AI, which turns the procedure into the skill Profit by
Product; Martina confirms saving with one click. At the start of December, she
uploads the November export with the price list to a new chat and writes only
“Use procedure Profit by Product on the November export.” In two minutes, she
has the same table for November.
## If You Get Stuck

- **AI writes numbers but you don’t see how it calculated them:** write “Calculate
  it with code on the entire file and show me the calculation.” If AI can’t run
  code, check the “In Your Tool” section if calculations need enabling, and never
  skip verifying the number in the table.
- **Verification number doesn’t match:** tell AI what you found in the table and
  which filter you used. Most often it calculated with a different period, included
  canceled orders, or duplicated rows when merging. If the number doesn’t match
  in the next export, ask AI to write the fix into the saved procedure. If errors
  persist, continue with [result checking](card:kontrola-vysledku).
- **AI says it didn’t load the entire file:** chat may not handle large exports.
  Switch to [Cowork or Code](card:when-chat-is-not-enough), where AI works directly with files in
  the folder. If you don’t have that mode, ask AI which columns and period it needs
  and download an export with only those.
- **AI doesn’t save the procedure or doesn’t use it in a new chat:** enable memory
  in settings; in corporate accounts memory and skills may be disabled by admin.
  If neither works, ask AI for the procedure as a downloadable file and upload it
  with the export next time. Always write the sentence for next time including the
  procedure name in the new chat.
## What You’ll Have Done

You have the answer to your question calculated from all export rows and one
number verified in the original table. You know what’s missing in the data. The
procedure is saved as a skill, in memory, in the folder, or as a file you keep,
and next time you only need the new export and the sentence AI gave you.
## What’s Next

You can further improve the saved procedure based on your corrections. How to do
it is shown on the [Create a Skill](card:create-skill-from-proven-process) card. If colleagues need the
same calculation and you don’t want to do it for them every month, have AI build
a simple app where they upload the export themselves. This approach is called
[vibe coding](card:risk-based-prototyping).
## Common Key in Data

**What it is:** A column or combination of columns that can reliably identify the same record across two sources, such as an order ID or a combination of month and cost center.

**What it is not:** It is not a password or a technical access key. The same company or person name may not be a reliable common key.

**Why the student needs it:** It helps link matching rows without losing, mixing up, or unintentionally duplicating them.

## Prompt

**What it is:** An instruction for a specific interaction with AI.

**What it is not:** It is not the same as long-term context, a stored assistant, or an agent.

**Why the student needs it:** It triggers the exercise and guides its progress; it is not the main learning content.

## Skill

**What it is:** A reusable procedure for a specific type of task. It may include instructions, rules, examples, templates, and other necessary resources. The method of creation and execution varies depending on the tool.

**What it is not:** It is not a general assistant role nor a single successful conversation saved unchanged.

**Why a student needs it:** It helps convert a proven practice into a stable form that can be consistently reused.

## Service Outage, Limit, or Overloaded Chat

A common fallback for operational interruptions when working with AI. It is accessible from any card via the **Outage or Exhausted Limit** input. It does not create its own card, check-in, or multiple copies of the same text.

The specific section **When Something Goes Wrong** in the card further addresses errors in input, resources, tools, or procedures. This mechanic triggers when the AI cannot technically continue in the current pass.

## First, distinguish what happened

| What you see | Likely situation | First step |
|---|---|---|
| Tool reports exhausted limit, too many requests, or a reset time | tariff or temporary operational limit | note the reset time and save a return point |
| AI forgets the beginning, refuses additional attachments, or reports input too long | context, file, or task too large | create a handoff and continue in a new context or more suitable environment |
| Tool does not respond, returns a server error, or multiple models fail | service outage | verify official status and choose an approved substitute or pause |

If the AI still responds, it may name the situation itself and prepare a return point. If it does not respond, skip this step. Repeatedly resubmitting the same request will not save the work state.

## Save a return point

Before waiting or switching elsewhere, preserve the smallest package from which you can safely continue:

```text
Goal: ...
What is done and where it is: ...
Confirmed decisions and constraints: ...
Used resources or files: ...
Nearest next step: ...
What should not be changed or recreated: ...
```

If the AI still responds, use:

> Prepare a concise return point for continuing in a new chat or tool. Preserve the goal, completed parts, confirmed decisions, resources, constraints, and one nearest next step. Do not invent anything not present in the conversation.

For longer work, save the return point in the project README or another approved workspace. Sensitive inputs remain only in approved storage.

## Tariff or operational limit reached

1. Find out when the limit resets and whether it applies to the model, function, or entire account.
2. Decide between pausing, reducing scope, or using an approved substitute model or environment.
3. When switching, transfer the return point and only the resources necessary for the next step.
4. Verify that the substitute can handle the required files, tools, and actions. A weaker model may suffice for formatting but fail in analysis or tool use.

## Context, file, or task is too large

1. Have the AI create a handoff before it loses earlier decisions if it still responds.
2. Start a new chat or project with the return point and links to canonical files.
3. Divide work according to meaningful units and preserve shared criteria for the outcome. Randomly splitting text may lose relationships between parts.
4. If the task requires multiple files, bulk work, or project changes, continue via the `when-chat-is-not-enough` card.

## Tool or model outage

1. Verify the provider’s official status. Address account errors only when the service is generally operational.
2. Save the return point outside the currently nonfunctional conversation if it is still accessible.
3. Use an approved substitute tool only if it has the necessary capabilities and the same resources are allowed to enter it.
4. If no suitable substitute exists, pause work and record the exact next step. After restoration, resume from the last confirmed result.

## Safety boundaries

- A limit or outage is not a reason to input work, client, or personal data into an unapproved personal tool.
- A new account, free tier, or different provider may have different data, retention, and training policies.
- Switching between models can change format, accuracy, and available tools. Compare the first output after return with the last confirmed point.
- Do not resend an action that may have occurred before the error until you verify its status. This especially applies to system writes, message sending, purchases, or deletions.

## Returning to the card

After service restoration or switching to a suitable environment:

1. load the return point,
2. show the AI the last confirmed result,
3. request only the nearest next step,
4. complete the original card without repeating finished work,
5. if the tool or model changed, note any difference that may have affected the outcome.

## Record keeping

This mechanic does not create a separate fulfillment. It can only add a return point, chosen path, and any difference after a tool change to the main card’s result.

## Mechanic: Argument Readiness Check

A brief check at the start of cards that produce an output for someone else. It is not a standalone card and has no separate completion. It is the counterpart to the `data-readiness-check` mechanic: that one ensures data is ready, this one ensures the intent is ready.

## When It Runs

When a person is preparing an output that someone else will see: a presentation, report, recommendation, offer, email to management, summary for a client. It does not run for outputs intended for oneself, for research, or for draft notes.

## Why It Exists

AI can generate twenty slides or three pages of a report from anything and it will look finished. An empty output is indistinguishable from a good one at first glance because the missing part is the intent, not the form. Three sentences from a person are the cheapest way to recognize this before creation, not after.

## What It Requires from the Person

Three things, none suggested by AI:

| What | Why AI Cannot Determine It |
|---|---|
| **Audience** | only the person knows who they are addressing and what those people already know |
| **Change** | what the audience should do or decide differently after reading |
| **Key Sentence** | the single sentence they should remember if they forget everything else |

## The Reverse Test

The key sentence is identified by two properties: it can be disagreed with and fits in one breath. The test is to invert it.

- *We want to improve customer experience* → the opposite is nonsense, so the sentence says nothing.
- *Stop developing the second app and return people to the first* → the opposite makes sense and someone would defend it. This is the key sentence.

If the sentence fails, AI will say so and let the person rewrite it. It does not rewrite it for them.

## What AI Does

1. Requests the three sentences and waits for them. Does not suggest or comment on them.
2. Performs the reverse test. If the sentence fails, explains why and returns it to the person.
3. Asks if the format matches the intent. If another output would better evoke the change, offers the `output-beyond-document` card and leaves the decision to the person.
4. Once the three sentences are ready, proceeds directly to the main exercise of the card and does not revisit them.

## What Remains for the Person

- Define the audience and the change,
- Write and possibly rewrite the key sentence,
- Decide if the format suits the intent,
- Decide what is context and what to omit if time runs out.

## Mechanic Output

Three lines inside the main work result, no separate document and no further check-in:

```text
Audience: ...
Change the output should evoke: ...
Key sentence: ...
```

## Routing

- **Three sentences are clear:** continue with the main exercise of the card.
- **Key sentence fails the reverse test:** let the person rewrite it, do not continue.
- **Sentence cannot be written at all:** usually the decision has not been made or the output has two goals. Split into two outputs.
- **Change would be better evoked by another format:** `output-beyond-document` card.
- **Missing materials or context:** `prace-s-kontextem` card.
- **Output already exists and is going out:** `kontrola-vysledku` card.

## Boundaries

- The mechanic does not assess content quality or truthfulness. That is done by the result check on the finished output.
- It does not run for outputs intended for oneself; asking about audience for personal notes is ritual, not help.
- If the person knows and writes the three sentences in half a minute, the mechanic ends. It does not delay someone who has the intent.

## Minimal Prompt Block

```text
Before you start creating anything, request three things from me and wait for them: who the output is for, what should change after it, and what single sentence it should carry. Do not suggest them to me.

Then try to invert my key sentence. If the opposite sounds like nonsense, tell me the sentence says nothing and let me rewrite it. Do not rewrite it for me.

When the three sentences are ready, proceed directly to the main task and do not return to them. If another format would better evoke the change than the one I want, say so in one sentence and leave the decision to me.
```

## Mechanic: Data Readiness Check

A brief adaptive check at the start of data cards. It is not a standalone card, has no separate completion, and the user does not need to artificially search for a problematic table because of it.

## When It Runs

The user brings a real question and the data they want to work with. Before inserting the data, it must be clear that they are using an approved environment. If this is not clear, the mechanic will redirect to the security path and will not request the content.

## What AI Does

1. From the goal and dataset, verifies whether it understands what one row represents, important columns, units, and the time period.
2. Performs a quick technical check of structure, data types, missing values, possible duplicates, and categories.
3. Divides findings into:
   - technical fixes that it can safely suggest or perform,
   - semantic questions that must be decided by the user or data owner,
   - issues requiring a different environment or a separate card.
4. If nothing significant blocks the work, it proceeds directly to the card’s main exercise.
5. If a technical fix is needed, it shows the change with an example, requests approval, and creates a working copy. The original file is preserved.
6. If it does not understand the meaning, it only asks questions that could affect the outcome. It does not guess answers.

## What Remains for the User

- confirm the meaning of the data and the intent of further work,
- decide whether categories may be merged and what missing values mean,
- approve changes that may affect substantive content,
- determine if ambiguity requires the data owner.

## Mechanic Output

The mechanic creates a preflight note with up to three points inside the main working result:

```text
Data status: ready / modified / blocked
Changes made or assumptions confirmed: ...
What remains to be verified: ...
```

No separate document or additional check-in is created.

## Routing

- **Data are ready:** proceed directly to analysis or decision task.
- **Simple technical inconsistency:** AI fixes it after approval and continues.
- **Unclear business meaning:** ask the user or data owner.
- **Multiple files or systems:** card `unify-data-from-multiple-sources`.
- **Conversations, tickets, or feedback:** separate card for converting unstructured content into structure.
- **File too large or tool capability missing:** card `when-chat-is-not-enough`.
- **Uncertainty about data insertion:** cards `safe-usage` and `data-handling`.

## Boundaries

- Common formats and known categories are fixed by AI automatically; the user does not need to search manually.
- The mechanic does not create a problem if it finds no significant issues.
- Readiness is assessed relative to the specific question. The same table may suffice for an overview but not for precise financial or personnel conclusions.
- Format checks do not replace checks of specific values and calculations in the final result.

## Minimal Prompt Block

```text
Before you start analyzing the data, perform a brief readiness check relative to my question.

First, summarize what you think one row represents, important columns, units, and the period. You may suggest fixes for technical inconsistencies. Ask about semantic ambiguities and do not guess.

If the data are ready for the task, say so in one sentence and proceed immediately. If something could change the outcome, show up to three points. Make changes to substantive content or remove rows only after my approval and only in a working copy.
```
