import {Dimensions} from 'react-native';

const getSize = fontSize => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const figmaWidth = 430; // Width of the iPhone 14 Pro Max frame in Figma
  const figmaHeight = 932; // Height of the iPhone 14 Pro Max frame in Figma
  const widthFactor = windowWidth / figmaWidth;
  const heightFactor = windowHeight / figmaHeight;
  const factor = Math.min(widthFactor, heightFactor);
  return Math.round(factor * fontSize);
};

export default getSize;
