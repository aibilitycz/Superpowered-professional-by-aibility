# Let AI Download Live Data: Current Figures with Source and Date

AI downloads current figures about companies, competitors, or the market from the web itself, providing source and date for each.

## Let AI Download Live Data: Current Figures with Source and Date

**Difficulty: Medium.**\
**Time: approximately 15 minutes** with one question missing numbers.
## What It’s Good For

On Thursday you are signing a contract with a new supplier and want to know how large the company is, whether it is growing, and if it has any issues. The chat writes a general paragraph from their website, and then you spend half an hour searching registry data yourself.

It helps when AI downloads the numbers directly from the source, providing a link and date for each, and saves the procedure so you can verify the next supplier with a single sentence.
## What to Prepare

- A work-related question needing current figures and what you will decide based on them,
- The AI you use at work; where to start is shown in the “In Your Tool” block,
- AI in [Cowork or Code mode](glossary:workmode), only if regular chat can’t find the data.
## How to Do It

1. Tell AI what numbers you need and what decision you will make based on them. AI finds where the data really is and downloads it itself. If login or IT admin is needed, it will tell you.
2. Open the link for the number your conclusion relies on most and verify the source actually provides it. If it doesn’t match, tell AI to correct the table.
3. In a new chat, enter the same task in one sentence, for example for another company. In Cowork or Code mode, open a new chat in the same folder.

Only include numbers you will base decisions on in the table.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work, and add your question on the last line:

I need current web data for the task I’m working on. What I need and why is on the last line.

First find where the data really is: public registry or statistics, company website, job ads, ad library, keyword search tool, or social media profile. If a direct source exists, take numbers from it; use articles quoting them only if no direct source is available.

Download the data yourself. Read public pages via web search. If data is in a tool I can access in the browser (e.g., keyword planner or ad library) and you can control the browser, navigate it there. If data is in a database requiring a data connector (MCP server), use the one you have. If you don’t have one but can connect it here, connect it; if login is required, tell me exactly where and wait. If you can’t connect it, tell me which source would be useful and who can enable it, and meanwhile return what you find on the public web. If the source is paid, tell me the price before using it.

Put the results in a table with columns: data point, number, source link, and date the number applies to. Mark missing data as missing and do not estimate.

Below the table, write two sentences about what the numbers imply for my task, which number I should verify in the source, and exactly where to find it there.

If working in a folder, save the table at the top of a file named zive-data.md in the project folder under a heading with today’s date and task name; create the file if it doesn’t exist. Finally, save the procedure as a skill: where you get data, how you download it, and what the table looks like, so next time one sentence like “download the same data for another company” will suffice. If you can’t save the skill, save the procedure in memory or your tool’s custom instructions.

What I need and why:

## In Your Tool

### Microsoft Copilot
Insert the prompt into Copilot Chat at `copilot.cloud.microsoft`; lines about the file and skill are ignored. If response lacks web links, enable search in Settings, Personalization; if unavailable, it may be disabled by admin. The procedure is remembered after the sentence “Remember this procedure,” Cowork saves it as a skill, and tasks are planned on the Automations page. Paid data is provided by a Copilot connector from the admin.

### ChatGPT
Insert the prompt into a regular chat; lines about file and skill are ignored. ChatGPT searches the web itself, and if numbers lack links, type / and select Search. The procedure is remembered after the sentence “Remember this procedure”; if you have memory, it appears in Settings, Personalization. No connector is needed for public registries; paid databases are added by admin under Plugins, and scheduled tasks appear under Scheduled.

### Claude
Insert the prompt into Cowork in the project folder or chat; if numbers lack links, enable Web search under +. Cowork navigates ad libraries or Keyword Planner in your Chrome via the Claude in Chrome extension. Data connectors in Team and Enterprise plans are added by the organization owner (Organization settings, Connectors). Claude saves the procedure as a skill; tasks appear under Scheduled.

### Gemini
Insert the prompt into a regular chat; Gemini searches Google itself and ignores lines about file and skill. You cannot add a custom data connector with a work account, so have AI download data from specialized databases in Cowork or Code mode, or ask IT. Save the procedure as a skill (Customize, Skills); scheduled tasks are under Scheduled.
## What Are Live Data and a Data Connector

Live data are figures that change daily or weekly, such as company revenues, insolvencies, or competitors’ current ads. AI does not know them by itself because it was trained on older data and only estimates without downloading. It reads public pages, like business registries or company websites, via web search. For reports from dozens of sources comparing options, use [Deep Research](card:deep-research).

Some data is not on regular pages. Keyword search volume (how many people search monthly) or competitor website traffic is in specialized tool databases, which AI accesses via a data connector. This is often called an MCP server in settings; [MCP](glossary:mcp) is a technical standard for AI to connect to apps and data sources. Connectors usually require an account with the data provider, and some sources charge per query. If you have browser access to such a tool, like Google Ads Keyword Planner, AI can navigate it via [browser control](card:browser-control) without a connector. Otherwise, AI marks these data as missing and tells you who can enable the connector.

AI saves the procedure as a [skill](glossary:skill), a guide it finds next time you give a similar task. Results are saved in `zive-data.md`, a plain text file in the project folder, with the newest download at the top.
## Let Data Download Automatically

Data you track regularly, such as insolvency of key suppliers or competitors’ ads, can be downloaded weekly by AI itself, reporting only changes. Insert this instruction into AI that supports scheduled tasks and ask it to create a scheduled task from it. Where to find it in your tool is shown in the “In Your Tool” block.

```text
Every Monday at 8:00 AM, download the same data as last time according to the saved procedure and compare it with the last download in zive-data.md or the previous result of this task. If working with a file, append new data at the top under today’s date. Report to me only what changed and what it means for my task; if nothing significant changed, one sentence is enough.
```

If the task works with files on your computer, it runs only when the computer is on and the application is open.
## Example

Lucie manages purchasing at a logistics company and on Thursday, October 22, 2026, signs a framework contract with a new carrier. On Monday, she writes under the last prompt line:

```text
Autodoprava Lipan, s.r.o.: how long the company has existed, its revenues, and whether it has insolvency or VAT issues. I am signing a framework contract with them on Thursday for deliveries.
```

AI checks the business and insolvency registries and VAT payer register. It writes into `zive-data.md`:

```text
### 2026-10-19: Autodoprava Lipan, s.r.o., before signing on 22. 10.
| Data Point | Number | Source | Valid As Of |
|---|---|---|---|
| Company Founded | 2014 | or.justice.cz, business registry extract | 19 Oct 2026 |
| Revenues | 86 million CZK, previous year 79 million CZK | or.justice.cz, financial statements in document collection | Year 2025 |
| Insolvency | none | isir.justice.cz | 19 Oct 2026 |
| Unreliable VAT Payer | no | VAT payer register | 19 Oct 2026 |
| Number of Vehicles | missing, no source provides it | | |

Revenues increased by 9% and the company has no issues in registries. Verify: revenues in profit and loss statement in financial statements, line Sales of goods and services.
```

Lucie opens the financial statements from the link, finds the revenue line in the profit and loss statement, and the number matches. A week later, in a new chat, she writes only “Check the same carrier we are negotiating with on Tuesday” and receives a table in the same format. A marketing colleague uses the same prompt to download competitors’ ads and keyword search volume via a data connector enabled by the admin.
## If You Get Stuck

- **AI writes numbers without links or says “approximately”:** it did not search the web and is estimating from memory. Enable search as per the “In Your Tool” block and write: “Provide a source link and date for each number; mark missing data as missing.”
- **AI replies it has no access to data:** data is in a database and AI needs a data connector. Ask AI to write a short request for your company AI admin: which source and why you need it. In Code mode AI connects it itself; how to switch is shown on the [Chat, Cowork or Code](card:when-chat-is-not-enough) card.
- **Data is only in PDF or on a page with filters:** ask AI to open the PDF directly from the link. Let AI navigate pages requiring clicks, like Meta ad library, via browser control as shown on the [Browser control](card:browser-control) card.
- **In a new chat AI can’t find the procedure:** ask what it remembers about the procedure and where it saved it. If you have no memory, have it save the procedure as a skill in Cowork or Code mode, then open a new chat in the same folder.
## What You Will Have

You have a table of current figures for your task, each with a link and date, and you verified the key number in the source. AI has saved the procedure as a skill or in memory and downloaded data from a single sentence in a new chat.
## What Next

If you want regular reports to arrive reliably and automatically report errors, continue to [scheduled task](card:recurring-ai-task). How to turn other successful work into a [skill](card:create-skill-from-proven-process) is shown on a separate card.
## MCP

**What it is:** An open technical standard (Model Context Protocol) through which AI connects to applications and data sources. An application or data provider offers an MCP server, and AI reads data or performs authorized actions through it. In tool settings, such a connection is often called a connector or MCP server.

**What it is not:** It is not a standalone application or AI model. The standard itself does not download anything; it requires a server from a provider, often an account with them, and permissions enabled by a person or administrator.

**Why a student needs it:** It helps recognize when AI accesses data beyond the public web and who must enable the connection.

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
