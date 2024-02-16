import React from 'react';
import {View, Text, ProgressBarAndroid, StyleSheet} from 'react-native';

const ProgressBar = ({ratings}) => {
  const fixedRatingValue = 4.5; 
  const renderProgressBars = () => {
    const bars = [];
    for (let i = 1; i <= 5; i++) {
      bars.push(
        <View key={i} style={styles.ratingRow}>
          <Text style={styles.ratingText}>{i}</Text>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            // Replace this line inside the renderProgressBars function
            progress={(fixedRatingValue <= i ? 1 : fixedRatingValue % 1) || 0}
            // color="#EBEBEB"
            color="#F39200"
            style={styles.progressBar}
          />
        </View>,
      );
    }
    return bars.reverse();
  };

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingNumber}>{ratings}</Text>
        
        <Text style={styles.totalRatingText}>Total Ratings</Text>
      </View>
      <View style={styles.progressContainer}>{renderProgressBars()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  ratingContainer: {
    alignItems: 'center',
  },
  ratingNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  totalRatingText: {
    fontSize: 14,
    color: 'gray',
  },
  progressContainer: {
    flex: 1,
    marginLeft: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    marginRight: 10,
    minWidth: 30,
    textAlign: 'right',
    color: '#000000',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17.64,
  },
  progressBar: {
    flex: 1,

    borderRadius: 10,
    width: 50,
  },
});

export default ProgressBar;





