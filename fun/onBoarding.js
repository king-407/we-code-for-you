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
            source={require('../Images/Hotspot.png')}
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
              Hotspot Areas
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
              {/* BusKaro helps you to track the location of your bus, which saves your time. */}
              View areas with high accident rates in real-time, take alternative
              routes if needed.
            </Text>
          </View>

          {/* <TouchableOpacity style={{ backgroundColor: '#B9E0FF', justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginTop: 10 }}>
                    <Text style={{ padding: 15, width: 250, textAlign: 'center', color: 'black', fontWeight: '700', fontSize: 20 }}>Skip</Text>
                </TouchableOpacity> */}
        </View>

        <View style={styles.slide2}>
          <Image
            source={require('../Images/Danger.png')}
            style={{
              height: 350,
              width: 350,
              alignSelf: 'center',
              marginTop: 30,
            }}
          />
          <View
            style={{
              padding: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 34,
                color: 'black',
                fontFamily: 'TitilliumWeb-Bold',
                alignSelf: 'center',
                marginTop: 60,
              }}>
              Accident Alerts !!
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
              {/* Buskaro helps you to track the seat occupancy by real time monitoring of the seats available. */}
              See the cause of accidents on each turn, and get aware of
              potential hazards and take necessary precautions.
            </Text>
          </View>

          {/* <TouchableOpacity style={{ backgroundColor: '#B9E0FF', justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginTop: 10 }}>
                    <Text style={{ padding: 15, width: 250, textAlign: 'center', color: 'black', fontWeight: '700', fontSize: 20 }}>Skip</Text>
                </TouchableOpacity> */}
        </View>
        <View style={styles.slide3}>
          <Image
            source={require('../Images/Emergency.png')}
            style={{
              height: 300,
              width: 350,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              padding: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 34,
                color: 'black',
                fontFamily: 'TitilliumWeb-Bold',
                alignSelf: 'center',
                marginTop: 60,
              }}>
              Crash Guard
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
              Detects accident and automatically sends an emergency alert to
              your loved ones, ensuring your safety.
            </Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#dbe8ff',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              marginTop: 10,
            }}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text
              style={{
                padding: 9,
                width: 350,
                textAlign: 'center',
                color: '#3B82F6',
                fontWeight: 'bold',
                fontSize: 24,
              }}>
              Skip
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
