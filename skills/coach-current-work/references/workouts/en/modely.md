# Switch Models by Task: Fast for Sorting, Strong for Decisions

Compare a fast and a strong model on two tasks and have AI record which to use for each job.

## Switch Models by Task: Fast for Sorting, Strong for Decisions

**Difficulty: easy.**\
**Time: about 15 minutes** with two tasks from this week.
## What It’s For

A client wants to know by Friday if you can complete their order by the end of November. You give AI a table with the team’s capacities and get an answer in seconds that yes, it’s possible. But AI missed that two team members have vacation in November because it ran on the default model and you didn’t know you could switch.

A fast model is enough for sorting and rewriting, and when you leave decisions to a strong model with longer thinking, it’s more likely to notice conditions the fast one skips.
## What to Prepare

- bulk work from this week, for example 30 to 50 tasks from meetings or queries to sort,
- one decision, for example choosing from three offers based on price, deadline, and terms,
- materials for both tasks,
- AI you use at work or AI in [Cowork or Code mode](glossary:workmode).
## How to Do It

1. In the model menu, select the fastest setting; where it is shown is explained in the block In Your Tool. Insert the prompt and write each task in one sentence on the last two lines.
2. Switch to the strongest setting and write “Second round,” or in Cowork or Code start a new chat with “Second round according to `ulohy.md`.” AI will redo the tasks and compare rounds.
3. For each task, choose the result you would use. AI will record an overview of which model for what and save a rule to remind you next time when to switch.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

We are comparing how two of my work tasks are handled by a fast and a strong model. The tasks are on the last two lines; materials are in the folder you work in or in attachments. If you are not working directly in the folder on my computer, do not create any files and keep everything in the chat.

First round:
- State which model and thinking setting you are running on. If unsure, ask me.
- Complete both tasks fully. Request any missing materials.
- For each task, note the start and end time and record how long it took. If not possible, write “not measured” and ask me how long I roughly waited for each round during comparison.
- Save the task descriptions and the rest of this prompt from “Second round” onward into the file ulohy.md. Save results into porovnani-modelu.md under a heading with the model name and thinking setting.

I will start the second round by sending “Second round” on a stronger setting:
- If you are running the same model and setting as in the first round, alert me to switch.
- Take the tasks from ulohy.md or from the first round higher in the chat and redo them from scratch as in the first round. Do not use first round results; open porovnani-modelu.md only after you have your own results and append them under a new heading.
- Then compare both rounds. For each task, show up to three differences that indicate whether the result is usable and how long each round took. Longer text or longer wait alone do not mean a better result.
- Ask me which result to use for which task and mark it as selected in porovnani-modelu.md.

Finally, based on my choice, create the file modely.md with an overview: task type, model and thinking setting, and one sentence why. Add a line at the end: “Completed decisions or analyses are checked by another model before use.” Add a rule to AGENTS.md in the same folder: “Before starting a task, check modely.md. If a different model or thinking setting suits it better than what you run on, tell me in one sentence right at the start.” If AGENTS.md does not exist, create it. Make sure you read it at the start of each work session in this tool; in Cowork add it to folder instructions. If not working in a folder, save the overview and rule in memory, and if you have no memory, write the overview to me in chat.

Bulk work:
Decision or analysis:

## In Your Tool

### Microsoft Copilot
In Copilot Chat, the selection is top right: in the first round Quick response, in the second Think deeper, and answer the same when AI asks which model it runs on. You cannot select another model in Copilot Chat; you compare thinking length. Copilot saves the overview in memory (message Memory updated); without memory, insert it into Custom instructions under Chat settings › Personalization.

### ChatGPT
The menu is on the web in the message box, on mobile at the top of the conversation: in the first round Instant, in the second the highest level you have (High or Extra High), on a free account choose Think. ChatGPT saves the overview in memory (Personalization › Memory); without it, insert it into Custom Instructions. In Codex, the menu is below the message box.

### Claude
The model menu is next to the send button: fast is for example Haiku, stronger Sonnet, and strongest Opus. In Effort you set thinking from Low to Max. In Claude Code switch model with `/model` and thinking with `/effort`.

### Gemini
Click the model name below the message box: in the first round choose Flash or Flash-Lite, in the second Pro and immediately after that thinking level High; where options are named Fast, Thinking, and Pro, choose Fast then Pro. Gemini app memory is not available on work accounts, so insert the overview with the rule into Gemu instructions (Gems › New Gem) and assign tasks there.
## What Are Model and Thinking

A [model](glossary:ai-model) is the AI that answers you, and each app offers several. [Thinking](glossary:reasoning-mode) is the setting for how long the model analyzes the task before replying; called thinking, reasoning, or effort depending on the app. A fast model with short thinking suffices for bulk work and replies immediately. A strong model with longer thinking pays off for decisions and deep analysis but replies slower, so you don’t want to use it for everything. Both are switched in the model menu; where each tool has it is in the block “In Your Tool.”

`ulohy.md`, `porovnani-modelu.md`, and `modely.md` are plain text files in the materials folder, open them for example in Notepad. `AGENTS.md` is a rules file for AI in the same folder. AI in Cowork or Code mode reads it at the start of each work session and sets what the tool requires according to the prompt, so you don’t have to repeat the model selection rule.
## Have Another Model Check the Result

Have the decision you will act on checked by a different model than the one that wrote it before use. Each model misses something different, so the second often finds what the first skipped. Best is AI from a different company than the one that wrote the decisions. In Cowork or Code mode, open it in the same folder, attach materials in a normal chat, and insert the decision into the message below the task. If you have only one AI, choose a different strong model in it, and if you don’t have that either, request a check at least in a new chat with the same setting as the second round. Check prompt:

```text
Check the selected decision (in porovnani-modelu.md, higher in this chat, or in the attachment) against the materials. Find conditions the author overlooked, claims unsupported by materials, and numbers that don’t match. For each finding, say where in the materials it is and suggest a correction. If the decision is fine, say so in one sentence.
```

The line at the end of the overview in modely.md will remind you to check further decisions.
## Example

Lenka runs a small cosmetics e-shop. On Monday, October 5, 2026, she opens AI in the Shipping folder and gives it two tasks: sort 48 customer queries from last week into complaints, shipping, and payments, and choose from three offers for a new carrier.

In the first round on the fastest model with short thinking, AI sorts queries in a minute and recommends the cheapest carrier. In the second round on the strongest model with long thinking, it sorts queries the same but takes four minutes. For carriers, it notices the cheapest offer charges a penalty if the shop ships fewer than 200 packages monthly, and Lenka ships 120. It therefore recommends the second cheapest.

Lenka chooses sorting from the first round and the carrier from the second. AI writes into `modely.md`:

```text
### Which Model for What
- Sorting and rewriting (queries, lists, tables): fast model, short thinking. Result same as strong model, done in a minute.
- Choosing from offers and contracts: strongest model, long thinking. Fast model missed the penalty in carrier terms.
- Completed decisions or analyses are checked by another model before use.
```

A week later Lenka assigns rewriting a price list into a table on the strongest model. AI immediately says a fast model is enough for this.
## If You Get Stuck

- **No stronger model or longer thinking in the menu:** free versions often have only a longer thinking option instead of model choice; enable it for the second round. In corporate accounts, admins may hide models; ask for access to a stronger model.
- **AI in the second round doesn’t know what to do:** in Cowork or Code mode open a new chat in the same folder and write “Second round according to `ulohy.md`.” In a normal chat, stay in the same chat and just switch the model.
- **Both models make the same mistake:** the error is likely in the task or materials. How to find it is shown on the [Check AI Output](card:kontrola-vysledku) card.
- **AI doesn’t remind you next time:** check that `AGENTS.md` is in the folder and the rule is there. In a normal chat verify memory is enabled in settings. If your company disabled it, [switch to Cowork or Code](card:when-chat-is-not-enough).
## What You’ll Have Done

You have two tasks from this week done with a chosen result for each. You know where in your app to switch model and thinking length and have an overview of which model for which work. In Cowork or Code, the overview is in `modely.md` and the rule in `AGENTS.md`, so AI tells you at task start if it runs on an unsuitable model. In a normal chat, AI keeps the overview and rule in memory.
## What Next

Check the strong model’s result before sending it [against materials](card:kontrola-vysledku). If the decision requires internet sources you don’t have in the folder, request [Deep Research](card:deep-research).
## AI model

**What it is:** A system that processes input and generates a response. One AI tool may offer multiple models or hide the choice behind mode names.

**What it is not:** It is not the entire AI tool nor a guarantee of a certain quality of output.

**Why the student needs it:** It helps distinguish the model's capabilities from the context, prompt, available tools, and environment in which the model operates.

## Prompt

**What it is:** An instruction for a specific interaction with AI.

**What it is not:** It is not the same as long-term context, a stored assistant, or an agent.

**Why the student needs it:** It triggers the exercise and guides its progress; it is not the main learning content.

## Deeper Reasoning Mode

**What it is:** An option where AI dedicates more computational time to analyzing the task before generating a response. The specific implementation and name depend on the product.

**What it is not:** It is not an automatic guarantee of correctness nor always the best choice for every task.

**Why the student needs it:** It helps decide when the complexity or importance of the task justifies longer wait times, higher resource consumption, or limited availability.

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
