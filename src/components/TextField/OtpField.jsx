import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import getSize from '../../utils/helpers';
import Colors from '../../styles/Colors.jsx';

const OtpField = ({
  onChangeText,
  secureTextEntry = false,
  autoCapitalize = 'none',
}) => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleTextChange = inputText => {
    setText(inputText);
    onChangeText(inputText);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const borderColor =
    text.length < 6 && isFocused
      ? 'red'
      : !isFocused
      ? Colors.unfocusedInputBackground
      : Colors.borderPurple;

  return (
    <View
      style={[
        styles.container,
        isFocused && styles.focusedContainer,
        {borderColor},
      ]}>
      <TextInput
        style={[styles.input, text.length > 0 && styles.inputWithLetterSpacing]}
        value={text}
        onChangeText={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={'O T P'}
        placeholderTextColor={'gray'}
        keyboardType={'decimal-pad'}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        maxLength={6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: getSize(10),
    height: getSize(50),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: getSize(1),
    borderRadius: getSize(15),
    borderColor: Colors.unfocusedInputBackground,
    backgroundColor: Colors.background,
    paddingHorizontal: getSize(18),
  },
  focusedContainer: {
    borderWidth: getSize(2),
    borderColor: Colors.borderPurple,
    backgroundColor: Colors.focusedInputBackground,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: getSize(15),
    textAlign: 'center',
  },
  inputWithLetterSpacing: {
    letterSpacing: 24,
  },
});

export default OtpField;
