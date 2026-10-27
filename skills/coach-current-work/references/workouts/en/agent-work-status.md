# Let AI Record Task Status: Your Colleague Knows Where Your Work Stands

AI automatically finds or creates a task in your team’s tool for each work item, moves it forward, and closes it.

## Let AI Record Task Status: Your Colleague Knows Where Your Work Stands

**Difficulty: Medium.**\
**Time: approximately 15 minutes** with one work item you do today.
## What It’s Good For

You finished comparing three offers for new windows on Tuesday, but the task in
your task tool is still marked To Do. On Thursday, your manager messages you
about it, and meanwhile a colleague started comparing the offers again.

A rule for AI helps: it switches the task status automatically during work and
writes the result with a link at the end, so the status is accurate even if you
forget.
## What to Prepare

- one work item you will do today with AI, for example comparing offers or
  preparing materials for a meeting,
- your team’s task tool, such as Planner, Asana, or Jira; IT may need to enable
  the connection,
- a project folder shared with the team, for example synced from OneDrive or
  SharePoint,
- AI in [Cowork or Code mode](glossary:workmode); where available, shown by the block
  In Your Tool.
## How to Do It

1. Insert the prompt into AI in Cowork or Code mode and add your task tool and
   today’s work item. AI will connect to the tool; you confirm login yourself.
2. Confirm the account AI will use to write, and specify which statuses mean
   in progress and done. AI saves these statuses or columns into the rule and
   performs the work.
3. Open the task in the task tool and check what your colleague will see.
   The status and link should match AI’s report.

The task needs only the status, a sentence about the result, and a link; the
rest belongs in the worklog, the project journal.
## AI Exercise

Insert this [prompt](glossary:prompt) into AI in Cowork or Code mode,
opened in the project folder, and add the task tool and work item on the last two lines:

I want my work status to be recorded automatically in the task tool our team uses, so colleagues know where the work stands without asking me. Set this up and use it immediately on the work I assign you. The tool and work are on the last two lines.

1. Connect to the task tool. Use the connector you have here. If missing or read-only, connect yourself, for example via an MCP server (for Planner, Microsoft’s Work IQ) or the Composio service. If I need to log in or approve something, tell me exactly where and wait. If IT must approve the connection, write a short request for IT explaining what and why to connect. If the team manages tasks in a table or file, work in it. If you cannot write to files in the project folder here, tell me immediately and advise where to switch.

2. Find out directly in the tool which account you write under, and tell me it along with the project or board where you will write. If you can write under multiple accounts, ask me which to use. List the task statuses and columns you see in the tool and ask which mean in progress and done.

3. Write this rule into AGENTS.md in the project folder and fill in the square brackets yourself based on what we found out. If AGENTS.md does not exist, create it. Make sure you read it in this tool at the start of each work session; in Cowork, write the rule into the folder instructions.

### Work Status
- We manage tasks in [tool, project, or board]. Always write to it using account [account] and name it in every report.
- At the start of work, find the task it belongs to and switch it to [in progress]. If none exists, create one with a short title and assign it to me.
- If the work is waiting on someone else, write in the task in one sentence who and what it is waiting for.
- At the end, append a record with a link to the result at the top of worklog.md in the project folder, following previous entries. If worklog.md does not exist, create it and write the record as: date, what was done, link to the result, and next step. If a worklog rule already exists in AGENTS.md, skip this line and just append the link to the result to that rule.
- Write a comment in the task with the result in one sentence and a link the colleague can open, then switch it to [done]. If the result is only on this computer, ask me where to save it. If the work is not finished, leave it in progress and write what remains.
- After each write, reload the task and worklog and verify what you wrote is there. Only then tell me it is done. If the entry is incorrect, fix it, and if you cannot, tell me.

4. Then do the work from the last line according to the rule. At the end, send me the link to the task, its status as you see it in the tool, and which account you wrote under.

Task tool:
Work:

## In Your Tool

### Microsoft Copilot
Insert the prompt into Copilot Cowork at `copilot.cloud.microsoft` (switch next to Chat; Microsoft 365 Copilot license). Add the task tool in Customize, Plugins, or ask IT. Append to the prompt: “I don’t have a folder: keep the worklog as a Word file on OneDrive, do not create a rules file, and write the rule as text starting with ‘For project [name]:’.” Paste the text on the left in Customize, Preferences.

### ChatGPT
Code mode is in ChatGPT Codex: select it in the ChatGPT desktop app and open the project folder (open a folder). Codex reads `AGENTS.md` automatically and connects to the task tool via MCP server; find it in Settings, MCP servers, where you can authenticate if needed. If you don’t see Codex, your admin probably disabled it; ask them to enable it.

### Claude
In the Claude desktop app, open Cowork or Claude Code and select the project folder; both require paid plans. Cowork writes the rule into folder instructions, Claude Code reads `AGENTS.md`. Connect the task tool, e.g. Asana or Linear, in the left panel under Customize, Connectors; the organization owner adds it.

### Gemini
The Gemini app adds tasks to Google Tasks and marks them done if you write @Google Tasks in the prompt. It does not maintain the worklog in the folder because it does not work with local folders. The entire exercise is done by Antigravity, a Google tool that works directly in your folder and reads `AGENTS.md`; use it with your corporate account via Gemini Enterprise—ask IT for access.
## Task, Worklog, and Rules File

AI writes in two places and follows one rules file. The task in the task tool is visible to the whole team: AI writes status and at the end one sentence with a link to the result. Status is a column, label, or task progress, e.g. To Do, In Progress, or Done. If the team has no tool, a table or `ukoly.md` file in a shared folder will do.

The [worklog](card:project-worklog), the project journal, is the `worklog.md` file in the project folder. AI appends what was done with a link to the result, so you can revisit the work even after a month.

`AGENTS.md` is the AI instruction file in the project folder, which AI reads at the start of each work session; in Cowork, folder instructions serve the same role. AI connects to the task tool via a connector or [MCP](glossary:mcp), an open standard for app connections to AI. If the connector is missing, AI uses an integration service like Composio; how AI sets up such a service is shown on the [data transfer between apps](card:cross-app-workflow) card.
## Why AI Names the Account and Verifies the Entry

Two rules in the prompt—naming the account in every report and verifying after writing—arose from errors we made ourselves. We manage tasks in Linear and AI writes via a service connected to multiple apps, some with several accounts. If it didn’t explicitly select an account, it sometimes wrote under a different one than expected. Since then, it always selects and names the account in the report.

The second error: the tool confirmed the write, but the task status didn’t change. AI therefore reloads the task after each write and reports done only when it sees what it wrote.
## Example

Jakub is a project manager at a construction company and manages tasks in Asana. On Tuesday, October 20, 2026, he opens AI in Cowork mode in the folder `School Renovation Lipová`, inserts the prompt, and adds:

```text
Task tool: Asana, project School Renovation Lipová
Work: Compare three offers for window replacement from the Offers folder in a table (price, deadline, warranty) and write a recommendation for the technical director.
```

Jakub confirms login with his corporate account. AI lists columns To Do, In Progress, Waiting for Approval, and Done, and Jakub says finished work goes to Waiting for Approval because the technical director approves offers. AI finds the task “Compare window offers,” switches it to In Progress, and compares the offers. After the last write, it reloads the task and sees it stayed In Progress. It moves it again, verifies the status, and returns:

```text
Written under account Jakub Dvořák (Asana, Stavby Morava).
- Task “Compare window offers” is in the Waiting for Approval column, with a recommendation and a link to the Comparison of Windows.xlsx table on SharePoint.
- The first move was not saved; after the second attempt, the move is verified.
- Worklog: entry 2026-10-20 is at the top of worklog.md.
```

On Wednesday morning, technical director Hana opens the project in Asana, sees the task in Waiting for Approval with a link to the table, and approves the recommendation without messaging Jakub.
## If You Get Stuck

- **AI cannot access the task tool:** the connector is missing or cannot be enabled in your company. Ask AI to prepare a short request for IT admins. AI connects to Planner in Code mode via Work IQ, Microsoft’s MCP server, which IT enables once. When IT approves, write in the same chat “IT enabled it, continue.” How AI connects other apps is shown on the [Connect a Connector](card:plugin-connector) card.
- **AI creates a new task even though one exists:** tell it how to recognize the task, e.g. by project and title, and add this to the rule.
- **AI reports done but the task is still in the old status:** write “Reload the task and show me what you see.” If verification is missing in the report, ask AI to check that the rule is in `AGENTS.md` or folder instructions.
- **AI works outside the project folder and doesn’t know the rule:** you are probably in a normal chat. Switch to [Cowork or Code](card:when-chat-is-not-enough) and open the project folder there.
## What Will Be Done

Today’s work has a task that AI moved itself to done and wrote the result with a link, and its record is in the worklog. The rule in `AGENTS.md`, folder instructions, or your AI settings will do the same for every future work item. Your colleague finds your work status in the task tool without asking you.
## What’s Next

To have status updates also for work in emails and meetings, set up a [scheduled task](card:recurring-ai-task) that supplements tasks every evening based on that day’s emails, chats, and meetings. Whether the rule still works after a few weeks is checked by the [weekly settings review](card:weekly-ai-review).
## MCP

**What it is:** An open technical standard (Model Context Protocol) through which AI connects to applications and data sources. An application or data provider offers an MCP server, and AI reads data or performs authorized actions through it. In tool settings, such a connection is often called a connector or MCP server.

**What it is not:** It is not a standalone application or AI model. The standard itself does not download anything; it requires a server from a provider, often an account with them, and permissions enabled by a person or administrator.

**Why a student needs it:** It helps recognize when AI accesses data beyond the public web and who must enable the connection.

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
