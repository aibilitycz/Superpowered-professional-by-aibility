# Set Up a Scheduled Task: AI Works Automatically at a Regular Time

A report you currently compile manually every week will be prepared automatically by AI at the time you specify.

## Set Up a Scheduled Task: AI Works Automatically at a Regular Time

**Difficulty: Medium.**\
**Time: approximately 15 minutes** with a report you prepare regularly.
## What It’s Good For

Every Monday morning, you select orders from a table with deadlines within two weeks and check where supporting documents are missing. You send the result to management; it takes half an hour, and during a week when you’re on vacation, the meeting starts without the report.

Just create the full report once with AI and have it write the task instructions from the finished work; the [scheduled task](glossary:task) will then repeat it at the set time without you.
## What to Prepare

- One report you prepare regularly and its latest version as a template,
- Access to supporting documents in a folder, in a connected app, for example in email, or on the web,
- AI that supports scheduled tasks; where to find them is shown in the “In your tool” block.
## How to Do It

1. Insert the prompt and after its last line write what report you want and where the supporting documents come from. For documents in a folder, open AI in Cowork or Code mode in that folder.
2. Tell AI what is missing and what is redundant in the report: keep only what you will act on. Then specify when the task should run and where to deliver the result.
3. AI will create the task or write the instructions and tell you where to schedule it. Check in the scheduled tasks list when it will first run; AI will add anything missing to the instructions.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work and after the last line write your report:

I want one report I prepare regularly to be sent automatically. I write what report it is and where the supporting documents come from on the last line.

First, create the full report from today’s data. Find the supporting documents yourself in the folder you work in, in connected apps, or on the web. If you find my older version of the report, follow its format. At the end of the report, write which sources it is from. If you don’t know where to find the documents, ask me.

Then wait for me to review the report and incorporate my feedback. From the entire work, write instructions for a scheduled task: where to get the documents, what to select from them, and how the report should look. Add a rule: if a source is missing or not fully loaded, do not create the report and tell me what is missing.

Ask me when the task should run and where to deliver the result, and offer me the available options here. Then create the scheduled task yourself and tell me when it will first run and where I can find the result. If you can’t create it here, write the instructions so I can insert them into a tool that supports it and tell me where.

Report:

## In Your Tool

### Microsoft Copilot
Insert the prompt into Copilot Cowork at `copilot.cloud.microsoft` (switch Cowork at the top next to Chat) and attach the table with the + button from OneDrive. It will create the task itself when you tell it when to run; you can find it with results on the Automations page. It runs in the cloud, so you can close your laptop. Without Cowork, in Copilot Chat, hover over the message with the instructions and select Schedule this prompt.

### ChatGPT
In ChatGPT, the AI will create the task if you request it in chat; tasks and their results are in the left panel under Scheduled. Such a task takes documents from connected apps, for example from a shared drive connected under Plugins in settings, and from the web, and runs even if you are offline. Codex in the ChatGPT desktop app works with folders on your computer; its task requires the computer and app to be running.

### Claude
In Claude Cowork, AI prepares the task and you confirm it with the Schedule button; the report is in the left panel under Scheduled. Tasks with connectors run even when the computer is off; tasks working with a folder on your computer require the computer and Claude app to be open. With connected email, AI can leave the result as an email draft.

### Gemini
In the Gemini app, type @, select Drive or Gmail, and insert the prompt; for a table on Drive, add its name. After you tell Gemini when and how often the task should run, it schedules it; tasks are in the left panel under Scheduled and the finished result appears there as unread, with a notification on mobile. You can have up to 10 tasks at once, and your Google Workspace edition must support this with a corporate account.
## What Is a Scheduled Task

A scheduled task is a set of instructions that AI runs automatically at the time you specify, for example every workday at 8:00 or once a week. When the task runs, AI has no one to ask, so the instructions must include everything it needs. You can read and edit the instructions anytime in the scheduled tasks list.

A task that takes documents only from connected apps and the web runs even if the computer is off. A task that works with a folder on your computer requires the computer and AI app to be running at that time. It’s easiest to start with a report from the web, for example news in your field, because you don’t connect anything. You connect apps in your AI tool’s settings; in corporate accounts, an admin may need to enable this.
## Other Reports That Can Run Automatically

Once you have your first report, create others in the same chat with one or two sentences and AI will ask what it needs. For example:

- “Every workday at 9:00 and 15:00, tell me how much we spent on ads and how much one new customer cost. If the cost per customer rises by more than 20%, put it in the first line.”
- “Every workday at 17:30, review what changed today in the project folder and add a short note at the top of the project log about what was done and decided.”
- “Every Monday at 7:30, find last week’s news in our field on the web and summarize the five most important with links to sources.”

For reports that monitor changes, like ad expenses, it’s useful to say “If nothing changed, don’t send anything.” You’ll soon stop opening reports that arrive empty.
## Example

Tereza coordinates orders at a small construction company and every Monday sends management a report of orders with deadlines within two weeks and missing documents. She has the orders table on the company OneDrive and AI connected to Microsoft 365, i.e., OneDrive and Outlook. On Monday, September 28, 2026, she inserts the prompt and writes after the last line:

```text
Monday orders report for management from the Orders 2026 table on OneDrive: deadlines within 14 days and what is missing where.
```

AI includes two closed orders in the report. Tereza writes “only open” and AI corrects the report. Then she chooses every Monday at 8:30 and the result as an email draft for management. AI creates the task, and since it works only with OneDrive and email, it runs even if the computer is off. On Monday, October 5 at 8:30, the draft is waiting:

```text
### Orders as of October 5, 2026
Deadlines within 14 days:
- Kolín School, reconstruction: handover on October 12, missing electrical inspection report.
- Mladá Boleslav Hall: occupancy permit on October 16, documents complete.
Missing documents:
- Nymburk Apartment Building: signed facade acceptance protocol.
Source: Orders 2026 table on OneDrive, Open sheet.
```

Tereza sends the email and writes in chat that she wants the site manager’s name for each order. AI adds this to the instructions and from October 12 the report includes it.
## If You Get Stuck

- **AI says it can’t schedule tasks:** your tool doesn’t support scheduled tasks or they are not enabled in your corporate account. AI will write the finished instructions based on the prompt; insert them into a tool that supports tasks and ask your admin to enable it if needed. More in the [Chat, Cowork or Code](card:when-chat-is-not-enough) card.
- **Task didn’t run or didn’t find the file:** it works with a folder on your computer and the computer was off or the app was closed at that time. Reschedule for when you’re at the computer or put the documents on a shared drive connected to AI.
- **Report has the same numbers every week:** the task reads a file you uploaded to chat, which doesn’t update itself. Put the table on a shared drive connected to AI and ask AI to update the instructions.
- **Report has old or missing numbers:** tell AI what is wrong so it can find the cause and fix the task instructions. More in the [Check AI Output](card:kontrola-vysledku) card.
## What Will Be Ready

You have your first report from current data, which you reviewed and corrected, and a scheduled task that will prepare it automatically from the next due date. You know when it will first run and where to find the result. AI will add anything missing after the first run.
## What’s Next

If you want to prepare the next step directly from the report, for example materials for a meeting, add it to the task instructions and [save the entire process as a skill](card:create-skill-from-proven-process).
## Prompt

**What it is:** An instruction for a specific interaction with AI.

**What it is not:** It is not the same as long-term context, a stored assistant, or an agent.

**Why the student needs it:** It triggers the exercise and guides its progress; it is not the main learning content.

## Scheduled Task

**What it is:** Work that the tool runs based on time or an event and delivers the result without you having to request it each time. Availability and name vary depending on the tool and account.

**What it is not:** A skill or assistant. Those wait until someone uses them; the task runs automatically.

**Why the student needs it:** It helps distinguish when a saved procedure is sufficient and when something that runs without prompting is necessary. This also raises the question of who monitors the result and what happens if the task runs on incorrect data.

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

## Save for Next Time

Optional product mechanic after producing a usable output. It is not a standalone card, has no separate completion, and does not increase the count of completed methods.

## When It Is Offered
- the user has marked the output as usable,
- during work a corrected instruction, style, decision tree, handoff, or other repeatable element was created,
- the same type of work is likely to recur.

The mechanic does not appear for one-off results without transferable parts or where safe saving is unclear.

## What the User Sees
A short option **Save for Next Time** next to the common check-in. Upon opening, AI will suggest:

- what from the result applies repeatedly,
- what will change each time,
- what the user should verify on next use.

The user only confirms or corrects the suggestion. The mechanic does not create an additional mandatory form.

## What AI Creates
The smallest reusable output that corresponds to the actual work:

- a brief personal preference,
- an instruction or prompt,
- a record in Markdown or a second brain,
- a project or assistant update,
- a basis for a skill,
- a change to an existing workflow.

If a suitable artifact already exists, AI updates its current version instead of creating a new copy.

## Where Content Belongs
| Content Type | Default Location |
|---|---|
| Minor personal preference without process steps | memory or profile, if this feature is available and appropriate |
| Canonical instruction, example, or procedure description | Markdown, document, or personal second brain |
| Context limited to one project | project instructions and files |
| Recurring role with stable context | assistant |
| Stable procedure with rules, examples, and templates | skill |
| Several consecutive steps | workflow; when choosing steps and actions, possibly an agent branch |

Memory is not a canonical repository for versioned procedures. It may hold a preference or a link to the current source.

## When the Target Form Is Unclear
The mechanic creates a brief handoff to the card [Create a Project in Your AI Tool](card:asistent). It does not select a form without the user and does not replace a standalone skill card.

## Security and Sharing
- The mechanic uses known approved storage and company policies.
- Specific case data is separated from the stable part.
- Without authorization, it does not write to shared systems or change access.
- Team sharing begins only after repeated use, owner designation, and verification by another person.

## Record Keeping
Information that a reusable artifact was created or changed can be added to the check-in. This is not a separate card completion.

## First Supported Cards
- `when-chat-is-not-enough`
- `output-beyond-document`
- `asistent`
- `ai-workflow`
- `deep-research`
- `kontrola-vysledku`
- `custom-instructions`
