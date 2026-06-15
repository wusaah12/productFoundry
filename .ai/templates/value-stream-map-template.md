# Value Stream Map: [Product Name]

> **📌 NOTE**: Use the **HTML version** (`value-stream-map-template.html`) for the best visualization experience. This markdown file is a reference backup.
>
> The HTML version includes:
> - Interactive swimlane diagrams with visual process flows
> - Tabbed interface (Current State / Future State / Comparison / Validation / Info)
> - Styled metrics tables with color-coded improvements
> - Responsive design (works on mobile, tablet, desktop)
> - Print-friendly formatting
>
> **To use**: Open `value-stream-map-template.html` in your browser, fill in the bracketed sections, and save.

---

## Current State Value Stream Map

### Process Overview

[1–2 sentence summary of the current process]

Example: "Today, users submit expense reports via email, which routes through their manager for approval, then to Finance for processing and reimbursement. Reimbursement takes 7–10 days."

---

### Step-by-Step Breakdown

| Step # | Activity | Actor | PT (min) | WT | Value-Add? | Notes |
|--------|----------|-------|----------|-----|-----------|-------|
| 1 | [Activity name] | [Who performs it] | [Minutes of active work] | [Idle time between this step and next] | Yes/No | [Why is this step needed?] |
| 2 | | | | | | |
| 3 | | | | | | |

**How to fill this table:**
- **Activity**: What exactly happens? Use a verb (e.g., "receive email", "fill out form", "wait for approval")
- **Actor**: Who or what performs this step? (User, Manager, Finance Team, Email System, Database, etc.)
- **PT (Process Time)**: How many minutes of active work? (Only count time when the actor is actually working; ignore idle time)
- **WT (Wait Time)**: How long does the output of this step sit idle before the next step starts? (Express as minutes, hours, or days; e.g., "2 days", "30 min", "None")
- **Value-Add?**: Does this step directly serve the user's outcome? (Yes = step directly delivers value to user; No = bureaucratic, compliance, or handoff step)
- **Notes**: Why does this step exist? What would happen if we skipped it?

---

### Aggregate Metrics (Current State)

| Metric | Value | Calculation |
|--------|-------|-------------|
| **Lead Time** | [X hours/days] | From process start to finish. Sum of all PT + all WT. |
| **Process Time** | [X minutes/hours] | Sum of all PT (active work). Sum of rows where Value-Add = Yes. |
| **Wait Time** | [X hours/days] | Sum of all WT (idle time). |
| **% Value-Add** | [X%] | (Process Time / Lead Time) × 100. What % of total time is actually value work? |
| **Time Efficiency** | [0.X] | Process Time / Lead Time. Ratio of value work to total time. |

**Interpretation:**
- **Low % Value-Add** (< 50%) = Most time is waste; product has high potential ROI
- **High Wait Time** = The constraint; future product should target here
- **Many handoffs** = Risk of errors; future product should simplify

---

### Handoff Analysis (Current State)

For each transition between actors, identify:

| Handoff | From | To | Loss Points | Current Friction |
|---------|------|-----|-------------|---|
| 1 | [Actor] | [Actor] | What can go wrong? (email missed, info lost, priority unclear) | What actually goes wrong today? |
| 2 | | | | |
| 3 | | | | |

**Examples of loss points:**
- Email can be missed, buried, or marked as spam
- Information is mistranslated or incompletely transferred
- No priority signal (handoff giver doesn't know urgency)
- Status is opaque (handoff receiver doesn't know what happened)
- Timing misaligns (work is ready but receiver isn't available)

---

### Pain Points & Bottlenecks (Current State)

List the top 3–5 biggest friction points users experience:

1. **[Constraint name]**: [What makes this painful?] 
   - Example: "Manager inbox wait time: Managers are often busy; expense reports sit in inboxes for 2–3 days before review"

2. **[Constraint name]**: [What makes this painful?]

3. **[Constraint name]**: [What makes this painful?]

**Which constraint is the biggest lever?** (Which, if solved, would give the most relief to the user?)

---

### User Impact (Current State)

Describe what the user actually experiences with the current process:

- **Time impact**: How long does a typical case take? Worst case?
- **Effort impact**: How much work does the user have to do? How many clicks/emails?
- **Stress/friction**: What parts are frustrating? Do they have to chase anyone?
- **Risk**: What can go wrong? (Lost receipts, incorrect reimbursement, forgotten submissions)

---

---

## Future State Value Stream Map

### Process Overview

[1–2 sentence summary of the process after the product ships]

Example: "After the product ships, users photograph receipts in-app. OCR auto-fills the form. Instant notification to manager. Real-time processing and automatic reimbursement. User has money in 1–2 hours."

---

### Step-by-Step Breakdown

| Step # | Activity | Actor | PT (min) | WT | Value-Add? | Notes |
|--------|----------|-------|----------|-----|-----------|-------|
| 1 | [Activity name] | [Who performs it] | [Minutes of active work] | [Idle time] | Yes/No | [What changed from current?] |
| 2 | | | | | | |
| 3 | | | | | | |

**Same format as Current State, but focus on:**
- Which steps were eliminated?
- Which steps got faster?
- Which steps are now parallelized?
- Which actor responsibilities shifted?

---

### Aggregate Metrics (Future State)

| Metric | Value | Change from Current |
|--------|-------|---------------------|
| **Lead Time** | [X hours/days] | ↓ [X%] or ↓ [X min/hours/days] |
| **Process Time** | [X minutes/hours] | ↓ [X%] or ↓ [X min] |
| **Wait Time** | [X hours/days] | ↓ [X%] or ↓ [X min/hours/days] |
| **% Value-Add** | [X%] | ↑ [X%] |
| **Time Efficiency** | [0.X] | ↑ [X]× or ↑ [X%] |

**Interpretation:**
- **Lead time reduction** = Most visible to user ("I get reimbursed faster")
- **Wait time elimination** = Biggest process efficiency gain
- **% value-add increase** = Product is fundamentally less wasteful (not just faster)

---

### Handoff Analysis (Future State)

For each transition between actors:

| Handoff | From | To | Loss Points | How Product Changed It |
|---------|------|-----|-------------|---|
| 1 | [Actor] | [Actor] | Potential risks | Product improvement (eliminated, automated, made real-time?) |
| 2 | | | | |
| 3 | | | | |

**Examples of improvements:**
- Email handoff → In-app notification (instant, impossible to miss)
- Manual data entry → OCR/API (no re-keying, fewer errors)
- Email routing → System routing (single source of truth)
- Batch processing → Real-time processing (no queue, no wait)

---

### Key Improvements (Future State)

Summarize the biggest wins:

1. **[Improvement type]**: [Concrete example]
   - Example: "Zero wait time: Manager approval is instant (mobile notification) instead of 2-day email delay"

2. **[Improvement type]**: [Concrete example]

3. **[Improvement type]**: [Concrete example]

---

### Process Changes (Future State)

Show before/after for the most significant shifts:

| Current | Future | Why |
|---------|--------|-----|
| [Current step] | [Future step] | [Reason for change] |
| Email routing | In-app notification | Eliminates email search; real-time alert |
| Manual approval | Mobile approval | Streamlined, faster decision |
| Finance re-keys data | Automated OCR → System | Eliminates re-entry; reduces errors |

---

### User Benefit Summary (Future State)

Describe the user experience after the product ships:

- **Time saved**: How much faster is the process? (measured in hours/days)
- **Effort saved**: How much less work does the user do? (measured in minutes or number of clicks)
- **Stress reduced**: What friction disappears? (e.g., no more chasing manager)
- **Risk eliminated**: What problems go away? (e.g., lost receipts, incorrect reimbursements)

Example:
- **Time saved**: 7-day wait → 1-2 hour reimbursement (97% reduction)
- **Effort saved**: 25 min of data entry → 2 min of photo + confirmation (92% reduction)
- **Stress reduced**: No more email chasing; real-time visibility into approval status
- **Risk eliminated**: Receipts no longer lost in email; audit trail automatically captured

---

### What Did NOT Change (Future State)

Be honest about what remains the same:

| Process Element | Why It Didn't Change |
|-----------------|---------------------|
| Manager approval still required | Compliance; leadership oversight needed |
| Finance reconciliation still required | Regulatory; accounting function remains |
| Audit trail still maintained | Compliance; required for tax/audit |

---

---

## Comparison: Current State vs. Future State

### Side-by-Side Metrics

| Metric | Current | Future | Improvement |
|--------|---------|--------|-------------|
| Lead Time | [X] | [X] | ↓ [X%] |
| Process Time | [X] | [X] | ↓ [X%] |
| Wait Time | [X] | [X] | ↓ [X%] |
| % Value-Add | [X%] | [X%] | ↑ [X%] |
| Time Efficiency | [0.X] | [0.X] | ↑ [X]× |
| # Handoffs | [X] | [X] | ↓ [X] |
| # Manual Steps | [X] | [X] | ↓ [X] |

---

### Bottleneck Analysis

**Current State Bottleneck**:
- Identify the single biggest constraint (usually the step with longest wait time)
- Example: "Manager approval (2–3 day wait) is the bottleneck; everything waits here"

**How the Product Targets the Bottleneck**:
- Example: "Real-time notifications + mobile approval eliminates the 2-day wait; manager can approve from anywhere instantly"

**Downstream Impact**:
- Example: "With manager approval instant, Finance receives approvals 2+ days faster; reimbursement can process immediately"

---

### Why Future State Works Better

Explain the core mechanism that makes the future state superior:

1. **[Mechanism 1]**: [How it reduces lead time]
   - Example: "Real-time processing removes dependency on batch jobs; reimbursement processes within minutes, not days"

2. **[Mechanism 2]**: [How it reduces waste]
   - Example: "OCR + auto-fill eliminates manual data re-entry; Finance doesn't re-key; fewer errors"

3. **[Mechanism 3]**: [How it improves user experience]
   - Example: "Mobile notifications + in-app approval means manager approves instantly; user doesn't chase"

---

---

## Validation Questions (For User Review)

Before locking this VSM artifact, confirm with the user:

### Current State Validation

- [ ] "Is this how your process actually works today?"
- [ ] "Are the wait times accurate? (Did we underestimate or overestimate?)"
- [ ] "Did we miss any steps, handoffs, or delays?"
- [ ] "Is the lead time correct? (Have you experienced longer/shorter?)"

### Future State Validation

- [ ] "Will this VSM work after the product ships?"
- [ ] "Are these process time estimates realistic?"
- [ ] "If we achieve this future state, does it solve your main pain point?"
- [ ] "Which future state improvements matter most to you? (time, effort, stress, risk)"
- [ ] "Are there any new constraints the product might introduce? (e.g., system latency, adoption friction)"

### Overall Validation

- [ ] "Does comparing current to future state clearly show the value of this product?"
- [ ] "Are the metrics honest? (Not over-claiming or under-claiming improvements?)"
- [ ] "Should we adjust any assumptions before using this VSM for roadmap sequencing?"

---

## Integration Notes

**Where does this VSM live?**
- **Stage 2 (Discovery)**: Current state VSM helps validate discovery findings (pain points, bottlenecks, actors)
- **Stage 5 (Roadmap)**: Future state VSM shows how each roadmap initiative improves the workflow
- **Stage 6 (Release Plan)**: MVP should deliver the most impactful future state improvements (e.g., "eliminate the manager approval bottleneck")

**How does this VSM connect to other artifacts?**
- **Discovery Report**: Current state VSM should be consistent with pain points identified in interviews
- **Hypothesis**: Success metrics should include lead time/wait time reduction (e.g., "Hypothesis: Reduce lead time from 7 days to <2 hours")
- **Vision & Mission**: Vision statement should visually align with future state (e.g., "Instant reimbursement" = VSM showing <2 hour lead time)
- **Roadmap**: Each Q initiative should map to a future state improvement (e.g., "Q1 = real-time notifications = eliminates 2-day manager wait")
- **Release Plan**: MVP scope should achieve the most critical future state metric (e.g., "Lead time reduced to <1 day")

---

## File Metadata

- **Created**: [Date]
- **Status**: DRAFT / REVIEW / LOCKED
- **Last Updated**: [Date]
- **Updated By**: [Role]
- **Revision History**: (Add entries if revising)
  - v1.0 — Initial current/future state mapping

---

## Notes & Assumptions

[Document any decisions, assumptions, or open questions about this VSM]

Example:
- "We assumed Finance can integrate with the system via API; if that's not possible, future state lead time would be <1 day but not <2 hours"
- "Manager approval is required by policy and won't disappear; we're optimizing the approval speed, not eliminating the step"
- "Mobile app functionality requires user to have smartphone; for users without smartphones, process remains closer to current state"
