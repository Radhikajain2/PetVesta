import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StatusBar, View, Text, TouchableOpacity} from 'react-native';
import ProductListing from './screen/ProductPage/ProductListing';
import ProductDetail from './screen/ProductDetailsPage/ProductDetail';
import HomeScreen from './screen/HomePage/HomeScreen';
import AddDeliveryAddress from './screen/DeliveryPage/AddDeliveryAddres';
import MyCart from './screen/MyCart.js/MyCart';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomHeader = ({title, navigation, headerStyle}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F39200',
        justifyContent: 'center',
        padding: 10,
        ...headerStyle,
      }}>
      <Text style={{color: '#FFFFFF', fontSize: 18, top: 6, marginBottom: 7}}>
        {title}
      </Text>
      <View style={{left: 120}}>
        <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
          <Image source={require('./assets/Homeimages/cart1.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#F39200',
        tabBarInactiveTintColor: '#222222',
        tabBarLabelStyle: {
          fontWeight: '400',
          fontSize: 13,
          lineHeight: 16.38,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({navigation}) => ({
          header: () => <CustomHeader title="Home" navigation={navigation} />,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={require('./assets/homeicon.png')}
                  style={{
                    marginTop: 10,
                    marginBottom: 5,
                    width: 20,
                    height: 20,
                    tintColor: focused ? '#F39200' : '#222222',
                  }}
                />
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="ProductListing"
        component={ProductListing}
        options={({navigation}) => ({
          header: () => (
            <CustomHeader
              title="Product Listing"
              navigation={navigation}
              headerStyle={{
                paddingRight: 60,
              }}
            />
          ),

          tabBarLabel: 'Products',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={require('./assets/producticon.png')}
                  style={{
                    marginTop: 10,
                    marginBottom: 5,
                    // width: 20,
                    // height: 20,
                    tintColor: focused ? '#F39200' : '#222222',
                  }}
                />
              </View>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  StatusBar.setBackgroundColor('#F39200');

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F39200',
          },
          headerTintColor: '#FFFFFF',
        }}>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={({navigation}) => ({
            title: 'Product Details',
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
                <Image
                  source={require('./assets/Homeimages/cart1.png')}
                  style={{bottom: 5}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{
            title: 'My Cart',
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name="AddDeliveryAddress"
          component={AddDeliveryAddress}
          options={{
            title: 'Add Delivery Address',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
