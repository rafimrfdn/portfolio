// type
import type Link from '@/views/Home/components/Work/types/link'
import type Tag from '@/views/Home/components/Work/types/tag'

type Portfolio = {
  headline: string
  direction: string
  tags: Tag[]
  links: Link[]
  src: string
  type: string
}

export default Portfolio
