/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import AppSafeArea from '../../components/backgrounds/AppSafeArea';
import getSize from '../../utils/helpers';
import {Edit, Pencil, Settings, Star} from '../../styles/SvgIcons';
import TextSemiBold from '../../components/Text/TextSemiBold';
import TextRegular from '../../components/Text/TextRegular';
import TextMedium from '../../components/Text/TextMedium';
import Colors from '../../styles/Colors.jsx';
import FollowersStacked from './FollowersStacked';
import IconButton from '../../components/buttons/IconButton';
import TextBold from '../../components/Text/TextBold';
import GradientButton from '../../components/buttons/GradientButton';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/slices/authSlice';
import Header from '../../components/Header';
import * as constants from '../../constants/constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ProfileScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const gotoEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <AppSafeArea style={{paddingTop: 0}}>
      <ScrollView contentContainerStyle={{paddingBottom: getSize(36)}}>
        <ImageBackground
          source={require('../../../assets/images/profileBackground.png')}
          style={styles.imageBackground}>
          <View
            style={{
              position: 'absolute',
              right: 0,
              left: 0,
              top: constants.statusBarHeight(44),
            }}>
            <Header showMenu />
          </View>
          <Image
            source={require('../../../assets/images/person2b.png')}
            style={styles.imageProfileb}
          />
          <Image
            source={require('../../../assets/images/person2.png')}
            style={styles.imageProfile}
          />
        </ImageBackground>

        <View style={styles.nameContainer}>
          <View style={{width: getSize(58)}} />
          <TextSemiBold text={'Mr. Waleed Khan'} fontSize={20} />
          <View style={styles.newUser}>
            <TextMedium text={'New user'} fontSize={10} />
          </View>
        </View>

        <View style={styles.role}>
          <TextRegular
            text={'Financial Expert'}
            fontSize={12}
            color={Colors.heading2Text}
          />
          <View
            style={{
              backgroundColor: Colors.purple2,
              height: getSize(4),
              width: getSize(4),
              borderRadius: getSize(4),
              marginHorizontal: getSize(3),
            }}
          />
          <TextSemiBold
            text={'5 '}
            fontSize={12.5}
            color={Colors.heading2Text}
          />
          <Star width={getSize(10.4)} height={getSize(10.4)} />
        </View>

        <View style={styles.company}>
          <TextSemiBold text={'Tuchman Company, CEO'} fontSize={10.55} />
        </View>
        <View style={{marginHorizontal: getSize(24)}}>
          <View style={styles.comment}>
            <View>
              <FollowersStacked />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <TextSemiBold text={'324'} fontSize={13} />
                <TextSemiBold
                  text={' Followers'}
                  fontSize={13}
                  color={Colors.purple10}
                />
                <View
                  style={{
                    backgroundColor: Colors.purple2,
                    height: getSize(4),
                    width: getSize(4),
                    borderRadius: getSize(4),
                    marginHorizontal: getSize(3),
                  }}
                />
                <TextSemiBold text={'1233'} fontSize={13} />
                <TextSemiBold
                  text={' Connections'}
                  fontSize={13}
                  color={Colors.purple10}
                />
              </View>
            </View>
            <View style={styles.iconButtons}>
              <IconButton
                icon={<Pencil width={getSize(20)} height={getSize(20)} />}
                size={getSize(40)}
                color={Colors.gray2}
                onPress={gotoEditProfile}
                extraStyles={{marginEnd: getSize(10)}}
              />
              <IconButton
                icon={<Settings width={getSize(20)} height={getSize(20)} />}
                size={getSize(40)}
                color={Colors.gray2}
                onPress={() => {}}
              />
            </View>
          </View>
          {/* /about */}
          <View style={styles.about}>
            <TextBold
              text={'About'}
              fontSize={16}
              color={Colors.heading3Text}
            />
            <TextRegular
              fontSize={13}
              text={
                "Hi I am Harlan SilverMan, thanks for coming in today. It's nice to meet you in person. I know it can be nerve-wracking to meet a new therapist, and I'll be asking some personal questions today, so I thank you for taking the step to come in. Today we have a little bit of a different meeting than a regular therapy session."
              }
              color={Colors.heading2Text}
              extraStyles={{
                marginVertical: getSize(6),
                lineHeight: getSize(20.8),
              }}
            />
          </View>

          {/* activity */}
          <View style={styles.about}>
            <TextBold
              text={'Your activity'}
              fontSize={16}
              color={Colors.heading3Text}
            />
            <View style={styles.activity2}>
              <IconButton
                icon={<Edit width={getSize(35)} height={getSize(35)} />}
                size={getSize(102)}
                color={Colors.gray3}
                extraStyles={{
                  marginTop: getSize(28),
                  marginBottom: getSize(14),
                }}
              />
              <TextSemiBold
                fontSize={18}
                text={'You don’t have any activity'}
              />
              <TextRegular
                fontSize={13}
                text={
                  'Get the conversation going and be the first one to post in the cummunity'
                }
                color={Colors.heading2Text}
                extraStyles={styles.extraStyle}
              />
            </View>
            <View style={styles.gradientButton}>
              <GradientButton
                buttonHeight={getSize(45)}
                buttonText={'Create a new Post'}
                fontSize={12.9}
                onPress={logoutUser}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </AppSafeArea>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  imageBackground: {
    resizeMode: 'cover',
    alignItems: 'center',
    height: getSize(216),
  },
  imageProfile: {
    height: getSize(90),
    width: getSize(90),
    borderRadius: getSize(90),
    position: 'absolute',
    top: getSize(170),
  },
  imageContainer: {
    position: 'absolute',
    top: getSize(170),
    alignItems: 'center',
  },
  imageProfileb: {
    height: getSize(130),
    width: getSize(130),
    borderRadius: getSize(130),
    position: 'absolute',
    top: getSize(150),
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getSize(55),
  },
  newUser: {
    backgroundColor: Colors.purple1,
    paddingHorizontal: getSize(8),
    paddingVertical: getSize(5),
    borderRadius: getSize(15),
    marginStart: getSize(8),
  },
  role: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getSize(8),
  },
  iconButtons: {flexDirection: 'row'},
  company: {
    marginTop: getSize(3.74),
    justifyContent: 'center',
    alignItems: 'center',
  },
  comment: {
    marginTop: getSize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  about: {
    marginTop: getSize(26),
    paddingVertical: getSize(16),
    paddingStart: getSize(17),
    paddingEnd: getSize(14),
    backgroundColor: Colors.authButton,
    borderRadius: getSize(20),
  },
  activity: {
    marginTop: getSize(19),
  },
  activity2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: getSize(24),
  },
  extraStyle: {
    marginVertical: getSize(6),
    lineHeight: getSize(20.8),
    textAlign: 'center',
  },
  gradientButton: {
    width: getSize(157),
    marginTop: getSize(21.5),
    alignSelf: 'center',
    marginBottom: getSize(6),
  },
});
