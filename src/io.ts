
import { compose } from 'lodash/fp'
type tuple = [number,string];
const unit = (x:number) => [x,''] as tuple;
const bind = (f: (a:number) => [number,string]) => (tuple:[number,string]) => {
    const [x,s] = tuple;
    const [y,t] = f(x);
    return [y, s+ t] as tuple
}
// const compose = <A,B,C>(f: (b:B) =>C ,g: (a:A) => B) => (x:A) => f(g(x))

const sine = (x:number) => [Math.sin(x), 'sine was called'] as tuple ;
const cube = (x:number) => [x*x*x, 'cube was called' ] as tuple ;

const f = compose(bind(sine), bind(cube), unit);

console.log(f(109))