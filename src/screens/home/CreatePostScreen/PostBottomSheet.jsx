import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import BottomSheet, {
  useBottomSheetSpringConfigs,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import {NativeViewGestureHandler} from 'react-native-gesture-handler';
import Colors from '../../../styles/Colors';
import getSize from '../../../utils/helpers';
import BottomSheetItem from './BottomSheetItem';

const PostBottomSheet = (
  {
    navigation,
    snapIndex,
    snapPoints,
    handleSheetChanges,
    setSnapIndex,
    itemList,
    bottomSheetBackdrop,
    ...props
  },
  bottomSheetRef,
) => {
  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  });

  const renderItem = ({item, index}) => (
    <BottomSheetItem
      itemTitle={item.title}
      itemIcon={item.icon}
      iconBackgroundColor={item.iconBackgroundColor}
    />
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={snapIndex}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      animationConfigs={animationConfigs}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
      enableOverDrag={false}
      enablePanDownToClose={false}
      handleIndicatorStyle={styles.handleIndicatorStyle}
      handleStyle={styles.handleStyle}
      style={styles.sheet}
      backgroundStyle={styles.backgroundStyle}
      backdropComponent={bottomSheetBackdrop}>
      <NativeViewGestureHandler disallowInterruption={true}>
        <View style={styles.contentContainer}>
          <BottomSheetFlatList data={itemList} renderItem={renderItem} />
        </View>
      </NativeViewGestureHandler>
    </BottomSheet>
  );
};

export default React.memo(React.forwardRef(PostBottomSheet));

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: Colors.authButton,
  },
  handleIndicatorStyle: {
    width: 40,
    backgroundColor: 'white',
    opacity: 0.26,
  },
  sheet: {
    paddingBottom: getSize(42),
  },
  backgroundStyle: {
    borderTopEndRadius: getSize(25),
    borderTopStartRadius: getSize(25),
    backgroundColor: Colors.authButton,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 0, height: 0},
        shadowColor: '#160462',
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 30,
      },
    }),
  },
});
