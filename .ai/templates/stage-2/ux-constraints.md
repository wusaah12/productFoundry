# UX Constraints

**Feature**: [Feature Name from Stage 1]  
**Stage**: 2 - Discovery Research  
**Owner**: Designer  
**Created**: [Date] (Auto-triggered after interview synthesis)  
**Updated**: [Date]

---

## Purpose

This document captures UX/workflow requirements and constraints identified during discovery interviews. Constraints drive design decisions:
- How users interact with the product (workflow, device, context)
- Accessibility requirements
- Design patterns and interaction models
- Device/platform constraints
- Key interaction principles

**Owner**: Designer analyzes interview notes and identifies:
- Current workflow steps (how users do it today)
- Key interactions that must be simple
- Mobile vs. desktop requirements
- Accessibility requirements (WCAG compliance)
- Device/context constraints
- UX risks and mitigations

---

## Current Workflow Analysis

### Existing Workflow (From Interviews)

Users described how they currently solve this problem. Map out each step:

**Step-by-Step Workflow**:

```
Employee:
  1. Receipt arrives (email, paper, or photo)
  2. Open email / find receipt
  3. Extract amount + date
  4. Open accounting software (QuickBooks)
  5. Manually enter expense (amount, category, date)
  6. Attach receipt (if supported)
  7. Email approval request to manager
     ↓ Wait 3-7 days
     
Manager:
  8. Receive email request
  9. Open email, review expense
  10. Reply "approved" or "rejected"
  11. Forward to accounting
      ↓ Wait 1-2 days

Accountant:
  12. Receive forwarded email
  13. Manually re-enter into accounting system (duplicate entry!)
  14. Submit for processing
      ↓ Wait 3-5 days
      
Bank/System:
  15. Process reimbursement
  16. Send confirmation email
```

**Pain Points in Workflow**:
- Step 3 (Extract amount/date): Error-prone, slow
- Step 5 (Manual entry): Duplicate work, error-prone
- Wait between steps: Batching delays
- Step 13 (Re-entry): Duplication of effort

**Opportunities**:
- Automate step 3 (OCR extraction)
- Eliminate step 13 (re-entry)
- Reduce wait times (faster approvals)

---

### Workflow Actors & Roles

Who participates in the workflow?

| Actor | Current Role | Pain Points | Access Needed |
|-------|-------------|-----------|---|
| Employee | Submitter | Manual entry, slow processing | Submit, view status |
| Manager | Approver | Batch approvals, delays | Approve/reject, see queue |
| Accountant | Processor | Duplicate entry work | Export approved, see history |
| System | Integration | Manual submissions | Accounting API integration |

---

## Key Interactions (Must Be Simple)

**From interviews, which interactions are critical?** These must be intuitive and fast.

### Interaction 1: Receipt Capture

**Current**: Employee opens email, takes screenshot, manually enters amount  
**Pain**: Error-prone, slow (5+ minutes per receipt)  
**Target**: Employee opens app, takes photo with phone camera  
**Requirements**:
- [ ] Camera integration (iOS + Android)
- [ ] One-tap to capture
- [ ] OCR auto-extracts amount + date
- [ ] User can edit extracted fields
- [ ] Completion in <30 seconds

**UX Pattern**:
```
Home Screen
  ↓ [New Expense Button]
Capture Screen
  ↓ [Take Photo / Choose from Library]
Photo Review Screen
  ↓ [Auto-extracted: Amount=$75, Date=2026-06-10, Category=blank]
  ↓ [User edits if needed]
Confirmation Screen
  ↓ [Submit button]
Success Message
  ↓ "Expense submitted ✓"
```

---

### Interaction 2: Approval Queue

**Current**: Manager receives emails, reads individually, replies with approval  
**Pain**: Slow, no visibility into pending count, hard to track  
**Target**: Manager opens app, sees 5 pending expenses, approves in batch  
**Requirements**:
- [ ] Pending count visible on home screen
- [ ] Approval queue shows all pending (paginated if many)
- [ ] Batch approval (select multiple, approve all)
- [ ] Sort/filter (by amount, date, submitter)
- [ ] Completion per expense: <10 seconds

**UX Pattern**:
```
Manager Home Screen
  ↓ [Pending Approvals: 5]
Approval Queue Screen
  ↓ [List: Expense 1, Expense 2, Expense 3, Expense 4, Expense 5]
  ↓ [Select checkboxes for batch]
  ↓ [Approve Selected button]
Confirmation
  ↓ "5 expenses approved ✓"
```

---

### Interaction 3: Status Visibility

**Current**: Employee submits expense, waits, doesn't know status  
**Pain**: Employee anxiety, repeated inquiries ("Where's my reimbursement?")  
**Target**: Employee submits, sees status update in real-time  
**Requirements**:
- [ ] Real-time status updates (PENDING → APPROVED → SUBMITTED → REIMBURSED)
- [ ] Status details (when status changed, who changed it, next step)
- [ ] Timeline view (visual progress: submitted → approved → paid)
- [ ] Completion: See status in <1 second

**UX Pattern**:
```
Expense Details Screen
  ↓ Timeline View:
    ✓ Submitted 2026-06-10 14:32 by You
    ✓ Approved 2026-06-11 09:15 by Manager John
    ⏳ Submitted to Accounting (pending)
    ⏳ Reimbursement (pending)
```

---

## Platform Requirements

### Mobile-First vs. Desktop

From interviews, what are the usage patterns?

**Mobile Usage**:
- % of interactions on mobile: [e.g., 60%]
- Context: [Traveling / On-site / Field work / In-office]
- Timing: [During expense occurrence / Later review]
- Devices: [iPhone / Android / Both / Specific versions]

**Implication**: 
- If 60%+ mobile: Mobile app should be primary, desktop secondary
- Expense capture (receipt photo) definitely mobile-first
- Approval queue could be desktop-focused (manager usually office-based)

---

### Device Support Matrix

| Device | Usage % | Priority | Notes |
|--------|---------|----------|-------|
| iPhone (iOS 14+) | 35% | HIGH | Employees capture receipts |
| Android (Android 10+) | 25% | HIGH | Android users need support |
| Desktop (Chrome/Safari) | 40% | MEDIUM | Managers, accountants use desktop for approvals |

**Design Decision**: Mobile app (React Native or native) for iOS + Android; web app for desktop approval.

---

### Responsive Design Requirements

**Mobile (< 600px)**:
- Vertical layout (single column)
- Touch-friendly buttons (minimum 44x44 px)
- Simplified navigation (bottom tab bar)
- No horizontal scroll

**Tablet (600-1000px)**:
- 2-column layout (possible)
- Same touch targets
- Landscape support

**Desktop (>1000px)**:
- 3+ column layout
- Mouse/keyboard interaction
- Complex approval queue (data table)
- Larger form fields

---

## Accessibility Requirements

### WCAG Compliance

**Target**: WCAG 2.1 Level AA (industry standard)

Breakdown:
- [ ] **Perceivable**: All information presented in multiple ways
- [ ] **Operable**: All interactions keyboard-accessible
- [ ] **Understandable**: Clear language, consistent patterns
- [ ] **Robust**: Works with assistive tech (screen readers)

---

### Visual Accessibility

**Color Contrast** (WCAG AA: 4.5:1 for normal text, 3:1 for large text):
- Text on background: Minimum 4.5:1 contrast ratio
- Action buttons: Minimum 3:1 contrast ratio
- Never use color alone to convey meaning (e.g., red for error; use red + icon)

**Color Blindness**:
- [ ] Avoid red/green-only differentiation
- [ ] Use patterns (red + striped for error; green + checkmark for success)
- [ ] Test with color blindness simulator

---

### Keyboard Navigation

Users with mobility limitations use keyboard only. All interactions must work via keyboard:

- [ ] Tab/Shift+Tab to navigate between elements
- [ ] Enter/Space to activate buttons
- [ ] Arrow keys for list navigation
- [ ] Escape to close modals
- [ ] All interactive elements must be keyboard-accessible

**Design Pattern**: "Tab order" should follow visual flow (left-to-right, top-to-bottom)

---

### Screen Reader Support

Users with vision limitations use screen readers (JAWS, NVDA, VoiceOver). All content must be announced:

- [ ] All images have alt text (describe purpose, not "image.jpg")
- [ ] Form fields have labels (not just placeholder text)
- [ ] Buttons have descriptive labels ("Approve" not just "OK")
- [ ] Page structure uses headings (H1 → H2 → H3) and landmarks (nav, main, footer)
- [ ] Dynamic updates announced (status changes, validation errors)

**Example**: Instead of `<input placeholder="Amount">`, use `<label>Expense Amount (USD)</label><input>`

---

### Motor & Cognitive Accessibility

- [ ] Large touch targets (minimum 44x44 px for mobile buttons)
- [ ] Sufficient spacing between clickable elements (avoid accidental clicks)
- [ ] Clear error messages (specific: "Amount must be a number" not "Invalid input")
- [ ] Undo capability (user can reverse recent actions)
- [ ] Consistent patterns (same interaction works same way everywhere)

---

## Navigation & Information Architecture

### Key Screens (Mobile App)

```
Home
  ├─ New Expense (Primary action)
  ├─ Recent Expenses (List view)
  ├─ Expense Details
  │  ├─ Status timeline
  │  ├─ Receipt image
  │  ├─ Edit (if PENDING)
  └─ Settings

(For Manager role, replace "Recent Expenses" with "Approval Queue")
```

### Navigation Pattern

- **Bottom Tab Bar** (mobile): Home, Expenses, Profile
  - Always visible, easy one-handed access
  - 3-5 tabs maximum (not more than 5)

- **Side Menu** (desktop): Collapsible navigation
  - Home, Expenses, Approvals (if manager), Settings, Help

---

## Interaction Patterns

### Error Handling

**Principle**: Prevent errors when possible; handle gracefully when they occur

**Examples**:

**Validation**:
```
User enters amount "$abc"
  ↓ Real-time validation
  ↓ Error message: "Amount must be a number" (specific, not "Invalid")
  ↓ Focus returns to field
  ↓ Submit button remains disabled until fixed
```

**Network Errors**:
```
User submits expense
  ↓ Network fails
  ↓ Message: "Connection lost. Try again?" (clear, actionable)
  ↓ Retry button
  ↓ On retry, submit again
```

**Graceful Degradation**:
```
OCR fails to extract receipt amount
  ↓ Message: "Receipt unclear. Please enter amount manually."
  ↓ Show manual entry field
  ↓ User completes form
  ↓ Submission succeeds
```

---

### Confirmation Patterns

**High-Risk Actions** require confirmation (can't undo):

```
User clicks "Delete Expense"
  ↓ Modal: "Delete this expense? This can't be undone."
  ↓ [Cancel] [Delete] buttons (Cancel is default, Tab order puts focus there)
```

**Low-Risk Actions** (easily undone) don't need confirmation:

```
User clicks "Archive Expense"
  ↓ Expense archived immediately
  ↓ Undo button appears at bottom: "Undo archive?"
  ↓ User can undo within 10 seconds
```

---

### Loading & Feedback

**Network Operations** need feedback:

```
User clicks "Approve"
  ↓ Button changes to loading state (spinner + disabled)
  ↓ Message: "Approving..." (indicates action in progress)
  ↓ After success: Confirmation ("Approved ✓") + sound
  ↓ Navigate to next item or home
```

---

## Form Design

### Expense Submission Form

**Field Order**:
1. Receipt image (optional but preferred)
2. Amount (required)
3. Category (required, dropdown)
4. Date (required, date picker)
5. Notes (optional, free text)
6. Attach receipt (optional, file upload)

**Validation**:
- [ ] Real-time validation (as user types)
- [ ] Clear error messages on each field
- [ ] Submit button disabled until all required fields valid
- [ ] No errors appear on page load (only after user interaction)

---

### Data Entry Patterns

**Amount Field**:
- Input type: `number` (mobile shows numeric keyboard)
- Format: "$75.00" displayed, but "75" input is fine
- Currency assumed (USD), no need for user to select

**Date Field**:
- Use native date picker (not text field)
- Mobile: Calendar picker
- Desktop: Date input or calendar widget

**Category Dropdown**:
- Pre-populated from interviews: [Travel, Meals, Office, Other]
- Allow custom entry if not in list (user types)
- Auto-complete / search if 10+ options

**Notes Field**:
- Optional but encouraged
- Example: "Client meeting lunch"
- Helps manager approve faster

---

## Design System & Consistency

### Color Palette

| Use Case | Color | Notes |
|----------|-------|-------|
| Primary Action (Approve, Submit) | Green (#4CAF50) | High contrast, accessible |
| Secondary Action (Cancel, Back) | Gray (#757575) | Neutral |
| Danger (Delete, Reject) | Red (#F44336) | High contrast |
| Status: Pending | Orange (#FF9800) | Not red (might mean error) |
| Status: Approved | Green (#4CAF50) | Positive |
| Status: Rejected | Red (#F44336) | Negative |
| Disabled State | Gray (#BDBDBD) | Lowest contrast acceptable |

---

### Typography

- **Headings**: Sans-serif, bold, size 16-20px (mobile), 20-28px (desktop)
- **Body Text**: Sans-serif, regular, 14px (mobile), 16px (desktop)
- **Labels**: Sans-serif, regular, 12px (mobile), 14px (desktop)
- **Line Height**: 1.5 (mobile), 1.6 (desktop) for readability

---

### Component Library

Consistent reusable components:

- Buttons (primary, secondary, disabled states)
- Form fields (text, number, email, date, dropdown)
- Modals (confirmation, error, success)
- Cards (expense item, approval item)
- Lists (scrollable, paginated)
- Status badges (pending, approved, rejected)

---

## UX Risks & Mitigations

### Risk 1: Mobile Receipt Capture Accuracy

**What could go wrong**: OCR extraction has 80% accuracy; users get frustrated when receipts misread

**Severity**: MEDIUM  
**Probability**: HIGH (very likely; OCR is imperfect)

**Mitigation**:
- [ ] Show extracted data for user to review/edit before submit
- [ ] If OCR fails >2x, offer manual entry fallback
- [ ] Collect feedback ("Is extraction correct?") to improve model
- [ ] Set user expectations ("Receipt should be clear, well-lit, straight-on")

---

### Risk 2: Mobile Battery/Connectivity

**What could go wrong**: User submits on mobile with bad signal; data loss or stale submission

**Severity**: MEDIUM  
**Probability**: MEDIUM

**Mitigation**:
- [ ] Offline-first: Store submission locally, sync when connection restored
- [ ] Clear feedback: "Offline. Will submit when connection restored."
- [ ] No data loss: Form data saved even if user closes app
- [ ] Retry logic: Auto-retry if submission fails

---

### Risk 3: Manager Approval Queue Too Long

**What could go wrong**: Manager sees 100 pending approvals; doesn't know where to start

**Severity**: LOW  
**Probability**: MEDIUM

**Mitigation**:
- [ ] Default sort: Most recent first (most time-sensitive)
- [ ] Filter: By date, amount, submitter
- [ ] Pagination: Show 10 at a time (not all 100)
- [ ] Search: Find specific submission
- [ ] Batch actions: Select multiple, approve together

---

## Next Steps

### Designer Review:

- [ ] Validate all UX constraints are realistic (not over-designed)
- [ ] Identify any missing constraints (ask interviews' end-users more questions?)
- [ ] Assess feasibility (can we design/build this with current team/budget?)
- [ ] Identify UX design spikes (e.g., "Prototype OCR confidence display")

### For Stage 3 (Hypothesis):

- [ ] Include UX constraints in hypothesis (e.g., "Hypothesis assumes mobile capture is feasible")
- [ ] Plan UX validation (e.g., "User test: Can employee capture receipt in <30 seconds?")

### For Stage 5+ (Roadmap):

- [ ] Use constraints to define MVP scope (core interactions first)
- [ ] Use risks to define Phase priorities (high-risk items first)
- [ ] Use accessibility requirements to inform design standards

---

