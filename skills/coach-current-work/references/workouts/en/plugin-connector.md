# Connect the Connector: AI Works Directly in Your Applications

AI automatically reviews your mail and saves draft replies directly into your mailbox.

## Connect the Connector: AI Works Directly in Your Applications

**Difficulty: easy.**\
**Time: approximately 15 minutes** with work mail and calendar.
## What It’s For

Before the Tuesday meeting, you want to handle five emails waiting since last week.
You copy each into chat and paste the reply back into mail. On the third, you realize
the date AI suggested is already booked in your calendar.

A connector links AI with an application: AI reads mail and calendar through it,
so you don’t copy anything and it won’t suggest a date you already have booked.
## What to Prepare

- Access to your work mail and calendar; sometimes an admin enables the connection,
- The AI you use at work; where it has connectors, it shows the block “In your tool”,
- For Cowork or Code mode, a folder for rules, for example a new empty `Mail` folder.
## How to Do It

1. Insert the prompt. AI will detect which mail and calendar connectors it has, connect those available,
   and tell you where to click for others. You confirm login yourself.
2. AI selects up to five emails from the last week that you need to reply to;
   newsletters and copies are just counted. Drafts are saved to your mailbox for you to review, edit, and send.
3. In a new chat, write only “Reply to the newest email waiting for a response.” AI should save the draft and verify the date in the calendar automatically.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

Connect to my work email and calendar and start working directly in them so I don’t have to copy anything into chat.

Ask me which email and calendar I use at work. Then find out which connectors or plugins you have here for them. If a plugin covers multiple of my apps at once, prioritize it. Connect what you can yourself. Where I need to do something, like log in or grant access, tell me exactly where to click and wait until I do it. Access mail and calendar only through connectors. After connecting, verify that the connector can save email drafts. If it can’t, find another connector or plugin. If none is found, connect mail via the Composio service, and if that’s not possible here, tell me where to switch.

Once everything is connected, do this:
- Review mail from the last seven days and select up to five emails I haven’t replied to yet but should, starting with the most urgent. For each, state the sender, what it’s about, and the reply deadline.
- Write a reply for each and save it as a draft directly in my mailbox. If the reply depends on a date, check when I’m free in the calendar.
- Don’t send drafts; I will review and send them myself.

Finally, save a rule for next time: which apps you have connected, that you save mail replies as drafts, and verify dates in the calendar. If you work in a folder, write it into the file AGENTS.md, and if the file doesn’t exist, create it. Make sure you read AGENTS.md at the start of each work session in this tool; in Cowork, add it to the folder instructions. In a regular chat, save the rule to memory.

## In Your Tool

### Microsoft Copilot
Insert the prompt into Copilot Cowork at `copilot.cloud.microsoft` (switch Cowork at the top next to Chat); mail and calendar are connected directly and no folder is needed.
Replies are saved as drafts in Outlook and the rule as a skill. Without Cowork, Copilot Chat prepares drafts and remembers the rule under Personalization.
Scheduled tasks are on the Automations page.

### ChatGPT
Enable the Outlook or Gmail connector in settings under Plugins, in a new chat via + next to the message field. Drafts are saved in Plus, Pro, Business, and Enterprise plans; in companies, an admin enables it. ChatGPT saves the rule to memory, Codex to `AGENTS.md`. Scheduled tasks are under Scheduled.

### Claude
Connectors are found in the left panel under Customize, Connectors; in a new chat, enable via + next to the message field. The Microsoft 365 connector saves drafts only if an admin allows writing. In Cowork, AI connects the connector itself and writes the rule into folder instructions. Scheduled tasks are under Scheduled.

### Gemini
In the Gemini app, type @, select Gmail and Calendar, and insert the prompt; reply “continue only with Gmail and Calendar” to the Composio offer. Gemini finds emails and suggests replies, but saves drafts only in Gemini Gmail via Ask Gemini at top right. Save the rule as a skill (Customize, Skills). Scheduled tasks are under Scheduled.
## What Is a Connector and Plugin

A connector links AI with one application. Depending on its capabilities, AI only searches and reads, or also writes: saving email drafts or creating calendar events.
You connect CRM (customer and sales management system) or shared drives the same way. In settings, a connector is sometimes called an MCP server; MCP is a technical standard for AI connections to apps, and you don’t need to know more.

A plugin is a package for a specific task. It adds several connectors and instructions for AI to work in them, for example for sales: CRM, email, and how to write offers.

If no connector exists for your app or mail is read-only, use Composio. It’s a service connecting AI to over a thousand apps, like Outlook, Gmail, or CRM, and can save reply drafts in mail.
It’s set up in Cowork or Code mode and AI does it automatically; you just create an account in Composio and confirm app access. The basic account is free and requires no payment card. In corporate accounts, ask IT before connecting if you may use it.

`AGENTS.md` is a plain text file with AI rules in the folder where you work. AI in Code mode reads it at the start of each session, so you don’t have to explain connected apps every time.
## Let AI Review Mail Automatically

With connected mail and calendar, AI can review mail for you every morning.
Just schedule a task that AI runs every workday morning and leaves reply drafts in your mailbox. Insert this instruction into AI and ask it to create the scheduled task. Where to find scheduled tasks in your tool is shown in the block “In your tool.”

```text
Every workday at 7:30 AM, review mail received since the last run via the connector. Select emails I haven’t replied to yet but should, starting with the most urgent, and save a reply draft for each in the mailbox. Verify dates in the calendar. If nothing requires a reply, write nothing.
```
## Example

Jana coordinates moving the office to a new building. On Monday, October 12, she has 38 unread emails in her mailbox. After connecting Outlook and calendar, AI returns:

```text
Emails to reply to (4 of 38 emails)

1. Moving company: wants to confirm the move on October 24. Reply today.
   Draft: confirming the date; calendar shows availability that day.
2. Petr from IT: asks when he can connect the network on the new floor. Reply by Wednesday.
   Draft: proposing Thursday, October 15 at 9:00 AM, when calendar is free.
3. Furniture supplier: needs a date to sign the handover protocol. Reply by Friday.
   Draft: I will sign the protocol when receiving furniture on October 22.
4. Management: wants a brief project status for Friday’s meeting.
   Draft: move on October 24, network on October 15, furniture on October 22.

Drafts are saved in the mailbox. The remaining 34 emails are newsletters and copies for information.
```

Jana reviews drafts, changes Petr’s time to 10:00 AM, and sends all four. The next morning in a new chat, she writes only “Reply to the newest email waiting for a response.” AI finds the reception’s query about parking cards, verifies the date in the calendar, and saves the draft.
## If You Get Stuck

- **Connector missing or won’t enable in settings:** ask AI if one exists for your app. If yes, in corporate accounts an admin likely enables it and AI will send a short request: which connector you need and why. If none exists, connect the app via Composio.
- **Connector can only read mail:** in Cowork or Code mode, ask AI to connect mail via Composio or find another connector that can also save drafts. Switch from regular chat to [Cowork or Code](card:when-chat-is-not-enough).
- **AI says it can’t see mail:** check that the connector is enabled in this chat; in ChatGPT and Claude via + next to the message field, in Gemini by mentioning @Gmail in each new chat. If enabled, login probably failed or you logged into a different account. Have AI verify the account and reconnect.
- **AI doesn’t save draft or verify date in new chat:** in Cowork or Code mode write: “Read `AGENTS.md` and make sure you read it at the start of each work session automatically.” In regular chat, ask AI if it has the rule in memory or instructions, and if not, ask where to save it.
## What Will Be Done

You have connected mail and calendar to AI and sent replies to the most urgent mail from the last week. AI has saved the rule for drafts and calendar, and you verified in a new chat that it follows the rule.
## What’s Next

If you want the morning mail review to run reliably and report errors automatically, continue to [scheduled task](card:recurring-ai-task). If one work session produces two follow-up steps, for example a table from emails and replies from the table, set up a [workflow across multiple apps](card:cross-app-workflow).
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
