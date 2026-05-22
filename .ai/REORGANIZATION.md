# Agent & Skill Reorganization

## Summary

Reorganized agents and skills for clarity and simplicity:
- **Agents** = Role-based personas (conversational, provide perspective)
- **Skills** = Reusable workflows (procedural, perform tasks)

## Changes Made

### Agents (8 files)

**Role Agents (5):**
- `role.business-analyst.agent.md` → `business-analyst.md`
- `role.business-owner.agent.md` → `business-owner.md`
- `role.designer.agent.md` → `designer.md`
- `role.eng-lead.agent.md` → `eng-lead.md`
- `role.product-lead.agent.md` → `product-lead.md`

**Specialist Agents (3):**
- `specialist.hypothesis-validator.agent.md` → `hypothesis-validator.md`
- `specialist.researcher.agent.md` → `researcher.md`
- `specialist.vision-alignment.agent.md` → `vision-alignment.md`

### Skills (8 files)

**Moved from Agents:**
- `orchestrator.main-orchestrator.agent.md` → `orchestrate.md` (workflow orchestration)
- `orchestrator.quality-gate.agent.md` → `validate.md` (validation checklist)
- `orchestrator.session-manager.agent.md` → `manage-session.md` (state management)
- `utility.decision-logger.agent.md` → `log-decision.md` (logging procedure)
- `utility.export-agent.agent.md` → `export.md` (export procedure)

**Existing Skills (kept):**
- `status.md` (show current status)
- `validate-old.md` (old validation skill - can be merged/removed)
- `log-decision-old.md` (old decision logging - can be merged/removed)

## Rationale

### Why These Are Agents

**Agents provide perspective and guidance:**
- Business Analyst: Translates requirements into user stories
- Business Owner: Provides executive/strategic perspective
- Designer: Provides UX/design perspective
- Eng Lead: Provides technical perspective
- Product Lead: Provides product strategy perspective
- Hypothesis Validator: Validates hypotheses and metrics
- Researcher: Conducts discovery research
- Vision Alignment: Aligns vision with strategy

### Why These Are Skills

**Skills perform specific procedures:**
- Orchestrate: Routes requests and coordinates workflow
- Validate: Runs quality checklists and gate checks
- Manage Session: Loads/saves session state
- Log Decision: Captures decisions in audit trail
- Export: Generates handoff documents
- Status: Shows current stage and context

## File Naming Convention

**Before:**
- `[namespace].[name].agent.md` (e.g., `role.product-lead.agent.md`)

**After:**
- `[name].md` (e.g., `product-lead.md`)

**Benefits:**
- Simpler, cleaner names
- Easier to reference
- Less verbose
- Tool-agnostic (no `.agent.md` suffix)

## Directory Structure

```
.ai/
├── agents/                    ← 8 role-based personas
│   ├── business-analyst.md
│   ├── business-owner.md
│   ├── designer.md
│   ├── eng-lead.md
│   ├── hypothesis-validator.md
│   ├── product-lead.md
│   ├── researcher.md
│   └── vision-alignment.md
│
└── skills/                    ← 8 reusable workflows
    ├── export.md
    ├── log-decision.md
    ├── log-decision-old.md    ← Can be removed after merge
    ├── manage-session.md
    ├── orchestrate.md
    ├── status.md
    ├── validate.md
    └── validate-old.md        ← Can be removed after merge
```

## Next Steps

1. **Update `.github/agentconfig.yaml`** to reference new file names
2. **Update `.github/prompts/`** to reference new file names
3. **Merge old skill files** (`validate-old.md`, `log-decision-old.md`) into new ones
4. **Update README.md** with new agent/skill names
5. **Test with GitHub Copilot** to ensure slash commands still work

## Migration for Users

### GitHub Copilot

Slash commands will need to be updated in `.github/prompts/`:
- `/researcher` → references `.ai/agents/researcher.md`
- `/validate` → references `.ai/skills/validate.md`
- etc.

### Claude/Kiro/Other Tools

Reference files directly:
- "Act as the Product Lead (see `.ai/agents/product-lead.md`)"
- "Run the validate skill (see `.ai/skills/validate.md`)"

## Benefits

✅ **Clearer separation** between agents (personas) and skills (procedures)  
✅ **Simpler file names** - easier to reference and remember  
✅ **Flat structure** - no nested subdirectories for skills  
✅ **Tool-agnostic** - works with any AI assistant  
✅ **Better organization** - logical grouping by function
