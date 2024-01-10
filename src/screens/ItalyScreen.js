import React from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";

const ItalyScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/romaBackground.jpg")}
            style={styles.backgroundImage}
          />
        </View>
        <View style={styles.paddingContainer}>
          <Text style={styles.title}>Rome</Text>
          <Text style={styles.description}>
            Rome, the capital of Italy, is a fascinating destination with its
            rich historical treasures and impressive cultural texture.
            Historical structures such as the Colosseum and Roman Forum, bearing
            the traces of the ancient Roman Empire, promise visitors a journey
            through the depths of time. Important religious sites like St.
            Peter's Basilica and the Sistine Chapel in the Vatican City offer a
            unique experience for art and architecture enthusiasts.
            Additionally, exploring the charming streets of Rome, sitting in
            small cafes, and discovering local flavors enhance the city's warm
            and inviting atmosphere.
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
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#FFF5E6",
    resizeMode: "cover",
    paddingBottom: 150,
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
    backgroundColor: "#8E001C",
    color: "#FFB300",
    paddingHorizontal: 120,
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
  paddingContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default ItalyScreen;
