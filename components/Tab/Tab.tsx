import { Text, Pressable } from "react-native";
import React, { useRef, useState } from "react";
import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";

interface TabProps {
  title: string;
  isInactive?: boolean;
  onPress: Function;
  tabId: number;
}

export default function Tab({
  title,
  isInactive = false,
  onPress,
  tabId,
}: TabProps) {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable
      style={[style.tab, isInactive ? style.inactiveTab : {}, tabWidth]}
      onPress={() => onPress(tabId)}
    >
      <Text
        onTextLayout={(e) => {
          setWidth(e.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, isInactive ? style.inactiveTitle : {}]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
