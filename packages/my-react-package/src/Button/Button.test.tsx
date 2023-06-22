import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('<Button />', () => {
  it('should render', () => {
    render(<Button />);
    expect(screen.getByRole('button', { name: /test/i })).toBeInTheDocument();
  });
});
