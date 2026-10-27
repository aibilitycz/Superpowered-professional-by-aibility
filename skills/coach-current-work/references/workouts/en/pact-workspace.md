# Set Up PACT: A Workspace for AI

AI gathers all your ongoing work into one folder with a map, so a new chat continues without explanations.

## Set Up PACT: A Workspace for AI

**Difficulty: Medium.**\
**Time: approximately 15 minutes** with ongoing projects on your computer.
## What It’s For

On Monday, you open a new chat about the department budget and spend ten minutes searching
for materials all over your computer. Last year’s spreadsheet is in Documents, meeting notes
are on the Desktop, and the supplier’s offer is in Downloads. AI still calculates with last year’s prices because you forgot to insert this year’s offer into the chat.

PACT is a single folder with four parts where AI finds projects, materials, and rules on its own.
## What to Prepare

- Files for the projects you are currently working on, and know where they are located on your computer,
- AI in [Cowork or Code mode](glossary:workmode) that works with files on your computer.
## How to Do It

1. Open Cowork or Code in the folder with your name, where Documents, Desktop, and Downloads are located, and insert the prompt. AI will show by projects what it will move into the new `PACT` folder.
2. Confirm the proposal; leave out any project you are unsure about for now. AI will move the files and write the PACT map into `AGENTS.md`: what is where and what rules apply.
3. Open a new chat in the `PACT` folder and enter a task for one project, for example, “Let’s continue with the budget. What is still missing?” AI will take the materials itself.
## AI Exercise

Insert this [prompt](glossary:prompt) into AI in Cowork or Code mode,
opened in your folder:

Create a PACT folder in Documents: a workspace where all my work has its place. If you cannot work with files on the computer, tell me immediately so I can switch to Cowork or Code.

Inside, create four parts:
- 1_Projects: ongoing projects, each in its own folder,
- 2_Agents: instructions for AI, such as prompts I use repeatedly,
- 3_Context: materials that apply to multiple projects, like price lists, company rules, or well-crafted texts as templates,
- 4_Tools: work aids, such as document templates or calculators.

Go through Documents, Desktop, and Downloads and ask me if I have work files elsewhere, for example in OneDrive. Based on content and last modification date, identify which projects I am currently working on. Then show me a proposal by projects: project name and which files will be moved, not each file separately. After my confirmation, move the files and save the list of moves (from where to where) in the file presuny.md in the PACT folder so they can be restored anytime. Leave files unrelated to ongoing work in place. Do not move files in shared folders used by colleagues; just note their location in the map.

Finally, create a file AGENTS.md in the PACT folder with the PACT map: what is in each part and which projects are there, with one sentence per project about its status. Add the rule: “Create a new project as a folder in 1_Projects. Save every new file in the part where it belongs. When a project is added or its status changes, update the map in this file. Before working on a project, read its folder.” Make sure I read it in this tool at the start of each work session; in Cowork, write this into the folder instructions.

## In Your Tool

### Microsoft Copilot
You find Cowork next to the Chat toggle; if it’s not there, ask your IT administrator for it. It only sees OneDrive and SharePoint, so you don’t select the folder and add to the end of the prompt: “Instead of Documents, Desktop, and Downloads, scan my OneDrive and create PACT there. Save the map as a Word document and write the rules for me in Customize, Preferences.” In step 3, specify in the new task that PACT is on OneDrive.

### ChatGPT
In the ChatGPT desktop app, switch to Codex, choose open a folder, and select the folder with your name. Codex reads `AGENTS.md` automatically and will create the scheduled task when you ask; you find it under Scheduled. If you don’t see Codex, your administrator probably disabled it, so ask them to enable it.

### Claude
In the Claude desktop app, open Cowork and select the folder with your name, or open it in Claude Code; both require paid plans. Cowork writes the rule into the folder instructions, Claude Code reads `AGENTS.md`. AI will create the scheduled task when you ask and you find it in the left panel under Scheduled.

### Gemini
Gemini on Google Drive does not create folders or move files into them, so you cannot build PACT with it. For this workout, you need AI in Cowork or Code mode, such as Claude Cowork, Claude Code, or Codex in the ChatGPT app; ask your IT administrator if your company has it.
## What Is PACT

[PACT](glossary:pact) is a method to organize work so both humans and AI understand it. The name comes from the initial letters of the English words Projects, Agents, Context, and Tools. The simplest form is four folders as in this exercise; numbers before the names keep them always in this order. You decide which projects belong in PACT, and AI handles moving and organizing. No special program is needed, and if part of your work is elsewhere, like company documents on a shared drive, it can stay there and AI will note its location in the map.

`AGENTS.md` is a plain text file in the main PACT folder containing rules for AI. It is named after [agents](glossary:agent), i.e., AI that works with files autonomously, and the `.md` extension means it is written in [Markdown](glossary:markdown). Many tools in Code mode read it automatically at the start of each session, so you don’t have to repeat the map or rules. Where the tool cannot do this itself, AI saves the rule in its settings or tells you where to insert it.

A regular chat is not enough for PACT because it cannot see folders on your computer; how to [switch to Cowork or Code](card:when-chat-is-not-enough) is shown on a separate card. Only ongoing projects and their materials belong in PACT; leave old archives where they are and AI will move them when you ask.
## Keep PACT Updated Automatically

A scheduled task once a week sorts new files added elsewhere into PACT. The rule in `AGENTS.md` covers work you do with AI in the `PACT` folder. Email attachments end up in Downloads and quick notes on the Desktop. Insert this instruction into AI in Cowork or Code mode and ask it to create a scheduled task:

```text
Every Friday at 4:00 PM, scan Desktop and Downloads. Move files from this week that belong to projects in PACT to the correct part according to the map in AGENTS.md. If a new project appeared, create its folder in 1_Projects and add it to the map. At the end, tell me what you moved where and which files you don’t know where to place.
```

When the task works with files on your computer, it runs only if the computer is on and the application is open.
## Example

Jana is preparing the company booth for a trade fair in Brno and an autumn trip to the Dolomites for colleagues. Files for both are scattered all over her computer. AI recognizes both projects and after Jana’s confirmation creates:

```text
PACT/
  AGENTS.md
  1_Projects/
    veletrh-brno/         brief, booth budget, offers from three printers
    zajezd-dolomity/      program and calculations
  2_Agents/
    prompt-invitation.md
  3_Context/
    pricelist-2026.xlsx
    logo-and-colors.pdf   useful for both the booth and the trip invitation
  4_Tools/
    trip-calculator.xlsx
```

On Wednesday, October 14, she opens a new chat in the `PACT` folder and writes: “Let’s continue with the trade fair. Which printer is cheapest?” A good answer compares the three offers from the project folder without Jana having to insert anything. If AI asks which trade fair it is, it is probably working outside the `PACT` folder.
## If You Get Stuck

- **AI claims it created folders but they are not on your computer:** you are probably working in a regular chat that cannot handle files on your computer. Switch to [Cowork or Code](card:when-chat-is-not-enough) and select the folder with your name.
- **AI cannot see or move files in some folder:** check that you selected the folder with your name in Cowork or Code. If files are outside it, ask AI how to grant access.
- **You want to undo the move:** tell AI in the `PACT` folder to restore files according to `presuny.md`, either all or just one project.
- **New chat asks about things that are in the folder:** open the chat in the `PACT` folder, not in a regular chat window, and check that `AGENTS.md` is directly there. Then ask AI to read it.
## What You Will Have

You have a `PACT` folder with four parts, ongoing projects and materials inside, and an `AGENTS.md` map so every new chat understands the folder. You verified on a real task that AI continues the project without you inserting or explaining anything.
## What Next

Let AI write an [intro page](card:project-start-here) for each project showing its status at a glance. From the procedure you explain to AI repeatedly, have it create a [guide to reuse](card:create-skill-from-proven-process).
## Agent

**What it is:** An AI system that can plan multiple steps within a given goal, use available tools, manage state, and perform authorized actions. The scope of capabilities and level of autonomy depend on the specific tool and permissions.

**What it is not:** It is not just a stored prompt or an assistant renamed to sound more advanced.

**Why the student needs it:** It helps identify tasks that require tools, permissions, checkpoints, and clear accountability for actions.

## Markdown

**What it is:** A simple plain text format where headings, lists, links, and other structure are written using a few common characters. Files typically use the `.md` extension.

**What it is not:** It is not a programming language nor a format intended solely for developers.

**Why a student needs it:** It remains easily readable and editable by both humans and AI, and can be transferred between different tools.

## PACT

**What it is:** A model organizing the AI work environment into four types of elements: Projects, Agents, Context, and Tools.

**What it is not:** It is not a mandatory set of four components nor a finished software product. The specific form depends on how a person works and what they already use.

**Why the student needs it:** It helps organize multiple projects, repeated AI workflows, stable context, and tools so that both the person and AI can find them.

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
