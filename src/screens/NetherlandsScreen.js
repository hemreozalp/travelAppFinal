import React from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";

const NetherlandsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/amsterdamBackground.png")}
            style={styles.backgroundImage}
          />
        </View>
        <View>
          <Text style={styles.title}>Amsterdam</Text>
          <Text style={styles.description}>
            Amsterdam, the vibrant capital of the Netherlands, stands out with
            its historic canals, traditional houses, and unique culture. Art
            galleries like the Rijksmuseum and the Van Gogh Museum not only
            attract art lovers but also showcase the city's rich artistic
            heritage. The emotional atmosphere of the Anne Frank House
            emphasizes its historical significance. Exploring local flavors in
            Amsterdam's various cafes and visiting colorful flower markets
            provide excellent opportunities to discover the city's unique
            atmosphere.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF5E6",
    resizeMode: "cover",
    paddingBottom: 169,
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
    backgroundColor: "#FF5733",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: "Roboto",
    textAlign: "center",
    flexWrap: "nowrap",
  },
  description: {
    fontSize: 16,
    fontFamily: "Roboto",
    textAlign: "center",
  },
});

export default NetherlandsScreen;
