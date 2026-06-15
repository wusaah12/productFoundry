# Product Foundry Skills Index

**Skills** are reusable operational workflows that orchestrate, validate, log, and export product discovery artifacts. All skills are tool-agnostic and can be invoked via slash commands, automatically by orchestrators, or through role agents.

---

## Quick Reference Table

| Skill | Purpose | Invocation | When | Category |
|-------|---------|-----------|------|----------|
| **Session Resume** | Session init & recovery | Auto (start) or `/resume` | Conversation start or manual | Session |
| **Validate** | Quality gate enforcement | `/validate` | User asks or auto at stage end | Gate |
| **Manage Session** | Context persistence | Auto | After every major decision | Context |
| **Log Decision** | Audit trail capture | Auto or `/log-decision` | After gate pass or major decision | Audit |
| **Status** | Workflow visibility | `/status` | User wants context | Visibility |
| **Business Case** | Executive summary generation | Auto (Stage 4) or `/business-case` | Stage 4 mandatory; any stage on-demand | Investment |
| **Revise** | Artifact revision governance | `/revise [stage] [artifact]` | Implementation discovery or strategic pivot | Governance |
| **Value Stream Map** | Process flow visualization | `/value-stream-map` or `/vsm` | Stage 2 (current state) or Stage 5 (future state) | Analysis |
| **Write Features** | SAFe-based feature decomposition | `/write-features [name]` | Stage 7 (primary) or on-demand | Delivery |
| **Write Stories** | Persona-driven BDD story authoring | `/write-stories [feature]` | Stage 7 (after write-features) or on-demand | Delivery |
| **Write Epics** | Portfolio epic planning | `/write-epics` or `/write-portfolio` | Stage 5 (primary) or on-demand | Strategy |
| **Simulate User** | Synthetic user role-play for interviews | `/simulate-user` or `/rehearsal` | Stage 2 Substep 2.3 (rehearsal) or prototype testing | Research |
| **Export** | Artifact handoff/sharing | `/export` or `/export-pdf` | User needs to share | Handoff |

---

## Streamlined Skills Set

Product Foundry uses **14 core skills** that cover all operational needs:

### 1. Orchestrate

**File**: `.ai/skills/orchestrate.md`

**Purpose**: Central workflow coordinator and request router

**What it does**:
- Parses every user message to determine intent
- Routes to appropriate specialist, role, or skill
- Manages parallel agent execution (e.g., Stage 2: Researcher + Eng Lead + Designer simultaneously)
- Enforces stage workflow sequence
- Maintains context continuity header on every response

**Invocation**: Automatic (invisible, backend routing on every message)

**Key responsibility**: Ensures users never see "unrouted" requests. Every question goes to the right expertise.

---

### 2. Validate

**File**: `.ai/skills/validate.md`

**Purpose**: Quality gate enforcement and stage exit criteria validation

**What it does**:
- Runs stage-specific exit criteria checklists
- Determines PASS (artifact ready) or BLOCK (missing criteria)
- Surfaces specific blocking reasons (e.g., "Missing competitive analysis: need 3+ vendor comparisons")
- Provides unblock path (e.g., "Run /researcher for guided analysis")
- Updates gate status in session-state.md
- Logs gate passes to DECISIONS.md

**Invocation**:
- Explicit: User runs `/validate` to check current artifact
- Automatic: Called by Orchestrator when user indicates readiness to progress

**Key responsibility**: No artifact advances to next stage without verification. Gates are never silently bypassed.

---

### 3. Manage Session

**File**: `.ai/skills/manage-session.md`

**Purpose**: Multi-session state persistence and context recovery

**What it does**:
- Loads session-state.md at session start (creates from template if missing)
- Maintains current stage, artifact path, gate status, active roles, latest decision
- Persists state after major decisions or stage changes
- Enables seamless continuation across Copilot sessions
- Provides recovery message with current context

**Invocation**: Automatic (at session start and after major decisions)

**Key responsibility**: Users never lose context. Session state is always recoverable, enabling multi-session workflows.

---

### 4. Log Decision

**File**: `.ai/skills/log-decision.md` (with guidance integrated)

**Purpose**: Capture and audit major product decisions

**What it does**:
- Appends structured decision entries to DECISIONS.md (workspace root)
- Records decision category (gate pass, revision, go/no-go, conflict resolution, scope change)
- Captures context, options considered, decision made, impact, approver
- Creates git commit for audit trail
- Logs automatically on gate passes; allows manual invocation for other decisions

**Invocation**:
- Automatic: After every gate pass (invisible logging)
- Explicit: User runs `/log-decision` to manually capture decision
- Example: "We're deferring mobile support to Phase 2" → `/log-decision`

**Key responsibility**: Every major decision is logged with rationale, creating an audit trail for compliance and learning.

---

### 5. Status

**File**: `.ai/skills/status.md`

**Purpose**: Workflow visibility and context display

**What it does**:
- Shows current stage (N/7) with artifact name
- Displays gate status (LOCKED, OPEN, BLOCKED)
- Lists active roles and available specialists
- Shows latest decision and outstanding blockers
- Provides next steps and contextual suggestions

**Invocation**: Explicit: User runs `/status` to check progress

**Example output**:
```
── Stage 4/7: Vision & Mission │ Gate: OPEN ──

Current Artifact: [idea-name]/vision-mission.md (LOCKED)
Latest Decision: "Strategic filters defined; Business Owner approval pending"
Outstanding: Business Case approval (send to Business Owner)

Active Roles: Business Owner (approval authority)
Available: /business-owner, /business-case

Next Steps:
  1. Run /business-case to generate executive summary
  2. Send to /business-owner for investment approval
  3. Proceed to Stage 5 (Roadmap)
```

**Key responsibility**: Users always know where they are and what to do next.

---

### 6. Business Case

**File**: `.ai/skills/business-case.md`

**Purpose**: Generate one-page executive business case for investment decisions

**What it does**:
- Synthesizes Vision, Discovery, and Hypothesis into business terms
- Generates one-page business case artifact (business-case.md)
- Extracts ROI, market opportunity, investment required, go/no-go criteria
- Links business case to hypothesis success metrics and strategic filters
- Provides executive sign-off integration

**Invocation**:
- Automatic: Triggered after Stage 4 lock (mandatory before Stage 5 proceeds)
- Explicit: User runs `/business-case` or `/business-case-update` at any stage
- Role invocation: `/business-owner` reviews and approves business case

**When used**:
- **Stage 4 (mandatory)**: Investment approval gate before Roadmap planning
- **Stage 5+ (on-demand)**: Refresh business case with roadmap/release plan updates
- **Pre-board presentation**: Generate executive summary for stakeholder review

**Key responsibility**: Vision (aspirational) must be supported by a fundable business case (realistic). No product proceeds to roadmap without investment approval.

---

### 7. Export

**File**: `.ai/skills/export.md`

**Purpose**: Artifact export and stakeholder handoff

**What it does**:
- Generates read-only artifact files for sharing
- Exports to PDF for board presentations
- Preserves artifact locked status
- Creates exportable decision log
- Handles multi-artifact export for phase handoff (e.g., Feature Docs to dev team)

**Invocation**:
- Explicit: User runs `/export` (markdown) or `/export-pdf` (PDF)
- Example: "Ready to hand off to dev team" → `/export` (generates all Feature Docs)

**Key responsibility**: Artifacts can be shared with stakeholders in their preferred format without losing structure or audit trail.

---

### 8. Value Stream Map

**File**: `.ai/skills/value-stream-mapping.md`

**Purpose**: Visualize and analyze end-to-end workflow in current state (today) and future state (after product ships)

**What it does**:
- Maps current-state process: identifies all steps, actors, handoffs, wait times, and value-add activities
- Maps future-state process: shows how the product transforms the workflow
- Calculates key metrics: lead time, process time, wait time, % value-add, time efficiency
- Identifies bottlenecks, delays, and optimization opportunities
- Compares current vs. future to measure process improvement and ROI
- Highlights handoff friction and actor transitions

**Invocation**:
- Explicit: User runs `/value-stream-map`, `/vsm`, `/value-stream-map current`, or `/value-stream-map future`
- Suggested: Researcher suggests during Stage 2 if discovery reveals workflow-heavy product

**When to use**:
- **Stage 2 (Discovery)**: Map current-state to ground abstract pain points in workflow reality
- **Stage 5 (Roadmap)**: Map future-state to communicate product value and sequencing impact
- **Stage 6 (Release Plan)**: Validate MVP achieves most critical process improvements

**Key responsibility**: Process improvement ROI is grounded in workflow reality. Users can see exactly where the product creates value and how much time/effort/friction it eliminates.

---

### 9. Write Stories

**File**: `.ai/skills/write-stories.md`

**Purpose**: Author persona-driven, outcome-focused user stories with BDD acceptance criteria that are independently testable, unambiguous, and engineering-ready.

**What it does**:
- Decomposes features into persona-driven stories (different actors, different workflows)
- Focuses on outcomes, not outputs (what changes for users, not what gets built)
- Applies the Goldilocks Principle (enough detail for clarity, not restrictive)
- Includes edge cases, error paths, and unexpected twists
- Defines preconditions and postconditions explicitly
- Quantifies outcomes (time, %, count, not vague language)
- Uses multidimensional thinking (when, where, why, how, with whom)
- Authors both user stories and system stories (non-user interactions: integrations, background jobs)
- Generates Given/When/Then BDD scenarios that are independently executable
- Validates acceptance criteria are testable and unambiguous

**Invocation**:
- Explicit: User runs `/write-stories [feature-name]` (detailed story authoring)
- List: `/write-stories --list` (show all features from Release Plan)
- Bulk: `/write-stories --bulk` (write all features at once)
- Refinement: `/write-stories [name] --bdd-only` (generate additional BDD scenarios)
- Dry-run: `/write-stories [name] --dry-run` (preview without saving)

**Workflow**:
```
/write-features [feature-name]
  ← Creates feature overview with business value and story outline
  
/write-stories [feature-name]
  ← Deep-dives into detailed persona-driven stories with full acceptance criteria and BDD scenarios
  
/validate stage-7 feature-[name]
  ← Verifies all stories meet testability and clarity standards
```

**Key principles**:
- **Persona-driven**: Each story serves a specific persona with distinct goals
- **Outcome-focused**: Stories focus on what changes for users, not what gets built
- **Goldilocks detail**: Specific enough to test, not so prescriptive it restricts creativity
- **Edge cases explicit**: Boundary conditions, error paths, race conditions all covered
- **Preconditions/Postconditions**: What must be true before/after (contracts for dependencies)
- **Quantitative metrics**: No vague language ("improve", "better"); all metrics measurable
- **Multidimensional**: Consider when, where, why, how, with whom
- **System stories too**: Background jobs, integrations, notifications are stories too
- **BDD scenarios**: Given/When/Then format makes scenarios independently executable and automatable

**Key responsibility**: Engineering team reads story and says, "I know exactly what to build and how to know when I'm done."

---

### 10. Simulate User

**File**: `.ai/skills/simulate-user.md`

**Purpose**: Role-play a realistic target user based on the Idea Brief, enabling practice interviews and prototype walkthroughs before conducting real user research.

**What it does**:
- Loads the target user persona from the Idea Brief
- Creates a synthetic user with realistic background, constraints, and pain points
- Responds to interview questions as that user would (not as an AI assistant)
- Provides honest, sometimes contradictory feedback (realistic user behavior)
- Conducts prototype walkthroughs by simulating realistic interactions
- Generates realistic obstacles and edge cases
- Outputs interview notes clearly labeled as SYNTHETIC (do not count toward 3-interview minimum)
- Enables practice/rehearsal before real user interviews (Stage 2, Substep 2.3)

**Invocation**:
- Explicit: User runs `/simulate-user` to practice interview
- Rehearsal: `/rehearsal` (alias)
- Prototype: `/simulate-user --prototype` (prototype walkthrough)
- Personas: `/simulate-user --persona "employee"` (if multiple personas in Idea Brief)

**Workflow**:
```
2.2 Interview Guide written
  ↓
2.3 Rehearsal (optional)
  ├─ /simulate-user
  ├─ Conduct practice interview with synthetic user
  ├─ Synthetic interview notes written (marked SYNTHETIC, don't count)
  └─ Refine questions, build confidence
  
2.4 Real Interviews (3+ required for gate)
```

**Key principles**:
- **Synthetic interviews are practice only** — Do NOT count toward 3-interview minimum
- **All outputs clearly labeled "SYNTHETIC"** — File names, metadata, headers
- **Realistic behavior** — Synthetic user contradicts, forgets, asks clarifying questions
- **UX feedback** — Can test prototype concepts before building
- **Never replace real validation** — Synthetic feedback supplements, never substitutes real user research

**Key responsibility**: Users can practice interviews and test prototypes with realistic user reactions before conducting real user research. Enables preparation without inflating research numbers.

---

## Removed/Streamlined Skills

The following have been streamlined or consolidated and **removed from repository**:

| Old Skill | Status | Consolidated Into |
|-----------|--------|------------------|
| validate-guide.md | ✅ Removed | validate.md (guidance now integrated as checklist explanations) |
| log-decision-guide.md | ✅ Removed | log-decision.md (guidance now integrated as decision template guidance) |

**Why consolidate**: Separate guide files created redundancy. All guidance is now embedded directly in the skills themselves—cleaner mental model, fewer files to navigate, single source of truth for each skill.

**Final skills directory** (14 files total):
```
skills/
├── SKILLS-INDEX.md          ← This index (master reference)
├── session-resume.md        ← Session init & recovery
├── validate.md              ← Quality gates (includes full validation guidance)
├── manage-session.md        ← Context persistence
├── log-decision.md          ← Audit trail (includes complete decision templates)
├── status.md                ← Progress visibility
├── business-case.md         ← Investment decisions
├── revise.md                ← Artifact revision governance
├── value-stream-mapping.md  ← Process visualization (current/future state)
├── write-features.md        ← SAFe-based feature decomposition & authoring
├── write-stories.md         ← Persona-driven BDD story authoring with acceptance criteria
├── write-epics.md           ← Portfolio epic planning & decomposition
├── simulate-user.md         ← Synthetic user role-play for interview rehearsal
└── export.md                ← Artifact handoff
```

---

---

## Individual Skill Descriptions

[This section describes each skill in detail. For full documentation, see individual skill files.]

### 1. Session Resume

**File**: `.ai/skills/session-resume.md`

**Purpose**: Load session state at conversation start and display recovery context

**What it does**:
- Runs automatically at the beginning of every conversation
- Loads `session-state.md` from workspace root (creates from template if missing)
- Validates session integrity (stage 1-7, artifact exists, gate status valid)
- Displays recovery message showing current stage, artifact, gate status, latest decision, outstanding blockers
- Supports tool switching (same session continues across Claude, Copilot, Kiro, etc.)
- Provides diagnostics for troubleshooting session issues

**Invocation**:
- Automatic: Runs at conversation/session start (no user action needed)
- Manual: `/resume` (show recovery message again), `/resume --full` (show all fields), `/resume --diagnostics` (validate session)

**When to use**:
- Every conversation start (automatic)
- When returning to Product Foundry after a break
- When switching tools
- When unsure of current progress (run `/resume` to see context)

**Key responsibility**: Users always know where they are in the discovery process and can resume work seamlessly.

---

## Individual Skill Descriptions (Continued)

**File**: `.ai/skills/revise.md`

**Purpose**: Enable controlled artifact revision with vision alignment checks and cascade impact assessment

**What it does**:
- Opens previously locked artifacts (Stages 5–7) for revision based on implementation discovery
- Enforces Vision & Mission alignment checks (no conflicts with locked vision)
- Assesses cascade impact (identifies which downstream artifacts are affected)
- Tracks revision history (what changed, why, who approved it)
- Requires re-validation from relevant roles before re-locking
- Manages re-lock sequence (ensures parent artifacts re-lock before dependent artifacts)

**Invocation**:
- User command: `/revise [stage] [artifact]`
  - Example: `/revise stage-5 product-roadmap`
  - Example: `/revise stage-7 feature-checkout`
- Role invocation: `/business-owner -- "We need to revise the roadmap"`

**When to use**:
- **Implementation discovery** — Team discovers complexity not anticipated during planning
- **Market feedback** — User validation reveals different priorities than planned
- **Technical feasibility** — Risk surfaces during build that changes scope/timeline
- **Strategic pivot** — Business priorities shift mid-implementation

**Example workflow**:
```
Team discovers: "Infrastructure work is 2x longer than estimated"
→ /revise stage-5 product-roadmap
→ Update Q1 initiative: 2 weeks → 4 weeks
→ System checks: Does this align with Vision? (yes)
→ System identifies: Release Plan affected
→ /business-owner approves new timeline
→ Roadmap re-locked with revision tracked
→ Release Plan re-validated with new roadmap
```

**Key principles**:
- Revisions are **controlled and traceable** (never silent)
- Revisions are **validated** (re-validation required before re-lock)
- Revisions respect **Vision** (conflicts must be explicitly resolved)
- Revisions have **cascade awareness** (downstream artifacts identified and re-locked)
- Revisions are **audited** (all changes logged to DECISIONS.md at workspace root)

---

## Skill Invocation Patterns

### Pattern 1: Automatic (Invisible)

```
User types anything
→ Orchestrate routes to appropriate agent (invisible)
→ Manage Session updates context (silent)
→ Response includes session header
```

**User experience:** Feels seamless. The right expertise responds without user having to specify.

### Pattern 2: Explicit Command

```
User: /validate
→ Validate runs checklist on current artifact
→ Returns PASS or BLOCK with reasons
→ Suggests next action

User: /status
→ Status displays current context
→ Shows available roles and next steps

User: /business-case
→ Business Case generates or updates artifact
→ Ready for review
```

**User experience:** User has fine-grained control when needed.

### Pattern 3: Role Agent Invocation

```
User: /business-owner
→ Orchestrator routes to Business Owner role
→ Business Owner reviews current artifact
→ Provides feedback or approval

Behind scenes:
→ Business Owner may call Log Decision to record approval
→ May trigger Business Case skill if relevant
```

**User experience:** Brings in expertise at the right moment.

---

## Skill State & Persistence

### Files Skills Read/Write

| Skill | Reads | Writes | Updates |
|-------|-------|--------|---------|
| Orchestrate | session-state.md, current artifact | — | (implicit context) |
| Validate | current artifact, agentconfig.yaml | session-state.md | gate_status |
| Manage Session | session-state.md, templates/ | session-state.md | all session fields |
| Log Decision | current artifact | DECISIONS.md | decision audit trail |
| Status | session-state.md | — | (display only) |
| Business Case | all stage artifacts | business-case.md | new/updated business case |
| Export | current artifact(s) | PDF or markdown export | (files only, no state) |

### State Persistence Rules

1. **Every write updates session-state.md** — Session Manager ensures state is persisted
2. **Every major decision logged to DECISIONS.md** — Audit trail is append-only (never deleted)
3. **Git commit for each gate pass** — Commit message documents decision
4. **Business Case approval updates session-state** — business_case_approved flag prevents Stage 5 until set

---

## Error Handling by Skill

| Situation | Skill Handling |
|-----------|----------------|
| session-state.md missing | Manage Session creates from template, defaults to Stage 1 |
| Artifact path invalid | Validate reports: "Artifact not found at [path]. Check directory." |
| Gate requirements missing | Validate lists specific gaps + suggests unblock action |
| Business Case not approved | Validate blocks Stage 5 + suggests "/business-owner for approval" |
| Decision logging fails | Log Decision retries; if persistent, alerts user to manual log entry |
| Export format not supported | Export suggests alternatives (PDF ↔ markdown) |

---

## Integration with Personas

Skills and Personas work together:

- **Personas** bring expertise (what to think about)
- **Skills** operationalize workflows (how to execute)

Example:
```
User: "I need the designer's perspective"
→ Orchestrate routes to Designer persona
→ Designer reviews current artifact
→ Validate (skill) checks if design feedback was captured
→ Log Decision (skill) records design decision
```

---

## Quick Command Reference

**All user-invokable commands:**

| Command | Effect |
|---------|--------|
| `/resume` | Show session recovery message (or invoke manually anytime) |
| `/resume --full` | Show all session-state fields in detail |
| `/resume --diagnostics` | Validate session integrity and report issues |
| `/validate` | Check if current artifact meets exit criteria |
| `/status` | Show current stage, artifact, gate status, next steps |
| `/log-decision` | Manually capture a major decision |
| `/business-case` | Generate business case (Stage 4 mandatory; on-demand at any stage) |
| `/business-case-update` | Refresh business case with latest data |
| `/revise [stage] [artifact]` | Open locked artifact for revision (e.g., `/revise stage-5 product-roadmap`) |
| `/export` | Export artifact as markdown |
| `/export-pdf` | Export artifact as PDF |
| `/[role]` | Invoke role agent (e.g., `/designer`, `/eng-lead`, `/business-owner`) |
| `/[specialist]` | Invoke specialist agent (e.g., `/researcher`, `/hypothesis-validator`) |

---

## Extending Skills

To add a new skill:

1. Create `.ai/skills/[name].md` following the skill template structure
2. Document: Purpose, what it does, invocation method, integration points
3. Update this index with the new skill
4. Add to system-prompt if user-invokable (slash command)
5. Update ARCHITECTURE.md Skills Reference table

To modify a skill:

1. Update the skill file
2. If invocation changes, update system-prompt and this index
3. If it changes gate criteria, update validate.md
4. Document change in DECISIONS.md

---

## Notes

- Skills are **composable**: They work together (e.g., Validate calls Log Decision after gate pass)
- Skills are **idempotent**: Running a skill twice produces same result (safe to re-run)
- Skills are **tool-agnostic**: Same skill file works in Claude, Copilot, Kiro, or CLI
- Skills are **minimal**: Each does one thing well. No mega-skills.

