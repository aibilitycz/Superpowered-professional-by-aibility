# Create Your Skill: Instructions AI Remembers

From a task you completed once with AI, AI writes a skill and next time you assign it with a single sentence.

## Create Your Skill: Instructions AI Remembers

**Difficulty: Medium.**\
**Time: about 15 minutes** with the chat where you completed the task.
## What It’s For

Every Friday you send management the status of your three projects. AI helps you with it, but each time you have to explain again which materials to use, that there should be three sentences at the top, a table of deadlines below, and risks at the end. If you forget something, the status looks different than last week and the director asks what changed.

A [Skill](glossary:skill) is an AI instruction for one type of work, which AI writes from a finished chat and uses next time by itself, so you don’t have to explain anything again.
## What to Prepare

- The chat where you completed a task with AI that you do regularly and the same way,
- Materials for the next task of the same kind; you will use the skill on it immediately,
- AI that can save skills, for example in [Cowork or Code mode](glossary:workmode).
## How to Do It

1. Open the chat where you completed the task with AI. If you don’t have one, do the task with AI now and correct it until the result fits.
2. At the end of the chat, insert the prompt. AI will write the skill from the chat, save it, and tell you where to find it; if it needs your click, it will tell you where.
3. Open a new chat, attach the materials for the next task, and assign it with one sentence, for example, “Write the status of the Warehouse Move project.” AI should use the skill by itself.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

I will do this task again. Write a skill from what we did in this chat so next time I only need to assign it with one sentence and explain nothing.

Go through the entire chat and take what worked: steps, materials you needed, and the form of the final result that suited me. Incorporate my corrections from the work process directly into the steps. Do not include things that will change next time, like project name, date, or numbers; just note that you should ask for them.

The skill has these parts:
- a name based on the work, e.g., Project Status for Management,
- when to use it: sentences I usually assign such a task with,
- what you need to get and what to ask for if missing,
- steps,
- what the finished result looks like.

At the end of the skill add a rule: if I correct the result, offer to update the skill according to the correction.

Save the skill so this tool will find and use it automatically next time. If you need my click to save, tell me exactly where. If this tool cannot save skills, tell me directly. Finally, tell me where to find the skill and the sentence I will use to assign the task next time.

## In Your Tool

### Microsoft Copilot
Skills are in Cowork next to the Chat toggle; if not there, ask your IT admin. In Cowork you create a skill in Customize, Skills (Add, Create new), or ask AI for it in a task. Without Cowork, have Copilot Chat write the skill as text and insert it into a new agent (New agent, Skip to configure, Instructions); in step 3 assign the task in this agent.

### ChatGPT
Skills are available in Business and Enterprise plans in the sidebar under Plugins, on the Skills tab, enabled by your admin. When you ask ChatGPT for a skill in chat, it writes it and offers installation (Install). If you don’t have skills enabled, have it write the skill as text, insert it into project instructions (New project, Project settings), and assign the task in that project in step 3.

### Claude
Claude supports skills in all plans, in regular chat and Cowork, found in Customize, Skills. They require Code execution and file creation enabled in Settings, Capabilities; enabled by admin in enterprise accounts. Claude shows the skill name it uses during work.

### Gemini
If you see Skills in Customize, create or upload a skill there; Google enables this gradually for enterprise accounts. Until then, have Gemini write the skill as text and save it as a Gem—an assistant with custom instructions: in Gems, New Gem paste the text into Instructions and add the previous result to Knowledge. In step 3 open this Gem and assign the task there.
## What a Skill Is

A skill is an AI instruction for one type of work: when to use it, what it needs, steps, and what the result should look like. AI writes it: you complete the task once with AI, and it writes and saves the skill from what worked. It’s a plain text file, to which AI can add a template or sample result.

AI recognizes which skill to use by the description of when to use it. That’s why it includes sentences you usually assign the task with, allowing you to have dozens of skills and AI picks the right one. Tools that support skills mostly use the same format, so skills can be transferred between tools.

Skills work with AI in Cowork or Code mode and in some tools also in regular chat; if your AI cannot save skills, switch according to the [Chat, Cowork, or Code tab](card:when-chat-is-not-enough). You can tell if AI used a skill by its name during work (in Cowork in a new task); if you don’t see it, ask AI. The result should have the same form as before, and AI will ask again for project name, date, or numbers.

Skills include what repeats: procedure, result form, and your corrections.
## Let Skills Create Themselves

The best time for a skill is at the end of successful work. To have AI remind you of this moment, have it save a rule. In Cowork or Code, where AI works with a folder on your computer, it writes it to the `AGENTS.md` file. This is a plain text file with rules for AI that many Code-mode tools read at the start of each work; where the tool can’t do it itself, AI saves the rule in its settings or tells you where to put it. In regular chat, AI saves the rule in memory. Insert this:

```text
Save a rule for every next task: “When we complete a task I will do again, offer to write a skill from it.” When working in a folder, write it to the AGENTS.md file, and if the file doesn’t exist, create it. Make sure I read it in this tool at the start of every work; in Cowork write it into the folder instructions. In regular chat save the rule in memory.
```
## Example

Jana coordinates three projects at a construction company and sends management their status every Friday. On Friday, October 9, she creates the status of the New Warehouse project with AI in Cowork mode. She gives it the meeting notes and a deadline table and corrects it twice: management wants three sentences at the top and risks at the end, not hidden in the text. Then she inserts the prompt and AI saves the skill:

```text
Project Status for Management
- When to use: “project status,” “report for management,” “how are we doing with the project.”
- What you need: project name, latest meeting notes, and deadline table. If something is missing, ask for it.
- Steps: select what was done this week from materials, compare deadlines with the plan, and find delays.
- Result: three sentences at the top, milestone table with deadlines and status below, risks and responsible persons at the end.
- If I correct the result, offer to update this skill accordingly.
```

That afternoon she opens a new chat, attaches the notes and deadlines for the Warehouse Move project, and writes only “Write the status of the Warehouse Move project.” AI shows it is using the Project Status for Management skill and returns three sentences, table, and risks without Jana explaining anything. She finishes the third project in five minutes. By the end of the month, she plans to create skills for meeting notes and material orders.
## If You Get Stuck

- **AI says it can’t save the skill:** in enterprise accounts skills are often enabled by the admin, so contact them; what to enable is shown in the “In Your Tool” section. Meanwhile, switch to Cowork or Code mode. Chat won’t transfer, so start again from step 1 there. More in the [Chat, Cowork, or Code tab](card:when-chat-is-not-enough).
- **AI didn’t use the skill in the new chat:** the description of when to use the skill doesn’t match the words you assign the task with. Tell AI your sentence and ask it to adjust the skill’s description accordingly. Meanwhile, write “Use skill” and its name directly.
- **Skill describes one specific task:** project name, date, or numbers from last time don’t belong in the skill. Ask AI to remove them and request them again next time.
- **Result still doesn’t fit:** correct it in chat and accept when AI offers to update the skill. If the same error repeats, find the cause with AI using the [Check AI Output card](card:kontrola-vysledku).
## What You’ll Have

You have a skill for a task you do regularly and know where to find it. In a new chat AI used it by itself and returned the next task of the same kind in the same form as before. When you correct the result, AI offers to update the skill accordingly.
## What’s Next

A skill doesn’t run by itself; it waits for you to assign the task. If the project status should be created every Friday at 12:00 without you, set it as a [scheduled task](card:recurring-ai-task). If you use the result of one skill as input for another task, like a summary for the whole department from project statuses, add the second step directly into the skill.
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
