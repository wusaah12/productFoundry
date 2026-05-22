# Product Foundry AI Configuration

This directory contains tool-agnostic AI configuration for Product Foundry. All AI assistants (GitHub Copilot, Claude, Kiro, etc.) reference these files.

## Directory Structure

```
.ai/
├── system-prompt.md              ← Core system instructions (all AI tools)
├── session-state.md              ← Current progress and context tracking
├── product-constitution.md       ← 6 governing principles
│
├── agents/                       ← Agent definitions (13 agents)
│   ├── orchestrator.*.md         ← Main, Quality Gate, Session Manager
│   ├── specialist.*.md           ← Researcher, Hypothesis, Vision
│   ├── role.*.md                 ← Product Lead, Eng Lead, Designer, etc.
│   └── utility.*.md              ← Decision Logger, Export Agent
│
├── skills/                       ← Reusable workflow skills
│   ├── validate/                 ← Quality gate validation
│   ├── log-decision/             ← Decision logging
│   └── status/                   ← Session status display
│
└── workflows/                    ← Stage-specific workflows
    ├── stage-1.workflow.md       ← Idea Brief
    ├── stage-2.workflow.md       ← Discovery Report
    └── ... (stages 3-7)
```

## Files

### `system-prompt.md`
The core system prompt that defines Product Foundry's 7-stage discovery process, rules, and behavior. All AI assistants should load this as their primary instruction set.

### `session-state.md`
Tracks current progress through the 7 stages:
- Current stage (1-7)
- Active artifact
- Gate status (LOCKED / OPEN)
- Latest decision
- Outstanding blockers

AI assistants read this file to maintain context across sessions.

### `product-constitution.md`
The 6 governing principles that guide all product decisions:
1. User-Centered
2. Evidence-Based
3. Iterative
4. Transparent
5. Collaborative
6. Outcome-Focused

## Agents

Product Foundry uses 13 specialized agents organized into 4 categories:

### Orchestrators (3)
- **Main Orchestrator** - Routes requests and coordinates workflow
- **Quality Gate** - Validates artifacts and enforces progression rules
- **Session Manager** - Maintains state across sessions

### Specialists (3)
- **Researcher** - Stage 2 discovery and competitive analysis
- **Hypothesis Validator** - Stage 3 hypothesis validation
- **Vision Alignment** - Stage 4 vision and mission crafting

### Roles (5)
- **Product Lead** - Product strategy and metrics
- **Eng Lead** - Technical feasibility and architecture
- **Designer** - UX and interaction design
- **Business Owner** - Strategic alignment and go/no-go
- **Business Analyst** - BDD scenarios and acceptance criteria

### Utilities (2)
- **Decision Logger** - Audit trail for major decisions
- **Export Agent** - Generate handoff documents

## Skills

Reusable workflows that can be invoked across stages:

- **validate** - Run stage-specific quality checks
- **log-decision** - Capture major product decisions
- **status** - Show current stage and context

## Workflows

Stage-specific workflows that define:
- Which agents are active
- What artifacts are created
- What gate checks must pass
- How to progress to the next stage

## Tool-Specific Configuration

### GitHub Copilot
- Uses `.github/agentconfig.yaml` to reference these files
- Slash commands defined in `.github/prompts/`
- Automatically discovers agents and workflows

### Claude
- Load `.ai/system-prompt.md` as project knowledge
- Reference agent files manually or via MCP
- Update `.ai/session-state.md` to maintain context

### Kiro
- Can read `.ai/` as steering files
- Reference agents and skills as needed
- Supports file-based context management

### Other AI Assistants
- Load `.ai/system-prompt.md` as system prompt
- Reference agent files in `.ai/agents/` for role-specific guidance
- Manually update `.ai/session-state.md` to track progress
