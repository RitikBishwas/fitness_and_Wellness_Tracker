import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

// Sample exercise data
const exercises = [
  { id: "1", name: "Push-ups", type: "Full Body" },
  { id: "2", name: "Squats", type: "Legs" },
  { id: "3", name: "Plank", type: "Core" },
  { id: "4", name: "Bicep Curls", type: "Arms" },
];

export default function ExercisesScreen() {
  const router = useRouter(); // Navigation

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🏋️ Workout List</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/exerciseDetails?name=${item.name}&type=${item.type}`)}

          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.type}>{item.type}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  type: {
    fontSize: 14,
    color: "gray",
  },
});
