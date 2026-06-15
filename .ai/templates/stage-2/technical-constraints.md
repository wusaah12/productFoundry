# Technical Constraints

**Feature**: [Feature Name from Stage 1]  
**Stage**: 2 - Discovery Research  
**Owner**: Eng Lead  
**Created**: [Date] (Auto-triggered after interview synthesis)  
**Updated**: [Date]

---

## Purpose

This document captures technical requirements and constraints identified during discovery interviews. Constraints are non-negotiable architectural decisions that shape what can and can't be built.

**Owner**: Eng Lead analyzes interview notes and identifies:
- Required integrations (APIs, systems)
- Scale requirements (users, transactions, data retention)
- Security/compliance requirements (encryption, audit trail, legal)
- Performance requirements (response time, availability)
- Infrastructure constraints (on-premise vs. cloud, tech stack)
- Technical risks and mitigations

---

## Integration Requirements

### Required Integrations

These systems must be supported. Non-negotiable.

#### Integration 1: [System Name]

**What it is**: [e.g., "QuickBooks Online accounting software"]  
**Why required**: [From interviews: "All 5 companies use QuickBooks"]  
**Technical requirement**: [What capability must we integrate?]
- API type: [REST / SOAP / SDK / Custom]
- Data flow: [Inbound / Outbound / Bidirectional]
- Sync frequency: [Real-time / Daily / On-demand]
- Example: "Submit approved expenses to QuickBooks API every 30 seconds"

**API Details**:
- Endpoint: [e.g., "https://quickbooks.api/expenses/submit"]
- Authentication: [OAuth 2.0 / API Key / JWT]
- Rate limits: [Requests per second / minute / day]
- Error handling: [How do we handle API failures?]

**Dependency**:
- [ ] Integration is critical path (must work before launch)
- [ ] Integration is nice-to-have (can defer to Phase 2)

---

#### Integration 2: [System Name]

[Repeat structure]

---

### Optional Integrations

Nice-to-have integrations; can defer to Phase 2:

- [Integration A]: Not required for MVP; revisit if user demand
- [Integration B]: Lower priority; Phase 2

---

## Scale Requirements

### User Scale

**Expected user base**:
- Minimum: [N users] (absolute minimum for viability)
- Target: [N users] (realistic near-term, e.g., Year 1)
- Maximum: [N users] (aspirational scale, e.g., Year 3)

**User growth rate**: [Estimate % growth per year]

**Implication**: System must be architected for [target scale], not just minimum.

---

### Transaction Scale

**Expected transaction volume**:
- Per user per day: [N transactions]
- Total per day: [N transactions] (at target scale)
- Peak rate: [Transactions per second]

**Example**: "100 users × 2 expense submissions per day = 200 transactions/day = 0.002 tx/sec (low peak)"

**Implication**: Architecture can be simpler if peak is low; gets complex if peak is >100 tx/sec

---

### Data Retention

**Expected data volume**:
- Retention period: [Years] (e.g., "7 years for tax compliance")
- Data size per transaction: [KB / MB] (e.g., "Receipt image 500 KB + metadata 2 KB")
- Total data: [Estimate size, e.g., "200 users × 100 expenses/year × 7 years = 140k records × 502 KB = 70 GB"]

**Implication**: Storage strategy (cloud vs. on-premise), backup strategy, query performance strategy

---

## Security & Compliance Requirements

### Data Security

**Data Classification**:
- [ ] PII (Personally Identifiable Information): SSN, bank account, name, email
- [ ] Financial Data: Transaction amounts, account balances
- [ ] Health Data: (if applicable)

**Encryption Requirements**:
- Encryption in transit: [TLS 1.2+]
- Encryption at rest: [AES-256 or equivalent]
- Key management: [Where are encryption keys stored?]

**Access Control**:
- Authentication: [Password / SSO / OAuth]
- Authorization: [Role-based access control]
- Example: "Manager can only see expenses from their direct reports"

**Audit Trail**:
- Requirement: [All financial transactions must be logged for audit]
- What to log: [User, action, data changed, timestamp]
- Retention: [Audit logs kept for legal period, e.g., 7 years]

---

### Compliance Requirements

**Regulatory**:
- [ ] SOC 2 (if serving enterprises)
- [ ] HIPAA (if serving healthcare)
- [ ] GDPR (if serving EU customers)
- [ ] PCI DSS (if handling payment cards)
- [ ] Custom compliance (e.g., "Financial industry requires annual audits")

**Implication**: Each compliance requirement adds architecture complexity. Example: GDPR requires data deletion capability, which complicates immutable audit logs.

---

### Data Privacy

**User Privacy**:
- [ ] Personal data minimization (collect only what's necessary)
- [ ] Data deletion rights (GDPR: right to be forgotten)
- [ ] Data export rights (GDPR: user can export their data)
- [ ] Consent management (GDPR: explicit consent for data usage)

---

## Performance Requirements

### Response Time

**User-facing operations**:
- Expense submission: [<N seconds] (e.g., "<10 seconds" from interview: "users expect quick upload")
- Approval queue display: [<N seconds] (e.g., "<2 seconds" for manager to see pending)
- Reimbursement status display: [<N seconds] (e.g., "<1 second" to check status)

**Background operations**:
- Expense sync to accounting: [<N seconds] (e.g., "<30 seconds" from approval to accounting system)
- Tax calculation: [<N seconds]
- Notification sending: [<N minutes] (e.g., "<5 minutes" to send approval email)

---

### Availability & Uptime

**Expected uptime**: [99.9% / 99.99%]

**Implication**:
- 99% uptime = 3.6 days down per year (acceptable for internal tools)
- 99.9% uptime = 8.7 hours down per year (demanding; requires redundancy)
- 99.99% uptime = 52 minutes down per year (very demanding; requires multi-region)

---

### Concurrent Users

**Peak concurrent users**: [N users] (e.g., "20 concurrent users at peak")

**Implication**: Affects load balancing, database connection pooling, infrastructure sizing.

---

## Infrastructure Constraints

### Deployment Model

**Interview feedback**: [What deployment model did users require?]

- [ ] Cloud-only (SaaS): Hosted by us, users access via web
  - Implication: Simplest deployment; requires cloud infrastructure (AWS, GCP, Azure)
  
- [ ] On-premise option: Company self-hosts software
  - Implication: Complex; requires deployment guides, installation support, licensing
  
- [ ] Hybrid: Cloud + on-premise option
  - Implication: Most complex; two deployment pipelines, data sync challenges

---

### Tech Stack Constraints

**Frontend**:
- [ ] Web-only (browser)
- [ ] Mobile required (iOS / Android / Both)
- [ ] Frameworks/languages restricted? [e.g., "Must work with existing Salesforce frontend"]

**Backend**:
- [ ] Restricted tech stack? [e.g., "Must run on Java + Oracle (company standard)"]
- [ ] Cloud provider requirement? [e.g., "Must use AWS (company contract)"]
- [ ] Database requirement? [e.g., "Must support Postgres"]

**Mobile**:
- [ ] Native app required? [e.g., "iOS/Android native; no React Native"]
- [ ] Offline capability? [e.g., "Users in remote areas need offline mode"]
- [ ] Camera integration? [e.g., "Must capture receipt photos for OCR"]

---

### Browser/Device Support

From interviews, what devices/browsers must we support?

**Desktop Browsers**:
- [ ] Chrome (any version?)
- [ ] Safari (iOS Safari support?)
- [ ] Firefox (required?)
- [ ] IE/Edge (legacy support required?)

**Mobile Browsers**:
- [ ] Safari on iOS
- [ ] Chrome on Android

**Devices**:
- [ ] Desktop laptop
- [ ] Mobile phones
- [ ] Tablets

**Accessibility**:
- [ ] Screen reader support (WCAG 2.1 AA standard)
- [ ] Keyboard navigation
- [ ] Color contrast (WCAG AA: 4.5:1 for text)
- [ ] Mobile touch targets (minimum 44x44 px)

---

## Technical Risks & Mitigations

### Risk 1: [Risk Name]

**What could go wrong**: [e.g., "QuickBooks API integration is complex; new API versions break regularly"]

**Severity**: [CRITICAL / HIGH / MEDIUM / LOW]  
**Probability**: [High / Medium / Low]

**Mitigation**:
- [ ] Build abstraction layer (API wrapper) to isolate version changes
- [ ] Implement automated tests for API integration
- [ ] Plan fallback to manual sync if API fails
- [ ] Budget extra time in sprint for API issues

---

### Risk 2: [Risk Name]

[Repeat structure]

---

### Risk 3: [Risk Name]

[Repeat structure]

---

## Scalability Decisions

**Current Architecture (MVP)**:
- [Simplified approach that works for target scale]
- Example: "Single database, no sharding; supports 1000 users"

**Future Scaling (When we grow)**:
- [What changes when we hit 10k users / 100k users?]
- Database sharding strategy
- Caching strategy (Redis)
- CDN for static assets
- Message queue for background jobs

**Implication**: MVP should be architected to allow these scaling changes without full rebuild.

---

## Database Architecture

### Database Choice

**Recommended**: [SQL / NoSQL / Hybrid]

**Rationale**: [Why this choice?]

**Option considered**: [Alternative and why we didn't choose it]

---

### Data Model Decisions

**Financial data**: [How should we model expenses?]
- Example: "Expenses table with user_id, amount, date, category, status, receipt_hash"

**Audit trail**: [How should we track changes?]
- Example: "Audit log table: user_id, action, object_id, old_value, new_value, timestamp"

**Constraints**:
- Immutable audit trail (no deletes, only inserts)
- Financial data encrypted at rest
- PII (bank account, SSN) encrypted separately

---

## API Design

### REST API Endpoints (Planned)

```
POST /api/expenses
  Submit new expense
  Payload: { receipt_image, amount, category, date }
  Response: { expense_id, status: "PENDING" }

GET /api/expenses/:id
  Retrieve expense details
  Response: { expense_id, amount, category, date, status, receipt_url }

PUT /api/expenses/:id/approve
  Manager approval
  Payload: { approved: true/false }
  Response: { status: "APPROVED", approved_by, timestamp }

POST /api/expenses/submit-to-accounting
  System action: submit approved to QuickBooks
  (Called by background job, not user)
```

---

## Deployment Pipeline

**Typical workflow**:
1. Code commit to main branch
2. Automated tests run
3. Code deployed to staging
4. Manual testing on staging
5. Deployed to production
6. Monitoring alerts for errors

**Implication**: Need CI/CD infrastructure (GitHub Actions, GitLab CI, Jenkins, etc.)

---

## Monitoring & Alerting

**What to monitor**:
- [ ] API response time (alert if > N seconds)
- [ ] Error rate (alert if > N%)
- [ ] Database query time (alert if > N seconds)
- [ ] Integration failures (alert if QuickBooks API fails)
- [ ] Uptime (monitor if service is accessible)

**Implication**: Need monitoring service (Datadog, New Relic, Sentry, etc.)

---

## Support for Integration Testing

**Before Stage 3**:
- [ ] Set up test accounts with QuickBooks API
- [ ] Document API authentication process
- [ ] Create integration test suite
- [ ] Test error scenarios (API down, invalid credentials, rate limit hit)

---

## Next Steps

### Eng Lead Review:

- [ ] Validate all constraints are realistic (not over-engineered)
- [ ] Identify any missing constraints (ask interviews' technical stakeholders more questions?)
- [ ] Assess feasibility (can we build this with current team/budget?)
- [ ] Identify technical spikes (research required before development)

### For Stage 3 (Hypothesis):

- [ ] Include technical constraints in hypothesis (e.g., "Hypothesis assumes QuickBooks integration is feasible")
- [ ] Plan technical validation (e.g., "Spike: Validate QuickBooks API integration by [date]")

### For Stage 5+ (Roadmap):

- [ ] Use constraints to define MVP scope
- [ ] Use risks to define Phase priorities (critical-path items first)
- [ ] Use scale requirements to inform infrastructure plan

---

