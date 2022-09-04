import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";

interface Style {
  container: ViewStyle;
  titleTextStyle: TextStyle;
  buttonStyle: ViewStyle;
  buttonTextStyle: TextStyle;
  profilePicImageStyle: ImageStyle;
  wrapper: ViewStyle;
  rightPart: ViewStyle;
  infoWrapper: ViewStyle;
  firsColumn: TextStyle;
  secondColumn: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 16,
      paddingHorizontal: 32,
    },
    wrapper: {
      width: "100%",
      alignItems: "flex-start",
    },
    infoWrapper: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 16,
    },
    rightPart: {
      marginLeft: 16,
    },
    titleTextStyle: {
      fontSize: 32,
    },
    buttonStyle: {
      height: 45,
      width: "90%",
      marginTop: 32,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
      shadowRadius: 5,
      shadowOpacity: 0.7,
      shadowColor: colors.primary,
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
    buttonTextStyle: {
      color: colors.text,
      fontWeight: "700",
    },
    profilePicImageStyle: {
      height: 160,
      width: 160,
      borderRadius: 80,
      backgroundColor: colors.shadow,
      marginBottom: 16,
    },
    firsColumn: {
      width: "50%",
    },
    secondColumn: {
      width: "50%",
    },
  });
};
