import { render } from '@testing-library/react';

import { NavTrigger } from './nav-trigger';

describe('Nav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavTrigger />);
    expect(baseElement).toBeTruthy();
  });
});
