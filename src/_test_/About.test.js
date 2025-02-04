import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About.js';

describe('Test About page', () => {
  it('Check title', () => {
    render(<About />);
    const title = screen.getByText(/About/i);
    expect(title).toBeInTheDocument();
  });
});
