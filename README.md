# Product Foundry — VS Code Project

> **Validate your product idea before committing to any implementation — software or otherwise.**

Product Foundry is a structured discovery process that helps you identify whether a product is worth building — and define exactly what it should do — before any implementation investment is made. **Implementation doesn't always mean writing code.** It might mean building a software application, designing a service, creating a process, or assembling a team. Whatever form your solution takes, Product Foundry is agnostic to it. The process works the same way regardless.

Most failed products fail not because of poor execution, but because the wrong product was built. Product Foundry forces the hard questions upfront: Is the problem real? Is the user clearly defined? Does the proposed solution actually match the need? These questions are far cheaper to answer in discovery than after you've committed resources to a solution.

Only when discovery is complete — problem validated, vision locked, requirements specified — does implementation begin. This saves teams from investing time, money, and effort building something no one needs.

Product Foundry guides this discovery through **7 gated stages**. Each artifact moves through Draft → Review → Locked before the next stage opens. Feature Documents use BDD — every requirement is a testable Given/When/Then scenario ready to hand to whoever is responsible for delivery.

---

## � Why Product Foundry?

Implementation is expensive — whether that's writing software, hiring staff, building infrastructure, or redesigning a process. Committing to the wrong solution wastes that investment entirely. Product Foundry front-loads the discovery work so you only build what's validated, regardless of what "build" means for your context:

- **Stage 1–3** answer: *Is this the right problem, and do we understand it well enough to solve it?*
- **Stage 4** answers: *What is this product ultimately trying to achieve?*
- **Stage 5–6** answer: *What do we deliver first, and what does a successful release look like?*
- **Stage 7** answers: *Exactly how should each capability behave — in language the delivery team can act on immediately?*

The output is a complete, locked specification. Whoever is responsible for delivery — engineering, operations, a vendor, or an internal team — picks it up with no ambiguity and no need to revisit the brief mid-execution.

---

## 📖 The Problem with How Products Get Built

### The Waterfall Era

Traditional software delivery followed a **waterfall model**: gather all requirements upfront, design the full system, build everything, then test and release. On paper, this looked rigorous. In practice, it was catastrophic for products.

The core assumption of waterfall — that you can fully understand what users need before building anything — is almost always wrong. By the time a product reached users (often 12–24 months after requirements were written), the market had shifted, the users' needs had evolved, or the original problem statement turned out to be a symptom of a different, deeper problem. Teams had invested enormous resources building precisely what was specified — and precisely the wrong thing.

Waterfall's failure mode isn't laziness or poor engineering. It's that **certainty was assumed at the moment of least knowledge** — the very beginning of the project.

---

### The Agile Response

Agile emerged in the early 2000s as a direct rejection of waterfall's rigidity. Its core insight was correct: **requirements change, feedback is essential, and working software beats comprehensive documentation.** Break work into short cycles (sprints), involve users continuously, and adapt based on what you learn.

Agile solved a real problem. Teams became faster. Feedback loops shortened. Waste from long delivery cycles was eliminated.

But Agile introduced its own failure mode: **teams got very good at rapidly building the wrong thing.**

When there's no validated product direction before the first sprint begins, Agile's speed becomes a liability. Teams ship feature after feature — each Sprint Review looks productive — but the product drifts because no one agreed on what problem it was actually solving, who it was solving it for, or what success looks like. Pivots happen mid-sprint. Scope changes weekly. Engineers refactor work that was never grounded in a validated need. The backlog grows faster than it's delivered.

Agile fixed *how* products are built. It didn't fix *what* gets built.

---

### Where Product Foundry Fits

Product Foundry operates in the space **before** Agile — and before waterfall's requirements phase. It's not a delivery methodology. It's a **discovery methodology**.

The premise is simple: the cheapest time to change direction is before any implementation has started. A conversation costs nothing. A pivot mid-sprint costs a sprint. A pivot after 6 months of development costs 6 months.

Product Foundry runs discovery through 7 structured gates. Each gate asks a harder question than the last. By the time Stage 7 is complete, three things are true:

1. **The problem is validated** — not assumed. You have evidence the pain is real, the user is real, and the gap in existing solutions is real.
2. **The vision is locked** — every subsequent decision filters through it. Scope creep has a test: does this serve the vision, or not?
3. **Requirements are specification-complete** — BDD scenarios define exactly how each capability should behave, in language that's directly testable. Engineering (or any delivery team) picks this up and executes without needing to re-interpret intent.

Product Foundry doesn't replace Agile. It makes Agile work better by ensuring the first sprint starts with a validated, clearly defined product — not a hopeful assumption.

| | Waterfall | Agile | Product Foundry + Agile |
|--|-----------|-------|-------------------------|
| **Speed to first delivery** | Slow | Fast | Fast |
| **Adapts to change** | No | Yes | Yes |
| **Validates before building** | No | No | Yes |
| **Specification quality** | High but wrong | Low | High and validated |
| **Failure mode** | Builds wrong thing slowly | Builds wrong thing quickly | Surfaces wrong direction before building begins |

---

## 🚀 Quick Start

### 1. Open This Workspace

```
File → Open Folder → Select productManager folder
```

### 2. Start a Copilot Chat

Press `Ctrl+Shift+I` (or `Cmd+Shift+I` on Mac) to open Copilot Chat.

### 3. Begin Intake Protocol

Send this message:

```
I have a new product idea I want to develop. Can you help me through 
the Product Foundry discovery process? Let's start with the intake protocol.
```

Copilot will ask 5 structured questions to understand your idea.

### 4. Follow the 7 Stages

After intake, Copilot will guide you through:

1. **Stage 1: Idea Brief** — Problem, user, pain points
2. **Stage 2: Discovery & Research** — Validate assumptions, gather constraints
3. **Stage 3: Hypothesis** — Falsifiable thesis and success metrics
4. **Stage 4: Vision & Mission** — Guiding star for the product
5. **Stage 5: Product Roadmap** — Quarterly initiatives
6. **Stage 6: Release Plan** — Feature list with go/no-go criteria
7. **Stage 7: Feature Documents** — BDD scenarios ready for engineering

---

## 📁 Project Structure

```
ProductFoundry/
│
├── 📁 .github/                         ← Agent system configuration
│   ├── agentconfig.yaml                ← Master agent definitions
│   ├── 📁 agents/                      ← Agent instruction files
│   │   ├── orchestrator.*.agent.md     ← Main, Quality Gate, Session Manager
│   │   ├── specialist.*.agent.md       ← Researcher, Hypothesis, Vision
│   │   └── role.*.agent.md             ← Product Lead, Eng Lead, Designer, etc.
│   ├── 📁 prompts/                     ← Copilot Chat prompt integration
│   │   ├── orchestrator.*.prompt.md
│   │   ├── specialist.*.prompt.md
│   │   └── role.*.prompt.md
│   └── 📁 skills/                      ← Reusable skill modules
│       ├── validate/SKILL.md           ← Validation skill
│       └── log-decision/SKILL.md       ← Decision logging skill
│
├── 📁 .vscode/
│   ├── settings.json                  ← VS Code configuration
│   └── tasks.json                     ← Optional validation tasks
│
├── 📁 .product/                       ← Working data (state, decisions, templates)
│   ├── session-state.md               ← Current progress & context
│   ├── 📁 artifacts/                  ← Example artifacts (reference only)
│   │   └── EXAMPLE-stage-1-idea-brief.md
│   ├── 📁 decisions/                  ← Decision log (git history)
│   │   └── DECISIONS.md              ← All decisions logged here
│   ├── 📁 templates/                  ← Artifact templates (stages 1–7)
│   │   ├── stage-1-idea-brief-template.md
│   │   ├── stage-2-discovery-report-template.md
│   │   ├── stage-3-hypothesis-template.md
│   │   ├── stage-4-vision-mission-template.md
│   │   ├── stage-5-roadmap-template.md
│   │   ├── stage-6-release-plan-template.md
│   │   └── stage-7-feature-document-template.md
│   └── product-constitution.md        ← 6 governing principles
│
├── 📁 [idea-name]/                    ← Created when Stage 1 locks (one per product)
│   ├── idea-brief.md                  ← Stage 1 artifact
│   ├── discovery-report.md            ← Stage 2 artifact
│   ├── hypothesis.md                  ← Stage 3 artifact
│   ├── vision-mission.md              ← Stage 4 artifact
│   ├── product-roadmap.md             ← Stage 5 artifact
│   ├── release-plan.md                ← Stage 6 artifact
│   └── feature-[name].md             ← Stage 7 artifacts (one per feature)
│
└── README.md                          ← This file
```

---

## 🎯 How It Works

### Context Continuity

Copilot automatically reads `.product/session-state.md` to understand:
- Current stage (1-7)
- Active artifact
- Gate status (LOCKED / OPEN)
- Latest decision
- Outstanding blockers

**Update `.product/session-state.md` after each major decision.** Copilot will reference it in the next chat.

### Key Commands

Use slash commands to invoke agents and utilities:

```
/validate                      ← Check artifact readiness
/log-decision                  ← Capture major decisions
/status                        ← Show current stage and context
/researcher                    ← Stage 2: Interview synthesis
/eng-lead                      ← Technical perspective
/designer                      ← UX/design perspective
/business-owner                ← Strategic/business alignment
```

### Gate Enforcement

Copilot enforces progression rules:

- ❌ Can't create Roadmap until Vision is locked
- ❌ Can't create Release Plan until Roadmap is locked
- ❌ Can't create Feature Docs until Release Plan is locked

### Validation Checklists

Each artifact has a specific checklist. Copilot verifies before unlocking gates:

```
Artifact is REVIEW-ready. I've verified:
☑ Problem statement is specific
☑ Target user is clearly defined
☑ Core pain points are ranked
☑ No open questions blocking Discovery

Ready to LOCK this and move to Stage 2?
```

---

## 🤖 Agent System (13 Autonomous Agents)

Product Foundry includes a 13-agent system with specialized agents working together across your discovery process:

### Specialist Agents (Stages 2–7)

| Command | Agent | When to Use |
|---------|-------|------------|
| `/researcher` | Discovery Researcher | Stage 2: User interviews, competitive analysis |
| `/hypothesis-validator` | Hypothesis Validator | Stage 3: Falsifiability, SMART metrics |
| `/vision-alignment` | Vision Alignment | Stage 4: Vision crafting, mission definition |
| `/business-analyst` | Business Analyst | Stage 7: BDD scenarios, acceptance criteria |

### Role Agents (Professional Perspectives)

| Command | Role | Expertise | Active Stages |
|---------|------|-----------|---------|
| `/product-lead` | Product Lead | Strategy, market fit, user needs | 1, 2, 3, 4, 5, 7 |
| `/eng-lead` | Eng Lead | Technical feasibility, architecture | 2, 3, 5, 7 |
| `/designer` | Designer | UX, interaction design, accessibility | 2, 5, 7 |
| `/business-owner` | Business Owner | Strategic alignment, go/no-go decisions | 4, 5, 6 |

### Utility Agents (Quality & Tracking)

| Command | What It Does |
|---------|------------|
| `/validate` | Quality gate checklist (all stages) |
| `/log-decision` | Audit trail for major decisions |
| `/status` | Show current stage, gate status, context |
| `/export-agent` | Export artifacts (PDF, Jira epics, executive summary) |

### How to Invoke

Type a slash command in Copilot Chat:

```
/designer: Can we simplify the workflow for mobile?

/eng-lead: What's the technical risk here?

/validate
```

Each agent:
- Has stage-specific context
- Provides role-specific guidance
- Works in parallel with other agents
- Enforces gates before progression

---

## �️ Skills (Reusable Workflows)

Skills provide guided workflows for common tasks:

### Validate Skill (`/validate`)

Runs stage-specific quality checks:
- ✅ Checks completeness (all required sections)
- ✅ Validates content quality
- ✅ Identifies gaps
- ✅ Provides unblock paths

**Use when:** Before progressing to next stage, or debugging a blocked gate.

**See:** `.github/skills/validate/SKILL.md` or type `/validate` in Copilot Chat.

### Log Decision Skill (`/log-decision`)

Captures major product decisions in audit trail:
- ✅ Decision statement
- ✅ Rationale & alternatives
- ✅ Impact assessment
- ✅ Git-tracked in `.product/decisions/DECISIONS.md`

**Use when:** Making strategic choices, finalizing scope, go/no-go decisions.

**See:** `.github/skills/log-decision/SKILL.md` or type `/log-decision` in Copilot Chat.

### Status Skill (`/status`)

Shows current session context:
- ✅ Current stage and gate status
- ✅ Active artifact and latest decision
- ✅ Outstanding blockers

**Use when:** Resuming a session, checking progress, or before calling `/validate`.

**See:** `.github/skills/status/SKILL.md` or type `/status` in Copilot Chat.

---

## 📋 Typical Workflow

### Session 1: Intake + Stage 1

```
You: "I have an idea for a reporting tool."
↓
Copilot: "Great! Let's do intake. [5 questions]"
↓
You: [Answer questions]
↓
Copilot: Creates Stage 1: Idea Brief
↓
Copilot: /validate → Gate: OPEN ✅
↓
You: "Ready to move to Stage 2"
```

### Session 2: Stage 2 (Discovery) — Parallel Agent Execution

```
You: Ready for Stage 2
↓
Copilot: (Loads .product/session-state.md) → Stage 2: Discovery Report
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
- **Copilot Chat position** (side panel vs. inline)
- **File associations** (which files trigger markdown mode)

### Session State

Edit `.product/session-state.md` manually to:

- Update stage/gate status
- Log decisions
- Track outstanding blockers
- Manage timeline

Copilot will read these updates in the next chat.

---

## 📊 Artifact Validation

### Idea Brief Validation

```
Copilot checks:
☑ Problem is specific (1–2 sentences)
☑ Target user is defined with context
☑ 3 pain points documented
☑ Initial scope is defined
☑ Open questions for discovery exist
```

### Discovery Report Validation

```
Copilot checks:
☑ User needs are validated (not hypothesized)
☑ Competitive landscape has 2+ solutions + gaps
☑ Assumptions are risk-rated
☑ Eng Lead constraints documented
☑ Designer constraints documented
```

### Feature Document Validation

```
Copilot checks:
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

### Copilot doesn't remember context

**Problem:** Copilot asks you the same questions again or forgets what stage you're on.

**Solution:** Update `.product/session-state.md` with current stage, artifact, and gate status. Copilot reads this in the next chat.

### Gate blocked when it shouldn't be

**Problem:** Copilot won't let you move forward.

**Solution:** Check the validation checklist in the artifact. Copilot will tell you what's missing. Fix the gap, then ask again: "Is this ready to lock now?"

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

### Gate Status

- **LOCKED** — Exit criteria not yet met; can't advance
- **OPEN** — All criteria met; ready for next stage
- **BYPASSED** — User chose to skip (rare)

### Roles

Introduced when their expertise is needed:

- **Stage 1:** PM only
- **Stage 2:** +Eng Lead, +Designer
- **Stage 4:** +Business Owner (for Vision alignment)
- **Stage 5–6:** All roles review
- **Stage 7:** +Business Analyst (leads BDD)

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

- **System Prompt:** See `.github/copilot-instructions.md` (complete rules, 7 stages)
- **Agent System:** See `.github/agentconfig.yaml` (master definitions)
- **Agent Instructions:** See `.github/agents/` (individual agent files — 13 agents)
- **Prompts:** See `.github/prompts/` (Copilot Chat slash command integration)
- **Validation Skill:** Type `/validate` or see `.github/skills/validate/SKILL.md`
- **Decision Logging Skill:** Type `/log-decision` or see `.github/skills/log-decision/SKILL.md`
- **Status Skill:** Type `/status` or see `.github/skills/status/SKILL.md`
- **Artifact Templates:** See `.product/templates/` (stages 1–7)
- **Governing Principles:** See `.product/product-constitution.md`

---

## 📞 Support

Ask Copilot or invoke an agent:

```
/validate                          ← Check artifact readiness
/status                            ← Show current stage & context
/product-lead: [question]          ← Product strategy
/eng-lead: [question]              ← Technical perspective
/designer: [question]              ← UX perspective
/business-owner: [question]        ← Strategic alignment
/business-analyst: [question]      ← BDD scenarios & acceptance criteria
/log-decision                      ← Capture major decisions
```

Each agent has full system context and will answer based on your current stage and artifact.

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

1. **Open the workspace** in VS Code
2. **Press `Ctrl+Shift+I`** to start Copilot Chat
3. **Send:** "I have a product idea. Let's start the intake protocol."
4. **Follow Copilot through 7 stages**
5. **Commit artifacts to git** as gates unlock
6. **Hand locked Feature Documents to engineering** when complete

Good luck! 🚀
