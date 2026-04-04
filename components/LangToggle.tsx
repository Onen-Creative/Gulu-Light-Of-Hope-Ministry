'use client';
import { useLang } from './LangContext';

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'ach' : 'en')}
      className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold border border-gray-300 hover:border-primary-500 hover:text-primary-600 transition-all"
      title={lang === 'en' ? 'Switch to Acholi' : 'Switch to English'}
    >
      <span className="text-sm">{lang === 'en' ? '🇺🇬' : '🇬🇧'}</span>
      <span>{lang === 'en' ? 'ACH' : 'EN'}</span>
    </button>
  );
}
