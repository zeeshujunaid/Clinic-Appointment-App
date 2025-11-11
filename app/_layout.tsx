import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
        <Stack.Screen name="(auth)/Login" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/Signup" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)/Homescreen" options={{ headerShown: false }} />
      </Stack>
      <Toast />
    </GestureHandlerRootView>
  );
}