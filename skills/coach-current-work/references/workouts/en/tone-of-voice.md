# Save Your Tone of Voice: Your Writing Style in a File

AI extracts your writing style from your best texts, so the first draft of every email sounds like you.

## Save Your Tone of Voice: Your Writing Style in a File

**Difficulty: easy.**\
**Time: about 15 minutes** with prepared texts.
## What It’s Good For

On Thursday, you need to tell a client that the handover is postponed by a week. AI can write the email in a minute, but it starts with a paragraph about how much you value the cooperation and ends with "Feel free to contact me." That’s not how you write, so you spend twenty minutes rewriting the email. A week later, it happens again in another chat.

When AI gets a file with your style and examples, you change one word in the email instead of rewriting for twenty minutes.
## What to Prepare

- 3 to 5 of your own texts you’re happy with: emails, messages, posts,
- one text you need to write this week, for example an email to a client,
- AI you use at work, or AI in [Cowork or Code mode](glossary:workmode).
## How to Do It

1. Insert the prompt and add your texts, or let AI find them in your mail. AI will write your style into `tone-of-voice.md`: it will save it in the folder or offer it for download in chat.
2. Tell AI what doesn’t fit, for example that you use formal address. AI will record corrections; when the file is offered for download, get the latest version.
3. In a new chat, write the email without the file, e.g. "Write to the client that the handover is postponed by a week." Then attach the file: "Rewrite it according to this file."

Client names do not belong in the rules.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

Write my tone of voice: a file that any AI will use to write like me.

Go through the texts I attach or find in the folder you work in. All are from me and I like them. If I don’t attach any and you have access to my mail, find five longer sent emails from me in the last month and show me which you selected. If there are fewer than three texts, tell me and ask for more.

Write my style into the file tone-of-voice.md in these sections:

### In Brief
Three sentences about how I sound and who I write to most often.

### Sentences and Paragraphs
How long my sentences and paragraphs are, how I start and end texts.

### Addressing
Who I use informal address with, who I use formal address with, and how I greet.

### Words
Words and phrases I use. Below them, words and phrases I never write.

### By Text Type
What changes in emails, messages to colleagues, and posts. Skip text types missing from examples.

### Examples
Three short excerpts from my texts that best show my style.

### Check
One question you ask yourself about each text before giving it to me.

Base each rule on a specific sentence from my texts. Consider a rule only if it repeats in at least two texts. Describe how I write; do not guess my personality. Do not transfer names, numbers, or dates from texts into rules; replace them in examples with general words like [client] or [date].

If you work in a folder, save tone-of-voice.md there and add to AGENTS.md in the same folder the rule: "When you write emails, messages, or other texts for me, follow tone-of-voice.md." If AGENTS.md doesn’t exist, create it. Make sure you read AGENTS.md at the start of each work session in this tool; in Cowork, add this to the folder instructions. If you don’t have folder access, offer me tone-of-voice.md for download.

Finally, show me the entire file and ask what doesn’t fit. Record corrections in the file; if you work without a folder, offer me the corrected version for download.

## In Your Tool

### Microsoft Copilot
Copilot Chat with a license sees work mail and finds sent emails itself. It does not offer a file for download, so do step 3 like this: in a new chat, have it write the email without style, then insert the rules into Custom instructions (Chat settings › Personalization) and give the same prompt in another new chat. If the rules don’t fit, have AI shorten them.

### ChatGPT
With Gmail or Outlook connected under Plugins, ChatGPT finds texts in mail itself. It offers the file for download, and in step 3 you attach it via +. To have it in every chat, upload it to a project (New project, Add source) and write in its chats. ChatGPT supports skills in Business, Enterprise, Edu, and Codex plans.

### Claude
With mail connected in Customize, Connectors, Claude finds texts itself. It creates the file for download; to have it in every chat, upload it to a project (New Project). In Cowork, AI saves it in the folder and writes a link to `AGENTS.md` in the folder instructions. Claude supports skills in chat, Cowork, and Claude Code; in Team and Enterprise plans, admins publish it company-wide.

### Gemini
Start your message with @Gmail and Gemini finds sent emails itself if you have Keep Activity and smart Gmail features enabled. After corrections, write "Save the latest version to my Google Drive" and attach it in step 3 via Add from Drive. Permanently create a Gem (Gems › New Gem) with the file in Knowledge; in Gmail, put rules into Ask Gemini › Settings › Personalization.
## What Is Tone of Voice

Tone of voice is the English term for the style a person or company writes in; in Czech it translates as "tón hlasu." In writing, it’s the habits that let people recognize a text is from you: how long your sentences are, who you address informally or formally, how quickly you get to the point, and how you end an email. You can use the same process to write the style of a director you write posts for or the style of the whole company.

`tone-of-voice.md` is a plain text file you can open in Notepad. The `.md` extension means it’s written in [Markdown](glossary:markdown); hashes `###` mark headings. Any AI that can accept attachments can read it, so you can use it in any tool and take it with you when you switch tools. You can also insert it into permanent instructions in tool settings, as shown on the card [Set Up Custom Instructions](card:custom-instructions).

`AGENTS.md` is a file with rules for AI in a folder. AI in Cowork or Code mode reads it at the start of each work session in that folder and sets up what the tool needs according to the prompt. Then you don’t have to attach the style file every time.
## Let AI Write in Your Style Everywhere

If you don’t want to attach the file every time, turn `tone-of-voice.md` into a [skill](glossary:skill): a saved guide AI opens automatically whenever it writes texts for you to send to people. The rule in `AGENTS.md` applies only to work in the folder. Where your tool supports skills, see the "In Your Tool" section. Tell AI:

```text
Make tone-of-voice.md a skill you use every time you write texts for me to send to people. Save it where this tool loads skills and verify that new chats see it too. If you can’t save it, tell me exactly where to click.
```

A company tone only needs to be written once. In company plans, skills can be shared with colleagues so everyone who writes for the company has it.
## Example

Martin is a project manager at a construction company. On Monday, October 12, 2026, he gives AI four emails to suppliers and one Friday report to management in the work texts folder. AI writes into `tone-of-voice.md`, among other things:

```text
### In Brief
I write briefly and to the point. The first sentence states the situation or what I need. I use formal address with suppliers and management, informal with construction colleagues.

### Sentences and Paragraphs
Sentences usually have up to 15 words and paragraphs up to three sentences. I end with the next step and a date.

### Words
I use: "status," "I need from you," "by Friday."
I don’t use: "allow me," "following up on," "feel free to contact me."

### Check
Would I say this to the supplier on the phone?
```

On Thursday, October 15, he needs to write to the investor that the concrete pouring is postponed. In a new chat without the file, he gets an email starting "Allow me to inform you about the current development" and the new date appears only in the third paragraph. With the file, the email starts "Concrete pouring is postponed by a week, to Thursday, October 22" and ends with what Martin needs from the investor by Friday. Martin changes one word and sends the email.
## If You Get Stuck

- **Rules are general, e.g. "writes friendly":** tell AI: "For each rule, give a sentence from my texts it’s based on, and delete rules without a sentence."
- **Text with the file still doesn’t sound like you:** highlight the sentence you would write differently, add your version, and ask AI to add the difference to the `tone-of-voice.md` rules.
- **You don’t have enough good texts:** three are enough. Emails you rewrote with AI help too: give AI both versions and the difference will best show your style.
- **You can’t download the file or AI doesn’t use it in the folder:** in chat write "Give me `tone-of-voice.md` as a downloadable file." If chat can’t do it, switch to [Cowork or Code](card:when-chat-is-not-enough). There write "Read `AGENTS.md` and make sure you read it at the start of every work session yourself."
## What You’ll Have

You have the file `tone-of-voice.md` with your style rules and three examples. In Cowork or Code it’s in the folder and the rule in `AGENTS.md` makes AI follow it automatically; in chat you have it downloaded or saved in tool settings. In a new chat you saw the same email without and with the file, and the second sounded like you.
## What Next

If you write only in regular chat, upload the file to a [project with materials and instructions](card:asistent) and AI will have it in every chat of that project. Before sending texts out, review them with AI using the card [Check AI Output](card:kontrola-vysledku).
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
