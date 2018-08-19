# Sqlite
#### Содержание
* Установка
* Управление БД
* Создание БД
* Создание Таблицы
* Вставить запись

---

## Установка

Там должен быть sqlite.exe - https://www.sqlite.org/download.html

## Управление БД
* http://sqlitebrowser.org/ (по-меньше вариант)
* http://www.sqliteexpert.com/download.html (большой вариант)
* или через cmd


## Создание БД

* Через СУБД
* Зайти через cmd в директорию где `sqlite3.exe`, - и запустить:
```
C:\sqlite>sqlite3 example.db`
```

## Создание Таблицы
```
create table orks(id integer, name varchar(255));
```

## Вставить запись
```
insert into orks values(1, 'Greeko');
```

