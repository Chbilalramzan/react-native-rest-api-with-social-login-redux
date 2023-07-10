import {StyleSheet, ImageBackground, View, Image} from 'react-native';
import React from 'react';
import TextSemiBold from '../../../../components/Text/TextSemiBold';
import getSize from '../../../../utils/helpers';
import TextMedium from '../../../../components/Text/TextMedium';
import {UserWhite} from '../../../../styles/SvgIcons';

const GroupsToFollowItem = ({item, index}) => {
  const {image, title, people, icon} = item;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.imageBackground}
        resizeMode="cover">
        <View style={styles.overlay} />
        <View style={{margin: getSize(12)}}>
          <Image
            source={icon}
            style={{height: getSize(40), width: getSize(40)}}
          />
        </View>
        <View style={styles.container2}>
          <View>
            <TextSemiBold text={title} fontSize={14} />
            <View style={styles.container3}>
              <UserWhite height={getSize(12)} width={getSize(12)} />
              <TextMedium text={`  ${people}`} fontSize={11} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GroupsToFollowItem;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(22, 4, 98, 0.40)',
  },
  container: {
    marginEnd: getSize(12),
    borderRadius: getSize(15),
    overflow: 'hidden',
  },
  imageBackground: {
    width: getSize(170),
    height: getSize(110),
    borderRadius: getSize(15),
  },
  container2: {
    position: 'absolute',
    bottom: getSize(12),
    left: getSize(16),
    right: getSize(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getSize(6),
  },
});
