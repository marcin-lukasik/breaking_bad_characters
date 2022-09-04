import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  searchInput: ViewStyle;
  searchInputWrapper: ViewStyle;
  searchIcon: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    searchInputWrapper: {
      position: "relative",
      marginBottom: 16,
      width: ScreenWidth * 0.9,
    },
    searchIcon: {
      position: "absolute",
      left: 12,
      top: 8,
      zIndex: 10,
    },
    searchInput: {
      paddingLeft: 40,
      paddingHorizontal: 16,
      paddingVertical: 4,
      backgroundColor: colors.searchInputColor,
      height: 40,
      borderRadius: 20,
    },
  });
};
