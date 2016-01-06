'use strict';

var request = require('superagent');
var Promise = require('es6-promise').Promise;

/**
 * Wrapper for calling a API
 */
var Api = {
  get: function (url) {
    return new Promise(function (resolve, reject) {
      request
        .get(url)
        .set('Accept', 'application/json')
        .end(function (err,res) {
          if (res!==null){
            if (res.status === 404) {
              reject();
            } else {
              resolve(JSON.parse(res.body));
            }
          }
          else {
            reject();
          }
        });
    });
  }
};

module.exports = Api;
