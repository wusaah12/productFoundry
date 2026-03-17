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
| **v6.1** | March 17, 2026 | Added: Constitutional Basis section (6 governing principles) + Hard Rules 14–18. Artifact file creation rules — artifacts now live in `[idea-name]/` directory at workspace root. Stage 7 template restructured: BDD Scenarios → User Stories with Jira fields (Jira-exportable). README updated to reflect current project structure. |

---

## Feature Matrix — What Changed by Version

| Feature | v1.0 | v2.0 | v3.0 | v4.0 | v5.0 | v6.0 | v6.1 |
|---------|------|------|------|------|------|------|------|
| Stage count | 5 | 5 | 7 | 7 | 7 | 7 | 7 |
| Vision before Features | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Roadmap stage | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Release Plan stage | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Feature Documents (BDD) | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| Role introduction schedule | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| Structured intake protocol | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Artifact lifecycle (DRAFT→REVIEW→LOCKED) | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Context continuity log | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Agent decision protocol | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Per-stage validation checklists | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Stage output contracts | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Business Analyst role (BDD lead) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Product Lead role agent | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Direct `/[name]` invocation (no `/ask-` prefix) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Product Foundry brand | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Constitution compliance layer | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Artifact directory at workspace root (`[idea-name]/`) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| User stories with Jira fields (Stage 7) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

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

### v6.1 — Constitution Compliance, Artifact File Rules & Jira-Ready User Stories
**Release Date: March 17, 2026**

**Major Changes:**

1. **Constitutional Basis section added to `.github/copilot-instructions.md`**
   - Added `## Constitutional Basis` section mapping all 6 governing principles inline after Gate Rules
   - `BYPASSED` gate status now requires a body announcement naming what was bypassed and why — not just the status label
   - Added `## When Approval Is Ambiguous` decision protocol — approval is never inferred from silence; explicit confirmation required before any artifact is marked LOCKED
   - Added `## When a Vision Conflict Is Detected` protocol — three valid resolutions only: (1) revise artifact, (2) revise Vision with re-lock, (3) move to Non-goals; conflicts never dropped silently
   - BDD Rules: non-observable "Then" clauses are explicitly rejected regardless of user confidence
   - BDD Rules: missing scenario types (happy path, edge case, error/failure) are flagged by name; Feature Document cannot be marked LOCKED until all three are present
   - Hard Rules 14–18 added: approval ambiguity, role timing (never early, never skipped), Vision conflict explicit handling, non-observable Then clause rejection, Feature Doc lock blocked while any Vision check is unresolved

2. **Artifact file creation rules added to `.github/copilot-instructions.md`**
   - All artifacts now written to `[idea-name]/` directory at workspace root (kebab-case, derived from approved idea brief)
   - 2-track timing rule: Stage 1 (Idea Brief) file created only when LOCKED; Stages 2–7 files created when drafting begins (DRAFT state)
   - File naming defined per stage: `idea-brief.md`, `discovery-report.md`, `hypothesis.md`, `vision-mission.md`, `product-roadmap.md`, `release-plan.md`, `feature-[kebab-case-name].md`
   - Template reference: each stage uses corresponding `.product/templates/stage-N-*-template.md`
   - Removed residual reference to `.product/artifacts/` as artifact output location

3. **Stage 7 template restructured — BDD Scenarios → User Stories with Jira fields**
   - Updated `.product/templates/stage-7-feature-document-template.md`
   - Each scenario is now a self-contained user story with a Jira issue metadata block
   - Jira fields per story: Summary, Type `[Story / Enabler]`, Priority, Story Points, Labels (typed per story: `happy-path`, `edge-case`, `error-handling`)
   - User story format: "As a [role], I want [capability], so that [benefit]"
   - Gherkin acceptance criteria under `Acceptance Criteria:` fenced block (unchanged format)
   - Stories are Jira-exportable: copy block between `---` markers as a single Jira issue
   - Gate checklist updated: Jira fields populated + user story format added as required criteria

4. **README updated to reflect current project structure**
   - Project structure: `.product/artifacts/` now shows example-only files; `[idea-name]/` directory block at workspace root added with per-stage artifact filenames
   - Feature Document Validation: updated from BDD scenario format to user story format + Jira fields check
   - Key Concepts: "BDD Scenarios" → "User Stories" with Jira-export note
   - Learning Resources: removed non-existent `AGENTS.md` reference; corrected `.instructions.md` → `.github/copilot-instructions.md`; added `.product/product-constitution.md` and `.product/templates/` references
   - Git workflow: updated paths from `.product/artifacts/stage-N-*.md` to `[idea-name]/` directory pattern

**Rationale:** v6.1 applies the product constitution as an explicit governance layer — every system prompt rule is now traceable to a principle. Artifact file creation rules eliminate ambiguity about where outputs live. The Jira-ready user story format makes Stage 7 Feature Documents directly actionable: each story block can be copied into Jira without reformatting.

---

## Current System Status (v6.1)

**Latest Updates (March 17, 2026):**
- Constitution compliance layer added — 6 principles governing all agent behaviour, mapped explicitly in `.github/copilot-instructions.md`
- Hard Rules 14–18 added covering approval ambiguity, role timing, Vision conflict handling, and Feature Doc lock criteria
- Artifacts now created in `[idea-name]/` directory at workspace root (not `.product/artifacts/`)
- Stage 7 Feature Documents use User Stories with Jira fields — Jira-exportable out of the box
- README updated to match current project structure and file paths

**Stable Features (from prior versions):**
- 7-stage gated discovery process (v3.0)
- Role introduction schedule with specific per-stage questions (v4.0)
- Artifact lifecycle: DRAFT → REVIEW → LOCKED (v5.0)
- Context continuity log in every response header (v5.0)
- Per-stage validation checklists (v5.0)
- Business Analyst role leads Stage 7 user story authorship (v6.0)
- Direct `/[name]` slash command invocation (v6.0)

**Next Evolution Path:**
- Field testing with real product discovery scenarios
- Potential refinements to User Story Jira export format based on team feedback
- Documentation of common blocking patterns and resolution strategies

---

## Document References

- **System Prompt:** `.github/copilot-instructions.md` (controls Product Foundry behavior — v6.1)
- **Governing Principles:** `.product/product-constitution.md` (6 constitutional principles)
- **Artifact Templates:** `.product/templates/` (stages 1–7 template files)
- **Agent Definitions:** `.github/agents/` (13 agent definition files)
- **Agent Prompts:** `.github/prompts/` (13 prompt files with YAML frontmatter)
- **Master Configuration:** `.github/agentconfig.yaml` (orchestration and stage definitions)
- **Workflow Definitions:** `.product/agent-workflows/` (7 stage workflow documents)
- **Session State:** `.product/session-state.md` (current stage and context)
- **Decision Audit Trail:** `.product/decisions/DECISIONS.md` (all major product decisions)