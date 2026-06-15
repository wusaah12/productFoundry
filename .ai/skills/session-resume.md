# Session Resume Skill

**Role:** Session initialization and context recovery

**Expertise:** Session state loading, context continuity, recovery messaging, session diagnostics

---

## Core Responsibilities

### 1. Initialize Session at Conversation Start

When a new conversation begins:
- Load `session-state.md` from workspace root
- If missing, create from `.ai/templates/session-state-template.md`
- Parse session metadata: current stage, artifact, gate status, latest decision, outstanding blockers
- Set system context for all subsequent operations

### 2. Detect Session State

Determine the session type:
- **Fresh start** (no `session-state.md`) → User starting new Product Foundry workflow
- **Returning session** (`session-state.md` exists) → User continuing previous work
- **Mid-stage session** → User left during active artifact creation
- **Post-gate session** → User just passed or hit a gate
- **Revision session** → User reopened a locked artifact

### 3. Display Recovery Message

On returning session, show context to help user resume:
- Current stage and stage name
- Current artifact name and status
- Gate status (LOCKED, OPEN, BLOCKED, REVISED)
- Latest decision made
- Outstanding blockers or work items
- Next recommended action
- Time since last session (if tracked)

**Message format** (always shown unless explicitly suppressed):
```
── Welcome Back! ──
Stage: [N]/7: [Stage Name]
Artifact: [idea-name]/[artifact].md ([STATUS])
Gate: [LOCKED / OPEN / BLOCKED / REVISED]

Latest Decision: [What was decided]
Outstanding: [What needs attention]

Last session: [When]
Time elapsed: [Duration]

Next steps:
  1. [Recommended action]
  2. [Alternative if blocked]

Ready to continue? Type /status for full context or start working.
```

### 4. Validate Session Integrity

Before allowing work to proceed:
- Verify artifact file exists at path specified in session-state.md
- Check for git uncommitted changes (if revision happened)
- Validate stage is within 1-7 range
- Confirm gate status is valid (LOCKED, OPEN, BLOCKED, REVISED)
- Alert if session state is corrupted or inconsistent

### 5. Handle Session Recovery Errors

**If `session-state.md` missing:**
- Create fresh from template
- Set stage to 1 (fresh start)
- Prompt: "Starting fresh Product Foundry session"

**If artifact file missing:**
- Alert: "Current artifact not found at [path]"
- Suggest: "Check the [idea-name]/ directory or recover from git history"
- Option: "Start new artifact or load from backup"

**If session-state.md corrupted:**
- Parse what's readable
- Alert: "Session state appears corrupted. Recovered [X] fields"
- Offer: "Proceed with recovered state, or start fresh?"

**If gate status invalid:**
- Alert: "Gate status invalid ([value])"
- Reset to last known valid state
- Prompt user confirmation

### 6. Support Multi-Session Workflows

Handle continuity across tool switches:
- User was in Claude yesterday, in Copilot today
- Session state lives in workspace (git-tracked)
- Resume shows seamless continuation
- Decision log persists across tools

**Message for tool switch**:
```
── Session Resumed (Different Tool) ──

You were working in [Previous Tool] on:
  Stage 4/7: Vision & Mission
  Artifact: my-product/vision-mission.md (REVIEW)

Continuing in: [Current Tool]

Your progress is saved in DECISIONS.md and session-state.md.
```

### 7. Provide Session Diagnostics

Optional `/session-diagnostics` command:
- Show complete session-state.md contents
- List all artifacts in workspace
- Show git history of latest decisions
- Validate all references (artifact exists, DECISIONS.md valid)
- Report any inconsistencies

**Example output**:
```
Session Diagnostics:

State File: ✓ session-state.md (valid, last updated [date])
Decisions Log: ✓ DECISIONS.md (12 entries)
Current Artifact: ✓ my-product/hypothesis.md (exists, size: X KB)
Stage: ✓ Stage 3/7 (valid)
Gate: ✓ OPEN (valid status)

Artifacts in workspace:
  ✓ idea-brief.md (LOCKED, 2 KB)
  ✓ discovery-report.md (LOCKED, 5 KB)
  ✓ hypothesis.md (REVIEW, 3 KB) ← Current

Decisions logged: 12
  - Last 3 gate passes: Stage 1 → 2 → 3
  - Latest decision: "Hypothesis falsifiable"

No issues detected. Session is healthy.
```

---

## When Session Resume Runs

### Automatic (Every Conversation Start)

```
User opens Product Foundry chat/session
↓
Session Resume Skill auto-invokes
↓
Loads session-state.md from workspace root
↓
Displays recovery message (if returning) or fresh start message
↓
Sets context for orchestrator and other skills
↓
User continues or starts work
```

### Manual (Explicit Recovery)

User can force session resume:
```bash
/resume              # Show recovery message again
/resume --full       # Show full session state details
/resume --diagnostics # Run diagnostics
```

---

## Session-State.md Structure

Session Resume reads and maintains this structure:

```yaml
# Product Foundry Session State

last_updated: 2026-03-15 15:45:00 UTC
session_id: "copilot-session-12345"

## Current Progress
current_stage: 2
current_stage_name: "Discovery Report"
current_artifact: "my-product/discovery-report.md"
artifact_status: "REVIEW"  # DRAFT, REVIEW, LOCKED, REVISED

## Gate Tracking
gate_status: "OPEN"        # OPEN, LOCKED, BLOCKED, REVISED
gate_blockers: []          # List of blocking criteria
gate_pass_date: 2026-03-15 14:30:00 UTC

## Decision Tracking
latest_decision: "Competitive analysis complete"
latest_decision_time: 2026-03-15 15:30:00 UTC
decision_logged: true

## Context
active_roles: ["eng_lead", "designer"]
user_context:
  - "Product: Weekly reporting tool for engineering managers"
  - "Target users: Engineering leads at startups (50-300 employees)"
  - "Key constraint: Must integrate with Jira/Linear"

outstanding_blockers: []

## Session Info
session_start: 2026-03-15 10:00:00 UTC
last_activity: 2026-03-15 15:45:00 UTC
session_duration_minutes: 345
tool_current: "copilot"
tool_last: "claude"

## Artifact Timeline
stage_1_lock_date: 2026-03-15 10:30:00 UTC
stage_2_lock_date: null
next_milestone: "Stage 2 gate pass"
```

---

## Recovery Message Examples

### Fresh Start Session

```
── Starting Product Foundry Session ──

No previous session found. Let's begin!

I'll guide you through 7 gated stages:
  1. Idea Brief → 2. Discovery → 3. Hypothesis
  → 4. Vision & Mission → 5. Roadmap → 6. Release Plan → 7. Feature Docs

Each stage locks before the next begins. Gates are never skipped.

Ready? Let me ask some intake questions to understand your idea.
```

### Returning to Stage 2

```
── Welcome Back! ──

You were working on Stage 2: Discovery Report

Artifact: my-product/discovery-report.md
Status: REVIEW (ready for role feedback)
Gate: OPEN (ready to validate for Stage 3)

Latest decision: "Competitive analysis identifies 3 main competitors"
Outstanding: Designer review of UX constraints

Last session: Yesterday at 2:30 PM (22 hours ago)

What's next?
  1. Get designer feedback on UX findings
  2. Run /validate to check gate criteria
  3. Continue with more research

Ready to continue, or review full context?
```

### Returning to Mid-Artifact DRAFT

```
── Welcome Back! ──

You were working on Stage 5: Product Roadmap

Artifact: my-product/product-roadmap.md
Status: DRAFT (in progress, ~60% complete)
Gate: LOCKED (cannot proceed until artifact complete)

Latest decision: "Roadmap sequenced by quarters"
Outstanding: 
  - Eng Lead feasibility review
  - Business Owner approval
  - Add Q4 initiatives detail

Last session: 3 hours ago
Time in this stage: 2 days

What would help?
  1. Continue drafting Q4 initiatives
  2. /eng-lead for feasibility check
  3. /status for full context

Let's finish this artifact.
```

### Returning to Revision Session

```
── Welcome Back! ──

You have a revision in progress.

Artifact: my-product/product-roadmap.md
Status: REVISED (awaiting re-validation)
Gate: OPEN (pending role sign-off)

Revision: Q1 infrastructure work: 2w → 4w
Reason: Implementation discovery
Approvers pending: ✓ Eng Lead | ✓ Business Owner

Latest decision: "Revision approved by discovery team"
Outstanding: Business Owner timeline approval

Last session: 2 hours ago

What's next?
  1. /business-owner for timeline approval
  2. Proceed to Release Plan re-validation
  3. View revision history

Ready to get sign-off?
```

### Tool Switch Session

```
── Welcome Back! (Tool Switch) ──

Previously in: Claude Chat
Now in: Copilot Chat

Your session is synced across tools via workspace files.

Stage: 4/7 Vision & Mission
Artifact: my-product/vision-mission.md (REVIEW)
Gate: OPEN (ready for Business Owner review)

Latest decision: "Mission clarified: Speed + reliability"
Outstanding: Business Owner strategic alignment review

Decisions logged: 15 (git-tracked in DECISIONS.md)

Your work is preserved. Continue here, or any Product Foundry tool.
```

---

## Workflow: Fresh Start Session

```
User opens chat/conversation
↓
Session Resume runs
↓
Detects: No session-state.md
↓
Creates: Fresh session-state.md from template
↓
Displays: Fresh start message (not recovery message)
↓
Sets context: Stage 0 (pre-intake), no artifact yet
↓
Prompts: Let's start with intake protocol
↓
System ready for Stage 1
```

---

## Workflow: Returning Session

```
User opens chat/conversation
↓
Session Resume runs
↓
Detects: session-state.md exists
↓
Reads: All session fields (stage, artifact, gate, latest decision, etc.)
↓
Validates: Stage is 1-7, artifact file exists, gate status valid
↓
Displays: Recovery message with context
↓
Updates: last_activity timestamp to now
↓
Sets context: All systems aware of current stage/artifact/gate
↓
User continues work
```

---

## Workflow: Session with Errors

```
User opens chat/conversation
↓
Session Resume runs
↓
Detects: session-state.md corrupted or artifact missing
↓
Validates: Attempts to parse/recover what's readable
↓
Alerts: "Session state issue detected: [problem]"
↓
Options:
  1. Proceed with recovered state (if partially valid)
  2. Start fresh (discard corrupted state)
  3. Recover from git history
↓
User chooses action
↓
Continue or restart
```

---

## Session Metadata Tracked

Session Resume maintains and displays:

| Field | Purpose | Example |
|-------|---------|---------|
| `current_stage` | Which stage (1-7) | 3 |
| `current_artifact` | Path to active artifact | my-product/hypothesis.md |
| `artifact_status` | Artifact state | REVIEW |
| `gate_status` | Gate progression | OPEN |
| `latest_decision` | Most recent choice | "Hypothesis falsifiable" |
| `outstanding_blockers` | What needs work | ["Designer review"] |
| `session_start` | When session began | 2026-03-15 10:00:00 |
| `last_activity` | Last user action | 2026-03-15 15:45:00 |
| `tool_current` | Current tool | copilot |
| `tool_last` | Previous tool | claude |
| `active_roles` | Roles in current stage | ["eng_lead", "designer"] |

---

## Integration with Other Skills

### Session Resume + Orchestrate

```
Session Resume loads state
↓ Provides context to Orchestrator
↓ Orchestrator routes based on stage/gate
↓ User continues with stage-aware routing
```

### Session Resume + Manage Session

```
Session Resume: Loads state at conversation start (read-only)
↓ Manage Session: Updates state after every major decision (read-write)
↓ Both use same session-state.md file
```

### Session Resume + Log Decision

```
Session Resume: Displays latest decision from session-state.md
↓ Log Decision: Appends new decision to DECISIONS.md
↓ Manage Session: Updates session-state.md with new latest decision
↓ Next session resume shows new context
```

### Session Resume + Revise

```
Session Resume: Detects artifact status = REVISED
↓ Displays: "Artifact is awaiting re-validation"
↓ Revise: Manages revision workflow
↓ After re-lock: Status updated to LOCKED
↓ Next session resume shows: "Gate: OPEN"
```

---

## Commands

### Auto-Invoke (Built-In)

Session Resume runs automatically at conversation start. No user action needed.

### Manual Invocation

```bash
/resume                    # Show recovery message again
/resume --full             # Show all session-state fields
/resume --diagnostics      # Run session diagnostics
/resume --new              # Start fresh session (discard state)
```

### Related Commands

| Command | Effect |
|---------|--------|
| `/status` | Show current stage/artifact/gate (different from `/resume`) |
| `/session-diagnostics` | Validate session integrity |
| `/log-decision` | Record new decision (updates session state) |

---

## Best Practices

1. **Always check recovery message** — Understand where you are before starting work
2. **Review outstanding blockers** — Know what's blocking progress
3. **Check decision log** — Understand how you got here
4. **Use `/status` for full context** — If recovery message doesn't have enough detail
5. **Run diagnostics if confused** — `/resume --diagnostics` validates everything
6. **Commit frequently** — git commits preserve decision log across sessions
7. **Update session-state.md** — Manage Session keeps this current after major decisions
8. **Tool-switch seamlessly** — Session state lives in workspace, works across tools

---

## Error Handling

| Error | Recovery |
|-------|----------|
| `session-state.md` missing | Create fresh from template |
| Artifact file missing | Alert user, suggest git recovery or new artifact |
| Corrupted session-state | Parse what's readable, alert user, offer fresh start |
| Invalid gate status | Reset to last known valid, prompt user confirmation |
| Stage out of range (0 or 8+) | Reset to Stage 1, alert user |
| Inconsistent timestamps | Use latest valid timestamp |

---

## Key Principles

1. **Transparency** — Users always know where they are and how they got there
2. **Continuity** — Sessions resume seamlessly, even across tool switches
3. **Validation** — Session state is checked for integrity before use
4. **Recovery** — Errors are caught and handled gracefully
5. **Context-aware** — Next steps are recommended based on current state and blockers
6. **Git-backed** — Decision log provides immutable audit trail

---

## Related Skills

- **Manage Session**: Updates session-state.md after decisions (write)
- **Orchestrate**: Routes requests based on stage/gate (uses session context)
- **Log Decision**: Appends to DECISIONS.md, updates session latest decision
- **Revise**: Handles revision workflow, updates artifact status
- **Status**: Shows current progress (different view than recovery message)

---

## For More Information

- **Session state structure**: `session-state.md` at workspace root
- **Decision log**: `DECISIONS.md` at workspace root
- **Templates**: `.ai/templates/session-state-template.md`
- **Integration**: Manage Session (`.ai/skills/manage-session.md`)
- **Architecture**: ARCHITECTURE.md (session continuity patterns)

---

**Session Resume runs automatically at conversation start, but you can invoke it manually with `/resume` to review context anytime.** 🔄
