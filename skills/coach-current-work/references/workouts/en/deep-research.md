# Do Deep Research

State what you need to find out and why. AI will review current sources, compare them, and prepare a basis for your decision.

## Do Deep Research

**Difficulty: easy.**\
**Time: approximately 15 minutes** for input and review. The research itself may take longer.
## When to use it

Use Deep Research when a quick chat answer is not enough. For example, when selecting a supplier, comparing tools, preparing for a meeting, or finding current regulations for a new market.

The best result does not come from a broad topic. “Tools for reporting” will return a general list. “Which three tools can handle monthly reporting from Excel for a medium-sized company in the EU and can be implemented within three months?” already specifies what AI should actually find out.
## What to prepare

- a question or topic,
- the decision for which you need the research,
- important constraints: period, market, budget, or options you want to compare,
- sources you want to prioritize or avoid.

Use an [approved AI tool](card:bezpecne-pouzivani). You can also attach [context of your work](card:custom-instructions) if you are allowed to use it.
## How to proceed

1. Tell AI what you need to find out and what you will do with the result.
2. Review the brief research assignment. Only then start Research or Deep Research.
3. Open sources for two claims on which the conclusion mostly relies. If the source does not support the claim, have AI correct the conclusion.

The number of links alone proves nothing. For price or product features, official documentation makes sense. For implementation experience, you also need an independent source.
## Before starting the research

The function is called Research or [Deep Research](glossary:deepresearch) depending on the tool. In ChatGPT, you start it from the sidebar, from the tools menu (+) in the input window, or by the command `/Deepresearch`.
The phrase “start Deep Research” alone does not guarantee that AI actually searches the web. Verify that the mode is available and enabled in your account. If not, AI should prepare an assignment that you transfer to another approved tool.
## AI exercise

Insert this [prompt](glossary:prompt):

Help me do Deep Research on the topic I am currently working on.

First, find out what I need to discover and for which decision or task I will use the result. Add only missing boundaries, such as period, market, compared options, budget, or types of sources. If I already have completed research, request it and proceed directly to source and conclusion review.

Before starting, show me a brief research assignment:
- main question,
- what you will compare,
- what is important for the decision,
- which sources you will prioritize,
- what the result should be.

Let me correct the assignment and wait for confirmation.

Then verify whether Research, Deep Research, or web search is actually available in this environment. If you cannot confirm this, do not pretend the research was done. Return the completed assignment for copying into another approved tool.

When searching:
- use sources current for the chosen period and distinguish publication date from the period the data refers to,
- prioritize original documents, data, laws, and studies,
- verify product features and conditions in official documentation,
- compare supplier marketing claims with independent sources,
- distinguish current state from plans and features in development,
- show contradictions between sources and explain possible reasons for differences,
- do not present anything that could not be opened or verified as confirmed.

Write the result as a basis for my decision:
1. short answer to the main question,
2. comparison of options according to what is important to me,
3. most important claims with direct links and source dates,
4. contradictions and unclear points,
5. recommendation and its disadvantages,
6. what I should do or verify next.

Select two claims on which the recommendation mostly depends. For each, give me a direct link and tell me what to check in the source. Wait until I open the source. If the claim is not confirmed or does not apply to my situation, correct the conclusion.

Return the result so it can be copied. You may offer saving to a file but do not write anything without my consent.

## Example

The finance team is selecting a tool for monthly reporting. They add Excel, company accounts, EU operations, and implementation within three months to the assignment.

AI will not just return a list of known applications. It compares them according to these conditions. Price and data export are supported by official documentation; implementation experience is sought in independent examples of similar companies. Where sources differ, it makes the difference visible.
## If you get stuck

- **The result is too general:** add market, period, or specific options. [Agreement on result](card:first-ai-use-case) helps.
- **The source does not confirm the claim:** show AI the difference and have the conclusion corrected. Then use [Result check](card:kontrola-vysledku).
- **Sources contradict each other:** compare dates and conditions. The contradiction may remain open.
- **Research is not available:** take the prepared assignment to another approved environment. [How to work with AI](card:when-chat-is-not-enough) helps with selection.
## What you will get

You will receive Deep Research with sources, contradictions, and clearly marked points that could not be verified. You will also know which two claims you checked yourself and what is still missing for the decision.
## What next

You can convert the research into a [web page](card:web-page-output), save the process as a [skill](card:create-skill-from-proven-process), or review it again through [Result check](card:kontrola-vysledku).
## Deep Research / Research

**What it is:** A mode or specialized tool for multi-step searching, comparing, and synthesizing information from multiple sources into a traceable output.

**What it is not:** It is not a typical quick chat response nor a guarantee that every cited link actually supports the claims in the text.

**Why a student needs it:** It helps choose the right mode for a complex question and reminds that important sources must still be opened and evaluated by a human.

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

## Mechanic: Argument Readiness Check

A brief check at the start of cards that produce an output for someone else. It is not a standalone card and has no separate completion. It is the counterpart to the `data-readiness-check` mechanic: that one ensures data is ready, this one ensures the intent is ready.

## When It Runs

When a person is preparing an output that someone else will see: a presentation, report, recommendation, offer, email to management, summary for a client. It does not run for outputs intended for oneself, for research, or for draft notes.

## Why It Exists

AI can generate twenty slides or three pages of a report from anything and it will look finished. An empty output is indistinguishable from a good one at first glance because the missing part is the intent, not the form. Three sentences from a person are the cheapest way to recognize this before creation, not after.

## What It Requires from the Person

Three things, none suggested by AI:

| What | Why AI Cannot Determine It |
|---|---|
| **Audience** | only the person knows who they are addressing and what those people already know |
| **Change** | what the audience should do or decide differently after reading |
| **Key Sentence** | the single sentence they should remember if they forget everything else |

## The Reverse Test

The key sentence is identified by two properties: it can be disagreed with and fits in one breath. The test is to invert it.

- *We want to improve customer experience* → the opposite is nonsense, so the sentence says nothing.
- *Stop developing the second app and return people to the first* → the opposite makes sense and someone would defend it. This is the key sentence.

If the sentence fails, AI will say so and let the person rewrite it. It does not rewrite it for them.

## What AI Does

1. Requests the three sentences and waits for them. Does not suggest or comment on them.
2. Performs the reverse test. If the sentence fails, explains why and returns it to the person.
3. Asks if the format matches the intent. If another output would better evoke the change, offers the `output-beyond-document` card and leaves the decision to the person.
4. Once the three sentences are ready, proceeds directly to the main exercise of the card and does not revisit them.

## What Remains for the Person

- Define the audience and the change,
- Write and possibly rewrite the key sentence,
- Decide if the format suits the intent,
- Decide what is context and what to omit if time runs out.

## Mechanic Output

Three lines inside the main work result, no separate document and no further check-in:

```text
Audience: ...
Change the output should evoke: ...
Key sentence: ...
```

## Routing

- **Three sentences are clear:** continue with the main exercise of the card.
- **Key sentence fails the reverse test:** let the person rewrite it, do not continue.
- **Sentence cannot be written at all:** usually the decision has not been made or the output has two goals. Split into two outputs.
- **Change would be better evoked by another format:** `output-beyond-document` card.
- **Missing materials or context:** `prace-s-kontextem` card.
- **Output already exists and is going out:** `kontrola-vysledku` card.

## Boundaries

- The mechanic does not assess content quality or truthfulness. That is done by the result check on the finished output.
- It does not run for outputs intended for oneself; asking about audience for personal notes is ritual, not help.
- If the person knows and writes the three sentences in half a minute, the mechanic ends. It does not delay someone who has the intent.

## Minimal Prompt Block

```text
Before you start creating anything, request three things from me and wait for them: who the output is for, what should change after it, and what single sentence it should carry. Do not suggest them to me.

Then try to invert my key sentence. If the opposite sounds like nonsense, tell me the sentence says nothing and let me rewrite it. Do not rewrite it for me.

When the three sentences are ready, proceed directly to the main task and do not return to them. If another format would better evoke the change than the one I want, say so in one sentence and leave the decision to me.
```

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

## Plan a Block

An optional product mechanic after completing a card, whose outcome leads to work that cannot fit into fifteen minutes. It is not a standalone card, has no separate completion, and does not increase the count of completed methods.

Cards are fifteen minutes long and end with an artifact. However, some of them only begin with an artifact: a phase map, a research brief, a skill design, or two branches for integration are created. The person leaves with a plan but no time, then returns to the work after ten minutes between meetings where nothing can be completed.

## When it is offered

- the card ended with a usable result and that result is the assignment for further work,
- that work has a clear end that can be named in one sentence,
- if normally broken down into short segments, it would fall apart because each return starts with reloading the context.

The mechanic does not appear when the work after the card really fits into fifteen minutes, when the next step is waiting for another person or approval, or when the card’s result has no follow-up work.

## What the person sees

A short option **Plan a Block** next to the common check-in. After opening, the AI asks only one thing: when the person realistically has such time. The rest is proposed automatically based on what was created in the card.

## What the AI creates

A block brief. The source is the result of the just-completed card; the mechanic does not invent a new topic. It contains five items:

- **one thing**, named as it looks when finished,
- **duration** between 60 and 120 minutes, with what fits inside and what does not,
- **what must be prepared in advance**: accesses, data, materials, prompt from the card,
- **what will be finished at the end**, i.e., a concrete result, not "progressed" or "in progress",
- **what to do with the remainder** that does not fit into the block so it does not remain hanging without a decision.

If it turns out that one thing is actually three, the AI will say so and offer which of them belongs in the first block. It does not propose splitting into three blocks in advance.

## Active time versus waiting

A block with AI has a different structure than a block of solo work because part of the time the tool runs. Research, agents, longer generation, or data processing take minutes to tens of minutes and the person does not have to sit through it.

Therefore, the brief distinguishes three types of time: active human work, AI running, and waiting for someone else. For AI running, it proposes what to do in the meantime, most often preparing the next step of the same result. Jumping into unrelated work breaks the block, even if it looks like utilized time.

If waiting would take most of the block, the mechanic says so directly: such a task belongs rather to [Let AI work when you are not there](card:recurring-ai-task).

## Calendar

The mechanic prepares event text: a title based on the one thing, duration, and in the description what must be prepared in advance. The person can enter it themselves.

The mechanic does not write anything into the calendar or any other shared system without permission and does not send invitations to anyone.

## Boundaries versus cards

| What it is not | Where it is |
|---|---|
| Reserved time for a team that needs a leader’s decision, canceled meetings, and a mentor on hand | card [Give the team a block for one real AI project](card:ai-sprint) |
| AI work when the person is not there | card [Let AI work when you are not there](card:recurring-ai-task) |
| Breaking down a project into steps and roles | card [Create AI-WBS for the first phase of a project](card:ai-wbs-project) |

The person schedules the block themselves and does not need anyone’s permission. This distinguishes it from a sprint, where that permission is a significant part of the work.

## What the mechanic does not include

Instructions for concentration, recommendations about phones, notifications, and environment. The library teaches walkthroughs. Advice of this kind would turn the mechanic into a sermon about work instead of preparing one specific block.

## Records

Information that a block brief was created can be added to the check-in. It is not a separate card completion. Whether the block took place is not tracked by the mechanic.

## First supported cards

- `ai-wbs-project`
- `deep-research`
- `ai-workflow`
- `create-skill-from-proven-process`
- `parallel-ai-workstreams`

Other cards with follow-up work longer than fifteen minutes, namely `risk-based-prototyping`, `optimize-then-automate`, `prace-s-daty`, and `sjednotit-data-z-vice-zdroju`, are candidates for the second wave. Attaching the mechanic to half the library right at the start would turn the choice into noise.
