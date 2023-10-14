import { screen } from '@testing-library/react';
import React from 'react';

import { render } from '../../../../../../../../test/helpers';
import ArticleCard from '../../ArticleCard';

const MOCK_ARTICLE_TITLE = 'Sample Article Title';

describe('ArticleCard', () => {
  it('should render the article title and description', () => {
    render(<ArticleCard title={MOCK_ARTICLE_TITLE} />);
    expect(screen.getByText(MOCK_ARTICLE_TITLE)).toBeInTheDocument();
    expect(screen.getByText(/Lorem insum dolor sit amet/i)).toBeInTheDocument();
  });

  it('should render the `GAMING` and `WOW` buttons', () => {
    render(<ArticleCard title={MOCK_ARTICLE_TITLE} />);
    expect(screen.getByText('GAMING')).toBeInTheDocument();
    expect(screen.getByText('WOW')).toBeInTheDocument();
  });
});
