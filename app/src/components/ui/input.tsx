import { Text, TextInput, View } from "react-native";

interface InputProps extends React.ComponentProps<typeof TextInput> {
  label?: string;
}

export default function Input({ ...props }: InputProps) {
  return (
    <View className="w-full">
      <Text className="text-white">{props.label}</Text>
      <TextInput
        className="bg-gray-950 text-slate-50 p-4 rounded-md w-full mt-2 mb-4"
        placeholderTextColor="#7c7c8a"
        {...props}
      />
    </View>
  );
}