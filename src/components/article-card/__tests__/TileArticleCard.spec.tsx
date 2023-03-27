import { mockArticle, renderWithProviders } from '@/utils/testing';
import { screen } from '@testing-library/react';
import { TileArticleCard } from '../TileArticleCard';

describe('TileArticleCard', () => {
  const onClickMock = jest.fn();

  it('renderWithProviderss the article title', () => {
    renderWithProviders(
      <TileArticleCard article={mockArticle} onClick={onClickMock} />
    );
    const articleTitle = screen.getByText(mockArticle.title);
    expect(articleTitle).toBeInTheDocument();
  });

  it('renderWithProviderss the article description', () => {
    renderWithProviders(
      <TileArticleCard article={mockArticle} onClick={onClickMock} />
    );
    const articleDescription = screen.getByText(
      String(mockArticle.description)
    );
    expect(articleDescription).toBeInTheDocument();
  });

  it('renderWithProviderss the formatted publication date', () => {
    renderWithProviders(
      <TileArticleCard article={mockArticle} onClick={onClickMock} />
    );
    const formattedDate = screen.getByText(/czwartek, 21 lipca 1983/i);
    expect(formattedDate).toBeInTheDocument();
  });

  it('renderWithProviderss the article source name', () => {
    renderWithProviders(
      <TileArticleCard article={mockArticle} onClick={onClickMock} />
    );
    const sourceName = screen.getByText(mockArticle.source.name);
    expect(sourceName).toBeInTheDocument();
  });

  it('calls onClick with the article object when clicked', () => {
    const mockOnClick = jest.fn();
    renderWithProviders(
      <TileArticleCard article={mockArticle} onClick={mockOnClick} />
    );
    const articleCard = screen.getByRole('button');
    articleCard.click();
    expect(mockOnClick).toHaveBeenCalledWith(mockArticle);
  });
});
