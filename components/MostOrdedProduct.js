import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import IncreaseDecreaseButton from './IncreaseDecreaseButton';

const MostOrdedProduct = ({launch, showName}) => {
  return (
    <View style={styles.launchContainer}>
      <View style={styles.launchImageContainer}>
        <Image source={launch.image} style={styles.launchImage} />
        {showName && (
          <View style={styles.nameContainer}>
            <Text style={styles.launchName}>{launch.name}</Text>
          </View>
        )}
      </View>
      <Text style={styles.launchText}>{launch.text}</Text>
      <View style={{flexDirection: 'row', top: 3}}>
        <Text style={styles.launchRs}>₹{launch.Rs}</Text>
        {/* Add your IncreaseDecreaseButton here */}
        <IncreaseDecreaseButton value={launch.qty} id={launch.id} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameContainer: {
    position: 'absolute',
    left: 5,
    right: 0,
    backgroundColor: '#025363',
    width: 71,
    height: 21,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23,
    top: 71,
  },
  launchName: {
    color: 'white',
    fontSize: 11,
    lineHeight: 12.89,
    fontWeight: '400',
  },
  launchContainer: {
    backgroundColor: '#F5F5F5',
    height: 217,
    marginLeft: 23,
    width: 140,
    borderRadius: 10,
    marginBottom: 40,
    marginTop: 9,
  },
  launchImageContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  launchImage: {
    backgroundColor: 'white',
    borderRadius: 9,
    margin: 4,
    resizeMode: 'contain',
  },
  launchText: {
    marginLeft: 10,
    textTransform: 'capitalize',
    color: '#000000',
    fontSize: 15,
    lineHeight: 17.64,
    fontWeight: '400',
    marginTop: 9,
  },
  launchRs: {
    marginLeft: 10,
    marginTop: 6,
    fontWeight: '700',
    fontSize: 14,
    color: '#F39200',
  },
  cartImage: {
    marginLeft: 47,
    width: 35,
    height: 35,
  },
});

export default MostOrdedProduct;
