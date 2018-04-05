"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * This file contain helper functions to simplify creating mongoose hooks
 */
// makes it possible to use async functions in pre mongoose hooks
function pre(schema, type, callback) {
  schema.pre(type, function(next) {
    callback
      .call(this)
      .then(() => next())
      .catch(err => next(err));
  });
}
exports.pre = pre;
// makes it possible to use async functions in post mongoose hooks
function post(schema, type, callback) {
  schema.post(type, function(doc, next) {
    callback
      .call(this, doc)
      .then(() => next())
      .catch(err => next(err));
  });
}
exports.post = post;
