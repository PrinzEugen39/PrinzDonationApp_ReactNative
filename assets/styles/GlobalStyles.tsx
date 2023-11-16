import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "./scaling";

const GlobalStyles = StyleSheet.create({
  rootContainer: { paddingTop: verticalScale(20) },
  flex: { flex: 1 },
  backgroundWhite: { backgroundColor: "white" },
  donationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(20),
    flexWrap: "wrap",
  },
});

export default GlobalStyles;
