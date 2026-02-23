
export interface StoryChapter {
    id: string;
    title: string;
    subtitle: string;
    metrics: { label: string; value: string }[];
    text: string[];
    vizType: "bar-shrink" | "grid-reveal" | "toggle-cards" | "weather-lab" | "mobile-timeline";
    color: string;
}

export const storyChapters: StoryChapter[] = [
    {
        id: "deloitte-opt",
        title: "The 6-Hour Job",
        subtitle: "Optimization at Deloitte",
        metrics: [
            { label: "Original Runtime", value: "6h" },
            { label: "Optimized", value: "25m" },
            { label: "Efficiency", value: "14x" },
        ],
        text: [
            "Legacy refresh jobs were choking the system.",
            "I identified bottlenecks in CTEs and predicate pushdowns.",
            "Re-engineered the pipeline using BigQuery materialized views and valid partitioning.",
            "Result: Data availability improved from 'Next Day' to 'On Demand'."
        ],
        vizType: "bar-shrink",
        color: "var(--neon-blue)"
    },
    {
        id: "incorta-dashboard",
        title: "200 Dashboards in the Dark",
        subtitle: "Cloud Migration at Deloitte",
        metrics: [
            { label: "Dashboards", value: "200+" },
            { label: "Accuracy", value: "100%" },
        ],
        text: [
            "Migrating 50+ warehouse tables to Incorta.",
            "The challenge: ensuring pixel-perfect parity between On-Prem and Cloud.",
            "I built a reconciliation framework to validate KPIs automatically.",
            "Zero reporting downtime during the transition."
        ],
        vizType: "grid-reveal",
        color: "var(--neon-purple)"
    },
    {
        id: "projects-ml",
        title: "Flying Delays & Netflix Nights",
        subtitle: "Predictive Modeling & Analytics",
        metrics: [
            { label: "Airline Accuracy", value: "82%" },
            { label: "Netflix Titles", value: "100K+" },
        ],
        text: [
            "Airline Delays: Trained SVMs on 1M+ flight records. Feature engineering proved more valuable than model complexity.",
            "Netflix Analysis: Mined catalog trends to understand content strategy across regions.",
            "I focus on clean features and interpretable baselines."
        ],
        vizType: "toggle-cards",
        color: "var(--accent)"
    },
    {
        id: "weather-lab",
        title: "The Weather Lab",
        subtitle: "Research Assistantship",
        metrics: [
            { label: "Accuracy Lift", value: "+5%" },
            { label: "Data Sources", value: "Multi" },
        ],
        text: [
            "Does weather affect the target variable? Hypothesized yes.",
            "Collected and harmonized multi-source meteorological data.",
            "engineered temporal-weather interaction features.",
            "The model proved the hypothesis: Weather context matters."
        ],
        vizType: "weather-lab",
        color: "var(--neon-green)"
    },
    {
        id: "ai-memories",
        title: "Memories App",
        subtitle: "AI Engineering Intern at Minedco",
        metrics: [
            { label: "Role", value: "Full Stack AI" },
            { label: "Tech", value: "Azure Functions" },
        ],
        text: [
            "Built an internal AI tool to turn Facebook dumps into curated scrapbooks.",
            "Pipeline: Graph API -> Blob Storage -> Azure Functions (LLM).",
            "Refined prompt logic to ensure contextually relevant, heartwarming outputs."
        ],
        vizType: "mobile-timeline",
        color: "#fff"
    }
];
