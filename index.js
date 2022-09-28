const time = require("tajiri-mpesa-time");
const encode = require("nodejs-base64-encode");

const Password = (conf, t = null) => {
  if (t == null) {
    t = time();
  }

  let data = `${conf.BUSINESS_SHORT_CODE}${conf.PASS_KEY}${t}`;
  let en = encode.encode(data, "base64");

  return { time: t.toString(), password: en };
};

module.exports = Password;
