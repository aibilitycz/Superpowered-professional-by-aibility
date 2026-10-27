# Run Text Through Anti-Slop: Make It Sound Human, Not AI

AI identifies phrases and promises in the text that reveal AI authorship, rewrites them, and then monitors future texts automatically.

## Run Text Through Anti-Slop: Make It Sound Human, Not AI

**Difficulty: easy.**\
**Time: about 15 minutes** with one text you want to send.
## What It’s For

On Thursday, you send Ms. Horáková from purchasing an offer for servicing company vans. The introduction was written by AI and starts with a phrase about a reliable partner in challenging times, just like four other offers on her desk. It also promises repair within 24 hours, even though no one in the company promised that.

Generic phrases and unconfirmed promises disappear when AI compares them with the inquiry and price list and replaces them with what is actually stated there.
## What to Prepare

- The text you want to send, written fully or partly by AI,
- Supporting materials it’s based on: inquiry, price list, or call notes,
- The AI you use at work, or AI in [Cowork or Code mode](glossary:workmode).
## How to Do It

1. Insert the prompt and below the line “Text:” add the text or the file name in the folder; attach supporting materials in chat. AI will return findings and the rewritten text, omitting file parts in chat.
2. Tell AI which corrections you don’t want and add `[FILL IN]` placeholders or let AI strike them out. AI will complete the text, save the list of phrases with the rule, and tell you where.
3. In a new chat, have AI write a different text, for example a customer reply. Phrases from the list should not appear there.

Only phrases that might appear in other texts belong on the list.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

Check the text at the end of this message before I send it. It contains either a file name in the folder or the full text. Find places where a reader would recognize it was written by AI and rewrite them to sound like a person familiar with the matter.

Run the text through four filters:
- Specificity: statements and adjectives without proof, like “reliable partner” or “significant savings.” Replace them with numbers, names, dates, or situations from the supporting materials.
- Patterns: overused phrases (“in today’s fast-paced world,” “we’ll take you to the next level,” “don’t hesitate to contact us”), contrasts like “it’s not just X but Y,” and flashy conclusions that say nothing.
- Rhythm: three or more sentences of equal length in a row, chains of short sentences, and automatic triplets of words.
- Format: long dashes, emojis instead of bullet points, and Markdown asterisks in text where they don’t create bold, such as in emails.
At the end, ask: could this text appear on any company’s website? If yes, rewrite it more specifically.

Do not invent numbers, dates, names, or promises. Compare them with the materials in the folder or chat. Mark what’s missing with [FILL IN] and ask me.

Return findings first: a quote from the text, the violated filter, and a better version. Below that, provide the entire rewritten text. I will tell you which corrections I don’t want and add what’s missing. Save the final text in a new file next to the original and tell me its name. If I pasted the text in chat, return it in full.

Then save up to five phrases from the findings that are likely to appear in other texts into the file anti-slop.md in your working folder. For each phrase, write what to replace it with and briefly list the four filters below. If the file exists, append only new phrases. Add a rule to AGENTS.md in the same folder: “Before showing me any text that will go out under my name, check it against anti-slop.md.” If AGENTS.md doesn’t exist, create it. Make sure you read it at the start of every work session in this tool; in Cowork, add it to the folder instructions. If you work in a regular chat without a folder, don’t create files and save only the phrase list with the rule in your memory: “Before showing me any text that will go out under my name, check it against this list.” Finally, tell me where you saved the list and rule.

Text:

## In Your Tool

### Microsoft Copilot
Paste the text into Copilot Chat and attach supporting materials via + next to the message field.
Saving to Copilot memory is confirmed by the message Memory updated; overview is in settings under Chat settings › Personalization › Saved memories. Without memory, write “List as text” and paste it into Custom instructions in the same place. Copilot has skills in Cowork mode (Customize › Skills) if enabled by your company.

### ChatGPT
In regular chat, ChatGPT saves the list in memory (settings, Personalization › Memory); without memory, paste it into Custom Instructions in the same place. Codex works with folders in the ChatGPT desktop app: choose open a folder and it saves anti-slop.md and the rule in AGENTS.md automatically. ChatGPT has skills in Business, Enterprise, and Edu plans.

### Claude
In regular chat, Claude saves the list with the rule in memory. In Cowork, select the folder with the text when assigning a task and AI records the link to AGENTS.md in the folder instructions; Claude Code reads AGENTS.md itself. Claude supports skills in chat, Cowork, and Claude Code.

### Gemini
The permanent place for the list is in Gemini Gem, because the work account has no memory.
At the end, write “List only phrases with the rule” and save it via Share & export › Export to Docs. Then Gems › New Gem: in instructions write “Check every text against the list in the attached document,” attach the document via Knowledge › Add from Drive. Do step 3 and other texts in this Gem.
## What Is Anti-Slop

Anti-slop is a check where AI finds sentences typical for AI in the text and rewrites them into specific sentences from your materials. Slop is an English slang for garbage; on the internet, it refers to texts AI produces carelessly that could appear on any company’s website. AI does not invent numbers or terms; what it doesn’t find in the materials, it marks and asks you.

The check is based on four filters from the prompt. Specificity monitors sentences that could be written about any company and replaces them with numbers, names, and situations from your materials. Patterns are phrases AI uses repeatedly, like intros about challenging times or conclusions urging you to contact them. Rhythm reveals AI when it writes several equally long sentences in a row or always lists things in threes, like “fast, cheap, and reliable.” Format monitors long dashes, which people rarely type on keyboards, and emojis instead of bullet points.

`anti-slop.md` is a plain text file in the folder with the text. It contains a list of phrases you want to avoid and what to replace them with. The `.md` extension means it’s written in [Markdown](glossary:markdown). `AGENTS.md` is a file with rules for AI in the same folder. AI in Cowork or Code mode reads it at the start of every work session, so you don’t have to assign the check repeatedly; where the tool needs setup, AI handles it per the prompt. In regular chat, AI saves the list with the rule in memory; where the tool lacks memory, see the “In Your Tool” section for alternatives.
## Automate the Check

Turn the phrase list into a [skill](glossary:skill), a saved instruction, so the check runs in all your projects, not just the folder with `AGENTS.md`. AI will open it automatically whenever it writes text for people under your name. Where your tool supports skills, see the In Your Tool block. If you work only in regular chat and AI has the list in memory, you don’t need this step. In the folder with `anti-slop.md`, just enter:

```text
Create a skill named anti-slop from the phrase list in anti-slop.md; if you don’t see the file, use the list from your memory. It should run every time you write or edit text that will go out under my name: email, offer, post, or website text. The skill runs the text through the four filters from the file, fixes phrases from the list, and does not invent numbers or promises. If I tell you about another phrase I don’t want, add it to the skill. Save the skill so it works in all my projects; if I must save or enable it myself, tell me exactly where to click.
```
## Example

Martin Dvořák from the company vehicle service sends an offer to Ms. Horáková from a logistics company on October 15, 2026. The inquiry states the company has 38 vans in Brno and Olomouc and currently waits up to a week for repairs. The introduction was written by AI:

```text
In today’s fast-paced world, a reliable partner for fleet management is key. We offer comprehensive service, quick response, and individual approach. We can complete repairs within 24 hours. Don’t hesitate to contact us.
```

AI returns four findings. It replaces the first sentence with a situation from the inquiry: “You wrote that you currently wait up to a week for the repair of one of your 38 vans.” Instead of the entire second sentence, it lists what the service includes according to the price list: regular inspections and a replacement vehicle during repair. The 24-hour repair promise is marked `[FILL IN]` because it’s not in the materials. The conclusion is changed to one next step: “Please tell me which van we should inspect first.”

Martin confirms with the workshop foreman that a standard repair takes up to two working days. AI adds this to the text and records in `anti-slop.md`:

```text
### Phrases I Don’t Want
- “in today’s fast-paced world”: start with the customer’s situation from the inquiry
- “comprehensive service”: list what the service includes
- “don’t hesitate to contact us”: write one specific next step
```

On Monday, October 19, Martin has AI reply to another customer in the same folder. The reply ends with a question about which day suits the customer for the first inspection, and phrases from the list do not appear.
## If You Get Stuck

- **AI fixes only a few words and the text still sounds the same:** tell it to rewrite the entire paragraph starting with the reader’s situation, and attach the supporting material it should use, like the inquiry or call notes.
- **There are many `[FILL IN]` in the text:** AI has no source for numbers. Attach the price list, contract, or inquiry. Let AI strike out statements you cannot confirm.
- **AI says it saved `anti-slop.md` but it’s not in the folder:** you’re probably working in regular chat, which can’t modify files. Switch to [Cowork or Code](card:when-chat-is-not-enough), or ask AI to save the list in memory.
- **New chat repeats phrases from the list:** in Cowork or Code, open the chat in the same folder and tell AI to read `AGENTS.md` and ensure it reads it at the start of every work session. In regular chat, return to the chat where the check ran and tell AI to save the phrase list with the rule in memory. Memory must be enabled in settings.
## What You’ll Have

You have text ready to send: free of AI-typical phrases and with numbers and promises you confirmed. The folder contains `anti-slop.md` with the list of phrases you no longer want and `AGENTS.md` with the rule by which AI checks every new text automatically; in regular chat, AI has the list and rule in memory or in the tool’s custom instructions. In a new chat, you verified AI really uses the rule.
## What’s Next

Check facts, numbers, and sources in reports or presentations with the card [Verify AI Output](card:kontrola-vysledku). If AI should write directly in your style, save it in [your Custom Instructions](card:custom-instructions).
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
