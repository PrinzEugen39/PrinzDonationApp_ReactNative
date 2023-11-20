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
  backBtn: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
});

export default style;
