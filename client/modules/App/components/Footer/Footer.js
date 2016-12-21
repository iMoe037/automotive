import React from 'react';
import Header from 'grommet/components/Footer';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Globe from 'grommet/components/icons/base/Globe';
import Github from 'grommet/components/icons/base/SocialGithub';
import Linkedin from 'grommet/components/icons/base/SocialLinkedin';
import Mail from 'grommet/components/icons/base/Mail';

export function Footer() {
  return (
    <Header justify="between" colorIndex="neutral-1-a" size="medium">
      <Paragraph margin="none">
        &copy; AutoMotive - Immad Mohamed - 2016
      </Paragraph>
      <Menu direction="row" size="small" dropAlign={{ right: 'right' }} responsive={false}>
        <Anchor icon={<Globe />} href="https://www.immadmohamed.com" target="_blank" />
        <Anchor icon={<Github />} href="https://github.com/iMoe037/automotive" target="_blank" />
        <Anchor icon={<Linkedin />} href="https://www.linkedin.com/in/immadmohamed" target="_blank" />
        <Anchor icon={<Mail />} href="mailto:i.mohamed037@gmail.com?Subject=AutoMotive%20is%20cool!" />
      </Menu>
    </Header>
  );
}

export default Footer;
