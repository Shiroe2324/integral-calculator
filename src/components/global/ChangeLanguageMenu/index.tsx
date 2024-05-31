import React, { useEffect, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Dropdown } from 'react-daisyui';
import { useTranslation } from 'react-i18next';

import EnglishButton from '@/~global/ChangeLanguageMenu/EnglishButton';
import SpanishButton from '@/~global/ChangeLanguageMenu/SpanishButton';

interface ChangeLanguageMenuProps {
  horizontal?: 'left' | 'right';
  vertical?: 'top' | 'bottom';
}

const ChangeLanguageMenu: React.FC<ChangeLanguageMenuProps> = ({ horizontal, vertical }) => {
  const { t } = useTranslation('global-drawer-wrapper');
  const { i18n } = useTranslation();
  const [englishSelected, setEnglishSelected] = useState(false);
  const [spanishSelected, setSpanishSelected] = useState(false);

  useEffect(() => {
    switch (i18n.language) {
      case 'en':
        setEnglishSelected(true);
        setSpanishSelected(false);
        break;
      case 'es':
        setEnglishSelected(false);
        setSpanishSelected(true);
        break;
      default:
        setEnglishSelected(false);
        setSpanishSelected(false);
    }
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const getCurrentLanguage = () => {
    switch (i18n.language) {
      case 'en':
        return <EnglishButton />;
      case 'es':
        return <SpanishButton />;
      default:
        return 'Unknown';
    }
  };

  return (
    <Dropdown className='ml-2' horizontal={horizontal} vertical={vertical}>
      <Dropdown.Toggle className='btn btn-ghost' button={false}>
        {getCurrentLanguage()}
      </Dropdown.Toggle>
      <Dropdown.Menu className='z-[1] gap-1 bg-base-300 text-base-content'>
        <Dropdown.Item onClick={() => changeLanguage('en')} className={englishSelected ? 'active' : ''}>
          <span className='ml-[-10px] flex items-center justify-between gap-1 px-2'>
            <ReactCountryFlag countryCode='US' svg /> <span>{t('language-button.english')}</span>
          </span>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('es')} className={spanishSelected ? 'active' : ''}>
          <span className='ml-[-10px] flex items-center justify-between gap-1 px-2'>
            <ReactCountryFlag countryCode='ES' svg /> <span>{t('language-button.spanish')}</span>
          </span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ChangeLanguageMenu;
