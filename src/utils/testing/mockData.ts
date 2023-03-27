import { Article } from '@/api/api-models';

export const mockArticle: Article = {
  source: {
    id: 'source',
    name: 'CNBC',
  },
  author: 'Elliot Smith',
  title:
    'Deutsche Bank shares slide 13% after sudden spike in the cost of insuring against its default - CNBC',
  description:
    "Deutsche Bank shares fell 13% on Friday after a spike in credit default swaps on Thursday night, as concerns about the stability of Europe's banks persisted.",
  url: 'https://www.cnbc.com/2023/03/24/deutsche-bank-shares-slide-8percent-after-a-sudden-spike-in-default-insurance-costs.html',
  urlToImage:
    'https://image.cnbcfm.com/api/v1/image/107029826-1647259558003-gettyimages-166811556-RUSSIA_FOREIGN_BANKS.jpeg?v=1679648746&w=1920&h=1080',
  publishedAt: new Date('July 21, 1983 01:15:00'),
  content: 'mock_content',
};
