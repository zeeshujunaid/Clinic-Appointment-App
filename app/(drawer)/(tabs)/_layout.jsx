import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          color: "#6a6a6a",
        },
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 20,
          right: 20,
          height: 90,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 10,
        },
        tabBarActiveTintColor: "#97723d",
        tabBarInactiveTintColor: "#c5af91ff",
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="Homescreen"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color="black" />
          ),
          tabBarLabel: "Home",
        }}
      />

      {/* Expense List */}
      {/* <Tabs.Screen
        name="ExpenseList"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="money-off" size={24} color={color} />
          ),
          tabBarLabel: "Expenses",
        }}
      /> */}

      {/* Income List */}
      {/* <Tabs.Screen
        name="IncomeList"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="attach-money" size={26} color={color} />
          ),
          tabBarLabel: "Income",
        }}
      /> */}

      {/* Profile */}
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-sharp" size={24} color="black" />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
}
