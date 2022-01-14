import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStack} from '../navigators/StackNavigator';
import {GameResponse} from '../interface/gameResponse';
import useGameDetail from '../hooks/useGameDetail';
import {ScrollView} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import {ImageCaroucel} from '../components/ImageCaroucel';

interface Props extends StackScreenProps<RootStack, 'Details'> {}
export const DetailsScreen = ({route}: Props) => {
  const game: GameResponse = route.params;
  const {isError, isLoading, messageError, gameDetail} = useGameDetail(game.id);
  const {width} = useWindowDimensions();

  return (
    <>
      {!isLoading ? (
        !isError ? (
          <ScrollView style={{padding: 10, marginTop: 10}}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: game.thumbnail}} />
            </View>
            <View style={styles.gameDescriptionContainer}>
              <Text style={styles.title}>{gameDetail?.title}</Text>
              <Text style={styles.titleSecundary}>Game Description</Text>
              <Text style={styles.gameDescription}>
                {gameDetail?.description}
              </Text>
              {/* requirements */}
              <Text style={styles.titleSecundary}>
                Minimum System Requirements
              </Text>
              <Text style={styles.gameDescription}>
                OS: {gameDetail?.minimum_system_requirements.os}
              </Text>
              <Text style={styles.titleSecundary}>Genre</Text>
              <Text style={styles.gameDescription}>{gameDetail?.genre}</Text>
              <Text style={styles.gameDescription}>
                Processor:{' '}
                {gameDetail?.minimum_system_requirements.processor
                  ? gameDetail?.minimum_system_requirements.processor
                  : 'unknown'}
              </Text>
              <Text style={styles.gameDescription}>
                Memory: {gameDetail?.minimum_system_requirements.memory}
              </Text>
              <Text style={styles.gameDescription}>
                Storage: {gameDetail?.minimum_system_requirements.storage}
              </Text>
              {/* developer */}
              <Text style={styles.titleSecundary}>Developer</Text>
              <Text style={styles.gameDescription}>
                {gameDetail?.developer}
              </Text>
              {/* publisher */}
              <Text style={styles.titleSecundary}>Publisher</Text>
              <Text style={styles.gameDescription}>
                {gameDetail?.publisher}
              </Text>
              {/* relese date */}
              <Text style={styles.titleSecundary}>Release Date</Text>
              <Text style={styles.gameDescription}>
                {gameDetail?.release_date}
              </Text>
            </View>
            {!isLoading && (
              <View>
                <Text style={styles.titleSecundary}>Screenshots</Text>
                <View style={{height: 230, marginTop: 20}}>
                  <Carousel
                    data={gameDetail!.screenshots}
                    renderItem={({item}: any) => (
                      <ImageCaroucel screenshot={item} />
                    )}
                    sliderWidth={width}
                    itemWidth={350}
                  />
                </View>
              </View>
            )}
            <View style={{marginBottom: 50}}></View>
          </ScrollView>
        ) : (
          //  show if an error ocurred
          Alert.alert('Error', messageError)
        )
      ) : (
        <ActivityIndicator color="white" size={50} style={{paddingTop: 50}}/>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 200,
    backgroundColor: 'red',
    marginBottom: 2,
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

  gameDescriptionContainer: {
    marginTop: 25,
  },

  gameDescription: {
    opacity: 0.9,
    color: '#FAFAFA',
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    marginBottom: 10,
    fontSize: 30,
    color: '#FAFAFA',
    fontWeight: 'bold',
  },
  titleSecundary: {
    fontSize: 20,
    color: '#FAFAFA',
    fontWeight: 'bold',
    marginBottom: 10,
    opacity: 0.9,
  },
});

export default DetailsScreen;
