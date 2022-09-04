import React, { useMemo } from "react";
import { Text } from 'react-native';
import { StyleProp, TextStyle } from "react-native";
import createStyles from "./TextWrapper.style";

type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface ITextWrapperProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  left?: boolean;
  bold?: boolean;
  color?: string;
  right?: boolean;
  center?: boolean;
  fontFamily?: string;
  children?: React.ReactNode;
  style?: CustomTextStyleProp;
}

const TextWrapper: React.FC<ITextWrapperProps> = (props) => {
  const styles = useMemo(() => createStyles(props), [props]);

  return (
    <Text style={[styles.container, props.style]}>
      {props.children}
    </Text>
  );
};

export default TextWrapper;
