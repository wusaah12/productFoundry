---
name: validate
description: 'Validate product discovery artifacts against stage-specific quality criteria. Use when: checking artifact readiness, passing quality gates, understanding validation requirements, preparing for stage progression.
user-invocable: true
argument-hint: 'Optional: stage name (e.g., "stage-2") or artifact name'
---

# Validate Artifacts — Quality Gate Skill

## What This Does

Validates your product discovery artifacts against stage-specific exit criteria. Each stage has a quality checklist that must be satisfied before progression:

- ✅ **Checks completeness** — Are all required sections present?
- ✅ **Validates content quality** — Is information substantive and well-structured?
- ✅ **Identifies gaps** — What's missing or incomplete?
- ✅ **Provides unblock paths** — How to fix blocking issues

## When to Use

| Scenario | Command |
|----------|---------|
| Before progressing to next stage | `/validate` |
| Check specific stage's requirements | `/validate stage-2` |
| Understand validation rules | Read this skill |
| Debug a gate block | Check "Blocking Reasons" section below |

## How Validation Works

When you type `/validate` in Copilot Chat:

1. **Quality Gate Agent loads** → Orchestrator routes your request to the Quality Gate Agent
2. **Current stage detected** → Reads `session-state.md` to identify your stage
3. **Validation checklist runs** → Evaluates artifact against stage-specific criteria
4. **Results returned** → Tells you PASS ✅ or BLOCK ❌ with specific reasons

## Stage Exit Criteria

### Stage 1: Idea Brief

```
✓ Required Sections:
☐ Problem Statement (clear, specific, 1-2 paragraphs)
☐ Target User (role, company size, pain points)
☐ Key Differentiator (what makes this different)
☐ Initial Assumptions (3-5 hypotheses to validate)
☐ Next Steps section

✓ Quality Checks:
☐ Problem is solvable (not too vague)
☐ Target user is specific (not "anyone")
☐ Scope is reasonable (not solving everything)
☐ Status field marked as "In Progress" or "Ready for Review"

⏳ Status: READY when all sections complete and content is substantive
```

### Stage 2: Discovery Report

```
✓ Required Sections:
☐ Research Summary (user interviews, surveys)
☐ Competitive Analysis (3-5 competitor reviews)
☐ Validated Assumptions (which Stage 1 assumptions held up?)
☐ Identified Constraints (legal, technical, market)
☐ User Personas (2-3 detailed profiles)
☐ Pain Points & Opportunities (ranked by severity)

✓ Quality Checks:
☐ At least 5 user interviews documented
☐ Competitive analysis includes feature matrix
☐ Personas are data-driven (not guessed)
☐ Pain points are specific and ranked
☐ Constraints are realistic and documented

⏳ Status: READY when research is substantive and cross-referenced with Stage 1
```

### Stage 3: Hypothesis

```
✓ Required Sections:
☐ Core Hypothesis (statement of belief to test)
☐ Success Metrics (SMART — Specific, Measurable, Achievable, Relevant, Time-bound)
☐ Falsification Criteria (how do we know we're wrong?)
☐ Risk Ranking (top 3 risks and mitigation)
☐ Validation Plan (how to test hypothesis)

✓ Quality Checks:
☐ Hypothesis is falsifiable (not tautological)
☐ Metrics are quantifiable (not "users like it")
☐ Have defined success target (e.g., "70% user retention at 30 days")
☐ Risks are specific (not vague)
☐ Validation plan is actionable

⏳ Status: READY when hypothesis is falsifiable and metrics are measurable
```

### Stage 4: Vision & Mission

```
✓ Required Sections:
☐ Vision Statement (1-3 years out, inspiring)
☐ Mission Statement (how we deliver the vision)
☐ Strategic Filters (decision-making principles)
☐ Success Definition (long-term north star)
☐ Business Owner Sign-Off (REQUIRED FOR GATE PASS)

✓ Quality Checks:
☐ Vision is inspiring but achievable
☐ Mission aligns with Stage 3 hypothesis
☐ Filters are specific (3-5 decision rules)
☐ Business owner has reviewed and approved
☐ Document is locked (no further edits without exception)

⏳ Status: READY only after Business Owner explicit approval
**↳ BLOCKING GATE: Cannot progress without business owner sign-off**
```

### Stage 5: Roadmap

```
✓ Required Sections:
☐ Prioritized Capabilities (ranked 1-N)
☐ Effort Estimates (S/M/L for each capability)
☐ Dependencies (what must ship first?)
☐ Release Timeline (quarters or milestones)
☐ Business Owner Priority Approval (REQUIRED FOR GATE PASS)

✓ Quality Checks:
☐ Capabilities map to Stage 4 vision
☐ Prioritization rationale is documented
☐ Dependencies are realistic
☐ Timeline is realistic (includes testing, buffer)
☐ Business owner approves priority order

⏳ Status: READY only after business owner approves roadmap
**↳ BLOCKING GATE: Cannot progress without roadmap lock**
```

### Stage 6: Release Plan

```
✓ Required Sections:
☐ Release Scope (which roadmap capabilities?)
☐ Feature Breakdown (capabilities → user stories)
☐ Go/No-Go Criteria (what defines success?)
☐ Go/No-Go Decision (Business Owner approval)
☐ Success Metrics for Release (tracking KPIs)

✓ Quality Checks:
☐ Scope is clearly defined (no scope creep)
☐ Go/no-go decision is explicit (Go, No-Go, or Conditional)
☐ Business owner has signed off
☐ Success metrics are quantifiable
☐ Release plan is locked

⏳ Status: READY only after go/no-go decision
**↳ BLOCKING GATE: Cannot write Feature Docs without Go decision**
```

### Stage 7: Feature Documents (BDD)

```
✓ Required Sections (per capability):
☐ User Story (As a [role], I want [action], so that [value])
☐ BDD Scenarios (Given/When/Then format, 3-5 per story)
☐ Acceptance Criteria (testable conditions)
☐ Vision Check (validates Stage 4 alignment)
☐ Release Scope Check (confirms in Stage 6 scope)

✓ Quality Checks:
☐ Each capability has ≥1 feature document
☐ BDD scenarios are specific (not generic)
☐ Acceptance criteria are testable by QA
☐ No new capabilities outside Stage 6 scope
☐ Technical review complete (Eng Lead approved)
☐ UX review complete (Designer approved)

⏳ Status: READY when all reviews complete and handoff to engineering
```

## Common Blocking Reasons & Solutions

| Blocker | Reason | How to Unblock |
|---------|--------|---------------|
| **Missing section** | Stage 1: "No target user defined" | Run `/researcher: user personas` when you reach Stage 2 |
| **Vague content** | Stage 2: "Pain points not ranked by severity" | Run `/researcher: rank pain points` |
| **Hypothesis not falsifiable** | Stage 3: Hypothesis is "users will like the app" | Rewrite: "70% of users will log 3+ workouts/week" + success metric |
| **No metrics** | Stage 3: "Success metric is missing" | Define SMART metric: "30-day retention ≥ 70%" |
| **Missing business sign-off** | Stage 4 → 5 or 6: "Business owner not approved" | Run `/ask-business-owner: strategic alignment check` |
| **Scope creep** | Stage 7: "Features outside Stage 6 scope" | Remove or add to Roadmap, revalidate Stage 6 |
| **BDD format broken** | Stage 7: "Missing Given/When/Then in scenarios" | Restructure: `Given [setup], When [action], Then [assertion]` |

## Procedure: Pass Validation

### Before Running `/validate`

1. **Read your artifact** — Ensure all sections from checklist are present
2. **Check completeness** — Each section has substantive content (not placeholders)
3. **Verify stage alignment** — Your content matches the current stage focus
4. **Spot-check quality** — Look for vague language, missing links, incomplete lists

### Running Validation

In Copilot Chat, type:
```
/validate
```

Or validate a specific stage:
```
/validate stage-2
```

### Interpreting Results

**✅ PASS** → All criteria met. You can now:
```
/next-stage     # Progress to next stage
```

**⚠️ PARTIAL** → Some criteria missing. Review the list:
```
/validate      # Shows what's missing
[Fix the gaps]
/validate      # Re-run to confirm
```

**❌ BLOCK** → Critical criteria not met. Check:
- Do you have all required sections?
- Is content substantive (not placeholder)?
- Are metrics measurable (Stage 3+)?
- Is business owner sign-off present (Stages 4+)?

### When Blocked: Unblock Path

Example flow if Stage 2 validation fails:

```
You:     /validate
Gate:    ❌ BLOCK — Competitive analysis missing (need 3+ competitors)
You:     /ask-discovery-research: competitive analysis
Disc:    [Provides competitor matrix]
You:     [Add to Stage 2 artifact]
You:     /validate
Gate:    ⚠️ PARTIAL — Pain points need severity ranking
You:     [Rank by severity]
You:     /validate
Gate:    ✅ PASS — Ready for Stage 3
```

## Validation Philosophy

The validation system ensures **quality gates, not speed gates**. You can't rush:

- **Stage 3**: Hypothesis must be falsifiable (not just guessed)
- **Stage 4**: Vision must align with business (not solo PM decision)
- **Stage 5+**: Roadmap must have buy-in before execution

Each gate protects you from downstream waste. Spend time now to avoid rework later.

## For More Information

- **Agent handling validation**: See `.github/agents/orchestrator.quality-gate.agent.md`
- **Stage criteria source**: See `.github/agentconfig.yaml` (complete checklists)
- **Test your artifact**: Use `/validate` and review output
- **Log decisions**: When overriding gates, use `/log-decision` for audit trail

---

**Ready to validate?** Type `/validate` in Copilot Chat to check your current artifact! 🎯
