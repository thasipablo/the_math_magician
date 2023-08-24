import { render } from '@testing-library/react';
import ResultScreen from '../components/ResultScreen';

describe('Renders a random computer quote', () => {
  test('render', () => {
    const { result } = render(<ResultScreen />);
    expect(result).toMatchSnapshot();
  });
});
