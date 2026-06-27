import { StyleSheet, Text, View } from "react-native";

export default function CameraScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera Screen</Text>
      <Text style={styles.subtitle}>
        This is where we will take the food photo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#ffffff",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#555555",
  },
});
