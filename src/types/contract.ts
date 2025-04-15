import { LucideIcon } from 'lucide-react'

export type ContractList = {
  icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
  color: string
  href?: string
}
