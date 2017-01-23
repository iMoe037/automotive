import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

// Import Components
import CarList from '../../components/CarList';

// Import Actions
import { fetchCars } from '../../CarActions';

// Import Selectors
import { getCars } from '../../CarReducer';

class CarListPage extends Component {
  componentDidMount() {
    this.listener();
  }

  componentWillUnmount() {
    // this.unsubscribe();
  }

  listener() {
    this.context.router.listen(location => {
      console.log(location);
      // const page = parseInt(location.query.page, 10);
      const search = location.search;
      this.props.dispatch(fetchCars(search));
      window.scrollTo(0, 0);
      const scrollDiv = ReactDOM.findDOMNode(this).children[0].children[1];
      scrollDiv.scrollTop = 0;
    });
  }

  // subscriber() {
  //   const store = this.context.store;
  //   return store.subscribe(() => {
  //     const page = parseInt(store.getState().routing.locationBeforeTransitions.query.page, 10);
  //     this.props.dispatch(fetchCars(page));
  //     window.scrollTo(0, 0);
  //     const scrollDiv = ReactDOM.findDOMNode(this).children[0].children[1];
  //     scrollDiv.scrollTop = 0;
  //   });
  // }


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
