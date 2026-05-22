# Product Foundry AI Configuration Summary

## Quick Reference

### Agents (8) - Role-based personas
Located in `.ai/agents/`

**Specialists:**
- `researcher.md` - Stage 2 discovery and competitive analysis
- `hypothesis-validator.md` - Stage 3 hypothesis validation
- `vision-alignment.md` - Stage 4 vision and mission crafting

**Roles:**
- `product-lead.md` - Product strategy and metrics (Stages 1-7)
- `eng-lead.md` - Technical feasibility (Stages 2, 3, 5, 7)
- `designer.md` - UX and design (Stages 2, 5, 7)
- `business-owner.md` - Strategic alignment (Stages 4, 5, 6)
- `business-analyst.md` - BDD scenarios (Stage 7)

### Skills (5) - Procedural workflows
Located in `.ai/skills/`

- `orchestrate.md` - Workflow routing and coordination
- `validate.md` - Quality gate checks and validation
- `manage-session.md` - Session state management
- `log-decision.md` - Decision logging and audit trail
- `export.md` - Export artifacts and summaries

### Workflows (7) - Stage-specific
Located in `.ai/workflows/`

- `stage-1.workflow.md` - Idea Brief
- `stage-2.workflow.md` - Discovery Report
- `stage-3.workflow.md` - Hypothesis
- `stage-4.workflow.md` - Vision & Mission
- `stage-5.workflow.md` - Roadmap
- `stage-6.workflow.md` - Release Plan
- `stage-7.workflow.md` - Feature Document

## How to Use

### With GitHub Copilot
Use slash commands:
```
/product-lead: What's the market fit?
/validate
/log-decision
```

### With Claude/Kiro/Other AI
Reference files directly:
```
Act as the Product Lead (see .ai/agents/product-lead.md).
What's the market fit?

Run the validate skill (see .ai/skills/validate.md).
```

## File Locations

- **System Prompt:** `.ai/system-prompt.md`
- **Session State:** `.ai/session-state.md`
- **Product Constitution:** `.ai/product-constitution.md`
- **Agents:** `.ai/agents/*.md`
- **Skills:** `.ai/skills/*.md`
- **Workflows:** `.ai/workflows/*.workflow.md`

## Configuration

- **GitHub Copilot:** `.github/agentconfig.yaml`
- **Prompts (slash commands):** `.github/prompts/*.prompt.md`
- **Templates:** `.product/templates/*.md`
- **Decisions:** `.product/decisions/DECISIONS.md`

## Key Principles

1. **Agents = Personas** - Provide perspective and guidance
2. **Skills = Procedures** - Perform specific tasks
3. **Workflows = Stage-specific** - Define what happens in each stage
4. **Tool-agnostic** - Works with any AI assistant
5. **Single source of truth** - All configuration in `.ai/`
