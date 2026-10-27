# Use Vibe Coding: AI Builds a Tool for Your Colleagues

Colleagues calculate the offer price themselves in a small tool that AI builds for you from your spreadsheet.

## Use Vibe Coding: AI Builds a Tool for Your Colleagues

**Difficulty: medium.**\
**Time: about 15 minutes** with a price list and one completed case.
## What It’s For

Colleagues from sales call you several times a week asking you to calculate the offer price.
You’re the only one who knows the spreadsheet with the price list and formulas. Last week you were on vacation and a colleague sent the client a price without the weekend surcharge.

With [vibe coding](glossary:vibe-coding), that is programming by description, you simply describe what should be calculated, and AI writes a tool where a colleague enters the number of guests and immediately sees the price with a breakdown.
## What to Prepare

- The price list your colleagues use for calculations, in a shared folder that you also have on your computer,
- One completed case with the correct result in the same folder, for example a sent offer,
- One colleague who will test the tool first,
- AI in Cowork or Code mode; where to find it is shown in the “In your tool” block.
## How to Proceed

1. Open AI in Cowork or Code mode in the shared folder with the price list and insert the prompt. Add on the last line what the tool should calculate, who will use it, and where the completed case is.
2. AI will save the tool as `kalkulacka.html`. Open it by double-clicking, enter the completed case, and compare the result; write to AI what doesn’t match or doesn’t work and have it fix it.
3. Tell your colleague where to find `kalkulacka.html` in the shared folder and have them calculate their nearest case. Send AI what didn’t work for them in their own words.
## AI Exercise

Insert this [prompt](glossary:prompt) into AI in Cowork or Code mode,
opened in your folder with the price list, and on its last line add what the tool should calculate, who will use it, and in which file the completed case is. You can see what such a line looks like in the Example.

Build a small tool from the calculation that colleagues repeatedly do manually in a spreadsheet, which they can open themselves. What it should calculate, who will use it, and in which file the completed case with the correct result is, you will find on the last line. If you are not working directly in the folder with the price list, tell me immediately.

Go through the price list or spreadsheet in the folder and identify all calculation rules: prices, surcharges, discounts, rounding, and conditions. If you can’t recognize a rule from the formulas in the spreadsheet or the materials contradict each other, ask me and show me an example.

Save the tool as a single file kalkulacka.html in the same folder as the price list. It must open by double-clicking in a regular browser without installation or internet, so embed the price list directly in it. At the top will be fields the colleague fills in, below the result with a breakdown showing how the number was reached, and a button that copies the breakdown so the colleague can paste it into an email or offer. Use wording that colleagues use for labels. If a field is left empty or contains nonsense, the tool should clearly say what to correct.

Calculate the completed case in the tool and compare the result with the correct one. If they differ, find the rule that calculates incorrectly, fix it, and compare again. Then tell me where to find kalkulacka.html and what to enter to verify the result myself.

Write the calculation rules in plain words into the file kalkulacka-pravidla.md in the same folder, including the price list date and the completed case on which you verified the tool. Add a rule to the AGENTS.md file in this folder: “When the price list or calculation rules change, update kalkulacka.html and kalkulacka-pravidla.md accordingly. Then calculate the completed case according to the new price list and report how much and due to which items the result differs from the original.” If AGENTS.md does not exist, create it. Make sure to read AGENTS.md at the start of each work session in this folder; in Cowork, record this in the folder instructions.

What the tool should calculate, who will use it, and in which file the completed case is:

## In Your Tool

### Microsoft Copilot
Copilot Cowork at `copilot.cloud.microsoft` saves new files to its Cowork folder on OneDrive, not your shared folder. Attach the price list and completed case with the + button, insert the prompt, and add “Build the calculator as an Excel workbook, no need to work in the folder.” Move the workbook to the shared folder and send colleagues the link; Cowork saves the rule as a skill.

### ChatGPT
Code mode is in ChatGPT Codex in the ChatGPT desktop app: select Codex and open the shared folder with the price list (open a folder). Codex saves `kalkulacka.html` directly there and writes the rule into `AGENTS.md`.

### Claude
In the Claude desktop app, open Cowork or Claude Code with the shared folder containing the price list. AI saves `kalkulacka.html` directly there; in Cowork it records the rule in the folder instructions.

### Gemini
Gemini builds the tool in Canvas: in the Gemini app, choose + Canvas, attach the price list and completed case, and insert the prompt. If it says it’s not working in a folder, reply “continue in Canvas” and test the case in preview. Send it to colleagues via Share & export and Share; anyone with the link can see the price list. After a price list change, write in the same chat to have the tool updated.
## What Is Vibe Coding

Vibe coding is the English term for programming by description: AI writes the code and you control it with plain sentences. You describe what the tool should calculate, AI writes the code, and you test the tool on a case where you know the correct result.
You don’t have to program, and the tool only calculates, so it doesn’t change anything in the spreadsheet or company systems.
It’s suitable for anything calculated repeatedly by the same rules: offer price from a price list, travel expenses, corporate event budget, or number of people on a shift. The tool includes only fields colleagues actually fill in and the result they need to send on; add more features only if someone asks.

The tool from this card is a single web page that calculates. The file `kalkulacka.html` opens in a browser like any other page, but the colleague doesn’t need internet or AI to use it. A regular chat tool can write it too, but won’t save it in the folder or update it after a price list change.

Unlike the page from the card [Send a Link Instead of Attachment](card:web-page-output), which shows the same content to everyone, the tool lets a colleague enter their own numbers and get their own result. When you need one answer from data just for yourself, just [ask your data](card:prace-s-daty).

As long as the tool calculates only from a copy of the price list and the colleague reads the result themselves, you can give it to colleagues immediately; if it writes into a company system, like CRM with customers, or clients open it directly, coordinate first with the system administrator.

`kalkulacka-pravidla.md` and `AGENTS.md` are plain text files AI writes itself and you don’t need to open them. `AGENTS.md` contains AI rules for the shared folder and AI reads them at the start of each session.
## Keep the Tool Up to Date with the Price List

The rule in `AGENTS.md` ensures AI updates the tool and written rules after every price list change and shows you how the price of the completed case changed. When a new price list applies from January, save it in the same folder and write:

```text
From 1/1, the new price list cenik-2027.xlsx applies. Update the calculator accordingly and tell me which prices changed.
```

Because the tool is in a shared folder, colleagues open the new version directly after the update and you don’t have to send anything.
## Example

Petra is a sales assistant at a catering company in Brno. Salespeople calculate the buffet price in a spreadsheet: menu per person, one waiter per 20 guests, a 15% surcharge on Saturday and Sunday, and transport 30 CZK per kilometer both ways. On October 13, 2026, she opens AI in Cowork mode in the shared Offers folder, where `cenik-2026.xlsx` and an offer sent last week to an accounting firm in Boskovice are stored: buffet for 80 guests on Saturday 10/24, 42 km from Brno, 52,200 CZK excluding VAT. She inserts the prompt and on the last line adds:

```text
Buffet price from cenik-2026.xlsx for salespeople who tell it to clients on the phone. The completed case is nabidka-boskovice.pdf.
```

On the first try, the calculator shows 52,578 CZK. Comparing, AI finds it calculates the weekend surcharge also on transport, fixes it, and gets the same number as in the offer. Petra opens the tool, enters the same buffet, and copies the breakdown with a button:

```text
Buffet Standard, 80 guests × 450 CZK: 36,000 CZK
Service, 4 waiters × 1,800 CZK: 7,200 CZK
Saturday surcharge 15%: 6,480 CZK
Transport 42 km both ways: 2,520 CZK
Total excluding VAT: 52,200 CZK
```

Then she writes to Ondřej to calculate the wedding he’s currently handling in the calculator from the Offers folder. Ondřej replies he wasn’t sure whether to enter kilometers one way or both ways. Petra sends his sentence to AI and the field is now named “Distance from Brno, one way (km)”.
## If You Get Stuck

- **AI claims it saved the tool but it’s not in the folder:** you’re probably working in a regular chat that can’t save files. Switch to [Cowork or Code](card:when-chat-is-not-enough) and open the shared folder with the price list there.
- **AI asks about a rule you don’t know:** ask it to show the formula from the spreadsheet it estimates the rule from and calculate one case by it. If you still don’t know, ask the colleague who calculates with the spreadsheet most often.
- **Colleague sees code instead of the tool or can’t open it:** have them download `kalkulacka.html` to their computer and open it by double-clicking, not via OneDrive or Teams web page. You can also send colleagues a link: ask AI to make the tool a page with a shared link and share it only with company people as in the card [Send a Link Instead of Attachment](card:web-page-output).
- **The tool calculates differently than the spreadsheet:** tell AI what you entered, what the tool showed, and what the correct result is. AI will find the faulty rule and fix it in the tool and in `kalkulacka-pravidla.md`.
## What Will Be Ready

In the shared folder you have the tool `kalkulacka.html` that calculated the completed case the same as your spreadsheet, and the first colleague knows where to find it. Next to it is `kalkulacka-pravidla.md` with calculation rules and in `AGENTS.md` a rule that after a price list change AI updates the tool and shows how the completed case price changed. You update the price list with a single sentence.
## What’s Next

Before giving the tool to the whole team, have AI compare several of its results with the spreadsheet as shown in [AI output verification](card:kontrola-vysledku). When more people in the team start building tools with AI, write shared [rules for AI](card:pravidla-pro-tym).
## Prompt

**What it is:** An instruction for a specific interaction with AI.

**What it is not:** It is not the same as long-term context, a stored assistant, or an agent.

**Why the student needs it:** It triggers the exercise and guides its progress; it is not the main learning content.

## Vibe coding

**What it is:** A method of creating a website, application, script, or other software output where a person describes the intent and desired behavior, and AI generates or modifies the code. The person continuously tests and adjusts the result.

**What it is not:** It is not an independent programming language nor a guarantee that the generated code is correct, secure, or ready for production use.

**Why a student needs it:** It helps to identify an accessible path to their own prototype while distinguishing a quick experiment from a solution that requires testing and expert review.

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
