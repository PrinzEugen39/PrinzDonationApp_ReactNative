import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import { Routes } from "./routes";
import Home from "../screens/Home/Home";
import SingleDonationItemPage from "../screens/SingleDonationPage/SingleDonationItemPage";

type RootStackParamList = {
  Home: undefined;
  SingleDonationItemPage: {
    categoryInformation: { categoryId: number; name: string } | undefined;
  };
};

export type HomeProps = StackScreenProps<RootStackParamList, "Home">;
export type SingleDonationItemPageProps = StackScreenProps<
  RootStackParamList,
  "SingleDonationItemPage"
>;

const Stack = createStackNavigator<RootStackParamList>();

export default function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItemPage}
        component={SingleDonationItemPage}
      />
    </Stack.Navigator>
  );
}
