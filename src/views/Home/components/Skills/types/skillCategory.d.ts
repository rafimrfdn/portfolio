import type Skill from '@/views/Home/components/Skills/types/skill';

type SkillCategory = {
  category: string;
  categoryIcon: string;
  skillGroup: Skill[][];
};

export default SkillCategory;
