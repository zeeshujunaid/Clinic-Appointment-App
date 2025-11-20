import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#ffffffff" }} // light medical bg
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar hidden />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 50,
        }}
      >
        {/* Logo Section */}
        <View
          style={{
            height: 150,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Image
            source={require("../../assets/images/logo.avif")}
            style={{ height: 150, width: 180, resizeMode: "contain" }}
          />
        </View>

        {/* Welcome Section */}
        <View style={{ alignItems: "center", marginBottom: 25 }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "800",
              color: "#0F5FA3",
            }}
          >
            Welcome Back
          </Text>
          <Text style={{ fontSize: 14, color: "#4a5e72", marginTop: 6 }}>
            Please log in to continue
          </Text>
        </View>

        {/* Form Section */}
        <View style={{ width: "85%" }}>
          <Text style={{ fontSize: 16, color: "#0F5FA3", marginBottom: 6 }}>
            Email
          </Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#8ba4b1"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{
              borderWidth: 1,
              borderColor: "#c9d9e8",
              borderRadius: 12,
              padding: 14,
              fontSize: 16,
              backgroundColor: "#ffffff",
              marginBottom: 18,
            }}
          />

          <Text style={{ fontSize: 16, color: "#0F5FA3", marginBottom: 6 }}>
            Password
          </Text>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#8ba4b1"
            secureTextEntry
            autoCapitalize="none"
            style={{
              borderWidth: 1,
              borderColor: "#c9d9e8",
              borderRadius: 12,
              padding: 14,
              fontSize: 16,
              backgroundColor: "#ffffff",
            }}
          />

          {/* Forgot Password */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 12,
              marginBottom: 28,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "#fc5959ff", fontSize: 13 }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity
          onPress={() => console.log("Sign In pressed")}
          style={{
            backgroundColor: "#1D8FE1",
            paddingVertical: 15,
            borderRadius: 12,
            width: "70%",
            alignItems: "center",
            elevation: 4,

            shadowColor: "#1D8FE1",
            shadowOpacity: 0.3,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 4 },
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "#cbd7e3" }} />
          <Text
            style={{ marginHorizontal: 10, color: "#4a5e72", fontSize: 14 }}
          >
            or
          </Text>
          <View style={{ flex: 1, height: 1, backgroundColor: "#cbd7e3" }} />
        </View>

        {/* Signup Link */}
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={{ color: "#4a5e72" }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/auth/Signup")}>
            <Text style={{ color: "#1D8FE1", fontWeight: "700" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
