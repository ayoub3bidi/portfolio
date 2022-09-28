import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="https://mail.google.com">
            Mrayoubabidi@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>&copy; Ayoub Abidi | {new Date().getFullYear()}</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/ayoub3bidi" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/ayoub3bidi" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/ayoub3bidi" target="_blank">
            <AiOutlineTwitter size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
