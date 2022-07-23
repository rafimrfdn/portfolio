import { FC } from 'react'

// type
import type SkillInterface from '@/views/Home/components/Skills/types/skill'

type Props = {
  skills: SkillInterface[]
}

// component
import Skill from '@/views/Home/components/Skills/components/Skill'

const index: FC<Props> = (props) => {
  const { skills } = props
  return (
    <>
      <div className="skills__group">
        {skills.map((skill: SkillInterface, index: number) => (
          <Skill skill={skill} key={index} />
        ))}
      </div>
    </>
  )
}

export default index
