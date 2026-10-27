# Set Up Custom Instructions: Permanent Guidelines for Every Chat

AI creates permanent instructions from five of your answers, so every new chat responds exactly as you want.

## Set Up Custom Instructions: Permanent Guidelines for Every Chat

**Difficulty: easy.**\
**Time: about 15 minutes** with one real task for verification.
## What It’s For

On Monday, you want five tasks for the team from meeting notes, but AI buries them by the third paragraph. You add “no introduction, just bullet points, I’m a project coordinator” and on Wednesday start a new chat and write the same again.

Custom Instructions are your own guidelines in AI settings that AI receives in every new chat, so you only write once who you are and how it should respond.
## What to Prepare

- The AI you use at work,
- instructions you keep repeating to AI, like “be concise” or “no introduction,”
- one task from this week, for example meeting notes; you will verify instructions on it.
## How to Do It

1. Open a new chat and insert the prompt from the AI exercise. AI will ask what it doesn’t know about you and write Custom Instructions.
2. If something doesn’t fit, tell AI, for example that you prefer formal address. Paste the final version into the custom instructions field; where to find it is shown in the “In your tool” section.
3. In a new chat, enter the prepared task without explaining yourself. If the answer is off, tell AI what to do differently next time, and it will remember.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

Write me Custom Instructions: short guidelines that I will put into this AI tool’s settings so every new chat knows who I am and how to respond to me.

You need these five things from me:
1. My role and responsibilities.
2. The field and who I work for.
3. What AI most often helps me with at work.
4. How long and in what form I want responses.
5. What I don’t want in responses.

If you know anything about me from memory or previous chats, first write what you know and only ask about what’s missing. Ask about all missing things at once; I will answer briefly. If I already have some instructions in settings, use them as a base.

Write the instructions in two parts with headings “Who I am:” and “How to respond to me:”. Put role, field, who I work for, and what AI helps me with in the first part; language, length, form of responses, and what I don’t want in the second.

Write each instruction as a single sentence that can be checked if the answer follows it. Rewrite general advice like “be concise” into a specific instruction, e.g., “answer with no more than five bullet points.” Don’t include today’s dates, numbers, client names, or project details in the instructions. Keep the entire instructions under 1,500 characters so they fit even in free ChatGPT.

At the end of the “How to respond to me:” part, add the instruction: “If I correct you and the correction should apply next time, save it to memory. If you don’t have memory enabled, write me a sentence to add to Custom Instructions.”

Finally, show me the instructions in one block for copying and ask what doesn’t fit. Incorporate corrections and show me the full revised version.

## In Your Tool

### Microsoft Copilot
Find custom instructions in Copilot Chat at `copilot.cloud.microsoft` under the three dots top right: Settings and more, Chat settings, Personalization, Custom Instructions. Paste instructions via Edit instructions and Save instructions. If you tell Copilot “remember this…”, it saves it to memory. If the field is missing, paste instructions into Notebook instructions (Notebooks, New notebook).

### ChatGPT
In your account menu (click your name), open Settings, then Personalization, and paste instructions into the Custom Instructions field; the Enable customization toggle must be on. In the Czech version, items are in the same place but in Czech. Paid and business plans allow 5,000 characters, free accounts 1,500. Memory is under Settings, Personalization, Memory.

### Claude
Click your initials bottom left, then Settings. The field is called Instructions for Claude and applies to all conversations. Memory is in Settings under Memory; in business plans Team and Enterprise, the organization owner enables it.

### Gemini
You insert permanent instructions into the Gem robot in Gemini because the work account has neither custom instructions nor memory: at `gemini.google.com` open Robots Gem, New Gem, paste instructions, and Save. Open new chats in this Gem. Add the sentence AI gives you for Custom Instructions into the Gem’s instructions under My Robots Gem.
## What Are Custom Instructions

Your tool uses Custom Instructions in every new chat. AI knows them even if you don’t mention them in chat, and the prompt from this exercise is based on them if you already have some. They apply until you change them in settings.

Most AI tools also have memory where AI saves things from your chats and updates them continuously. It’s useful for corrections collected during work. What should always apply, transfer occasionally to Custom Instructions because those don’t change by themselves.

Only include in instructions what applies in every chat. Give today’s date, number, or client name directly in the chat with the task; otherwise, AI might pull them into responses where they don’t belong.
## Custom Instructions Template

The template adds rules to instructions that AI uses to search the web for current info and tells you when it’s unsure.

You don’t have to fill anything; AI fills the square brackets from what it knows about you and asks about what it doesn’t. It’s best to insert it right after the exercise in the same chat before saving instructions to settings. If you already have instructions saved, open a new chat; AI sees them there. In both cases, insert this prompt:

```text
Add the rules from this template to my Custom Instructions. Fill the square brackets based on what you know about me and ask me about what you don’t. Don’t duplicate rules I already have, and if a template rule conflicts with mine, keep mine. Leave the instruction about saving corrections to memory at the end. Keep the entire instructions under 1,500 characters and show me in one block for copying.

Who I am:
[role] at [company name], mainly handling [two to three agendas].

How to respond to me:
- Respond in Czech and [use informal or formal address].
- Start with the result or answer, put details after. No introduction or summary at the end.
- Explain any term I might not know in one sentence.
- For current matters like regulations, prices, or industry news, search the web and cite sources.
- If unsure, say so and specify what needs verification. Don’t make up numbers.
- Never send an email or message on my behalf without my explicit confirmation.
- Add one sentence under longer documents or tables about what is still missing.
```

Paste the entire block AI returns into the custom instructions field. If you already have instructions there, replace them.

The email line is a safeguard: AI with access to your mail can send emails, and this line ensures it won’t do so without your confirmation. If it doesn’t have access, the line doesn’t hurt.

If AI doesn’t cite sources for current questions, tell it “search the web for this.” If it still doesn’t search, enable web search; in some tools it’s under the + button next to the message field, elsewhere in settings. In business accounts, the admin may disable it.
## Let AI Remember Corrections Itself

The instruction at the end of the guidelines ensures that when you correct AI and the correction should apply next time, AI saves it to memory. If you have memory enabled, you don’t need to check. In business accounts, the admin controls it, and if AI lacks memory, it will write a sentence for you to add to Custom Instructions instead.

After a few months, many corrections accumulate in memory, so it’s worth transferring them to instructions. Open a new chat and write:

```text
Take my current Custom Instructions and add what you saved about me in memory that applies in every chat. Merge instructions that say the same and remove those no longer relevant. Keep the result under 1,500 characters and show me what you changed.
```

Then paste the new version into settings instead of the old one.
## Example

Jana coordinates projects at a company implementing warehouse systems for e-shops. On Monday, October 12, 2026, she inserts the prompt into the AI she uses at work. It remembers from previous chats that Jana coordinates projects and only asks about response length and what she doesn’t want in answers. Jana replies “brief, always include who and by when for tasks, and don’t explain project terms.” AI writes:

```text
Who I am:
I coordinate projects implementing warehouse systems for e-shops. I monitor deadlines, suppliers, and meetings. AI most often helps me with meeting notes, emails to suppliers, and reports for management.

How to respond to me:
- Write in Czech and start directly with the result, no introduction or summary at the end.
- Answer with no more than five bullet points or five sentences unless I want more.
- Write tasks as: who, what, by when.
- Don’t explain project management terms; I know them.
- If I correct you and the correction should apply next time, save it to memory. If you don’t have memory enabled, write me a sentence to add to Custom Instructions.
```

Jana inserts the instructions into settings. On Tuesday, she opens a new chat, pastes meeting notes with a supplier, and writes only “make a team report from this.” She gets five tasks in the form who, what, by when, with no introduction. The start date November 2 is taken from Tuesday’s notes; no date is in instructions, so it won’t appear in other reports a month later. But “who” only has initials, so Jana writes “write full names.” AI saves this to memory and by Thursday’s report has full names.
## If You Get Stuck

- **AI answers the same as before:** open a new chat and check in settings that instructions saved. In ChatGPT, Enable customization must be on; in Gemini, open a new chat directly in the Gem robot.
- **Custom instructions field missing in business account:** the admin probably disabled the feature. Save instructions to a [project](card:asistent) where they apply to all chats within it.
- **Instructions don’t fit in the field:** tell AI: “Shorten instructions under 1,500 characters. Merge instructions that say the same and remove those that don’t affect the answer.”
- **AI follows instruction only sometimes:** the instruction is probably too general, like “be concise.” Ask AI to rewrite it as a specific instruction, e.g., “no more than five bullet points,” and paste the new version into settings.
## What You’ll Have Done

Your AI settings will have Custom Instructions about your work and the kind of answers you want. In a new chat on a real task, you saw AI respond in the length and form you set. When you correct it next time, it saves the correction to memory or writes a sentence for you to add to instructions.
## What’s Next

The style AI uses to write emails and posts for you won’t fit in a few lines of instructions. AI will write it into a separate document according to the [Tone of voice](card:tone-of-voice) card. Instructions for one project or repeated work save to a [project](card:asistent). When working with AI in Cowork or Code mode, directly with a folder on your computer, let it take instructions into the `AGENTS.md` file according to the [Rules for AI in one file](card:agents-md) card.
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
