### Тестовое задание "Котировки"

Приложение состоит из трех страниц:
- О приложении: место, где можно найти описание приложения (там оно скромное :D)
- Котировки А: отображение первой половины котировок из запроса https://poloniex.com/public?command=returnTicker
- Котировки Б: отображение второй половины котировок из запроса https://poloniex.com/public?command=returnTicker

Страница с котировками состоит из таблицы, которая обновляется каждые 5 секунд, изменения показываются анимацией изменения цифр. Там можно открыть модалку, посмотреть подробности котировки. Если ошибка прилетает от сервера, то всплывает глобально уведомление.

### Используемый стек
- Mobx
- React
- Scss
- Vite
- TS
- Prettier

### Запуск приложения:
```
  npm i
  npm run dev
```

### Возможные улучшения
- Ну это естественно визуальные улучшения, сильно анимировать и стилизовать я не стал)
- Вынос переменных общих стилей в css переменные
- Добавление разных отображений для Notify, напр, warning, info, danger
- Возможно некоторые моменты касательно Mobx я сделал не так элегантно как могло быть, в силу не большой практики, но постарался реализовать правильно
- Описать комментарии к функциям и компонентам, торопился, не успел написать
- Добавить eslint

P. S. Установить доступ к публичному API Poliniex не получилось, т. к. access-control-allow-origin не стоит для всех на бекенд, пользовался плагином для браузера, чтобы отключить CORS.