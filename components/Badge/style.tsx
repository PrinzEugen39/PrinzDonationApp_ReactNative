import { StyleSheet } from "react-native";
import {
  verticalScale,
  horizontalScale,
  scaleFontSize,
} from "../../assets/styles/scaling";

const style = StyleSheet.create({
  badge: {
    height: verticalScale(22),
    borderRadius: horizontalScale(50),
    backgroundColor: "#145855",
    justifyContent: "center",
  },
  title: {
    fontFamily: "ib600",
    fontSize: scaleFontSize(10),
    color: "white",
    lineHeight: scaleFontSize(12),
    textAlign: "center",
  },
});

export default style;
