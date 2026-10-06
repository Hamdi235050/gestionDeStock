import { Link } from "expo-router";
import { Text, View } from "react-native";

export const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Link href="/stock" style={{ color: "blue" }}>
        Go to Stock Screen
      </Link>
    </View>
  );
};
