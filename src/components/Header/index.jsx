import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Menu, Notification} from '../../styles/SvgIcons';
import getSize from '../../utils/helpers';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Colors from '../../styles/Colors';
import TextSemiBold from '../Text/TextSemiBold';
import TextField from '../TextField';

const Header = ({
  showMenu,
  showBack,
  showNotification,
  title,
  showRightButton,
}) => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    // Handle left-side drawer icon press
    // Implement the logic for opening the drawer
  };

  const handleBackPress = () => {
    // Handle back icon press
    // Implement the logic for navigating back
    navigation.goBack();
  };

  const handleNotificationPress = () => {
    // Handle notification icon press
    // Implement the logic for displaying notifications
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {showMenu ? (
          <TouchableOpacity activeOpacity={0.65} onPress={handleMenuPress}>
            <Menu width={getSize(28)} height={getSize(28)} />
          </TouchableOpacity>
        ) : showBack ? (
          <TouchableOpacity activeOpacity={0.65} onPress={handleBackPress}>
            {Platform.OS === 'android' ? (
              <MaterialIcons
                name="arrow-back"
                size={getSize(24)}
                color="white"
              />
            ) : (
              <MaterialIcons
                name="arrow-back-ios"
                size={getSize(24)}
                color="white"
              />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.middleContainer}>
        {/* <Text style={styles.title}>{title}</Text> */}
        {title ? (
          <TextSemiBold text={title} size={20} />
        ) : (
          <View style={{width: '100%'}}>
            <TextField
              placeholder={'Search Groups, People ...'}
              onChangeText={txt => console.log(txt)}
              suffixIcon={
                <TouchableOpacity
                  activeOpacity={0.65}
                  style={styles.searchIcon}>
                  <EvilIcons
                    name="search"
                    size={getSize(22)}
                    color={Colors.purple1}
                  />
                </TouchableOpacity>
              }
            />
          </View>
        )}
        {/* Render search field component here */}
        {/* Implement the logic for the search functionality */}
      </View>
      {showRightButton && (
        <View style={styles.rightContainer}>
          {showNotification ? (
            <TouchableOpacity
              activeOpacity={0.65}
              style={styles.rightIconStyle}
              onPress={handleNotificationPress}>
              <Notification width={getSize(24)} height={getSize(24)} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => console.log('Button pressed')}>
              <Text style={styles.buttonText}>Button</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getSize(24),
    height: getSize(56),
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginEnd: getSize(14),
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rightContainer: {
    marginStart: getSize(13),
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  rightIconStyle: {
    backgroundColor: Colors.gray3,
    height: getSize(45),
    width: getSize(45),
    borderRadius: getSize(45),
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchIcon: {
    backgroundColor: Colors.white,
    height: getSize(28),
    width: getSize(28),
    borderRadius: getSize(28),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
