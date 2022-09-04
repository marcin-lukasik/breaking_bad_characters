import React, { useMemo } from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { useTheme } from "@react-navigation/native";
import createStyles from "./SearchInput.style";

interface ISearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const SearchInput: React.FC<ISearchInputProps> = ({ value, onChange, placeholder }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.searchInputWrapper}>
      <Icon
        name="search"
        type="Ionicons"
        color={colors.shadow}
        size={20}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChange(text)}
      />
    </View>
  );
};

export default SearchInput;
