# Write AI Rules for Your Team: One Page for Colleagues and Their AI

AI uses the guideline and two real situations to write what the team may do with AI and what is always decided by a human.

## Write AI Rules for Your Team: One Page for Colleagues and Their AI

**Difficulty: Medium.**\
**Time: about 15 minutes** with the guideline and two situations at hand.
## What It’s For

This card is for a manager or team leader who decides how the team works with AI. On Monday, Ondra asks if he may upload an export of complaints including customer names and phone numbers to his personal AI account. On Wednesday, you find out that Lucie let AI suggest which customers to reject complaints from, and sent three rejections without reviewing the orders.

When the team’s rules are on one page in a shared folder and AI colleagues read it at the start of each task, anyone unsure can ask their AI, which will answer according to your rules.
## What to Prepare

- The company AI guideline or an email from IT; if you don’t have one, that’s okay,
- Two situations where someone on the team hesitated about using AI, at least one involving decisions about people,
- The team’s shared folder opened in a work AI in Cowork or Code mode,
- A colleague who did not write the page and has five minutes at the end.
## How to Do It

1. Open the shared folder in AI in Cowork or Code mode, insert the prompt from the AI exercise and the guideline, then write both situations below the prompt. AI will save the page `pravidla-ai.md` into the folder.
2. Read the page and correct anything off: names for IT, personal data and legal matters, and what is always decided by a human. AI will list open questions at the end.
3. The colleague who did not write the page opens the folder in their AI and asks about a new case, for example annual bonuses. Where unsure what to do, have AI update the page.

If you only have a regular chat, see the When You Get Stuck section.
## AI Exercise

Insert this [prompt](glossary:prompt) into AI in Cowork or Code mode, opened in your folder:

Write a one-page set of AI rules for our team. Both colleagues and the AI they work with will read it.

Base it on the company rules I give you or you find in this folder, and on two situations from our work where colleagues hesitated how to proceed with AI. Company rules and client contracts take priority. Do not invent anything not in the materials; write it in the Open Questions section with the name of the person who will decide. If you don’t know who, ask me.

The page has five parts:
- Tools: which AI tools the team uses and for what work.
- Data: what may go into which tool, what must be replaced by generic labels before input (e.g., Client A), and what must never go into AI, such as passwords.
- What a human always decides: decisions about people (candidate selection, evaluations, bonuses, work distribution), customer responses involving money or promises, and anything not easily reversed. For each, write who decides and what they check before using AI’s result, including cases AI excluded.
- Who to ask: names and contacts for IT, personal data, and legal matters.
- What to do in case of error: immediate steps, who to report to, and how quickly.

Illustrate each rule with an example from our situations, without colleague names. Write concisely so even a new colleague understands, fitting on one screen. At the top, write who owns the rules and when the next review is.

If the team uses AI for candidate selection, people evaluation, or work distribution, add an open question for the person handling legal or HR in the company: how does the European AI Act assess such use?

Save the page as pravidla-ai.md in this folder. Then add to AGENTS.md in this folder: “At the start of each task in this folder, read pravidla-ai.md and follow it. If you encounter a situation not covered, say so and add it with the date, without names or personal data, to the Open Questions section. Do not change the rules yourself.” If AGENTS.md does not exist, create it. In Cowork, add the same instruction to the folder’s instructions.

Finally, show me the page and list the open questions.

## In Your Tool

### Microsoft Copilot
Cowork in Copilot works only with files on OneDrive and SharePoint, and Microsoft does not state that it reads `AGENTS.md`, so follow the “Company allows only regular chat” point. Add the AI Rules document to a Notebook (Notes, New Notebook), put “Follow the AI Rules document; suggest questions for [name] if not covered.” into Instructions, and share the Notebook with the team via Share.

### ChatGPT
Codex works with a shared folder in the ChatGPT desktop app (switch to Codex, open folder) and reads `AGENTS.md` itself. Without Codex, follow the “Company allows only regular chat” point: put the document into a project, add “Follow the AI Rules document; suggest questions for [name] if not covered.” to its instructions, and share the project via Share.

### Claude
In the Claude desktop app, choose Cowork and Work in a folder, or open the folder in Claude Code, which reads `AGENTS.md` itself. In Cowork, AI will write the instruction into the folder’s instructions per the prompt, and each colleague in Cowork tells their AI to do the same. Those working only in chat upload the page into a project.

### Gemini
Gemini with a work account does not work with folders on the computer, so follow the “Company allows only regular chat” point with the Gem bot. In Gem Bots, New Gem, add the document to Knowledge, put “Follow the AI Rules document; suggest questions for [name] if not covered.” into instructions, and share the Gem via Share. Upload the new page version to Knowledge replacing the old one.
## What a Human Always Decides

AI may prepare materials, order, or proposals. Decisions that change a specific person’s situation are made by a human: who goes to an interview, who gets a raise, who gets which work, and who is denied a complaint. That person knows the criteria, sees the materials, has time to check, and may reject AI’s proposal. If any of these are missing, the check is just clicking “I agree.”

Errors often hide in what AI excluded. Therefore, the human should also open a few excluded cases, for example five random resumes AI set aside. The decision-maker must be able to explain the decision to the affected person in their own words, without saying “it came from AI.”

If AI helps the team select candidates, evaluate people, decide on promotion or dismissal, distribute work by behavior or personal traits, or monitor performance, it may be a high-risk system under the European [AI Act](glossary:ai-act). From December 2, 2027, companies must assign oversight to a knowledgeable person with authority to change results and inform employees and their representatives in advance about such AI deployment. Whether this applies to your use is assessed by the person handling legal or HR. Recognizing emotions of people at work by AI is banned by the AI Act from February 2025, except for medical and security reasons.
## How AI Colleagues Follow the Rules

Besides the page, AI writes into `AGENTS.md` in the shared folder an instruction to follow it; in Cowork it also writes it into the folder’s instructions.

When a colleague opens the shared folder directly, AI reads `AGENTS.md` at the start of work. Tools that do not do this automatically should have the instruction from `AGENTS.md` added to their settings for this folder; see the “In Your Tool” block for how. Then AI colleagues read the rules and record situations not covered into open questions.

Team members working only in regular chat upload the page into a [project](card:asistent), a place in the AI tool where AI sees the same files and instructions in all conversations. However, open questions from chat must be sent to you by the colleague.
## Let the Rules Grow with the Team

The instruction in `AGENTS.md` ensures AI colleagues add every situation not covered by the page to open questions. Once a month, a scheduled task can review them and prepare a proposal to update the page. Insert this command into AI in Cowork or Code mode and ask it to create the scheduled task:

```text
On the first working day of each month, review pravidla-ai.md in the team’s shared folder. If new situations appeared in the Open Questions section, propose one rule with an example for each and write who should approve it. If the next review date is past, remind me. If nothing new appeared, write just one sentence.
```

If the task works with a folder on your computer, it runs only when the computer is on and the app is open.
## Example

Martina leads a six-person customer support team in an electronics e-shop. The company has an IT guideline from March: work data belongs only to company AI paid by the company. Martina opened the team folder “Support” in Cowork mode, inserted the prompt, guideline, and both situations from Monday and Wednesday. AI wrote the page, Martina corrected one name and shortened the part about what data may go where:

```text
AI Rules in Support (owner: Martina Horáková, next review: 15 Jan 2027)

Tools: company AI for customer responses, reports, and proposals. We do not use personal AI accounts for work.
Data: complaint exports only to company AI. Customer names and phones never to personal accounts, passwords nowhere.
What a human always decides: complaint rejection, discounts over 500 CZK, and colleague evaluations. AI prepares a proposal with reasons. The operator decides on complaints, Martina on evaluations. Before rejecting a complaint, the operator opens the order and photos.
Who to ask: IT Pavel Krejčí, personal data Jana Malá (data protection officer), everything else Martina.
In case of error: stop using the conversation and report what and where was sent to Pavel and Jana Malá the same day.
Open questions: may we put call evaluations from customers into company AI and let it suggest who to help with difficult calls? Decides Jana Malá with HR.
```

The next day Ondra opened the same folder in his AI and asked: a customer wants an 800 CZK discount for a delayed shipment and AI suggests approving it, may he send it? AI answered according to the page that discounts over 500 CZK are decided by a human and it cannot promise it alone. The page did not say who. Martina told AI to add “Discounts over 500 CZK are approved by Martina” to the decision section, and AI added it.
## When You Get Stuck

- **Company allows only regular chat:** insert the prompt without the paragraph starting with “Save the page as,” add the guideline as a file, and write both situations below the prompt. AI will write the page directly in chat. Save it as a document named AI Rules in the team’s shared folder and put it into a shared [project](card:asistent) where colleagues ask questions; see “In Your Tool” for how. There the colleague also asks about the new case from step 3 and sends open questions to you.
- **AI claims it saved the page but it’s not in the folder:** you are probably working in regular chat, which cannot save files. Switch to [Cowork or Code](card:when-chat-is-not-enough) and open the shared folder there. If you are not allowed to use it, follow the point above.
- **AI colleagues do not follow the rules:** have the colleague open the shared folder directly, not a subfolder, and ask AI if it sees `pravidla-ai.md`. If their tool does not read `AGENTS.md` automatically, have them add the instruction from it to the folder’s settings.
- **The page is too long or full of prohibitions:** ask AI to shorten each section to three lines and for each prohibition write what the team may do instead.
## What Will Be Ready

In the team’s shared folder, you have an AI rules page with examples from your work, names, and open questions. AI colleagues follow it thanks to `AGENTS.md` or folder settings, and record situations not yet covered into open questions. In teams working only in regular chat, colleagues have the page in their project. A colleague who did not write the page resolved a new case according to it.
## Legal Boundaries

This card helps you write team rules but does not replace legal advice and does not confirm that the rules comply with GDPR or the AI Act. What you may do is determined by your company’s rules, client contracts, [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/ces), and [AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/ces). The AI Act requires companies using AI to take measures supporting AI literacy of people working with it. The team rules page can be one of these measures.
## What Next

Show the rules to the team at a meeting and have AI update the page based on colleagues’ questions. How to do this is shown in the card [show the team the AI procedure](card:team-adoption-cycle). Add further AI instructions in the shared folder, for example how to write customer responses, into `AGENTS.md`. How to do this is shown in a [separate card](card:agents-md).
## EU AI Act

**What it is:** The European regulation on artificial intelligence. It distinguishes different roles, usage methods, and risk levels, imposing specific obligations on providers and entities that implement or use AI in professional practice.

**What it is not:** It is not a general ban on AI nor a single rule uniformly applicable to every tool and task. The mere information that something uses AI does not determine the legal category or specific obligation.

**Why the student needs it:** It helps identify which practical situations require further review and where to continue in the library.

| Your situation | Continue here |
|---|---|
| AI influences decisions about a specific person | [AI Rules for the Team](card:pravidla-pro-tym) |
| You decide on the use of AI on behalf of an organization, client, or your own professional practice | [AI Rules for the Team](card:pravidla-pro-tym) |
| The data involved includes personal information | [What You May Input into AI](card:bezpecne-pouzivani); GDPR rules also apply here |

AI literacy of people using AI on behalf of an organization, and the fact that a human always makes the final decision when working with AI, are addressed in the `rules-for-the-team` card.

**Source:** [Regulation (EU) 2024/1689, especially Article 4 and Article 50](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/ces)

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
