import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';

interface Props {
  funcSearch: (text: string) => void;
  textValue: string;
}

export const Search = ({funcSearch, textValue}: Props) => {
  return (
    <View style={styles.textInputContainer}>
      <Searchbar
        iconColor="white"
        inputStyle={{
          fontSize: 18,
          fontWeight: 'bold',
          padding: 0,
          color: 'white',
        }}
        placeholderTextColor="white"
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
    marginBottom: 15,
  },
  searchInput: {
    borderRadius: 15,
    borderWidth: 1,
    opacity: 0.8,
    borderColor: 'white',
    backgroundColor: 'rgb(45,49,66)',
  },
});

export default Search;
