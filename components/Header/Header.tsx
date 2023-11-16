import { View, Text } from "react-native";
import React from "react";
import style from "./style";

interface HeaderProps {
  title: string | number;
  headerType: number;
  color?: string;
  numberOfLines?: number | undefined;
}

export default function Header({
  title,
  headerType,
  color,
  numberOfLines,
}: HeaderProps) {
  function headerStyle() {
    switch (headerType) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  }
  return (
    <View>
      <Text
        style={[headerStyle(), color ? { color: color } : {}]}
        numberOfLines={numberOfLines}
      >
        {title}
      </Text>
    </View>
  );
}
