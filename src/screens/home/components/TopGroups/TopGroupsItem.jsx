import {StyleSheet, Image, View, ImageBackground} from 'react-native';
import React from 'react';
import BoxImage from '../../../../components/images/BoxImage';
import TextSemiBold from '../../../../components/Text/TextSemiBold';
import getSize from '../../../../utils/helpers';
import TextMedium from '../../../../components/Text/TextMedium';
import {UserGroup} from '../../../../styles/SvgIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../../../../styles/Colors';

const TopGroupsItem = ({item, index}) => {
  const {image, title, people} = item;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={image}
          style={styles.imageBackground}
          resizeMode="cover">
          <Image
            source={require('../../../../../assets/images/filter/bluefilter.png')}
            style={styles.filterImage}
            resizeMode="cover"
          />
        </ImageBackground>
      </View>
      <View style={styles.container2}>
        <View>
          <TextSemiBold text={title} fontSize={16} />
          <View style={styles.container3}>
            <UserGroup height={getSize(14)} width={getSize(14)} />
            <TextMedium text={` ${people}`} fontSize={10} />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            padding: getSize(11),
            backgroundColor: Colors.white,
            borderRadius: getSize(10),
          }}>
          <TextSemiBold text={'Join Group'} fontSize={12} color={'#281968'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopGroupsItem;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: getSize(15),
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
  },
  filterImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  container: {
    width: getSize(352),
    height: getSize(186),
    marginEnd: getSize(16),
  },
  container2: {
    position: 'absolute',
    bottom: getSize(24),
    left: getSize(16),
    right: getSize(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container3: {flexDirection: 'row', alignItems: 'center'},
});
