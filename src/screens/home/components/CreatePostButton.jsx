import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Post} from '../../../styles/SvgIcons';
import LinearGradient from 'react-native-linear-gradient';
import getSize from '../../../utils/helpers';
import Colors from '../../../styles/Colors';
import TextBold from '../../../components/Text/TextBold';
import Entypo from 'react-native-vector-icons/Entypo';

const CreatePostButton = ({onPress}) => {
  return (
    <View style={{marginHorizontal: getSize(24)}}>
      <LinearGradient
        colors={[Colors.gradientButton2, Colors.gradientButton1]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1.2}}
        style={[styles.gradient, {height: getSize(52)}]}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPress}
          style={styles.button}>
          <View style={styles.container}>
            <View style={styles.postIcon}>
              <Post width={getSize(22)} height={getSize(22)} />
            </View>
            <TextBold
              text={'Create A New POST'}
              fontSize={16}
              extraStyles={styles.extraTextStyle}
            />
          </View>
          <Entypo name="chevron-down" size={getSize(24)} color={'white'} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default CreatePostButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginStart: getSize(6),

    alignItems: 'center',
  },
  postIcon: {
    height: getSize(37),
    width: getSize(37),
    marginEnd: getSize(14),
    borderRadius: getSize(37),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getSize(50),
    height: getSize(56),
    paddingEnd: getSize(20),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  extraStyles: {
    letterSpacing: 1.6,
  },
});
