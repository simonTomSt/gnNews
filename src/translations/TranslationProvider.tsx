import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

import polish from './lang/pl.json';
import english from './lang/en.json';
import { useSelector } from 'react-redux';
import { slectLanguage } from '@/store';

type TranslationProviderProps = {
  children: ReactNode;
};

const getMessages = (locale: string) => {
  switch (locale) {
    case 'en':
      return english;
    default:
      return polish;
  }
};

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const currentLanguage = useSelector(slectLanguage);
  const messages = getMessages(currentLanguage);

  return (
    <IntlProvider
      messages={messages}
      locale={currentLanguage}
      defaultLocale="pl"
    >
      {children}
    </IntlProvider>
  );
};
