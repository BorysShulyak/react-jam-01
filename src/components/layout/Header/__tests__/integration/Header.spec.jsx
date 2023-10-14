import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { mockMatchMedia, render } from '../../../../../../test/helpers';
import Header from '../../Header';

describe('Header', () => {
  afterEach(() => {
    window.matchMedia?.restore();
  });

  it('should render the menu icon and navigation on the `sm` breakpoint', async () => {
    mockMatchMedia(600);
    render(<Header />);
    const MenuButton = screen.getByTestId('Header-menu-button');
    expect(MenuButton).toBeInTheDocument();
    fireEvent.click(MenuButton);
    await screen.findByRole('menu');
    expect(screen.getByRole('menuitem', { name: 'About us' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'What we do' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Our stuff' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Contact us' })).toBeInTheDocument();
  });

  it('should render the navigation items on the `md` breakpoint', () => {
    mockMatchMedia(900);
    render(<Header />);
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('What we do')).toBeInTheDocument();
    expect(screen.getByText('Our stuff')).toBeInTheDocument();
    expect(screen.getByText('Contact us')).toBeInTheDocument();
  });
});
