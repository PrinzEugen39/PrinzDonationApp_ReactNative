import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: horizontalScale(16),
    height: horizontalScale(50),
    backgroundColor: "#F3F5F9",
    alignItems: "center",
    borderRadius: horizontalScale(15),
  },
  searchInput: {
    fontFamily: "ib400",
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    color: "#686C7A",
    height: "100%",
    flex: 1,
    marginLeft: horizontalScale(6),
  },
});

export default style;
