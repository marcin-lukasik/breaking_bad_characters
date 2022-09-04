import { CHARACTER_ACTION } from '../types';
import { ICharacter } from "@shared-interfaces/character";

interface ICharactersState {
  characters: ICharacter[];
  loading: boolean;
  error: any;
  isListEnd: boolean;
}

const initialState: ICharactersState = {
  characters: [],
  loading: false,
  error: null,
  isListEnd: false,
};

const characterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHARACTER_ACTION.FETCH_CHARACTERS:
      return {
        ...state,
        loading: true,
      };
    case CHARACTER_ACTION.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: [...state.characters, ...action.data],
        isListEnd: action.data.length < 10,
      };
    case CHARACTER_ACTION.FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    case CHARACTER_ACTION.INIT_CHARACTERS:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state;
  }
};

export default characterReducer;
