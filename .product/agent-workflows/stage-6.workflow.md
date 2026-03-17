# Stage 6 Workflow: Release Plan

**Stage**: 6/7 - Release Plan (Go/No-Go Decision)
**Artifact**: stage-6-release-plan.md
**Duration**: 1-2 weeks (finalize features, get go/no-go decision)

---

## Agent Execution Flow

```
STEP 1: main-orchestrator
  → Load Stage 5 roadmap (V1.0 features)
  → Prepare release planning artifacts

STEP 2: User defines release plan:
  → Feature list (from roadmap)
  → Go/no-go criteria
  → Success metrics per feature
  → Out-of-scope items
  → Launch timeline and milestones

STEP 3: business-owner
  → Present release plan to business stakeholder
  → Review go/no-go criteria
  → Make final GO / HOLD / CANCEL decision
  → Document decision and constraints

STEP 4: quality-gate
  → Verify feature list finalized
  → Confirm success metrics defined
  → Verify go/no-go decision documented
  → Report: PASS or BLOCKED

STEP 5: If PASS (with GO decision):
  → quality-gate: Validate exit
  → decision-logger: Log "Release Approved - GO"
  → session-manager: Update to Stage 7
  
If HOLD or CANCEL:
  → quality-gate: BLOCK progression
  → Explain hold reason, next steps
```

---

## Key Agents

| Agent | Role | Invocation |
|-------|------|--------|
| business-owner | Role | **GO/NO-GO DECISION (CRITICAL)** |
| quality-gate | Orchestrator | /validate before gate |
| decision-logger | Utility | Log business owner go/no-go decision |

---

## Critical Gate: Go/No-Go Decision

**Only if Business Owner says "GO" can progression unlock.**
- Use `/business-owner: release approval` or `/business-owner: go-no-go`
- Business owner makes final decision: GO / HOLD / CANCEL
- If HOLD: Address blockers, re-present for approval
- If CANCEL: Document rationale, close product
- If GO: Proceed to Stage 7 Feature Document

---

## Parallel Execution
**None** - Release plan is serial

---

## Exit Criteria (Gate to Stage 7)

☐ Feature list finalized (no more scope changes)
☐ Go/no-go criteria defined (explicit conditions)
☐ Success metrics defined per feature
☐ Out-of-scope items listed
☐ Launch timeline defined (dates, milestones)
☐ Go-to-market plan outlined
☐ **Business Owner GO decision obtained** ← CRITICAL
☐ Artifact marked as REVIEW

---

## Typical Flow

```
Week 1:
1. User: "Let's finalize the release plan"
   → main-orchestrator: Guide release planning
   → User: Define go/no-go criteria
   → User: Define success metrics

2. User: "Here's my release plan"
   → Feature list (12 features from Stage 5)
   → Success metrics (70% WAU, < 2sec load time, etc.)
   → Go/no-go criteria (all features complete, all tests passing)

Week 2:
3. User: "/business-owner: release approval"
   → business-owner: Present release plan
   → Review go/no-go decision (GO / HOLD / CANCEL)
   → Business owner: ✅ "GO - Proceed to launch"

4. User: "/validate"
   → quality-gate: Confirm GO decision documented
   → Report: ✅ PASS

5. User: "/next-stage"
   → quality-gate: Validate exit (GO decision present?)
   → Result: ✅ → Proceed to Stage 7 (Feature Document)
```

---

## Role Agents

- **Business Owner**: Makes final GO/HOLD/CANCEL decision
  This is the ultimate gating decision before committing to Stage 7.
