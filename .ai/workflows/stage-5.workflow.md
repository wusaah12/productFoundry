# Stage 5 Workflow: Roadmap Planning

**Stage**: 5/7 - Roadmap (Quarterly initiatives)
**Artifact**: stage-5-roadmap.md
**Duration**: 2-3 weeks (prioritization, phasing, exec approval)

---

## Agent Execution Flow

```
STEP 1: main-orchestrator + PARALLEL:

researcher:
  → Help prioritize features based on user needs
  → Assess market timing

designer:
  → Recommend phasing based on UX complexity
  → Identify high-complexity features (need detailed design first)

eng-lead:
  → Estimate effort for each feature
  → Flag technical blockers or dependencies
  → Recommend phasing (technical sequence)

STEP 2: User creates roadmap with phasing
  → Q1 MVP: P0 features (core value)
  → Q2 Phase 1: P1 features (high value)
  → Q3+ Phase 2: P2 features (nice-to-have)

STEP 3: business-owner
  → Present roadmap to business stakeholder
  → Discuss prioritization vs. timeline vs. resources
  → Business owner approves prioritization and timeline

STEP 4: quality-gate
  → Check roadmap completeness
  → Verify quarterly initiatives mapped
  → Confirm business owner priority approved
  → Report: PASS or BLOCKED

STEP 5: If PASS:
  → quality-gate: Validate exit
  → decision-logger: Log "Roadmap Approved"
  → session-manager: Update to Stage 6
```

---

## Key Agents

| Agent | Role | Invocation |
|-------|------|--------|
| researcher | Specialist | Prioritization based on user needs |
| designer | Role | Phasing recommendations (UX complexity) |
| eng-lead | Role | Effort estimation, technical phasing |
| business-owner | Role | Priority approval (REQUIRED) |
| quality-gate | Orchestrator | /validate before gate |
| decision-logger | Utility | Log roadmap approval |

---

## Parallel Execution

**Phase 1: Parallel Assessment** (3-5 days)
```
researcher:
  Market research on user priority

Parallel with:

designer:
  Assess complexity for each feature

Parallel with:

eng-lead:
  Estimate effort for each feature
```

Results aggregated into prioritization framework.

**Phase 2: Serial**:
- User creates roadmap (uses assessments)
- business-owner presents for approval
- Iterate if business-owner wants changes

---

## Exit Criteria (Gate to Stage 6)

☐ Quarterly initiatives mapped (Q1-Q4, Year 1)
☐ Features clearly allocated to quarters
☐ Dependencies identified and sequenced
☐ Prioritization rationale documented
☐ Effort estimates provided per feature
☐ Resource constraints documented
☐ **Business owner priority approved** ← CRITICAL
☐ Phasing clear (MVP, Phase 1, Phase 2)
☐ Artifact marked as REVIEW

---

## Typical Flow

```
Week 1:
1. User: "Help me prioritize features"
   → researcher: Research + prioritization
   → designer: Assess UX complexity in parallel
   → eng-lead: Estimate effort in parallel

2. User: "Here's my draft roadmap"
   → Feature list organized by quarter
   → Effort estimates included
   → Dependencies mapped

Week 2:
3. User: "/business-owner: roadmap approval"
   → business-owner: Present roadmap
   → Discuss timeline, resources, constraints
   → Business owner approves with any adjustments

4. User: "/validate"
   → quality-gate: Confirm completeness
   → Confirm business owner approval present
   → Report: ✅ PASS

5. User: "/next-stage"
   → quality-gate: Validate exit
   → Result: ✅ → Proceed to Stage 6 (Release Plan)
```

---

## Role Agents

- **Designer**: Recommends phasing based on interaction complexity
- **Eng Lead**: Estimates effort, flags technical dependencies
- **Business Owner**: Approves final prioritization and timeline
