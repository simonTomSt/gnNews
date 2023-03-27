import { screen } from '@testing-library/react';

import { RowArticleCard } from '@/components';
import { mockArticle, renderWithProviders } from '@/utils/testing';

describe('RowArticleCard component', () => {
  const onClickMock = jest.fn();

  it('renders the article title', () => {
    renderWithProviders(
      <RowArticleCard article={mockArticle} onClick={onClickMock} />
    );

    const articleTitle = screen.getByText(mockArticle.title);
    expect(articleTitle).toBeInTheDocument();
  });

  it('renders the formatted publication date', () => {
    renderWithProviders(
      <RowArticleCard article={mockArticle} onClick={onClickMock} />
    );
    const formattedDate = screen.getByText(/czwartek, 21 lipca 1983/i);

    expect(formattedDate).toBeInTheDocument();
  });

  it('renders the article source name', () => {
    renderWithProviders(
      <RowArticleCard article={mockArticle} onClick={onClickMock} />
    );

    const sourceName = screen.getByText(mockArticle.source.name);
    expect(sourceName).toBeInTheDocument();
  });

  it('calls onClick with the article object when clicked', () => {
    renderWithProviders(
      <RowArticleCard article={mockArticle} onClick={onClickMock} />
    );

    const articleCard = screen.getByRole('button');

    articleCard.click();

    expect(onClickMock).toHaveBeenCalledWith(mockArticle);
  });
});
