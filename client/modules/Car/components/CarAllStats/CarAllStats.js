import React, { PropTypes } from 'react';

// Import Components
import Box from 'grommet/components/Box';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

// Checks prop values for at least one value of not null
function checkNotNullProp(prop) {
  let value = false;
  prop.forEach(elem => {
    if (elem !== null) {
      value = true;
    }
  });
  return value;
}

// Checks if props have values to render the components
function checkPropsRender(props) {
  const values = Object.values(props);
  let bool = false;

  values.forEach(elem => {
    let objToArr;

    if (typeof elem === 'object' && !Array.isArray(elem)) {
      objToArr = Object.values(props);
      bool = checkNotNullProp(objToArr);
      if (bool) {
        return bool;
      }
    } else if (Array.isArray(elem)) {
      bool = checkNotNullProp(elem);
      if (bool) {
        return bool;
      }
    }
  });
  return bool;
}

// Array to unorderedlist and accordion panel
function arrToUl(arr, panelName) {
  if (arr === null) {
    return null;
  }

  const listItems = arr.map((elem, idx) => {
    return <ListItem key={`${panelName}-${idx}`} separator="horizontal"> {elem} </ListItem>;
  });

  return (
    <AccordionPanel pad="small" heading={panelName}>
      <List>
        {listItems}
      </List>
    </AccordionPanel>
  );
}

function CarAllStats(props) {
  checkPropsRender(props);
  if (checkPropsRender(props)) {
    return (
      <Accordion>
        {arrToUl(props.vehicleType, 'Vehicle Type')}
        {arrToUl(props.engine, 'Engine')}
        {arrToUl(props.displacement, 'Displacement')}
      </Accordion>
    );
  }
  return null;
}

CarAllStats.propTypes = {
  dimensions: PropTypes.object.isRequired,
  displacement: PropTypes.array.isRequired,
  engine: PropTypes.array.isRequired,
  vehicleType: PropTypes.array.isRequired,
};

export default CarAllStats;
