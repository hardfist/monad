import { pipe } from 'lodash/fp'
import {promises } from 'fs';
type f<T > = (x:T) => Promise<T>

const delay = (ms:number) => (msg:string)=> new Promise<string>(resolve => {
  setTimeout(() => {
    console.log('msg:', msg, typeof msg);
    resolve(msg+msg);
  }, ms);
})

const unit = <T>(x:T) => Promise.resolve(x);

const bind = <T >(f:f<T>) => (x: Promise<T>) => {
  return x.then(val => f(val));
}



pipe(unit, bind(delay(1000)), bind(delay(2000)), bind(delay(3000)))('sss')