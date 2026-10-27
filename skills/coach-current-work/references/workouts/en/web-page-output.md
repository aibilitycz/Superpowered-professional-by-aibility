# Send a Link Instead of an Attachment: AI-Generated Web Page

Instead of a PDF attachment, send a link to a clear page created by AI from your document.

## Send a Link Instead of an Attachment: AI-Generated Web Page

**Difficulty: Medium.**\
**Time: about 15 minutes** with one document you want to send.
## When It’s Useful

On Monday, you sent management a monthly report as a PDF attachment. On Wednesday, the director asks about a number on the second page during a meeting because she couldn’t open the attachment on her phone, and meanwhile a colleague forwarded an older version with a summation error.

The page AI creates from the document has the main message at the top, reads well on a phone without zooming, and after corrections everyone sees the current version.
## What to Prepare

- One document you want to send, such as a monthly report or offer, in a folder,
- Company logo as an image in the same folder, or the company website address,
- AI that can create a page with a link; where available, the block “In your tool” shows this.
## How to Do It

1. Open AI in the folder with the document, preferably in Cowork or Code mode, or attach the document. Insert the prompt and add the document name, who the page is for, and the website address.
2. Review the page and tell AI what to change. Then set who can open the page and copy the link; where to do this is shown in the block “In your tool.”
3. Open the link on your phone, and if sending outside the company, also in an incognito browser window to see the page as the recipient will. Then send it instead of an attachment.
## AI Exercise

Insert this [prompt](glossary:prompt) into the AI you use at work, and on the last line add the document name, who the page is for, and optionally the company website address:

Make a web page from the document that I will send as a link instead of an attachment. The document and the intended audience are on the last line.

Read the entire document and determine what the reader needs to know and do. Put one sentence with the main message at the top and immediately below it the next step for the reader: deadline, decision, or contact. Below that, expand details into short sections with headings. Copy numbers, prices, dates, and names exactly from the document. Do not invent anything missing; tell me what I should add.

Use the company’s colors, fonts, and logo. The logo is in the folder; take colors from the logo or from the company website if I provide its address on the last line. The page must be easy to read on a phone.

Create the page so it can be shared by link: in Claude as an artifact, in ChatGPT as a Site (website). Then show it to me.

Immediately after, save a template for next time in the file sablona-stranek.md in your working folder: colors, fonts, logo placement, and page section order. When I ask you to change the look or order, apply it both on the page and in the template. Add a rule to the file AGENTS.md in the same folder: “When preparing reports, instructions, or offers for colleagues, clients, or management, also prepare a web page according to sablona-stranek.md.” If AGENTS.md does not exist, create it. Make sure this tool reads it at the start of each work session; in Cowork mode, add it to the folder instructions.

Document, audience, and optionally company website address:

## In Your Tool

### Microsoft Copilot
Insert the prompt into Copilot Chat and attach the document; if AI does not save anything to the folder, that’s fine. Under the response, select the three dots and Edit in Pages; then share the page via Copy link and colleagues open it in Loop. It does not have your colors and people outside the company cannot open it, so send the document as before to clients. The template is remembered if you write “Remember this page layout for next time.”

### ChatGPT
The page as a Site is created by Work or Codex mode in the ChatGPT desktop app, Codex directly with the folder. In preview, click Share, choose Anyone on the internet or for colleagues Anyone in the workspace, then Publish and Copy link. Edits are under Sites in the left panel. If you don’t have Sites, the admin enables it; meanwhile send the document as before.

### Claude
In Claude app, choose Cowork and select the folder; the page is created as an artifact and the template saved in the folder. In the company plan, click Share and under Who has access choose Anyone at your company name. In Pro or Max plans, publish it for people without Claude accounts using Publish. Copy the link with Copy link button; free plans cannot share.

### Gemini
In Gemini app, choose + Canvas, attach the document and logo, and insert the prompt; it’s fine if nothing is saved to the folder. Create the page by selecting Create a Web page, share the link via Share & export and Share. With a company account, it’s a snapshot shared via Drive: after edits share again and outside the company only if Drive allows. Save the template in Gemu (Gems, New Gem, instructions, Save).
## What Is an AI Page

An AI page is a finished product created by AI alongside chat and given its own link. The link opens in a browser on computer and phone, so the recipient downloads nothing. Unlike a shared file on OneDrive or Google Drive, the page rearranges the document: one sentence with the main message and deadline at the top, text reads on phone without zooming, and the page uses your company’s colors and logo. It’s suitable for reports, instructions for colleagues or customers, and offers.

A public link can be opened by anyone you send it to, even if forwarded. In company plans, sharing outside the company is enabled by the admin.

`sablona-stranek.md` is a plain text file with colors, fonts, logo, and page section order. `AGENTS.md` is a file with AI rules in the same folder. Both are written by AI and you don’t need to open them.
## Let AI Make Pages Automatically

AI will create further pages automatically according to the rule saved in `AGENTS.md` or folder instructions; it saves the rule only in [Cowork or Code mode](card:when-chat-is-not-enough). It reads it at the start of each session, so the next document you send will be prepared as a page in your colors. To get a page from a specific document immediately, just say one sentence:

```text
Make a page from nabidka-firemni-vylet.docx for the client according to sablona-stranek.md.
```

You don’t have to resend the monthly report every time. Open the conversation where the page was created, ask AI to update it with new numbers, and publish the update as before. People will then see the new numbers on their link.
## Example

Lukáš is responsible for new clients at an accounting office. He sends each an eight-page PDF about uploading documents to the online portal, but clients still call because they can’t open the attachment on their phones. On October 14, 2026, he opens AI in Code mode in the New Clients folder, where the guide `nahravani-dokladu.docx` and the office logo are stored. He inserts the prompt and on the last line adds:

```text
nahravani-dokladu.docx, for new clients: upload documents for September by the end of the month
```

AI creates the page and shows a preview. At the top it says: “Upload September documents by 10/31 via the portal; it takes ten minutes.” Below are four numbered steps with screenshots from the guide and Lukáš’s phone number in case of issues. Lukáš tells AI to enlarge the steps because clients read them on phones. Then he sets the page to be open to anyone with the link, copies the link, and opens it in incognito mode and on his phone. He sends the first three clients a one-sentence message with the link instead of the PDF.

In November, the portal moves the upload button. Lukáš opens the conversation where the page was created and writes:

```text
The Upload button is now at the top right in the portal; update step 2 accordingly.
```

After publishing the update, clients open the same link and see the new procedure.
## If You Get Stuck

- **AI returns only code or a file instead of a page:** tell it “make this a page with a shared link.” In Claude, enable Code execution and file creation in Settings > Capabilities; in ChatGPT, add `@Sites` at the start of the prompt; in Gemini, enable Canvas. In company plans, page creation is enabled by the admin.
- **Option for people outside the company is greyed out or missing:** in company plans, your AI tool admin enables external sharing. Ask them to enable it or share the page only with colleagues for now.
- **Recipient sees a login page instead of the page:** check sharing settings to confirm who can open the page. Links from Share in Claude open only for logged-in users; send clients without accounts a page published via Publish in Claude Pro or Max, or a Site from ChatGPT with Anyone on the internet.
- **Page shows different numbers than the document:** ask AI to compare all numbers on the page with the document and list differences. More in the [Result Check](card:kontrola-vysledku) card.
## What You’ll Have

You have a page from your own document and a link you opened on your phone as the recipient will see it, and you sent it instead of an attachment. AI saved the layout template for next time in Cowork or Code mode in the file `sablona-stranek.md`, so you can request the next page with one sentence.
## What’s Next

If you need to present the content live in a meeting, have an [outline of the presentation](card:tvorba-prezentace) prepared from the document. Before sending a page with important numbers, review the [Result Check](card:kontrola-vysledku).
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
