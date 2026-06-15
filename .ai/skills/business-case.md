# Business Case Skill

**Role:** Executive-focused business case generation and investment decision support

**Expertise:** ROI analysis, business impact articulation, go/no-go criteria definition, stakeholder communication

---

## Core Responsibilities

### 1. Generate Executive One-Pager
Create a concise, one-page business case artifact suitable for:
- Executive review and approval
- Investment decision gates
- Board presentations (summary slide)
- Stakeholder alignment meetings
- Go/no-go decision documentation

### 2. Articulate Business Value
Translate product vision and roadmap into business terms:
- Market opportunity (addressable market, TAM/SAM/SOM)
- Revenue model and financial projections
- Cost structure (build + operate + support)
- Payback period and ROI
- Competitive positioning and defensibility

### 3. Define Investment Requirements
- Team size and composition needed
- Budget (engineering, design, operations, marketing)
- Timeline and phased investment strategy
- Resource dependencies and constraints
- Risk mitigation budget

### 4. Map to Success Metrics
Connect business case back to:
- Hypothesis success metrics
- Vision strategic filters
- Release plan go/no-go criteria
- Long-term roadmap goals

### 5. Identify Risks & Mitigations
- Market risks (demand validation, adoption curve)
- Technical risks (feasibility, scalability, dependencies)
- Organizational risks (resource availability, skills, prioritization)
- Financial risks (cost overruns, timeline slippage)

---

## Mandatory Trigger: Stage 4 (Vision & Mission)

**When:** Vision & Mission artifact is LOCKED

**What it means:** Before proceeding to roadmap creation, executives must sign off on the business case. Vision is aspirational; business case is fundable.

**Automatic invocation:**
- Quality Gate signals Stage 4 completion
- System prompts: "Now generate business case for executive review"
- Business Case skill runs automatically
- Output: `[idea-name]/business-case.md`
- User must confirm business case before advancing to Stage 5

**User action:**
```
✓ Stage 4 (Vision & Mission) locked
✓ Business Case generated: [idea-name]/business-case.md
→ Review with executives
→ Confirm investment approval before Stage 5
```

---

## On-Demand Trigger: Any Stage (1-7)

**When:** User explicitly requests `/business-case`

**Use cases:**
- **Stage 2 (Discovery)**: "Generate a preliminary business case to test market opportunity"
- **Stage 5 (Roadmap)**: "Update business case with Q1 phase results"
- **Stage 6 (Release Plan)**: "Create go/no-go business case for final sign-off"
- **Stage 7 (Features)**: "Document post-launch business impact assumptions"

**User action:**
```
/business-case

[or]

/business-case-update (regenerate based on latest artifacts)
```

---

## Artifact Structure: One-Page Business Case

**File**: `[idea-name]/business-case.md`

**Format**: Markdown, single page (~500-800 words, fits on one printed page)

**Sections**:

### 1. Executive Summary (50 words)
- What is this product?
- Who needs it?
- Why now?
- Expected ROI

### 2. Problem & Opportunity (100 words)
- Market problem being solved
- Addressable market size (TAM estimate)
- Competitive landscape (why we can win)
- Strategic importance to business

### 3. Solution & Differentiation (100 words)
- Product vision (one sentence)
- Key differentiators (vs. existing solutions)
- Unique value proposition
- How we solve the problem better

### 4. Financial Summary (100 words)
- Revenue model (licensing, subscription, one-time, other)
- Year 1 revenue projection (conservative)
- Cost to build (engineering, design, ops)
- Payback period
- 3-year NPV estimate (if available)

### 5. Go/No-Go Criteria (80 words)
- Success metrics (linked to Hypothesis)
- Minimum viable signal for continuation
- Conditions for stopping investment
- Timeline for decision gates
- Who decides (approval authority)

### 6. Investment Required (80 words)
- Total investment (12 months)
- Team size and roles
- Key resource constraints
- Phase-gated milestones
- Expected outcomes per phase

### 7. Risks & Mitigations (80 words)
- Top 3 market/technical/org risks
- Risk probability and impact
- Mitigation strategy for each
- How we monitor and adjust
- Escalation triggers

### 8. Recommended Decision (50 words)
- Recommended action: GO / HOLD / CANCEL
- Rationale for recommendation
- Next decision point
- Approval authority and timeline

---

## When Business Case Is Generated

### Stage 4 (Automatic)

```
System: "Vision & Mission locked. Generating business case for executive review..."

Sources used:
- Stage 1: Problem + target user (from Idea Brief)
- Stage 2: Market research + competitive analysis (from Discovery Report)
- Stage 3: Success metrics (from Hypothesis)
- Stage 4: Vision + strategic filters (from Vision & Mission)

Output: [idea-name]/business-case.md
Status: DRAFT (user reviews, makes notes, confirms approval)

Next: /business-owner reviews for strategic fit
       Confirm investment approval → Proceed to Stage 5
```

### On-Demand (User-Requested)

```
User: /business-case

System: "Regenerating business case from latest artifacts..."

Artifacts considered:
- [idea-name]/idea-brief.md
- [idea-name]/discovery-report.md
- [idea-name]/hypothesis.md
- [idea-name]/vision-mission.md
- [idea-name]/product-roadmap.md (if at Stage 5+)

Output: Updates [idea-name]/business-case.md
Status: DRAFT (ready for review/updates)

Next: Review changes. Confirm to lock.
```

---

## Key Data Points Business Case Extracts

The business case synthesizes and translates discoveries into business language:

| Discovery Artifact | Source Data | Business Case Translation |
|-------------------|-------------|--------------------------|
| Idea Brief | Problem + target user | Market problem size + customer profile |
| Discovery Report | User interviews + competitive analysis | Market opportunity size (TAM) + competitive positioning |
| Hypothesis | Success metrics + assumptions | Key success metrics + minimum viable signal |
| Vision & Mission | Vision 3-5yr + strategic filters | Product positioning + strategic importance |
| Product Roadmap | Q1-Q4 initiatives | Phased investment + timeline |
| Release Plan | MVP features + go/no-go criteria | MVP investment cost + go/no-go gates |

---

## Workflow: Stage 4 Business Case Generation

```
Gate Keeper: "Stage 4 exit criteria passed. Vision & Mission locked."
↓
Orchestrator: "Generating business case for executive review..."
↓
Business Case Skill:
  1. Load Vision & Mission artifact
  2. Load Discovery Report (market data)
  3. Load Hypothesis (success metrics)
  4. Extract: problem, opportunity, vision, metrics
  5. Generate financial estimates (conservative)
  6. Define go/no-go criteria
  7. Write business-case.md
↓
Output: [idea-name]/business-case.md (DRAFT)
↓
System prompt:
   "Business case ready for executive review: [idea-name]/business-case.md
    
   Next steps:
    1. Review with /business-owner (strategic fit check)
    2. Confirm investment approval
    3. Address feedback (if any)
    4. Lock business case and proceed to Stage 5 (Roadmap)
    
    Ready? Type: /validate or /business-owner"
↓
User shares with executives for approval
↓
User confirms approval:
   "Business case approved. Ready for Stage 5."
↓
Orchestrator: "Confirming business case... ✓ LOCKED"
↓
Session state updated: business_case_approved = true
↓
Proceeding to Stage 5: Product Roadmap
```

---

## Workflow: On-Demand Business Case Update

```
User: "/business-case-update"
(Typically after Stage 5 or 6 lock to refresh numbers)
↓
Business Case Skill:
  1. Load existing business-case.md
  2. Refresh data from latest artifacts
  3. Update financial projections (based on roadmap)
  4. Update go/no-go criteria (based on release plan)
  5. Rewrite with new data
↓
Output: [idea-name]/business-case.md (REVISED)
↓
Changes flagged:
   "Business case updated based on roadmap lock.
    Changes:
    - Investment required: $200K → $220K (refined estimates)
    - Timeline: 6 months → 7 months
    - Q1 revenue projection: $150K → $120K (conservative)
    
    Review changes. Approve to lock."
↓
User reviews and approves (or requests revisions)
↓
Status: LOCKED
```

---

## Data Sources for Financial Estimates

Business case uses conservative, defensible numbers:

| Estimate | Source | Logic |
|----------|--------|-------|
| TAM (Total Addressable Market) | Discovery Report competitive analysis + web research | Number of potential customers × average deal size |
| SAM (Serviceable Market) | Vision strategic filters | TAM × serviceable by our team/resources |
| SOM (Serviceable Obtainable Market) | Hypothesis metrics + roadmap phasing | Conservative Y1 adoption (e.g., 2-5% of SAM) |
| Revenue model | Idea Brief problem + Discovery research | Subscription, licensing, one-time, freemium, other |
| Build cost | Eng Lead input + Roadmap scope | Team size × months × loaded cost per engineer |
| Operating cost | Industry benchmarks | ~30% of revenue for ops/support/sales (varies by model) |
| Payback period | Revenue / (build + operating cost) | Time to recover investment |
| NPV/ROI | Conservative financial projection | 3-year forecast, discounted at cost of capital |

---

## Executive Sign-Off Integration

Business case must be reviewed and approved by Business Owner (or designated approver) before Stage 5 proceeds.

**Approval flow:**

```
Business Case Generated
↓
User: "/business-owner" (invoke Business Owner role)
↓
Business Owner reviews:
   ✓ Does this align with strategic priorities?
   ✓ Is investment justified?
   ✓ Are risks understood and mitigated?
   ✓ Is go/no-go criteria clear and measurable?
↓
Business Owner provides approval or requests revision
↓
If approved:
   System: "✓ Business case approved for Stage 5"
↓
If revision requested:
   User addresses feedback
   /business-case-update
   Resubmit to Business Owner
↓
Once approved: Lock business case, proceed to Stage 5
```

---

## Linking Business Case to Downstream Artifacts

Business case is the **bridge between Vision and Roadmap**:

```
Stage 4: Vision & Mission
↓
    → Business Case (executive approval of investment)
↓
Stage 5: Product Roadmap
    ← Business case defines investment budget + timeline
    ← Roadmap must fit within business case constraints
↓
Stage 6: Release Plan
    ← Release plan refines roadmap investment to MVP scope
    ← Must align with Year 1 business case projections
↓
Launch & Validation
    ← Actual results tracked vs. business case projections
    ← Feeds Stage 6 go/no-go decision + post-launch success metrics
```

---

## Invocation Methods

### Automatic (Stage 4)

```
[After Stage 4 gate pass]

System: "Generating business case..."

No user action required. Business case generated and added to session.
```

### Explicit (User Command)

```
/business-case
→ Generate or regenerate business case for current stage

/business-case-update
→ Refresh business case with latest artifact data

/business-case-review
→ Show current business case and invite feedback

/business-case-lock
→ Lock business case after executive approval
```

### Role Agent Invocation

```
/business-owner -- "Can you review the business case?"
→ Business Owner reviews and provides feedback on strategic fit
→ Recommends revision or approval
```

---

## Quality Checklist

Before business case is considered LOCKED, verify:

- [ ] Executive summary is clear and persuasive (50 words)
- [ ] Problem & opportunity grounded in Discovery data
- [ ] Financial projections are conservative and justified
- [ ] Go/no-go criteria are measurable and linked to Hypothesis metrics
- [ ] Investment required is realistic (validated by Eng Lead)
- [ ] Top 3 risks identified with mitigation strategies
- [ ] Recommended decision is clear and justified
- [ ] Business Owner has reviewed and approved
- [ ] Artifact marked as LOCKED before Stage 5 proceeds

---

## Integration Points

- **Called by**: Orchestrator (automatic at Stage 4, on-demand at any stage)
- **Calls**: Quality Gate (to validate before LOCK)
- **Reads**: Idea Brief, Discovery Report, Hypothesis, Vision & Mission, Roadmap (if available)
- **Writes**: `[idea-name]/business-case.md`
- **Updates**: `session-state.md` (workspace root) with business_case_approval status
- **Logs to**: `DECISIONS.md` (workspace root) when business case is approved

---

## Common Questions

**Q: What if we can't estimate TAM/revenue model at Stage 4?**  
A: Use conservative assumptions and document them clearly. "Assuming X pricing model based on competitive research. We'll validate in Phase 1 pilot."

**Q: Can business case be revised after Stage 5?**  
A: Yes. If Roadmap changes investment significantly, `/business-case-update` regenerates based on new data.

**Q: Who approves business case?**  
A: Typically Business Owner or executive sponsor. Defined in session-state.md approval_authority.

**Q: Is business case required to proceed to Stage 5?**  
A: Yes. Mandatory gate at Stage 4. Investment must be approved before roadmap planning begins.

**Q: What if executives reject the business case?**  
A: Options: (1) Revise Vision to reduce scope/cost, (2) Identify new business model, (3) Defer product to future cycle. This is a go/no-go moment.
