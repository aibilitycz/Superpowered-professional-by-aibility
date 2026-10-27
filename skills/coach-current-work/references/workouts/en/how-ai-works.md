# Understand How AI Works: When to Trust It and When to Verify Its Answers

In your work, you will learn when to trust AI, when to let it search the web, what to verify, and AI will save a rule from this.

## Understand How AI Works: When to Trust It and When to Verify Its Answers

**Difficulty: easy.**\
**Time: approximately 20 minutes** with one task from this week.
## What It’s For

At tomorrow’s client meeting, you want to say by how much prices rose this year in your field, and AI gave you 7% along with the survey name. The answer sounds certain, but you don’t know if AI actually knows this number or just guessed it, or if it can know anything about this year at all.

When you understand how AI composes answers and when it searches the web, you’ll recognize which statements to verify before telling the client.
## What to Prepare

- This week’s task, summarized in one sentence, e.g., project status or an email,
- Similar work you did well, such as last year’s email or offer,
- A recent industry update and a question needing a number; if you don’t have these, AI will select them,
- The AI you use at work, preferably one with web search.
## How to Proceed

1. Insert the prompt into a new chat, add your field and task at the end, and send it. The update and question are optional. How to get an answer without web search is shown in the “In Your Tool” section.
2. Type “next” and open the source AI provides for the number. Use Ctrl+F to find the number in it and tell AI whether it’s there.
3. Answer AI’s questions about the task and insert a successful similar work example. AI will save the rule; in a new chat, ask “What verification rule do you know from me?”

AI will always tell you what to send next.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work:

I want to see how you work based on my task and set when I trust you and when I verify you. We will do two short trials together; the data for them is at the end of this message. Write simply, I’m just starting with AI. Close each trial with two sentences: what it showed about how you work and what it means for my work. At the end of each answer, write one sentence telling me what to send next and wait for me.

Trial 1: without web and with web.
a) Do not search the web now. Write up to which month and year the texts you were trained on go, and answer only from them two things: what you know about my update and what is the number for my question, including the source. Write the number specifically as you normally do; if you don’t know it without the web, say so. If I don’t fill in the update or question, pick a topic from my field where things change quickly and a question for which people in my field often look for a number. If you can’t skip web search, say so at the start of your answer.
b) When I write “next,” search both on the web. Compare it with your answer without the web: what was missing, what was outdated, and whether the number matches. For each claim, provide the source with a link and date. Then tell me which source to open and what exactly to search for with Ctrl+F, exactly as written in the source, and wait until I tell you if it’s there. Then explain why your answer without the web sounded so certain, whether it was right or wrong.

If you don’t have web access, tell me. I will search the source myself and send you the link.

Trial 2: what context does. Write the output for my task only from that one sentence. Do not add anything you know about me from elsewhere: not from trial 1, memory, or attached documents. Then ask me in one message everything you need: who the output is for, what it should fulfill, what else I know, and if I can provide a similar successful work example. If I don’t have one, your description will suffice. When I answer, write the second version. Show two specific places where the versions differ and for each say which information from me caused the difference.

Finally, from what the trials showed, write my rule “When I Trust AI and When I Verify”: three to four short lines for my work, no general advice. At least one line should say what you must do, for example, search the web for numbers and updates, provide the source with link and date, and if you don’t have a source, write “unverified.” Save the rule in memory so it applies in every new chat and tell me it’s saved. In Cowork or Code, write it into your permanent instructions that you read in every task. If none of this is possible, tell me exactly where to insert it.

My field and work:
This week’s task in one sentence:
Recent update from the last months (optional):
Question I need a number for (optional):

## In Your Tool

### Microsoft Copilot
Copilot Chat searches the web automatically and shows sources under the Sources button, so the answer without the web may not work. To get it, turn off the Web Search toggle (three dots top right, Settings and more, Chat settings, Customize, Advanced) and turn it back on before “next.” Copilot saves the rule in memory; otherwise, insert it into Custom Instructions in Customize.

### ChatGPT
ChatGPT searches the web automatically when the question needs current info. You can manually trigger it via View all tools, Search, or by typing a slash in the message field and choosing Search. Open the source by clicking the citation in the text. ChatGPT saves the rule in memory; if you don’t have memory, insert it into Custom Instructions in Settings, Personalization.

### Claude
Enable search with the + button bottom left, Web search item; where the button is missing, Claude searches automatically. In Team and Enterprise plans, the organization owner must enable web and memory first. Claude saves the rule in memory (Settings, Memory); otherwise, insert it into Instructions for Claude in Settings. In Cowork and Claude Code, AI may ask permission to search the web or save the rule; allow it.

### Gemini
Gemini searches Google automatically and has no toggle; sources appear under the Sources button. The answer without the web may not work; Gemini only knows what’s newer than its knowledge cutoff from the web. The work account has no memory or custom instructions, so save the rule as a skill: write “Save this as a skill” and find it in Customize, Skills.
## What a Language Model Is

A language model is the AI you chat with. Four of its properties explain what you saw in the trials and why a long chat gets tangled:

- **It writes word by word.** It composes answers by predicting the next best word each time, like a phone’s autocomplete but much more capable. That’s why it sounds equally certain when right or wrong.
- **It knows the world up to a certain date.** The model trained on texts up to a date called the knowledge cutoff. It knows newer things only from the web when it searches or from materials you provide.
- **It can handle only a limited amount of text at once.** Everything it sees in one conversation—your messages, attachments, and its own answers—must fit into the context window. It’s large, but in a long chat, AI loses sight of the beginning. For long work, have AI summarize it and insert the summary into a new chat.
- **It follows what you write.** The same task with different context yields different answers, so you largely determine output quality.

Web search is a tool the model uses when what it learned isn’t enough: it reads a few current pages and answers from them. Even a source with a link doesn’t guarantee the AI’s claim is in it, so it’s worth opening one.
## Example

Tereza Malá buys materials for an engineering company in Olomouc. She does the workout on October 12, 2026, and adds at the end of the prompt: purchase of aluminum profiles, an email to the supplier about a discount, this year’s change in aluminum prices, and a question about how long companies in engineering usually wait for invoice payments. She needs that number for a briefing for the director.

- **Trial 1:** Without the web, AI writes up to when its knowledge goes, knows nothing about this year’s aluminum prices, and answers the invoice question confidently with days and the survey name. With the web, it brings three reports on prices from the last month and finds the survey. Tereza opens it, searches the number with Ctrl+F, and sees a different one covering all industries.
- **Trial 2:** From the sentence “Write an email to the supplier that we want a discount,” a polite email without any numbers is created. When Tereza adds an annual order of 40 tons, a 6% cheaper competitor offer, and last year’s successful email, the second version has five sentences, the requested discount, and a reply deadline of October 31.

AI saves in memory:

```text
When I Trust AI and When I Verify:
- For prices and updates from the last year, search the web even if I don’t ask.
- For every number and citation, provide the source with link and date; if no source, write “unverified.”
- I will open the number on which decisions are based in the source myself.
- I will provide you with volume, competitor offer, and a template for supplier emails, and I read your proposal fully.
```

A week later, AI adds a link to the aluminum price on the stock market overview from October 19 and writes “unverified” next to one number in the briefing.
## If You Get Stuck

- **AI searches the web even in the no-web part:** some tools search automatically, as shown in “In Your Tool.” It’s okay: AI only knows what’s newer than its knowledge cutoff from the web. Continue with “next.”
- **You can’t find the number in the source or can’t open the link:** tell AI and ask for another source. This is also a trial result and belongs in the rule.
- **AI can’t access the web:** find the source yourself in a search engine and insert the link into the chat; AI will compare it with its answer. Web search in the company is enabled by the IT admin, so ask them.
- **You don’t know if AI saved the rule:** in a new chat, ask “What verification rule do you know from me?” If AI doesn’t know it, memory is probably off; insert it into [Custom Instructions](card:custom-instructions), permanent instructions for every chat.
## What Will Be Ready

You have an improved version of this week’s task, a number you found yourself in a source, and the rule “When I Trust AI and When I Verify” saved in AI. From your own work, you know why AI sounds certain even when wrong and when to send it to the web.
## What’s Next

When AI prepares output with numbers for you to send out, [check it against sources](card:kontrola-vysledku). If you need more than one answer from the web, such as comparing dozens of sources, have AI do [Deep Research](card:deep-research). If you need numbers from the web regularly, have AI [download live data](card:live-web-data) with source and date.
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
