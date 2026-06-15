# Revise Skill

**Role:** Artifact revision governance and cascade impact management

**Expertise:** Artifact reopening, vision alignment enforcement, revision tracking, downstream impact assessment, re-validation workflows

---

## Core Responsibilities

### 1. Enable Controlled Artifact Revision

Locked artifacts (LOCKED status) in Stages 5–7 can be reopened for revision when:
- New information emerges during implementation
- Market conditions change
- Technical constraints discovered post-lock
- User feedback or validation data conflicts with locked content
- Strategic priorities shift

**Critical constraint**: Artifacts in Stages 1–4 can be revised, but Stages 5–7 revisions trigger **cascade impact assessment** and **re-validation of all downstream artifacts**.

### 2. Enforce Vision Alignment Checks

Every revision must pass vision alignment validation:
- **Vision filter test**: Does the revised content still align with locked Vision & Mission?
- **Conflict detection**: Are there any conflicts between the revision and strategic filters?
- **Resolution enforcement**: If conflicts exist, user must choose:
  1. Revise the artifact to align with Vision
  2. Revise the Vision itself (rare; requires re-lock of Vision & all downstream)
  3. Move conflicting item to Non-goals (document reason)

**Principle**: Vision is the highest filter. Once locked, no artifact contradicts it silently.

### 3. Track Revision History

All revisions are tracked with:
- **Revision number** (v1, v2, etc.)
- **Revision date and timestamp**
- **What changed** (list of modified sections)
- **Why it changed** (trigger: implementation discovery, market change, feedback, etc.)
- **Approver** (who signed off on the revision)
- **Re-validation status** (pending/passed)

### 4. Assess Cascade Impact

When a Stage 5+ artifact is revised, identify all downstream artifacts affected:
- **Stage 5 revision** (Roadmap) → Assess impact on Stage 6 (Release Plan) and Stage 7 (Feature Docs)
- **Stage 6 revision** (Release Plan) → Assess impact on Stage 7 (Feature Docs)
- **Stage 7 revision** (Feature Docs) → No cascade; re-validate only that feature

**Example**: If Stage 5 Roadmap removes a Q2 initiative, Stage 6 Release Plan must be re-reviewed (does it reference Q2 features?), and Stage 7 Feature Docs impacted by removed features must be re-evaluated.

### 5. Manage Re-Validation Workflow

Revisions don't bypass gates. They must be re-validated:
- **Artifact reopened** → Status changes from LOCKED to REVISED
- **Revisions made** → Artifact updated with tracked changes
- **Vision check run** → Alignment validated
- **Downstream cascade identified** → All impacted artifacts listed
- **Re-validation requested** → Each impacted artifact re-reviewed by original role(s)
- **Re-lock sequence** → Artifacts re-locked in order (parent before dependent)

**Rule**: A downstream artifact cannot be re-locked before the artifact it depends on is re-locked.

### 6. Prevent Scope Creep

Revision skill only allows:
- ✅ Modifying existing items (scope, timeline, priority)
- ✅ Moving items to Non-goals (document reason)
- ✅ Removing items (document reason)
- ❌ Adding new items outside locked scope
- ❌ Creating new Stage 7 features beyond Stage 6 Release Plan

If new scope is needed, it goes to:
- **Stage 5**: Add to future phases (Q3, Q4)
- **Stage 6**: Add to Phase 2 or defer
- **Stage 7**: Create a new Feature Doc, but it must be in Stage 6 Release Plan first

---

## When Revisions Are Needed

### Trigger: Implementation Discovery

**Scenario**: Team starts building Feature A (Stage 7 locked), discovers it requires infrastructure work not estimated in Stage 5 Roadmap.

**Action**:
```
Team: "Stage 5 roadmap estimated 2 weeks for infrastructure. We actually need 4 weeks."
→ Run /revise stage-5 roadmap
→ Update Q1 initiative: infrastructure work 2w → 4w
→ Impact cascade: Does this slip Q1 deliverables? → Check Stage 6 Release Plan
→ Re-validate Release Plan with new timeline
→ Re-lock both Roadmap and Release Plan
```

### Trigger: Market Validation Feedback

**Scenario**: Release Plan locked, MVP launched, user feedback shows Feature B is less important than Feature C (opposite priority in Release Plan).

**Action**:
```
Product: "User feedback shows Feature C is 3x more critical than Feature B."
→ Run /revise stage-6 release-plan
→ Reprioritize: Feature B → Phase 2, Feature C → Phase 1
→ Vision check: Does priority change align with vision?
→ Re-validate Feature Docs: Which ones move to Phase 2? Which stay Phase 1?
→ Re-lock Release Plan and affected Feature Docs
→ Update implementation schedule
```

### Trigger: Technical Feasibility Risk

**Scenario**: Feature Doc (Stage 7) locked with BDD scenario for "Real-time sync across 10,000 users." During implementation, discovers latency issues make real-time infeasible.

**Action**:
```
Eng: "Real-time sync isn't achievable. We can do 5-second delayed sync instead."
→ Run /revise stage-7 feature-sync
→ Update BDD scenario: Given/When/Then reflect 5-second delay
→ Vision check: Does delayed sync still align with vision? (if vision is "real-time," need to revise vision or move feature to non-goals)
→ Re-validate BDD accuracy
→ Re-lock Feature Doc
```

### Trigger: Strategic Pivot

**Scenario**: Mid-implementation, business priorities shift. New market opportunity discovered that changes roadmap sequencing.

**Action**:
```
Exec: "We should prioritize Feature X (currently Q3) over Feature Y (currently Q1) due to market opportunity."
→ Run /revise stage-5 roadmap
→ Resequence: Feature X → Q1, Feature Y → Q3
→ Check technical dependencies: Does X depend on Y?
→ Impact cascade: Release Plan and Feature Docs affected
→ Re-validate all downstream artifacts
→ Re-lock in order
```

---

## Revision Workflow

### Step 1: Initiate Revision

**User command:**
```
/revise [stage-number] [artifact-name]

Examples:
/revise stage-5 product-roadmap
/revise stage-6 release-plan
/revise stage-7 feature-checkout
```

**System action:**
- Load `session-state.md` (workspace root) to identify current stage
- Load artifact from workspace
- Verify artifact is LOCKED (cannot revise DRAFT or REVIEW)
- Display artifact status and revision history

**System prompt:**
```
Ready to revise [artifact-name]. This is currently LOCKED.

Current status: LOCKED (locked on [date] by [user])
Revision history:
  - v1 (original lock)
  - v2 (revision on [date], reason: [reason])

What would you like to change? Be specific about:
1. Which section(s) are changing
2. What the change is (old → new)
3. Why the change is necessary

After you describe the revision, I'll:
  1. Update the artifact with your changes
  2. Run Vision alignment check
  3. Identify cascade impact (if Stage 5+)
  4. Request re-validation from relevant roles
```

### Step 2: Describe Revision

**User provides:**
- What's changing (specific sections/items)
- Old value → New value
- Reason for change (implementation discovery, feedback, market change, etc.)

**Example input:**
```
Section: Q1 Initiatives
Change: Infrastructure work: 2 weeks → 4 weeks
Reason: Implementation discovery — real infrastructure needs are more complex than estimated in Stage 5
```

### Step 3: Apply Changes & Track

**System action:**
1. Update artifact with revision
2. Add Revision History entry:
   ```
   ### Revision v3 (Date, Time UTC)
   - Changed: Q1 Infrastructure initiative from 2w to 4w
   - Reason: Implementation discovery during build phase
   - Impact: Q1 timeline slips by 2 weeks
   - Approver: [TBD - pending re-validation]
   - Re-validation: Pending
   ```
3. Mark artifact status as **REVISED** (not LOCKED, not DRAFT)
4. Display changes clearly with old/new comparison

**Example:**
```
✏️ Artifact Revised: stage-5-product-roadmap.md

Changes:
  Q1 Initiatives:
    - Infrastructure work: 2w → 4w
    - Browser compatibility: No change
    - Payment integration: No change

Revision tracked as v3
Status: REVISED (pending re-validation)
```

### Step 4: Run Vision Alignment Check

**System automatically checks:**
1. **Vision filter test**: Does each revised item still align with locked Vision & Mission?
2. **Strategic filter test**: Do revisions respect strategic filters from Stage 4?
3. **Conflict detection**: Any contradictions?

**Possible outcomes:**

**✅ No conflicts:**
```
Vision Alignment Check: ✅ PASS
All revised items align with Vision & Mission.
- Infrastructure work (2w → 4w): ✅ Supports vision of "robust platform"
- Q1 timeline slip: ✅ Acceptable per strategic filter "quality over speed"

Proceeding to cascade impact assessment...
```

**⚠️ Conflict detected:**
```
Vision Alignment Check: ⚠️ CONFLICT

Item "Infrastructure work: 4w" conflicts with Vision because:
  Vision states: "Launch MVP within 6 months"
  Strategic filter: "Speed of market entry is critical"
  Conflict: 4w infrastructure work + other Q1 work exceeds 6-month window

Options to resolve:
1. Revise the artifact: Compress infrastructure to 2w (restore original estimate)
2. Revise the Vision: Extend timeline to 7 months (rare; requires re-lock of Vision + all downstream)
3. Move to Non-goals: Defer infrastructure work to Phase 2 (document reason)

Which option do you choose?
```

**User must resolve conflicts.** No revision proceeds with unresolved Vision conflicts.

### Step 5: Assess Cascade Impact (Stage 5+)

**If Stage 5+ revision**, identify downstream artifacts:

**Stage 5 (Roadmap) revision example:**
```
Cascade Impact Assessment:
  
  Artifact Revised: stage-5-product-roadmap.md
    ↓ Affects:
    - stage-6-release-plan.md (Release Plan references Q1 features)
    - feature-infrastructure.md (Feature Doc for infrastructure work)
    - feature-payment.md (Feature Doc for payment — timeline may shift)

Each impacted artifact must be re-reviewed and re-locked.
```

**Stage 6 (Release Plan) revision example:**
```
Cascade Impact Assessment:
  
  Artifact Revised: stage-6-release-plan.md
    ↓ Affects:
    - feature-checkout.md (moved to Phase 2)
    - feature-admin-panel.md (timing unchanged)
    
Re-validation required for impacted Feature Docs.
```

**Stage 7 (Feature Doc) revision example:**
```
Cascade Impact Assessment:
  
  Artifact Revised: feature-checkout.md
    ↓ No downstream cascade (Feature Docs don't gate other artifacts)
    ↓ Local re-validation only
```

### Step 6: Request Re-Validation

**System identifies original reviewers and sends re-validation request:**

**For Stage 5 (Roadmap):**
```
Re-validation Required:

To re-lock this revision, the following roles must re-review:
  ☐ Eng Lead: Validate technical feasibility of 4w infrastructure work
  ☐ Business Owner: Confirm revised timeline acceptable
  
Original roles (from revision history):
  - Eng Lead (original lock reviewer)
  - Business Owner (original lock approver)

Re-validation by: [Roles] via /[role] -- "Please re-validate revised roadmap"
```

**For Stage 6 (Release Plan):**
```
Re-validation Required:

To re-lock this revision, the following roles must re-review:
  ☐ Designer: Confirm moved features don't affect experience
  ☐ Eng Lead: Confirm feasibility with reprioritized scope
  ☐ Business Owner: Confirm reprioritization acceptable
  
Impacted Feature Docs must also be re-validated:
  ☐ feature-checkout.md (moved to Phase 2)
```

**For Stage 7 (Feature Doc):**
```
Re-validation Required:

To re-lock this revision, the following roles must re-review:
  ☐ Eng Lead: Confirm revised BDD scenarios are technically feasible
  ☐ Designer: Confirm UX implications of changes
  ☐ Business Analyst: Confirm scenarios are still testable
```

### Step 7: Re-Validate & Re-Lock

**Users invoke role agents for re-validation:**

```
/eng-lead -- "Please re-validate the revised infrastructure work estimates in roadmap"
/business-owner -- "Please approve the revised timeline"
```

**Each role provides:**
- ✅ Approved / ⚠️ Changes needed
- Feedback or sign-off

**Once all roles approve:**

```
Re-validation Complete: ✅ ALL ROLES APPROVED

Artifact Status: REVISED → LOCKED
Revision Number: v3
Original Lock: [date] by [user]
Revision Lock: [date] by [user] (re-validation by [roles])

Revision History Updated:
  - Approver: [Roles]
  - Re-validation: Complete ✅
```

**Downstream cascade re-lock (if Stage 5+):**
```
Cascade Re-lock Sequence:

1. ✅ stage-5-product-roadmap.md — RE-LOCKED
   ↓ Gates:
2. ⏳ stage-6-release-plan.md — Ready for re-lock
   (Parent artifact re-locked; dependent can now be re-locked)
   ↓ Re-validate Release Plan with updated roadmap
   ↓ Once approved:
3. ⏳ feature-checkout.md — Ready for re-lock (if affected)
   (Parent Release Plan re-locked; dependent Feature Doc can now be re-lock)

Rules:
- A dependent artifact CANNOT be re-locked before its parent is re-locked
- Re-lock happens in order: parent → dependent
- Each re-lock requires sign-off from relevant roles
```

---

## Revision History Tracking

Each artifact maintains a Revision History table:

```markdown
## Revision History

| Version | Date | Changed By | What Changed | Why | Approver | Status |
|---------|------|-----------|--------------|-----|----------|--------|
| v1 | 2026-03-20 | You (PM) | Original lock | Stage 5 gate pass | Eng Lead, Business Owner | LOCKED |
| v2 | 2026-04-10 | Eng Lead | Q1 infrastructure: 2w → 4w | Implementation discovery — infrastructure more complex | Eng Lead, Business Owner | LOCKED |
| v3 | 2026-04-15 | You (PM) | Feature order: A→B, B→A | User feedback shows B more critical | Eng Lead, Designer, Business Owner | LOCKED |
```

---

## Cascade Impact Assessment Template

When a Stage 5+ artifact is revised, document impact:

```markdown
## Cascade Impact Assessment

**Artifact Revised:** [Name]  
**Revision Date:** [Date]  
**Revision Reason:** [Why]  

### Downstream Artifacts Affected

#### Directly Affected (MUST re-validate)
- [ ] [Artifact 1] — [Why affected]
- [ ] [Artifact 2] — [Why affected]

#### Indirectly Affected (CHECK for impact)
- [ ] [Artifact 3] — [Check if affected by Artifact 1 changes]

### Impact Summary

| Artifact | Impact | Re-validation Needed | Status |
|----------|--------|----------------------|--------|
| [Art 1] | [Description] | Yes | ⏳ Pending |
| [Art 2] | [Description] | Yes | ⏳ Pending |

### Re-lock Sequence

1. Re-lock parent artifact first: [Name] ✓
2. Then re-lock dependent: [Name] ⏳
3. Then re-lock dependent: [Name] ⏳

**Rule**: Cannot re-lock child before parent.
```

---

## Common Revision Scenarios

### Scenario 1: Timeline Slip (Stage 5)

```
Situation: Infrastructure work discovered to be 2x longer than estimated

/revise stage-5 product-roadmap
  Change: Q1 infrastructure 2w → 4w
  Reason: Implementation discovery

Vision Check: Does extended timeline conflict with "Launch MVP within 6 months"?
  → If yes: Compress other Q1 work, or revise vision, or move to Phase 2
  → If no: Proceed

Cascade: Does Release Plan reference Q1 infrastructure timeline?
  → Yes: Release Plan must be re-reviewed (does it still make sense?)
  
Re-validation:
  /eng-lead -- "Can we compress infrastructure to 3w with extra resources?"
  /business-owner -- "Is 7-month timeline acceptable?"
  
Result: Either compress estimate, adjust timeline, or revise vision
```

### Scenario 2: Feature Reprioritization (Stage 6)

```
Situation: User feedback shows Feature B (Phase 2) more important than Feature A (Phase 1)

/revise stage-6 release-plan
  Change: 
    - Feature A: Phase 1 → Phase 2
    - Feature B: Phase 2 → Phase 1
  Reason: User feedback from pilot shows B more critical

Vision Check: Does reprioritization align with vision of "speed of adoption"?
  → Yes: Focusing on B first accelerates adoption
  
Cascade: Which Feature Docs are affected?
  - feature-a.md: Move to Phase 2 (no BDD changes needed)
  - feature-b.md: Move to Phase 1 (timeline changes, but BDD same)
  
Re-validation:
  /designer -- "Are workflows for A and B compatible with phase change?"
  /eng-lead -- "Does moving A to Phase 2 create technical dependencies?"
  /business-owner -- "Approve new phase prioritization?"
  
Result: Release Plan re-locked with new feature order, Feature Docs re-locked with updated timelines
```

### Scenario 3: BDD Scenario Update (Stage 7)

```
Situation: Feature Doc (Stage 7) locked with "real-time sync" BDD scenario. During build, discovers real-time isn't feasible.

/revise stage-7 feature-sync
  Change:
    Scenario: "Real-time sync across 10,000 users"
    → "5-second delayed sync across 10,000 users"
  Reason: Technical feasibility — real-time sync creates unacceptable latency

Vision Check: Does delayed sync conflict with vision of "real-time user experience"?
  → If vision explicitly requires real-time: CONFLICT
     → Option 1: Revise scenario back to "real-time" (find technical solution)
     → Option 2: Revise vision to allow "near-real-time" (rare)
     → Option 3: Move feature to non-goals (not viable)
  → If vision allows flexibility: PASS

Re-validation:
  /business-analyst -- "Are updated BDD scenarios still testable?"
  /eng-lead -- "Confirmed 5-second sync is achievable?"
  /designer -- "Does 5-second delay affect UX acceptably?"
  
Result: Feature Doc re-locked with updated scenarios and Vision check documented
```

### Scenario 4: Vision Conflict Resolution

```
Situation: Stage 5 roadmap revision creates conflict with Stage 4 vision

/revise stage-5 product-roadmap
  Change: Defer mobile support to Phase 2
  Reason: Resources constrained in Q1

Vision Check: CONFLICT DETECTED
  Vision: "Mobile-first platform"
  Strategic Filter: "Mobile experience is core differentiator"
  Conflict: Deferring mobile work contradicts vision

Options to resolve:
  1. Revise artifact: Prioritize mobile work, defer other features
  2. Revise vision: Update to "Web-first MVP, mobile Phase 2"
  3. Move to non-goals: Mobile support out of scope (not viable for mobile-first product)

User chooses: "Revise artifact — we'll prioritize mobile in Q1, defer analytics to Phase 2"

Result: Roadmap revised to respect vision, re-validated, re-locked
```

---

## Error Handling

| Error | Cause | Resolution |
|-------|-------|-----------|
| "Artifact not LOCKED" | Cannot revise DRAFT or REVIEW | Lock artifact first via `/validate` |
| "Artifact not found" | Path or name invalid | Verify artifact path in workspace |
| "Vision conflict detected" | Revision contradicts vision | Resolve via option 1, 2, or 3 |
| "Cascade impact too large" | Revision affects many downstream artifacts | Consider smaller revision or re-validate more broadly |
| "Dependent artifact not yet re-locked" | Trying to re-lock child before parent | Wait for parent to re-lock first |
| "Unauthorized revision" | User not approved to revise (optional governance) | Request approval from decision authority |

---

## Re-Validation Checklist

Before an artifact can be re-locked after revision, verify:

**All Revisions:**
- [ ] All changes documented in Revision History
- [ ] Why changed clearly stated (implementation discovery, feedback, market change, etc.)
- [ ] Vision alignment check run (no unresolved conflicts)
- [ ] Artifact status is REVISED (not DRAFT or LOCKED)

**Stage 5+ Revisions:**
- [ ] Cascade impact assessment complete (all affected artifacts identified)
- [ ] All affected downstream artifacts have been re-reviewed
- [ ] Re-lock sequence followed (parent before dependent)
- [ ] Each impacted artifact re-locked in proper order

**All Re-locks:**
- [ ] Relevant roles have provided sign-off (Eng Lead, Designer, Business Owner, Business Analyst as applicable)
- [ ] No new scope added (only modifications to locked scope allowed)
- [ ] Decision logged to `DECISIONS.md` (workspace root) with revision rationale
- [ ] Session state updated with revised artifact status

---

## Integration Points

- **Called by**: Orchestrator, Business Owner, Eng Lead, or user via `/revise` command
- **Calls**: Quality Gate (for re-validation), Log Decision (to record revision), Manage Session (to update state)
- **Reads**: Artifact file, `session-state.md` (workspace root), Vision & Mission artifact
- **Writes**: Artifact file (with Revision History), `session-state.md` (artifact status), `DECISIONS.md` (revision logged)
- **Coordinates with**: All role agents for re-validation (Eng Lead, Designer, Business Owner, Business Analyst)

---

## Invocation Methods

### User Command

```
/revise [stage-number] [artifact-name]

Examples:
/revise stage-5 product-roadmap
/revise stage-6 release-plan
/revise stage-7 feature-checkout
```

### Role Agent Invocation

```
/business-owner -- "We need to revise the roadmap based on new market data"
→ Business Owner initiates revision workflow
```

### Automatic (if needed)

```
Orchestrator detects: User attempting scope change to locked artifact
→ Suggest: "This requires a formal revision. Run /revise to open artifact."
```

---

## Best Practices

1. **Document the reason** — Always state why revision is needed (implementation discovery, feedback, market change, etc.)
2. **Check vision first** — Ask: "Does this revision align with locked vision?" before making changes
3. **Assess cascade early** — For Stage 5+, identify all affected downstream artifacts before making final decision
4. **Get re-validation** — Don't skip role review; re-validation is part of governance
5. **Keep revision history** — Track all changes; history is audit trail of evolution
6. **Log decisions** — Every significant revision is logged to `DECISIONS.md` (workspace root)
7. **Communicate change** — Notify all stakeholders when revision is locked (especially Stage 5+ cascade impacts)
8. **Consider alternatives** — Before revising locked artifact, ask: "Can we achieve this goal without revision?" (adding new features, creating new phase, etc.)

---

## When NOT to Revise

- ❌ **Adding new scope to locked artifact** — Create new Feature Doc instead (Stage 7)
- ❌ **Minor clarifications** — Edit DRAFT/REVIEW artifacts before lock; don't revise after lock
- ❌ **Changing mind on locked decision** — If decision was made and locked, revision requires strong evidence (implementation data, market feedback, etc.)
- ❌ **Bypassing re-validation** — All revisions must be re-validated; no shortcuts

Instead:
- Create new Feature Document (Stage 7)
- Add to future roadmap phase (Stage 5)
- Create new Release Plan phase (Stage 6)

---

## Related Commands

| Command | Use Case |
|---------|----------|
| `/revise [stage] [artifact]` | Open locked artifact for revision |
| `/validate` | Re-validate artifact after revision |
| `/log-decision` | Log revision reason to audit trail |
| `/status` | Show revision status |
| `/[role]` | Invoke role for re-validation |

---

## For More Information

- **Artifact Lifecycle**: See `.ai/system-prompt.md` (DRAFT → REVIEW → LOCKED → REVISED → LOCKED)
- **Vision Alignment**: See `.ai/personas/specialist.vision-alignment.md` (Vision filter rules)
- **Gate Enforcement**: See `.ai/skills/validate.md` (re-validation criteria)
- **Cascade Management**: See ARCHITECTURE.md (Stage workflow dependencies)
- **Decision Logging**: See `.ai/skills/log-decision.md` (audit trail)

---

**Ready to revise?** Type `/revise [stage] [artifact]` to open a locked artifact for controlled revision! 📝
