# Базовый образ
FROM node:14

# Создаем директорию приложения
WORKDIR /usr/src/app

# Копируем файлы проекта
COPY . .

# Устанавливаем зависимости
RUN npm install

# Собираем приложение
RUN npm run build

# Запуск
CMD ["node", "server/index.js"]
