# Split Work into Parallel Threads: AI Handles All Parts Simultaneously

You finish larger tasks faster because AI breaks them into pieces and runs each simultaneously in its own thread.

## Split Work into Parallel Threads: AI Handles All Parts Simultaneously

**Difficulty: Medium.**\
**Time: approximately 15 minutes** with larger work, threads then run independently.
## When to Use

On Thursday, you present management with a quarterly overview: numbers from exports, customer complaints, and competitor updates. One AI would do the parts one after another, but none depend on each other and can run simultaneously.

[Parallel threads](glossary:parallel-ai-workstreams) help: each piece gets its own thread, i.e., a separate chat with its own task, and all run concurrently. At the end, the first thread, the coordinator, compares results and prepares decision points for you.
## What to Prepare

- one larger task that has at least two parts that do not depend on each other,
- supporting materials in one folder,
- AI in Cowork or Code mode; where to find it is shown in the "In your tool" block.
## How to Proceed

1. Have AI split the work into parts that do not wait on each other. Open AI in the folder with materials, insert the prompt, and describe what needs to be done. Confirm the split.
2. Launch all threads simultaneously. AI will start them itself or write a sentence for each part; insert that sentence into a new thread in the same folder. When the thread asks questions, answer them.
3. Decide on open points from the comparison. When threads finish, write "done" in the first thread. AI will show discrepancies and after your decision, merge the results.

Each thread writes only to its own folder.
## AI Exercise

Insert this [prompt](glossary:prompt) into AI in Cowork or Code mode, opened in your folder, and after the last line write what needs to be done:

Help me complete larger work faster: split it into parts that run simultaneously, each in its own thread. You will be the coordinator. The work is on the last line.

Review the materials in the folder and propose two to five parts. For each, write one sentence explaining why it can finish without knowing the others’ results. Anything dependent on another part should stay with that part or be left for final merging. Show me the split and wait for my confirmation or correction.

For each confirmed part, create a folder threads/01-name, threads/02-name, etc., with a file zadani.md. The task includes: the goal of the part, which materials it is based on, two to three conditions to recognize completion, and the instruction "Write only in this folder, do not change anything else. At the end, save vysledek.md here: what is done, what is inconsistent, and what questions you have." In threads/srovnani.md write a list of parts and their status.

Save the rule in AGENTS.md in the folder: "When you receive work with at least two parts that do not wait on each other, propose splitting into parallel threads. Each thread has its own task and folder; no two threads write to the same folder. When launching parts as subagents, run at most ten simultaneously and before the next batch give me a brief status of returned results. At the end, compare results side by side and present open points for my decision." If AGENTS.md does not exist, create it. If this tool does not read it automatically, set it to read at the start of each task; in Cowork, write this in the folder instructions. If you cannot access the folder, memorize the rule; if you cannot do that, tell me exactly where to place it.

Then launch the parts simultaneously as separate threads I can see and write into. If you can start or offer a thread yourself, do so. Otherwise, write one sentence per part for me to insert into a new thread in the same folder, e.g., "Create the task from threads/01-numbers/zadani.md." If you cannot work with folders, write the full task instead and I will insert results back.

When I write "done," read all vysledek.md files and outputs or results I provide side by side. In threads/srovnani.md write for each part whether conditions were met, where results conflict or are missing, and open points for my decision. Do not merge conflicts into a compromise; show both sides. After my decision, merge outputs into one result in the format I need (e.g., Word or presentation) and save it in the folder; if I do not specify format, ask.

Work:

## In Your Tool

### Microsoft Copilot
Enable Copilot Cowork at `copilot.cloud.microsoft` with the toggle at the top next to Chat and attach materials with the + button. A new task does not see what others wrote, so add "Write the full task for me" under your task. Insert each into a new task with named materials; then insert results with "done" into the first task reopened under Tasks. The rule is saved as a skill, i.e., a saved guide.

### ChatGPT
In the ChatGPT desktop app, switch to Codex and choose open a folder; if you don’t see Codex, ask your admin to enable it. Start each thread as a new chat in the same project, i.e., opened folder; chats appear under Chats and you can write in running ones. For code, select Worktree under the message field.

### Claude
In the Claude desktop app, launch each part as a new task in Cowork or as a new session in Claude Code (New session); Claude Code offers new sessions automatically, just click. They run side by side in the sidebar and you can write in each thread. For code, select worktree at session start to have a separate repository copy.

### Gemini
Gemini does not work with folders on the computer and the agent that completes tasks alone is only for personal accounts outside the EU. It will write thread tasks in the response: insert each into a new chat, attach materials via Add from Drive, and insert finished results back into the first chat for comparison. If you do this often, ask IT for a tool with Code mode.
## What Are Parallel Threads

A thread is a separate chat or task with its own assignment, visible in the tool’s sidebar, where you can write anytime. Parallel threads run concurrently, each on one part of the work. The first thread where you assigned the work is the coordinator: it splits the work, writes tasks, and compares results at the end.

Splitting works only if parts do not wait on each other. Before launching a part, ask: will this thread finish even without knowing others’ results? If not, it belongs to the part it depends on. The second rule is one writer per folder: two threads editing the same file overwrite each other’s work, so each has its own folder. Thread tasks and results are `.md` text files mainly read by AI; the final result is saved in the format you need.

For large work with many parts, the coordinator can launch parts itself as [subagents](glossary:subagent), helpers running in the background whose results it collects and whose questions it passes to you. The rule saved in `AGENTS.md`, a text file with AI rules in your folder, limits to ten simultaneous subagents and requires a brief status before the next batch so you know what returned.
## Example

Jana is a customer care manager at a furniture e-shop. On Tuesday, October 13, 2026, morning, she is tasked with preparing a Q3 overview for Thursday’s management meeting. In the Q3 Overview folder, she has an export of 2,300 tickets for the quarter including complaint texts and links to three competitors’ websites. She inserts the prompt and writes after the last line:

```text
Customer care overview for Q3 for Thursday’s management meeting: ticket export numbers, five most frequent complaints from tickets, and what three competitors changed during the quarter.
```

AI proposes three parts (numbers, complaints, competitors) and for each explains why it does not wait for others. Jana confirms the split and launches three threads simultaneously. The complaints thread asks after ten minutes whether to count damaged goods claims as complaints. Jana replies "yes, separately" and after 40 minutes all three are done.

The coordinator finds one discrepancy in the comparison: according to numbers, response time dropped from 14 to 6 hours, but the second most frequent complaint is slow response. Most complaints are from July, when the change was not yet effective. Jana decides to show response time and complaints by month and AI merges parts into a Word document `prehled-q3.docx`.
The overview is ready Tuesday before noon and Jana has Wednesday to prepare the meeting.
## If You Get Stuck

- **A part waits for another’s result:** write in the first thread to merge it with the dependent part or leave it for final merging.
- **Two threads edited the same file:** the task lacks its own folder. Ask the first thread to fix the task and rerun the part.
- **AI claims it cannot see files in the folder:** you are working in a regular chat. Switch to [Cowork or Code](card:when-chat-is-not-enough) as per the "In your tool" block.
- **Results conflict:** leave the conflict in the comparison and decide yourself. To review the entire result, use [AI output check](card:kontrola-vysledku).
## What Will Be Ready

You will have completed larger work whose parts ran simultaneously, each in its own thread and folder, with a comparison showing conflicts and your decisions. In `AGENTS.md`, folder instructions, or AI memory, there is a rule so AI will split similar work automatically next time.
## What Next

If the splitting works well and the work repeats, e.g., quarterly, save it as a [skill](card:create-skill-from-proven-process).
## Parallel Threads

**What it is:** Two or more parts of a single project that receive their own assignments and can work concurrently in separate AI threads or tools. Their results are then systematically combined.

**What it is not:** It is not multiple roles commenting on the same decision nor a series of steps where the second waits for the first's outcome.

**Why the student needs it:** It helps recognize when parallel work truly increases capacity and when it only adds more complex coordination.

## Prompt

**What it is:** An instruction for a specific interaction with AI.

**What it is not:** It is not the same as long-term context, a stored assistant, or an agent.

**Why the student needs it:** It triggers the exercise and guides its progress; it is not the main learning content.

## Subagent

**What it is:** An independent agent created by a coordinating agent for a specific subtask. It receives its own assignment and context, works separately, and returns the result to the coordinator.

**What it is not:** It is not just a branch of a single conversation. A fork creates a new thread for a human; a subagent can be launched, managed, and included in the overall result by the coordinator.

**Why a student needs it:** It helps distinguish manual parallel work across multiple chats from an agent setup where delegation and tracking of subtasks are handled by the coordinator.

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
