# Assign a Task to the Agent: AI Will Complete It Independently

AI completes a long multi-step task on its own, possibly overnight, and you take it over based on evidence.

## Assign a Task to the Agent: AI Will Complete It Independently

**Difficulty: easy.**\
**Time: approximately 15 minutes** with a folder of materials for one task.
## What It’s Good For

By Friday, the CFO needs a report on which of the sixty supplier contracts will automatically renew in January. For each, they also want the deadline by which it can be terminated. Opening each contract, finding the clause on duration and termination, and recording the data into a table is two afternoons of careful work.

[Agent](glossary:agent) is AI that will do such a task on its own, possibly overnight, and continue until it meets the conditions you clarify with it at the start, for example, “each of the 60 contracts has its own row in the table.”
## What to Prepare

- one multi-step task you don’t want to sit through, such as contract review or research,
- materials for it in one folder,
- AI in Cowork or Code mode; where to find it is shown in the “In your tool” block.
## How to Do It

1. Open AI in Cowork or Code mode in the folder with materials, insert the prompt, and after the line “Task:” write what the agent should do. AI will propose completion conditions; correct them and write “Yes, work.”
2. When AI asks for permission to edit files, allow it for the entire task so it won’t stop overnight. The agent then works independently and writes a handover report at the end.
3. In the handover report, you’ll find where the result is. For each condition, open the evidence and compare one or two items with the source; if something doesn’t match, return it to the agent along with the condition.
## AI Exercise

Insert this [prompt](glossary:prompt) into AI in Cowork or Code mode, opened in your folder, and after the last line write your task:

Do a multi-step task for me and work on it independently until it’s finished. The task is on the last line.

First, review the materials in the folder or attachments and propose three to five completion conditions by which I can recognize it’s done. Each condition must be verifiable at a glance: a count, file, record, or number I can compare with the source. Show them to me and wait until I confirm or correct them.

Once I confirm the conditions, add a rule to the AGENTS.md file in the folder: “For every longer task, first propose three to five verifiable completion conditions and let me confirm them. Work until all are met, and at the end attach evidence for each.” If AGENTS.md doesn’t exist, create it. If this tool doesn’t read it automatically, set it to read at the start of each work session; in Cowork, write this into the folder instructions. If you don’t have folder access, save the rule in memory; if you can’t, tell me exactly where to put it.

Then work independently. After each major step, check the conditions and continue until all are met. Decide minor details yourself. If you encounter a decision that is mine, choose the more cautious option, mark it, and continue; write the question in the handover report. Stop only if you cannot proceed without my answer. If a condition cannot be met, write why and what you propose.

When finished, write me a handover report. For each condition, state whether it is met and provide evidence I can verify: file path or link, number and page it comes from, changed record, or screenshot. Below the conditions, write what you decided yourself, what you ask me, and what you are unsure about.

Task:

## In Your Tool

### Microsoft Copilot
Turn on Copilot Cowork at `copilot.cloud.microsoft` using the toggle at the top next to Chat. Attach the folder with materials using the + button from OneDrive or SharePoint, or drag files from your computer into it. It works in the cloud, so you can close your laptop; finished files appear in the right panel and the rule is saved as a skill.
Copilot does not have the `/goal` command; confirm conditions by saying “Yes, work.”

### ChatGPT
The easiest is Work mode: enable it with the toggle at the top on the web or in the ChatGPT desktop app, upload materials, and the task started on the web continues running even if you close your laptop. You find the result in the handover message in chat. If materials are in a folder on your computer, use Codex in the ChatGPT desktop app, where you confirm conditions with the `/goal` command.

### Claude
In the Claude desktop app, open Cowork or Claude Code with the folder of materials. The task runs as long as the computer is on and the app is open. In Claude Code, confirm conditions with the `/goal` command and the app will notify you when the task finishes.

### Gemini
Gemini Agent, which completes long tasks independently, is only for personal Google AI Pro or Ultra accounts and is not available in the EU. With a corporate account, enter the task in parts in the Gemini app: attach up to 10 files via Add from Drive and insert the prompt, add more files in batches of ten and let the table fill in. Save the finished table with Export to Sheets and save the rule as a skill by writing “Save this as a skill.”
## What Is an Agent

An agent is AI that performs steps for you independently: it opens files and applications, chooses the next step based on results, and continues until the goal is reached. In Cowork or Code mode, AI works like this whenever you assign it a task.

Completion conditions are the goal the agent works toward: it continues until all are met, and you accept the result based on them at the end. For each condition, it shows you evidence, so acceptance takes just a few minutes. For large tasks, there may be up to twenty conditions; for the first task, three to five suffice. A good condition is verifiable at a glance: a count, file, record, or number you compare with the source. Words like “clear” or “quality” cannot be fulfilled or evidenced by the agent, so rewrite them into something countable or openable.

`AGENTS.md` is a plain text file with AI rules in the folder where you work; the `.md` extension means text in [Markdown](glossary:markdown), a simple format you can open in any editor. AI reads this file at the start of each work session, so next time you only write the task and it proposes conditions itself. A tool without folder access saves the rule in memory or tells you where to put it.
## Let the Agent Work Until Done

For a task lasting a whole afternoon or overnight, it’s useful to have a safeguard so the agent doesn’t stop before all conditions are met. Some tools have the `/goal` command, a word you write at the start of a message; which tools support it is shown in the “In your tool” block. Instead of “Yes, work,” write `/goal` followed by the conditions AI proposed. The agent starts immediately, checks conditions after each step, and continues independently until all are met:

```text
/goal In the contracts-extension.xlsx table, there is a row for each of the 60 contracts in the Contracts folder. For each contract, there is an end date, termination notice period, article number it comes from, and annual price excluding VAT. At the top are contracts that must be terminated by the end of November.
```
## Example

Petra is the CFO’s assistant at a construction company. On Thursday afternoon, October 8, 2026, she receives a task from him: by Friday, a report on which of 60 supplier contracts will automatically renew in January. Petra opens the Contracts folder in AI in Cowork mode, inserts the prompt, and after the last line writes:

```text
Go through all 60 contracts in the Contracts folder and find out which will automatically renew in January and until when they can be terminated.
```

AI proposes four conditions. Petra adds a fifth about the annual price so the director can see the financial amount involved and replies “Yes, work.”

```text
1. In the contracts-extension.xlsx table, there is a row for each of the 60 contracts in the Contracts folder.
2. For each contract, there is an end date, termination notice period, and article number it comes from.
3. For each contract, it is marked whether it automatically renews.
4. At the top are contracts that must be terminated by the end of November, sorted by deadline.
5. For each contract, there is an annual price excluding VAT.
```

Petra leaves the computer on and goes home. On Friday morning, she finds a handover message in chat: 60 contracts and 60 rows in the table, eleven contracts will renew automatically in January, and four must be terminated by November 30. Two contracts were scanned and the agent marked data from them for verification. Petra opens three data points in the original contracts and all match; she corrects the end date in one scanned contract and sends the table to the director. For the next long task, she will only write a sentence because AI will propose conditions itself according to the rule in `AGENTS.md`.
## If You Get Stuck

- **AI ends after one response or claims it cannot open files:** you are working in a regular chat. Switch to [Cowork or Code](card:when-chat-is-not-enough) as shown in the “In your tool” block.
- **Agent stops before all conditions are met:** tell it which condition it didn’t meet and ask it to continue. If your tool supports it, next time confirm conditions with the `/goal` command as described in the “Let the Agent Work Until Done” block.
- **You find the task stopped halfway in the morning:** the computer probably went to sleep or the agent waited for permission to edit files. Tell it to continue, and next time allow edits for the entire task and keep the computer plugged in.
- **Evidence doesn’t match the source:** tell the agent which condition and what doesn’t match, ask it to fix and provide evidence again. If you want to review the entire result, [AI output review](card:kontrola-vysledku) helps.
## What Will Be Completed

You have a completed long task you didn’t have to sit through, and you accepted it based on evidence for each completion condition. In `AGENTS.md` in the folder, or in AI’s memory, there is a rule by which AI proposes conditions itself for the next longer task, works until all are met, and provides evidence at the end.
## What Next

If the same task repeats weekly, set it as a [scheduled task](card:recurring-ai-task).

If a larger job can be split into parts that don’t wait on each other, run them simultaneously in [parallel threads](card:parallel-ai-workstreams).
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
