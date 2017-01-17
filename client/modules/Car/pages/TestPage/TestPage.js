import React, { Component } from 'react';
import callApi from '../../../../util/apiCaller';

// Temp Components
import CarImage from '../../components/CarImage/CarImage';
import CarInfo from '../../components/CarInfo/CarInfo';
import CarSummary from '../../components/CarSummary/CarSummary';
import CarAllStats from '../../components/CarAllStats/CarAllStats';
import Box from 'grommet/components/Box';

class TestPage extends Component {
  testApi = () => {
    return callApi('cars').then(res => {
      console.log(res); // eslint-disable-line no-console
    });
  }
  handleClick = () => {
    console.log('clicked'); // eslint-disable-line no-console
  }
  render() {
    return (
      <div>
        <Box direction="row" justify="start" align="center" wrap={false}>
          <Box justify="start" align="center" wrap={false}>
            <CarImage images={['http://buyersguide.caranddriver.com/media/assets/submodel/7979.jpg', 'http://photos3.leftlanenews.com/cars/volkswagen/big-images/2012-volkswagen-beetle-21_653.jpg', 'http://photos3.leftlanenews.com/cars/volkswagen/big-images/2012-volkswagen-beetle-22_653.jpg', 'http://photos3.leftlanenews.com/cars/volkswagen/big-images/2012-volkswagen-beetle-23_653.jpg', 'http://photos3.leftlanenews.com/cars/volkswagen/big-images/2012-volkswagen-beetle-24_653.jpg']} />
          </Box>
          <CarInfo info={{ make: 'Volkswagen', model: 'Beetle', ln_type: 'Coupe', price: 20815, rating: 2.5 }} />

        </Box>
        <CarSummary speeds={{ topSpeed: 120, hp: 170, zeroSixty: 7.6 }} stats={{ cityEpa: 25, highwayEpa: 34 }} summary="Its shape is among the most distinctive on the road; surprisingly, the Beetle, offered as a coupe or a convertible, is as fun to drive as it looks. A 170-hp turbo four has a standard five-speed manual for peppy performance; a six-speed automatic is optional. The Beetle Dune gets the automatic, sits 0.2 inch higher, and has off-road styling elements. The 210-hp turbo four R-Line is the hot rod, with either a six-speed manual or a six-speed automatic. Apple CarPlay and Android Auto are optional." />
        <CarAllStats
          dimensions={{
            cargoVolume: '7 cu ft',
            curbWeight: '3216 lb',
            height: '58.0 in',
            length: '168.4 in',
            passengerVolume: '81 cu ft',
            wheelbase: '100.0 in',
            width: '71.2 in',
          }}
          displacement={[
            '110 cu in, 1798 cc',
            'Power: 170 hp @ 4800 rpm',
            'Torque: 184 lb-ft @ 1500 rpm',
          ]}
          engine={[
            'turbocharged and intercooled DOHC 16-valve inline-4',
            'iron block and aluminum head',
            'direct fuel injection',
          ]}
          vehicleType={[
            'front-engine',
            'front-wheel-drive',
            '4-passenger',
            '2-door convertible',
          ]}
        />
      </div>
    );
  }
}

export default TestPage;
