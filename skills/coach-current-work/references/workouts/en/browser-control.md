# Use Browser Control: AI Clicks in the Browser for You

An online task you manually click through every week, like downloading a report, is done by AI automatically in the browser.

## Use Browser Control: AI Clicks in the Browser for You

**Difficulty: medium.**\
**Time: about 15 minutes** with one web task.
## What It’s Good For

Every Friday afternoon, you download a work report export from the system and manually transfer the hours totals into a spreadsheet for management. Each time, you manually filter by project and week. No one else knows how to do it, so when you’re on vacation, management doesn’t get the numbers.

Browser control means the AI controls the browser: it opens the page, clicks, fills in fields, and downloads files while you do other work.
## What to Prepare

- One web task you repeat manually, such as downloading a report,
- An account on the website where the task is done; you log in yourself when AI asks,
- A folder for the work related to the task; AI will save the procedure there for next time,
- AI that can control the browser; if yours can, see the block “In your tool.”
## How to Do It

1. Open the AI that controls the browser in the folder you prepared and paste the prompt. After the line “Task:”, write where to go, what to do there, and in what form you want the result.
2. On the login page, log in yourself and tell the AI to continue. Then do other work; AI will notify you when done or if it needs a decision.
3. On the page AI references with the result, verify one or two numbers. AI will save the procedure for next time in the file `ulohy-v-prohlizeci.md`.
## AI Exercise

Paste this [prompt](glossary:prompt) into AI in Cowork or Code mode, opened in your folder, and add your task after the last line:

Do for me in the browser a task I regularly do manually on the web. The task is on the last line.

Open the page and navigate to the result: click, fill in, filter, and download what is needed. If you encounter a login, tell me; I will log in and tell you to continue. If you don’t know which option to choose, ask me.

Return the result in the form requested in the task. For each number or change, add the page address it comes from so I can verify it.

Finally, write down the procedure for next time: under a heading with the task name, write where to go, the steps that worked (page address, filters, button names), and what the result should look like. Save it to the file ulohy-v-prohlizeci.md in the folder you work in; if the file exists, append the task at the end. If you don’t have access to the folder, skip this step.

Task:

## In Your Tool

### Microsoft Copilot
The browser is controlled by Copilot Cowork, only on the website `copilot.cloud.microsoft` opened in Edge and enabled by your admin. Paste the prompt into Cowork (toggle at the top next to Chat); AI works in your Edge where you are already logged in. When the site requests a password, it shows you the browser tab and continues after you log in. When finished, type “Save procedure as skill”; scheduled tasks are on the Automations page.

### ChatGPT
In ChatGPT, browser control is done by Work mode: in the ChatGPT desktop app, switch to Work and paste the prompt. Work has a built-in browser where you log in yourself; with the ChatGPT extension for Chrome, confirmed in Computer Use settings, it also works in your Chrome. Work mode does not save the procedure to a file, so have it create a scheduled task (Scheduled in the left panel).

### Claude
The Claude in Chrome extension for paid plans is added from the Chrome Web Store and you log in with your Claude account; it works only in Google Chrome, not Edge. In the Claude app, enable it among connectors (Connectors) under Claude in Chrome, then AI in Cowork or Claude Code works in your logged-in Chrome. Scheduled tasks are in Cowork in the left panel under Scheduled.

### Gemini
Gemini in Chrome, which controls the browser, is not available in the EU including Czechia, so do the task partially. Download the export from the web yourself, attach it in the Gemini app via Add from Drive or from your computer, and tell it what you want, e.g., “sum hours per person.” If the task repeats, have Gemini write an IT request for automatic data download.
## What Is Browser Control

Browser control is the English term for controlling the browser. AI sees the page it has open and clicks and types into it like you would. It can handle websites otherwise inaccessible: it can configure something in an app or browse your website to find broken links. If the app has a connector, i.e., a direct AI integration, use that instead because it’s faster and more reliable. Before a step requiring your approval, such as a purchase, submission, or work on a new website, AI pauses and asks.

Some tools work in your browser where you are already logged in and can access everything you can, including corporate systems behind VPN. Others have their own built-in browser where you log in separately.

`ulohy-v-prohlizeci.md` is a plain text file listing your browser tasks and the steps that worked. The `.md` extension means it’s written in [Markdown](glossary:markdown), a simple format where hashes `###` at the start of a line indicate headings.
## Let the Task Run Automatically

For a task repeated every week, you don’t even need to start it. Paste this instruction into AI that supports scheduled tasks, just change the task name to yours, and ask it to create a scheduled task. Where to find scheduled tasks in your tool is shown in the block “In your tool.”

```text
Every Friday at 3:00 PM, do the task “Weekly project hours” according to the file ulohy-v-prohlizeci.md. Save the result in the same folder with today’s date in the filename and write the three main numbers to me in a summary.
```

The task works with files on your computer and your browser, so it runs only when your computer is on, the AI app is open, and VPN is connected if needed.
## Example

Jana coordinates the construction of a new warehouse at a logistics company and every Friday sends management how many hours the team worked on the project. On Friday, October 9, 2026, she opens the project folder in AI that can control the browser, pastes the prompt, and adds this last line:

```text
In the work report system, download hours for this week for the New Warehouse project and return the sum for each team member and the total.
```

AI opens the report system, filters the project and the week from October 5 to 9, and downloads the export. The team worked 86 hours, most by Petr (31) and Lucie (24); AI includes the page address for each number. Jana opens the overview in the system and the total matches. AI writes this to `ulohy-v-prohlizeci.md`:

```text
### Weekly project hours
- Where: work report system, Reports section.
- Steps: filter Project New Warehouse, period Monday to Friday this week, Export to Excel button.
- Result: hours per team member and total, with page address for each number.
```

Next Friday, Jana just writes “Do weekly project hours according to `ulohy-v-prohlizeci.md`” and gets numbers for the new week.
## If You Get Stuck

- **AI says it can’t control the browser:** regular chat can’t do this. Enable browser control as described in the block “In your tool.” More in the [Chat, Cowork or Code](card:when-chat-is-not-enough) card.
- **IT won’t allow installing extensions:** use a browser that requires no installation: built-in browser in ChatGPT Work, Copilot Cowork in Edge, or Claude Cowork’s own browser, which you switch to in settings with Preferred browser. You log in there separately.
- **AI wanders the web too long:** add the section name or page address where it should look to the task and run it again.
- **AI doesn’t save the procedure for next time:** you’re working without folder access. Set the task as scheduled or run it next time in Cowork or Code mode opened in the folder.
## What You’ll Have Done

You have completed one web task you previously clicked through manually, verified the result on the source page, and the procedure with working steps is saved in `ulohy-v-prohlizeci.md`, so next time you can assign the task with one sentence.
## What’s Next

From the report AI downloads, you can prepare a meeting briefing directly; if you do this weekly, [save both steps as a skill](card:create-skill-from-proven-process). If a colleague should also receive the result and the task should report errors, set it as a [scheduled task](card:recurring-ai-task).
## Markdown

**What it is:** A simple plain text format where headings, lists, links, and other structure are written using a few common characters. Files typically use the `.md` extension.

**What it is not:** It is not a programming language nor a format intended solely for developers.

**Why a student needs it:** It remains easily readable and editable by both humans and AI, and can be transferred between different tools.

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
