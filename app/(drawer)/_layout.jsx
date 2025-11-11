import { Drawer } from "expo-router/drawer";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

export default function DrawerLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: "#97723d",
        drawerInactiveTintColor: "#555",
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "500",
        },
        drawerStyle: {
          backgroundColor: isDark ? "#222" : "#fff",
          width: 260,
        },
        headerStyle: {
          backgroundColor: "#97723d",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Profile"
        options={{
          title: "Profile",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        options={{
          title: "Settings",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
