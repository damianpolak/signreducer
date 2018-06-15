/*
 * signreducer.js
 * https://github.com/damianpolak/signreducer
 *
 * Copyright 2018, Damian Polak
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 */

module.exports = signreducer = (str, char) => {
   'use strict';

   let a = str.split(char);
   let newStr = "";
   for(let i = 0; i <= a.length - 1; i++) {
     if((a[i] != null) && (a[i] != '')) {
       newStr += a[i]+char;
     }
   }

   return newStr.slice(0, newStr.length - 1);
};
