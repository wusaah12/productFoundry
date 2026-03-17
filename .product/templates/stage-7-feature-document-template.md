# Stage 7: Feature Document Template

> User story specification with Gherkin acceptance criteria. One per feature in Release Plan. Must be specification-complete before handoff to engineering. Each user story maps directly to a Jira issue.

---

## Feature Document — [Feature Name]

**Release:** [Release Plan name/version]  
**Feature #:** [Number from Release Plan]  
**Contributing roles:** [PM / Eng Lead / Designer — who reviewed]  
**Status:** DRAFT

**Created:** [DATE]  
**Last updated:** [DATE]  
**Owner:** [Your name]

---

## Overview

[2–3 sentences. What does this feature do and for whom? Must be consistent with Mission Statement.]

**Example:**  
"This feature generates an automated weekly status report by querying closed Jira tickets, summarizing outcomes by project, and delivering to Slack. It removes the manual burden of engineering managers to compile status updates, freeing 1–2 hours per week."

---

## Goals

1. [Goal tied to Release success criterion]  
   *Why this goal matters:* [How it serves the Mission]

2. [Goal]  
   *Why this goal matters:* [How it serves the Mission]

---

## Non-Goals

[Explicitly what we're NOT doing in this feature and why it's deferred]

- **[Non-goal 1]** — Deferred to [Phase 2 / Feature 2 / later] because [reason]
- **[Non-goal 2]** — Deferred to [Phase 2 / Feature 2 / later] because [reason]

---

## User Stories

> Minimum 3 user stories per feature: one happy path, one edge case, one error/failure case.  
> Each story maps to one Jira issue. Copy the block between `---` markers as a single Jira issue.

---

### User Story 1: [Happy Path Title]

> **Jira fields**  
> **Summary:** [Story title — same as heading above]  
> **Type:** [Story / Enabler] 
> **Priority:** [High / Medium / Low]  
> **Story Points:** [ ]  
> **Labels:** happy-path, [release-version]

**User Story:**  
As a **[role]**,  
I want **[action or capability]**,  
so that **[measurable benefit or outcome]**.

**Acceptance Criteria:**

```gherkin
Scenario: [Descriptive name — what situation this covers]
  Given [the initial context, state, or realistic precondition]
  When  [the user action or triggering system event]
  Then  [the observable, testable outcome]
  And   [additional outcome if needed]
```

**Vision check:** ✅ pass — [Why this serves the Mission]  
**Release check:** ✅ in scope — [Why this must ship in this release]

---

### User Story 2: [Edge Case Title]

> **Jira fields**  
> **Summary:** [Story title — same as heading above]  
> **Type:** [Story / Enabler] 
> **Priority:** [High / Medium / Low]  
> **Story Points:** [ ]  
> **Labels:** happy-path, [release-version]

**User Story:**  
As a **[role]**,  
I want **[action or capability]**,  
so that **[measurable benefit or outcome]**.

**Acceptance Criteria:**

```gherkin
Scenario: [Descriptive name]
  Given [realistic precondition — what if data is incomplete or unusual?]
  When  [action or event]
  Then  [observable outcome]
```

**Vision check:** ✅ pass — [Why this matters]  
**Release check:** ✅ in scope — [Why this edge case is critical]

---

### User Story 3: [Error / Failure Case Title]

> **Jira fields**  
> **Summary:** [Story title — same as heading above]  
> **Type:** [Story / Enabler] 
> **Priority:** [High / Medium / Low]  
> **Story Points:** [ ]  
> **Labels:** happy-path, [release-version]

**User Story:**  
As a **[role]**,  
I want **[action or capability when something goes wrong]**,  
so that **[user is not left in an unknown or broken state]**.

**Acceptance Criteria:**

```gherkin
Scenario: [Descriptive name — what happens when something breaks]
  Given [system or data failure state]
  When  [action or event]
  Then  [observable outcome — what user sees/receives]
```

**Vision check:** ✅ pass — [How graceful failure serves trust]  
**Release check:** ✅ in scope — [Why error handling must ship]

---

### [User Story N: Additional Story Title — add as needed]

> **Jira fields**  
> **Summary:** [Story title — same as heading above]  
> **Type:** [Story / Enabler] 
> **Priority:** [High / Medium / Low]  
> **Story Points:** [ ]  
> **Labels:** happy-path, [release-version]

**User Story:**  
As a **[role]**,  
I want **[action or capability]**,  
so that **[measurable benefit or outcome]**.

**Acceptance Criteria:**

```gherkin
Scenario: [Descriptive name]
  Given [precondition]
  When  [action or event]
  Then  [observable outcome]
```

**Vision check:** ✅/⚠️ [reason]  
**Release check:** ✅/⚠️ [reason]

---

## Acceptance Criteria Summary

[Plain-language summary of what "done" means for this feature, derived from all "Then" clauses above.]

**This feature is complete when:**
1. [Criterion from scenario 1's Then clause]
2. [Criterion from scenario 2's Then clause]
3. [Criterion from scenario 3's Then clause]
4. [Any additional acceptance criteria]

---

## Technical Notes (for Eng Lead)

[Any technical details not captured in scenarios?]

- **API integrations:** [Systems this connects to]
- **Data requirements:** [What data must be queried, stored, or transformed]
- **Performance considerations:** [Latency, throughput, cost expectations]
- **Testing approach:** [How will we verify each scenario?]

---

## UX Notes (for Designer)

[Any UX or interaction details not captured in scenarios?]

- **User onboarding:** [How does first-time user learn this?]
- **Error messages:** [Specific language or tone for errors?]
- **Accessibility:** [Any special requirements?]
- **Mobile/responsive:** [Does this need to work on mobile?]

---

## Open Questions

| Question | Owner | Due | Status |
|----------|-------|-----|--------|
| [Open question 1] | [Who resolves] | [When] | [ ] |
| [Open question 2] | [Who resolves] | [When] | [ ] |

---

## Gate Validation Checklist

Before marking LOCKED, confirm:

- ☐ Minimum 3 user stories present (happy path, edge case, error/failure)
- ☐ Each story has an "As a / I want / So that" description
- ☐ All "Then" clauses in acceptance criteria are observable and testable
- ☐ All "Given" clauses reflect realistic preconditions
- ☐ Each story has Vision check AND Release check
- ☐ No story's acceptance criteria depends on another story running first
- ☐ Jira fields (Summary, Type, Epic, Priority, Labels) are populated on each story
- ☐ Eng Lead reviewed acceptance criteria for technical accuracy
- ☐ Designer reviewed acceptance criteria for UX completeness
- ☐ Acceptance criteria summary is derived from "Then" clauses
- ☐ User confirms: "Can engineering build from this?"

**Status:** [DRAFT / REVIEW / LOCKED]

---

## Example: Well-formed Feature Document

[See .instructions.md for full example of engineering manager weekly report feature]

---

**Notes for PM:**  
When gate is OPEN, this feature is specification-complete and ready for engineering handoff. Each user story block can be copied directly into Jira as a new issue — the Jira fields block provides the issue metadata and the Acceptance Criteria Gherkin block maps to the Jira acceptance criteria field.