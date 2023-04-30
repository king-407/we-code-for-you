import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Home = ({navigation, user}) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <MaterialCommunityIcons
        name="logout"
        style={{
          position: 'absolute',
          right: 90,
          color: 'black',
          right: 20,
          top: 20,
        }}
        size={45}
        color="#94A3B8"
      />
      <View>
        <Text
          style={{
            color: 'black',
            marginTop: 80,
            fontSize: 30,
            fontFamily: 'TitilliumWeb-Bold',
            marginRight: 20,
            marginLeft: 15,
          }}>
          Manage you tasks everyday with{' '}
          <Text style={{color: '#E39FF6'}}>taskoo</Text>
        </Text>
        <TouchableOpacity
          onPress={() => {
            console.log('logout');
            auth().signOut();
          }}></TouchableOpacity>
        <Image
          style={styles.tinyLogo}
          source={require('../Images/Taskoo.png')}
        />
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
            backgroundColor: '#E39FF6',
            width: 300,
            alignSelf: 'center',
            borderRadius: 20,
            height: 60,
            elevation: 6,
          }}
          onPress={() => navigation.navigate('Enter')}>
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
