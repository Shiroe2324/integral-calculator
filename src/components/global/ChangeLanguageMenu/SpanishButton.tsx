import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

const SpanishButton: React.FC = () => {
  const { t } = useTranslation('global-drawer-wrapper');

  return (
    <span className='flex items-center justify-between gap-1'>
      <ReactCountryFlag countryCode='ES' svg /> <span>{t('language-button.spanish')}</span>
    </span>
  );
};

export default SpanishButton;
