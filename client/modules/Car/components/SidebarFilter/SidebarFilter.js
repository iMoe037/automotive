import React, { Component } from 'react';

// Import Components
import Sidebar from 'grommet/components/Sidebar';
import Select from 'grommet/components/Select';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';

class SidebarFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Sidebar size="small" justify="start" pad="small">
        <Label>Make</Label>
        <Select
          options={['All', 'Acura', 'BMW', 'Ford']}
          value="All"
        />
        <Label>Car Type</Label>
        <Select
          options={['All', 'Sedan', 'Coupe', 'Hatchback']}
          value="All"
        />
        <Label>Price</Label>
        <Select
          options={['10,000', '12,000', '13,000']}
        />
        <Label>Rating</Label>
        <Box direction="row" align="center">
          <Select
            options={['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5']}
            value="1"
          />
          <Label>To</Label>
          <Select
            options={['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5']}
            value="5"
          />
        </Box>
      </Sidebar>
    );
  }
}

export default SidebarFilter;
