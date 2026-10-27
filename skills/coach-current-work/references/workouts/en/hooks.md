# Set Up a Hook: Document Review AI Won't Miss

Before AI reports completion, it runs every document it wrote in the folder through your review.

## Set Up a Hook: Document Review AI Won't Miss

**Difficulty: Medium.**\
**Time: about 15 minutes** with a folder where AI writes documents.
## What It’s For

A customer received an offer on Tuesday that still contained a line with your margin from the internal calculation. The instruction “do not include margin in the offer” was in AI’s rules, but it overlooked it during extended work.

A hook is a step the tool triggers automatically every time AI finishes a task, so the check runs even if AI forgets the rule.
## What to Prepare

- a folder where AI writes documents directly into files, for example Word offers,
- rules that AI occasionally violates in those documents,
- AI in [Code mode](glossary:workmode) working with files on your computer.
## How to Do It

1. Select with AI the rules the hook should monitor. Insert the prompt into AI in Code mode opened in the folder with documents; when the tool asks for permission, grant it.
2. Review what the check found in older documents; AI just reads them. Tell AI if the check reports unnecessary issues, and it will adjust it.
3. For the next work AI does in the folder, verify that a line with the check result appears at the end. AI will fix any issues found before telling you it’s done.

Checks should include rules that can be verified precisely: a word that must not appear in the document or a piece of data that must not be missing.
## AI Exercise

Insert this [prompt](glossary:prompt) into AI in Code mode opened in your folder:

Set up a hook in this folder: a document check that this tool will run automatically every time you finish work. If hooks don’t run here, for example in Cowork or regular chat, tell me and don’t set anything up.

First, propose rules for the check. Look into AGENTS.md if it exists in the folder, and into the documents here, and suggest up to five rules that can be verified precisely: a word or data that must not be in or must not be missing from the document. For example, “The offer contains neither margin nor purchase price.” Ask me which ones I want and add those I tell you.

Convert the approved rules into a check script that can read Word documents and runs without installing additional programs. Save the script in a subfolder named kontrola and the rules in a separate file next to it, so new rules don’t require new hook approval. Add to AGENTS.md where the check is located so you can edit it in the next chat; if AGENTS.md doesn’t exist, create it.

Then run the check once on all documents already in the folder and show me what it found. Do not fix anything in those, as they may have already been sent to customers. Only then enable the hook that monitors documents created or changed from that moment on.

Set the hook to run the check every time you finish work. If the check finds something, return the work to you so you can fix the error before telling me it’s done. If the error persists after your fix, allow the check to let you proceed. Whenever the hook checks a document, it should output a line with the result, for example, “Check: 2 documents OK,” and if errors remain, what they are. If I need to approve the hook or folder in the tool, tell me exactly where. If the hook only becomes active in a new chat, tell me.

If I later tell you a new rule, add it to the check.

## In Your Tool

### Microsoft Copilot
Microsoft does not state that Copilot can run hooks. Save the check rules in Custom instructions (Settings and more, Chat settings, Personalization) and at the end of work write “Check the document according to my rules.” You set the hook in a tool with Code mode, for example Claude Code or Codex in the ChatGPT app; ask your IT administrator for it.

### ChatGPT
Codex sets the hook: in the ChatGPT desktop app, switch to Codex, choose open a folder, and insert the prompt. Codex runs the hook after you mark the folder as trusted and approve the hook; AI will tell you where. In regular ChatGPT chat, check rules belong in Custom instructions (Settings, Personalization).

### Claude
Claude Code sets the hook: in the Claude desktop app, switch to Code, select the folder, and insert the prompt; AI writes the hook into settings automatically. Cowork runs hooks only as part of a plugin, so do the exercise in Claude Code. In regular Claude chat, check rules belong in project instructions (Set project instructions).

### Gemini
The Gemini app does not work with folders on your computer, so you cannot set a hook there. Save the check rules as a skill (write “Save this as a skill”) and request the check at the end of work. Set the hook in a tool with Code mode, for example Claude Code or Codex in the ChatGPT app; ask your IT administrator.
## What Is a Hook

A hook is a step the AI tool triggers automatically at a specific point in work, for example at the start or when AI finishes. A rule in `AGENTS.md`, the file with AI instructions in your folder, is read by AI but can be overlooked during extended work. A hook does not depend on AI’s attention.

AI writes the check as a script, a short program that scans documents and reports inconsistencies. The script recognizes only things that can be verified precisely, such as forbidden words or missing data. It cannot verify if numbers match source data; that is for [result verification](card:kontrola-vysledku).

The hook is saved in the tool’s settings in this folder, so it applies to every AI task there. Documents you write yourself are checked when you tell AI “Check the folder.” Regular chat or Cowork do not set hooks automatically; how to switch to Code mode is shown on the [Chat, Cowork or Code card](card:when-chat-is-not-enough). If you don’t have Code mode, save the check rules in your tool’s instructions and request the check at the end of work as shown in the In Your Tool section.
## Example

Tereza prepares corporate event offers at a catering company. On Monday, October 19, she sets a hook in the `Offers 2026` folder with two rules: the offer contains neither margin nor purchase price, and the offer states its validity period. The first check runs on 23 documents and outputs:

```text
Check: 23 documents, 3 findings
- Offer Pekárna Novák.docx: missing validity period.
- Offer Sklárny Horák.docx: missing validity period.
- Offer Autoservis Dvořák.docx: price table contains a line “Margin 18 %.”
```

On Wednesday, October 21, Tereza inputs an offer for a Christmas party for 80 people from a customer email and internal calculation. AI copies the purchase price column into the table. The check finds it at the end of work and returns the task to AI, which deletes the column. Tereza then receives the finished offer with a line below it: “Check: 1 document OK.”
## If You Get Stuck

- **AI says it can’t set the hook:** you are probably working in regular chat or Cowork. Switch to [Code mode](card:when-chat-is-not-enough) and open the folder there.
- **The result line doesn’t appear or the hook reports an error:** tell AI: “The hook did not run correctly. Find out why and fix it; if I need to approve it, tell me where.”
- **The check reports errors that aren’t errors:** the rule is too broad, for example the word “margin” in a sentence about customer benefits or a validity date in a document that isn’t an offer. Tell AI to narrow the check for that rule.
- **The check doesn’t monitor documents you write yourself:** the hook runs when AI finishes work. Tell AI “Check the folder” to include those.
## What Will Be Ready

You have a hook in the folder that reviews new and changed documents after every AI task according to your rules, and you know what the check found in older documents. For the next task, you will see a line with the check result, and AI will fix any errors found before showing you the finished work. AI will add new rules to the check when you tell it.
## What’s Next

Numbers and claims that the script cannot verify precisely should be compared by AI with source data in [result verification](card:kontrola-vysledku). If you want to scan the entire folder even without work in it, for example every Monday morning, set up a [scheduled task](card:recurring-ai-task).
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
