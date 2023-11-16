import { View, Text, Pressable } from "react-native";
import React from "react";
import style from "./style";

interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  onPress?: () => {};
}

export default function Button({
  title,
  isDisabled = false,
  onPress,
}: ButtonProps) {
  return (
    <Pressable
      disabled={isDisabled}
      style={[style.button1, isDisabled ? style.disabled : {}]}
      onPress={onPress}
    >
      <Text style={style.title}>{title}</Text>
    </Pressable>
  );
}
