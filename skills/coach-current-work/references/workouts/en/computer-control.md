# Use Computer Control: AI Operates Programs on Your Computer for You

A program on your computer without AI integration is controlled by AI itself, which rewrites data for you.

## Use Computer Control: AI Operates Programs on Your Computer for You

**Difficulty: medium.**\
**Time: approximately 20 minutes** with one program on the computer.
## What it’s good for

At the end of the month, you manually re-enter invoices for your project from the invoicing program into an Excel cost overview. The program is only on your company computer, has no AI integration or web version, and re-entering takes forty minutes.

Computer control means AI sees your screen and operates programs with mouse and keyboard similarly to you, so it can handle such a program.
## What to prepare

- One task you regularly do manually in a program without a web version,
- An estimate of how many minutes the task takes you manually,
- A folder on your computer where you save work related to the task; AI will save the result and procedure there,
- AI that can control the computer; whether yours can do it is shown in the "In your tool" block.
## How to do it

1. Open AI in Cowork or Code mode in the folder from your preparation and insert the prompt. Add your task (program, what to do in it, where to save the result) and how many minutes it takes you on the last two lines.
2. If AI finds no connector for the program, it will request access to it and on Mac also screen recording permission; allow it. When AI takes control of the mouse on Windows, do not work until it finishes.
3. In the program, check one or two items from the result and tell AI how many minutes you spent on the task. AI will write the procedure and comparison into `ulohy-v-aplikacich.md`.
## AI exercise

Insert this [prompt](glossary:prompt) into AI in Cowork or Code mode, opened in your folder, and complete the last two lines with your task and time:

Do a task for me in a program on my computer that I regularly do manually. The task and the time it takes me manually are on the last two lines.

First, check if you have a connector for the program. If yes, do the task through it. If not, control the program via screen with mouse and keyboard. In the program, do only what the task requests; if it involves data entry, only read and export. If you don’t know which option to choose in the program, ask me. Note when you start and when you finish.

Save the result where the task says, tell me where in the program I can verify it, and ask me how many minutes I spent on the task.

Then write the procedure for next time into the file ulohy-v-aplikacich.md in the folder you’re working in; if the file exists, append the task at the end. Under a heading with the task name write: program and whether a connector exists, steps that worked (names of windows, menus, and buttons), what the result should look like, and time comparison: how many minutes you worked, how many minutes the task takes me manually, and how many minutes I spent on it.

Finally, add a rule to the file AGENTS.md in the same folder: "When a task requires a program on the computer, use the connector if it exists. If it doesn’t exist, control the screen according to the procedure in ulohy-v-aplikacich.md." If AGENTS.md doesn’t exist, create it. Make sure you read it in this tool at the start of each work session; in Cowork, write it into the folder instructions.

Task:
Manually it takes me:

## In your tool

### Microsoft Copilot
Copilot Cowork does not control programs on your computer, so do not insert the prompt from this card. Export the data yourself, save it on OneDrive, attach it in Cowork on `copilot.cloud.microsoft` with the + button, and write "Make [task] from export, save procedure as skill." You will get a finished table; clicking in the program remains your responsibility. For a regular task, have Copilot write an IT request for computer use from Copilot Studio.

### ChatGPT
Code mode is in ChatGPT Codex in the ChatGPT desktop app: select Codex and open a folder. You add computer control in the Plugins menu, Computer Use by clicking Install plugin; in a company account, the admin may restrict it. Scheduled tasks in Codex do not reliably control programs on the computer, so run repeated tasks with a single sentence.

### Claude
In the Claude desktop app, enable computer control in Settings, General by toggling Enable computer use; AI then uses it in Cowork and Claude Code. It’s available in Pro and Max plans; company Claude Team and Enterprise do not have it yet. Scheduled tasks are in Cowork in the left panel under Scheduled.

### Gemini
The Gemini app for Mac and Windows sees the window you share but does not control programs for you. If the program supports export, save it to Drive, attach it in Gemini via Add from Drive, and write what you want from it; you save the table with the Export to Sheets button. For a regular task, have Gemini write an IT request specifying which program and task you want AI to handle.
## What is Computer control

Computer control is the English term for controlling the computer; in AI tool settings it’s usually called Computer use. AI takes screenshots, recognizes which window and button is where, and clicks and types into the program similarly to you. Before working in each program, it asks permission to access it. On Mac, it usually works in a background window; on Windows, it sometimes takes control of mouse and keyboard. You can stop it anytime with the stop button in the app.

A connector, i.e., direct AI integration with the application, is found in your AI tool’s settings. AI reads and writes data directly through it without clicking, so it’s faster and less error-prone. If no connector exists for the application, sometimes it can connect via the Composio service, which links over a thousand applications; IT must enable it for company systems. If the program has a web version, it’s faster to let AI work there via the browser. Screen control is used only for programs where none of these options work. The rule in `AGENTS.md` reminds AI of this for each task.

`ulohy-v-aplikacich.md` is a plain text file with your tasks in programs, steps that worked, and time comparisons. `AGENTS.md` is a file with rules for AI in the same folder; AI reads it at the start of each work session, so you don’t have to repeat the connector rule.
## Have AI do the task automatically every month

You don’t even have to start a regularly repeated task. Insert this instruction into AI that supports scheduled tasks and computer control, just change the task name and time to yours, and ask it to create a scheduled task from it. Where to find scheduled tasks in your tool is shown in the "In your tool" block.

```text
On the first working day of each month at 8:00, do the task "Project invoices" according to the file ulohy-v-aplikacich.md for the previous month. Save the result in the same folder with the month in the file name and in the summary tell me the number of invoices and total amount.
```

The task controls a program on your computer, so it will run only when the computer is on, not asleep, and the AI app is open. If your tool cannot schedule such a task, run it with a single sentence, for example, "Do project invoices according to `ulohy-v-aplikacich.md`," and AI will handle the rest.
## Example

Martin coordinates a new e-shop project at a distribution company. At the end of the month, he re-enters supplier invoices for the project from the invoicing program into the cost overview. The program runs only on company computers and has no connector or web version. On Wednesday, September 30, 2026, he opens AI in Code mode in the `E-shop` folder, inserts the prompt, and writes on the last two lines:

```text
Task: In the invoicing program, find received invoices for September with the cost center E-shop and enter them into the table naklady-projektu.xlsx in this folder: supplier, invoice number, amount without VAT, due date.
Manually it takes me: 40 minutes
```

AI finds no connector for the program and requests access. Martin allows it, and since he has a Mac, AI works in a background window while he attends to email. Once, AI asks if the marketing cost center E-shop should be included, and after 14 minutes, the table contains 23 invoices from 9 suppliers totaling 412,600 CZK without VAT. Martin opens two invoices in the program, amounts match, and when AI asks, he says the task took him 3 minutes (for the question and verification). AI writes into `ulohy-v-aplikacich.md`:

```text
### Project invoices
- Program: invoicing program on the computer, no connector.
- Steps: Documents menu, Received invoices, filter Cost center E-shop (excluding E-shop marketing) and month, Export to Excel button.
- Result: table naklady-projektu.xlsx with columns supplier, invoice number, amount without VAT, due date.
- Time: AI 14 minutes, manual 40 minutes, Martin 3 minutes (question and check).
```

At the end of October, Martin just writes "Do project invoices according to `ulohy-v-aplikacich.md`" and AI no longer asks about the cost center.
## If you get stuck

- **AI says it can’t control the computer:** you are working in a regular chat or web version. Computer control works only in the desktop app in Cowork or Code mode. More in the card [Chat, Cowork or Code](card:when-chat-is-not-enough).
- **You don’t see the option in settings:** update the app. Company Claude Team and Enterprise do not have computer control; if you have ChatGPT, use Codex. In company ChatGPT, the admin may restrict computer control.
- **IT must approve the app or permissions:** ask AI in regular chat to write a short request for IT: which app you need, which permissions, and for what task.
- **On Mac AI doesn’t see or click in the program:** in System Settings, Privacy & Security, check the AI app for Screen Recording and Accessibility.
## What will be done

You will have one task done in a program without a connector, and you verified the result directly in the program. In `ulohy-v-aplikacich.md` is the procedure with steps that worked and a time comparison with manual work, so next time just tell AI which task from it to do. The rule in `AGENTS.md` tells AI when to use a connector and when to control the screen.
## What’s next

If you want the task to run reliably and report errors automatically, set it as a [scheduled task](card:recurring-ai-task).
## Prompt

**What it is:** An instruction for a specific interaction with AI.

**What it is not:** It is not the same as long-term context, a stored assistant, or an agent.

**Why the student needs it:** It triggers the exercise and guides its progress; it is not the main learning content.

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
