import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { DiClojureAlt } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, ShowCase, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1 style={{ paddingBottom: "17px" }}>
        <a  style={{ display: 'flex', alignItems: 'center', color:"white"}}>
          <DiClojureAlt size="4rem" /> <ShowCase>Ayoub Abidi</ShowCase>
        </a>
    </Div1>
    <Div2 style={{ paddingTop: "5px" }}>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#articles">
          <NavLink>Articles</NavLink>
        </Link>
      </li>      
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ayoub3bidi" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ayoub3bidi" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/ayoub3bidi" target="_blank">
        <AiOutlineTwitter size="3rem"/>
      </SocialIcons>
    </Div3>
    </Container>
);

export default Header;
