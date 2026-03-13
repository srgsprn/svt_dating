# Публикация SVT Dating: GitHub и VPS (nginx + HTTPS)

Домен: **svtdating.com**  
IP VPS: **85.239.51.175**  
GitHub: **srgsprn** / репозиторий **svt_dating**

---

## Часть 1. GitHub

### 1.1. Создать репозиторий на GitHub

1. Зайдите на [github.com](https://github.com), войдите под логином **srgsprn**.
2. Нажмите **"New"** (или **"+"** → **"New repository"**).
3. **Repository name:** `svt_dating`.
4. Выберите **Public**.
5. **Не** ставьте галочки "Add a README", ".gitignore", "License" — репозиторий должен быть пустым.
6. Нажмите **"Create repository"**.

### 1.2. Команды в папке проекта (локально)

Выполняйте в каталоге, где лежит проект (например `svt_dating`):

```bash
cd /Users/monstrik/svt_dating

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/srgsprn/svt_dating.git
git push -u origin main
```

**main vs master:** Сейчас стандарт — ветка `main`. Команда `git branch -M main` переименует текущую ветку в `main`. Если у вас уже настроен `master`, можно не выполнять `branch -M main` и пушить: `git push -u origin master` (тогда на GitHub по умолчанию будет `master`).

---

## Часть 2. VPS (Ubuntu + nginx + HTTPS)

### 2.1. Подключение к серверу

```bash
ssh root@85.239.51.175
```

(Если вы заходите под пользователем с sudo: `ssh ваш_пользователь@85.239.51.175`.)

### 2.2. Обновление системы

```bash
sudo apt update && sudo apt upgrade -y
```

### 2.3. Установка nginx

```bash
sudo apt install nginx -y
```

Проверка: откройте в браузере `http://85.239.51.175`. Должна открыться стандартная страница nginx ("Welcome to nginx!").

### 2.4. Директория для сайта

```bash
sudo mkdir -p /var/www/svtdating.com
sudo chown -R $USER:$USER /var/www/svtdating.com
```

### 2.5. Копирование файлов на сервер

**Вариант А — через Git (рекомендуется)**

На сервере:

```bash
cd /var/www/svtdating.com
git clone https://github.com/srgsprn/svt_dating.git .
```

Точка в конце команды клонирует содержимое репозитория прямо в текущую папку `/var/www/svtdating.com`.

**Вариант Б — через SCP с вашего компьютера**

На **локальном** компьютере (в папке, где лежит `svt_dating`):

```bash
scp -r index.html assets root@85.239.51.175:/var/www/svtdating.com/
```

Или упакуйте проект в архив, залейте по SFTP/SCP и на сервере распакуйте в `/var/www/svtdating.com`.

### 2.6. Конфиг nginx для домена

Создайте файл конфигурации:

```bash
sudo nano /etc/nginx/sites-available/svtdating.com
```

Вставьте:

```nginx
server {
    listen 80;
    server_name svtdating.com www.svtdating.com;
    root /var/www/svtdating.com;
    index index.html;
    location / {
        try_files $uri $uri/ =404;
    }
}
```

Сохраните (в nano: Ctrl+O, Enter, Ctrl+X).

Включите сайт и проверьте конфиг:

```bash
sudo ln -s /etc/nginx/sites-available/svtdating.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 2.7. Привязка домена к VPS

В панели регистратора домена **svtdating.com**:

1. Откройте раздел DNS (управление DNS, зона, записи).
2. Создайте или измените **A-записи**:
   - для **@** (или корень домена) → **85.239.51.175**
   - для **www** → **85.239.51.175**

Сохранение может занять от нескольких минут до 24 часов. Проверка с вашего компьютера:

```bash
dig svtdating.com +short
dig www.svtdating.com +short
```

Оба должны вернуть `85.239.51.175`. Альтернатива: [whoer.net](https://whoer.net) или сервисы проверки DNS.

### 2.8. HTTPS (Let's Encrypt)

После того как домен указывает на сервер и сайт открывается по HTTP:

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d svtdating.com -d www.svtdating.com
```

Следуйте подсказкам (email, согласие с условиями). Certbot сам настроит HTTPS в nginx и автообновление сертификата.

### 2.9. Обновление сайта

**Если сайт развёрнут через Git:**

```bash
cd /var/www/svtdating.com
git pull origin main
```

**Если файлы заливаете вручную** — просто замените файлы в `/var/www/svtdating.com` (через SCP/SFTP или снова распакуйте архив).

---

## Краткий чек-лист

1. Создать репозиторий **svt_dating** на GitHub (пустой).
2. Локально: `git init`, `git add .`, `git commit -m "Initial commit"`, `git branch -M main`, `git remote add origin https://github.com/srgsprn/svt_dating.git`, `git push -u origin main`.
3. Подключиться к VPS: `ssh root@85.239.51.175`.
4. Обновить систему: `sudo apt update && sudo apt upgrade -y`.
5. Установить nginx: `sudo apt install nginx -y`, проверить по IP в браузере.
6. Создать каталог: `sudo mkdir -p /var/www/svtdating.com`, `sudo chown -R $USER:$USER /var/www/svtdating.com`.
7. Скопировать сайт: на сервере `cd /var/www/svtdating.com` и `git clone https://github.com/srgsprn/svt_dating.git .` (или залить файлы по SCP).
8. Создать конфиг nginx в `/etc/nginx/sites-available/svtdating.com`, сделать симлинк в `sites-enabled`, `sudo nginx -t`, `sudo systemctl reload nginx`.
9. В DNS у регистратора добавить A-записи для @ и www на 85.239.51.175.
10. Установить certbot: `sudo apt install certbot python3-certbot-nginx -y`, затем `sudo certbot --nginx -d svtdating.com -d www.svtdating.com`.
11. Проверить открытие по https://svtdating.com и https://www.svtdating.com.

Готово.
