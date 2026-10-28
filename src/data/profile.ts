// All profile content lives here — edit this file to update the site.
// NOTE: projects below are illustrative sample case studies.

export type Category = "websites" | "automations" | "support" | "workflows" | "insights"

export interface Project {
  title: string
  category: Category
  client: string
  summary: string
  problem: string
  solution: string
  stack: string[]
  metrics: { label: string; value: string }[]
}

export const profile = {
  name: "Hassan Al-Drees",
  initials: "HA",
  title: "Solutions Architect Manager · AI Solutions",
  location: "Riyadh, Saudi Arabia",
  tagline: "I design and ship practical AI systems that save teams time, delight customers and turn company knowledge into action.",
  email: "", // add a public email to show the contact button
  linkedin: "", // e.g. https://www.linkedin.com/in/your-handle
  stats: [
    { value: "24+", label: "AI solutions delivered" },
    { value: "38k", label: "Hours automated / year" },
    { value: "12", label: "Industries served" },
    { value: "94%", label: "Avg. stakeholder CSAT" },
  ],
}

export const categories: { id: Category; label: string; description: string }[] = [
  { id: "websites", label: "AI Websites", description: "Smart, content-aware websites and portals with built-in assistants, search and personalization." },
  { id: "automations", label: "AI Automations", description: "Agents and pipelines that read documents, fill systems and trigger actions without manual work." },
  { id: "support", label: "Customer Support", description: "Bilingual chat and voice agents grounded in company knowledge, with smart human hand-off." },
  { id: "workflows", label: "Company Workflows", description: "End-to-end process redesign where AI handles intake, routing, drafting and approvals." },
  { id: "insights", label: "Data & Insights", description: "Natural-language analytics, forecasting and executive briefings generated from live data." },
]

export const projects: Project[] = [
  {
    title: "Proposal Studio",
    category: "websites",
    client: "Consulting firm",
    summary: "A web app that turns an RFP into a branded, bilingual proposal deck in minutes.",
    problem: "Bid teams spent 3–5 days assembling each proposal from scattered past documents.",
    solution: "RAG over 400+ past proposals, an outline generator that maps every RFP requirement, and one-click branded PPTX export.",
    stack: ["React", "Claude API", "Vector DB", "Netlify"],
    metrics: [{ label: "Drafting time", value: "-78%" }, { label: "Requirement coverage", value: "100%" }],
  },
  {
    title: "Smart Tourism Portal",
    category: "websites",
    client: "Destination authority",
    summary: "A visitor website with an AI trip planner that builds itineraries in Arabic and English.",
    problem: "Static pages couldn't answer the long tail of visitor questions or suggest personalized plans.",
    solution: "Conversational planner grounded in the official events and venues catalogue, with live availability links.",
    stack: ["Next.js", "LLM", "Maps API", "Headless CMS"],
    metrics: [{ label: "Session length", value: "+2.4x" }, { label: "Bookings referred", value: "+31%" }],
  },
  {
    title: "Invoice-to-ERP Agent",
    category: "automations",
    client: "Retail group",
    summary: "An agent that reads supplier invoices, validates them against POs and posts them to the ERP.",
    problem: "Finance keyed in ~6,000 invoices a month by hand, with frequent matching errors.",
    solution: "Document AI extraction, 3-way match rules, and an exception queue for anything below confidence threshold.",
    stack: ["Document AI", "Python", "n8n", "ERP API"],
    metrics: [{ label: "Touchless rate", value: "82%" }, { label: "Cycle time", value: "5d → 6h" }],
  },
  {
    title: "Vendor RFQ Autopilot",
    category: "automations",
    client: "Procurement team",
    summary: "Generates RFQs, emails shortlisted vendors and compares returned quotes automatically.",
    problem: "Each RFQ round took a week of emails, follow-ups and spreadsheet comparisons.",
    solution: "Agent drafts the RFQ from a spec, tracks replies in the inbox, extracts prices and builds a scored comparison.",
    stack: ["Claude API", "Gmail API", "Google Sheets", "Make"],
    metrics: [{ label: "Turnaround", value: "-65%" }, { label: "Vendors reached", value: "3x" }],
  },
  {
    title: "Bilingual Service Assistant",
    category: "support",
    client: "Government service center",
    summary: "A 24/7 Arabic/English assistant across web and WhatsApp for citizen inquiries.",
    problem: "Call center queues peaked at 40 minutes during service launches.",
    solution: "Assistant grounded in approved FAQs and procedures, with secure status lookups and live-agent escalation.",
    stack: ["LLM", "WhatsApp Business", "RAG", "CRM"],
    metrics: [{ label: "Containment", value: "71%" }, { label: "Wait time", value: "-88%" }],
  },
  {
    title: "Agent Copilot",
    category: "support",
    client: "Telecom operator",
    summary: "A sidebar for human agents that suggests replies, summarizes history and fills case notes.",
    problem: "Agents juggled five systems per ticket and wrote notes after every call.",
    solution: "Real-time transcript summarization, next-best-action suggestions and auto-filled wrap-up notes.",
    stack: ["Speech-to-text", "LLM", "Zendesk", "Webhooks"],
    metrics: [{ label: "Handle time", value: "-34%" }, { label: "First-contact resolution", value: "+18%" }],
  },
  {
    title: "Contract Review Workflow",
    category: "workflows",
    client: "Legal department",
    summary: "AI first-pass review that flags risky clauses against the company playbook before legal sign-off.",
    problem: "Every contract waited in a single queue for full manual review.",
    solution: "Clause extraction, playbook comparison with redline suggestions, and risk-based routing to the right reviewer.",
    stack: ["Claude API", "SharePoint", "Power Automate"],
    metrics: [{ label: "Review time", value: "-60%" }, { label: "Backlog", value: "Cleared in 3 wks" }],
  },
  {
    title: "Employee Onboarding Hub",
    category: "workflows",
    client: "Tech company",
    summary: "Orchestrates accounts, equipment, training and a personal onboarding buddy bot.",
    problem: "New hires waited days for access and asked HR the same questions repeatedly.",
    solution: "Workflow triggers on contract signature, provisions systems, and an HR-policy assistant answers questions.",
    stack: ["ClickUp", "Slack", "LLM", "Okta"],
    metrics: [{ label: "Day-1 readiness", value: "97%" }, { label: "HR tickets", value: "-52%" }],
  },
  {
    title: "Executive Briefing Bot",
    category: "insights",
    client: "Holding company",
    summary: "A daily briefing that turns KPIs, news and project updates into a two-minute executive read.",
    problem: "Leaders received a dozen dashboards and still asked analysts for summaries.",
    solution: "Scheduled agent queries the warehouse, detects anomalies and writes a narrative brief with drill-down links.",
    stack: ["BigQuery", "LLM", "Looker", "Email"],
    metrics: [{ label: "Analyst hours saved", value: "20 / wk" }, { label: "Open rate", value: "91%" }],
  },
  {
    title: "Traffic Digital Twin Assistant",
    category: "insights",
    client: "Smart city program",
    summary: "Ask-anything interface over a city traffic digital twin for operators and planners.",
    problem: "Operators needed GIS specialists to answer simple 'what-if' questions.",
    solution: "Natural-language queries translated to simulation runs and map layers, with plain-language explanations.",
    stack: ["Digital Twin", "LLM", "GIS", "Python"],
    metrics: [{ label: "Query time", value: "Hours → mins" }, { label: "Scenarios / week", value: "5x" }],
  },
]

export const process = [
  { step: "01", title: "Discover", text: "Map the process, data and pain points; pick use cases with clear ROI." },
  { step: "02", title: "Prototype", text: "Working demo on real data within two weeks to prove value early." },
  { step: "03", title: "Build", text: "Production-grade integration, security, evaluation and guardrails." },
  { step: "04", title: "Scale", text: "Training, change management, monitoring and continuous improvement." },
]

export const toolkit = [
  "Claude", "OpenAI", "Gemini", "LangChain", "RAG / Vector DBs", "n8n", "Make", "Power Automate",
  "Python", "React", "Next.js", "Netlify", "Google Workspace", "Microsoft 365", "ClickUp", "WhatsApp Business",
]
