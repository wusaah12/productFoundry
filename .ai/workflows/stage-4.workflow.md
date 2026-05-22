# Stage 4 Workflow: Vision & Mission

**Stage**: 4/7 - Vision & Mission
**Artifact**: stage-4-vision-mission.md
**Duration**: 1-2 weeks (craft vision, get exec sign-off)

---

## Agent Execution Flow

```
STEP 1: vision-alignment
  → Load hypothesis from Stage 3
  → Guide vision crafting workshop
  → Define mission statement (one sentence)
  → Define strategic filters (1 primary, 4+ secondary)

STEP 2: User (Product Manager) completes vision draft

STEP 3: vision-alignment
  → Refine vision clarity and inspiration
  → Validate strategic filters guide decisions

STEP 4: business-owner
  → Present vision to business stakeholder
  → Discuss strategic alignment
  → Capture business owner sign-off and constraints
  → Document approval in decisions/DECISIONS.md

STEP 5: quality-gate
  → Check vision completeness
  → Verify business owner sign-off present
  → Verify strategic filters documented
  → Report: PASS or BLOCKED

STEP 6: If PASS:
  → quality-gate: Validate exit
  → decision-logger: Log "Vision Approved by Business Owner"
  → session-manager: Update to Stage 5
```

---

## Key Agents

| Agent | Role | Invocation |
|-------|------|--------|
| vision-alignment | Specialist | Vision crafting, filter definition |
| business-owner | Role | Business owner sign-off (REQUIRED) |
| quality-gate | Orchestrator | /validate before gate |
| decision-logger | Utility | Log business owner approval |

---

## Critical Gate

**Business Owner Sign-Off is REQUIRED** to progress.
- Use `/business-owner: vision approval` to present to stakeholder
- Business owner agent will document approval in decisions/DECISIONS.md
- If business owner blocks: explain constraints, adjust vision, re-present

---

## Parallel Execution
**None** - Vision is serial (craft → review → exec approval → gate)

---

## Exit Criteria (Gate to Stage 5)

☐ Vision statement is compelling
☐ Vision grounded in hypothesis and market opportunity
☐ Mission statement is exactly one sentence
☐ Mission is specific and motivating
☐ Strategic filters defined (1 primary, 4+ secondary)
☐ Filters guide roadmap decisions consistently
☐ **Business owner sign-off obtained (explicit approval)** ← CRITICAL
☐ Business owner constraints documented
☐ Artifact marked as REVIEW

---

## Typical Flow

```
Week 1:
1. User: "What should our vision be?"
   → vision-alignment: Guide workshop
   → User: Define 3-5 year vision

2. User: "Let me refine the mission"
   → vision-alignment: Guide mission to one sentence
   → User: Craft mission statement

3. User: "What strategic filters should we use?"
   → vision-alignment: Guide filter definition
   → User: Define primary + secondary filters

Week 1-2:
4. User: "/business-owner: vision approval"
   → business-owner: Present vision to business stakeholder
   → Business owner reviews strategic alignment
   → Business owner approves with constraints (if any)

5. User: "/validate"
   → quality-gate: Confirm business owner sign-off present
   → Report: ✅ PASS

6. User: "/next-stage"
   → quality-gate: Validate exit
   → Confirm business owner sign-off obtained
   → Result: ✅ → Proceed to Stage 5 (Roadmap)
```

---

## Role Agents

- **Business Owner**: Approves vision, provides strategic constraints, signs off on market timing
  All decisions about vision progression gate on business owner approval.
