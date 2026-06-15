<div align="center">
  <h1>🔥 Product Foundry</h1>
  <h3><em>Build the right thing. Before building anything.</em></h3>
</div>

<p align="center">
  <strong>You've shipped features nobody used. The team built something you didn't intend. The real problem was never uncovered - because there was no discovery phase.</strong>
</p>

<p align="center">
  Product Foundry is a structured discovery framework that runs <strong>before the first sprint</strong>. It takes a raw idea through seven gated stages — validation, hypothesis, vision, roadmap — and ends with features specified just enough to hand directly to a delivery team. No interpretation required.
</p>

<p align="center">
It works with GitHub Copilot, Claude, Kiro, or any AI assistant that can read files.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/release-latest-orange" alt="Latest Release">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-brightgreen" alt="License: CC BY-NC-SA 4.0">
  </a>
</p>

## How It Works

Each stage produces a locked artifact. The next stage can't open until the previous one is locked. No skipping.

```
Idea Brief → Discovery → Hypothesis → Vision & Mission
    → Roadmap → Release Plan → Features
```

Every feature spec is written as testable scenarios — Jira-ready user stories that any engineer can act on without asking clarifying questions.

**See the full argument for why this matters:** [WHY-PRODUCT-FOUNDRY.md](./WHY-PRODUCT-FOUNDRY.md)

---

## Quick Start

### 1. Create a workspace directory and initialize

```bash
mkdir my-product-workspace
cd my-product-workspace
npx product-foundry
```

This installs the Product Foundry framework files into your workspace.

### 2. Open the workspace

Open the folder in VS Code (or your preferred editor).

### 3. Start your AI assistant

- **GitHub Copilot:** `Ctrl+Shift+I` / `Cmd+Shift+I`
- **Claude:** Add the folder as a project, or reference `.ai/system-prompt.md`
- **Kiro:** Open the Kiro chat panel
- **Other:** Load `.ai/system-prompt.md` as your system prompt

### 4. Start the intake

Send a message to get started. Your AI assistant will introduce itself and begin the intake.

**Here's what that looks like:**

```
You: Hello

AI:  I'm Product Foundry. Let me understand the groundwork first. Five questions:
     1. What's the core problem you're solving?
     2. Who experiences this problem?
     3. What do they do instead today?
     4. Why now?
     5. What's your role in this?

You: [Answer the five questions]

AI:  Let me confirm what I heard: Problem: [summary] / User: [profile]
     / Workaround: [today's solution] / Urgency: [why now] / Role: [yours]
     Is that accurate?

You: Yes, let's go.

AI:  ── Stage 1/7: Idea Brief │ Gate: LOCKED 🔒 ──
     Let's draft your Idea Brief...
```

---

## Persona System

13 specialized personas join at the stages where their expertise is genuinely needed — not all at once upfront. Personas are organized into three categories: Orchestrators (routing and workflow), Specialists (discovery expertise), Roles (stakeholder perspectives), and Utilities (operations).

| Persona | Type | Active Stages | What they contribute |
|---------|------|--------------|----------------------|
| `product-lead` | Role | 1–7 | Strategy, market fit, prioritization |
| `eng-lead` | Role | 2, 5, 7 | Technical feasibility, architecture risks |
| `designer` | Role | 2, 6, 7 | UX, accessibility, mobile constraints |
| `business-owner` | Role | 4, 5, 6 | Strategic alignment, go/no-go decisions |
| `business-analyst` | Role | 7 | Feature spec authorship, acceptance criteria |
| `researcher` | Specialist | 2 | User interviews, competitive analysis |
| `hypothesis-validator` | Specialist | 3 | Falsifiability testing, SMART metrics |
| `vision-alignment` | Specialist | 4 | Vision crafting, mission definition |
| `main-orchestrator` | Orchestrator | 1–7 | Workflow routing, context management (invisible) |
| `quality-gate` | Orchestrator | 1–7 | Stage exit criteria enforcement (invisible) |
| `session-manager` | Orchestrator | 1–7 | Session continuity, state persistence (invisible) |
| `decision-logger` | Utility | 1–7 | Audit trail capture, decision logging |
| `export-agent` | Utility | 1–7 | Artifact handoff and PDF export |

**Core skills** (available all stages):

| Skill | What it does |
|-------|-------------|
| `/session-resume` | Load session state at conversation start and display recovery context |
| `/validate` | Runs the stage-specific quality checklist and blocks progression if criteria aren't met |
| `/log-decision` | Captures decisions to a git-tracked audit trail (`DECISIONS.md` at the workspace root) |
| `/status` | Shows current stage, gate status, and blockers (from `session-state.md` at the workspace root) |
| `/business-case` | Generates one-page business case for investment decisions (mandatory at Stage 4; on-demand anytime) |
| `/revise [stage] [artifact]` | Opens locked artifacts (Stages 5-7) for revision with Vision alignment checks and cascade impact assessment |
| `/manage-session` | Auto-updates session state after major decisions (invisible, handles persistence) |
| `/export` | Generates PDFs, markdown exports, executive summaries |

**Specialized skills** (Stage 2-7, on-demand):

| Skill | What it does |
|-------|-------------|
| `/value-stream-map` or `/vsm` | Visualize workflow (current/future state) with process metrics and bottleneck analysis |
| `/write-features` | SAFe-based feature decomposition from Release Plan |
| `/write-stories` | Persona-driven BDD story authoring with acceptance criteria (Stage 7) |
| `/write-epics` | Portfolio epic planning and decomposition (Stage 5) |
| `/simulate-user` or `/rehearsal` | Role-play target user for interview practice and prototype feedback (Stage 2.3 or on-demand) |

**Slash commands work natively in GitHub Copilot and Kiro.** For Claude or other tools, reference the persona file directly:

```
Act as the Eng Lead (see .ai/personas/role.eng-lead.md).
What are the technical risks in this hypothesis?
```

**Full persona and skill documentation**: See `.ai/ARCHITECTURE.md` for the complete personas table, skill reference, and stage workflows.

---

## File Layout

All configuration is tool-agnostic and lives in `.ai/`. Two files persist progress and decisions at the **workspace root**, alongside your per-idea directories:

```
session-state.md            ← Current stage and context — update after each session (workspace root)
DECISIONS.md                ← Git-tracked decision log, including every stage gate pass (workspace root)

.ai/
├── system-prompt.md          ← Core instructions (load this as your system prompt)
├── product-constitution.md   ← 6 governing principles
├── ARCHITECTURE.md           ← Complete system design documentation
├── personas/                 ← 13 persona definitions
├── skills/                   ← 14 procedural workflows (core + specialized)
├── workflows/                ← Stage-specific execution flows (stages 1–7)
└── templates/                ← Artifact templates for each stage, plus:
    ├── session-state-template.md  ← Template for session-state.md (workspace root)
    ├── decisions-template.md      ← Template for DECISIONS.md (workspace root)
    ├── business-case-template.md  ← Business case template
    └── [stage-templates]          ← One template per stage

[idea-name]/                  ← Created when Stage 1 locks (one directory per product)
├── idea-brief.md
├── discovery-report.md
├── hypothesis.md
├── vision-mission.md
├── business-case.md          ← Generated at Stage 4
├── product-roadmap.md
├── release-plan.md
└── feature-[name].md         ← One file per feature in the release plan
```

If `session-state.md` or `DECISIONS.md` don't exist yet, your AI assistant creates them from the templates in `.ai/templates/` the first time they're needed.

---

## Governing Principles

Product Foundry is governed by six principles documented in `.ai/product-constitution.md`. The short version:

1. **Process over preference** — Gates are never relaxed for convenience.
2. **Human judgment is sovereign** — The agent surfaces options. Humans make all decisions.
3. **Transparency over convenience** — Problems are named when they exist.
4. **Vision as the highest filter** — Once locked, Vision is the test for every downstream artifact.
5. **Roles at the right moment** — No role joins before their designated stage.
6. **Testability as the standard of done** — A feature spec is complete only when every acceptance criterion is independently verifiable.

---

## Contributing

Contributions are welcome. A few ways to get involved:

- **New agent definitions** — a role or specialist that fills a gap in the current system
- **Tool integrations** — making the framework work better with a specific AI assistant
- **Stage templates** — improvements to the artifact templates in `.ai/templates/`
- **Real-world stage artifacts** — anonymized examples of completed stage outputs

Before contributing, read `.ai/product-constitution.md`. Every change to the system prompt is tested against the six principles. If a change would cause the agent to relax a gate, skip a confirmation, or silently drop a Vision conflict, it won't be accepted.

File issues and PRs on GitHub. For larger changes, open an issue first to discuss.

---

## License

[CC BY-NC-SA 4.0](LICENSE) — free to use, adapt, and share with attribution. Not for commercial use.
