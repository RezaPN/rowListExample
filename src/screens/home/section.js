import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import FastImage from 'react-native-fast-image'
import {allCapitalInWord} from '../../utils/utilization';
import styles from './styles';

export default class Section extends React.PureComponent {
  render() {
    const {data, navigation} = this.props;
    return (
      <TouchableOpacity
        onPress={navigation}
        key={data.id}
        style={styles.sectionContainer}>
        <FastImage
          source={{uri: data.thumbnailUrl}}
          resizeMode={'contain'}
          style={styles.image}
        />

        <Text numberOfLines={2} style={styles.sectionTitle}>
          {allCapitalInWord(data.title)}
        </Text>
      </TouchableOpacity>
    );
  }
}
