// type Store = {
//   name: string;
//   age: number;
//   friends: string[];
// };

// // interface
// const myStore = createStore<Store>({
//   name: 'bob',
//   age: 20,
//   friends: []
// });

// const age = myStore.get('age');
// myStore.set('age', (currentAge) => currentAge + 1);

// // Library
// function createStore<T extends Record<string, any>>( initialState: T ) {
//   const store = initialState;
//   return {
//     set<K extends keyof T>(key: K, cb: (current: T[K]) => T[K]) {
//       store[key] = cb(store[key]);
//     },

//     get<K extends keyof T>(key: K) {
//       return store[key];
//     }
//   }
// }

// type MyStore = ReturnType<typeof createStore<Store>>

// function Header(store: MyStore) {
//   store.get('friends');
//   store.set('name', (prevName) => prevName + 'changed');
// }

// Header(myStore);

// const obj = {
//   name: 'hello'
// };

// obj.name = 'world';

// const obj2 = {
//   name: 'thing'
// } as const;

// obj2.name = 'world';



export function findDuplicates<
  R,
  F extends keyof R,
  P extends Exclude<keyof R, F>,
  >(
  array1: R[],
  array2: R[],
  find: F,
  property: P
): Map<R[P], R[P]> {
  const array2Map = new Map(array2.map((val) => [val[find], val[property]]));


  // either this (more functional programming approach)
  return new Map(array1.filter((item) => {
    return array2Map.has(item[find]) && item[property] !== array2Map.get(item[find]);
  }).map((item) => {
    return [item[property], array2Map.get(item[find])!]
  }));

  // or this
  // const replaceIds = new Map<R[P], R[P]>();

  // for (const element1 of array1) {
  //   const element2Prop = array2Map.get(element1[find]);
  //   if (array2Map.has(element1[find]) && element2Prop !== element1[property] ) {
  //     replaceIds.set(element1[property], element2Prop!);
  //   }
  // }

  // return replaceIds;
}
// type ArrayType = Record<string, any>[];
// type Replacement = [number, number] | [string, string];

// export function findDuplicates(
//   array1: ArrayType,
//   array2: ArrayType,
//   find: string,
//   property: string
// ): Replacement[] {
//   const replaceIds: Replacement[] = [];

//   for (const element1 of array1) {
//     for (const element2 of array2) {
//       if (element1?.[find] === element2?.[find] && element1?.[property] !== element2?.[property]) {
//         replaceIds.push([element1?.[property], element2?.[property]]);
//         continue;
//       }
//     }
//   }

//   return replaceIds;
// }



// export function deepReplaceValues(
//   obj: any,
//   replacements: ([number, number] | [string, string])[]
// ): any {

//   if(!replacements.length) {
//     return obj;
//   }

//   if (Array.isArray(obj)) {
//     return obj.map(element => deepReplaceValues(element, replacements));
//   }

//   if (typeof obj === 'object' && obj !== null) {
//     const newObj: Record<string, any> = {};
//     for (const key in obj) {
//       if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         newObj[key] = deepReplaceValues(obj[key], replacements);
//       }
//     }
//     return newObj;
//   }

//   for (const [primitiveToReplace, replacement] of replacements) {
//     if (obj === primitiveToReplace) {
//       return replacement;
//     }
//   }

//   return obj;
// }

var user = {
  id: 1,
  name: 'user1'
}

var user2 = {
  id: 1,
  name: 'user2'
}

var user3 = {
  id: 2,
  name: 4
}

var user4 = {
  name: 'user4'
}

console.log('find = ', findDuplicates([user, user3], [user2, user3], 'id', 'name'));

// export function deepReplaceValues(
//   obj: any,
//   replacements: ([number, number] | [string, string])[]
// ): any {

//   if(!replacements.length) {
//     return obj;
//   }

//   if (Array.isArray(obj)) {
//     return obj.map(element => deepReplaceValues(element, replacements));
//   }

//   if (typeof obj === 'object' && obj !== null) {
//     const newObj: Record<string, any> = {};
//     for (const key in obj) {
//       if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         newObj[key] = deepReplaceValues(obj[key], replacements);
//       }
//     }
//     return newObj;
//   }

//   for (const [primitiveToReplace, replacement] of replacements) {
//     if (obj === primitiveToReplace) {
//       return replacement;
//     }
//   }

//   return obj;
// }