import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppSafeArea from '../../../components/backgrounds/AppSafeArea';
import Header from '../../../components/Header';
import Colors from '../../../styles/Colors';
import BottomSheet from '@gorhom/bottom-sheet';
import PostBottomSheet from './PostBottomSheet';
import {ImageIcon, UserMention} from '../../../styles/SvgIcons';

const CreatePostScreen = ({navigation}) => {
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
      </View>
    </AppSafeArea>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.tabScreenBackgorund},
});
