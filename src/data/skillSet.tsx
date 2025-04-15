import { FaAws } from 'react-icons/fa'
import { VscAzure } from 'react-icons/vsc'
import { VscVscode } from 'react-icons/vsc'
import { FaDigitalOcean } from 'react-icons/fa'

export type Skill = {
  name: string
  icon?: string | React.FC<React.SVGProps<SVGSVGElement>> | React.ReactElement
}

export type SkillCategory = {
  title: string
  skills?: Skill[]
  subcategories?: SkillCategory[]
}

const skillsData: Record<string, SkillCategory> = {
  // Web Development Core
  frontendDevelopment: {
    title: 'Frontend Development',
    subcategories: [
      {
        title: 'Languages & Frameworks',
        skills: [
          { name: 'TypeScript', icon: 'typescript' },
          { name: 'JavaScript', icon: 'javascript' },
          { name: 'HTML5', icon: 'html5' },
          { name: 'CSS3', icon: 'css3' },
          { name: 'React', icon: 'react' },
          { name: 'Next.js', icon: 'nextdotjs' },
          { name: 'Vue.js', icon: 'vuedotjs' },
        ],
      },
      {
        title: 'Styling Libraries',
        skills: [{ name: 'Tailwind CSS', icon: 'tailwindcss' }],
      },
      {
        title: 'UI Libraries',
        skills: [
          { name: 'Material UI', icon: 'Mui' },
          { name: 'Shadcn UI', icon: 'Shadcnui' },
          { name: 'Bootstrap', icon: 'bootstrap' },
          { name: 'Antd', icon: 'Antdesign' },
        ],
      },
      {
        title: 'State Management',
        skills: [
          { name: 'Redux', icon: 'redux' },
          { name: 'Zustand', icon: 'zustand' },
        ],
      },
      {
        title: 'Query Libraries',
        skills: [{ name: 'Tan Query', icon: 'reactquery' }],
      },
    ],
  },
  toolsAndUtilities: {
    title: 'Tools & Utilities',
    subcategories: [
      {
        title: 'Version Control',
        skills: [{ name: 'Git', icon: 'git' }],
      },
      {
        title: 'Design Tools',
        skills: [{ name: 'Figma', icon: 'figma' }],
      },
      {
        title: 'API Development',
        skills: [
          { name: 'Postman', icon: 'postman' },
          { name: 'Swagger', icon: 'swagger' },
          { name: 'Insomnia', icon: 'insomnia' },
        ],
      },
      {
        title: 'IDEs & Editors',
        skills: [
          { name: 'VS Code', icon: <VscVscode /> },
          { name: 'WebStorm', icon: 'webstorm' },
          { name: 'IntelliJ IDEA', icon: 'intellijidea' },
          { name: 'PyCharm', icon: 'pycharm' },
          { name: 'Android Studio', icon: 'androidstudio' },
          { name: 'Vim', icon: 'vim' },
        ],
      },
    ],
  },
  backendDevelopment: {
    title: 'Backend Development',
    subcategories: [
      {
        title: 'Languages & Frameworks',
        skills: [
          { name: 'Node.js', icon: 'nodedotjs' },
          { name: 'Express.js', icon: 'express' },
          { name: 'Nest.js', icon: 'nestjs' },
          { name: 'Elysia.js', icon: 'elysia' },
          { name: 'TypeScript', icon: 'typescript' },
          { name: 'JavaScript', icon: 'javascript' },
        ],
      },
      {
        title: 'Testing Libraries',
        skills: [{ name: 'Jest', icon: 'jest' }],
      },
    ],
  },

  databases: {
    title: 'Databases',
    subcategories: [
      {
        title: 'NoSQL Databases',
        skills: [
          { name: 'MongoDB', icon: 'mongodb' },
          { name: 'Redis', icon: 'redis' },
          { name: 'Firebase', icon: 'firebase' },
        ],
      },
      {
        title: 'SQL Databases',
        skills: [
          { name: 'PostgreSQL', icon: 'postgresql' },
          { name: 'MySQL', icon: 'mysql' },
          { name: 'SQLite', icon: 'sqlite' },
        ],
      },
    ],
  },

  cloudServices: {
    title: 'Cloud Services',
    skills: [
      { name: 'Azure', icon: <VscAzure /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Digital Ocean', icon: <FaDigitalOcean /> },
    ],
  },
  containerization: {
    title: 'Containerization',
    skills: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
    ],
  },
  cicd: {
    title: 'CI/CD',
    skills: [
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Jenkins', icon: 'jenkins' },
    ],
  },
  infrastructureAsCode: {
    title: 'Infrastructure as Code',
    skills: [
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Ansible', icon: 'ansible' },
    ],
  },
}

export default skillsData
