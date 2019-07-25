import { Object} from 'ts-toolbelt';
interface Int64 {
  toString(): string;
}
type a = Object.Select<{
  a:string,
  b:number,
  c: Int64
}, string| number>



              type b = a