// var memoizedProperty = require('../util').memoizedProperty;
import { Document} from "./../types.ts"
import { memoizedProperty} from "./util.ts"

function memoize(name: string, value: any, factory: (name: string, value: any)=> any, nameTr: (name:string)=> string): void {
  memoizedProperty(this, nameTr(name), function(): any {
    return factory(name, value);
  });
}

export function Collection(iterable: any, options: Document, factory:(name: string, value: any)=> any, nameTr: (name:string)=> string = String, callback: (...args:any[]) => any = (): void =>{}) {
  // nameTr = nameTr || String;
  // var self = this;

  for (const id in iterable) {
    if (Object.prototype.hasOwnProperty.call(iterable, id)) {
      memoize.call(this, id, iterable[id], factory, nameTr);

      if (callback) {callback(id, iterable[id]);}
    }
  }
}

// /**
//  * @api private
//  */
// module.exports = Collection;