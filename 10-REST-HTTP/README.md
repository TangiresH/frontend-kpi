# REST, HTTP

<h2>Todo list + server</h2>

<h3>Завдання.</h3> 

1. Під час завантаження сторінки отримати список завдань (todo) з сервера і відобразити їх на сторінці.

2. Додати можливість видалення завдань на сервері. При видаленні елемента оновлювати список завдань (todo) на сторінці.

Завдання із зірочкою (не обов'язкове):

При зміні статусу завдання змінювати його на сервері та відображати цю зміну на сторінці.

Зробити можливість створення нового завдання на сервері та відображати його на сторінці.

____

<h3>Приклад роботи.</h3>

1. Для прикладу додам пункт з "test task". 

![Зображення](https://github.com/TangiresH/frontend-kpi/blob/main/10-REST-HTTP/screenshots/image1.png)

![Зображення](https://github.com/TangiresH/frontend-kpi/blob/main/10-REST-HTTP/screenshots/image2.png)

2. Щоб закріпити будь-який з пунктів - слід просто клікнути по ньому. Після цього колір його заповнення стане зеленим. Це можна робити одразу з декількома пунктами. Також коли рухати курсором, то кожний пункт виділяється рожевим кольором. 

![Зображення](https://github.com/TangiresH/frontend-kpi/blob/main/10-REST-HTTP/screenshots/image3.png)

![Зображення](https://github.com/TangiresH/frontend-kpi/blob/main/10-REST-HTTP/screenshots/image4.png)

Якщо повторно клікнути по будь-якому з пунктів, підкреслення зеленим кольором зникне.

![Зображення](https://github.com/TangiresH/frontend-kpi/blob/main/10-REST-HTTP/screenshots/image5.png)

3. Під час додавання пункту "test task" до Todo list, сервер повертає код 201. 

```
HTTP 201 Created - це статус відповіді, який вказує на успішне виконання запиту і створення ресурсу. Новий ресурс, або опис і посилання на новий ресурс, фактично створюються до того, як відповідь відправляється, і новостворені елементи повертаються в тілі повідомлення, розташованому або за URL-адресою запиту, або за URL-адресою, вказаною в заголовку Location.
```

![Зображення](https://github.com/TangiresH/frontend-kpi/blob/main/10-REST-HTTP/screenshots/image6.png)

![Зображення](https://github.com/TangiresH/frontend-kpi/blob/main/10-REST-HTTP/screenshots/image7.png)

Тепер спробуємо видалити пункт "test task" з серверу. Після натискання на кнопку <strong>"delete"</strong>, сервер повертає код 200. 

```
HTTP 200 OK - це статус відповіді, який позначає успішну операцію. Це означає, що запит був успішно оброблений.
```

![Зображення](https://github.com/TangiresH/frontend-kpi/blob/main/10-REST-HTTP/screenshots/image8.png)

![Зображення](https://github.com/TangiresH/frontend-kpi/blob/main/10-REST-HTTP/screenshots/image9.png)