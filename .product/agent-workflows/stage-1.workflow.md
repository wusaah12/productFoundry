# Stage 1 Workflow: Idea Brief

**Stage**: 1/7 - Idea Brief
**Artifact**: stage-1-idea-brief.md
**Gate Status**: OPEN (initial entry point, no blocking criteria)

---

## Agent Execution Flow

### Initialization (Session Start)
```
session-manager:
  Load session state (if returning to Stage 1)
  Display context: "Welcome! You're starting a new idea brief."
```

### Core Workflow (User Creates Artifact)
```
STEP 1: main-orchestrator
  → Parse user input
  → Route to stage-1-idea-brief-template
  → Provide template prompts

STEP 2: User fills template with:
  - Problem statement
  - Target user
  - Initial scope
  - Success metric

STEP 3: quality-gate
  → Check completeness
  → Identify missing sections
  → Provide feedback on clarity
```

### Gate Check (User Ready to Progress)
```
STEP 4: main-orchestrator
  → User says "Ready for next stage"
  → Call quality-gate

STEP 5: quality-gate
  → Validate Stage 1 exit criteria
  → Check: Problem clear? User defined? Scope realistic? Metric identified?
  → Return: PASS (unlock Stage 2) or BLOCK with feedback

STEP 6: If GATE PASS:
  → decision-logger: Log "Idea Brief Approved"
  → session-manager: Update stage to 2, artifact status to LOCKED
  → main-orchestrator: Confirm progression to Stage 2
```

### Optional: Export (Anytime)
```
STEP 7: export-agent [on demand]
  → /export or /export-pdf
  → Generate read-only PDF of idea brief
  → Available for sharing with stakeholders
```

---

## Key Agents by Role

| Agent | Role | When Invoked |
|-------|------|-------------|
| session-manager | Orchestrator | Session start (load context) |
| main-orchestrator | Orchestrator | Every user message |
| quality-gate | Orchestrator | User ready for Stage 2 |
| decision-logger | Utility | After gate approval |
| export-agent | Utility | User requests /export |

---

## Parallel Execution
**None** - Stage 1 is straightforward, single-user artifact creation

---

## Typical Conversation Flow

```
1. User: "I have an idea for a product"
   → main-orchestrator: Route to template
   → Display template prompts

2. User: "Here's my problem statement..."
   → main-orchestrator: Guide through remaining fields
   → Keep context continuity

3. User: "I think I'm done"
   → User: /validate
   → quality-gate: Run Stage 1 checklist
   → Report: ✅ PASS or ⚠️ PARTIAL (what's missing)

4. User: "Ready for next stage"
   → main-orchestrator: Call quality-gate
   → quality-gate: Validate exit criteria
   → If PASS: progression confirmed
   → If BLOCK: explain what's needed, unblock path

5. [Stage 2 begins]
```

---

## Exit Criteria (Gate to Stage 2)

☐ Problem statement is clear and specific
☐ Target user identified
☐ Initial scope defined (3-5 key capabilities)
☐ Success metric identified (measurable)
☐ Artifact marked as READY FOR REVIEW

---

## Stage Duration
**Typical**: 1-2 hours (quick ideation and artifact creation)

---

## No Role Agents
Stage 1 requires no specialist roles - pure product thinking.
