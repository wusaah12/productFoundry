# Stage 5: Product Roadmap Template

> Quarterly initiatives tied to Vision. Must be locked before creating Release Plans. Can be revised post-lock — revisions trigger a cascade review of any affected Release Plans and Feature Documents.

---

## Product Roadmap

**Status:** DRAFT
  
> Status values: `DRAFT` → `REVIEW` → `LOCKED` → `REVISED` (when re-opened post-lock)

**Created:** [DATE]  
**Last updated:** [DATE]  
**Owner:** [Your name]  
**Eng Lead review:** [Name, date]  
**Exec approval:** [Name, date]

---

### Strategic Theme

[One-line theme tied to Vision. Why are we building these initiatives in this order?]

**Example:**  
"From manual overhead to automated confidence: reducing friction in the reporting workflow."

---

### Roadmap by Quarter

| Quarter | Initiative | Vision link | Priority | Risk | Owner | Implementation Status |
|---------|-----------|---|---|---|---|---|
| **Q1 2026** | [Initiative 1: Brief name] | [Which strategic filter does this serve?] | P0 | Low | [Owner] | Not Started |
| | [Initiative 2] | [Strategic filter] | P0 | Medium | [Owner] | Not Started |
| **Q2 2026** | [Initiative 3] | [Strategic filter] | P1 | Low | [Owner] | Not Started |
| **Q3 2026** | [Initiative 4] | [Strategic filter] | P2 | High | [Owner] | Not Started |

> **Implementation Status values:**
> - **Not Started** — planned, delivery not yet begun
> - **In Progress** — delivery underway
> - **Implemented** — delivery complete, awaiting user validation
> - **Validated** — user has confirmed the outcome was achieved

---

### Prioritization Rationale

Why this order? What happens if we change it?

1. **Q1 initiatives must land first because:**  
   [Describe dependencies, market urgency, user value]

2. **Q2 initiatives depend on Q1 because:**  
   [Technical dependencies, market readiness, etc.]

3. **Q3+ initiatives are deprioritized because:**  
   [Why they come later]

---

### Explicitly NOT on Roadmap

[Features, initiatives, or use cases we're explicitly deferring. Why?]

| Item | Why deferred | When might we revisit |
|------|---|---|
| [Deferred 1] | [Reason] | [When conditions change?] |
| [Deferred 2] | [Reason] | [When conditions change?] |

---

### Dependencies & Technical Risks

| Initiative | Depends on | Risk if blocked | Mitigation |
|---|---|---|---|
| [Initiative] | [What it needs] | [Impact if delayed] | [How we mitigate] |

---

### Roadmap Revision History

> Record every revision made after the Roadmap was first LOCKED. Each entry must document what changed, why, and which downstream artifacts were impacted and re-locked.

| Version | Date | Changed by | What changed | Cascade impact | Re-locked date |
|---------|------|------------|--------------|----------------|----------------|
| v1.0 | [DATE] | [Name] | Initial lock | — | [DATE] |
| v1.1 | [DATE] | [Name] | [e.g., Q2 initiative reprioritized] | [Release Plan v1.1, Feature Doc X re-locked] | [DATE] |

---

### Cascade Impact Assessment

> Complete this section whenever the Roadmap is revised post-lock. Identifies every downstream artifact that may be affected and must be re-reviewed.

**Revision reason:** [Why is this roadmap changing?]

| Downstream artifact | Impacted? | Action required | Status |
|---------------------|-----------|-----------------|--------|
| Release Plan — [name] | Yes / No | Re-review and re-lock if changed | [ ] |
| Feature Doc — [feature name] | Yes / No | Re-review and re-lock if changed | [ ] |
| Feature Doc — [feature name] | Yes / No | Re-review and re-lock if changed | [ ] |

---

## Gate Validation Checklist

Before moving to Stage 6 (initial lock), confirm:

- ☐ All initiatives explicitly tie back to Vision (visible link)
- ☐ Roadmap is sequenced by quarters (not vague "phases")
- ☐ Eng Lead has validated each quarter's feasibility
- ☐ Dependencies and risks are documented
- ☐ Deprioritized items are listed with reason
- ☐ All initiatives have Implementation Status set to "Not Started"
- ☐ User and stakeholders confirm sequence makes sense

**For re-lock after revision**, also confirm:

- ☐ Revision reason is documented in Revision History
- ☐ Cascade Impact Assessment is complete
- ☐ All impacted Release Plans have been identified
- ☐ All impacted Feature Documents have been identified
- ☐ Eng Lead has re-validated feasibility of changed initiatives
- ☐ User explicitly confirms: "I approve this revision and accept the cascade impact"

**Status:** Gate is [LOCKED / OPEN / REVISED]

---

## ⚠️ Critical Note

**This gate unlock filters Stage 6.** Every item in the Release Plan must come from this Roadmap.

**Revising this Roadmap after lock requires:** (1) documenting the revision in Revision History, (2) completing a Cascade Impact Assessment, (3) re-reviewing and re-locking every impacted Release Plan and Feature Document.

---

**Notes for PM:**  
This roadmap is your tool to communicate strategy and sequence to stakeholders and the delivery team. Update Implementation Status as initiatives move through delivery — this is a living record, not a one-time artifact.
