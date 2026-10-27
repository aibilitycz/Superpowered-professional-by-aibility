# Prepare a Handoff: Transferring Work in Progress

AI writes a one-page handoff of work in progress, enabling a colleague or a new chat to continue without reading the history.

## Prepare a Handoff: Transferring Work in Progress

**Difficulty: easy.**\
**Time: about 15 minutes** with one work in progress.
## What It’s For

You are on vacation for a week starting Friday, and your colleague Pavel will finalize the selection of a new cleaning service provider. You write him three sentences in an email. On Monday, Pavel spends half the morning checking which offer is still valid, then calls you at the beach asking if he may renegotiate the price with the provider.

A short one-page handoff would have sufficed. AI writes it from the chat and materials, and Pavel can see where the work stands and what to do first.
## What to Prepare

- One work in progress you are handing over, postponing, or moving to a new chat,
- The chat where you last worked on it, or main emails and notes about it,
- The AI you use at work; preferably in [Cowork or Code](glossary:workmode) mode.
## How to Do It

1. Insert the prompt into the chat where you last worked on the task. If it happened outside AI, insert it into a new chat with main materials and a few sentences about where the work stands.
2. Read the handoff as a colleague who wasn’t involved, and tell AI what is missing or redundant. In Cowork or Code, it saves it as `handoff.md`; in a regular chat, you get it in the reply.
3. Open a new chat and write “Continue according to `handoff.md`,” or in a regular chat paste the handoff with materials. AI should state where the work stands and propose the next step without asking questions.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

Prepare a handoff: a short transfer of work in progress. A colleague or a new chat should continue from it without reading the entire history or asking questions.

Base it on our chat, the materials I attach, insert, or write below this task, and on files in the project folder if you have access. If something is missing for any point, ask me—no more than five questions at once. Write the handoff in this format:

### Handoff: task name (date)
- Goal: what should be completed, for whom, and by when.
- Completed and verified: what is done and how we know, e.g., file, link, or confirmation from a specific person.
- In progress: what is started and its status.
- Next step: one specific thing the recipient should do first.
- Done when: how to recognize the work is finished.
- Boundaries: what must not be changed or done without agreement.
- Missing: open questions and materials or accesses the recipient does not yet have.
- Materials: files and links to work with.

Write for someone who was not involved in the work and keep it to one page. Do not rewrite the chat or include dead ends, passwords, or personal data the recipient does not need. Anything you cannot verify from chat, materials, or my answers, write under “Missing” and do not guess.

If you work in the project folder, save the handoff to the file handoff.md. If it exists, overwrite it because only the latest handoff applies. If you cannot work with files, do not save anything and write the entire handoff in the reply.

Finally, save a rule for next time: “When I write ‘handoff,’ prepare the transfer in this format.” In a regular chat, save the rule and handoff format in memory; if you have no memory, tell me. When working in the project folder, write the rule and format into AGENTS.md, creating it if it doesn’t exist. Add to the rule: “Save the handoff to handoff.md. If handoff.md exists in the folder, read it at the start of each new task. When the work is done, write ‘Closed’ and the date on its first line and do not treat a closed handoff as a task.” Ensure you read AGENTS.md at the start of each task in this tool; in Cowork, add it to folder instructions.

## In Your Tool

### Microsoft Copilot
In Copilot Chat, you get the handoff in the reply. If Work IQ is enabled, Copilot sees your emails, meetings, and files, so you don’t need to insert them; just specify which work it concerns. Copilot saves the rule for next time in memory (Saved memories in Settings and more, Chat settings, Personalization) unless disabled by the admin.

### ChatGPT
In a regular ChatGPT chat, you get the handoff in the reply and AI saves the rule in memory (Settings, Personalization, Memory) unless disabled by your company. Codex works with folders on your computer: in the ChatGPT desktop app, switch to Codex and choose open a folder. Codex reads `AGENTS.md` automatically, and scheduled tasks appear under Scheduled.

### Claude
In a regular Claude chat, you get the handoff in the reply and AI saves the rule in memory (Settings, Memory), which the admin enables for business accounts. In Cowork in the Claude desktop app, AI saves `handoff.md` to the selected folder and writes the rule into folder instructions; Claude Code reads `AGENTS.md`.

### Gemini
In Gemini, you get the handoff in the reply and can save it as a Google Doc via Share & export, Export to Docs. It finds Gmail emails if you write @Gmail and the thread topic in the prompt. Business accounts have no memory, so save the handoff format as a skill (write “Save this as a skill”) and next time just write “handoff.”
## What Is a Handoff

A handoff is the English term for transferring, like a relay or shift handover. It includes the goal, what is done and verified, the next step, how to know it’s done, what must not be changed, and what is still missing. In Cowork or Code, it is a plain text file `handoff.md` in the project folder, editable in any text editor. Only the latest handoff applies: AI overwrites it at each transfer and marks it closed when the work is done.

Handoffs are also useful when you leave work for a few days or when the chat is so long AI forgets the initial agreements. AI can only keep a limited amount of text in one chat, so in very long chats it loses the beginning and confuses old versions with new ones. The handoff transfers only what is currently valid to a new chat.

`AGENTS.md` is a file with AI rules in the same folder. Many tools in Code mode read it automatically at the start of each task; where the tool cannot, AI saves the rule in its settings or tells you where to insert it. Next time, just write “handoff” and AI knows what and where to write.

Only include in the handoff what the recipient needs to continue; AI omits the full chat, dead ends, and personal data the recipient doesn’t need, per the prompt. In a regular chat, AI saves the rule for next time in memory. Then paste the handoff into an email to your colleague and attach the referenced materials.
## Let the Handoff Write Itself

If you work on multiple projects in Cowork or Code within one folder, handoffs can be generated automatically every Friday before you leave work for the weekend. Just schedule a task. Open AI in Cowork or Code mode in that shared folder, insert this task, and ask it to create a scheduled task:

```text
Every Friday at 4:00 PM, go through subfolders of this folder where work was done this week and is not yet finished. Save a new handoff.md in each using the format from AGENTS.md in that subfolder. If the rule is missing, use the format from the existing handoff.md, and if both are missing, skip the subfolder. At the end, tell me which projects still have items under “Missing.”
```

If the task works with files on your computer, it will run only if the computer is on and the app is open.

On Monday, open a new chat in the project folder and write only “Continue according to `handoff.md`.”
## Example

Eva is selecting a new office cleaning provider for the company. On Thursday, October 15, the day before her vacation, she inserts the prompt into the chat in Cowork mode where she compared offers with AI. While reading, she notices the contact person at EkoClean is missing; AI adds it, and the `handoff.md` then contains:

```text
### Handoff: cleaning provider selection (October 15, 2026)
- Goal: signed contract with the chosen provider by October 30, who will start cleaning on December 1.
- Completed and verified: comparison of three offers is in the file srovnani-nabidek.xlsx; Čistota Plus and Úklid Brno confirmed prices by email on October 13.
- In progress: EkoClean promised a revised offer by October 20.
- Next step: call Petra Horáková from EkoClean on Monday, October 19, to check if the offer will arrive on time.
- Done when: the CFO approves one provider and the contract is signed.
- Boundaries: no renegotiation of price; the cap is 42,000 CZK per month.
- Missing: contract template from legal department; Pavel does not yet have access to the shared Purchasing folder.
- Materials: srovnani-nabidek.xlsx and offers in the nabidky folder.
```

Eva then opens a new chat in the same folder and writes “Continue according to `handoff.md`.” AI replies that the selection is waiting for EkoClean’s offer and suggests calling Ms. Horáková on Monday. It asks no questions, so Eva pastes the handoff into an email to Pavel and attaches the comparison table. If AI asked which selection it was, the new chat would likely be in a different folder than the handoff.

In a regular chat, Eva would paste emails from providers and attach the comparison table in the new chat. She would get the same handoff in the reply, paste it into another new chat with “Continue according to this handoff,” and send it to Pavel by email.
## If You Get Stuck

- **In a regular chat AI saves nothing:** it cannot save files, and if chat memory is off, it won’t save the rule either. You have the handoff in the reply and must insert the prompt again next time; to have AI save handoffs automatically, switch to [Cowork or Code](card:when-chat-is-not-enough).
- **New chat asks about decisions already made:** write its questions into the original chat, have AI update the handoff, then reopen the new chat.
- **Handoff is almost as long as the chat:** ask AI to shorten each point to one or two sentences and leave details in the referenced materials.
- **Chat is so long AI forgot the start of the work:** open a new chat, insert main materials and the prompt, then add a few sentences about where the work stands.
## What Will Be Ready

You have a handoff from which a new chat continued without questions, and you can send the same handoff to a colleague. In Cowork or Code it is saved as `handoff.md` in the project folder, and `AGENTS.md` contains the rule so AI writes the handoff next time you just write “handoff.” In a regular chat, AI keeps the rule in memory; if the chat has no memory, you insert the same prompt next time. You can close the old overloaded chat.
## What’s Next

If the next step after the handed-over work involves AI, for example, creating a contract from the selected offer and then a report for management, and you do this repeatedly, [save the entire process as a skill](card:create-skill-from-proven-process). The overall project status is summarized on the [project’s home page](card:project-start-here), which AI writes just like the handoff.
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
