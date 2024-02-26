"use strict";
const { URL } = require("url");

let validUtils = {};

validUtils.stringIsAValidUrl = (s, protocols) => {
  try {
    let url = new URL(s);
    return protocols
      ? url.protocol
        ? protocols.map((x) => `${x.toLowerCase()}:`).includes(url.protocol)
        : false
      : true;
  } catch (err) {
    return false;
  }
};

module.exports = validUtils;
