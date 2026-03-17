# Decision Log

> Keep a record of major decisions made during the product discovery process.

---

## Template

```
### [DATE] — [Decision Title]

**Stage:** [N/7]  
**Decision maker:** [Who made this call]  
**Context:** [Why was this decision needed?]  
**Options considered:**  
1. [Option A] — [Pros/cons]
2. [Option B] — [Pros/cons]

**Decision:** [What we chose and why]  
**Impact:** [How this affects the roadmap / scope / timeline]  
**Reversible?** [Yes / No] — [If no, why?]  

**Commit/tag:** [git commit hash]
```

---

## Example Decisions

### [YYYY-MM-DD] — User Focus: Engineering Managers vs. ICs

**Stage:** 1/7 (Idea Brief)  
**Decision maker:** Product team  
**Context:** Initial idea assumed all engineers. Discovery showed pain is concentrated in EM role.  
**Options considered:**  
1. Broad—All engineers. Pros: Larger TAM. Cons: Diffuse messaging, harder to build.
2. Narrow—EMs only. Pros: Clear pain, focused MVP. Cons: Smaller initial market.

**Decision:** Focus on Engineering Managers for MVP. Expand to ICs later.  
**Impact:** Simplifies Idea Brief, focuses Discovery interviews on actual user.  
**Reversible?** Yes—Can expand user scope in Phase 2.  

**Commit/tag:** `abc1234` / `stage-1-user-focus`

---

### [YYYY-MM-DD] — Roadmap Sequencing: Manual API Integration vs. Pre-built

**Stage:** 5/7 (Product Roadmap)  
**Decision maker:** PM + Eng Lead  
**Context:** Can build Jira integration our way or use Zapier. Trade-off: custom vs. dependency.  
**Options considered:**  
1. Build custom Jira connector. Pros: Full control, no vendor dependency. Cons: 4w engineering time.
2. Use Zapier integration. Pros: 2w build. Cons: Dependency on Zapier, less control.

**Decision:** Custom Jira connector in Q1. Zapier as fallback if slipped.  
**Impact:** Adds 2w to Q1 timeline. Enables better UX for validation.  
**Reversible?** Yes—Can rip out and use Zapier, costs 1w.  

**Commit/tag:** `def5678` / `stage-5-jira-decision`

---

## Instructions for Copilot

When making significant decisions, ask Copilot:

```
Let's log this decision. We've chosen [X] because [Y]. 
Please add to decisions/DECIDING-LOG.md.
```

Copilot will format and append to this log.

---

**Git history is your audit trail.** Use `git log --oneline` to review decision history.
