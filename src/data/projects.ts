import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    name: 'Screetner (Street Scanner) | Senior Project',
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
    name: 'ENG CMU Scholarship Website',
    description: [
      'As a project manager, led a team of 5 developers to complete this system within 1 year',
      'Developed a website to streamline the scholarship application process for the Faculty of Engineering, Chiang Mai University',
      'Designed and implemented a comprehensive Scholarship Management System consisting of two main websites and a backend API service.',
      'Total users for each year around 500+ students and 50+ staff members',
    ],
    links: {},
    technologies: ['React', 'NextJS', 'MySQL', 'On-Premise Server', 'Docker'],
    status: 'Completed',
  },
  {
    name: 'Functional Programming OCR Tools',
    description: [
      'Developing an OCR tool that integrates functional programming principles into imperative languages',
      'Applying Higher-Order Functions, Currying, and Monads to enhance code readability and maintainability',
      'Backend implemented in Python using PyMonad and Tesseract-OCR for efficient text extraction',
      'Frontend built with Next.js, utilizing monadic concepts for streamlined side-effect management and error handling',
      'Both backend and frontend incorporate different aspects of functional programming to ensure consistency and modularity',
    ],
    links: {
      github: 'https://github.com/AuJUngZ/functional-OCR',
    },
    technologies: ['Haskell', 'Python', 'Next.js'],
    status: 'In Progress',
  },
  {
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
