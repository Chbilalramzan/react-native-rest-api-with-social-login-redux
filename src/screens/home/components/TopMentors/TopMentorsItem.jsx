import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextSemiBold from '../../../../components/Text/TextSemiBold';
import getSize from '../../../../utils/helpers';
import TextMedium from '../../../../components/Text/TextMedium';
import {Star} from '../../../../styles/SvgIcons';
import Colors from '../../../../styles/Colors';
import Dot from '../Dot';
import FastImage from 'react-native-fast-image';
import GradientButton from '../../../../components/buttons/GradientButton';

const TopMentorsItem = ({item}) => {
  const {name, role, company, rating} = item;
  return (
    <View>
      <View style={styles.imageContainer}>
        <FastImage
          source={require('../../../../../assets/images/person2.png')}
          style={styles.imageProfile}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TextSemiBold text={name} fontSize={14} />
          <View style={styles.roleContainer}>
            <TextMedium
              text={role}
              fontSize={11.5}
              color={Colors.heading4Text}
            />
            <Dot size={4} marginHorizontal={4} />
            <TextMedium text={`${rating} `} fontSize={12.5} />
            <Star width={getSize(10.4)} height={getSize(10.4)} />
          </View>
          <TextMedium
            text={company}
            fontSize={10.5}
            color={Colors.heading2Text}
          />
          <View style={styles.buttonContainer}>
            <GradientButton
              buttonText={'Connect'}
              buttonHeight={41.6}
              fontSize={15.6}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopMentorsItem;

const styles = StyleSheet.create({
  container: {
    height: getSize(168),
    width: getSize(180),
    paddingTop: getSize(32),
    paddingHorizontal: getSize(24),
    marginEnd: getSize(16),
    backgroundColor: Colors.postBackgroundColor,
    borderRadius: getSize(15.6),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  container2: {
    flex: 1,
    backgroundColor: Colors.postBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  roleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  imageContainer: {
    position: 'absolute',
    top: -getSize(34),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 1,
  },
  imageProfile: {
    width: getSize(68),
    height: getSize(68),
  },
  buttonContainer: {
    marginTop: getSize(8),
    width: getSize(133),
  },
});
