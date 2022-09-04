import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import createStyles from "./Badge.style";
import Text from "../TextWrapper";

interface IBadgeProps {
  label: string;
  color: string;
}

const Badge: React.FC<IBadgeProps> = ({ label, color }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(color), [color]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text color={colors.white} center>
          {label}
        </Text>
      </View>
    </View>
  );
};

export default Badge;
