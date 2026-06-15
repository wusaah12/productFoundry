# Write Epics Skill

**Purpose**: Author portfolio-level epics that connect strategic vision to delivery roadmaps, ensuring every feature shipped traces back to explicit business intent.

**What it does**:
- Structures epics using SAFe hierarchy: Vision → Epic → Initiative → Feature → Story
- Ensures each epic connects to Vision & Mission (strategic alignment check)
- Generates epic business cases (value proposition, metrics, investment required)
- Breaks epics into features (Feature → Release Plan sequencing)
- Identifies epic dependencies (what must ship first to enable others)
- Manages epic risks and mitigation strategies
- Produces epic roadmaps (multi-quarter timelines with phasing)
- Validates epic scope against business case ROI
- Supports portfolio-level capability planning

**When to use**:
- **Stage 5 (Roadmap)**: Primary use — convert Vision into quarterly initiatives/epics
- **Stage 4 (Vision & Mission)**: On-demand — draft epics to validate Vision is decomposable
- **On-demand**: Refresh epics if business strategy or market conditions change

**Key principle**:
Epics are the connective tissue between strategic vision (aspirational) and delivery roadmaps (executable). Every epic answers: "Why does this matter to the business?" and "What's the measurable impact?"

---

## SAFe Portfolio Hierarchy

### Complete Hierarchy (Top-Down)

```
Strategic Level: VISION & MISSION (3–5 years, Product Foundry Stages 1–4)
    ↓
Portfolio Level: EPIC (1–3 years, SAFe Portfolio management)
    ├─ Epic 1: "Automate Expense Management" (achieves Vision: "Real-time financial processes")
    ├─ Epic 2: "Enable Mobile-First Finance" (achieves Vision: "Accessible anywhere")
    └─ Epic 3: "Integrate with Enterprise Systems" (achieves Vision: "Seamless operations")
        ↓
Roadmap Level: ROADMAP INITIATIVE (6–12 months per initiative, Product Foundry Stage 5 Roadmap)
    ├─ Initiative: "Q1 Real-time Expense Processing" (part of Expense Management epic)
    ├─ Initiative: "Q2 Manager Mobile Approval" (part of Expense Management epic)
    └─ Initiative: "Q3 Finance System Integration" (part of Integration epic)
        ↓
Release Level: RELEASE FEATURE (1–2 release cycles, Product Foundry Stage 6 Release Plan)
    ├─ Release R1 Feature: "User Receipt Photo Capture"
    ├─ Release R1 Feature: "Manager Mobile Notifications"
    └─ Release R2 Feature: "Auto Reimbursement Processing"
        ↓
Development Level: USER STORY (1–2 sprints, Product Foundry Stage 7 Write Features)
    └─ Story: "User can photograph receipt and submit expense"
```

### How Product Foundry Maps to SAFe Portfolio

| Product Foundry | SAFe Term | Responsibility | Mapping |
|-----------------|-----------|----------------|---------|
| **Stages 1–4** | Portfolio Vision & Strategy | Understand problem & envision solution | Vision & Mission inform epics |
| **Stage 5** (Roadmap) | **Epic → Roadmap Initiatives** | Translate epics into quarterly roadmap initiatives | **Epics decompose into quarterly initiatives** |
| **Stage 6** (Release Plan) | **Release Features** | Define features for upcoming releases from roadmap initiatives | **Roadmap initiatives decompose into release features** |
| **Stage 7** (Features) | User Stories | Write stories for delivery sprints | Features decompose into user stories |

**Key insight**: Product Foundry produces the Strategic and Portfolio layers. Delivery teams handle Program and Team layers.

---

## Epic Definition

An **Epic** (in SAFe) is a significant business initiative that typically takes 1–3 years to complete and requires multiple features and teams to deliver.

### Epic Characteristics

| Characteristic | Definition | Example |
|---|---|---|
| **Strategic alignment** | Traces back to Vision & Mission explicitly | Vision: "Real-time financial processes" → Epic: "Automate Expense Management" |
| **Business value** | Clear ROI, metrics, and stakeholder benefit | Finance team saves 20 hrs/week; employees get reimbursed same day |
| **Scope** | Big enough to require 3–7 features; small enough to complete in 1–3 years | "Expense automation" (3–4 features) vs. "All finance transformation" (too big) |
| **Dependencies** | Clear prerequisites and sequencing | "Expense automation" must happen before "Payroll integration" |
| **Risk** | Identified and accepted by stakeholders | API integration delay, user adoption, compliance challenges |
| **Success criteria** | Measurable outcomes that prove value | Lead time <2 hrs, adoption >80%, cost savings $500k/year |

### Epic Metadata

Every epic includes:

| Field | Definition | Example |
|-------|-----------|---------|
| **Epic ID** | Unique identifier (portfolio + sequence) | `EXP-001` or `FY2025-Q1-001` |
| **Epic Name** | Strategic, outcome-focused (not technical) | "Automate Expense Management" |
| **Vision Link** | Which part of Vision does this enable? | "Achieves Vision: Real-time financial processes" |
| **Business Owner** | Executive sponsor / budget holder | "VP Finance" |
| **Timeline** | When will this epic complete? | "Q2 2025 - Q1 2026 (12 months)" |
| **Investment** | Total budget/resources required | "$500k engineering + $100k tools + $50k training" |
| **Expected ROI** | Business value delivered | "Finance saves 20 hrs/week (~$500k/year); User satisfaction +40%" |
| **Success Metrics** | How we measure impact | "Expense lead time <2 hrs, adoption >80%, cost per transaction <$0.50" |
| **Risks** | What could prevent success | "API delays, user adoption friction, compliance changes" |
| **Features** | How many features required? | 3–7 features (typical epic size) |
| **Dependencies** | What must happen first | "Requires infrastructure upgrade" |
| **Status** | DRAFT / REVIEW / APPROVED / IN_PROGRESS / COMPLETED | DRAFT |

---

## Invocation

**Automatic**: Not auto-triggered (optional, Stage 5 primary use)

**Explicit**: User runs `/write-epics` or `/write-portfolio`

**Command syntax**:
```
/write-epics                        ← List all epics from current Vision
/write-epics [vision-component]     ← Write epics for one Vision component
/write-epics --all                  ← Write all Vision-aligned epics
/write-epics [name] --business-case ← Generate detailed business case
/write-epics [name] --features      ← Decompose epic into features
/write-epics [name] --timeline      ← Generate epic timeline & phasing
/write-epics [name] --dry-run       ← Preview without committing
```

**Persona invocation**: Product Lead leads; Business Owner reviews for investment; Eng Lead reviews for feasibility

---

## Epic Writing Workflow

### Step 1: Start from Vision & Mission

User provides locked Vision & Mission:
```
Vision: "Financial processes happen in real-time, anywhere, any device"
Mission: "Automate financial workflows and empower teams with instant insights"

Strategic Filters:
1. Must reduce process lead time by 90%+
2. Must be mobile-first
3. Must integrate with existing enterprise systems
```

### Step 2: Identify Epic Themes

From the Vision, extract major themes/initiatives:

| Vision Component | Epic Theme | Scope |
|-----------------|-----------|-------|
| "Real-time financial processes" | **Automate Expense Management** | Eliminate manual expense approval bottleneck |
| "Real-time financial processes" | **Enable Mobile-First Finance** | Extend finance workflows to mobile devices |
| "Integrate with existing enterprise systems" | **Finance System Integration** | Connect with legacy ERP, payroll systems |
| "Empower teams with instant insights" | **Real-time Financial Analytics** | Dashboards and reporting for decision-makers |

### Step 3: Define Each Epic

For "Automate Expense Management" epic:

```
Epic Metadata:
- Epic ID: FY2025-EXP-001
- Name: "Automate Expense Management"
- Vision Link: Achieves "Real-time financial processes"
- Business Owner: VP Finance
- Timeline: Q2 2025 – Q1 2026 (12 months)
- Investment: $500k engineering + $100k tools + $50k training

Business Value:
- Finance team saves 20 hrs/week (currently 40 hrs/week × 10 people = 400 hrs)
- Lead time: 7 days → <2 hours (97% reduction)
- User satisfaction: increase from 2.3/5 to 4.5/5
- Cost per transaction: $5 → $0.50
- Expected ROI: $500k cost → $500k/year savings = 1-year payback

Success Metrics:
1. Expense lead time <2 hours (measured from submission to reimbursement)
2. Adoption >80% (employees submitting expenses via mobile)
3. Error rate <1% (policy compliance violations)
4. Finance team time on task <10 hrs/week (80% reduction)

Features (3–4 required):
1. Receipt Photo Capture (eliminate manual data entry)
2. Manager Mobile Approval (eliminate email delays)
3. Auto Reimbursement (eliminate Finance re-entry)
4. Real-time Status Dashboard (new capability)

Dependencies:
- Infrastructure: Mobile backend + API gateway (Q1 2025 - dependent on infrastructure team)
- Integration: Payroll system API (Q2 2025 - need API documentation from HR)

Risks:
- API delay: "Payroll team may not have API ready by Q2" → Mitigation: Start 2 weeks early, have manual fallback
- Adoption friction: "Users may not trust mobile submission" → Mitigation: Early beta, user training, progressive rollout
- Compliance: "Tax law changes could affect reimbursement rules" → Mitigation: Build configurable rules engine
```

### Step 4: Validate Epic Against Vision

**Vision Alignment Check:**

```
Vision Statement: "Financial processes happen in real-time, anywhere, any device"

Epic: "Automate Expense Management"
✅ Real-time? YES — lead time reduces from 7 days to <2 hours
✅ Anywhere? YES — mobile-first architecture
✅ Any device? YES — responsive web + native mobile apps
✅ Financial? YES — expense processing is financial
✅ Alignment confirmed
```

**Strategic Filters Check:**

```
Filter 1: "Must reduce process lead time by 90%+"
Epic: 7 days → <2 hours = 99% reduction
✅ PASS

Filter 2: "Must be mobile-first"
Epic: Mobile app is primary delivery mechanism
✅ PASS

Filter 3: "Must integrate with existing enterprise systems"
Epic: Includes payroll integration as feature
✅ PASS
```

### Step 5: Decompose Epic into Features

Each epic should be 3–7 features (too few = not worth epic-level planning; too many = should be multiple epics).

| Feature | Timeline | Release | Owner |
|---------|----------|---------|-------|
| Receipt Photo Capture | Q2 2025 | R1 (Q2) | Product |
| Manager Mobile Approval | Q2–Q3 2025 | R1 (Q3) | Product |
| Auto Reimbursement Processing | Q3 2025 | R2 (Q3) | Finance + Backend |
| Real-time Status Dashboard | Q4 2025 | R2 (Q4) | Analytics |

### Step 6: Create Epic Roadmap

Show how the epic unfolds over time:

```
EPIC ROADMAP: Automate Expense Management (12 months)

Phase 1: MVP (Q2 2025) — User & Manager Focus
├─ Receipt Photo Capture (user convenience)
├─ Manager Mobile Approval (approval speed)
├─ Manual Reimbursement (Finance still processes)
└─ Goal: Achieve 50% of lead time reduction (7 days → 4 days)

Phase 2: Integration (Q3–Q4 2025) — Finance Automation
├─ Auto Reimbursement Processing (eliminates Finance re-entry)
├─ Payroll System Integration (automated payout)
├─ Real-time Status Dashboard (Finance visibility)
└─ Goal: Achieve full lead time reduction (<2 hours)

Phase 3: Scale & Optimize (Q1 2026) — Governance & Compliance
├─ Configurable Reimbursement Rules (policy engine)
├─ Multi-currency Support (global expansion)
├─ Audit & Compliance Reporting (regulatory requirements)
└─ Goal: Support multi-region deployment; ensure compliance
```

### Step 7: Document Epic Dependencies

```
EPIC DEPENDENCIES

Dependency 1: Infrastructure Team
- Prerequisite: Mobile backend API gateway setup (Q1 2025)
- Critical path? YES — blocks Phase 1 delivery
- Mitigation: Partner with Infra team now; early alignment

Dependency 2: HR/Payroll Team
- Prerequisite: Payroll system API documentation (Q1 2025)
- Critical path? YES for Phase 2 — blocks auto-reimbursement
- Mitigation: Request API early; have manual fallback for Phase 1

Dependency 3: Compliance/Finance
- Prerequisite: Reimbursement policy rules documented (Q2 2025)
- Critical path? YES — needed for configurable rules engine
- Mitigation: Monthly alignment meetings; rules defined by end Q1

Cross-Epic Dependencies:
- This epic enables "Finance System Integration" epic (feeds data)
- Depends on "Enable Mobile-First Finance" epic (mobile infrastructure)
- Blocks "Real-time Financial Analytics" epic (requires clean data from auto-processing)
```

### Step 8: Assess Epic Risks

```
EPIC RISKS & MITIGATIONS

Risk 1: API Integration Delays
- Probability: Medium (payroll team often overbooked)
- Impact: High (blocks Phase 2, 3-month delay possible)
- Severity: High (Medium × High)
- Mitigation Strategy:
  1. Start API integration design 2 months before scheduled date
  2. Have manual fallback for Phase 1 (Finance manually processes)
  3. If API unavailable by Q3, Phase 2 still ships without auto-processing

Risk 2: User Adoption Friction
- Probability: Medium (new mobile workflow, behavior change)
- Impact: Medium (adoption <80% would reduce ROI)
- Severity: Medium
- Mitigation Strategy:
  1. Early beta program with 50 pilot users (Q2 2025)
  2. Training program for all users (30-min video + live sessions)
  3. Progressive rollout: 25% → 50% → 100% adoption curve

Risk 3: Compliance Changes
- Probability: Low (tax law rarely changes mid-year)
- Impact: High (could require re-architecture)
- Severity: Medium (Low × High)
- Mitigation Strategy:
  1. Design configurable rules engine (not hardcoded reimbursement logic)
  2. Monthly check-ins with Compliance team
  3. Contingency time built into Phase 3

Risk 4: Payroll System Unavailability
- Probability: Low (enterprise system, 99.9% uptime)
- Impact: High (auto-reimbursement fails, leads to customer escalations)
- Severity: Medium
- Mitigation Strategy:
  1. Design retry logic with exponential backoff
  2. Queue reimbursements if payroll system is down
  3. Manual fallback for critical cases
```

---

## Epic Business Case

Every epic needs a business case showing ROI and investment justification.

### Epic Business Case Structure

```markdown
## Business Case: Automate Expense Management

### Executive Summary

This epic automates the expense management workflow, eliminating manual processes and 
reducing lead time from 7 days to <2 hours. Expected ROI: 1-year payback on $650k 
investment; ongoing savings of $500k/year.

### Problem Statement

Current expense management is manual and slow:
- Employees fill out forms, attach receipts, email to managers
- Managers approve via email (average 2-day delay)
- Finance team re-enters data into payroll system
- **Total lead time: 7–10 days**
- Employee dissatisfaction: 2.3/5 stars
- Finance team spends 40+ hrs/week on processing
- Error rate: 5–10% (compliance violations, incorrect amounts)

### Proposed Solution

Build automated workflow:
1. Users photograph receipt → OCR extracts data → auto-fills form
2. Instant notification to manager → 1-click approval (mobile)
3. Approved expenses → auto-process to payroll for direct deposit
4. **New lead time: <2 hours**

### Financial Impact

**Investment Required:**
- Engineering: $500k (12 months, 3 engineers + 1 PM)
- Tools & APIs: $100k (OCR service, cloud infrastructure)
- Training & change management: $50k
- **Total: $650k**

**Annual Benefits (Year 1):**
- Finance team labor savings: 20 hrs/week × 10 people × $50/hr × 50 weeks = $500k
- Reduced errors (compliance violations): $100k (avoided penalties)
- **Total: $600k**

**ROI Calculation:**
- Year 1 ROI: ($600k – $650k) / $650k = –7% (payback in 13 months)
- Year 2+ ROI: $600k / $650k = 92% annual return

**Payback Period:** 13 months

**3-Year NPV (at 10% discount rate):**
- Year 1: –$50k
- Year 2: +$545k
- Year 3: +$495k
- **Total NPV: +$990k**

### Strategic Alignment

**Vision**: "Financial processes happen in real-time, anywhere, any device"
- This epic directly achieves: Real-time ✅, Accessible via mobile ✅

**Strategic Filters**:
1. "Reduce lead time by 90%+" → Achieves 99% reduction ✅
2. "Mobile-first" → Mobile app is primary delivery ✅
3. "Enterprise system integration" → Payroll integration included ✅

### Success Metrics

Measure epic success with:
1. **Lead time**: 7 days → <2 hours (tracked per transaction)
2. **Adoption**: >80% of employees using mobile by end of Phase 2
3. **Error rate**: <1% (compliance violations)
4. **Finance team hours**: 40 hrs/week → <10 hrs/week
5. **User satisfaction**: 2.3/5 → 4.5/5 stars

### Risks & Mitigations

See Epic Risks section above (omitted here for brevity)

### Dependencies

See Epic Dependencies section above

### Recommendation

**GO** — Proceed with epic. Strong business case (1-year payback), clear strategic 
alignment, and high user impact. Start Phase 1 in Q2 2025.
```

---

## Epic Phasing Strategy

### How Epic Phases Map to Roadmap Initiatives

Each epic phase decomposes into one or more **roadmap initiatives** (Stage 5 quarterly planning):

| Phase | Roadmap Quarter | Initiative Name | Features Included | Lead Time Improvement |
|-------|-----------------|-----------------|-------------------|----------------------|
| **Phase 1: MVP** (User Experience) | Q2 2025 | "Real-time Expense Processing" | Photo capture, Mobile approval | 7 days → 4 days (43%) |
| **Phase 2: Integration** (Finance Automation) | Q3–Q4 2025 | "Finance System Integration" | Auto-reimbursement, Dashboard | 4 days → <2 hours (95%) |
| **Phase 3: Scale** (Governance) | Q1 2026 | "Global Finance Compliance" | Multi-currency, Reporting | <2 hours sustained (100%) |

---

## Epic-to-Feature Mapping

### How Epics Decompose into Roadmap Initiatives, Then Release Features

**Epic: "Automate Expense Management" (1–3 years, Product Foundry Stage 5 responsibility)**
```
├─ Roadmap Initiative Q1: "Real-time Expense Processing" (Stage 5)
│  ├─ Release R1 Feature: "User Receipt Photo Capture" (Stage 6)
│  └─ Release R1 Feature: "Manager Mobile Approval" (Stage 6)
│
├─ Roadmap Initiative Q2: "Finance Automation" (Stage 5)
│  ├─ Release R2 Feature: "Auto Reimbursement Processing" (Stage 6)
│  └─ Release R2 Feature: "Finance Dashboard" (Stage 6)
│
└─ Roadmap Initiative Q3: "Governance & Compliance" (Stage 5)
   └─ Release R3 Feature: "Multi-Currency & Compliance" (Stage 6)

Total Epic: 5 Release Features, 3 Roadmap Initiatives, 12 months
```

**Handoff Points:**
- **Stage 5 (Product Foundry)**: Epic defined with:
  - Roadmap initiatives (quarterly breakdown)
  - Initiative success metrics
  - Initiative-level features (what will be built in each quarter)
  - Dependencies between initiatives
  
- **Stage 6 (Product Foundry)**: For each release, select features from roadmap initiatives:
  - Release R1 picks features from Q1 initiative
  - Release R2 picks features from Q1 + Q2 initiatives
  - Release R3 picks features from Q2 + Q3 initiatives
  
- **Stage 7 (Product Foundry)**: Each release feature broken into user stories

- **Delivery** (external): Sprint planning pulls stories from release features into backlogs

---

## Epic Success & Completion Criteria

### Epic Success Criteria

An epic is considered successful when:

1. **All phases shipped** — Phase 1, 2, 3 all in production
2. **Success metrics met** — 80%+ of baseline success metrics achieved (e.g., >80% adoption, lead time <2 hours)
3. **ROI delivered** — Investment payback achieved (or on track)
4. **User satisfaction** — Net satisfaction score ≥ 4/5 or >80% positive feedback
5. **No critical regressions** — System performance, security, compliance maintained

### Epic Completion & Retrospective

```markdown
## Epic Retrospective: Automate Expense Management

**Completion Date**: Q1 2026
**Status**: ✅ SUCCESSFUL

### Outcomes vs. Targets

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Lead time | <2 hours | 1.5 hours | ✅ EXCEEDS |
| Adoption | >80% | 87% | ✅ EXCEEDS |
| Error rate | <1% | 0.8% | ✅ PASS |
| Finance hours/week | <10 | 8 | ✅ PASS |
| User satisfaction | 4.5/5 | 4.7/5 | ✅ EXCEEDS |

### Budget vs. Spend

| Category | Budget | Actual | Variance |
|----------|--------|--------|----------|
| Engineering | $500k | $480k | ✅ –$20k (under) |
| Tools & APIs | $100k | $110k | ⚠️ +$10k (over) |
| Training | $50k | $35k | ✅ –$15k (under) |
| **Total** | **$650k** | **$625k** | **✅ –$25k (under)** |

### Timeline vs. Plan

| Phase | Planned | Actual | Variance |
|-------|---------|--------|----------|
| Phase 1 | Q2 2025 | Q2 2025 | ✅ On time |
| Phase 2 | Q3–Q4 2025 | Q3–Q4 2025 | ✅ On time |
| Phase 3 | Q1 2026 | Q1 2026 | ✅ On time |

### Lessons Learned

1. **What went well**:
   - Early integration with payroll team prevented API delays
   - Progressive rollout (25% → 50% → 100%) achieved smooth adoption
   - Configurable rules engine enabled fast compliance changes

2. **What could improve**:
   - OCR accuracy issues on old receipts required manual fallback more than expected
   - Training needs were higher than anticipated (60 hrs vs. planned 40 hrs)
   - Mobile app performance on low-bandwidth networks needed optimization

3. **Recommendations for next epics**:
   - Allocate extra time for edge case testing (OCR, mobile)
   - Plan 1.5× training budget for user-facing features
   - Test on slow networks early in development

### Impact

- Finance team saves **20 hrs/week** (annual value: $500k)
- Employees report **87% adoption** (vs. 80% target)
- Company achieved **1-year payback** on investment
- **Net impact**: +$500k/year ongoing value

### Decision for Future Work

- **Approved**: Proceed with "Finance System Integration" epic (Q2 2026 start)
- **Approved**: Build on this foundation with "Real-time Financial Analytics" epic
- **Deferred**: Multi-currency support to Phase 3 expansion (not critical for core markets yet)
```

---

## Epic Portfolio Management

### Managing Multiple Concurrent Epics

Organizations often run 3–5 epics in parallel. Write Epics skill helps prioritize:

```
PORTFOLIO: Finance Transformation Initiative (FY2025–FY2026)

Epic 1: Automate Expense Management (ACTIVE — Q2 2025 – Q1 2026)
├─ Status: In Phase 1 (MVP shipped, Phase 2 starting)
├─ Investment: $650k
├─ ROI: 1-year payback
└─ Impact: Finance efficiency, user experience

Epic 2: Enable Mobile-First Finance (QUEUED — Q3 2025 – Q2 2026)
├─ Status: Approved, waiting for infrastructure
├─ Investment: $400k
├─ ROI: 18-month payback
├─ Blocks: "Expense Automation" Phase 2 (depends on mobile backend)
└─ Impact: Mobile infrastructure, broader platform

Epic 3: Real-time Financial Analytics (QUEUED — Q4 2025 – Q3 2026)
├─ Status: Approved, depends on Expense Automation Phase 2
├─ Investment: $350k
├─ ROI: 2-year payback
├─ Depends on: Clean data from automated expense processing
└─ Impact: Executive decision-making, insights

Epic 4: Finance System Integration (PLANNED — Q2 2026 – Q4 2026)
├─ Status: In design phase
├─ Investment: $600k
├─ ROI: Enables future epics (infrastructure play)
├─ Depends on: Expense Automation Phase 2, Mobile Platform Epic
└─ Impact: Legacy system integration, data consolidation

---

**Portfolio Resource Plan:**

Q2 2025: 3 teams (Expense automation Phase 1 + Mobile Phase 1 + Analytics design)
Q3 2025: 4 teams (Expense automation Phase 2 + Mobile Phase 2 + Analytics Phase 1 + Integration design)
Q4 2025: 4 teams (Expense automation Phase 3 + Analytics Phase 2 + Integration Phase 1)
Q1 2026: 3 teams (Analytics Phase 3 + Integration Phase 2)
Q2 2026: 2 teams (Integration Phase 3 + new epics starting)

**Total Portfolio Investment (FY2025–2026)**: ~$2M
**Total Portfolio ROI**: ~$1.5M/year (post-Year 1)
```

---

## Integration with Product Foundry

### Stage 5 Workflow (Epic Writing)

```
Stage 4: Vision & Mission LOCKED
    ↓
User runs: /write-epics
    ↓
Skill identifies epic themes from Vision:
- "Real-time processes" → Epic 1, 2, 3
- "Enterprise integration" → Epic 4
- "Empower teams" → Epic 5
    ↓
Each epic generated with:
- Metadata (timeline, investment, ROI)
- Business case (value proposition)
- Phase breakdown (MVP, Integration, Scale)
- Roadmap initiatives (quarterly breakdown of phases)
- Features in each initiative (what will go into Release Plan)
- Dependencies (prerequisites, blockers, cross-epic)
- Risks & mitigations
    ↓
Business Owner reviews and approves epics
    ↓
Stage 5 Roadmap created with epics as reference:
- Q1 initiative: [Features from Epic X Phase 1]
- Q2 initiative: [Features from Epic Y Phase 1]
- Q3 initiative: [Features from Epic X Phase 2]
- Q4 initiative: [Features from Epic Z Phase 1]
    ↓
Stage 5 Roadmap locks with clear epic-to-initiative traceability
    ↓
Stage 6 Release Plan: For each release, select features from roadmap initiatives
    ↓
Stage 7 Features: Each release feature decomposed into user stories
```

### Artifact Connections

| Artifact | Connection |
|----------|-----------|
| **Vision & Mission** | Source: Epic themes extracted from Vision |
| **Business Case** | Epic-level business case (separate from Stage 4 business case) |
| **Roadmap (Stage 5)** | **Epic initiatives populate quarterly roadmap** (this is where epics map to Stage 5) |
| **Release Plan (Stage 6)** | **Release features come from roadmap initiatives** (not directly from epics) |
| **Features & Stories** | Stories ultimately trace through Feature → Initiative → Epic → Vision |

---

## Epic Artifact Format

### Generated Epic Artifact Structure

```markdown
# Epic: [Epic Name]

## Epic Metadata

| Field | Value |
|-------|-------|
| Epic ID | [Unique ID] |
| Epic Name | [Strategic name] |
| Vision Link | Which Vision component? |
| Business Owner | [Executive sponsor] |
| Timeline | [Q start – Q end, duration] |
| Investment | [Total cost estimate] |
| Expected ROI | [Annual value, payback period] |
| Status | DRAFT / APPROVED / IN_PROGRESS / COMPLETED |

## Business Value

[Why does this epic matter? Link to Vision, strategic filters, ROI]

## Epic Business Case

[Detailed financial analysis: problem, solution, investment, benefits, ROI]

## Success Metrics

[How we measure if epic succeeded]

## Epic Phases

[Phase 1, 2, 3 breakdown with features, timeline, outcomes]

## Feature Decomposition

[List 3–7 features that make up this epic]

## Epic Dependencies

[What must happen first? Blockers? Cross-epic dependencies?]

## Risks & Mitigations

[Major risks and mitigation strategies]

## Sign-Off

- [ ] Business Owner approved
- [ ] Product Lead reviewed
- [ ] Eng Lead reviewed for feasibility
- [ ] Architecture reviewed if needed
```

---

## Skill Command Reference

| Command | Effect |
|---------|--------|
| `/write-epics` | List all epics aligned to Vision |
| `/write-epics [name]` | Write detailed epic for one theme |
| `/write-epics --all` | Write all Vision-aligned epics |
| `/write-epics [name] --business-case` | Generate epic-level business case |
| `/write-epics [name] --features` | Decompose epic into features |
| `/write-epics [name] --timeline` | Generate epic timeline and phasing |
| `/write-epics [name] --risks` | Risk analysis for epic |
| `/write-epics [name] --dependencies` | Identify epic-level dependencies |
| `/write-epics [name] --roadmap` | Map epic to quarterly roadmap |
| `/write-epics [name] --dry-run` | Preview without saving |

---

## Best Practices

### ✅ Epic Sizing

**Right-sized epic:**
- Takes 1–3 years (not 6 months, not 5 years)
- Requires 3–7 features (not 1 feature = not epic; not 20 features = too big)
- Has 40–150 total story points (rough guide)
- Delivers 50%+ of value in Phase 1

**Under-sized (not really an epic):**
- "Mobile expense app" (1–2 features, 6 months) → This is a release, not an epic
- Fix: Combine with related features into larger epic

**Over-sized (too big):**
- "Digital transformation of entire finance function" (20 features, 3 years) → Too broad
- Fix: Split into 3–4 smaller, focused epics

### ✅ ROI Calculation

**Good ROI business case:**
- Clear baseline (what costs us today?)
- Clear benefit (what do we save/earn?)
- Realistic timeline (when do we realize benefit?)
- Conservative estimates (use low-end of ranges)

**Bad ROI business case:**
- Vague benefits ("improved user experience" — how much is that worth?)
- Unrealistic timelines (assuming 100% adoption on day 1)
- Optimistic estimates (best-case scenarios only)

### ✅ Phase Planning

**Good phasing:**
- Phase 1 (MVP) delivers 50%+ of ROI (users see value quickly)
- Phase 2 (Integration) delivers 30–40% more (automation kicks in)
- Phase 3 (Optimize) delivers remaining 10–20% (edge cases, compliance)

**Bad phasing:**
- Phase 1 has 0% value (pure infrastructure, no user-facing features)
- Phase 2 delivers all value (users frustrated in Phase 1)

### ❌ Anti-Patterns

❌ **"Epic-sized" = "vague and aspirational"**
- ✅ Instead: Epic should be specific (who, what, why, how much)

❌ **Multiple epics with overlapping features**
- ✅ Instead: Each epic has distinct features; related epics have clear dependencies

❌ **Epic with no success metrics**
- ✅ Instead: Every epic has 3–5 measurable outcomes

❌ **Epic with no dependencies documented**
- ✅ Instead: Identify what must happen first; sequence epics accordingly

---

## Error Handling & Troubleshooting

| Situation | How to Handle |
|-----------|----------------|
| "Vision is too vague to extract epics" | Ask: "What are the 3–5 major initiatives needed to achieve this vision?" Extract epic themes from user's answer. |
| "Can't estimate ROI for epic" | Start with baseline: "How much time/cost today?" Then estimate savings: "How much less time/cost after?" Conservative assumption: 20–30% efficiency gain. |
| "Epic is too big" | Review feature count: If >7 features, split into 2 focused epics. Check timeline: If >3 years, split by phase. |
| "Features don't decompose well" | Epic scope may be too vague. Refocus: "What's the core user outcome?" Extract that as epic focus; move other features to future epics. |
| "Dependencies are tangled" | Draw dependency graph. Find "root" epic (has no blockers). Start there. Block dependent epics until root epic Phase 1 ships. |

---

## Integration with Skills & Personas

### Skills That Work With Write Epics

| Skill | Connection |
|-------|-----------|
| **Write Features** | Epic features are input to Write Features (Stage 7) |
| **Value Stream Map** | Current-state VSM can validate problem; future-state VSM shows epic impact |
| **Business Case** | Epic business case extends Stage 4 business case to portfolio level |
| **Revise** | If epic scope changes, downstream features may need revision |
| **Status** | Show epic progress as roadmap progresses (which epics active, completed, planned) |

### Personas That Use Write Epics

| Persona | When | How |
|---------|------|-----|
| **Product Lead (Primary)** | Stage 5 | Leads epic writing; translates Vision into epics; owns roadmap |
| **Business Owner** | Stage 5 | Reviews and approves epic ROI and investment; owns budget |
| **Eng Lead** | Stage 5 | Reviews epic feasibility; validates phase estimates; identifies dependencies |
| **Hypothesis Validator** | Stage 4–5 | Links epic success metrics to hypothesis metrics |

---

## Questions for the User

When writing epics, guide through these questions:

### Epic-Level Questions

1. "What's the strategic outcome this epic achieves from the Vision?"
2. "Who benefits most from this epic? (employees, customers, company, partners?)"
3. "How much will this epic cost in total investment?"
4. "What's the measurable ROI? (savings, new revenue, risk reduction?)"
5. "How long will this epic take? (6 months, 1 year, 2 years?)"
6. "What are the 3–5 most important success metrics?"
7. "What must happen first? (prerequisites, other epics, infrastructure?)"
8. "What could derail this epic? (risks, dependencies, market changes?)"

### Phase-Level Questions

1. "What's the minimum viable scope for Phase 1 that delivers user value?"
2. "How much ROI do we realize in Phase 1? (should be 50%+)"
3. "What integration or automation can we defer to Phase 2?"
4. "What edges cases or compliance items can wait for Phase 3?"

### Feature-Level Questions

1. "How many distinct features make up this epic? (3–7 is right-sized)"
2. "What features are prerequisites? (what order?)"
3. "Can any features be done in parallel?"
4. "Does each feature have clear acceptance criteria?"

---

## SAFe Terminology Reference

| SAFe Term | Definition | Product Foundry Equivalent |
|-----------|-----------|---------------------------|
| **Portfolio** | Multi-year strategic plan | Product Foundry Vision (Stages 1–4) |
| **Epic** | 1–3 year initiative | Write Epics output |
| **Capability** | Business capability (6–12 months) | Release Plan feature group |
| **Feature** | User-facing functionality | Stage 6 Release Plan feature |
| **User Story** | 1–2 sprint work unit | Stage 7 User Story |
| **Program Increment (PI)** | 8–12 week delivery cycle | Roadmap quarter (Q1, Q2, etc.) |
| **Portfolio Management** | Strategy → execution planning | Roadmap + Epic planning |

---

## Checklist: Epic Writing Complete

Before approving an epic, verify:

- ☐ Epic name is outcome-focused (not technical)
- ☐ Epic links clearly to Vision & Mission
- ☐ Epic passes strategic filter checks (all filters align)
- ☐ Business case includes: problem, solution, investment, benefits, ROI
- ☐ Success metrics are specific and measurable (not vague)
- ☐ Epic is 3–7 features (right-sized)
- ☐ Epic timeline is 1–3 years (feasible)
- ☐ Phasing strategy shows value realization in Phase 1 (50%+)
- ☐ Dependencies identified (prerequisites, cross-epic blockers)
- ☐ Major risks documented with mitigations
- ☐ Business Owner reviewed and approved
- ☐ Eng Lead reviewed for technical feasibility
- ☐ Product Lead confirmed roadmap alignment
- ☐ Epic ready to be sequenced in roadmap

---

## Example Epics (Different Industries)

### Example 1: E-Commerce (Product: Marketplace)

**Epic: "Seller Analytics & Insights"**
- Vision component: "Empower sellers to optimize their business"
- Timeline: Q2 2025 – Q1 2026 (12 months)
- Investment: $750k
- ROI: Sellers increase revenue by 20% → platform commission +$2M/year
- Phases:
  - Phase 1: Dashboard (basic metrics on revenue, traffic)
  - Phase 2: Predictive analytics (recommendations for optimization)
  - Phase 3: Advanced AI (pricing optimization, demand forecasting)
- Features: Dashboard, Reports, Analytics Engine, Recommender, Forecasting

### Example 2: SaaS (Product: Project Management)

**Epic: "AI-Powered Project Intelligence"**
- Vision component: "Projects manage themselves"
- Timeline: Q3 2025 – Q4 2026 (18 months)
- Investment: $1.2M
- ROI: 30% time savings for PMs → $5M/year customer value
- Phases:
  - Phase 1: Risk detection (ML identifies project risks)
  - Phase 2: Auto-scheduling (AI suggests optimal task sequencing)
  - Phase 3: Team optimization (recommend resource allocation)
- Features: Risk Engine, Scheduling Engine, Resource Recommender, Reporting

### Example 3: Healthcare (Product: Patient Portal)

**Epic: "Telehealth Integration"**
- Vision component: "Healthcare accessible from anywhere"
- Timeline: Q1 2025 – Q2 2026 (18 months)
- Investment: $2.5M
- ROI: Reduces missed appointments by 40% → +$1M/year patient lifetime value
- Phases:
  - Phase 1: Video consults (basic video capability)
  - Phase 2: Prescriptions & follow-ups (digital workflows)
  - Phase 3: Insurance & billing (integration with claims)
- Features: Video Platform, Prescription Mgmt, Appointment System, Insurance Integration

