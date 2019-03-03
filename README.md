# GPB-HW-wiki
Wikipedia Search for GPB HW

## Визуал можно посмотреть по ссылке
https://stanislavec.github.io/GPB-HW-wiki/

## Описания функций
```
getResults(searchQuery) - получаем данные по запросу из wiki API, запускаем функцию для трансформации pageid в url
Параметр searchQuery - непосредственно поисковая фраза пользователя
```
```
turnIntoUrl(value, index) - трансформируем pageid в url, создаем кнопку для перехода к оригинальной статье на wiki
Параметры:
 1. value (pageid) - id страницы на wiki
 2. index - порядковый номер контейнера, в котором выводится ответ
```
