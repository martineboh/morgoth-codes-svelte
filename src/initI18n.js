import i18next from 'i18next';
import en from './locales/messages.en';
import hi from './locales/messages.hi';

function initI18n(lng = 'en') {
  i18next
  .init({
    lng,
    resources: {
      en,
      hi
    },
    fallbackLng: 'en',
    getAsync: true
  });

  return i18next;
}

export default initI18n;