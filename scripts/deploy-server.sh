#!/bin/bash
# Запускать на VPS (Ubuntu) под root или sudo.
# Перед запуском загрузите файлы в /var/www/svtdating.com (scp или git clone).

set -e
SITE_DIR="/var/www/svtdating.com"
NGINX_AVAILABLE="/etc/nginx/sites-available/svtdating.com"
NGINX_ENABLED="/etc/nginx/sites-enabled/svtdating.com"

echo "[1/6] Обновление системы..."
apt-get update -qq && apt-get upgrade -y -qq

echo "[2/6] Установка nginx и git..."
apt-get install -y -qq nginx git

echo "[3/6] Директория и файлы сайта..."
mkdir -p "$SITE_DIR"
if [ ! -f "$SITE_DIR/index.html" ]; then
  if command -v git >/dev/null 2>&1; then
    echo "    index.html не найден, клонирую из GitHub..."
    ( cd "$SITE_DIR" && git clone --depth 1 https://github.com/srgsprn/svt_dating.git .tmp_clone && cp -r .tmp_clone/. . && rm -rf .tmp_clone ) || true
  fi
fi
if [ ! -f "$SITE_DIR/index.html" ]; then
  echo "    Ошибка: в $SITE_DIR нет index.html. Загрузите файлы через SCP или создайте репозиторий на GitHub и повторите."
  exit 1
fi
chown -R www-data:www-data "$SITE_DIR" 2>/dev/null || true

echo "[4/6] Конфиг nginx..."
cat > "$NGINX_AVAILABLE" << 'EOF'
server {
    listen 80;
    server_name svtdating.com www.svtdating.com;
    root /var/www/svtdating.com;
    index index.html;
    location / {
        try_files $uri $uri/ =404;
    }
}
EOF

[ -L "$NGINX_ENABLED" ] || ln -sf "$NGINX_AVAILABLE" "$NGINX_ENABLED"
nginx -t
systemctl reload nginx
echo "    Nginx перезагружен."

echo "[5/6] HTTPS (Let's Encrypt)..."
if ! command -v certbot >/dev/null 2>&1; then
  apt-get install -y -qq certbot python3-certbot-nginx
fi
if [ -d /etc/letsencrypt/live/svtdating.com ]; then
  echo "    Сертификат уже есть, обновление..."
  certbot renew --quiet --nginx 2>/dev/null || true
else
  certbot --nginx -d svtdating.com -d www.svtdating.com \
    --non-interactive --agree-tos \
    --register-unsafely-without-email || true
fi

echo "[6/6] Готово."
echo "Проверьте: https://svtdating.com"
