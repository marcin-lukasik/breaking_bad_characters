import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import SelectDropdown from "react-native-select-dropdown";

import createStyles from "./CharactersScreen.style";

import { SCREENS } from "@shared-constants";
import CharacterCard from "@components/CharacterCard";
import Text from "@components/TextWrapper";
import SearchInput from "@components/SearchInput";
import { ICharacter } from "@shared-interfaces/character";
import useDebounce from "../../shared/hooks/useDebounce";
import { fetchCharacters } from "../../redux/actions/character.actions";
import { useActionDispatch } from "../../shared/hooks/useActionDispatch";
import { useSelector } from "react-redux";

interface HomeScreenProps {}

const CharactersScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [search, setSearch] = useState("");
  const dispatch = useActionDispatch();
  const [season, setSeason] = useState<number>();
  const [page, setPage] = useState(1);
  const debounceSearch = useDebounce(search);
  const { characters, loading, isListEnd } = useSelector((state: any) => state.characters);

  const handleCharacterPress = (character: ICharacter) => {
    NavigationService.push(SCREENS.DETAIL, { character });
  };

  const getCharacters = useCallback((page: number, searchTerm: string) => {
    const offset = (page - 1) * 10;
    dispatch(fetchCharacters({
      offset,
      name: searchTerm,
      limit: 10,
    }))
  }, []);

  useEffect(() => {
    getCharacters(page, debounceSearch);
  }, [page, debounceSearch]);

  useEffect(() => {
    setPage(1);
  }, [debounceSearch]);

  const fetchMoreData = useCallback(() => {
    if (!loading && !isListEnd) {
      setPage(page + 1)
    }
  }, [loading, isListEnd, page]);

  const onSelectSeason = (value: number) => {
    setSeason(value);
  };

  const filteredCharacters = useMemo(() => {
    let data = [...characters];
    if (season) {
      data = data.filter((character: ICharacter) =>
        character.appearance.includes(season),
      );
    }
    return data;
  }, [characters, season]);

  const renderFooter = () => (
    <View style={styles.footerText}>
      {loading && <ActivityIndicator />}
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchInput value={search} onChange={setSearch} placeholder="Search Characters..." />
        <View>
          <Text h4 left>
            Season
          </Text>
          <SelectDropdown
            data={[1, 2, 3, 4, 5]}
            onSelect={onSelectSeason}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem;
            }}
            rowTextForSelection={(item) => {
              return item;
            }}
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            defaultButtonText="Select Season"
            dropdownStyle={styles.dropdownStyle}
            dropdownOverlayColor={colors.transparent}
            rowStyle={styles.rowStyle}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.listContainer}>
          <FlatList
            data={filteredCharacters}
            renderItem={({ item: character }) => (
              <CharacterCard
                character={character}
                onPress={() => handleCharacterPress(character)}
              />
            )}
            ListFooterComponent={renderFooter}
            onEndReachedThreshold={0.2}
            onEndReached={fetchMoreData}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CharactersScreen;
