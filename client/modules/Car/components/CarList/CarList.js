import React, { PropTypes } from 'react';

// Import Components
import Tiles from 'grommet/components/Tiles';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Container from 'grommet/components/App';
import CarListItem from '../CarListItem/CarListItem';
import SidebarFilter from '../SidebarFilter/SidebarFilter';
import Paginate from '../Paginate/Paginate';
import Styles from './CarList.css';

function CarList(props) {
  return (
    <Split flex="right" fixed={true}>
      <SidebarFilter />
      <Container className={Styles.extraWide}>
        <Box justify="center" align="center" pad="medium">
          <Tiles fill={false} flush={false} justify="center" >
          {
            props.cars.map(car => (
              <CarListItem key={car.model} car={car} />
            ))
          }
          </Tiles>
          <Paginate page={props.page} />
        </Box>
      </Container>
    </Split>
  );
}

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CarList;
