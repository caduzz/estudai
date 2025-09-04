import React from "react";

import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import StackRoutes from "@/routes/stack.routes";

export default function AppLayout() {

  return (
    <View className="flex-1 bg-slate-900">
      <StatusBar style="light" translucent/>
      <StackRoutes />
    </View>
  );
}