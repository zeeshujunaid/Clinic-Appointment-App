import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function CustomDrawer(props) {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* 🔥 TOP HEADER */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 25,
          backgroundColor: "#f8f8f8",
        }}
      >
        <Image
          source={require("../../assets/images/logo.avif")}
          style={{
            width: 45,
            height: 45,
            borderRadius: 8,
            marginRight: 12,
          }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            marginTop: 2,
            color: "#333",
          }}
        >
          CLINIC HUB
        </Text>
      </View>

      {/* 🔥 HORIZONTAL LINE */}
      <View
        style={{
          height: 1,
          backgroundColor: "#ddd",
          marginBottom: 10,
        }}
      ></View>

      {/* MAIN DRAWER LIST */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* 🔥 BOTTOM FOOTER */}
      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderColor: "#ccc",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            gap: 10,
            height: 90,
          }}
        >
          <View
            style={{
              backgroundColor: "#eeeeeeff",
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>

          <View style={{ flexDirection: "row", marginLeft: 70 }}>
            <TouchableOpacity
              onPress={() => router.push("/src/common/Profile")}
            >
              <Image
                source={require("../../assets/images/logo.avif")}
                style={{ width: 40, height: 40, borderRadius: 20 }}
              />
            </TouchableOpacity>
            <View
              style={{ justifyContent: "flex-start", }}
            >
              <Text style={{ fontSize: 14, fontWeight: "700", color: "#000" }}>
                AHSAN KHAN
              </Text>
              <Text style={{ fontSize: 12, color: "#555" }}>
                ADMIN
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
