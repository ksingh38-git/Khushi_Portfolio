
export const portfolioData = {
  hero: {
    name: "Khushi Singh",
    title: "Data Engineer & Analytics Professional",
    subtitle: "I build reliable data models, pipelines, and metrics that power analytics and business decisions.",
    location: "Buffalo, NY",
    email: "ksingh38@buffalo.edu",
    linkedin: "https://linkedin.com/in/khushisingh03",
    github: "https://github.com/ksingh38-git",
    resumeLink: "/Khushi-Singh-Resume.pdf",
    metrics: [
      { label: "Daily Runtime Reduced", value: "6h → 25m" },
      { label: "Dashboards Validated", value: "200+" },
      { label: "Datasets Handled", value: "1M+" },
      { label: "P1 Issues Turnaround", value: "< 24h" }
    ]
  },
  about: {
    description: "Graduate student (M.S. Computer Science & Engineering, University at Buffalo ’25) with 3+ years across Deloitte (Oracle/Analytics), KPMG, and an AI internship. I’ve delivered SQL/PLSQL data models, validated large dashboard migrations to Incorta, and built a lightweight data app (Facebook Graph API → Azure Blob → Streamlit). My focus: clean schemas, trustworthy metrics, and simple pipelines that teams can operate."
  },
  skills: {
    categories: [
      {
        name: "Databases & SQL",
        skills: ["SQL", "PL/SQL", "Oracle", "BigQuery", "Data Modeling", "Dimensional Modeling"]
      },
      {
        name: "Data Engineering",
        skills: ["ETL / Pipelines", "Data Warehousing", "Azure Blob", "Azure Functions", "Incorta (migration/testing)", "Facebook Graph API"]
      },
      {
        name: "Analytics & Viz",
        skills: ["Power BI", "Data Quality/Testing", "Pandas", "Python", "NumPy"]
      },
      {
        name: "Tools & Ops",
        skills: ["Git", "Confluence", "OAuth2", "Airflow", "AWS"]
      }
    ]
  },
  experience: [
    {
      company: "Research Foundation for SUNY",
      role: "Research Assistant",
      period: "Oct 2025 – Dec 2025",
      pipeline: [
        { stage: "Ingest", items: ["Performed data loading and statistical data analysis."] },
        { stage: "Model", items: ["Applied statistical methods to analyze research datasets."] }
      ]
    },
    {
      company: "Minedco",
      role: "AI Software Engineer Intern",
      period: "May 2025 – Aug 2025",
      pipeline: [
        { stage: "Ingest", items: ["Supported data flow from Facebook Graph API; collected user posts and media.", "Stored raw data in Azure Blob Storage for processing."] },
        { stage: "Model", items: ["Contributed to prompt design for Azure Functions to process stored data.", "Refined prompt logic for contextually relevant outputs."] },
        { stage: "Validate", items: ["Assisted with testing and iteration of the end-to-end flow (Ingest → AI Output).", "Improved reliability and user experience."] },
        { stage: "Serve", items: ["Built an internal AI-powered 'Memories' tool transforming data into scrapbooks."] }
      ]
    },
    {
      company: "University at Buffalo",
      role: "Computer Science Grader (CSE 574)",
      period: "Jan 2025 – May 2025",
      pipeline: [
        { stage: "Serve", items: ["Graded students for Introduction to Machine Learning (CSE 574)."] }
      ]
    },
    {
      company: "Deloitte",
      role: "Analyst",
      period: "Jun 2024 – Aug 2024",
      pipeline: [
        { stage: "Ingest", items: ["Built and optimized SQL-based ETL workflows and data transformations."] },
        { stage: "Optimize", items: ["Reduced batch processing time from ~6 hours to ~25 minutes via SQL optimization.", "Redesigned workflows for performance."] },
        { stage: "Model", items: ["Maintained analytical views in BigQuery for downstream reporting.", "Contributed to on-prem to Incorta cloud migration."] },
        { stage: "Validate", items: ["Validated 200+ dashboards and KPIs for accuracy post-migration.", "Resolved production data issues (performance, accuracy) using Jira."] },
        { stage: "Serve", items: ["Supported enterprise analytics for multiple client teams.", "Mentored junior analysts on testing and validation best practices."] }
      ]
    },
    {
      company: "Deloitte",
      role: "Associate Analyst",
      period: "May 2021 – May 2024",
      pipeline: [
        { stage: "Serve", items: ["Designed and developed 15 SQL/BigQuery reports with advanced workflows.", "Built 5+ reports from scratch, automating daily/month-end activities."] },
        { stage: "Optimize", items: ["Refined performance of 12+ major reports, achieving 25% reduction in processing time.", "Improved operational efficiency by reducing manual tasks."] },
        { stage: "Model", items: ["Customized data workflows for 2 new Business Units.", "Modified Payment Adjustment Report to ensure precise financial tracking."] },
        { stage: "Validate", items: ["Completed 25+ client requirements/defects independently using PL/SQL.", "Developed 35+ FUT/TUT documents and 6+ DDDs."] }
      ]
    },
    {
      company: "KPMG Global Services",
      role: "Analyst",
      period: "Jan 2021 – Apr 2021",
      pipeline: [
        { stage: "Optimize", items: ["Automated headcount trackers and password-expiry reminders.", "Streamlined Joiner-Mover-Leaver (JML) processes."] },
        { stage: "Serve", items: ["Managed onboarding/offboarding and cost center updates for US/UK projects.", "Navigated global workforce challenges."] },
        { stage: "Validate", items: ["Enforced adherence to HR/Finance data protection regulations.", "Mitigated compliance risks."] }
      ]
    }
  ],

  projects: [
    {
      title: "Airline Delay Prediction",
      description: "Analyzed 1M+ flights; engineered features and tuned models to reach 82% SVM accuracy.",
      stack: ["Python", "Pandas", "SVM", "Logistic Regression", "K-means"],
      repo: "ksingh38-git/Flight_delay_analysis",
      stats: { accuracy: "82%", rows: "1M+" },
      deepDive: [
        "Cleaned and preprocessed a dataset of over 1 million flights to identify delay patterns.",
        "Engineered features such as departure time buckets and seasonal trends.",
        "Tuned SVM hyperparameters to achieve optimal balance between precision and recall."
      ]
    },
    {
      title: "Explorer Transportation Analytics (NYC Collisions)",
      description: "Processed 1M+ NYC crash records; built geospatial heatmaps and stats to surface high-risk corridors.",
      stack: ["Pandas", "Folium", "Python"],
      repo: "ksingh38-git/Explorer-Transportation-Data-Science-Project",
      stats: { rows: "1M+", type: "Geospatial" },
      deepDive: [
        "Ingested 1M+ collision records from NYC Open Data.",
        "Created interactive Folium maps to visualize high-risk intersections.",
        "Performed statistical analysis to correlate weather conditions with accident frequency."
      ]
    },
    {
      title: "Netflix Data Analysis",
      description: "Cleaned/normalized 100K+ titles; modeled entities and mined catalog trends (genres, release cadence, composition).",
      stack: ["SQL", "Python"],
      repo: "ksingh38-git/Netflix-Extraction-and-Analysis",
      stats: { titles: "100K+", insights: "Genre Trends" },
      deepDive: [
        "Normalized a denormalized dataset into a star schema for efficient querying.",
        "Analyzed content distribution across countries and years.",
        "Identified key growth trends in original content production."
      ]
    },
    {
      title: "Weather Research Analysis",
      description: "Statistical analysis of weather patterns correlating with temporal features for improved prediction models.",
      stack: ["Python", "Research", "Statistics"],
      repo: "", // No repo specified, can leave empty or placeholder
      stats: { accuracy: "85%", type: "Research" },
      deepDive: [
        "Collected and harmonized multi-source weather data.",
        "Performed correlation analysis between humidity, temperature, and target variables.",
        "Demonstrated 5% accuracy lift by engineering new temporal-weather interaction features."
      ]
    }
  ],

  education: [
    {
      degree: "M.S., Computer Science & Engineering",
      schoool: "University at Buffalo",
      year: "Dec 2025"
    },
    {
      degree: "B.Sc., Information Technology",
      schoool: "St. Xavier’s College, Ranchi",
      year: ""
    }
  ],
  achievements: [
    "Multiple Deloitte awards: sprint delivery, Buddy mentoring, and project impact (Equifax & Broadcom).",
    "Women in Science & Engineering (WISE) Outreach — STEM mentorship and events.",
    "Grader, Introduction to Machine Learning (Spring 2025), University at Buffalo."
  ],
  certifications: [
    "Oracle Database SQL (1Z0-071)",
    "Incorta 6 Essentials for Business Analysts",
    "Incorta Dashboard Consumer Course"
  ]
};
