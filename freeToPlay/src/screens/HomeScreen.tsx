import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import GlobalStyles from '../theme/GlobalStyle';
import {RootStack} from '../navigators/StackNavigator';
import Search from '../components/Search';
export interface Props extends StackScreenProps<RootStack, 'Home'> {}

export const HomeScreen = ({navigation}: Props) => {
  const [textSearch, setTextSearch] = useState('');

  const search = (text: string) => {
    setTextSearch(text);
  };
  return (
    <View style={GlobalStyles.screenContainer}>
      <View style={styles.containerTitle}>
        <Text style={styles.heardertitle}> Free Games </Text>
      </View>
      <View style={styles.searchContainer}>
        <Search funcSearch={setTextSearch} textValue={textSearch} />
      </View>
      <Button
        onPress={() => navigation.navigate('Details')}
        title="Go to Details"
      />
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
    paddingHorizontal: 15,
    marginBottom: 8,
  },
});

export default HomeScreen;
