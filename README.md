## Installation

This is node.js API. Installation is done using npm install command:

```
$ npm install

//run the app with
$ npm start

```

### HTTP POST method

```
//Endpoint is
/sign-token

{
    "firstName": "Tolulope",
    "lastName": "Folorunso"
    "id": 1,
}
- Response is
- status code: 200
{
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ0b2x1IiwibGFzdE5hbWUiOiJoaGhoZCIsImlkIjoxLCJpYXQiOjE2MjEwOTIyOTgsImV4cCI6MTYyMTEwMDQ5OH0.NQ_yz2GUuN6PnnaKUmnBYjN-p7cQloZNwEBpPiCQPvk"
}
```

### HTTP GET method

```
//Endpoint is
/decode-token

- Response is
- status code: 200
{
    "status": "success",
    "user": {
        "firstName": "Tolulope",
        "lastName": "Folorunso",
        "id": 1,
        "iat": 1621092450,
        "exp": 1621100650
    }
}
```
