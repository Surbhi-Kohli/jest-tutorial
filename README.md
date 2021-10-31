# jest-tutorial
Here we have sum.js and we are gonna write tests for this module using jest.
We will install jest-cli to begin with and write tests in sum.test.js.The jest tests can be writteen in files with name.test.js or name.spec.js or the test 
files can be within __tests__ folder.
Now because of the way npm scrips work,we can use the jest binary to run our test in npm scripts.We see that in node_modules under .bin folder,we have jest.So in package.json,In scripts  add "test" entry with value "jest".

The test can be run with npm run test or npm test or npm t

Jest does a lot of cool things and one of those is that it simulates a browser environment using jsdom

Inside of our test, we can say :
console.log(window)//object exists on global, we want to avoid this so we need to configure the test env for jest.

We're in a node environment. We're running this on the command line, running this through node. If we run npm t, we're going to see that window is actually an object that exists on the global. We can actually reference it and use it.
But we want to avoid this because that's extra weight in our test, extra memory. 
It takes some extra time to allocate for these objects. We're going to configure the test environment for Jest.

  
  Add the folllowing in package.json
  So that the window is not defined

"jest":{
    "testEnvironment":"node"
  },

 Now, it doesn't need to simulate the browser environment. If we re-run our test again with that console.log window, we're going to see a reference error because window is not defined.

now we can remove the console.log statement
