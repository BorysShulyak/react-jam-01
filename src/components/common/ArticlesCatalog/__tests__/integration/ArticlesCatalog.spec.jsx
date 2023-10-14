/* eslint-disable global-require */
import { fireEvent, screen, waitFor, within } from '@testing-library/react';
import React from 'react';

import { render } from '../../../../../../test/helpers';
import ArticlesCatalog from '../../ArticlesCatalog';

jest.mock('../../hooks', () => ({
  useArticles: jest.fn()
}));

const MOCK_ARTICLES = [
  { id: 1, title: 'Article 1' },
  { id: 2, title: 'Article 2' },
  { id: 3, title: 'Article 3' }
];

describe('ArticlesCatalog', () => {
  it('should render the `News` title', () => {
    require('../../hooks').useArticles.mockReturnValue({ isLoading: true });
    render(<ArticlesCatalog />);
    expect(screen.getByText('NEWS')).toBeInTheDocument();
  });

  it('should render loading skeleton cards when data is loading', () => {
    require('../../hooks').useArticles.mockReturnValue({ isLoading: true });
    render(<ArticlesCatalog />);
    expect(screen.getAllByTestId('ArticleCardSkeleton')).toHaveLength(9);
  });

  it('should render article cards when data is available', () => {
    require('../../hooks').useArticles.mockReturnValue({ isLoading: false, data: MOCK_ARTICLES });
    render(<ArticlesCatalog />);
    expect(screen.getByText('Article 1')).toBeInTheDocument();
    expect(screen.getByText('Article 2')).toBeInTheDocument();
    expect(screen.getByText('Article 3')).toBeInTheDocument();
    expect(screen.queryAllByTestId('ArticleCardSkeleton')).toHaveLength(0);
  });

  it('should render the comment form fields and submit button', () => {
    require('../../hooks').useArticles.mockReturnValue({ isLoading: false, data: MOCK_ARTICLES });
    render(<ArticlesCatalog />);
    expect(screen.getByLabelText('Article')).toBeInTheDocument();
    expect(screen.getByLabelText('Comment')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('should handle article selection', async () => {
    require('../../hooks').useArticles.mockReturnValue({ isLoading: false, data: MOCK_ARTICLES });
    render(<ArticlesCatalog />);
    const ArticleField = screen.getByLabelText('Article');
    fireEvent.mouseDown(ArticleField);
    fireEvent.click(within(screen.getByRole('listbox')).getByText('Article 2'));
    await waitFor(() => expect(within(ArticleField).getByText('Article 2')).toBeInTheDocument());
  });

  it('should handle comment input', () => {
    require('../../hooks').useArticles.mockReturnValue({ isLoading: false, data: MOCK_ARTICLES });
    render(<ArticlesCatalog />);
    fireEvent.change(screen.getByLabelText('Comment'), {
      target: { value: 'This is a test comment' }
    });
    expect(screen.getByLabelText('Comment')).toHaveValue('This is a test comment');
  });
});
