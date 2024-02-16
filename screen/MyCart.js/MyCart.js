import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import IncreaseDecreaseButton from '../../components/IncreaseDecreaseButton';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const MyCart = () => {
  const navigation = useNavigation();
  const itemList = useSelector(state => state.newSlice.itemList);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const newCartList = itemList.filter(items => items.qty > 0);
    setCart(newCartList);
  }, [itemList]);

  const totalItemsInCart = cart.reduce((total, item) => total + item.qty, 0);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    const itemPrice = item.ItemDetails.OfferRs;
    return total + item.qty * itemPrice;
  }, 0);

  //  totalAmmount
  const discount = 151;

  TotalAmmount = totalPrice - discount;
  return (
    <View style={{flex: 1}}>
      {cart.length === 0 ? (
        <View style={styles.CartImageContainer}>
          <Image
            source={require('../../assets/Homeimages/cart1.png')}
            style={styles.CartImage}
          />
          <Text style={styles.cartEmpty}>Your cart is empty!</Text>
          <Text style={styles.savedLater}>
            It's a good day to buy the items you saved for later
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}>
            <View style={styles.shopNowButton}>
              <Text style={{textTransform: 'uppercase', color: 'white'}}>
                Shop now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <ScrollView>
            {cart.map((item, index) => (
              <View key={index} style={styles.cartItem}>
                <View style={styles.itemImage}>
                  <Image source={item.image} />
                </View>
                <View style={{flex: 1}}>
                  <Text style={styles.itemName}>{item.ItemDetails.name}</Text>
                  <Text style={styles.ItemOfferRs}>
                    {item.ItemDetails.OfferRs}
                  </Text>
                  <View style={styles.IncreaseDecreaseButtonStyle}>
                    <IncreaseDecreaseButton value={item.qty} id={item.id} />
                  </View>
                </View>
              </View>
            ))}

            {/* Voucher Code */}
            <View>
              <View style={styles.VoucherContainer}>
                <Text style={styles.VoucherText}>Voucher Code</Text>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    placeholder="Code"
                    style={styles.VoucherInputText}
                    placeholderTextColor={'#C6C6C6'}
                  />
                  <TouchableOpacity>
                    <View style={styles.ApplyButtonContainer}>
                      <Text style={styles.ApplyButtonText}>Apply</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Price Detail */}

            <View>
              <View style={{marginLeft: 25, marginTop: 18}}>
                <Text style={styles.PriceDetailText}>Price Details</Text>
                {/* Price Text */}
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Text
                    style={
                      styles.priceText
                    }>{`Price (${totalItemsInCart} items)`}</Text>
                  <Text
                    style={[
                      styles.priceText,
                      {paddingLeft: 170},
                    ]}>{`₹${totalPrice}`}</Text>
                </View>

                {/* Discountr */}

                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Text style={styles.priceText}>Discount</Text>
                  <Text
                    style={[
                      styles.priceText,
                      {paddingLeft: 205, color: '#F39200'},
                    ]}>
                    -₹500
                  </Text>
                </View>
                {/* Buy More */}
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Text style={styles.priceText}>Buy more & save more</Text>
                  <Text style={[styles.priceText, {paddingLeft: 120}]}>
                    {`-₹${discount}`}
                  </Text>
                </View>

                {/* Delivery Charge */}
                <View style={styles.deliveryCharges}>
                  <Text style={styles.priceText}>Delivery Charges</Text>
                  <Text
                    style={[
                      styles.priceText,
                      {paddingLeft: 105, color: '#F39200', marginBottom: 15},
                    ]}>
                    FREE Delivery
                  </Text>
                </View>
              </View>

              {/* Total Amount  */}
              <View style={styles.totalAmountContainer}>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <Text style={styles.totalAmountText}>Total Amount</Text>
                  <Text style={[styles.totalAmountText, {paddingLeft: 170}]}>
                    {`₹${TotalAmmount}`}
                  </Text>
                </View>
              </View>

              {/* save */}
              <View style={{left: 23, marginTop: 10}}>
                <Text style={styles.save}>
                  You will save {`₹ ${discount}`} on this order
                </Text>
              </View>
            </View>
          </ScrollView>

          {/* Place Order */}
          <View style={[styles.placeOrderContainer, {flexDirection: 'row'}]}>
            <View style={{paddingLeft: 50}}>
              <Text
                style={styles.placeOrderTotalPrice}>{`₹${totalPrice}`}</Text>
              <Text style={styles.placeOrderAmount}>{`₹${TotalAmmount}`}</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddDeliveryAddress');
              }}>
              <View style={styles.placeOrderTextContainer}>
                <Text style={styles.placeOrderText}>Place Order</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImage: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F5F5F5',
    margin: 25,
  },
  itemName: {
    marginTop: 30,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17.64,
    color: '#000000',
    marginBottom: 10,
  },
  ItemOfferRs: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16.94,
    color: '#F39200',
    marginBottom: 3,
  },
  IncreaseDecreaseButtonStyle: {
    width: 85,
    right: 10,
    marginBottom: 5,
  },
  VoucherContainer: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 30,
    marginLeft: 18,
    backgroundColor: '#E0E0E0',
    width: 325,
    height: 115,
  },
  VoucherText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#222222',
    margin: 15,
  },
  VoucherInputText: {
    backgroundColor: 'white',
    width: 200,
    marginLeft: 10,
    borderRadius: 8,
    padding: 10,
  },
  ApplyButtonContainer: {
    backgroundColor: '#F39200',
    width: 100,
    height: 48,
    left: 8,

    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ApplyButtonText: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18.15,
    color: '#FFFFFF',
  },
  PriceDetailText: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 22.68,
    color: '#222222',
  },
  priceText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#222222',
    lineHeight: 17.64,
  },
  deliveryCharges: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#9b9b9b',
    width: 310,
  },
  totalAmountContainer: {
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#9b9b9b',
    marginTop: 20,
  },
  totalAmountText: {
    color: '#222222',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20.16,
  },
  save: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18.9,
    color: '#F39200',
    marginBottom: 14,
  },
  CartImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
  },
  CartImage: {
    tintColor: 'black',
    width: 90,
    height: 90,
    marginBottom: 30,
  },
  savedLater: {
    color: 'black',
    fontWeight: '500',
    fontSize: 13,
    marginBottom: 30,
  },
  cartEmpty: {
    fontWeight: '600',
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
  shopNowButton: {
    marginHorizontal: 15,
    backgroundColor: '#F39200',
    padding: 10,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeOrderContainer: {
    backgroundColor: '#FFFFFF',
    opacity: 1,
    shadowColor: 40,
  },
  placeOrderTotalPrice: {
    marginTop: 15,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17.64,
    color: '#666666',
    textDecorationLine: 'line-through',
    justifyContent: 'space-between',
  },
  placeOrderAmount: {
    marginTop: 5,
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 21.42,
    color: '#000000',
  },
  placeOrderTextContainer: {
    width: 150,
    backgroundColor: '#025363',
    marginLeft: 100,
    marginTop: 12,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  placeOrderText: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18.9,
    color: '#FFFFFF',
  },
});
export default MyCart;
