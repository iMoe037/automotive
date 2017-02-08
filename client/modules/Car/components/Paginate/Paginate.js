import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

// Import components
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';

// Import Actions
import { fetchCarCount } from '../../../App/AppActions';

// Import Selectors
import { getCount } from '../../../App/AppReducer';


class Paginate extends Component {
  componentWillMount() {
    this.props.dispatch(fetchCarCount());
  }

  componentDidMount() {
    const store = this.context.store;
    let currentPage;

    const handleChange = () => {
      let prevPage = currentPage;
      currentPage = this.getCurrentPage();
      if (currentPage !== prevPage) {
        const state = store.getState();
        const count = state.app.carCount;
        this.backPageDisable = this.disablePage('back', count);
        this.forwardPageDisable = this.disablePage('forward', count);
        prevPage = currentPage;
      }
    };
    this.unsubscribe = store.subscribe(handleChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCurrentPage() {
    const store = this.context.store;
    let currentPage = store.getState();
    currentPage = currentPage.routing.locationBeforeTransitions.query.page;
    currentPage = currentPage ? parseInt(currentPage, 10) : 1;
    return currentPage;
  }

  nextPage(add, num = 1) {
    if (!add && this.backPageDisable || add && this.forwardPageDisable) {
      return;
    }
    const store = this.context.store;
    const state = store.getState();
    const currentPage = this.getCurrentPage();
    const nextPage = add ? currentPage + num : currentPage - num;
    const query = state.routing.locationBeforeTransitions.query;
    store.dispatch(push({ pathname: 'cars', query: { ...query, page: nextPage } }));
  }

  disablePage(direction, count) {
    const currentPage = this.getCurrentPage();
    let disable = false;

    const intCount = parseInt(count, 10);

    // 20 cars per page get the max
    const max = (((currentPage + 1) * 20) > intCount);


    if (direction === 'back' && currentPage === 1) {
      disable = true;
      return disable;
    } else if (direction === 'forward' && max) {
      disable = true;
      return disable;
    }

    return disable;
  }

  render() {
    return (
      <Box direction="row" responsive={false}>
        <h1>Count is: {this.props.count} </h1>
        <Anchor
          disabled={this.backPageDisable}
          onClick={() => this.nextPage(false)} icon={<LinkPreviousIcon />}
          animateIcon={true} primary={true}
        />
        <Anchor
          disabled={this.forwardPageDisable}
          onClick={() => this.nextPage(true)} icon={<LinkNextIcon />}
          animateIcon={true} primary={true}
        />
      </Box>
    );
  }
}

Paginate.contextTypes = {
  store: React.PropTypes.object,
};

// Actions required to provide data for this component to render in server side.
Paginate.need = [() => { return fetchCarCount(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    count: getCount(state),
  };
}

export default connect(mapStateToProps)(Paginate);
