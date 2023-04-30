import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import Lottie from 'lottie-react-native';
import {ScrollView} from 'react-native-gesture-handler';
const ShowTask = ({user}) => {
  const [kaam, setKaam] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleDelete = element => {
    firestore()
      .collection('Task')
      .doc(user.uid)
      .collection('Work')
      .doc(element.id)
      .delete()
      .then(() => {
        console.log('User deleted!');
      });
  };
  const getTweets = async () => {
    try {
      setLoading(true);
      //   const querySnap = await firestore()
      //     .collection('Task')
      //     .doc(user.uid)
      //     .collection('Work')
      //     .get();

      //   let cards = [];
      //   querySnap._docs.forEach(element => {
      //     console.log(element);
      //     cards.push(element._data);
      //   });
      firestore()
        .collection('Task')
        .doc(user.uid)
        .collection('Work')
        .onSnapshot(query => {
          let data = [];
          query.forEach(documentSnapshot => {
            data.push({...documentSnapshot.data(), id: documentSnapshot.id});
          });
          setKaam(data);
          setLoading(false);
        });
    } catch (e) {}
  };

  useEffect(() => {
    getTweets();
    console.log(kaam);
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
            marginLeft: 20,
            fontSize: 37,
            fontFamily: 'TitilliumWeb-Bold',
          }}>
          Your Tasks 📝 📝
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
              }}
              onLongPress={() => {
                Alert.alert(
                  'Do you want to delete the Task ?',
                  ' ',
                  [
                    {
                      text: 'Yes',
                      onPress: () => handleDelete(element),
                    },

                    {
                      text: 'No',
                      onPress: () => console.log('No button clicked'),
                      style: 'cancel',
                    },
                  ],
                  {
                    cancelable: true,
                  },
                );
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
                    fontSize: 25,

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
                    marginLeft: 30,
                    marginTop: 50,
                    fontSize: 22,

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
