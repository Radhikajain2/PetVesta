import React, {useEffect} from 'react';
import {
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import ExperiencesData from '../../data/ExperiencesData';
import Launches from './Launches';
import MostOrdedProduct from '../../components/MostOrdedProduct';
import Carousel from './Carousel';
import Search from './Search';
import {useDispatch, useSelector} from 'react-redux';
import {itemList} from '../../redux/slice';

const PetData = ({navigation}) => {
  const exper = ExperiencesData;

  const cat = [
    {
      imageCat: require('../../assets/Homeimages/cat.png'),
    },
    {
      imageCat: require('../../assets/Homeimages/cat.png'),
    },
    {
      imageCat: require('../../assets/Homeimages/cat.png'),
    },
  ];

  const dog = [
    {
      imageDog: require('../../assets/Homeimages/dog2.png'),
    },
    {
      imageDog: require('../../assets/Homeimages/dog2.png'),
    },
    {
      imageDog: require('../../assets/Homeimages/dog2.png'),
    },
  ];

  const launches = [
    {
      id: 0,
      image: require('../../assets/Homeimages/mostordedproduct1.png'),
      text: 'Monge Fruit – Pate & Chunkies With Chicken',
      Rs: '475.00',
      qty: 0,
      name: 'Trending',
      ItemDetails: {
        name: 'Royal Canin(R) Feline Health Nutrition Indoor Adult Wet Cat Food - 3 oz can',
        OfferRs: '475.00',
        TotalCost: '675.00',
        off: '29% off',
        name1: 'For Dog',
        flavor: 'Vegetable',
        foodType: 'Dry',
        SuitableFor: 'Adult',
        life: '24 Months ',
        pack: '2',
        Description:
          'Active Adult Dry Dog Food is a complete and balanced nutrient-rich food, which enhances the physical performance of your pet. It is enriched with essential ingredients along with vitamins and minerals keeping your pet active and agile. Our each ingredient undergoes a thorough selection process in which quality, safety and nutritional values are checked.',
      },
    },
    {
      id: 1,
      image: require('../../assets/Homeimages/mostordedproduct2.png'),
      text: 'All4pets Special Pack Chunks In Gravy 400g',
      Rs: '475.00',
      qty: 0,
      name: 'Best Seller',
      ItemDetails: {
        name: 'Royal Canin(R) Feline Health Nutrition Indoor Adult Wet Cat Food - 3 oz can',
        OfferRs: '475.00',
        TotalCost: '675.00',
        off: '29% off',
        name1: 'For Dog',
        flavor: 'Vegetable',
        foodType: 'Dry',
        SuitableFor: 'Adult',
        life: '24 Months ',
        pack: '2',
        Description:
          'Active Adult Dry Dog Food is a complete and balanced nutrient-rich food, which enhances the physical performance of your pet. It is enriched with essential ingredients along with vitamins and minerals keeping your pet active and agile. Our each ingredient undergoes a thorough selection process in which quality, safety and nutritional values are checked.',
      },
    },
    {
      id: 2,
      image: require('../../assets/Homeimages/mostOrdedProduct3.png'),
      text: 'Monge Fruit – Pate & Chunkies With Chicken',
      Rs: '475.00',
      qty: 0,
      name: 'Best Seller',
      ItemDetails: {
        name: 'Royal Canin(R) Feline Health Nutrition Indoor Adult Wet Cat Food - 3 oz can',
        OfferRs: '475.00',
        TotalCost: '675.00',
        off: '29% off',
        name1: 'For Dog',
        flavor: 'Vegetable',
        foodType: 'Dry',
        SuitableFor: 'Adult',
        life: '24 Months ',
        pack: '2',
        Description:
          'Active Adult Dry Dog Food is a complete and balanced nutrient-rich food, which enhances the physical performance of your pet. It is enriched with essential ingredients along with vitamins and minerals keeping your pet active and agile. Our each ingredient undergoes a thorough selection process in which quality, safety and nutritional values are checked.',
      },
    },
    {
      id: 3,
      image: require('../../assets/ProductListing/Product4.png'),
      text: 'All4pets Special Pack Chunks In Gravy 400g',
      Rs: '475.00',
      qty: 0,
      name: 'Few Left',
      ItemDetails: {
        name: 'Royal Canin(R) Feline Health Nutrition Indoor Adult Wet Cat Food - 3 oz can',
        OfferRs: '475.00',
        TotalCost: '675.00',
        off: '29% off',
        name1: 'For Dog',
        flavor: 'Vegetable',
        foodType: 'Dry',
        SuitableFor: 'Adult',
        life: '24 Months ',
        pack: '2',
        Description:
          'Active Adult Dry Dog Food is a complete and balanced nutrient-rich food, which enhances the physical performance of your pet. It is enriched with essential ingredients along with vitamins and minerals keeping your pet active and agile. Our each ingredient undergoes a thorough selection process in which quality, safety and nutritional values are checked.',
      },
    },
    {
      id: 4,
      image: require('../../assets/ProductListing/Product5.png'),
      text: 'Monge Fruit – Pate & Chunkies With Chicken',
      Rs: '475.00',
      qty: 0,
      ItemDetails: {
        name: 'Royal Canin(R) Feline Health Nutrition Indoor Adult Wet Cat Food - 3 oz can',
        OfferRs: '475.00',
        TotalCost: '675.00',
        off: '29% off',
        name1: 'For Dog',
        flavor: 'Vegetable',
        foodType: 'Dry',
        SuitableFor: 'Adult',
        life: '24 Months ',
        pack: '2',
        Description:
          'Active Adult Dry Dog Food is a complete and balanced nutrient-rich food, which enhances the physical performance of your pet. It is enriched with essential ingredients along with vitamins and minerals keeping your pet active and agile. Our each ingredient undergoes a thorough selection process in which quality, safety and nutritional values are checked.',
      },
    },
    {
      id: 5,
      image: require('../../assets/ProductListing/Product6.png'),
      text: 'All4pets Special Pack Chunks In Gravy 400g',
      Rs: '475.00',
      qty: 0,
      ItemDetails: {
        name: 'Royal Canin(R) Feline Health Nutrition Indoor Adult Wet Cat Food - 3 oz can',
        OfferRs: '475.00',
        TotalCost: '675.00',
        off: '29% off',
        name1: 'For Dog',
        flavor: 'Vegetable',
        foodType: 'Dry',
        SuitableFor: 'Adult',
        life: '24 Months ',
        pack: '2',
        Description:
          'Active Adult Dry Dog Food is a complete and balanced nutrient-rich food, which enhances the physical performance of your pet. It is enriched with essential ingredients along with vitamins and minerals keeping your pet active and agile. Our each ingredient undergoes a thorough selection process in which quality, safety and nutritional values are checked.',
      },
    },
    {
      id: 6,
      image: require('../../assets/ProductListing/Product4.png'),
      text: 'Monge Fruit – Pate & Chunkies With Chicken',
      Rs: '475.00',
      qty: 0,
      ItemDetails: {
        name: 'Royal Canin(R) Feline Health Nutrition Indoor Adult Wet Cat Food - 3 oz can',
        OfferRs: '475.00',
        TotalCost: '675.00',
        off: '29% off',
        name1: 'For Dog',
        flavor: 'Vegetable',
        foodType: 'Dry',
        SuitableFor: 'Adult',
        life: '24 Months ',
        pack: '2',
        Description:
          'Active Adult Dry Dog Food is a complete and balanced nutrient-rich food, which enhances the physical performance of your pet. It is enriched with essential ingredients along with vitamins and minerals keeping your pet active and agile. Our each ingredient undergoes a thorough selection process in which quality, safety and nutritional values are checked.',
      },
    },
    {
      id: 7,
      image: require('../../assets/Homeimages/mostOrdedProduct3.png'),
      text: 'All4pets Special Pack Chunks In Gravy 400g',
      Rs: '475.00',
      name: 'Best Seller',
      qty: 0,
      ItemDetails: {
        name: 'Royal Canin(R) Feline Health Nutrition Indoor Adult Wet Cat Food - 3 oz can',
        OfferRs: '475.00',
        TotalCost: '675.00',
        off: '29% off',
        name1: 'For Dog',
        flavor: 'Vegetable',
        foodType: 'Dry',
        SuitableFor: 'Adult',
        life: '24 Months ',
        pack: '2',
        Description:
          'Active Adult Dry Dog Food is a complete and balanced nutrient-rich food, which enhances the physical performance of your pet. It is enriched with essential ingredients along with vitamins and minerals keeping your pet active and agile. Our each ingredient undergoes a thorough selection process in which quality, safety and nutritional values are checked.',
      },
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemList(launches));
  }, []);
  const data = useSelector(state => state.newSlice.itemList);

  const handleProductClick = product => {
    navigation.navigate('ProductDetail', {id: product.id});
  };
  return (
    <View>
      {/* Scrollbar */}
      <Carousel />
      {/* Searchbar */}
      <Search />

      {/* Pet Service */}
      <View style={styles.petContainer}>
        <View style={styles.serviContainer}>
          <Image
            source={require('../../assets/Homeimages/dogService.png')}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceProductText}>Pet Services</Text>
        </View>

        <TouchableOpacity
          style={styles.productContainer}
          onPress={() => {
            navigation.navigate('ProductListing');
          }}>
          <Image
            source={require('../../assets/Homeimages/PetProduct.png')}
            style={styles.productImge}
          />
          <Text style={styles.serviceProductText}>Pet Products</Text>
        </TouchableOpacity>
      </View>

      {/* Finest Experiences */}

      <View>
        <Text style={styles.ThoughtfulCuration}>Thoughtful Curations</Text>
        <Text style={styles.finestExperiences}>Of our finest experiences</Text>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {exper.map((images, index) => (
              <ImageBackground
                key={index}
                source={images.image}
                style={styles.experiencesImage}>
                <View style={styles.overlay}>
                  <Text style={[styles.experiencesText]}>{images.text}</Text>
                </View>
              </ImageBackground>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Carosel */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cat.map((item, index) => (
          <Image
            key={index}
            source={item.imageCat}
            style={styles.catImageCarousel}
          />
        ))}
      </ScrollView>

      {/* New Launches */}
      <View>
        <Text style={styles.launchesText}>New Launches</Text>
        <Launches />
      </View>

      {/* Category For Dogs */}
      <View
        style={[
          styles.dogCategoryContainer,
          {backgroundColor: '#025363', marginBottom: 30},
        ]}>
        <View style={{flexDirection: 'row', margin: 20}}>
          <Text style={[styles.dogCategoryText, {color: '#FFFFFF'}]}>
            Category For Dog's
          </Text>
          <Image
            source={require('../../assets/Homeimages/rightarrow.png')}
            style={{marginHorizontal: 125, margin: 1}}
          />
        </View>
        <Launches />
      </View>

      {/* Category For cats */}
      <View style={[styles.dogCategoryContainer, {marginBottom: 10}]}>
        <View style={{flexDirection: 'row', margin: 20}}>
          <Text style={[styles.dogCategoryText, {color: '#222222'}]}>
            Category For Cat's
          </Text>
          <Image
            source={require('../../assets/Homeimages/rightarrow.png')}
            style={{marginHorizontal: 125, margin: 1, tintColor: '#222222'}}
          />
        </View>
        <Launches />
      </View>

      {/*Dog Carosel */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dog.map((item, index) => (
          <Image
            key={index}
            source={item.imageDog}
            style={styles.dogCarousal}
          />
        ))}
      </ScrollView>

      {/* Most Orderd Product */}
      <View>
        <Text style={styles.MostOrdedProductText}>Most Ordered Products</Text>

        <ScrollView horizontal>
          {data.slice(0, 3).map((launch, index) => {
            return (
              <TouchableOpacity
                onPress={() => handleProductClick(launch)}
                key={index}>
                <MostOrdedProduct
                  launch={launch}
                  showName={index % 1 === 0 && launch.name !== undefined}
                  key={index}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: 345,
    height: 160,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 30,
    marginLeft: 15,
    marginBottom: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 25.2,
    top: 35,
  },
  petContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  serviContainer: {
    width: 165,
    height: 165,
    backgroundColor: '#E4FBFF',
    borderRadius: 12,
    left: 10,
  },
  serviceImage: {
    width: 70,
    height: 62.18,
    alignSelf: 'center',
    marginBottom: 15,
    marginVertical: 35,
  },
  serviceProductText: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18.9,
    color: '#222222',
    alignSelf: 'center',
  },
  productContainer: {
    width: 165,
    height: 165,
    backgroundColor: '#FFF2DE',
    borderRadius: 12,
    right: 10,
  },
  productImge: {
    width: 45,
    height: 67.5,
    alignSelf: 'center',
    marginBottom: 15,
    marginVertical: 35,
  },
  ThoughtfulCuration: {
    color: '#222222',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 23,
    height: 25,
    marginTop: 20,
    marginBottom: 3,
  },
  finestExperiences: {
    color: '#222222',
    marginLeft: 24,
    fontWeight: '300',
    fontSize: 16,
  },
  experiencesImage: {
    height: 230,
    width: 145,
    borderRadius: 10,
    top: 10,
    overflow: 'hidden',
    justifyContent: 'space-evenly',
    margin: 9,
  },
  experiencesText: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 25.2,
    textTransform: 'capitalize',
    top: 75,
  },
  catImageCarousel: {
    width: 345,
    height: 160,
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 15,
  },
  launchesText: {
    height: 25,
    margin: 20,
    fontWeight: '500',
    fontSize: 20,
    color: '#222222',
    marginLeft: 23,
  },
  dogCategoryContainer: {
    height: 290,
  },
  dogCategoryText: {
    height: 25,
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 25.2,
  },
  dogCarousal: {
    width: 345,
    height: 160,
    borderRadius: 10,
    marginLeft: 15,
    marginBottom: 30,
  },
  MostOrdedProductText: {
    marginLeft: 28,
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 25.2,
    color: '#222222',
    marginBottom: 23,
  },
});

export default PetData;
