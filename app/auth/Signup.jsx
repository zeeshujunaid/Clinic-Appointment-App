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
import { Picker } from "@react-native-picker/picker";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 50,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo */}
        <Image
          source={require("../../assets/images/logo.avif")}
          style={{
            height: 100,
            width: 180,
            resizeMode: "contain",
            marginBottom: 20,
          }}
        />

        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text style={{ fontSize: 32, fontWeight: "700", color: "#97723d" }}>
            Create Account
          </Text>
          <Text style={{ fontSize: 14, color: "#777", marginTop: 6 }}>
            Sign up to get started!
          </Text>
        </View>

        <View style={{ width: "85%" }}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />

          <Text style={styles.label}>Phone</Text>
          <TextInput
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <View style={{ flex: 0.48 }}>
              <Text style={styles.label}>Age</Text>
              <TextInput
                placeholder="Age"
                keyboardType="numeric"
                value={age}
                onChangeText={setAge}
                style={styles.input}
              />
            </View>

            <View style={{ flex: 0.48 }}>
              <Text style={styles.label}>Gender</Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#ddd",
                  borderRadius: 12,
                  overflow: "hidden",
                  backgroundColor: "#fafafa",
                }}
              >
                <Picker
                  selectedValue={gender}
                  onValueChange={(value) => setGender(value)}
                  style={{ height: 50 }}
                >
                  <Picker.Item label="Select gender" value="" />
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                  <Picker.Item label="Other" value="other" />
                </Picker>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/src/loader")}
            style={{
              backgroundColor: "#97723d",
              paddingVertical: 15,
              borderRadius: 12,
              alignItems: "center",
              marginTop: 35,
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowRadius: 8,
              elevation: 3,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 25,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "#ccc" }} />
            <Text style={{ marginHorizontal: 10, color: "#777" }}>OR</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: "#ccc" }} />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#777" }}>Alread’y have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/Login")}>
              <Text style={{ color: "#97723d", fontWeight: "600" }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Common styles
const styles = {
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 6,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    backgroundColor: "#fafafa",
    marginBottom: 18,
  },
};
