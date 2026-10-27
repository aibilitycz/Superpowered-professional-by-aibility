# Process Meeting Transcript: Decisions and Tasks for the Project

AI extracts a brief record with decisions and tasks from the meeting transcript and processes future meetings the same way.

## Process Meeting Transcript: Decisions and Tasks for the Project

**Difficulty: easy.**\
**Time: approximately 15 minutes** with the transcript of one meeting.
## What it’s good for

On Wednesday, you had a one-hour meeting about the new price list with finance and marketing, and afterward, you have a twenty-page transcript. On Friday, a sales colleague asks what the highest discount for large customers can be, and you’re unsure whether 8% was agreed upon or just proposed.

You, your colleague, and a new AI chat will find a short record with decisions and tasks in the project folder within a minute, with exact wording preserved right next to it in the transcript.
## What to prepare

- The project folder to which the meeting belongs,
- The transcript of one recent meeting as a file or text,
- AI in [Cowork or Code mode](glossary:workmode), or the AI project you use.
## How to proceed

1. Open AI in Cowork or Code mode in the project folder, insert the prompt, and add the transcript. AI will save the transcript into `prepisy`, the record into `schuzky.md`, and the rule into `AGENTS.md`.
2. For the most important point, write “Show me the exact wording from the transcript.” If it concerns money or deadlines, find the time in the transcript (Ctrl+F) and read it yourself.
3. In a new chat in the same folder, ask “Who has what to do and by when?” AI should answer based on the record.

Proposals that no one accepted should not be included in the record.
## AI Exercise

Insert this [prompt](glossary:prompt) into AI in Cowork or Code mode, opened in your folder:

Process the meeting transcript for this project. I am attaching the transcript or will tell you where it is on the computer. If you cannot save files into the project folder in this environment, tell me immediately so I can switch to Cowork or Code.

Save the transcript unchanged into the subfolder prepisy inside the project folder and name it by date and meeting topic, for example, 2026-10-07-porada-cenik. Move the file as is, including its extension, e.g., .docx. If I provided the transcript as text, save it as a text file without shortening or rewriting it, so timestamps and speaker names remain.

Then write a short record from the transcript and append it at the top of the file schuzky.md in the project folder. If the file does not exist, create it. The record should have this form:

### YYYY-MM-DD: meeting topic
Who was there: names.
Decisions:
- what was decided and from when it applies.
Tasks:
- who, what, and by when.
Open questions:
- what remains undecided and who will find out.
Transcript: link to the file in prepisy.

Include only what people agreed on in decisions and tasks. Omit proposals no one accepted. If a task lacks a person or deadline, write “not specified.” Add the timestamp or transcript location in parentheses for each decision and task.

Finally, add a rule to the AGENTS.md file in the project folder: “When you receive a meeting transcript, save it unchanged into prepisy and append a record at the top of schuzky.md in the same form as above: only what people agreed on, with the timestamp in the transcript and missing data as ‘not specified.’ Answer questions about tasks and decisions based on schuzky.md.” If AGENTS.md does not exist, create it. Make sure you read it at the start of each work session in this tool; in Cowork, write it into the folder instructions.

At the end, show me the record and tell me where you saved what.

## In your tool

### Microsoft Copilot
The transcript from Teams is on the Recap tab in the meeting chat. The record is saved by Cowork next to the Chat toggle if enabled by the admin: connect the OneDrive folder via Add attachments and append “Keep records in a Word document.” to the prompt. Without Cowork, you cannot use the prompt: create a notebook (Notebooks › New notebook) and put the sentence from the block If you don’t have Cowork or Code into More options › Instructions.

### ChatGPT
Codex works with folders: in the ChatGPT desktop app, switch to Codex, choose open a folder, and insert the prompt; scheduled tasks are under Scheduled. Without Codex, the project is a ChatGPT project: New project, transcripts via Add source, instructions in ••• › Project settings, and invite colleagues via Share.

### Claude
Cowork is in the Claude desktop app for paid plans: select the folder when assigning a task, and AI records the link to `AGENTS.md` in the folder instructions. Scheduled tasks are in the left panel under Scheduled and run only when the computer is on. Without Cowork, the project is a Claude project: New Project, transcripts via +, instructions in Set project instructions, and invite colleagues via Share project.

### Gemini
The Google Meet transcript is a document in the organizer’s Drive folder Meet Recordings; Take notes for me does not yet support Czech. Gemini does not work with folders on the computer; the project is a Gem: Gems › New Gem, transcripts via Knowledge › Add from Drive. Save the record via Share & export › Export to Docs and share the Gem with colleagues via Share.
## If you don’t have Cowork or Code

Without Cowork or Code mode, process meetings in your tool’s project: add transcripts there and its instructions apply to every chat in it. Write this in the project instructions:

```text
From each transcript, write a record: decisions, tasks with person and deadline, and open questions. Only what people agreed on, with the timestamp in the transcript for each point.
```

After each meeting, add the transcript to the project and write “Make a record from the new transcript.” AI will then answer “Who has what to do?” based on the transcripts. Where to find the project is shown in the block In your tool, and how to [switch to Cowork or Code](card:when-chat-is-not-enough) is a separate tab.
## What is a meeting transcript

A transcript is a word-for-word written text of the meeting, usually with timestamps and speaker names for each utterance. A one-hour meeting results in dozens of pages. It is created by the tool in which you record the meeting. Where to find it in Teams and Google Meet is in the block “In your tool.” For other tools:

- **Zoom:** find it with the cloud recording as a `.vtt` subtitle file, which AI reads as text. You will get an email when ready.
- **Plaud**, a pocket recording device: open the recording in the app and export it as a transcript in text or Word via the icon at the top right.
- **tl;dv**, an online meeting recorder: copy the transcript on its tab with the copy button and paste it into AI chat.

`schuzky.md` is a plain text file in the project folder with records from all meetings, newest on top. The `.md` extension means the record is in [Markdown](glossary:markdown), where `###` at the start of a line marks a heading. The subfolder `prepisy` contains full transcripts, one file per meeting.

`AGENTS.md` is a file with rules for AI in the same folder. AI in Cowork or Code mode reads it at the start of each session and sets up what the tool needs according to the prompt. After the next meeting, just add the transcript to the chat in the project folder and write “Process the meeting according to `AGENTS.md`.”
## Let meetings process themselves

If you record meetings often, just download the transcript and the rest is done by a scheduled task AI runs every workday afternoon. It finds new transcripts and processes each in the correct project according to the rule in `AGENTS.md`. Insert the assignment into AI in Cowork or Code mode and ask it to create the scheduled task; which tools support this is in the block “In your tool.” Instead of “Projects,” write the folder where you keep projects:

```text
Every workday at 5:00 PM, scan Downloaded Files and find meeting transcripts. For each, identify by name and content which project in the Projects folder it belongs to. If schuzky.md of that project already has a record for that meeting, skip the transcript. Move others to the prepisy subfolder of that project and process according to the rule in its AGENTS.md. If you don’t know where the transcript belongs, leave it in place. At the end, tell me which meetings you processed and which transcripts you don’t know where to place.
```

The task works with files on your computer, so it runs only when the computer is on and the app is open.
## Example

Eva coordinates the introduction of a new price list for wholesale customers. On Wednesday, October 7, 2026, she has an online meeting with Martin from finance and Petra from marketing. After the meeting, she downloads the transcript, opens AI in the folder `novy-cenik`, inserts the prompt, and drags the transcript into the window. AI saves it as `prepisy/2026-10-07-porada-cenik.docx` and appends to `schuzky.md`:

```text
### 2026-10-07: Meeting on new price list
Who was there: Eva, Martin (finance), Petra (marketing).
Decisions:
- Discount for large buyers will be at most 8%. (12:40)
- The new price list applies from 1/1/2027, customers will receive it on 12/1. (31:05)
Tasks:
- Martin will calculate margins for new prices by 10/14. (18:20)
- Petra will prepare a flyer for customers, deadline: not specified. (35:50)
Open questions:
- Does the new price list also apply to the e-shop? Eva and the e-shop manager will find out.
- Who will send the price list to salespeople? No one took this on during the meeting.
Transcript: prepisy/2026-10-07-porada-cenik.docx
```

Eva writes “Show me the exact wording about the discount.” AI outputs the sentence at 12:40 where Martin approved 8%. On Friday, Eva asks in a new chat in the same folder who has what to do and by when. A good answer is: Martin calculates margins by 10/14; Petra’s flyer deadline is missing. If AI asks what meeting it is, it probably works outside the project folder.
## If you get stuck

- **AI claims it saved the record but `schuzky.md` is not in the folder:** you are probably working in a regular chat that cannot modify files. Switch to [Cowork or Code](card:when-chat-is-not-enough) and select the project folder there.
- **The record contains decisions you did not make:** AI took a proposal as an agreement. Tell it what is different so it corrects the record and still processes other points. How to verify the result against the source is shown in [Result verification](card:kontrola-vysledku).
- **You don’t have the transcript:** in Teams, the meeting organizer downloads it; ask them for it. If the meeting was not recorded, write or dictate to AI what you remember, and the record will be created anyway.
- **Next time AI won’t use the rule:** write “Process the meeting according to `AGENTS.md`.” If that doesn’t help, check that `AGENTS.md` is in the project folder and the rule is inside.
## What will be ready

You have a meeting record in `schuzky.md` in the project folder, the full transcript in the `prepisy` subfolder, and a rule in `AGENTS.md` by which AI will process every future meeting the same way. You verified the most important point by the exact wording from the transcript and tested in a new chat that AI knows from the record who has what to do.
## What next

From the same transcript, AI can prepare other outputs besides the record, such as a brief for the next meeting or a client reply. It processes long comment threads or emails the same way: instead of a transcript, you provide the thread.
For meetings across multiple projects, have AI create a [reusable guide](card:create-skill-from-proven-process) from the procedure.
If colleagues should also receive records, continue with a [scheduled task](card:recurring-ai-task).
## Markdown

**What it is:** A simple plain text format where headings, lists, links, and other structure are written using a few common characters. Files typically use the `.md` extension.

**What it is not:** It is not a programming language nor a format intended solely for developers.

**Why a student needs it:** It remains easily readable and editable by both humans and AI, and can be transferred between different tools.

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
