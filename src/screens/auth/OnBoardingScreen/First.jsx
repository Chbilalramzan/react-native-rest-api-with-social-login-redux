import {StyleSheet, View} from 'react-native';
import React from 'react';
import getSize from '../../../utils/helpers';
import Headings from '../components/Headings';
import TextMedium from '../../../components/Text/TextMedium';
import Colors from '../../../styles/Colors';
import {Mail, Message, Messenger} from '../../../styles/SvgIcons';
import MessageItem from './MessageItem';

const First = () => {
  const data = [
    {
      icon: <Message width={getSize(28)} height={getSize(28)} />,
      title: 'Mike Tyson',
      message: 'Hi, I am Mike! Make your finance more growsome',
    },
    {
      icon: <Mail width={getSize(28)} height={getSize(28)} />,
      title: 'Robert K',
      message: 'The best of the Platform at to save money',
    },
    {
      icon: <Messenger width={getSize(28)} height={getSize(28)} />,
      title: 'Anna Thompson',
      message: 'It was a great experience and got a mentor',
    },
    {
      icon: <Message width={getSize(28)} height={getSize(28)} />,
      title: 'Jennifer Laura',
      message: 'Investing and now i am flexible in money',
    },
  ];
  return (
    <View>
      <Headings
        h1={'Save money by sharing, connecting & groups information.'}
        fontSizeh1={24}
        h2={
          'Welcome to B.UP! Start your financial journey and connect with mentors to achieve your goals.'
        }
        extraStyles={styles.extraStyles}
        extraStylesh1={styles.extraStylesh1h2}
        extraStylesh2={styles.extraStylesh1h2}
      />

      <View style={styles.card}>
        <TextMedium text={'Save money, connect with groups'} fontSize={13} />

        <View style={{marginTop: getSize(24)}}>
          <MessageItem data={data[0]} />
          <MessageItem data={data[1]} />
          <MessageItem data={data[2]} />
          <MessageItem data={data[3]} />
        </View>
      </View>
    </View>
  );
};

export default First;
const styles = StyleSheet.create({
  extraStyles: {
    marginTop: getSize(100),
  },
  extraStylesh1h2: {
    textAlign: 'center',
  },
  card: {
    marginTop: getSize(86),
    marginHorizontal: getSize(24),
    backgroundColor: Colors.gray1,
    borderRadius: getSize(25),
    paddingHorizontal: getSize(16),
    paddingVertical: getSize(16),
  },
});
