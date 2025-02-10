import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, ActivityIndicator, StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";

export default function Layout() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Checking authentication...");
    setTimeout(() => {
      setIsAuthenticated(false); // Change to 'true' when authentication is added
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!loading) {
      console.log("Loading finished. isAuthenticated:", isAuthenticated);
      if (!isAuthenticated) {
        console.log("Redirecting to /login...");
        router.replace("/login"); // ✅ Redirect to login page
      }
    }
  }, [isAuthenticated, loading]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#121212" }}>
        <ActivityIndicator size="large" color="#ff6600" />
      </View>
    );
  }

  return (
    <PaperProvider>
      {/* ✅ Status Bar for visibility */}
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#121212" }, // Dark theme for header
          headerTintColor: "#ff6600", // Orange text/icons
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </PaperProvider>
  );
}
