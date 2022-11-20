import { FC } from 'react';

// type
import type Skill from '@/views/Home/components/Skills/types/skill';

type Props = {
  skill: Skill;
};

// component
import GetIcon from '@/components/GetIcon';

const index: FC<Props> = (props) => {
  const { skill } = props;
  return (
    <>
      <div className="skills__data">
        <GetIcon icon={skill.skillIcon} />
        <div className="">
          <h3 className="skills__name">{skill.skillName}</h3>
          <span className="skills__level">{skill.skillLevel}</span>
        </div>
      </div>
    </>
  );
};

export default index;
