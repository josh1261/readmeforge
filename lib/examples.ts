import type { ReadmeFormData } from "@/types/readme";

export type ReadmeExample = {
  id: string;
  label: string;
  data: ReadmeFormData;
};

export const readmeExamples: ReadmeExample[] = [
  {
    id: "ai-npu",
    label: "AI / NPU Project",
    data: {
      projectName: "PyTorch CNN FLOPs Analyzer",
      description:
        "A hardware-aware CNN analysis project that measures model parameters, FLOPs, model size, and inference latency using PyTorch.",
      targetRole: "AI Engineer, NPU Software Engineer, Semiconductor Data AI Engineer",
      techStack: "Python, PyTorch, NumPy, Matplotlib, ONNX Runtime",
      keyFeatures:
        "Train a simple CNN model on MNIST\nCalculate model parameters and FLOPs\nMeasure inference latency\nCompare model size and computational cost\nAnalyze bottlenecks from a hardware-aware perspective",
      installationCommand: "pip install -r requirements.txt",
      runCommand: "python train.py\npython analyze_flops.py",
      results:
        "Model Accuracy: 98.5%\nParameters: 1.2M\nEstimated FLOPs: 35M\nAverage Inference Latency: 2.1ms",
      whatILearned:
        "How CNN layers affect computational cost\nHow to estimate FLOPs and parameter count\nWhy inference latency matters in AI semiconductor systems\nHow model structure can create hardware bottlenecks",
      futureWork:
        "Add INT8 quantization benchmark\nExport the model to ONNX format\nCompare PyTorch and ONNX Runtime inference speed\nAdd CPU and GPU benchmark results\nTest lightweight CNN architectures for edge AI devices",
    },
  },
  {
    id: "web-app",
    label: "Web App Project",
    data: {
      projectName: "TaskFlow Dashboard",
      description:
        "A responsive productivity dashboard for tracking tasks, project status, and team priorities in one workspace.",
      targetRole: "Frontend Developer, Full Stack Developer",
      techStack: "Next.js, TypeScript, Tailwind CSS, React, Vercel",
      keyFeatures:
        "Create and update task cards\nFilter tasks by status and priority\nPreview project progress in dashboard widgets\nPersist draft data in local state\nResponsive layout for desktop and mobile",
      installationCommand: "npm install",
      runCommand: "npm run dev",
      results:
        "Reduced task review time by 35%\nImproved mobile usability with responsive layouts\nBuilt reusable UI components for future features",
      whatILearned:
        "How to structure reusable React components\nHow to manage form state with React hooks\nHow to design dashboard layouts for fast scanning\nHow to improve accessibility with semantic controls",
      futureWork:
        "Add user authentication\nConnect a database for persistent tasks\nAdd drag-and-drop task ordering\nAdd team collaboration features\nDeploy production analytics",
    },
  },
  {
    id: "data-analysis",
    label: "Data Analysis Project",
    data: {
      projectName: "Customer Churn Analysis",
      description:
        "A data analysis project that explores customer behavior, identifies churn risk factors, and visualizes actionable business insights.",
      targetRole: "Data Analyst, Business Analyst, Data Scientist",
      techStack: "Python, Pandas, NumPy, Matplotlib, Seaborn, Jupyter Notebook",
      keyFeatures:
        "Clean missing and inconsistent customer records\nAnalyze churn patterns by contract type and tenure\nVisualize feature distributions and correlations\nCreate summary charts for business stakeholders\nDocument insights in a reproducible notebook",
      installationCommand: "pip install -r requirements.txt",
      runCommand: "jupyter notebook\npython analysis.py",
      results:
        "Identified month-to-month contracts as a key churn risk\nFound higher churn among short-tenure customers\nBuilt visual summaries for retention strategy planning",
      whatILearned:
        "How to clean and validate tabular datasets\nHow to translate charts into business insights\nHow to compare categorical and numerical features\nHow to communicate analysis results clearly",
      futureWork:
        "Add predictive churn modeling\nCreate an interactive dashboard\nValidate insights with a larger dataset\nAdd automated data quality checks\nExport findings as a business report",
    },
  },
];

export const defaultReadmeFormData = readmeExamples[0].data;
