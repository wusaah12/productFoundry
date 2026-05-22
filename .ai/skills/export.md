# Export Agent

**Role:** Generate handoff documents and integrations with external tools

**Expertise:** Document export, stakeholder communication, tool integration (Jira, Asana, etc.)

---

## Responsibilities

### Export Stages as Read-Only Documents
- Convert markdown artifacts to PDF, Word, or HTML
- Lock document (prevent editing)
- Add metadata (version, date, author)
- Maintain artifact link for reference

### Generate Executive Summary
- Create 1-page summary of entire product discovery
- Highlight vision, hypothesis, key metrics
- Include roadmap timeline and go-to-market plan
- Distribute to board, stakeholders, executives

### Create Roadmap in Jira/Asana Format
- Transform Stage 5 roadmap into tool-native format
- Create epics and stories in Jira
- Assign to teams, estimate effort
- Link to product artifacts for context

### Produce Stakeholder Communication Templates
- Launch announcements
- Customer communication
- Press release
- Team alignment document

---

## Invocation Methods

```
/export
→ "What format do you need?"
→ Lists export options

/export-summary
→ Generates 1-page executive summary

/export-to-jira
→ Creates Jira epics from roadmap

/export-pdf
→ Generates PDF of current artifact

/export-stakeholders
→ Creates stakeholder communication bundle
```

---

## Export Formats & Templates

### 1. Executive Summary Export

```
/export-summary
→ Generates: 1-page document

Output: executive-summary-[product-name].pdf

Contents:
╔════════════════════════════════════════════════════════════╗
║  [Product Name]: Executive Summary                         ║
║  Generated: [Date]                                         ║
╠════════════════════════════════════════════════════════════╣
║
║  VISION
║  ──────
║  [Vision statement - 1 sentence]
║
║  MISSION
║  ───────
║  [Mission statement - who, what, why]
║
║  MARKET OPPORTUNITY
║  ──────────────────
║  • Total Addressable Market: [Size]
║  • Target Segment: [Description]
║  • Competitive Position: [Our advantages]
║
║  MVP (v1.0) TIMELINE & SCOPE
║  ────────────────────────────
║  Launch Date: [Month/Quarter]
║  Core Features: [3-5 key capabilities]
║  Success Metric: [Primary metric]
║
║  ROADMAP OVERVIEW
║  ────────────────
║  • v1.0 (Month X): Core features
║  • Phase 1 (Month X+1): Enhancement features
║  • Phase 2 (Month X+3): Advanced features
║
║  GO-TO-MARKET APPROACH
║  ─────────────────────
║  • Launch Strategy: [Approach]
║  • Target Customers: [Profile]
║  • Revenue Model: [Business model]
║  • Year 1 Target: [Revenue/customer goal]
║
║  STRATEGIC RISKS & MITIGATIONS
║  ──────────────────────────────
║  Risk 1: [Risk] | Mitigation: [Approach]
║  Risk 2: [Risk] | Mitigation: [Approach]
║
╚════════════════════════════════════════════════════════════╝
```

### 2. PDF/Word Document Export

```
/export-pdf
→ Generates: PDF of current artifact with styling

Features:
- Markdown converted to formatted PDF
- Headings, lists, tables formatted
- Links preserved (clickable if digital)
- Metadata included (version, date, author)
- Artifact locked for distribution
- Footer: "v1.0 | [Date] | Read-Only"
```

### 3. Jira Roadmap Export

```
/export-to-jira
→ Generates: Jira epics + stories from Stage 5 roadmap

Output format:
- Creates Jira Epic per quarterly milestone
  Epic 1: "Q2: Core Mobile Features"
  Epic 2: "Q3: Advanced Features"
  
- Creates Jira Stories per feature
  Story 1.1: "As mobile user, I view sprint metrics"
    Points: 13
    Labels: [mobile, core]
    Acceptance Criteria: [from Stage 7]
    
- Assigns to teams
  Mobile Team: Stories 1.1-1.5
  Backend Team: Stories 1.6-1.10
  
- Links back to artifacts
  Each story links to Stage 7 feature doc
  Epic links to Stage 5 roadmap
```

### 4. Launch Announcement Template

```
/export-stakeholders: launch-announcement
→ Generates: press release + internal communication

PRESS RELEASE TEMPLATE:
────────────────────
[Company Name] Launches [Product Name] 
Modern [Category] for [Target Audience]

[City, Date] – [Company Name] today announced the general availability of 
[Product Name], a [category] solution for [target audience].

[Product Name] solves [problem] by [key differentiator]. Early users report 
[key metric], enabling teams to [business impact].

"[Quote from exec on why this matters]" said [Name], [Title] at [Company].

Key Features:
• [Feature 1]: [Benefit]
• [Feature 2]: [Benefit]
• [Feature 3]: [Benefit]

Availability:
[Date] at [pricing/freemium model]

About [Company]:
[Company mission and background]

###

INTERNAL ALIGNMENT MEMO:
──────────────────────
To: All Staff
From: [CEO/Product Lead]
Subject: [Product Name] Launches Today!

We're excited to announce [Product Name] is live!

Why This Matters:
[Vision + market opportunity in plain language]

What We Built:
[Core features in user language, not technical]

Success Metrics:
We'll measure success by [primary metric].
Current position: [baseline], Target: [goal]

Next Steps:
• Customers: [Link to docs, support]
• Sales: [DL pitch deck, customer success plan]
• Engineering: [On-call rotation, monitoring]
• Marketing: [Social media kit, content plan]

Let's celebrate what we built and keep building!
```

### 5. Customer Communication Template

```
/export-stakeholders: customer-announcement
→ Generates: email to beta customers, announcement to prospects

BETA CUSTOMER EMAIL:
──────────────────
Subject: [Product Name] v1.0 is Here – Thank You!

Dear [Customer],

Thank you for being part of our journey! We're thrilled to announce 
[Product Name] v1.0 is now generally available.

Based on your feedback, we built:
✓ Real-time Jira integration (from your feature request)
✓ Mobile sprint view (80% of you requested this)
✓ Offline capability (critical for distributed teams)

Your Impact:
Your testing uncovered 23 bugs we fixed (thanks for attention to detail!).
Your feature request for "quick notifications" inspired v1.1 roadmap.

Next Steps:
• Migrate your workspace: [Link to migration guide]
• Invite your team: [Link to team invite]
• Join training webinar: [Date/Time]
• Share feedback: [Feedback form link]

We're building v1.1 with enterprise dashboards based on your requests.

Cheers,
[Product Team]

---

PROSPECT EMAIL:
───────────────
Subject: [Product Name] – Jira-Native Sprint Insights

Hi [Prospect],

We've been watching engineering teams struggle with manual reporting.
That's why we built [Product Name]: real-time sprint metrics, mobile-first, 
Jira-native.

[Competitor A] requires learning a new system.
[Competitor B] costs $X/month and doesn't support mobile.

We're different:
✓ Jira-native (learn in minutes, not days)
✓ Mobile-first (check progress from anywhere)
✓ $X/month/team (half the price of alternatives)

Early users report 2+ hours/week saved on reporting.

Want to see a demo? [Calendar link]

Cheers,
[Product Team]
```

### 6. Roadmap Visualization Export

```
/export-roadmap-visual
→ Generates: Gantt chart or timeline visualization

Output: timeline-roadmap.pdf

Visual Timeline:
Timeline showing:
- Quarters on X-axis
- Initiatives on Y-axis
- Bars showing duration
- Color coded by priority (P0=red, P1=yellow, P2=green)
- Dependency arrows showing blockers
- Milestone markers for launches

Example:
Q1 2026: |████████| MVP Phase
Q2 2026: |  ████████| Phase 1 + Launch
Q3 2026: |     ████████| Phase 2
```

---

## Workflow: Export to Jira

```
User: "/export-to-jira"

Agent looks at Stage 5 Roadmap:
- Q1: Jira integration, Mobile view, Offline mode
- Q2: Push notifications, Performance optimization
- Q3: Advanced dashboards

Creates Jira structure:
Epic 1: "v1.0: Mobile Sprint Metrics"
  Story 1.1: "Jira real-time integration"
    Points: 13, Team: Backend
    Link: [stage-7-feature-document#jira-integration]
  Story 1.2: "View sprint metrics on mobile"
    Points: 13, Team: Mobile
    Link: [stage-7-feature-document#sprint-view]

Epic 2: "v1.1: Notifications & Performance"
  Story 2.1: "Push notifications for sprints"
    Points: 8, Team: Mobile
  Story 2.2: "Performance optimization"
    Points: 5, Team: Backend

Outputs:
- Jira project export (XML/JSON)
- Import instructions
- Team assignment spreadsheet
- Acceptance criteria linkage document
```

---

## Export Use Cases

| Use Case | Command | Output |
|----------|---------|--------|
| Share with board | `/export-summary` | 1-page executive summary PDF |
| Share with team | `/export-pdf` | Full artifact with styling |
| Load into Jira | `/export-to-jira` | Epics + stories ready to work |
| Press release | `/export-stakeholders: launch-announcement` | Press release + media kit |
| Customer update | `/export-stakeholders: customer-announcement` | Email template |
| Roadmap timeline | `/export-roadmap-visual` | Gantt chart PDF |

---

## Export Versioning

Each export includes:
- Version number (v1.0, v1.1, etc.)
- Export date and time
- Exported by: [user name]
- Artifact source: [link to original]
- Status: [stage, gate status, last updated date]

Footer: "Generated from [Product Name] Stage [N] | [Date] | Read-Only"

---

## Integration Points

**Jira Integration:**
- Create epics and stories from roadmap
- Pre-populate acceptance criteria from Stage 7
- Link stories back to product artifacts

**Email Integration:**
- Customer announcement template
- Stakeholder communication bundle
- Launch press release

**PDF/Document Export:**
- All artifacts exportable as formatted PDF
- Locked for distribution (read-only)
- Metadata preserved

---

## Export Philosophy

- Make artifacts shareable beyond Copilot
- Maintain artifact links (source of truth)
- Enable handoff to implementation teams
- Support diverse stakeholder communication needs
