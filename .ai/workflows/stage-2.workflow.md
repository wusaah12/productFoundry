# Stage 2 Workflow: Discovery Report

**Stage**: 2/7 - Discovery Report
**Artifact**: stage-2-discovery-report.md
**Duration**: 3-4 weeks (user research, competitive analysis)

---

## 7-Substep Discovery Process

Stage 2 breaks into 7 sequential substeps, each with specific deliverables and auto-triggers:

### Substep 2.1: Entry — File Structure & Personas Introduced
**Duration**: 15 minutes  
**Owner**: Main Orchestrator + Session Manager

**What happens**:
1. Main Orchestrator loads Stage 1 artifact (Idea Brief)
2. Confirms user/problem context from Idea Brief
3. Creates all Stage 2 working files from template folder:
   - `assumptions-log.md` (all assumptions from Idea Brief captured)
   - `competitive-analysis.md` (empty, ready for research)
   - `interview-guide.md` (empty, waiting for Substep 2.2)
   - `interview-notes.md` (empty, waiting for user interviews)
   - `interview-synthesis.md` (empty, waiting for synthesis at 3+ interviews)
   - `technical-constraints.md` (empty, waiting for Eng Lead analysis)
   - `ux-constraints.md` (empty, waiting for Designer analysis)
   - `current-state-vsm.md` (empty, waiting for VSM after synthesis)
8. Introduces Researcher, Eng Lead, Designer personas
9. Explains the 7-substep flow
10. Displays the entry checklist and next action
11. Auto-writes these files to disk in `[idea-name]/discovery/` folder

**Exit Condition → Triggers 2.2**:
- Files created successfully
- User confirms: "Ready to start interview planning"

**Typical message**:
```
✅ Stage 2 Discovery Started

I've created your Stage 2 workspace:
  📁 [idea-name]/discovery/
  ├── assumptions-log.md (captured from your idea brief)
  ├── competitive-analysis.md (empty)
  ├── interview-guide.md (empty)
  ├── interview-notes.md (empty)
  ├── interview-synthesis.md (empty)
  ├── technical-constraints.md (empty)
  ├── ux-constraints.md (empty)
  └── current-state-vsm.md (empty)

You're at Substep 2.1/7 ✓

Next: Interview Planning (Substep 2.2)
Ready to write your interview guide?
```

---

### Substep 2.2: Interview Planning — Interview Guide Written
**Duration**: 1-2 hours  
**Owner**: Researcher (with coaching from user)

**What happens**:
1. Researcher coaches user on interview design:
   - Who to interview (personas from Idea Brief)
   - What to ask (pain points vs. needs vs. workflows)
   - How many interviews needed (minimum 3 for synthesis trigger)
   - Question types (open-ended, not leading)
2. Researcher guides user through interview guide template
3. Researcher writes interview guide automatically to disk: `interview-guide.md`
4. Guide includes:
   - Warm-up questions (5 min)
   - Core discovery questions (15 min)
   - Workflow walkthrough (10 min)
   - Closing questions (5 min)
   - Notes section for user annotations during interview

**Exit Condition → Triggers 2.3**:
- Interview guide written to disk and user confirms it's ready
- User can optionally proceed to 2.3 (rehearsal) or skip to 2.4 (real interviews)

**Typical message**:
```
📝 Interview Guide Complete

✅ Written to: [idea-name]/discovery/interview-guide.md

Your interview guide includes:
  • Warm-up (build rapport)
  • 8 core discovery questions
  • Workflow walkthrough (how do they do X today?)
  • Closing (feedback, follow-up)
  
You're at Substep 2.2/7 ✓

Next Options:
  → Substep 2.3: Optional Rehearsal (practice with simulated user)
  → Skip to Substep 2.4: Real Interviews (I'll coach you)
```

---

### Substep 2.3: Optional Rehearsal — Synthetic Interview for Practice
**Duration**: 30-45 minutes (optional)  
**Owner**: Researcher + Simulate-User Skill

**What happens**:
1. User indicates: "I'd like to practice the interview first"
2. Researcher activates simulate-user skill
3. Simulate-User plays a realistic persona:
   - Small business owner struggling with workflow X
   - Asks clarifying questions (like a real user would)
   - Provides realistic responses (not perfect answers)
   - Occasionally misunderstands questions (realistic friction)
4. User conducts full interview against simulated user
5. Researcher provides coaching feedback:
   - "You asked a leading question here; try open-ended instead"
   - "Good follow-up on their pain point about X"
   - "You lost thread on the workflow walkthrough; refocus here"
6. User can iterate and re-rehearse
7. Once confident, user moves to real interviews

**Exit Condition → Triggers 2.4**:
- User completes 1+ practice interviews and feels ready, OR user skips rehearsal
- Message: "Ready to conduct real interviews"

**Typical message**:
```
🎭 Interview Rehearsal

I'm simulating a user based on your Idea Brief. Let's practice!

[Simulated User: "Hi, I'm a freelance accountant struggling with expense tracking..."]

You can ask your interview questions. I'll respond realistically.
After we finish, I'll give you coaching feedback.

Ready? Start with your warm-up question!
```

---

### Substep 2.4: Interviews — Real Interviews Conducted (3+ External)
**Duration**: 2-3 weeks  
**Owner**: User (conducts externally) + Interview Notes Writing

**What happens**:
1. User conducts 3+ real interviews externally (via Zoom, phone, in-person)
2. User returns with interview notes (audio transcript, bullet points, or summary)
3. User pastes notes or uploads: "Here are my interview notes from [Person 1]"
4. System writes notes to: `interview-notes.md`
5. Each interview entry includes:
   - Interviewee: [Name, role, context]
   - Date: [When interviewed]
   - Raw notes or transcript
   - Key quotes captured by user
6. After 3+ interviews written to disk, auto-triggers Substep 2.5 (Synthesis)

**Exit Condition → Triggers 2.5**:
- Minimum 3 interview notes recorded in `interview-notes.md`
- Auto-trigger message: "You've completed 3 interviews. Ready for synthesis?"

**Substep Rules**:
- ☐ Real interviews, not assumptions (user talks to actual users)
- ☐ Different personas if possible (user, manager, admin)
- ☐ Minimum 3, recommend 5-7 for richer data
- ☐ Interview guide used (consistency across interviews)
- ☐ Notes written to disk immediately after each interview

**Typical message**:
```
📋 Interview Notes Recorded

Interview 1: Sarah (Small Business Owner) — 2026-06-10
  "We spend 3 hours every Friday on expense reconciliation"
  "Employees lose receipts; we chase them for weeks"
  "Current process: employees email receipts, I manually enter into accounting software"

Interview 2: Mike (Finance Manager) — 2026-06-12
  [Notes here...]

Interview 3: Lisa (Accountant) — 2026-06-15
  [Notes here...]

✅ 3+ Interviews Recorded. Ready for synthesis!
```

---

### Substep 2.5: Synthesis — Pain Points Ranked, Themes Extracted, Contradictions Flagged
**Duration**: 1-2 hours (auto-triggered after 3+ interviews)  
**Owner**: Researcher (auto-synthesis)

**What happens**:
1. Researcher analyzes all interview notes
2. Extracts pain points from interviews (what users complained about)
3. Groups pain points into themes (pattern recognition)
4. Ranks themes by frequency (which pain point mentioned most?)
5. Ranks themes by severity (which pain point would users pay to fix?)
6. Flags contradictions (User A said X, User B said the opposite)
7. Writes synthesis to disk: `interview-synthesis.md`
8. Synthesis includes:
   - Top 5 pain points (ranked by frequency + severity)
   - User needs extracted from pain points
   - Themes identified across interviews
   - Contradictions flagged with context
   - Actionable insights

**Auto-Trigger**: After 3+ interviews written, synthesis runs automatically

**Exit Condition → Triggers 2.6 + 2.7 (Parallel)**:
- Synthesis complete
- Message: "Interview synthesis complete. Eng Lead and Designer are analyzing constraints (in parallel). Current-state VSM underway."

**Typical synthesis output**:
```
🔍 Interview Synthesis Complete

Top 5 Pain Points (by frequency + severity):
1. Manual expense entry (5 mentions) — Takes 45 min/week per employee
2. Receipt loss (4 mentions) — Creates reconciliation delays of days
3. Approval bottleneck (3 mentions) — Manager approvals take 3+ days
4. Tax categorization (3 mentions) — Accounting errors require corrections
5. No visibility (2 mentions) — Employees don't know reimbursement status

Themes Identified:
  • Time waste: Manual processes create 45+ min/week per employee
  • Friction: Multi-step process (email → manual entry → approval → accounting)
  • Information gap: No status visibility to employees or managers
  • Quality: Errors in categorization/tax handling requiring manual fixes

Contradictions Flagged:
  ⚠️ User A said: "We need real-time approval"
     User B said: "Batch approval once/week is fine"
     → Context: User A is growing fast (needs scale); User B is stable
```

---

### Substep 2.6: Constraints — Technical + UX Analysis (Parallel with 2.7)
**Duration**: 2-3 hours (auto-triggered after synthesis)  
**Owner**: Eng Lead + Designer (parallel execution)

**What happens** (Eng Lead track):
1. Eng Lead reviews interview synthesis
2. Analyzes interviews for technical requirements and constraints:
   - What integrations are mentioned? (accounting software, email, mobile)
   - What scale is implied? (how many users? transactions/day?)
   - What compliance/security is implied? (financial data = encrypted, audit trail)
   - What infrastructure decisions does this force? (database, API, mobile app?)
3. Eng Lead writes technical constraints to: `technical-constraints.md`
4. Includes:
   - Required integrations (accounting API, email service)
   - Scalability requirements (users, transactions/day, data retention)
   - Security requirements (encryption, audit trail, permissions)
   - Technical risks identified
   - Architecture implications

**What happens** (Designer track — parallel):
1. Designer reviews interview synthesis + interview notes for workflow details
2. Analyzes for UX/workflow requirements and constraints:
   - What is the current workflow? (email → manual entry → approval)
   - What are the pain points in the workflow? (approval bottleneck, visibility)
   - What mobile vs. desktop constraints are there? (users on mobile during travel)
   - What accessibility requirements? (keyboard nav, screen readers, colorblind)
3. Designer writes UX constraints to: `ux-constraints.md`
4. Includes:
   - Workflow steps identified from interviews
   - Mobile requirements (% of users on mobile, native app vs. web)
   - Accessibility requirements (WCAG compliance, color contrast)
   - Key interactions that must be simple (receipt upload, approval)
   - Design risks and assumptions

**Auto-Trigger**: Both run in parallel after synthesis is complete

**Exit Condition → Triggers 2.7** (if not already running):
- Both Eng Lead and Designer analyses complete
- All constraints written to disk
- Message: "Technical and UX constraints documented. Current-state VSM processing..."

**Typical message**:
```
⚙️ Technical Constraints Documented

From interviews, I identified:
  • Integration: Accounting software (QuickBooks, NetSuite APIs)
  • Scale: 100–1000 users, 200 expenses/day
  • Security: PII (SSN, bank account), financial data (encrypted, audit trail, HIPAA compliance consideration)
  • Mobile: 60% of submissions on mobile during travel

✅ Written to: technical-constraints.md

🎨 UX Constraints Documented

From workflow analysis:
  • Primary workflow: Receipt capture → Manual entry → Approval → Accounting
  • Pain point: Approval takes 3+ days (batch process)
  • Mobile first: 60% of interactions on mobile (camera for receipt)
  • Accessibility: Screen reader support, keyboard nav (finance team has accessibility needs)
  • Key interactions: Receipt upload <10 sec, approval queue scanning <2 sec

✅ Written to: ux-constraints.md
```

---

### Substep 2.7: Current-State VSM — Process Mapped with Time/Waste Metrics
**Duration**: 1 hour (auto-triggered after synthesis)  
**Owner**: Researcher (with Value Stream Map skill)

**What happens**:
1. Researcher activates value-stream-mapping skill
2. Uses current-state mode (not future-state; real process as it works today)
3. Builds VSM from interview data:
   - All process steps from interviews (e.g., receipt email → manual entry → approval → accounting)
   - Actors in each step (employee, manager, accountant)
   - Time per step (from interviews: "takes me 45 min/week" = 9 min per expense)
   - Wait time between steps (manager batch approval once/week = 3-day wait)
   - Value-add analysis (which steps are actually valuable to user? which are waste?)
   - Handoff friction (transitions between actors, handoff delays)
4. Calculates key metrics:
   - Lead time (from expense occurrence to reimbursement: 10 days average)
   - Process time (actual work time: 15 minutes)
   - Wait time (queue, approval, batching: 9.75 days)
   - % Value-add (15 min / 9.75 days = 1.7% of time is value)
   - Time efficiency (15 min / 10 days = 97% waste)
   - Handoff count (4 major handoffs: employee → email → accountant → system → manager)
5. Writes VSM to: `current-state-vsm.md`
6. VSM includes:
   - Step-by-step swimlane diagram (text format or ASCII)
   - Time and waste annotations
   - Bottleneck identification (approval queue is biggest wait)
   - Handoff friction points

**Auto-Trigger**: After synthesis is complete

**Exit Condition → Triggers Stage 2 Completion**:
- Current-state VSM complete and written to disk
- All 7 substeps now complete
- Message: "Discovery complete. All analyses documented. Ready for gate validation?"

**Typical VSM output**:
```
📊 Current-State Value Stream Map

Employee        | Receipt → Email to Manager (wait for batch)
Manager         |                           ↓ Batch approval 1x/week (3-day wait)
Accountant      |                                    ↓ Manual entry (9 min work)
Accounting SW   |                                              ↓ Process (30 sec)
System          |                                                        ↓ Notify employee

Timeline:
  • Receipt occurs: Day 0
  • Email sent: Day 0 (+1 min)
  • Waits for batch approval: Days 1-3 (3-day wait)
  • Manager approves: Day 3 (+2 min)
  • Accountant enters: Day 3 (+9 min)
  • System processes: Day 3 (+30 sec)
  • Employee notified: Day 3 (+1 min)
  • Reimbursement: Day 5-10 (backend banking)

Lead Time: 10 days
Process Time: 12.5 minutes
Wait Time: 9 days 23.5 hours
% Value-Add: 1.7%
Bottleneck: Manager batch approval queue (3-day wait)
Handoff friction: 4 handoffs (employee → email → manager → accountant → system)
```

---

## Agent Execution Flow (Revised)

```
2.1 Entry ✓
  ↓ (user ready)
2.2 Interview Planning ✓
  ↓ (user ready)
2.3 Rehearsal (optional)
  ↓ (user ready)
2.4 Real Interviews (3+ conducted, written to disk)
  ↓ (3+ interviews complete)
2.5 Synthesis (auto-trigger)
  ↓ (synthesis complete)
2.6 + 2.7 Constraints + VSM (auto-trigger parallel)
  ↓ (both complete)
Stage 2 Complete ✓ (all 7 substeps done)
```

---

## Agents & Roles

| Agent | Substep | When | Invocation |
|-------|---------|------|-----------|
| main-orchestrator | 2.1 | Stage 2 start | Auto |
| researcher | 2.2, 2.4, 2.5, 2.7 | Interview flow | Auto or user prompt |
| simulate-user | 2.3 | Optional rehearsal | User can skip |
| eng-lead | 2.6 | After synthesis | Auto-trigger |
| designer | 2.6 | After synthesis | Auto-trigger |
| quality-gate | End | Before Stage 3 | /validate |

---

## Parallel Execution

**2.5 → 2.6 + 2.7**:
```
After synthesis complete:

researcher triggers:
  ├─ Eng Lead (technical constraints analysis) — parallel
  ├─ Designer (UX constraints analysis) — parallel
  └─ VSM current-state mapping — parallel

All 3 run in parallel. When all complete → Stage 2 done
```

---

## File Structure

```
[idea-name]/discovery/
├── assumptions-log.md          ← Created in 2.1, updated throughout
├── competitive-analysis.md     ← Filled during discovery research
├── interview-guide.md          ← Auto-written in 2.2
├── interview-notes.md          ← Filled in 2.4 (user pastes notes)
├── interview-synthesis.md      ← Auto-written in 2.5 (after 3+ interviews)
├── technical-constraints.md    ← Auto-written in 2.6 (Eng Lead)
├── ux-constraints.md           ← Auto-written in 2.6 (Designer)
└── current-state-vsm.md        ← Auto-written in 2.7 (after synthesis)
```

---

## Typical Timeline

| Substep | Duration | User Effort | Auto? |
|---------|----------|-------------|-------|
| 2.1 Entry | 15 min | None (reading) | Yes |
| 2.2 Interview Planning | 1-2 hrs | Heavy (coaching interaction) | Partial (guide auto-written) |
| 2.3 Rehearsal (optional) | 30-45 min | Medium (practice interview) | No (user chooses) |
| 2.4 Real Interviews | 2-3 weeks | Heavy (external, user-conducted) | Partial (note-taking) |
| 2.5 Synthesis | 1-2 hrs | Light (user reviews synthesis) | Yes (auto-analysis) |
| 2.6 Constraints | 2-3 hrs | Light (review constraint docs) | Yes (auto-analysis) |
| 2.7 VSM | 1 hr | Light (review VSM) | Yes (auto-mapping) |
| **Total Stage 2** | **3-4 weeks** | **Moderate (interview focus)** | **70% auto** |

---

## Exit Criteria (Gate to Stage 3)

☐ 2.1: Files created successfully; all 7 documents initialized
☐ 2.2: Interview guide written and user-approved
☐ 2.3: Rehearsal completed (optional) or explicitly skipped
☐ 2.4: Minimum 5 real interviews documented in interview-notes.md
☐ 2.5: Synthesis complete; pain points ranked; themes extracted; contradictions flagged
☐ 2.6: Technical constraints documented by Eng Lead; UX constraints documented by Designer
☐ 2.7: Current-state VSM complete with lead time, process time, wait time, % value-add metrics
☐ Discovery Report: All constraints/analyses integrated into stage-2-discovery-report.md
☐ Artifact marked as REVIEW (ready for validation)

**Gate Validation**:
```
/validate
  → quality-gate: Verify all 7 substeps complete
  → Report: ✅ PASS (all docs created, data quality checks pass)
  → Decision-logger: Log "Discovery Complete"
  → Session-manager: Update to Stage 3
```

---

## Role Agents Active

- **Researcher**: Substeps 2.2 (interview guide), 2.3 (rehearsal coaching), 2.5 (synthesis), 2.7 (VSM)
- **Eng Lead**: Substep 2.6 (technical constraints analysis)
- **Designer**: Substep 2.6 (UX constraints analysis)
- **Simulate-User**: Substep 2.3 (optional practice interviews)

---

## User Interactions Pattern

```
Day 1 (Substep 2.1):
  User: "Starting Stage 2"
  → System: Creates files, introduces personas, explains 7 substeps

Days 1-2 (Substep 2.2):
  Researcher: Coaches interview guide writing
  User: "Here's my interview guide"
  → System: Writes to disk, offers optional 2.3 rehearsal

Days 3-21 (Substeps 2.3-2.4):
  User: Conducts 3+ real interviews externally
  User: "Here are my interview notes from Sarah..."
  → System: Records notes to disk
  
  After 3+ interviews recorded:
  → System: Auto-triggers 2.5, 2.6, 2.7
  
Days 21-24 (Substeps 2.5-2.7 parallel):
  System: Runs synthesis, constraints analysis, VSM
  User: Reviews auto-generated documents
  
Day 24:
  User: "/validate"
  → System: Checks all substeps complete
  → Result: ✅ PASS → Ready for Stage 3
```

---

## Key Improvements Over Previous Flow

1. **Explicit Substeps**: 7 clear steps instead of 3 phases; easier to track progress
2. **Auto-Triggers**: After 3+ interviews, synthesis/constraints/VSM auto-run (no user action needed)
3. **File-Driven**: All outputs written to disk immediately (trackable, recoverable)
4. **Parallel Execution**: Eng Lead + Designer work simultaneously during 2.6; VSM runs parallel
5. **Rehearsal Option**: Optional 2.3 lets users practice before real interviews
6. **Current-State VSM**: 2.7 grounds product idea in workflow reality (time/waste metrics)
7. **Contradiction Handling**: 2.5 explicitly flags and surfaces disagreements across interviews
8. **Progress Visibility**: User always knows which substep they're on (e.g., "You're at 2.4/7")

---

## Notes

- **Interview Guide**: Auto-written by Researcher in 2.2; user can request edits before 2.3/2.4
- **Interview Rehearsal**: Optional; users can skip directly to real interviews (2.4) if confident
- **Minimum 3 Interviews**: Synthesis auto-triggers at 3+; recommend 5-7 for richer data
- **Contradiction is Good**: Flags real differences in user needs; helps identify personas or edge cases
- **VSM = Proof of Concept**: Current-state VSM shows exactly where the product creates value
