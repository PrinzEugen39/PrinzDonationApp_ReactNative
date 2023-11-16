import {
  Pressable,
  Image,
  SafeAreaView,
  View,
  Text,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
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
import * as SplashScreen from "expo-splash-screen";
import { useDispatch, useSelector } from "react-redux";

import GlobalStyles from "../../assets/styles/GlobalStyles";
import style from "./style";

import Search from "../../components/Search/Search";
import SingleDonationItem from "../../components/SingleDonationItem/SingleDonationItem";
import Header from "../../components/Header/Header";
import { FlatList } from "react-native-gesture-handler";
import Tab from "../../components/Tab/Tab";
import { RootState } from "../../redux/store";
import {
  CategoryTypes,
  updateSelectedCategoryId,
} from "../../redux/reducers/Categories";
import {
  DonationItemTypes,
  updateSelectedDonationId,
} from "../../redux/reducers/Donation";
import { Routes } from "../../navigation/routes";
import { HomeProps } from "../../navigation/MainNavigation";

SplashScreen.preventAutoHideAsync();

const CATEGORY_PAGE_SIZE = 4;

export default function Home({ navigation }: HomeProps) {
  const user = useSelector((state: RootState) => state.user);
  const categories = useSelector((state: RootState) => state.categories);
  const donations = useSelector((state: RootState) => state.donations);
  const dispatch = useDispatch();

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState<CategoryTypes[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [donationItems, setDonationItems] = useState<DonationItemTypes[]>([]);

  useEffect(() => {
    const items = donations.items;
    const filteredItems = items.filter((item) =>
      item.categoryIds.includes(categories.selectedCategoryId)
    );
    setDonationItems(filteredItems);
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, CATEGORY_PAGE_SIZE)
    );
    setCategoryPage((prev) => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  function pagination(
    items: CategoryTypes[],
    pageNumber: number,
    pageSize: number
  ): CategoryTypes[] {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  }

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
      onLayout={onLayoutRootView}
      style={[
        GlobalStyles.rootContainer,
        GlobalStyles.flex,
        GlobalStyles.backgroundWhite,
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntro}>Hello, </Text>
            <View style={style.headerUsername}>
              <Header
                title={`${user.firstName} ${user.lastName[0]}. 👋`}
                headerType={1}
              />
            </View>
          </View>
          <Image
            source={{ uri: user.profileImage }}
            style={style.profileImage}
            resizeMode="contain"
          />
        </View>
        <View style={style.searchContainer}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            source={require("../../assets/highlighted_image.png")}
            resizeMode="contain"
            style={style.highlightedImage}
          />
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title={"Select Category"} headerType={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) return;

              setIsLoadingCategories(true);

              let newData = pagination(
                categories.categories,
                categoryPage,
                CATEGORY_PAGE_SIZE
              );
              if (newData.length > 0) {
                setCategoryList((prevState) => [...prevState, ...newData]);
                setCategoryPage((prevState) => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            keyExtractor={(item) => item.categoryId.toString()}
            renderItem={({ item }) => (
              <View style={style.categoryItem}>
                <Tab
                  tabId={item.categoryId}
                  onPress={(value: number) =>
                    dispatch(updateSelectedCategoryId(value))
                  }
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map((item) => {
              const categoryInformation = categories.categories.find(
                (val) => val.categoryId === categories.selectedCategoryId
              );

              return (
                <View
                  key={item.donationItemId}
                  style={style.singleDonationItem}
                >
                  <SingleDonationItem
                    uri={item.image}
                    badgeTitle={categoryInformation && categoryInformation.name}
                    donationTitle={item.name}
                    price={parseFloat(item.price)}
                    donationItemId={item.donationItemId}
                    onPress={(selectedDonationId: number) => {
                      dispatch(updateSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.SingleDonationItemPage, {
                        categoryInformation,
                      });
                    }}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
