const _ = require("lodash");

const variousBrownBears = require('./')

const randomBear = _.sample(variousBrownBears);
console.log(randomBear);