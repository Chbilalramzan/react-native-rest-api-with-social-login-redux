import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import getSize from '../../../../utils/helpers';
import TextSemiBold from '../../../../components/Text/TextSemiBold';
import Colors from '../../../../styles/Colors';
import BoxImage from '../../../../components/images/BoxImage';
import TextRegular from '../../../../components/Text/TextRegular';
import TextMedium from '../../../../components/Text/TextMedium';
import {AddUser, Connections, Star} from '../../../../styles/SvgIcons';
import Dot from '../Dot';

const TopBlogs = () => {
  const data = [
    {
      id: 0,
      image: require('../../../../../assets/images/TG1.png'),
      title: 'Learn, Laugh and Investment',
      people: '1220 people',
    },
    {
      id: 1,
      image: require('../../../../../assets/images/TG2.png'),
      title: 'Duddies FInancials',
      people: '1220 people',
    },
  ];
  return (
    <>
      <View
        style={{
          paddingTop: getSize(22),
          paddingBottom: getSize(30),
          paddingStart: getSize(24),
          paddingEnd: getSize(24),
        }}>
        <View style={styles.heading}>
          <TextSemiBold
            text={'Top blogs today'}
            fontSize={15}
            color={Colors.heading3Text}
          />
        </View>
        <View
          style={{
            backgroundColor: Colors.purple1,
            paddingStart: getSize(14),
            paddingVertical: getSize(6),
            paddingEnd: getSize(8),
            borderRadius: getSize(15),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: getSize(9),
            }}>
            <BoxImage
              path={require('../../../../../assets/images/blog1.png')}
              height={getSize(66)}
              width={getSize(86)}
              radius={getSize(12)}
              resizeMode="cover"
            />
            <View style={{marginStart: getSize(9)}}>
              <TextSemiBold
                text={'Hidden Perks of Investments'}
                fontSize={14}
              />
              <View style={{width: getSize(270), marginTop: getSize(4)}}>
                <TextRegular
                  text={
                    'Now a days its simple and very fast to buy NFT’s, its more of a investment on your assets. view more'
                  }
                  fontSize={11.5}
                  color={Colors.heading5Text}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: getSize(9),
            }}>
            <BoxImage
              path={require('../../../../../assets/images/blog2.png')}
              height={getSize(66)}
              width={getSize(86)}
              radius={getSize(12)}
              resizeMode="cover"
            />
            <View style={{marginStart: getSize(9)}}>
              <TextSemiBold
                text={'How companies manage to get Big'}
                fontSize={14}
              />
              <View style={{width: getSize(270), marginTop: getSize(4)}}>
                <TextRegular
                  text={
                    'Now a days its simple and very fast to buy NFT’s, its more of a investment on your assets. view more'
                  }
                  fontSize={11.5}
                  color={Colors.heading5Text}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: getSize(9),
            }}>
            <BoxImage
              path={require('../../../../../assets/images/blog3.png')}
              height={getSize(66)}
              width={getSize(86)}
              radius={getSize(12)}
              resizeMode="cover"
            />
            <View style={{marginStart: getSize(9)}}>
              <TextSemiBold
                text={'The Hard life of investments'}
                fontSize={14}
              />
              <View style={{width: getSize(270), marginTop: getSize(4)}}>
                <TextRegular
                  text={
                    'Now a days its simple and very fast to buy NFT’s, its more of a investment on your assets. view more'
                  }
                  fontSize={11.5}
                  color={Colors.heading5Text}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* Second Blog Start */}

      <View
        style={{
          paddingTop: getSize(22),
          paddingBottom: getSize(30),
          paddingHorizontal: getSize(24),
        }}>
        <View style={styles.heading}>
          <TextSemiBold
            text={'Top blogs today'}
            fontSize={15}
            color={Colors.heading3Text}
          />
          <TextSemiBold
            text={'See all'}
            fontSize={12}
            color={Colors.heading2Text}
          />
        </View>

        <View style={styles.blogContainer}>
          <Image
            source={require('../../../../../assets/images/p1.png')}
            style={styles.image}
          />

          <View style={styles.blogContent}>
            <View>
              <TextSemiBold text={'Danial Clarke'} fontSize={15} />
              <View style={styles.container3}>
                <TextMedium
                  text={'Financial Expert'}
                  fontSize={11.5}
                  color={Colors.heading4Text}
                />
                <Dot size={4} marginHorizontal={4} />
                <TextMedium text={`${5} `} fontSize={12.5} />
                <Star width={getSize(10.4)} height={getSize(10.4)} />
              </View>
            </View>
            <TextMedium
              text={'Peps and Co, LTD'}
              fontSize={12}
              color={Colors.heading2Text}
            />
          </View>

          <TouchableOpacity style={styles.addButton}>
            <AddUser width={getSize(20)} height={getSize(20)} />
          </TouchableOpacity>
        </View>
        <View style={styles.blogContainer}>
          <Image
            source={require('../../../../../assets/images/p2.png')}
            style={styles.image}
          />

          <View style={styles.blogContent}>
            <View>
              <TextSemiBold text={'Michel Stone'} fontSize={15} />
              <View style={styles.container3}>
                <TextMedium
                  text={'Financial Expert'}
                  fontSize={11.5}
                  color={Colors.heading4Text}
                />
                <Dot size={4} marginHorizontal={4} />
                <TextMedium text={`${5} `} fontSize={12.5} />
                <Star width={getSize(10.4)} height={getSize(10.4)} />
              </View>
            </View>
            <TextMedium
              text={'Sony Enterprises, California-USA'}
              fontSize={12}
              color={Colors.heading2Text}
            />
          </View>

          <TouchableOpacity style={styles.addButton}>
            <AddUser width={getSize(20)} height={getSize(20)} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default TopBlogs;

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: getSize(8),
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blogContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.postBackgroundColor,
    borderRadius: getSize(15),
    marginVertical: getSize(6),
  },
  image: {
    height: getSize(82),
    width: getSize(82),
    resizeMode: 'cover',
  },
  blogContent: {
    marginStart: getSize(9),
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: getSize(8),
  },

  addButton: {
    height: getSize(32),
    width: getSize(32),
    padding: getSize(6),
    borderRadius: getSize(7),
    backgroundColor: Colors.purple1,
    marginEnd: getSize(20),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    right: 0,
  },
});
