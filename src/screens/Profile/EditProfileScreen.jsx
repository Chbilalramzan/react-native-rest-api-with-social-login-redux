import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import AppSafeArea from '../../components/backgrounds/AppSafeArea';
import getSize from '../../utils/helpers';
import {
  About,
  Account,
  Edit,
  Industry,
  Plus,
  Tone,
} from '../../styles/SvgIcons';
import TextSemiBold from '../../components/Text/TextSemiBold';
import TextRegular from '../../components/Text/TextRegular';
import Colors from '../../styles/Colors';
import IconButton from '../../components/buttons/IconButton';
import TextBold from '../../components/Text/TextBold';
import GradientButton from '../../components/buttons/GradientButton';
import DetailsItem from './DetailsItem';
import ConnectionsItem from './ConnectionsItem';

const EditProfileScreen = () => {
  return (
    <AppSafeArea style={{paddingTop: getSize(36)}}>
      <ScrollView contentContainerStyle={{paddingBottom: getSize(36)}}>
        <View style={{marginHorizontal: getSize(24)}}>
          {/* /about */}
          <View style={styles.about}>
            <IconButton
              disable={true}
              icon={<About width={getSize(29)} height={getSize(29)} />}
              onPress={() => {}}
              size={53}
              color={Colors.background}
              extraStyles={{
                marginBottom: getSize(14),
              }}
            />
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
          <View style={{marginTop: getSize(37)}}>
            <TextBold
              text={'Details'}
              fontSize={16}
              color={Colors.heading3Text}
            />
            <DetailsItem
              title={'Industry'}
              description={'Financial services and Consulting.'}
              icon={<Industry width={getSize(24)} height={getSize(24)} />}
            />
            <DetailsItem
              title={'Public'}
              description={
                'Everyone on the B.up can see this Group post - Done by admin.'
              }
              icon={<Account width={getSize(24)} height={getSize(24)} />}
            />
            <DetailsItem
              title={'Joined'}
              description={'Lahore, Pakistan January 01, 2023'}
              icon={<Tone width={getSize(24)} height={getSize(24)} />}
            />
          </View>
          {/* activity */}
          <View style={{marginTop: getSize(44)}}>
            <TextBold
              text={'Your Connections'}
              fontSize={16}
              color={Colors.heading3Text}
            />

            <ConnectionsItem />
          </View>

          <View style={styles.gradientButton}>
            <GradientButton
              buttonHeight={getSize(45)}
              buttonText={'See all your 1232 connects'}
              fontSize={12.9}
              onPress={() => {}}
            />
          </View>
        </View>
      </ScrollView>
    </AppSafeArea>
  );
};

export default EditProfileScreen;

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
    width: getSize(200),
    marginTop: getSize(21.5),
    alignSelf: 'center',
    marginBottom: getSize(6),
  },
});
