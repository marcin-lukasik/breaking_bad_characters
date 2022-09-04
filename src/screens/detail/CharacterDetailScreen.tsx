import React, { useMemo } from "react";
import { Image, Pressable, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import * as NavigationService from "react-navigation-helpers";
import createStyles from "./CharacterDetailScreen.style";
import Text from "@components/TextWrapper";
import { CharacterStatus } from "@shared-interfaces/character";
import Badge from "@components/Badge";

interface DetailScreenProps {
  route: any;
}

const CharacterDetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const character = route.params?.character;

  const getBadgeColor = (status: CharacterStatus) => {
    if (status === CharacterStatus.Alive) {
      return colors.green;
    }
    if (status === CharacterStatus.Deceased) {
      return colors.secondary;
    }
    if (status === CharacterStatus.PresumedDead) {
      return colors.danger;
    }
    return colors.shadow;
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={{ uri: character.img }}
        style={styles.profilePicImageStyle}
      />
      <View style={styles.wrapper}>
        <View style={styles.infoWrapper}>
          <Text h4 bold color={colors.text} style={styles.firsColumn}>
            Name
          </Text>
          <Text color={colors.text} style={styles.secondColumn}>
            {character.name}
          </Text>
        </View>

        <View style={styles.infoWrapper}>
          <Text h4 bold color={colors.text} style={styles.firsColumn}>
            Nickname
          </Text>
          <Text color={colors.text} style={styles.secondColumn}>
            {character.nickname}
          </Text>
        </View>
        <View style={styles.infoWrapper}>
          <Text h4 bold color={colors.text} style={styles.firsColumn}>
            Occupation
          </Text>
          <Text color={colors.text} style={styles.secondColumn}>
            {character.occupation.join(", ")}
          </Text>
        </View>

        <View style={styles.infoWrapper}>
          <Text h4 bold color={colors.text} style={styles.firsColumn}>
            Status
          </Text>
          <View style={styles.secondColumn}>
            <Badge
              label={character.status}
              color={getBadgeColor(character.status)}
            />
          </View>
        </View>

        <View style={styles.infoWrapper}>
          <Text h4 bold color={colors.text} style={styles.firsColumn}>
            Season appearance
          </Text>
          <Text color={colors.text} style={styles.secondColumn}>
            {character.appearance.join(", ")}
          </Text>
        </View>
      </View>

      <Pressable
        style={styles.buttonStyle}
        onPress={() => NavigationService.goBack()}
      >
        <Text color={colors.white}>Go back to Characters</Text>
      </Pressable>
    </View>
  );
};

export default CharacterDetailScreen;
