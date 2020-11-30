# Mongodb

[Browser for db](https://robomongo.org/)
[Example with Node](https://github.com/Nikeweke/Mongo-Node)

---
#### Содержание
* Install(Unix)
* Install and start(Windows)
* Top commands
* Make user admin
* Problem with built-in roles
* Class MongoClient not found (php)

---

## Install(Unix)

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

## Install and start(Windows)
* Установить - https://www.mongodb.com/download-center?jmp=nav#community
* Добавить в строку системных переменных **Path** путь к папке **Mongodb\bin**
* в консоле запустить mongo daemon: `> mongod`
* подключиться к БД shell: `> mongo`

## Top commands
* **mongod** - запуск БД демона
* **mongod --config C:\path\to\Mongodb\mongod.cfg** - запустить mongo с настройками из файла
* **mongo** - подсоедениться к БД оболочке(shell)
* **show databases** - показать все БД
* **show collections** - показать все коллекции
* **use db_name** - переключиться на БД
* **sudo service mongod start(stop, restart)** - действия с mongod
* **sudo service mongod status** - посмотреть статус
* **mongo --port 27017** - указать порт для подключения
* **mongo --host www.example.com:27017** - указать порт и хост для подключения




## Commands in Shell
```
use mydb

# SELECT
db.users.find({})

#SELECT with where
db.users.find({name: 'Alex'})

# INSERT
db.users.save({name: 'Vasiliy'})

# REMOVE where NAME
db.users.remove({email: 'Ivanko'})

# UPDATE
db.users.update({password: 'asdasdd' }, {email: 'Ivanko'})

```


## Make user admin
Эти комманды создатут пользователя с им. "myAdmin", в папке "System > Users" и в папке "Collections > System > system.users" пользователя. С помощью "roles" можно дать права пользователю на определенные БД
```
> mongo
> use admin
> db.createUser({user: 'myAdmin', pwd: '12345', roles: [{role:'dbOwner', db:'project'}]})
```

## Problem with built-in roles

By default authentication on MongoDB disabled and this is a reason why built-in roles doesn't work.
How to fix it :
Enable authentication in mongod configuration file

Open `/etc/mongod.conf` with your favorite code editor and search for the following lines:
```
security:
authorization: "enabled"
```

and make restart for mongod service:

```
sudo service mongodb restart
```

Create new user in mongodb and set read permission:
```
db.createUser(
{
user:"readonly",
pwd:"What ever you need",
roles:[{role:"read",db:"Name of db for selected user"}]
}
)
```

## Class MongoClient not found (php)
Добавить `extension=mongo.so` в `/etc/php5/cli/php.ini` & `/etc/php5/apache2/php.ini`

```
sudo apt-get install php5.6-mongo
```

