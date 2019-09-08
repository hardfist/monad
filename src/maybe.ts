
import { pipe } from 'lodash/fp';
import * as _ from 'lodash';
type T = {
  [key: string]: any
}
class Maybe {
  constructor(public _value: T | null, ) {

  }
  static just(x: T) {
    return new Maybe(x);
  }
  static none() {
    return new Maybe(null);
  }
  is_none() {
    return this._value === null
  }
}
function unit(x: T) {
  return new Maybe(x);
}
function bind(f: typeof unit) {
  return (x: Maybe) => {
    if (x._value) {
      return f(x._value);
    } else {
      return Maybe.none();
    }
  }
}
const props = (key: string) => (x: T) => {
  if (x[key]) {
    return Maybe.just(x[key]);
  } else {
    return Maybe.none();
  }
}
console.log(pipe(unit, bind(props('name')), bind(props('age')))({
  name:{
    age: 20
  }
}));


