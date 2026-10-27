# Convene an Expert Panel: AI Peer Review

AI plays the roles of three to five experts including a skeptic and reviews your proposal before management or clients see it.

## Convene an Expert Panel: AI Peer Review

**Difficulty: easy.**\
**Time: approximately 20 minutes** with one nearly finished proposal.
## What it’s for

On Thursday, you present to management a plan for the company to switch to a new attendance system by the end of the year. You’ve read it three times and no longer see mistakes. Your colleagues don’t have time to review it, so weaknesses will only surface at the meeting where the plan will be rejected.

An expert panel provides peer review, a critical assessment of the proposal, before the meeting: objections that would only be raised there you’ll hear two days earlier, and you decide on changes yourself.
## What to prepare

- a nearly finished proposal, such as a project plan or offer,
- supporting materials it’s based on, like requirements, budget, or email,
- AI you use at work, or AI in [Cowork or Code mode](glossary:workmode).
## How to do it

1. Insert the prompt; attach the proposal and supporting materials in chat. The AI will ask who the proposal is for, suggest a panel, and after your confirmation, let it analyze the proposal.
2. Choose from the recommended changes which you accept, and for others write why not. The AI applies accepted changes and saves a new version, minutes, and procedure for next time.
3. Give the new version with minutes to a second AI, preferably from a different company: “Find what the panel missed.” Without a second AI, choose a different model or higher [thinking level](glossary:reasoning-mode) in a new chat.
## AI exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

Convene an expert panel to peer review my proposal before I send it further. The proposal is in this folder, or I will attach it; if you don’t know which file it is, ask me.

Read the proposal and ask me who it’s for and what must not fail. Based on that, select three to five experts as professional roles who would really read, implement, or bear the consequences of the proposal. One is a skeptic looking for why the proposal might fail. No more than two may be from the same field. For each, write one sentence why they are on the panel and wait for me to confirm or adjust the composition.

Then have the panel discuss the proposal in four rounds:
1. Positions: each expert says what holds up in the proposal and what bothers them most.
2. Peer review: experts respond to each other and the skeptic challenges the weakest assumption.
3. Summary: what they agreed on, where disagreement remains, and what new insights emerged.
4. Feasibility: what might go wrong during implementation and what it would cost according to the materials.

Each expert speaks no more than two sentences per round. If experts disagree, leave the disagreement and do not invent a compromise. Verify numbers and facts supporting arguments in the materials. Mark what cannot be verified.

At the end, write recommended changes to the proposal sorted by impact. For each, state who proposed it and who disagrees. Do not decide for me and wait for which changes I accept.

Then:
- Apply accepted changes and save the proposal as a new version in the same format next to the original file.
- Save the panel minutes next to the proposal in a file named like the proposal ending with -panel.md. Include panel composition, main objections, which changes I accept and which not, and why.
- Write the procedure for next time into expert-panel.md in this folder: how you compose and lead the panel and who we chose for this type of proposal. If the file exists, append to it.

If you don’t have access to the folder, give me the new version of the proposal in the same format as the original, the minutes, and expert-panel.md as downloadable files.

## In your tool

### Microsoft Copilot
Attach the proposal and materials in Copilot Chat via + next to the message field. Copilot will write the new version and minutes in chat and save them as Word documents in OneDrive via the Word agent from the Tools or Agents menu with your license. It will remember the procedure for next time if you write “Remember the expert panel procedure.”
For a second reading, open a new chat and select Think deeper at the top right.

### ChatGPT
Attach the proposal in a regular chat; ChatGPT will provide the new version, minutes, and procedure as downloads. Codex, the mode in the ChatGPT desktop app, works with folders and saves files next to the proposal. For a second reading, open a new chat and select High or Extra High in the message field.

### Claude
Claude creates the new version and minutes as downloadable files in a regular chat. In Cowork, select the folder with the proposal when assigning the task and AI saves files there. For a second reading, choose a different model or higher Effort in the menu next to the send button in a new chat.

### Gemini
Attach the proposal via Add files from your computer or Google Drive. Write “List only the new version of the proposal” and save the response via Share & export › Export to Docs as a Google Document; do the same for minutes and procedure. For a second reading, open a new chat, click the model name at the bottom of the message field, and select Pro with High thinking level if your license includes it.
## What is an expert panel

An expert panel is an English term for a group of specialists who jointly assess a proposal. Here, one AI plays all experts: for example, a manager who approves the plan, a colleague who will implement it, and a skeptic who looks for why the plan might fail. Experts challenge each other and summarize the debate’s conclusions at the end. Their views are simulated and numbers they rely on must be verified. It suits any proposal that cannot be easily withdrawn after submission.

One AI playing five experts may have one blind spot for all. Therefore, a second AI, preferably from another company, reads the new version. Each model, i.e., each AI version, overlooks different things, so the second often finds what the whole panel missed.

`expert-panel.md` and minutes files ending with `-panel.md` are plain text files in the folder. The `.md` extension means they are written in [Markdown](glossary:markdown), a simple text format.
## Let the panel convene itself

When you write proposals with AI in the same folder, you don’t have to convene the panel manually. Just add a rule in `AGENTS.md`, the file with AI rules in the folder. AI in Cowork or Code mode reads it at the start of each task and sets up what the tool needs according to the instruction below. It then convenes the panel automatically for every finished plan or offer and shows you recommended changes before handing over the proposal. The rule writes itself when you tell it:

```text
Add a rule to the AGENTS.md file in this folder: “Before handing me a finished plan or offer, convene an expert panel according to expert-panel.md and show me recommended changes. I decide which to accept.” If AGENTS.md doesn’t exist, create it. Make sure this tool reads AGENTS.md at the start of each task; in Cowork, write this into the folder instructions.
```
## Example

Petra coordinates the transition to a new attendance system at a logistics company with 140 people. On Tuesday, October 13, 2026, she has a finished plan for management: launch on December 1 in all three warehouses simultaneously with a budget of 380,000 CZK. She presents it at a meeting on Thursday. AI suggests a panel: the CFO who approves the plan, a warehouse shift supervisor, a payroll accountant, and a skeptic. Petra confirms the panel and after four rounds receives:

```text
Recommended changes sorted by impact

1. Date: December 1 starts the pre-Christmas peak, warehouses run three shifts, and there will be no time for training. Launch one warehouse in November first, the other two in January.
   Proposed by: shift supervisor. Disagrees: none.
2. Payroll: switching mid-month means two records for one payroll. Launch each warehouse on the first day of the month.
   Proposed by: payroll accountant. Disagrees: none.
3. Readers: remove new readers costing 120,000 CZK from the plan; according to the supplier’s offer, old readers also work with the new system.
   Proposed by: CFO. Disagrees: skeptic, two of five old readers in warehouse B are out of order.
```

Petra accepts the first two changes and keeps new readers in the plan because warehouse B would have to replace old ones anyway. AI saves the new plan version, minutes to `plan-dochazka-panel.md`, and procedure to `expert-panel.md`. Then Petra attaches the new version with minutes to a second AI used by the company from another vendor. It finds the plan doesn’t say who and when will notify employees of the change, so AI adds an email to all employees one week before launch. On Thursday, management approves the plan.
## If you get stuck

- **All experts say almost the same:** ask AI to replace one with a person who will have more work or lose money and make the skeptic stricter.
- **Panel speaks generally and doesn’t know your situation:** add the requirements or email the proposal is based on to the folder and have AI repeat the peer review round. To have AI know your situation every time, write it into the [AI rules file](card:agents-md).
- **Argument relies on an unchecked number:** have it verified via [Deep Research](card:deep-research), a mode where AI itself searches web sources, then change the proposal accordingly.
- **Rounds are long to read:** just read the list of recommended changes at the end. Check rounds only if you don’t understand why an expert proposes something.
## What you’ll have done

You have a new version of the proposal analyzed by the expert panel and read by a second AI, containing only changes you accepted. Next to it lies the minutes from which you and a colleague can see why you accepted or rejected each change. In `expert-panel.md` is the procedure for AI to convene the panel next time when you write “Convene an expert panel according to `expert-panel.md` on this proposal.” Attach `expert-panel.md` and the proposal in a regular chat; if AI remembers the procedure, the proposal alone suffices.
## What’s next

Compare numbers and claims marked by the panel for verification with the materials according to the [Check AI output](card:kontrola-vysledku) card. To have the panel handy in every folder, have AI turn `expert-panel.md` into a [skill](card:create-skill-from-proven-process), a guide AI loads automatically whenever you write “convene expert panel.”
## Markdown

**What it is:** A simple plain text format where headings, lists, links, and other structure are written using a few common characters. Files typically use the `.md` extension.

**What it is not:** It is not a programming language nor a format intended solely for developers.

**Why a student needs it:** It remains easily readable and editable by both humans and AI, and can be transferred between different tools.

## Prompt

**What it is:** An instruction for a specific interaction with AI.

**What it is not:** It is not the same as long-term context, a stored assistant, or an agent.

**Why the student needs it:** It triggers the exercise and guides its progress; it is not the main learning content.

## Deeper Reasoning Mode

**What it is:** An option where AI dedicates more computational time to analyzing the task before generating a response. The specific implementation and name depend on the product.

**What it is not:** It is not an automatic guarantee of correctness nor always the best choice for every task.

**Why the student needs it:** It helps decide when the complexity or importance of the task justifies longer wait times, higher resource consumption, or limited availability.

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
