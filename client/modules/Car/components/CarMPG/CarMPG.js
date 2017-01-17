import React, { Component } from 'react';

// Import Components
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Label from 'grommet/components/Label';
import Value from 'grommet/components/Value';


class CarMPG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mpgTitle: '',
      mpgVal: '',
    };
  }

  checkPropValue(obj) {
    const objVal = Object.values(obj);
    let bool = false;
    objVal.forEach(elem => {
      if (elem != null) {
        bool = true;
      }
    });
    return bool;
  }

  changeMpgVal(val) {
    if (val === undefined) {
      return this.setState({ mpgTitle: null, mpgVal: null });
    }
    return this.setState({ mpgTitle: val.label, mpgVal: val.value });
  }

  makeMpg(cityMpg, highwayMpg) {
    if (cityMpg && highwayMpg) {
      const maxMileage = Math.max(cityMpg, highwayMpg);
      const series = [
        { label: 'City', value: cityMpg, colorIndex: 'graph-1' },
        { label: 'Highway', value: highwayMpg, colorIndex: 'graph-2' },
      ];

      return (
        <Box direction="row" margin={{ vertical: 'small' }} pad={{ between: 'small' }} responsive={false} justify="center">
          <Meter
            vertical={true}
            series={series}
            onActive={idx => this.changeMpgVal(series[idx])}
          />
          <Box justify="between">
            <Label size="small">
              {`${maxMileage} MPG`}
            </Label>
            <Value value={this.state.mpgVal} units="MPG" label={this.state.mpgTitle} size="small" />
            <Label size="small">
              {'0 MPG'}
            </Label>
          </Box>
        </Box>
      );
    }
    return null;
  }

  render() {
    if (this.checkPropValue(this.props.mpg)) {
      return (
        <Box justify="center" pad="small" responsive={false}>
          {this.makeMpg(this.props.mpg.cityEpa, this.props.mpg.highwayEpa)}
        </Box>
      );
    }
    return null;
  }
}

export default CarMPG;
