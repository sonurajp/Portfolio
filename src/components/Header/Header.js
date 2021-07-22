import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  A1,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        {/* <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        > */}
        <A1>
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </A1>
        {/* </a> */}
      </Link>
    </Div1>
    <Div2>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/sonurajp">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/sonu-dev/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/spaceman_tribe/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
