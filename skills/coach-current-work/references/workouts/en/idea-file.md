# Prepare an Idea File: One-Page Idea

AI writes your idea on one page so a colleague or another AI can work with it without you.

## Prepare an Idea File: One-Page Idea

**Difficulty: easy.**\
**Time: about 15 minutes** with one idea.
## What it’s good for

At the Tuesday meeting, you share an idea that every newcomer should get a buddy from another department for the first two weeks. The manager replies: “Write it down and send it to Lenka from HR so she can develop it by Friday.” You write three lines in an email. On Friday, Lenka returns with a proposal that newcomers should be more supported by their own manager because from the email she didn’t understand why the buddy should be from another department.

An idea file is one page about what you want to do and why; how to do it is left to whoever takes over the idea.
## What to prepare

- one idea you want to pass to a colleague or AI; it’s enough to have it in your head,
- the AI you use at work,
- a second AI for checking, or a new chat without memory in the first AI.
## How to do it

1. Insert the prompt and after the line “Idea:” write or
   [dictate](card:voice-as-primary-ai-input) the idea including what led you to it. The AI will ask up to three questions and save the idea file.
2. Attach the idea file to the second AI and write: “Read this file and tell me in your own words what the author wants to do and why. What would you ask before starting?”
3. Paste the second AI’s answer back into the first AI so it can supplement the idea file where the second AI misunderstood. Send the finished file to a colleague or give it to AI for further development.
## AI exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

Make an idea file from my idea: one page that a colleague or another AI can work with without me. You’ll find the idea at the end after the line “Idea:”.

First, ask me up to three questions without which no one else would understand the idea. Don’t ask anything else; write what you don’t know as open questions.

Write the idea file in Czech, no more than one page, in this format:

### Idea Title
One or two sentences: what it is.

### Why
What problem the idea solves, who it helps, and how it’s done today.

### Main Idea
How the idea differs from the current approach.

### How It Would Work
What it would look like for the people involved, with one concrete example.

### What Is Decided and What Is Open
Two lists: what is already decided and what we don’t have answers for yet.

Describe what I want to do and why. Leave tools and procedures to whoever takes over the idea unless they are core to it. Don’t invent numbers or agreements you don’t have from me.

If you work in a folder, save the idea file as a .md file in the napady folder and name it after the idea. Then add to the AGENTS.md file in the same folder the rule: “When I say ‘make an idea file from this,’ ask me up to three questions, write the idea in the same format as files in the napady folder, and save it there.” If AGENTS.md doesn’t exist, create it and make sure you read it at the start of each work session in this tool; in Cowork, write it in the folder instructions.

If you don’t know how to work with files in the folder, don’t create anything. Give me the idea file as a .md file to download and remember that when I say “make an idea file from this,” you ask me up to three questions and write the idea in this format. After each edit, give me a new file to download.

Idea:

## In Your Tool

### Microsoft Copilot
In Copilot Chat, before inserting the prompt, select the Word agent from the Tools or Agents menu and add above the line “Idea:” the text “Give me the idea file as a Word document.” Copilot saves the rule in memory (Saved memories) and uses it in new chats, so give the idea file to a colleague for review. Skills are in Cowork (Customize, Skills).

### ChatGPT
In a regular ChatGPT chat, you get the idea file in the response and the AI saves the rule in memory (Settings, Personalization, Memory). For checking, open a Temporary chat that doesn’t use memory. Skills are available in Business and Enterprise plans in the sidebar under Plugins, on the Skills tab.

### Claude
In a regular Claude chat, the AI creates a downloadable file if you have Code execution and file creation enabled (Settings, Capabilities), and saves the rule in memory (Settings, Memory). For checking, open an incognito chat that doesn’t use memory. Skills are found in Customize, Skills and work in chat and Cowork.

### Gemini
Save the finished idea file via Share & export, Export to Docs, and share the link with a colleague. Business accounts don’t have memory, so a new chat is enough for checking. Save the rule for next time as a skill: write “Save this as a skill” and find it in Customize, Skills.
## What Is an Idea File

An idea file is a plain text file with the `.md` extension, written in [Markdown](glossary:markdown): hashes `###` at the start of a line mark headings. AI writes it from what you tell it, and you just answer a few questions. Any AI can read it, no matter what your colleague uses, and your colleague can open it even in Notepad.

Unlike a task assignment, the idea file doesn’t say how to proceed. The colleague or their AI invents the execution according to their possibilities, and even if they choose a different path than you would, the idea remains the same. You verify it with a second AI because it, like the colleague, doesn’t know the chat where the idea file was created.

`AGENTS.md` is a file with AI rules in the same folder. Many tools in Code mode read it automatically at the start of each session; where the tool can’t do this itself, the AI saves the rule in its settings or tells you where to put it. Next time, in a new task in the same folder, just write “make an idea file from this.”

In Cowork or Code mode, AI saves the idea file in the `napady` folder and the rule for next time in `AGENTS.md`; if you don’t have the folder, create a new empty one. In a regular chat, it gives you the idea file to download or in the reply and saves the rule in memory if you have it enabled. When to switch is shown on the [Chat, Cowork or Code](card:when-chat-is-not-enough) tab.

The idea file mainly contains why the idea makes sense; how to implement it is left to whoever takes it over.
## Let AI Write Idea Files Everywhere

The rule in `AGENTS.md` applies only in the folder where AI wrote it. But ideas come up elsewhere, for example in the middle of work on another project. If you want to write idea files anywhere, have AI make this procedure into a [skill](glossary:skill): a saved instruction AI uses whenever you say “make an idea file from this.” Not every tool supports skills; which ones do is shown in the “In Your Tool” block. In the chat where the idea file was created, write:

```text
From how we just wrote the idea file, make a skill named idea-file. Use it whenever I say “make an idea file from this,” in any folder or chat. Keep the file format and up to three questions. Save the skill so this tool loads it automatically, and if that’s not possible here, tell me where to add it.
```
## Example

Petra coordinates projects at an engineering company. On Wednesday, October 7, 2026, she inserts a prompt into AI in Cowork mode, open in the project folder, and after the last line dictates: “I want every newcomer to have a buddy from another department for the first two weeks, someone they can ask anything they don’t want to discuss with their manager.” AI asks why specifically from another department, what newcomers lack today, and how many people it concerns. Petra answers that newcomers are afraid to ask their manager about small things, that last year four out of twelve newcomers left within three months, and that the company will hire about fifteen people this year. AI saves
`napady/partak-pro-novacky.md`:

```text
### Buddy for Newcomers
Every newcomer gets a buddy from another department for the first two weeks, someone they can ask anything.

### Why
Newcomers are afraid to ask their manager about small things, like where to find templates or how to expense a business trip. Last year, four out of twelve newcomers left within three months. This year the company will hire about fifteen people.

### Main Idea
A buddy from another department doesn’t evaluate the newcomer, so the newcomer isn’t afraid to ask anything.

### How It Would Work
On the first day, the newcomer and buddy go to lunch together. For the next two weeks, they meet twice a week for fifteen minutes. For example, a new designer might ask her buddy from accounting how to expense her first business trip without having to go to the manager.

### What Is Decided and What Is Open
- Decided: the buddy is always from another department, the program lasts two weeks.
- Open: who selects the buddies? Do they get time for it during work hours?
```

The second AI summarizes the idea correctly but asks if the buddy is mandatory for the newcomer. Petra pastes its answer into the first AI, adds that it is mandatory, and the AI adds this to the decided items. Petra sends the file to Lenka from HR the same day, who gives it to her AI as a basis for the November program.
## If You Get Stuck

- **AI claims it saved the idea file but it’s not in the folder:** you’re probably working in a regular chat that can’t save to folders. Ask for the file to download or switch to [Cowork or Code](card:when-chat-is-not-enough).
- **The idea can’t yet be summarized in one sentence:** dictate it as you have it, including what bothers you about the current state; see the [Dictate AI task](card:voice-as-primary-ai-input) card for how. What AI doesn’t understand from dictation, it writes as open questions.
- **AI writes a detailed procedure instead of the idea:** tell it: “Remove tools and steps, keep only what and why.”
- **The second AI misunderstood the idea:** don’t explain it in chat because the colleague won’t get such an explanation. Paste its answer into the first AI so it supplements the idea file accordingly, then give it to the second AI again.
## What You’ll Have Done

You have an idea file with an idea that another AI understood as well as you, and you can send it to a colleague or give it to AI for development. In Cowork or Code, it’s in the `napady` folder and the rule for next time is in `AGENTS.md`; in a regular chat, AI remembers the rule. The next idea will be written by AI when you say “make an idea file from this.”
## What Next

If you’re unsure about the idea, have it reviewed from several perspectives in the [expert panel](card:panel-expertu). If it’s an idea for a tool or application, have it built according to the idea file with [vibe coding](card:risk-based-prototyping).
## Markdown

**What it is:** A simple plain text format where headings, lists, links, and other structure are written using a few common characters. Files typically use the `.md` extension.

**What it is not:** It is not a programming language nor a format intended solely for developers.

**Why a student needs it:** It remains easily readable and editable by both humans and AI, and can be transferred between different tools.

## Prompt

**What it is:** An instruction for a specific interaction with AI.

**What it is not:** It is not the same as long-term context, a stored assistant, or an agent.

**Why the student needs it:** It triggers the exercise and guides its progress; it is not the main learning content.

## Skill

**What it is:** A reusable procedure for a specific type of task. It may include instructions, rules, examples, templates, and other necessary resources. The method of creation and execution varies depending on the tool.

**What it is not:** It is not a general assistant role nor a single successful conversation saved unchanged.

**Why a student needs it:** It helps convert a proven practice into a stable form that can be consistently reused.

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
