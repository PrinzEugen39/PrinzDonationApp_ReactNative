import { StyleSheet } from "react-native";
import { scaleFontSize, verticalScale, horizontalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  title1: {
    fontFamily: "ib600",
    fontSize: scaleFontSize(24),
    color: "#022150",
    lineHeight: scaleFontSize(29),
  },
  title2: {
    fontFamily: "ib600",
    fontSize: scaleFontSize(18),
    color: "#022150",
    lineHeight: scaleFontSize(22),
  },
  title3: {
    fontFamily: "ib600",
    fontSize: scaleFontSize(16),
    color: "#022150",
    lineHeight: scaleFontSize(19),
  },
});

export default style;
