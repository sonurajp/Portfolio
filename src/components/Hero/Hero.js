import React from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, HeroSectionTitle, SectionText } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionText>Hi, I'm</SectionText>
      <HeroSectionTitle main center>
        Sonuraj P <br />I build things for the web.
      </HeroSectionTitle>

      <SectionText>
        I'm a full stack developer with a focus on front-end development.
      </SectionText>
      {/* <Button>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
