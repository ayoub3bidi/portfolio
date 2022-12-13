import React from 'react';
import { articles } from '../../constants/constants';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents';
import { ArticleLink } from './TimeLineStyles';

const Timeline = () => {

  return (
    <Section id='articles'>
      <SectionDivider />
      <SectionTitle><br />Articles</SectionTitle>
      <SectionText>
        <div>
          {
            articles.map((article) => (
              <div key={article.id}>
                <ArticleLink href={article.link} target="_blank" rel="noopener noreferrer">- {article.title}</ArticleLink>
              </div>
            ))
          }     
        </div>
      </SectionText>
    </Section>
  );
};

export default Timeline;
