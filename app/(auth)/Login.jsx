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
      style={{ flex: 1, backgroundColor: "#fff" }}
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
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo Section */}
        <View
          style={{
            height: 150,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            source={require("../../assets/images/logo.avif")}
            style={{ height: 150, width: 180, resizeMode: "contain" }}
          />
        </View>

        {/* Welcome Section */}
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text style={{ fontSize: 32, fontWeight: "700", color: "#97723d" }}>
            Welcome Back
          </Text>
          <Text style={{ fontSize: 14, color: "#777", marginTop: 6 }}>
            Please log in to your account
          </Text>
        </View>

        {/* Form Section */}
        <View style={{ width: "85%" }}>
          <Text style={{ fontSize: 16, color: "#000", marginBottom: 6 }}>
            Email
          </Text>
          <TextInput
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 12,
              padding: 14,
              fontSize: 16,
              backgroundColor: "#fafafa",
              marginBottom: 18,
            }}
          />

          <Text style={{ fontSize: 16, color: "#000", marginBottom: 6 }}>
            Password
          </Text>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry
            autoCapitalize="none"
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 12,
              padding: 14,
              fontSize: 16,
              backgroundColor: "#fafafa",
            }}
          />

          {/* Forgot & Signup Links */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 12,
              marginBottom: 30,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "#FF4D4D", fontSize: 13 }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity
          onPress={() => console.log("Sign In pressed")}
          style={{
            backgroundColor: "#ffffffff",
            paddingVertical: 15,
            borderRadius: 12,
            width: "70%",
            alignItems: "center",
            shadowColor: "#000",
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 4,
            borderWidth: 1.5,
            borderColor: "#97723d",
            marginBottom: 35,
          }}
        >
          <Text
            style={{
              color: "#97723d",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "#ccc" }} />
          <Text style={{ marginHorizontal: 10, color: "#777", fontSize: 14 }}>
            or
          </Text>
          <View style={{ flex: 1, height: 1, backgroundColor: "#ccc" }} />
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={{ color: "#777" }}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/Signup")}>
            <Text style={{ color: "#97723d", fontWeight: "600" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
