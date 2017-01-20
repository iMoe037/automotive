import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';

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

  nextPage(add, currentPage) {
    console.log(this);
    // if (add) {
    //   browserHistory.push({ pathname: 'cars', query: { page: currentPage + 1 } });
    // } else {
    //   browserHistory.push({ pathname: 'cars', query: { page: currentPage - 1 } });
    // }
  }

  render() {
    return (
      <Box direction="row" responsive={false}>
        <Anchor onClick={() => this.nextPage(false, this.props.page)} icon={<LinkPreviousIcon />} animateIcon={true} primary={true} />
        <Anchor icon={<LinkNextIcon />} animateIcon={true} primary={true} />
      </Box>
    );
  }
}

// Actions required to provide data for this component to render in server side.
Paginate.need = [() => { return fetchCarCount(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    count: getCount(state),
  };
}

export default connect(mapStateToProps)(Paginate);
