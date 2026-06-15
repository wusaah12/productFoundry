# Stage 2 Templates — Discovery Research

This directory contains all template files for **Stage 2: Discovery Report** of the 7-stage Product Foundry process.

---

## 7-Substep Discovery Process

Stage 2 is organized into 7 sequential substeps, each producing specific artifacts:

| Substep | Artifact | File | Purpose |
|---------|----------|------|---------|
| **2.1** Entry | Files initialized | (Auto-created from these templates) | Initialize all 7 working documents |
| **2.2** Interview Planning | Interview Guide | `interview-guide.md` | Semi-structured interview script (9 questions, 30 min) |
| **2.3** Rehearsal (optional) | Practice interview | (Uses simulate-user skill) | Synthetic user for practice before real interviews |
| **2.4** Real Interviews | Interview Notes | `interview-notes.md` | Raw notes from 3+ real user interviews |
| **2.5** Synthesis | Interview Synthesis | `interview-synthesis.md` | Auto-generated: pain points, themes, contradictions |
| **2.6** Constraints | Technical & UX | `technical-constraints.md`, `ux-constraints.md` | Eng Lead + Designer auto-analyses |
| **Discovery Report** | Main artifact | `discovery-report.md` | Aggregates all 7 substep findings |

---

## Template Files

### Core Templates (Used Directly)

**`assumptions-log.md`**
- Captures all assumptions from Idea Brief
- Validates each assumption against interview evidence
- Tracks: Assumption → Status (CONFIRMED / CONTRADICTED / UNVALIDATED)
- Updated throughout Stage 2

**`competitive-analysis.md`**
- Identifies 3+ competitors
- Competitive matrix (features, pricing, positioning)
- Market gaps and differentiation opportunities
- Filled during discovery research phase

**`interview-guide.md`**
- Semi-structured interview script
- 9 core discovery questions
- Warm-up (build rapport), core questions, workflow walkthrough, closing
- Filled in Substep 2.2 by Researcher
- Used for all real interviews (Substep 2.4)

**`interview-notes.md`**
- Raw notes from each interview
- One entry per interview (5+ interviews total)
- Q&A responses, key quotes, unexpected findings
- Filled in Substep 2.4 as user conducts interviews
- Synthesized after 3+ interviews

**`interview-synthesis.md`**
- Auto-synthesized after 3+ interviews (Substep 2.5)
- Pain points ranked by frequency + severity
- Themes identified across interviews
- Contradictions flagged with context
- Personas extracted from interview patterns
- Actionable insights for Stage 3

**`technical-constraints.md`**
- Eng Lead analysis (Substep 2.6)
- Required integrations (APIs, systems)
- Scale requirements (users, transactions, data retention)
- Security & compliance (encryption, audit trail, legal)
- Performance requirements (response time, availability)
- Infrastructure constraints (cloud vs. on-premise)
- Technical risks and mitigations

**`ux-constraints.md`**
- Designer analysis (Substep 2.6)
- Current workflow mapping (how users do it today)
- Key interactions that must be simple
- Mobile vs. desktop requirements
- Accessibility requirements (WCAG 2.1 AA)
- Device/context constraints
- UX risks and mitigations

### Main Artifact

**`discovery-report.md`**
- Aggregates findings from all 7 substeps
- Executive summary of discovery
- Key findings, metrics, personas, market validation
- Ready for Stage 3 gate validation
- Status: DRAFT → REVIEW → LOCKED

---

## Workflow: Creating Stage 2 Artifacts

### Substep 2.1: Entry

System auto-creates all templates in `[idea-name]/discovery/` directory:

```
[idea-name]/discovery/
├── assumptions-log.md (pre-filled from Idea Brief)
├── competitive-analysis.md (empty)
├── interview-guide.md (empty)
├── interview-notes.md (empty)
├── interview-synthesis.md (empty)
├── technical-constraints.md (empty)
├── ux-constraints.md (empty)
└── discovery-report.md (empty)
```

### Substep 2.2: Interview Planning

Researcher uses `interview-guide.md` template to:
1. Coach user on interview design
2. Fill in persona-specific questions
3. Save guide to disk
4. User ready for practice (2.3) or real interviews (2.4)

### Substep 2.4: Real Interviews

User conducts 3+ interviews using `interview-guide.md`:
1. Interview 1: Paste notes into `interview-notes.md`
2. Interview 2: Add to `interview-notes.md`
3. Interview 3+: Add to `interview-notes.md`
4. **Auto-trigger at 3+ interviews**: Synthesis (2.5) + Constraints (2.6) + VSM (2.7)

### Substep 2.5: Synthesis (Auto-Triggered)

Researcher auto-synthesizes using `interview-synthesis.md` template:
- Analyzes all interview notes
- Extracts pain points and ranks by frequency + severity
- Identifies themes across interviews
- Flags contradictions
- Writes findings to disk

### Substep 2.6: Constraints (Auto-Triggered Parallel)

**Eng Lead** uses `technical-constraints.md` template:
- Reviews interview notes for technical requirements
- Documents integrations, scale, security, compliance
- Identifies technical risks

**Designer** uses `ux-constraints.md` template:
- Reviews interview notes for workflow and UX requirements
- Documents current workflow, key interactions, accessibility
- Identifies UX risks

Both run in parallel, write findings to disk.

### Discovery Report

Researcher aggregates all 7 substeps into `discovery-report.md`:
- Executive summary
- Key findings and metrics
- Personas identified
- Market validation results
- Ready for gate validation

---

## File Naming Convention

All templates use **kebab-case** (lowercase with hyphens):
- `assumptions-log.md`
- `competitive-analysis.md`
- `interview-guide.md`
- `interview-notes.md`
- `interview-synthesis.md`
- `technical-constraints.md`
- `ux-constraints.md`
- `discovery-report.md`

When copied to user workspace, files stay in `[idea-name]/discovery/` folder with same names (no "-template" suffix).

---

## Key Features of These Templates

### Comprehensive Fill-in Structure

Each template includes:
- **Purpose** — Why this artifact exists
- **Sections with examples** — Concrete examples to guide user
- **Checklists** — What must be included before moving to next stage
- **Next steps** — What triggers next substep or stage progression

### Interview Guide Standout

`interview-guide.md` is structured for **semi-structured interviews**:
- **9 core questions** covering: workflow, pain points, impact, workarounds, outcomes, constraints, usage patterns
- **Warm-up & closing** sections to build rapport
- **Observation section** for when user watches them work
- **Tips for good interviews** (listen more, ask why 2-3x, let silence happen)

### Synthesis Template Standout

`interview-synthesis.md` auto-synthesizes after 3+ interviews:
- **Top 5 pain points** ranked by frequency + severity
- **User needs extracted** from pain points
- **Themes identified** across interviews
- **Contradictions flagged** with interpretation
- **Personas extracted** from interview patterns

### Constraints Templates Standout

**`technical-constraints.md`** (Eng Lead):
- Integration requirements (APIs, systems)
- Scale requirements (users, transactions, data)
- Security & compliance
- Performance requirements
- Infrastructure constraints
- Technical risks & mitigations

**`ux-constraints.md`** (Designer):
- Current workflow analysis
- Key interactions that must be simple
- Mobile vs. desktop
- Accessibility requirements (WCAG)
- Device/context constraints
- UX risks & mitigations

---

## Usage in Stage 2.1 (Entry)

Main Orchestrator creates Stage 2 workspace:

```python
# Pseudocode: Orchestrator auto-creates files in Substep 2.1

for template_name in [
    "assumptions-log.md",
    "competitive-analysis.md",
    "interview-guide.md",
    "interview-notes.md",
    "interview-synthesis.md",
    "technical-constraints.md",
    "ux-constraints.md",
    "discovery-report.md"
]:
    load template from: .ai/templates/stage-2/{template_name}
    create file at: [idea-name]/discovery/{template_name}
    if template_name == "assumptions-log.md":
        pre-fill with assumptions from Idea Brief
```

---

## Integration with Stage 2 Workflow

These templates are referenced in `.ai/workflows/stage-2.workflow.md`:
- Substep 2.1 creates all files from these templates
- Substep 2.2 fills `interview-guide.md`
- Substep 2.4 fills `interview-notes.md`
- Substep 2.5 auto-fills `interview-synthesis.md`
- Substep 2.6 auto-fills `technical-constraints.md` + `ux-constraints.md`
- Final: All aggregated into `discovery-report.md`

---

## Next: Stage 3

After Stage 2 is complete and locked:
- `discovery-report.md` aggregates all findings
- Hypothesis validation uses `interview-synthesis.md` pain points and contradictions
- Stage 3 produces: `hypothesis.md` with SMART metrics for top pain point

---

## Notes

- All templates are **fill-in-the-blank** with examples and guidance
- Templates include checklists to ensure completeness
- Templates reference the 7-substep workflow (substep numbers, auto-triggers, gates)
- No modifications needed to templates themselves; they're designed for copying into user workspace

