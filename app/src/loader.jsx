import { useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { AuthContext } from "../context/usercontext";

export default function Loader() {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      router.replace("/auth/Login");
    } else if (user.role === "admin") {
      router.replace("/src/admin/Dashboard");
    } else if (user.role === "doctor") {
      router.replace("/src/patient/Homescreen");
    } else if (user.role === "staff") {
      router.replace("/src/staff/Homescreen");
    } else {
      router.replace("/auth/Login");
    }
  }, [user]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Checking user role...</Text>
    </View>
  );
}
