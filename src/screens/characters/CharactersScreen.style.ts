import { ViewStyle, StyleSheet, TextStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

interface Style {
  container: ViewStyle;
  buttonStyle: ViewStyle;
  buttonTextStyle: TextStyle;
  header: ViewStyle;
  contentContainer: ViewStyle;
  listContainer: ViewStyle;
  dropdownStyle: ViewStyle;
  rowStyle: ViewStyle;
  footerText: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.background,
    },
    buttonStyle: {
      height: 40,
      borderRadius: 20,
      width: "100%",
      backgroundColor: colors.searchInputColor,
    },
    buttonTextStyle: {
      color: colors.shadow,
      fontSize: 16,
    },
    rowStyle: {
      paddingVertical: 4,
      height: 40,
      backgroundColor: colors.searchInputColor,
    },
    header: {
      width: ScreenWidth * 0.9,
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 16,
    },
    contentContainer: {
      flex: 1,
    },
    listContainer: {
      marginTop: 8,
    },
    dropdownStyle: {
      top: 4,
      marginTop: -20,
      borderRadius: 12,
      backgroundColor: colors.searchInputColor,
    },
    footerText: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10
    },
  });
};
