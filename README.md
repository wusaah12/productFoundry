<div align="center">
  <h1>🔥 Product Foundry</h1>
  <h3><em>Build the right thing. Before building anything.</em></h3>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/release-latest-orange" alt="Latest Release">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-brightgreen" alt="License: CC BY-NC-SA 4.0">
  </a>
</p>

---

You've shipped features nobody used. The team built different things because nobody agreed on the problem. The "discovery" was a two-hour meeting that produced a document few people read past the first page.

Product Foundry is a structured discovery framework that runs **before the first sprint**. It takes a raw idea through seven gated stages — validation, hypothesis, vision, roadmap — and ends with features specified precisely enough to hand directly to a delivery team. No interpretation required.

It works with GitHub Copilot, Claude, Kiro, or any AI assistant that can read files.

---

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

### 1. Clone and open the workspace

```bash
git clone https://github.com/wusaah12/productFoundry.git
```

Open the folder in VS Code (or your preferred editor).

### 2. Start your AI assistant

- **GitHub Copilot:** `Ctrl+Shift+I` / `Cmd+Shift+I`
- **Claude:** Add the folder as a project, or reference `.ai/system-prompt.md`
- **Kiro:** Open the Kiro chat panel
- **Other:** Load `.ai/system-prompt.md` as your system prompt

### 3. Start the intake

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

## Agent System

Eight role-based agents join at the stages where their perspective changes the output — not all at once upfront.

| Agent | Type | Active Stages | What they contribute |
|-------|------|--------------|----------------------|
| `product-lead` | Role | 1–7 | Strategy, market fit, prioritization |
| `eng-lead` | Role | 2, 3, 5, 7 | Technical feasibility, architecture risks |
| `designer` | Role | 2, 5, 7 | UX, accessibility, mobile constraints |
| `business-owner` | Role | 4, 5, 6 | Strategic alignment, go/no-go decisions |
| `business-analyst` | Role | 7 | Feature spec authorship, acceptance criteria |
| `researcher` | Specialist | 2 | User interviews, competitive analysis |
| `hypothesis-validator` | Specialist | 3 | Falsifiability testing, SMART metrics |
| `vision-alignment` | Specialist | 4 | Vision crafting, mission definition |

Five skills handle procedural tasks:

| Skill | What it does |
|-------|-------------|
| `/validate` | Runs the stage-specific quality checklist |
| `/log-decision` | Captures decisions to a git-tracked audit trail |
| `/status` | Shows current stage, gate status, and blockers |
| `/export` | Generates PDFs, Jira epics, executive summaries |

**Slash commands work natively in GitHub Copilot and Kiro.** For Claude or other tools, reference the agent file directly:

```
Act as the Eng Lead (see .ai/agents/eng-lead.md).
What are the technical risks in this hypothesis?
```

---

## File Layout

All configuration is tool-agnostic and lives in `.ai/`:

```
.ai/
├── system-prompt.md          ← Core instructions (load this as your system prompt)
├── session-state.md          ← Current stage and context — update after each session
├── product-constitution.md   ← 6 governing principles
├── agents/                   ← 8 agent definitions
├── skills/                   ← 5 procedural workflows
└── workflows/                ← Stage-specific execution flows (stages 1–7)

.product/
├── templates/                ← Artifact templates for each stage
└── decisions/DECISIONS.md    ← Git-tracked decision log

[idea-name]/                  ← Created when Stage 1 locks (one directory per product)
├── idea-brief.md
├── discovery-report.md
├── hypothesis.md
├── vision-mission.md
├── product-roadmap.md
├── release-plan.md
└── feature-[name].md         ← One file per feature in the release plan
```

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
- **Stage templates** — improvements to the artifact templates in `.product/templates/`
- **Real-world stage artifacts** — anonymized examples of completed stage outputs

Before contributing, read `.ai/product-constitution.md`. Every change to the system prompt is tested against the six principles. If a change would cause the agent to relax a gate, skip a confirmation, or silently drop a Vision conflict, it won't be accepted.

File issues and PRs on GitHub. For larger changes, open an issue first to discuss.

---

## License

[CC BY-NC-SA 4.0](LICENSE) — free to use, adapt, and share with attribution. Not for commercial use.