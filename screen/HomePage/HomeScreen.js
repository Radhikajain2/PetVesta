import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import PetData from './PetData';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#F39200',
        }}>
        <Text style={styles.hellotext}>Hello, </Text>
        <Text style={styles.davidtext}>David</Text>
      </View>
      <View style={styles.newyorkContainer}>
        <Image
          source={require('../../assets/Homeimages/location.png')}
          style={{left: 20, marginTop: 10}}
        />

        <Text style={styles.newyork}>
          B-1002, tower 2, plumeria, new yor...
          <Image source={require('../../assets/Homeimages/arrow.png')} />
        </Text>
        <View style={{marginHorizontal: 55, marginBottom: 8}}>
          <Image
            source={require('../../assets/Homeimages/person.png')}
            style={{height: 43, width: 48}}
          />
        </View>
      </View>

      {/* pet */}
      <PetData navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  hellotext: {
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 21.42,
    color: '#FFFFFF',
    marginLeft: 23,
    marginTop: 10,
  },
  davidtext: {
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 21.42,
    color: '#FFFFFF',
    marginTop: 10,
  },
  newyorkContainer: {
    backgroundColor: '#F39200',
    flexDirection: 'row',
  },
  newyork: {
    fontWeight: '400',
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 17.64,
    left: 25,
    marginTop: 10,
  },
});

export default HomeScreen;
