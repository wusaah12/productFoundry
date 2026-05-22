# Changelog

## Version 3.0 - Tool-Agnostic Reorganization (May 2026)

### Major Changes

#### 1. Directory Restructure
- **NEW:** `.ai/` directory for tool-agnostic AI configuration
- **MOVED:** All agent files from `.github/agents/` to `.ai/agents/`
- **MOVED:** All skill files from `.github/skills/` to `.ai/skills/`
- **MOVED:** All workflow files from `.product/agent-workflows/` to `.ai/workflows/`
- **MOVED:** `session-state.md` from `.product/` to `.ai/`
- **MOVED:** `product-constitution.md` from `.product/` to `.ai/`
- **MOVED:** `copilot-instructions.md` from `.github/` to `.ai/system-prompt.md`

#### 2. Agent vs Skill Classification
- **Agents (8):** Role-based personas that provide perspective
  - `business-analyst.md`
  - `business-owner.md`
  - `designer.md`
  - `eng-lead.md`
  - `hypothesis-validator.md`
  - `product-lead.md`
  - `researcher.md`
  - `vision-alignment.md`

- **Skills (5):** Procedural workflows that perform tasks
  - `orchestrate.md` (was orchestrator.main-orchestrator)
  - `validate.md` (was orchestrator.quality-gate)
  - `manage-session.md` (was orchestrator.session-manager)
  - `log-decision.md` (was utility.decision-logger)
  - `export.md` (was utility.export-agent)

#### 3. File Naming Simplification
- **Before:** `[namespace].[name].agent.md` (e.g., `role.product-lead.agent.md`)
- **After:** `[name].md` (e.g., `product-lead.md`)

Benefits:
- Simpler, cleaner names
- Easier to reference
- Less verbose
- Tool-agnostic (no `.agent.md` suffix)

#### 4. Configuration Updates
- **Updated:** `.github/agentconfig.yaml` to reference new file paths
- **Version bump:** 2.0 → 3.0
- **NEW:** `.github/README.md` pointing to `.ai/` for content
- **NEW:** `.ai/README.md` with overview of structure

#### 5. Documentation Updates
- **Updated:** Main README.md with new structure
- **Updated:** All file path references throughout documentation
- **NEW:** `MIGRATION-GUIDE.md` for users upgrading
- **NEW:** `.ai/REORGANIZATION.md` explaining agent vs skill classification
- **NEW:** `CHANGELOG.md` (this file)

### Breaking Changes

#### For GitHub Copilot Users
- ✅ **No breaking changes** - `agentconfig.yaml` updated automatically
- Slash commands still work the same way

#### For Custom Scripts/Tools
- Update file paths from `.github/agents/` to `.ai/agents/`
- Update file paths from `.github/skills/` to `.ai/skills/`
- Update file names to remove namespace prefixes

#### For Documentation/Links
- Update all references to agent/skill files with new paths and names

### Migration Path

1. **Read** `MIGRATION-GUIDE.md` for detailed migration instructions
2. **Read** `.ai/REORGANIZATION.md` for agent vs skill classification
3. **Update** any custom scripts or tools that reference old paths
4. **Update** any documentation that links to specific files
5. **Test** with your AI assistant to ensure everything works

### Benefits of This Release

1. **Tool Agnostic** - Works with GitHub Copilot, Claude, Kiro, and other AI assistants
2. **Single Source of Truth** - All AI configuration in `.ai/` directory
3. **Clear Separation** - Agents (personas) vs Skills (procedures)
4. **Simpler Names** - Easy to reference and remember
5. **Better Organization** - Logical grouping by function
6. **Flat Structure** - No nested subdirectories for skills

### Files Added
- `.ai/README.md`
- `.ai/REORGANIZATION.md`
- `.github/README.md`
- `MIGRATION-GUIDE.md`
- `CHANGELOG.md` (this file)
- `LICENSE` (CC BY-NC-SA 4.0)

### Files Moved
- `.github/copilot-instructions.md` → `.ai/system-prompt.md`
- `.github/agents/*.agent.md` → `.ai/agents/*.md`
- `.github/skills/*` → `.ai/skills/*.md`
- `.product/agent-workflows/*.workflow.md` → `.ai/workflows/*.workflow.md`
- `.product/session-state.md` → `.ai/session-state.md`
- `.product/product-constitution.md` → `.ai/product-constitution.md`

### Files Renamed
All agent files simplified:
- `orchestrator.main-orchestrator.agent.md` → `orchestrate.md` (moved to skills)
- `orchestrator.quality-gate.agent.md` → `validate.md` (moved to skills)
- `orchestrator.session-manager.agent.md` → `manage-session.md` (moved to skills)
- `role.business-analyst.agent.md` → `business-analyst.md`
- `role.business-owner.agent.md` → `business-owner.md`
- `role.designer.agent.md` → `designer.md`
- `role.eng-lead.agent.md` → `eng-lead.md`
- `role.product-lead.agent.md` → `product-lead.md`
- `specialist.hypothesis-validator.agent.md` → `hypothesis-validator.md`
- `specialist.researcher.agent.md` → `researcher.md`
- `specialist.vision-alignment.agent.md` → `vision-alignment.md`
- `utility.decision-logger.agent.md` → `log-decision.md` (moved to skills)
- `utility.export-agent.agent.md` → `export.md` (moved to skills)

---

## Version 2.0 - Initial Release (March 2026)

- 13-agent system with orchestrators, specialists, roles, and utilities
- 7-stage gated discovery process
- BDD-based feature documents
- GitHub Copilot integration
- Session state management
- Decision logging
- Artifact validation

---

## Version 1.0 - Prototype (January 2026)

- Basic 7-stage process
- Manual artifact creation
- No agent system
- Template-based approach
