import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Button as Btn,
  Pressable,
} from "react-native";
import React, { useCallback, useState } from "react";
import {
  useFonts,
  Inter_100Thin as ib100,
  Inter_200ExtraLight as ib200,
  Inter_300Light as ib300,
  Inter_400Regular as ib400,
  Inter_500Medium as ib500,
  Inter_600SemiBold as ib600,
  Inter_700Bold as ib700,
  Inter_800ExtraBold as ib800,
  Inter_900Black as ib900,
} from "@expo-google-fonts/inter";
import style from "./style";
import GlobalStyles from "../../assets/styles/GlobalStyles";

import * as SplashScreen from "expo-splash-screen";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { RegistrationProps } from "../../navigation/MainNavigation";
import { Routes } from "../../navigation/routes";
import BackButton from "../../components/BackButton/BackButton";
SplashScreen.preventAutoHideAsync();

export default function Registration({ navigation }: RegistrationProps) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fontsLoaded, fontError] = useFonts({
    ib100,
    ib200,
    ib300,
    ib400,
    ib500,
    ib600,
    ib700,
    ib800,
    ib900,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView
      style={[
        GlobalStyles.backgroundWhite,
        GlobalStyles.rootContainer,
        GlobalStyles.flex,
      ]}
      onLayout={onLayoutRootView}
    >
      <View style={style.backBtn}>
        <BackButton onPress={() => navigation.goBack()}/>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}
      >
        <View style={GlobalStyles.mb24}>
          <Header title={"Hello and Welcome !"} headerType={1} />
        </View>
        <View style={GlobalStyles.mb24}>
          <Input
            keyboardType="default"
            label="First & Last Name"
            placeholder="Enter your full name"
            onChangeText={(val: string) => setFullname(val)}
          />
        </View>
        <View style={GlobalStyles.mb24}>
          <Input
            keyboardType="email-address"
            label="Email"
            placeholder="Enter your email"
            onChangeText={(val: string) => setEmail(val)}
          />
        </View>
        <View style={GlobalStyles.mb24}>
          <Input
            secure={true}
            label="Password"
            placeholder="****"
            onChangeText={(val: string) => setPassword(val)}
          />
        </View>
        <View style={GlobalStyles.mb24}>
          <Button title="Register" />
        </View>
        {/* <Btn title="home" onPress={() => navigation.navigate(Routes.Home)} /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
