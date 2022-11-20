import { FC } from 'react';

// type
import Skill from '@/views/Home/components/Skills/types/skill';
import SkillCategory from '@/views/Home/components/Skills/types/skillCategory';

type Props = {
  skillsData: SkillCategory;
};

// component
import GetIcon from '@/components/GetIcon';
import SkillGroup from '@/views/Home/components/Skills/components/SkillGroup';

const index: FC<Props> = (props) => {
  const { skillsData } = props;
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">
          <GetIcon icon={skillsData?.categoryIcon} />
          {skillsData?.category}
        </h3>
        <div className="skills__box">
          {skillsData?.skillGroup?.map((skills: Skill[], index: number) => (
            <SkillGroup skills={skills} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
