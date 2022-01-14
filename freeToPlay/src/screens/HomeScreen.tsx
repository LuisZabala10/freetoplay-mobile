import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import GlobalStyles from '../theme/GlobalStyle';
import {RootStack} from '../navigators/StackNavigator';
import Search from '../components/Search';
import useGames from '../hooks/useGames';
import {ScrollView} from 'react-native-gesture-handler';
import GameItem from '../components/GameItem';
import {ActivityIndicator} from 'react-native-paper';

export interface Props extends StackScreenProps<RootStack, 'Home'> {}

export const HomeScreen = ({navigation}: Props) => {
  const [textSearch, setTextSearch] = useState('');

  const {games, isLoading, isError, messageError} = useGames(textSearch);

  const search = (text: string) => {
    setTextSearch(text);
  };

  return (
    <View style={GlobalStyles.screenContainer}>
      <View style={styles.containerTitle}>
        <Text style={styles.heardertitle}> Free Games </Text>
      </View>
      <View style={styles.searchContainer}>
        <Search funcSearch={search} textValue={textSearch} />
      </View>

      {!isLoading ? (
        !isError ? (
          <ScrollView style={{paddingHorizontal: 10}}>
            {games.map(game => {
              return <GameItem key={game.id} game={game}  />;
            })}
            <View style={{marginBottom: 50}}></View>
          </ScrollView>
        ) : (
          //  show if an error ocurred
          Alert.alert('Error', messageError)
        )
      ) : (
        <ActivityIndicator color="white" size={50} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    height: 50,
    marginTop: 20,
    padding: 8,
    alignItems: 'center',
  },

  heardertitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  searchContainer: {
    paddingHorizontal: 10,
    marginBottom: 8,
  },
});

export default HomeScreen;
