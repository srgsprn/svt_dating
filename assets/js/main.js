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
      nav_signin: 'Войти',
      nav_register: 'Регистрация',
      aria_download: 'Скачать приложение',
      logo_text: 'SVT dating',
      aria_menu: 'Открыть меню',
      hero_label: 'Новый формат знакомств',
      hero_title: 'Ваше время имеет значение!',
      hero_subtitle: 'Хватит листать ленту. Поручите рутину нам.',
      hero_btn_join: 'Присоединяйся',
      hero_btn_how: 'Как это работает',
      intro_title: 'Настоящие знакомства с SVT Dating',
      intro_text: 'SVT помогает выйти за рамки бесконечного свайпа. Вы рассказываете о себе и ставите задачу нашему агенту — он делает всю работу за вас: подбирает пары по вашим требованиям и отсеивает лишнее. Ваш персональный ИИ-ассистент проведёт 1000 диалогов одновременно и подберёт то, что вы хотите. Вам останется лишь собраться на свидание и выбрать ресторан.',
      benefits_title: 'Почему SVT — это по-другому',
      b1_title: 'Экономия вашего времени!',
      b1_text: 'Никакого бесконечного листания анкет. Вы ставите задачу, и SVT сразу знакомит вас с нужными людьми, отсеивая 98% неподходящих кандидатов — чтобы вы могли сосредоточиться на приятном и полезном.',
      b2_title: 'Никакого неприятного опыта общения',
      b2_text: 'SVT на этапе диалогов отсеивает обманщиков, мошенников, врунов, пустозвонов, состоящих в браке и т.д. По фото определяет реальный возраст, вес, рост. Вы не вступаете в диалоги с токсичными людьми.',
      b3_title: 'Только правильные кандидаты',
      b3_text: 'Вы получаете всю информацию, которую хотели бы узнать о кандидатах, в личном кабинете.',
      b3_text_merged: 'Вы получаете всю информацию, которую хотели бы узнать о кандидатах, в личном кабинете — вес, рост, увлечения, хобби, семейное и материальное положение и многое другое. По вашим требованиям и критериям мы подбираем людей, которые действительно соответствуют вашим ожиданиям.',
      b4_title: 'Учится вместе с вами',
      b4_text: 'Каждый звонок и выбор улучшают подбор: со временем совпадения становятся точнее.',
      how_title: 'Как это работает',
      s1_title: 'Расскажите о себе',
      s1_text: 'Вы предоставляете ту информацию о себе, которую считаете нужной. Чем подробнее и интереснее — тем проще нашему SVT-агенту строить диалоги с потенциальными кандидатами.',
      s2_title: 'Ставьте задачи SVT-агенту',
      s2_text: 'Подробно опишите идеального кандидата: возраст, телосложение, рост, материальное и семейное положение, хобби и т.д. Наш SVT-агент анализирует фото, манеру диалога, хобби и интересы; может проходить психологические тесты и тесты на соционику.',
      s3_title: 'Получите результат',
      s3_text: 'В результате вы получаете несколько кандидатов, полностью соответствующих вашим критериям, историю переписки и контакты. Остаётся только договориться о встрече или принять приглашение!',
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
      safety_1: 'Никакого разглашения информации',
      safety_2: 'Личные данные полностью сохранены',
      safety_3: 'Ваши контакты видны только после одобрения',
      pricing_title: 'Тарифы',
      price_basic_name: 'Базовый',
      price_trial: '3 дня бесплатно',
      price_per_week: '/ нед.',
      price_per_month: '/ мес.',
      price_3months: '/ 3 мес.',
      price_per_year: '/ год',
      price_btn: 'Выбрать',
      price_badge: 'Популярный',
      price_standard_name: 'Стандарт',
      price_premium_name: 'Премиум',
      faq_title: 'Частые вопросы',
      faq_q1: 'Как SVT подбирает пары?',
      faq_a1: 'Мы учитываем голос, ответы на вопросы, фото, возраст, предпочтения и активность. Алгоритм со временем лучше понимает ваш тип.',
      faq_q2: 'Нужно ли верифицировать профиль?',
      faq_a2: 'Верификация не обязательна, но повышает доверие других пользователей и улучшает качество совпадений.',
      faq_q3: 'Можно ли пользоваться бесплатно?',
      faq_a3: 'Да, базовые функции доступны бесплатно. Тарифы дают больше токенов для звонков и расширенные возможности.',
      cta_title: 'Начните знакомства по-новому',
      cta_text: 'Зарегистрируйтесь на сайте и сделайте первый шаг к осмысленным знакомствам.',
      cta_register: 'Регистрация',
      footer_tagline: 'Знакомства с смыслом',
      footer_copy: '© 2025 SVT Dating. Все права защищены.'
    },
    en: {
      nav_how: 'How it works',
      nav_features: 'Features',
      nav_pricing: 'Pricing',
      nav_faq: 'FAQ',
      nav_signin: 'Sign in',
      nav_register: 'Register',
      aria_download: 'Download app',
      logo_text: 'SVT dating',
      aria_menu: 'Open menu',
      hero_label: 'A new way to date',
      hero_title: 'Your time matters!',
      hero_subtitle: 'Stop scrolling the feed. Leave the routine to us.',
      hero_btn_join: 'Join now',
      hero_btn_how: 'How it works',
      intro_title: 'Real dating with SVT Dating',
      intro_text: 'SVT helps you move beyond endless swiping. You tell us about yourself and set the task for our agent — it does all the work for you: finds matches to your criteria and filters out the rest. Your personal AI assistant can run 1000 conversations at once and pick what you want. All you have to do is get ready for the date and choose the restaurant.',
      benefits_title: 'Why SVT is different',
      b1_title: 'Save your time!',
      b1_text: 'No more endless scrolling through profiles. You set the task, and SVT introduces you to the right people, filtering out 98% of unsuitable candidates — so you can focus on what\'s pleasant and useful.',
      b2_title: 'No unpleasant communication',
      b2_text: 'SVT filters out deceivers, scammers, liars, and time-wasters during dialogues; detects real age, weight, and height from photos. You never have to talk to toxic people.',
      b3_title: 'Only the right candidates',
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
      safety_1: 'No disclosure of your information',
      safety_2: 'Your personal data is fully protected',
      safety_3: 'Your contacts are visible only after approval',
      pricing_title: 'Pricing',
      price_basic_name: 'Basic',
      price_trial: '3 days free',
      price_per_week: '/ wk',
      price_per_month: '/ month',
      price_3months: '/ 3 months',
      price_per_year: '/ year',
      price_btn: 'Choose',
      price_badge: 'Popular',
      price_standard_name: 'Standard',
      price_premium_name: 'Premium',
      faq_title: 'FAQ',
      faq_q1: 'How does SVT match people?',
      faq_a1: 'We use voice, answers, photos, age, preferences, and activity. The algorithm gets better at understanding your type over time.',
      faq_q2: 'Do I need to verify my profile?',
      faq_a2: 'Verification is optional but builds trust and improves match quality.',
      faq_q3: 'Is there a free tier?',
      faq_a3: 'Yes, core features are free. Paid plans give more tokens and extra features.',
      cta_title: 'Start dating in a new way',
      cta_text: 'Register on the site and take the first step toward meaningful dating.',
      cta_register: 'Register',
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

  // ----- Pricing: select Basic/Premium (same pink as Standard) -----
  document.querySelectorAll('.price-card').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (card.classList.contains('price-card--featured')) return;
      if (card.classList.contains('price-card--selected')) return;
      e.preventDefault();
      document.querySelectorAll('.price-card').forEach(function (c) { c.classList.remove('price-card--selected'); });
      card.classList.add('price-card--selected');
    });
  });

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
