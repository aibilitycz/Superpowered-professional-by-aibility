# Establish a Weekly Review: Clean Up Your AI Setup

Each week, AI identifies recurring issues in your chats, fixes them, and cleans up what you no longer use.

## Establish a Weekly Review: Clean Up Your AI Setup

**Difficulty: Medium.**\
**Time: approximately 15 minutes** after a week of work in Code mode.
## What It’s For

On Thursday, you corrected prices in an offer for the third time this week because AI wrote them again including VAT. You send them to customers without VAT, you explained this every time, yet the error reappeared in the next chat. Also, AI still follows the spring rule that the offer is valid for 14 days, even though since September it’s 30 days.

The weekly review is a regular cleanup: AI scans your chats from the past week and fixes recurring issues at the source where it reads rules during work.
## What to Prepare

- AI in [Code mode](glossary:workmode) that can access chat history on your computer,
- the folder where you most often work with AI; the report will be saved there,
- chats from the last week conducted in Code mode.
## How to Do It

1. In Code mode, open your folder and insert the prompt; you don’t need to understand folder paths in it. When the app asks for access to chat history and files, allow it.
2. Read the report and for each issue say whether you want the fix. AI will write it where it suggested and restore anything you need from the archive.
3. In a new chat, enter the task where the issue appeared and verify AI performs it correctly. Then insert the instructions from the block “Let the review run every Friday” as a scheduled task.
## AI Exercise

Insert this [prompt](glossary:prompt) into AI in Code mode, opened in your folder:

Perform a weekly review of my AI setup: identify what repeatedly caused issues with you over the past week and propose how to fix it.

Go through my chats with you from the last seven days. Claude Code saves them in ~/.claude/projects, Codex in ~/.codex/sessions. If you don’t have access, tell me immediately and advise what to enable or where to switch. Also review my settings: AI rules, such as the AGENTS.md file, skills, and connected connectors.

Find issues that appeared in at least two different chats: things I repeatedly explain or correct to you, and recurring tool errors. Do not count one-time events, service outages, or errors resolved immediately in the next step. Select up to three and rank them by which cost me the most time. For each, state in which chats and when it appeared, and propose one fix in the correct place:
- if it concerns one task, e.g., offers: the fix belongs in the skill for that task, and if the skill is missing, propose a new one,
- if it concerns all tasks: the fix belongs in AI rules,
- if a tool or connector fails: the fix belongs in its settings.
Write the exact wording you will add or change for each fix.

Then find skills that have never run in the entire history you see, and rules for tasks I no longer do, or conflicting rules. Leave skills for tasks done monthly or quarterly alone. Move up to three such items to the revize-ai/archive folder without deleting anything: move the entire skill, remove the rule from AGENTS.md and append it to revize-ai/archive/rules.md. If you can’t move something, tell me where to disable it.

Write everything into a short report revize-ai/YYYY-MM-DD.md with today’s date: how many chats the review covered, issues with fix proposals, and what is newly archived and from where. Show me the report and ask which fixes I want. Approved fixes you then write where AI really reads them during work, and update the report with what changed.

## In Your Tool

### Microsoft Copilot
Microsoft does not state that Copilot can review your chats from the past week. Therefore, do the review in a tool with Code mode, such as Claude Code or Codex in the ChatGPT app, and request it from your IT administrator. Meanwhile, fixes you already know belong in Custom instructions or Saved memories (Settings and more, Chat settings, Personalization).

### ChatGPT
The review is done by Codex, which saves chats on your computer: in the ChatGPT desktop app, switch to Codex, choose open a folder, and insert the prompt. The review expects chats conducted in Codex. Codex will create the scheduled task when you request it in chat, and you will find it in the sidebar under Scheduled.

### Claude
The review is done by Claude Code in the Claude desktop app, which saves chats on your computer: select your folder and insert the prompt. The review expects chats conducted in Claude Code, not in regular chat or Cowork. Claude will create the scheduled task when you request it, and you will find it in the left panel under Scheduled.

### Gemini
Corporate accounts in Gemini have no memory of past chats, so AI cannot review them weekly. Gemini CLI, which works with files on the computer, will be replaced by Google with Antigravity CLI from June 2026, and the prompt does not account for its chat history. Therefore, do the review in a tool with Code mode, such as Claude Code or Codex in ChatGPT, and request it from your IT administrator.
## What the Weekly Review Is

An issue is a minor problem that makes working with AI take a bit longer each time: something you repeatedly explain to AI or a connector that logs out every week. One issue costs a few minutes, but over a month they add up to hours. The review counts only issues that repeated in at least two chats and writes fixes only after your approval. What it found and changed is recorded in a report so you can see which issues disappeared after a month.

AI writes fixes where they belong:
- an issue in one task, e.g., offers, into the skill for that task,
- an issue in all tasks, e.g., greetings or date format, into AI rules,
- a failing tool into its settings.

AI rules are in the `AGENTS.md` file in your working folder. If your tool reads rules from another file, AI writes the fix there. Rules from regular chat settings are not visible to the review in Code, and fixes in `AGENTS.md` apply only to work in Code mode. The report is a plain text file with `.md` extension and AI shows it directly in chat.

After a few months, you have dozens of skills and rules, many never triggered by AI. AI still follows outdated rules and unused skills make it harder to select the right one. The review moves them to the `revize-ai/archive` folder, where AI does not load them during work, and notes their origin in the report. The review does not move your documents, only rules and skills, and if you have no unused items, it just notes that in the report.

The review also scans your settings: AI rules, [skills](glossary:skill), and connectors. A skill is a stored procedure for one type of task, and a connector links AI with another app, e.g., mail. An error that happened once does not require a new rule because AI reads rules every time and can overlook some in a long list.

Tools in Code mode save chat history on your computer, so AI can review it itself; regular chat cannot do this review. If last week you mostly worked in regular chat or Cowork, [switch to Code](card:when-chat-is-not-enough), work there for a week, and then do the review.
## Let the Review Run Every Friday

The review helps most when repeated. A scheduled task that AI runs every Friday afternoon is enough. You will find the new report in `revize-ai` alongside previous ones and see which issues from last week disappeared.
Insert this instruction into AI in Code mode and ask it to create a scheduled task from it:

```text
Every Friday at 2:00 PM, perform a weekly review of my AI setup. First, check the last report in the revize-ai folder and identify which issues disappeared and which persist. Then go through my chats with you from the last seven days, find issues that appeared in at least two chats, and propose a fix in the correct place for each. Move up to three unused skills or invalid rules to revize-ai/archive and note their origin. Save the report in revize-ai with today’s date and ask me which fixes I want.
```

The task runs on your computer, so it only runs when the computer is on and the app is open. If you are not usually at your computer at 2:00 PM on Friday, write the time you usually are in the instruction. You will find the summary with the question about which fixes you want among scheduled tasks and respond there.
## Example

Pavla handles orders at a small print shop. On Friday, October 16, AI reviews her chats from the week and writes to `revize-ai/2026-10-16.md`:

```text
### Weekly Review October 16, 2026
The review covered 14 chats from October 9 to 16.

### Issues
1. Prices in offers include VAT, although you send them to customers without VAT. You corrected this in three chats (Oct 12, 14, and 15).
   Fix: add the line "List prices without VAT, write VAT separately below the total." to the skill "Customer Offer".
2. Dates in emails are written as 10/14/2026. You rewrote them in two chats (Oct 13 and 15).
   Fix: add the rule "Write dates in Czech format, e.g., 14. 10. 2026." to AGENTS.md.

### Archived
- Skill "Translation to German" from the skills folder: never triggered in history.
- Rule with old email signature in AGENTS.md: conflicts with a newer rule with the company signature.
```

Pavla approves both fixes. On Monday, she enters an offer for an advertising agency in a new chat and AI writes prices without VAT without her reminding it. The next Friday’s report states both issues disappeared.
## If You Get Stuck

- **AI claims it cannot see your past chats:** you probably inserted the prompt into a regular chat, which cannot access chat history on your computer. Insert it into AI in [Code mode](card:when-chat-is-not-enough), opened in your folder.
- **AI found only a few chats or no recurring issues:** you probably worked mostly in regular chat or Cowork last week. Work in Code mode for a week and rerun the review. If you work longer in Code, ask AI to review a longer period, e.g., the last month.
- **The issue reappears in a new chat:** tell AI: "This issue repeats. Find where you really read the rules from and write the fix there."
- **Something from the archive is missing:** tell AI to restore it from the `revize-ai/archive` folder to its original place according to the report.
## What Will Be Ready

In the `revize-ai` folder you have the report from the first review. The fix for the issue that repeated this week is written where AI reads it, and you verified in a new chat that the issue no longer recurs. Unused skills and invalid rules, if any, are in the archive, from where you can restore them anytime. The review is scheduled for every Friday, so the next report will come automatically.
## What Next

If the review proposes a new skill, refine it according to the [skill card](card:create-skill-from-proven-process). To ensure the Friday review runs reliably and reports errors automatically, continue to the [scheduled task](card:recurring-ai-task).
## Prompt

**What it is:** An instruction for a specific interaction with AI.

**What it is not:** It is not the same as long-term context, a stored assistant, or an agent.

**Why the student needs it:** It triggers the exercise and guides its progress; it is not the main learning content.

## Skill

**What it is:** A reusable procedure for a specific type of task. It may include instructions, rules, examples, templates, and other necessary resources. The method of creation and execution varies depending on the tool.

**What it is not:** It is not a general assistant role nor a single successful conversation saved unchanged.

**Why a student needs it:** It helps convert a proven practice into a stable form that can be consistently reused.

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
