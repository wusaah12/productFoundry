# Decision Log

> Keep a record of major decisions made during the product discovery process.

---

## Decision Entry Template

Copy and fill this template for each major decision:

```
### [DATE] — [Decision Title]

**Stage:** [N/7]  
**Decision Maker:** [Who made this call]  
**Context:** [Why was this decision needed?]  

**Options Considered:**  
1. [Option A] — [Pros/cons]
2. [Option B] — [Pros/cons]
3. [Option C] — [Pros/cons]

**Decision:** [What we chose and why]  
**Impact:** [How this affects the roadmap / scope / timeline]  
**Reversible?** [Yes / No] — [If no, why?]  
**Approver:** [Who approved this decision]  

**Logged:** [ISO date] | **Gate Event?** [Yes/No] | **Artifact:** [name.md]
```

---

## Gate Pass Decisions

Every stage transition is a major decision. Log it here automatically when `/validate` returns PASS:

```
### [DATE] — Stage [N] Gate PASSED: [Artifact Name]

**Stage:** [N]/7  
**Decision Maker:** [User name or team]  
**Context:** Artifact completed, validation passed, ready to proceed to Stage [N+1]  

**Validation Results:**  
✓ [Criterion 1]  
✓ [Criterion 2]  
✓ [Criterion 3]  

**Decision:** Advance to Stage [N+1]  
**Impact:** [Artifact] is now LOCKED; downstream work can begin  
**Reversible?** No—Gate pass is final unless explicitly reopened  
**Approver:** [User]  

**Logged:** [ISO date] | **Gate Event?** Yes | **Artifact:** [name.md]
```

---

## Scope/Roadmap Revision Decisions

When an artifact in Stages 5–7 is reopened and revised:

```
### [DATE] — Revision: [Artifact Name]

**Stage:** [N]/7  
**Decision Maker:** [User name or team]  
**Context:** [Artifact] was LOCKED. Reopening because: [reason]  

**What's Changing:**  
- [Item 1]: [old] → [new]  
- [Item 2]: [old] → [new]  

**Impact Analysis:**  
- Downstream artifacts affected: [list]  
- Timeline impact: [shift of X weeks]  
- Budget impact: [if applicable]  

**Decision:** Proceed with revision; re-lock with cascade  
**Reversible?** Partially—Can restore previous version, but downstream re-validation required  
**Approver:** [Who signed off on the revision]  

**Logged:** [ISO date] | **Gate Event?** No (revision, not gate) | **Artifact:** [name.md]
```

---

## Go/No-Go Decisions

Stage 6 explicit go/no-go decision:

```
### [DATE] — Go/No-Go: Release [Name]

**Stage:** 6/7  
**Decision Maker:** [Business Owner or approval authority]  
**Context:** Release Plan completed. Ready to commit resources and timeline.  

**Go/No-Go Criteria:**  
- [ ] Features finalized (no more scope changes)  
- [ ] Success metrics defined  
- [ ] Resource allocation confirmed  
- [ ] Risk assessment complete  

**Decision:** [GO / HOLD / CANCEL]  
**Reason:** [If HOLD or CANCEL: what condition must be met to proceed?]  
**Impact:** [Timeline, team allocation, stakeholder communication]  
**Reversible?** Partially—Can change decision, but requires re-review  
**Approver:** [Authority name]  

**Logged:** [ISO date] | **Gate Event?** Yes (go/no-go) | **Artifact:** release-plan.md
```

---

## Vision Conflict Resolutions

When an artifact conflicts with the locked Vision:

```
### [DATE] — Vision Conflict Resolution

**Stage:** [N]/7  
**Decision Maker:** [PM or product team]  
**Context:** [Artifact item] conflicts with locked Vision because: [reason]  

**Conflict:**  
- Vision states: [vision element]  
- [Artifact] proposes: [conflicting element]  

**Options:**  
1. Revise artifact to align with Vision  
2. Revise Vision (requires re-lock)  
3. Move conflicting item to Non-goals  

**Decision:** [Option chosen and rationale]  
**Impact:** [How resolved]  
**Reversible?** Yes—Can revisit if new information surfaces  
**Approver:** [Who confirmed resolution]  

**Logged:** [ISO date] | **Gate Event?** No | **Artifact:** [name.md]
```

---

## Example Decisions

### 2025-03-15 — User Focus: Engineering Managers vs. ICs

**Stage:** 1/7  
**Decision Maker:** Product team  
**Context:** Initial idea assumed all engineers. Discovery showed pain is concentrated in EM role.  

**Options Considered:**  
1. Broad—All engineers. Pros: Larger TAM. Cons: Diffuse messaging, harder to build.
2. Narrow—EMs only. Pros: Clear pain, focused MVP. Cons: Smaller initial market.
3. Hybrid—EMs primary, ICs secondary. Pros: Flexibility. Cons: Scope creep risk.

**Decision:** Focus on Engineering Managers for MVP. Expand to ICs in Phase 2.  
**Impact:** Simplifies Idea Brief, focuses Discovery interviews on EM pain points.  
**Reversible?** Yes—Can expand user scope in Phase 2 roadmap.  
**Approver:** Product Lead  

**Logged:** 2025-03-15 | **Gate Event?** No | **Artifact:** idea-brief.md

---

### 2025-04-10 — Stage 1 Gate PASSED: Idea Brief

**Stage:** 1/7  
**Decision Maker:** User (Product Lead)  
**Context:** Idea Brief completed and validated. All exit criteria met.  

**Validation Results:**  
✓ Problem statement clear and specific  
✓ Target user (Engineering Managers) identified  
✓ Initial scope defined (5 key capabilities)  
✓ Success metric identified (adoption rate by Q3)  
✓ Artifact marked as REVIEW  

**Decision:** Advance to Stage 2 Discovery  
**Impact:** Idea Brief is now LOCKED; Discovery can begin  
**Reversible?** No—Gate pass is final  
**Approver:** User  

**Logged:** 2025-04-10 | **Gate Event?** Yes | **Artifact:** idea-brief.md

---

### 2025-05-22 — Revision: Product Roadmap

**Stage:** 5/7  
**Decision Maker:** PM + Eng Lead  
**Context:** Q2 feature dependencies revealed new technical constraint. Roadmap sequence needs adjustment.  

**What's Changing:**  
- Q2 Initiative 1 → Moved to Q3 (dependency issue)  
- Q3 Initiative 3 → Moved to Q2 (unblocks Initiative 1)  

**Impact Analysis:**  
- Downstream affected: Release Plan (features may shift quarters)  
- Timeline: No slip—rebalancing, not adding work  
- Budget: No impact  

**Decision:** Proceed with revision; re-lock roadmap and cascade to Release Plan  
**Reversible?** Yes—Can revert if Q3 work slips  
**Approver:** Business Owner  

**Logged:** 2025-05-22 | **Gate Event?** No (revision) | **Artifact:** product-roadmap.md

---

### 2025-06-15 — Go/No-Go: Q2 Release

**Stage:** 6/7  
**Decision Maker:** Business Owner  
**Context:** Release Plan complete. Committing to Q2 ship date.  

**Go/No-Go Criteria:**  
- ✓ Features finalized  
- ✓ Success metrics defined  
- ✓ Resource allocation confirmed  
- ✓ Risk assessment complete  

**Decision:** GO  
**Reason:** All criteria met. Sufficient runway to Q2 ship date.  
**Impact:** Team shifts to implementation; Feature Documents begin Week 1  
**Reversible?** Partially—Can delay, but requires stakeholder communication  
**Approver:** Business Owner + Executive Sponsor  

**Logged:** 2025-06-15 | **Gate Event?** Yes (go/no-go) | **Artifact:** release-plan.md

---

## Instructions for AI Assistants

When a major decision is made:

1. **Identify the decision category** (gate pass, revision, go/no-go, conflict resolution, other)
2. **Use the appropriate template** from this file
3. **Append to this log** (don't replace—this is append-only)
4. **Update session-state.md** "Latest Decision" section
5. **Create a git commit** with the decision logged (e.g., `git commit -m "Decision: Stage 2 Gate Pass — Discovery Complete"`)

**When to log:**
- Every stage gate pass (automatic)
- Every artifact revision (automatic)
- Every go/no-go decision (automatic)
- Every Vision conflict resolution (automatic)
- Major scope changes (automatic)
- Significant trade-off decisions (automatic)

**When NOT to log:**
- Routine clarifications or refinements within a stage
- Questions or explorations that don't change output
- Session notes that aren't decisions

**Format consistency:** Follow the template structure. Ensure every decision has Stage, Context, Options, Decision, and Impact. This log is your audit trail.

---

**Git history is your audit trail.** Use `git log --oneline -- DECISIONS.md` to review decision history over time.
