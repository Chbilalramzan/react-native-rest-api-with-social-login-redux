import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import IconButton from '../../../components/buttons/IconButton';
import GradientButton from '../../../components/buttons/GradientButton';
import getSize from '../../../utils/helpers';
import Colors from '../../../styles/Colors.jsx';
import TextSemiBold from '../../../components/Text/TextSemiBold';
import {Cross} from '../../../styles/SvgIcons';

const AlertDialog = ({text, onClose, isVisible, ...props}) => {
  const shadowStyle = Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 1,
      shadowRadius: 25,
    },
    android: {
      elevation: 10,
    },
  });

  return (
    <View>
      <Modal
        animationIn={'fadeIn'}
        animationInTiming={600}
        backdropTransitionInTiming={400}
        animationOutTiming={1000}
        backdropTransitionOutTiming={400}
        animationOut={'fadeOut'}
        useNativeDriver={true}
        useNativeDriverForBackdrop={true}
        isVisible={isVisible}
        backdropOpacity={0.5}
        backdropColor="black">
        <View
          style={[
            styles.alertView,
            {
              backgroundColor: Colors.focusedInputBackground,
              ...shadowStyle,
            },
          ]}>
          <IconButton
            size={46}
            icon={<Cross width={getSize(32)} height={getSize(32)} />}
            color={Colors.white}
            onPress={onClose}
            extraStyles={styles.alignSelf}
          />
          <TextSemiBold
            text={'Ooopss, You are entering wrong username'}
            color={Colors.orange1}
            fontSize={15}
            extraStyles={{alignSelf: 'center'}}
          />
          <View style={{marginHorizontal: getSize(46)}}>
            <GradientButton
              buttonText={'Try Again'}
              extraStyles={{width: getSize(248)}}
              onPress={onClose}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AlertDialog;

const styles = StyleSheet.create({
  alertView: {
    justifyContent: 'space-between',
    height: getSize(210),
    borderRadius: getSize(25),
    marginHorizontal: getSize(2),
    paddingVertical: getSize(24),
    paddingHorizontal: getSize(32),
  },
  alignSelf: {
    alignSelf: 'center',
  },
});
