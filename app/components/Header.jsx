import { Text, View, Pressable, TouchableOpacity, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export default function Header() {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: "100%",
        height: "10%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
      }}
    >
      {/* LEFT - MENU */}
      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Entypo name="menu" size={28} color="black" />
      </Pressable>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
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
        <TouchableOpacity onPress={() => router.push("/src/common/Profile")}>
          {/* <Ionicons name="person-circle-outline" size={40} color="black" /> */}
          <Image
            source={require("../../assets/images/logo.avif")}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </TouchableOpacity>

        <View>
          <Text style={{ fontSize: 14, fontWeight: "700", color: "#000" }}>
            AHSAN KHAN
          </Text>
          <Text style={{ fontSize: 12, color: "#555" }}>
            ADMIN
          </Text>
        </View>
      </View>
    </View>
  );
}
