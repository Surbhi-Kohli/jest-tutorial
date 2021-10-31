# jest-tutorial
Here we have sum.js and we are gonna write tests for this module using jest.
We will install jest-cli to begin with and write tests in sum.test.js.The jest tests can be writteen in files with name.test.js or name.spec.js or the test 
files can be within __tests__ folder.
Now because of the way npm scrips work,we can use the jest binary to run our test in npm scripts.We see that in node_modules under .bin folder,we have jest.So in package.json,In scripts  add "test" entry with value "jest".

The test can be run with npm run test or npm test or npm t


//Need to confirm on this.May be doesnt work on latest versions as illustrated

  console.log(window)//object exists on global, we want to avoid this so we need to configure the test env for jest.
  Add the folllowing in package.json
  So that the window is not defined

"jest":{
    "testEnvironment":"node"
  },
