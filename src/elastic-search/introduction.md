# [ElasticSearch](https://www.elastic.co/products/elasticsearch)

Это БД или поисковое ядро в котором сделано упор на индексы, то есть поиск данных это его основная цель.

### Схема запросов примерно такая при поиске:
```batch
# Без параметров
http://localhost:9200/index_name/type_name/number_id/_search

# С параметрами
http://localhost:9200/index_name/type_name/number_id/_search?q=name:vasya&size=2
# искать где поле name = vasya и вывод только 2 записей

# Больше дальше

```

#### [My Postman Examples](https://documenter.getpostman.com/view/3277814/elastic-search/7LnB418#)

#### [Kibana](https://www.elastic.co/products/kibana) is browser for ElasticSearch

