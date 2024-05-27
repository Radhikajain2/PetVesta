/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';

const Search = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSearchPress = () => {
    // Toggle the visibility of the search bar
    setIsSearchBarVisible(!isSearchBarVisible);
    modalHandle();
  };

  const modalHandle = () => {
    setIsModalVisible(!isModalVisible);
    updateStatusBarColor(!isModalVisible);
  };

  const updateStatusBarColor = isModalVisible => {
    // Change status bar color based on modal visibility
    const statusBarColor = isModalVisible ? 'white' : '#F39200';
    const statusBarStyle = isModalVisible ? 'dark-content' : 'light-content';
    StatusBar.setBackgroundColor(statusBarColor);
    StatusBar.setBarStyle(statusBarStyle);
  };

  return (
    <TouchableOpacity
      // activeOpacity={0.8} // Adjust the opacity as needed
      onPress={handleSearchPress}>
      <View style={styles.rowContainer}>
        <View style={styles.searchBarContainer}>
          <Image
            source={require('../../assets/Homeimages/search.png')}
            style={{tintColor: 'black'}}
          />
          <Text style={styles.textInput}>Search</Text>
        </View>
        <View style={[styles.settingIcon, {marginTop: 9}]}>
          <Image
            source={require('../../assets/Homeimages/setting-5.png')}
            style={{alignSelf: 'center', height: 30}}
          />
        </View>
      </View>

      {isSearchBarVisible && (
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={handleSearchPress}>
          <View style={styles.modalContainer}>
            <View style={styles.rowContainer}>
              <View style={styles.searchBarContainer}>
                <Image
                  source={require('../../assets/Homeimages/search.png')}
                  style={{tintColor: 'black'}}
                />
                <TextInput style={styles.textInput} placeholder="Search" />
              </View>
              <View style={[styles.settingIcon, {marginTop: 9}]}>
                <Image
                  source={require('../../assets/Homeimages/setting-5.png')}
                  style={{alignSelf: 'center', height: 30}}
                />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </TouchableOpacity>
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
    marginTop: 10, 
  },
  textInput: {
    flex: 1,
    fontWeight: '600',
    fontSize: 16,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Search;
