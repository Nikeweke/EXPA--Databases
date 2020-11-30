# RethinkDB
#### Содержание
* Example with Node

---

## Example with Node

```js
const r = require('rethinkdbdash')({
database: 'mydb',
discovery: true
// timeout: 10, // timeout period in seconds for the connection to be opened (default 20).
// servers: [
// {
// host: 'aws-us-east-1-portal.4.dblayer.com',
// port: 11078
// }
// ]
})

function Insert () {
r.table('users').insert({
title: 'Lorem ipsum',
content: 'Dolor sit amet'
}).run((res) => {
console.log(res)
})
}

function Get (table) {
return r.table(table).run()
.then((data) => data)
.error((err) => console.log(err))
}

Insert()
Get('users').then(users => console.log(users))

```

