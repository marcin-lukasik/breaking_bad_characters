import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  wrapper: ViewStyle;
}

export default (color: string) => {
  return StyleSheet.create<Style>({
    container: {
      flexDirection: "row",
      display: "flex",
    },
    wrapper: {
      borderRadius: 16,
      backgroundColor: color,
      paddingHorizontal: 12,
      paddingVertical: 6,
      minWidth: 100,
    },
  });
};
