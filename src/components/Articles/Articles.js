import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { articles } from '../../constants/constants';



const Articles = () => (
  <Section nopadding id="articles">
    
    <SectionTitle main>Articles</SectionTitle>
    <GridContainer>
      {articles.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title> {title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {/* <ExternalLinks href={visit}>Code</ExternalLinks> */}
            <ExternalLinks href={source}>Read Article</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <SectionDivider />
  </Section>
);

export default Articles;