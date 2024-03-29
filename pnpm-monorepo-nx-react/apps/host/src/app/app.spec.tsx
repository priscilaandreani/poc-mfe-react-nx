import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome host/gi)).toBeTruthy();
  });

  it('should import product correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome product/gi)).toBeTruthy();
  });
});
