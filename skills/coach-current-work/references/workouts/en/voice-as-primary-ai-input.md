# Dictate AI Tasks: Voice Instead of Typing

Speak about your task for two minutes as it comes to mind, and AI will create a clear task description and, after your corrections, the work itself.

## Dictate AI Tasks: Voice Instead of Typing

**Difficulty: easy.**\
**Time: approximately 15 minutes** with one real task.
## When It’s Useful

A supplier writes on Thursday that they won’t meet the deadline, and you need an email for management by Friday. You type into AI, “Write an email to management that the project is delayed,” and you get a polite, generic text. You didn’t write why it was delayed, what options you have, or that the director doesn’t read long emails because you didn’t want to type it all out.

By speaking, you include context you wouldn’t put in a written prompt, such as why the deadline shifted and what the director won’t read in the email.
## What to Prepare

- One real task, for example an email to management or a briefing for a meeting,
- Two minutes when you can speak aloud, for example in a meeting room,
- AI you use at work or AI in [Cowork or Code mode](glossary:workmode).
## How to Do It

1. Insert the prompt and send it. Then click the microphone icon in the message field and speak for two minutes: what you want, for whom, what you know, and what troubles you. Send the text, including any supporting materials, in the chat.
2. AI will return the task in bullet points with question marks next to names and numbers it didn’t understand. Correct it, even by voice, and let AI do the work and save the rule for next time.
3. In a new chat, dictate another task without a prompt. AI should first return the task in bullet points.

Don’t correct slips of the tongue or digressions; AI will handle them.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

In the next message, I will dictate a work task. I will speak as it comes to mind, so the text will include digressions, repetitions, and transcription errors. For now, just reply that you are listening.

From the dictation, first create a task description in these points:
- Goal: what should be created and its purpose.
- For whom: who will read or use it.
- What we know: facts, decisions, and materials you should base your work on. If I mention a file in the project folder, find and use it.
- Watch out for: what must not be missing, what I don’t want, and what troubles me.
- Output: format and length.

Mark names, numbers, dates, and technical terms that the transcription may have distorted with a question mark. If something essential for good work is missing, ask me no more than two questions. Show me the task description and wait until I correct or confirm it. Then do the work according to the corrected task.

Finally, save a rule for next time: when I dictate a new task, process it the same way—first the task points with question marks at uncertain places and after my confirmation, the work. Add to the rule the names and terms the transcription distorted, along with their correct spelling. If you work in a project folder, write this into the AGENTS.md file, and if it doesn’t exist, create it. Make sure you read it at the start of each work session in this tool; in Cowork, write it into the folder instructions. Otherwise, save it in your memory.

## In Your Tool

### Microsoft Copilot
In Copilot Chat, start dictation by clicking the microphone icon in the message field (Start dictation); Czech is among the supported languages. Copilot saves the rule for next time in memory and shows the message Memory updated; you can find an overview in settings under Chat settings › Personalization › Saved memories. If you don’t have memory, insert the rule into Custom instructions in the same place.

### ChatGPT
Start dictation by clicking the microphone icon in the message field, or in the desktop app by pressing Dictate; the Voice icon starts voice mode. ChatGPT saves the rule in memory (settings, Personalization › Memory); without memory, insert it into Custom Instructions. Codex in the ChatGPT desktop app writes it into `AGENTS.md` in the project folder.

### Claude
In the Claude app, dictate by clicking the microphone icon near the message field; the icon with a sound wave starts voice mode. Dictation also works in Cowork, where you select the project folder when assigning the task and AI records the link to `AGENTS.md` in the folder instructions. In Claude Code, start dictation with the `/voice` command and set Czech with `/config`.

### Gemini
Start dictation with the microphone in the message field; the transcription language follows the browser language, so set it to Czech. Gemini’s work account app has no memory, so at the end of the exercise type “Write me the rule as text.” Insert the rule into the instructions of a new Gem (Gems › New Gem) and dictate step 4 and further tasks in this Gem.
## What Dictation Is

Dictation is speech-to-text transcription. You speak, and words appear in the message field, so you see and can correct them before sending. Voice mode is a different feature: AI talks with you and answers aloud. Dictation suits task descriptions. On a phone, just use the microphone icon on the keyboard.

`AGENTS.md` is a file with AI rules in the project folder. AI in Cowork or Code mode reads it at the start of each work session, so you don’t have to repeat the dictation rule; where the tool needs to set it, AI does so according to the prompt. In regular chat, memory plays the same role: AI stores what should apply in other chats.
## Where to Dictate

The easiest is to dictate directly in AI. Microsoft Copilot, ChatGPT, Claude, and Gemini have a microphone icon in the message field, so you don’t install anything. The block “In Your Tool” shows where to find it.

You can dictate text into an email or document using built-in computer dictation:

- **Windows:** press Windows + H and speak.
- **Mac:** enable dictation in System Settings › Keyboard › Dictation, where you also set a shortcut.

If built-in dictation misunderstands you, try a dictation app. **Wispr Flow** dictates in over 100 languages and detects language automatically; **Soniox** explicitly offers Czech. Both run on Mac, Windows, iPhone, and Android and have free versions with weekly limits. On a company computer, IT may need to approve installation.
## Example

Lenka coordinates launching a new warehouse system. On Thursday, October 8, 2026, the supplier writes that the accounting integration won’t be ready by November 2. The written task would be “Write an email to management that the launch is delayed.” Instead, Lenka opens AI in the project folder, inserts the prompt, and then speaks for two minutes. She says the system can run without integration, but two colleagues would manually retype invoices for two weeks. Financial director Hrubeš will want to know the cost, and the director doesn’t read long emails. AI returns:

```text
Goal: inform management about the delay in integrating the warehouse system with accounting.
For whom: director and financial director (name “hrubě”?).
What we know: supplier won’t meet the November 2 deadline; system can run without integration, invoices then manually retyped by two colleagues.
Watch out for: financial director will want to know the cost; director doesn’t read long emails.
Output: five-line email.
```

The transcription turned Mr. Hrubeš’s name into “hrubě,” and AI marked it with a question mark. Lenka corrects two things: the name and the goal. Management must decide by Wednesday, October 14, whether to launch on November 2 without integration or postpone to November 16. AI writes an email with two variants, each stating how much extra manual work it means. It adds the rule to `AGENTS.md` with the line “Hrubeš (transcription: hrubě).” A week later, Lenka just speaks in a new chat, and AI first returns the task in bullet points.
## If You Get Stuck

- **AI starts answering aloud:** you started voice mode. Exit it and use the microphone icon directly in the message field. Dictation only transcribes speech to text.
- **Transcription is in English or doesn’t make sense:** dictation isn’t set to Czech. Check the app and browser language, and if transcription stays English, dictate the task on your phone using the keyboard microphone icon or use computer dictation from the block “Where to Dictate.”
- **After 30 seconds you don’t know what to do:** send what you have. AI will ask what it’s missing, and you answer by voice again.
- **AI doesn’t apply the rule in a new chat:** ask “What do you remember about dictation?” In Cowork or Code, check you opened the same folder as before. If memory is missing or disabled by your company in regular chat, save the rule as described in the block “In Your Tool,” or switch to [Cowork or Code](card:when-chat-is-not-enough).
## What You’ll Have Done

You have completed work AI did based on your dictated and corrected task description. In `AGENTS.md` or AI memory is the rule that AI first organizes dictated tasks, plus names that transcription distorts. In a new chat, you verified that next time just speaking is enough.
## What Next

If AI doesn’t do what you want even from a good task description, correct the result with specific feedback as shown in the card [Solve Today’s Task with AI](card:first-ai-use-case). Process recordings of meetings or conversations with others according to the card [Process Meeting Transcripts](card:konverzace-do-struktury).
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
