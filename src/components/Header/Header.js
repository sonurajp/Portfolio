import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { DiCssdeck } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { RiCodepenFill } from "react-icons/ri";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  A1,
  Hr,
  A2,
  Hr2,
  Div4,
} from "./HeaderStyles";
const Header = () => (
  <>
    <Container>
      <Div1>
        <Link href="/">
          <A1>
            <AiFillHtml5
              style={{ position: "absolute", left: "1.5%" }}
              className="headerIcon"
              size="4rem"
            />
          </A1>
        </Link>
      </Div1>
      <Div4>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </Div4>
      <Hr2 />

      <SocialIcons className="gitIcon" href="https://github.com/sonurajp">
        <VscGithubAlt size="3rem" />
      </SocialIcons>
      <SocialIcons
        className="linkedInIcon"
        href="https://www.linkedin.com/in/sonu-dev/"
      >
        <FaLinkedinIn size="3rem" />
      </SocialIcons>

      <SocialIcons
        className="codePenIcon"
        href="https://codepen.io/sonurajp-the-sasster"
      >
        <RiCodepenFill size="3rem" />
      </SocialIcons>
    </Container>

    <Hr />

    <A2>
      <SiGmail
        style={{
          transform: "rotate(90deg)",
          marginBottom: "10px",
        }}
      />
      sonurajp49@gmail.com
    </A2>
  </>
);

export default Header;
