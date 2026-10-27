# Prepare Your Presentation Outline: What to Say and How Many Minutes for Each Part

AI will write an outline with timed segments tailored to your schedule, suggest three distinct approaches, and create slides only after you choose one.

## Prepare Your Presentation Outline: What to Say and How Many Minutes for Each Part

**Difficulty: easy.**\
**Time: approximately 20 minutes** with materials for one presentation.
## When It’s Useful

On Monday, you have 15 minutes at a management meeting and need approval to purchase a new tool for your team. You start making slides right away, and after two evenings you have 20 slides. When rehearsing aloud, you speak for half an hour, and the last slide doesn’t clearly show what the management should approve.

If AI first writes an outline with minutes that exactly fit your time, and only then creates slides, the presentation fits the time and leads to the decision the audience must make.
## What to Prepare

- When, to whom, and for how long you are presenting, and what decision the audience should make,
- Presentation materials and the company template, preferably in one folder,
- AI you use at work, or AI in [Cowork or Code mode](glossary:workmode).
## How to Proceed

1. Insert the prompt and after "Presentation:" add when, to whom, and for how long you present and what decision the audience should make; attach materials in the chat. Revise the outline with AI until it fits.
2. AI will suggest three distinctly different approaches for leading the presentation and how it will look, showing each on two slides. Choose one or specify what to adopt from another.
3. AI creates the slides, compares numbers with the materials, and saves a rule to always start with an outline. If it cannot save the file, it will provide text for AI in your presentation program.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

Prepare a presentation with me. The last line states when, to whom, and for how long I present and what the audience should decide or do at the end. Materials are in this folder or attached. Proceed in three steps and wait for my decision after the first two.

1. Outline. Review the materials and write an outline:
- main message in one sentence: what the audience should remember or decide,
- presentation parts in order, each with one sentence describing its content and number of minutes,
- minutes for live demonstration if any, and for questions at the end,
- total minutes. It must exactly fit my time. If content doesn’t fit, remove parts not leading to the main message and tell me what you omitted.
Save the outline in a file named osnova.md in this folder and update it after my corrections.

2. Approaches. Suggest three truly different approaches. They should differ by how the presentation starts, how it leads to the main message, and how slides look (numbers and charts, images, or short sentences), not by color or font. Describe each approach in two sentences and show it on an opening slide and one mid-presentation slide in the same format you will use for all slides. Save examples in a folder and tell me which file to open.

3. Slides. In the chosen approach, create all slides according to the outline. If there is a company presentation template in the folder, use it and save a PowerPoint file. If not, create a web presentation in a single HTML file with arrow navigation between slides. Each slide’s title is a full sentence stating what the audience should understand. In slide notes, write what to say and how many minutes to spend. Use numbers and facts only from the materials; mark missing data as [FILL IN]. Finally, compare every number on slides with the materials and tell me the file name, total minutes, and any discrepancies.

Add a rule to the AGENTS.md file in this folder: "When preparing a presentation here, start with an outline with minutes, then suggest three different approaches, and create slides only in the chosen one." If AGENTS.md doesn’t exist, create it. Ensure the AI reads it at the start of each task; in Cowork, add it to folder instructions.

If you don’t know how to work with folders, don’t save anything; show me the approach examples here in chat and instead of slides, provide text for AI in PowerPoint that cannot see this chat. It should instruct to create a presentation in the chosen approach, the full outline, text for each slide with all numbers from materials, and speaker notes: what to say and how many minutes.

Presentation:

## In Your Tool

### Microsoft Copilot
Copilot Chat creates the outline and approaches; Copilot licensed in PowerPoint creates slides: launch it in the company template (Home › Copilot or icon bottom right) and paste chat text. For longer text, save it as Word via the Word agent (Tools or Agents in Copilot Chat) and in PowerPoint ask it to create the presentation from that. Copilot Chat saves the rule in memory: "Remember to start presentations with an outline."

### ChatGPT
In the ChatGPT desktop app, after choosing an approach, type @Presentations, attach the company template, and request slides in its style. If @ options don’t appear, use the ChatGPT for PowerPoint add-in (PowerPoint Home › Add-ins). ChatGPT saves the rule in memory when you write "Remember to start presentations with an outline."

### Claude
Claude provides a PowerPoint file even in a regular chat if you write "Make slides as a downloadable PowerPoint file" after choosing an approach. The Claude for PowerPoint add-in (Pro, Max, Team, Enterprise; deployed by your admin) builds slides directly in the open template. In Cowork, select the folder with materials and template, and AI saves the presentation and rule there.

### Gemini
After choosing an approach, enable Canvas in the same chat (Add files menu) and write "Make a slide presentation from the text including speaker notes." Export it via Share & export › Export to Slides to Google Slides and apply the company template via Slide › Change theme › Import theme. Add the rule to Gemu instructions (Gems › New Gem) where you prepare presentations.
## What Is an Outline and Presentation Approach

The outline is the presentation skeleton: the main message in one sentence and parts in order, each with minutes. AI saves it as `osnova.md` next to materials; it’s a plain text file you can open in any text editor. Next time, if you have only 10 minutes on the same topic, AI shortens the presentation by reducing minutes where the main message remains intact.

The approach is how you lead the presentation and how it looks: how it starts, where the demo is, and whether slides show numbers, images, or just short sentences. The three approaches should differ exactly in these ways. Three versions with the same structure but different colors are still one approach.

A web presentation is a single HTML file you open in a browser and display full screen (Windows F11). It’s useful if your company has no template.

`AGENTS.md` is a file with AI rules in the same folder. AI in Cowork or Code mode reads it at the start of each task, so you don’t have to repeat the outline rule; the AI sets it up as prompted.
## Make AI Always Start with an Outline

Turn today’s procedure into a [skill](glossary:skill), a saved guide, so AI always starts presentations with an outline in every folder, not just the one with `AGENTS.md`. It loads it automatically whenever it detects you’re preparing a presentation; if your tool lacks skills, the folder rule suffices. After finishing a presentation, insert into the same chat:

```text
From the procedure we used today to prepare the presentation, create a skill named after the presentation. Use it every time you prepare a presentation with me: first the outline with main message and minutes including demo and questions and total check, then three distinct approaches on two sample slides, and slides only in the chosen approach. Add the company presentation template from this folder to the skill and tell me where you saved it.
```

How to test and edit the skill is described on the card [Create Your Skill](card:create-skill-from-proven-process).
## Example

Markéta coordinates a pilot of a new ordering system at a distribution company. On Thursday, October 15, 2026, she has 15 minutes at a management meeting and needs approval to roll out the system in Brno and Ostrava starting January. In the project folder, she has a table with pilot results, emails from branch managers, and the company template. At the end of the prompt, she writes "Management meeting 15.10., 15 minutes, I want approval to expand the pilot to Brno and Ostrava." AI suggests the outline:

```text
### Main Message
The pilot shortened order processing from 3 days to 1 day; from January, we want to implement it in Brno and Ostrava.

### Parts (15 minutes)
- Why we ran the pilot: 1 min
- What changed in three months, pilot numbers: 4 min
- Demo of one order in the new system: 3 min
- Proposal: two branches from January, costs and deadlines: 3 min
- Questions and decision: 4 min
- Total: 15 min
```

Then three approaches. The first starts with the big number "1 day instead of 3" and relies on charts. The second tells the story of one order before and after the pilot and shows screenshots. The third puts the proposal for approval on the first slide and the rest are short reasons. Markéta chooses the third because management has little time and adopts the chart from the first. AI creates 8 slides in the company template and marks the transport savings with `[FILL IN]` because that number is missing in the materials.

A week later, Markéta has 10 minutes on the same topic at a sales meeting. She just writes "Shorten the presentation according to `osnova.md` to 10 minutes" and AI omits the demo, reduces pilot numbers to two minutes, and keeps questions.
## If You Get Stuck

- **Three approaches look the same and differ only by color:** tell AI to start each differently, e.g., with a number, a story, and a proposal for decision.
- **Total minutes don’t fit your time:** ask AI to remove parts not leading to the main message and keep minutes for questions.
- **You don’t know the main message:** tell AI what the audience should do after the presentation and let it suggest three versions of that sentence.
- **AI doesn’t use the template or can’t save the file:** you’re probably working in a regular chat. Paste the slide text into AI in your presentation program as described in step 3, or switch to [Cowork or Code](card:when-chat-is-not-enough).
## What You’ll Have

You have `osnova.md` with the presentation outline including the main message and minutes matching your time, and slides in the chosen approach from three proposals, in the company template or as a web presentation. Slide notes tell what to say and how many minutes, and numbers are checked against materials. Thanks to the rule in `AGENTS.md`, AI will start the outline for every future presentation in this folder. In a regular chat, you have the outline and slide text from which AI created the first version in your presentation program.
## What Next

If the presentation goes to a customer or involves financial decisions, have AI [verify claims and conclusions](card:kontrola-vysledku). If people should read it themselves after the meeting, turn it into a [web page](card:web-page-output).
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
