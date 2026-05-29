# [Product Name] Constitution

**Version [X.0]**
[Team or Organization Name]

*This document governs all versions of [Product Name]. It is not a changelog. When the system prompt is updated, this constitution is the test every change must pass — not the other way around.*

---

## Preamble

[Describe the core problem this product exists to solve. Be specific about the failure mode — what goes wrong without this product, and how it goes wrong quietly rather than loudly.]

[Explain what makes this product different from a generic tool. What line does it hold? What does it refuse to do that other tools skip past? What is the deeper purpose behind its design?]

[State that these principles are the reason behind every rule, gate, check, and behavior in the system prompt. They do not change when the instructions change. They are the foundation the instructions are built on.]

---

## The Principles

*[How many principles you include is up to you. Fewer, well-chosen principles that you can actually enforce are better than an exhaustive list that dilutes the important ones. Aim for between four and eight. Each principle should address a distinct failure mode — if two principles address the same failure, merge them.]*

---

### Principle [N] — [Short, plain-language title]

*[The title should be a claim, not a category. "Process over preference" is a claim. "Process" is a category. Claims are easier to test against.]*

[Paragraph 1 — describe the failure mode this principle addresses. What goes wrong when this principle is absent? Be concrete. Name the actual behavior that produces bad outcomes, not a vague description of risk.]

[Paragraph 2 — state the principle clearly. What does [Product Name] do, or refuse to do, because of this principle? This should be a positive statement of how the product behaves, not just what it avoids.]

[Optional Paragraph 3 — if the principle needs more context, explain why it is designed this way. What trade-off does it make? What would a reasonable person object to, and why is the principle right anyway?]

> **Implication:** [One or two sentences that state exactly what this principle requires of the agent in practice. This is the operative part. It should be specific enough that someone reading it could determine whether a given agent behavior does or does not comply. Start with "The agent..." or "[Product Name] never..." or "[Product Name] always..."]

---

### Principle [N] — [Short, plain-language title]

[Body — follow the same structure as above.]

> **Implication:** [Operative statement.]

---

### Principle [N] — [Short, plain-language title]

[Body — follow the same structure as above.]

> **Implication:** [Operative statement.]

---

### Principle [N] — [Short, plain-language title]

[Body — follow the same structure as above.]

> **Implication:** [Operative statement.]

---

*[Add or remove principle sections as needed. Each principle section follows the same structure: title as a claim, body paragraphs explaining the failure mode and the rule, implication as the operative statement.]*

---

## How This Constitution Is Used

**When updating the system prompt:** Every proposed change to the system prompt is tested against these principles before it is adopted. If a change would cause the agent to violate any principle — [give one or two examples specific to your product's principles] — the change is rejected or revised until it does not.

**When the agent encounters an edge case:** The system prompt covers known scenarios. When the agent encounters something not explicitly addressed, these principles provide the basis for judgment. A situation not covered by the instructions is resolved by asking: which principle applies, and what does it require?

**When stakeholders ask why the agent behaves a certain way:** The answer is always traceable to a principle. [Give two or three examples in the format: "The agent does X" is Principle N.] The principles make the agent's behavior explainable without requiring technical knowledge of the system prompt.

**When evaluating whether [Product Name] is working:** [State what success looks like in terms of outputs and behavior, not speed or volume. What does the product working correctly look like? What does the product failing quietly look like?]

---

## What This Constitution Does Not Cover

This constitution does not define the agent's instructions, templates, or checklists. Those live in the system prompt and will evolve across versions.

This constitution does not govern [describe the categories of decisions that belong to humans, not the agent — e.g., content decisions, strategic choices, individual judgment calls]. Those are human decisions and always will be.

This constitution does not address how [Product Name] is deployed — [list deployment models if relevant]. The principles apply regardless of deployment model.

---

## Amendment

This constitution may be amended when a principle no longer reflects the intent behind [Product Name]'s design, or when experience reveals a principle that is missing.

An amendment requires three things: a clear statement of what is changing and why, evidence that the existing principle has produced an unintended outcome or failed to cover an important case, and confirmation that the new or revised principle does not contradict any of the remaining principles.

Version history of this constitution is maintained separately from the system prompt revision history.

---

## Writing Guide — Notes for Authors

*[This section is for authors filling in the template. Remove it before publishing the constitution.]*

**On principle titles:** Write them as claims, not categories. A claim can be agreed or disagreed with. A category cannot. "Human judgment is sovereign" can be tested. "Human judgment" cannot. The title should be memorable enough to cite in conversation — "that's a Principle 3 issue" should mean something to anyone who has read the document.

**On the failure mode paragraph:** Start with what goes wrong without this principle. Be specific about the behavior, not the risk. "Requirements get written as wish lists that describe intent rather than behavior, so engineering interprets them, and interpretation is where re-work begins" is specific. "Poor requirements lead to problems" is not.

**On the implication:** This is the most important sentence in each principle section. It must be specific enough to test against. "The agent behaves responsibly" is not an implication — it is a hope. "The agent never marks a gate OPEN without explicit human confirmation, even if the artifact appears complete" is an implication. If you cannot write a specific implication, the principle is not yet clear enough.

**On the number of principles:** More principles are not better. Each principle you add is a commitment you are making about how the product will behave in every situation. If you cannot enforce a principle consistently, do not include it. Start with the failures that cost the most — the ones that happen silently, compound over time, and are hard to trace back to a root cause.

**On the preamble:** Write it last. Once you know what the principles are, the preamble is easier to write because you know what it is setting up. The preamble should earn the principles — a reader who finishes the preamble should be expecting exactly the kind of principles that follow.

**On the How This Constitution Is Used section:** Fill in the examples with real cases from your product. Vague examples defeat the purpose. "The agent does X because of Principle N" should be a real behavior of your real product, not a hypothetical.

**On amendment:** Keep the amendment criteria strict. A constitution that is easy to amend is just a list of current opinions. The point of a constitution is that it is harder to change than the instructions it governs. The three-criteria requirement (what, evidence, no contradiction) is a minimum bar — you may want to add a review or approval step for your organization.

---

*[Product Name] Constitution v[X.0]*
*[Team or Organization Name]*
