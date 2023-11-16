import { SafeAreaView, ScrollView, Text, View, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import BackButton from "../../components/BackButton/BackButton";

import style from "./style";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { SingleDonationItemPageProps } from "../../navigation/MainNavigation";
import Badge from "../../components/Badge/Badge";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

export default function SingleDonationItemPage({
  navigation,
  route,
}: SingleDonationItemPageProps) {
  const donationItemInformation = useSelector(
    (state: RootState) => state.donations.selectedDonationInformation
  );

  const categoryInformation = route.params.categoryInformation;

  return (
    <SafeAreaView
      style={[
        GlobalStyles.backgroundWhite,
        GlobalStyles.flex,
        GlobalStyles.rootContainer,
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{ uri: donationItemInformation.image }}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation ? categoryInformation.name : ""} />
        </View>
        <Header title={donationItemInformation.name} headerType={1} />
        <Text style={style.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title={"Donate"} />
      </View>
    </SafeAreaView>
  );
}
