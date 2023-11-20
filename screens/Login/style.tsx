import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: horizontalScale(24),
  },
  registrationBtn :{
    alignItems: "center",
  }
});

export default style;
