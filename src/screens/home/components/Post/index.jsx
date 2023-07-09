import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import getSize from '../../../../utils/helpers';
import Colors from '../../../../styles/Colors';
import PostHeader from './PostHeader';
import BoxImage from '../../../../components/images/BoxImage';
import PostFooter from './PostFooter';

const Post = ({withImage}) => {
  return (
    <View style={styles.postContainer}>
      <View
        style={{
          backgroundColor: Colors.authButton,
          borderRadius: getSize(15),
        }}>
        <PostHeader />
        {withImage && (
          <BoxImage
            path={require('../../../../../assets/images/postImage1.png')}
            height={225}
            width={'100%'}
            radius={0}
            resizeMode="cover"
          />
        )}
        <PostFooter />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  postContainer: {
    width: '100%',
    paddingVertical: getSize(30),
    paddingHorizontal: getSize(24),
    backgroundColor: Colors.postBackgroundColor,
  },
});
