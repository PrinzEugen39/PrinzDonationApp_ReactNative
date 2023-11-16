import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";

interface TabProps {
  title: string;
}

export default function Badge({ title }: TabProps) {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const badgeWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <View style={[style.badge, badgeWidth]}>
      <Text
        onTextLayout={(e) => {
          setWidth(e.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title]}
      >
        {title}
      </Text>
    </View>
  );
}
