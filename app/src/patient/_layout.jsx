import { Drawer } from "expo-router/drawer";
import CustomDrawer from "../../components/Drawerheader";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

export default function PatientDrawer() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        options={{
          title: "Dashboard",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Clientlist"
        options={{
          title: "Clients",
          drawerIcon: ({ color, size }) => (
            <Feather name="users" size={size} color={color} />
          ),
        }}
      />

      {/* <Drawer.Screen
        name="Templates"
        options={{
          title: "Templates",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" size={size} color={color} />
          ),
        }}
      /> */}

      <Drawer.Screen
        name="Usermanagment"
        options={{
          title: "User Management",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-add-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
