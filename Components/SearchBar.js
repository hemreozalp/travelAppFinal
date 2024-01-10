import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchBarContainer}>
      <Feather name="search" size={24} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search city name for ⭐⭐⭐⭐⭐ "
        style={styles.searchBar}
        value={term}
        //onChangeText={(newTerm) => onTermChange(newTerm)}
        //onEndEditing={() => onTermSubmit()}
        onChangeText={onTermChange}
        onTermSubmit={() => console.log("term was submitted")}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%", // Adjust width as needed
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: "center",
  },
  searchBar: {
    width: "85%", // Adjust width as needed
    color: "black",
    fontWeight: "400",
    fontSize: 14,
  },
});
