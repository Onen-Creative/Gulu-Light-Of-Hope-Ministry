'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'ach';

const translations = {
  en: {
    // Nav
    home: 'Home', about: 'About', ministry: 'Ministry', projects: 'Projects',
    media: 'Media', partnership: 'Partnership', joinUs: 'Join Us', contact: 'Contact',
    // Home
    heroTitle: 'Gulu Light of Hope Bible Church & Outreach Ministries – Uganda',
    heroSubtitle: 'A Beacon of Hope and Spiritual Nourishment',
    heroTagline: 'Faith, Passion, Community & Worship',
    learnMore: 'Learn More', contactUs: 'Contact Us',
    ourImpact: 'Our Impact',
    studentsEducated: 'Students Educated', churchBranches: 'Church Branches',
    activeMinistries: 'Active Ministries', livesTouched: 'Lives Touched',
    welcomeMessage: 'Welcome Message from the Founder & Director',
    joinFamily: 'Join Our Church Family',
    joinDesc: 'We welcome everyone to be part of Gulu Light of Hope Bible Church & Outreach Ministries.',
    // About
    aboutUs: 'About Us', whoWeAre: 'Who We Are', ourVision: 'Our Vision',
    ourMission: 'Our Mission', ourGoal: 'Our Goal', coreValues: 'Core Values',
    whatWeBelieve: 'What We Believe',
    // Contact
    getInTouch: 'Get In Touch', sendMessage: 'Send Us a Message',
    firstName: 'First Name', lastName: 'Last Name', email: 'Email Address',
    phone: 'Phone Number', subject: 'Subject', message: 'Message', send: 'Send Message',
    sending: 'Sending...',
    // Media
    mediaGallery: 'Media Gallery', allMedia: 'All Media', photos: 'Photos', videos: 'Videos',
    // Footer
    quickLinks: 'Quick Links', followUs: 'Follow Us', allRightsReserved: 'All rights reserved.',
  },
  ach: {
    // Nav
    home: 'Paco', about: 'Kom Wa', ministry: 'Tic pa Lubaŋa', projects: 'Ticce',
    media: 'Midia', partnership: 'Cibedo', joinUs: 'Ibin Kacel', contact: 'Kop Kwedwa',
    // Home
    heroTitle: 'Gulu Light of Hope Bible Church & Outreach Ministries – Uganda',
    heroSubtitle: 'Ner me Geno ki Mwoc pa Lubaŋa',
    heroTagline: 'Ngeno, Maro, Lwak ki Woro',
    learnMore: 'Nong Ngec Mapol', contactUs: 'Kop Kwedwa',
    ourImpact: 'Tic Mwa',
    studentsEducated: 'Lutim Mubigeno', churchBranches: 'Kacoke pa Kniŋa',
    activeMinistries: 'Tic pa Lubaŋa', livesTouched: 'Kwaro Mudony',
    welcomeMessage: 'Waco Maber ki bot Ladit Layub ki Lanen',
    joinFamily: 'Bin i Doggola pa Kniŋa Wa',
    joinDesc: 'Waworo dano ducu me bedo i kin Gulu Light of Hope Bible Church & Outreach Ministries.',
    // About
    aboutUs: 'Kom Wa', whoWeAre: 'Wan Aŋo', ourVision: 'Neno Wa',
    ourMission: 'Tic Wa', ourGoal: 'Gemo Wa', coreValues: 'Gin Madit Wa',
    whatWeBelieve: 'Gin Mawageno',
    // Contact
    getInTouch: 'Kop Kwedwa', sendMessage: 'Cwal Lok Boti Wa',
    firstName: 'Nying Mukwongo', lastName: 'Nying Mapiny', email: 'Imeel',
    phone: 'Namba pa Simu', subject: 'Lok', message: 'Lok Mabino', send: 'Cwal Lok',
    sending: 'Tye ka Cwalo...',
    // Media
    mediaGallery: 'Midia', allMedia: 'Midia Ducu', photos: 'Cal', videos: 'Vidio',
    // Footer
    quickLinks: 'Nyonyo Oyot', followUs: 'Luwa', allRightsReserved: 'Twero ducu ogwoko.',
  },
};

type TranslationKey = keyof typeof translations.en;

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key) => translations.en[key],
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const t = (key: TranslationKey) => translations[lang][key] ?? translations.en[key];
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
