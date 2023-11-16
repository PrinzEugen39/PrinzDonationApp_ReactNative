import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";

const style = StyleSheet.create({
  header: {
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(24),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerIntro: {
    color: "#636776",
    fontSize: scaleFontSize(16),
    fontFamily: "ib400",
    lineHeight: scaleFontSize(19),
  },
  headerUsername: {
    marginTop: verticalScale(5),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searchContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
  highlightedImageContainer: {
    marginHorizontal: horizontalScale(24),
    marginVertical: verticalScale(16),
  },
  highlightedImage: {
    width: "100%",
    height: verticalScale(160),
  },
  categoryHeader: {
    marginLeft: horizontalScale(24),
    marginBottom: verticalScale(16),
  },
  categories: {
    marginLeft: horizontalScale(24),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  donationItemsContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  singleDonationItem: {
    maxWidth: "49%",
    marginBottom: verticalScale(23),
  },
});

export default style;
