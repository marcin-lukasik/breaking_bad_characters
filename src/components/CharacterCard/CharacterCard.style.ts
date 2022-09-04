import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, ImageStyle } from "react-native";

interface Style {
  container: ViewStyle;
  profilePicImageStyle: ImageStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      padding: 12,
      marginTop: 16,
      borderWidth: 1,
      borderRadius: 8,
      width: ScreenWidth * 0.9,
      borderColor: colors.borderColor,
      backgroundColor: colors.dynamicBackground,
      flexDirection: "row",
      alignItems: "center",
    },
    profilePicImageStyle: {
      height: 50,
      width: 50,
      borderRadius: 50,
      backgroundColor: colors.shadow,
      marginRight: 16,
    },
  });
};
