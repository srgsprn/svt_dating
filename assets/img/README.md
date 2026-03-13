# Изображения для лендинга SVT Dating

Замените заглушки на реальные файлы при необходимости.

## Рекомендуемые файлы и размеры

| Файл | Назначение | Рекомендуемый размер |
|------|------------|----------------------|
| `favicon.svg` | Иконка во вкладке (уже есть SVG-заглушка) | 32×32 или SVG |
| `apple-touch-icon.png` | Иконка при добавлении на домашний экран (iOS) | 180×180 px |
| `og-preview.png` | Превью в соцсетях (Open Graph) | 1200×630 px |

## Где используются

- **favicon.svg** — подключён в `index.html` в `<link rel="icon">`.
- **apple-touch-icon.png** — в `<link rel="apple-touch-icon">`.
- **og-preview.png** — в meta `og:image` для превью в Telegram, VK, Facebook и т.д.

Положите файлы в эту папку (`assets/img/`) и при необходимости обновите пути в `index.html`.

## Блок «Что внутри приложения» (Profile, Connection, Assistant)

Сейчас используются CSS-анимации. Для более интерактивного вида можно добавить короткие видео или GIF (например `profile.mp4`, `connection.gif`, `assistant.gif`) и вставить их в блоки `.gallery__placeholder--profile`, `--connection`, `--assistant` в `index.html` через `<video autoplay loop muted playsinline>` или `<img>`.
