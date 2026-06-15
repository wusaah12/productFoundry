# Write Stories Skill

**Purpose**: Author persona-driven, outcome-focused user stories with BDD acceptance criteria that are independently testable, unambiguous, and engineering-ready.

**What it does**:
- Decomposes features into persona-driven stories (different actors, different workflows)
- Focuses on outcomes, not outputs (what changes for users, not what gets built)
- Applies the Goldilocks Principle (enough detail for clarity, not so much it restricts problem-solving)
- Includes edge cases, error paths, and unexpected twists
- Defines preconditions and postconditions explicitly
- Quantifies outcomes (time, quantity, quality metrics, not vague "should")
- Uses multidimensional thinking (when, where, why, how, with whom)
- Authors both user stories and system stories (non-user interactions)
- Generates Given/When/Then BDD scenarios that are independently executable
- Validates acceptance criteria against release scope and Vision

**When to use**:
- **Stage 7 (Feature Documents)**: Primary use — write stories for locked features
- **Stage 6 (Release Plan)**: On-demand — draft stories to validate MVP scope
- **Stage 5 (Roadmap)**: On-demand — create stories for Q1 to uncover complexity
- **On-demand**: Refresh or expand stories if feature scope changes mid-delivery

**Key principle**:
Stories are the unit of work. Every story must be independently testable, measurable, and require no clarification from product team. Acceptance criteria are testable outcomes, not implementation instructions. BDD scenarios are the executable proof that the story is done.

---

## Core Authorship Principles

### 1. Persona-Driven Stories

Every story serves a specific persona with distinct goals, constraints, and context.

**Why**: Different personas have different workflows. A story for an "Accountant" differs fundamentally from one for a "Finance Director" or "System."

**Application**:
- Identify the primary persona for each story
- Consider secondary personas affected by this story
- Write distinct acceptance criteria for each persona's path through the feature
- Include role-based permissions, visibility, and access constraints

**Example** (Expense Reimbursement Feature):
```
Story 1: As an EMPLOYEE, I want to submit an expense receipt
Story 2: As a MANAGER, I want to approve or reject employee expenses
Story 3: As an ACCOUNTANT, I want to export approved expenses for processing
Story 4: As a SYSTEM (non-user), I want to calculate taxes on approved expenses
```

**Not all stories are user stories** — Some are system stories (background jobs, data sync, notifications).

---

### 2. Focus on Outcomes, Not Outputs

Outputs are what gets built. Outcomes are what changes for users.

**Why**: Engineers often interpret stories as "build this feature" rather than "achieve this result." Outcomes force alignment on *why* we're building.

**Output vs. Outcome**:

| Output (❌ Avoid) | Outcome (✅ Use) |
|------------------|-----------------|
| Build expense upload form | User can upload receipt in <10 seconds |
| Create approval workflow | Manager sees pending expenses sorted by amount within 30 seconds of login |
| Add email notification | Employee receives reimbursement status update within 5 minutes of manager decision |
| Set up database for expenses | System stores 50+ years of expense history with sub-second retrieval |
| Build admin dashboard | Finance team reduces expense processing time by 80% |

**Application**:
- Write stories starting with "*achieves*" or "*enables*" instead of "*implement*" or "*build*"
- Quantify the outcome (faster, cheaper, easier measured how?)
- Focus on user/system state change, not implementation path

---

### 3. Goldilocks Principle: Just Right Detail

**Not too little**: Stories must be specific enough to be testable and non-ambiguous.

**Not too much**: Stories must leave room for engineering creativity and problem-solving.

**Why**: Over-specified stories constrain innovation and become outdated. Under-specified stories create ambiguity and rework.

**Application**:

| Too Little ❌ | Just Right ✅ | Too Much ❌ |
|---|---|---|
| "Add search" | "User can find expenses by receipt date or amount; results displayed in <2 sec" | "Build a search interface with autocomplete, fuzzy matching on OCR text, A/B test 5 ranking algorithms, implement Redis cache with 1-hour TTL" |
| "Improve performance" | "System processes 1000 expense imports per minute with <1% error rate" | "Optimize database query using composite index on (user_id, date), batch size 500, connection pool 20, implement circuit breaker with 3-second timeout" |
| "Email users" | "Manager receives email within 5 minutes of approving expense, includes expense ID and amount, user can reply with questions" | "Send email via SendGrid with custom template, include Jinja variables for {{manager_name}} and {{amount}}, track open rate, set retry to 3x with exponential backoff" |

**Prompt**: "Does this story tell engineers *what* to achieve but not necessarily *how*?"

---

### 4. Include Edge Cases & Unexpected Twists

**Why**: Production surprises come from the 10% of cases engineers didn't anticipate. Good stories call out edge cases explicitly.

**Application**:

**Main Scenario (Happy Path)**:
```
Scenario: Employee submits valid expense
  Given employee has receipt image and amount
  When employee submits within 30 days of purchase
  Then system records expense as PENDING and notifies manager
```

**Edge Case 1 (Boundary Condition)**:
```
Scenario: Employee submits expense exactly on 30-day boundary
  Given receipt is from exactly 30 days ago
  When employee submits
  Then system accepts submission (inclusive boundary)
```

**Edge Case 2 (Error Path)**:
```
Scenario: Employee submits expense 31 days after purchase
  Given receipt is from 31 days ago
  When employee attempts to submit
  Then system rejects with message "Expenses must be submitted within 30 days. This receipt is 31 days old."
  And user can request exception approval from manager
```

**Edge Case 3 (Unexpected Twist)**:
```
Scenario: User submits duplicate expense (same receipt image, same amount)
  Given employee previously submitted same receipt
  When employee submits identical receipt again
  Then system detects duplicate using image hash
  And shows warning: "This receipt was already submitted on [date]. Submit anyway?"
  And if confirmed, marks second submission as FLAGGED for fraud review
```

**Checklist for edge cases**:
- ☐ Boundary conditions (exactly 30 days, zero amount, max length text)
- ☐ Error paths (invalid input, missing data, expired sessions)
- ☐ Concurrency (what if two managers approve same expense?)
- ☐ Race conditions (user submits while system is processing)
- ☐ Duplicates (user submits twice, data already exists)
- ☐ Integration failures (email server down, payment API fails)
- ☐ Permissions (user tries to do something they shouldn't)

---

### 5. Preconditions & Postconditions

**Precondition**: What must be true before this story can execute?

**Postcondition**: What is guaranteed to be true after this story completes?

**Why**: Preconditions identify dependencies and blockers. Postconditions define what the story leaves behind for downstream processes.

**Application**:

```
Story: Manager approves expense

Preconditions:
  • Manager is logged in and has "approver" role
  • Expense exists and is in PENDING status
  • Expense is within manager's approval limit ($0–$5000 for Managers, unlimited for Directors)
  • Manager has access to employee's expense history

Acceptance Criteria:
  1. Manager sees only expenses within their approval limit
  2. Manager can approve up to 10 expenses per action (batch approval)
  3. Approval is recorded with timestamp and manager identity
  4. Employee receives notification within 5 minutes
  5. Accounting system receives approved expense within 30 seconds for processing

Postconditions:
  • Expense status changed from PENDING to APPROVED
  • Manager's approval recorded in audit log with timestamp
  • Employee record updated with approval date
  • Accounting system queued for reimbursement processing
  • All downstream workflows (reimbursement, tax calculation) now can proceed
```

**Why this matters**:
- Preconditions tell QA what test setup is needed
- Preconditions help identify dependencies (do we have the accounting system API? Is manager role configured?)
- Postconditions tell downstream stories what they can expect
- Postconditions define the contract: "If you do this story, these things are guaranteed to be true"

---

### 6. Quantitative Outcomes

Replace vague language with measurable metrics.

**Why**: "Improve," "better," "easier" are subjective and unmeasurable. Metrics make outcomes testable and provide success criteria for release.

**Application**:

| Vague ❌ | Quantitative ✅ |
|---|---|
| "User can quickly find expenses" | "User finds expense by date within 2 clicks and <1 second" |
| "System should be reliable" | "Expense processing succeeds 99.9% of the time; errors trigger automatic retry 3x" |
| "Manager should know why expense was rejected" | "Manager receives rejection reason in email within 5 minutes with link to policy violation details" |
| "Accounting team saves time" | "Accounting team processes reimbursements 60% faster: from 45 min/batch to 18 min/batch" |
| "Reduce errors" | "Expense categorization errors <2% (compared to current 15%)" |

**Metrics to quantify**:
- **Time**: <N seconds, <N minutes, <N days
- **Count**: N per action, N per user, N per batch
- **Rate**: N% success rate, N% error rate, N transactions/minute
- **Accuracy**: <N% error, >N% precision
- **Coverage**: N% of scenarios, N personas included

**When you can't quantify, describe measurable signal**:
```
❌ "User feedback is positive"
✅ "In post-release survey, >80% of users rate approval process >4/5 stars; NPS increases by ≥5 points"
```

---

### 7. Multidimensional Thinking: When, Where, Why, How, With Whom

**Why**: Stories are richer when you think beyond "what." Consider context from multiple dimensions.

**Application**:

| Dimension | Question | Application |
|-----------|----------|-------------|
| **WHEN** | When does this happen? | "Employee submits expense within 30 days of purchase, during work hours or any time?" Acceptance: "Any time, 24/7, no business hour restriction" |
| **WHERE** | Where does this happen? | "On mobile app, web browser, or both?" Acceptance: "Mobile app first (80% of submissions); web browser in Phase 2" |
| **WHY** | Why does the user want this? | "Employee wants reimbursement fast to avoid personal financial strain." → Outcome: "Reimbursement within 2 business days" vs just "process expense" |
| **HOW** | How does the user accomplish this? | "Via photograph, upload document, manual entry?" Acceptance: "Photograph preferred; if OCR fails after 2x, offer manual entry fallback" |
| **WITH WHOM** | Who else is involved? | "Single transaction or batch with colleague?" Acceptance: "Employee can submit individual or batch; batch processing notifies all managers in parallel" |

**Multidimensional Story Template**:

```
Story: Employee submits expense receipt

As an EMPLOYEE (WHO)
I want to upload an expense receipt (WHAT)
So that I can get reimbursed within 2 business days (WHY — outcome)

When:
  • During or after business travel (or anytime for emergency expenses)
  • Within 30 days of purchase (business policy)
  • Not during system maintenance window (2-4 AM UTC)

Where:
  • Mobile app (primary: 80% adoption target)
  • Web browser (secondary: support accessibility)
  • Via API (for third-party integrations)

How:
  1. User opens app → Tap "New Expense"
  2. User selects receipt: Camera (photo), Photo Library (saved), or Manual Entry (type amount + category)
  3. User reviews extracted data (OCR attempts extraction)
  4. User submits

With Whom:
  • Solo submission (individual employee, own manager)
  • Batch submission (up to 10 expenses, all notify same manager)
  • Bulk import (accounting team can import CSV for legacy expenses)

Acceptance Criteria:
  1. Upload succeeds for receipt images (JPEG, PNG, PDF, <20 MB)
  2. OCR extracts amount and date with >95% accuracy; user can correct
  3. Category dropdown includes all 15 standard categories + "Other"
  4. Submission queued within 5 seconds; user receives confirmation UI
  5. Manager notified within 5 minutes; system notifies all managers in batch
  6. Expense appears in employee history immediately (even if pending approval)
  7. Mobile and web both supported (same UX patterns)
  8. Works offline; syncs when connection restored

BDD Scenarios:
[See BDD section below for Given/When/Then]
```

---

### 8. Non-User Stories (System Stories)

**Not all stories involve direct user interaction.** System stories are equally important.

**Why**: Features require supporting infrastructure: background jobs, data sync, notifications, integrations. These are stories too.

**Types of System Stories**:

| Type | Example | Outcome |
|------|---------|---------|
| **Integration** | "System submits approved expense to accounting API" | Approved expenses appear in accounting system <30 sec later |
| **Background Job** | "System calculates tax on approved expense" | Tax value calculated and stored before approval visible in UI |
| **Notification** | "System sends manager pending expenses digest" | Manager receives email every morning at 9 AM with pending count and amounts |
| **Data Sync** | "System reconciles reimbursement status with bank" | If reimbursement fails in bank, status updated to FAILED within 1 hour |
| **Cleanup** | "System archives expenses older than 7 years" | Expenses >7 years old moved to cold storage; <1 sec query performance on current 12 months |
| **Reporting** | "System generates monthly expense analytics" | Finance team receives email report by 8 AM on 1st of month with spend by category, manager, employee |

**System Story Template**:

```
As a SYSTEM (non-user actor)
I want to submit approved expenses to the accounting API
So that Finance can process reimbursements without manual data entry (outcome: 0 manual entry errors, 60% time savings)

Preconditions:
  • Accounting API credentials configured and valid
  • Expense status is APPROVED
  • User's bank account on file in accounting system

Acceptance Criteria:
  1. Within 30 seconds of manager approval, system sends expense to accounting API
  2. API payload includes: employee ID, amount, category, date, receipt reference
  3. If API returns success (HTTP 200), expense marked SUBMITTED_TO_ACCOUNTING
  4. If API returns error, expense remains APPROVED and retry queued (3x, with exponential backoff)
  5. If API unreachable for >1 hour, alert sent to Finance ops team
  6. Duplicate protection: if same expense already in accounting system, deduplicate by receipt hash

Postconditions:
  • Approved expense now in accounting system
  • Finance team sees expense in their reimbursement queue
  • Reimbursement processing pipeline can proceed

BDD Scenarios:
[See BDD section]
```

---

## BDD Scenario Writing

### Scenario Structure: Given / When / Then

Every scenario follows the Given/When/Then pattern for testability.

**Given**: Initial state (preconditions)
**When**: User/system action (trigger)
**Then**: Observable outcome (assertion)

### Anatomy of a BDD Scenario

```
Scenario: [Short description of the scenario]
  Given [Initial conditions: what's true before action]
  And [Additional preconditions, if needed]
  When [User/system action: what happens]
  And [Additional actions, if needed]
  Then [Observable outcome: what changed]
  And [Additional verifications, if needed]
```

### Golden Rules for BDD

**1. Each Given is independently testable**

❌ Not testable:
```
Given user is logged in and has data and permissions are correct
```

✅ Testable:
```
Given user is logged in with email "alice@company.com"
And user has "approver" role
And user's approval limit is $5000
And 3 pending expenses exist for alice's team
```

**2. Each When has exactly one primary action**

❌ Multiple actions:
```
When user clicks "Approve" button and email is sent and database updates
```

✅ Single action:
```
When user clicks "Approve" button on pending expense
```

(Database update and email are part of "Then", not "When")

**3. Each Then is an observable, testable outcome**

❌ Vague:
```
Then system works correctly
```

❌ Implementation detail:
```
Then database record updated to status = 'APPROVED'
```

✅ Observable outcome:
```
Then expense status changes to APPROVED
And manager sees "Approved ✓" on the expense card
And employee receives email "Your expense for $75 was approved"
```

**4. Then describes what changed, not what didn't change**

❌ Negative assertion:
```
Then the expense is not in PENDING status
```

✅ Positive assertion:
```
Then the expense status is APPROVED
```

---

### Scenario Examples with Full Coverage

#### Example 1: Happy Path (Main Workflow)

```
Scenario: Manager approves single expense
  Given manager is logged in with "approver" role
  And manager's approval limit is $5000
  And 1 pending expense exists for $400
  When manager clicks "Approve" button
  Then expense status changes to APPROVED
  And manager sees success message "Expense approved ✓"
  And employee receives email "Your expense was approved" within 5 minutes
  And expense removed from manager's pending queue
```

#### Example 2: Edge Case (Boundary Condition)

```
Scenario: Manager approves expense at exact approval limit
  Given manager is logged in with "approver" role
  And manager's approval limit is $5000
  And 1 pending expense exists for $5000 (exactly at limit)
  When manager clicks "Approve" button
  Then expense status changes to APPROVED
  And approval succeeds (no "over limit" error)
```

#### Example 3: Error Path (Violation)

```
Scenario: Manager cannot approve expense exceeding their limit
  Given manager is logged in with "approver" role
  And manager's approval limit is $5000
  And 1 pending expense exists for $7500 (exceeds limit)
  When manager attempts to click "Approve" button
  Then "Approve" button is disabled (greyed out)
  And tooltip shows "Expense exceeds your $5000 limit. Escalate to Director."
  And manager can click "Escalate" to forward to Director
```

#### Example 4: Concurrency (Race Condition)

```
Scenario: Two managers try to approve same expense simultaneously
  Given manager A and manager B are both logged in
  And both see same pending expense for $500
  And both click "Approve" button within 1 second of each other
  When both submit simultaneously
  Then first approval succeeds
  And second approval fails with message "Expense was already approved by [Manager A Name] at [timestamp]"
  And second manager sees updated expense status (APPROVED) and option to "Undo approval" only if authorized
```

#### Example 5: Integration (System Story)

```
Scenario: System submits approved expense to accounting API
  Given accounting API is reachable at https://api.accounting.internal
  And manager approved an expense for $100
  When 30 seconds have passed since approval
  Then system sends POST request to /api/expenses/submit with:
    - employee_id: "emp_12345"
    - amount: 100
    - category: "Travel"
    - date: "2026-06-15"
    - receipt_ref: "receipt_abc123"
  And accounting system returns HTTP 200 with response { status: "accepted" }
  And expense status changes to SUBMITTED_TO_ACCOUNTING
  And Finance team sees expense in reimbursement queue within 1 minute
```

#### Example 6: Unexpected Twist (Fraud Detection)

```
Scenario: System detects and flags potential duplicate submission
  Given employee previously submitted receipt on 2026-06-10
  And employee now attempts to submit receipt with identical image (same hash)
  When system processes image hash lookup
  Then system detects duplicate by image hash
  And prevents automatic approval
  And flags expense as REQUIRES_MANUAL_REVIEW
  And Finance team receives alert: "Potential duplicate detected: receipt appears identical to [previous submission date]"
  And manual review required before any processing can proceed
  And employee notified of fraud check in progress
```

---

## Story Template (Complete)

Use this template to author new stories. All fields are required; none are optional.

```
# [FEATURE NAME] - Story [N]

## Story Header

**Story ID**: [Feature-Code]-S[N]  
**Status**: DRAFT | REVIEW | LOCKED  
**Revision**: v1 (or v2, v3 if revised)  
**Author**: [Your Name]  
**Date**: [Date created]

---

## Story

**As a [PERSONA]**  
**I want to [ACTION/CAPABILITY]**  
**So that [OUTCOME — focus on what changes for the user, not what gets built]**

---

## Context

### Who (Persona)
- **Primary Persona**: [Name, role, goals]
- **Secondary Personas**: [Any others affected by this story]
- **Persona Constraints**: [What limits or permissions apply to this persona?]

### When
- **Timing**: [When does this story execute? Business hours? Always? After another event?]
- **Frequency**: [How often? Once, recurring, triggered?]
- **Time Box**: [Time limit for execution? <2 seconds, <1 minute?]

### Where
- **Channel**: [Mobile, web, API, email, batch?]
- **Region**: [Global, US-only, specific data center?]
- **Availability**: [24/7, business hours, maintenance windows?]

### Why
- **Business Outcome**: [What metric improves? By how much?]
- **User Outcome**: [What problem does this solve for the user?]
- **Strategic Alignment**: [Which vision principle does this support?]

### How
- **Workflow**: [Step-by-step actions user takes]
- **Alternatives**: [Are there other ways to accomplish this?]
- **Integration Points**: [What systems does this touch?]

### With Whom
- **Single Actor**: [One user acting alone]
- **Collaboration**: [Multiple users involved?]
- **System Interaction**: [What background systems are involved?]

---

## Preconditions (What Must Be True Before This Story)

- [ ] Precondition 1: [State/permission/data required]
- [ ] Precondition 2
- [ ] Precondition 3

---

## Acceptance Criteria (How We Know This Story Is Done)

- [ ] Criterion 1: [Observable, testable outcome; include metrics]
- [ ] Criterion 2: [Testable outcome with measurement]
- [ ] Criterion 3: [Include edge case or error handling]
- [ ] Criterion 4: [Performance, accessibility, or security constraint]
- [ ] Criterion 5: [Integration or data consistency outcome]

---

## Postconditions (What's Guaranteed After This Story)

- [ ] Postcondition 1: [State/data guaranteed after completion]
- [ ] Postcondition 2: [Contract for downstream processes]
- [ ] Postcondition 3: [Audit trail or logging guarantee]

---

## BDD Scenarios

### Scenario 1: [Happy Path — Main Workflow]
```
Scenario: [Short description]
  Given [Initial state]
  And [Additional precondition if needed]
  When [User/system action]
  Then [Observable outcome]
  And [Additional verification if needed]
```

### Scenario 2: [Edge Case — Boundary Condition]
```
Scenario: [Short description of edge case]
  Given [Initial state at boundary]
  When [Action at boundary]
  Then [Expected outcome at boundary]
```

### Scenario 3: [Error Path — Violation or Failure]
```
Scenario: [Short description of error]
  Given [Initial state that triggers error]
  When [Action that should fail]
  Then [Error handling: rejection, message, next steps]
```

### Scenario 4: [Concurrency or Race Condition]
```
Scenario: [What if two users/systems act simultaneously?]
  Given [Two parallel actions set up]
  When [Both actions trigger near-simultaneously]
  Then [First completes, second is handled correctly]
```

### Scenario 5: [Integration Point]
```
Scenario: [Interaction with external system or background job]
  Given [Preconditions for integration]
  When [Trigger that calls external system]
  Then [External system called correctly, response handled]
```

---

## Estimation

**Story Points**: [Number from Fibonacci: 1, 2, 3, 5, 8, 13, 21]

**Rationale**: [Why this estimate? Complexity, unknowns, dependencies]

**Dependencies**: [What must be done first? Which stories block this?]

**Risks**: [What could go wrong? What unknowns exist?]

---

## Definition of Done (DOD)

- [ ] Story written and reviewed with product team
- [ ] All acceptance criteria understood by engineering
- [ ] BDD scenarios reviewed and testable
- [ ] No ambiguous language (vague words like "should," "might," "seems")
- [ ] All acceptance criteria have quantitative metrics (not "improve" or "better")
- [ ] Edge cases and error paths identified
- [ ] Dependencies identified and communicated
- [ ] Story point estimate agreed with engineering team
- [ ] Story locked (status: LOCKED)

---

## Notes & Design Decisions

[Any context, design rationale, or decisions that help engineering understand the "why"]

---

## Related Stories

- Precursor: [Story that must complete first]
- Dependent: [Story that depends on this one]
- Related: [Stories in same feature]
- Blocked By: [External dependency]

```

---

## Workflow: From Feature to Stories

### Step 1: Identify Personas for Feature

Start with the feature from Release Plan. Who will use it? Who will administer it? What background systems are involved?

**Example** (Expense Reimbursement Feature):
```
Feature: "Enable employees to submit expenses for reimbursement"

Personas Involved:
  • Employee (primary: end user)
  • Manager (approver)
  • Accountant (processor)
  • Finance Director (escalation, policy)
  • System (background: tax calculation, API submission, email)
```

### Step 2: Decompose Feature into Stories

Not persona = 1 story. Instead, think about *workflows*.

Each workflow = 1 story.

**Example decomposition**:

```
Feature: Expense Reimbursement (6 stories)

Story 1: Employee submits expense receipt
Story 2: Employee views submission status
Story 3: Manager approves pending expenses (batch or single)
Story 4: System submits approved expenses to accounting API
Story 5: System calculates taxes on approved expenses
Story 6: Employee receives reimbursement notification
```

**Rule**: 3–7 stories per feature. If >10, split feature into smaller features. If 1, feature might be too small.

### Step 3: For Each Story, Apply 8 Principles

For each story, apply all 8 principles in order:

1. **Persona-driven**: Is the persona clear? Are there different paths for different personas?
2. **Outcome-focused**: Does the story focus on *what changes* (outcome) or *what gets built* (output)?
3. **Goldilocks detail**: Is it specific enough to be testable? Does it leave room for engineering creativity?
4. **Edge cases**: What could go wrong? Boundary conditions? Duplicates? Race conditions?
5. **Preconditions/Postconditions**: What must be true before? What's guaranteed after?
6. **Quantitative**: Are all metrics measurable? No vague language?
7. **Multidimensional**: Have we considered when, where, why, how, with whom?
8. **System stories**: What background workflows support this user story?

### Step 4: Write BDD Scenarios

For each story, write 5 scenarios minimum:

1. **Happy Path** (main workflow succeeds)
2. **Edge Case 1** (boundary condition)
3. **Error Path** (something goes wrong)
4. **Concurrency** (race condition if applicable)
5. **Integration** (system/external interaction if applicable)

Each scenario must be independently executable by QA or automation.

### Step 5: Review & Validate

Before locking story, validate:

- ☐ No ambiguous language (should, might, consider, try, maybe)
- ☐ All acceptance criteria are testable (not vague)
- ☐ All metrics are quantitative (not "improve," "enhance," "better")
- ☐ Each BDD scenario is independent (one scenario doesn't require another to pass)
- ☐ Edge cases identified and covered in scenarios
- ☐ Preconditions and postconditions explicit
- ☐ Story is sized appropriately (5–13 points, not 1 or 21)
- ☐ Dependencies called out

---

## Command Reference

**Invocation**:

```
/write-stories [feature-name]              ← Write stories for one feature
/write-stories --list                      ← List all features in Release Plan
/write-stories --bulk                      ← Write all features from Release Plan
/write-stories [name] --bdd-only           ← BDD scenarios only (refine existing story)
/write-stories [name] --edge-cases         ← Generate additional edge case scenarios
/write-stories [name] --dry-run            ← Preview without saving to artifact
```

**System stories** (non-user):

```
/write-stories [feature-name] --system     ← Also generate system stories (integrations, jobs)
```

**Refresh or revise**:

```
/revise stage-7 feature-[name]             ← Then run /write-stories to refresh stories
```

---

## Integration with Other Skills

### Write Stories + Write Features

- **Write Features** decomposes Release Plan into feature documents with business value and BDD outlines
- **Write Stories** deep-dives into each feature and authors detailed persona-driven stories with full acceptance criteria

**Workflow**:
```
/write-features [feature-name]
  ← Creates feature document with overview, business value, and story outlines
  
/write-stories [feature-name]
  ← Creates detailed stories with full context, acceptance criteria, BDD scenarios
```

### Write Stories + Validate

After stories are written, validate before locking:

```
/write-stories [feature-name]
[Review stories]

/validate stage-7 feature-[name]
  → Checks: Are all acceptance criteria testable?
  → Checks: Do stories align with Release Plan scope?
  → Returns: PASS (ready to lock) or BLOCK (needs revision)
```

### Write Stories + Revise

If scope changes mid-delivery, refresh stories:

```
/revise stage-7 feature-[name]
  [Describe what changed]

/write-stories [feature-name] --edge-cases
  [Generate new edge case scenarios for revised scope]
```

---

## Authorship Checklist

Before considering a story "done," verify:

### Persona & Context
- ☐ Primary persona is clear and specific
- ☐ Different personas have separate stories if workflows differ
- ☐ Secondary personas identified (who else is affected?)
- ☐ When, where, why, how, with whom all addressed

### Outcome Focus
- ☐ Story starts with user/system outcome, not implementation
- ☐ No "build," "implement," or "create" language
- ☐ Focus is on what changes for user (outcome), not what gets built (output)

### Goldilocks Detail
- ☐ Specific enough to test (not vague)
- ☐ Not so detailed that engineers can't make decisions (leaves room for creativity)
- ☐ If unsure: show to engineer; does it feel like enough guidance without micromanagement?

### Edge Cases & Errors
- ☐ Happy path scenario written
- ☐ At least 1 boundary condition identified
- ☐ At least 1 error path identified
- ☐ If applicable: concurrency scenario
- ☐ If applicable: integration scenario

### Preconditions & Postconditions
- ☐ Preconditions explicit (permissions, data, state)
- ☐ Postconditions explicit (what's guaranteed after)
- ☐ Preconditions tell QA what to set up
- ☐ Postconditions tell downstream stories what to expect

### Quantification
- ☐ All metrics are numbers (seconds, %, count, not vague)
- ☐ No vague words: "should," "might," "consider," "try," "maybe," "improve," "better"
- ☐ If you said "improve," you said a number instead
- ☐ If you said "user-friendly," you said a metric instead

### BDD Scenarios
- ☐ Each Given is independently testable (broken into And clauses)
- ☐ Each When has exactly one action
- ☐ Each Then is an observable outcome (what changed)
- ☐ No implementation details in scenarios (database fields, API fields are OK for technical systems)
- ☐ Scenarios are independent (one doesn't require another to pass)
- ☐ Minimum 5 scenarios per story (happy path + 4 variants)

### System Stories
- ☐ Background workflows identified (background jobs, integrations, notifications)
- ☐ Each background workflow has its own story (Given/When/Then)
- ☐ System stories are equally detailed as user stories

### Definition of Done
- ☐ Story reviewed by: Product Lead, Eng Lead, Designer
- ☐ All acceptance criteria understood by engineering (no questions)
- ☐ Story points estimated (3–13 typical range)
- ☐ Dependencies identified
- ☐ Risks called out
- ☐ Story status: LOCKED (ready for sprint planning)

---

## Common Pitfalls to Avoid

| Pitfall | Example | Fix |
|---------|---------|-----|
| **Output not outcome** | "Build expense upload form" | "User uploads receipt in <10 seconds" |
| **Vague acceptance criteria** | "System should be fast" | "Upload succeeds <2 seconds for files <20 MB" |
| **Too prescriptive** | "Use React components X and Y; call API endpoint Z" | "User uploads receipt image; OCR extracts amount and date" |
| **Too vague** | "User does stuff with expenses" | "User uploads expense receipt, reviews OCR extraction, submits for approval" |
| **Missing edge cases** | Only happy path scenario | Add: boundary, error, concurrency, integration scenarios |
| **No quantification** | "Improve efficiency" | "Finance team processes reimbursements 60% faster: 45 min → 18 min per batch" |
| **Implementation in acceptance criteria** | "Query database with index on (user_id, date)" | "System retrieves user's expense history in <1 second" |
| **Forgetting system stories** | Only user stories | Add: email notifications, API submissions, background tax calculations |
| **Not multidimensional** | Only "what" | Consider when, where, why, how, with whom |
| **Scenarios not independent** | "Scenario 2 requires Scenario 1 to pass first" | Each scenario should stand alone; set up required Given state |

---

## Tips for Effective Story Authorship

1. **Read the feature document first** — Understand business value, hypothesis, success metrics
2. **Interview engineers** — "What questions do you have when reading features?" → Your answers = story content
3. **Think like QA** — "How would I test this?" → Your test approach = acceptance criteria
4. **Think like a hacker** — "What could break?" → Your concerns = edge cases
5. **Use metrics from hypothesis** — If Stage 3 hypothesis says "50% faster," your story should quantify: "Complete X in <2 minutes (vs current 4 minutes)"
6. **Show stories to persona** — "Does this match how you'd do it?" → If no, story is wrong
7. **Write edge cases first** — Happy path is easy; edge cases are where bugs hide
8. **Avoid "should"** — It's a red flag for vagueness. Replace with metric or clear outcome
9. **Keep scenarios short** — If a scenario is >10 lines, break it into multiple scenarios
10. **Timestamp scenarios** — "Within 5 minutes of approval" not "eventually"

---

## Summary

**Write Stories Skill** authors persona-driven, outcome-focused user stories with BDD acceptance criteria that are testable, measurable, and engineering-ready.

**Key outputs**:
- Persona-driven stories (different personas, different workflows)
- Outcome-focused (what changes, not what gets built)
- Goldilocks detail (specific enough to test, not so prescriptive it restricts creativity)
- Edge cases + preconditions + postconditions explicit
- Quantitative metrics (no vague "improve")
- Multidimensional context (when, where, why, how, with whom)
- System stories (background jobs, integrations, not just user workflows)
- BDD scenarios (Given/When/Then, independently executable)

**Success**: Engineering team reads story and says, "I know exactly what to build and how to know when I'm done."

