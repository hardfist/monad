import { pipe} from 'lodash/fp'
type M = [number,string];
function double(x:number){
  return [2*x, 'double called']
}
function sin(x:number){
  return [Math.sin(x), 'sin called']
}

function pure(x:number){
  return [x, '']
}

function bind(f: typeof pure){
  return (m:M) => {
    const [x, s1] = m;
    const [y, s2] = f(x);
    return [y, s1+s2];
  }
}

console.log(pipe(pure, bind(sin), bind(double))(123));