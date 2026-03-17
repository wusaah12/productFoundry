# Stage 3: Hypothesis — Status Reporting

**Status:** DRAFT
**Created:** March 16, 2026
**Last updated:** March 16, 2026
**Owner:** PM / Agile Coach (you)

---

## Core Hypothesis

We believe **Product Managers and Agile Coaches in corporate environments** who use **an automated weekly activity aggregation and AI-generated report tool** will result in **a significant reduction in time spent on status reporting AND increased confidence that their contributions are accurately visible to their manager** — measurable by users spending fewer than 10 minutes per week on report preparation (vs. 45–90 minutes today) after an initial onboarding period, and self-reporting high confidence in report completeness within 8 weeks of first use.

---

## Why We Believe This

Discovery confirmed that the time cost of status reporting is entirely a retrieval and synthesis problem — the information exists, scattered across 7 tools, but no system unifies it. GenAI frontier models (OpenAI, Gemini, M365 Copilot) are now capable of cross-source synthesis at a quality level that can produce professional-grade narrative prose. The gap between current pain and available technology is large enough that a well-scoped tool should deliver meaningful time savings. The primary uncertainty is not whether the tool can do it, but whether users persist through the learning curve long enough to reach the steady-state benefit.

---

## Falsification Criteria

| Evidence | Threshold | Consequence |
|----------|-----------|-------------|
| Time spent on report preparation at steady state (after onboarding) exceeds target | > 20 min/week after 4 weeks of use | Hypothesis fails on time-saving dimension — revisit AI synthesis quality or UX of review step |
| Users abandon the tool before reaching steady state | > 40% drop-off in first 3 weeks | Onboarding/learning curve is the product-killer — requires redesign of first-use experience |
| Users report low confidence in report completeness | < 60% of users self-rate completeness as "high" at week 8 | Aggregation coverage or AI synthesis is insufficient — revisit source integration or prompt design |
| Report quality is repeatedly edited heavily before sending | Users editing > 50% of generated content | AI output is not reaching professional quality bar — hypothesis on LLM synthesis quality is wrong |
| Manager feedback is neutral or negative | Manager perceives no improvement in visibility | Core value proposition (better visibility = better career outcomes) is not landing — problem framing needs revisit |

---

## Success Metrics

| Metric | Baseline | Target | Timeframe | How measured |
|--------|----------|--------|-----------|--------------|
| Time spent on weekly status reporting | ~45–90 min/week | < 10 min/week | By week 4 post-onboarding | User self-report (time diary or prompt) |
| Onboarding completion rate | N/A (new product) | ≥ 80% of users complete first successful report | By end of week 2 | Product telemetry / completion tracking |
| Report completeness confidence | Low (user-stated) | ≥ 70% of users rate completeness as "high" | By week 8 | User survey (post-send prompt) |
| Draft edit rate | N/A (new product) | ≤ 30% of generated content edited before sending | By week 4 | Product telemetry |
| Retention | N/A (new product) | ≥ 70% of users still sending weekly report at week 8 | Week 8 | Product telemetry |

---

## Riskiest Assumptions

1. **Users will persist through the initial learning curve without abandoning the tool**
   Risk: **High.** If the first 1–2 reports require significant setup effort (OAuth auth flows, source configuration across 7 systems) or produce low-quality output, users will not return.
   Validation: Design a frictionless onboarding flow; measure completion rate of first report; conduct follow-up interviews at week 2 with early users.

2. **The AI synthesis layer produces output that consistently meets the user's professional quality bar**
   Risk: **High.** LLM output is non-deterministic and "professional quality" is subjective. A single bad report that reaches the manager unreviewed could destroy trust in the tool permanently.
   Validation: Prototype testing with real weekly data; establish a mandatory review-before-send gate; monitor edit rates in early cohort.

3. **Corporate API access is grantable for all 7 data sources**
   Risk: **High.** Enterprise M365 tenants and Atlassian On-Prem/Data Center deployments frequently restrict API access. This could limit source coverage and reduce the tool's value.
   Validation: API access spike in Week 1 of development; design graceful degradation for partially available sources.

4. **Managers will perceive the Loop doc reports as higher quality than current manual reports**
   Risk: **Medium.** The value chain depends on the manager receiving a better artifact. If managers don't read Loop docs or don't notice the difference, the visibility problem is not solved.
   Validation: User interviews post-launch; ask users directly whether manager feedback has changed.

---

## Gate Validation Checklist

- ☑ Core hypothesis is falsifiable (clear disproof criteria exist)
- ☑ Success metrics are specific and measurable
- ☑ Baseline, target, and timeframe are defined for each metric
- ☑ Riskiest assumptions are identified (learning curve named as #1 risk)
- ☑ User confirmed: "This matches my intent"

**Gate Status: OPEN — Stage 3 LOCKED. Ready to proceed to Stage 4.**
