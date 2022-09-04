import { fireEvent, render } from "@testing-library/react-native";
import CharacterCard from "@components/CharacterCard/CharacterCard";
import { CharacterStatus } from "@shared-interfaces/character";

const character = {
  "char_id": 1,
  "name": "Walter White",
  "birthday": "09-07-1958",
  "occupation": [
    "High School Chemistry Teacher",
    "Meth King Pin",
  ],
  "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
  "status": CharacterStatus.Alive,
  "nickname": "Heisenberg",
  "appearance": [
    1,
    2,
    3,
    4,
    5,
  ],
  "portrayed": "Bryan Cranston",
  "category": "Breaking Bad",
  "better_call_saul_appearance": [],
};

describe("test CharacterCard component", () => {
  it("render without crashing", () => {
    const onPress = jest.fn();
    const wrapper = render(<CharacterCard character={character} onPress={onPress} />);

    expect(wrapper.getByText(character.name)).toBeDefined();
    expect(wrapper.getByTestId('image')).toBeDefined();
    fireEvent(wrapper.getByTestId('character-card'), 'click');

    expect(onPress).toHaveBeenCalled();
  });
});
