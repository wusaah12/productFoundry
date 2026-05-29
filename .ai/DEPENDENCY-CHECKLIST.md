# .ai/ Dependency Checklist

**Purpose:** Ensure all cross-references and dependencies within the `.ai/` directory are kept in sync when files are updated.

**When to use:** After modifying any file in `.ai/`, run through the relevant checklist sections to verify all dependent files are updated.

---

## Master Configuration Files

### When updating `system-prompt.md`

- [ ] **Stage definitions** — If adding/removing/renaming stages:
  - [ ] Update all 7 `stage-N.workflow.md` files
  - [ ] Update `session-state.md` timeline table
  - [ ] Update `product-constitution.md` if principles change
  - [ ] Update all agent files that reference stage numbers

- [ ] **Agent definitions** — If adding/removing/renaming agents:
  - [ ] Create/delete corresponding agent file in `agents/`
  - [ ] Update agent table in `system-prompt.md`
  - [ ] Update `.github/agentconfig.yaml` (external reference)
  - [ ] Update `.github/prompts/` slash command definitions
  - [ ] Update relevant workflow files that invoke the agent

- [ ] **Gate rules** — If modifying stage progression rules:
  - [ ] Update `validate.md` (quality-gate) with new criteria
  - [ ] Update corresponding `stage-N.workflow.md` gate check steps
  - [ ] Update `product-constitution.md` if principles are affected
  - [ ] Update `session-state.md` if gate status tracking changes

- [ ] **Role activation schedule** — If changing which agents are active in which stages:
  - [ ] Update each affected `stage-N.workflow.md` file
  - [ ] Update agent files to reflect new stage assignments
  - [ ] Update `system-prompt.md` agent table with new stage columns

### When updating `product-constitution.md`

- [ ] **Principles** — If modifying the 6 governing principles:
  - [ ] Update `system-prompt.md` "Constitutional Basis" section
  - [ ] Review all agent files to ensure they still align with principles
  - [ ] Update `validate.md` if validation logic depends on principles
  - [ ] Update all templates to reflect principle changes

- [ ] **Principle implications** — If clarifying what a principle means:
  - [ ] Update corresponding agent files that enforce that principle
  - [ ] Update `validate.md` if gate enforcement is affected
  - [ ] Update relevant workflow files

### When updating `session-state.md`

- [ ] **State structure** — If changing fields or format:
  - [ ] Update `manage-session.md` (session-manager) to read/write new fields
  - [ ] Update `orchestrate.md` (main-orchestrator) to display state correctly
  - [ ] Update all workflow files that reference session state
  - [ ] Update `validate.md` if gate checks depend on state fields

- [ ] **Timeline table** — If adding/removing stages:
  - [ ] Ensure matches `system-prompt.md` stage definitions
  - [ ] Update all workflow files
  - [ ] Update `manage-session.md` initialization logic

---

## Orchestration & Skills

### When updating `orchestrate.md` (main-orchestrator)

- [ ] **Routing logic** — If changing how requests are routed to agents:
  - [ ] Verify all 13 agents are still reachable
  - [ ] Update `system-prompt.md` if routing rules change
  - [ ] Test parallel execution paths (e.g., Stage 2 with Eng Lead + Designer)

- [ ] **Agent invocation** — If changing how agents are called:
  - [ ] Update all agent files to match new invocation format
  - [ ] Update `validate.md` if gate checks are affected
  - [ ] Update all workflow files

- [ ] **Context continuity** — If changing session state handling:
  - [ ] Update `manage-session.md` (session-manager)
  - [ ] Update `session-state.md` if new fields are needed
  - [ ] Update all workflow files that depend on context

### When updating `validate.md` (quality-gate)

- [ ] **Stage exit criteria** — If modifying gate rules for any stage:
  - [ ] Update corresponding `stage-N.workflow.md` gate check section
  - [ ] Update `system-prompt.md` "Gate Rules" section
  - [ ] Update `product-constitution.md` if principles are affected
  - [ ] Update `validate-guide.md` with new validation guidance

- [ ] **Blocking logic** — If changing how gates block progression:
  - [ ] Update `orchestrate.md` (main-orchestrator) gate invocation
  - [ ] Update all workflow files that call validate.md
  - [ ] Update `system-prompt.md` gate enforcement rules

- [ ] **Exception handling** — If changing override/exception logic:
  - [ ] Update `log-decision.md` (decision-logger) to capture exceptions
  - [ ] Update `system-prompt.md` exception rules
  - [ ] Update `product-constitution.md` if principles are affected

### When updating `manage-session.md` (session-manager)

- [ ] **State persistence** — If changing how state is read/written:
  - [ ] Update `session-state.md` format if needed
  - [ ] Update `orchestrate.md` (main-orchestrator) state loading
  - [ ] Update all workflow files that depend on state

- [ ] **Initialization** — If changing session startup logic:
  - [ ] Update `orchestrate.md` (main-orchestrator) initialization
  - [ ] Update `system-prompt.md` if initialization rules change
  - [ ] Update `session-state.md` template

### When updating `log-decision.md` (decision-logger)

- [ ] **Decision format** — If changing how decisions are logged:
  - [ ] Update `.product/DECISIONS.md` format (external reference)
  - [ ] Update `log-decision-guide.md` with new format
  - [ ] Update all workflow files that call log-decision.md

- [ ] **Audit trail** — If changing what gets logged:
  - [ ] Update `validate.md` (quality-gate) exception logging
  - [ ] Update `orchestrate.md` (main-orchestrator) decision capture
  - [ ] Update `system-prompt.md` if decision rules change

### When updating `status.md` or `export.md`

- [ ] **Status display** — If changing what status shows:
  - [ ] Update `orchestrate.md` (main-orchestrator) status invocation
  - [ ] Update `system-prompt.md` if status format changes
  - [ ] Update `session-state.md` if new fields are needed

- [ ] **Export format** — If changing export output:
  - [ ] Update `orchestrate.md` (main-orchestrator) export invocation
  - [ ] Update `system-prompt.md` if export rules change
  - [ ] Update `.product/DECISIONS.md` if export affects decision logging

---

## Agents (13 Total)

### When updating any agent file

- [ ] **Agent responsibilities** — If changing what the agent does:
  - [ ] Update `system-prompt.md` agent table
  - [ ] Update `orchestrate.md` (main-orchestrator) routing logic
  - [ ] Update relevant workflow files that invoke the agent
  - [ ] Update `.github/agentconfig.yaml` (external reference)

- [ ] **Stage activation** — If changing which stages the agent is active in:
  - [ ] Update `system-prompt.md` agent table (stage columns)
  - [ ] Update all affected `stage-N.workflow.md` files
  - [ ] Update `orchestrate.md` (main-orchestrator) stage routing
  - [ ] Update `.github/agentconfig.yaml` (external reference)

- [ ] **Agent questions/criteria** — If changing what the agent validates:
  - [ ] Update `validate.md` (quality-gate) if gate criteria are affected
  - [ ] Update corresponding `stage-N.workflow.md` if workflow changes
  - [ ] Update `system-prompt.md` if agent responsibilities change

### Orchestrator Agents (3)

**main-orchestrator.md**
- [ ] Verify routing logic matches all 13 agents
- [ ] Verify stage progression rules match `system-prompt.md`
- [ ] Verify context continuity matches `session-state.md` structure

**quality-gate.md**
- [ ] Verify gate criteria match `system-prompt.md` "Gate Rules"
- [ ] Verify stage exit checklists match corresponding `stage-N.workflow.md`
- [ ] Verify blocking logic matches `product-constitution.md` principles

**session-manager.md**
- [ ] Verify state reading/writing matches `session-state.md` format
- [ ] Verify initialization matches `system-prompt.md` startup rules
- [ ] Verify context loading matches `orchestrate.md` expectations

### Specialist Agents (3)

**researcher.md** (Stage 2)
- [ ] Verify stage assignment matches `system-prompt.md`
- [ ] Verify responsibilities match `stage-2.workflow.md`
- [ ] Verify output feeds into `stage-2-discovery-report-template.md`

**hypothesis-validator.md** (Stage 3)
- [ ] Verify stage assignment matches `system-prompt.md`
- [ ] Verify validation criteria match `stage-3.workflow.md`
- [ ] Verify output feeds into `stage-3-hypothesis-template.md`

**vision-alignment.md** (Stage 4)
- [ ] Verify stage assignment matches `system-prompt.md`
- [ ] Verify vision criteria match `stage-4.workflow.md`
- [ ] Verify output feeds into `stage-4-vision-mission-template.md`
- [ ] Verify vision filtering rules for downstream stages (5, 6, 7)

### Role Agents (5)

**product-lead.md** (Stages 1–7)
- [ ] Verify stage assignments match `system-prompt.md`
- [ ] Verify responsibilities match all relevant `stage-N.workflow.md` files
- [ ] Verify role is invoked in correct stages

**eng-lead.md** (Stages 2, 3, 5, 7)
- [ ] Verify stage assignments match `system-prompt.md`
- [ ] Verify technical criteria match corresponding workflows
- [ ] Verify parallel execution with other roles in multi-agent stages

**designer.md** (Stages 2, 5, 7)
- [ ] Verify stage assignments match `system-prompt.md`
- [ ] Verify UX/accessibility criteria match corresponding workflows
- [ ] Verify parallel execution with other roles

**business-owner.md** (Stages 4, 5, 6)
- [ ] Verify stage assignments match `system-prompt.md`
- [ ] Verify go/no-go authority matches `validate.md` gate rules
- [ ] Verify approval requirements in corresponding workflows

**business-analyst.md** (Stage 7)
- [ ] Verify stage assignment matches `system-prompt.md`
- [ ] Verify BDD scenario requirements match `stage-7.workflow.md`
- [ ] Verify output feeds into `stage-7-feature-document-template.md`

### Utility Agents (2)

**decision-logger.md**
- [ ] Verify logging format matches `.product/DECISIONS.md` structure
- [ ] Verify invocation points match `validate.md` exception handling
- [ ] Verify audit trail captures all gate overrides

**export-agent.md**
- [ ] Verify export formats match user needs
- [ ] Verify export invocation matches `orchestrate.md`
- [ ] Verify exported artifacts reference correct templates

---

## Workflows (7 Stages)

### When updating any `stage-N.workflow.md`

- [ ] **Agent execution** — If changing which agents are active:
  - [ ] Update `system-prompt.md` agent table
  - [ ] Update corresponding agent files
  - [ ] Update `orchestrate.md` (main-orchestrator) routing

- [ ] **Gate checks** — If changing stage exit criteria:
  - [ ] Update `validate.md` (quality-gate) stage checklist
  - [ ] Update `system-prompt.md` "Gate Rules" section
  - [ ] Update `product-constitution.md` if principles are affected

- [ ] **Template reference** — If changing artifact template:
  - [ ] Verify template exists in `.ai/templates/`
  - [ ] Update template if workflow requirements change
  - [ ] Update `system-prompt.md` if artifact structure changes

- [ ] **Parallel execution** — If adding/removing parallel agents:
  - [ ] Update `orchestrate.md` (main-orchestrator) parallel execution logic
  - [ ] Verify all agents can execute in parallel without conflicts
  - [ ] Update `system-prompt.md` if parallel rules change

### Stage 1: Idea Brief

- [ ] Verify template reference: `stage-1-idea-brief-template.md`
- [ ] Verify gate criteria match `validate.md` Stage 1 checklist
- [ ] Verify product-lead is active
- [ ] Verify progression to Stage 2 is gated

### Stage 2: Discovery Report

- [ ] Verify template reference: `stage-2-discovery-report-template.md`
- [ ] Verify parallel agents: researcher, eng-lead, designer
- [ ] Verify gate criteria match `validate.md` Stage 2 checklist
- [ ] Verify progression to Stage 3 is gated

### Stage 3: Hypothesis

- [ ] Verify template reference: `stage-3-hypothesis-template.md`
- [ ] Verify hypothesis-validator is active
- [ ] Verify eng-lead is active in parallel
- [ ] Verify gate criteria match `validate.md` Stage 3 checklist
- [ ] Verify progression to Stage 4 is gated

### Stage 4: Vision & Mission

- [ ] Verify template reference: `stage-4-vision-mission-template.md`
- [ ] Verify vision-alignment is active
- [ ] Verify business-owner approval is required
- [ ] Verify gate criteria match `validate.md` Stage 4 checklist
- [ ] Verify Vision becomes filter for Stages 5, 6, 7
- [ ] Verify progression to Stage 5 is gated

### Stage 5: Product Roadmap

- [ ] Verify template reference: `stage-5-roadmap-template.md`
- [ ] Verify product-lead is active
- [ ] Verify eng-lead and designer are active in parallel
- [ ] Verify business-owner approval is required
- [ ] Verify Vision (Stage 4) is applied as filter
- [ ] Verify gate criteria match `validate.md` Stage 5 checklist
- [ ] Verify progression to Stage 6 is gated

### Stage 6: Release Plan

- [ ] Verify template reference: `stage-6-release-plan-template.md`
- [ ] Verify product-lead is active
- [ ] Verify all roles review (eng-lead, designer, business-owner)
- [ ] Verify business-owner go/no-go decision is required
- [ ] Verify Vision (Stage 4) is applied as filter
- [ ] Verify gate criteria match `validate.md` Stage 6 checklist
- [ ] Verify progression to Stage 7 is gated

### Stage 7: Feature Documents

- [ ] Verify template reference: `stage-7-feature-document-template.md`
- [ ] Verify business-analyst is active
- [ ] Verify eng-lead and designer review in parallel
- [ ] Verify BDD scenario requirements are enforced
- [ ] Verify Vision (Stage 4) is applied as filter
- [ ] Verify Release Plan (Stage 6) scope is enforced
- [ ] Verify gate criteria match `validate.md` Stage 7 checklist
- [ ] Verify all acceptance criteria are testable

---

## Templates (8 Total)

### When updating any template

- [ ] **Structure** — If changing artifact structure:
  - [ ] Update corresponding `stage-N.workflow.md` if workflow changes
  - [ ] Update `validate.md` (quality-gate) if validation criteria change
  - [ ] Update `system-prompt.md` if artifact requirements change

- [ ] **Principles reference** — If changing how principles are referenced:
  - [ ] Verify `product-constitution.md` is still referenced
  - [ ] Update all templates if constitution changes

- [ ] **Examples** — If adding/removing example sections:
  - [ ] Update corresponding workflow file
  - [ ] Update `validate.md` if examples affect validation

### product-constitution-template.md

- [ ] Verify references `product-constitution.md` principles
- [ ] Verify structure matches actual constitution
- [ ] Verify used as reference for all other templates

### stage-1-idea-brief-template.md

- [ ] Verify matches `stage-1.workflow.md` requirements
- [ ] Verify matches `validate.md` Stage 1 gate criteria
- [ ] Verify product-lead can use this template

### stage-2-discovery-report-template.md

- [ ] Verify matches `stage-2.workflow.md` requirements
- [ ] Verify matches `validate.md` Stage 2 gate criteria
- [ ] Verify researcher, eng-lead, designer can all contribute

### stage-3-hypothesis-template.md

- [ ] Verify matches `stage-3.workflow.md` requirements
- [ ] Verify matches `validate.md` Stage 3 gate criteria
- [ ] Verify hypothesis-validator can use this template
- [ ] Verify falsifiability and SMART metrics are included

### stage-4-vision-mission-template.md

- [ ] Verify matches `stage-4.workflow.md` requirements
- [ ] Verify matches `validate.md` Stage 4 gate criteria
- [ ] Verify vision-alignment can use this template
- [ ] Verify business-owner can approve from this template

### stage-5-roadmap-template.md

- [ ] Verify matches `stage-5.workflow.md` requirements
- [ ] Verify matches `validate.md` Stage 5 gate criteria
- [ ] Verify Vision (Stage 4) filtering is applied
- [ ] Verify product-lead can sequence features

### stage-6-release-plan-template.md

- [ ] Verify matches `stage-6.workflow.md` requirements
- [ ] Verify matches `validate.md` Stage 6 gate criteria
- [ ] Verify Vision (Stage 4) filtering is applied
- [ ] Verify Release Plan scope is clearly defined

### stage-7-feature-document-template.md

- [ ] Verify matches `stage-7.workflow.md` requirements
- [ ] Verify matches `validate.md` Stage 7 gate criteria
- [ ] Verify BDD scenario format is correct
- [ ] Verify all three scenario types are included (happy path, edge case, error)
- [ ] Verify acceptance criteria are testable
- [ ] Verify Vision (Stage 4) and Release Plan (Stage 6) are applied as filters

---

## Cross-File Consistency Checks

### System Consistency

- [ ] **Stage count** — All files reference 7 stages consistently
  - [ ] `system-prompt.md` defines 7 stages
  - [ ] `session-state.md` timeline has 7 rows
  - [ ] 7 `stage-N.workflow.md` files exist
  - [ ] 7 `stage-N-*-template.md` files exist

- [ ] **Agent count** — All files reference 13 agents consistently
  - [ ] `system-prompt.md` agent table has 13 rows
  - [ ] 13 agent files exist in `agents/`
  - [ ] `orchestrate.md` (main-orchestrator) can route to all 13
  - [ ] `.github/agentconfig.yaml` defines all 13 (external reference)

- [ ] **Gate rules** — All files enforce gates consistently
  - [ ] `system-prompt.md` "Gate Rules" section
  - [ ] `validate.md` (quality-gate) checklists
  - [ ] All `stage-N.workflow.md` gate checks
  - [ ] `product-constitution.md` principles

- [ ] **Role activation** — All files schedule roles consistently
  - [ ] `system-prompt.md` agent table (stage columns)
  - [ ] All `stage-N.workflow.md` agent execution sections
  - [ ] All agent files (stage assignments)
  - [ ] `orchestrate.md` (main-orchestrator) routing logic

### Principle Consistency

- [ ] **Process over preference** — All files enforce sequence
  - [ ] `system-prompt.md` "Stage Order" is never deviated
  - [ ] `validate.md` (quality-gate) blocks skipping
  - [ ] All workflows enforce stage progression
  - [ ] `product-constitution.md` Principle 1 is referenced

- [ ] **Human judgment is sovereign** — All files require confirmation
  - [ ] `validate.md` (quality-gate) requires explicit approval
  - [ ] All workflows include confirmation steps
  - [ ] `orchestrate.md` (main-orchestrator) never infers approval
  - [ ] `product-constitution.md` Principle 2 is referenced

- [ ] **Transparency over convenience** — All files surface problems
  - [ ] `validate.md` (quality-gate) names specific failures
  - [ ] All workflows surface blockers explicitly
  - [ ] `log-decision.md` (decision-logger) captures exceptions
  - [ ] `product-constitution.md` Principle 3 is referenced

- [ ] **Vision as highest filter** — All downstream stages apply Vision
  - [ ] `stage-5.workflow.md` applies Vision filter
  - [ ] `stage-6.workflow.md` applies Vision filter
  - [ ] `stage-7.workflow.md` applies Vision filter
  - [ ] `validate.md` (quality-gate) checks Vision alignment
  - [ ] `product-constitution.md` Principle 4 is referenced

- [ ] **Roles at right moment** — All files activate roles at correct stages
  - [ ] No role is active before its designated stage
  - [ ] All `stage-N.workflow.md` files activate correct roles
  - [ ] `orchestrate.md` (main-orchestrator) enforces role schedule
  - [ ] `product-constitution.md` Principle 5 is referenced

- [ ] **Testability as standard of done** — Stage 7 enforces testability
  - [ ] `stage-7.workflow.md` requires BDD scenarios
  - [ ] `stage-7-feature-document-template.md` includes all scenario types
  - [ ] `validate.md` (quality-gate) Stage 7 checklist verifies testability
  - [ ] `business-analyst.md` enforces observable "Then" clauses
  - [ ] `product-constitution.md` Principle 6 is referenced

---

## External References (Outside .ai/)

### When updating files that reference external content

- [ ] **`.github/agentconfig.yaml`** — Agent configuration
  - [ ] Update when adding/removing agents
  - [ ] Update when changing agent stage assignments
  - [ ] Update when changing agent responsibilities

- [ ] **`.github/prompts/`** — Slash command definitions
  - [ ] Update when adding/removing agents
  - [ ] Update when changing agent invocation format
  - [ ] Update when changing agent responsibilities

- [ ] **`.product/DECISIONS.md`** — Decision audit trail
  - [ ] Updated by `log-decision.md` (decision-logger)
  - [ ] Verify format matches `log-decision.md` output
  - [ ] Verify all gate overrides are logged

- [ ] **`.product/[idea-name]/`** — User artifacts
  - [ ] Verify templates in `.ai/templates/` match expected artifact structure
  - [ ] Verify workflows in `.ai/workflows/` guide artifact creation correctly

---

## Verification Workflow

**After making changes to any .ai/ file:**

1. **Identify affected files** — Use the checklist sections above
2. **Update dependent files** — Check off items as you update
3. **Verify consistency** — Run the "Cross-File Consistency Checks" section
4. **Test in practice** — Run a mock session to verify workflow still works
5. **Commit with message** — Include which files were updated and why

**Example commit message:**
```
Update Stage 2 workflow and discovery template

- Modified stage-2.workflow.md to add designer parallel execution
- Updated stage-2-discovery-report-template.md with UX section
- Updated validate.md Stage 2 gate criteria
- Updated system-prompt.md agent table (designer now active in Stage 2)
- Verified consistency: all 7 stages, 13 agents, gate rules
```

---

## Quick Reference: File Dependencies

```
system-prompt.md (Master)
├── product-constitution.md
├── session-state.md
├── All 13 agents/
├── All 7 workflows/
└── All 8 templates/

orchestrate.md (Main Orchestrator)
├── session-state.md (read)
├── validate.md (call)
├── manage-session.md (call)
├── All 13 agents (route to)
└── All 7 workflows (follow)

validate.md (Quality Gate)
├── system-prompt.md (read rules)
├── log-decision.md (call for exceptions)
└── session-state.md (update)

manage-session.md (Session Manager)
├── session-state.md (read/write)
└── orchestrate.md (called by)

All stage-N.workflow.md
├── stage-N-*-template.md (reference)
├── validate.md (call for gate)
├── Relevant agents (invoke)
└── session-state.md (update)

All stage-N-*-template.md
├── product-constitution.md (reference)
└── Corresponding stage-N.workflow.md (used by)

All agent files
├── system-prompt.md (defined in)
└── Relevant stage-N.workflow.md (invoked in)
```

---

## Last Updated

- **Date:** [Update when you make changes]
- **Version:** 1.0
- **Maintained by:** [Your name/team]

