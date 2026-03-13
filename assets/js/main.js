/**
 * SVT Dating — landing scripts
 * No API keys or secrets. For any real integration, use server-side only.
 */

(function () {
  'use strict';

  var TRANSLATIONS = {
    ru: {
      nav_how: 'Как это работает',
      nav_features: 'Возможности',
      nav_pricing: 'Тарифы',
      nav_faq: 'Вопросы',
      nav_download: 'Скачать',
      aria_download: 'Скачать приложение',
      header_tagline: 'Ваш ИИ-помощник в подборе пар',
      aria_menu: 'Открыть меню',
      hero_label: 'Новый формат знакомств',
      hero_title: 'Знакомства, которые имеют значение',
      hero_subtitle: 'Хватит листать. Начинайте общаться.',
      hero_btn_download: 'Скачать приложение',
      hero_btn_how: 'Как это работает',
      intro_title: 'Настоящие связи с SVT Dating',
      intro_text: 'SVT помогает выйти за рамки бесконечного свайпа. Вы рассказываете о себе голосом и отвечаете на простые вопросы — мы подбираем пары по характеру, ценностям и предпочтениям. Чем активнее вы пользуетесь сервисом, тем точнее становятся рекомендации.',
      benefits_title: 'Почему SVT — это по-другому',
      b1_title: 'Без свайпа. Только контакт',
      b1_text: 'Никакого листания анкет. SVT сразу знакомит вас с подходящими людьми, чтобы вы могли сосредоточиться на общении.',
      b2_title: 'Пары под вас',
      b2_text: 'По голосу, характеру, фото и настройкам мы подбираем людей, которые действительно соответствуют вашим ожиданиям.',
      b3_title: 'Ясность и умный подбор',
      b3_text: 'Вы видите, почему диалог не сложился, и получаете понятную обратную связь — без неопределённости.',
      b3_text_merged: 'Вы видите, почему диалог не сложился, и получаете обратную связь. Каждый звонок улучшает подбор — совпадения становятся точнее.',
      b4_title: 'Учится вместе с вами',
      b4_text: 'Каждый звонок и выбор улучшают подбор: со временем совпадения становятся точнее.',
      how_title: 'Как это работает',
      s1_title: 'Начните с голоса, а не с переписки',
      s1_text: 'Профиль строится из того, как вы говорите и что показываете — не только из фото.',
      s2_title: 'Поймите, почему не сложилось',
      s2_text: 'Получайте понятную обратную связь и двигайтесь дальше осознанно.',
      s3_title: 'Звоните интересным людям',
      s3_text: 'Общайтесь с незнакомцами без отображения профилей — только голос и контакт.',
      gallery_title: 'Что внутри приложения?',
      g1_label: 'Профиль',
      g1_text: 'Профили, где важны характер, голос и настроение, а не только фото.',
      g2_label: 'Общение',
      g2_text: 'Функции для живого контакта без долгого ожидания ответов.',
      g3_label: 'Помощник',
      g3_text: 'Встроенный помощник подскажет, как находить более совместимых партнёров.',
      features_title: 'Ключевые возможности',
      f1_title: 'Знакомства через голос',
      f1_text: 'Общайтесь в реальном времени и чувствуйте совместимость по голосу и манере общения.',
      f2_title: 'Честная обратная связь',
      f2_text: 'Понимайте, что сработало, а что нет, и как улучшить свои совпадения.',
      f3_title: 'Без исчезновений',
      f3_text: 'Подсказки и структура общения помогают говорить ясно и по делу.',
      f3_title_merged: 'Без исчезновений и умный подбор',
      f3_text_merged: 'Подсказки и структура общения помогают говорить ясно. Мы подбираем людей под ваш тип и стиль — не случайные анкеты.',
      f4_title: 'Умный подбор',
      f4_text: 'Мы подбираем людей под ваш тип, предпочтения и стиль — не случайные анкеты.',
      safety_title: 'Безопасность прежде всего',
      safety_1: 'Верифицированные профили',
      safety_2: 'Модерация звонков',
      safety_3: 'Настройки приватности',
      pricing_title: 'Тарифы',
      price_basic_name: 'Базовый',
      price_basic_tokens: '200 токенов / неделя',
      price_per_week: '/ нед.',
      price_btn: 'Выбрать',
      price_badge: 'Популярный',
      price_standard_name: 'Стандарт',
      price_standard_tokens: '600 токенов / неделя',
      price_standard_trial: '3 дня бесплатно',
      price_premium_name: 'Премиум',
      price_premium_tokens: '1500 токенов / неделя',
      faq_title: 'Частые вопросы',
      faq_q1: 'Как SVT подбирает пары?',
      faq_a1: 'Мы учитываем голос, ответы на вопросы, фото, возраст, предпочтения и активность. Алгоритм со временем лучше понимает ваш тип.',
      faq_q2: 'Нужно ли верифицировать профиль?',
      faq_a2: 'Верификация не обязательна, но повышает доверие других пользователей и улучшает качество совпадений.',
      faq_q3: 'Можно ли пользоваться бесплатно?',
      faq_a3: 'Да, базовые функции доступны бесплатно. Тарифы дают больше токенов для звонков и расширенные возможности.',
      cta_title: 'Начните знакомства по-новому',
      cta_text: 'Скачайте приложение и сделайте первый шаг к осмысленным знакомствам.',
      cta_ios: 'Скачать для iOS',
      cta_android: 'Скачать для Android',
      footer_tagline: 'Знакомства с смыслом',
      footer_copy: '© 2025 SVT Dating. Все права защищены.'
    },
    en: {
      nav_how: 'How it works',
      nav_features: 'Features',
      nav_pricing: 'Pricing',
      nav_faq: 'FAQ',
      nav_download: 'Download',
      aria_download: 'Download app',
      header_tagline: 'Your AI matches assistant',
      aria_menu: 'Open menu',
      hero_label: 'A new way to date',
      hero_title: 'Dating that matters',
      hero_subtitle: 'Stop swiping. Start connecting.',
      hero_btn_download: 'Download app',
      hero_btn_how: 'How it works',
      intro_title: 'Real connections with SVT Dating',
      intro_text: 'SVT helps you move beyond endless swiping. You tell us about yourself through voice and simple questions — we match you by personality, values, and preferences. The more you use the service, the better the recommendations.',
      benefits_title: 'Why SVT is different',
      b1_title: 'No swiping. Just connection',
      b1_text: 'No more scrolling through profiles. SVT introduces you to the right people so you can focus on real conversation.',
      b2_title: 'Matches made for you',
      b2_text: 'We match you with people who fit your voice, personality, photos, and preferences — not random profiles.',
      b3_title: 'Clarity & smart matching',
      b3_text: 'See why a conversation didn’t work out and get clear feedback, so you’re never left wondering.',
      b3_text_merged: 'See why it didn’t work out and get feedback. Every call improves matching — your matches get better over time.',
      b4_title: 'Learns with you',
      b4_text: 'Every call and choice improves the algorithm — your matches get better over time.',
      how_title: 'How it works',
      s1_title: 'Start with voice, not text',
      s1_text: 'Your profile is built from how you speak and what you share — not just photos.',
      s2_title: 'Understand why it didn’t work',
      s2_text: 'Get clear feedback and move on with intention.',
      s3_title: 'Call interesting people',
      s3_text: 'Talk to strangers without showing profiles — voice and connection only.',
      gallery_title: 'What’s inside the app?',
      g1_label: 'Profile',
      g1_text: 'Profiles where personality, voice, and vibe matter — not just pictures.',
      g2_label: 'Connection',
      g2_text: 'Features for live connection without long waits for replies.',
      g3_label: 'Assistant',
      g3_text: 'A built-in assistant helps you find more compatible partners.',
      features_title: 'Key features',
      f1_title: 'Voice-first dating',
      f1_text: 'Connect in real time and feel compatibility through voice and style.',
      f2_title: 'Honest feedback',
      f2_text: 'Understand what works, what doesn’t, and how to improve your matches.',
      f3_title: 'No ghosting',
      f3_text: 'Prompts and structure support clearer communication.',
      f3_title_merged: 'No ghosting & smart matching',
      f3_text_merged: 'Prompts and structure support clearer communication. We match you to your type and style — not random profiles.',
      f4_title: 'Smart matching',
      f4_text: 'We match you to your type, preferences, and style — not random profiles.',
      safety_title: 'Safety first',
      safety_1: 'Verified profiles',
      safety_2: 'Moderated calls',
      safety_3: 'Privacy controls',
      pricing_title: 'Pricing',
      price_basic_name: 'Basic',
      price_basic_tokens: '200 tokens / week',
      price_per_week: '/ wk',
      price_btn: 'Choose',
      price_badge: 'Popular',
      price_standard_name: 'Standard',
      price_standard_tokens: '600 tokens / week',
      price_standard_trial: '3-day free trial',
      price_premium_name: 'Premium',
      price_premium_tokens: '1500 tokens / week',
      faq_title: 'FAQ',
      faq_q1: 'How does SVT match people?',
      faq_a1: 'We use voice, answers, photos, age, preferences, and activity. The algorithm gets better at understanding your type over time.',
      faq_q2: 'Do I need to verify my profile?',
      faq_a2: 'Verification is optional but builds trust and improves match quality.',
      faq_q3: 'Is there a free tier?',
      faq_a3: 'Yes, core features are free. Paid plans give more tokens and extra features.',
      cta_title: 'Start dating differently',
      cta_text: 'Download the app and take the first step toward meaningful connections.',
      cta_ios: 'Download for iOS',
      cta_android: 'Download for Android',
      footer_tagline: 'Dating that matters',
      footer_copy: '© 2025 SVT Dating. All rights reserved.'
    }
  };

  var header = document.querySelector('.header');
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  var navLinks = document.querySelectorAll('.nav a');

  function getStoredTheme() {
    try {
      var t = localStorage.getItem('svt-theme');
      return t === 'light' || t === 'dark' ? t : 'dark';
    } catch (_) {
      return 'dark';
    }
  }

  function applyTheme(theme) {
    var root = document.documentElement;
    root.removeAttribute('data-theme');
    root.classList.remove('auto-theme');
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
    }
    try {
      localStorage.setItem('svt-theme', theme);
    } catch (_) {}
    updateThemeButtons();
  }

  function updateThemeButtons() {
    var current = getStoredTheme();
    document.querySelectorAll('.theme-switcher__btn').forEach(function (btn) {
      var theme = btn.getAttribute('data-theme');
      btn.setAttribute('aria-pressed', theme === current ? 'true' : 'false');
    });
  }

  function getStoredLang() {
    try {
      var l = localStorage.getItem('svt-lang');
      return l === 'en' || l === 'ru' ? l : 'en';
    } catch (_) {
      return 'ru';
    }
  }

  function setLang(lang) {
    var t = TRANSLATIONS[lang];
    if (!t) return;
    try {
      localStorage.setItem('svt-lang', lang);
    } catch (_) {}
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] != null) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-attr][data-i18n-attr-key]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-attr-key');
      var attr = el.getAttribute('data-i18n-attr');
      if (attr && key && t[key] != null) el.setAttribute(attr, t[key]);
    });
    document.querySelectorAll('.lang-switcher__btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  // Theme switcher buttons
  document.querySelectorAll('.theme-switcher__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var theme = this.getAttribute('data-theme');
      applyTheme(theme);
    });
  });

  // Language switcher buttons
  document.querySelectorAll('.lang-switcher__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(this.getAttribute('data-lang'));
    });
  });

  applyTheme(getStoredTheme());
  setLang(getStoredLang());

  // ----- Mobile menu -----
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', !open);
      nav.classList.toggle('nav--open', !open);
      document.body.style.overflow = open ? '' : 'hidden';
    });
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        burger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('nav--open');
        document.body.style.overflow = '';
      });
    });
  }

  // ----- Header on scroll -----
  function onScroll() {
    if (!header) return;
    header.classList.toggle('header--scrolled', window.scrollY > 50);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----- Smooth scroll -----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  window.SVT = window.SVT || {};
  window.SVT.setTheme = applyTheme;
  window.SVT.getTheme = getStoredTheme;
  window.SVT.setLang = setLang;
  window.SVT.getLang = getStoredLang;
})();
