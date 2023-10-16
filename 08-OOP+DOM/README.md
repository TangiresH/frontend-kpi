# OOP + DOM

<h2>Tabs widget </h2>

Реалізувати клас Tabs. При кліку на будь-яку вкладку показується відповідне тіло. Одночасно відображується лише одне тіло. При ініціалізації відображається перший елемент. Активну вкладку також слід якось виділити, щоб було зрозуміло, що саме вона активна.

Можлива початкова структура в HTML:

```
<div id="tabs">
 <nav>
    <button>One</button>
    <button>Two</button>
    <button>Three</button>
 </nav>
 <div>
   <div>Content 1</div>
   <div>Content 2</div>
   <div>Content 3</div>
 </div>
</div>
```

Викликати буду так: 

```
const tabsEl = document.querySelector('#tabs');
new Tabs(tabsEl);
```

Приклад пошуку елемента за індексом:

```
const navItems = Array.from(document.querySelector('nav').children);
const active = document.querySelector('.nav-item-active')

navItems.indexOf(active);
```

____

<h3>Виконане завдання.</h3>

Коли клікаєш на будь-який таб, показується відповідне боді. Колір його заповнення - жовтий.

Результат роботи:

* Клік по першому табу: 
![Зображення1](https://github.com/TangiresH/frontend-kpi/blob/main/08-OOP%2BDOM/screenshots/image1.png)

* Клік по другому табу: 
![Зображення2](https://github.com/TangiresH/frontend-kpi/blob/main/08-OOP%2BDOM/screenshots/image2.png)

* Клік по третьому табу:
![Зображення3](https://github.com/TangiresH/frontend-kpi/blob/main/08-OOP%2BDOM/screenshots/image3.png)