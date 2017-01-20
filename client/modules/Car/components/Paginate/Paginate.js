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
  componentDidMount() {
    this.props.dispatch(fetchCarCount());
  }

  nextPage(add) {
    const store = this.context.store;
    let currentPage = store.getState();
    currentPage = currentPage.routing.locationBeforeTransitions.query.page;
    currentPage = parseInt(currentPage);
    const nextPage = add ? currentPage + 1 : currentPage - 1;
    store.dispatch(push({ pathname: 'cars', query: { page: nextPage } }));
  }

  render() {
    return (
      <Box direction="row" responsive={false}>
        <Anchor onClick={() => this.nextPage(false)} icon={<LinkPreviousIcon />} animateIcon={true} primary={true} />
        <Anchor onClick={() => this.nextPage(true)} icon={<LinkNextIcon />} animateIcon={true} primary={true} />
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
