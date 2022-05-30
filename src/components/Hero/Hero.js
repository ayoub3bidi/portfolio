import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, my name is<br/>
          Ayoub Abidi
        </SectionTitle>
        <SectionText>
        I'm a software engineering student & a junior web developer.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
