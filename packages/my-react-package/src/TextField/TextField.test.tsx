import { render, screen } from '@testing-library/react';

import { TextField } from './TextField';

describe('<TextField />', () => {
  it('should render', () => {
    render(<TextField />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
