import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('preferredLanguage', lng);
  };

  return (
    <div className="language-switcher" role="group" aria-label="Language selection">
      <button
        className={`language-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        aria-pressed={i18n.language === 'en'}
        title="Switch to English"
      >
        EN
      </button>
      <span className="language-separator" aria-hidden="true">|</span>
      <button
        className={`language-btn ${i18n.language === 'zh' ? 'active' : ''}`}
        onClick={() => changeLanguage('zh')}
        aria-pressed={i18n.language === 'zh'}
        title="切换到中文"
      >
        中文
      </button>
    </div>
  );
};

export default LanguageSwitcher;