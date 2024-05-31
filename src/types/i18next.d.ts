import { defaultNS, resources } from '../locales/config';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['en'] & (typeof resources)['es'];
  }
}
