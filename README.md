<div align="center">
  <h1>🔥 Product Foundry</h1>
  <h3><em>Build the right thing. Before building anything.</em></h3>
</div>

<p align="center">
  <strong>An AI-guided discovery framework that takes a raw idea through validation, hypothesis, vision, and clarity your engineering team can build from.</strong>
</p>

<p align="center">
  <em>Drop-in for GitHub Copilot, Claude, Kiro, or any AI assistant that can read files and follow structured prompts.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/release-latest-orange" alt="Latest Release">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-brightgreen" alt="License: CC BY-NC-SA 4.0">
  </a>
</p>

## 📑 Table of Contents

- [🤔 What is Product Foundry?](#-what-is-product-foundry)
- [👥 Who is this for?](#-who-is-this-for)
- [🤖 Supported AI Tools](#-supported-ai-tools)
- [🚀 Quick Start](#-quick-start)
- [🎯 How It Works](#-how-it-works)
- [🤖 Agent System](#-agent-system-13-autonomous-agents)
- [🛠️ Skills](#️-skills-reusable-workflows)
- [📋 Typical Workflow](#-typical-workflow)
- [🔧 Configuration](#-configuration)
- [📊 Artifact Validation](#-artifact-validation)
- [🗂️ Working with Git](#️-working-with-git)
- [🚨 Troubleshooting](#-troubleshooting)
- [📚 Key Concepts](#-key-concepts)
- [🎓 Learning Resources](#-learning-resources)
- [✅ Success Metrics](#-success-metrics)
- [📝 Next Steps](#-next-steps)

## 🤔 What is Product Foundry?

Product Foundry is a process designed to validate and refine product ideas before any significant investment. It helps teams ensure a product is worth building and clarifies what the product should do, addressing the question of value before execution begins.

The process runs through **7 gated stages**: Idea Brief → Discovery Report → Hypothesis → Vision & Mission → Roadmap → Release Plan → Feature Documents. Each artifact moves through Draft → Review → Locked before the next stage opens. Feature Documents use Behavior Driven Development (BDD) — every requirement is a testable Given/When/Then scenario ready to hand directly to the delivery team.

**Why does this matter?** See [Why Product Foundry](./WHY-PRODUCT-FOUNDRY.md) for the full argument about what's broken in how products get built today.

---

## 👥 Who is this for?

Product Foundry is designed for:

- **Product Managers** who need to validate ideas before committing resources
- **Founders** who want to de-risk product decisions before building
- **Engineering Leads** who are tired of building features that never ship or get used
- **Product Teams** who need a shared language for discovery and specification
- **Anyone** who's ever built the wrong thing and wants to avoid doing it again

If you've ever shipped a feature only to realize the problem wasn't validated, the scope wasn't clear, or the team had different interpretations of "done" — this is for you.

---

## 🤖 Supported AI Tools

Product Foundry works with any AI assistant that can:
- Read files from your workspace
- Follow structured prompts and instructions
- Maintain context across conversations

### Tested with:

**GitHub Copilot** (VS Code)
- Native integration via `.github/` configuration
- Slash commands for agent invocation
- Automatic context loading from `.ai/session-state.md`

**Kiro** (VS Code)
- Similar to GitHub Copilot setup
- Can read steering files and agent configurations
- Supports file-based context management

### Should work with:

**Claude** (via Claude Desktop or API)
- Use project knowledge to load `.ai/` folder
- Reference agent files manually or via MCP
- Copy/paste prompts from `.ai/agents/` as needed

**Other AI Assistants**
- Load `.ai/system-prompt.md` as system prompt
- Reference agent files in `.ai/agents/` for role-specific guidance
- Manually update `.ai/session-state.md` to maintain context

---

## 🚀 Quick Start

### 1. Open This Workspace

```
File → Open Folder → Select productFoundry folder
```

### 2. Start Your AI Assistant

**For GitHub Copilot:**
Press `Ctrl+Shift+I` (or `Cmd+Shift+I` on Mac) to open GitHub Copilot Chat.

**For Claude:**
Open Claude Desktop and add this folder as a project, or start a new conversation and reference the workspace files.

**For Kiro:**
Open Kiro chat panel in VS Code.

**For Other Tools:**
Open your AI assistant and ensure it has access to read files from this workspace.

### 3. Begin Intake Protocol

Send this message:

```
I have a new product idea I want to develop. Can you help me through 
the Product Foundry discovery process? Let's start with the intake protocol.
```

Your AI assistant will ask 5 structured questions to understand your idea.

> **Note:** If your AI assistant doesn't automatically load the context, you may need to:
> - Reference `.ai/system-prompt.md` explicitly
> - Point it to `.ai/session-state.md` for current progress
> - Load agent files from `.ai/agents/` as needed

---

## 📁 Project Structure

```
ProductFoundry/
│
├── 📁 .ai/                                ← AI configuration (tool-agnostic)
│   ├── system-prompt.md                   ← Core instructions
│   ├── session-state.md                   ← Current progress & context
│   ├── product-constitution.md            ← 6 governing principles
│   ├── 📁 agents/                         ← 8 role-based agents
│   │   ├── business-analyst.md
│   │   ├── business-owner.md
│   │   ├── designer.md
│   │   ├── eng-lead.md
│   │   ├── hypothesis-validator.md
│   │   ├── product-lead.md
│   │   ├── researcher.md
│   │   └── vision-alignment.md
│   ├── 📁 skills/                         ← 5 procedural workflows
│   │   ├── export.md
│   │   ├── log-decision.md
│   │   ├── manage-session.md
│   │   ├── orchestrate.md
│   │   ├── status.md
│   │   └── validate.md
│   └── 📁 workflows/                      ← Stage-specific workflows
│       ├── stage-1.workflow.md
│       └── ... (stages 2-7)
│
├── 📁 .github/                            ← GitHub Copilot specific
│   ├── agentconfig.yaml                   ← Agent definitions (references .ai/)
│   ├── README.md                          ← Points to .ai/ for content
│   └── 📁 prompts/                        ← Copilot slash commands
│       ├── orchestrator.*.prompt.md
│       ├── specialist.*.prompt.md
│       └── role.*.prompt.md
│
├── 📁 .vscode/
│   ├── settings.json                      ← VS Code configuration
│   └── tasks.json                         ← Optional validation tasks
│
├── 📁 .product/                           ← Working data (state, decisions, templates)
│   ├── 📁 artifacts/                      ← Example artifacts (reference only)
│   │   └── EXAMPLE-stage-1-idea-brief.md
│   ├── 📁 decisions/                      ← Decision log (git history)
│   │   └── DECISIONS.md                   ← All decisions logged here
│   └── 📁 templates/                      ← Artifact templates (stages 1–7)
│       ├── stage-1-idea-brief-template.md
│       ├── stage-2-discovery-report-template.md
│       ├── stage-3-hypothesis-template.md
│       ├── stage-4-vision-mission-template.md
│       ├── stage-5-roadmap-template.md
│       ├── stage-6-release-plan-template.md
│       └── stage-7-feature-document-template.md
│
├── 📁 [idea-name]/                        ← Created when Stage 1 locks (one per product)
│   ├── idea-brief.md                      ← Stage 1 artifact
│   ├── discovery-report.md                ← Stage 2 artifact
│   ├── hypothesis.md                      ← Stage 3 artifact
│   ├── vision-mission.md                  ← Stage 4 artifact
│   ├── product-roadmap.md                 ← Stage 5 artifact
│   ├── release-plan.md                    ← Stage 6 artifact
│   └── feature-[name].md                  ← Stage 7 artifacts (one per feature)
│
├── README.md                              ← This file
├── WHY-PRODUCT-FOUNDRY.md                 ← The case for discovery
└── LICENSE                                ← CC BY-NC-SA 4.0
```

---

## 🎯 How It Works

### Context Continuity

Your AI assistant reads `.ai/session-state.md` to understand:
- Current stage (1-7)
- Active artifact
- Gate status (LOCKED / OPEN)
- Latest decision
- Outstanding blockers

**Update `.ai/session-state.md` after each major decision.** Your AI assistant will reference it in the next chat.

### Gate Enforcement

The system enforces progression rules:

- ❌ Can't create Roadmap until Vision is locked
- ❌ Can't create Release Plan until Roadmap is locked
- ❌ Can't create Feature Docs until Release Plan is locked

---

## 🤖 Agent System (8 Agents + 5 Skills)

Product Foundry includes 8 role-based agents and 5 procedural skills working together across your discovery process. Agents are defined in `.ai/agents/` and skills in `.ai/skills/`.

### Specialist Agents (Stages 2–7)

| Command | Agent | When to Use |
|---------|-------|------------|
| `/researcher` or reference `researcher.md` | Discovery Researcher | Stage 2: User interviews, competitive analysis |
| `/hypothesis-validator` or reference `hypothesis-validator.md` | Hypothesis Validator | Stage 3: Falsifiability, SMART metrics |
| `/vision-alignment` or reference `vision-alignment.md` | Vision Alignment | Stage 4: Vision crafting, mission definition |

### Role Agents (Professional Perspectives)

| Command | Role | Expertise | Active Stages |
|---------|------|-----------|---------|
| `/product-lead` or reference `product-lead.md` | Product Lead | Strategy, market fit, user needs | 1, 2, 3, 4, 5, 7 |
| `/eng-lead` or reference `eng-lead.md` | Eng Lead | Technical feasibility, architecture | 2, 3, 5, 7 |
| `/designer` or reference `designer.md` | Designer | UX, interaction design, accessibility | 2, 5, 7 |
| `/business-owner` or reference `business-owner.md` | Business Owner | Strategic alignment, go/no-go decisions | 4, 5, 6 |
| `/business-analyst` or reference `business-analyst.md` | Business Analyst | BDD scenarios, acceptance criteria | 7 |

### Skills (Reusable Workflows)

| Command | What It Does |
|---------|------------|
| `/validate` or reference `validate.md` | Quality gate checklist (all stages) |
| `/log-decision` or reference `log-decision.md` | Audit trail for major decisions |
| `/status` or reference `status.md` | Show current stage, gate status, context |
| `/export` or reference `export.md` | Export artifacts (PDF, Jira epics, executive summary) |
| `/orchestrate` or reference `orchestrate.md` | Workflow routing and coordination |

### How to Invoke

**If your AI tool supports slash commands (GitHub Copilot, Kiro):**

```
/designer: Can we simplify the workflow for mobile?

/eng-lead: What's the technical risk here?

/validate
```

**If your AI tool doesn't support slash commands (Claude, others):**

```
Act as the Designer agent (see .ai/agents/designer.md). 
Can we simplify the workflow for mobile?

Act as the Eng Lead agent (see .ai/agents/eng-lead.md). 
What's the technical risk here?

Run the validate skill (see .ai/skills/validate.md).
```

Each agent:
- Has stage-specific context
- Provides role-specific guidance
- Works in parallel with other agents
- Enforces gates before progression

---

## 🛠️ Skills (Reusable Workflows)

Skills provide guided workflows for common tasks:

### Validate Skill (`/validate`)

Runs stage-specific quality checks:
- ✅ Checks completeness (all required sections)
- ✅ Validates content quality
- ✅ Identifies gaps
- ✅ Provides unblock paths

**Use when:** Before progressing to next stage, or debugging a blocked gate.

**See:** `.ai/skills/validate/SKILL.md` or invoke via `/validate` (if supported) or by asking your AI assistant to "run the validate skill".

### Log Decision Skill (`/log-decision`)

Captures major product decisions in audit trail:
- ✅ Decision statement
- ✅ Rationale & alternatives
- ✅ Impact assessment
- ✅ Git-tracked in `.product/decisions/DECISIONS.md`

**Use when:** Making strategic choices, finalizing scope, go/no-go decisions.

**See:** `.ai/skills/log-decision/SKILL.md` or invoke via `/log-decision` (if supported) or by asking your AI assistant to "log this decision".

### Status Skill (`/status`)

Shows current session context:
- ✅ Current stage and gate status
- ✅ Active artifact and latest decision
- ✅ Outstanding blockers

**Use when:** Resuming a session, checking progress, or before calling `/validate`.

**See:** `.ai/skills/status/SKILL.md` or invoke via `/status` (if supported) or by asking your AI assistant to "show current status".

---

## 📋 Typical Workflow

### Session 1: Intake + Stage 1

```
You: "I have an idea for a reporting tool."
↓
AI Assistant: "Great! Let's do intake. [5 questions]"
↓
You: [Answer questions]
↓
AI Assistant: Creates Stage 1: Idea Brief
↓
AI Assistant: /validate → Gate: OPEN ✅
↓
You: "Ready to move to Stage 2"
```

### Session 2: Stage 2 (Discovery) — Parallel Agent Execution

```
You: Ready for Stage 2
↓
AI Assistant: (Loads .product/session-state.md) → Stage 2: Discovery Report
↓
You: /researcher: interview synthesis
     (simultaneously: /eng-lead: technical constraints?)
     (simultaneously: /designer: UX implications?)
↓
All 3 agents respond in parallel
↓
You: /validate → Review all gaps
↓
You: /log-decision: Document key findings
↓
You: "Ready for Stage 3" → Move to Stage 3
```

### Sessions 3–7: Iterate Through Stages

Each stage invokes relevant agents:
- **Stage 3:** Hypothesis Validator + Eng Lead
- **Stage 4:** Vision Alignment + Business Owner (approval gate)
- **Stage 5:** Researcher + Eng Lead + Designer + Business Owner (parallel)
- **Stage 6:** Business Owner (go/no-go decision)
- **Stage 7:** Business Analyst (leads BDD) + Eng Lead + Designer (reviews)

### Final: Hand to Engineering

```
✅ All Feature Documents LOCKED
✅ Vision gates all decisions
✅ BDD scenarios are specification-complete
↓
/export-agent → Send to engineering team
```

---

## 🔧 Configuration

### VS Code Settings

Edit `.vscode/settings.json` to customize:

- **Editor font size/line height** for comfortable reading
- **Word wrap** for markdown
- **AI assistant chat position** (side panel vs. inline, if applicable)
- **File associations** (which files trigger markdown mode)

### Session State

Edit `.product/session-state.md` manually to:

- Update stage/gate status
- Log decisions
- Track outstanding blockers
- Manage timeline

Your AI assistant will read these updates in the next chat.

---

## 📊 Artifact Validation

### Idea Brief Validation

```
AI Assistant checks:
☑ Problem is specific (1–2 sentences)
☑ Target user is defined with context
☑ 3 pain points documented
☑ Initial scope is defined
☑ Open questions for discovery exist
```

### Discovery Report Validation

```
AI Assistant checks:
☑ User needs are validated (not hypothesized)
☑ Competitive landscape has 2+ solutions + gaps
☑ Assumptions are risk-rated
☑ Eng Lead constraints documented
☑ Designer constraints documented
```

### Feature Document Validation

```
AI Assistant checks:
☑ Minimum 3 user stories present (happy path, edge case, error/failure)
☑ Each story has "As a / I want / So that" format
☑ Jira fields populated (Summary, Type, Priority, Labels) on each story
☑ "Then" clauses in Gherkin are observable/testable (not vague)
☑ Vision check and Release check present on each story
☑ No story depends on another running first
☑ Acceptance criteria summary derived from "Then" clauses
```

---

## 🗂️ Working with Git

### Commit Artifacts As You Complete Them

All artifacts for a product live in a single directory named after the idea (kebab-case):

```
git add [idea-name]/idea-brief.md
git commit -m "Stage 1: Idea Brief locked"

git add [idea-name]/
git commit -m "Stage 7: All Feature Documents locked — specification complete"
```

### View Decision History

```
git log --oneline [idea-name]/

# Output:
abc1234 Stage 7: feature-report-generation locked
def5678 Stage 6: Release Plan locked
ghi9012 Stage 5: Roadmap locked
...
```

### Sprint-Based Workflows

Tag stage completions:

```
git tag -a stage-1-complete -m "Idea Brief validated and locked"
git tag -a stage-4-complete -m "Vision & Mission approved by business owner"
```

---

## 🚨 Troubleshooting

### AI assistant doesn't remember context

**Problem:** Your AI assistant asks you the same questions again or forgets what stage you're on.

**Solution:** Update `.ai/session-state.md` with current stage, artifact, and gate status. Explicitly reference this file in your next message if needed.

### Gate blocked when it shouldn't be

**Problem:** Your AI assistant won't let you move forward.

**Solution:** Check the validation checklist in the artifact. Ask your AI assistant what's missing. Fix the gap, then ask again: "Is this ready to lock now?"

### Artifact is incomplete

**Problem:** You're stuck on a section.

**Solution:** Type `/validate` to see what's required for this stage. Update the artifact, then validate again.

### Need role perspective?

**Problem:** You want input from Eng Lead, Designer, or Business Owner.

**Solution:** Type `/eng-lead`, `/designer`, or `/business-owner` with your question. Each role has stage-specific guidance.

---

## 📚 Key Concepts

### Artifact Lifecycle

- **DRAFT** — You're actively building it
- **REVIEW** — Complete enough for feedback
- **LOCKED** — Validated and gates the next stage

### User Stories

Every requirement is a Jira-ready user story with Gherkin acceptance criteria:

```gherkin
As a [role], I want [capability], so that [benefit].

Scenario: [Descriptive name]
  Given [realistic starting state]
  When  [user action or system event]
  Then  [observable, testable outcome]
```

Not vague. Not aspirational. **Testable and Jira-exportable.** Each story must validate the Vision and Release Plan scope. The Jira fields block (Summary, Type, Priority, Story Points, Labels) is included on each story for direct copy-paste into Jira.

---

## 🎓 Learning Resources

- **Why Product Foundry:** See [WHY-PRODUCT-FOUNDRY.md](./WHY-PRODUCT-FOUNDRY.md) — the case for why discovery matters
- **AI Configuration:** See `.ai/README.md` — overview of agents, skills, and workflows
- **System Prompt:** See `.ai/system-prompt.md` (complete rules, 7 stages)
- **Agent System:** See `.github/agentconfig.yaml` (master definitions for GitHub Copilot)
- **Agent Instructions:** See `.ai/agents/` (8 agent files with simple names)
- **Skills:** See `.ai/skills/` (5 procedural workflow files)
- **Prompts:** See `.github/prompts/` (GitHub Copilot slash command integration)
- **Artifact Templates:** See `.product/templates/` (stages 1–7)
- **Governing Principles:** See `.ai/product-constitution.md`

---

## ✅ Success Metrics

You'll know this is working when:

- ✅ You move from Stage 1 → 7 in 4–6 weeks
- ✅ Decisions are locked in artifacts (git history proves it)
- ✅ Feature Documents are specification-complete (no guess work for engineering)
- ✅ BDD scenarios are testable (not "the feature works")
- ✅ Vision filters all decisions (you automatically reject scope creep)

---

## 📝 Next Steps

1. **Open the workspace** in your editor (VS Code recommended)
2. **Start your AI assistant** (GitHub Copilot, Claude, Kiro, or other)
3. **Send:** "I have a product idea. Let's start the intake protocol."
4. **Follow your AI assistant through 7 stages**
5. **Commit artifacts to git** as gates unlock
6. **Hand locked Feature Documents to your delivery team** when complete

Good luck! 🚀
