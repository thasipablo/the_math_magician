import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Renders a random computer quote', () => {
  test('render', () => {
    const { calcComponent } = render(<Calculator />);
    expect(calcComponent).toMatchSnapshot();
  });
});
