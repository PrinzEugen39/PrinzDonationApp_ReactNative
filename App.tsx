import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigation/MainNavigation";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <MainNavigation />          
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
