import React from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";

const TurkiyeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/istanbulBackground.jpg")}
            style={styles.backgroundImage}
          />
        </View>
        <View>
          <Text style={styles.title}>Istanbul</Text>
          <Text style={styles.description}>
            A city with a unique historical texture, breathtaking landscapes,
            and a rich culture, Istanbul is a fairy-tale city. Historical
            landmarks such as Hagia Sophia and the Blue Mosque transport you to
            the enchantment of the past, while the magnificent views of the
            Bosphorus and the sparkling lights of the bridges will mesmerize
            you. Moreover, Istanbul offers a true gastronomic and cultural feast
            for travelers with its colorful bazaars, delicious street food, and
            cafes. With its unique atmosphere, Istanbul promises an
            unforgettable experience to every visitor.
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
    backgroundColor: "#FAF0E6",
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
    backgroundColor: "#b59479",
    color: "#1a7282",
    paddingHorizontal: 120,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: "Roboto",
  },
  description: {
    fontSize: 16,
    fontFamily: "Roboto",
    textAlign: "center",
  },
});

export default TurkiyeScreen;
