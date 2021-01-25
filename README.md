To start the server, open a terminal session and issue

```
$ node server.js
```

If the server is running and you open a second session terminal session, you can issue each of the following in the second session:

```
$ curl localhost:3000/users/1
{"id":1,"username":"jd-user"}
$ curl localhost:3000/users/2
{"id":2,"username":"user-ms"}

$ curl \
  -X PUT \
  -H "Content-Type: application/json" \
  -d '{"username": "jd-user-updated", "name": "Peter", "email": "peter@yahoo.com"}' \
  localhost:3000/users/1
{"id":1,"username":"jd-user-updated","name":"Peter","email":"peter@yahoo.com","password":"123"}
$ curl localhost:3000/users/1
{"name":"Peter","email":"peter@yahoo.com"}
```
