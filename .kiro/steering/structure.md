# Project Structure

## Directory Layout

```
productFoundry/
├── .ai/                              ← AI configuration (tool-agnostic)
│   ├── README.md                     ← Overview of AI system
│   ├── system-prompt.md              ← Core system instructions (load this first)
│   ├── session-state.md              ← Current progress tracking
│   ├── product-constitution.md       ← 6 governing principles
│   ├── personas/                       ← 13 persona definitions
│   │   ├── orchestrator.*.md         ← Main, Quality Gate, Session Manager
│   │   ├── specialist.*.md           ← Researcher, Hypothesis, Vision
│   │   ├── role.*.md                 ← Product Lead, Eng Lead, Designer, etc.
│   │   └── utility.*.md              ← Decision Logger, Export Agent
│   ├── skills/                       ← Reusable workflow skills
│   │   ├── validate.md               ← Quality gate validation
│   │   ├── log-decision.md           ← Decision logging
│   │   ├── manage-session.md         ← Session management
│   │   ├── orchestrate.md            ← Orchestration logic
│   │   ├── status.md                 ← Status display
│   │   ├── export.md                 ← Export/handoff
│   │   ├── validate-guide.md         ← Validation guide
│   │   └── log-decision-guide.md     ← Decision logging guide
│   ├── workflows/                    ← Stage-specific workflows
│   │   ├── stage-1.workflow.md       ← Idea Brief workflow
│   │   ├── stage-2.workflow.md       ← Discovery workflow
│   │   ├── stage-3.workflow.md       ← Hypothesis workflow
│   │   ├── stage-4.workflow.md       ← Vision & Mission workflow
│   │   ├── stage-5.workflow.md       ← Roadmap workflow
│   │   ├── stage-6.workflow.md       ← Release Plan workflow
│   │   └── stage-7.workflow.md       ← Feature Specs workflow
│   └── templates/                    ← Artifact templates for each stage
│       ├── product-constitution-template.md
│       ├── stage-1-idea-brief-template.md
│       ├── stage-2-discovery-report-template.md
│       ├── stage-3-hypothesis-template.md
│       ├── stage-4-vision-mission-template.md
│       ├── stage-5-roadmap-template.md
│       ├── stage-6-release-plan-template.md
│       └── stage-7-feature-document-template.md
│
├── .product/                         ← User-created product artifacts
│   ├── DECISIONS.md                  ← Git-tracked decision audit trail
│
├── .github/                          ← GitHub Copilot integration
│   ├── agentconfig.yaml              ← Copilot configuration
│   ├── README.md                     ← GitHub integration guide
│   └── prompts/                      ← Slash command definitions
│       ├── orchestrator.*.prompt.md
│       ├── role.*.prompt.md
│       ├── specialist.*.prompt.md
│       └── utility.*.prompt.md
│
├── .kiro/                            ← Kiro-specific configuration
│   └── steering/                     ← Steering documents for AI assistants
│       ├── product.md                ← Product overview
│       ├── tech.md                   ← Tech stack and build system
│       └── structure.md              ← This file
│
├── .vscode/                          ← VS Code configuration (closed)
├── .git/                             ← Git repository (closed)
│
├── [idea-name]/                      ← Created per product idea (one per session)
│   ├── idea-brief.md                 ← Stage 1 artifact
│   ├── discovery-report.md           ← Stage 2 artifact
│   ├── hypothesis.md                 ← Stage 3 artifact
│   ├── vision-mission.md             ← Stage 4 artifact
│   ├── product-roadmap.md            ← Stage 5 artifact
│   ├── release-plan.md               ← Stage 6 artifact
│   └── feature-[name].md             ← Stage 7 artifacts (one per feature)
│
├── README.md                         ← Main project documentation
├── WHY-PRODUCT-FOUNDRY.md            ← Philosophy and rationale
├── REVISION_LOG.md                   ← Version history
├── package.json                      ← Node.js configuration
├── index.js                          ← CLI entry point
├── LICENSE                           ← CC-BY-NC-SA-4.0
└── .gitignore                        ← Git ignore rules
```

## Key Directories Explained

### `.ai/` — AI Configuration (Primary)

The heart of Product Foundry. Contains all tool-agnostic AI instructions:

- **system-prompt.md** — Load this as your system prompt in any AI assistant
- **session-state.md** — Tracks current stage and progress (update after each session)
- **product-constitution.md** — The 6 governing principles that guide all decisions
- **personas/** — 13 specialized personas (roles, specialists, orchestrators, utilities)
- **skills/** — Reusable workflows (validate, log-decision, status, export, etc.)
- **workflows/** — Stage-specific execution flows (one per stage, 1–7)
- **templates/** — Markdown templates for each stage's artifact

### `.product/` — User-Created Artifacts

- **DECISIONS.md** — Git-tracked audit trail of major product decisions
- **[idea-name]//** — One directory per product idea, containing stage artifacts and feature specs

### `.github/` — GitHub Copilot Integration

- **agentconfig.yaml** — Configuration for GitHub Copilot
- **prompts/** — Slash command definitions and agent prompts

### `.kiro/` — Kiro Integration

- **steering/** — Steering documents for Kiro and other AI assistants (this directory)

### `[idea-name]/` — Per-Product Workspace

Created when Stage 1 locks. One directory per product idea. Contains:

- Stage artifacts (idea-brief.md through release-plan.md)
- Feature specs (feature-[name].md, one per feature)

## File Naming Conventions

- **Markdown files:** kebab-case (e.g., `product-constitution.md`, `stage-1-idea-brief.md`)
- **Agent files:** `[type].[name].md` (e.g., `role.product-lead.md`, `specialist.researcher.md`)
- **Workflow files:** `stage-[number].workflow.md` (e.g., `stage-1.workflow.md`)
- **Feature specs:** `feature-[name].md` (e.g., `feature-user-authentication.md`)
- **Idea directories:** kebab-case (e.g., `mobile-app-idea`, `saas-platform`)

## How Files Relate

### Initialization Flow

1. User runs `npx product-foundry` in a new directory
2. CLI copies `.ai/`, `.product/`, and `.github/` into the workspace
3. User opens the folder in their AI assistant
4. AI loads `.ai/system-prompt.md` as the core instruction set
5. AI reads `.ai/session-state.md` to understand current progress
6. AI references `.ai/product-constitution.md` to understand governing principles
7. AI selects appropriate personas from `.ai/personas/` based on current stage
8. AI follows the stage workflow from `.ai/workflows/stage-[n].workflow.md`

### Artifact Creation Flow

1. AI uses the template from `.ai/templates/stage-[n]-*.md`
2. AI creates the artifact in `[idea-name]/stage-[n]-*.md`
3. AI updates `.ai/session-state.md` to reflect progress
4. Major decisions are logged to `.product/DECISIONS.md`

### Tool Integration

- **GitHub Copilot:** Uses `.github/agentconfig.yaml` to discover agents and workflows
- **Claude:** Loads `.ai/system-prompt.md` as project knowledge
- **Kiro:** References `.kiro/steering/` for guidance
- **Other tools:** Load `.ai/system-prompt.md` manually

## Important Notes

- **No build artifacts** — Everything is markdown and JSON. No compiled output.
- **Version control friendly** — All files are text-based and git-trackable.
- **Tool-agnostic** — Configuration works with any AI assistant.
- **Modular** — Each agent, skill, and workflow is independent and can be updated separately.
- **Extensible** — New agents, skills, and workflows can be added without modifying core files.
