import {StyleSheet, View} from 'react-native';
import React from 'react';
import Send from '../components/Send';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import {Tick} from '../../../styles/SvgIcons';
import Button from '../../../components/buttons/Button';
import GradientSafeArea from '../../../components/backgrounds/GradienSafeArea';

const ConfirmationMessage = ({h1, h2, buttonText, onPress, ...props}) => {
  return (
    <GradientSafeArea hasShadow top>
      <View style={styles.center}>
        <Send icon={<Tick />} />
        <Headings
          h1={h1}
          h2={h2}
          extraStyles={styles.extraStyles}
          extraStylesh1={[
            styles.extraStylesh1h2,
            {letterSpacing: -0.5, marginHorizontal: 35},
          ]}
          extraStylesh2={[
            styles.extraStylesh1h2,
            {letterSpacing: 0.2, marginHorizontal: 29},
          ]}
        />
      </View>
      <View style={styles.bottomButton}>
        <Button buttonText={buttonText} onPress={onPress} />
      </View>
    </GradientSafeArea>
  );
};

export default ConfirmationMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: getSize(24),
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  extraStyles: {marginTop: getSize(30)},
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
