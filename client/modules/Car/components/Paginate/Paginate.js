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
    let currentCount;

    const handleChange = () => {
      const prevPage = currentPage;
      const prevCount = currentCount;

      currentPage = this.getCurrentPage();
      currentCount = this.getCurrentCount();

      if (currentPage !== prevPage || currentCount !== prevCount) {
        this.backPageDisable = this.disablePage('back', currentCount);
        this.forwardPageDisable = this.disablePage('forward', currentCount);
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

  getCurrentCount() {
    const store = this.context.store;
    let count = store.getState();
    count = count.app.carCount;
    count = count ? parseInt(count, 10) : count;
    return count;
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

    // 20 cars per page get the max
    const max = ((currentPage * 20) > count);

    if (direction === 'back' && currentPage === 1) {
      disable = true;
      return disable;
    } else if (direction === 'forward' && max || count < 20) {
      disable = true;
      return disable;
    }

    return disable;
  }

  render() {
    return (
      <Box direction="row" responsive={false}>
        <Anchor
          disabled={this.backPageDisable}
          onClick={() => this.nextPage(false)} icon={<LinkPreviousIcon />}
          animateIcon={true} primary={true}
        />
        <h4>Total Cars {this.props.count}</h4>
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
