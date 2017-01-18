import React from 'react';

// Import Components
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

// Converts text to propercase
function convertCase(word) {
  const firstLetter = word.slice(0, 1).toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();

  let fixedWord = firstLetter + restOfWord;

  fixedWord = (fixedWord === 'Vehicletype') ? 'Vehicle Type' : fixedWord;
  return fixedWord;
}

// Array to unorderedlist and accordion panel
function arrToUl(arr, panelName, keyIdx) {
  if (arr === null) {
    return null;
  }

  const listItems = arr.map((elem, idx) => {
    return <ListItem key={`${panelName}-${idx}`}> {elem} </ListItem>;
  });

  return (
    <AccordionPanel key={`${panelName}-${keyIdx}`} pad="small" heading={panelName}>
      <List>
        {listItems}
      </List>
    </AccordionPanel>
  );
}

// Removes Null Props and convert to JSX
function removeNullProps(props) {
  const propsArr = Object.values(props);
  const propsKey = Object.keys(props);

  let convertedProps = [];
  propsArr.forEach((prop, idx) => {
    const panelName = convertCase(propsKey[idx]);
    if (prop !== null && Array.isArray(prop)) {
      convertedProps.push(arrToUl(prop, panelName, idx));
    } else if (prop !== null && typeof prop === 'object') {
      const arrVal = [];
      for (const key in prop) { // eslint-disable-line
        if (prop.hasOwnProperty(key)) {
          arrVal.push((`${key}: ${prop[key]}`));
        }
      }
      convertedProps.push(arrToUl(arrVal, panelName, idx));
    }
  });
  convertedProps = (convertedProps.length > 0) ? convertedProps : null;
  return convertedProps;
}

function CarAllStats(props) {
  const removedEmptyProps = removeNullProps(props);
  if (removedEmptyProps) {
    return (
      <Accordion>
        {removedEmptyProps}
      </Accordion>
    );
  }
  return null;
}

export default CarAllStats;
