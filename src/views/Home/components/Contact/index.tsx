import { FC } from 'react';

// type
import type ContactType from '@/views/Home/components/Contact/types/contact';

type Props = {
  serviceId: string;
  templateId: string;
  publicKey: string;
};

// style
import './style.scss';

// form
import Contact from '@/form/Contact';

// ui
import Container from '@/ui/Container';
import Grid from '@/ui/Grid';
import Section from '@/ui/Section';
import Subtitle from '@/ui/Subtitle';
import Title from '@/ui/Title';

// component
import Card from '@/views/Home/components/Contact/components/Card';

// data
import contactData from '@/views/Home/components/Contact/data/contact.json';

const index: FC<Props> = (props) => {
  const { serviceId, templateId, publicKey } = props;
  return (
    <>
      <Section className={'contact'} id={'contact'}>
        <Subtitle>Get in touch</Subtitle>
        <Title>Contact Me</Title>

        <Container>
          <Grid className={'contact__container'}>
            <div className="contact__content">
              <h3 className="contact__title">Talk to me</h3>
              <div className="contact__info">
                {contactData.map((contact: ContactType, index: number) => (
                  <Card
                    key={index}
                    name={contact.name}
                    value={contact.value}
                    icon={contact.icon}
                    title={contact.title}
                    url={contact.url}
                  />
                ))}
              </div>
            </div>
            <div className="contact__content">
              <h3 className="contact__title">Write me your project</h3>
              <Contact
                serviceId={serviceId}
                templateId={templateId}
                publicKey={publicKey}
              />
            </div>
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default index;
