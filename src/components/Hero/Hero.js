import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I am Ayoub Abidi
        </SectionTitle>
        <SectionText>
          I am a Full-stack Developer & Co-organizer at <a href="https://www.githubtunisia.tn" target="_blank" rel="noopener noreferrer">GitHub's Tunisian Community</a>.
          <br/> <br/> Outside of programming, I enjoy books, manga, video games and movies.
        </SectionText>
        <a href="https://drive.google.com/file/d/1QU8c1-i7KyZF2Hqlb79ruyUNx3JoyoKM/view?usp=sharing" target="_blank">
        <Button onClick={props.handleClick}>See my Resume</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;