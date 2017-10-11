//@flow
'use strict';
// The rationale behind using this idiom is described in:
//     http://stackoverflow.com/a/36628148/274677
//

if (!global._babelPolyfill) // https://github.com/s-panferov/awesome-typescript-loader/issues/121
    require('babel-polyfill'); // this is important as Babel only transforms syntax (e.g. arrow functions)
// so you need this in order to support new globals or (in my experience) well-known Symbols, e.g. the following:
//
//     console.log(Object[Symbol.hasInstance]);
//
// ... will print 'undefined' without the the babel-polyfill being required.


/* The "exact" object type in flow is given using the || syntax. E.g. the exact empty
   object type is defined as:

    type EmptyObject = {||};

   Alas, however the above isn't working at the time of this writing (see: https://github.com/facebook/flow/issues/2405)
   and I have to do the following for an 'Exact' generic type:
*/

export type Exact<T>       = T & $Shape<T>;
export type Predicate<T>   = (x: T)=>boolean;
export type Converter<T1, T2>  = (x: T1)=>T2;
export type Stringifier<T> = Converter<T, string>;
export type Visitor<T>     = (x: T)=> void;
