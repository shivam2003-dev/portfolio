import {
  FaDocker,
  FaCubes,
  FaAws,
  FaCodeBranch,
  FaCogs,
  FaJenkins,
  FaChartLine,
  FaGitAlt,
  FaLinux,
  FaPython,
  FaTerminal
} from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';

export interface Skill {
  name: string;
  category: string;
  icon: string; // Use string instead of JSX.Element to avoid parsing issues
}

// Helper function to render icons when needed
export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'FaDocker': return FaDocker;
    case 'SiKubernetes': return SiKubernetes;
    case 'FaCubes': return FaCubes;
    case 'FaAws': return FaAws;
    case 'FaCodeBranch': return FaCodeBranch;
    case 'FaCogs': return FaCogs;
    case 'FaJenkins': return FaJenkins;
    case 'FaChartLine': return FaChartLine;
    case 'FaGitAlt': return FaGitAlt;
    case 'FaLinux': return FaLinux;
    case 'FaPython': return FaPython;
    case 'FaTerminal': return FaTerminal;
    default: return FaDocker;
  }
};

export const skills: Skill[] = [
  {
    name: 'Docker',
    category: 'Container',
    icon: 'FaDocker'
  },
  {
    name: 'Kubernetes',
    category: 'Orchestration',
    icon: 'SiKubernetes'
  },
  {
    name: 'Terraform',
    category: 'IaC',
    icon: 'FaCubes'
  },
  {
    name: 'AWS',
    category: 'Cloud',
    icon: 'FaAws'
  },
  {
    name: 'CI/CD',
    category: 'Pipeline',
    icon: 'FaCodeBranch'
  },
  {
    name: 'Ansible',
    category: 'Configuration',
    icon: 'FaCogs'
  },
  {
    name: 'Jenkins',
    category: 'Automation',
    icon: 'FaJenkins'
  },
  {
    name: 'Prometheus',
    category: 'Monitoring',
    icon: 'FaChartLine'
  },
  {
    name: 'Git',
    category: 'Version Control',
    icon: 'FaGitAlt'
  },
  {
    name: 'Linux',
    category: 'OS',
    icon: 'FaLinux'
  },
  {
    name: 'Python',
    category: 'Scripting',
    icon: 'FaPython'
  },
  {
    name: 'Bash',
    category: 'Scripting',
    icon: 'FaTerminal'
  }
];
