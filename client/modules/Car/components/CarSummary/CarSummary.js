import React from 'react';

// Import components
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import CarMPGandSpeeds from '../CarMPGandSpeeds/CarMPGandSpeeds';

function CarSummary(props) {
  if (props.summary) {
    return (
      <Box pad="small" separator="horizontal" direction="row" alignContent="center" justify="center">
        <Box align="center" pad={{ horizontal: 'medium' }}>
          <Heading align="center" tag="h2" margin="none">
            Summary
          </Heading>
          <Paragraph>{props.summary}</Paragraph>
        </Box>
        <CarMPGandSpeeds mpg={props.mpg} speeds={props.speeds} />
      </Box>
    );
  }
}

export default CarSummary;
