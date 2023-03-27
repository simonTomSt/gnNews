import { AxiosResponse } from 'axios';
import { api } from './api';
import { TopNewsByCountryNameRespnse } from './api-models';
import { ApiPaths } from './api-paths';

export const getTopNewsByCountryName = async (
  countryName: string
): Promise<AxiosResponse<TopNewsByCountryNameRespnse>> => {
  return api.get(ApiPaths.TopHeadlines, {
    params: {
      country: countryName,
    },
  });
};

export const getGeneralTopNews = async (): Promise<
  AxiosResponse<TopNewsByCountryNameRespnse>
> => {
  return api.get(ApiPaths.TopHeadlines, {
    params: {
      category: 'general',
      pageSize: '10',
    },
  });
};
