import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";
import React, { useState } from "react";
import style from "./style";

type InputProps = {
  label: string;
  placeholder?: string;
  onChangeText: Function;
  keyboardType?: KeyboardTypeOptions;
  secure?: boolean;
};

export default function Input({
  label,
  placeholder,
  onChangeText,
  keyboardType,
  secure = false,
}: InputProps) {
  const [value, setValue] = useState("");
  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        secureTextEntry={secure}
        keyboardType={keyboardType ? keyboardType : "default"}
        style={style.input}
        value={value}
        onChangeText={(val) => {
          setValue(val);
          onChangeText(val);
        }}
        placeholder={placeholder}
      />
    </View>
  );
}
