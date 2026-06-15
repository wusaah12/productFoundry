# Write Features Skill

**Purpose**: Author features using Scaled Agile Framework (SAFe) principles, translating product specifications into stories that delivery teams execute without ambiguity.

**What it does**:
- Structures features using SAFe's hierarchical breakdown: Epic → Feature → User Story → Acceptance Criteria → BDD Scenarios
- Ensures features connect to business value (hypothesis metrics, roadmap initiative, vision alignment)
- Enforces testable acceptance criteria (every outcome independently verifiable)
- Generates story point estimates (relative complexity guidance for teams)
- Produces role-based user stories (different actors, different workflows)
- Manages dependencies between stories and features
- Supports both Kanban (continuous delivery) and PI (Program Increment) planning modes
- Validates stories against release scope and architectural constraints

**When to use**:
- **Stage 7 (Feature Documents)**: Primary use — convert release plan features into testable stories
- **Stage 6 (Release Plan)**: On-demand — draft stories to validate MVP scope is achievable
- **Stage 5 (Roadmap)**: On-demand — create stories for Q1 initiative to uncover technical complexity early
- **On-demand**: Refresh or expand stories if scope changes mid-delivery

**Key principle**:
SAFe's structured hierarchy ensures features are not just understood by the product team, but can be executed by engineering, tested by QA, and tracked by operations. Features are the unit of delivery; stories are the unit of work.

---

## SAFe Hierarchy & Integration

### 5-Level Hierarchy (Epic → Feature → Story → Acceptance → Scenarios)

```
Portfolio Level: EPIC
├─ Roadmap Level: FEATURE (1 per Release Plan item)
│  ├─ Development Level: USER STORY (1-3 per feature)
│  │  ├─ Test Level: ACCEPTANCE CRITERIA (3-5 per story)
│  │  │  └─ Executable Level: BDD SCENARIOS (Given/When/Then)
```

**Why this matters**:
- **Epic** = "What's the big strategic win?" (3–5 year vision lens)
- **Feature** = "What's the release scope?" (6-month roadmap lens)
- **Story** = "What's the sprint work?" (2-week sprint lens)
- **Acceptance** = "How do we verify this works?" (test lens)
- **Scenarios** = "Can we automate this?" (CI/CD lens)

---

## Invocation

**Automatic**: Not auto-triggered (optional, Stage 7 primary use)

**Explicit**: User runs `/write-features` or `/write-stories`

**Command syntax**:
```
/write-features [feature-name]              ← Write stories for one feature
/write-features                             ← List all features from Release Plan
/write-features --bulk                      ← Write all features from Release Plan
/write-features [name] --user-stories-only  ← Stories only (no BDD yet)
/write-features [name] --bdd-only          ← BDD scenarios only
/write-features [name] --dry-run            ← Preview without committing to artifact
```

**Persona invocation**: Business Analyst leads; Eng Lead + Designer review for technical/UX accuracy

---

## SAFe Feature Definition

A **Feature** (in SAFe) is a service that provides value to customers (or internal users). Every feature must:

1. **Be small enough to fit in a release** (one release cycle, typically 6-12 months)
2. **Be valuable by itself** (not just infrastructure/housekeeping)
3. **Have clear acceptance criteria** (testable, not vague)
4. **Connect to strategic goals** (traces back to Epic/Vision)
5. **Have identifiable risks** (what could go wrong?)

### Feature Metadata

Every feature in Product Foundry includes:

| Field | Definition | Example |
|-------|-----------|---------|
| **Feature ID** | Unique identifier (roadmap initiative + sequence) | `Q1-Expenses-001` |
| **Feature Name** | User-facing description (problem, not solution) | "Instant Expense Reimbursement" |
| **Epic Link** | Which portfolio-level initiative? | "Expense Management Automation" |
| **Initiative Link** | Which roadmap initiative? | "Q1: Real-time Expense Processing" |
| **Owner** | Product Lead or Business Analyst | John (Product) |
| **Story Count** | How many user stories? | 3–7 typical |
| **Business Value** | Why does this matter? | Saves Finance 8 hrs/week; Users get money 97% faster |
| **Acceptance Criteria** | How do we know it works? | User receives reimbursement within 2 hours of approval |
| **Risks** | What could go wrong? | API integration delays; user adoption; tax compliance |
| **Dependencies** | What must happen first? | Backend infrastructure for real-time processing |
| **Estimate (Story Points)** | Relative complexity | 13–21 points (medium feature) |

---

## User Story Structure (SAFe Format)

### Standard User Story Template

```
As a [ACTOR/ROLE]
I want to [ACTION/CAPABILITY]
So that [BUSINESS VALUE/OUTCOME]

Acceptance Criteria:
1. [Observable, testable outcome]
2. [Observable, testable outcome]
3. [Observable, testable outcome]

BDD Scenarios:
Scenario: [Happy path description]
  Given [Initial state/context]
  When [User action]
  Then [Observable outcome]
  And [Additional verification]

Scenario: [Edge case or error path]
  Given [Initial state]
  When [Condition that triggers edge case]
  Then [Specific behavior in edge case]

Definition of Done:
  ☐ Code written and unit tested
  ☐ Acceptance criteria verified by QA
  ☐ BDD scenarios pass
  ☐ Code reviewed and approved
  ☐ Merged to main branch
  ☐ Deployed to staging
  ☐ User acceptance testing passed
```

### Story Attributes in SAFe

| Attribute | SAFe Term | Definition | Why It Matters |
|-----------|-----------|-----------|---|
| **Role** | Actor | Who is performing this action? (User, Admin, System, API Client) | Different actors may have different workflows |
| **Goal** | Desire | What do they want to accomplish? | Anchors to user need, not implementation |
| **Benefit** | Value Statement | What benefit/outcome do they expect? | Helps team understand *why* this story matters |
| **Acceptance** | Acceptance Criteria | What does "done" look like? | Testable definition of complete |
| **Scenarios** | BDD Scenarios | How do we verify it works? | Automatable test cases |
| **Dependencies** | Story Dependencies | What stories must finish first? | Identifies blockers and sequencing |
| **Estimate** | Story Points | Relative complexity vs. baseline story | Capacity planning and velocity tracking |
| **Risk** | Risk Assessment | What could prevent completion? | Identifies unknowns early |

---

## Story Point Estimation (SAFe Approach)

### Estimation Scale

Use **Fibonacci sequence** for story points:

```
1 point   — Trivial (UI text change, config value)
2 points  — Very small (one endpoint call, simple logic)
3 points  — Small (simple feature, one happy path)
5 points  — Medium (feature with one actor, standard complexity)
8 points  — Large (feature with 2-3 actors, multiple scenarios)
13 points — Very large (complex feature, many edge cases, high risk)
21 points — Epic-sized (should be broken into smaller stories)
```

### Estimation Rules

**For each user story, estimate as:**
```
Complexity: How hard is this to build? (logic, edge cases, testing)
Risk: How uncertain are we? (unknowns, dependencies, third-party integrations)
Effort: How much work? (hours of engineering time)

Story Points = Base Complexity + Risk Factor
```

### Estimation Examples

**1 point:**
- "Fix typo in expense form label"
- "Update help text for reimbursement status"

**3 points:**
- "User can see list of submitted expense reports"
- "System displays reimbursement status badge"

**5 points:**
- "User can upload receipt photo and OCR extracts expense amount"
- "Manager receives mobile notification when report is submitted"

**8 points:**
- "Backend API validates expense against policy rules and blocks non-compliant entries"
- "System integrates with payroll system to trigger direct deposit automatically"

**13 points:**
- "Complete end-to-end expense submission with OCR, manager approval, and reimbursement"
- "Multi-currency expense support with real-time exchange rate calculation"

---

## Feature Writing Workflow

### Step 1: Load Release Plan Context

User provides Release Plan feature list:
```
Feature 1: Instant Expense Reimbursement (Q1 initiative)
Feature 2: Receipt Photo Capture (Q1 initiative)
Feature 3: Manager Mobile Approval (Q1 initiative)
Feature 4: Real-time Reimbursement Status (Q2 initiative)
```

### Step 2: Select Feature

```
/write-features "Instant Expense Reimbursement"
```

Skill loads:
- Feature description from Release Plan
- Feature acceptance criteria
- Feature dependencies
- Related Vision/Hypothesis metrics
- Related roadmap initiative

### Step 3: Decompose into User Stories

For "Instant Expense Reimbursement," identify distinct user paths:

| Story ID | Actor | Capability | Value | Points |
|----------|-------|-----------|-------|--------|
| EXP-001 | User | Submit expense with receipt photo | Fast submission | 5 |
| EXP-002 | Manager | Approve/reject in mobile app | Fast approval | 3 |
| EXP-003 | System | Auto-calculate reimbursement | Instant processing | 8 |
| EXP-004 | User | See real-time reimbursement status | Trust + transparency | 3 |

### Step 4: Write Each User Story

**Story EXP-001:**
```
As a [USER]
I want to submit an expense report by photographing a receipt
So that I can get reimbursed faster without manual data entry

Acceptance Criteria:
1. User can launch camera from within the expense app
2. App captures high-quality photo of receipt
3. OCR extracts amount, vendor, date from receipt
4. User can edit extracted values if OCR is incorrect
5. User can add additional details (project code, business purpose)
6. Submit button sends to manager for approval

BDD Scenario: Happy Path
  Given user is on the "Submit Expense" screen
  When user taps "Photograph Receipt"
  And user captures clear receipt photo
  Then the app displays extracted amount, vendor, date
  And user can confirm or edit each field
  And user can tap "Submit for Approval"
  And system sends notification to manager

BDD Scenario: OCR Accuracy Issue
  Given OCR extracted amount as $25.00
  When user edits amount to $250.00 (correct value)
  Then system accepts the correction
  And system flags this for OCR model retraining

BDD Scenario: Poor Photo Quality
  Given user captures blurry/dark receipt photo
  When OCR processing runs
  Then system displays "Photo too blurry, please retake"
  And user can retake photo immediately
```

### Step 5: Validate Acceptance Criteria

Each "Then" clause must be:
- **Observable**: Not "the system understands" but "the system displays" or "the database records"
- **Testable**: A human or automated test can verify it
- **Independent**: Doesn't require other criteria to have passed first

### Step 6: Generate Feature Artifact

Skill creates `[idea-name]/feature-[name].md` with:
- Feature metadata
- All user stories
- BDD scenarios
- Acceptance criteria
- Story point estimates
- Dependencies
- Risks & mitigations
- Definition of Done checklist

---

## Role-Based User Stories (SAFe Personas)

In SAFe, stories are written for specific personas/roles. Each feature typically has 2–4 story types:

### Typical Story Personas

| Persona | Story Pattern | Example |
|---------|---------------|---------|
| **End User** | "As a user, I want to [action], so that [user benefit]" | "As an employee, I want to submit expenses via photo, so I get reimbursed faster" |
| **Administrator** | "As an admin, I want to [config/maintain], so that [system benefit]" | "As Finance Admin, I want to configure reimbursement rules, so policy is enforced automatically" |
| **System** | "As a system, I must [automated action], so that [system reliability]" | "As the system, I must validate expense against policy before processing, so compliance rules are enforced" |
| **Stakeholder** | "As a [stakeholder], I want [visibility/reporting], so that [decision-making]" | "As Finance Manager, I want to see real-time expense spend by department, so I can track budget" |

### Example: Feature with Multiple Story Personas

**Feature: Instant Expense Reimbursement**

Story 1 (End User):
```
As an EMPLOYEE
I want to submit expenses with receipt photos
So that I don't have to type all the details and can get reimbursed faster
```

Story 2 (Manager):
```
As a MANAGER
I want to approve or reject expenses from my mobile phone
So that I can process reports immediately, not wait until I'm at my desk
```

Story 3 (System):
```
As the SYSTEM
I must validate each expense against company policy rules
So that only compliant expenses reach Finance and we stay within budget
```

Story 4 (Finance):
```
As a FINANCE ANALYST
I want to see aggregated expense spend by employee and category
So that I can identify spending patterns and catch anomalies
```

---

## Acceptance Criteria Rules (SAFe Standards)

### Golden Rules for Acceptance Criteria

1. **One outcome per criterion**: Not "User can see the amount AND approve" — split into two
2. **Observable, not subjective**: "User sees 'Approved' message" ✅ not "User is happy" ❌
3. **Independent**: Criteria don't depend on each other (mostly)
4. **Testable by automation or manual QA**: "System calculates reimbursement within 500ms" ✅ not "System is fast" ❌
5. **Include the actor**: "System validates expense" ✅ not "Expense is validated" ❌
6. **State the boundary condition**: "Expense over $500 requires VP approval" — be explicit about the rule

### Acceptance Criteria Anti-Patterns

❌ "User can manage expenses"  
✅ "User can create, read, update, and delete expense reports"

❌ "System should be scalable"  
✅ "System must process 1000 expenses per minute without errors"

❌ "User interface is intuitive"  
✅ "User can submit an expense in under 2 minutes (measured on new user)"

❌ "Application works in Chrome"  
✅ "Application displays correctly and is fully functional in Chrome 90+ (tested at 1920×1080 resolution)"

---

## BDD Scenario Standards (SAFe/Gherkin Format)

### Scenario Structure

Every BDD scenario follows:

```gherkin
Scenario: [Descriptive title for this scenario]
  Given [Initial state/precondition]
  When [User action or system event]
  Then [Observable outcome]
  And [Additional verification if needed]
```

### Three Scenario Types Per Story

**1. Happy Path (Main Success Scenario)**
- User performs the action correctly
- System behaves as intended
- User gets the desired outcome

```gherkin
Scenario: User submits expense and manager receives notification
  Given user is on the Submit Expense screen with a photograph of a receipt
  When user taps "Submit for Approval"
  Then system displays "Submitted Successfully" message
  And system sends notification to assigned manager
  And system records submission timestamp
```

**2. Alternate Path (Variation or Extension)**
- User performs a valid variant of the action
- Different but acceptable outcome

```gherkin
Scenario: User submits expense from draft (resuming prior work)
  Given user has a draft expense report saved from yesterday
  When user opens the app and selects "Resume Draft"
  Then system displays the draft with previously entered data
  And user can modify or add additional details
  And user can submit as new report
```

**3. Error/Edge Case Path**
- Precondition for error is met
- User or system does something unexpected
- System handles gracefully with clear feedback

```gherkin
Scenario: User submits expense with policy violation (overspend)
  Given user's monthly expense limit is $5000
  And user has already submitted $4800 this month
  When user submits a new expense for $300 (total would be $5100)
  Then system displays "Exceeds monthly limit by $100"
  And system offers options: "Revise Amount" or "Request VP Approval"
  And system does NOT submit until one option is selected
```

### BDD Scenario Best Practices

| Best Practice | Example |
|---------------|---------|
| Use data-driven language ("Given A is set to X") not UI-centric ("Given user clicks button") | ✅ "Given expense amount is $250" not ❌ "Given user enters $250" |
| State outcomes as observable facts ("Then database records..." or "Then system displays...") not assumptions ("Then it works") | ✅ "Then expense status changes to 'Approved'" not ❌ "Then approval is processed" |
| Be specific about data/values in scenarios | ✅ "Given expense exceeds $1000" not ❌ "Given expense is large" |
| Use "And" to chain related steps, not introduce new behaviors | ✅ "Then system sends email And system logs event" (both notification outcomes) not ❌ "And user can now edit other reports" (different action) |
| Keep scenarios atomic (one behavior change per scenario) | Don't test user submission, manager approval, AND reimbursement in one scenario |

---

## Feature Decomposition Algorithm

### How to Break a Feature into Stories

**Input**: Feature from Release Plan (e.g., "User can submit expenses via receipt photo")

**Step 1: Identify Actors**
- Who touches this feature? Employee, Manager, Finance, System, Admin
- One story per actor's unique workflow (usually)

**Step 2: Identify Workflows**
- What are the distinct use cases?
  - Happy path: "User submits valid expense"
  - Edit/revision: "User edits submitted expense"
  - Approval: "Manager approves expense"
  - Compliance: "System validates policy"
  - Integration: "System sends to Finance system"

**Step 3: Assign Stories**

| Workflow | Actor | Story | Points |
|----------|-------|-------|--------|
| Submit | User | "User can photograph receipt and submit expense" | 5 |
| Edit | User | "User can revise submitted expense before approval" | 3 |
| Approve | Manager | "Manager can approve/reject on mobile" | 3 |
| Validate | System | "System validates against expense policy" | 8 |
| Integrate | System | "System sends approved expense to Finance system" | 5 |

**Step 4: Estimate**
- Each story 3–13 points (21+ means break it further)
- Feature total: sum of story points

**Step 5: Check Dependencies**
- Submit story must be done before Edit
- Submit must be done before Approve
- Validate can be parallel with others (independent)
- Integration depends on Approve being done first

---

## Feature File Structure

### Generated Feature Artifact Format

```markdown
# Feature: [Feature Name]

## Feature Metadata

| Field | Value |
|-------|-------|
| Feature ID | Q1-001 |
| Epic Link | Expense Management Automation |
| Initiative Link | Q1: Real-time Expense Processing |
| Owner | John (Product Lead) |
| Status | DRAFT / REVIEW / LOCKED |

## Business Value

[Why does this feature exist? Link to hypothesis metrics and roadmap]

Example:
"Hypothesis success metric: Reduce expense reimbursement lead time from 7 days to <2 hours.
This feature eliminates manual data entry (OCR) + manager email delays (mobile notification).
Roadmap initiative: Q1 'Real-time Expense Processing' — this is the user-facing delivery."

## Feature Acceptance Criteria

1. [Observable outcome 1]
2. [Observable outcome 2]
3. [Observable outcome 3]

## User Stories

### Story EXP-001: User Submits Expense via Receipt Photo

**Story Points**: 5  
**Priority**: P0 (must have for MVP)  
**Status**: DRAFT

As a EMPLOYEE
I want to submit an expense report by photographing a receipt with my phone
So that I can get reimbursed faster without typing all the details

#### Acceptance Criteria

1. User can launch camera from the expense app
2. App captures high-resolution receipt photo
3. OCR extracts amount, vendor, date, time from receipt
4. User can edit any auto-extracted field
5. User can add business purpose and project code
6. User can submit to assigned manager for approval
7. System displays "Submitted Successfully" confirmation

#### BDD Scenarios

**Scenario 1: Happy Path — Valid Receipt Submission**
```gherkin
Scenario: User submits clear receipt photo and system extracts data
  Given user is on the "New Expense" screen
  When user taps "Photograph Receipt"
  And user captures a high-quality photo of a receipt
  Then app displays OCR-extracted fields: amount, vendor, date
  And user can see "Confirm" and "Re-photograph" buttons
  When user reviews the extracted data and it looks correct
  And user taps "Confirm"
  Then app displays form with pre-filled amount, vendor, date
  And user can add business purpose: "Client lunch — project ABC"
  And user taps "Submit"
  Then system displays "Submitted Successfully"
  And system sends notification to assigned manager
  And system stores submission timestamp
```

**Scenario 2: Alternate Path — User Edits Incorrect OCR Data**
```gherkin
Scenario: User corrects OCR error before submitting
  Given OCR extracted amount as $25.00 (incorrect; actual is $250.00)
  When user edits amount field to $250.00
  Then app accepts the correction
  And app displays corrected data
  When user submits
  Then system records corrected amount
  And system flags this expense for OCR model feedback
```

**Scenario 3: Error Path — Poor Photo Quality**
```gherkin
Scenario: User retakes photo if image quality is too low
  Given user captures a blurry receipt photo
  When OCR processing runs
  Then app displays "Photo too blurry or dark — please retake"
  And app offers "Retake Photo" and "Enter Manually" options
  When user taps "Retake Photo"
  Then camera opens again for new photo attempt
```

#### Dependencies

- Backend API must be able to receive receipt photos (file upload endpoint)
- OCR service must be integrated (third-party or internal)
- No blocking dependencies (can start immediately)

#### Risks

- OCR accuracy may vary by receipt format (could require user manual entry for edge cases)
- Photo upload may be slow on 3G networks (mitigate: compress before send, allow offline capture + sync later)

#### Definition of Done

- ☐ Feature code written and unit tested
- ☐ All BDD scenarios written and passing
- ☐ Manual acceptance testing passed (QA verified all acceptance criteria)
- ☐ UX/Designer reviewed for mobile usability
- ☐ Eng Lead reviewed for technical implementation
- ☐ Code reviewed and approved by team lead
- ☐ Merged to main branch
- ☐ Deployed to staging environment
- ☐ User acceptance testing passed (product owner verified)

---

## Feature Summary

| Attribute | Value |
|-----------|-------|
| Total Stories | 5 |
| Total Story Points | 24 |
| Estimated Sprint Capacity | 2–3 sprints (if 8-point velocity) |
| Risks | OCR accuracy, mobile performance |
| Go/No-Go Criteria | All mandatory acceptance criteria met; lead time reduced to <2 hours |

---

## Next Steps

1. Engineering reviews stories for technical feasibility
2. QA reviews acceptance criteria for test coverage
3. Team estimates stories in planning session
4. Prioritize for sprint backlog
```

---

## Integration with Product Foundry

### Stage 7 Workflow (Feature Writing)

```
Stage 6: Release Plan LOCKED
    ↓
User runs: /write-features --bulk
    ↓
Skill decomposes each Release Plan feature into user stories:
- Feature 1 → 4 user stories (12 points)
- Feature 2 → 3 user stories (10 points)
- Feature 3 → 5 user stories (18 points)
    ↓
Each feature generates artifact: feature-[name].md
    ↓
Business Analyst reviews each feature
    ↓
Engineering Lead validates story estimates + technical feasibility
    ↓
Designer validates user interaction scenarios
    ↓
All feature artifacts LOCKED
    ↓
Hand off to Sprint Planning (external Jira/ADO)
```

### Artifact Connections

| Artifact | Connection |
|----------|-----------|
| **Release Plan** | Source: Each Release Plan feature becomes a Feature artifact |
| **Vision & Mission** | Each story must pass Vision check (no conflicting acceptance criteria) |
| **Hypothesis** | Success metrics should map to story acceptance criteria (if metric is "reduce lead time to <2 hours," a story's acceptance criteria should verify this) |
| **Discovery Report** | Stories should reflect user workflows discovered during research |
| **Business Case** | Financial value (e.g., "Finance saves 8 hrs/week") should decompose into specific story outcomes |

---

## Skill Command Reference

| Command | Effect |
|---------|--------|
| `/write-features` | List all features from current Release Plan |
| `/write-features [name]` | Write all stories for named feature |
| `/write-features --bulk` | Generate stories for all Release Plan features |
| `/write-features [name] --user-stories-only` | Stories only (skip BDD scenarios) |
| `/write-features [name] --bdd-only` | BDD scenarios only (for detailed testing spec) |
| `/write-features [name] --dry-run` | Preview without saving to artifact |
| `/write-features [name] --estimate-only` | Generate story point estimates only |
| `/write-features [name] --risks-only` | Risk analysis only (no stories) |

---

## SAFe PI Planning Integration

### Program Increment (PI) Planning

**Product Foundry produces:**
- Release Plan (features, scope, go/no-go criteria)
- Business Case (investment approved)

**Write Features skill supports SAFe PI Planning by:**
1. Breaking features into stories (planning input)
2. Providing story point estimates (capacity planning)
3. Identifying dependencies (sequencing)
4. Stating acceptance criteria (testing strategy)
5. Risk assessment (mitigation planning)

### Mapping to SAFe Terms

| SAFe Term | Product Foundry Equivalent |
|-----------|---------------------------|
| **Program** | Product Foundry Initiative (e.g., "Expense Management") |
| **Program Increment (PI)** | Product Foundry Release (e.g., "Q1 Expenses Release") |
| **PI Objectives** | Release Plan features + acceptance criteria |
| **Capabilities** | Release Plan feature-level grouping |
| **Features** | User stories from Write Features skill |
| **User Stories** | Acceptance criteria + BDD scenarios |
| **Story Points** | Fibonacci estimates from Write Features skill |

---

## Best Practices & Anti-Patterns

### ✅ Best Practices

1. **Start with the user, not the technology**
   - ✅ "User can see reimbursement status in real-time"
   - ❌ "We'll use WebSockets for real-time updates"

2. **One story = One sprint of work (roughly)**
   - Stories typically 3–13 points (fits in 1–2 sprints)
   - 21+ points = break it into smaller stories

3. **Acceptance criteria ≠ implementation details**
   - ✅ "System processes expense in under 500ms"
   - ❌ "Build API endpoint using Node.js"

4. **BDD scenarios are from the user's perspective, not implementation**
   - ✅ "User sees 'Approved' status"
   - ❌ "Database record status field set to 1"

5. **Dependencies are explicit**
   - State what must happen first
   - State what can be parallel
   - State what is optional

### ❌ Anti-Patterns

❌ **"Nice to have" stories without clear value**
- Every story should have a "So that [value]"

❌ **Acceptance criteria that are too vague**
- "The system should be fast" — how fast? Under what conditions?

❌ **Stories that are too large**
- If it takes > 2 sprints to complete, break it into smaller stories

❌ **Stories that span multiple roles without clear handoff**
- "User submits → Manager approves → Finance processes" = 3 stories, not 1

❌ **Acceptance criteria as testing instructions**
- ❌ "QA must test in Chrome and Firefox" (that's test strategy, not acceptance)
- ✅ "Application functions correctly in Chrome 90+ and Firefox 88+"

❌ **BDD scenarios without the business context**
- Scenarios should be readable by Product Owner, not just engineers

---

## Estimation Guidance

### How to Estimate Story Points

1. **Identify a baseline story** (1 simple story = 1 point or 3 points, depending on team)
   - Example: "User can see a list of expense reports" = 3 points

2. **Compare each new story to the baseline**
   - "Is this simpler than baseline? Assign 2 or 1 point"
   - "Is this same complexity? Assign 3 points"
   - "Is this more complex? Assign 5, 8, or 13 points"

3. **Factor in uncertainty and risk**
   - "Simple logic but unknown third-party API response time?" Add risk points
   - "Straightforward story but depends on infrastructure? Already done?" No risk adjustment needed

4. **Team should estimate together**
   - Planning Poker: Team members hold up cards (Fibonacci values)
   - Discuss outliers (why did one person say 3 and another say 8?)
   - Converge on consensus estimate

### Estimation Formula

```
Story Points = Base Complexity + Risk Factor

Base Complexity:
  - 1 pt: Simple config, text change
  - 3 pt: Single actor, one happy path
  - 5 pt: Single actor, multiple scenarios
  - 8 pt: Multiple actors, complex logic
  - 13 pt: High complexity, lots of edge cases

Risk Factor:
  + 1–3 pt if high uncertainty (new tech, unknown API, complex integration)
  + 0 pt if low risk (straightforward, team has done this before)
```

---

## Error Handling & Troubleshooting

| Situation | How to Handle |
|-----------|----------------|
| "Release Plan feature is too vague to break into stories" | Ask: "What does the user do? What's the success outcome?" Break into actor-specific stories. |
| "Story is too big (21+ points)" | Break into 2–3 smaller stories (each a distinct outcome or actor workflow) |
| "Can't write acceptance criteria (too subjective)" | Make it observable: "User sees status badge" not "User understands status" |
| "Stakeholder disagrees with story point estimate" | Revisit estimation: Is there unknown risk? Is story scope larger than initially thought? Adjust estimate. |
| "Story dependencies are too tangled" | Draw dependency graph; prioritize stories that unblock others; consider breaking into smaller stories |
| "BDD scenario is too long (too many steps)" | Split into multiple scenarios (one per behavior change) |

---

## Integration with Skills & Personas

### Skills That Work With Write Features

| Skill | Connection |
|-------|-----------|
| **Validate** | Acceptance criteria must pass Release Plan scope validation |
| **Revise** | If Release Plan changes, some feature stories may need revision |
| **Export** | Features can be exported as Jira bulk CSV for import to sprint planning tool |
| **Status** | Show feature writing progress (X of Y features written) |

### Personas That Use Write Features

| Persona | When | How |
|---------|------|-----|
| **Business Analyst (Primary)** | Stage 7 | Leads story writing; ensures acceptance criteria meet release scope |
| **Eng Lead** | Stage 7 | Reviews stories for technical feasibility; validates story point estimates |
| **Designer** | Stage 7 | Reviews BDD scenarios for UX accuracy; identifies missing UI flows |
| **Product Lead** | Stage 7 | Reviews value statement; ensures stories align with vision and hypothesis |

---

## Questions for the User

When writing features, guide the user through these questions:

### Feature-Level Questions

1. "What's the user outcome of this feature? (What can they do after it ships that they can't do now?)"
2. "Who needs to use this feature? (Different actors = different stories)"
3. "What would success look like? (Link to hypothesis metric, roadmap initiative, vision)"
4. "What are the risks? (Unknown APIs, tech challenges, adoption friction?)"
5. "What features/stories must be done first? (Dependencies)"

### Story-Level Questions

1. "Who is performing this action? (End user, admin, system, stakeholder?)"
2. "What exactly do they want to accomplish? (Specific action, not vague goal)"
3. "Why does that matter to them? (Business value, user benefit)"
4. "How do we know it's done? (Acceptance criteria — make it observable)"
5. "What could go wrong? (Error paths, edge cases)"
6. "Can we test it? (Is every acceptance criterion independently verifiable?)"

### Estimation Questions

1. "Is this simpler or more complex than [baseline story]?"
2. "Are there any unknowns that could make this harder? (Risk)"
3. "Does this story depend on other work being done first?"
4. "Would a team be confident completing this in one sprint?"

---

## SAFe Terminology Reference

| SAFe Term | Definition | Product Foundry Parallel |
|-----------|-----------|---------------------------|
| **Epic** | Portfolio-level initiative (1–3 year strategic direction) | Vision & Mission |
| **Capability** | Distinct business capability (6–12 months) | Release feature |
| **Feature** | User-facing functionality (one release cycle) | User story or story group |
| **User Story** | Unit of work (1–2 sprints) | Individual story in Write Features output |
| **Acceptance Criteria** | Definition of "done" for story | SAFe story acceptance criteria |
| **Scenario** | Specific workflow or test case (BDD format) | BDD scenario |
| **Story Point** | Relative complexity estimate | Fibonacci: 1, 2, 3, 5, 8, 13 |
| **Program Increment (PI)** | Planning cadence (8–12 weeks, typically 2 sprints per PI) | Release Plan |
| **PI Planning** | Event where team commits to PI objectives | External to Product Foundry (happens after Stage 7) |
| **Velocity** | Average story points completed per sprint | Tracked by delivery team (not Product Foundry) |

---

## Checklist: Feature Writing Complete

Before locking a feature artifact, verify:

- ☐ All user stories written with actor, goal, and value statement
- ☐ Each story has 3–5 acceptance criteria (observable, testable)
- ☐ Each story has 3 BDD scenarios (happy path, alternate, error path)
- ☐ All acceptance criteria pass Vision alignment check
- ☐ All stories pass Release Plan scope check (not out of scope)
- ☐ Story points estimated (Fibonacci scale)
- ☐ Dependencies identified between stories
- ☐ Risks documented with mitigation strategies
- ☐ Definition of Done checklist included
- ☐ Engineering Lead reviewed for technical feasibility
- ☐ Designer reviewed for UX accuracy
- ☐ Business Analyst verified acceptance criteria are testable
- ☐ Product Lead confirmed value and alignment to Vision/Roadmap
- ☐ Artifact ready for sprint planning handoff
