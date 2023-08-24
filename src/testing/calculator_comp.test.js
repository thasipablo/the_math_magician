import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Renders a random computer quote', () => {
  test('render', () => {
    const { calComponent } = render(<Calculator />);
    expect(calComponent).toMatchSnapshot();
  });
});
