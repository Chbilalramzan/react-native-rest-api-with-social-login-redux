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
import {
  CMarket,
  Crypto,
  II,
  Investment,
  New,
  RE,
  Shares,
} from '../../../styles/SvgIcons';
import getRFSize from '../../../utils/Helper';

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
      icon: <Investment />,
    },
    {
      id: 1,
      name: 'Capital Market',
      icon: <CMarket />,
    },
    {
      id: 2,
      name: 'Shares',
      icon: <Shares />,
    },
    {
      id: 3,
      name: 'Real Estate',
      icon: <RE />,
    },
    {
      id: 4,
      name: 'Intial Investments',
      icon: <II />,
    },
    {
      id: 5,
      name: 'Crypto and NFT',
      icon: <Crypto />,
    },
    {
      id: 6,
      name: 'I am new to this field',
      icon: <New />,
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
              h1={'Which of these topics \nare you interested in!'}
              h2={'Select how you wants to proceed'}
              textColorh1="#E6E6E6"
              fontSizeh1={getRFSize(32)}
              extraStylesh1={styles.extraStylesh1}
              extraStylesh2={styles.extraStylesh2}
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
