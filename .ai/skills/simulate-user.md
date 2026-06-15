# Simulate User Skill

**Purpose**: Role-play a realistic target user based on the Idea Brief, enabling practice interviews and prototype walkthroughs before conducting real user research.

**What it does**:
- Loads the target user persona from the Idea Brief
- Creates a synthetic user with realistic background, constraints, and pain points
- Responds to interview questions as that user would (not as an AI assistant)
- Provides honest, sometimes contradictory feedback (realistic user behavior)
- Conducts prototype walkthroughs by simulating realistic interactions
- Generates realistic obstacles and edge cases
- Outputs interview notes clearly labeled as SYNTHETIC (do not count toward 3-interview minimum)
- Enables practice/rehearsal before real user interviews (Stage 2, Substep 2.3)

**When to use**:
- **Stage 2 Substep 2.3** (Rehearsal): Practice interviews before conducting real ones
- **Any stage (on-demand)**: Test prototype concepts with simulated user feedback
- **Before user interviews**: Build confidence in interview skills and question clarity
- **Prototyping**: Validate UX/workflow assumptions with realistic user reaction

**Key principle**:
Synthetic users are not real validation. They're practice tools. Real interviews (minimum 3) are required for Stage 2 gate. Synthetic feedback helps prepare, not replace, real user research.

---

## How Synthetic Users Differ from Real Users

| Aspect | Synthetic User | Real User |
|--------|---|---|
| **Source** | Generated from Idea Brief persona | Actual person in market |
| **Realism** | Realistic patterns, but scripted | Unpredictable, raw, authentic |
| **Contradictions** | Programmed edge cases | Natural disagreements |
| **Counts toward 3?** | ❌ NO | ✅ YES |
| **Purpose** | Practice & validation | Actual market evidence |
| **Use case** | Rehearsal, prototyping | Gate validation |

---

## Synthetic User Creation

### Step 1: Load Idea Brief Target User

The skill reads from the Idea Brief and extracts:

```
From Idea Brief:
  - Target User: [Role, company size, context]
  - Problem: [What problem do they face?]
  - Workaround: [How do they solve it today?]
  - Urgency: [How urgent is this problem?]
  - Constraints: [What limits them?]
```

### Step 2: Synthesize Realistic Persona

From Idea Brief data, generate a synthetic user profile:

```
Name: [Generated realistic name]
Role: [From Idea Brief]
Company: [Realistic company size/type]
Experience: [Years in role]
Tech comfort: [Low/Medium/High]
Pain level: [How much does the problem hurt?]
Motivation: [What drives them to solve it?]
Constraints: [Time, budget, authority]
Workaround: [Current way of solving it]
Frustrations: [What specifically frustrates them?]
```

**Example**:

```
Idea Brief Target User:
  - Role: "Finance Manager at mid-size company"
  - Problem: "Expense approval process is slow, email-based"
  - Workaround: "Batch approvals once per week"

Synthesized Synthetic User:
  Name: Sarah Chen
  Role: Finance Manager
  Company: 150-person SaaS company
  Experience: 7 years in finance, 2 years as manager
  Tech comfort: Medium (comfortable with web apps, not technical)
  Pain level: High (spends 30 min/week on approvals)
  Motivation: Want faster cycle, fewer employee complaints
  Constraints: Limited budget authority, need IT approval for new tools
  Workaround: Batch approve expenses every Thursday (holds for 3-5 days)
  Frustrations: Employees complain about delays, she forgets about some approvals
```

---

## Invocation: Interview Practice Mode

**User command**:

```
/simulate-user

OR

/rehearsal

OR

/practice-interview [feature]
```

**System response**:

```
✅ Synthetic User Ready: Sarah Chen (Finance Manager)

I'm Sarah, a Finance Manager at a mid-size SaaS company. I've been managing 
approvals for expense reports for about 2 years. It's tedious.

You've got my attention. Let's talk about expenses. What would you like to know?

[Ready to answer your interview questions]
```

---

## Interview Practice Workflow

### Phase 1: Warm-Up

User asks: *"How are you doing today?"*

Synthetic User responds:

> "Good, busy but good. We're in mid-quarter close, so finances are a bit hectic right now, but I've got 15 minutes."

---

### Phase 2: Core Interview Questions

**Question**: *"Walk me through how you currently handle expense approvals. Start from the beginning."*

**Synthetic User Responds**:

> "Sure. So employees submit their expenses via email. They'll attach receipts, put the amount in the subject line or email body. That comes to me and my team. We get maybe 20-30 a week across my team.
>
> What I do is I batch them up. I'll wait until Thursday, then spend about 30 minutes reviewing them all at once. I check the amount against the policy limit, make sure the category makes sense. If everything looks good, I reply 'approved'. If there's an issue, I ask the employee to clarify or resubmit.
>
> Then I forward the approved ones to our accounting department. They re-enter the data into QuickBooks, process it, and eventually the employee gets reimbursed. That whole thing takes about 7-10 days from submission to when they see money."

---

### Phase 3: Pain Point Exploration

**Question**: *"Of everything you just described, what's the most frustrating part?"*

**Synthetic User Responds**:

> "The waiting. My team is frustrated because they have to float their own money for a week. And honestly? I sometimes forget to review them if Thursday gets crazy. So some sit longer. The employees email me asking 'where's my reimbursement', and I have to explain the batch schedule. It creates friction.
>
> Plus, I'm re-doing work that was already done. The employee already categorized it and pulled the amount. I'm just re-verifying the same data. Feels inefficient."

---

### Phase 4: Edge Case Discovery

**Question**: *"What happens if an expense comes in that's outside policy?"*

**Synthetic User Responds**:

> "That happens. I have to flag it and either reject it or ask for an exception from the employee's manager. If it's borderline, I'll approve it anyway because escalation takes time. Sometimes I just email the employee and say 'next time submit this way', but then it doesn't get recorded as actually out-of-policy.
>
> Oh, and last month someone submitted a personal expense by accident. I almost approved it before noticing. If I'd missed it, it would have gone to accounting and Finance would have flagged it. That would've been embarrassing."

---

### Phase 5: Solution Reaction

**Question**: *"If a system could let you approve expenses from your phone, instantly, would you use it?"*

**Synthetic User Responds**:

> "Yeah, probably. But I'd need it to be simple. I don't want to have to log in to some clunky system. And it would need to work with our email because that's where they submit. Or if they could submit in the app, that would actually be better.
>
> But honestly, I'm skeptical about adoption. My team uses email. That's where they're comfortable. I'd need the CEO to mandate it for it to stick.
>
> How much would it cost? Our budget is tight."

---

## Prototype Walkthrough Mode

**User command**:

```
/simulate-user --prototype

OR

/rehearsal --walkthrough
```

**System prompt**:

```
✅ Prototype Walkthrough with Synthetic User

Describe your prototype or show me what you're thinking. I'll react as Sarah (Finance Manager) 
would to using it. I'll point out what works, what's confusing, what feels clunky.

Ready when you are.
```

---

### Walkthrough Example

**User**: *"Here's a mockup of a mobile approval screen. You get a notification when an expense is submitted. You tap 'Review'. You see the amount, category, and receipt photo. You either approve or reject."*

**Synthetic User Responds**:

> "Okay, so I'm scrolling and I get a notification. Let me open it...
>
> I see the expense card. $75 for Travel: Meals. Receipt looks like a receipt. Easy to scan. Amount is clear.
>
> I want to know who submitted it, though. Is this from Sarah in Sales or Sarah in Eng? That matters because I know which department tends to go over budget.
>
> Also, I usually want to see a few more details. Like, what date was this expense? Was it during a client trip I know about? If it's random, it feels suspicious.
>
> But the interface is clean. I could see myself approving straightforward ones this way. What happens if I want to reject it? Is there a comment section so I can tell the employee why?"

---

## Output: Synthetic Interview Notes

After the interview or walkthrough, notes are written to:

```
[idea-name]/discovery/interview-notes/
├── synthetic-interview-1-sarah-chen.md
├── synthetic-interview-2-sarah-chen-walkthrough.md
└── [other synthetic interviews]
```

**File format**:

```markdown
# Interview Notes (SYNTHETIC)

**Date**: [Simulation date]  
**Interviewee**: Sarah Chen (SIMULATED / SYNTHETIC USER)  
**Actual Role**: Finance Manager  
**Simulated Company**: Mid-size SaaS (150 people)  
**Duration**: [Simulation duration]  
**Interviewer**: [Your name]  
**Method**: Simulated (Not real user)  
**Status**: 🔴 DOES NOT COUNT toward 3-interview minimum

---

## Important Note

This is a SYNTHETIC interview with a role-played user based on the Idea Brief target persona.
It is NOT a real user interview. Real interviews (minimum 3) are required for Stage 2 validation.

Use this for:
✅ Practice before real interviews
✅ Testing interview questions for clarity
✅ Validating prototype concepts

Do NOT use this for:
❌ Stage 2 gate validation (needs 3 real interviews)
❌ Market validation evidence

---

## Interview Notes

[Raw notes from the simulated interview session]

### Q1 - Current Workflow:
[Synthetic user's response]

### Q2 - Biggest Pain Point:
[Synthetic user's response]

### Key Quotes:
> "The waiting. My team is frustrated because they have to float their own money for a week."
> "I'm re-doing work that was already done. Feels inefficient."

### Synthetic User Reactions:
[What surprised you about how the synthetic user reacted?]
[What did you learn about your interview questions?]
[What would you ask differently in a real interview?]

### Next Steps:
[What will you do differently in real interviews based on this practice?]
```

---

## Synthetic User Capabilities

### ✅ What Synthetic Users DO

- **Answer interview questions** realistically based on persona
- **Provide honest feedback** (including criticism and hesitation)
- **Exhibit realistic behavior** (forget things, get distracted, need clarification)
- **Create edge cases** (problems they encounter, workarounds they use)
- **React to prototypes** (what works, what's confusing, what they need)
- **Raise concerns** (budget, adoption, learning curve)
- **Provide contradictions** (sometimes want X, sometimes want Y depending on context)
- **Surface assumptions** (reveal what you got wrong about their needs)

### ❌ What Synthetic Users DON'T DO

- **Replace real validation** — They're practice, not evidence
- **Count toward 3-interview gate** — Only real interviews count
- **Provide market truth** — They're one persona, one perspective
- **Predict adoption** — Real users have different motivations
- **Generate quantitative data** — No metrics, only qualitative feedback
- **Replace user research** — They supplement, they don't substitute

---

## Best Practices for Synthetic User Interviews

### 1. Use Synthetic Interviews for Rehearsal (Substep 2.3)

```
Interview Guide written (2.2)
  ↓
Conduct 1-2 synthetic interviews to practice (2.3)
  ↓ (Identify unclear questions, get confident)
Conduct 3+ real interviews (2.4)
```

### 2. Vary the Synthetic Persona if Possible

If Idea Brief mentions multiple target personas (Employee, Manager, Admin):

```
/simulate-user --persona "employee"
/simulate-user --persona "manager"
/simulate-user --persona "admin"
```

Each sees the problem differently. Synthetic interviews reveal this diversity before real interviews.

### 3. Test Interview Questions

If a question gets confusing or the synthetic user asks "what do you mean":

```
Synthetic User: "I'm not sure what you mean by 'workflow'."

Action: Revise that question before real interviews.
```

### 4. Prototype Feedback

Use synthetic walkthroughs to catch UX issues before prototyping:

```
You: "Here's the approval screen"

Synthetic User: "Where's the employee name? I need to know if this is John or Janet."

Action: Add employee name to screen before building prototype.
```

### 5. Don't Let Synthetic Interviews Replace Validation

⚠️ **Critical Rule**: Synthetic interview notes are clearly marked SYNTHETIC. They do NOT count toward the 3-interview minimum for Stage 2 gate.

```
✅ CORRECT:
  - Conduct 2 synthetic interviews for practice
  - Conduct 3+ real interviews
  - Total: 5 interviews (3 real count toward gate)

❌ WRONG:
  - Conduct 5 synthetic interviews
  - Skip real interviews
  - Result: Stage 2 gate FAILS (needs real validation)
```

---

## Synthetic User Generation Details

### Persona Extraction

From Idea Brief, the skill extracts:

```yaml
Target User:
  Role: [e.g., "Finance Manager"]
  Company Size: [e.g., "50-500 employees"]
  Problem: [The pain point they face]
  Workaround: [How they solve it today]
  Urgency: [High / Medium / Low]
  
Constraints:
  - Budget: [Can they spend money on solutions?]
  - Authority: [Can they make buying decisions?]
  - Tech: [Are they tech-savvy?]
  - Time: [Do they have bandwidth to change?]
```

### Realistic Behavior

Synthetic users are programmed to:

- **Contradict themselves** — Say they want X, then worry about cost
- **Forget details** — "I don't remember exactly how many", "maybe it's 10 min, could be 15"
- **Be skeptical** — "That sounds good, but will it actually work?"
- **Have context** — Reference their company, team, recent events
- **Ask clarifying questions** — "Do you mean...?" or "What's that?"
- **Exhibit real concerns** — Budget, learning curve, adoption

### Example Realism

❌ **Unrealistic (AI-like)**:
> "The expense approval process is inefficient due to batch processing creating a 7-10 day lead time, which impacts cash flow."

✅ **Realistic (Human-like)**:
> "Honestly, the worst part is my team complains to me every week about waiting. And I forget to approve them sometimes because it's not my only job. So they just sit in my email."

---

## Invocation Examples

### 1. Simple Practice Interview

```
User: /simulate-user

System: Loads Sarah (Finance Manager) synthetic persona

User: [Conducts full 30-min interview using interview guide]

System: Generates synthetic-interview-1-sarah-chen.md (marked SYNTHETIC)
```

### 2. Prototype Walkthrough

```
User: /simulate-user --prototype

System: Ready for prototype feedback

User: "Here's the mobile approval screen mockup..."

System: Provides realistic user reaction, UX feedback

User: Takes notes, revises design based on feedback

System: Generates synthetic-interview-walkthrough.md (marked SYNTHETIC)
```

### 3. Multiple Personas

```
User: /simulate-user --persona "employee"

System: Loads Emily (Employee target user) persona

[Interview happens]

User: /simulate-user --persona "manager"

System: Loads Sarah (Manager target user) persona

[Different interview, different perspective]
```

---

## Integration with Stage 2 Workflow

**Stage 2 Substep 2.3: Rehearsal**

```
2.2 Interview Planning ✓
  ↓
2.3 Rehearsal (optional)
  ├─ User asks: "I want to practice before real interviews"
  ├─ System invokes: /simulate-user
  ├─ Synthetic user conducts realistic interview
  ├─ Notes written: synthetic-interview-1-*.md (marked SYNTHETIC)
  └─ Result: User gets feedback, refines questions
  
2.4 Real Interviews ✓
```

---

## Validation Rules

### Synthetic Interviews

```
✅ Count as PRACTICE
✅ Do NOT count toward 3-interview minimum
✅ Clearly labeled "SYNTHETIC" in metadata
✅ Used in 2.3 rehearsal
✅ Used for prototype testing
✅ Output files in interview-notes/synthetic/ folder
```

### Real Interviews

```
✅ Count toward 3-interview minimum
✅ Required for Stage 2 gate
✅ Labeled with actual user name
✅ Conducted externally
✅ Output files in interview-notes/ folder
```

### Gate Logic

```
Real interviews = 3 ✅ → Stage 2 gate can PASS
Real interviews = 2 ❌ → Stage 2 gate must BLOCK ("Need 1 more real interview")
Real + Synthetic = 8 interviews, but only 2 real ❌ → Stage 2 gate must BLOCK
```

---

## Output Examples

### Synthetic Interview Note (Rehearsal)

**File**: `interview-notes/synthetic/synthetic-interview-1-sarah-chen-rehearsal.md`

```markdown
# Interview Notes (SYNTHETIC — REHEARSAL)

**Date**: 2026-06-15  
**Simulated User**: Sarah Chen  
**Simulated Role**: Finance Manager  
**Duration**: 28 minutes  
**Interviewer**: You  
**Interview Type**: Practice / Rehearsal  

🔴 STATUS: SYNTHETIC
This is a practice interview with a role-played user based on Idea Brief persona.
Does NOT count toward 3-interview minimum for Stage 2 validation.

---

## Key Findings from Rehearsal

### What Worked:
- Question about "current workflow" got a clear walkthrough
- Prototype feedback was specific and actionable
- User caught a UX issue (missing employee name on approval card)

### What Didn't Work:
- Question about "pain points" was vague; user asked "what do you mean?"
- Need to be more specific: "What frustrates you most about approvals?"

### Questions to Refine for Real Interviews:
- [ ] Clarify "pain point" → ask about specific frustrations
- [ ] Ask about approval frequency (how many per day?)
- [ ] Ask about error rates (how often wrong categorization?)
- [ ] Ask about time cost (exactly how many minutes per approval?)

### Confidence Gained:
✅ Able to conduct full 30-min interview without getting lost
✅ Feel ready for real interviews

### Next Steps:
1. Refine questions based on this feedback
2. Conduct 2 more synthetic interviews if needed
3. Proceed to real interviews (Stage 2.4)
```

### Synthetic Prototype Feedback

**File**: `interview-notes/synthetic/synthetic-walkthrough-sarah-chen-approval-screen.md`

```markdown
# Prototype Walkthrough (SYNTHETIC)

**Date**: 2026-06-15  
**Prototype**: Mobile Approval Screen  
**Simulated User**: Sarah Chen (Finance Manager)  
**Duration**: 15 minutes  

🔴 STATUS: SYNTHETIC
This is prototype feedback from a role-played user. Use for design refinement only.
Does NOT validate actual user needs.

---

## Prototype Reaction

**What Worked:**
✅ Clean layout — Easy to scan approval info
✅ One-tap approve — Simple enough to do from phone
✅ Receipt photo visible — Can verify without opening attachment

**What Was Confusing:**
❓ Where's the employee name? Need to know if this is from Sarah or Janet
❓ What's the date of the expense? Is this from last week or last month?
❓ Why can't I see the reason they entered?

**What's Missing:**
- [ ] Employee name (critical for approving by department budget)
- [ ] Expense date (need to verify timing)
- [ ] Reject reason field (want to tell employee why without separate email)
- [ ] Batch action (want to approve 3 at once if they're all good)

**Concerns Raised:**
⚠️ "Will my team actually use the app, or will they keep emailing?"
⚠️ "What's the setup cost? We have limited budget."

---

## Design Changes to Consider

1. Add employee name to card
2. Add expense date prominently
3. Add optional rejection reason field
4. Add "approve multiple" checkbox
5. Simplify onboarding (they're not tech-savvy)

---

## Note for Next Prototype

Test these changes with another synthetic user before building.
```

---

## Commands Summary

| Command | Effect |
|---------|--------|
| `/simulate-user` | Load synthetic user, start practice interview |
| `/rehearsal` | Same as above (alias) |
| `/practice-interview [feature]` | Practice interview focused on specific feature |
| `/simulate-user --prototype` | Prototype walkthrough mode |
| `/simulate-user --persona "employee"` | Load different target persona (if multiple) |
| `/simulate-user --persona "manager"` | Load manager persona |
| `/simulate-user --save-as-template` | Save this synthetic user for later reuse |

---

## Summary

**Synthetic User Skill** enables:
- ✅ Practice interviews before real user research
- ✅ Prototype testing with realistic user reactions
- ✅ Interview question refinement
- ✅ Confidence building before Stage 2.4 real interviews
- ✅ UX feedback before design/build

**Critical Rules**:
- ❌ Synthetic interviews do NOT count toward 3-interview minimum
- ❌ Synthetic feedback does NOT replace real user validation
- ✅ All synthetic outputs clearly labeled "SYNTHETIC" in metadata
- ✅ Synthetic notes stored in separate directory or file naming convention
- ✅ Real interviews (3+) still required for Stage 2 gate

**Workflow**:
```
2.2 Interview Guide ✓
  ↓
2.3 Rehearsal (optional: use /simulate-user)
  ↓
2.4 Real Interviews (3+ required)
  ↓
2.5 Synthesis (only analyzes real interviews)
```

