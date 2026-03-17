# Stage 2 Workflow: Discovery Report

**Stage**: 2/7 - Discovery Report
**Artifact**: stage-2-discovery-report.md
**Duration**: 3-4 weeks (user research, competitive analysis)

---

## Agent Execution Flow

### Setup Phase
```
main-orchestrator + session-manager:
  → Load Stage 1 artifact (Idea Brief)
  → Confirm user/problem context
  → Activate role agents: Eng Lead, Designer
```

### Phase 1: User Discovery Research (Week 1-2)
```
PARALLEL:

researcher:
  → Guide user interview planning
  → Create interview guide
  → Synthesize user interviews (5+ minimum)
  → Extract pain points and needs

Parallel with:

eng-lead:
  → Identify technical constraints
  → Surface API/integration requirements
  → Flag technical risks

designer:
  → Assess UX requirements
  → Identify mobile/accessibility constraints
  → Review interaction patterns
```

### Phase 2: Competitive Analysis (Week 1)
```
researcher:
  → Identify 3+ competitors
  → Create competitive matrix
  → Identify gaps and opportunities
```

### Phase 3: Assumptions & Constraints (Week 2)
```
researcher:
  → Document all assumptions
  → Rank by risk (highest risk = most likely to kill product)
  → Synthesize eng-lead + designer constraints

eng-lead:
  → Confirm technical constraints
  → Flag scalability implications

designer:
  → Confirm UX constraints
  → Accessibility requirements
```

### Validation & Progression
```
quality-gate:
  → Run Stage 2 checklist
  → Verify 5+ interviews documented
  → Verify competitive analysis complete
  → Verify assumptions ranked
  → Report: PASS or BLOCK

If PASS:
  → quality-gate: Validate Stage 2 exit
  → decision-logger: Log "Discovery Complete"
  → session-manager: Update to Stage 3
```

---

## Agents & Roles

| Agent | Role | When | Invocation |
|-------|------|------|-----------|
| researcher | Specialist | All phases | Primary investigator |
| eng-lead | Role | Phase 1, 3 | Parallel with discovery |
| designer | Role | Phase 1, 3 | Parallel with discovery |
| quality-gate | Orchestrator | End of stage | /validate before gate |
| decision-logger | Utility | After gate pass | Auto-logged |

---

## Parallel Execution

**Phase 1 Parallel**:
```
researcher (user interviews)
└─ eng-lead (technical constraints, in parallel)
└─ designer (UX constraints, in parallel)
→ Results aggregated into discovery report
```

**Execution**: eng-lead + designer work independently with researcher, providing perspective as interviews happen
**Timeline**: Can complete in 2-3 weeks with parallel work vs. 4-5 weeks serial

---

## Typical Conversation

```
Week 1:
1. User: "Starting discovery"
   → researcher: Guide interview planning
   
2. User: "I completed 5 interviews, here are notes"
   → researcher: Synthesize pain points
   → eng-lead: Review for technical requirement hints
   → designer: Review for UX requirement hints

Week 1-2:
3. User: "What competitors should I analyze?"
   → researcher: Suggest competitors, guide analysis
   → Create competitive matrix

Week 2:
4. User: "/validate"
   → quality-gate: Check discovery completeness
   → Report: ✅ PASS (have 5 interviews, competitive analysis, assumptions)

5. User: "Ready for Stage 3"
   → quality-gate: Validate exit criteria
   → Result: ✅ PASS → Move to Stage 3
```

---

## Exit Criteria (Gate to Stage 3)

☐ Minimum 5 user interviews documented
☐ User pain points synthesized
☐ Competitive landscape analyzed (3+ vendors)
☐ Competitive matrix created
☐ Assumptions documented and ranked by risk
☐ Technical constraints identified (via Eng Lead)
☐ UX constraints identified (via Designer)
☐ Artifact marked as REVIEW

---

## Role Agents Active

- **Eng Lead**: Identifies technical constraints, scalability risks
- **Designer**: Identifies UX constraints, accessibility, mobile requirements

Both work in parallel with researcher, providing perspective as user interviews are conducted.

---

## Optional: Parallel Interviews

If multiple stakeholders available:
```
eng-lead:
  → "Can you interview the CTO about integration requirements?"
  
designer:
  → "Can you interview a UX person about mobile constraints?"

These happen in parallel with user discovery interviews,
creating richer, multi-perspective discovery.
```
