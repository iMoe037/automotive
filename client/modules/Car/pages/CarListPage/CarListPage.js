import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import CarList from '../../components/CarList';

// Import Actions
import { fetchCars } from '../../CarActions';

// Import Selectors
import { getCars } from '../../CarReducer';

class CarListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCars());
  }

  render() {
    return (
      <div>
        <CarList cars={this.props.cars} />
      </div>
    );
  }
}

// Actions required to provide data fro this componet to render in server side.
CarListPage.need = [() => { return fetchCars(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    cars: getCars(state),
  };
}

CarListPage.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
};

CarListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(CarListPage);
