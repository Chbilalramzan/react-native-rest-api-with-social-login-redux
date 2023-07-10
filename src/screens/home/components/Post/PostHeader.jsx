import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RoundImage from '../../../../components/images/RoundImage';
import TextSemiBold from '../../../../components/Text/TextSemiBold';
import TextMedium from '../../../../components/Text/TextMedium';
import Colors from '../../../../styles/Colors';
import getSize from '../../../../utils/helpers';
import Dot from '../Dot';
import TextRegular from '../../../../components/Text/TextRegular';

const PostHeader = ({onPress}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.profile}>
          <RoundImage
            path={require('../../../../../assets/images/person2.png')}
            size={42}
            resizeMode="cover"
          />
          <View style={{marginStart: getSize(10)}}>
            <View style={styles.nameContainer}>
              <TextSemiBold text={'Mike Smith'} fontSize={15} />
              <View style={styles.role}>
                <TextSemiBold text="Leader" fontSize={10} color={'#F4473E'} />
              </View>
            </View>
            <View style={styles.type}>
              <TextMedium
                text={'Financial Group'}
                fontSize={12}
                color={Colors.heading3Text}
              />
              <Dot size={4} marginHorizontal={4} color={'#AF9DFB'} />
              <TextSemiBold text={'3h'} fontSize={getSize(12)} />
            </View>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <Dot size={6} marginVertical={2} color={'white'} />
          <Dot size={6} marginVertical={2} color={'white'} />
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: getSize(18), marginBottom: getSize(10)}}>
        <TextRegular
          text={
            'Now a days its simple and very fast to buy NFT’s, its more of a invest on your assets and keep it under'
          }
          fontSize={13}
          color={Colors.heading2Text}
          extraStyles={styles.extraStyles}
        />
      </View>
    </>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginHorizontal: getSize(18),
    marginTop: getSize(18),
    marginBottom: getSize(12),
  },
  role: {
    paddingVertical: getSize(4),
    paddingHorizontal: getSize(8),
    borderRadius: getSize(50),
    marginStart: getSize(6),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  nameContainer: {flexDirection: 'row', alignItems: 'center'},

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    padding: 10,
  },
  type: {flexDirection: 'row', alignItems: 'center', marginTop: getSize(3)},
  extraStyles: {lineHeight: getSize(18)},
});
