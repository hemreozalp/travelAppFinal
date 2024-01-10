import React from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";

const JapanScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/tokyoBackground.jpg")}
            style={styles.backgroundImage}
          />
        </View>
        <View>
          <Text style={styles.title}>Tokyo</Text>
          <Text style={styles.description}>
            Tokyo, the energetic capital of Japan, is a city where modern
            technology meets traditional Japanese culture. The illuminated view
            of the Tokyo Tower, the traditional architecture of the Asakusa
            Temple, and the bustling crowds at Shibuya Crossing reflect the
            city's dynamism. Additionally, the technology stores in Akihabara,
            the traditional atmosphere of ryokans, and the colorful fashion of
            Harajuku showcase Tokyo's diversity and innovation. From traditional
            tea houses to modern shopping districts, the experiences Tokyo
            offers will surely surprise you.
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
    backgroundColor: "#21382e",
    color: "#e08d80",
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
});

export default JapanScreen;
