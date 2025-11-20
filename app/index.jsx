import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: "40%",
        alignItems: "center",
        paddingHorizontal: 25,
        backgroundColor:"#fff",
      }}
    >
      <StatusBar hidden />
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.avif")}
        style={{
          width: 160,
          height: 260,
          resizeMode: "contain",
        }}
      />

      <Text
        style={{
          fontSize: 34,
          fontWeight: "800",
          color: "#222",
          textAlign: "center",
          marginBottom: 12,
          letterSpacing: 0.5,
        }}
      >
        Welcome to <Text style={{ color: "#97723d" }}>Clinic Hub</Text>
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: "#555",
          textAlign: "center",
          lineHeight: 24,
          width: "90%",
          marginBottom: 40,
        }}
      >
        Book your appointment now from your phone
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/auth/Login")}
        style={{
          backgroundColor: "#97723d",
          paddingVertical: 14,
          paddingHorizontal: 60,
          borderRadius: 30,
          shadowColor: "#FF4D4D",
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 8 },
          shadowRadius: 10,
          elevation: 5,
        }}
        activeOpacity={0.8}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "600",
            letterSpacing: 0.3,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
