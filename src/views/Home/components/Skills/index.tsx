import { FC } from 'react';

// type
import type SkillCategory from '@/views/Home/components/Skills/types/skillCategory';

// style
import './style.scss';

// ui
import Container from '@/ui/Container';
import Grid from '@/ui/Grid';
import Section from '@/ui/Section';
import Subtitle from '@/ui/Subtitle';
import Title from '@/ui/Title';

// components
import Card from '@/views/Home/components/Skills/components/Card';

// data
import skillsData from '@/views/Home/components/Skills/data/skills.json';

const index: FC = () => {
  return (
    <Section className={'skills'} id={'skills'}>
      <Subtitle>My abilities</Subtitle>
      <Title>My Skills</Title>
      <Container>
        <Grid className={'skills__container'}>
          {skillsData.map((skillsData: SkillCategory, index: number) => (
            <Card skillsData={skillsData} key={index} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default index;
