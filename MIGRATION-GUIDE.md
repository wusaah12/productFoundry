# Migration Guide: Tool-Agnostic Restructure

## What Changed

Product Foundry has been restructured to be tool-agnostic, allowing it to work with GitHub Copilot, Claude, Kiro, and other AI assistants.

## Directory Changes

### New Structure

```
.ai/                          ← NEW: Tool-agnostic AI configuration
├── system-prompt.md          ← Moved from .github/copilot-instructions.md
├── session-state.md          ← Moved from .product/session-state.md
├── product-constitution.md   ← Moved from .product/product-constitution.md
├── agents/                   ← Moved from .github/agents/
├── skills/                   ← Moved from .github/skills/
└── workflows/                ← Moved from .product/agent-workflows/
```

### Updated Structure

```
.github/                      ← GitHub Copilot specific only
├── agentconfig.yaml          ← Updated to reference .ai/ paths
├── README.md                 ← NEW: Points to .ai/ for content
└── prompts/                  ← Unchanged (slash commands)

.product/                     ← Working data only
├── artifacts/                ← Unchanged
├── decisions/                ← Unchanged
└── templates/                ← Unchanged
```

## File Path Changes

| Old Path | New Path |
|----------|----------|
| `.github/copilot-instructions.md` | `.ai/system-prompt.md` |
| `.github/agents/*.agent.md` | `.ai/agents/*.agent.md` |
| `.github/skills/*/` | `.ai/skills/*/` |
| `.product/agent-workflows/*.workflow.md` | `.ai/workflows/*.workflow.md` |
| `.product/session-state.md` | `.ai/session-state.md` |
| `.product/product-constitution.md` | `.ai/product-constitution.md` |

## Configuration Updates

### GitHub Copilot

The `.github/agentconfig.yaml` file has been updated to reference the new `.ai/` paths. No action needed for GitHub Copilot users.

### Claude

If you were using Claude with project knowledge:
- **Before:** Load `.github/` and `.product/` folders
- **After:** Load `.ai/` folder (contains all AI configuration)

### Kiro

If you were using Kiro:
- **Before:** Reference `.github/agents/` for steering
- **After:** Reference `.ai/agents/` for steering

### Other AI Assistants

- **Before:** Load `.github/copilot-instructions.md` as system prompt
- **After:** Load `.ai/system-prompt.md` as system prompt

## Breaking Changes

### For GitHub Copilot Users

✅ **No breaking changes** - The `agentconfig.yaml` has been updated to reference the new paths automatically.

### For Custom Scripts/Tools

If you have custom scripts or tools that reference the old paths, update them:

```bash
# Old
cat .github/copilot-instructions.md
cat .product/session-state.md

# New
cat .ai/system-prompt.md
cat .ai/session-state.md
```

### For Documentation/Links

If you have documentation that links to specific files, update the paths:

```markdown
# Old
See `.github/agents/role.product-lead.agent.md`

# New
See `.ai/agents/role.product-lead.agent.md`
```

## Benefits of This Change

1. **Tool Agnostic** - Works with any AI assistant (GitHub Copilot, Claude, Kiro, etc.)
2. **Single Source of Truth** - All AI configuration in one place (`.ai/`)
3. **Clear Separation** - `.ai/` = shared, `.github/` = GitHub Copilot specific
4. **Better Organization** - Logical grouping of agents, skills, and workflows
5. **Easier Onboarding** - New AI tools can reference `.ai/` directly

## Migration Checklist

- [x] Move agent files to `.ai/agents/`
- [x] Move skill files to `.ai/skills/`
- [x] Move workflow files to `.ai/workflows/`
- [x] Move system prompt to `.ai/system-prompt.md`
- [x] Move session state to `.ai/session-state.md`
- [x] Move product constitution to `.ai/product-constitution.md`
- [x] Update `.github/agentconfig.yaml` to reference new paths
- [x] Create `.github/README.md` pointing to `.ai/`
- [x] Create `.ai/README.md` with overview
- [x] Update main README.md with new structure
- [x] Update all documentation references

## Questions?

See `.ai/README.md` for a complete overview of the new structure, or open an issue if you encounter any problems.
