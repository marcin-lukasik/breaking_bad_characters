import React, { useMemo } from "react";
import { Image, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import createStyles from "./CharacterCard.style";
import Text from "../TextWrapper";
import { ICharacter } from "../../shared/interfaces";

interface ICharacterCardProps {
  character: ICharacter;
  onPress: () => void;
}

const CharacterCard: React.FC<ICharacterCardProps> = ({
  character,
  onPress,
}) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const { name, img } = character;

  const Header = () => (
    <>
      <Image
        resizeMode="cover"
        source={{ uri: img }}
        style={styles.profilePicImageStyle}
        testID="image"
      />
      <Text h3 bold color={colors.text}>
        {name}
      </Text>
    </>
  );

  return (
    <Pressable testID="character-card" style={styles.container} onPress={onPress}>
      <Header />
    </Pressable>
  );
};

export default CharacterCard;
