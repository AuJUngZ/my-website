import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 1,
    name: 'Screetner (Street Scanner)',
    description: [
      'Designed and developed an end-to-end system for scanning local government assets as a senior project',
      'Created a custom mobile application to capture asset data via video while driving',
      'Developed a video analysis pipeline using YOLOv8 and OpenCV, automating object detection with 64% accuracy',
      'Deployed an auto-scaling processing unit on Azure to optimize costs by dynamically adjusting resources',
      'Visualized processed data on a web application to enhance asset management and maintenance efficiency',
    ],
    links: {
      github: 'https://github.com/screetner',
      youtube: 'https://youtube.com/screetner-demo',
    },
    technologies: [
      'Flutter',
      'YOLOv8',
      'OpenCV',
      'Next.js',
      'Elysia',
      'PostgreSQL',
      'Mongo DB',
      'Docker',
      'Tusd (resumable file upload protocol)',
      'Azure Logic Apps',
      'Azure Storage Account',
      'Aure Container Instances',
      'Azure Container Registry',
    ],
    status: 'Completed',
  },
  {
    id: 2,
    name: 'FacilitiesOps',
    description: [
      'Automated monitoring setup with ELK Stack, Prometheus, and Grafana, reducing manual configuration time',
      'Created a streamlined setup process that enables one-shell-command execution for seamless deployment with pre-configured default Helm values',
      'Adapted and standardized Helm charts to align with project-specific requirements, ensuring consistent and reliable deployments',
    ],
    links: {
      github: 'https://github.com/AuJUngZ/facilities-k8s-cluster',
    },
    technologies: ['ELK Stack', 'Prometheus', 'Grafana', 'Helm', 'Kubernetes'],
    status: 'Completed',
  },
  {
    id: 3,
    name: 'BOTMAPS',
    description: [
      'Developed a web application to visualize the floor plan of the Computer Engineering Department at Chiang Mai University',
      'Simplified access to information by replacing TeamUp’s complex interface with an intuitive floor plan visualization',
      'Integrated features to display room usage and course information, enhancing user experience and accessibility',
    ],
    links: {
      github: 'https://github.com/SE-Project-BOTMAPS',
    },
    technologies: [
      'Vite React',
      'TypeScript',
      'Tailwind CSS',
      'GoFiber',
      'MySQL',
    ],
    status: 'Completed',
  },
]
