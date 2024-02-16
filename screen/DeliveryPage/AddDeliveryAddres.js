import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
  Modal,
  Alert,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useForm, Controller} from 'react-hook-form';

const AddDeliveryAddress = () => {
  // logic for switch button
  const [selectedAddressType, setSelectedAddressType] = useState('home');

  const handleAddressTypeChange = type => {
    setSelectedAddressType(type);
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // logic for calendar
  const [selectedDate, setSelectedDate] = useState('');
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const handleDayPress = day => {
    setSelectedDate(day.dateString);
    toggleCalendarVisibility();
  };

  const toggleCalendarVisibility = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  // Validation
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  const onSubmit = () => {
    Alert.alert('Thank You', 'Your form has been submitted successfully!', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  return (
    <ScrollView>
      <View style={styles.columnContainer}>
        <View>
          <View style={styles.circle}>
            <Text style={styles.text}>1</Text>
            <View style={styles.line} />
          </View>

          <Text style={styles.addressText}>Address</Text>
        </View>

        <View style={{marginLeft: 59}}>
          <View
            style={[
              styles.circle,
              {backgroundColor: '#FFFFFF', borderWidth: 1},
            ]}>
            <Text style={[styles.text, {color: 'black'}]}>2</Text>
            <View style={styles.line} />
          </View>

          <Text style={[styles.addressText, {marginLeft: 5}]}>
            Order Summery
          </Text>
        </View>

        <View style={{marginLeft: 19}}>
          <View
            style={[
              styles.circle,
              {backgroundColor: '#FFFFFF', borderWidth: 1},
            ]}>
            <Text style={[styles.text, {color: 'black'}]}>3</Text>
          </View>

          <Text style={[styles.addressText, {marginLeft: 20}]}>Payment</Text>
        </View>
      </View>

      {/* Line */}

      <View
        style={{
          borderColor: '#D9D9D9',
          borderWidth: 0.5,
          borderRadius: 1,
          top: 20,
        }}
      />

      {/* Delivery Form */}
      <View style={{marginTop: 45, marginLeft: 30}}>
        {/* Full name */}
        <View>
          <Text style={styles.textinputText}>Full Name*</Text>

          <Controller
            control={control}
            render={({field}) => (
              <TextInput
                style={styles.textinput}
                placeholder="Enter Your Name"
                placeholderTextColor="#C6C6C6"
                onChangeText={text => setValue('fullName', text)}
                value={field.value}
                onSubmitEditing={() => {
                  MobileNumberInputRef.current.focus();
                }}
              />
            )}
            name="fullName"
            rules={{required: 'Full Name is required'}}
          />
          {errors.fullName && (
            <Text style={{color: 'red'}}>{errors.fullName.message}</Text>
          )}
        </View>

        {/* Mobile Number */}
        <View style={{marginTop: 30}}>
          <Text style={styles.textinputText}>Mobile Number*</Text>
          <Controller
            control={control}
            render={({field}) => (
              <TextInput
                style={styles.textinput}
                placeholder="Enter Mobile Number"
                placeholderTextColor="#C6C6C6"
                keyboardType="numeric"
                onChangeText={text => setValue('MobileNumber', text)}
                value={field.value}
              />
            )}
            name="MobileNumber"
            rules={{
              required: 'Mobile Number is required',
              pattern: {
                value: /^[0-9]+$/,
                // message: 'Please enter a valid mobile number with digits only',
              },
              minLength: {
                value: 10,
                message: 'Please enter a valid mobile number ',
              },

              maxLength: {
                value: 10,
                message: 'Please enter a valid mobile number ',
              },
            }}
          />
          {errors.MobileNumber && (
            <Text style={{color: 'red'}}>{errors.MobileNumber.message}</Text>
          )}
        </View>

        {/* Pincode */}
        <View style={{marginTop: 30}}>
          <Text style={styles.textinputText}>Pincode*</Text>

          <Controller
            control={control}
            render={({field}) => (
              <TextInput
                style={styles.textinput}
                placeholder="Enter Pincode"
                placeholderTextColor="#C6C6C6"
                keyboardType="numeric"
                onChangeText={text => setValue('Pincode', text)}
                value={field.value}
              />
            )}
            name="Pincode"
            rules={{
              required: 'Pincode is required',
              pattern: {
                value: /^[0-9]+$/,
              },
              minLength: {
                value: 4,
                message: 'Please enter a valid Pincode ',
              },
            }}
          />
          {errors.Pincode && (
            <Text style={{color: 'red'}}>{errors.Pincode.message}</Text>
          )}
        </View>

        {/* State and City */}
        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop: 30}}>
            <Text style={styles.textinputText}>State*</Text>

            <Controller
              control={control}
              render={({field}) => (
                <TextInput
                  style={[styles.textinput, {width: 150}]}
                  placeholder="Enter State"
                  placeholderTextColor="#C6C6C6"
                  onChangeText={text => setValue('State', text)}
                  value={field.value}
                />
              )}
              name="State"
              rules={{required: 'State is required'}}
            />
            {errors.State && (
              <Text style={{color: 'red'}}>{errors.State.message}</Text>
            )}
          </View>
          {/* city */}
          <View style={{marginTop: 30, marginHorizontal: 10}}>
            <Text style={styles.textinputText}>City*</Text>
            {/* <TextInput
              style={[styles.textinput, {width: 145}]}
              placeholder="City"
              placeholderTextColor="#C6C6C6"
            /> */}

            <Controller
              control={control}
              render={({field}) => (
                <TextInput
                  style={[styles.textinput, {width: 145}]}
                  placeholder="Enter City"
                  placeholderTextColor="#C6C6C6"
                  onChangeText={text => setValue('City', text)}
                  value={field.value}
                />
              )}
              name="City"
              rules={{required: 'City is required'}}
            />
            {errors.City && (
              <Text style={{color: 'red'}}>{errors.City.message}</Text>
            )}
          </View>
        </View>

        {/* House no */}
        <View style={{marginTop: 30}}>
          {selectedAddressType === 'home' ? (
            <>
              <Text style={styles.textinputText}>
                House No., Building, Area Name*
              </Text>

              <Controller
                control={control}
                render={({field}) => (
                  <TextInput
                    style={[styles.textinput]}
                    placeholder="House No., Building, Area Name*"
                    placeholderTextColor="#C6C6C6"
                    autoCompleteType="off"
                    textContentType="none"
                    multiline={true}
                    numberOfLines={5}
                    onChangeText={text => setValue('HouseNo', text)}
                    value={field.value}
                  />
                )}
                name="HouseNo"
                rules={{required: 'House No is required'}}
              />
              {errors.HouseNo && (
                <Text style={{color: 'red', marginBottom: 10}}>
                  {errors.HouseNo.message}
                </Text>
              )}
            </>
          ) : (
            <View>
              {/* Office Address */}
              <Text style={[styles.textinputText]}>
                Office Address., Building, Area Name*
              </Text>
              {/* <TextInput
                style={[styles.textinput, {marginBottom: 25}]}
                placeholder="Office Address., Building, Area Name*"
                placeholderTextColor="#C6C6C6"
                multiline={true}
                numberOfLines={5}
              /> */}

              <Controller
                control={control}
                render={({field}) => (
                  <TextInput
                    style={[styles.textinput]}
                    placeholder=" Office Address., Building, Area Name*"
                    placeholderTextColor="#C6C6C6"
                    multiline={true}
                    numberOfLines={5}
                    onChangeText={text => setValue('OfficeAdress', text)}
                    value={field.value}
                  />
                )}
                name="OfficeAdress"
                rules={{required: 'Office Address is required'}}
              />
              {errors.OfficeAdress && (
                <Text style={{color: 'red', marginBottom: 10}}>
                  {errors.OfficeAdress.message}
                </Text>
              )}
            </View>
          )}
        </View>

        {/* Type Address */}
        <View style={{marginLeft: 2}}>
          <Text style={[styles.typeAddres, {marginTop: 20}]}>
            Type of address
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[
                styles.homeContainer,
                {
                  flexDirection: 'row',
                  borderColor:
                    selectedAddressType === 'home' ? '#F39200' : '#000000',
                },
              ]}
              onPress={() => handleAddressTypeChange('home')}>
              <Image
                source={require('../../assets/Home.png')}
                style={{
                  marginRight: 5,
                  tintColor:
                    selectedAddressType === 'home' ? '#F39200' : '#000000',
                }}
              />
              <Text
                style={{
                  color: selectedAddressType === 'home' ? '#F39200' : '#000000',
                }}>
                Home
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.homeContainer,
                {
                  flexDirection: 'row',
                  marginLeft: 20,
                  borderColor:
                    selectedAddressType === 'work' ? '#F39200' : '#000000',
                },
              ]}
              onPress={() => handleAddressTypeChange('work')}>
              <Image
                source={require('../../assets/office.png')}
                style={{
                  marginRight: 5,
                  tintColor:
                    selectedAddressType === 'work' ? '#F39200' : '#000000',
                }}
              />
              <Text
                style={{
                  color: selectedAddressType === 'work' ? '#F39200' : '#000000',
                }}>
                Work
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Switch */}
        <View style={[styles.SwitchContainer, {marginBottom: 20}]}>
          <Text style={styles.SwitchtextStyle}>Select Slot</Text>
          <Switch
            trackColor={{false: '#767577', true: '#F39200'}}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        {/* Calendar */}
        {isEnabled && (
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={toggleCalendarVisibility}>
              <View style={styles.calendarContainer}>
                <TextInput
                  style={styles.textinput}
                  placeholder="YYYY/MM/DD"
                  placeholderTextColor="#C6C6C6"
                  value={selectedDate} // Display the selected date in the TextInput
                />
                <Image
                  source={require('../../assets/calendar.png')}
                  style={[styles.CalendarImage]}
                />
              </View>
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={isCalendarVisible}
              onRequestClose={toggleCalendarVisibility}>
              <View style={styles.modalContainer}>
                <TouchableOpacity onPress={toggleCalendarVisibility}>
                  <Image
                    source={require('../../assets/cross.png')}
                    style={[styles.closeButton, {width: 30, height: 30}]}
                  />
                </TouchableOpacity>
                <Calendar
                  onDayPress={handleDayPress}
                  markedDates={{
                    [selectedDate]: {
                      selected: true,
                      marked: true,
                      selectedColor: 'blue',
                    },
                  }}
                />
              </View>
            </Modal>
          </View>
        )}
        {/* Button */}
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <View style={styles.ButtonContainer}>
            <Text style={styles.ButtonText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  columnContainer: {
    flexDirection: 'row',
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: '#025363',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 30,
    // borderWidth: 1,
    borderColor: 'black',
  },
  line: {
    position: 'absolute',
    alignItems: 'center',
    width: 70,
    borderColor: '#D9D9D9',
    left: 50,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18.15,
    alignItems: 'center',
  },
  addressText: {
    top: 0,
    marginLeft: 20,
    color: '#292D32',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18.9,
  },

  textinputText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17.64,
    color: '#292D32',
    marginBottom: 7,
    marginHorizontal: 3,
  },
  textinput: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    paddingLeft: 15,
    width: 300,
  },
  typeAddres: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17.64,
    color: '#292D32',
    marginBottom: 10,
  },
  homeContainer: {
    borderWidth: 1,
    height: 33,
    borderRadius: 30,
    borderColor: '#F39200',
    width: 102,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    marginTop: 15,
  },
  SwitchtextStyle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17.64,
    color: '#292D32',
  },

  calendarContainer: {
    position: 'relative',
    marginBottom: 30,
    flexDirection: 'row',
  },

  CalendarImage: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 15,
    right: 45,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    fontSize: 18,
    // color: 'blue',
    marginBottom: 10,
  },

  ButtonContainer: {
    width: 298,
    height: 55,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#025363',
  },
  ButtonText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20.16,
    color: '#FFFFFF',
  },
});

export default AddDeliveryAddress;
