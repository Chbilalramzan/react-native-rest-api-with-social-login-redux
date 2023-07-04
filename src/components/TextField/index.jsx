import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import getSize from '../../utils/helpers';
import Colors from '../../styles/Colors';
import TextStyles from '../../styles/TextStyles';
import {validateEmail} from '../../utils/PermissionsAndValidations';

const TextField = ({
  placeholder,
  prefixIcon,
  suffixIcon,
  onSuffixPress,
  validateInput,
  isSecure,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [text, setText] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleTextChange = inputText => {
    setText(inputText);
    // Perform validation logic here
    if (validateInput === 'email') {
      const isValidEmail = validateEmail(inputText);
      setIsValid(isValidEmail);
    }
    // Placeholder validation logic, replace with your own logic
  };

  return (
    <View
      style={[
        styles.container,
        isFocused && styles.focusedContainer,
        !isValid && styles.invalidContainer,
      ]}>
      <View style={styles.prefixContainer}>{prefixIcon}</View>
      <TextInput
        style={[styles.input, TextStyles.style500]}
        value={text}
        onChangeText={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        placeholderTextColor="gray"
        secureTextEntry={isSecure}
      />
      {suffixIcon && (
        <TouchableOpacity
          activeOpacity={0.65}
          style={styles.suffixContainer}
          onPress={onSuffixPress}>
          {suffixIcon}
        </TouchableOpacity>
      )}
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
  invalidContainer: {
    borderColor: 'red',
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: getSize(15),
    paddingRight: getSize(24),
  },
  prefixContainer: {
    marginRight: getSize(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  suffixContainer: {
    position: 'absolute',
    right: getSize(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TextField;
