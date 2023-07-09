import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import getSize from '../../utils/helpers';
import TextStyles from '../../styles/TextStyles';
import Colors from '../../styles/Colors';

const PostTextInput = ({
  value,
  handleChangeText,
  fieldHeight = 60,
  ...props
}) => {
  const [inputHeight, setInputHeight] = React.useState(fieldHeight);
  const handleContentSizeChange = event => {
    const {contentSize} = event.nativeEvent;
    setInputHeight(contentSize.height);
  };
  return (
    <View style={styles.container}>
      <TextInput
        multiline
        numberOfLines={4}
        placeholder="What's on your mind?"
        placeholderTextColor={'gray'}
        value={value}
        onContentSizeChange={handleContentSizeChange}
        onChangeText={handleChangeText}
        style={[styles.input, {height: fieldHeight}]}
      />
    </View>
  );
};

export default PostTextInput;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: getSize(24),
    color: Colors.heading2Text,
    ...TextStyles.style500,
  },
});
