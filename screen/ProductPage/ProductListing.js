import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MostOrdedProduct from '../../components/MostOrdedProduct';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ProductListing = () => {
  const navigation = useNavigation();
  const launches = useSelector(state => state.newSlice.itemList);

  const [selectedOption, setSelectedOption] = useState('CatFood');

  const handleOptionClick = option => {
    setSelectedOption(option);
  };
  // ProductDetail navigation
  const handleProductClick = product => {
    navigation.navigate('ProductDetail', {id: product.id});
  };

  const renderProductOption = (option, text, imageSource) => (
    <TouchableOpacity
      key={option}
      onPress={() => handleOptionClick(option)}
      style={[
        styles.productOption,
        {
          marginLeft: 8,
          backgroundColor: selectedOption === option ? '#F39200' : '#ECECEC',
        },
      ]}>
      <Image source={imageSource} style={{marginLeft: 5, marginTop: 2}} />
      <Text
        style={[
          styles.productOptionText,
          {color: selectedOption === option ? '#FFFFFF' : '#222222'},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      {/* Search Products */}
      <View style={{backgroundColor: '#F39200', height: 85}}>
        <View style={[styles.rowContainer, {marginTop: 15}]}>
          <View style={[styles.searchBarContainer, {backgroundColor: 'white'}]}>
            <Image
              source={require('../../assets/Homeimages/search.png')}
              style={{tintColor: 'black'}}
            />
            <TextInput
              placeholder="Search Products"
              style={[styles.textInput]}
            />
          </View>
          <View style={styles.settingIcon}>
            <Image
              source={require('../../assets/Homeimages/setting-5.png')}
              style={{alignSelf: 'center', height: 30}}
            />
          </View>
        </View>
      </View>

      {/*Products Option*/}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderProductOption(
          'CatFood',
          'Cat Food',
          require('../../assets/ProductListing/CatFood.png'),
        )}
        {renderProductOption(
          'DogFood',
          'Dog Food',
          require('../../assets/ProductListing/DogFood.png'),
        )}
        {renderProductOption(
          'PetBeds',
          'PET BEDS',
          require('../../assets/ProductListing/PetBeds.png'),
        )}
      </ScrollView>

      {/* Product List */}
      <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingTop: 15}}>
        {launches.map((launch, index) => (
          <TouchableOpacity
            onPress={() => handleProductClick(launch)} // Handle click event
            key={index}>
            <MostOrdedProduct
              launch={launch}
              showName={index % 1 === 0 && launch.name !== undefined}
              key={index}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#BCBCBC',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontWeight: '400',
    fontSize: 14,
    color: '#C6C6C6',
    left: 10,
  },
  settingIcon: {
    backgroundColor: '#025363',
    borderRadius: 10,
    width: 50,
    height: 52,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productOption: {
    marginLeft: 20,
    width: 140,
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ECECEC',
    backgroundColor: '#F39200',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productOptionText: {
    color: '#FFFFFF',
    fontSize: 15,
    marginLeft: 10,
    fontWeight: '500',
    lineHeight: 18.15,
  },
});

export default ProductListing;
