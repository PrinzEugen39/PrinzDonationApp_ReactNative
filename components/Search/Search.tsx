import { Pressable, Text } from "react-native";
import React, { useRef, useState } from "react";
import style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TextInput } from "react-native-gesture-handler";
import { scaleFontSize } from "../../assets/styles/scaling";

interface SearchProps {
  onSearch?: Function;
}

export default function Search({ onSearch }: SearchProps) {
  const [search, setSearch] = useState("");

  const textInputRef = useRef<TextInput>(null);
  const handleFocus = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <Pressable style={style.searchContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        size={scaleFontSize(22)}
        color="#25C0FF"
      />
      <TextInput
        ref={textInputRef}
        style={style.searchInput}
        placeholder="Search"
        value={search}
        onChangeText={handleSearch}
      />
    </Pressable>
  );
}
