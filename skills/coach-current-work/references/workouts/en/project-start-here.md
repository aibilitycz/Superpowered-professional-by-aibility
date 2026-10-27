# Create Your README: Project Intro Page

AI writes the project intro page so colleagues and new chats immediately understand the status and valid document.

## Create Your README: Project Intro Page

**Difficulty: easy.**\
**Time: about 15 minutes** with one ongoing project.
## What It’s For

In a week you’re going on vacation and colleague Marek is taking over the preparation of the company conference in Olomouc. In the project folder lie `catering_final.docx`, `catering_final_2.docx`, meeting notes, and last year’s program. You know the second catering offer is valid and last year’s program is just a template. Marek or a new chat won’t recognize this from the file names, and you’d have to explain it to him hurriedly by phone.

An intro page for the project, a README in English, would help. AI writes it from the folder’s materials, and Marek and a new chat immediately see which document is valid and what the next step is.
## What to Prepare

- a folder with one ongoing project on your computer or synced to it,
- notes or emails about the project that are not in the folder,
- AI in [Cowork or Code mode](glossary:workmode) that works with files on your computer.
## How to Do It

1. Open Cowork or Code in the project folder and enter the prompt, then below it add notes not in the folder. AI reviews the materials and asks about anything unclear.
2. Answer the questions. AI saves `README.md` and adds a rule to `AGENTS.md` to read and maintain it. Check especially if it correctly identified the valid document.
3. In a new chat in the same folder, ask which document is being used and what the next step is. A good answer names the document README marks as valid.
## AI Exercise

Insert this [prompt](glossary:prompt) into AI in Cowork or Code mode, opened in your folder:

Write a README for this project: an intro page from which a colleague or a new chat immediately understands what the project is about and how to proceed. If you don’t have access to the project folder and can’t save files there yourself, tell me immediately so I can switch to Cowork or Code.

Review all materials in the project folder and the notes I provide below this prompt. If a README or other intro page already exists in the folder, update it instead of creating a new one.

Write the README to fit on one page, including these sections:
- What it is: project goal, for whom, and deadline.
- Where we are: what’s done, what’s not, next step and who will do it.
- What’s out of scope: what we excluded or postponed.
- Which documents are valid: for each important file, a link, its purpose, and whether it’s valid, just a template, or no longer valid.
- Where things are: a brief overview of folders and files.
- Updated: today’s date.

Do not rewrite document contents, just link to them. If two documents conflict or you can’t tell which is valid, ask me. Do not decide based on the word “final” or date. Ask all your questions at once, only those not answered by the materials. After my answers, save the page as README.md in the project’s root folder.

Finally, add this rule to AGENTS.md in the project folder: “Before working on the project, read README.md. If the goal, status, next step, or valid document changes, update README.md.” If AGENTS.md doesn’t exist, create it. Make sure you read it at the start of each work session; in Cowork, add it to the folder instructions.

## In Your Tool

### Microsoft Copilot
You’ll find Cowork next to the Chat toggle; if it’s missing, ask your IT admin. It only sees files on OneDrive and SharePoint, so add to the end of the prompt: “Work in the project folder on OneDrive, keep README as a Word document, and write the rule for Customize, Preferences.” In step 3, specify where the project is located in a new task. Scheduled tasks appear on the Automations page.

### ChatGPT
In the ChatGPT desktop app, switch to Codex, choose open a folder, and select the project folder. Codex reads `AGENTS.md` automatically and creates a scheduled task when asked; find it under Scheduled. If you don’t see Codex, your admin probably disabled it—ask them to enable it.

### Claude
In the Claude desktop app, open Cowork and select the project folder, or open it in Claude Code; both require paid plans. Cowork writes the rule into folder instructions, Claude Code reads `AGENTS.md`. AI creates the scheduled task when requested; find it in the left panel under Scheduled.

### Gemini
Gemini does not save to folders on your computer. Attach documents via Add from Drive, add to the end of the prompt: “You don’t have access to the folder, don’t switch me, work with attached documents only.” Save README via Share & export, Export to Docs. Do step 3 in Gem (Gems, New Gem) with README in Knowledge and instruction “Answer according to README”; share it with your colleague via Share.
## What Is README

[README](glossary:readme) means “read me” in English. It’s the intro file a person opens first in a project folder. On one page it explains what the project is about, its status, next step, which document is valid, and where to find things. It also helps you when you return to the project after two weeks.

The `.md` extension means it’s written in [Markdown](glossary:markdown): plain text where lines starting with `#` mark headings. Open it in any text editor, for example Notepad on Windows, and AI can read and edit it without conversion.

`AGENTS.md` is a file with rules for AI in the same folder. Many tools in Code mode read it automatically at the start of each session, so you don’t have to remind AI to read README. Where the tool can’t do this, AI saves the rule in its settings or tells you where to put it.

README only links to documents and states their purpose; if AI can’t tell which document is valid from content, it asks you. For Marek, the correct answer in step 3 would name `catering_final_2.docx`.

A regular chat can’t save README to the folder because it can’t see it. If you don’t have another AI yet, at least create a [project in chat](card:asistent) or see how to [switch to Cowork or Code](card:when-chat-is-not-enough).

The word `final` in a filename or the latest date does not prove a document is valid.
## Keep README Up to Date

A scheduled task updates README weekly based on meetings and emails. The rule in `AGENTS.md` covers work you do with AI in the project folder. But project status also changes elsewhere, like meetings or emails. Give AI in Cowork or Code this instruction and ask it to create a scheduled task:

```text
Every Friday at 3:00 PM, review the project folder and emails and meetings from this week related to the project that you have access to. If the status, next step, or valid document changed, update README.md: change only affected lines and the update date. If nothing changed, leave README as is. At the end, tell me what you changed.
```

If the task works with files on your computer, it runs only when the computer is on and the app is open.
## Example

Lucie is selecting a new cleaning supplier for branches in Brno and Zlín. AI reviews the folder and asks two questions: which of two offers from Čistota is valid and whether Blesk is still in the running. Then it writes:

```text
# Cleaning Supplier Selection
Updated: 10/9/2026

### What It Is
New cleaning supplier for Brno and Zlín branches starting 1/1/2027.

### Where We Are
Building inspections done, two companies remain in selection.
Next step: Lucie will arrange meetings with both companies by 10/20.

### Out of Scope
Window cleaning remains with the current company.

### Valid Documents
- nabidka_cistota_v2.pdf: valid, price after inspection.
- nabidka_cistota.pdf: invalid, replaced by v2.
- nabidka_uklidplus.pdf: valid.
- porovnani-cen.xlsx: valid, comparison of both offers.
- nabidka_blesk.pdf: invalid, Blesk dropped from selection.

### Where Things Are
Offers in folder nabidky, photos and inspection notes in folder prohlidky.
```

A week later, Lucie asks in a new chat which Čistota price to use in the comparison. A good answer uses the price from `nabidka_cistota_v2.pdf` and does not mention Blesk. If AI picks the old offer, tell it to correct the README line for that document.
## If You Get Stuck

- **AI claims it saved README but it’s not in the folder:** you’re probably working in a regular chat that can’t modify files. Switch to [Cowork or Code](card:when-chat-is-not-enough) and open the project folder there.
- **You don’t know which document is valid:** ask AI to show differences between documents. You or the project lead decide, and AI records it.
- **README is too long or copies documents:** ask AI to shorten it to one page and leave only links instead of document contents.
- **New chat answers based on an old document:** open chat in the same project folder and check that `README.md` and `AGENTS.md` are there. Then ask AI to read README.
## What You’ll Have

You have `README.md` that anyone can use to continue the project without further questions. `AGENTS.md` contains a rule so AI reads it before work and updates it after changes. In a new chat, you verified AI finds the valid document and knows the next step based on README.
## What’s Next

To keep all projects this organized at once, create [PACT](card:pact-workspace). To set up other tasks AI does regularly on its own, see [scheduled task](card:recurring-ai-task).
## Markdown

**What it is:** A simple plain text format where headings, lists, links, and other structure are written using a few common characters. Files typically use the `.md` extension.

**What it is not:** It is not a programming language nor a format intended solely for developers.

**Why a student needs it:** It remains easily readable and editable by both humans and AI, and can be transferred between different tools.

## Prompt

**What it is:** An instruction for a specific interaction with AI.

**What it is not:** It is not the same as long-term context, a stored assistant, or an agent.

**Why the student needs it:** It triggers the exercise and guides its progress; it is not the main learning content.

## README / Start Here

**What it is:** A brief introductory file or page that explains what is in the project, what is current, where to find important resources, and how a person or AI should work with them.

**What it is not:** It is not a copy of all documents nor an additional lengthy manual for the project.

**Why a student needs it:** It helps people and AI quickly determine where to start and which materials are current and authoritative.

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
