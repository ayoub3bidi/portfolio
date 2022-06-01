import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
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
        I'm a software engineering graduate student & a co-organizer at GitHub's Tunisian Community, interested in web development & entrepreneurship.
        </SectionText>
        <a href="https://drive.google.com/file/d/1S1S4AdoBrYx0SeajSM6V5qLJD1616IDW/view?usp=sharing" target="_blank">
        <Button onClick={props.handleClick}>See my Resume</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
