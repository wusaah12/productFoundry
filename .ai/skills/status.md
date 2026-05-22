---
name: status
description: 'Show current stage, gate status, and session context. Use when: checking progress, understanding where you are in discovery, reviewing outstanding work, confirming artifact state.'
user-invocable: true
argument-hint: 'Optional: detail-level (brief, full, or verbose)'
---

# Status — Session Context Skill

## What This Does

Displays a real-time snapshot of your discovery progress:

- ✅ **Current stage** — Which of the 7 stages you're in
- ✅ **Gate status** — LOCKED (blocked), OPEN (ready to advance), or BYPASSED (skipped)
- ✅ **Working artifact** — What you're currently building
- ✅ **Latest decision** — The most recent major choice
- ✅ **Outstanding work** — What's left to complete the stage
- ✅ **Artifacts complete** — Which documents are DRAFT, REVIEW, or LOCKED

Reads from `session-state.md` to provide accurate, up-to-date context.

## When to Use

| Scenario | Command |
|----------|---------|
| Quick check of where you are | `/status` |
| Detailed artifact inventory | `/status full` |
| Verbose with all metrics | `/status verbose` |
| Understand current gate block | Check "Gate Status" section |
| See what's coming next | Check "Next Stage" row |

## How Status Works

When you type `/status` in Copilot Chat:

1. **Session Manager Agent loads** → Reads `session-state.md` for current state
2. **Stage info extracted** → Identifies current stage (1-7) and progress
3. **Gate status evaluated** → Determines if you can advance to next stage
4. **Context assembled** → Gathers artifact state, latest decision, outstanding items
5. **Status displayed** → Shows structured summary in chat

## Status Output Format

### Brief Status (default)

```
── Stage [N]/7: [Stage Name] │ Gate: [STATUS] ──

Current artifact: [Name] — [State: DRAFT/REVIEW/LOCKED]
Latest decision: [Most recent major choice]
Outstanding: [1-2 next items to complete]
```

**Example:**
```
── Stage 2/7: Discovery & Research │ Gate: LOCKED ──

Current artifact: Discovery Report — DRAFT
Latest decision: Narrowed target user to engineering leads (not all PMs)
Outstanding: Complete competitive analysis (3 competitors remaining)
```

### Full Status

```
── Stage [N]/7: [Stage Name] ──
Gate: [STATUS]  │  Progress: [% complete]  │  Next: Stage [N+1]

##### Session Context
- **Working on**: [Artifact name]
- **Artifact status**: DRAFT / REVIEW / LOCKED
- **Latest decision**: [Decision summary with date]
- **Updated**: [Timestamp]

##### Stage Progress
- Stage 1 (Idea Brief): ✅ COMPLETE
- Stage 2 (Discovery): 🟡 IN PROGRESS (75% done)
- Stage 3 (Hypothesis): ⏳ PENDING
- [...]

##### Outstanding Work
- [ ] [Item 1 with owner and due date]
- [ ] [Item 2 with owner and due date]
- [...]

##### Gate Criteria
- ☑ Requirement 1: [MET]
- ☐ Requirement 2: [PENDING — blocked by X]
- ☑ Requirement 3: [MET]

**Gate Status**: [LOCKED/OPEN/BYPASSED] — [Reason]
```

**Example:**
```
── Stage 2/7: Discovery & Research ──
Gate: LOCKED │ Progress: 75% │ Next: Stage 3 (Hypothesis)

##### Session Context
- **Working on**: Discovery Report
- **Artifact status**: DRAFT (6,200 words)
- **Latest decision**: Focus on 3 user personas instead of 5 (overcomplicating)
- **Updated**: 2026-03-16 14:12 UTC

##### Stage Progress
- Stage 1 (Idea Brief): ✅ COMPLETE (locked)
- Stage 2 (Discovery): 🟡 IN PROGRESS (75% done)
- Stage 3 (Hypothesis): ⏳ PENDING
- Stages 4-7: ⏹️ NOT STARTED

##### Outstanding Work
- [ ] Competitive analysis: 3 of 5 competitors reviewed (Eng Lead owns — due today)
- [ ] Designer UX constraints: Waiting for designer input on workflow (Designer owns — due Thu)
- [ ] Pain point ranking: 80% done (PM owns)

##### Gate Criteria
- ☑ User needs are validated
- ☑ Competitive analysis complete
- ☐ Eng constraints documented — PENDING (waiting for Eng Lead)
- ✅ Designer findings included
- ✅ User confirms report captures findings

**Gate Status**: LOCKED — Blocked by Eng Lead input on technical constraints.
**Unblock path**: Follow up with Eng Lead; offer to proceed with Designer findings while waiting.
```

### Verbose Status

Full status **plus**:
- Complete artifact inventory with word counts
- All role assignments and deadlines
- Risk flags and mitigation strategies
- Previous stages' key decisions and how they're constraining current work
- Suggestions for next actions based on gate status

## Stage Gate Status Values

| Status | Meaning | Example Reason |
|--------|---------|----------------|
| **LOCKED** | Exit criteria not yet met; cannot advance | Waiting for role feedback, incomplete research |
| **OPEN** | All criteria met; ready to advance | All sections complete, artifacts reviewed, gates cleared |
| **BYPASSED** | Stage was skipped with documented reason | Executive override, out-of-scope for product, already completed pre-discovery |

## Session State File

Status reads from `.product/session-state.md` which contains:

```markdown
# Session State — Product Discovery Tracker

**Current Stage**: 2
**Current Stage Name**: Discovery & Research
**Gate Status**: LOCKED
**Progress**: 75% (estimated)
**Session Start**: 2026-03-16
**Last Updated**: 2026-03-16 14:12 UTC

## Current Artifact
**Name**: Discovery Report
**Status**: DRAFT
**Word Count**: 6,200
**Last Edit**: 2026-03-16 14:12 UTC
**Owner**: You (PM)

## Latest Decision
**Decision**: Focus research on 3 primary personas instead of initial 5
**Date**: 2026-03-15 16:45 UTC
**Reason**: User interviews revealed 60% overlap between personas 3, 4, 5 — consolidating reduces research burden without losing insight
**Impact**: Reduces discovery timeline by ~1 week

## Outstanding Work
- Competitive analysis: 3 of 5 competitors reviewed
- Eng constraints: Awaiting input from Eng Lead
- Designer input: UX workflow constraints pending
- Pain point ranking: 80% complete

## Artifact Inventory
| Stage | Artifact | Status | Locked |
|-------|----------|--------|--------|
| 1 | Idea Brief | LOCKED | ✅ |
| 2 | Discovery Report | DRAFT | ❌ |
| 3-7 | — | NOT STARTED | ❌ |

## Role Status
| Role | Stage Activated | Latest Input | Pending |
|------|-----------------|--------------|---------|
| PM | All | 2026-03-16 | — |
| Eng Lead | Stage 2 | — | Constraints doc (due today) |
| Designer | Stage 2 | — | UX findings (due Thu) |
| Business Owner | Stage 4 | — | Not yet active |
```

## Using Status to Unblock

When gate is **LOCKED**:

1. **Run `/status full`** to see exactly what's pending
2. **Identify blocker** — which criterion is not met
3. **Check owner** — who is responsible for completing it
4. **Follow up** — reach out to owner or tackle it yourself
5. **Iterate artifact** — make revisions
6. **Validate** — run `/validate` to confirm all criteria now met
7. **Advance** — run `/next-stage` to progress

**Example unblock flow:**
```
You: /status
Output: Gate: LOCKED — Blocked by Eng constraints

You: /status full
Output: 
  ☐ Eng constraints documented — PENDING (Eng Lead — overdue by 1 day)
  
You: [Message Eng Lead directly or message the agent]
"Eng Lead says he'll have constraints by end of day"

You: [Once you receive input, add to artifact]

You: /validate
Output: Gate: OPEN ✅ All criteria met

You: /next-stage
Output: Stage 2 LOCKED. Gate to Stage 3 now OPEN. Ready to move to Hypothesis?
```

## Quick Reference — All 7 Stages

| # | Stage Name | Typical Duration | Key Artifact | Gate Unlock Trigger |
|---|------------|------------------|--------------|-------------------|
| 1 | Idea Brief | 1-2 days | Idea Brief (1-2 pg) | Problem + user + scope clear |
| 2 | Discovery & Research | 5-10 days | Discovery Report (2-3 pg) | Validated needs + constraints + role input |
| 3 | Hypothesis | 2-3 days | Hypothesis Statement (1 pg) | Falsifiable hypothesis + SMART metrics |
| 4 | Vision & Mission | 3-5 days | Vision & Mission (1 pg) | Vision approved + Business Owner sign-off |
| 5 | Product Roadmap | 5-7 days | Product Roadmap (1-2 pg) | Quarterly initiatives + Eng feasibility |
| 6 | Release Plan | 3-5 days | Release Plan + feature list | Features defined + go/no-go criteria met |
| 7 | Feature Documents | 10-15 days | 4-6 Feature Docs (BDD format) | All scenarios written + reviewed + locked |

**Total typical timeline**: 30-50 days (4-7 weeks) from Idea to Feature Docs complete.

