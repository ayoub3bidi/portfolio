import React from 'react';
import { DiFirebase, DiReact, DiVisualstudio } from 'react-icons/di';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Flutter<br/>
            React.js<br/>
            Vue.js <br/>
            Bootstrap <br/>
            Tailwind CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Firebase <br/>
            Express.js <br/>
            Mongo DB <br/>
            PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiVisualstudio size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>IDE</ListTitle>
          <ListParagraph>
            Visual Studio Code <br/>
            WSL2 <br/>
            Yarn
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
