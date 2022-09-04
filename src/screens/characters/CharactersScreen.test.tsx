import { fireEvent, render, waitFor } from "@testing-library/react-native";
import CharactersScreen from "@screens/characters/CharactersScreen";
import { Provider } from "react-redux";
import { setupStore } from "../../redux/store";

jest.mock('react-native-select-dropdown', () => jest.fn());
jest.mock('react-native-dynamic-vector-icons', () => jest.fn());

describe("test CharactersScreen component", () => {
  it("render without crashing", async () => {
    const wrapper = render(
      <Provider store={setupStore({})}>
        <CharactersScreen />
      </Provider>
    );

    expect(wrapper.queryAllByTestId('character-card')).toHaveLength(0);

    await waitFor(() => {
      expect(wrapper.queryAllByTestId('character-card')).toHaveLength(10);
    });

    fireEvent.changeText(wrapper.getByPlaceholderText('Search Characters...'), 'walter');

    await waitFor(() => {
      expect(wrapper.queryAllByTestId('character-card')).toHaveLength(2);
    });
  });
});
