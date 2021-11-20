# jest-tutorial
In this branch ,we are configuring babel to transpile our code using babelrc. We're running our code using Node 6 which has support for most of ES 6. 
But here in our code, we're using ES 6 modules here and a stage two feature which are both unavailable in Node 6.The same would apply also if you 
were using React in JSX or any additional Babel plugins.

For Jest to understand how to transpile our code, we need to have babel-jest installed.The jest-babel package would already be installed when u install 
jest-cli as babel-jest is a dependency of jest-runtime which itself is a dependency of jest-cli

```
jest-cli@15.1.0
|_ jest-runtime@15.1.0
   |_babel-jest@15.1.0
```   
   
jest-runtime is responsible for instrumenting our code for code-coverage and the way it does that is with a babel plugin and thats y babel-jest is used.

Because I'm using NPM 3 to install these dependencies, this particular dependency gets loaded into the root level of my known modules directory. Because of this, Jest will default to utilize Babel as a preprocessor. Despite this, it's still recommended to explicitly add Babel Jest as a dev dependency in your package JSON to ensure that people using older versions of NPM don't have any trouble.
We'll go ahead and do that now by running npm install --save-dev babel-jest.

With that installed, we'll verify that in our package JSON. It has been added to our dev dependencies as 15.00We're all set to have Jest use Babel to transpile our test.
 
   
-------------------------------------------------------------------------------------------------------------------------------------------------------

### CommonJS  + ESM 
TheESM and commonjs are different module systems and have an added complexity when used alongside each other.

Case 1: When using export with require
 

```
//externalModule.js
const ourCode=()=>'result';
module.exports=ourCode;
________________________________
//testSubject.js
import ourCode from "./externalModule"
//use ourCode()

```
Case 2: When using import with module.exports

```
//externalModule.js
const ourCode=()=>'result';
export default ourCode;
________________________________
//testSubject.js
const ourCode=require('./externalModule');//gives error
//use ourCode()

```
The commonJs module doesn't understand the ESM it is trying to require.This is easily fixed by adding a ```.functionNameBeingExported``` to the require,which for a default export is ```default```

```
//externalModule.js
const ourCode=()=>'result';
export default ourCode;
________________________________
//testSubject.js
const ourCode=require('./externalModule').default;
//use ourCode()

```
X=External Modules
Y=Test Subject
             
             | module.exports| export |
             | ------------- |--------|
      import |      A        |   A    |
             |---------------|--------|
test subject |      A        |  B     |
             |---------------|--------|

Taking 'A' as being no modification needed to the standard syntax and 'B' as some modification,we can see this as illustrated above.

This also directly relates to how jest mocks will differ.
For type 'A',this can be seen as a function returning a result:
```
jest.mock("./externalModule",()=>"rest");
```
For type 'B',these can be seen as an object containing a function that returns a result.

```
jest.mock("./externalModule",()=>({
  default:()=>'mock result'
});
```
