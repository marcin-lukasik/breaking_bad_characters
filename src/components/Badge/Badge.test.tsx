import { render } from '@testing-library/react-native';
import Badge from "@components/Badge/Badge";

describe('test Badge component', () => {
  it('render without crashing', () => {
    const wrapper = render(<Badge label="Hello" color="#ff0000" />);

    expect(wrapper.getByText("Hello")).toBeDefined();
  });
});
