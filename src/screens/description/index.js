import React from 'react';
import {Text, View, ScrollView} from 'react-native';

import {useRoute} from '@react-navigation/native';
import mock from './mock.json';
import {allCapitalInWord} from '../../utils/utilization';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const Description = ({navigation}) => {
  const route = useRoute();

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <FastImage
          source={{uri: route.params.data.url}}
          resizeMode={'stretch'}
          style={styles.image}
        />
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>
            {allCapitalInWord(route.params.data.title)}
          </Text>
        </View>
        <View style={styles.deskripsiWrapper}>
          <Text style={styles.deskripsiTitle}>Deskripsi</Text>
          <Text style={styles.deskripsiText}>{mock.example}</Text>
        </View>
      </View>
      <View style={styles.gap} />
    </ScrollView>
  );
};

export default Description;
