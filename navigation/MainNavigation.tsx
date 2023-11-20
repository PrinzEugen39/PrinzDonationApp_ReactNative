import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import { Routes } from "./routes";
import Home from "../screens/Home/Home";
import SingleDonationItemPage from "../screens/SingleDonationPage/SingleDonationItemPage";
import Login from "../screens/Login/Login";
import Registration from "../screens/Registration/Registration";

type RootStackParamList = {
  Home: undefined;
  SingleDonationItemPage: {
    categoryInformation: { categoryId: number; name: string } | undefined;
  };
  Login: undefined;
  Registration: undefined;
};

export type HomeProps = StackScreenProps<RootStackParamList, "Home">;
export type LoginProps = StackScreenProps<RootStackParamList, "Login">;
export type RegistrationProps = StackScreenProps<RootStackParamList, "Registration">;
export type SingleDonationItemPageProps = StackScreenProps<
  RootStackParamList,
  "SingleDonationItemPage"
>;

const Stack = createStackNavigator<RootStackParamList>();

export default function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItemPage}
        component={SingleDonationItemPage}
      />
    </Stack.Navigator>
  );
}
