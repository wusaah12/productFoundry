# Stage 6: Release Plan Template

> Feature list with go/no-go criteria. Must be locked before creating Feature Documents. Can be revised post-lock when the Roadmap changes or scope needs adjustment — revisions trigger a cascade review of any affected Feature Documents.

---

## Release Plan

**Status:** DRAFT  

> Status values: `DRAFT` → `REVIEW` → `LOCKED` → `REVISED` (when re-opened post-lock)

**Created:** [DATE]  
**Last updated:** [DATE]  
**Owner:** [Your name]

> **Revision trigger:** [If revised post-lock, note which Roadmap change caused this revision]

---

### Release Info

**Release name/version:** [e.g., v1.0, "MVP Alpha"]  
**Target ship date:** [Q or specific date]  
**Roadmap item this delivers:** [Which initiative from Stage 5]  
**Success criteria:** [Tied to Hypothesis metrics from Stage 3]

---

### Features in This Release

[Each feature will get its own Feature Document]

| # | Feature | Owner | Effort | Delivery Status | Doc |
|---|---------|-------|--------|-----------------|-----|
| 1 | [Feature 1: Brief name] | [Owner] | [2w / 4w / 8w] | Not Started | [ ] |
| 2 | [Feature 2: Brief name] | [Owner] | [2w / 4w / 8w] | Not Started | [ ] |
| 3 | [Feature 3: Brief name] | [Owner] | [2w / 4w / 8w] | Not Started | [ ] |

> **Delivery Status values:**
> - **Not Started** — Feature Document locked, delivery not yet begun
> - **In Progress** — delivery underway
> - **Implemented** — delivered, awaiting user validation
> - **Validated** — user confirmed the feature meets acceptance criteria

---

### Release Success Criteria

[Tied to Hypothesis metrics. How will we know this release shipped successfully?]

| Criterion | Target | Measurement |
|-----------|--------|---|
| [Criterion 1] | [Goal] | [How we measure] |
| [Criterion 2] | [Goal] | [How we measure] |

---

### Go/No-Go Criteria

[What would cause us to delay or descope this release?]

| Scenario | Decision | Next step |
|----------|----------|---|
| [Feature 1 slips 2+ weeks] | Go/No-go threshold | [Do we rescope?] |
| [Eng Lead flags risk X] | Go/No-go threshold | [Do we add spike?] |
| [User research shows need for feature Y] | Go/No-go threshold | [Do we add to release?] |

---

### Out of Scope for This Release

[Deferred items with reason]

| Item | Why deferred | When: next opportunity |
|------|---|---|
| [Feature/capability] | [Reason] | [Q2? Phase 2?] |

---

### Rollout & Communication Plan

**Internal:**  
[Which teams need to know? When?]

**External:**  
[Customer communication. Support readiness. Beta program?]

---

### Release Plan Revision History

> Record every revision made after this Release Plan was first LOCKED. Each entry must document what changed, why, and which Feature Documents were impacted and re-locked.

| Version | Date | Changed by | What changed | Revision trigger | Cascade impact | Re-locked date |
|---------|------|------------|--------------|------------------|----------------|----------------|
| v1.0 | [DATE] | [Name] | Initial lock | — | — | [DATE] |
| v1.1 | [DATE] | [Name] | [e.g., Feature 2 descoped] | [Roadmap revision v1.1] | [Feature Doc 2 re-locked] | [DATE] |

---

### Cascade Impact Assessment

> Complete this section whenever the Release Plan is revised post-lock. Identifies every Feature Document that may be affected.

**Revision reason:** [Why is this release plan changing?]

| Feature Document | Impacted? | Action required | Status |
|------------------|-----------|-----------------|--------|
| Feature Doc — [feature name] | Yes / No | Re-review and re-lock if changed | [ ] |
| Feature Doc — [feature name] | Yes / No | Re-review and re-lock if changed | [ ] |

---

## Gate Validation Checklist

Before moving to Stage 7 (initial lock), confirm:

- ☐ Feature list is complete (each item gets a Feature Doc)
- ☐ Go/no-go criteria are explicit and measurable
- ☐ Success criteria tie back to Hypothesis metrics
- ☐ All roles (PM, Eng Lead, Designer, Business Owner) have reviewed
- ☐ Out-of-scope items are documented
- ☐ All features have Delivery Status set to "Not Started"
- ☐ User confirms: "This is what ships? This is when?"

**For re-lock after revision**, also confirm:

- ☐ Revision reason is documented in Revision History
- ☐ Revision trigger (Roadmap change or scope change) is recorded
- ☐ Cascade Impact Assessment is complete
- ☐ All impacted Feature Documents have been identified
- ☐ All roles have re-reviewed the changed scope
- ☐ User explicitly confirms: "I approve this revision and accept the cascade impact"

**Status:** Gate is [LOCKED / OPEN / REVISED]

---

## ⚠️ Critical Note

**This gate unlock filters Stage 7.** One Feature Document required per feature listed here. No additional features.

**Revising this Release Plan after lock requires:** (1) documenting the revision in Revision History, (2) recording the trigger (Roadmap revision or scope change), (3) completing a Cascade Impact Assessment, (4) re-reviewing and re-locking every impacted Feature Document.

**Notes for PM:**  
Hand this to engineering when you move to Stage 7. Each feature becomes a detailed spec.
