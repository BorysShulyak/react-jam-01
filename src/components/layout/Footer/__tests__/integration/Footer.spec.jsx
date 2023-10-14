import { render, screen } from '@testing-library/react';
import React from 'react';

import Footer from '../../Footer';

describe('Footer', () => {
  it('should render the People Icon and link', () => {
    render(<Footer />);
    expect(screen.getByText('Find out more at')).toBeInTheDocument();
    const link = screen.getByText('www.people.com');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://people.com');
  });

  it('should render copyright', () => {
    render(<Footer />);
    expect(screen.getByText('Terms & Conditions | Privacy Policy')).toBeInTheDocument();
  });
});
