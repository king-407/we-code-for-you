import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import Lottie from 'lottie-react-native';
import {ScrollView} from 'react-native-gesture-handler';
const ShowTask = ({user}) => {
  const [kaam, setKaam] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTweets = async () => {
    try {
      setLoading(true);
      const querySnap = await firestore()
        .collection('Task')
        .doc(user.uid)
        .collection('Work')
        .get();

      let cards = [];
      querySnap._docs.forEach(element => {
        cards.push(element._data);
      });
      setKaam(cards);
      setLoading(false);
    } catch (e) {}
  };
  useEffect(() => {
    getTweets();
  }, []);
  if (loading) {
    return <Lottie source={require('../Animations/loader.json')} autoPlay />;
  }

  return (
    <ScrollView>
      <View>
        <Text
          style={{
            color: 'black',
            marginTop: 50,
            marginLeft: 10,
            fontSize: 37,
            fontFamily: 'TitilliumWeb-Bold',
          }}>
          Your Tasks
        </Text>
      </View>
      <View style={{marginTop: 40}}>
        {kaam.map(element => {
          return (
            <TouchableOpacity
              key={element.work}
              style={{
                marginTop: 40,
                height: 170,
                width: 350,
                backgroundColor: 'white',
                borderRadius: 35,

                elevation: 10,

                alignSelf: 'center',
                // flexDirection: 'row',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Image
                  style={{marginLeft: 30}}
                  source={require('../Images/work.png')}
                />
                <Text
                  style={{
                    marginLeft: 50,
                    marginTop: 25,
                    fontSize: 30,

                    color: 'black',
                    fontFamily: 'TitilliumWeb-Bold',
                  }}>
                  {element.work}
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  //   alignItems: 'center',
                  //   justifyItems: 'center',
                }}>
                <Image
                  style={{marginLeft: 30, marginTop: 20, padding: 10}}
                  source={require('../Images/clock.png')}
                />
                <Text
                  style={{
                    marginLeft: 50,
                    marginTop: 50,
                    fontSize: 25,

                    fontFamily: 'TitilliumWeb-Bold',
                    color: 'black',
                  }}>
                  {element.time}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ShowTask;
