import I18nJs from 'react-native-i18n';
import en from './en';
import ru from './ru';

I18nJs.fallbacks = true;
// I18nJs.locale = 'ru'

I18nJs.translations = {
  en,
  ru,
};

export default I18nJs;
