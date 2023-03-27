import { mockArticle, renderWithProviders } from '@/utils/testing';
import { screen } from '@testing-library/react';

import { ArticleModal } from '../ArticleModal';

describe('ArticleModal component', () => {
  it('renders the article title', () => {
    renderWithProviders(<ArticleModal article={mockArticle} open />);

    const articleTitle = screen.getByText(mockArticle.title);
    expect(articleTitle).toBeInTheDocument();
  });

  it('renders the article description', () => {
    renderWithProviders(<ArticleModal article={mockArticle} open />);
    const articleDescription = screen.getByText(
      String(mockArticle.description)
    );
    expect(articleDescription).toBeInTheDocument();
  });

  it('renders the article content', () => {
    renderWithProviders(<ArticleModal article={mockArticle} open />);
    const articleContent = screen.getByText(String(mockArticle.content));
    expect(articleContent).toBeInTheDocument();
  });

  it('renders the article author', () => {
    renderWithProviders(<ArticleModal article={mockArticle} open />);
    const articleAuthor = screen.getByText(mockArticle.author);
    expect(articleAuthor).toBeInTheDocument();
  });

  it('renders the formatted publication date', () => {
    renderWithProviders(<ArticleModal article={mockArticle} open />);
    const formattedDate = screen.getByText(/czwartek, 21 lipca 1983/i);
    expect(formattedDate).toBeInTheDocument();
  });

  it('renders the article source name', () => {
    renderWithProviders(<ArticleModal article={mockArticle} open />);
    const sourceName = screen.getByText(mockArticle.source.name);
    expect(sourceName).toBeInTheDocument();
  });
});
