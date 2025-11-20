import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffffffff", // light medical background
        paddingHorizontal: 28,
        paddingTop: "28%",
        alignItems: "center",
      }}
    >
      <StatusBar hidden />

      {/* Top Illustration */}
      <Image
        source={require("../assets/images/logo.avif")}
        style={{
          width: 200,
          height: 260,
          resizeMode: "contain",
          marginBottom: 10,
        }}
      />

      {/* Heading */}
      <Text
        style={{
          fontSize: 38,
          fontWeight: "800",
          textAlign: "center",
          color: "#0F5FA3", // dark healthcare blue
          marginBottom: 10,
          letterSpacing: 0.5,
        }}
      >
        Your Digital <Text style={{ color: "#1D8FE1" }}>Clinic Hub</Text>
      </Text>

      {/* Subtitle */}
      <Text
        style={{
          fontSize: 16,
          color: "#4a5e72",
          textAlign: "center",
          lineHeight: 24,
          width: "92%",
          marginBottom: 45,
        }}
      >
        Effortlessly manage appointments, patients, staff, and hospital workflow
        through a clean and modern interface.
      </Text>

      {/* Button */}
      <TouchableOpacity
        onPress={() => router.push("/auth/Login")}
        style={{
          backgroundColor: "#1D8FE1", // primary blue
          paddingVertical: 16,
          paddingHorizontal: 65,
          borderRadius: 40,
          elevation: 5,

          shadowColor: "#1D8FE1",
          shadowOpacity: 0.25,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 6 },
        }}
        activeOpacity={0.8}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "700",
            letterSpacing: 0.5,
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>

      {/* Small tagline */}
      <Text
        style={{
          marginTop: 22,
          color: "#6d7e90",
          fontSize: 13,
          letterSpacing: 0.3,
        }}
      >
        Healthcare • Appointments • Clinic Management
      </Text>
    </View>
  );
}
