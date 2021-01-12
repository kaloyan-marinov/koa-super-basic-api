To start the server, open a terminal session and issue

```
$ node server.js
```

If the server is running and you open a second session terminal session, you can issue each of the following in the second session:

```
$ curl localhost:3000/user/0
{"name":"Jacob","email":"info@geeklaunch.net"}
$ curl localhost:3000/user/1
{"name":"Kenny","email":"kenny@example.net"}
$ curl localhost:3000/user/2
{"name":"Joe","email":"joe@example.org"}

$ curl \
  -X PUT \
  -H "Content-Type: application/json" \
  -d '{"name": "Peter", "email": "peter@yahoo.com"}' \
  localhost:3000/user/1
{"name":"Peter","email":"peter@yahoo.com"}
$ curl localhost:3000/user/1
{"name":"Peter","email":"peter@yahoo.com"}
```
