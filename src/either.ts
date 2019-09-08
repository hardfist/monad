import { pipe } from 'lodash/fp'
type T = string;
class Left {
  constructor(public _value: T) {

  }
  static of(x: T) {
    return new Left(x)
  }
}
class Right {
  constructor(public _value: T) {

  }
  static of(x: T) {
    return new Right(x);
  }
}
type Either = Left | Right

function unit(x: T): Either {
  return Right.of(x);
}

function bind(f: typeof unit) {
  return (x: Either): Either => {
    if (x instanceof Left) {
      return x;
    } else {
      return f(x._value)
    }
  }
}


console.log(pipe(unit, 
bind(x => unit(x + 'world')), 
bind(x => Left.of('boom')),
bind(x => Right.of('sss'))
)('hello'));