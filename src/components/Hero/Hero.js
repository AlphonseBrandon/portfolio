import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There! <br /> 
        Welcome to my personal portfolio.
      </SectionTitle>
      <SectionText>
        I am a distinguished data scientist with a track record of building intelligent systems that solve real-world problems. I have a passion for data science and machine learning and I am always looking for opportunities to learn and grow.
      </SectionText> 
      <Button onClick={() => window.location = 'https://google.com'}>Hire Me</Button> 
    </LeftSection>
  </Section>
);

export default Hero;