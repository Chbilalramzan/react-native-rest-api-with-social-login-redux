import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppSafeArea from '../../../components/backgrounds/AppSafeArea';
import Header from '../../../components/Header';
import Colors from '../../../styles/Colors';
import BottomSheet from '@gorhom/bottom-sheet';
import PostBottomSheet from './PostBottomSheet';
import {ImageIcon, UserMention} from '../../../styles/SvgIcons';
import ProfileItem from './ProfileItem';
import PostTextInput from '../../../components/TextField/PostTextInput';
import BoxImage from '../../../components/images/BoxImage';
import getSize from '../../../utils/helpers';

const CreatePostScreen = ({navigation, route}) => {
  const [text, setText] = React.useState(route.params.text);
  const [imagePath, setImagePath] = React.useState(null);
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
          setImagePath={setImagePath}
          isOpenImagePicker={route.params.openPicker}
        />
        <ProfileItem roleBackgroundColor={Colors.authButton} />
        <PostTextInput value={text} handleChangeText={handleChangeText} />
        <View style={{marginHorizontal: getSize(24)}}>
          {imagePath !== null && (
            <BoxImage
              path={{uri: imagePath}}
              height={234}
              width={'100%'}
              radius={0}
              resizeMode={'cover'}
            />
          )}
        </View>
      </View>
    </AppSafeArea>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.tabScreenBackgorund},
});
