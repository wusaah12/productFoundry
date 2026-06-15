# Epic: [Epic Name]

---

## Epic Metadata

| Field | Value |
|-------|-------|
| **Epic ID** | [Unique identifier] (e.g., FY2025-Q1-001 or EXP-001) |
| **Epic Name** | [Strategic, outcome-focused name] |
| **Vision Component** | [Which part of the Vision does this enable?] |
| **Business Owner** | [Executive sponsor / budget holder] |
| **Timeline** | [Start quarter – End quarter] (e.g., Q2 2025 – Q1 2026) |
| **Duration** | [Total months] (typically 12–36 months) |
| **Investment** | [Total budget in $k] (engineering + tools + training) |
| **Expected ROI** | [Annual savings/value + payback period] |
| **Status** | DRAFT / APPROVED / IN_PROGRESS / COMPLETED |
| **Created** | [Date] |
| **Last Updated** | [Date] |

---

## Vision & Strategic Alignment

### Vision Link

[Which element of the Vision does this epic achieve? Be specific.]

**Example:**
```
Vision: "Financial processes happen in real-time, anywhere, any device"

This epic achieves:
✅ Real-time: Lead time reduces from 7 days to <2 hours
✅ Anywhere: Mobile-first architecture with iOS + Android + web
✅ Any device: Responsive design, works on phones, tablets, desktops
```

### Strategic Filter Validation

[Does this epic pass all strategic filters? Check each.]

**Example:**
```
Filter 1: "Must reduce process lead time by 90%+"
Epic: Automate Expense Management
Evidence: 7 days → <2 hours = 99% reduction
Result: ✅ PASS

Filter 2: "Must be mobile-first"
Epic: Automate Expense Management
Evidence: Mobile app is primary delivery mechanism (web secondary)
Result: ✅ PASS

Filter 3: "Must integrate with existing enterprise systems"
Epic: Automate Expense Management
Evidence: Feature 3 includes payroll system integration
Result: ✅ PASS
```

---

## Business Value

### Problem Statement

[What's the current state pain point? Why does this matter?]

**Example:**
```
Current expense management is manual and slow:
- Employees fill out forms, attach receipts, email managers
- Managers approve via email (average 2-3 day delay)
- Finance team re-enters data into payroll system
- Total lead time: 7–10 days
- Employee satisfaction: 2.3/5 stars
- Finance team spends 40+ hours/week on processing

Impact:
- Employees frustrated (can't get reimbursed quickly)
- Finance overwhelmed (expensive manual labor)
- Errors happen frequently (5–10% non-compliance rate)
```

### Proposed Solution

[High-level overview of how this epic solves the problem]

**Example:**
```
Automate the entire workflow:

1. User photographs receipt
   → OCR extracts amount, vendor, date automatically

2. Form auto-fills with extracted data
   → User confirms or corrects in <2 minutes

3. System routes to manager immediately
   → Manager gets mobile notification (not email)
   → 1-click approval on mobile (not desktop email)

4. Approved expenses auto-process to payroll
   → Direct deposit to employee's bank account
   → Finance system automatically reconciles

Result: Entire workflow in <2 hours instead of 7–10 days
```

---

## Epic Business Case

### Executive Summary

[One-paragraph summary of ROI and recommendation]

**Example:**
```
This epic automates expense management, eliminating manual processes and reducing 
lead time from 7 days to <2 hours. We invest $650k over 12 months; payback occurs 
in 13 months; ongoing annual savings: $500k/year. Strongly recommend: GO.
```

### Investment Required

[Total cost breakdown]

| Category | Cost | Notes |
|----------|------|-------|
| Engineering | $500k | 3 engineers × 12 months @$140k/year |
| Tools & APIs | $100k | OCR service $50k/year, cloud infra $50k/year |
| Training | $50k | User training, documentation, change management |
| **Total** | **$650k** | |

### Annual Benefits

[Quantified value from this epic]

| Benefit | Calculation | Value |
|---------|-----------|-------|
| Finance labor savings | 20 hrs/week × 10 people × $50/hr × 50 weeks | $500k |
| Error reduction | 5% error rate × $20k per error × 10 errors/year | $100k |
| **Total Annual Benefit** | | **$600k** |

### ROI Analysis

| Metric | Calculation | Value |
|--------|-----------|-------|
| Year 1 ROI | ($600k benefits – $650k investment) / $650k | –7% |
| Payback Period | $650k / $600k per year | 13 months |
| Year 2 ROI | $600k / $650k = 92% annual return | 92% |
| 3-Year NPV | Year 1 (–$50k) + Year 2 (+$545k) + Year 3 (+$495k) | +$990k |

**Recommendation**: GO — Positive 3-year NPV, 1-year payback, strong strategic alignment.

---

## Success Metrics

[How we measure if this epic succeeded]

1. **Lead Time**: 7 days → <2 hours
   - Measured: Average time from expense submission to reimbursement
   - Success threshold: >95% of expenses processed in <2 hours
   - Tracked: Weekly dashboard (Finance team)

2. **Adoption**: >80% of employees using mobile by end of Phase 2
   - Measured: Active users / total employee count
   - Success threshold: 80%+ mobile adoption
   - Tracked: Monthly (Product analytics)

3. **Error Rate**: <1% (compliance violations)
   - Measured: Policy violations / total expenses
   - Success threshold: <1% non-compliant
   - Tracked: Weekly (Finance compliance dashboard)

4. **Finance Productivity**: 40 hrs/week → <10 hrs/week
   - Measured: Finance team time spent on expense processing
   - Success threshold: <10 hrs/week
   - Tracked: Monthly time logs (Finance team)

5. **User Satisfaction**: 2.3/5 → 4.5/5 stars
   - Measured: In-app NPS/CSAT survey
   - Success threshold: 4.5+ average rating
   - Tracked: Monthly survey (Product team)

---

## Epic Phases

[How the epic unfolds over quarters/years as roadmap initiatives]

### Phase 1: MVP (Q2 2025) — [Phase Name]

**Roadmap Quarter(s)**: Q2 2025  
**Roadmap Initiative Name**: "Real-time Expense Processing"  
**Duration**: 8 weeks  
**Goal**: [What does Phase 1 achieve?]

#### Release Features in This Initiative

[Which features from the Release Plan (Stage 6) will be built in this phase?]

| Feature Name | Release Quarter | Owner |
|---|---|---|
| Receipt Photo Capture | R1 (Q2 2025) | Product |
| Manager Mobile Approval | R1 (Q2 2025) | Product |
| Basic Reporting | R1 (Q2 2025) | Finance |

#### Outcomes

- Lead time improvement: [from X to Y]
- ROI realization: [X% of total]
- Adoption: [X%]
- User satisfaction: [X/5]

#### Team & Estimates

| Role | FTE | Duration |
|------|-----|----------|
| Frontend Engineer | 1.0 | 8 weeks |
| Backend Engineer | 1.0 | 8 weeks |
| Designer | 0.5 | 8 weeks |
| Product Manager | 0.5 | 8 weeks |
| **Total** | **3.0 FTE** | **8 weeks** |

**Story Points**: ~25 points

#### Risks (Phase 1)

- [Risk description] → [Mitigation strategy]

---

### Phase 2: Integration (Q3–Q4 2025) — [Phase Name]

**Roadmap Quarter(s)**: Q3–Q4 2025  
**Roadmap Initiative Name**: "Finance System Integration"  
**Duration**: 12 weeks  
**Goal**: [What does Phase 2 achieve?]

#### Release Features in This Initiative

[Which features from the Release Plan will be built?]

| Feature Name | Release Quarter | Owner |
|---|---|---|
| Auto-Reimbursement Processing | R2 (Q3 2025) | Backend + Finance |
| Policy Rule Engine | R2 (Q3 2025) | Backend + Finance |
| Finance Dashboard | R2 (Q4 2025) | Data + Product |

[Continue for Phase 3...]

---

## Roadmap Initiatives

[This section shows how epic phases map to quarterly roadmap initiatives in Stage 5]

| Initiative | Quarter | Phase | Features | ROI% | Owner |
|---|---|---|---|---|---|
| Real-time Expense Processing | Q2 2025 | Phase 1 | Photo capture, Mobile approval | 50% | Product |
| Finance System Integration | Q3–Q4 2025 | Phase 2 | Auto-reimbursement, Dashboard | 90% | Finance |
| Global Finance Compliance | Q1 2026 | Phase 3 | Multi-currency, Reporting | 100% | Compliance |

**Stage 5 Roadmap** will be populated with these initiatives quarterly.

---

## Epic Dependencies

### External Prerequisites

[What must happen before or in parallel with this epic?]

| Dependency | Type | Impact | Status | Mitigation |
|---|---|---|---|---|
| Infrastructure: Mobile backend setup | Blocks Phase 1 | Cannot launch mobile without API gateway | In Progress (Q1 2025) | Aligning with Infra team on timeline |
| Payroll system API documentation | Blocks Phase 2 | Auto-reimbursement requires payroll integration | Not started | Request from HR/Payroll in Q1 2025 |
| Finance policy rules documented | Blocks Phase 2 | Rule engine needs policy input | In Progress | Weekly meetings with Finance by Q2 2025 |
| Compliance review (multi-currency) | Blocks Phase 3 | Tax/compliance implications for multi-currency | Future | Planned for Q4 2025 |

### Cross-Epic Dependencies

[Does this epic depend on or enable other epics?]

| Epic | Relationship | Impact |
|---|---|---|
| "Enable Mobile-First Finance" | Enables | Mobile infrastructure built by this epic unblocks other finance features |
| "Finance System Integration" | Depends on | This epic's Phase 2 provides clean expense data for integration epic |
| "Real-time Financial Analytics" | Enables | This epic's Phase 2 auto-processing provides reliable data for analytics |

---

## Risks & Mitigations

### Risk 1: API Integration Delays

**Probability**: Medium  
**Impact**: High  
**Severity**: Medium × High = HIGH

**Description**: Payroll system API documentation or integration takes longer than expected (Q2–Q3 2025), delaying Phase 2 start.

**Mitigation Strategy**:
1. Start payroll integration design 2 months before scheduled date (late Q1 2025)
2. Establish weekly sync with payroll team (Q1–Q2 2025)
3. Have manual fallback for Phase 1 (Finance manually processes approved expenses)
4. If API unavailable by Q3, Phase 2 ships without auto-processing; manual processing continues

**Owner**: Tech Lead + Product Manager

---

### Risk 2: User Adoption Friction

**Probability**: Medium  
**Impact**: Medium  
**Severity**: Medium × Medium = MEDIUM

**Description**: Mobile workflow is new; users may resist adoption or not trust mobile submission, leading to <80% adoption target.

**Mitigation Strategy**:
1. Early beta program: 50 pilot users by end of Phase 1 (Q2 2025)
2. Collect feedback; iterate on UX
3. Training program: 30-min video + live Q&A sessions (Q2 2025)
4. Progressive rollout: 25% → 50% → 100% (avoid big bang, allow team ramp-up)
5. Success incentive: Recognition for early adopters

**Owner**: Product Manager + Comms team

---

### Risk 3: Compliance & Tax Changes

**Probability**: Low  
**Impact**: High  
**Severity**: Low × High = MEDIUM

**Description**: Tax law changes mid-epic (e.g., expense categories, treatment of reimbursements, multi-country rules) could require system re-architecture.

**Mitigation Strategy**:
1. Design configurable rules engine (not hardcoded reimbursement logic)
2. Monthly alignment meetings with Compliance team (Q2 2025–Q1 2026)
3. Build rule versioning (support multiple rule sets for different regions/tax years)
4. Contingency: 2 weeks extra time budgeted in Phase 3 for compliance changes

**Owner**: Compliance team + Backend lead

---

### Risk 4: Payroll System Downtime

**Probability**: Low  
**Impact**: High  
**Severity**: Low × High = MEDIUM

**Description**: Payroll system experiences unexpected downtime during Phase 2; auto-reimbursement fails; employees don't get paid on schedule.

**Mitigation Strategy**:
1. Design retry logic with exponential backoff (resubmit every 15 min, then 1 hour, then daily)
2. Queue reimbursements if payroll system unavailable (don't lose data)
3. Manual escalation process for VIP cases (C-level, urgent)
4. Communication plan: notify employees of delay within 30 minutes

**Owner**: Backend lead + Finance operations

---

## Sign-Off & Approval

**Before this epic can proceed to roadmap, verify:**

- ☐ Epic name is outcome-focused (not technical)
- ☐ Epic links clearly to Vision & Mission
- ☐ Epic passes all strategic filter checks
- ☐ Business case shows positive ROI (Year 1 or Year 2)
- ☐ Success metrics are specific and measurable
- ☐ Epic is sized appropriately (3–7 features, 1–3 years)
- ☐ Phases are well-defined with value realization in Phase 1 (50%+)
- ☐ Feature decomposition is complete (what goes in each phase)
- ☐ Major dependencies identified and sequenced
- ☐ Major risks documented with mitigations
- ☐ Budget approved by Business Owner
- ☐ Technical feasibility confirmed by Eng Lead
- ☐ Roadmap alignment confirmed by Product Lead
- ☐ Ready to sequence into roadmap initiatives (Q1, Q2, Q3, etc.)

### Approval Sign-Off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Product Lead | [Name] | [Date] | ☐ |
| Business Owner | [Name] | [Date] | ☐ |
| Eng Lead | [Name] | [Date] | ☐ |
| CFO / Finance | [Name] | [Date] | ☐ |

**Status After Approval**: APPROVED (Ready for roadmap sequencing)

---

## Revision History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| [Date] | 1.0 | Initial epic definition | [Name] |
| [Date] | 1.1 | Added Phase 3 details | [Name] |

---

## Appendix: Supporting Artifacts

**This epic connects to:**

- Vision & Mission: [Link to locked Stage 4 artifact]
- Business Case (Stage 4): [Link to investment approval from Stage 4]
- Discovery: [Link to user research validating problem]
- Hypothesis: [Link to hypothesis metrics this epic achieves]
- Success Metrics: [Specific metrics from hypothesis]

---

## Notes & Assumptions

[Document any decisions, assumptions, or open questions about this epic]

**Example:**
```
Assumptions:
- Payroll API available by Q2 2025 (need to confirm with HR)
- Finance will provide policy rules by end Q2 2025
- Mobile infrastructure team completes backend by end Q1 2025

Open Questions:
- Will Compliance require additional audit trails for Phase 3?
- Should we support invoice reimbursement (not just expense reports)?
- Multi-currency: start with major currencies only, or all?

Decisions:
- Decided: Use third-party OCR service (not build in-house)
- Decided: Mobile-first (web secondary, can follow later)
- Decided: Progressive rollout (not big bang) to minimize adoption risk
```
