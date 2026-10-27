# Check AI Output: Numbers and Claims Against Source Data

AI compares numbers and claims in the output with source data, corrects errors, and saves a rule to prevent recurrence.

## Check AI Output: Numbers and Claims Against Source Data

**Difficulty: easy.**\
**Time: approximately 15 minutes** with one AI output and its source data.
## What It’s For

On Tuesday morning, you send the director the monthly sales overview. The commentary on the numbers was written by AI from an export and states that sales in September rose by 12%, mainly thanks to Slovakia. At the meeting, the director asks where the 12% comes from, and you don’t know whether the AI saw the entire table or only its first sheet.

When AI looks up every number in the source data and explains why the error occurred, you can tell the director exactly where the 12% comes from.
## What to Prepare

- The AI output you want to send on: report, offer, minutes, or table,
- The source data it was based on: export, price list, contract, or meeting transcript,
- The AI you use at work, or AI in [Cowork or Code mode](glossary:workmode).
## How to Do It

1. Insert the prompt and under “Output:” and “Source data:” provide the text or file names; attach source data in chat. If the output was generated according to a [skill](glossary:skill) or a scheduled task, note that below the prompt.
2. AI returns findings, corrected output, and one key number with its exact location in the source. Open the source and verify the number yourself, since AI may overlook its own error again.
3. Specify which corrections you do not want and add `[VERIFY]` markers or leave them crossed out. AI will finalize the output, save a rule against the error’s cause, and tell you where.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

Check the output prepared by AI before I send it on. The output and the source data it was based on are at the end of the message: as text, as file names in a folder, or as attachments.

At the start, list which files you have loaded and whether fully: how many pages, sheets, or rows. If you don’t have a file fully, check what you have and tell me which sheets or pages I should send separately because the output is based on them. Then find every number, price, date, name, claim, and decision in the output that can be verified in the source data and compare them. Also check the reverse: what is in the source but missing in the output, such as an item from a request or a task from a meeting. Recalculate numbers derived by calculation and show the calculation. Do not correct style or tone, only verify content.

In your first reply return:
- a table of findings: citation from the output, what the source says and exactly where (file, page or sheet and row as I will see it when opening the file), correction and cause,
- the entire corrected output,
- one number on which the output relies most and exactly where I can find it in the source so I can verify it.

Choose the cause from these: missing source, unclear instructions, AI misunderstood the source, incomplete source loaded or chat too long, source is outdated, calculation error. If you are not sure about the cause, say it is an estimate. Do not guess what is not in the source: mark it [VERIFY] and ask me.

Then wait. I will tell you which corrections I do not want and add places with [VERIFY]. Then save the corrected version as a new file next to the original and tell me its name; in chat without a folder, return it fully.

Finally, write one sentence with a rule against the cause that may recur. If none can recur, use the rule “For every number, state the file and page or sheet it comes from.” If I tell you the output was generated according to a skill or scheduled task, correct the rule directly there. Otherwise, save it in the file AGENTS.md in the folder you work in; create it if it does not exist. Arrange for it to be read by you in this tool at the start of every work session; in Cowork write it into the folder instructions. In a regular chat without a folder, save the rule in memory, and if that is not possible, tell me exactly where to insert it in settings. Tell me where the rule is saved.

Output:
Source data:

## In Your Tool

### Microsoft Copilot
In Copilot Chat, attach up to 20 files via +, each up to 50 MB, including Excel and PDF. Copilot saves the rule in memory and shows the message Memory updated; overview is in settings under Chat settings › Personalization › Saved memories. A general rule for all chats belongs in Custom instructions at the same place.

### ChatGPT
In a regular chat, attach source data via + near the message field. ChatGPT saves the rule in memory found in settings under Personalization › Memory; a general rule for all chats belongs in Custom Instructions at the same place. Codex, the mode in the ChatGPT desktop app, works with folders and reads `AGENTS.md` and opens files directly in the folder.

### Claude
In a regular chat, Claude saves the rule in memory. In Cowork, select the folder with output and source data when assigning the task and AI records the link to `AGENTS.md` in the folder instructions; Claude Code reads `AGENTS.md` itself.

### Gemini
Attach source data via Add files from computer or Google Drive, up to 10 files at once up to 100 MB. Missing sheets from Google Sheets open and download via File › Download as CSV. Gemini app for work accounts has no memory or custom instructions, so save the entire prompt and rule as a skill (write “Save as skill”); for the next check just provide output and source data.
## Why AI Output Doesn’t Match

An error in output usually has one of six causes, each requiring a different rule to prevent recurrence:

| Cause | How to Recognize | Rule for Next Time |
|---|---|---|
| Missing source | AI guessed a number or promise not in source data | Mark what AI cannot find in source as `[VERIFY]`. |
| Unclear instructions | Prices are sometimes with VAT and sometimes without, or for different periods | Prices are always without VAT and for the entire calendar month. |
| AI misunderstood source | Output contains a decision that was only a proposal at the meeting, or numbers from a different column | Only decisions explicitly approved in the source count as decisions. |
| Incomplete source loaded | Missing last pages of PDF, second sheet of table, or start of long chat | AI writes at the start how many pages and sheets it loaded. |
| Source is outdated | Last year’s price list lies next to the new one in the folder and AI took the old one | Prices come only from the newest price list and its name is under the output. |
| Calculation error | Sum or percentage does not match when recalculated | AI recalculates every number and shows the calculation. |

`AGENTS.md` is a plain text file with AI rules in the folder you work in. AI in Cowork or Code mode reads it at the start of every session, so you don’t have to repeat the rule; where the tool needs to set it, AI does so according to the prompt. In a regular chat, AI saves the rule in memory.

A skill is a saved AI guide and a scheduled task is an assignment AI runs itself at a set time. If the error originated there, AI corrects the rule directly in them and the fix applies to every subsequent output.
## Let AI Check Itself

A general rule ensures AI compares every output with numbers against source data before showing it to you; the exercise rule monitors only one cause. AI writes it into `AGENTS.md` in the folder or into memory in a regular chat. Just enter:

```text
Save a rule for all work with me: Before showing me a report, offer, presentation, or email with numbers, compare every number and claim with source data. Under the output write in one sentence which files it is based on and what could not be verified. Mark what is not in the source as [VERIFY]. In the folder, write the rule into AGENTS.md and arrange for it to be read by you in this tool at the start of every work session; in Cowork into folder instructions. In a regular chat without a folder, save it in memory.
```
## Example

Lucie Benešová from an agency organizing corporate events sends the company Kovo Jihlava an offer on October 16, 2026, for a Christmas party for 120 guests. The offer was prepared by AI in the folder `Offers` from the request and price lists. The check returns three findings:

| In Output | In Source | Cause |
|---|---|---|
| buffet 120 × 690 CZK | `price-list-2026-10.pdf`, page 2: 740 CZK per person | source is outdated, AI took last year’s price list from the same folder |
| hall rental 18,000 CZK with VAT | same file: 18,000 CZK without VAT | instructions were unclear, it did not say whether to write prices with VAT |
| cloakroom missing in offer | `request-kovo.pdf`, page 3: cloakroom for 120 guests | incomplete source loaded, AI read only first two pages of the request |

AI recalculates the buffet to 88,800 CZK, adds the cloakroom according to the price list, and corrects the total price. Lucie opens the price list and compares the buffet price on page 2 herself. AI writes into `AGENTS.md` in the `Offers` folder:

```text
Take prices only from the newest price list in the folder, state for each whether it is with or without VAT, and under the offer state the price list name. Read the entire request and at the start write how many pages it has.
```

The next offer AI prepares in the same folder a week later ends with the line “Prices without VAT according to `price-list-2026-10.pdf`.”
## If You Get Stuck

- **AI does not load the entire source or reports it is too large:** it will tell you which sheets or pages are missing. Save each missing sheet from Excel using Save As in CSV format, which saves only one sheet, and send it in the same chat with the message “Here are the missing sheets, complete the check.” AI will check the entire source at once in [Cowork or Code](card:when-chat-is-not-enough), where it opens the file directly in the folder.
- **Claim has no source in your data:** if it is an external figure, such as a competitor’s price or market number, have AI find the source on the internet via [Deep Research](card:deep-research). Otherwise, cross out the claim from the output.
- **Almost the entire output is wrong:** the cause is in the instructions or source data and piecemeal correction will not fix it. Add missing source, append the rule from the check to the instructions, and have AI redo the output.
- **AI will make the same mistake again:** ask where it saved the rule. In a folder it should be in `AGENTS.md`. In a regular chat memory must be enabled; if the company disabled it, save the rule according to the “In Your Tool” block or [switch to Cowork or Code](card:when-chat-is-not-enough), where AI writes it into `AGENTS.md`.
## What You Will Have Done

You have corrected output where numbers and claims match the source data, and for every corrected error you know why it occurred. You have personally verified one key number on which the output relies most. AI has saved the rule against the cause in `AGENTS.md`, in a skill, in the task assignment, or in memory, so it will use it automatically next time.
## What Next

When numbers match and the text still needs to sound human, run it through [anti-slop](card:anti-slop), a check of phrases that reveal AI. If you check the same type of output weekly, create a [skill](card:create-skill-from-proven-process), a guide AI opens itself.
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
