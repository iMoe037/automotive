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
    const page = this.props.location.query.page;
    this.props.dispatch(fetchCars(page));
  }

  render() {
    return (
      <div>
        <CarList cars={this.props.cars} page={this.props.location.query.page} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in server side.
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
