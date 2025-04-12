export interface Project {
  title: string;
  description: string;
  tags: string[];
  sourceLink: string;
}

export const featuredProjects: Project[] = [
  {
    title: "Kubernetes Deployment Framework",
    description: "A framework for standardizing Kubernetes deployments across multiple environments with built-in security controls.",
    tags: ["Kubernetes", "Helm", "GitOps", "Security"],
    sourceLink: "https://github.com/shivam/k8s-deployment-framework"
  },
  {
    title: "Infrastructure as Code Templates",
    description: "Collection of reusable Terraform modules for quick deployment of cloud infrastructure following best practices.",
    tags: ["Terraform", "AWS", "IaC", "Modules"],
    sourceLink: "https://github.com/shivam/terraform-templates"
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "A set of Jenkins pipelines and GitHub Actions workflows to automate testing and deployment processes.",
    tags: ["Jenkins", "GitHub Actions", "CI/CD", "Automation"],
    sourceLink: "https://github.com/shivam/cicd-pipelines"
  },
  {
    title: "Monitoring Stack",
    description: "Comprehensive monitoring solution with Prometheus, Grafana, and alerting for infrastructure and applications.",
    tags: ["Prometheus", "Grafana", "Monitoring", "Alerting"],
    sourceLink: "https://github.com/shivam/monitoring-stack"
  }
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    title: "AWS Security Automation",
    description: "Tools for automatically scanning and remediating security issues in AWS environments.",
    tags: ["AWS", "Security", "Automation", "Python"],
    sourceLink: "https://github.com/shivam/aws-security-automation"
  },
  {
    title: "Docker Composition Library",
    description: "Pre-configured Docker compositions for common development environments and services.",
    tags: ["Docker", "Docker Compose", "Development"],
    sourceLink: "https://github.com/shivam/docker-compositions"
  },
  {
    title: "GitOps Workflow Templates",
    description: "Templates for implementing GitOps workflows using Flux and ArgoCD.",
    tags: ["GitOps", "Kubernetes", "Flux", "ArgoCD"],
    sourceLink: "https://github.com/shivam/gitops-templates"
  },
  {
    title: "Cloud Cost Optimization",
    description: "Scripts and tools for identifying and optimizing cloud resource costs.",
    tags: ["AWS", "Cost", "Optimization", "Terraform"],
    sourceLink: "https://github.com/shivam/cloud-cost-optimization"
  }
];
