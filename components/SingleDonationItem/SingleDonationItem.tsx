import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import style from "./style";
import Badge from "../Badge/Badge";
import Header from "../Header/Header";

interface DonationProps {
  uri: string;
  badgeTitle?: string;
  donationTitle: string;
  price: number;
  onPress: Function;
  donationItemId: number;
}

export default function SingleDonationItem({
  uri,
  badgeTitle,
  donationTitle,
  price,
  onPress,
  donationItemId,
}: DonationProps) {
  return (
    <Pressable onPress={() => onPress(donationItemId)}>
      <View>
        <View style={style.badge}>
          <Badge title={badgeTitle ? badgeTitle : ""} />
        </View>
        <Image resizeMode="cover" source={{ uri: uri }} style={style.image} />
      </View>
      <View style={style.donationInfo}>
        <Header
          title={donationTitle}
          headerType={3}
          color="#0A043C"
          numberOfLines={1}
        />
        <View style={style.price}>
          <Header
            title={`$${price.toFixed(2)}`}
            headerType={3}
            color="#156CF7"
          />
        </View>
      </View>
    </Pressable>
  );
}
