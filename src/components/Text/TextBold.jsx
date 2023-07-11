import React from 'react';
import {Text} from 'react-native';
import TextStyles from '../../styles/TextStyles';
import getSize from '../../utils/helpers';

const TextBold = ({text, color, extraStyles, fontSize, ...props}) => {
  const textStyle = [
    extraStyles,
    {
      fontSize: getSize(fontSize),
      color: color ? color : '#ffffff',
      fontFamily: 'GeneralSans-Bold',
      ...TextStyles.style700,
    },
  ];

  return (
    <Text style={textStyle} {...props}>
      {text}
    </Text>
  );
};

export default TextBold;
