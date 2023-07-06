import {StyleSheet, View, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import getSize from '../../../utils/helpers';
import First from './First';
import GradientButton from '../../../components/buttons/GradientButton';
import Second from './Second';
import Third from './Third';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';
import Colors from '../../../styles/Colors';

const OnBoardingScreen = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const opacityValue = useRef(new Animated.Value(1)).current;

  const updatePage = () => {
    console.log('click');
    if (index >= 2) {
      navigation.navigate('AuthOptions');
    } else {
      Animated.timing(opacityValue, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        setIndex(index + 1);
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  const renderPage = () => {
    switch (index) {
      case 0:
        return <First />;
      case 1:
        return <Second />;
      case 2:
        return <Third />;
      default:
        return null;
    }
  };

  return (
    <AuthScreensSafeArea
      backgroundColor={Colors.onBoardingBackground}
      style={styles.container}>
      <Animated.View style={[styles.pageContainer, {opacity: opacityValue}]}>
        {renderPage()}
      </Animated.View>
      <View style={styles.bottomButton}>
        <GradientButton buttonText={'Next'} onPress={updatePage} />
      </View>
    </AuthScreensSafeArea>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {paddingHorizontal: getSize(0), flex: 1},
  pageContainer: {flex: 1},
  bottomButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: getSize(45),
    marginTop: getSize(11),
    marginHorizontal: getSize(42),
  },
});
