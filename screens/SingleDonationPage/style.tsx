import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";

const style = StyleSheet.create({
  container: {
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(20),
  },
  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    width: "100%",
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
  },
  badge: {
    marginBottom: verticalScale(16),
  },
  description: {
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(7),
    fontSize: scaleFontSize(14),
    fontFamily: "ib400",
    lineHeight: scaleFontSize(22),
    marginBottom: verticalScale(10),
  },
  button: {
    marginHorizontal: horizontalScale(20),
    marginBottom: verticalScale(20),
  },
});

export default style;
