// ---- lang.js — loads translations from Decap CMS JSON files ----

let currentLang = 'nl';
let translations = { nl: {}, en: {} };

async function loadTranslations() {
  try {
    const [nlRes, enRes] = await Promise.all([
      fetch('content/nl.json'),
      fetch('content/en.json')
    ]);
    if (nlRes.ok) translations.nl = await nlRes.json();
    if (enRes.ok) translations.en = await enRes.json();
  } catch (e) {
    console.warn('Could not load translations from CMS, using fallback.');
  }
  try {
    const page = location.pathname.split('/').pop().replace('.html', '') || 'home';
    const key = page === 'index' ? 'home' : page;
    const response = await fetch(`https://tz-digital-client-portal.vercel.app/api/live/cato/${key}`, { cache: 'no-store' });
    if (response.ok) {
      const live = await response.json();
      Object.assign(translations.nl, live.changes || {});
    }
  } catch (e) {
    console.warn('Live copy is temporarily unavailable.');
  }
}

function applyTranslations(lang) {
  currentLang = lang;
  const t = translations[lang] || {};

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.setAttribute('placeholder', t[key]);
  });

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = lang === 'nl' ? 'EN' : 'NL';
  });

  localStorage.setItem('catobycato-lang', lang);
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadTranslations();
  const saved = localStorage.getItem('catobycato-lang') || 'nl';
  applyTranslations(saved);

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTranslations(currentLang === 'nl' ? 'en' : 'nl');
    });
  });
});
