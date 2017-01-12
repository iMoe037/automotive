import React, { PropTypes } from 'react';

// Import Components
import Box from 'grommet/components/Box';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Heading from 'grommet/components/Heading';
import Meter from 'grommet/components/Meter';
import Label from 'grommet/components/Label';
import Value from 'grommet/components/Value';

function checkObjValue(obj) {
  const objVal = Object.values(obj);
  let bool = false;
  objVal.forEach(elem => {
    if (elem != null) {
      bool = true;
    }
  });
  return bool;
}

function makeMph(loc, speed) {
  if (speed) {
    return (
      <Tile>
        <Heading tag="h2">{`${loc} MPG`}</Heading>
        <Box align="center" justify="center" pad={{ between: 'small' }}>
          <Value value={speed} units="MPG" align="start" />
          <Meter value={speed} />
        </Box>
      </Tile>
    );
  }
  return null;
}

function topSpeed(speed) {
  if (speed) {
    return (
      <Tile>
        <Heading tag="h2"> Top Speed </Heading>
        <Box align="center">
          <Meter
            size="small"
            type="arc"
            threshold={250}
            max={300}
            value={speed}
          />
          <Box direction="row" justify="between" align="center" pad={{ between: 'small' }} responsive={false}>
            <Label size="small"> 0 mph </Label>
            <Value value={speed} units="MPH" size="medium" />
            <Label size="small"> 300 mph </Label>
          </Box>
        </Box>
      </Tile>
    );
  }
  return null;
}

function CarSimpleStats(props) {
  if (checkObjValue(props.stats)) {
    return (
      <Box separator="bottom">
        <Tiles fill={true}>
        {makeMph('City', props.stats.cityEpa)}
        {topSpeed(props.stats.topSpeed)}
        {makeMph('Highway', props.stats.highwayEpa)}
        </Tiles>
      </Box>
    );
  }
  return null;
}

CarSimpleStats.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default CarSimpleStats;
