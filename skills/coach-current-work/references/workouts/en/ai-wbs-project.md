# Create an AI-WBS: Project Plan Divided Between People and AI

AI breaks down the project plan, assigning each step to either a person or AI, and immediately completes its first step.

## Create an AI-WBS: Project Plan Divided Between People and AI

**Difficulty: easy.**\
**Time: approximately 15 minutes** with one project starting.
## What It’s For

At a meeting, management assigns you to move the office to a new building. The move is scheduled for the 2nd, and your calendar currently only has one entry "move," but you don’t know which parts AI can handle and when you’ll need colleagues from IT and operations.

A plan that specifies who will do each step and what the deliverable will be is stored in the project folder, so both a new chat and your colleague can see what’s done and what comes next.
## What to Prepare

- A project folder with materials: assignment, email from management, or meeting notes,
- A few sentences about the project goal, deadline, and people working on it,
- AI in Cowork or Code mode that works directly with files in your folder.
## How to Proceed

1. Open the project folder in AI in Cowork or Code mode (find it under the "In your tool" block), insert the prompt from the AI exercise, and below it write the goal, deadline, and people on the project.
2. AI will show the plan as a table and questions. Answer them, correct the "Who will do it" column, and write "Save it": AI will save the plan, complete its first step, and write a rule into `AGENTS.md`.
3. Open the result of the first step and review it. If something is off, tell AI and it will correct it in the file and the plan.

If you only have regular chat, see the section When You Get Stuck.
## AI Exercise

Insert this [prompt](glossary:prompt) into AI in Cowork or Code mode, opened in your folder:

Create an AI-WBS for this project: a plan for the entire project divided between people and AI. If you don’t have access to the project folder and cannot save files there yourself, tell me immediately so I can switch to Cowork or Code.

Review the materials in the project folder and my notes below this assignment. If a project plan already exists in the folder, update it instead of creating a new one.

Break down the entire project from start to finish into five to ten main steps. Each step ends with something demonstrable: a file, list, decision, or order. Do not skip later steps, just describe them more briefly. Order the steps so that something usable is produced as soon as possible. Write the plan as a table with three columns:
- Step: what will be done.
- Who will do it: a specific person, or AI and the name of the person who will review the result.
- Deliverable: the specific result of the step.

Assign everything that can be prepared from the materials to AI. Assign decisions, negotiations with people, and steps involving sending, publishing, signing, or paying to a person. If you don’t know who will do a step, write a question mark and do not invent a name.

Show me the plan and below it list all questions that the materials did not answer and that would change the plan. Wait for my answers and then correct or confirm the plan. Then save it as plan-projektu.md in the main project folder and write the project name, deadline, and today’s date at the top. If there is a README.md in the folder, add a line linking to the plan.

Immediately after, do the first step assigned to you in the plan for which you have materials. Choose one you can complete in a few minutes. Save the result in the project folder, add the filename and the word "done" in the Deliverable column for that step, and tell me what I should check.

Finally, add this rule to the AGENTS.md file in the project folder: "Before working on the project, read plan-projektu.md. When a step from the plan is done, add where the result is and the word done in the Deliverable column." If AGENTS.md does not exist, create it. Make sure you read it at the start of every work session in this tool; in Cowork, write this into the folder instructions.

Project goal, deadline, and people working on it:

## In Your Tool

### Microsoft Copilot
Cowork is next to the Chat toggle in Copilot; if you don’t see it, ask IT.
It works with files on OneDrive and SharePoint, so tell it where the project is and to save the plan as an Excel table; under Cowork Customize, Preferences, keep "Before working on the project, read the plan." Without Cowork, see the "AI won’t save plan to folder" point in When You Get Stuck, using a Notebook project.

### ChatGPT
Codex works with folders in the ChatGPT desktop app: switch to Codex, choose open and folder, and select the project folder; no programming needed. Codex reads `AGENTS.md` automatically and creates the planned task on request. If you don’t see Codex, ask your admin to enable "Allow members to use Codex locally," or follow the regular chat instructions.

### Claude
In the Claude desktop app, choose Cowork and in the message field select Work in a folder. Claude Code reads `AGENTS.md` automatically; in Cowork, AI writes into the folder instructions to read it. AI creates the planned task on request, and you can find an overview in the left panel under Scheduled.

### Gemini
The Gemini app with a work account does not work with folders on the computer, so follow the regular chat instructions: use the Gem bot instead of a project and save the plan table via Export to Sheets. Gemini CLI works with folders if the company has a Gemini Code Assist Standard or Enterprise license; it reads `AGENTS.md` only if enabled in settings.
## What Is AI-WBS

AI-WBS stands for AI Work Breakdown Structure. Project managers have used Work Breakdown Structures—breaking work into parts—for decades. [AI-WBS](glossary:aiwbs) adds, for each step, the question of whether a person or AI will do it. A person is responsible for each step’s result, even if AI prepares it, so AI steps also list the name of the person who will review the result.

The plan is a plain text file `plan-projektu.md` in the project folder. The `.md` extension means it’s written in [Markdown](glossary:markdown), which AI can easily read and edit. Open it in any text editor, and if you want to send it to colleagues as a table or document, just ask AI. If the project has a [README](card:project-start-here), the AI adds a link to the plan there.

`AGENTS.md` is a file with rules for AI in the same folder. AI reads it at the start of every work session, so it knows the plan without reminders; where the tool doesn’t do this automatically, AI writes the instruction into its folder settings per the prompt. If the folder is shared with a team, everyone sees both files, and AI colleagues read the same rules as you.

Regular chat won’t save the plan to the folder because it can’t see folders on your computer; if you have nothing else, see the regular chat section in When You Get Stuck. If the project is in a shared cloud storage folder synced to your computer, that’s sufficient.

If AI asks for permission to save files to the folder, allow it.
## Keeping the Plan Up to Date

The rule in `AGENTS.md` covers work you do with AI in the project folder. However, colleagues complete their steps outside the folder, for example in email or meetings, and their files are added without AI. To handle this, create a scheduled task that AI runs weekly: it marks completed steps and does the next step assigned to it. Insert this assignment into AI in Cowork or Code mode and ask it to create the scheduled task:

```text
Every Monday at 8:00, review plan-projektu.md, the project folder, and emails and meetings from the past week related to the project that you have access to. For steps that are done, add where the result is and the word done in the Deliverable column. Then do the next step assigned to you in the plan for which you have completed materials, and save the result in the project folder. At the end, tell me what is newly done, what you did, and which step is waiting on whom.
```

AI reviews emails and meetings only if it has connected mail and calendar; otherwise, it works only with the project folder. If the task works with the folder on your computer, it runs only when the computer is on and the app is open.
## Example

Jitka is a marketing coordinator at a company that makes garden furniture. The Spring 2027 catalog must go to print by January 15. In the folder, she has last year’s catalog, a price list of new products, and an export of this year’s sales. On Monday, October 12, she opens the folder in Cowork mode, inserts the prompt, and below it writes: "Spring Catalog 2027, print by January 15. Working on it are me, Sales Director Pavel, photographer Ondřej, and a graphic agency." AI shows the plan and asks how many pages the catalog should have and whether only new products are photographed:

```text
| Step | Who will do it | Deliverable |
|---|---|---|
| 1. Product selection | AI selects based on sales, Jitka reviews | list of 60 products |
| 2. Parameters and prices | AI, Jitka reviews | parameters table |
| 3. Photos of new products | photographer Ondřej | 14 photos |
| 4. Product texts | AI, Jitka reviews | texts in a file |
| 5. Layout | graphic agency | PDF catalog |
| 6. Price proofreading | AI against price list, Jitka reviews | list of corrections |
| 7. Approval and printing | Jitka, approved by Pavel | print order |
```

Jitka answers both questions. For the first step, AI would select products alone and Jitka would only review. She changes the step to "AI prepares a draft, Jitka and Pavel select": sales know what customers ask about, which is not yet visible in sales data. Then she writes "Save it."

AI saves the plan to `plan-projektu.md` and immediately completes its first step: from the sales export and price list, it prepares `navrh-vyrobku.xlsx` with 60 products sorted by sales and all 14 new products included. Jitka finds two discontinued product sets in the table, tells AI, and AI removes them from the draft. With the finished draft, Jitka meets Pavel on Wednesday and they finalize the selection together in one meeting.
## When You Get Stuck

- **AI won’t save the plan to the folder because you only have regular chat:** switch to [Cowork or Code](card:when-chat-is-not-enough). If your company allows only regular chat, attach materials to the prompt and tell AI to continue in chat and write the plan directly in the reply. Ask AI to provide the plan as a file, upload it to the [project](card:asistent) in your tool (name shown in the "In your tool" block), and add the sentence "Before working, read the project plan. When I tell you what is done, send me the full plan again with marked steps." Upload the new plan version to the project replacing the old one; AI will do the first step in chat in the project.
- **The plan has thirty small tasks:** ask AI to merge them into main steps, each with its own deliverable.
- **The plan is generic and fits any project:** ask AI which materials in the folder it read. Files stored only in the cloud download when AI opens them, so if it didn’t read them, ask it to try again with internet connected. Add missing materials, like the assignment or meeting notes, and ask AI to rewrite the plan accordingly. For large projects, switch to a [stronger model](card:modely).
- **The first step’s result is incorrect:** tell AI exactly what is wrong and which material to use. For numbers or claims, [AI output verification](card:kontrola-vysledku) helps.
## What Will Be Done

You have `plan-projektu.md` in the project folder with the main steps of the entire project, and for each step you know who will do it and what the deliverable is. AI has completed its first step, and its result is next to the plan. `AGENTS.md` contains a rule that makes AI read the plan before working and mark completed steps.
## What Next

If a step in the plan is a long AI task, like reviewing sixty contracts, assign it to an [agent](card:agent-task) who will complete it independently. If the project doesn’t yet have a home page, have AI write a [README](card:project-start-here). Record decisions and completed work in the [worklog](card:project-worklog).
## AI-WBS

**What it is:** AI Work Breakdown Structure: decomposition of a project into deliverables, phases, and roles of humans, AI, experts, or automation.

**What it is not:** It is not just a regular list of project tasks.

**Why the team needs it:** It shows exactly where AI is working within the project and where human or expert involvement remains.

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

## Plan a Block

An optional product mechanic after completing a card, whose outcome leads to work that cannot fit into fifteen minutes. It is not a standalone card, has no separate completion, and does not increase the count of completed methods.

Cards are fifteen minutes long and end with an artifact. However, some of them only begin with an artifact: a phase map, a research brief, a skill design, or two branches for integration are created. The person leaves with a plan but no time, then returns to the work after ten minutes between meetings where nothing can be completed.

## When it is offered

- the card ended with a usable result and that result is the assignment for further work,
- that work has a clear end that can be named in one sentence,
- if normally broken down into short segments, it would fall apart because each return starts with reloading the context.

The mechanic does not appear when the work after the card really fits into fifteen minutes, when the next step is waiting for another person or approval, or when the card’s result has no follow-up work.

## What the person sees

A short option **Plan a Block** next to the common check-in. After opening, the AI asks only one thing: when the person realistically has such time. The rest is proposed automatically based on what was created in the card.

## What the AI creates

A block brief. The source is the result of the just-completed card; the mechanic does not invent a new topic. It contains five items:

- **one thing**, named as it looks when finished,
- **duration** between 60 and 120 minutes, with what fits inside and what does not,
- **what must be prepared in advance**: accesses, data, materials, prompt from the card,
- **what will be finished at the end**, i.e., a concrete result, not "progressed" or "in progress",
- **what to do with the remainder** that does not fit into the block so it does not remain hanging without a decision.

If it turns out that one thing is actually three, the AI will say so and offer which of them belongs in the first block. It does not propose splitting into three blocks in advance.

## Active time versus waiting

A block with AI has a different structure than a block of solo work because part of the time the tool runs. Research, agents, longer generation, or data processing take minutes to tens of minutes and the person does not have to sit through it.

Therefore, the brief distinguishes three types of time: active human work, AI running, and waiting for someone else. For AI running, it proposes what to do in the meantime, most often preparing the next step of the same result. Jumping into unrelated work breaks the block, even if it looks like utilized time.

If waiting would take most of the block, the mechanic says so directly: such a task belongs rather to [Let AI work when you are not there](card:recurring-ai-task).

## Calendar

The mechanic prepares event text: a title based on the one thing, duration, and in the description what must be prepared in advance. The person can enter it themselves.

The mechanic does not write anything into the calendar or any other shared system without permission and does not send invitations to anyone.

## Boundaries versus cards

| What it is not | Where it is |
|---|---|
| Reserved time for a team that needs a leader’s decision, canceled meetings, and a mentor on hand | card [Give the team a block for one real AI project](card:ai-sprint) |
| AI work when the person is not there | card [Let AI work when you are not there](card:recurring-ai-task) |
| Breaking down a project into steps and roles | card [Create AI-WBS for the first phase of a project](card:ai-wbs-project) |

The person schedules the block themselves and does not need anyone’s permission. This distinguishes it from a sprint, where that permission is a significant part of the work.

## What the mechanic does not include

Instructions for concentration, recommendations about phones, notifications, and environment. The library teaches walkthroughs. Advice of this kind would turn the mechanic into a sermon about work instead of preparing one specific block.

## Records

Information that a block brief was created can be added to the check-in. It is not a separate card completion. Whether the block took place is not tracked by the mechanic.

## First supported cards

- `ai-wbs-project`
- `deep-research`
- `ai-workflow`
- `create-skill-from-proven-process`
- `parallel-ai-workstreams`

Other cards with follow-up work longer than fifteen minutes, namely `risk-based-prototyping`, `optimize-then-automate`, `prace-s-daty`, and `sjednotit-data-z-vice-zdroju`, are candidates for the second wave. Attaching the mechanic to half the library right at the start would turn the choice into noise.
