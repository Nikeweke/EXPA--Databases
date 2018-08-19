# API

## Check ES {GET}
```batch
http://localhost:9200
```

## Search Data {GET}
##### q - условие по которому будет поиск в `_src`
##### Больше параметров [здесь](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-uri-request.html)
```
# q=*:* - вывести все записи
http://localhost:9200/_search?q=*:*
http://localhost:9200/_search

# q=name:vasya - вывести записи где поле name=vasya
http://localhost:9200/_search?q=name:vasya

# s=5 - вывести кол-во записей
http://localhost:9200/_search?q=*?s=5

# example schema
http://localhost/:index_name/:type_name/_search?q=field:val

# Вывод всех записей с таким индексом
http://localhost:9200/:index_name/_search/

# Вывод всех записей с таким индексом или где встречаеться
http://localhost:9200/some_index_name*/_search/

# Вывод всех записей с таким индексом или где встечаеться похожее и где тип такой то
http://localhost:9200/some_index_name*/type_name/_search
```

## Add entry {POST}
Creates index, type, and entry
```json
[{
"city": "New york",
"name": "Wild fox",
},
{
"city": "New Trans",
"name": "Graugs",
}]
```
```batch
{POST} http://localhost:9200/places/restoraunts
```

## DELETE Entry {DELETE}

```batch
# index: places
# type: restoraunts
# id: 12
{DELETE} http://localhost:9200/places/restoraunts/12
```

## Update entry {PUT}

```batch
# index: places
# type: restoraunts
# id: 12
{POST} http://localhost:9200/places/restoraunts/12/_update
```

## Create Index {PUT}
```batch
# index: places
{PUT} http://localhost:9200/places
```

##### settings of index
```json
{
  "settings" : {
    "index" : {
      "number_of_shards" : 3,
      "number_of_replicas" : 2
    }
   }
}
```








