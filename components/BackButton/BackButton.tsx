import { View, Pressable, Text } from "react-native";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import style from "./style";

interface BackButtonProps {
  onPress: Function;
}

export default function BackButton({ onPress }: BackButtonProps) {
  return (
    <Pressable onPress={() => onPress()} style={style.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
}
