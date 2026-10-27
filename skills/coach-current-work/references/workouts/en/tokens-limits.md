# Save Tokens: Make Your AI Limit Last the Whole Week

Move work from a long chat to a new one, so AI stops forgetting and your limit lasts longer.

## Save Tokens: Make Your AI Limit Last the Whole Week

**Difficulty: easy.**\
**Time: about 15 minutes** with one long chat.
## What It’s Good For

You’ve been preparing a trade fair with AI in one chat for three weeks. In the last few days, AI responds more slowly, confuses old price list versions with new ones, and on Wednesday afternoon tells you that you have exhausted your weekly limit. So you finish the offer due on Friday without AI.

AI rereads the entire chat with every new message, so you save the most by replacing a long chat with a new one that continues based on a short summary.
## What to Prepare

- The chat where you have been working longest on one project,
- The AI you use in that chat.
## How to Do It

1. Insert the prompt into the chat where you have worked longest. In Cowork or Code AI, it saves the summary to `handoff.md` and the rules to `AGENTS.md`; in a regular chat, it includes them in the reply and memory.
2. Read the summary, correct anything that’s wrong, and open a new chat: in Cowork or Code, write “Continue according to `handoff.md`,” in a regular chat, paste the summary and files from it.
3. If your tool shows the limit, check how much remains and when it resets. Where to find this is shown in the “In your tool” section.

Only what the new chat needs for further work belongs in the summary.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

This chat is long, and with every new message you reread the entire chat, which reduces my limit and makes your responses worse. Prepare to move the work to a new chat and set rules so this doesn’t happen again.

First, write a summary that the new chat can continue from without reading this chat. Divide it under these headings and write them with hashes ###:
- Goal,
- Done,
- Valid: decisions and rules we agreed on,
- Remaining: next steps in order,
- Files for further work: only those truly needed for the next steps.
Keep it to one page. Do not rewrite the chat history and omit dead ends. If you’re unsure whether something still applies, ask me.

Then write these rules for further work:
- When the chat grows long or we finish a task and start another, write a new summary in the same format and suggest continuing in a new chat.
- At the start of work, base yourself on the summary and work only with files the task requires. Do not scan the entire folder or ask me for attachments the task doesn’t need.
- For bulk work where the same decision repeats over dozens or hundreds of items, use a cheaper model: if you can, run subagents with a smaller model on it; otherwise, tell me which model to switch to. Return only the result to the main chat.

Where to save what:
- If you work in a project folder, save the summary to the file handoff.md, overwrite it if it exists, and keep its format. Add the rules to AGENTS.md, create it if it doesn’t exist. Make sure you read AGENTS.md at the start of every work session in this tool; in Cowork, record this in the folder instructions.
- If you don’t have access to the project folder, do not create downloadable files. Write the summary in the reply and save the rules in memory; if memory is off, write the rules below the summary so I can paste them into the new chat.

Finally, write one sentence telling me what took up the most space in this chat so I can avoid it next time.

## In Your Tool

### Microsoft Copilot
Microsoft does not publish limits for Copilot with a license, and you won’t find usage overview there; the license grants priority access. Moving to a new chat helps here too because AI then reads only the summary and stops confusing old versions with new ones. Copilot saves the rules in memory (Saved memories in Settings and more, Chat settings, Personalization).

### ChatGPT
In corporate plans, the standard model has almost no limit, but models that think longer and Codex do have limits. When you exhaust it, ChatGPT continues with another model and shows when the limit resets. Codex usage is shown in Settings, Usage and in Codex by the `/status` command (also free space in chat); regular chat has no overview there.
Rules are saved by AI in regular chat memory (Settings, Personalization, Memory).

### Claude
Claude has a limit every five hours plus a weekly limit; both count regular chat, Cowork, and Claude Code. Remaining quota is visible in Settings, Usage and in Claude Code by `/usage`; `/context` shows what takes space in chat. For bulk work, smaller models Haiku or Sonnet suffice instead of the strongest Opus model.

### Gemini
You find your remaining limit in Gemini under Settings (bottom left), Usage Limits. Stronger models have message limits per several hours or per day, and when exhausted, you can continue in the same chat with the fast model Fast. Corporate accounts have no memory, so save rules in Gem (Gems, New Gem, Instructions) and open the new chat from step 2 there.
## What Tokens and Limits Are

AI reads and writes text in pieces called tokens; a token is roughly part of a word. Limits are counted from tokens you have in your subscription or set by your company. How your tool counts it is shown in the “In your tool” section.

A long chat is costly because AI rereads the entire chat from the start with every new message, including all attachments. So even a short question in a chat running since morning consumes the limit for the whole chat. Each chat also has a context window—how much text AI can keep at once. When full, AI keeps only a shortened summary of the older part, which is why it forgets what you agreed on.

`handoff.md` is a plain text file in the project folder that always contains only the current work status. The same file is also used for [handing over work](card:handoff) to a colleague. Hashes `###` mark headings; this format is called [Markdown](glossary:markdown). `AGENTS.md` is a file with rules for AI in the same folder. Many tools in Code mode read it automatically at the start of each work session; where the tool can’t, AI saves the rule in its settings or tells you where to insert it.
A [subagent](glossary:subagent) is an auxiliary AI that the main AI runs on a subtask. It works in its own chat and returns only the result, keeping the main chat short.

If you don’t have memory enabled, AI writes the rules below the summary and you paste them into the new chat. To have AI save summaries to the project automatically, you need AI in [Cowork or Code mode](glossary:workmode); how to switch is shown on the [Chat, Cowork or Code card](card:when-chat-is-not-enough).
## Let AI Save Tokens Automatically

Rules in `AGENTS.md` apply in every new chat in the project folder. AI will suggest a new chat when the current one grows long, read only files the task needs, and send bulk work to a cheaper model. For sorting or rewriting hundreds of items, a smaller model suffices and consumes much less limit.

If you work on multiple projects, apply the rules everywhere. Tools in Code mode have project-specific rules plus rules that apply to all your projects. Just enter in any project:

```text
Add the token-saving rules from AGENTS.md in this folder to your rules that apply to all my projects.
```

How to save also on command outputs and response length is shown in the “How to save in Code mode” section.
## How to Save in Code Mode

In [Code mode](glossary:workmode), AI saves the most by running large searches outside the main chat and shortening texts it reads and writes during work.

For large searches, like contract penalties in 300 contracts, AI sends them to a [subagent](glossary:subagent) that returns only the result to the main chat. The subagent also consumes limit, so AI uses it only for searches whose results would otherwise fill the main chat.

If the chat still fills up, AI replaces its older part with a short summary and continues. This also saves limit because AI reads the entire chat, and only main points remain from earlier messages. After finishing a task, it’s cheaper to start a new chat based on `handoff.md`. What takes space in chat is shown by a command you enter in the message field; which command it is is found in the “In your tool” section.

Two more savings require installation. AI in Code mode runs commands during work, for example converting tables or scanning file changes, and reads all their outputs. The free RTK tool shortens common command outputs by 60 to 90% before AI reads them. The Caveman plugin, an AI add-on, shortens AI’s chat replies to a few words, as if a caveman spoke. If you don’t like short replies, write “stop caveman” and AI will respond as before until the chat ends; it disables it permanently if you ask.

According to the prompt, AI first writes the rules and installs tools after you confirm. If you can’t or don’t know whether you may install on a company computer, AI prepares a message for your IT administrator.

Insert this prompt into AI in Code mode opened in your folder:

```text
Set up token saving for work in Code mode.

1. Add these rules to AGENTS.md (create it if it doesn’t exist) and make sure you read it at the start of every work session in this tool:
- When a task requires searching the entire folder or reading long outputs, run a subagent with a smaller model if you can, and return only the result to the main chat.
- When using RTK, compare files with a command RTK doesn’t shorten (on Mac and Linux /usr/bin/diff, on Windows fc.exe) because shortened comparison may miss differences.
- Write texts you create for me in files fully, even if you reply briefly in chat.

2. Then tell me in two sentences what you will install, from where, and what will change in all my projects, and wait for my confirmation that I’m allowed and want to install it at work:
- RTK according to README at github.com/rtk-ai/rtk, not via cargo install rtk. In Claude Code enable it with rtk init -g --auto-patch, in Codex with rtk init -g --codex. Verify that rtk gain shows savings overview; if the command is unknown, you have a different package named rtk, so uninstall it and reinstall RTK.
- Caveman according to the instructions for this tool at github.com/JuliusBrussee/caveman, so you reply briefly in chat and it activates automatically at the start of each work session.

If installation is blocked, e.g., missing permissions, needing admin password, or you’re unsure if you may install, leave it and write me a short message for IT. If I must complete it, write exactly what to do. Finally, tell me what you set up, whether I should open a new chat or restart the tool, and how to revert everything if something stops working.
```
## Example

Lucie coordinates her company’s participation in an October trade fair. Since September 21, she has been preparing it with AI in Code mode in one chat in the project folder. On Wednesday, October 7, she sees she has used 85% of the weekly limit, and AI writes prices in crowns in the invitation, although two weeks ago it was decided they would be in euros. Lucie inserts the prompt and AI writes to `handoff.md`:

```text
### Goal
Prepare the booth for the trade fair from October 20 to 23 and invite customers.

### Done
- Booth ordered, graphics approved on October 2.
- Invitation text ready, prices need to be converted to euros.

### Valid
- Prices are shown only in euros.
- Invitations go only to customers who purchased in the last two years.

### Remaining
1. Sort 1,400 contacts from last year’s trade fair.
2. Correct prices in the invitation and send it by October 14.

### Files for further work
- contacts-tradefair-2025.xlsx
- pricelist-2026.pdf
```

AI adds that the chat was mostly taken up by three full versions of the price list Lucie uploaded gradually. Lucie opens a new chat, writes “Continue according to `handoff.md`,” and AI immediately converts prices in the invitation to euros. For sorting contacts, AI runs subagents with smaller models per the rule and returns only the result: invite 230 customers personally, send invitations by email to 760, and exclude 410 because they didn’t purchase in the last two years or appear twice in the list.
## If You Get Stuck

- **Your limit is exhausted:** wait until it resets; the exact time is shown in the limit message. Do the workout first before continuing in the old chat.
- **AI claims it saved the summary but `handoff.md` is not in the folder:** you are probably working in a regular chat that can’t save files. You have the summary in the reply; if you want it in the project folder, switch to [Cowork or Code](card:when-chat-is-not-enough).
- **The new chat doesn’t know something you agreed on:** tell it and ask to add it to the summary under Valid.
- **The cheaper model makes mistakes in bulk work:** randomly check ten items. Clarify the rule AI uses to sort, and if that doesn’t help, run the stronger model only on disputed items.
## What Will Be Ready

Your work in progress is in a new, short chat that continued from the summary, and you no longer need the old long chat. In Cowork or Code, the summary is in `handoff.md` and the rules by which AI saves tokens automatically are in `AGENTS.md`; in a regular chat, AI has the rules in memory or received them in the new chat along with the summary.
## What’s Next

When a stronger model is worthwhile, you’ll find out in [choosing a model for your task](card:modely). When you or a colleague return to a project after a long time, give them a permanent [project home page](card:project-start-here); then only the unfinished task remains in `handoff.md`.
## Markdown

**What it is:** A simple plain text format where headings, lists, links, and other structure are written using a few common characters. Files typically use the `.md` extension.

**What it is not:** It is not a programming language nor a format intended solely for developers.

**Why a student needs it:** It remains easily readable and editable by both humans and AI, and can be transferred between different tools.

## Prompt

**What it is:** An instruction for a specific interaction with AI.

**What it is not:** It is not the same as long-term context, a stored assistant, or an agent.

**Why the student needs it:** It triggers the exercise and guides its progress; it is not the main learning content.

## Subagent

**What it is:** An independent agent created by a coordinating agent for a specific subtask. It receives its own assignment and context, works separately, and returns the result to the coordinator.

**What it is not:** It is not just a branch of a single conversation. A fork creates a new thread for a human; a subagent can be launched, managed, and included in the overall result by the coordinator.

**Why a student needs it:** It helps distinguish manual parallel work across multiple chats from an agent setup where delegation and tracking of subtasks are handled by the coordinator.

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
