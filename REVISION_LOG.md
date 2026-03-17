# Product Foundry — Revision Log

## Version History

| Version | Release Date | Key Changes |
|---------|--------------|------------|
| **v1.0** | March 14, 2026 | 5-stage model: Idea Brief → Discovery → Hypothesis → PRD → Vision & Mission. Issue: Vision placed after PRD (backwards order). |
| **v2.0** | March 14, 2026 | Fixed stage order. Vision & Mission moves before PRD and acts as strategic filter for all requirements. |
| **v3.0** | March 14, 2026 | Expanded to 7 stages. Added Roadmap (Stage 5) and Release Plan (Stage 6) for better strategic-to-tactical sequencing. |
| **v4.0** | March 15, 2026 | Renamed PRD to Feature Documents with required BDD (Given/When/Then) format. Introduced role introduction schedule — roles enter at stages where their perspective matters most. |
| **v5.0** | March 16, 2026 | Added: structured user intake protocol (5 questions before Stage 1), artifact lifecycle state machine (DRAFT → REVIEW → LOCKED), context continuity log (expanded session header), agent decision protocol, per-stage validation checklists, and stage-specific output contracts. |
| **v6.0** | March 16, 2026 | Added: Business Analyst role (Stage 7 lead for BDD authorship). Renamed project to **Product Foundry**. Standardized all agent invocations to direct `/[name]` format (removed `/ask-` prefix). Reclassified business-analyst from specialist → role. Added product-lead role agent. Consolidated agent namespacing to `role.*`, `specialist.*`, `orchestrator.*`, `utility.*`. Updated all `.vscode/`, workflow, and documentation files to match. |

---

## Feature Matrix — What Changed by Version

| Feature | v1.0 | v2.0 | v3.0 | v4.0 | v5.0 | v6.0 |
|---------|------|------|------|------|------|------|
| Stage count | 5 | 5 | 7 | 7 | 7 | 7 |
| Vision before Features | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Roadmap stage | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| Release Plan stage | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| Feature Documents (BDD) | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Role introduction schedule | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Structured intake protocol | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Artifact lifecycle (DRAFT→REVIEW→LOCKED) | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Context continuity log | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Agent decision protocol | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Per-stage validation checklists | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Stage output contracts | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Business Analyst role (BDD lead) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Product Lead role agent | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Direct `/[name]` invocation (no `/ask-` prefix) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Product Foundry brand | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

---

## Detailed Changelog

### v1.0 — Initial Release
**Architecture:** 5-stage sequential model

**Stages:**
1. Idea Brief
2. Discovery & Research
3. Hypothesis
4. PRD (Product Requirements Document)
5. Vision & Mission

**Critical Issue:** Vision & Mission placed at the end (Stage 5) after PRD creation, causing requirements to be written without strategic direction locked first.

---

### v2.0 — Fixed Stage Order
**Key Fix:** Reordered stages to place Vision & Mission before PRD

**Rationale:** Vision and Mission must act as the authoritative strategic filter that constrains all downstream requirements and feature documents.

**New Stage Order:**
1. Idea Brief
2. Discovery & Research
3. Hypothesis
4. Vision & Mission ← moved here
5. PRD ← updated order

---

### v3.0 — Strategic-to-Tactical Sequencing
**Major Enhancement:** Expanded to 7 stages with explicit Roadmap and Release Plan

**New Stages:**
- **Stage 5: Product Roadmap** — Quarterly strategic initiatives tied to Vision
- **Stage 6: Release Plan** — Feature list and go/no-go criteria for a specific release
- **Stage 7: Feature Documents** — Detailed BDD specs for engineering

**Rationale:** Separates strategic planning (Roadmap) from tactical execution (Release Plan and Feature Docs). Enables better stakeholder alignment and risk management.

**New Stage Order:**
1. Idea Brief
2. Discovery & Research
3. Hypothesis
4. Vision & Mission
5. Product Roadmap ← new
6. Release Plan ← new
7. Feature Documents ← renamed from PRD

---

### v4.0 — BDD Requirements & Role Introduction
**Major Changes:**
1. Renamed "PRD" → "Feature Documents" with mandatory BDD format
2. Introduced role introduction schedule (roles join at stages where their expertise matters most)

**BDD Format Mandate:**
```gherkin
Scenario: [Descriptive name]
Given [initial context]
When  [user action or event]
Then  [observable, testable outcome]
```

**Role Introduction Schedule:**
- **Stage 1:** PM/Founder only
- **Stage 2:** Eng Lead and Designer join Discovery
- **Stage 3:** Core PM work (Eng Lead advisory)
- **Stage 4:** Business Owner joins for Vision alignment
- **Stage 5:** Eng Lead leads feasibility review
- **Stage 6:** All roles review Release Plan
- **Stage 7:** Eng Lead and Designer review BDD scenarios

**Rationale:** Roles enter when their perspective creates decision value, mirrors real product teams.

---

### v5.0 — Structured Process & Artifact Lifecycle
**Current Version (March 16, 2026)**

**Major Additions:**

1. **Structured User Intake Protocol**
   - 5 foundational questions before Stage 1
   - Confirmation step to validate context
   - Ensures PM and agents understand problem space

2. **Artifact Lifecycle State Machine**
   - DRAFT: In active creation by user
   - REVIEW: Complete enough for role review and feedback
   - LOCKED: Approved, gates next stage, cannot be bypassed
   - Clear transitions between states

3. **Context Continuity Log**
   - Stage header required at start of every response: `── Stage [N]/7: [Stage Name] │ Role: [Role] │ Gate: [STATUS] ──`
   - Maintains conversation context across turns
   - Shows session artifacts, latest decision, outstanding work

4. **Agent Decision Protocol**
   - Clear rules for when user input is vague (max 1 clarifying question)
   - Block rules for stage skipping with explanations
   - Iteration vs. rework distinction
   - Artifact state transition rules
   - Validation failure handling

5. **Per-Stage Validation Checklists**
   - Stage 1: Problem statement, user definition, pain points, artifact confirmation
   - Stage 2: User needs validation, competitive analysis, constraints from Eng/Design
   - Stage 3: Falsifiable hypothesis, measurable metrics, assumption ranking
   - Stage 4: Vision specificity, mission clarity, strategic filters, Business Owner sign-off
   - Stage 5: Vision linkage, feasibility validation, dependency mapping, sequencing
   - Stage 6: Feature completeness, role review, go/no-go criteria, Release Plan lock
   - Stage 7: BDD scenario coverage, testability, precondition realism, Vision/Release dual checks

6. **Stage-Specific Output Contracts**
   - Explicit format, length, and content guarantees for each artifact
   - Clear user actions after each stage
   - Artifact maturity expectations

7. **Hard Rules Enforcement**
   - Never draft Roadmap before Vision locked
   - Never draft Release Plan before Roadmap locked
   - Never draft Feature Document before Release Plan locked
   - All Feature Documents must use BDD format
   - Every "Then" clause must be observable and testable
   - Minimum 3 scenarios per feature (happy path, edge, error)
   - Maximum 3 questions per agent response
   - Vision + Release dual checks required for all Stage 7 scenarios

**Rationale:** v5 standardizes the entire discovery process with explicit guardrails, validation criteria, and artifact lifecycle management. Reduces ambiguity and ensures consistent, high-quality outputs.

---

### v6.0 — Product Foundry Brand, Business Analyst Role & Invocation Standardization
**Current Version (March 16, 2026)**

**Major Changes:**

1. **Project renamed to Product Foundry**
   - All 8 branding touchpoints updated: README, `.instructions.md`, `agentconfig.yaml`, `agents.json`, session-manager agent, REVISION_LOG, SETUP, WORKSPACE-OVERVIEW
   - Opening script and identity statement updated
   - Tagline: "Product Foundry guides rigorous product discovery through 7 gated stages. Each artifact moves through Draft → Review → Locked before the next stage opens. Feature Documents use BDD — every requirement is a testable Given/When/Then scenario."

2. **Business Analyst role added (Stage 7)**
   - Reclassified from specialist → role
   - Leads Feature Document creation at Stage 7
   - Stage 7 exit criteria updated: Business Analyst must author and structure all BDD scenarios
   - Role introduction text and 3 stage-specific questions added to `.instructions.md`
   - New gate check added: `Business Analyst has authored and structured all BDD scenarios`

3. **Product Lead role agent added**
   - New role covering product strategy, market fit, and prioritization across Stages 1, 2, 3, 4, 5, 7
   - Registered in `agentconfig.yaml`, `agents.json`, and `.instructions.md` agent table

4. **Invocation syntax standardized — `/ask-` prefix removed everywhere**
   - All slash commands now use direct `/[name]` format
   - Updated across: all 13 agent files, `agentconfig.yaml`, `.vscode/agents.json`, all 7 workflow files, `.instructions.md`, README
   - Removed deprecated commands: `/next-stage`, `/skip-stage`, `/export`, `/export-to-jira`, `/export-summary`
   - Added: `/export-agent` as unified export entry point; `/status` as utility command

5. **Agent namespace standardization**
   - All role agent files/prompts use `role.*` namespace (previously `product.*`)
   - All file paths in `agents.json`, `agentconfig.yaml`, and documentation updated
   - Zero `product.*` stale references confirmed

6. **Directory structure updated throughout**
   - `artifacts/`, `templates/`, `decisions/`, `session-state.md` → all moved under `.product/`
   - Tasks in `.vscode/tasks.json` updated to `.product/artifacts/` paths
   - README, SETUP, WORKSPACE-OVERVIEW, session-manager agent updated

7. **`.vscode/agents.json` fully rebuilt**
   - All 13 agents registered with correct ids, namespaced `instructions_file` paths, and direct slash commands
   - `mention_modes` and `implicit_triggers` updated to current agent names
   - `configuration` block paths updated to `.product/` structure

**Rationale:** v6 completes the agent system consolidation from v5, establishes the Product Foundry brand identity, and fills the Business Analyst gap in Stage 7 BDD authorship.

---

## Current System Status (v6.0)

**Latest Updates:**
- Project rebranded as **Product Foundry**
- Business Analyst role added as Stage 7 BDD lead
- Product Lead role agent added
- All agent invocations standardized to direct `/[name]` format (no `/ask-` prefix)
- All agent files namespaced: `role.*`, `specialist.*`, `orchestrator.*`, `utility.*`
- Directory structure consolidated under `.product/`
- All 8 documentation/config files updated to reflect current state

**Next Evolution Path:**
- Field testing with real product discovery scenarios
- Potential refinements based on user feedback
- Documentation of common blocking patterns and resolution strategies

---

## Document References

- **System Prompt:** `.instructions.md` (controls Product Foundry behavior)
- **Agent Definitions:** `.github/agents/` (13 agent definition files)
- **Agent Prompts:** `.github/prompts/` (13 prompt files with YAML frontmatter)
- **Master Configuration:** `.github/agentconfig.yaml` (orchestration and stage definitions)
- **Workflow Definitions:** `.product/agent-workflows/` (7 stage workflow documents)
- **Session State:** `.product/session-state.md` (current stage and context)
- **Decision Audit Trail:** `.product/decisions/DECISIONS.md` (all major product decisions)