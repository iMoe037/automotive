import React, { PropTypes, Component } from 'react';

// Import Components
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';


class CarImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: this.props.images[0],
      otherImages: this.props.images.slice(1),
    };
  }

  handleClick(idx) {
    const tempMain = this.state.otherImages[idx];
    const tempOther = this.state.otherImages;
    tempOther[idx] = this.state.mainImage;

    this.setState({
      otherImages: tempOther,
      mainImage: tempMain,
    });
  }

  render() {
    return (
      <Box>
        <Box size="medium">
          <Image src={this.state.mainImage} full="horizontal" fit="cover" />
        </Box>
        <Box pad="small" justify="center" direction="row" responsive={false}>
          {this.state.otherImages.map((image, idx) => (
            <Image onClick={() => this.handleClick(idx)} key={`Image-${idx}`} src={image} size="thumb" />
          ))}
        </Box>
      </Box>
    );
  }
}

CarImage.propTypes = {
  images: PropTypes.array.isRequired,
};

export default CarImage;
