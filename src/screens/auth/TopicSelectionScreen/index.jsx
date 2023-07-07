import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import TextField from '../../../components/TextField';
import {EmailPurple} from '../../../styles/SvgIcons';
import Colors from '../../../styles/Colors.jsx';
import GradientButton from '../../../components/buttons/GradientButton';
import TextMedium from '../../../components/Text/TextMedium';
import TopicItem from './TopicItem';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';

const TopicSelectionScreen = ({navigation}) => {
  const data = [
    {
      id: 0,
      text: 'Investments',
    },
    {
      id: 1,
      text: 'Digital Market',
    },
    {
      id: 2,
      text: 'Capital Market',
    },
    {
      id: 3,
      text: 'Shares',
    },
    {
      id: 4,
      text: 'Real Estates',
    },
    {
      id: 5,
      text: 'Intial Investments',
    },
    {
      id: 6,
      text: 'Crypto and NFT',
    },
    {
      id: 7,
      text: 'I am new to this field',
    },
  ];

  const onItemSelect = item => {
    console.log(item.text);
  };

  const renderItem = ({item, index}) => {
    return <TopicItem item={item} onItemSelect={onItemSelect} />;
  };

  const gotoConfirmationScreen = () => {
    navigation.navigate('Confirmation');
  };
  return (
    <AuthScreensSafeArea hasShadow bottom>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          ListHeaderComponent={
            <Headings
              extraStyles={{marginTop: getSize(90)}}
              h1={'Which of these topics are you interested in!'}
              h2={'Select how you wants to proceed'}
            />
          }
          renderItem={renderItem}
          style={styles.flatList}
        />

        <View style={styles.bottomButton}>
          <GradientButton
            buttonText={'Next'}
            onPress={gotoConfirmationScreen}
          />
          <TouchableOpacity style={styles.skip} activeOpacity={0.7}>
            <TextMedium
              text={'Skip'}
              fontSize={16}
              onPress={gotoConfirmationScreen}
            />
          </TouchableOpacity>
        </View>
      </View>
    </AuthScreensSafeArea>
  );
};

export default TopicSelectionScreen;

const styles = StyleSheet.create({
  container: {paddingHorizontal: getSize(24)},
  flatList: {
    marginBottom: getSize(170),
  },
  skip: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getSize(30),
    backgroundColor: 'Transparent',
  },
  bottomButton: {
    // backgroundColor: Colors.background,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: getSize(36),
    marginTop: getSize(11),
    marginHorizontal: getSize(20),
  },
});
