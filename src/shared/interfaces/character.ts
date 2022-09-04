export enum CharacterStatus {
  Deceased = "Deceased",
  Alive = "Alive",
  PresumedDead = "Presumed dead",
  Unknown = "Unknown",
}

export interface ICharacter {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: CharacterStatus;
  nickname: string;
  appearance: number[];
  portrayed: string;
  category: string;
  better_call_saul_appearance: number[];
}
