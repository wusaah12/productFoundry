# Technology & Build System

## Tech Stack

**Runtime:** Node.js 18+

**Package Manager:** npm

**Primary Dependency:** adm-zip (for workspace setup and artifact packaging)

**License:** CC-BY-NC-SA-4.0 (Creative Commons — free to use and adapt with attribution, not for commercial use)

## Project Type

Product Foundry is a **configuration and workflow framework**, not a traditional application. It consists of:

- Markdown-based configuration files (system prompts, agent definitions, workflows)
- Templates for artifact generation
- Tool-agnostic AI integration (works with GitHub Copilot, Claude, Kiro, etc.)
- A Node.js CLI entry point for workspace initialization

## Build & Setup Commands

### Initialize a new Product Foundry workspace

```bash
mkdir my-product-workspace
cd my-product-workspace
npx product-foundry
```

This creates a new workspace with all necessary directories and templates.

### No build step required

Product Foundry is configuration-driven. There is no compilation, bundling, or build process. All files are markdown and JSON.

### No tests

This is a framework, not a library with unit tests. Quality is validated through:
- Manual review of agent definitions and workflows
- Validation against the six governing principles (see `.ai/product-constitution.md`)
- Real-world usage and feedback

## File Organization

### Configuration Files (`.ai/`)

- `system-prompt.md` — Core instructions for all AI assistants
- `session-state.md` — Current progress tracking (updated manually after each session)
- `product-constitution.md` — Six governing principles
- `agents/` — 13 agent definitions (roles, specialists, orchestrators, utilities)
- `skills/` — Reusable workflow skills
- `workflows/` — Stage-specific execution flows (stages 1–7)

### Templates (`.product/templates/`)

- `product-constitution-template.md`
- `stage-1-idea-brief-template.md` through `stage-7-feature-document-template.md`

### Artifacts (`.product/artifacts/`)

- Example completed stage artifacts
- Decision log (git-tracked)

### GitHub Integration (`.github/`)

- `agentconfig.yaml` — Configuration for GitHub Copilot integration
- `prompts/` — Slash command definitions and agent prompts

## Key Directories

```
.ai/                          ← AI configuration (tool-agnostic)
  ├── system-prompt.md
  ├── session-state.md
  ├── product-constitution.md
  ├── agents/                 ← 13 agent definitions
  ├── skills/                 ← Reusable workflows
  └── workflows/              ← Stage-specific flows

.product/                     ← Product templates and artifacts
  ├── templates/              ← Stage templates
  └── artifacts/              ← Examples and decision log

.github/                      ← GitHub Copilot integration
  ├── agentconfig.yaml
  └── prompts/                ← Slash command definitions

[idea-name]/                  ← Created per product idea
  ├── idea-brief.md
  ├── discovery-report.md
  ├── hypothesis.md
  ├── vision-mission.md
  ├── product-roadmap.md
  ├── release-plan.md
  └── feature-[name].md       ← One per feature
```

## Development Notes

- All configuration is **tool-agnostic** — designed to work with any AI assistant
- Markdown is the primary format for readability and version control
- JSON is used only for structured configuration (package.json, agentconfig.yaml)
- No external APIs or services required — everything is file-based
- The framework is designed to be **forked and adapted** for specific organizations

## Contributing

When modifying framework files:

1. Ensure changes align with the six principles in `.ai/product-constitution.md`
2. Test against the governing principles — gates should never be relaxed, human judgment should remain sovereign
3. Update relevant documentation
4. Submit PRs with clear rationale

See README.md for contribution guidelines.
