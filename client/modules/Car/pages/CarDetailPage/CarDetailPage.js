import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Import Actions
import { fetchCar } from '../../CarActions';

// Import Selectors
import { getCar } from '../../CarReducer';

// Import Components
import CarImage from '../../components/CarImage/CarImage';
import CarInfo from '../../components/CarInfo/CarInfo';
import CarSummary from '../../components/CarSummary/CarSummary';
import CarAllStats from '../../components/CarAllStats/CarAllStats';
import Box from 'grommet/components/Box';
import Container from 'grommet/components/App';


export function CarDetailPage(props) {
  return (
    <Container>
      <Helmet title={`${props.car.make} - ${props.car.model}`} />
      <Box direction="row" justify="start" align="center" wrap={false}>
        <Box justify="start" align="center" wrap={false}>
          <CarImage images={props.car.images} />
        </Box>
        <CarInfo info={{ make: props.car.make, model: props.car.model, ln_type: props.car.ln_type, price: props.car.price, rating: props.car.rating, msrp: props.car.msrp }} />
      </Box>
      <CarSummary
        speeds={{ topSpeed: props.car.top_speed, hp: props.car.hp, zeroSixty: props.car.zero_sixty }}
        mpg={{ cityEpa: props.car.city_epa, highwayEpa: props.car.highway_epa }}
        summary={props.car.summary}
      />
      <CarAllStats dimensions={props.car.dimensions} displacement={props.car.displacement} engine={props.car.engine} vehicleType={props.car.vehicle_type_more} />
    </Container>
  );
}

// Actions required to provide data for this component to render sever side.
CarDetailPage.need = [params => {
  return fetchCar(params._id);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    car: getCar(state, props.params.id),
  };
}

CarDetailPage.propTypes = {
  car: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(CarDetailPage);
