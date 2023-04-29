import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View>
        <Text
          style={{
            color: 'black',
            marginTop: 100,
            fontSize: 30,
            fontFamily: 'TitilliumWeb-Bold',
            marginRight: 20,
            marginLeft: 15,
          }}>
          Manage you tasks everyday with{' '}
          <Text style={{color: '#F89880'}}>taskoo</Text>
        </Text>
        <Image style={styles.tinyLogo} source={require('../Images/Task.png')} />
      </View>
      <View>
        <Text
          style={{
            color: '#94A3B8',
            fontFamily: 'TitilliumWeb-Regular',
            margin: 20,
            fontSize: 20,
          }}>
          When you are overwhelemed by the amount of work you have on your
          plate, stop and rethink.
        </Text>
      </View>
      <View style={{marginTop: 80}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#F89880',
            width: 300,
            alignSelf: 'center',
            borderRadius: 20,
            height: 60,
            elevation: 6,
          }}>
          <Text
            style={{
              padding: 10,
              alignSelf: 'center',
              fontFamily: 'TitilliumWeb-Bold',
              fontSize: 20,
            }}>
            Let's Start
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  tinyLogo: {
    alignSelf: 'center',
    height: 300,
    width: 300,
  },
});
export default Home;
