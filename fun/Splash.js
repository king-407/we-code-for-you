import {View, Text} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
const Splash = () => {
  return (
    <>
      {/* <Lottie
        source={require('../Animations/birds.json')}
        style={{height: 120, alignSelf: 'center', marginTop: 75}}
        autoPlay
      /> */}
      <Lottie
        source={require('../Animations/Intro.json')}
        style={{height: 450, alignSelf: 'center', marginTop: 75}}
        autoPlay
      />
      <Text
        style={{
          color: 'black',
          fontFamily: 'Kalam-Bold',
          alignSelf: 'center',
          position: 'relative',
          bottom: 70,
          fontSize: 20,
        }}>
        Made with 💓 by The Stoics{' '}
      </Text>
    </>
  );
};

export default Splash;
