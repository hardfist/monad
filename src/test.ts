import { pipe} from 'lodash/fp'
type T = {
  [key:string]: any;
};
type M = null | T;
function pure(x:T): M{
  return x;
}
function prop(key: string){
  return (x:T) => {
    if(x[key] !== undefined){
      return x[key]
    }else{
      return null;
    }
  }
}

function bind(f: typeof pure){
  return (x:M) =>  {
    if(x === null){
      return null;
    }else{
      return f(x);
    }
  }
}

console.log(pipe(pure, bind(prop('name')), bind(prop('age')))({
  name: {
    age: 20
  }
}))

console.log(pipe(pure, bind(prop('name')), bind(prop('age2')))({
  name: {
    age: 20
  }
}))

console.log(pipe(pure, bind(prop('name2')), bind(prop('age')))({
  name: {
    age: 20
  }
}))