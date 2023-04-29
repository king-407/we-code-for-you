import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Input} from 'react-native-elements';
import React, {useState} from 'react';
// import auth from '@react-native-firebase/auth';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Lottie from 'lottie-react-native';
import auth from '@react-native-firebase/auth';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    if (!email || !password) {
      alert('please add all the field');
      return;
    }
    try {
      const final = await auth().signInWithEmailAndPassword(email, password);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  if (loading) {
    return <Lottie source={require('../Animations/loader.json')} autoPlay />;
  }
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../Images/Register.png')}
      />
      <Text
        style={{
          fontSize: 50,
          color: 'black',
          // fontWeight: '800',
          position: 'relative',
          bottom: 40,
          fontFamily: 'TitilliumWeb-Bold',
        }}>
        Login
      </Text>

      <View style={styles.form}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="email"
          size={32}
          color="#94A3B8"
        />
        <TextInput
          type="email"
          style={styles.input}
          placeholder="abc@gmail.com"
          placeholderTextColor={'#94A3B8'}
          onChangeText={text => setEmail(text)}></TextInput>
      </View>

      <View style={styles.form}>
        <FontAwesome5
          name="lock"
          style={styles.icon}
          size={32}
          color="#94A3B8"
        />
        <TextInput
          style={styles.input}
          type="password"
          placeholder="password"
          placeholderTextColor={'#94A3B8'}
          onChangeText={text => setPassword(text)}></TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.last}>
        <Text style={styles.lastText}>Don't have an account?</Text>
        <TouchableOpacity style={styles.signup}>
          <Text
            style={styles.signUpText}
            onPress={() => navigation.navigate('Register')}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#fff',
  },
  heading: {},
  signUpText: {
    color: 'blue',
  },
  lastText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  status: {
    height: 200,
  },
  // container: {
  //     flex: 1,
  // },
  signup: {
    marginTop: 5,
    marginLeft: 12,
  },
  input: {
    // borderBottomWidth: 1,
    // width: 350,
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
  },
  icon: {
    padding: 9,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  headingText: {
    fontSize: 34,
    fontWeight: '900',
    marginBottom: 20,
    textAlign: 'center',
  },
  tinyLogo: {
    alignSelf: 'center',
    height: 350,
    width: 350,
  },
  button: {
    backgroundColor: '#3B82F6',
    padding: 12,
    borderRadius: 50,
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',

    fontFamily: 'TitilliumWeb-Bold',
  },
  last: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'TitilliumWeb-Regular',
    // backgroundColor: 'blue',
  },
  lastText: {
    fontSize: 18,
    color: '#94A3B8',
  },
  signUpText: {
    fontSize: 18,
    color: '#3B82F6',
    fontFamily: 'TitilliumWeb-Regular',
  },
});
export default Login;
