import React from 'react';

// Import Components
import MainHero from '../../components/MainHero/MainHero';
import MainPageStats from '../../components/MainPageStats/MainPageStats';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Container from 'grommet/components/App';
import Styles from './MainPage.css';

export function MainPage() {
  return (
    <div>
      <MainHero />
      <Container>
        <Box align="center" pad="large">
          <Headline align="center" size="medium">
            AutoMotive
            <Heading tag="h3"> What Drives You? &trade;</Heading>
          </Headline>
          <Paragraph size="large" align="center" className={Styles.mainParagraph}>
            Finding the right car is a tedious process.
            Questions like “is this car fuel efficient?”,
            “does this car pick up fast?”,
            “is this car roomy enough?”,
            and many more questions go through a potential buyer’s mind.
            AutoMotive understands this struggle and that’s why we’d like to know what drives you?
            Our goal is to provide data in a clean efficient format to make your car buying experience easier.
          </Paragraph>
        </Box>
        {/*
          <MainPageStats />
          */}
      </Container>
    </div>
  );
}

export default MainPage;
