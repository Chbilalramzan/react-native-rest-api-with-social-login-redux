import React from 'react';
import {StyleSheet, View} from 'react-native';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import GradientButton from '../../../components/buttons/GradientButton';
import Send from '../components/Send';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';
import {SendIcon} from '../../../styles/SvgIcons';

const ConfirmationScreen = () => {
  return (
    <AuthScreensSafeArea hasShadow top>
      <View style={[styles.container, {paddingHorizontal: getSize(24)}]}>
        <View style={styles.center}>
          <Send icon={<SendIcon />} />
          <Headings
            h1={'You are ready to go.'}
            h2={
              'A Password reset link has been sent to your email, open your email and follow the instructions.'
            }
            extraStylesh1={styles.extraStylesh1h2}
            extraStylesh2={styles.extraStylesh1h2}
          />
        </View>

        <View style={styles.bottomButton}>
          <GradientButton buttonText={"That's Great!"} />
        </View>
      </View>
    </AuthScreensSafeArea>
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
