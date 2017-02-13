import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactDOM from 'react-dom';

// Import Components
import CarList from '../../components/CarList';

// Import Actions
import { fetchCars } from '../../CarActions';
import { fetchFilter } from '../../../App/AppActions';

// Import Selectors
import { getCars } from '../../CarReducer';
import { initalState } from '../../../App/AppReducer';

// Remove page from object
function removeProp(obj, propName) {
  const changedObj = { ...obj };
  if (changedObj[propName]) {
    delete changedObj[propName];
  }
  return changedObj;
}

// Check differences in filter params and updates the car count
function filterParams(oldParam, newParam, store) {
  if (!_.isEqual(removeProp(oldParam, 'page'), removeProp(newParam, 'page'))) {
    const filter = _.isEmpty(newParam) ? initalState.filter : newParam;
    store.dispatch(fetchFilter(filter));
  }
}

class CarListPage extends Component {
  componentDidMount() {
    // listen to route changes and update data accordingly
    const store = this.context.store;
    let currentLocation = {};

    const handlechange = () => {
      const previousLocation = currentLocation;

      const storeState = store.getState();
      currentLocation = storeState.routing.locationBeforeTransitions;

      // Check if query changed and display data accordingly
      if (currentLocation.length > 5) {
        return;
      } else if (previousLocation.search !== currentLocation.search) {
        const search = currentLocation.search;
        this.props.dispatch(fetchCars(search));
        window.scrollTo(0, 0);
        const scrollDiv = ReactDOM.findDOMNode(this).children[0].children[1];
        scrollDiv.scrollTop = 0;

        // Check if the filter params have changed and update the filter if neccessary
        filterParams(previousLocation.query, currentLocation.query, store);
      }
    };

    this.unsubscribe = store.subscribe(handlechange);
  }

  componentWillUnmount() {
    this.unsubscribe();
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
  store: React.PropTypes.object,
};

export default connect(mapStateToProps)(CarListPage);
