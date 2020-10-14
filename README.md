## Учебный проект


Выполнение верстки по блоку 1.6

Для просмотра проекта, необходимо перейти по [ссылке](https://bbrvi2008.github.io/cps-site).
Верстка выполнена по [макету](https://www.figma.com/file/xwf6DjV1pcVju9my3VNcXN/CPSdesign-for-practice)

Во время выполнения проекта были закреплены навыки:
- настройки окружения
- верстки по макету
- использования SCSS
- использования сборщиков проектов
- подключения сторонних компонентов через пакетные менеджеры
- размещения результатов работы на gh-pages


##### Клонировать репозиторий
```
git clone https://github.com/bbrvi2008/cps-site
``` 

##### Размещение старницы на gh-pages [мануал](https://gist.github.com/cobyism/4730490)
```
git add dist && git commit -m "Initial dist subtree commit"
git subtree push --prefix dist origin gh-pages
```