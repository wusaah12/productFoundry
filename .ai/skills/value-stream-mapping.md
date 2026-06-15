# Value Stream Mapping Skill

**Purpose**: Visualize and analyze work flow for the user's end-to-end process in both current state (how it works today) and future state (how it works after the product ships).

**What it does**:
- Maps current-state process: identifies all steps, actors, handoffs, wait times, and value-add activities
- Maps future-state process: shows how the product transforms the workflow
- Calculates key metrics: lead time, process time, wait time, % value-add, time efficiency
- Identifies bottlenecks, delays, and process optimization opportunities
- Highlights actor transitions and handoff friction points
- Compares current vs. future state to measure process improvement

**When to use**:
- **Stage 2 (Discovery):** Map current-state process to understand pain points and friction
- **Stage 5 (Roadmap):** Map future-state process to communicate value and sequencing
- **Stage 6 (Release Plan):** Validate that the MVP scope achieves meaningful process improvement
- **On-demand:** Refresh VSM if product scope changes mid-discovery or implementation

**Key principle**: 
Value stream mapping grounds abstract product ideas in concrete workflow reality. It surfaces which steps are genuinely valuable to the user vs. which are bureaucratic waste. This is especially powerful for B2B/internal tools where the user is a worker, not a consumer.

---

## Invocation

**Automatic**: Not auto-triggered (optional, on-demand skill)

**Explicit**: User runs `/value-stream-map` or `/vsm`

**Persona invocation**: Researcher can suggest during Stage 2 discovery if workflow-heavy product

**Command syntax**:
```
/value-stream-map                    ← Shows both current and future state
/value-stream-map current            ← Current state only
/value-stream-map future             ← Future state only
/vsm                                 ← Shorthand for full mapping
```

---

## Current State VSM (How It Works Today)

### When to Map Current State

**Always map current state UNLESS:**
- The product is genuinely net-new with no existing process to map
  - Example: "We're building a brand new AI image generation tool from scratch" → no current state
  - Counter-example: "We're automating expense reporting" → current state exists (manual forms, email)
- User explicitly states: "There is no existing process; we're inventing something entirely new"

**Skip current state only after explicit user confirmation:**
```
User: "This is net-new; there's nothing like this today"
Agent: Before we skip current state mapping, confirm: are you saying
       there is literally no way users achieve this outcome today — 
       no manual workaround, no competitor solution, nothing?
       Or are they using a less efficient alternative?

User: "There's nothing; this is truly net-new"
Agent: Confirmed. Skipping current state VSM. Moving to future state only.
```

### Current State VSM Structure

A current state VSM shows the process as it exists today with:

| Element | Definition | How to Capture |
|---------|-----------|-----------------|
| **Steps** | Discrete activities in the workflow | "User receives expense form" → "User fills out form" → "User submits email" → "Manager reviews" → "Finance processes" |
| **Actors** | Who performs each step (role or system) | User, Manager, Finance Team, Email System, Spreadsheet, etc. |
| **Process Time (PT)** | How long the activity takes (value-add work) | Filling out form: 15 min; Reviewing: 10 min |
| **Wait Time (WT)** | How long the work sits idle between steps | Form sits in manager's inbox: 2 days |
| **Lead Time (LT)** | Total elapsed time from start to finish | Start of expense report → check cleared: 2 weeks |
| **Handoffs** | Transitions between actors | User → Manager, Manager → Finance |
| **Value-Add** | Does this step directly serve the user's goal? | Filling form = YES (captures data), Manager approval = MAYBE (compliance, but delay) |

### Current State VSM Format

Create a markdown artifact showing the workflow as a table and timeline:

```markdown
## Current State Value Stream Map

### Process Overview
[1-2 sentence summary of the process today]

### Step-by-Step Breakdown

| Step # | Activity | Actor | PT (min) | WT | Value-Add? | Notes |
|--------|----------|-------|----------|-----|-----------|-------|
| 1 | Receive expense form | Email | 1 | — | No | Distribution |
| 2 | Fill out form | User | 15 | — | Yes | Data entry |
| 3 | Attach receipts | User | 5 | — | Yes | Evidence capture |
| 4 | Email to manager | User | 2 | — | No | Routing |
| 5 | Form sits in inbox | Manager | 0 | 2 days | No | Wait |
| 6 | Manager reviews | Manager | 10 | — | No | Approval/compliance |
| 7 | Manager forwards to Finance | Manager | 1 | — | No | Routing |
| 8 | Finance enters into system | Finance | 8 | — | Yes | System entry |
| 9 | Finance sits on desk | Finance | 0 | 3 days | No | Wait |
| 10 | Finance processes reimbursement | Finance | 5 | — | Yes | Check cut |
| 11 | Check delivered to mail | Mail | 1 | 2 days | No | Delivery |
| 12 | User receives check | User | 0 | — | No | Receipt |

### Aggregate Metrics

| Metric | Value | Calculation |
|--------|-------|-------------|
| **Lead Time** | 7–10 days | From expense receipt to reimbursement |
| **Process Time** | 47 minutes | Sum of all value-add steps (2, 3, 8, 10) |
| **Wait Time** | 7–10 days | Sum of all idle/wait periods (5, 7, 11) |
| **% Value-Add** | ~38% | 47 min / (47 + 420 min) = 47/467 |
| **Time Efficiency** | 0.38 | Process Time / Lead Time |

### Handoff Analysis

| Handoff | From | To | Loss Points |
|---------|------|-----|-------------|
| 1 | Email System | User | Form may be unclear; user must interpret |
| 2 | User | Manager | Email may be missed; no priority signal |
| 3 | Manager | Finance | No structured data; Finance must re-key |
| 4 | Finance | Mail | Check can be lost; untracked |

### Pain Points & Bottlenecks

- **Wait #1 (2 days in manager inbox):** No urgency; email easily buried
- **Wait #2 (3 days on Finance desk):** Finance batch-processes weekly; not real-time
- **Handoff #3 (User→Manager→Finance):** Multiple routing steps create delay and error points
- **System entry (Finance re-keys):** Manual data entry introduces errors; expensive labor

### User Impact

- User waits 7–10 days for reimbursement (pain)
- User must chase manager if form not approved (friction)
- Finance team re-keys data (waste; doesn't serve user goal)
- Receipts sometimes lost in email (risk)
```

---

## Future State VSM (How It Works After Product Ships)

### Future State VSM Structure

A future state VSM shows the same process after the product is deployed, with the same elements (steps, actors, process time, wait time, lead time) but showing:
- How the product **eliminates** waste steps
- How the product **compresses** or **parallelizes** steps
- How the product **changes actor responsibilities**
- How metrics **improve** as a result

### Future State VSM Format

Create a markdown artifact showing the reimagined workflow:

```markdown
## Future State Value Stream Map

### Process Overview
[1-2 sentence summary of the process after the product ships]

### Step-by-Step Breakdown

| Step # | Activity | Actor | PT (min) | WT | Value-Add? | Notes |
|--------|----------|-------|----------|-----|-----------|-------|
| 1 | Receive expense notification | Mobile App | 1 | — | No | Just-in-time prompt |
| 2 | Photograph receipt | User | 2 | — | Yes | Evidence capture (OCR-assisted) |
| 3 | App auto-fills expense form | System | <1 | — | Yes | AI-powered from receipt |
| 4 | User confirms/edits | User | 3 | — | Yes | Data validation |
| 5 | App submits + notifies manager | System | 1 | — | No | Instant routing |
| 6 | Manager receives notification | System | 0 | — | No | Real-time alert |
| 7 | Manager reviews (in app) | Manager | 5 | — | No | Streamlined approval |
| 8 | Manager approves/rejects | Manager | <1 | — | No | Single click |
| 9 | System auto-processes reimbursement | System | <1 | — | Yes | Automated in backend |
| 10 | User receives notification | Mobile App | 0 | — | No | Instant confirmation |

### Aggregate Metrics

| Metric | Value | Change from Current |
|--------|-------|---------------------|
| **Lead Time** | 1–2 hours | ↓ 97% (from 7–10 days) |
| **Process Time** | 12 minutes | ↓ 74% (from 47 min) |
| **Wait Time** | 0 minutes | ↓ 100% (from 7–10 days) |
| **% Value-Add** | ~77% | ↑ 103% (from 38%) |
| **Time Efficiency** | 0.77 | ↑ 2x (from 0.38) |

### Handoff Analysis

| Handoff | From | To | Loss Points | Improvement |
|---------|------|-----|-------------|-------------|
| 1 | Mobile App | User | None (in-app UX) | Clear, guided interface |
| 2 | User | System | None (API submission) | No email; no human routing |
| 3 | System | Manager | None (in-app) | Real-time notification |
| 4 | System | Finance | None (API integration) | Direct system-to-system |
| 5 | System | User | None (notification) | Instant confirmation |

### Key Improvements

- **Zero wait time:** Real-time processing replaces batch delays
- **Fewer handoffs:** System-to-system integration eliminates email/manual routing
- **Higher value-add:** OCR and AI eliminate manual data entry and re-keying
- **Actor empowerment:** Manager and User both see real-time status; no chasing required
- **Reduced error:** Single data capture (receipt photo) → all downstream data is derived, not re-entered

### Process Changes

| Current | Future | Why |
|---------|--------|-----|
| Email-based routing | In-app notifications | Eliminates email search/miss |
| Manager approval = 2-day wait | Manager approval = <1 day | Real-time alert, frictionless approval |
| Finance manual data entry | Automated OCR + system integration | Eliminates re-keying; faster processing |
| Check delivery (2+ days) | Direct deposit (instant) | Eliminates mail handoff |

### User Benefit Summary

- **Time saved:** User goes from 7–10 day wait to 1–2 hour reimbursement
- **Effort saved:** User spends 2 min instead of 25 min on data entry
- **Stress reduced:** No chasing manager; real-time visibility into approval status
- **Risk eliminated:** Receipts no longer lost in email; audit trail captured

### What Did NOT Change

- Compliance requirement for manager approval (still required; now faster)
- Finance responsibility for accounting reconciliation (still required; now automated)
- Audit trail requirement (enhanced with system logging)
```

---

## VSM Metrics Explained

### Lead Time (LT)
**Definition**: Total elapsed time from when work enters the process to when it exits (start to finish).

**Calculation**: 
```
Lead Time = Sum of all Process Time + Sum of all Wait Time
```

**Why it matters**: 
- This is what the user experiences: "I submitted my expense report 10 days ago and STILL don't have my money"
- Products that reduce lead time are immediately felt as valuable

**Example**:
- Current state: 47 min of work + 7-10 days of waiting = 7-10 day lead time
- Future state: 12 min of work + 0 waiting = <2 hour lead time
- Improvement: **97% reduction**

---

### Process Time (PT)
**Definition**: Cumulative duration of all steps where humans or systems are actively working (not idle).

**Calculation**:
```
Process Time = Sum of time for all steps marked "Yes" in Value-Add column
```

**Why it matters**:
- Shows how much "real work" is in the process vs. waste
- Process time stays relatively constant; opportunities to improve are in automation and parallelization

**Example**:
- Current state: Fill form (15) + Attach receipts (5) + Finance entry (8) + Process reimbursement (5) = 47 min
- Future state: Photo receipt (2) + App auto-fill (<1) + Confirm/edit (3) + Approve (<1) + Auto-process (<1) = 12 min
- Process time reduced because:
  - User doesn't re-key data (OCR does it)
  - Finance doesn't re-key (direct API integration)
  - Manager approval is faster (mobile app vs. email search)

---

### Wait Time (WT)
**Definition**: Cumulative duration when work is idle between steps (sitting in queues, inboxes, desks).

**Calculation**:
```
Wait Time = Sum of all idle periods
```

**Why it matters**:
- Wait time is pure waste — the user is not getting value during waiting
- This is often the biggest leverage point: reducing wait time creates the most visible improvement

**Example**:
- Current state: Manager inbox (2 days) + Finance desk (3 days) + Mail delivery (2 days) = ~7-10 days waiting
- Future state: 0 days (everything is real-time)
- **This is where the product's value comes from**

---

### % Value-Add
**Definition**: Percentage of lead time that is actively valuable to the user.

**Calculation**:
```
% Value-Add = Process Time / Lead Time × 100%
```

**Why it matters**:
- Low % value-add (< 50%) signals that most of the process is waste
- Products that increase % value-add are compressing waste, not adding complexity

**Example**:
- Current state: 47 min / 7-10 days = ~0.38% value-add (**only 38 seconds out of every 10 days is real work**)
- Future state: 12 min / 1-2 hours = ~77% value-add
- **This shows that the product isn't just faster — it's fundamentally less wasteful**

---

### Time Efficiency (TE)
**Definition**: Ratio of process time to lead time; another way to express % value-add.

**Calculation**:
```
Time Efficiency = Process Time / Lead Time
```

**Why it matters**:
- Easier to think about than percentages
- TE of 0.9 = "90% of your time is real work; 10% is waste"
- TE of 0.1 = "Only 10% is real work; 90% is waste"

**Example**:
- Current state: TE = 0.38 (38% efficiency; 62% is waste)
- Future state: TE = 0.77 (77% efficiency; 23% is waste)
- **The product doubles the process efficiency**

---

## Handoff Analysis

### What Is a Handoff?
A handoff is a transition where responsibility passes from one actor to another (or from a person to a system, or vice versa).

**Handoffs are friction points** because:
- Information must be transferred (and often lost, mistranslated, forgotten)
- Timing misaligns (handoff giver is done; handoff receiver isn't ready)
- Priority signals are lost (email in inbox vs. real-time alert)
- Status is opaque (handoff receiver doesn't know status until they check)

### Handoff Analysis Template

For each handoff, identify:

| Element | Description |
|---------|-----------|
| **From** | Who/what initiates the handoff |
| **To** | Who/what receives the work |
| **Loss Points** | What can go wrong or be lost in this transition? |
| **Current Friction** | What actually goes wrong today? |
| **Future State** | How does the product change this handoff? |

### Example Handoff Analysis

**Handoff: User → Manager (via email)**

| Element | Current State | Future State |
|---------|---------|---------|
| **Mechanism** | User emails form to manager | System notifies manager in-app |
| **Loss points** | Email can be missed, buried, spam; no priority | Real-time, impossible to miss |
| **Friction** | Manager sees email 2 days later; user must chase | Manager gets notification immediately; sees clear approval path |
| **Improvement** | Manager approval time: 2-3 days | Manager approval time: <1 hour |

---

## When Current State and Future State Differ Dramatically

The most powerful VSMs show **where the product creates value** by highlighting:

### 1. Eliminated Steps
Steps that disappear entirely in future state:
- Email routing → Replaced by in-app notification
- Manual data re-entry → Replaced by OCR/API
- Chase-the-manager → Replaced by real-time status

### 2. Compressed Steps
Steps that take less time:
- Manager review: 15 min → 5 min (streamlined mobile UX)
- Finance processing: 30 min → <1 min (automated workflow)

### 3. Parallelized Steps
Steps that can now happen simultaneously:
- Current: User fills form (sequential) → Manager approves → Finance processes
- Future: User submits instantly → Manager notified → System processes in parallel

### 4. Shifted Actors
Work that moves from expensive/scarce resource to automation:
- Current: Finance team re-keys expense data (8 min labor)
- Future: System auto-extracts from receipt (< 1 sec computation)

---

## Artifacts & Integration

### Where Value Stream Maps Live

**Stage 2 (Discovery):**
- Current state VSM helps validate the pain points discovered in user interviews
- Artifact: `[idea-name]/value-stream-map.md` (labeled "Current State")

**Stage 5 (Roadmap):**
- Future state VSM shows how each initiative improves the workflow
- Links roadmap initiatives to specific process improvements
- Artifact: Same file, future state section added

**Stage 6 (Release Plan):**
- Validate that MVP scope achieves the most critical process improvements
- Example: If the biggest pain point is manager approval wait time, MVP must include real-time notifications

### Integration with Other Artifacts

| Artifact | Connection |
|----------|----------|
| **Discovery Report** | Current state VSM should validate key friction points from user interviews |
| **Hypothesis** | Success metrics in hypothesis should include lead time improvement (before/after) |
| **Vision & Mission** | Future state VSM should visually represent the Vision (e.g., "instant reimbursement") |
| **Roadmap** | Each Q initiative should map to one or more handoff/wait time improvements |
| **Release Plan** | MVP should deliver on the most impactful process time/lead time reduction |

---

## Best Practices

### 1. Interview for Accuracy
Do not assume wait times or process times. Ask the user:
- "How long does this step actually take?"
- "How long does this sit in the queue?"
- "Who is usually waiting for whom?"

### 2. Map Real Data, Not Ideal Cases
- Current state: Capture how it works on a bad day, not a best day
  - Example: "It usually takes 2 days in manager's inbox, sometimes a week if they're on vacation"
- Represent the variance in wait times

### 3. Identify the Constraint (Bottleneck)
The bottleneck is the step with the longest wait time or highest variability. The product should target the bottleneck first.
- Example: "Manager approval is the constraint (2-3 day wait); reducing this gives us the most ROI"

### 4. Distinguish Between "Valuable" and "Necessary but Not User-Valuable"
- **Valuable steps**: Directly serve the user's outcome (e.g., "capture receipt evidence")
- **Necessary but wasteful**: Comply with policy but don't serve the user (e.g., "manager approval for compliance")
  - Mark as "No" value-add but acknowledge why they can't be eliminated
  - Future state should make these steps faster or invisible

### 5. Account for Variability
Real processes have variability:
- Express wait times as ranges: "2–5 days" not "3 days"
- Explain what causes the variance: "Depends on manager workload and whether they're on vacation"
- In future state, show how the product reduces variability: "Real-time processing removes dependency on manager availability"

### 6. Include Systems as Actors
Treat systems (Email, Spreadsheet, API, AI) as actors:
- They perform steps (process time)
- They introduce handoffs (Email → User, System → Finance)
- They can be bottlenecks (API response time, batch job delay)

### 7. Validate with Stakeholders
Before finalizing:
- Walk the current state VSM with a user: "Is this how it actually works?"
- Walk the future state VSM with a user: "Will this solve your pain point?"
- Ask: "Did we miss any steps, handoffs, or wait times?"

---

## Common Patterns & Antipatterns

### Pattern 1: Email-Based Handoffs (Waste)
Most manual, email-driven processes have:
- Multiple email forwards (User → Manager → Finance → Legal → …)
- Each forward adds 1–2 day wait
- **Improvement**: Replace with system-to-system handoffs (API, in-app notification, workflow automation)

### Pattern 2: Batch Processing (Waste)
Process where work sits until a batch is ready:
- Finance processes expense reports once per week (3–4 day wait)
- Finance processes AP invoices on Thursdays (3+ day wait)
- **Improvement**: Replace batch with real-time processing (automated workflow triggers as work arrives)

### Pattern 3: Manual Data Re-Entry (Waste)
Work is re-keyed at every step:
- User fills form → Manager forwards → Finance re-keys into system → Legal copies into audit log
- **Improvement**: Capture once (source of truth), then system propagates downstream (API, shared database)

### Pattern 4: Approval Chains as Bottlenecks
Sequential approvals create wait:
- Current: User submits → Manager approves → Director approves → Finance processes (days)
- **Future (parallel)**: User submits → All approvers notified simultaneously → First to approve unblocks processing

### Antipattern 1: Adding Steps in Future State
**Problem**: "After we ship the product, users will need to adopt it, which adds a step"
- Don't count adoption as a process step; adoption is one-time learning
- Only count recurring workflow steps

**Antipattern 2: Hiding Complexity in Future State
**Problem**: "We'll make manager approval faster by removing the approval step" (but compliance requires it)
- Don't eliminate necessary steps; make them faster and less intrusive
- Be honest: some steps will remain; the value is in the efficiency gain, not elimination

### Antipattern 3: Over-Claiming Time Savings
**Problem**: "We'll save users 10 hours per month"
- Base time savings on the actual metrics: lead time, process time, not guesses
- Test with users if possible: "If you had instant reimbursement, how would that change your workflow?"

---

## Skill Command Reference

| Command | Effect |
|---------|--------|
| `/value-stream-map` | Create full VSM (current + future state) |
| `/vsm` | Shorthand for full value stream map |
| `/value-stream-map current` | Current state only |
| `/value-stream-map future` | Future state only |
| `/value-stream-map current --detailed` | Current state with extended notes on each step |
| `/value-stream-map future --comparison` | Future state side-by-side with current state metrics |

---

## Error Handling & Troubleshooting

| Situation | How to Handle |
|-----------|----------------|
| User can't articulate current process clearly | Ask 3-4 specific questions: "Walk me through submitting one expense report from start to finish. What's the very first thing you do?" |
| User says current process varies too much | Map the most common path first; document variations as notes; explain how future state would standardize the process |
| Product is genuinely net-new (no current state) | Confirm with user; skip current state VSM; create future state only; note in artifact that this is a new process |
| Current and future state metrics seem unrealistic | Validate: "You said manager approval takes 2 days today. How would real-time notifications change that?" Adjust if user agrees |
| Handoffs are too numerous to fit in one table | Split into sections (e.g., "User-centric handoffs" vs. "Backend handoffs") or create separate handoff diagram |

---

## Integration with Skills & Personas

### Skills That Work With Value Stream Mapping

| Skill | Connection |
|-------|-----------|
| **Validate** | VSM metrics should tie to Stage exit criteria (e.g., "Future state lead time must be <1 day") |
| **Status** | Include VSM link when showing Stage 2 or 5 progress |
| **Log Decision** | If major VSM reveals a constraint, log it as a decision (e.g., "Constraint identified: manager approval bottleneck") |
| **Revise** | If product scope changes, re-run VSM to show new future state and revised metrics |

### Personas That Use Value Stream Mapping

| Persona | When | How |
|---------|------|-----|
| **Researcher (Stage 2)** | Discovery interviews | Suggest VSM during interviews to ground user pain points in workflow reality |
| **Hypothesis Validator (Stage 3)** | Hypothesis metrics | Link hypothesis success metrics to VSM lead time improvement (e.g., "Hypothesis: Reduce expense approval lead time from 7 days to <2 hours") |
| **Business Owner (Stage 4, 5)** | Strategic alignment | VSM shows business value of product (e.g., "Finance team saves 8 hours/week on data entry") |
| **Eng Lead (Stage 5)** | Technical feasibility | Discuss which VSM future-state steps are technically feasible vs. require new infrastructure |

---

## Questions for the User

When building a VSM, guide the user through these questions:

### Current State Questions
1. "Walk me through the current process from start to finish. What's step one?"
2. "Who is involved at each step? (names/roles)"
3. "How long does each step actually take? (be honest about best/worst case)"
4. "Where does work typically get stuck? (longest wait times)"
5. "What happens if something goes wrong at each step? (error recovery)"
6. "Are there any steps that don't add value but are necessary for compliance/policy?"

### Future State Questions
1. "After our product ships, what steps disappear entirely?"
2. "What steps become faster? By how much?"
3. "What steps can now happen in parallel instead of sequentially?"
4. "Who needs to do less work (or different work)?"
5. "What new capabilities does the product give the user? (new process steps)"
6. "Are there any new wait times introduced by the product? (e.g., API latency, batch jobs)"

### Validation Questions
1. "Does this VSM accurately represent how you work today?"
2. "If we achieved the future state VSM, would that solve your main pain point?"
3. "Are we missing any steps, handoffs, or wait times?"
4. "Which future state improvements matter most to you? (lead time, effort, stress reduction)"
