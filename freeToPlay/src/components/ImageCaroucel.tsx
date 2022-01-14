import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Screenshot} from '../interface/gameDetails';

interface Props {
  screenshot: Screenshot;
}

export const ImageCaroucel = ({screenshot}: Props) => {
  return (
    <View style={styles.caroucelContainer}>
      <Image style={styles.image} source={{uri: screenshot.image}} />
    </View>
  );
};

const styles = StyleSheet.create({
  caroucelContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10,

  },

  image: {
    flex: 1,
    borderRadius: 18,
  },
});
