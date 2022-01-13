import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GameResponse} from '../interface/gameResponse';

interface Props {
  game: GameResponse;
}

const GameItem = ({game}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.85}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: game.thumbnail}} />
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>{game.title}</Text>
          <Text style={styles.infoGenre}>{game.genre}</Text>
          <Text style={styles.infoDate}>Published {game.release_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 110,
    backgroundColor: '#404dac',
    borderTopLeftRadius: 5,
    borderTopEndRadius: 5,
    elevation: 10,
    borderBottomWidth: 0.5,
    borderColor: '#fff',
  },

  imageContainer: {
    flex: 1,
    borderTopLeftRadius: 5,
  },

  image: {
    flex: 1,
    borderTopLeftRadius: 5,
  },

  info: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 5,
    justifyContent: 'space-around',
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.9,
  },

  infoGenre: {
    fontSize: 13,
    color: 'white',
    opacity: 0.7,
  },

  infoDate: {
    fontSize: 10,
    color: 'white',
    opacity: 0.6,
    alignSelf: 'flex-end',
  },
});

export default GameItem;
