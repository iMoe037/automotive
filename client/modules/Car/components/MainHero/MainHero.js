import React from 'react';

// Import Components
import Hero from 'grommet/components/Hero';
import Video from 'grommet/components/Video';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
// import classNames from 'classNames';
import Styles from './MainHeroStyle.css';

function MainHero() {
  return (
    <Hero
      background={<Video
        autoPlay={true}
        showControls={false}
        loop={true}
        muted={true}
        fit="cover"
        poster="https://s3.amazonaws.com/coverr-public/poster/Orchestra_thumb.jpg"
      >
        <source src="http://www.coverr.co/s3/mp4/Orchestra.mp4" type="video/mp4" />
      </Video>
      }
      backgroundColorIndex="dark"
      size="large"
    >
      <Box pad="large" />
      <Box direction="row" className={Styles.tabletGt}>
        <Box basis="xsmall" align="start" />
        <Box justify="start" align="end" responsive={false}>
          <Heading margin="none">
            AutoMotive
          </Heading>
          <Heading margin="none" tag="h3">
            What Drives you? &trade;
          </Heading>
        </Box>
      </Box>
    </Hero>
  );
}

export default MainHero;
