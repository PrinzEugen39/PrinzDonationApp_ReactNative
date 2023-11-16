import { StyleSheet } from "react-native";
import {
  verticalScale,
  horizontalScale,
  scaleFontSize,
} from "../../assets/styles/scaling";

const style = StyleSheet.create({
  button1: {
    height: verticalScale(55),
    borderRadius: horizontalScale(50),
    backgroundColor: "#2979F2",
    justifyContent: "center"
  },
  title: {
    fontFamily: "ib500",
    fontSize: scaleFontSize(16),
    color: "white",
    lineHeight: scaleFontSize(19),
    textAlign: "center",
  },
  disabled: {
    opacity: 0.5,
  }
});

export default style;
