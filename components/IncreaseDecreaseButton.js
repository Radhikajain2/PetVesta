import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {decrement, increment} from '../redux/slice';

const IncreaseDecreaseButton = ({value, id}) => {
  const [showButtons, setShowButtons] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowButtons(value > 0);
  }, [value]);

  const handleCartPress = () => {
    setShowButtons(!showButtons);
  };

  const handleDecrement = () => {
    if (value > 0) {
      dispatch(decrement(id));
    }
  };

  const handleIncrement = () => {
    dispatch(increment(id));
  };

  if (!showButtons) {
    return (
      <TouchableOpacity
        onPress={handleIncrement}>
        <Image
          source={require('../assets/Homeimages/cart.png')}
          style={styles.cartImage}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleDecrement}>
        <Text style={{color: '#292D32'}}>-</Text>
      </TouchableOpacity>
      <Text style={styles.countStyle}>{value}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleIncrement}>
        <Text style={{color: '#292D32'}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F39200',
    borderRadius: 6,
    margin: 9,
  },
  button: {
    padding: 6,
    marginLeft: 7,
  },
  cartImage: {
    width: 35,
    height: 35,
    marginLeft: 47,
    marginBottom: 9,
  },
  countStyle: {
    color: '#000000',
    marginLeft: 6,
    fontWeight: '400',
    fontSize: 14,
  },
});

export default IncreaseDecreaseButton;
