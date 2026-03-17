# EXAMPLE: Completed Stage 1 Idea Brief

> This is an example of what a completed, validated Idea Brief looks like.
> Once you complete your own ideas, it will follow this structure.

---

## Idea Brief — Weekly Engineering Status Report Generator

**Status:** LOCKED ✅  
**Created:** 2026-03-10  
**Last updated:** 2026-03-12  
**Owner:** Sarah (Product Manager)

---

### Problem Statement

Engineering managers spend 1–2 hours each Friday compiling weekly status updates from their team's work, manually pulling ticket information from Jira and synthesizing it into a readable format. This overhead prevents them from focusing on strategic work and team development.

---

### Target User

**Role:** Engineering Manager (team lead level, 5–15 direct reports)  
**Context:** Works in mid-to-large tech companies using Jira for ticket tracking  
**Frequency:** Weekly (usually Friday afternoon before status reviews)

---

### Core Pain Points

1. **Manual data extraction**  
   Managers manually query Jira every Friday to find tickets that closed, status, blockers. This is tedious and error-prone. Impact: 30–45 min of repetitive work per week.

2. **Synthesis bottleneck**  
   Even with raw ticket data, turning it into "here's what my team accomplished" requires reading, understanding context, and writing. Impact: Another 30–45 min per week.

3. **Context switching**  
   Friday afternoon is when managers need to context-switch to status-writing just as they're deep in project work. Impact: Cognitive overhead, task switching cost, delays real work.

---

### Initial Scope

**In scope:**
- Auto-query closed Jira tickets from the past week
- Summarize by epic/project
- Generate a templated status report
- Deliver to Slack or email

**Out of scope (for now):**
- Custom report layouts (template is standard)
- Real-time dashboard
- Integration with other tools (Asana, Linear, etc.)
- AI-generated narrative (just summaries)

**Constraints:**
- Must work with Jira Cloud API (not on-prem)
- Can't store manager's auth tokens
- Report generation must complete < 2 min (so it can be scheduled Friday 5pm)

---

### Open Questions for Discovery

| Question | Why it matters | Research needed |
|---|---|---|
| Do managers customize their reports, or is a template good enough? | Determines how flexible MVP needs to be. | Phone interview with 8–10 managers |
| What data do they actually share in status reports? | Determines what fields we need to pull. | Analyze existing status reports from managers |
| What happens if Jira API is down? Do they want fallback? | Determines error handling strategy. | Ask during interviews how critical reliability is |
| Do they trust auto-generated summaries, or do they always edit? | Determines if we need an edit UI. | Watch managers use draft report. |
| Which Slack channels or email aliases should reports go to? | Determines distribution endpoint. | Interview leads and their managers. |

---

### Success Metrics (early hypothesis)

What will we measure to know if this idea has potential?

| Metric | Baseline | Target | Timeframe |
|--------|----------|--------|-----------|
| Manager adoption (% enabled) | 0% | 40%+ | 3 months post-launch |
| Avg time saved per report | ~90 min | <15 min | 3 months post-launch |
| Manager satisfaction (NPS) | N/A | 40+ | 3 months post-launch |
| Actual usage (% of Friday reports generated) | N/A | 60%+ | 3 months post-launch |

---

## Gate Validation Checklist ✅

Before moving to Stage 2, confirmed:

- ☑️ Problem statement is specific (1–2 sentences, not vague)
- ☑️ Target user role and context are clearly defined
- ☑️ Core pain points are genuine and ranked
- ☑️ User has confirmed: "Does this reflect your idea accurately?" → YES
- ☑️ No open questions that block Discovery → Some gaps, but we'll explore in Stage 2

**Status:** Gate is **OPEN** ✅ → Ready to move to Stage 2

---

## Notes from Validation

Meeting with stakeholder (Sarah + 3 managers):

> "This is exactly the problem. We spend so much time on status writes. The template approach is fine—we'd adjust if needed, but a standard format is actually good for consistency."
> 
> "The only twist: sometimes we need to call out blockers prominently. Make sure those aren't buried."
> 
> "Reliability matters because we use these reports in director meetings. If the system is down, we need to know by Thursday, not Friday 5pm."

---

## Next Steps

✅ Idea Brief is **LOCKED**.  
→ Moving to **Stage 2: Discovery & Research**

**Next session:** Email survey + 8–10 manager interviews to validate assumptions. Eng Lead will audit technical feasibility (Jira API, scheduling, Slack integration).

---

**Use this as a template for your own Idea Brief.**  
Replace problem, user, pain points with your own.

---

**Want to get started?** Open Copilot Chat and ask:

```
I'm using this as a template for my own product. Here's my idea:
[Paste your idea here]

Can you help me create a similar Idea Brief?
```

Copilot will guide you through the structure and validate each section.
