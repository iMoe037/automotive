import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

// Import Components
import Sidebar from 'grommet/components/Sidebar';
import Select from 'grommet/components/Select';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import FilterIcon from 'grommet/components/icons/base/Filter';
import RefreshIcon from 'grommet/components/icons/base/Refresh';

// Import Actions
import { fetchFilter, fetchCarCount } from '../../../App/AppActions';

// Import Selectors
import { getFilter, initialState } from '../../../App/AppReducer';

class SidebarFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.setState({ formValues: this.props.filter });
  }

  // componentDidMount() {
  //   const store = this.context.store;

  //   function handleChange() {
  //     const storeState = store.getState();
  //     // console.log(storeState);
  //   }
  //   this.unsubscribe = store.subscribe(handleChange);
  // }

  componentWillUnmount() {
    console.log('unmounting!');
    this.unsubscribe();
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
    const store = this.context.store;

    store.dispatch(fetchFilter(filter));

    function checkForAll(key) {
      if (filter[key] === 'All') {
        delete filter[key];
      }
    }
    checkForAll('make');
    checkForAll('ln_type');
    filter.page = 1;

    store.dispatch(push({ pathname: 'cars', query: filter }));
    let query = store.getState();
    query = query.routing.locationBeforeTransitions.search;
    store.dispatch(fetchCarCount(query));
  }

  reset() {
    const filter = initialState.filter;
    this.context.store.dispatch(fetchFilter(filter));
    this.context.store.dispatch(push({ pathname: '/cars', query: { page: 1 } }));
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
            onClick={() => this.reset()}
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
function mapStateToProps(state) {
  return {
    filter: getFilter(state),
  };
}

SidebarFilter.contextTypes = {
  store: React.PropTypes.object,
};

export default connect(mapStateToProps)(SidebarFilter);