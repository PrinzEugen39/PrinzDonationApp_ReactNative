import { StyleSheet } from "react-native";
import {
  verticalScale,
  horizontalScale,
  scaleFontSize,
} from "../../assets/styles/scaling";

const style = StyleSheet.create({
  tab: {
    height: verticalScale(50),
    borderRadius: horizontalScale(50),
    backgroundColor: "#2979F2",
    justifyContent: "center",
  },
  title: {
    fontFamily: "ib500",
    fontSize: scaleFontSize(14),
    color: "white",
    lineHeight: scaleFontSize(17),
    textAlign: "center",
  },
  inactiveTab: {
    opacity: 0.5,
    borderRadius: 100,
    backgroundColor: "#F3F5F9",
  },
  inactiveTitle: {
    color: "#79869F",
    fontFamily: "ib500",
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    textAlign: "center",
  },
});

export default style;
