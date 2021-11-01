# Track project coverage with jest

Jest comes pre-packaged with the ability to track code coverage for the modules you're testing, but it takes a little extra work to make 
it track untested files as well. Let's look at what Jest can do for you, what you have to do yourself, and how to setup code 
coverage thresholds so you can work to improving the code coverage numbers for your projects.

To track code coverage for our project with Jest, we simply specify the command line flag of --coverage with our test command.

```
In package.json

"scripts": {
    "test": "jest --coverage"
  }

```
 Now, if we run npm t to run our test script, we'll see a coverage report output in our console. There's new coverage folder which we can open in our browser to explore the coverage report of a project.
 ```
open coverage/lcov-report
 ```
Jest will only instrument files for coverage if they have been required while our tests are running and, because the subtract module isn't being required in our test, it's not getting instrumented for coverage and is therefore excluded in our coverage report.Let's go ahead, import it into our sum test, and see how that affects our coverage numbers. You'll see that it's now included in their coverage report.

Let's say that we're adding Jest to an existing project. It would get really tedious to add imports for every file by hand to get a more accurate measure of code coverage for the project.
Instead, lets do this dynamically.In package.json we can configure Jest to instrument files for coverage even if they're not imported in our test.
We'll do this by adding a new property called collectCoverageFrom. This is an array of globs.

```
package.json

 "jest": {
    "testEnvironment": "node",
    "collectCoverageFrom": [
      "src/*.js"
    ]
  }

```
 Now, if we run ```npm t ```, we'll see that Jest instruments that file for coverage even though it's not
 explicitly included our test. 
 ***Note that this is excluding our test files for us automatically. Even though sum.test.js actually matches the glob src/*.js, 
 Jest is automatically excluding that test file because we don't want the code coverage stats of our test files loading our project coverage numbers.
 
Finally, as we work our way to better code coverage in our project, we can configure Jest with a coverage threshold.This means that if our 
code coverage ever drops below a specified percentage, our test script is going to fail. That way we can encourage ourselves and other developers
on the project to continue adding tests as they add code.

To do this, we're going to specify a coverageThreshold property in our Jest configuration. In here, we'll specify a global object and indicate the coverage thresholds for branches, functions, lines, and statements.

```
package.json

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

```
 When we run our test script,if Jest sees coverage levels for statements, lines, and functions not meeting the global threshold, it will complain about it.
 We can either reduce the threshold values or write more UT .
 
 Lastly add the coverage directory to .gitignore file,so that it doesn't get tracked by git
 ```
 coverage/
 ```
