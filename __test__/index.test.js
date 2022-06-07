// const pass = require("./../index");

// describe("Mpesa Passwrod Generator", () => {
//   test("It should return an object containing password and time", () => {
//     const payload = {
//       BUSINESS_SHORT_CODE: 34546456,
//       PASS_KEY: "dsadnaskljnjsdnjfnsdjgnfkgdngdf",
//     };

//     const result = pass(payload);

//     expect(result).toHaveProperty("time");
//     expect(result).toHaveProperty("password");
//   });

//   test("It should return the given time when time is passed", () => {
//     const payload = {
//       BUSINESS_SHORT_CODE: 34546456,
//       PASS_KEY: "dsadnaskljnjsdnjfnsdjgnfkgdngdf",
//     };

//     const date = Date.now();
//     const result = pass(payload, date);

//     expect(result).toHaveProperty("time", date.toString());
//   });
// });
