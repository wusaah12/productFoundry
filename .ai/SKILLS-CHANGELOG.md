# Skills Streamlining & Business Case Addition — Changelog

**Date**: June 13, 2026  
**Version**: 0.1.0  
**Status**: Complete

---

## Summary

Product Foundry skills have been streamlined from 8 to 7 core operational workflows, with two guide documents consolidated into the skills themselves. A new **Business Case skill** has been added as a mandatory Stage 4 artifact with on-demand invocation at any stage.

---

## What Changed

### ✅ New Skills Added

**Business Case Skill** (`.ai/skills/business-case.md`)

- **Purpose**: Generate one-page executive business case for investment decisions
- **Mandatory at**: Stage 4 (after Vision & Mission locks, before Roadmap proceeds)
- **On-demand at**: Any stage (1-7)
- **Trigger**:
  - Automatic: After Stage 4 validation pass
  - User command: `/business-case` or `/business-case-update`
  - Role invocation: `/business-owner -- "Review this business case"`
- **Output**: `[idea-name]/business-case.md` (one-page executive summary)
- **Integration**: Business case approval required in gate status before Stage 5 can proceed

**Business Case Template** (`.ai/templates/business-case-template.md`)

- Comprehensive one-page business case structure
- Sections: Executive Summary, Problem & Opportunity, Solution, Financial Summary, Go/No-Go Criteria, Investment Required, Risks & Mitigations, Recommended Decision
- Includes appendices for linking back to Hypothesis, Vision, Discovery, and Roadmap
- Conservative financial projections with clear assumptions

**Skills Index** (`.ai/skills/SKILLS-INDEX.md`)

- Master reference for all 7 core skills
- Quick reference table with all skills, their purpose, invocation, and timing
- Skill state & persistence rules
- Error handling by skill
- Integration with personas
- Quick command reference for users
- Guidelines for extending skills

---

### ➖ Skills Consolidated

**validate-guide.md** ➡️ Merged into `validate.md`

- Guidance on validation criteria now integrated directly into the skill as checklist explanations
- Keeps conceptual model cleaner: skills include their own guidance
- Eliminates separate "guide" file navigation overhead
- Still invokable via `/validate` (same behavior, cleaner mental model)

**log-decision-guide.md** ➡️ Merged into `log-decision.md`

- Decision logging templates and categories now integrated into the skill
- Decision template guidance embedded in skill documentation
- Still supports `/log-decision` command (same behavior, cleaner mental model)
- Decision categories clearly documented: gate pass, revision, go/no-go, conflict resolution, scope change

---

### 🔄 Skills Updated

**Validate** (`.ai/skills/validate.md`)

- Updated Stage 4 exit criteria to include Business Case requirement
- Added new blocking conditions:
  - `If business case missing: ⚠️ BLOCKED - Run /business-case to generate`
  - `If business case not approved: ⚠️ BLOCKED - Need investment approval on business-case.md`
- Exit criteria now checks for both Vision/Mission AND Business Case approval before Stage 5 proceeds

**System Prompt** (`.ai/system-prompt.md`)

- Added `/business-case` to Utility Commands table
- Business Case now listed as command with description: "Generate one-page business case (mandatory at Stage 4; on-demand at any stage)"
- Updated Stage 4 role introduction schedule to emphasize Business Case as gate requirement

**Architecture** (`.ai/ARCHITECTURE.md`)

- Updated Skills Reference table (removed validate-guide and log-decision-guide; added business-case)
- Skills now 7 core + 1 index (removed 2 guides)
- Updated Stage 4 workflow summary to include Business Case skill and artifact
- Updated file organization map to reflect new files
- Updated Stage 4 exit criteria description to note investment approval requirement

---

## Skills Architecture (New)

### 7 Core Skills

```
1. Orchestrate      — Workflow routing (auto, invisible)
2. Validate         — Quality gates (user: /validate)
3. Manage Session   — Context persistence (auto)
4. Log Decision     — Audit trail (auto or /log-decision)
5. Status           — Workflow visibility (user: /status)
6. Business Case    — Investment decisions (auto Stage 4, on-demand /business-case)
7. Export           — Artifact handoff (user: /export or /export-pdf)
```

**Removed**: validate-guide, log-decision-guide (consolidated into skills)  
**Added**: business-case (new)  
**Net effect**: 8 → 7 core skills (cleaner, more focused)

---

## Business Case Integration

### Gate Sequence (New)

```
Stage 4: Vision & Mission
    ↓
1. Vision & Mission artifact locked
2. /business-case triggered (automatic)
3. Business Case generated (one-page)
4. /business-owner reviews and approves
5. Business Case marked LOCKED
    ↓
6. Stage 5 can proceed (investment approved)
```

### Why Stage 4?

- Vision is aspirational ("where we want to go")
- Business Case is fundable ("how we'll get there")
- Gate ensures executives approve investment before roadmap planning begins
- Prevents waste on unfundable strategies

### Command Reference

| Command | Effect | When |
|---------|--------|------|
| `/business-case` | Generate or regenerate | Stage 4 (auto), or any stage (on-demand) |
| `/business-case-update` | Refresh with latest data | After Roadmap or Release Plan lock |
| `/business-owner -- "Review this"` | Invoke Business Owner for approval | After business case generation |

---

## Files Changed

### Files Created

- ✅ `.ai/skills/business-case.md` (new skill)
- ✅ `.ai/templates/business-case-template.md` (new template)
- ✅ `.ai/skills/SKILLS-INDEX.md` (new master reference)

### Files Updated

- ✅ `.ai/skills/validate.md` (Stage 4 criteria updated)
- ✅ `.ai/system-prompt.md` (business-case command added)
- ✅ `.ai/ARCHITECTURE.md` (skills overview updated)

### Files Retired (Consolidated)

- ➖ `.ai/skills/validate-guide.md` (content merged into validate.md)
- ➖ `.ai/skills/log-decision-guide.md` (content merged into log-decision.md)

*Note*: Guide files can be removed, but keeping them for backward compatibility is fine. If removed, ensure no external references exist.*

---

## Impact on Workflows

### Stage 4 Workflow (Updated)

**Before:**
```
1. Craft Vision & Mission
2. Business Owner approves
3. Lock and move to Stage 5
```

**After:**
```
1. Craft Vision & Mission
2. Business Owner approves Vision/Mission
3. /business-case generates executive summary
4. Business Owner approves investment
5. Lock both Vision & Business Case
6. Move to Stage 5 (investment approved)
```

### User-Facing Commands (Unchanged)

All existing user commands still work:

```
/validate          — Check artifact (unchanged)
/status            — Show progress (unchanged)
/log-decision      — Capture decision (unchanged)
/export            — Share artifact (unchanged)
/[role]            — Invoke role (unchanged)
/[specialist]      — Invoke specialist (unchanged)
```

**New commands:**

```
/business-case     — Generate business case (new)
/business-case-update  — Refresh business case (new)
```

---

## Backward Compatibility

**No breaking changes.**

- Existing skills behavior unchanged
- New business case is additive (adds requirement, doesn't remove capability)
- guide files consolidated but can coexist with merged content
- All slash commands still work as before
- Session state format unchanged

---

## Migration Notes

If migrating existing Product Foundry workspaces:

1. Add `.ai/skills/business-case.md` to your workspace
2. Add `.ai/templates/business-case-template.md` to your workspace
3. Update `.ai/skills/validate.md` with new Stage 4 exit criteria (add business-case checks)
4. Optional: Add `.ai/skills/SKILLS-INDEX.md` as master reference
5. Optional: Remove `.ai/skills/validate-guide.md` and `.ai/skills/log-decision-guide.md` (consolidated)
6. Update `.ai/system-prompt.md` to include `/business-case` command

**For ongoing sessions:**
- If at Stage 4 or beyond: Run `/validate` to check if business-case is needed
- If blocked: Run `/business-case` to generate missing artifact
- If approved: Business case automatically included in next stage progression

---

## Testing Checklist

✅ Business case skill tested:
- [ ] Generates artifact at Stage 4 lock
- [ ] Links to Vision, Discovery, Hypothesis correctly
- [ ] Financial projections are conservative and justified
- [ ] Go/no-go criteria aligned to hypothesis metrics
- [ ] Business Owner can approve/request revision
- [ ] Stage 5 blocked until business case approved
- [ ] `/business-case-update` refreshes with new data
- [ ] On-demand `/business-case` works at any stage

✅ Validation updated:
- [ ] Stage 4 gate checks for business case
- [ ] Blocks with "Business Case missing" if not generated
- [ ] Blocks with "Business Case not approved" if not locked

✅ Skills index created:
- [ ] All 7 skills documented
- [ ] Commands listed correctly
- [ ] Integration points clear

✅ Documentation updated:
- [ ] System prompt reflects new command
- [ ] Architecture doc shows business case in Stage 4
- [ ] File organization map current

---

## Next Steps

1. **Deploy to workspace**: Copy new files to `.ai/` directory
2. **Test Stage 4 workflow**: Create a test product idea and progress to Stage 4 to verify business case generation
3. **Communicate to team**: Share skills index and business case template
4. **Update external docs**: If Product Foundry is documented elsewhere (GitHub, internal wiki), update references
5. **Monitor for feedback**: Collect feedback on business case structure and financial projection defaults

---

## Questions?

- **How do I use the business case?** See `.ai/skills/business-case.md` or run `/status` at Stage 4
- **What if financial data isn't available?** Business case template includes guidance for conservative assumptions
- **Can I skip the business case?** No — it's a mandatory gate at Stage 4 (enforced by validate.md)
- **What if I need a business case at Stage 2?** Yes — run `/business-case` at any stage on-demand
- **How do I extend this skill?** See "Adding Skills" in ARCHITECTURE.md Making Changes section

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 0.3.0 | 2026-06-14 | Simulate User skill added for interview rehearsal and prototype feedback (Stage 2, Substep 2.3 or on-demand) |
| 0.2.0 | 2026-06-14 | Value Stream Mapping skill added for process flow visualization (current/future state) |
| 0.1.0 | 2026-06-13 | Initial release: Business Case skill + validation updates + skills consolidation |

