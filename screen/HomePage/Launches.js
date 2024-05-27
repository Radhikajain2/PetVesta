/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Launches = () => {
  const newlaunches = [
    {
      image: require('../../assets/Homeimages/launches1.png'),
      text: 'Pet Accessories',
      Rs: '₹475.00',
      View: 'View All',
    },
    {
      image: require('../../assets/Homeimages/launches2.png'),
      text: 'energy drinks for dogs',
      Rs: '₹475.00',
      View: 'View All',
    },
    {
      image: require('../../assets/Homeimages/launches2.png'),

      text: 'energy drinks for dogs',
      Rs: '₹475.00',
      View: 'View All',
    },
  ];
  return (
    <ScrollView horizontal>
      <View style={{flexDirection: 'row'}}>
        {newlaunches.map((launch, index) => (
          <View key={index} style={styles.launchContainer}>
            <Image source={launch.image} style={styles.launchImage} />
            <Text style={styles.launchText}>{launch.text}</Text>
            <Text style={styles.launchRs}>{launch.Rs}</Text>
            <Text style={styles.view}>{launch.View}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  launchContainer: {
    backgroundColor: '#F5F5F5',
    height: 203,
    marginLeft: 23,
    width: 145,
    borderRadius: 10,
    marginBottom: 50,
  },
  launchImage: {
    width: 135,
    height: 95,
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 9,
  },
  launchText: {
    marginLeft: 10,
    textTransform: 'capitalize',
    color: '#000000',
    fontSize: 14,
    lineHeight: 17.64,
    fontWeight: '500',
    marginTop: 10,
  },
  launchRs: {
    marginLeft: 10,
    marginTop: 6,
    fontWeight: '700',
    fontSize: 14,
    color: '#F39200',
  },
  view: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 15.73,
    marginLeft: 10,
    marginTop: 6,
    textDecorationLine: 'underline',
    color: '#222222',
  },
});
export default Launches;
