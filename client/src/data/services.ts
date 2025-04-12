import {
  ServerIcon,
  GitBranchIcon,
  UsersIcon,
  KanbanSquareIcon
} from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: string; // Use string instead of JSX.Element to avoid parsing issues
  iconClass?: string;
}

// Helper function to render icons when needed
export const getServiceIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'ServerIcon': return ServerIcon;
    case 'GitBranchIcon': return GitBranchIcon;
    case 'UsersIcon': return UsersIcon;
    case 'KanbanSquareIcon': return KanbanSquareIcon;
    default: return ServerIcon;
  }
};

export const services: Service[] = [
  {
    title: "Infrastructure Automation",
    description: "Building cloud environments with infrastructure as code for reliability and scalability.",
    icon: "ServerIcon",
    iconClass: "h-6 w-6"
  },
  {
    title: "CI/CD Pipeline Design",
    description: "Creating efficient delivery pipelines for faster, more reliable software releases.",
    icon: "GitBranchIcon",
    iconClass: "h-6 w-6"
  },
  {
    title: "DevOps Consulting",
    description: "Helping teams implement DevOps practices and improve their development workflows.",
    icon: "UsersIcon",
    iconClass: "h-6 w-6"
  },
  {
    title: "Container Orchestration",
    description: "Setting up and managing Kubernetes clusters for running containerized applications.",
    icon: "KanbanSquareIcon",
    iconClass: "h-6 w-6"
  }
];
