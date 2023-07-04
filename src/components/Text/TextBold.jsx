import React from 'react';
import {Text} from 'react-native';
import TextStyles from '../../styles/TextStyles';
import getSize from '../../utils/helpers';

const TextBold = ({text, color, extraStyles, fontSize, ...props}) => {
  const textStyle = [
    TextStyles.style700,
    extraStyles,
    {fontSize: getSize(fontSize), color: color ? color : '#ffffff'},
  ];

  return (
    <Text style={textStyle} {...props}>
      {text}
    </Text>
  );
};

export default TextBold;
