import React from 'react';

// Import Components
import Container from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/menu';
import Anchor from 'grommet/components/Anchor';
import Title from 'grommet/components/Title';

export function Header() {
  return (
    <Container splash={false} size="small" float={false} fixed={true} colorIndex="neutral-4-t">
      <Title>AutoMotive</Title>
      <Box flex={true} justify="end" direction="row" responsive={false}>
        <Search inline={true} fill={false} size="medium" placeHolder="Search" dropAlign={{ right: 'right' }} />
        <Menu icon={<MenuIcon />} dropAlign={{ right: 'right' }} >
          <Anchor to="/" className="active">
            Home
          </Anchor>
          <Anchor className="active">
            Second
          </Anchor>
          <Anchor className="active">
            Third
          </Anchor>
        </Menu>
      </Box>
    </Container>
  );
}

export default Header;
