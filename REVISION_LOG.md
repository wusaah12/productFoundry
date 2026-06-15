# Product Foundry — Revision Log

## Version History

| Version | Release Date | Key Changes |
|---------|--------------|------------|
| **v0.0.1** | March 14, 2026 – May 21, 2026 | **Foundational build.** Established the 7-stage gated discovery process (Idea Brief → Discovery → Hypothesis → Vision & Mission → Roadmap → Release Plan → Feature Documents), with Vision & Mission correctly sequenced before requirements work and acting as the strategic filter for everything downstream. Introduced BDD (Given/When/Then) as the mandatory Feature Document format, the role introduction schedule, the structured user intake protocol, the artifact lifecycle (DRAFT → REVIEW → LOCKED → REVISED), the context continuity log, the agent decision protocol, per-stage validation checklists and output contracts, the Product Foundry brand and direct `/[name]` slash-command invocation, the Business Analyst and Product Lead roles, the constitutional compliance layer (6 governing principles + Hard Rules), artifact output to `[idea-name]/` at the workspace root, Jira-ready Stage 7 user stories, the post-lock revision protocol with Cascade Impact Assessment, Implementation/Delivery Status tracking, and the tool-agnostic `.ai/` directory reorganization (agents vs. skills, simplified naming, CC BY-NC-SA 4.0 license, multi-tool support for GitHub Copilot, Claude, and Kiro). |
| **v0.0.2** | June 14, 2026 | **Persisted State Relocation.** Moved `session-state.md` from `.ai/` to the workspace root, alongside the `[idea-name]/` directories it tracks. Introduced `DECISIONS.md` at the workspace root as the unified, git-tracked decision audit trail, superseding `.product/DECISIONS.md`. Added two new templates to `.ai/templates/`: `session-state-template.md` and `decisions-template.md`, used to (re)create the root files if missing. Every Stage 1–7 gate pass is now automatically logged to `DECISIONS.md` as a Gate-Pass decision, in addition to updating `session-state.md`. Added Hard Rule 22 and a new "Persisted State Files (Workspace Root)" section to `system-prompt.md`. Updated `.ai/skills/manage-session.md`, `validate.md`, `orchestrate.md`, `status.md`, `log-decision.md`, `log-decision-guide.md`, `export.md`, `.ai/README.md`, `.ai/DEPENDENCY-CHECKLIST.md`, `.kiro/steering/structure.md`, `.kiro/steering/tech.md`, `.github/agentconfig.yaml`, and root `README.md` to reflect the new locations. The `.product/` directory and its `DECISIONS.md` are deprecated in favor of the root-level files. |

---

## Feature Matrix — What Changed by Version

| Feature | v0.0.1 | v0.0.2 |
|---------|--------|--------|
| 7-stage gated discovery process | ✅ | ✅ |
| Vision before Features (strategic filter) | ✅ | ✅ |
| Roadmap stage | ✅ | ✅ |
| Release Plan stage | ✅ | ✅ |
| Feature Documents (BDD) | ✅ | ✅ |
| Role introduction schedule | ✅ | ✅ |
| Structured intake protocol | ✅ | ✅ |
| Artifact lifecycle (DRAFT→REVIEW→LOCKED→REVISED) | ✅ | ✅ |
| Context continuity log | ✅ | ✅ |
| Agent decision protocol | ✅ | ✅ |
| Per-stage validation checklists | ✅ | ✅ |
| Stage output contracts | ✅ | ✅ |
| Business Analyst role (BDD lead) | ✅ | ✅ |
| Product Lead role agent | ✅ | ✅ |
| Direct `/[name]` invocation | ✅ | ✅ |
| Product Foundry brand | ✅ | ✅ |
| Constitution compliance layer | ✅ | ✅ |
| Artifact directory at workspace root (`[idea-name]/`) | ✅ | ✅ |
| User stories with Jira fields (Stage 7) | ✅ | ✅ |
| Post-lock revision protocol + Cascade Impact Assessment | ✅ | ✅ |
| Implementation/Delivery Status tracking (Stages 5–6) | ✅ | ✅ |
| Revision History sections in Stage 5–7 templates | ✅ | ✅ |
| Solution-agnostic framing | ✅ | ✅ |
| Tool-agnostic `.ai/` directory structure | ✅ | ✅ |
| Agents vs Skills classification | ✅ | ✅ |
| CC BY-NC-SA 4.0 license | ✅ | ✅ |
| Multi-tool support (GitHub Copilot, Claude, Kiro) | ✅ | ✅ |
| `session-state.md` and `DECISIONS.md` at workspace root | ❌ | ✅ |
| session-state and decisions templates in `.ai/templates/` | ❌ | ✅ |
| Automatic gate-pass logging to DECISIONS.md (all 7 stages) | ❌ | ✅ |

---

## Detailed Changelog

### v0.0.1 — Foundational Build

**Period:** March 14, 2026 – May 21, 2026

This version consolidates the framework's entire foundational development arc into a single baseline. It represents everything in place before the persisted-state reorganization in v0.0.2.

**Stage model:**
- Established the 7-stage sequence: Idea Brief → Discovery & Research → Hypothesis → Vision & Mission → Product Roadmap → Release Plan → Feature Documents
- Corrected an early ordering issue so that Vision & Mission is locked *before* requirements/roadmap work, allowing it to act as the authoritative strategic filter for every downstream artifact
- Added Stage 5 (Roadmap) and Stage 6 (Release Plan) to separate strategic planning from tactical execution

**Requirements format:**
- Renamed "PRD" to "Feature Documents" with mandatory BDD (Given/When/Then) scenarios
- Required a minimum of 3 scenarios per feature: happy path, edge case, error/failure
- Restructured Stage 7 so each scenario is a self-contained, Jira-exportable user story ("As a [role], I want [capability], so that [benefit]") with Jira metadata fields (Summary, Type, Priority, Story Points, Labels)
- Required every "Then" clause to be observable and testable, and required Vision check + Release scope check on every scenario

**Process & governance:**
- Introduced the structured user intake protocol (5 questions before Stage 1)
- Introduced the artifact lifecycle state machine: DRAFT → REVIEW → LOCKED, later extended with REVISED (for post-lock changes to Stages 5–7)
- Added the context continuity log — every response begins with `── Stage [N]/7: [Stage Name] │ Role: [Role] │ Gate: [STATUS] ──`
- Added the agent decision protocol (vague input handling, stage-skip blocking, approval ambiguity handling, Vision conflict handling, iteration vs. rework distinction)
- Added per-stage validation checklists and stage-specific output contracts
- Added the post-lock revision protocol with Cascade Impact Assessment, Revision History tables in Stage 5–7 templates, and Implementation Status (Roadmap) / Delivery Status (Release Plan) tracking
- Added the constitutional compliance layer: 6 governing principles (Process over preference, Human judgment is sovereign, Transparency over convenience, Vision as the highest filter, Roles at the right moment, Testability as the standard of done) and the Hard Rules that enforce them

**Roles & agents:**
- Introduced the role introduction schedule — roles join at the stage where their perspective changes the output (Eng Lead & Designer at Stage 2, Business Owner at Stage 4, Business Analyst at Stage 7)
- Added the Business Analyst role (Stage 7 BDD/user story lead) and the Product Lead role (Stages 1–7, strategy/metrics/prioritization)
- Standardized all agent invocation to direct `/[name]` slash commands and consolidated agent namespacing

**Branding & structure:**
- Renamed the project to **Product Foundry**
- Reorganized all tool-agnostic configuration into `.ai/` (agents, skills, workflows, templates, product constitution), with agents (personas) separated from skills (procedures)
- Simplified file naming by removing namespace prefixes
- Established artifact output to `[idea-name]/` at the workspace root (one directory per product idea, created when the Idea Brief locks)
- Added the CC BY-NC-SA 4.0 license and documented multi-tool support for GitHub Copilot, Claude, and Kiro

**Rationale:** v0.0.1 represents the framework reaching a complete, internally consistent baseline — a 7-stage gated process with governance, BDD-based specifications, role choreography, and tool-agnostic configuration — ready to serve as the foundation for ongoing iteration.

---

### v0.0.2 — Persisted State Relocation

**Release Date: June 14, 2026**

**Major Changes:**

1. **`session-state.md` moved to the workspace root**
   - Previously lived at `.ai/session-state.md`; now lives at the workspace root, alongside the `[idea-name]/` directories it tracks
   - A new template, `.ai/templates/session-state-template.md`, is used to create or recreate the file if it's missing
   - Same structure as before, with an added "Last Updated" field and a note pointing to `DECISIONS.md`

2. **`DECISIONS.md` introduced at the workspace root**
   - New unified, git-tracked decision audit trail at the workspace root, superseding `.product/DECISIONS.md`
   - A new template, `.ai/templates/decisions-template.md`, defines the entry structure (Date, Stage, Decision Maker, Impact Level, Decision Statement, Rationale, Alternatives, Decision Driver, Reversibility, Related Artifacts, Follow-Up Actions) and is used to create the file if missing

3. **Automatic gate-pass logging**
   - Every Stage 1–7 gate pass now automatically appends a "Gate-Pass" decision entry to `DECISIONS.md`, in addition to updating `session-state.md`'s "Latest Decision" field
   - New "Gate-Pass Decisions (Stage Progression)" decision type added to `.ai/skills/log-decision.md` and `.ai/skills/log-decision-guide.md`, with a worked example

4. **System prompt updated**
   - New "Persisted State Files (Workspace Root)" section documents both files, their templates, and when they're updated
   - New Hard Rule 22: `session-state.md` and `DECISIONS.md` live at the workspace root, not `.ai/`; create from templates if missing; update on every gate pass, bypass, or revision
   - "Other Artifact Templates" section now also lists the session-state and decisions templates and their persisted locations
   - All references to `.product/templates/` for stage artifact templates corrected to `.ai/templates/` (a pre-existing inconsistency from the v0.0.1 reorganization)

5. **Full dependency sweep across `.ai/` and tool integrations**
   - Updated `.ai/skills/manage-session.md`, `validate.md`, `orchestrate.md`, `status.md`, `log-decision.md`, `log-decision-guide.md`, `validate-guide.md`, and `export.md` to reference the new root-level paths and template fallbacks
   - Updated `.ai/README.md` directory structure and file descriptions
   - Updated `.ai/DEPENDENCY-CHECKLIST.md` with new dependency rules for `session-state.md`, `DECISIONS.md`, and their templates, plus a "Gate-pass logging" consistency check across all 7 stages
   - Updated `.github/agentconfig.yaml`: added `state_file`, `state_file_location`, `state_file_template`, `decision_file`, `decision_file_location`, `decision_file_template` fields; added `on_gate_pass` entries to all 7 stage workflow definitions; updated `settings` block (`session_state_file`, `decision_log_file`, `artifact_directory`, `template_directory`)
   - Updated `.kiro/steering/structure.md` and `.kiro/steering/tech.md` directory diagrams to show root-level `session-state.md`/`DECISIONS.md` and `.ai/templates/`
   - Updated root `README.md` "File Layout" section to show the new root-level files and template locations

**Rationale:** v0.0.2 makes the two files that change most often — current progress and the decision audit trail — live where users naturally expect them: at the top of the workspace, next to their product idea directories, rather than buried inside the AI configuration directory. Automatic gate-pass logging closes a gap from v0.0.1, where the only record of a stage lock was the artifact's own status field; now every gate pass is also a permanent, git-tracked governance record in `DECISIONS.md`. The `.product/` directory and its `DECISIONS.md` are deprecated.

---

## Current System Status (v0.0.2)

**Latest Updates (June 14, 2026):**
- `session-state.md` relocated from `.ai/` to the workspace root
- `DECISIONS.md` introduced at the workspace root, superseding `.product/DECISIONS.md`
- New templates: `.ai/templates/session-state-template.md`, `.ai/templates/decisions-template.md`
- Automatic Gate-Pass decision logging for all Stage 1–7 gate passes
- System prompt updated (new "Persisted State Files" section, Hard Rule 22)
- `.github/agentconfig.yaml` updated (`on_gate_pass` entries, state/decision file settings)
- Full dependency sweep across `.ai/skills/`, `.kiro/steering/`, and root `README.md`

**Stable Features (from v0.0.1):**
- 7-stage gated discovery process
- Role introduction schedule with specific per-stage questions
- Artifact lifecycle: DRAFT → REVIEW → LOCKED → REVISED
- Context continuity log in every response header
- Per-stage validation checklists
- Business Analyst role leads Stage 7 user story authorship
- Direct `/[name]` slash command invocation
- Constitution compliance layer — 6 governing principles
- Artifacts written to `[idea-name]/` directory at workspace root
- User stories with Jira fields at Stage 7
- Post-lock revision protocol + Cascade Impact Assessment
- Tool-agnostic `.ai/` directory structure

**Next Evolution Path:**
- Field testing with real product discovery scenarios
- Potential refinements to Delivery Status transitions based on team feedback
- Documentation of common revision cascade patterns and resolution strategies
- Consider deprecating/removing the legacy `.product/` directory entirely in a future version

---

## Document References

- **System Prompt:** `.ai/system-prompt.md` (controls Product Foundry behavior)
- **Session State:** `session-state.md` (workspace root — current stage and context)
- **Decision Audit Trail:** `DECISIONS.md` (workspace root — all major product decisions, including gate passes)
- **Governing Principles:** `.ai/product-constitution.md` (6 constitutional principles)
- **Artifact Templates:** `.ai/templates/` (stages 1–7 templates, plus session-state and decisions templates)
- **Persona Definitions:** `.ai/personas/` (persona definition files)
- **Agent Prompts:** `.github/prompts/` (prompt files with YAML frontmatter)
- **Master Configuration:** `.github/agentconfig.yaml` (orchestration and stage definitions)
- **Workflow Definitions:** `.ai/workflows/` (7 stage workflow documents)
- **Dependency Checklist:** `.ai/DEPENDENCY-CHECKLIST.md` (cross-file consistency rules)
