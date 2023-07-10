import {StyleSheet, View} from 'react-native';
import React from 'react';
import Post from '../components/Post';
import TopGroups from '../components/TopGroups';
import TopMentors from '../components/TopMentors';
import GroupsToFollow from '../components/GroupsToFollow';
import TopBlogs from '../components/TopBlogs';
import TopMentorsItem from '../components/TopMentors/TopMentorsItem';

const NewsFeed = () => {
  return (
    <View>
      <Post withImage />
      <TopGroups />
      <Post withImage />
      <TopMentors />
      <Post />
      <GroupsToFollow />
      <Post />
      <TopBlogs />
    </View>
  );
};

export default NewsFeed;

const styles = StyleSheet.create({});
