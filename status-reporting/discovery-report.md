# Stage 2: Discovery Report — Status Reporting

**Status:** LOCKED
**Created:** March 16, 2026
**Last updated:** March 16, 2026
**Owner:** PM / Agile Coach (you)
**Roles contributing:** PM, Eng Lead, Designer

---

## User Needs Surfaced

1. **Zero-effort activity capture across all tools**
   Evidence: User-reported; manually reconstructing activity from 7 sources (Outlook, SharePoint, Confluence, Jira, MS Teams, Notebooks, Bitbucket) is the primary time sink.
   Priority: High

2. **A report that reads as professionally authored, not machine-generated**
   Evidence: User-stated constraint — output must feel authored. Manager relationship depends on perceived quality, not raw data dump.
   Priority: High

3. **Review-before-send control for the user**
   Evidence: User confirmed they will catch errors themselves; no automated correction flow required in v1. User retains editorial authority.
   Priority: High

4. **Delivery in Microsoft Loop**
   Evidence: User-specified output format. Manager reads the Loop doc directly — the user and the audience are different people.
   Priority: High

5. **Single-audience focus (direct manager only)**
   Evidence: User-specified. No multi-audience distribution, no team-level reporting in scope.
   Priority: High

---

## Competitive Landscape

| Product | What it does | Gaps they miss |
|---------|-------------|----------------|
| **M365 Copilot (native)** | Summarizes emails, meetings, chats within M365 ecosystem | No cross-tool aggregation (Jira, Confluence, Bitbucket excluded); no structured weekly report; no manager-ready output format |
| **Atlassian Intelligence** | AI-assisted Confluence/Jira summarization | M365-blind (no Outlook, Teams, SharePoint); no unified weekly narrative; not manager-facing |
| **Reclaim.ai / Timecamp** | Time tracking and activity logging | Focused on time blocks, not contribution narrative; requires manual tagging; no natural language report generation |
| **Notion AI / Confluence AI** | Page summarization and drafting assistance | Requires content to already be in-system; does not aggregate across external tools |
| **Personal standups / status bots (Geekbot, etc.)** | Async check-in prompts via Slack | Requires manual input each session; no aggregation; output is raw responses, not polished reports |

**Differentiation opportunity:**
No existing tool aggregates across the full M365 + Atlassian + Bitbucket stack and produces a single, manager-ready, professionally authored weekly report. The gap is the synthesis layer — not just aggregation, but narrative construction that reads as a PM's own voice.

---

## Key Assumptions

| Assumption | Risk | How to validate |
|-----------|------|----------------|
| APIs for all 7 data sources (Outlook, SharePoint, Confluence, Jira, MS Teams, Notebooks, Bitbucket) are accessible and usable | High — API availability and auth complexity unknown | API audit: confirm Microsoft Graph API coverage for M365 sources; Atlassian REST API for Jira/Confluence; Bitbucket REST API; assess OAuth/SSO requirements |
| Users trust a third-party or AI system to process sensitive emails and Teams messages | High — could be a hard blocker in regulated environments | User interviews focused on trust/privacy threshold; assess M365 data boundary options |
| The GenAI synthesis layer (OpenAI, Gemini, or Copilot) can produce output that consistently reads as professionally authored | Medium — LLM output quality is non-deterministic | Prototype testing: run real weekly data through a prompt and evaluate output with target users |
| Users will catch and correct errors rather than needing an automated correction flow | Medium — assumes users will actually review before sending | Validate during prototype phase; monitor if unchecked errors reach managers |
| Weekly cadence is the right aggregation window | Medium — some users may want bi-weekly or on-demand | Confirm in user interviews |
| Microsoft Loop is the right output format for the manager relationship | Medium — manager preferences vary | Confirm with target user; test whether Loop docs are actually shared/read in practice |

---

## Technical Constraints (from Eng Lead)

**Systems to connect to:**

| Source | API Available | Notes |
|--------|--------------|-------|
| Outlook (email) | Yes — Microsoft Graph API | OAuth 2.0 required; sensitive content; rate limits apply |
| MS Teams (messages, meetings) | Yes — Microsoft Graph API | Same auth surface as Outlook; meeting transcripts require additional permissions |
| SharePoint | Yes — Microsoft Graph API | Document content extraction may require additional scopes |
| Confluence | Yes — Atlassian REST API v2 | Cloud vs. Server/DC auth differs; content access depends on user permissions |
| Jira | Yes — Atlassian REST API v3 | Issue activity, comments, transitions; reliable and well-documented |
| Microsoft Loop | Yes — via Microsoft Graph (Loop pages = SharePoint-backed) | Loop API maturity is newer; write-back capability needs validation |
| Notebooks (OneNote / Confluence notes) | Partial — OneNote via Graph API; Confluence notebooks via Atlassian API | Depends on which notebook tool is in use |
| Bitbucket | Yes — Bitbucket REST API | PRs, commits, reviews; Atlassian account auth aligns with Jira/Confluence |

**Technical risks identified:**

1. **API accessibility is unverified** — Likelihood: High. Impact: High. The user has not confirmed which APIs are available in their corporate environment. Enterprise M365 tenants often restrict Graph API scopes; Atlassian Cloud vs. Data Center have different auth models. **This is the highest-risk unknown and must be resolved before development begins.**

2. **Data sensitivity and LLM processing** — Likelihood: Medium. Impact: High. Sending email and Teams content to an external LLM (OpenAI, Gemini) may violate corporate data policies. M365 Copilot may be the only compliant path in regulated environments.

3. **LLM output non-determinism** — Likelihood: Medium. Impact: Medium. Professional-quality synthesis is not guaranteed. Prompt engineering and output validation layer needed.

4. **Microsoft Loop write-back API maturity** — Likelihood: Low-Medium. Impact: Medium. Loop is SharePoint-backed but the API for programmatic page creation is relatively new. Needs a proof-of-concept before committing to it as the output format.

**Feasibility assessment (Eng Lead):**
Core aggregation is technically buildable — all major APIs exist. The critical path risk is enterprise auth (OAuth/SSO in a locked-down corporate tenant) and data residency for LLM processing. A 2-week API spike to confirm access and auth before any feature development is strongly recommended.

---

## UX Constraints (from Designer)

**User workflows affected:**

- **End-of-week reporting workflow:** Currently: User opens multiple tabs, scrolls through email/Jira/Teams from memory, manually drafts a report. With Status Reporting: User triggers aggregation (scheduled or on-demand), reviews a pre-drafted Loop doc, makes edits if needed, shares with manager.
- **Error correction workflow:** Currently: No system-assisted correction path. In v1: User reviews the draft in Loop and manually edits anything that is wrong or missing. No automated correction loop — user is the quality gate.

**Critical design decisions:**

1. **Review-before-send is a core UX requirement, not optional.** The user must see and approve the draft before it reaches their manager. Any design that auto-publishes without review introduces unacceptable trust risk.

2. **The output format (Loop doc) is manager-facing.** The structure and tone must match how a PM would actually write a status report — not a raw activity log. The AI synthesis layer must produce narrative prose with a coherent structure (e.g., Accomplishments, In Progress, Blockers, Next Week).

3. **Empty states matter.** What happens when a source returns no activity (e.g., no Jira tickets closed this week, no emails in a topic area)? The report must handle sparse weeks gracefully — no blank sections, no "no data found" artifacts in the final output.

4. **The user's editing experience in Loop must be natural.** If the draft lands in Loop and is hard to edit, users will stop using it. The structure should leverage Loop's native components (tables, headers, bullet lists) rather than unstructured prose blocks.

**Edge cases to handle:**
- User has a low-activity week — report must still be coherent and not embarrassing to send
- One or more data sources is unavailable or returns an error — report should be generated from available data with a clear note about what was excluded
- User wants to exclude a specific item (e.g., a sensitive email thread) — needs a redaction or exclusion mechanism (post-v1 candidate)

---

## Regulatory / Compliance Constraints

- **Data privacy:** Email and Teams messages are sensitive corporate communications. Processing via external LLM raises data residency and privacy concerns. Must assess whether M365 Copilot (which stays within the Microsoft data boundary) is the required path for corporate deployments.
- **Authentication:** Corporate M365 tenants commonly restrict OAuth app registrations. Enterprise app approval may be required before any Graph API access is granted.
- **Atlassian data:** Jira and Confluence content is typically less sensitive than communications but may contain commercially sensitive project information.

---

## Unknowns & Risks

| Unknown | Impact | Mitigation plan |
|---------|--------|----------------|
| Which M365 Graph API scopes are accessible in the user's corporate tenant | High — could block Outlook, Teams, SharePoint integration entirely | API audit spike (Week 1 of development) |
| Whether external LLM processing (OpenAI/Gemini) is permissible under corporate data policy | High — could force M365 Copilot-only path | Review data governance policy; interview IT/security stakeholder |
| Microsoft Loop API write-back capability in practice | Medium — could require fallback to Confluence or email delivery | Proof-of-concept spike in Week 1 |
| Whether users will actually review drafts before sending, or skip the review step | Medium — unchecked errors could damage manager trust | Design review step as mandatory; monitor in pilot |
| Acceptable aggregation window (weekly vs. on-demand) | Low-Medium — affects scheduling architecture | Confirm in user interviews |

---

## Gate Validation Checklist

- ☑ User needs are validated (not just hypothesized)
- ☑ Competitive landscape includes 2+ existing solutions and gaps
- ☑ Key assumptions are identified and risk-rated
- ☑ Eng Lead has provided technical constraint analysis
- ☑ Designer has provided UX constraint analysis
- ☑ Unknowns have a validation plan
- ☑ User confirmed: "This report is accurate"

**Gate Status: OPEN — Stage 2 LOCKED. Ready to proceed to Stage 3.**
