import React, { Component } from 'react';
import { push } from 'react-router-redux';

// Import Components
import Sidebar from 'grommet/components/Sidebar';
import Select from 'grommet/components/Select';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import FilterIcon from 'grommet/components/icons/base/Filter';
import RefreshIcon from 'grommet/components/icons/base/Refresh';

class SidebarFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.formValues = {
      make: 'All',
      ln_type: 'All',
      minRating: '1',
      maxRating: '5',
    };
  }

  makes = ['All', 'Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'BMW',
  'Bentley', 'Bugatti', 'Chevrolet', 'Chrysler', 'Dodge',
  'Ferrari', 'Ford', 'GMC', 'Genesis', 'Hyundai',
  'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Koenigsegg',
  'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus',
  'Maserati', 'Mazda', 'McLaren', 'Mercedes-AMG', 'Mercedes-Benz',
  'Mercedes-Maybach', 'Mitsubishi', 'Nissan', 'Pagani', 'Porsche',
  'Ram', 'Rolls-Royce', 'Smart', 'Subaru', 'Tesla',
  'Toyota', 'Volkswagen'];

  carType = ['All', 'Convertible', 'Coupe', 'Crossover', 'Hatchback', 'Pickup Truck',
  'Roadster', 'SUV', 'Sedan', 'Van', 'Wagon']

  changeValues(chosen, itemChanged) {
    const formValues = this.state.formValues;
    formValues[itemChanged] = chosen.value;
    this.setState({ formValues });
  }

  filter() {
    const filter = this.state.formValues;

    function checkForAll(key) {
      if (filter[key] === 'All') {
        delete filter[key];
      }
    }
    checkForAll('make');
    checkForAll('ln_type');
    filter.page = 1;

    this.context.store.dispatch(push({ pathname: 'cars', query: filter }));
  }

  render() {
    return (
      <Sidebar size="small" justify="start" pad="small">
        <Label>Make</Label>
        <Select
          options={this.makes}
          value={this.state.formValues.make}
          onChange={chosen => { this.changeValues(chosen, 'make'); }}
        />
        <Label>Car Type</Label>
        <Select
          options={this.carType}
          value={this.state.formValues.ln_type}
          onChange={chosen => { this.changeValues(chosen, 'ln_type'); }}
        />
        <Label>Price</Label>
        <Select
          options={['10,000', '12,000', '13,000']}
        />
        <Label>Rating</Label>
        <Box direction="row" align="center">
          <Select
            options={['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5']}
            value={this.state.formValues.minRating}
            onChange={chosen => { this.changeValues(chosen, 'minRating'); }}
          />
          <Label>To</Label>
          <Select
            options={['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5']}
            value={this.state.formValues.maxRating}
            onChange={chosen => { this.changeValues(chosen, 'maxRating'); }}
          />
        </Box>
        <Box align="center">
          <Button
            icon={<RefreshIcon />}
            label="Reset"
            secondary={true}
            type="reset"
          />
          <Button
            icon={<FilterIcon />}
            label="Filter"
            primary={true}
            type="submit"
            onClick={() => this.filter()}
          />
        </Box>
      </Sidebar>
    );
  }
}

SidebarFilter.contextTypes = {
  store: React.PropTypes.object,
};

export default SidebarFilter;
