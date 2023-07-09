import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import AppSafeArea from '../../../components/backgrounds/AppSafeArea';
import Header from '../../../components/Header';
import Colors from '../../../styles/Colors';
import BottomSheet from '@gorhom/bottom-sheet';
import PostBottomSheet from './PostBottomSheet';
import {CommunityRed, ImageIcon, UserMention} from '../../../styles/SvgIcons';
import getSize from '../../../utils/helpers';
import RoundImage from '../../../components/images/RoundImage';
import TextSemiBold from '../../../components/Text/TextSemiBold';
import TextMedium from '../../../components/Text/TextMedium';
import TextStyles from '../../../styles/TextStyles';
import ProfileItem from './ProfileItem';
import PostTextInput from '../../../components/TextField/PostTextInput';

const CreatePostScreen = ({navigation, route}) => {
  const [text, setText] = React.useState('');
  const [snapIndex, setSnapIndex] = React.useState(1);
  // ref
  const bottomSheetRef = React.useRef < BottomSheet > null;
  // variables
  const snapPoints = React.useMemo(() => ['6%', '22%', '40%'], []);

  const bottomSheetItemList = [
    {
      title: 'Add Photo / Video',
      icon: <ImageIcon />,
      iconBackgroundColor: '#FFE5EA',
    },
    {
      title: 'Add People in the post',
      icon: <UserMention />,
      iconBackgroundColor: '#FFF5E6',
    },
  ];

  const handleChangeText = value => {
    setText(value);
  };

  return (
    <AppSafeArea style={{backgroundColor: Colors.headerBackground}}>
      <Header
        showBack
        title={'Create a New Post'}
        showRightButton
        showNotification={false}
      />
      <View style={styles.container}>
        <PostBottomSheet
          bottomSheetRef={bottomSheetRef}
          snapIndex={snapIndex}
          snapPoints={snapPoints}
          setSnapIndex={setSnapIndex}
          itemList={bottomSheetItemList}
          bottomSheetBackdrop={null}
        />
        <ProfileItem roleBackgroundColor={Colors.authButton} />
        <PostTextInput value={text} handleChangeText={handleChangeText} />
      </View>
    </AppSafeArea>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.tabScreenBackgorund},
});
