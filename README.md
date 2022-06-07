# tajiri-mpesa-password

## Mpesa Password Generator

> npm

[npm]](https://www.npmjs.com/package/tajiri_mpesa_oauth)

## tajiri-mpesa-password

## NPM

npm install tajiri-mpesa-password

## Description

This is a simple package for generating mpesa password and time stamp.

[npm](https://www.npmjs.com/package/tajiri-mpesa-password)

### Installing

npm install tajiri-mpesa-password

### Usage

<mark> using Async await</mark>

```javascript
const mpesaPassword = require("tajiri-mpesa-password");

const conf = {
  BUSINESS_SHORT_CODE: 174379,
  PASS_KEY: "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919",
};

const pass = async () => {
  pass = await mpesaPassword(conf);
  console.log(pass);
};
```

<mark>using Promises</mark>

```javascript
const mpesaPassword = require("tajiri-mpesa-password");

const conf = {
  BUSINESS_SHORT_CODE: 174379,
  PASS_KEY: "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919",
};

mpesaPassword(conf).then((pass) => {
  console.log(pass);
});
```

<mark>return</mark>

```javascript
{
  time: '20220608000315',
  password: 'MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjIwNjA4MDAwMzE1'
 }
```

---

> You can pass the mpesa time stmap in required format as the second argument. This is not required since the time stamp used is Africa Nairobi And is correctly formated as per daraja requirements.

## References

> get the application credentials from daraja

[daraja]](https://developer.safaricom.co.ke/)
