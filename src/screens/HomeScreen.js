import React, { useState, useEffect } from "react";
import SearchBar from "../../Components/SearchBar";
import YelpApi from "./api/YelpAPI";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const HomeScreen = (searchTerm) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");

  const navigation = useNavigation();
  const TurkiyePress = () => {
    navigation.navigate("Turkiye");
  };
  const ItalyPress = () => {
    navigation.navigate("Italy");
  };
  const FrancePress = () => {
    navigation.navigate("France");
  };
  const NetherlandsPress = () => {
    navigation.navigate("Netherlands");
  };
  const JapanPress = () => {
    navigation.navigate("Japan");
  };

  const searchApi = async (searchTerm) => {
    try {
      const response = await YelpApi.get("/search", {
        params: {
          limit: 5,
          term: searchTerm,
          location: searchTerm,
        },
      });
      setResults(response.data.businesses);
      seterrorMessage("");
    } catch (err) {
      seterrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.exploreText}>
          Let's explore the world's most favourite cities!
        </Text>
        <Image
          source={require("../../assets/icons/explorer.png")}
          style={styles.icon}
        />
      </View>
      <View>
        <View style={styles.categories}>
          <Text style={styles.categoriesText}>Leisure: </Text>
        </View>
      </View>

      <View>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />
        <View style={styles.searchBarText}>
          {errorMessage && results.length === 0 ? (
            <Text>{errorMessage}</Text>
          ) : null}

          {term && results.length > 0 && (
            <Text>We have found {results.length} results</Text>
          )}

          {term &&
            results
              .sort((a, b) => b.rating - a.rating)
              .map((business) => (
                <Text key={business.id}>
                  {business.name} - Rating ({business.rating})
                </Text>
              ))}
        </View>
      </View>

      <View style={styles.exploreTypeGeneralView}>
        <View style={styles.exploreTypeRow}>
          <View style={styles.exploreTypeView}>
            <TouchableOpacity
              style={styles.countryButton}
              onPress={TurkiyePress}
            >
              <Image
                source={require("../../assets/images/turkiye.png")}
                style={styles.countryImage}
              />

              <Text style={styles.imgText}>Turkiye</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.exploreTypeView}>
            <TouchableOpacity style={styles.countryButton} onPress={ItalyPress}>
              <Image
                source={require("../../assets/images/italy.png")}
                style={styles.countryImage}
              />
              <Text style={styles.imgText}>Italy</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.exploreTypeView}>
            <TouchableOpacity
              style={styles.countryButton}
              onPress={FrancePress}
            >
              <Image
                source={require("../../assets/images/france.png")}
                style={styles.countryImage}
              />
              <Text style={styles.imgText}>France</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.exploreTypeRow}>
          <View style={styles.exploreTypeView}>
            <TouchableOpacity
              style={styles.countryButton}
              onPress={NetherlandsPress}
            >
              <Image
                source={require("../../assets/images/netherlands.png")}
                style={styles.countryImage}
              />
              <Text style={styles.imgText}>Netherlands</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.exploreTypeView}>
            <TouchableOpacity style={styles.countryButton} onPress={JapanPress}>
              <Image
                source={require("../../assets/images/japan.png")}
                style={styles.countryImage}
              />
              <Text style={styles.imgText}>Japan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAF0E6",
  },
  headerView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    justifyContent: "space-evenly",
  },
  exploreText: {
    fontSize: 26,
    width: 200,
    fontWeight: "bold",
    color: "#191970",
  },
  categories: {
    marginTop: 20,
    marginLeft: 25,
    flexDirection: "row",
  },
  categoriesText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  exploreTypeView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  exploreTypeRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 40,
  },
  exploreTypeGeneralView: {
    marginTop: 40,
    paddingBottom: 200,
  },
  countryImage: {
    width: 50,
    height: 50,
  },
  imgText: {
    marginTop: 5,
    fontWeight: "bold",
  },
  countryButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f5e4d3",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
  },
  searchBarText: {
    paddingTop: 5,
    marginLeft: 50,
  },
});

export default HomeScreen;
