// const timer = require('./timer.js')
import timer from "./timer.js";

// Common Js Modules //
// Synchronous file loading
// CJS imports are not hoisted
// Can't be used top level await
// Only one value can be exported
// File extension optional
// If we give full file path, we can load any file using cjs
// It's convention to add cjs in the file extension
// It's is default and optional to set "type": "commonjs" in package.json
// The value of this keyword points to  module.exports object

// ES6 Modules //
// Asynchronous file loading
// MJS imports are hoisted
// Multiple value can be exported
// Can be used top level await
// File extension mandatory
// We can't load an file, only js and mjs files are allowed
// It's convention to add mjs in the file extension
// Have to set "type": "module" in package.json
// The value of this keyword is undefined

// Both execute in synchronous //
