---
name: log-decision
description: 'Log major product decisions with rationale, alternatives, and context. Use when: making strategic choices, documenting assumptions, recording go/no-go decisions, capturing decision drivers, creating audit trails for future reference.'
argument-hint: 'Optional: decision category (e.g., "scope" or "feature-prioritization")'
user-invocable: true
---

# Log Decision — Decision Tracking Skill

## What This Does

Captures major product decisions in a centralized, git-tracked audit trail. Each logged decision includes:

- ✅ **Decision statement** — What was decided
- ✅ **Rationale** — Why this choice was made
- ✅ **Alternatives considered** — What else was on the table
- ✅ **Decision driver** — Who made the call
- ✅ **Stage context** — Which discovery stage
- ✅ **Impact** — How this affects downstream work
- ✅ **Date & timestamp** — When it was decided

Decisions are logged to `decisions/DECISIONS.md` and committed to git for full traceability.

## When to Use

| Scenario | Decision Type | Impact Level |
|----------|---------------|--------------|
| User segment narrowing | Strategic | 🔴 High — changes target entirely |
| Feature prioritization | Scope | 🟠 Medium — affects roadmap sequencing |
| Technical approach choice | Architecture | 🟠 Medium — shapes engineering effort |
| Metric definition | Measurement | 🟢 Low — clarifies success definition |
| Vision statement locked | Governance | 🔴 High — gates everything downstream |
| Release scope finalized | Governance | 🔴 High — gates feature doc writing |
| Go/No-Go decision | Governance | 🔴 Critical — gates launch |
| Hypothesis test result | Validation | 🟠 Medium — informs roadmap |
| Assumption overridden | Strategy | 🟡 Medium — changes understanding |

**Rule**: Log decisions that affect **downstream artifact content** or **stage gate progression**.

**Don't log**: Minor edits, formatting changes, or internal brainstorming notes.

## How Decision Logging Works

When you type `/log-decision` in Copilot Chat:

1. **Decision Logger Agent loads** → Understands current stage and context
2. **Prompts for decision details** → Questions about what, why, alternatives, driver
3. **Formats the decision entry** → Adds timestamp, stage context, impact assessment
4. **Appends to `decisions/DECISIONS.md`** → Adds to audit trail
5. **Commits to git** → Records decision in version control with timestamp
6. **Confirms in chat** → Shows logged decision and link to file

## Decision Log Structure

Decisions are organized chronologically with consistent metadata:

```markdown
## Decision [N]: [Decision Title]

**Date**: 2026-03-16 14:30 UTC
**Stage**: 2 — Discovery Report
**Decision Maker**: You (PM)
**Impact Level**: 🟠 Medium — Affects roadmap prioritization

### Decision Statement
[What was decided, in 1-2 sentences]

### Rationale
[Why this choice was made. Reference data, user feedback, constraints, or strategic goals.]

### Alternatives Considered
- **Option A**: [Description] — Rejected because [reason]
- **Option B**: [Description] — Rejected because [reason]
- **Option C**: [Chosen] — Selected because [primary driver]

### Decision Driver
[What was the key factor? Examples: user feedback, technical constraint, business priority, executive mandate]

### Context
[Any additional context: Stage progress, related decisions, outstanding questions]

### Follow-Up Actions
- [ ] Communicate decision to [stakeholder]
- [ ] Update [artifact] with this decision
- [ ] Schedule [follow-up activity]

---
```

## Example Logged Decisions

### Example 1: User Segment Decision

```markdown
## Decision 1: Focus on Intermediate+ Weightlifters, Not Beginners

**Date**: 2026-03-16 10:15 UTC
**Stage**: 1 — Idea Brief
**Decision Maker**: You (Founder/PM)
**Impact Level**: 🔴 High — Completely changes target user

### Decision Statement
We will focus the MVP on intermediate-to-advanced weightlifters (3+ years experience, 4-6x/week training). We will explicitly NOT build for beginners in V1.

### Rationale
During Stage 1 idea exploration, we identified that:
- Beginners use simple apps (Apple Health, basic spreadsheets)
- Intermediate+ lifters have complex logging needs (multiple sets, exercises, variations, progression tracking)
- Intermediate+ users are willing to pay for specialized solutions
- Founder persona is intermediate+ → deep empathy with use case
- Market research shows 15M+ dedicated strength athletes globally; beginner market is saturated

### Alternatives Considered
- **Option A**: Build for everyone (beginners + advanced) — Rejected: Feature bloat, no coherent vision
- **Option B**: Build only for elite athletes (advanced+) — Rejected: Market too small, high competition (Hevy, Strong already own this)
- **Option C**: Focus on intermediate+ (3+ years, 4-6x/week) — **CHOSEN** — Greenfield opportunity + founder fit

### Decision Driver
User research showing willingness-to-pay increases dramatically at intermediate level + founder deep expertise in this segment

### Context
This decision locks our target user for Stages 2–4. All discovery research, hypothesis, and vision must align with intermediate+ needs.

### Follow-Up Actions
- [ ] Update Stage 1 artifact with target user precision
- [ ] Screen Stage 2 interviewees to match profile
- [ ] Validate pain point (fast logging during sets) resonates with 5+ users in segment
```

### Example 2: Feature Prioritization Decision

```markdown
## Decision 3: Prioritize Speed of Logging Over Analytics in V1

**Date**: 2026-03-16 15:45 UTC
**Stage**: 3 — Hypothesis
**Decision Maker**: You + Eng Lead input
**Impact Level**: 🟠 Medium — Shapes feature prioritization

### Decision Statement
V1 feature set prioritizes frictionless, sub-5-second logging over comprehensive analytics and reporting. Analytics will be V2+.

### Rationale
- User pain point is losing focus between sets (speed is critical)
- Fast logging is the core value prop; analytics are table stakes
- Eng Lead: Analytics would add 40% engineering effort with O(n) database queries; logging is O(1) with cache
- Market data: Users switch away from apps due to slowness more than lack of features
- Hypothesis: "Speed of logging is the #1 factor in sustained engagement"

### Alternatives Considered
- **Option A**: Include analytics in V1 (progress charts, monthly summaries) — Rejected: Delays launch, not core pain point
- **Option B**: Minimal logging, focus on analytics — Rejected: Doesn't solve the stated problem
- **Option C**: Fast logging only, defer analytics — **CHOSEN** — Validates core hypothesis first, easier to iterate

### Decision Driver
User interviews + technical feasibility analysis + hypothesis validation strategy

### Context
This decision directly informs Stage 5 Roadmap (Phase 1 = logging MVP, Phase 2 = analytics). Locked for Release Plan scope.

### Follow-Up Actions
- [ ] Update Hypothesis with "Analytics deferred to V2" assumption
- [ ] Communicate cut scope to business owner
- [ ] Ensure Feature Docs don't include analytics scenarios
```

### Example 3: Go/No-Go Decision

```markdown
## Decision 8: GO — Proceed to Engineering (Release Plan Locked)

**Date**: 2026-03-20 09:00 UTC
**Stage**: 6 — Release Plan
**Decision Maker**: You + Business Owner
**Impact Level**: 🔴 Critical — Gates engineering handoff

### Decision Statement
Go/No-Go: **GO to engineering.** Release Plan is locked. Feature Documents ready for dev team.

### Rationale
Gate criteria met:
- ✅ Vision & Mission locked (Stage 4 complete)
- ✅ Roadmap approved by business owner (Stage 5 complete)
- ✅ Release scope is clear: 5 core features in Phase 1
- ✅ All Feature Documents have BDD scenarios + acceptance criteria
- ✅ Eng Lead has reviewed and estimated: 6 weeks, 1 engineer
- ✅ Designer has reviewed all UX flows + mobile constraints
- ✅ Business owner sign-off on timeline + scope

### Alternatives Considered
- **Option A**: Stop here, rethink scope — Rejected: All gates passed, no new data
- **Option B**: Wait for more validation — Rejected: Hypothesis-driven approach validates in market, not before
- **Option C**: **Proceed to engineering** — CHOSEN — All criteria met, risk is validated

### Decision Driver
All stage gates passed + confidence in hypothesis + team alignment + business owner approval

### Context
This is the final gate before engineering begins. Feature docs are specification-complete.

### Follow-Up Actions
- [ ] Export Feature Docs to Jira (use `/export-to-jira`)
- [ ] Schedule kickoff with engineering team
- [ ] Update session state: Move to Stage 7 "Feature Docs LOCKED"
- [ ] Tag git commit: `git tag -a stage-6-go-decision -m "Released to engineering"`
```

## Procedure: Log a Decision

### Before Typing `/log-decision`

1. **Identify the decision** — What choice was made?
2. **Capture the rationale** — Why this choice, not alternatives?
3. **Know the stage** — Which discovery stage are you in?
4. **Assess the impact** — Is this high, medium, or low impact?

### Running Decision Logging

In Copilot Chat, type:
```
/log-decision
```

Copilot will prompt you for:
- Decision statement
- Rationale (the "why")
- Alternatives considered
- Decision driver (what was the key factor?)
- Impact level (high/medium/low)
- Follow-up actions

### Decision Logger Adds

The Decision Logger Agent automatically:
- Adds timestamp (UTC)
- Links to current stage
- Numbers the decision (Decision 1, 2, 3, etc.)
- Commits to git with timestamp in commit message
- Returns confirmation with link to decision in `decisions/DECISIONS.md`

---

## Decision Log Structure: decisions/DECISIONS.md

Your decision log lives at `decisions/DECISIONS.md` and is git-tracked:

```markdown
# Product Discovery Decisions — Workout Logging App

> Audit trail of all major product decisions made during discovery.
> Each decision includes rationale, alternatives, and impact assessment.
> Decisions are immutable (append-only); decisions are never deleted.

## Decision 1: [Title]
...

## Decision 2: [Title]
...

## Decision 3: [Title]
...
```

### Viewing Decision History

```bash
# See all logged decisions:
cat decisions/DECISIONS.md

# See git history of decision changes:
git log --oneline decisions/DECISIONS.md

# See commits that logged decisions:
git log --grep="Decision logged"

# See all decision-related commits:
git log --all | grep -i decision
```

## Decision Categories

Decisions typically fall into these categories. Tag them for filtering:

| Category | Examples |
|----------|----------|
| **User/Market** | Target segment, user persona, pain point validation |
| **Scope** | In/out of scope, MVP vs. future phases |
| **Strategy** | Vision/mission choices, strategic filters |
| **Prioritization** | Feature rank, roadmap sequencing |
| **Technical** | Architecture, tech stack, technical approach |
| **Governance** | Go/no-go, vision lock, roadmap approval |
| **Metrics** | Success metric definition, validation criteria |
| **Resource** | Timeline, team size, budget constraints |

## Common Decision Patterns

### Pattern 1: Assumption Override

```
Original assumption: "All users want analytics"
New decision: "Analytics is not core pain point; defer to V2"
Reason: User interviews showed users care about speed first

Log this! It changes your understanding.
```

### Pattern 2: Go/No-Go Gate

```
Status check: All Stage 6 criteria met?
Decision: "Yes, proceed to engineering"
Gate: Officially locked, no turning back

Log this! It's the critical gate.
```

### Pattern 3: Scope Cut

```
Feature request: "Add rest timer"
Decision: "Out of scope for V1"
Reason: Scope lock at Stage 6; no new features beyond Release Plan

Log this! Documents what was intentionally excluded.
```

### Pattern 4: User Research Finding

```
Interview result: "5/5 users mentioned losing focus between sets"
Decision: Define success metric as "sub-5-second logging"
Impact: Changes hypothesis + roadmap prioritization

Log this! It's a high-impact finding.
```

## Best Practices

1. **Log at decision time** — Don't batch decisions; log immediately after the choice is made
2. **Be specific** — "We decided to focus on intermediate weightlifters" not "We narrowed scope"
3. **Include rationale** — Future you will ask "Why did we make this choice?"
4. **Capture alternatives** — Shows you considered other paths
5. **Assess impact** — Is this a minor clarification or a major pivot?
6. **Commit to git** — Uses git's immutability for audit trail
7. **Link to artifacts** — "Decision updated Stage 4 Vision to include X"

## When NOT to Log

- ❌ Minor edits or formatting changes
- ❌ Brainstorming notes or internal thinking
- ❌ Reversals of recent decisions (log the new decision instead)
- ❌ Decisions that don't affect downstream work

## Related Commands

| Command | Use Case |
|---------|----------|
| `/log-decision` | Log a major discovery decision |
| `/validate` | Check artifact readiness (validates against decisions) |
| `/next-stage` | Progression gate (decision log can block progression) |
| `/export` | Export decisions for stakeholders |
| `git log decisions/` | View decision commit history |

## For More Information

- **Decision Logger Agent**: See `.github/agents/utility.decision-logger.agent.md`
- **Decision Log File**: See `decisions/DECISIONS.md` (your audit trail)
- **Examples**: Review logged decisions in your current session
- **Git Integration**: Decision commits are immutable (append-only)

---

**Ready to log a decision?** Type `/log-decision` in Copilot Chat and capture your choice! 📝

