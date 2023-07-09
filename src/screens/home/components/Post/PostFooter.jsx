import {StyleSheet, View} from 'react-native';
import React from 'react';
import getSize from '../../../../utils/helpers';
import TextMedium from '../../../../components/Text/TextMedium';
import {Comment, Share, Star} from '../../../../styles/SvgIcons';
import Colors from '../../../../styles/Colors';
import Dot from '../Dot';
import TextSemiBold from '../../../../components/Text/TextSemiBold';
import PostFooterButton from './PostFooterButton';
const PostFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rateText}>
        <PostFooterButton
          value={'14'}
          icon={
            <Star width={getSize(17)} height={getSize(24)} fill={'#FFA827'} />
          }
        />
        <View style={[styles.rateText, {marginStart: getSize(6)}]}>
          <TextMedium
            text={' 10 Ratings'}
            fontSize={12}
            color={Colors.heading2Text}
          />
          <Dot size={4} marginHorizontal={4} color={'#AF9DFB'} />
          <TextSemiBold text={'Rate'} fontSize={12} />
        </View>
      </View>
      <PostFooterButton
        value={'15'}
        icon={
          <Comment width={getSize(17)} height={getSize(24)} color={'#FFA827'} />
        }
      />
      <PostFooterButton
        value={'Share'}
        icon={
          <Share width={getSize(17)} height={getSize(24)} fill={'#FFA827'} />
        }
      />
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  container: {
    paddingVertical: getSize(12),
    marginHorizontal: getSize(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rateText: {flexDirection: 'row', alignItems: 'center'},
});
