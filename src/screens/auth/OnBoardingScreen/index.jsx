import {StyleSheet, View} from 'react-native';
import React from 'react';
import getSize from '../../../utils/helpers';
import First from './First';
import GradientButton from '../../../components/buttons/GradientButton';
import Second from './Second';
import Third from './Third';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';

const OnBoardingScreen = ({navigation}) => {
  const [index, setIndex] = React.useState(0);

  const updatePage = () => {
    console.log('click');
    if (index >= 2) {
      navigation.navigate('AuthOptions');
    } else {
      setIndex(index + 1);
    }
  };

  const showPage = () => {
    return index === 0 ? <First /> : index === 1 ? <Second /> : <Third />;
  };

  return (
    <AuthScreensSafeArea style={styles.container}>
      {showPage()}
      <View style={styles.bottomButton}>
        <GradientButton buttonText={'Next'} onPress={updatePage} />
      </View>
    </AuthScreensSafeArea>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {paddingHorizontal: getSize(16), flex: 1},
  bottomButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: getSize(45),
    marginTop: getSize(11),
    marginHorizontal: getSize(42),
  },
});
