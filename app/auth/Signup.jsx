import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-toast-message";
import baseurl from "../../services/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePic, setProfilePic] = useState(null);


const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
  });

  if (!result.canceled) {
    setProfilePic(result.assets[0].uri);
  }
};


const Register = async () => {
  if (!name || !email || !password || !phone) {
    Toast.show({
      type: "error",
      text1: "Please fill all the fields",
    });
    return;
  }

  try {
    const response = await fetch(`${baseurl}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: name,
        email,
        password,
        phone,
        image: profilePic, 
      }),
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      Toast.show({
        type: "error",
        text1: data.message || "Registration failed",
      });
      return;
    }

    await AsyncStorage.setItem("token", data.token);

    Toast.show({
      type: "success",
      text1: "Account created successfully!",
    });

    router.replace("/auth/Login");
  } catch (error) {
    console.error("Registration error:", error);
    Toast.show({
      type: "error",
      text1: "Something went wrong!",
    });
  }
};


  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#f4faff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar backgroundColor="#f4faff" barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 50,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Profile Image Picker */}
        <TouchableOpacity
          onPress={pickImage}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: "#e1ecf8",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
            overflow: "hidden",
          }}
        >
          {profilePic ? (
            <Image
              source={{ uri: profilePic }}
              style={{ width: 120, height: 120, borderRadius: 60 }}
            />
          ) : (
            <Text style={{ color: "#1D8FE1", fontWeight: "700" }}>Upload</Text>
          )}
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 32,
            fontWeight: "800",
            color: "#0F5FA3",
            marginBottom: 6,
          }}
        >
          Create Account
        </Text>
        <Text style={{ fontSize: 14, color: "#4a5e72", marginBottom: 20 }}>
          Sign up to get started!
        </Text>

        <View style={{ width: "85%" }}>
          {/* Full Name */}
          <Text
            style={{
              fontSize: 16,
              color: "#0F5FA3",
              marginBottom: 6,
              fontWeight: "600",
            }}
          >
            Full Name
          </Text>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="#8ba4b1"
            value={name}
            onChangeText={setName}
            style={{
              borderWidth: 1,
              borderColor: "#c9d9e8",
              borderRadius: 12,
              padding: 14,
              fontSize: 16,
              backgroundColor: "#ffffff",
              marginBottom: 18,
              color: "#0F5FA3",
            }}
          />

          {/* Email */}
          <Text
            style={{
              fontSize: 16,
              color: "#0F5FA3",
              marginBottom: 6,
              fontWeight: "600",
            }}
          >
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
              color: "#0F5FA3",
            }}
          />

          {/* Password */}
          <Text
            style={{
              fontSize: 16,
              color: "#0F5FA3",
              marginBottom: 6,
              fontWeight: "600",
            }}
          >
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
              color: "#0F5FA3",
            }}
          />

          {/* Phone */}
          <Text
            style={{
              fontSize: 16,
              color: "#0F5FA3",
              marginBottom: 6,
              fontWeight: "600",
            }}
          >
            Phone
          </Text>
          <TextInput
            placeholder="Enter your phone number"
            placeholderTextColor="#8ba4b1"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            style={{
              borderWidth: 1,
              borderColor: "#c9d9e8",
              borderRadius: 12,
              padding: 14,
              fontSize: 16,
              backgroundColor: "#ffffff",
              marginBottom: 18,
              color: "#0F5FA3",
            }}
          />

          {/* Sign Up Button */}
          <TouchableOpacity
            onPress={Register}
            style={{
              backgroundColor: "#1D8FE1",
              paddingVertical: 15,
              borderRadius: 12,
              alignItems: "center",
              marginTop: 35,
              shadowColor: "#1D8FE1",
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 4,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 25,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "#cbd7e3" }} />
            <Text style={{ marginHorizontal: 10, color: "#4a5e72" }}>OR</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: "#cbd7e3" }} />
          </View>

          {/* Login Option */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#4a5e72" }}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/auth/Login")}>
              <Text style={{ color: "#1D8FE1", fontWeight: "700" }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
