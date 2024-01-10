import React from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";

const FranceScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/parisBackground.png")}
            style={styles.backgroundImage}
          />
        </View>
        <View>
          <Text style={styles.title}>Paris</Text>
          <Text style={styles.description}>
            Paris, the capital of France, is renowned for its romance and art.
            The sparkling view of the Eiffel Tower, the world-class artworks in
            the Louvre Museum, and the impressive architecture of Notre-Dame
            Cathedral contribute to the unique charm of Paris. Walking through
            the narrow streets of Montmartre, visiting artists' studios, and
            enjoying a romantic dinner along the Seine River are perfect ways to
            fully experience Paris's romantic atmosphere.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAF0E6",
    resizeMode: "cover",
    paddingBottom: 223,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    marginTop: -20,
    flex: 1,
    width: 450,
    height: 250,
  },
  title: {
    marginTop: -7,
    paddingVertical: 5,
    borderRadius: 7,
    backgroundColor: "#5e43a1",
    color: "#d4a7c5",
    paddingHorizontal: 120,
    alignItems: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: "Roboto",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontFamily: "Roboto",
    textAlign: "center",
  },
});

export default FranceScreen;
