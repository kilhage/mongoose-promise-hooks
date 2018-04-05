import mongoose from "mongoose";

/*
 * This file contain helper functions to simplify creating mongoose hooks
 */

// makes it possible to use async functions in pre mongoose hooks
export function pre(
  schema: mongoose.Schema,
  type: string,
  callback: () => Promise<any>
) {
  schema.pre(type, function(next: (err?: Error) => void) {
    callback
      .call(this)
      .then(() => next())
      .catch((err: Error) => next(err));
  });
}

// makes it possible to use async functions in post mongoose hooks
export function post(
  schema: mongoose.Schema,
  type: string,
  callback: (doc: mongoose.Document) => Promise<any>
) {
  schema.post(type, function(
    doc: mongoose.Document,
    next: (err?: Error) => void
  ) {
    callback
      .call(this, doc)
      .then(() => next())
      .catch((err: Error) => next(err));
  });
}
