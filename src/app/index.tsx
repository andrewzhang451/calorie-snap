import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [restaurant, setRestaurant] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CalorieSnap</Text>
      <Text style={styles.subtitle}>Estimate calories from a food photo.</Text>

      <Text style={styles.label}>Where did you get this food?</Text>

      <TextInput
        style={styles.input}
        placeholder="Mcdonald's, Chipotle, Homemade..."
        value={restaurant}
        onChangeText={setRestaurant}
      />

      <Pressable
        style={styles.button}
        onPress={() => {
          alert(`Take Food button pressed!\nRestaurant: ${restaurant}`);
        }}
      >
        <Text style={styles.buttonText}>📷 Take Food Photo</Text>
      </Pressable>
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
    fontSize: 36,
    fontWeight: "700",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 32,
    color: "#555555",
  },
  button: {
    backgroundColor: "#111111",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },

  input: {
    width: "100%",
    maxWidth: 300,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 24,
  },
});
