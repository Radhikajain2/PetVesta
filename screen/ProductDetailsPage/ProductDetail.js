/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ProgressBar from './ProgressBar';
import {useNavigation} from '@react-navigation/native';
import IncreaseDecreaseButton from '../../components/IncreaseDecreaseButton';
import {useDispatch, useSelector} from 'react-redux';
import {increment} from '../../redux/slice';

const ProductDetail = ({route}) => {
  const navigation = useNavigation();
  const {id} = route.params; // Get product details from navigation params
  const [cart, setCart] = useState([]);
  const productList = useSelector(state => state.newSlice.itemList);
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    if (productList.length !== 0) {
      const product = productList.find(item => item.id === id);
      setProduct(product);
    }
  }, [productList]);

  const handleAddToCart = () => {
    // Assuming product is not null and has the necessary details
    const updatedCart = [...cart, {...product, qty: 1}];
    setCart(updatedCart);
    dispatch(increment(product.id));
    // navigation.navigate('MyCart');
  };

  const handleButNow = () => {
    if (product.qty > 0) {
      navigation.navigate('MyCart');
    }
  };
  return (
    <>
      {product !== null ? (
        <ScrollView>
          {/* Image Part */}
          <View style={{marginBottom: 30}}>
            <View style={styles.container}>
              <Image source={product.image} style={styles.image} />
            </View>
            <Text style={styles.nameText}>{product.ItemDetails.name}</Text>
            <View style={{flexDirection: 'row', left: 15}}>
              <Text style={styles.offerRs}>₹{product.ItemDetails.OfferRs}</Text>
              <Text style={styles.totalCost}>
                ₹{product.ItemDetails.TotalCost}
              </Text>
              <Text style={styles.off}>₹{product.ItemDetails.off}</Text>
            </View>
          </View>

          {/* quantity */}

          <View style={{flexDirection: 'row', paddingBottom: 15}}>
            {product.qty === 0 ? (
              <TouchableOpacity onPress={handleAddToCart}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.addtoCartText}>Add to Cart</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <View style={{flexDirection: 'row', left: 15}}>
                <Text style={styles.quantityText}>Quantity</Text>
                <IncreaseDecreaseButton value={product.qty} id={product.id} />
              </View>
            )}

            {/* Buy Now Button */}
            <TouchableOpacity
              onPress={product.qty > 0 ? handleButNow : null}
              disabled={product.qty === 0}>
              <View
                style={[
                  styles.buttonContainer,
                  {
                    marginHorizontal: 15,
                    backgroundColor: product.qty > 0 ? '#025363' : '#CCCCCC',
                  },
                ]}>
                <Text style={styles.addtoCartText}>Buy Now</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* line */}
          <View
            style={{
              borderColor: '#D9D9D9',
              borderWidth: 0.5,
              borderRadius: 1,
              top: 20,
            }}
          />

          {/* HighLights */}

          <View>
            <Text style={[styles.highlightText, {marginBottom: 50}]}>
              Highlights
            </Text>
            <View style={{flexDirection: 'row', left: 23, flexWrap: 'wrap'}}>
              <Text style={styles.name1}>{product.ItemDetails.name1}</Text>
              <Text style={styles.flavor}>
                Flavor: {product.ItemDetails.flavor}
              </Text>
              <Text style={[styles.name1, {marginTop: 4}]}>
                Food Type: {product.ItemDetails.foodType}
              </Text>
              <Text style={[styles.flavor, {marginTop: 4, paddingLeft: 107}]}>
                Suitable For: {product.ItemDetails.SuitableFor}
              </Text>

              <Text style={[styles.name1, {marginTop: 4, paddingBottom: 25}]}>
                Shelf Life: {product.ItemDetails.life}
              </Text>
              <Text style={[styles.flavor, {marginTop: 4, paddingLeft: 67}]}>
                Pack of: {product.ItemDetails.pack}
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={styles.Description}>Description</Text>
              <Text style={styles.descriptionText}>
                {product.ItemDetails.Description}
              </Text>
            </View>
          </View>

          {/* line */}
          <View
            style={{
              borderColor: '#D9D9D9',
              borderWidth: 0.5,
              borderRadius: 1,
              top: 20,
              marginBottom: 40,
            }}
          />
          {/* Ratings And reviews */}
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.reviewAndRate}> Ratings and reviews</Text>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/Forword.png')}
                  style={{marginTop: 3, marginLeft: 150}}
                />
              </TouchableOpacity>
            </View>
            <ProgressBar />
          </View>
        </ScrollView>
      ) : (
        <View>
          <Text>hello</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', 
    marginBottom: 30,
  },
  nameText: {
    left: 15,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#222222',
    paddingBottom: 15,
  },
  offerRs: {
    color: '#F39200',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24.2,
    marginRight: 13,
  },
  totalCost: {
    color: '#999999',
    marginRight: 13,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 24.2,
    textDecorationLine: 'line-through',
  },
  off: {
    color: '#3F7805',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 24.2,
  },
  buttonContainer: {
    backgroundColor: 'orange',
    width: 150,
    height: 45,
    left: 21,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addtoCartText: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18.15,
    color: '#FFFFFF',
  },
  highlightText: {
    top: 40,
    left: 23,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 20.88,
    color: '#222222',
  },
  name1: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24.5,
    color: '#222222',
  },
  flavor: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24.5,
    color: '#222222',
    paddingLeft: 150,
  },
  Description: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 20.88,
    color: '#222222',
    marginBottom: 15,
    left: 24,
  },
  descriptionText: {
    color: '#000000',
    fontWeight: '300',
    lineHeight: 17.57,
    fontSize: 14,
    textTransform: 'capitalize',
    marginLeft: 20,
  },
  reviewAndRate: {
    left: 24,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22.68,
    marginBottom: 20,
    color: '#222222',
  },
  quantityText: {
    marginLeft: 3,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18.9,
    color: '#000000',
    marginTop: 15,
  },
});

export default ProductDetail;
