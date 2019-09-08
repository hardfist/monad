import {  compose, pipe } from 'lodash/fp'
const state = {
  name: 'yj'
}
type T = string;
type fn = () => string;
class IO {
  constructor(public _value:fn ){

  }
  static of(x: fn){
    return new IO(x);
  }
}

function unit(x:fn){
  return IO.of(x);
}
function bind(f: typeof unit){
  return (x: IO) => {
    return IO.of(compose(f,x._value));
  }
}

console.log(pipe(unit, bind(fn => {
  return IO.of(() => state.name)
}))(() => state.name)._value());