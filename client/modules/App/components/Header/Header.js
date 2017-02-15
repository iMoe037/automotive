import React from 'react';
import { Link } from 'react-router';

// Import Components
import Container from 'grommet/components/Header';
import Box from 'grommet/components/Box';
// import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/menu';
import Anchor from 'grommet/components/Anchor';
import Title from 'grommet/components/Title';

export function Header() {
  return (
    <Container splash={false} size="small" float={false} fixed={true} colorIndex="neutral-4-t">
      <Box pad={{ horizontal: 'small' }}>
        <Title>
          <Link to={{ pathname: '/' }}> AutoMotive </Link>
        </Title>
      </Box>
      <Box flex={true} justify="end" direction="row" responsive={false}>
        {
          // <Search inline={true} fill={false} size="medium" placeHolder="Search" dropAlign={{ right: 'right' }} />
        }
        <Menu icon={<MenuIcon />} dropAlign={{ right: 'right' }} >
          <Anchor tag="div">
            <Link to="/">Home</Link>
          </Anchor>
          <Anchor tag="div">
            <Link to={{ pathname: '/cars', query: { page: 1 } }}>Browse</Link>
          </Anchor>
          {/*
          <Anchor tag="div" className="active">
            Third
          </Anchor>
          */}
        </Menu>
      </Box>
    </Container>
  );
}

export default Header;
