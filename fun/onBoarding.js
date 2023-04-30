import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
const Onboarding = ({navigation}) => {
  return (
    <>
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <Image
            source={require('../Images/First.png')}
            style={{
              height: 400,
              width: 400,
              alignSelf: 'center',
              marginTop: 80,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 34,
                color: 'black',
                fontFamily: 'TitilliumWeb-Bold',
                alignSelf: 'center',
              }}>
              Organise yourself
            </Text>

            <Text
              style={{
                fontSize: 20,
                color: '#94A3B8',
                fontFamily: 'TitilliumWeb-Regular',
                alignSelf: 'center',
                padding: 5,
                margin: 10,
              }}>
              Start enjoying more organised work life. Prioritise your
              activities with just one button press.
            </Text>
          </View>

          {/* <TouchableOpacity style={{ backgroundColor: '#B9E0FF', justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginTop: 10 }}>
                    <Text style={{ padding: 15, width: 250, textAlign: 'center', color: 'black', fontWeight: '700', fontSize: 20 }}>Skip</Text>
                </TouchableOpacity> */}
        </View>

        <View style={styles.slide2}>
          <Image
            source={require('../Images/Second.png')}
            style={{
              height: 350,
              width: 350,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 30,
                color: 'black',
                fontFamily: 'TitilliumWeb-Bold',
                alignSelf: 'center',
                marginTop: 60,
              }}>
              Keep on track with taskoo
            </Text>

            <Text
              style={{
                fontSize: 20,
                color: '#94A3B8',
                fontFamily: 'TitilliumWeb-Regular',
                alignSelf: 'center',
                padding: 5,
                margin: 10,
              }}>
              Write your daily goals in sequence and accomplish them.
            </Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#E39FF6',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              marginTop: 50,
            }}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text
              style={{
                padding: 9,
                width: 350,
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 24,
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </Swiper>
      <StatusBar style="auto" />
    </>
  );
};

export default Onboarding;
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,

    backgroundColor: 'white',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
