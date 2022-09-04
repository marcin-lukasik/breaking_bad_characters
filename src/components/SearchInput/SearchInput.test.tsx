import { fireEvent, render } from "@testing-library/react-native";
import SearchInput from "@components/SearchInput/SearchInput";

jest.mock('react-native-dynamic-vector-icons', () => jest.fn());

describe("test SearchInput component", () => {
  it("render without crashing", () => {
    const onChange = jest.fn();
    const wrapper = render(<SearchInput value="John" placeholder="Search Characters..." onChange={onChange} />);

    expect(wrapper.getByPlaceholderText("Search Characters...")).toBeDefined();
    expect(wrapper.getByDisplayValue("John")).toBeDefined();

    fireEvent.changeText(wrapper.getByPlaceholderText('Search Characters...'), 'changed text');
    expect(onChange).toHaveBeenCalledWith("changed text");
  });
});
