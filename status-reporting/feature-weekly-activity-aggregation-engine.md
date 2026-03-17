# Feature Document — Weekly Activity Aggregation Engine

**Release:** Status Reporting v1.0
**Feature #:** 2 of 4
**Contributing roles:** PM / Eng Lead / Designer
**Status:** DRAFT

**Created:** 17 March 2026
**Last updated:** 17 March 2026
**Owner:** PM / Agile Coach

---

## Overview

The Weekly Activity Aggregation Engine collects raw activity payloads from all connected source connectors (Feature 1), normalises each item into a consistent schema, and produces a structured weekly digest ready for AI synthesis (Feature 3). It runs automatically on a weekly schedule and requires no user input to operate — the user's first touchpoint is the generated report review screen in Feature 4.

---

## Goals

1. **Collect and normalise all available activity signals from connected sources for the current week.**
   *Why this goal matters:* The structured digest is the sole input to the AI synthesis step. If aggregation is incomplete or malformed, the generated report will be wrong or empty.

2. **Handle missing, empty, or partial source data without blocking the pipeline or requiring user intervention.**
   *Why this goal matters:* Users in restricted corporate environments may have some sources blocked (documented in Feature 1). The engine must honour the zero-manual-input principle regardless of source availability.

---

## Non-Goals

- **Filtering or redacting specific activity items** — deferred to Q3 2026. Users can edit the generated report in Feature 4.
- **On-demand or flexible scheduling outside the weekly cadence** — weekly only in v1.0; scheduling flexibility is deferred to Q3 2026.
- **Cross-user or team-level aggregation** — single user only in v1.0. Team reporting is a separate track post-Vision validation.

---

## User Stories

> Minimum 3 user stories per feature: one happy path, one edge case, one error/failure case.
> Each story maps to one Jira issue. Copy the block between `---` markers as a single Jira issue.

---

### User Story 1: Aggregation engine processes all sources and produces a complete weekly digest

> **Jira fields**
> **Summary:** Aggregation engine processes all sources and produces a complete weekly digest
> **Type:** Story
> **Priority:** High
> **Story Points:** [ ]
> **Labels:** happy-path, v1.0

**User Story:**
As a **knowledge worker**,
I want **the system to automatically collect and organise my activity from all connected sources each week**,
so that **a structured digest is ready for report generation without any action from me**.

**Acceptance Criteria:**

```gherkin
Scenario: All connected sources return data and aggregation produces a complete weekly digest
  Given the user has at least 3 sources connected and authenticated via Feature 1
    And the current week's reporting window (Monday 00:00 – Friday 23:59 in the
        user's local timezone) has elapsed
  When the weekly aggregation run is triggered at the scheduled time
  Then the engine retrieves raw activity payloads from all connected sources
    And each activity item is normalised into the standard schema:
        { source, type, title, timestamp, url, summary }
    And the structured digest contains at least one activity item per connected
        source that returned non-empty data
    And the digest is written to the aggregation store with status "complete"
        and a run timestamp in ISO-8601 format
    And the digest is passed to the AI synthesis step (Feature 3) for processing
```

**Vision check:** ✅ pass — fully automated aggregation is the foundation of zero-manual-input reporting; the user's only role is review, consistent with the Mission
**Release check:** ✅ in scope — required for Feature 3 to function; must ship in v1.0

---

### User Story 2: Aggregation proceeds when one or more sources return no activity this week

> **Jira fields**
> **Summary:** Aggregation proceeds when one or more sources return no activity this week
> **Type:** Story
> **Priority:** High
> **Story Points:** [ ]
> **Labels:** edge-case, v1.0

**User Story:**
As a **knowledge worker**,
I want **a weekly digest to be produced even when some sources have no activity this week**,
so that **my report covers the week accurately and is not blocked by a quiet source**.

**Acceptance Criteria:**

```gherkin
Scenario: One or more connected sources return zero activity items for the week
  Given the user has 5 sources connected and authenticated
    And 2 of those sources (e.g., Bitbucket, Confluence) return empty activity
        payloads for the current week's reporting window
  When the weekly aggregation run is triggered
  Then the engine processes all 5 sources without error
    And the structured digest includes all normalised items from the 3 active sources
    And the 2 empty sources are recorded in the digest metadata as
        "Connected — no activity this week" with source name and run timestamp
    And the digest status is set to "complete" — not "partial" or "failed"
    And the AI synthesis step receives the digest and is not blocked by the
        empty sources
```

**Vision check:** ✅ pass — empty-source handling is critical to the zero-manual-input principle; the user must never be asked to fill gaps
**Release check:** ✅ in scope — directly follows from the Feature 1 edge case; aggregation must handle variable source output in v1.0

---

### User Story 3: Aggregation engine handles malformed or unparseable data from a source

> **Jira fields**
> **Summary:** Aggregation engine handles malformed or unparseable data from a source
> **Type:** Story
> **Priority:** High
> **Story Points:** [ ]
> **Labels:** error-handling, v1.0

**User Story:**
As a **knowledge worker**,
I want **the aggregation engine to skip a source that returns malformed data rather than failing silently or crashing**,
so that **my report is still produced from the sources that did work, and the failure is logged for diagnosis**.

**Acceptance Criteria:**

```gherkin
Scenario: One source returns a response where required schema fields are missing or null
  Given the user has 4 sources connected and authenticated
    And the Jira connector returns a response where one or more required schema
        fields (title, timestamp) are missing or null for some items
  When the weekly aggregation run is triggered
  Then the engine catches the parse error for the malformed items
    And the malformed items are skipped and a structured error entry is logged:
        { source: "Jira", error: "missing required field: timestamp",
          item_count_skipped: N, run_timestamp: [ISO-8601] }
    And the engine continues processing all other sources without interruption
    And the digest is produced using all valid activity items from non-failing sources
    And the digest status is set to "complete with warnings"
    And no error is surfaced to the user — silent partial-success is acceptable in v1.0
```

**Vision check:** ✅ pass — graceful degradation on malformed data preserves the user's trust and the no-interruption contract
**Release check:** ✅ in scope — data quality errors from third-party APIs are expected in v1.0; the engine must not crash on bad input

---

### User Story 4: User is notified when the aggregation run fails completely

> **Jira fields**
> **Summary:** User is notified when the aggregation run fails completely
> **Type:** Story
> **Priority:** High
> **Story Points:** [ ]
> **Labels:** error-handling, v1.0

**User Story:**
As a **knowledge worker**,
I want **to be notified when the aggregation engine fails completely so I know no report will be generated this week**,
so that **I am not left waiting for a report that will never arrive**.

**Acceptance Criteria:**

```gherkin
Scenario: All source connectors fail or timeout during the weekly aggregation run
  Given the user has sources connected and authenticated
    And all source connectors return errors (401, 500, or timeout) during
        the weekly aggregation run
  When the aggregation run reaches its failure threshold (all sources failed)
  Then the engine aborts the run and logs a structured failure entry:
        { status: "failed", sources_attempted: N, sources_failed: N,
          run_timestamp: [ISO-8601] }
    And the AI synthesis step is not triggered
    And the user receives a notification: "We couldn't gather your activity
        this week — all data sources were unavailable. We'll try again next
        week. If this persists, check your source connections."
    And the notification includes a link to the source connection settings screen
```

**Vision check:** ✅ pass — the user is never silently left without a report; communicating failure preserves trust and enables corrective action
**Release check:** ✅ in scope — complete failure handling is required before any production deployment in v1.0

---

## Acceptance Criteria Summary

This feature is complete when:

1. All connected sources are queried, each activity item is normalised into `{ source, type, title, timestamp, url, summary }` schema, the digest is written with status "complete", and it is passed to AI synthesis.
2. Sources with no activity are recorded as "no activity this week" in digest metadata; the run completes with status "complete" and synthesis is not blocked.
3. Malformed items from a single source are skipped and logged; all other sources are processed; the digest is produced with status "complete with warnings" and no error is shown to the user.
4. If all sources fail, the run is aborted, synthesis is not triggered, and the user receives an actionable notification with a link to source connection settings.

---

## Technical Notes (for Eng Lead)

- **Input:** Raw activity payloads from Feature 1 connectors, retrieved from the connector store per source
- **Output schema:** `{ source: string, type: enum[email|message|ticket|commit|page|file|note], title: string, timestamp: ISO-8601, url: string, summary: string | null }`
- **Normalisation:** Each source has its own adapter that maps source-specific fields to the common schema; adapters must be independently testable with mocked payloads
- **Timezone:** Weekly window is Monday 00:00 – Friday 23:59 in the user's local timezone; timezone must be captured at onboarding
- **Trigger:** Scheduled weekly job (exact time TBD — see Open Questions); retry logic for transient failures on individual sources
- **Error thresholds:** Single source failure → continue with remaining sources; all sources failed → abort and notify user
- **Persistence:** Digests must be stored durably so they can be reprocessed if Feature 3 fails downstream
- **Performance:** Total aggregation run should complete within 120 seconds; individual source timeouts at 30 seconds

---

## UX Notes (for Designer)

- **Background process:** In v1.0 the user does not see aggregation running in real-time. The first user touchpoint is the report review screen (Feature 4). No progress indicator needed.
- **Failure notification:** The "all sources failed" message must be non-alarming, plain-language, and actionable — clear next step (check connections link); no stack traces or technical error codes exposed
- **Silent partial success:** A digest with some empty sources does not notify the user in v1.0 — the report simply reflects the available data. Revisit this if pilot feedback shows user confusion about missing sources.
- **Notification channel:** Notification for complete failure should use the same delivery channel as the report itself (Loop / Outlook — to be confirmed in Feature 4 spec)

---

## Open Questions

| Question | Owner | Due | Status |
|----------|-------|-----|--------|
| What is the exact weekly aggregation schedule — Friday afternoon, Friday EOD, or configurable per user? | PM | Before Feature 4 spec | Open |
| Should the schema include a `raw_payload` field for debugging, or is the normalised schema sufficient for v1.0? | Eng Lead | Before build starts | Open |
| If AI synthesis (Feature 3) fails, should the digest be retained and re-submitted, or discarded? | PM + Eng Lead | Feature 3 spec | Open |

---

## Gate Validation Checklist

Before marking LOCKED, confirm:

- ☑ Minimum 3 user stories present (happy path, edge case, error/failure) — 4 stories written
- ☑ Each story has an "As a / I want / So that" description
- ☑ All "Then" clauses in acceptance criteria are observable and testable
- ☑ All "Given" clauses reflect realistic preconditions
- ☑ Each story has Vision check AND Release check
- ☑ No story's acceptance criteria depends on another story running first
- ☑ Jira fields (Summary, Type, Priority, Labels) are populated on each story
- ☑ Eng Lead reviewed acceptance criteria for technical accuracy
- ☑ Designer reviewed acceptance criteria for UX completeness
- ☑ Acceptance criteria summary is derived from "Then" clauses
- ☑ User confirms: "Can engineering build from this?" — confirmed 17 March 2026

**Status: LOCKED — specification complete, ready for engineering**
