import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Your Fitness Journey! ✨</Text>
      <Text style={styles.subtitle}>Let's achieve your goals together.</Text>
      
      {/* Start Workout Button */}
      <TouchableOpacity style={styles.button}> 
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>

      {/* Explore Exercises Button */}
      <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => router.push("/exercises")}> 
        <Text style={[styles.buttonText, styles.secondaryButtonText]}>Explore Exercises</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#ff6600",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  secondaryButton: {
    backgroundColor: "#1E1E1E",
  },
  secondaryButtonText: {
    color: "#ff6600",
  }
});
