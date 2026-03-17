# Stage 5: Product Roadmap — Status Reporting

**Status:** LOCKED
**Created:** March 16, 2026
**Last updated:** March 16, 2026
**Owner:** PM / Agile Coach (you)
**Eng Lead review:** Confirmed — API access risk acknowledged, spike sequenced first
**Business Owner approval:** Confirmed — value sequencing approved, success signal: positive user satisfaction

---

## Strategic Theme

Prove zero-effort weekly reporting works for one user before scaling to all knowledge workers in product and delivery roles.

---

## Roadmap by Quarter

| Quarter | Initiative | Vision link | Priority | Risk | Owner |
|---------|-----------|-------------|----------|------|-------|
| **Q2 2026** | **API Access Spike** — validate which of the 7 data source APIs are accessible in the target corporate environment and establish OAuth/auth patterns | Filter 1: zero-effort capture depends entirely on API access | P0 | High | Eng Lead |
| **Q2 2026** | **Core MVP: Aggregation + Synthesis + Loop Output** — connect available APIs, run weekly activity through AI synthesis, deliver draft to Microsoft Loop for user review and send | All 3 filters: zero manual input, professional output, single manager audience | P0 | Medium | PM + Eng |
| **Q3 2026** | **Onboarding & Learning Curve Reduction** — streamline first-use setup, improve configuration UX, reduce time-to-first-successful-report based on pilot feedback | Filter 2: output quality and trust; reduces drop-off risk identified as #1 hypothesis risk | P1 | Low | PM + Designer |
| **Q3 2026** | **AI Output Quality Improvements** — iterate prompt engineering and synthesis based on real user edit rates; target ≤ 30% draft edit rate | Filter 2: professional quality floor | P1 | Medium | Eng |
| **Q4 2026** | **Source Expansion** — integrate any APIs blocked in Q2 spike (if unblocked); add additional sources as user demand surfaces | Filter 1: expand zero-effort capture coverage | P2 | Medium | Eng |
| **Q4 2026** | **Broader Knowledge Worker Roles** — extend beyond PM/Agile Coach to adjacent delivery roles (Eng Leads, Scrum Masters, Delivery Managers) | Vision: knowledge workers in product AND delivery roles | P2 | Low | PM |
| **Q1 2027** | **Multi-audience and Distribution Options** — structured Confluence page option, scheduled delivery, optional second audience | Filter 3 expanded: serve users who graduate beyond single-manager scope | P3 | Low | PM + Eng |

---

## Prioritization Rationale

1. **API Access Spike must land before any build work begins.**
   The riskiest technical bet is whether the 7 data source APIs are accessible in a locked-down corporate environment. Building integrations against APIs we can't access is waste. The spike de-risks the entire MVP in the first weeks of Q2.

2. **Core MVP ships within Q2 2026 — one quarter.**
   The hypothesis is validated or disproved only through real use. A working end-to-end flow (aggregate → synthesize → Loop draft → user review → send) is the minimum test of the core value proposition. Everything else is optimization.

3. **Onboarding and quality improvements land in Q3 based on pilot data.**
   The learning curve risk is real but can only be characterized after real users attempt onboarding. Q3 initiatives are explicitly driven by Q2 pilot feedback — not pre-built assumptions.

4. **Expansion and scale are deferred until the single-user case is proven.**
   Multi-audience, team reporting, and broader roles are Vision-aligned but premature until user satisfaction is validated at the single PM/Agile Coach level.

---

## Explicitly NOT on Roadmap

| Item | Why deferred | When to revisit |
|------|-------------|-----------------|
| Real-time dashboards | Out of scope per Idea Brief; adds complexity without serving core weekly reporting mission | Post-Vision review if user demand emerges |
| Time tracking | Off-strategy — requires manual input, violates Strategic Filter 1 | Never unless user behavior changes fundamentally |
| Multi-audience distribution | Strategic Filter 3 explicitly defers this until v1 single-manager case is proven | Q1 2027 or after pilot success metrics are met |
| Team-level reporting | Different product surface; different user (manager, not individual contributor) | Separate roadmap track if validated |
| Automated send (no review step) | Violates Strategic Filter 2 — bypasses user editorial control; trust-breaking failure mode | Only if user trust data strongly supports it post-pilot |

---

## Dependencies & Technical Risks

| Initiative | Depends on | Risk if blocked | Mitigation |
|-----------|-----------|----------------|------------|
| Core MVP | API Access Spike results | If key APIs (Outlook, Teams) are inaccessible, MVP scope must reduce to available sources | Design MVP to degrade gracefully — build around available APIs, surface gaps transparently to user |
| AI Synthesis Quality | Access to OpenAI / Gemini / M365 Copilot | Corporate data policy may restrict external LLM; M365 Copilot may be only compliant path | Architect synthesis layer to be LLM-agnostic; validate data policy before committing to provider |
| Loop Output | Microsoft Loop write-back API | Loop API is newer — write-back capability needs proof-of-concept | Spike Loop API in Week 1 alongside auth spike; fallback to Confluence page if Loop is blocked |
| Source Expansion (Q4) | API Access Spike + Q2 learnings | Blocked APIs may remain blocked in corporate environments | Prioritize cloud-hosted source variants (Jira Cloud, Confluence Cloud) over On-Prem/DC |

---

## Gate Validation Checklist

- ☑ All initiatives explicitly tie back to Vision (visible link in table)
- ☑ Roadmap is sequenced by quarters
- ☑ Eng Lead validated: API spike sequenced first; Loop API proof-of-concept recommended; LLM-agnostic architecture flagged
- ☑ Dependencies and risks are documented
- ☑ Deprioritized items are listed with reason
- ☑ User confirmed: sequence makes sense and is approved

**Gate Status: OPEN — Stage 5 LOCKED. Ready to proceed to Stage 6.**

---

> ⚠️ **Critical:** Every item in the Release Plan must come from this Roadmap. No features may be added at Stage 6 that are not represented here.
