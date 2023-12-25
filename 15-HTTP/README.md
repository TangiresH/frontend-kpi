# HTTP

## WebSocketChat

Інтерфейс складається зі списку повідомлень та форми для відправлення повідомлення.

У списку повідомлення відображаються як:

* автор: повідомлення

* автор: повідомлення

* автор: повідомлення

* автор: повідомлення

Форма складається з двох введень: у першому - ім'я, у другому - повідомлення.

Запуск WebSocket сервера локально.

___

## Інструкція для запуску.

### Вимоги.

* node >= 16.0.0
* npm >= 8.0.0

### Запуск

1. Клонуєте мій репозиторій. 
```
https://github.com/TangiresH/frontend-kpi/
```
2. Далі переходите в директорію WebSocket-server-chat.
```
cd 15-HTTP/websocket-server-chat/
```
3. Скачуєте всі залежності.

```
npm install
```

4. Тоді запускаєте сервер. 

```
npm run start
```

___

## Робота коду. 

Локально запущу сервер. 

![Зображення](https://github.com/TangiresH/frontend-kpi/blob/main/15-HTTP/screenshots/image1.png)

Далі відкрию два вікна з програмою. З одного вікна напишу повідомлення "Message 1" від імені Dima Mudryk.

![Зображення](https://github.com/TangiresH/frontend-kpi/blob/main/15-HTTP/screenshots/image2.png)

Як можна побачити, повідомлення моментально дійшло іншому користувачу. 

Тепер від імені Alex Semenuk напишу повідомлення "message 2", а також імітуватиму діалог.

![Зображення](https://github.com/TangiresH/frontend-kpi/blob/main/15-HTTP/screenshots/image3.png)
![Зображення](https://github.com/TangiresH/frontend-kpi/blob/main/15-HTTP/screenshots/image4.png)