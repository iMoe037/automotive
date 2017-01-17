import React from 'react';

// Import Components
import Box from 'grommet/components/Box';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Heading from 'grommet/components/Heading';

// Checks if Props has a least 1 value to render component
function checkPropValue(obj) {
  const objVal = Object.values(obj);
  let bool = false;
  objVal.forEach(elem => {
    if (elem != null) {
      bool = true;
    }
  });
  return bool;
}

function genSpeed(title, speed, unit) {
  if (speed) {
    return (
      <ListItem justify="between" separator="horizontal" responsive={false} pad="small">
        <span>{title}</span>
        <span>{`${speed} ${unit}`}</span>
      </ListItem>
    );
  }
  return null;
}

function CarSpeeds(props) {
  if (checkPropValue(props)) {
    return (
      <Box pad="small" justify="center">
        <Heading align="center" margin="small" tag="h3">Speed</Heading>
        <List>
          {genSpeed('Top', props.speeds.topSpeed, 'MPH')}
          {genSpeed('HP', props.speeds.hp, 'HP')}
          {genSpeed('0-60', props.speeds.zeroSixty, 'Secs')}
        </List>
      </Box>
    );
  }
}

export default CarSpeeds;
