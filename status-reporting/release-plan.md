# Stage 6: Release Plan — Status Reporting v1.0

**Status:** LOCKED
**Created:** March 16, 2026
**Last updated:** March 16, 2026
**Owner:** PM / Agile Coach (you)

---

## Release Info

**Release name/version:** v1.0 — Core MVP
**Target ship date:** Q2 2026 (end of quarter)
**Roadmap items this delivers:** API Access Spike + Core MVP (aggregate → synthesize → Loop draft → review → send)
**Success criteria:** Tied to Hypothesis metrics — user spends < 10 min/week on reporting at steady state; positive user satisfaction; ≥ 80% onboarding completion

---

## Features in This Release

| # | Feature | Owner | Effort | Status | Doc |
|---|---------|-------|--------|--------|-----|
| 1 | **API Access Spike & Source Connectors** — validate and connect available APIs (Outlook, Teams, SharePoint, Jira, Confluence, Notebooks, Bitbucket) using Microsoft Graph and Atlassian REST | Eng Lead | 2–3 weeks | Spec needed | [ ] |
| 2 | **Weekly Activity Aggregation Engine** — collect and normalise activity signals from connected sources into a structured weekly digest | Eng | 2–3 weeks | Spec needed | [ ] |
| 3 | **AI Synthesis & Report Generation** — pass structured digest through GenAI (M365 Copilot / OpenAI / Gemini) to produce a professionally authored narrative report | PM + Eng | 2–3 weeks | Spec needed | [ ] |
| 4 | **Microsoft Loop Output & User Review Flow** — write generated report draft to a Loop doc; user reviews, edits if needed, and sends to manager | PM + Designer | 1–2 weeks | Spec needed | [ ] |

---

## Release Success Criteria

| Criterion | Target | Measurement |
|-----------|--------|-------------|
| Time spent on weekly reporting at steady state | < 10 min/week after first 2 successful reports | User self-report |
| Onboarding completion rate | ≥ 80% complete first successful report within 2 weeks | Product telemetry |
| Draft edit rate | ≤ 30% of generated content edited before sending | Product telemetry |
| User satisfaction | Positive — user rates experience as valuable | Post-send satisfaction prompt |
| Retention at week 4 | ≥ 70% of users sent a report in each of the first 4 weeks | Product telemetry |

---

## Go/No-Go Criteria

| Scenario | Decision | Next step |
|----------|----------|-----------|
| Key APIs (Outlook + Teams) are inaccessible in corporate tenant after spike | Descope to available sources; do not delay release | Ship with available sources; document gaps; revisit in Q4 source expansion |
| Loop write-back API is not viable | Descope Loop output; fall back to Confluence page output | Swap output target; update Feature 4 spec accordingly |
| AI synthesis produces output below professional quality bar in prototype testing | No-go on release until quality bar is met | Additional prompt engineering sprint before ship |
| Onboarding flow requires > 30 min of user setup time | No-go — violates Strategic Filter 1 | Redesign auth/setup flow before release |
| Any feature requires user to manually input activity data | No-go — violates Strategic Filter 1 | Descope or redesign before release |

---

## Out of Scope for This Release

| Item | Why deferred | Next opportunity |
|------|-------------|-----------------|
| Automated send (no user review) | Violates Strategic Filter 2 — user must review before report reaches manager | Never, unless trust data strongly supports it |
| Multi-audience distribution | Violates Strategic Filter 3 — single manager only in v1 | Q1 2027 |
| Exclusion / redaction of specific items | Useful but not blocking for MVP — user can edit in Loop | Q3 2026 onboarding improvements |
| Bi-weekly or on-demand scheduling | Weekly cadence only in v1; schedule flexibility is quality-of-life improvement | Q3 2026 |
| Team-level reporting | Different product surface; out of scope for v1 | Separate track post-Vision validation |

---

## Rollout & Communication Plan

**Internal:**
- PM reviews all 4 Feature Documents before handing to engineering
- Eng Lead confirms API spike results before Feature 2 and 3 development begins
- Designer reviews Loop output UX (Feature 4) before build

**External:**
- Single pilot user (the PM/Agile Coach owner) runs first 4 weeks
- No external customer communication in v1.0 — internal pilot only
- Feedback captured via post-send satisfaction prompt and weekly self-report

---

## Role Reviews

| Role | Review focus | Status |
|------|-------------|--------|
| PM | Full release scope and sequencing | ✅ Confirmed |
| Eng Lead | API feasibility, effort estimates, go/no-go criteria | ✅ Confirmed — spike first |
| Designer | Onboarding UX, Loop output review flow, empty states | ✅ Confirmed — review-before-send is mandatory |
| Business Owner | Strategic alignment, go/no-go criteria, success signal | ✅ Confirmed — positive user satisfaction is the signal |

---

## Gate Validation Checklist

- ☑ Feature list is complete — 4 features, each will receive a Feature Document
- ☑ Go/no-go criteria are explicit and measurable
- ☑ Success criteria tie back to Hypothesis metrics
- ☑ All roles (PM, Eng Lead, Designer, Business Owner) have reviewed
- ☑ Out-of-scope items are documented
- ☑ User confirmed: "This is what ships. Q2 2026 is the target."

**Gate Status: OPEN — Stage 6 LOCKED. Ready to proceed to Stage 7.**

---

> ⚠️ **Critical:** Stage 7 requires exactly **4 Feature Documents** — one per feature listed above. No additional features may be added.
