# Create a Worklog: Project Journal

AI will maintain your project journal so that a new chat or colleague can pick up where you left off.

## Create a Worklog: Project Journal

**Difficulty: easy.**\
**Time: approximately 15 minutes** with one ongoing project.
## What It’s For

Last week in a meeting, you decided the offer would go without a discount and the deadline would shift to November. Today you open a new chat, AI doesn’t know this, and it writes a discount into the draft email. A colleague who took over the project meanwhile asks if a discount should be given.

A worklog, a project journal, helps: AI writes a short entry after each decision, and a new chat or colleague can read what now applies.
## What to Prepare

- a folder with one ongoing project,
- notes, emails, meeting minutes, or chat from the last work on it,
- AI in [Cowork or Code mode](glossary:workmode) that works with files on your computer.
## How to Do It

1. Open the project folder in Cowork or Code and insert the prompt. AI will write the first entries into `worklog.md` and save the rule to update it after each work session.
2. Read the first entries and correct anything inaccurate.
3. Open a new chat in the same folder and ask about something already decided. AI should answer based on the worklog.

Only include in the entries what a new person needs to avoid repeating work.
## AI Exercise

Insert this [prompt](glossary:prompt) into AI in Cowork or Code mode,
opened in your folder:

Create a worklog for this project: a journal recording what was done, why, and what was decided.

Review the materials in the project folder and the notes I provide, and write the first entries. Each entry should have this form:

### YYYY-MM-DD: short title
- What was done: one to two sentences.
- Why: reason or problem it solves.
- Decision: what now applies. Omit this line if no decision was made.
- Next step: what comes next and who will do it.

Put the newest entry at the top. Write so a colleague who wasn’t involved can understand. Do not rewrite the entire chat or list minor edits. If the date or reason is unclear from the materials, ask me.

Save entries to the file worklog.md in the project folder. If it exists, prepend new entries at the top.

Finally, save the rule “After each completed work session on the project, prepend an entry in the same form to worklog.md.” to the file AGENTS.md in the project folder. Create it if it doesn’t exist. Make sure you read this rule at the start of each work session in this tool; in Cowork, add it to the folder instructions.

## In Your Tool

### Microsoft Copilot
Cowork is next to the Chat toggle; if missing, ask your IT admin. It only sees files on OneDrive and SharePoint, so add to the end of the prompt: “Work in the project folder on OneDrive, keep the worklog as a Word document, and write the rule for me in Customize, Preferences.” In step 3, specify where the project is located in the new task. Scheduled tasks appear on the Automations page.

### ChatGPT
In the ChatGPT desktop app, switch to Codex, choose open a folder, and select the project folder. Codex reads `AGENTS.md` automatically and creates the scheduled task when asked; find it under Scheduled. If you don’t see Codex, your admin likely disabled it—ask them to enable it.

### Claude
In the Claude desktop app, open Cowork and select the project folder, or open it in Claude Code; both require paid plans. Cowork saves the rule in folder instructions, Claude Code reads `AGENTS.md`. AI creates the scheduled task when requested; find it in the left panel under Scheduled.

### Gemini
Gemini does not work with folders on your computer and corporate accounts lack memory, so it won’t update the worklog automatically after work. However, it will write the first entries: attach notes via Add from Drive and save the worklog via Share & export, Export to Docs. Do step 3 in Gem (Gems, New Gem) with the worklog in Knowledge and the instruction “Answer according to the worklog” in Instructions.
## What Is a Worklog

A worklog is a simple text file `worklog.md` in the project folder with the newest entry at the top.
Entries are written and saved by AI, so the journal doesn’t cost you extra time. Lines starting with `###` are headings; this format is called [Markdown](glossary:markdown).

`AGENTS.md` is a file with AI rules in the same folder. Many tools in Code mode read it automatically at the start of each work session, so you don’t have to repeat the worklog rule. Where the tool can’t read it, AI saves the rule in its settings or tells you where to put it.

If you currently use only regular chat, the worklog won’t be saved to the folder; how to [switch to Cowork or Code](card:when-chat-is-not-enough) is shown on a separate card. The entire chat and minor edits don’t belong in the entries.
## Let the Worklog Write Itself

A scheduled task will update the worklog even for work done outside the project folder. The saved rule covers work you do with AI in the project folder. Some work happens elsewhere: emails, meetings, or other chats. The task runs every workday evening and updates worklogs based on that day’s activity. Insert this instruction into AI in Cowork or Code mode and ask it to create the scheduled task:

```text
Every workday at 6:00 PM, review what happened today in my chats, edited files, emails, and calendar meetings. For each project with activity or decisions today, prepend one entry in the same form as previous entries to its worklog. If nothing happened on a project, write nothing.
```

The task will run only if your computer is on and the app is open.
## Example

Project: new customer newsletter. From notes of the first meeting, AI writes:

```text
### 2026-10-08: Newsletter Tool and Frequency
- What was done: compared three mailing tools and chose the one already used by sales.
- Why: sales has contacts there, so no transfer needed.
- Decision: newsletter will be sent monthly, first issue in November.
- Next step: Petra will prepare the template by October 15.
```

A week later, in a new chat you ask how often the newsletter should be sent. A good answer is: monthly, per the October 8 entry. If AI answers differently, it’s likely working outside the project folder.
## If You Get Stuck

- **AI claims it saved the entry but it’s not in the file:** you’re probably working in a regular chat that can’t modify files. Switch to [Cowork or Code](card:when-chat-is-not-enough) and open the project folder there.
- **New chat doesn’t see the worklog:** open the chat in the same project folder, not a regular chat window.
- **AI doesn’t update the worklog after work:** ask AI where the worklog rule is saved. It should be in `AGENTS.md` in the project folder, and if your tool doesn’t read it automatically, also linked in the tool’s settings.
- **Entries are too long:** ask AI to shorten each to four lines.
## What Will Be Ready

You have a project worklog with initial entries and a saved rule that lets AI update it after each work session. In a new chat, you verified AI knows your decisions from the worklog and doesn’t suggest what you already rejected.
## What’s Next

Summarize the current project status on a single [project overview page](card:project-start-here). Write other rules guiding AI’s work in the project into the [AI rules file](card:agents-md).
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
