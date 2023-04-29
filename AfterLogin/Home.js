import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

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
          Manage you tasks everyday with taskoo
        </Text>
        <Image style={styles.tinyLogo} source={require('../Images/Task.png')} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  tinyLogo: {
    alignSelf: 'center',
    height: 350,
    width: 350,
  },
});
export default Home;
