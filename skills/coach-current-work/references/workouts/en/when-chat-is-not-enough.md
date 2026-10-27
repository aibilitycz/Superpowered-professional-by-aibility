# Let AI into Your Folder: When Regular Chat Is Not Enough

When chat can’t handle multiple files at once, switch to Cowork or Code mode and have AI save the result directly into your folder.

## Let AI into Your Folder: When Regular Chat Is Not Enough

**Difficulty: Medium.**\
**Time: about 15 minutes** with your work-in-progress folder.
## What It’s Good For

By Thursday, October 15, you need to recommend a supplier for new laptops to management. Five offers are saved as PDFs in a folder. You upload them one by one into chat, copy the comparison table from the response into Word, and when a sixth offer arrives on Wednesday, you have to start over.

In [work mode](glossary:workmode) Cowork or Code, AI has access to the entire folder, so it simply adds the sixth offer to the completed table.
## What to Prepare

- A folder with work-in-progress files for one project, on your computer or company drive,
- A task that you couldn’t complete in chat; if you don’t have one, AI will create an overview of the documents,
- The AI you use; if it supports Cowork or Code, you’ll see the block “In your tool.”
## How to Do It

1. Open Cowork or Code mode in your AI tool. For some tools, this is a desktop app you install first.
2. Give AI access to the folder, and when it asks for permission to work with it, allow it. Enter your prompt and add a one-sentence description of the task that failed in chat.
3. Open the file AI saved in the folder. If something is wrong, write to AI in the same chat and it will fix the file.

AI will mark missing information in documents as [TO FILL IN], which you then complete.
## AI Exercise

Insert this [prompt](glossary:prompt) into AI running in Cowork or Code mode,
opened in your folder, and add your task below it:

You are working in my folder with work-in-progress files. If you cannot see inside or save a file there, tell me immediately: I’m probably in regular chat and need to switch to Cowork or Code mode.

Review all files in the folder and summarize in two sentences what is in it.

Then perform the task I write below this instruction. If there is none, create an overview of the documents in the folder: for each, give the title, what it’s about, important numbers and deadlines, and what it means for me. Take numbers and facts only from the documents; mark anything missing as [TO FILL IN].

Save the result as a new file in this folder, as a Word document, and if it’s a table or numbers, as an Excel table. Tell me the file name and what it contains.

Finally, save rules for this folder: one sentence describing its contents, the result file name, and the rule “When a document is added or changed in the folder, update the result in the same way.” If you are in Cowork mode, write these into the folder’s instructions. Otherwise, write them into a file named AGENTS.md in the folder, creating it if it doesn’t exist. Tell me where you saved the rules.

## In Your Tool

### Microsoft Copilot
Copilot’s Cowork mode is called Copilot Cowork: select it at `copilot.cloud.microsoft` using the toggle next to Chat; it requires a Copilot license and admin activation. It cannot access files on your computer, so place the folder on OneDrive or SharePoint and attach it with the + button. New files are saved to the Cowork folder on OneDrive and appear in the right panel. Rules are saved as a skill.

### ChatGPT
ChatGPT’s Code mode is Codex in the ChatGPT desktop app, downloadable from the ChatGPT website; no programming is needed. After logging in, select Codex, then New chat and open the folder (open a folder). Codex is available on all ChatGPT plans, including free, but may be disabled by your admin in a business account. AI saves rules for next time in the `AGENTS.md` file in the folder.

### Claude
Claude’s Cowork and Code modes are in the Claude desktop app, downloadable at `claude.com/download`; Cowork is in paid plans. Switch the message input from Chat to Cowork; if you don’t see this option, you have a new version where Cowork works in every chat. Open the folder in the left panel via Projects, +, and Use an existing folder. AI saves rules for next time in the folder’s instructions.

### Gemini
Gemini has no Cowork or Code mode, but can handle multiple files in the Gemini app: attach up to 10 files via Add from Drive, enter your prompt, and when asked to change mode, type “continue here.” Save results with Export to Sheets for tables, or Share & export > Export to Docs for text. Ask about the entire folder in Drive via right-click and Ask Gemini. Save rules as a skill (Customize, Skills).
## What Are Cowork and Code Modes

Cowork mode is for working with documents: AI reads and saves files in the folder you open to it and works on the task independently. Code mode is mainly for code, websites, and scripts but works the same with folders, so you can use it for documents too.

AI saves rules for next time in the `AGENTS.md` file in the folder or in instructions remembered by the tool, so they apply in every new chat with the same folder. In a shared folder, colleagues can see the `AGENTS.md` file; keep it there as AI follows its rules. Cowork and Code modes also allow scheduling tasks to run automatically at set times.
## When Regular Chat Is Enough

Regular chat in any tool suffices in two cases:

- **One-time output from what you input into chat:** an email reply, summary of one document, or meeting points. You provide the input once and use the result immediately.
- **Working in mail, calendar, or company documents that chat has [connected](card:plugin-connector):** for example, drafting a reply in Outlook or a meeting overview for next week.

Switch to Cowork or Code when your input consists of multiple files in a folder or when the result should remain as a file you revisit.
## Example

Ondřej coordinates office renovations and must send the investor a list of unresolved defects by Friday, October 16. In the folder `Office Renovations`, he has seven inspection reports in Word. He opens AI in Cowork mode, grants access to the folder, and adds under the prompt: “Create a list of defects not yet fixed according to the reports, with deadlines and the company responsible.”

AI saves an Excel table `open-defects.xlsx` with fourteen defects. Two reports lack deadlines, so AI marks those as [TO FILL IN]. It writes into the folder rules that it contains inspection reports and the open defects list, plus a rule to update defects from each new report and mark fixed ones.

On Monday, October 19, Ondřej adds a new inspection report to the folder, opens a new chat in the same folder, and writes only “A new report was added.” AI updates the list and marks two defects as fixed.
## If You Get Stuck

- **AI replies it can’t see the folder or save files:** you are in regular chat. Switch to Cowork or Code mode as described in the “In your tool” section and grant AI folder access.
- **Cowork or Code mode is missing in your tool:** admins often enable it in business accounts, so ask your admin to activate it. Claude’s free plan lacks Cowork, Copilot Cowork requires a Microsoft 365 Copilot license, and Gemini has no such mode; see the “In your tool” section for instructions. If Codex is missing in ChatGPT personal app, download the new ChatGPT desktop app.
- **You cannot install anything:** Copilot Cowork and Gemini on Google Drive run in the browser and work with company drive folders without installation. Otherwise, send IT a request: “I need a desktop AI app so AI can work with project files in a folder on my computer.”
- **AI skipped some files:** tell it their names to add them. If there are hundreds of files, open only the subfolder relevant to the task.
## What You’ll Have

You have AI in Cowork or Code mode working with your folder. The folder contains a new file with the task result that couldn’t be done in chat, and AI has told you where it saved rules: what’s in the folder and how to update the result when documents are added. Next time, open the same folder in a new chat and just tell AI what changed.
## What’s Next

To prepare all your work-in-progress files this way, create a [PACT workspace](card:pact-workspace). To have results update automatically, for example every Monday morning, set up a [scheduled task](card:recurring-ai-task).
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
