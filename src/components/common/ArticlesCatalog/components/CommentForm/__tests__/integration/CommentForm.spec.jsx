import { fireEvent, screen, within } from '@testing-library/react';
import React from 'react';

import { render } from '../../../../../../../../test/helpers';
import CommentForm from '../../CommentForm';

const MOCK_ARTICLES = [
  { id: 1, title: 'Article 1' },
  { id: 2, title: 'Article 2' },
  { id: 3, title: 'Article 3' }
];

describe('CommentForm', () => {
  it('should render the form fields and submit button', () => {
    render(<CommentForm articles={MOCK_ARTICLES} />);
    expect(screen.getByLabelText('Article')).toBeInTheDocument();
    expect(screen.getByLabelText('Comment')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('should handle article selection', async () => {
    render(<CommentForm articles={MOCK_ARTICLES} />);
    const ArticleField = screen.getByLabelText('Article');
    fireEvent.mouseDown(ArticleField);
    fireEvent.click(within(screen.getByRole('listbox')).getByText('Article 2'));
    expect(await screen.findByText('Article 2')).toBeVisible();
  });

  it('should handle comment input', () => {
    render(<CommentForm articles={MOCK_ARTICLES} />);
    fireEvent.change(screen.getByLabelText('Comment'), {
      target: { value: 'This is a test comment' }
    });
    expect(screen.getByLabelText('Comment')).toHaveValue('This is a test comment');
  });
});
