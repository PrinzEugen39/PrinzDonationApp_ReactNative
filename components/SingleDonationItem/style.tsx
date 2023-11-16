import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";

const style = StyleSheet.create({
  image: {
    width: horizontalScale(140),
    height: verticalScale(170),
    borderRadius: horizontalScale(20),
  },
  badge: {
    position: "absolute",
    top: verticalScale(13),
    left: horizontalScale(10),
    zIndex: 1,
  },
  donationInfo: {
    marginTop: verticalScale(16),
  },
  price: {
    marginTop: verticalScale(5),
  },
});

export default style;
