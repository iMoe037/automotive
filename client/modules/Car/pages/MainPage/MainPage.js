import React from 'react';

// Import Components
import Carousel from '../../components/Carousel';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';


export function MainPage() {
  return (
    <div>
      <Carousel />
      <Box align="center" pad="large">
        <Headline align="center" size="medium">
          Some Great Title!
        </Headline>
        <Paragraph size="large" align="center">
          'Lorem Khaled Ipsum is a major key to success. Give thanks to the most high. Let me be clear, you have to make it through the jungle to make it to paradise,
          that’s the key, Lion! Surround yourself with angels.
          Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel.
          I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. You should never complain, complaining is a weak emotion,
          you got life, we breathing, we blessed. Don’t ever play yourself.'
        </Paragraph>
      </Box>
      <Box align="center">
        <Heading>Latest Car Statistics</Heading>
      </Box>
    </div>
  );
}

export default MainPage;
