import { FC } from 'react'

// style
import './style.scss'

// ui
import ButtonLink from '@/ui/ButtonLink'
import Container from '@/ui/Container'
import Grid from '@/ui/Grid'
import Picture from '@/ui/Picture'
import Section from '@/ui/Section'
import Subtitle from '@/ui/Subtitle'
import Title from '@/ui/Title'

// component
import Card from '@/views/Home/components/About/components/Card'

// data
import AboutInfoData from '@/data/about-info.json'

const index: FC = () => {
  return (
    <Section className={'about'} id={'about'}>
      <Subtitle>My Intro</Subtitle>
      <Title>About Me</Title>
      <Container className={''}>
        <Grid className={'about__container'}>
          <div className={'about__img-container'}>
            <Picture
              avif={'assets/img/profile/profile.avif'}
              webp={'assets/img/profile/profile.webp'}
              png={'assets/img/profile/profile.png'}
              jpeg={'assets/img/profile/profile.jpeg'}
              src={'assets/img/profile/profile.jpg'}
              className={'about__img'}
              alt={'about'}
            />
          </div>

          <div className="about__data">
            <div className="about__info">
              {AboutInfoData.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>

            <p className="about__description">
              I'm a software engineer passionate about building web
              applications, especially React.js with Next.js for the front-end
              and the back-end with Java with Spring or Node.js.
            </p>

            <ButtonLink href="#contact">Contact Me</ButtonLink>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}

export default index
