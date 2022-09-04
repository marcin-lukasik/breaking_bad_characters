import {render} from '@testing-library/react-native';
import TextWrapper from "@components/TextWrapper/TextWrapper";

describe('test TextWrapper component', () => {
  it('render without crashing', () => {
    const wrapper = render(<TextWrapper color="#ff0000">Hello</TextWrapper>);

    expect(wrapper.getByText("Hello")).toBeDefined();
  });
});
