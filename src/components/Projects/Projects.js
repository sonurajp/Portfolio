import React from "react";
import { CgWebsite } from "react-icons/cg";
import { VscGithubAlt } from "react-icons/vsc";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  HeaderStack,
  CardBody,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ title, description, image, tags, source, visit, id }) => (
          <BlogCard key={id}>
            {/* <Img src={image} alt={title} /> */}
            <CardBody>
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>
                  <HeaderStack title>Stack</HeaderStack>
                </TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList href={visit}>
                <ExternalLinks href={visit}>
                  <VscGithubAlt size="2rem" />
                </ExternalLinks>
                <ExternalLinks href={source}>
                  <CgWebsite size="2rem" />
                </ExternalLinks>
              </UtilityList>
            </CardBody>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
