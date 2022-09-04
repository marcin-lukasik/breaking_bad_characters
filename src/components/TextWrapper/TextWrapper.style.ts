import { StyleSheet, TextStyle } from "react-native";
import { ITextWrapperProps } from "./TextWrapper";

interface Style {
  container: TextStyle;
}

export default ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  left,
  right,
  center,
  bold,
  color,
  fontFamily
}: ITextWrapperProps) => {
  return StyleSheet.create<Style>({
    container: {
      ... h1 ? { fontSize: 54 } : {},
      ... h2 ? { fontSize: 48 } : {},
      ... h3 ? { fontSize: 19 } : {},
      ... h4 ? { fontSize: 16 } : {},
      ... h5 ? { fontSize: 14 } : {},
      ... h6 ? { fontSize: 12 } : {},
      ... left ? { textAlign: 'left' } : {},
      ... right ? { textAlign: 'right' } : {},
      ... center ? { textAlign: 'center' } : {},
      ... bold ? { fontWeight: "700" } : {},
      ... color ? { color } : {},
      ... fontFamily ? { fontFamily } : {},
    },
  });
};
