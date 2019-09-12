import { pipe} from 'lodash/fp'
type T = number;
type M = number[];

function pure(x:T){
  return [x];
}
function bind(f: typeof pure){
  return (xs: M) => {
    let result: T[] = [];
    for(const x of xs){
      result = [...result, ...f(x)]
    }
    return result;
  }
}
function repeat(n:number){
  return function (x: number) {
    return [x,x,x,];
  }
}
console.log(pipe(pure, bind(repeat(2)),bind(repeat(3)))(2))