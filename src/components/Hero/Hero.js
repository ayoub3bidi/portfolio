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
        I'm a software engineering graduate student & a co-organizer at <a href="https://www.githubtunisia.tn" target="_blank" rel="noopener noreferrer">GitHub's Tunisian Community</a>, interested in web development & entrepreneurship.
        <br/>You can follow me on <a href="https://dev.to/ayoub3bidi" target="_blank" rel="noopener noreferrer">DEV</a> where I write about what I have learned so far.
        <br/> Outside of programming, I enjoy books, manga, video games and movies.
        </SectionText>
        <a href="https://drive.google.com/file/d/1Dwr5zC5JmtNLZqeLz9eg6oV2B47OBEfa/view?usp=sharing" target="_blank">
        <Button onClick={props.handleClick}>See my Resume</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
