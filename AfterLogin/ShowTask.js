import {View, Text, TouchableOpacity} from 'react-native';
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
            marginTop: 30,
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
                marginTop: 10,
                height: 150,
                width: 350,
                backgroundColor: '#FFF2FD',
                borderRadius: 35,

                elevation: 10,

                alignSelf: 'center',
                // flexDirection: 'row',
              }}>
              <View>
                <Text
                  style={{
                    marginLeft: 20,
                    marginTop: 20,
                    fontSize: 20,

                    fontFamily: 'TiltWarp-Regular',
                    color: 'black',
                  }}>
                  {element.work}
                </Text>
                <Text
                  style={{
                    marginLeft: 270,
                    marginTop: 47,
                    fontSize: 17,

                    fontWeight: '500',
                    color: 'black',
                    fontFamily: 'TiltWarp-Regular',
                  }}>
                  - {element.time}
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
