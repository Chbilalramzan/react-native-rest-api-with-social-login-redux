import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {Menu, Notification} from '../../styles/SvgIcons';
import getSize from '../../utils/helpers';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Colors from '../../styles/Colors';
import TextSemiBold from '../Text/TextSemiBold';
import TextField from '../TextField';
import * as Navigation from '../../stacks/Navigation';
import TextMedium from '../Text/TextMedium';

const Header = ({
  showMenu,
  showBack,
  showNotification,
  title,
  showRightButton,
}) => {
  const handleMenuPress = () => {
    // Handle left-side drawer icon press
    // Implement the logic for opening the drawer
    Navigation.navigate('CreatePost');
  };

  const handleBackPress = () => {
    // Handle back icon press
    // Implement the logic for navigating back
    Navigation.goBack();
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
        {title ? (
          <TextSemiBold text={title} fontSize={20} extraStyles={styles.title} />
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
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.rightButton}
              onPress={() => console.log('Button pressed')}>
              <TextMedium text={'Post'} fontSize={16} />
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
  title: {textAlign: 'left', alignSelf: 'flex-start'},
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
  rightButton: {
    paddingVertical: getSize(9),
    paddingHorizontal: getSize(15),
    borderRadius: getSize(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.purple1,
  },
});

export default Header;
