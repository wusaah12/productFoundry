# Feature Document — API Access Spike & Source Connectors

**Release:** Status Reporting v1.0
**Feature #:** 1 of 4
**Contributing roles:** PM, Eng Lead, Designer
**Status:** DRAFT

**Created:** March 16, 2026
**Last updated:** March 16, 2026
**Owner:** PM / Agile Coach (you)

---

## Overview

This feature validates which of the 7 target data source APIs are accessible in the user's corporate environment, establishes OAuth/authentication patterns for each, and implements working connectors that retrieve raw activity data. It is a prerequisite for all other v1.0 features — no aggregation, synthesis, or output is possible until source connectivity is confirmed. The scope of the MVP is determined by the results of this spike.

**Consistent with Mission:** Connecting to the tools knowledge workers already use — zero manual input from the user.

---

## Goals

1. **Confirm which APIs are accessible in the target corporate environment within the first weeks of Q2.**
   *Why this matters:* The riskiest technical assumption in the entire hypothesis is API accessibility. Knowing the answer early determines whether to build against all 7 sources or gracefully reduce scope.

2. **Establish authenticated, working data retrieval from all accessible sources.**
   *Why this matters:* Every other feature depends on reliable, authenticated data pull. Flaky connectors invalidate the aggregation and synthesis layers downstream.

3. **Document clearly which sources are accessible and which are blocked, so the user understands the scope of their report.**
   *Why this matters:* Strategic Filter 2 — the user must never be misled about what their report contains. Transparent source coverage maintains trust.

---

## Non-Goals

- **Building the aggregation or synthesis layer** — deferred to Features 2 and 3. This feature delivers raw connectivity only.
- **Providing a UI for source configuration** — the user configures sources via setup/onboarding in this release; a polished configuration UI is Q3 2026.
- **Supporting Atlassian Server / Data Center auth** — v1.0 targets cloud-hosted instances only (Jira Cloud, Confluence Cloud). Server/DC auth is Q4 2026.

---

## User Stories

> Minimum 3 user stories per feature: one happy path, one edge case, one error/failure case.  
> Each story maps to one Jira issue. Copy the block between `---` markers as a single Jira issue.

---

### User Story 1: All source connectors authenticate and return activity data

> **Jira fields**  
> **Summary:** All source connectors authenticate and return activity data  
> **Type:** Story  
> **Epic:** API Access Spike & Source Connectors  
> **Priority:** High  
> **Story Points:** [ ]  
> **Labels:** happy-path, v1.0

**User Story:**  
As a **knowledge worker**,  
I want **all 7 data sources to authenticate successfully and return my activity data**,  
so that **my weekly report captures my full work output without any manual input**.

**Acceptance Criteria:**

```gherkin
Scenario: User completes OAuth setup and all source connectors return activity data
  Given the user has M365 account access and Atlassian Cloud account access
    And corporate tenant permissions allow Microsoft Graph API scopes for
        Mail.Read, ChannelMessage.Read.All, Files.Read, and Sites.Read.All
    And Atlassian REST API access is available for Jira and Confluence Cloud
    And Bitbucket REST API access is available
  When the user completes the OAuth authentication flow for each source
  Then each connector returns a non-empty activity payload for the current week
    And the system displays a source status screen listing all 7 sources
        as "Connected" with the timestamp of the last successful data pull
    And no sources are listed as "Blocked" or "Unavailable"
```

**Vision check:** ✅ pass — full connectivity delivers maximum zero-effort capture; user retains no manual data entry responsibility  
**Release check:** ✅ in scope — full connectivity is the happy path for Feature 1 in v1.0

---

### User Story 2: System degrades gracefully when corporate tenant blocks API scopes

> **Jira fields**  
> **Summary:** System degrades gracefully when corporate tenant blocks API scopes  
> **Type:** Story  
> **Epic:** API Access Spike & Source Connectors  
> **Priority:** High  
> **Story Points:** [ ]  
> **Labels:** edge-case, v1.0

**User Story:**  
As a **knowledge worker in a restricted corporate environment**,  
I want **the system to continue generating my report using only the sources it can access**,  
so that **I still receive a report without being asked to manually fill in data from blocked sources**.

**Acceptance Criteria:**

```gherkin
Scenario: Corporate tenant blocks one or more Graph API scopes
  Given the user has M365 account access
    And the corporate tenant has restricted ChannelMessage.Read.All
        (Teams messages) and Mail.Read (Outlook email) API scopes
  When the user completes the OAuth authentication flow
  Then the system connects successfully to all sources where API access
       is permitted (e.g., SharePoint, Jira, Confluence, Bitbucket)
    And the system displays a source status screen listing the blocked
        sources (Teams, Outlook) as "Unavailable — access not permitted
        by your organisation" with a link to IT contact guidance
    And the system proceeds to the aggregation step using only the
        connected sources, without prompting the user to re-enter data
        from blocked sources manually
```

**Vision check:** ✅ pass — graceful degradation preserves zero-manual-input principle; user is not asked to compensate for missing sources  
**Release check:** ✅ in scope — this is the explicitly documented go/no-go scenario in the Release Plan; must be handled in v1.0

---

### User Story 3: User receives a clear error when OAuth authentication fails

> **Jira fields**  
> **Summary:** User receives a clear error when OAuth authentication fails  
> **Type:** Story  
> **Epic:** API Access Spike & Source Connectors  
> **Priority:** High  
> **Story Points:** [ ]  
> **Labels:** error-handling, v1.0

**User Story:**  
As a **knowledge worker**,  
I want **a clear, actionable error message when a source fails to authenticate**,  
so that **I know what happened and my other connected sources are not affected**.

**Acceptance Criteria:**

```gherkin
Scenario: OAuth token exchange fails during source connector setup
  Given the user has initiated the OAuth authentication flow for Microsoft Graph
  When the OAuth token exchange fails with a 401 Unauthorized or 500 error
       from the Microsoft identity platform
  Then the system displays an error message: "We couldn't connect to
       [Source Name]. This is usually a temporary issue. Please try again,
       or contact your IT administrator if the problem persists."
    And the system does not proceed to data retrieval for the failed source
    And the system logs the error with timestamp, source name, and HTTP
        status code for operator diagnosis
    And all other sources that authenticated successfully remain connected
        and are not affected by the single source failure
```

**Vision check:** ✅ pass — communicating failure clearly preserves trust; user is not left with a silent gap in their report  
**Release check:** ✅ in scope — error handling for auth failures is required for any connector shipped in v1.0

---

### User Story 4: Connected source with no activity this week is handled without error

> **Jira fields**  
> **Summary:** Connected source with no activity this week is handled without error  
> **Type:** Story  
> **Epic:** API Access Spike & Source Connectors  
> **Priority:** Medium  
> **Story Points:** [ ]  
> **Labels:** edge-case, v1.0

**User Story:**  
As a **knowledge worker**,  
I want **the system to handle weeks where I have no activity in a connected source**,  
so that **my report is not broken or incomplete because one source returned nothing**.

**Acceptance Criteria:**

```gherkin
Scenario: Source connector authenticates successfully but returns zero activity
  Given the user's Bitbucket account is authenticated and connected
    And the user has made no commits, pull requests, or code reviews
        in the current week's reporting window
  When the weekly aggregation trigger runs
  Then the Bitbucket connector returns an empty activity set
    And the system marks Bitbucket as "Connected — no activity this week"
        in the source status log
    And the aggregation engine receives an empty payload for Bitbucket
        and continues processing all other connected sources without error
```

**Vision check:** ✅ pass — empty-source handling prevents false gaps or broken pipelines; report integrity is maintained  
**Release check:** ✅ in scope — empty state handling is required for any source connector in v1.0

---

## Acceptance Criteria Summary

**Feature 1 is complete when:**
1. The system successfully authenticates and retrieves activity data from all accessible sources via OAuth, and displays each source as "Connected" with a last-pull timestamp.
2. When one or more sources are blocked by corporate tenant policy, the system lists them as "Unavailable" with a clear explanation, and continues processing from available sources without prompting manual input.
3. When an OAuth token exchange fails, the system displays a specific, actionable error message, logs the failure, and leaves all other connected sources unaffected.
4. When a connected source returns zero activity for the week, the system marks it as "Connected — no activity this week" and passes an empty payload downstream without error.

---

## Technical Notes (for Eng Lead)

- **API integrations:** Microsoft Graph API (Outlook, Teams, SharePoint, OneNote), Atlassian REST API v2/v3 (Jira Cloud, Confluence Cloud), Bitbucket REST API
- **Auth pattern:** OAuth 2.0 with PKCE for all sources; token refresh handling required; store tokens securely (never in plaintext)
- **Data requirements:** Raw activity signals per source for the current week's window (Mon–Fri); normalised into a common activity schema before passing to Feature 2
- **Performance considerations:** API calls should be parallelised where possible; total data retrieval should complete within 60 seconds for a typical week
- **Testing approach:** Integration tests with mocked API responses for each source; explicit test cases for 401, 403, 500 error responses; empty payload test per source

---

## UX Notes (for Designer)

- **Source status screen:** Must clearly distinguish Connected, Unavailable, and Error states with plain-language copy — no technical jargon exposed to the user
- **Error messages:** Actionable and non-alarming; include “contact IT” path for blocked sources, “try again” path for transient failures
- **Accessibility:** Status indicators must not rely on colour alone (icon + label required)
- **Mobile/responsive:** Source status screen must be readable on mobile — users may complete OAuth on a mobile browser

---

## Open Questions

| Question | Owner | Due | Status |
|----------|-------|-----|--------|
| Does the corporate M365 tenant require admin consent for Graph API scopes, or can users self-authorise? | Eng Lead | Spike week 1 | Open |
| Is the target Jira/Confluence instance Cloud or Data Center? | PM (you) | Before build starts | Open |
| What is the exact weekly reporting window — Mon 00:00 to Fri 23:59, or rolling 7 days? | PM (you) | Before Feature 2 spec finalises | Open |

---

## Gate Validation Checklist

Before marking LOCKED, confirm:

- ☑ Minimum 3 user stories present (happy path, edge case, error/failure) — 4 stories written
- ☑ Each story has an "As a / I want / So that" description
- ☑ All "Then" clauses in acceptance criteria are observable and testable
- ☑ All "Given" clauses reflect realistic preconditions
- ☑ Each story has Vision check AND Release check
- ☑ No story's acceptance criteria depends on another story running first
- ☑ Jira fields (Summary, Type, Epic, Priority, Labels) are populated on each story
- ☑ Eng Lead reviewed acceptance criteria for technical accuracy
- ☑ Designer reviewed acceptance criteria for UX completeness
- ☑ Acceptance criteria summary is derived from "Then" clauses
- ☑ User confirms: "Can engineering build from this?" — confirmed 16 March 2026

**Status: LOCKED — specification complete, ready for engineering**
