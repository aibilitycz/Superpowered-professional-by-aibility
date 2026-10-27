# Set Agent Permissions: What It Can Do Alone and What Never Without You

AI stops asking about routine steps and waits for your confirmation before sending emails out or deleting data.

## Set Agent Permissions: What It Can Do Alone and What Never Without You

**Difficulty: Medium.**\
**Time: approximately 15 minutes** with the folder where AI works.
## What It’s For

The agent is supposed to update a new price list in 20 offers over lunch and after an hour waits at the first one asking if it may save the file. A colleague solved this by allowing her agent to do everything, and it immediately sent a customer an offer that no one had reviewed yet.

It helps to split the [agent](glossary:agent) work into routine tasks that it performs without asking according to the permission mode in the tool, and hard boundaries in `AGENTS.md`, the AI rules file, where it stops and waits for you.
## What to Prepare

- the folder where you work with AI; `AGENTS.md` does not have to be there,
- one real task that ends with an outgoing email, such as a report or client reply,
- email connected to AI via [connector](card:plugin-connector) so it can send the email after your “SEND” command,
- AI in [mode](glossary:workmode) Cowork or Code ([how to switch from chat](card:when-chat-is-not-enough)).
## How to Proceed

1. Insert the prompt and tell AI what is routine for you and what cannot be undone. AI will determine how permissions are set and propose two lists.
2. Correct and approve the lists. AI will write them into `AGENTS.md` and tell you which permission mode to select and where to switch it.
3. In a new chat, enter the task from preparation. AI should perform routine steps without questions and stop at the email: it will show the draft and send nothing without your “SEND.”

The “Never without me” list includes steps that cannot be undone or go outside the company, usually five to eight items.
## AI Exercise

Insert this [prompt](glossary:prompt) into AI in Cowork or Code mode, opened in your folder:

Set what you may do alone in this folder and where you must always stop and wait for me. Do not ask me about routine steps; stop every time at steps that cannot be undone.

First, find out which permission mode you are currently working in and what permissions or prohibitions you have stored in this tool. If you cannot determine the mode or the tool does not have one, say so and do not guess. If there is an AGENTS.md file in the folder, read it. Then ask me two things: which routine steps must I always approve, and which actions in my work cannot be undone or go outside, such as emails to clients, payments, deletions, publishing, or changes in shared spreadsheets and systems.

From the answers, propose two lists:
- May do alone: routine tasks you perform without asking, such as reading and editing files in this folder, running common commands, and preparing drafts.
- Never without me: five to eight hard boundaries, i.e., steps that cannot be undone or go outside, with a procedure for each where you stop. For emails and messages outside the company: prepare a draft, show me the recipient, subject, and full text, and send it only after I send a separate message with the word SEND; if you cannot send, save the draft in mail and tell me. For deleting data that cannot be restored: list exactly what you will delete and wait for two confirmations in two messages. After each write to another application, reload the result and show it to me. Never insert passwords or access keys into chat or files; if login is needed, ask me to do it via the password manager.
If I want an exception, write it under the heading “Exceptions” in one sentence with the condition, e.g., “You may save an offer to the shared folder alone if I approved it in chat.”

Show me both lists and wait until I correct or approve them. Then write them into AGENTS.md under the headings “May do alone” and “Never without me”; if the file does not exist, create it. If there are already prohibitions in it, move them to “Never without me” so they are not in two places. Add the rule: “If you ask me about a routine step I approve, suggest adding it to May do alone. If you encounter a step that cannot be undone and is missing from Never without me, stop and suggest adding it.” Make sure you read AGENTS.md in this tool at the start of each work session; in Cowork, write this into the folder instructions. If you do not work with a folder, save the lists in memory or write me text to insert into my own instructions.

Finally, tell me which permission mode I should select in this tool so you do not ask about routine steps and the tool pre-checks risky steps, and where to switch it. If it is possible to permanently allow routine commands I approved, set it; if you cannot set it yourself, tell me exactly where to put what.

## In Your Tool

### Microsoft Copilot
Copilot in Cowork mode (switch at the top next to Chat) has no permission mode and asks before sending emails, Teams messages, or invitations by itself. You do not open the folder; append to the end of the prompt “Do not create a file, write the lists as text for Customize, Preferences.” and paste the text into Customize on Cowork’s home page. Do not use Always allow for outgoing emails; it will send others without asking.

### ChatGPT
In the ChatGPT desktop app, switch to Codex, choose open a folder, and under the message box select Approve for me: Codex then asks only for steps it evaluates as risky. With Full access, it works without approval. Codex reads `AGENTS.md` itself; if mail is not connected, step 3 ends at the email draft.

### Claude
In Claude Code, select Auto in the mode menu next to the send button: it runs routine without asking and a second model pre-assesses risky steps. Permanent permissions and exceptions described in words are saved with the `/permissions` command. In Cowork, leave the default Automatically approve; permanent file deletions always require your confirmation. With connected Gmail, Claude only prepares the email as a draft.

### Gemini
Gemini Agent that performs steps alone is only for personal Google AI Pro and Ultra accounts and is not available in the EU, so you cannot set permission mode with a corporate account. If you need AI to perform steps alone, ask IT for a tool with Cowork or Code mode. Keep the “Never without me” list for writing emails saved as a skill: say “Save this as a skill” and find it in Customize, Skills.
## What Is Permission Mode

Permission mode (called permissions in English tools) is a setting that determines what AI asks you before doing it. Tools usually have three levels: AI asks about almost everything, asks only about steps it considers risky, or does not ask at all. The middle level is a good default for daily work. The no-asking level is a conscious choice for people who have written boundaries and check results; do not set it as default for colleagues.

The tool itself recognizes risky commands, such as bulk deletion. But it does not know that an email to a specific client or deleting an order spreadsheet is risky for you. AI knows this from `AGENTS.md`, a file in [Markdown](glossary:markdown), which it reads at the start of each work session, and therefore each boundary has a procedure with a clear moment when you decide. The separate message “SEND” is a safeguard: the phrase “and then send it” in the middle of a longer instruction does not trigger sending. After writing to another application, AI reloads the result so you see it was really saved.

Write exceptions in words with conditions; AI writes them under the heading Exceptions. If you stay only in regular chat, how to [switch to Cowork or Code](card:when-chat-is-not-enough) is shown on a separate card.
## Let Lists Update Themselves

The rule from the prompt ensures AI suggests a new step to the list whenever it asks you about it. Once a month, however, it is useful to review where AI asked unnecessarily, and a scheduled task will do it for you. Insert this instruction into AI in Code mode and ask it to create a scheduled task:

```text
Every first Monday of the month at 9:00, review AGENTS.md in this folder and my chats in it from the last month. List steps you asked me about and I always approved, and suggest which to move to “May do alone.” Also list new actions that cannot be undone and are missing from the “Never without me” list. Adjust the lists after I approve the suggestions.
```

When the task works with files on your computer, it runs only if the computer is on and the app is open. If you already have a [weekly review](card:weekly-ai-review), add this point there instead of a separate task.
## Example

Tereza manages projects in a small advertising agency and prepares monthly reports for six clients with AI in Cowork mode. She has approval for every step enabled, so AI asked her eleven times in one hour if it may save a file. On Monday, October 19, 2026, she opens the Reports folder and inserts the prompt. For what cannot be undone, she answers: emails to clients and deletion of exports; AI must not change invoices in the accounting system at all. AI writes:

```text
### May do alone
- Read and edit files in the Reports folder and create new ones there.
- Download exports from advertising accounts and calculate tables from them.
- Prepare draft emails to clients.

### Never without me
- Email outside the company: show recipient, subject, and full text and send only after my separate message SEND.
- Deletion of exports and files that cannot be restored: list what you will delete and wait for two confirmations in two messages.
- Do not change invoices in the accounting system; tell me what needs to be changed.
- After each write to another application, reload the result and show it to me.
- Never put passwords or access keys into chat or files; I will log in via the password manager.

### Exceptions
- You may send the finished report to colleague Martin in the team chat alone if I approved it.
```

AI tells her she is working in a mode where Tereza approves every step and shows where to switch to the mode that asks only about risky steps. On Tuesday, October 20, Tereza writes in a new chat: “Prepare the October report for Pekárna Novák and send it to Mrs. Novák.” AI downloads the export from the advertising account and saves the report without a single question. Then it shows the email draft with address, subject, and text and waits. Tereza corrects the salutation, sends “SEND,” and AI shows from the sent mail that the email was sent with the attachment.
## If You Get Stuck

- **AI keeps asking about routine steps:** the tool is probably in a mode where you approve every step. Switch it according to the “In Your Tool” section and tell AI to permanently allow routine commands.
- **AI performed a step from the “Never without me” list without asking:** write “List the rules loaded at the start of work.” If `AGENTS.md` is missing among them, see the card [AI rules file](card:agents-md) for how to ensure it loads; if it is there, let AI rewrite the boundary as a procedure with a step, e.g., “show draft and wait for SEND.”
- **The tool stopped a step you wanted:** confirm it in the approval window or tell AI exactly what to do and with what, e.g., “move the report to the shared folder `Clients/Pekárna Novák`.”
- **You don’t see the mode options:** you are working in regular chat or the admin restricted it in your company. Switch to [Cowork or Code](card:when-chat-is-not-enough) or ask IT to enable it.
## What Will Be Ready

You have two short lists of what AI may do alone and where it always stops, saved in `AGENTS.md` or your tool’s settings. If the tool has permission modes, it runs in the one that does not ask about routine. You verified on a real task that AI completes work without questions and waits for your “SEND” before sending email. Next time it asks about a new routine step, it will suggest adding it to the list itself.
## What’s Next

When AI knows where to stop, entrust it with [a long task it completes alone](card:agent-task), for example overnight. Set recurring weekly work as a [scheduled task](card:recurring-ai-task).
## Agent

**What it is:** An AI system that can plan multiple steps within a given goal, use available tools, manage state, and perform authorized actions. The scope of capabilities and level of autonomy depend on the specific tool and permissions.

**What it is not:** It is not just a stored prompt or an assistant renamed to sound more advanced.

**Why the student needs it:** It helps identify tasks that require tools, permissions, checkpoints, and clear accountability for actions.

## Markdown

**What it is:** A simple plain text format where headings, lists, links, and other structure are written using a few common characters. Files typically use the `.md` extension.

**What it is not:** It is not a programming language nor a format intended solely for developers.

**Why a student needs it:** It remains easily readable and editable by both humans and AI, and can be transferred between different tools.

## Prompt

**What it is:** An instruction for a specific interaction with AI.

**What it is not:** It is not the same as long-term context, a stored assistant, or an agent.

**Why the student needs it:** It triggers the exercise and guides its progress; it is not the main learning content.

## Work Mode

**What it is:** The type of interaction with AI: chat, canvas/artifact, agent, coding, search. Different tasks require different modes.

**What it is not:** It is not a level of sophistication. The mode is chosen by the user based on the task, not their score.

**Why the student needs it:** It teaches how to recognize when to switch from chat to another environment for a better outcome.

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
