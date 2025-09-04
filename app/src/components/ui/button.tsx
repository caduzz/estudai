import { Pressable, Text } from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onPress: () => void;
}
export default function Button({ children, onPress, className }: ButtonProps) {
  const classButton = `border-[1px] border-[#FFD93D] rounded-md items-center px-4 py-4 mt-5 ${className}`;

  return (
    <Pressable
      onPress={onPress}
      className={classButton}
    >
      <Text className='color-[#FFD93D]'>{children}</Text>
    </Pressable>
  );
}