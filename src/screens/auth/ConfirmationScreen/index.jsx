import React from 'react';
import {StyleSheet, View} from 'react-native';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import GradientButton from '../../../components/buttons/GradientButton';
import Send from '../components/Send';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';
import {SendIcon} from '../../../styles/SvgIcons';
import {useDispatch} from 'react-redux';
import {isAuthenticated} from '../../../redux/slices/authSlice';
import GradientSafeArea from '../../../components/backgrounds/GradienSafeArea';
import Colors from '../../../styles/Colors';
import Button from '../../../components/buttons/Button';
import getRFSize from '../../../utils/Helper';

const ConfirmationScreen = () => {
  const dispatch = useDispatch();

  const gotoHomeScreen = () => {
    dispatch(isAuthenticated(true));
  };

  return (
    <GradientSafeArea hasShadow top>
      <View style={[styles.container, {paddingHorizontal: getSize(24)}]}>
        <View style={styles.center}>
          <Send
            icon={<SendIcon height={getRFSize(133)} width={getRFSize(131)} />}
          />
          <Headings
            h1={'You are ready to go.'}
            h2={"You're in! Your financial journey starts now."}
            fontSizeh1={getRFSize(32)}
            textColorh1="white"
            textColorh2="white"
            extraStyles={{marginTop: getSize(40)}}
            extraStylesh1={[styles.extraStylesh1h2, {letterSpacing: -0.5}]}
            extraStylesh2={[styles.extraStylesh1h2, {letterSpacing: 0.2}]}
          />
        </View>

        <View style={styles.bottomButton}>
          <Button buttonText={"That's Great!"} onPress={gotoHomeScreen} />
        </View>
      </View>
    </GradientSafeArea>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: getSize(24),
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  extraStylesh1h2: {
    textAlign: 'center',
  },
  bottomButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: getSize(45),
    marginTop: getSize(11),
    marginHorizontal: getSize(20),
  },
});
