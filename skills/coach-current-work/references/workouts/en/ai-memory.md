# Clean Up Your AI Memory: What It Remembers About You Between Chats

AI reviews what it remembers about you, corrects outdated info, and deletes errors, so a new chat starts from your current situation.

## Clean Up Your AI Memory: What It Remembers About You Between Chats

**Difficulty: easy.**\
**Time: about 15 minutes** with AI you’ve used for a few weeks.
## What It’s For

A new e-shop project ended in September, but AI still references it in
email suggestions and counts its deadlines. Also, it puts everything into a table,
even though the table was only for one report.

AI stores in its [memory](glossary:memory) what it learns about you and doesn’t recognize what’s finished.
If you occasionally ask it to show what it knows, it can fix it in minutes.
## What to Prepare

- AI you’ve been using at work for a few weeks,
- memory settings in your tool; where it is is shown by the block “In your tool.”
## How to Do It

1. Insert the prompt into a new chat and review what AI knows about you. For
each record, it will suggest whether to keep, correct, or delete it.
2. Tell AI which suggestions apply, for example, “yes, except item 3,” and it will
make the changes in memory. Also review the list in settings yourself, as AI may not list everything.
3. In a new chat, ask about something you corrected. If AI answers with outdated info,
tell it what applies or delete the record in settings.

For uncertain records, ask if it will still apply in a month.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

Walk through with me what you remember about me and clean it up.

List everything you have stored in memory or know from previous chats about me. Divide it into four groups: who I am and what I do, how I want responses and to work with me, what I’m working on, where to find things (documents, tools, people). Write each item as one short sentence and note whether it’s stored in memory or known from a previous chat.

For each item, suggest whether to keep it, correct it (write the new version immediately), or delete it. Suggest deleting anything outdated, misunderstood, or relevant only to one task. Merge items that say the same thing into one. If you’re unsure whether something still applies, ask me.

When I tell you what applies, make the changes directly in memory. List anything you can’t change along with where to find it in settings. For items from previous chats that no longer apply, store what is current in memory and, if you know which chat they came from, tell me.

Finally, save this rule in memory, and if you already have a similar one, replace it: “When I correct you and the correction should apply next time, save it as one sentence: what applies, why, and when to use it. If you have an older record about it in memory, overwrite it so there aren’t two versions.” Then show me how memory looks now.

## In Your Tool

### Microsoft Copilot
In Copilot Chat at `copilot.cloud.microsoft`, open Settings and more at the top right,
Chat settings, Customization, and under the tile Saved memories choose Manage saved memories.
Delete individual memories with the trash icon, or all with Remove all memories.
If you tell Copilot in chat to forget something, it deletes it itself.

### ChatGPT
In Settings, Personalization, Memory (same place in Czech version) there is either a
Memory summary where you can correct a line or select Don't mention this again,
or a list of Saved memories with deletion options. Codex has its own memory,
which you delete there by choosing Delete Codex memories; add to the prompt in Codex:
“Do not modify memory, write what should always apply into `AGENTS.md`.”

### Claude
In Settings, Memory is divided into topics: open a topic,
edit it with the edit icon or delete it with Delete. In enterprise plans it’s enabled
by the organization owner and you enable it yourself. Claude Code has memory for
each project separately in files listing `MEMORY.md`, so run the prompt in each project;
open the folder with the `/memory` command.

### Gemini
Gemini with a work account has no memory, so it doesn’t save anything from chats.
What should always apply is in the instructions of the Gem robot (Gems).
Insert the prompt into chat along with the instructions for the Gem you use most often:
AI will review them like memory and save the corrected version back into the Gem.
## What AI Memory Is

AI memory, in settings Memory or Paměť, is where AI stores what it learns about you from chats:
who you are, how you want answers, and what you’re working on. Some tools also read your previous chats,
so memory may include things relevant only to one task.

AI uses memory as a hint and chooses from it itself. What must apply in every chat,
put into [Custom Instructions](card:custom-instructions), i.e., permanent instructions in settings that you write.

Tools working with a folder on your computer often keep memory in plain text files.
AI edits them directly and you can open and read them.
## Let Memory Maintain Itself

The rule at the end of the prompt ensures AI saves each new correction as one sentence with a reason
and overwrites older versions, preventing duplicates in memory.

When AI works in [Code mode](glossary:workmode) with a folder on your computer and keeps memory in files,
cleanup can run monthly automatically. Give it this task and ask it to schedule it:

```text
Every first Monday of the month at 9:00, review your memory. Merge records that say the same thing into one.
Delete records that contradict newer ones or relate to finished matters.
If unsure, leave the record and ask me.
If the tool maintains memory itself and its files should not be edited manually, do nothing and just tell me what is wrong.
Finally, give me a summary: what was merged, deleted, and what you ask about.
```

The task runs only if the computer is on and the app is open.
If you already have a [weekly review](card:weekly-ai-review), you can add memory cleanup to it instead of a separate task.
In a regular chat, just insert the AI exercise prompt again every few months.
## Example

Klára Novotná coordinates projects at a company making office furniture.
They launched a new e-shop in September and since October Klára has been preparing a booth for the spring fair.
On Tuesday, November 3, 2026, she inserts the prompt and AI outputs, among other things:

```text
### How I Want Responses
- Wants short answers, max five points. Stored in memory, merged from two records. Suggestion: keep.
- Wants results always in a table. Stored in memory. Suggestion: delete, the table was only for the August report.

### What I’m Working On
- Managing the launch of the new e-shop with deadline September 30. Stored in memory. Suggestion: correct to “The e-shop has been running since September, now preparing the booth for the fair.”
- Handling a chair delivery complaint. From a previous chat “Chair complaint.” Suggestion: save that the complaint is closed.

### Where to Find Things
- Project deadlines are in the table “E-shop schedule.” Stored in memory. Suggestion: correct to the table “Fair 2027.”
```

Klára replies “yes, except the table: I want deadline overviews still in a table.” AI adjusts the table record, corrects two others, and saves that the complaint is closed.
In a new chat, Klára writes “prepare an email to the booth supplier about what we need from them by the end of November” and gets a short email without mention of the e-shop.
## If You Get Stuck

- **AI says it remembers nothing or outputs two generic sentences:** your memory is probably off or nearly empty and there’s nothing to clean. Turn it on in settings, and if that’s not possible in a company account, save permanent instructions in [Custom Instructions](card:custom-instructions).
- **AI says it deleted a record but it’s still in settings:** delete it directly in the memory list. In ChatGPT, deleting a chat does not remove the saved memory record.
- **New chat still uses old info:** AI likely takes it from a previous chat, not memory. Tell AI what applies now so it saves it; in ChatGPT, choose Don't mention this again for the old info in the memory summary. If it keeps returning, delete the chat it takes it from.
- **AI lists only a few items but more exist in settings:** ask it to review each group separately. Correct or delete what it still doesn’t list directly in settings.
## What Will Be Done

Only what currently applies remains in your AI’s memory, and you verified in a new chat that AI uses the corrected version.
AI has saved the rule on how to record future corrections to avoid duplicates.
## What’s Next

Write the rules AI should follow for the entire project into the [AI rules file](card:agents-md).
When you want to regularly clean the entire AI setup, not just memory, proceed to the [weekly review](card:weekly-ai-review).
## AI Memory

**What it is:** A place where AI stores what it learns about a person from chats: corrections, preferences, names, and ongoing work. In new chats, the AI itself selects what is relevant from this memory. Where to find the memory and who can enable it varies by tool.

**What it is not:** It is not permanent instructions written by the user (Custom Instructions), nor chat history. What must apply in every chat belongs in the instructions, because AI uses only what it considers important from memory.

**Why a student needs it:** It helps decide what to remember, what to record in instructions, and when to clear memory so the AI does not work with outdated information.

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
