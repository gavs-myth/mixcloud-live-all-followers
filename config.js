// config.js
// this simplifies expansion of env vars in the future
const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
  throw result.error;
}
const { parsed: envs } = result;
console.log("Using the following settings:")
console.log(envs);
module.exports = envs;