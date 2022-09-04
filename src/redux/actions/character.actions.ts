import { Dispatch } from 'redux';

import * as CharacterApi from '../../services/api/characters.api';
import { CHARACTER_ACTION } from '../types';

export const fetchCharactersRequest = () => ({
  type: CHARACTER_ACTION.FETCH_CHARACTERS,
});

export const fetchCharactersSuccess = (data: any) => ({
  type: CHARACTER_ACTION.FETCH_CHARACTERS_SUCCESS,
  data,
});

export const fetchCharactersFailed = (error: any) => ({
  type: CHARACTER_ACTION.FETCH_CHARACTERS_ERROR,
  error,
});

export const fetchCharacters = (params: any) => async (dispatch: Dispatch) => {
  dispatch(fetchCharactersRequest());
  try {
    if (params.offset === 0 ) {
      dispatch(initCharacters());
    }
    const res = await CharacterApi.getCharacters(params);
    dispatch(fetchCharactersSuccess(res));
  } catch (err) {
    dispatch(fetchCharactersFailed(err));
  }
};

export const initCharacters = () => ({
  type: CHARACTER_ACTION.INIT_CHARACTERS,
});
