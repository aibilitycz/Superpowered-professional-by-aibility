# Set Up Cross-App Workflow: AI Transfers Data for You

AI automatically transfers data you usually retype between apps, like applications from email into a spreadsheet.

## Set Up Cross-App Workflow: AI Transfers Data for You

**Difficulty: Medium.**\
**Time: approximately 15 minutes** with data you normally retype manually.
## What It’s Good For

You received 23 applications for a production assistant position in one week, and by Friday the production manager needs their list. You retype each into a spreadsheet, reply to candidates confirming receipt, and by the fifteenth you discover a phone number was entered incorrectly.

This kind of task is called a [workflow](glossary:workflow) across multiple apps, and AI can do it all: read emails, enter data into a spreadsheet, and prepare draft replies from the table.
## What to Prepare

- A task where you retype data, for example applications from email into a spreadsheet,
- Access to both applications; in corporate accounts, AI connections sometimes require admin approval,
- AI in Cowork or Code mode; where to find it is shown in the “In your tool” block,
- A folder for instructions for next time, e.g., a new empty `Recruitment` folder.
## How to Proceed

1. Open AI in Cowork or Code mode in your folder and paste the prompt into a new chat. After the line “Instructions:”, write in one sentence where the data comes from, where it will be entered, and what follows.
2. AI will connect missing apps; you confirm login yourself. Then it will do the entire task and save emails only as drafts while you focus on something else.
3. Compare two or three records in the target app with the source and send the drafts. Tell AI what to do differently next time, and it will update the instructions.
## AI Exercise

Paste this [prompt](glossary:prompt) into AI in Cowork or Code mode, opened in your folder, and after the last line write your task:

Do the task for me where I manually retype data from one app to another. The instructions are on the last line.

First, find out which apps from the instructions you can access and whether you can write to the target app. Use the connectors you have here. If any are missing or read-only, connect the app yourself, for example via the Composio service. If I need to do something, like log in, tell me exactly where to click and wait. If writing to apps or saving files to the folder is not possible here, tell me immediately and advise where to switch.

Then do the entire task. Go through the source, extract data, and enter it into the target app. If the table or list does not yet exist, create it and design columns according to the instructions. Do not guess missing data in the source: leave fields empty and mark the record. If emails or messages follow after entry, save them as drafts; I will send them myself.

Then write instructions for next time into the file postupy-mezi-aplikacemi.md in the folder you are working in. Under a heading ### with the task name, write where the data comes from, where it is entered, which data, what follows, and how to recognize records already done. If the file exists, append the task at the end.

At the end, tell me how many records you transferred, where to find them, which you couldn’t handle and why, and where the instructions are saved. After I review the result and tell you what to do differently, fix it and add it to the instructions.

Instructions:

## In Your Tool

### Microsoft Copilot
Paste the prompt into Copilot Cowork at `copilot.cloud.microsoft` (switch Cowork at the top next to Chat). Outlook reads emails directly. Attach Excel from OneDrive or SharePoint with the + button; Cowork creates a new table automatically. You don’t need a folder; Cowork saves instructions for next time as a skill; scheduled tasks are on the Automations page. Add CRM and other apps via Browse plugins if allowed by your admin.

### ChatGPT
Code mode is in ChatGPT Codex in the ChatGPT desktop app: select Codex, New chat, and open a folder. Keep the OneDrive spreadsheet in a folder synced to your PC so Codex can write directly. Connect Outlook under Plugins in settings; if missing in a corporate account, the admin enables it. Scheduled tasks are in the left panel under Scheduled.

### Claude
In the Claude desktop app, open Cowork or Claude Code and select a folder; both require paid plans. Connectors are in the left panel under Customize, Connectors; AI connects missing ones automatically. Scheduled tasks are in Cowork in the left panel under Scheduled.

### Gemini
Repeated tasks between Google apps are built with Workspace Studio (`studio.workspace.google.com`): choose Describe it with AI and describe it in one sentence. Test run performs real steps; Turn on activates the workflow which then runs automatically. Without Studio, write in Gemini app “@Gmail list applications from this week as a table” and save it with Export to Sheets.
## What Is Cross-App Workflow

Workflow is an English term for a multi-step process where the output of one step is the input for the next. Just as AI transfers applications, it can move inquiries from a web form into CRM (customer management system), or from 33 client emails compile a table of 27 unanswered questions.

The connector through which AI accesses an app in Cowork or Code mode is connected automatically by AI, as shown on the [Connect a Connector](card:plugin-connector) card; in a regular chat you enable it in settings. Depending on the connector’s capabilities, AI either reads or also writes in the app.

If you don’t have a connector for an app or it’s read-only, AI uses the Composio service. It connects to over a thousand apps like Outlook, Gmail, Excel, Google Sheets, Airtable, or CRM. AI sets it up automatically in Cowork or Code mode. You create an account and approve access to each app separately, so Composio only sees apps you approved. The basic account is free and requires no payment card. In corporate accounts, ask IT before connecting.

`postupy-mezi-aplikacemi.md` is a plain text file with instructions for your cross-app tasks. Each task has its own heading, so next time you just write its name and the file name. The `.md` extension means it’s written in [Markdown](glossary:markdown), a simple format where hashes `###` at the start of a line mark headings.
## Automate Task Execution

Tasks repeated daily or weekly can run automatically. Paste this instruction into AI that supports scheduled tasks, changing only the task name to yours, and ask it to create a scheduled task. Where to find it in your tool is shown in the “In your tool” block.

```text
Every workday at 8:00 AM, do the task “Applications to Table” according to the file postupy-mezi-aplikacemi.md. Process only what has been added since the last run. In the summary, tell me how many records were added and how many drafts are waiting in the outbox. If nothing new, say nothing.
```

The task reads the file in the folder on your PC, so it runs only when the PC is on and the AI app is open.
## Example

Lucie from HR at an engineering company is hiring a production assistant. From October 5 to 9, 2026, she received 23 applications by email. On Monday, October 12, she opens AI in Cowork mode in the `Recruitment Assistant` folder, pastes the prompt, and after the last line writes:

```text
From emails with applications for the production assistant position received since October 5, enter into the Excel table Applicants on SharePoint the name, phone, years of experience, possible start date, and a link to the email. Prepare a draft reply for each candidate confirming receipt and promising to respond within 10 working days.
```

AI connects Outlook and Excel; Lucie confirms login to her corporate account, and AI processes 23 emails. Then it returns:

```text
Transferred 23 applications into the Applicants table.
- 21 records are complete.
- 2 applications lack experience; those rows are marked yellow in the table.
- 23 draft replies are waiting in Outlook drafts.
Instructions are saved in postupy-mezi-aplikacemi.md under the heading Applications to Table.
```

Lucie opens the table and compares phone and experience for two candidates with their emails; they match. Then Lucie writes to AI: “Add a column for how they heard about the position, and ask about experience in replies to incomplete applications.” AI updates the table and two drafts and modifies the instructions file as follows:

```text
### Applications to Table
- Source: emails with applications for the open position.
- Destination: Applicants table in Excel on SharePoint, one row per candidate.
- Data: name, phone, years of experience, possible start date, how they heard about the position, link to email.
- Next step: draft reply confirming receipt and promising response within 10 working days. If experience is missing, ask about it in the reply.
- Completed records: do not reprocess emails that already have a row in the table.
```

Lucie reviews and sends the drafts in Outlook. When four more applications arrive on Thursday, she just writes “Do applications to table according to postupy-mezi-aplikacemi.md” and AI processes only the four new ones.
## If You Get Stuck

- **AI can’t access the app:** ask if a connector exists for the app. If yes but can’t enable it in your corporate account, AI will write a short request to your admin. If none exists, let AI connect the app via Composio; ask IT first in corporate accounts.
- **AI reads but can’t write to the app:** the connector is read-only. In Cowork or Code mode, tell AI to connect the app via Composio. From a regular chat, switch to [Cowork or Code](card:when-chat-is-not-enough).
- **Data in the target doesn’t match the source:** show AI one incorrect record and where to find the correct data. Have it fix all similar records and add the rule to the instructions.
- **Records appear twice in the table:** tell AI to delete duplicates and add to instructions how to recognize completed records, e.g., by email link.
## What Will Be Done

Data you would otherwise retype manually is in the target app, you compared two or three records with the source, and reviewed and sent drafts. The instructions with your edits are saved in `postupy-mezi-aplikacemi.md`, so next time you start the task with one sentence.
## What’s Next

If another AI task should follow data transfer, for example preparing interview materials from the applicants table, add it to the instructions and save the entire workflow as a [skill](card:create-skill-from-proven-process). If you want the scheduled task to monitor its own errors and report them, set it as a [scheduled task](card:recurring-ai-task).
## Markdown

**What it is:** A simple plain text format where headings, lists, links, and other structure are written using a few common characters. Files typically use the `.md` extension.

**What it is not:** It is not a programming language nor a format intended solely for developers.

**Why a student needs it:** It remains easily readable and editable by both humans and AI, and can be transferred between different tools.

## Prompt

**What it is:** An instruction for a specific interaction with AI.

**What it is not:** It is not the same as long-term context, a stored assistant, or an agent.

**Why the student needs it:** It triggers the exercise and guides its progress; it is not the main learning content.

## AI workflow

**What it is:** A repeatable sequence of several consecutive steps where the output of one step forms the input of the next. Individual steps can be performed by humans, AI, or various tools.

**What it is not:** It is not automatically automation or an agent. Steps can be human-controlled, and handoffs can occur across different environments.

**Why the student needs it:** It helps connect individually mastered AI tasks into a process that can be tested, improved, and potentially automated later.

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
