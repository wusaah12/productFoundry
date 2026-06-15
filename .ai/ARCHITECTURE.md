# Product Foundry Architecture

## System Overview

Product Foundry is a **7-stage structured discovery framework** that runs before the first sprint. It operationalizes through three behavioral layers that work together to guide product teams from raw ideas to specification-complete features.

### Three Behavior Layers

Product Foundry's architecture is organized into three distinct behavioral layers, each with a specific role in guiding product discovery:

```
┌─────────────────────────────────────────────────┐
│ SYSTEM PROMPT (Layer 1: Identity & Governance)  │
│ - Core Product Foundry identity                 │
│ - Constitutional principles (6 governing rules) │
│ - Stage sequence and gates                      │
│ - Decision protocols & enforcement rules        │
│ - Artifact lifecycle (DRAFT → REVIEW → LOCKED)  │
└─────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────┐
│ PERSONAS (Layer 2: Expertise Perspectives)      │
│ - 13 specialized perspective lenses             │
│ - Role-based and specialist viewpoints          │
│ - Stage-specific introduction schedule          │
│ - Invoked via slash commands or automatically   │
└─────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────┐
│ SKILLS (Layer 3: Operational Workflows)         │
│ - Reusable procedural workflows                 │
│ - Validation, logging, orchestration, export    │
│ - Triggered by events or explicit invocation    │
└─────────────────────────────────────────────────┘
```

---

## Layer 1: System Prompt (Identity & Governance)

**File**: `.ai/system-prompt.md`

The system prompt is the **foundational instruction set** that all tools and personas load. It contains:

- **Product Foundry identity** — You are a senior Product Manager Agent guiding 7-stage discovery
- **Constitutional principles** — 6 governing rules that are never relaxed (Process over Preference, Human Judgment Sovereign, etc.)
- **Stage sequence** — 7 stages in fixed order, never skipped or reordered
- **Gate rules** — Specific blocking conditions for each stage transition
- **Decision protocols** — How to enforce gates, handle ambiguity, manage revisions, detect Vision conflicts
- **Artifact lifecycle** — DRAFT → REVIEW → LOCKED progression and state management
- **Role introduction schedule** — When each persona joins and their specific questions

---

## Layer 2: Personas (Expertise Perspectives)

**Directory**: `.ai/personas/`

13 specialized persona definitions that represent different expertise lenses. Personas are introduced at their designated stage and are invoked via slash commands (e.g., `/researcher`, `/eng-lead`) or automatically by orchestrators.

### Persona Categories

**Orchestrators (3):**
- Guide workflow routing, quality gates, session context
- Never exit the conversation
- Invisible to user (backend routing)

**Specialists (3):**
- Domain experts for specific discovery tasks
- Introduced at their relevant stage
- Provide expertise-driven perspective and questions

**Roles (5):**
- Stakeholder or functional perspectives (PM, Engineering, Design, Business, QA)
- Introduced at their designated stage
- Provide their specific lens and decision criteria

**Utilities (2):**
- Support operations (decision logging, export/handoff)
- Available on-demand throughout

### Personas Table

| # | Type | Persona | Expertise | Active Stages | Invocation | Questions |
|---|------|---------|-----------|---------------|-----------|-----------|
| 1 | Orchestrator | Main Orchestrator | Workflow routing, stage progression, context management | All (1-7) | Auto | Invisible backend |
| 2 | Orchestrator | Quality Gate | Stage exit criteria validation, gating rules enforcement, blocker assessment | All (1-7) | Auto or `/validate` | Evaluate artifact against exit criteria |
| 3 | Orchestrator | Session Manager | Session state persistence, context continuity, decision audit trail | All (1-7) | Auto | Maintain `.ai/session-state.md` and `DECISIONS.md` |
| 4 | Specialist | Researcher | User discovery, competitive analysis, assumption ranking, market validation | Stage 2 (Primary) | `/researcher` | 5+ interviews? Competitive landscape? Assumptions ranked? |
| 5 | Specialist | Hypothesis Validator | Falsifiability testing, SMART metrics, risk ranking, critical assumption identification | Stage 3 (Primary) | `/hypothesis-validator` | Is hypothesis falsifiable? Metrics SMART? Risks ranked? |
| 6 | Specialist | Vision Alignment | Vision crafting, mission definition, strategic filter definition, vision-artifact conflict detection | Stage 4 (Primary) | `/vision-alignment` | Is vision 3-5 year focused? Mission one sentence? Filters decision-making? |
| 7 | Role | Eng Lead | Technical feasibility, architecture decisions, scalability risks, infrastructure dependencies | Stages 2, 5, 7 | `/eng-lead` | *Stage 2*: API dependencies? Latency constraints? *Stage 5*: Sequence feasible? Dependencies? *Stage 7*: BDD scenarios testable? Edge cases covered? |
| 8 | Role | Designer | UX/workflow design, accessibility, mobile constraints, error states, correction flows | Stages 2, 6, 7 | `/designer` | *Stage 2*: User workflows? Accessibility? Delivery context? *Stage 6*: End-to-end experience? Error states? Trust model? *Stage 7*: Override/edit paths? User context? |
| 9 | Role | Product Lead | Market fit, metrics, user needs, go/no-go decisions, prioritization, data-driven perspective | Stages 1-7 (Core PM) | `/product-lead` | Implicit (PM role, leads all stages) |
| 10 | Role | Business Owner | Strategic alignment, resources, dependencies, business impact, compliance, go/no-go authority | Stages 4, 5, 6 | `/business-owner` | *Stage 4*: Strategic fit? Compliance? Resources? *Stage 5*: Sequence business value? Change management? Success signal? *Stage 6*: Go/no-go criteria? Accountability? Communication plan? |
| 11 | Role | Business Analyst | BDD scenarios, acceptance criteria, user stories, testability verification, edge case coverage | Stage 7 (Primary) | `/business-analyst` | User outcomes observable? All actors included? Failure modes covered? |
| 12 | Utility | Decision Logger | Decision audit trail, major decision capture, gate pass logging, override recording | All (1-7) | Auto or `/log-decision` | Log decision with category, rationale, alternatives, implications |
| 13 | Utility | Export Agent | Artifact export, handoff preparation, PDF generation, stakeholder sharing | All (1-7) | `/export` or `/export-pdf` | Generate read-only artifact for sharing |

### Persona Introduction Schedule

Personas are introduced exactly when their perspective changes the output. Not all at once; not ad-hoc.

**Stage 1: Idea Brief** (PM-led, no roles yet)
- **Active**: Product Lead (implicit)
- **Orchestrators active**: Main Orchestrator, Quality Gate, Session Manager
- **No specialists or roles invited** — PM thinking only

**Stage 2: Discovery & Research**
- **Active**: Product Lead (lead), Researcher (primary)
- **Parallel introduction**: Eng Lead, Designer (both join to provide constraints)
- **First exposure**: "Time to stress-test what it would take to build. The Eng Lead identifies technical constraints the PM misses. The Designer maps user workflows and UX constraints."
- **Questions asked**: Tech dependencies? Latency? Mobile constraints? Accessibility needs?

**Stage 3: Hypothesis**
- **Active**: Product Lead (lead), Hypothesis Validator (primary)
- **Questions**: Falsifiable? Metrics SMART? Risks ranked?
- **Eng Lead & Designer context**: Relevant discoveries reviewed, but not actively invoked

**Stage 4: Vision & Mission**
- **Active**: Product Lead (lead), Vision Alignment (primary), Business Owner (joins)
- **First exposure to Business Owner**: "Vision & Mission is where we need leadership alignment. The Business Owner validates strategic fit, compliance, and fundability."
- **Questions**: Strategic fit? Compliant? Fundable? Resources available?

**Stage 5: Product Roadmap**
- **Active**: Product Lead (lead), Eng Lead (validates feasibility), Business Owner (validates sequencing)
- **Questions**: Feasible sequence? Dependencies? Business value order? Success signal?

**Stage 6: Release Plan**
- **Active**: Product Lead (lead), Eng Lead (reviews), Designer (reviews), Business Owner (owns go/no-go)
- **Questions**: Go/no-go criteria? Experience complete? Success metrics? Communication plan?

**Stage 7: Feature Documents (BDD)**
- **Active**: Product Lead (lead), Business Analyst (primary), Eng Lead (reviews BDD testability), Designer (reviews BDD UX)
- **First exposure to Business Analyst**: "Features are now locked into release scope. We need specs that engineering can build without asking questions. The Business Analyst crafts testable BDD scenarios."
- **Questions**: Observable outcomes? All actors included? Edge cases covered? Tests automatable?

---

## Layer 3: Skills (Operational Workflows)

**Directory**: `.ai/skills/`

14 reusable procedural workflows that operationalize the system. Skills are triggered by events (orchestrator calls, user commands, status checks) or explicit invocation.

### Skills Reference

| # | Skill | Purpose | Trigger | What It Does |
|---|-------|---------|---------|-------------|
| 1 | **Session Resume** | Session init & recovery | Auto at start or `/resume` | Loads session-state.md from workspace; displays recovery context; validates session integrity; enables cross-tool continuity |
| 2 | **Validate** | Quality gate enforcement | User says "ready for next stage" or `/validate` | Runs stage-specific exit criteria checklist; determines PASS or BLOCK; provides unblock path if needed |
| 3 | **Manage Session** | Context persistence | After every major decision | Loads/updates `session-state.md` and `DECISIONS.md`; maintains "where are we" context; surfaces outstanding blockers |
| 4 | **Log Decision** | Audit trail capture | After every gate pass, revision, or major choice | Appends structured decision entry to `DECISIONS.md`; records category, rationale, alternatives, implications; creates audit trail for compliance |
| 5 | **Status** | Workflow visibility | User requests `/status` | Shows current stage, artifact name, gate status, latest decision, outstanding work; contextual next steps |
| 6 | **Business Case** | Executive summary generation | Auto (Stage 4) or `/business-case` | Generates one-page business case; extracts ROI, market opportunity, investment required; links to hypothesis metrics; mandatory at Stage 4; on-demand at any stage |
| 7 | **Revise** | Artifact revision governance | `/revise [stage] [artifact]` | Opens locked artifacts for revision; enforces Vision alignment; assesses cascade impact; requires re-validation before re-locking |
| 8 | **Value Stream Map** | Process visualization | `/value-stream-map` or `/vsm` (Stage 2 or 5) | Maps current/future workflow; calculates lead time, process time, wait time, % value-add, time efficiency; identifies bottlenecks and handoff friction; shows product ROI |
| 9 | **Write Features** | SAFe story decomposition | `/write-features` or `/write-stories` (Stage 7) | Decomposes Release Plan features into user stories; generates acceptance criteria; writes BDD scenarios; estimates story points; identifies risks and dependencies; produces sprint-ready artifacts |
| 10 | **Write Epics** | Portfolio epic planning | `/write-epics` or `/write-portfolio` (Stage 5) | Translates Vision into portfolio epics; structures 3-phase epic breakdown; generates epic business cases; decomposes epics into features; identifies cross-epic dependencies; produces multi-year roadmaps |
| 11 | **Write Stories** | Persona-driven BDD authoring | `/write-stories` or `/write-bdd` (Stage 7) | Creates BDD scenarios from user personas; generates acceptance criteria with observable outcomes; ensures story coverage for all user roles; produces testable, unambiguous specifications |
| 12 | **Simulate User** | Synthetic user role-play | `/simulate-user` or `/rehearsal` (Stage 2 Substep 2.3 or on-demand) | Role-plays target user based on Idea Brief; enables interview practice before real user research; provides prototype feedback; generates synthetic interview notes (marked as NOT counting toward real interview minimum) |
| 13 | **Export** | Artifact handoff | User requests `/export` or `/export-pdf` | Generates read-only artifact file for sharing; PDF export for stakeholders; preserves locked status |

### Skill Invocation

**Automatic (Orchestrator-triggered):**
- `Orchestrate` — Every message (invisible, backend routing)
- `Manage Session` — Session start + after each gate pass/revision (silent context update)
- `Log Decision` — After each gate pass (auto-logged with minimal user input)

**Explicit (User-invoked via slash command):**
- `/validate` — Check current artifact against exit criteria
- `/status` — Show where you are in the process
- `/log-decision` — Manually capture a decision not auto-logged
- `/export` or `/export-pdf` — Share artifact with stakeholders
- `/validate-guide` — Show validation checklist for current stage
- `/log-decision-guide` — Show decision logging structure

**Persona-triggered (Orchestrator calling on behalf of user):**
- `Researcher` skill set — Triggered by `/researcher` → calls into discovery workflows
- `Hypothesis Validator` — Triggered by `/hypothesis-validator` → calls into hypothesis validation
- Etc.

---

## Stage Workflow Summary

Each stage has a specific execution pattern: primary persona(s), parallel personas, key steps, and skills used.

### Stage 1: Idea Brief (1–2 hours)

| Aspect | Details |
|--------|---------|
| **Primary Persona** | Product Lead (implicit) |
| **Parallel Personas** | None |
| **Specialist** | None |
| **Roles** | None (PM solo) |
| **Key Steps** | 1. Load template 2. User fills problem/user/scope/metric 3. Validate completeness 4. Confirm readiness 5. Lock artifact |
| **Skills Used** | Orchestrate, Manage Session, Validate, Log Decision |
| **Artifact** | `idea-brief.md` |
| **Gate** | All sections clear? User defined? Scope realistic? Metric identified? |
| **Duration** | 1–2 hours |

### Stage 2: Discovery & Research (3–4 weeks)

| Aspect | Details |
|--------|---------|
| **Primary Persona** | Researcher (Specialist) |
| **Parallel Personas** | Eng Lead + Designer (both active, in parallel) |
| **Key Steps** | 1. Load Stage 1 context 2. User interview planning 3. Conduct 5+ interviews (with Researcher) 4. Competitive analysis (with Researcher) 5. Eng Lead reviews for tech constraints 6. Designer reviews for UX constraints 7. Rank assumptions by risk 8. Validate completeness 9. Lock artifact |
| **Skills Used** | Orchestrate, Manage Session, Validate, Log Decision, Status |
| **Artifact** | `discovery-report.md` |
| **Gate** | 5+ interviews? Competitive analysis (3+ vendors)? Assumptions ranked? Tech + UX constraints identified? |
| **Duration** | 3–4 weeks |

### Stage 3: Hypothesis (1–2 weeks)

| Aspect | Details |
|--------|---------|
| **Primary Persona** | Hypothesis Validator (Specialist) |
| **Parallel Personas** | None |
| **Key Steps** | 1. Review Stage 2 findings 2. Craft falsifiable hypothesis 3. Define SMART success metrics 4. Identify riskiest assumptions 5. Rank risks (impact × probability) 6. Validate metrics 7. Lock artifact |
| **Skills Used** | Orchestrate, Manage Session, Validate, Log Decision |
| **Artifact** | `hypothesis.md` |
| **Gate** | Hypothesis falsifiable? Metrics SMART? Risks ranked? Grounded in discovery? |
| **Duration** | 1–2 weeks |

### Stage 4: Vision & Mission (1 week)

| Aspect | Details |
|--------|---------|
| **Primary Persona** | Vision Alignment (Specialist) |
| **Parallel Personas** | Business Owner (joins, owns approval) |
| **Key Steps** | 1. Review hypothesis 2. Craft Vision (3–5 year aspiration) 3. Define Mission (one sentence: what/for-whom) 4. Define strategic filters (3 decision rules) 5. Business Owner reviews strategic fit 6. Generate Business Case (executive summary) 7. Business Owner approves investment 8. Lock artifacts |
| **Skills Used** | Orchestrate, Manage Session, Validate, Log Decision, Business Case |
| **Artifacts** | `vision-mission.md` + `business-case.md` |
| **Gate** | Vision 3–5 year? Mission one sentence? Filters decision-making? Business Owner sign-off? Business Case approved? |
| **Duration** | 1 week |

### Stage 5: Product Roadmap (2–3 weeks)

| Aspect | Details |
|--------|---------|
| **Primary Persona** | Product Lead |
| **Parallel Personas** | Eng Lead (validates sequence feasibility), Business Owner (validates business sequencing) |
| **Key Steps** | 1. Review Vision & Mission 2. Draft quarterly initiatives (Q1–Q4, Year 1) 3. Eng Lead reviews for technical dependencies 4. Business Owner reviews for business sequencing 5. Identify risks and dependencies 6. Document prioritization rationale 7. Validate all align with Vision 8. Lock artifact |
| **Skills Used** | Orchestrate, Manage Session, Validate, Log Decision, Status |
| **Artifact** | `product-roadmap.md` |
| **Gate** | Quarterly initiatives mapped? Dependencies identified? Eng feasible? Business sequenced? Vision aligned? |
| **Duration** | 2–3 weeks |

### Stage 6: Release Plan (1–2 weeks)

| Aspect | Details |
|--------|---------|
| **Primary Persona** | Product Lead |
| **Parallel Personas** | Eng Lead + Designer (review), Business Owner (owns go/no-go) |
| **Key Steps** | 1. Review Roadmap 2. Define MVP scope 3. Map features to release 4. Set go/no-go criteria 5. Eng Lead + Designer review experience 6. Define success metrics 7. Business Owner approves go/no-go 8. Lock artifact |
| **Skills Used** | Orchestrate, Manage Session, Validate, Log Decision, Status |
| **Artifact** | `release-plan.md` |
| **Gate** | Features finalized? Go/no-go criteria? Success metrics? All roles reviewed? Business Owner approved? |
| **Duration** | 1–2 weeks |

### Stage 7: Feature Documents (BDD) (2–4 weeks)

| Aspect | Details |
|--------|---------|
| **Primary Persona** | Business Analyst (Specialist) |
| **Parallel Personas** | Eng Lead (reviews BDD testability), Designer (reviews UX completeness) |
| **Key Steps** | 1. Review Release Plan 2. Create one Feature Doc per feature 3. Business Analyst drafts user stories + BDD scenarios 4. Every scenario has Given/When/Then (+ Vision check + Release scope check) 5. Eng Lead reviews for technical accuracy 6. Designer reviews for UX accuracy 7. Validate all BDD scenarios 8. Lock each feature document |
| **Skills Used** | Orchestrate, Manage Session, Validate, Log Decision, Status, Export |
| **Artifact** | `feature-[name].md` (one per feature) |
| **Gate** | BDD scenarios testable? All actors included? Edge cases covered? Vision/Release checks? Eng + Designer reviewed? |
| **Duration** | 2–4 weeks |

---

## File Organization Map

Product Foundry's file structure reflects its three-layer architecture:

```
.ai/
├── system-prompt.md              ← Layer 1: Governance & Identity
├── session-state.md              ← Persisted state (current progress)
├── product-constitution.md       ← 6 governing principles
│
├── personas/                     ← Layer 2: Expertise Perspectives (13 files)
│   ├── orchestrator.main-orchestrator.md
│   ├── orchestrator.quality-gate.md
│   ├── orchestrator.session-manager.md
│   ├── specialist.researcher.md
│   ├── specialist.hypothesis-validator.md
│   ├── specialist.vision-alignment.md
│   ├── role.product-lead.md
│   ├── role.eng-lead.md
│   ├── role.designer.md
│   ├── role.business-owner.md
│   ├── role.business-analyst.md
│   ├── utility.decision-logger.md
│   └── utility.export-agent.md
│
├── skills/                       ← Layer 3: Operational Workflows (14 files)
│   ├── SKILLS-INDEX.md           ← Master reference for all skills
│   ├── session-resume.md         ← Session init & recovery
│   ├── validate.md               ← Quality gates
│   ├── manage-session.md         ← Context persistence
│   ├── log-decision.md           ← Audit trail capture
│   ├── status.md                 ← Workflow visibility
│   ├── business-case.md          ← Investment decisions
│   ├── revise.md                 ← Artifact revision governance
│   ├── value-stream-mapping.md   ← Process flow visualization
│   ├── write-features.md         ← SAFe feature decomposition
│   ├── write-stories.md          ← BDD story authoring
│   ├── write-epics.md            ← Portfolio epic planning
│   ├── simulate-user.md          ← Synthetic user role-play
│   └── export.md                 ← Artifact handoff
│
├── workflows/                    ← Stage-specific execution patterns (7 files)
│   ├── stage-1.workflow.md
│   ├── stage-2.workflow.md
│   ├── stage-3.workflow.md
│   ├── stage-4.workflow.md
│   ├── stage-5.workflow.md
│   ├── stage-6.workflow.md
│   └── stage-7.workflow.md
│
└── templates/                    ← Artifact templates (11 files)
    ├── product-constitution-template.md
    ├── stage-1-idea-brief-template.md
    ├── stage-2-discovery-report-template.md
    ├── stage-3-hypothesis-template.md
    ├── stage-4-vision-mission-template.md
    ├── stage-5-roadmap-template.md
    ├── stage-6-release-plan-template.md
    ├── stage-7-feature-document-template.md
    ├── business-case-template.md  ← NEW: Executive business case template
    ├── session-state-template.md
    └── decisions-template.md

.product/
├── artifacts/                    ← Example completed stage artifacts
│   └── [example-product-ideas]/
│
├── DECISIONS.md                  ← Git-tracked audit trail of all decisions
│
└── templates/ (legacy)           ← Same as .ai/templates/ (kept for compatibility)

.github/
├── agentconfig.yaml              ← GitHub Copilot / external tool configuration
│
└── prompts/                      ← Slash command definitions (13 files, mirrors personas/)
    ├── orchestrator.main-orchestrator.prompt.md
    ├── orchestrator.quality-gate.prompt.md
    ├── orchestrator.session-manager.prompt.md
    ├── specialist.researcher.prompt.md
    ├── specialist.hypothesis-validator.prompt.md
    ├── specialist.vision-alignment.prompt.md
    ├── role.product-lead.prompt.md
    ├── role.eng-lead.prompt.md
    ├── role.designer.prompt.md
    ├── role.business-owner.prompt.md
    ├── role.business-analyst.prompt.md
    ├── utility.decision-logger.prompt.md
    └── utility.export-agent.prompt.md

[idea-name]/                      ← Created per product idea (workspace root)
├── idea-brief.md                 ← Stage 1 artifact
├── discovery-report.md           ← Stage 2 artifact
├── hypothesis.md                 ← Stage 3 artifact
├── vision-mission.md             ← Stage 4 artifact
├── product-roadmap.md            ← Stage 5 artifact
├── release-plan.md               ← Stage 6 artifact
└── feature-[name].md             ← Stage 7 artifacts (one per feature)
```

---

## Platform Wiring

Product Foundry is **tool-agnostic** — it works with any AI assistant. Platform integration happens through three connection points:

### 1. System Prompt Loading (All Platforms)

**How it works:**
1. User opens `/path/to/productFoundry` in their AI tool
2. Copy the contents of `.ai/system-prompt.md`
3. Paste into the AI tool's **system prompt** or **context window**
4. The system prompt loads all constitutional rules, stage sequences, and decision protocols

**Platforms:**
- **Claude (Web/API):** Paste into the "System" field in custom instructions or API parameters
- **GitHub Copilot Chat:** Via `.github/agentconfig.yaml` configuration
- **Kiro:** Via `.kiro/steering/` files (automatically loaded)
- **Any LLM with system prompt support:** Direct paste into system context

### 2. Persona Invocation (via Slash Commands)

**How it works:**
1. User types `/researcher` in chat (or any persona slash command)
2. Tool loads the corresponding persona file from `.ai/personas/`
3. Persona's perspective instructions load
4. User query is re-routed through persona lens
5. Response reflects that persona's expertise and questions

**Platforms:**
- **GitHub Copilot Chat:** Via `agentconfig.yaml` (defined in `.github/prompts/` + metadata in `agentconfig.yaml`)
- **Kiro:** Native slash command support (queries `.ai/personas/` automatically)
- **Claude (Web/API):** Manual paste of persona instructions (alternative: reference persona file in context)
- **Terminal/CLI:** Implemented as shell script wrappers calling LLM with persona context

### 3. State Management (Session Continuity)

**How it works:**
1. Session starts → `manage-session` loads `session-state.md` and `DECISIONS.md`
2. User takes action → state updates
3. Decision logged → appended to `DECISIONS.md` (git-tracked audit trail)
4. Session ends → state persisted in files for next session
5. Next session starts → context automatically loaded from persisted state

**Files:**
- `.ai/session-state.md` — Current stage, artifact, gate status, outstanding work (updated after each session)
- `DECISIONS.md` (workspace root) — Git-tracked audit trail of all decisions (append-only log)

**Platform integration:**
- All platforms read/write these files in the workspace
- Git tracks `DECISIONS.md` for compliance and audit
- Session state can be exported/shared between tools

### External Tool Integration

**GitHub Copilot** (`.github/agentconfig.yaml`):
- Defines all 13 personas as slash commands
- Points to `.ai/personas/` for definitions
- Points to `.github/prompts/` for invocation structure
- Orchestrator routing via main-orchestrator persona

**Kiro** (`.kiro/steering/`):
- Steering files provide additional context
- Persona invocation via native Kiro slash commands
- Automatic file discovery in `.ai/personas/`

**Generic LLM Integration**:
- Copy system prompt into system context
- Reference persona files by name (e.g., "Act as the Researcher from `.ai/personas/researcher.md`")
- Manage session state manually via file reading/writing

---

## Making Changes

Product Foundry is a framework designed to be forked and adapted. This section describes how to modify the system while maintaining integrity.

### Change Categories

#### 1. Constitutional Changes (System Prompt)

**What**: Modifying one of the 6 governing principles, stage sequence, or gate rules

**Risk**: **HIGH** — These changes affect every decision and gate

**Process**:
1. Document the change rationale in a new entry in `.product/DECISIONS.md`
   - What principle is changing?
   - Why is the old rule insufficient?
   - What unintended consequences could this create?
2. Review against all 6 principles — does the new rule conflict with any?
3. Update `.ai/system-prompt.md` with the new rule
4. Update all dependent sections (Stage exit criteria, decision protocols, agent responsibilities)
5. Create a PR with rationale; request review from team leads

**Example**: If you want to skip a stage for a certain type of product:
- **Don't do this lightly.** The gate exists for a reason.
- If skipping is necessary, document it in the system prompt as an explicit exception (not a silent change)
- Add it to the "Exceptions" section with clear condition (e.g., "Stage 1 can be skipped if product is an internal tool")
- Log every skip in `DECISIONS.md` with justification

#### 2. Persona Changes (Adding, Modifying, Removing)

**What**: Adding a new role (e.g., Data Privacy Officer), modifying a persona's expertise, or removing a role

**Risk**: **MEDIUM** — Persona changes affect stage workflows and the types of decisions made

**Process**:
1. **If adding a persona:**
   - Create new file in `.ai/personas/[type].[name].md` (follow naming convention: `role.data-privacy-officer.md`)
   - Define their expertise, key questions for their stage(s), and decision criteria
   - Add entry to the persona table in `.ai/system-prompt.md`
   - Add corresponding slash command definition to `.github/prompts/[type].[name].prompt.md`
   - Update `agentconfig.yaml` with the new persona
   - Add the persona to the appropriate stage workflow(s) in `.ai/workflows/`
   - Document the change in `.product/DECISIONS.md`

2. **If modifying a persona:**
   - Update their `.ai/personas/[name].md` file
   - Review stage workflows — does the change affect stage execution?
   - Update `.github/agentconfig.yaml` if metadata changes (e.g., active_stages)
   - Document change in `.product/DECISIONS.md`

3. **If removing a persona:**
   - Identify all stages where they're active
   - Reassign their responsibilities to another persona or mark as "now self-service"
   - Remove from `.ai/personas/`
   - Remove from `.github/prompts/`
   - Remove from `agentconfig.yaml`
   - Update all stage workflows (`.ai/workflows/`)
   - Document removal rationale in `.product/DECISIONS.md`

#### 3. Stage Changes (Adding, Reordering, Modifying Exit Criteria)

**What**: Changing stage sequence, adding a new stage, or modifying exit criteria

**Risk**: **VERY HIGH** — Stage sequence is governed by constitutional principle #1 (Process over Preference)

**Process**:
1. **Do not reorder stages casually.**
   - Each stage gates the next because each stage is load-bearing
   - If you believe reordering is necessary, document the reason in `.product/DECISIONS.md` and seek team consensus

2. **If modifying exit criteria:**
   - Update `.ai/system-prompt.md` (Stage-Specific Entry & Exit Criteria section)
   - Update corresponding workflow in `.ai/workflows/stage-[n].workflow.md`
   - Update validation checklist in `.ai/skills/validate.md`
   - Test: Create a test artifact and verify the new criteria make sense
   - Document change in `.product/DECISIONS.md`

3. **If adding a stage:**
   - This is a major change. Requires team alignment.
   - Create new stage file: `.ai/workflows/stage-[n].workflow.md`
   - Create new template: `.ai/templates/stage-[n]-[name]-template.md`
   - Update system prompt: stage count, sequence, gate rules
   - Update `session-state-template.md` to include new stage
   - Document extensively in `.product/DECISIONS.md`

#### 4. Skill Changes (Adding, Modifying, Removing)

**What**: Adding a new reusable skill (e.g., a User Feedback Analyzer), modifying skill behavior, or removing a skill

**Risk**: **LOW-MEDIUM** — Skill changes affect operational efficiency but not constitutional integrity

**Process**:
1. **If adding a skill:**
   - Create `.ai/skills/[name].md`
   - Define: purpose, trigger condition, what it does, invocation method
   - Update system prompt's "Persisted State Files" or "Skills" section if relevant
   - Add to the Skills reference table in this architecture doc
   - Test skill invocation in a stage workflow

2. **If modifying a skill:**
   - Update `.ai/skills/[name].md`
   - Check if any workflows or personas reference this skill
   - Test the modified skill end-to-end

3. **If removing a skill:**
   - Identify all references (workflows, personas, system prompt)
   - Reassign functionality to another skill or mark as manual task
   - Remove `.ai/skills/[name].md`
   - Update system prompt and architecture doc

#### 5. Template Changes (Artifact Structures)

**What**: Modifying the structure of a stage artifact template

**Risk**: **LOW** — Template changes affect artifact quality but not discovery integrity

**Process**:
1. Update `.ai/templates/stage-[n]-[name]-template.md`
2. Document what fields changed and why
3. Consider backward compatibility: existing artifacts won't automatically update
4. Document change in `.product/DECISIONS.md`
5. No process gate needed, but document the change

#### 6. Documentation Changes (This Architecture Doc, Workflow Docs)

**What**: Updating documentation without changing behavior

**Risk**: **VERY LOW** — Docs describe current behavior; updating them doesn't change Product Foundry

**Process**:
1. Update the relevant doc (this file, workflow files, etc.)
2. Ensure accuracy: documentation should reflect actual behavior
3. If you find docs that don't match behavior, fix both

### Validation Checklist for Changes

Before submitting a change to Product Foundry, verify:

- [ ] **Constitutional alignment** — Does the change align with or conflict with the 6 governing principles?
- [ ] **Dependency completeness** — Have all dependent files been updated? (system prompt → workflows → personas → templates → docs)
- [ ] **Backward compatibility** — Does this break existing product artifacts or sessions? If yes, document the migration path.
- [ ] **Testing** — Have you tested the change in a stage workflow end-to-end?
- [ ] **Audit trail** — Is the change documented in `.product/DECISIONS.md` with rationale?
- [ ] **Gate rules** — Are all gate rules still enforced? Have you accidentally disabled a gate?

### File Organization Rules

When adding or modifying files:

- **Naming**: Use kebab-case for all files. Persona files: `[type].[name].md`. Workflow files: `stage-[n].workflow.md`. Template files: `stage-[n]-[name]-template.md`
- **Location**: Place files in the directory specified by this architecture doc. Don't create new directories unless you've updated this doc and gotten team alignment
- **Version**: Update `.ai/system-prompt.md` version number (e.g., `v0.0.2` → `v0.0.3`) when making changes
- **References**: If a file is referenced from another file, use relative paths (e.g., `.ai/personas/researcher.md`, not `/home/user/...`)

### Communication & Review

- **For constitutional changes**: Create a PR with detailed rationale. Require review from at least 2 team members.
- **For persona or stage changes**: Create a PR, document in `.product/DECISIONS.md`, review with at least 1 team member.
- **For skill or template changes**: Can be merged with documented change, but notify team of modifications.
- **For docs**: No review gate; merge directly if accuracy is verified.

---

## Key Principles for System Design

When designing changes to Product Foundry, keep these principles in mind:

1. **Process over preference** — Gates are never relaxed for convenience. If you're tempted to disable a gate, that's a signal to examine why the gate exists.

2. **Human judgment is sovereign** — Personas surface options; humans make decisions. Never let an agent auto-decide something that should be human-approved.

3. **Transparency over convenience** — If a change creates complexity, document it explicitly rather than hiding it. Name problems as they appear.

4. **Vision as the highest filter** — Once locked, Vision tests every downstream artifact. No feature can violate Vision silently.

5. **Roles at the right moment** — Introduce personas only when their perspective changes the output. Avoid "expert overload" by bringing in roles too early.

6. **Testability as the standard of done** — A feature is complete only when every outcome is independently verifiable. If you can't test it, it's not done.

---

## Quick Reference: Common Tasks

### Adding a new role to a specific stage

1. Create `.ai/personas/role.[name].md` with questions for the stage
2. Add to `.github/prompts/role.[name].prompt.md`
3. Update `agentconfig.yaml`: add to personas list, specify active_stages
4. Update stage workflow in `.ai/workflows/stage-[n].workflow.md`
5. Update system prompt: role introduction schedule section
6. Log decision in `.product/DECISIONS.md`

### Modifying a gate (making it stricter or looser)

**Don't make gates looser lightly.** If a gate requirement seems excessive, examine why it exists first.

1. Update exit criteria in `.ai/system-prompt.md`
2. Update validation checklist in `.ai/skills/validate.md`
3. Update stage workflow to reflect new enforcement
4. Test with a sample artifact
5. Document rationale in `.product/DECISIONS.md`

### Adding a new skill

1. Create `.ai/skills/[name].md` with purpose, trigger, behavior, and invocation
2. Update this architecture doc: add to Skills Reference table
3. Update system prompt if the skill is user-invoked (add to "Agent System" section)
4. Test invocation

### Understanding why a change matters

Check the 6 governing principles:
- Is this change about **process integrity**? (Principle #1)
- Is this change about **human authority**? (Principle #2)
- Is this change about **transparency**? (Principle #3)
- Is this change about **Vision coherence**? (Principle #4)
- Is this change about **timing of expertise**? (Principle #5)
- Is this change about **specification quality**? (Principle #6)

If the change doesn't align with one of these principles, it's probably not necessary.

