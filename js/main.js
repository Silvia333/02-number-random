function startApp () {
  'use strict'
  var numberRandom = Math.round(getRandom (1,100));
  function getRandom ( min, max ){
    return (max - min) * Math.random () + min;
  };
 return numberRandom
}