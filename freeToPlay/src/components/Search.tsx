import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';

interface Props {
    funcSearch: (text:string)=> void;
    textValue: string
}

export const Search = ({funcSearch, textValue}:Props) => {
  return (
    <View style={styles.textInputContainer}>
      <Searchbar
      inputStyle={{
          fontSize:18,
          fontWeight: 'bold',
          padding: 0
      }}
        style={styles.searchInput}
        icon="magnify"
        placeholder="search..."
        value={textValue}
        onChangeText={funcSearch}  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    padding: 5,
  },
  searchInput: {
    borderRadius: 20,
    borderWidth: 1,
    opacity: 0.8,
    borderColor: '#969696',
    backgroundColor: '#999999',
  },
});

export default Search;
