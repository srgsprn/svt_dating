# SVT Dating — лендинг

Статический лендинг для сервиса знакомств SVT Dating.

## Стек

- HTML5, CSS3 (Flex/Grid), ванильный JavaScript
- Адаптивная вёрстка, поддержка тёмной и светлой темы (системная и через `data-theme`)

## Структура

```
svt_dating/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       ├── favicon.svg
│       └── README.md   # какие картинки добавить (og-preview, apple-touch-icon)
├── DEPLOY.md           # инструкции: GitHub, VPS, nginx, HTTPS
└── README.md
```

## Локальный запуск

Откройте `index.html` в браузере или поднимите локальный сервер:

```bash
python3 -m http.server 8080
```

Сайт: http://localhost:8080

## Деплой

Подробные шаги — в [DEPLOY.md](DEPLOY.md): публикация на GitHub, настройка Ubuntu, nginx, домен svtdating.com, Let's Encrypt.
