import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const Enter = ({user, navigation}) => {
  const [work, setWork] = useState();
  const [time, setTime] = useState();
  onAdd = async () => {
    if (!work || !time) {
      return Alert.alert('warning !!', 'Please enter all the fields');
    }
    try {
      firestore().collection('Task').doc(user.uid).collection('Work').add({
        work,
        time,
      });
      navigation.navigate('ShowTask');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <KeyboardAvoidingView
      behavious={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View>
        <View>
          <Lottie
            style={{height: 300, alignSelf: 'center', marginTop: 2}}
            source={require('../Animations/Work.json')}
            autoPlay
          />
          <View style={{marginTop: 40}}>
            <View style={styles.form}>
              <MaterialCommunityIcons
                style={styles.icon}
                name="note"
                size={32}
                color="#94A3B8"
              />
              <TextInput
                type="email"
                style={styles.input}
                placeholder="Enter Title"
                placeholderTextColor={'#94A3B8'}
                onChangeText={text => setWork(text)}></TextInput>
            </View>

            <View style={styles.form}>
              <FontAwesome5
                name="clock"
                style={styles.icon}
                size={32}
                color="#94A3B8"
              />
              <TextInput
                style={styles.input}
                type="password"
                placeholder="Duration in hours"
                placeholderTextColor={'#94A3B8'}
                onChangeText={text => setTime(text)}></TextInput>
            </View>
          </View>
        </View>
        <View style={{marginTop: 70}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E39FF6',
              width: 350,
              alignSelf: 'center',
              borderRadius: 20,
              height: 60,
              elevation: 6,
            }}
            onPress={() => {
              navigation.navigate('ShowTask');
            }}>
            <Text
              style={{
                padding: 10,
                alignSelf: 'center',
                fontFamily: 'TitilliumWeb-Bold',
                fontSize: 20,
              }}>
              Manage Task
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E39FF6',
              width: 350,
              alignSelf: 'center',
              borderRadius: 20,
              height: 60,
              elevation: 6,
            }}
            onPress={onAdd}>
            <Text
              style={{
                padding: 10,
                alignSelf: 'center',
                fontFamily: 'TitilliumWeb-Bold',
                fontSize: 20,
              }}>
              Add Task
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  input: {
    // borderBottomWidth: 1,

    // alignSelf: 'center',
    // borderRadius: 20,
    // alignText: 'center',
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
    paddingLeft: 10,
    color: 'black',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dee3ea',
    borderWidth: 1.5,
    borderRadius: 50,
    marginVertical: 10,
    position: 'relative',
    bottom: 15,
    width: 350,
    marginTop: 20,
    alignSelf: 'center',
  },
  icon: {
    padding: 9,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
});
export default Enter;
