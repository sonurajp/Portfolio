import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, HeroSectionTitle } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionText>Hi, my name is</SectionText>
      <HeroSectionTitle main center>
        Sonuraj P <br />I build things for the web.
      </HeroSectionTitle>
      <SectionText>
        I'm a full stack developer with a focus on front-end development.
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
