import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import IconButton from '../../../components/buttons/IconButton';
import GradientButton from '../../../components/buttons/GradientButton';
import getSize from '../../../utils/helpers';
import Colors from '../../../styles/Colors';
import TextSemiBold from '../../../components/Text/TextSemiBold';

const AlertDialog = ({text, onPress, ...props}) => {
  const shadowStyle = Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 15,
      },
      shadowOpacity: 0.16,
      shadowRadius: 30,
    },
    android: {
      elevation: 10,
    },
  });

  return (
    <View style={{flex: 1}}>
      <Modal isVisible={true}>
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
            iconSize={32}
            iconColor={Colors.red}
            color={Colors.white}
            iconName={'close'}
            onPress={() => {}}
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
              onPress={onPress}
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
