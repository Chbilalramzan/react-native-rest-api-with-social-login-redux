import {
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {Post} from '../../../styles/SvgIcons';
import LinearGradient from 'react-native-linear-gradient';
import getSize from '../../../utils/helpers';
import Colors from '../../../styles/Colors';
import TextBold from '../../../components/Text/TextBold';
import Entypo from 'react-native-vector-icons/Entypo';

const CreatePostButton = ({onPress}) => {
  const [containerHeight, setContainerHeight] = useState(new Animated.Value(0));
  const [isContainerOpen, setIsContainerOpen] = useState(false);

  const handlePress = () => {
    if (isContainerOpen) {
      Animated.timing(containerHeight, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(containerHeight, {
        toValue: 220,
        speed: 4,
        bounciness: 5,
        useNativeDriver: false,
      }).start();
    }

    setIsContainerOpen(!isContainerOpen);
  };

  return (
    <View style={{marginHorizontal: getSize(24)}}>
      <LinearGradient
        colors={[Colors.gradientButton2, Colors.gradientButton1]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1.2}}
        style={[styles.gradient, {height: getSize(52)}]}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handlePress}
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
          <Entypo
            name={isContainerOpen ? 'chevron-up' : 'chevron-down'}
            size={getSize(24)}
            color={'white'}
          />
        </TouchableOpacity>
      </LinearGradient>
      <Animated.View
        style={[styles.animatedContainer, {height: containerHeight}]}>
        {/* Content of the sliding container */}
      </Animated.View>
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
  animatedContainer: {
    marginTop: getSize(14),
    borderRadius: getSize(15),
    // overflow: 'hidden',
    backgroundColor: Colors.authButton,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: -1,
        },
        shadowOpacity: 1,
        shadowRadius: 16,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});
