import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Register from './Auth/Register';
import Login from './Auth/Login';
import auth from '@react-native-firebase/auth';
import Splash from './fun/Splash';
import onboarding from './fun/onBoarding';
import Home from './AfterLogin/Home';
import Enter from './AfterLogin/Enter';
import ShowTask from './AfterLogin/ShowTask';
const App = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unregister = auth().onAuthStateChanged(exist => {
      if (exist) setUser(exist);
      else setUser(null);
    });

    return () => {
      unregister();
    };
  }, [user]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user ? (
          <>
            <Stack.Screen name="Enter">
              {props => <Enter {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name="ShowTask">
              {props => <ShowTask {...props} user={user} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            {splash ? <Stack.Screen name="Splash" component={Splash} /> : null}
            <Stack.Screen name="onBoarding" component={onboarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
