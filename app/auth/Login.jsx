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
import { useState, useContext } from "react";
import Toast from "react-native-toast-message";
import axios from "axios";
import baseurl from "../../services/config";
import { AuthContext } from "../context/usercontext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Please fill all fields",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${baseurl}/api/auth/login`,
        {
          email,
          password,
        }
      );

      const data = response.data;

      if (!data?.token) {
        Toast.show({
          type: "error",
          text1: data.message || "Invalid login",
        });
        return;
      }

      const fullUser = { ...data.user, token: data.token };

      await AsyncStorage.setItem("token", data.token);
      login(fullUser);

      router.replace("/src/loader");
    } catch (error) {
      console.log("Login error:", error);

      Toast.show({
        type: "error",
        text1: error?.response?.data?.message || "Login failed",
      });
    } finally {
      setLoading(false);
    }
  };

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
      >
        {/* SAME UI (no change) */}
        {/* Logo */}
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

        {/* Welcome */}
        <View style={{ alignItems: "center", marginBottom: 25 }}>
          <Text style={{ fontSize: 32, fontWeight: "800", color: "#0F5FA3" }}>
            Welcome Back
          </Text>
          <Text style={{ fontSize: 14, color: "#4a5e72", marginTop: 6 }}>
            Please log in to continue
          </Text>
        </View>

        {/* Form */}
        <View style={{ width: "85%" }}>
          <Text style={{ fontSize: 16, color: "#0F5FA3", marginBottom: 6 }}>
            Email
          </Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#8ba4b1"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
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
            value={password}
            onChangeText={setPassword}
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

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 12,
              marginBottom: 28,
            }}
          >
            <TouchableOpacity
              onPress={handleLogin}
              disabled={loading}
              style={{
                backgroundColor: loading ? "#8ac4f3" : "#1D8FE1",
                paddingVertical: 15,
                borderRadius: 12,
                width: "70%",
                alignItems: "center",
                opacity: loading ? 0.7 : 1,
                marginBottom: 30,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
                {loading ? "Loading..." : "Sign In"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

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

        {/* Signup */}
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={{ color: "#4a5e72" }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/src/admin/Dashboard")}>
            <Text style={{ color: "#1D8FE1", fontWeight: "700" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
