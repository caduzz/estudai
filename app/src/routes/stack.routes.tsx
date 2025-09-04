import { Stack } from "expo-router";

export default function StackRoutes() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen
        name="(painel)/home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}