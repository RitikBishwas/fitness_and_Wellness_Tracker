import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";

const exerciseData = {
  "Push-ups": {
    image: "https://tostpost.com/images/2018-Mar/28/da1c83d1c74739e363b38856d0a5b66b/1.jpg",
    description: "A fundamental upper-body exercise that targets the chest, shoulders, and triceps. Push-ups also engage the core and lower back muscles, promoting overall body strength and stability.",
  },
  "Squats": {
    image: "https://i.pinimg.com/originals/36/73/fd/3673fd7f18ebe8455b428ceed1ad7966.jpg",
    description: "A foundational lower-body exercise that strengthens the quadriceps, hamstrings, glutes, and calves. Squats also engage the core, enhancing balance and stability.",
  },
  "Plank": {
    image: "https://i.pinimg.com/originals/56/79/6b/56796bcee602b7c066a25803b35f184b.jpg",
    description: "A great core stabilization exercise that engages multiple muscle groups.",
  },
  "Bicep Curls": {
    image: "https://homegymreview.co.uk/wp-content/uploads/exercises/16771101-Dumbbell-Seated-Bicep-Curl_Upper-Arms_max-scaled.jpg",
    description: "An arm workout that strengthens your biceps using dumbbells.",
  },
};

export default function ExerciseDetailsScreen() {
  const { name, type } = useLocalSearchParams();
  const exercise = exerciseData[name] || {};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.type}>Target: {type}</Text>
      <Image source={{ uri: exercise.image }} style={styles.image} />
      <Text style={styles.description}>{exercise.description}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  type: {
    fontSize: 18,
    color: "gray",
    marginBottom: 15,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
