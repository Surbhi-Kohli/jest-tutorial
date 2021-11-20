//const difference =require('./difference')
//gives error -> TypeError:difference is not a function
/**
 * That's becoz commonJs module doesn't understand the ES module it is trying to require
 * This is easily fixed, by adding a ```.functionNameBeingExported``` to the require, which for a default export is ```default```.

 */
console.log(require('./difference'));//  { default: [Function: difference] }
console.log(require('./difference').default);//[Function: difference]
const difference=require('./difference').default
//the above works.
test('subtract  1 from 2 to equal 1', () => {
  expect(difference(2, 1)).toBe(1)
})
