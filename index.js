const time = require("tajiri-mpesa-time");
const encode = require("nodejs-base64-encode");

const Password = (conf, t = null, gmt = 3) => {
  t === null ? (t = time(gmt)) : (t = t);
  // let data = `${(conf.BUSINESS_SHORT_CODE, conf.PASS_KEY)}`;
  let data = `${conf.BUSINESS_SHORT_CODE}${conf.PASS_KEY}${t}`;
  let en = encode.encode(data, "base64");
  return { time: t.toString(), password: en };
};

module.exports = Password;
