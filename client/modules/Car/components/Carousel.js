import React from 'react';

// Import Components
import Container from 'grommet/components/Carousel';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

function Carousel() {
  const data = [{
    image: 'https://s7d9.scene7.com/is/image/Audiusastaging/seasonOfAudiStill?wid=1059&fit=constrain',
    text: 'Audi 2017 Lineup',
  },
    {
      image: 'http://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brandsites/legacy/marketing/fusion-launch/NA_Homepage_Billboard_FirstVisit_FusionLaunch_desktophidef.jpg/_jcr_content/renditions/NA_Homepage_Billboard_FirstVisit_FusionLaunch_desktopstd.jpg',
      text: '2017 Ford Fusion',
    },
    {
      image: 'http://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2016/CC25743/CC25743__1LZ/GXG_H3B_PYVgmds6.jpg&v=deg04&std=true&country=US',
      text: '2017 Chevy Silverado',
    },
    {
      image: 'https://i1.wp.com/hypebeast.com/image/2016/12/lamborghini-aventador-s-2.jpg?quality=95&w=1755',
      text: '2017 Lamborghini Aventador',
    },
    {
      image: 'http://cdn.bmwblog.com/wp-content/uploads/2015/03/bmw-lineup-750x500.jpg',
      text: '2017 BMW Lineup',
    }];

  return (
    <Container>
      {data.map((elem, idx) => {
        return (
          <Box pad="xlarge" texture={elem.image} key={idx.toString()}>
            <Box pad="medium">
              <Heading>{elem.text}</Heading>
            </Box>
          </Box>
        );
      })}
    </Container>
  );
}

export default Carousel;
