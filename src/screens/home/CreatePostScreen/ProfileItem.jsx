import {StyleSheet, View} from 'react-native';
import React from 'react';
import getSize from '../../../utils/helpers';
import Colors from '../../../styles/Colors';
import TextMedium from '../../../components/Text/TextMedium';
import TextSemiBold from '../../../components/Text/TextSemiBold';
import RoundImage from '../../../components/images/RoundImage';
import {CommunityRed} from '../../../styles/SvgIcons';

const ProfileItem = ({roleBackgroundColor = '#1A1728'}) => {
  return (
    <View style={styles.profile}>
      <RoundImage
        path={require('../../../../assets/images/person2.png')}
        size={48}
        resizeMode="cover"
      />
      <View style={{marginStart: getSize(10)}}>
        <TextSemiBold text={'Mike Smith'} fontSize={16} />
        <View style={[styles.role, {backgroundColor: roleBackgroundColor}]}>
          <CommunityRed width={getSize(16)} height={getSize(16)} />
          <TextMedium
            text={'Financial Group'}
            fontSize={12}
            color={Colors.heading3Text}
            extraStyles={styles.extraStyles}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  role: {
    paddingVertical: getSize(6),
    paddingHorizontal: getSize(9),
    borderRadius: getSize(50),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  profile: {
    margin: getSize(24),
    flexDirection: 'row',
    alignItems: 'center',
  },
  extraStyles: {marginStart: 4},
  inputContainer: {
    padding: 10,
  },
});
