import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Lottie from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // console.log(name, email, password);
  const onRegister = async () => {
    setLoading(true);
    if (!email || !password) {
      Alert.alert(
        'Warning',
        'Please enter all fields',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: true},
      );
    }
    try {
      const result = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log(result);
      firestore()
        .collection('users')
        .doc(result.user.uid)
        .set({email, uid: result.user.uid, name});
    } catch (error) {
      console.log(error);
      // Alert.alert(
      //   'Something went wrong',
      //   'Try again later',
      //   [
      //     {
      //       text: 'Cancel',
      //       onPress: () => console.log('Cancel Pressed'),
      //       style: 'cancel',
      //     },
      //     {text: 'OK', onPress: () => console.log('OK Pressed')},
      //   ],
      //   {cancelable: false},
      // );
    }
    setLoading(false);
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
          bottom: 90,
          fontFamily: 'TitilliumWeb-Bold',
        }}>
        Sign Up
      </Text>
      <View style={styles.form}>
        <FontAwesome5
          name="user-alt"
          style={styles.icon}
          size={32}
          color="#94A3B8"
        />
        <TextInput
          type="text"
          style={styles.input}
          placeholder="@username"
          placeholderTextColor={'#94A3B8'}
          onChangeText={text => setName(text)}></TextInput>
      </View>

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
          type="password"
          style={styles.input}
          placeholder="password"
          placeholderTextColor={'#94A3B8'}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}></TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={onRegister}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default Login;
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
    bottom: 60,
  },
  icon: {
    padding: 13,
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
    position: 'relative',
    bottom: 40,
  },
  button: {
    position: 'relative',
    bottom: 40,
    backgroundColor: '#E39FF6',
    padding: 14,
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
    // backgroundColor: 'blue',
  },
  lastText: {
    fontSize: 18,
    color: '#94A3B8',
  },
  signUpText: {
    fontSize: 18,
    color: '#3B82F6',
  },
});
