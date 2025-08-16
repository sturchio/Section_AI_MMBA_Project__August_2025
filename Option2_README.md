# EventSlammer – Option 2 Comprehensive AI Project Proposal

## 1. Project Overview

EventSlammer is an AI-assisted ideation tool for creative teams in the live marketing and events industry. The app transforms abstract client briefs into well-justified, actionable event concepts. It addresses the common problem where client briefs are vague or incomplete, making it difficult for creative directors, writers, and designers to generate ideas that align with business goals.

## 2. Use Case & Workflow

**Primary users:** Creative directors, event producers, designers, and account managers at agencies serving Fortune 1000 clients.

**Workflow:**

1. A client-facing account manager uploads a brief or enters structured inputs (audience, goals, constraints).
2. EventSlammer uses an LLM to generate candidate event concepts.
3. Concepts are structured, scored, and compared to past events using vector search.
4. Users review outputs, iterate via prompts, and select top candidates for internal pitch decks.

This reduces time spent in the “blank page” phase and provides a defensible rationale for chosen ideas.

## 3. AI Features to be Implemented

- **Prompt Engineering** – guide LLM to produce on-brief, business-aligned ideas rather than generic outputs.
- **Structured Outputs** – responses shaped into JSON with fields like `title`, `audience_fit`, `budget_band`, `key_risks` for easy UI rendering.
- **RAG / Vector DB** – compare outputs with internal libraries of past client events and industry examples to boost novelty and alignment.
- **Evaluation** – automatic scoring against brief + human-in-the-loop thumbs up/down for iterative improvement.
- **Observability** – capture logs, latency, error rates, and token usage to ensure reliability and cost control.

## 4. Technical Approach

- **Frontend**: React + TailwindCSS (prototype scaffold complete)
- **Backend**: Node.js/Express API (sample route scaffolded)
- **Database**: Pinecone or equivalent vector DB for similarity search; MongoDB for metadata.
- **LLM API**: OpenAI GPT-4 or successor.
- **Deployment**: Containerized monorepo, deployable to Vercel/Render for frontend and Railway/Heroku for backend.

## 5. Example Prompts & Expected Outputs

**Prompt A (Ideation):**

> Generate 5 event concepts for **senior IT buyers** that achieve **brand awareness and lead generation** under a **$250k budget**. Return JSON array with: `title`, `one_liner`, `why_it_works`, `key_risks`, `est_budget_band`.

**Expected Output (excerpt):**

```json
[
  {
    "title": "Future-Proof Forum",
    "one_liner": "An interactive showcase where CIOs explore hands-on demos of next-gen solutions.",
    "why_it_works": "Directly aligns with IT buyers’ need for practical evaluation and creates strong brand association.",
    "key_risks": ["Logistics of live demos", "Audience size management"],
    "est_budget_band": "$200–225k"
  }
]
```

**Prompt B (Evaluation):**

> Score this concept against the brief. Return JSON with `relevance_score` (0–100), `risk_flags`, and 3 improvement tips.

**Expected Output:**

```json
{
  "relevance_score": 85,
  "risk_flags": ["Budget risk", "Venue availability"],
  "improvements": [
    "Simplify logistics by reducing number of demos",
    "Include hybrid streaming option",
    "Add measurable lead-gen mechanism"
  ]
}
```

## 6. Evaluation Strategy

- **On-brief Relevance** – average similarity score of concepts vs. client brief.
- **Novelty** – vector distance from historical idea library.
- **User Ratings** – thumbs up/down acceptance rate.
- **Efficiency** – time-to-first viable concept and iterations required.

Evaluation will combine offline golden-set checks (pre-tagged briefs and concepts) with online live feedback.

## 7. Observability Plan

- **Logs:** Capture request IDs, prompts, model outputs, latency, token counts, error codes.
- **Dashboards:** Track daily cost, average response latency, p95 latency, acceptance rates, error rate.
- **Alerts:** Trigger notifications for high error spikes, cost overruns, or prolonged response times.
- **Tools:** Simple logging in development (console + CSV); upgrade to hosted APM/monitoring (e.g., Datadog or OpenTelemetry) in production.

This ensures reliability, cost control, and visibility into system performance.

## 8. Link to Proposal

Repo: [EventSlammer Monorepo]([https://github.com/sturchio/Section_AI_MMBA_Project__August_2025/tree/main/Project%20Repo])

---

**Note:** This README is keyed to the Option 2 rubric requirements while the 'Project Repo' contains runnable scaffolding (frontend/backend) and planning docs.
