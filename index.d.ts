/// <reference types="mongoose" />
import mongoose from "mongoose";
export declare function pre(
  schema: mongoose.Schema,
  type: string,
  callback: () => Promise<any>
): void;
export declare function post(
  schema: mongoose.Schema,
  type: string,
  callback: (doc: mongoose.Document) => Promise<any>
): void;
