import React from 'react';

// Import Components
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';

function CarSummary(props) {
  if (props.summary) {
    return (
      <Section align="center" separator="horizontal" pad="large">
        <Paragraph>{props.summary}</Paragraph>
      </Section>
    );
  }
}

export default CarSummary;
