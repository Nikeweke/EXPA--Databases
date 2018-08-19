# Search with DSL
**DSL** - это domain specific language, запросы делаються методом **POST**
* [Bodybuilder.js](http://bodybuilder.js.org/) - строит тело(body) DSL
* Elasticsearch.js - package for ElasticSearch

https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html

#### Connection
```js
var elasticsearch = require('elasticsearch');
Connect: function () {
this.conn = new elasticsearch.Client({
host: 'http://130.211.69.140:9200',
// log: 'trace'
});
},
```

## Постройка запроса
```js
var url = 'http://localhost:9200/_search';
var options = {
q : '*:*', // optional
index: '', // optional
type : '', // optional
body : {} // optional
}

await helpers.req(url, 'post', options);
```

## Вывод записей по критерию исчет в `_source` (simple)
```js
var postData = {
  query:{
    match: {
      duration: 35
    }
  }
}
```

## Query
```js
var bodybuilder = require('bodybuilder');
...
var body = bodybuilder()
.size(5) // amount of entries

// not strict match (should)
.query('match', 'keywords_checked', true)

// strict term (must)
.query('term', 'keywords_checked', true)

// strict terms (must)
.query('terms', 'keywords_checked', [true, ''])

// range
// gte - greater then or equals
// lte - less then or Equals
// gt - greater then
// lt - less then
.query('range', '@timestamp', {
"gte" : from_utc,
"lt" : to_utc
})

// must not
.notQuery('match', 'name', 'kraken')

// filter if exist field
.filter('exists', 'price')

.build(); // makes object body



// .filter('term', 'user', 'kimchy')
// .filter('term', 'user', 'herald')
// .orFilter('term', 'user', 'johnny')
// .notFilter('term', 'user', 'cassie')
// .aggregation('terms', 'user')


console.log( JSON.stringify(body) )

var options = {
// q: '*:*'
// index: '',
// type: '',
body: body
}


return database.conn.search(options)
.then( body => {
  // console.log(body)
  // var hits = body.hits.hits;
  return body.hits.hits;
},
(error) => {
  console.trace(error.message);
});
```

