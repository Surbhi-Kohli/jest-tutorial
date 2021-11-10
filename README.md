# Use Jest's Interactive watch mode
If u hv installed jest as a global dependency then, u can simply run jest --watch .You might also have to adjust your PATH to include the bin directory for globally installed npm packages. 
#### If u don't hv jest installed globaly:
```
package.json

{
  "name": "jest-tutorial",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest --coverage",
    "watch:test": "jest --watch"//watch flag to run jest in watch mode
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/kentcdodds/jest-tutorial.git"
  },
  "keywords": [],
  "author": "Kent C. Dodds <kent@doddsfamily.us> (http://kentcdodds.com/)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/kentcdodds/jest-tutorial/issues"
  },
  "homepage": "https://github.com/kentcdodds/jest-tutorial#readme",
  "devDependencies": {
    "babel-jest": "15.0.0",
    "babel-polyfill": "6.13.0",
    "babel-preset-es2015": "6.14.0",
    "babel-preset-stage-2": "6.13.0",
    "jest-cli": "15.1.0"
  },
  "jest": {
    "testEnvironment": "node",
    "collectCoverageFrom": [
      "src/*.js"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 50,
        "lines": 33,
        "statements": 25
      }
    }
  }
}


```
To start Jest in watch mode, you simply pass it the watch flag --watch.
By default, Jest will only run testsfound related to files changed since the last git commit. This is a pretty amazing feature, especially when you're developing in a large codebase with lots of tests.
Let's change the get-adder.test.js file by adding a single line and saving that. You'll see that it runs the get-adder.test.js . If we revert that and instead add a line to the get-adder module itself, and make a change then save that, the get-adder.test.js will be run here as well.

the get-adder module depends on the sum module. Let's go ahead and make a change to that module, by replacing + with - and hit save. This will result in Jest identifying two test suites to run.

One of those is the sum.test.js file, and the other is the get-adder.test.js file. This is possible because Jest is intelligent, and after identifying the files that changed, it walks the dependency tree for the test files to determine the relevant test to rerun.
By default, Jest references the githead to find the files that have been changed.
But if we want to have it run tests that were affected in the last commit, then we can specify the last commit flag to get those, like so.

```
npm run test:watch --lastCommit
```
* Sometimes you want to run all of the tests. To do this, you simply press 'a' to run them, as it says here. Then Jest will run all of the tests it finds in your project, just as if we had run our test script.
* You can switch back to the Only change mode by typing the letter O as it says here. 
* If, for some reason, Jest doesn't rerun your test for you, then just hit the enter key, and that will trigger a rerun.
* Let's say we want to run the sum.test.js, but not the entire test base. To do this, we can hit the p key to specify a regex for a file name, like this. We are now in pattern mode. ```pattern > sum```. We can change the pattern to match both the sum and subtract tests by specifying this regex with ```pattern >source\/s.*.test.js```.
* To exit watch mode, we simply hit the Q key, and that will end the process.

