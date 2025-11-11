import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

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
            <MaterialIcons name="home-filled" size={26} color={color} />
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
        name="Profilescreen"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={26} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
}
