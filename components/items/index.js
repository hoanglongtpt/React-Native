import * as React from 'react';
import {  Text, View,TouchableOpacity } from 'react-native';
import styles from './style';

export function Item({val,bg,onChoin}) {
  const number = val < 10 ? `0${val}` : val;
  return (
    <TouchableOpacity style={styles.container} onPress={() => onChoin(val)}>
        <View style={[styles.item,bg]}>
            <Text style={styles.itemNumber}>
                {number}
            </Text>
        </View>
    </TouchableOpacity>
  );
};