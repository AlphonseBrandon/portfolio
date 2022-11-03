import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome! <br /> 
        This is my personal portfolio.
      </SectionTitle>
      <SectionText>
        My name is Alphonse Brandon, I help companies use data to build inteligent systems that solve bussiness problems and improve customer experience.
      </SectionText> 
      <Button onClick={() => window.location = 'mailto:alphonse.brand@gmail.com'}>Hire Me</Button> 
    </LeftSection>
  </Section>
);

export default Hero;