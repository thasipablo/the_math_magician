import { render } from '@testing-library/react';
import Quote from '../components/Quote';

describe('Renders a random computer quote', () => {
  test('render', () => {
    const { quote } = render(<Quote />);
    expect(quote).toMatchSnapshot();
  });
});
