import { render } from '@testing-library/react';

import WebfolioCv from './webfolio-cv';

describe('WebfolioCv', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebfolioCv />);
    expect(baseElement).toBeTruthy();
  });
});
