import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Renders a random computer quote', () => {
  test('render', () => {
    const { home } = render(<Home />);
    expect(home).toMatchSnapshot();
  });
});
