import React from 'react';
import { DiAws, DiDatabase, DiFirebase, DiPostgresql, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of Technologies from the data science industry from data analytics to machine learning
    </SectionText>
    <List>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Data Analytics</ListTitle>
          <ListParagraph>
            Experience with <br />
            SQL and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAws size="3rem" />
        <ListContainer>
          <ListTitle>Deep Learning</ListTitle>
          <ListParagraph>
            Experience with <br />
            NLP
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
