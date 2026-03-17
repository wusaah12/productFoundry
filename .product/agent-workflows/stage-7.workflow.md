# Stage 7 Workflow: Feature Document (User Stories & BDD)

**Stage**: 7/7 - Feature Document
**Artifact**: stage-7-feature-document.md
**Duration**: 3-4 weeks (user story generation, user stories, acceptance criteria)

---

## Agent Execution Flow

```
STEP 1: business-analyst
  → Load Stage 6 release plan features
  → Transform each feature into user stories
  → Generate user stories (Given/When/Then format)
  → Define acceptance criteria per story

STEP 2: PARALLEL REVIEW:

designer:
  → Review user stories for UX consistency
  → Validate interaction patterns
  → Add UX notes (mobile, accessibility)

eng-lead:
  → Review technical scenarios
  → Add technical notes (APIs, caching, databases)
  → Flag performance requirements
  → Review edge cases

STEP 3: quality-gate
  → Run Stage 7 checklist
  → Verify all features have stories
  → Verify BDD format correct (Given/When/Then)
  → Verify acceptance criteria complete
  → Report: PASS or NEEDS WORK

STEP 4: If PASS:
  → export-agent: Generate handoff documents
  → export-agent: Create Jira epics/stories (optional)
  → quality-gate: Validate completion
  → decision-logger: Log "Feature Document Complete"
  → session-manager: Mark Stage 7 LOCKED
  → Ready for team handoff
```

---

## Key Agents

| Agent | Role | Invocation |
|-------|------|--------|
| business-analyst | Role | Primary: Generate stories + BDD |
| designer | Role | Review for UX, add UX notes |
| eng-lead | Role | Review for tech, add tech notes |
| quality-gate | Orchestrator | /validate before handoff |
| export-agent | Utility | /export-to-jira, /export-pdf |
| decision-logger | Utility | Log completion |

---

## Parallel Execution

**Phase: BDD Review** (2-3 days in parallel)
```
designer:
  Review user stories for interaction clarity
  Add UX notes to user stories

Parallel with:

eng-lead:
  Review technical scenarios
  Add technical notes and edge cases
```

Both roles review simultaneously, provide notes merged into user stories.

---

## Exit Criteria (Completion)

☐ All features have user stories (1:1 mapping)
☐ Each story has user stories (Given/When/Then)
☐ Each scenario has 2-3 acceptance criteria
☐ Acceptance criteria are specific and testable
☐ Technical notes documented (APIs, databases, caching)
☐ UX notes documented (mobile, accessibility, patterns)
☐ Performance requirements specified
☐ Risk flags and mitigations identified
☐ Out-of-scope items listed
☐ Artifact marked as LOCKED

---

## Typical Flow

```
Week 1-2:
1. User: "Let's create user stories"
   → business-analyst: Guide story generation
   → User: Create stories for each feature

2. User: "Add user stories"
   → business-analyst: Guide BDD format
   → User: Write Given/When/Then scenarios

3. User: "Add acceptance criteria"
   → business-analyst: Guide AC definition
   → User: Define 2-3 criteria per story

Week 2-3:
4. User: "/designer: review stories for UX"
   → designer: Review interaction patterns
   → Provide UX notes, accessibility notes
   → Merged into UX Notes section

5. User: "/eng-lead: review stories for tech"
   → eng-lead: Review technical feasibility
   → Add technical notes, edge cases
   → Merged into Technical Notes section

Week 3-4:
6. User: "/validate"
   → quality-gate: Check all criteria met
   → 100% stories complete? ✅
   → BDD format correct? ✅
   → Acceptance criteria present? ✅
   → Report: ✅ PASS

7. User: "/export-to-jira"
   → export-agent: Generate Jira import file
   → Create epics + stories in tool-native format
   → Ready for engineering team

8. User: "/export-pdf"
   → export-agent: Generate read-only PDF
   → Ready for sharing with stakeholders

9. User: "/next-stage" [or acknowledge Stage 7 complete]
   → quality-gate: Mark Stage 7 LOCKED
   → decision-logger: Log "Feature Document Complete"
   → session-manager: Mark as LOCKED
   → Handoff to engineering team
```

---

## Role Agents

- **Designer**: Reviews interaction patterns in user stories
  Ensures mobile-first, accessible design reflected in acceptance criteria
  Adds UX notes and design system guidance

- **Eng Lead**: Reviews technical feasibility of scenarios
  Ensures acceptance criteria are testable by developers
  Adds technical notes on APIs, databases, performance targets
  Flags edge cases and error handling

---

## Handoff Workflow

After Stage 7 complete:

```
User: "We're ready to hand off to engineering"

Exports available:
- /export-to-jira: Load stories into tool
- /export-pdf: Share with stakeholders
- /export-summary: One-pager for executives

Artifacts ready:
- stage-7-feature-document.md (master source)
- decisions/DECISIONS.md (decision audit trail)
- All stage artifacts (context for team)

Engineering receives:
- User stories in Jira (if exported)
- Acceptance criteria (what done means)
- user stories (how to test)
- Technical notes (APIs, edgecases)
- Risk flags (known issues)
- UX notes (design system alignment)
```

Stage 7 is NOT the end - it's the handoff point to the development team.
