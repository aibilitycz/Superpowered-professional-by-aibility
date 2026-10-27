# Organize an AI Sprint: A Usable Outcome by the Afternoon

AI proposes what the team will build with AI in an afternoon, writes the brief, invites the team, and after the sprint saves the effective process.

## Organize an AI Sprint: A Usable Outcome by the Afternoon

**Difficulty: easy.**\
**Time: approximately 15 minutes** with team materials in a shared folder.
## What It’s For

For a month, meetings have repeatedly mentioned that AI could compile the monthly report for management. Everyone agrees, but between meetings no one gets to it, so Petra still spends two hours at the end of the month manually assembling it from exports.

If the team dedicates one afternoon solely to this task and builds it with AI for their regular work, they start using it the next day.
## What to Prepare

- A shared team folder with task lists and meeting notes,
- Names of participants and an afternoon when they can work two to four hours exclusively on the sprint,
- AI in Cowork or Code mode for you and each sprint participant,
- AI connected to a calendar where you schedule meetings.
## How to Do It

1. Open the team folder in AI in Cowork or Code mode, insert the prompt from the AI exercise, and below it write who will participate in the sprint and when. From AI’s suggestions, select one task.
2. AI writes the brief; correct it and write “Send it.” AI saves the brief and creates an invitation for the team. During the sprint, each participant inserts the sentence from the brief into their AI and works on their part.
3. After the demo, write to AI “Sprint ended” and what worked. AI records the result in the worklog and saves the process as a [skill](glossary:skill) or rule.

If you only have regular chat, see the section When You Get Stuck.
## AI Exercise

Insert this [prompt](glossary:prompt) into AI in Cowork or Code mode, opened in your folder:

Help us prepare an AI sprint: an afternoon in which the team builds one thing they need with AI and starts using it the next day. If you don’t have access to the team folder or cannot save files there yourself, tell me immediately so I can switch to Cowork or Code.

Review the materials in the team folder: task lists, meeting notes, worklog, and other files showing what the team does and what slows them down. Propose three tasks that can be completed during the sprint so the team will use them regularly afterward. For each, write one sentence about what will be created, who will use it, and what materials it is based on. Reduce any large task to a first version that fits the sprint. Wait for me to select one.

For the selected task, write a one-page brief:
- What will be created and who will use it.
- Who works on what. Divide the work among the people I will list at the end of the message so each inputs their part into AI. For each person, specify the file where they will save their part and the sentence they will insert into their AI at the start of the sprint. That sentence always begins: Read AGENTS.md in this folder and ensure you read it at the start of every work session.
- What accesses and files are needed and where they are located.
- Who will combine the parts into one file at the end, what the team will show, and which real work cases they will test it on.

Below the brief, add a Post-Sprint section with this instruction for AI: “When someone writes that the sprint ended, review what was created in the folder during the sprint and notes from the demo. At the top of worklog.md, write an entry dated with the sprint: what the team built, how it worked in the demo, and who will do what next. If worklog.md doesn’t exist, create it. From the process that worked, write a skill, save it in the team folder, and add a rule to AGENTS.md specifying when AI should use it and in which file it is located. If the process is based on a single sentence, the rule alone suffices instead of a skill.”

Show me the brief and wait for corrections. When I say send it, save the brief in the team folder as zadani-sprintu-RRRR-MM-DD.md with the sprint date. Add a rule to AGENTS.md in the same folder that AI sprint briefs are in zadani-sprintu files and AI uses the latest during the sprint. If AGENTS.md doesn’t exist, create it. Ensure you read it at the start of every work session in this tool; in Cowork, write it into the folder instructions. Then, via the calendar connector, create an invitation for all people listed in the brief for the sprint date. Put the brief without the Post-Sprint section and the file name in the invitation description. Find email addresses in mail or calendar; request any missing from me. If you don’t have a calendar connector or it is read-only, connect the calendar via Composio. If I need to log in, tell me exactly where. Finally, tell me who received the invitation.

Who will participate in the sprint, when, and for how long:

## In Your Tool

### Microsoft Copilot
Cowork is next to the Chat toggle in Copilot; if you don’t see it, ask IT. It works with files on OneDrive and SharePoint, so tell it where the team folder is; it creates the Outlook invitation with participants, so it won’t use Composio from the prompt. If not everyone has Cowork, run the whole team according to the section “Team Has Only Regular Chat”: the project is a Notebook (Notes, New Notebook), shared via Share, Invite.

### ChatGPT
Codex works with the folder in the ChatGPT desktop app: switch to Codex and choose open folder; it reads `AGENTS.md` automatically. If you don’t see Codex, ask your admin to enable Allow members to use Codex locally, or follow the section “Team Has Only Regular Chat.” Connect the calendar under Settings > Plugins; AI creates meetings once the admin enables logging actions.

### Claude
In the Claude desktop app, choose Cowork and in the message field select Work in a folder; in Cowork, AI writes into the folder instructions to read `AGENTS.md`. The Microsoft 365 connector can create meetings in Outlook if the admin enables logging actions. The Google Calendar connector is read-only, so AI creates invitations via Composio.

### Gemini
The Gemini app with a work account does not work with folders on the computer, so prepare the sprint according to “Team Has Only Regular Chat” with the shared bot Gem. Create the event in Google Calendar by writing @Google Calendar and what to create; add guests in the calendar. Gemini CLI works with the folder if the company has a Gemini Code Assist license.
## What Is an AI Sprint

A sprint is a short full-speed race in English. In companies, it means dedicated time when a team works on one thing and shows the result at the end. An [AI sprint](glossary:ai-sprint) lasts two to four hours and the team assigns work to AI. The result is usually a file in the team folder: a template offer, report, or guide that AI uses to answer customers. People don’t schedule other meetings during that time, so something that waits months in meetings is done in an afternoon.

The sprint brief is a simple text file in the team folder, so every participant has it handy with their AI. `AGENTS.md` is a file with AI rules in the same folder that AI reads at the start of every work session. More is in the cards about [worklog](card:project-worklog) and about the [AI rules file](card:agents-md).

At the sprint’s end, the person designated in the brief lets AI combine parts into one file and the team tests the result on that day’s work. If the task doesn’t fit the afternoon, AI reduces it to a first version the team starts using the next day. The worklog is the project diary in the folder, and AI creates the invitation via the calendar connector.

If AI asks for permission to save files in the folder, allow it. You can select the task later with the team: return to the same chat and write which you chose. During the sprint, everyone saves to their own file so work doesn’t overwrite. How to switch from regular chat to Cowork or Code mode is shown in the [Cowork or Code](card:when-chat-is-not-enough) card.
## Make the Sprint Recurring

One sprint builds one thing. If the sprint repeats, for example monthly, the team gradually does what has only been talked about in meetings. For that, a scheduled task is enough, which AI runs the first Monday of each month and saves proposals for the next sprint in the team folder. Insert this brief into AI in Cowork or Code mode and ask it to create the scheduled task:

```text
Every first Monday of the month at 9:00, review worklog.md, task lists, meeting notes from the last month, and briefs from past sprints in the team folder. Propose three tasks for the next AI sprint that can be built in an afternoon so the team will use them regularly. For each, state who will use it and why it’s worthwhile now. Don’t propose anything the team built in past sprints. Add the proposals at the top of navrhy-na-sprint.md in the team folder.
```

If the task works with a folder on your computer, it runs only when the computer is on and the app is open.
## Example

Markéta leads a six-person customer support team for an e-shop selling kitchen appliances. The team answers forty queries daily and searches for answers in three documents: the complaints policy, warranty terms, and manuals. On Monday, October 12, she opens the shared Support folder in Cowork mode, inserts the prompt, and below writes: “Markéta, Lucie, Pavel, Jana, Ondřej, and Karel, Thursday, October 22, 1:00–4:00 PM.” AI proposes from meeting notes and query exports for September:

```text
1. Customer response assistant: writes a draft reply from the query and below it the document and article it’s based on. Used by the whole team, based on three documents in the folder.
2. Monthly complaints report for management. Used by Markéta, based on query exports.
3. Answers to the 20 most frequent questions for website help. Used by customers, based on query exports.
```

On Tuesday in the meeting, the team selects the assistant. AI writes the brief: Lucie and Pavel with AI select the 30 most frequent queries from the export, Jana and Ondřej with AI write how the assistant should reply and cite sources, Markéta and Karel combine and test it on five morning queries. Lucie’s sentence is “Read `AGENTS.md` in this folder and ensure you read it at the start of every work session. Then find the 30 most frequent queries from the September export and save them in `nejcastejsi-dotazy.md`.” Markéta writes “Send it” and AI creates a calendar invitation for all six people.

On Thursday at 3:30 PM, the assistant correctly answers four of five queries and shows the complaints policy or warranty article for each. For the fifth query, a post-warranty part replacement, no document provides an answer. Markéta writes to AI that the sprint ended, and AI records in the worklog:

```text
### 2026-10-22: AI sprint, customer response assistant
- What was created: an assistant that drafts replies from queries and cites the document and article it’s based on.
- How it worked: answered correctly 4 out of 5 queries from the morning. No document covers post-warranty part replacement.
- Next: from Friday, October 23, the team drafts replies through the assistant. Karel will add post-warranty part replacement info to warranty terms by October 30.
```

The process is saved in the folder as the skill Customer Response and a rule is added to `AGENTS.md` so AI answers customer queries accordingly. On Friday morning, Lucie inputs the first query of the day into AI in the Support folder, and AI drafts the reply with the source without any explanation.
## When You Get Stuck

- **Invitation wasn’t created:** ask AI if it has a calendar connector that can create meetings. If not, have it connect the calendar via Composio, a service that connects AI to over a thousand apps; your IT decides if you may use it. Without it, AI prepares the invitation text and you send it from your calendar. In corporate calendars, the right to create meetings via AI is sometimes enabled by the admin; how to request it is in the [Connect a Connector](card:plugin-connector) card.
- **All three proposals are too large for a sprint:** ask AI to break each task into steps and select only the first step for the sprint that the team will start using. AI will write the whole project divided among people as an [AI-WBS](card:ai-wbs-project).
- **Team has only regular chat:** insert the prompt into chat, attach team materials, and add: “We work only in regular chat and don’t use Composio. Write the brief so I can insert it into shared project instructions, and instead of files and `AGENTS.md`, give each person a sentence to insert into chat in this project.” Insert the brief into the shared [project](card:asistent) instructions; the project name in your tool is shown in the “In Your Tool” block. During the sprint, everyone works in chat in this project and sends their part at the end to the person from the brief, who inserts it into one chat and lets AI combine it. After the demo, write to AI in this chat that the sprint ended; it will write the record and effective process for insertion into project instructions.
- **AI colleagues don’t use the skill from the sprint:** have the colleague write to their AI in the team folder: “Read `AGENTS.md` and ensure you read it at the start of every work session.”
## What Will Be Ready

After preparation, the sprint brief is in the team folder and the whole team has an invitation in their calendar. After the sprint, the team uses the thing built in an afternoon. The worklog records what was created and how to continue, and a skill or rule in `AGENTS.md` ensures the team’s AI uses the result automatically.
## What Next

If you want to show the sprint result to other colleagues or departments, [ten minutes in a meeting](card:team-adoption-cycle) is enough. If the skill from the sprint answers differently than it should, adjust it according to the [Create a Skill](card:create-skill-from-proven-process) card.
## AI sprint

**What it is:** A continuous work block for a small team during which the first usable version of one or several real AI projects is created and tested. It has allocated time, approaches, support, and a defined path for the outcome.

**What it is not:** It is not a regular training session, competition, or work added to people’s schedules between other meetings.

**Why the student needs it:** It helps distinguish protected time for actual building from a short exercise and shows what must be prepared for the block to deliver a usable result.

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
