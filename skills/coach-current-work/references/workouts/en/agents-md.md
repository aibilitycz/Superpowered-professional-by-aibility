# Create AGENTS.md: AI Rules in a Single File

AI records instructions you repeatedly give it into one file and follows them for every task.

## Create AGENTS.md: AI Rules in a Single File

**Difficulty: easy.**\
**Time: about 15 minutes** with the folder where you work with AI.
## What It’s For

On Monday, you tell AI the same thing for a new offer as last week: use formal address for the customer and include VAT in prices. On Wednesday, you open a new chat for a second offer and write the instructions again. A colleague who handles offers for you during your vacation has different AI rules, so the customer receives prices once with VAT and once without.

`AGENTS.md` is a rules file in your working folder that AI reads at the start of every task, so you only give instructions once and they apply also to your colleague working in the same folder.
## What to Prepare

- a folder where you work with AI, for example a folder for an ongoing project,
- instructions you repeatedly give AI or your own instructions from your AI,
- AI in [Cowork or Code mode](glossary:workmode) that works with files on your computer.
## How to Do It

1. Open Cowork or Code in the prepared folder, enable file editing, and insert the prompt. AI will ask for instructions, write them into `AGENTS.md`, and arrange to read it at the start of every task.
2. Read the rules AI shows you. Tell AI about anything incorrect or missing, and it will fix the file.
3. In a new chat, preferably in a second tool, enter a task and write: “List the rule files loaded at the start of work and the rules that guided the result.”
## AI Exercise

Insert this [prompt](glossary:prompt) into AI in Cowork or Code mode, opened in your folder:

Create an AGENTS.md file in this folder with rules for AI so I don’t have to repeat the same instructions in every chat and AI tool.

Ask me for the instructions I repeat most often. Ask by categories: language and address, how to write, what never to do, and what to verify before submission. If I provide your own instructions from another AI tool or if you find a rules file for AI in this folder, adopt the instructions that apply to every task.

Write each rule as a single line with a specific instruction, e.g., “Write prices with VAT and currency.” Rewrite general advice like “be precise” into a specific instruction. If it’s unclear why a rule applies, add the reason. Organize rules under headings by category and keep the whole file short enough to fit on one screen.

Add this rule at the end: “If I correct you and the correction should apply next time, write it into AGENTS.md as a new rule and tell me what you added.”

Then check if this tool reads AGENTS.md automatically at the start of every task in this folder. If not, set it to load automatically; in Cowork, write this into the folder instructions. If you adopted rules from another AI rules file, leave only one line in that file that loads AGENTS.md so rules aren’t in two places, and tell me what you changed. If you can’t set this yourself, tell me where in settings to do it and what to insert.

Finally, show me the finished AGENTS.md and say whether this tool reads it automatically or what you set up.

## In Your Tool

### Microsoft Copilot
Copilot Chat does not read files: add to the end of the prompt “You don’t have a folder, write the rules as text for Custom instructions.” Then paste the text into Settings and more, Chat settings, Personalization. Do step 3 in a new chat by asking which instructions guided the result. In Cowork, next to the Chat toggle, rules belong in Customize, Preferences.

### ChatGPT
In the ChatGPT desktop app, switch to Codex and choose open a folder; Codex reads `AGENTS.md` automatically. In a regular chat, AI will write the rules as text for Custom instructions (Settings, Personalization) or project instructions (Project settings). Then do step 3 in a new chat and ask which instructions guided the result.

### Claude
Claude Code reads `AGENTS.md` automatically. In Cowork, opened in the Claude desktop app with a selected folder, AI writes into the folder instructions to read the file. In a regular Claude chat, rules belong in project instructions (Set project instructions).

### Gemini
Gemini does not read `AGENTS.md` and corporate accounts have no memory. Insert the prompt into Gemini and save the rules via Share & export, Export to Docs. In Gems, New Gem, write in Instructions “Follow the rules from the attached document” and add the document to Knowledge. Do step 3 in a new chat with this Gem, which you share with colleagues via Share.
## What is AGENTS.md

`AGENTS.md` is a plain text file with rules for AI: which language to use, how to write, what never to do, and what to verify before submission. It’s named after [agents](glossary:agent), i.e., AI that works with files and performs steps for you. The `.md` extension means it’s written in [Markdown](glossary:markdown), where hashes `###` at the start of a line mark headings.

Many tools in Code mode read the file automatically at the start of every task in the folder where it resides. Where the tool can’t do this itself, AI saves the rule into its settings or tells you where to insert it. When you correct AI, it writes the new rule into the file.

The file should contain instructions that apply to every task in that folder; materials for a single task and one-time requests stay in the chat. If AI omits a rule relevant to the task in step 3, ask it to rewrite it more clearly in the file.

A regular chat does not read `AGENTS.md` automatically. If you only use chat, save instructions into [custom instructions](card:custom-instructions); how to switch to Cowork or Code is shown on the [Chat, Cowork or Code card](card:when-chat-is-not-enough).
## Let the Rules Update Themselves

The rule at the end of `AGENTS.md` ensures that when you correct AI and the correction should apply next time, AI writes it into the file. After a few weeks, rules may start to repeat or contradict each other, and AI follows a longer file less well. To keep it short, have AI clean it up once a month with a scheduled task. Insert this assignment into AI in Cowork or Code mode and ask it to create a scheduled task:

```text
Every first Friday of the month at 4:00 PM, review AGENTS.md in this folder. Merge rules that say the same thing into one and organize them under the correct headings. At the end, tell me what you changed and list pairs of rules that contradict each other so I can decide which applies.
```

If the task works with files on your computer, it will run only if the computer is on and the app is open.
## Example

Lucie leads customer support at an e-shop for kitchen appliances and writes responses to complaints with AI in two tools that work with a folder on her computer. On Monday, October 12, she opens the `Reklamace` folder in the first tool and inserts the prompt. She answers questions, inserts her own instructions saved in a regular chat, and AI writes:

```text
### Language and Address
- Write in Czech and use formal address for customers.
- Sign as “Lucie Králová, Customer Support.”

### How to Write
- In the first sentence, state what we will do for the customer.
- The response should be no more than six sentences and contain no introductory phrases like “I hope you are well.”

### What Never to Do
- Do not promise a refund. That is decided by the complaints manager.

### What to Verify Before Submission
- Compare the order number and dates with the customer’s email.

### How to Update Rules
- If I correct you and the correction should apply next time, write it into AGENTS.md as a new rule and tell me what you added.
```

AI saves the file and ensures the tool reads it at the start of every task. On Tuesday, Lucie opens the same folder in the second tool and writes only: “Respond to Mrs. Dvořák’s complaint about the blender from her email in the folder.” Then she adds: “List the rule files loaded at the start of work and the rules that guided the response.” AI shows `AGENTS.md`, writes the response with formal address and signature, and lists four rules. It omitted the rule about the first sentence and the response begins with an apology. Lucie asks AI to rewrite that rule more clearly, and now `AGENTS.md` says: “Start the response with a sentence stating what we will do for the customer and by when, e.g., ‘We will replace the blender by Friday, October 16.’ Write the apology only afterward.”
## If You Get Stuck

- **AI claims it saved the file but it’s not in the folder:** you are probably working in a regular chat that cannot modify files on your computer. Switch to [Cowork or Code](card:when-chat-is-not-enough) and open the folder there.
- **`AGENTS.md` is missing from loaded files:** open the chat directly in the folder where `AGENTS.md` is located, not in its subfolder. If still missing, write: “Make sure `AGENTS.md` loads automatically at the start of every task in this tool.”
- **AI follows a rule only sometimes:** the rule is probably general, e.g., “write concisely.” Ask AI to rewrite it as a specific instruction, e.g., “no more than six sentences.”
- **You need rules in another folder too:** ask AI to save them in this tool’s shared instructions that apply in all folders.
## What You’ll Have

You have an `AGENTS.md` file in your folder with instructions you previously repeated to AI, and the tools you tested read it at the start of every task. In a new chat, you verified the file loaded and which rules AI used, and you rewrote unclear rules. When you correct AI next time, it will write the new rule into the file.
## What Next

If a rule grows into a multi-step procedure, e.g., how to prepare a monthly report, have AI create a [reusable guide](card:create-skill-from-proven-process). If the whole team should use the same materials and rules, have AI write a [project README](card:project-start-here).
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
