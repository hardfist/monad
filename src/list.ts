import { compose, pipe } from 'lodash/fp'

type f<T> = (x:T) => T[];

const unit = <T>(x:T) => [x];
const bind = <T>(f:f<T>) => (list: T[]) => {
  return list.reduce((x,current) => [...x,...f(current)], [] as T[]);
}

const repeat = <T>(x:T) => [x,x,x];

console.log(compose(bind(repeat),bind(repeat),unit)(10));

console.log(pipe(unit, bind(repeat))(20));