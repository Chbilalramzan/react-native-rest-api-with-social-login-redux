import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState, useCallback} from 'react';
import Headings from '../components/Headings';
import getSize from '../../../utils/helpers';
import GradientButton from '../../../components/buttons/GradientButton';
import TextMedium from '../../../components/Text/TextMedium';
import TopicItem from './TopicItem';
import AuthScreensSafeArea from '../../../components/backgrounds/AuthScreensSafeArea';
import {optionsRequest} from '../../../services/Requests';
import {EndPoint} from '../../../constants/APIEndpoints';

const TopicSelectionScreen = ({navigation}) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   getInterests();
  // }, []);

  // const getInterests = () => {
  //   let response = optionsRequest(EndPoint.interests);
  //   if (response) {
  //     setData(response);
  //   }
  // };
  const [selectedInterests, setSelectedInterests] = useState([]);

  const data = [
    {
      id: 0,
      name: 'Investments',
    },
    {
      id: 1,
      name: 'Digital Market',
    },
    {
      id: 2,
      name: 'Capital Market',
    },
    {
      id: 3,
      name: 'Shares',
    },
    {
      id: 4,
      name: 'Real Estates',
    },
    {
      id: 5,
      name: 'Intial Investments',
    },
    {
      id: 6,
      name: 'Crypto and NFT',
    },
    {
      id: 7,
      name: 'I am new to this field',
    },
  ];

  const onItemSelect = useCallback(
    item => {
      setSelectedInterests(prevInterests => {
        // Check if the item is already selected
        const isSelected = prevInterests.some(
          selectedItem => selectedItem.id === item.id,
        );
        // If the item is already selected, remove it from the interests array
        if (isSelected) {
          return prevInterests.filter(
            selectedItem => selectedItem.id !== item.id,
          );
        }
        // If the item is not selected, add it to the interests array
        return [...prevInterests, item];
      });
    },
    [setSelectedInterests],
  );

  const renderItem = useCallback(
    ({item, index}) => (
      <TopicItem
        item={item}
        selectedInterests={selectedInterests}
        index={index}
        onItemSelect={onItemSelect}
      />
    ),
    [selectedInterests, onItemSelect],
  );

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
