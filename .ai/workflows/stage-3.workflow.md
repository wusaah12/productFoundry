# Stage 3 Workflow: Hypothesis Validation

**Stage**: 3/7 - Hypothesis Validation
**Artifact**: stage-3-hypothesis.md
**Duration**: 1-2 weeks (validate falsifiability, define metrics)

---

## Agent Execution Flow

```
STEP 1: hypothesis-validator
  → Load Stage 2 discovery findings
  → Guide hypothesis formulation
  → Test for falsifiability
  → Define SMART success metrics

STEP 2: eng-lead
  → Assess technical risks in hypothesis
  → Identify riskiest technical assumptions
  → Suggest validation approach for tech risks

STEP 3: User completes hypothesis document

STEP 4: quality-gate
  → Check falsifiability (is it testable?)
  → Verify metrics are SMART
  → Confirm assumptions ranked by risk
  → Report: PASS or FAIL

STEP 5: If PASS:
  → quality-gate: Validate exit criteria
  → decision-logger: Log "Hypothesis Approved"
  → session-manager: Update to Stage 4
```

---

## Key Agents

| Agent | Role | Invocation |
|-------|------|--------|
| hypothesis-validator | Specialist | Primary guide, validates falsifiability |
| eng-lead | Role | Reviews technical risks |
| quality-gate | Orchestrator | /validate before gate |
| decision-logger | Utility | Auto after gate pass |

---

## Parallel Execution
**None** - Hypothesis validation is serial (discovery → hypothesis → validation)

But eng-lead can provide risk assessment in parallel while hypothesis-validator works on metrics.

---

## Exit Criteria (Gate to Stage 4)

☐ Hypothesis is falsifiable (testable with yes/no outcome)
☐ Success metrics are SMART
☐ Primary metric tied to core value prop
☐ Riskiest assumptions identified (top 3)
☐ Validation plan for each risk
☐ Hypothesis grounded in Stage 2 discoveries
☐ Competitive differentiation validated
☐ Artifact marked as REVIEW

---

## Typical Flow

```
1. User: "Here's my hypothesis: Users will X because Y"
   → hypothesis-validator: Test falsifiability
   → Suggest metric refinement if needed

2. User: "Here are my success metrics"
   → hypothesis-validator: Check SMART criteria
   → Ensure metrics prove hypothesis

3. User: "/validate"
   → quality-gate: Confirm format, completeness
   → Report: ✅ PASS or ⚠️ NEEDS

4. User: "/next-stage"
   → quality-gate: Validate exit criteria
   → Result: ✅ → Proceed to Stage 4 (Vision)
```

---

## Role Agents

- **Eng Lead**: Reviews technical feasibility of hypothesis, identifies integration risks
