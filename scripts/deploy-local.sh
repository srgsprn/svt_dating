#!/bin/bash
# Запускать на вашем Mac: из папки svt_dating выполнить: ./scripts/deploy-local.sh
# Заливает файлы на VPS и настраивает nginx + HTTPS.

set -e
cd "$(dirname "$0")/.."
VPS="root@85.239.51.175"
SITE_DIR="/var/www/svtdating.com"

echo "Загрузка файлов на VPS..."
scp -r -o ConnectTimeout=15 index.html assets "$VPS:$SITE_DIR/" 2>/dev/null || {
  echo "Создаю директорию на сервере и загружаю..."
  ssh $VPS "mkdir -p $SITE_DIR"
  scp -r -o ConnectTimeout=15 index.html assets "$VPS:$SITE_DIR/"
}

echo "Запуск настройки nginx и HTTPS на сервере..."
ssh $VPS 'bash -s' < "scripts/deploy-server.sh"

echo "Готово. Откройте https://svtdating.com"
