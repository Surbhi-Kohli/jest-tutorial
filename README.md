# Add babel integration with jest
In this branch ,we are configuring babel to transpile our code using babelrc. We're running our code using Node 6 which has support for most of ES 6. 
But here in our code, we're using ES 6 modules here and a stage two feature which are both unavailable in Node 6.The same would apply also if you 
were using React in JSX or any additional Babel plugins.

For Jest to understand how to transpile our code, we need to have babel-jest installed.Incidently ,the jest-babel package would already be installed
when u install jest-cli as babel-jest is a dependency of jest-runtime which itself is a dependency of jest-cli

jest-cli@15.1.0 
  |_
     jest-runtime@15.1.0
      |_
        babel-jest@15.1.0
   
jest-runtime is responsible for instrumenting our code for code-coverage and the way it does that is with a babel plugin and thats y babel-jest is used.

Because I'm using NPM 3 to install these dependencies, this particular dependency gets loaded into the root level of my node modules directory. Because of this, Jest will default to utilize Babel as a preprocessor.
so if we run `npm run test`
 everything will work perfectly even though I'm using these features that aren't supported in Node 6 and that's because we have .
 
Despite this, it's still recommended to explicitly add babel-jest as a dev dependency in your package.json to ensure that people using older versions of NPM don't have any trouble.
We'll go ahead and do that now by running npm install --save-dev babel-jest.

With that installed, we'll verify that in our package JSON. It has been added to our dev dependencies as 15.00.
We're all set to have Jest use Babel to transpile our test.
 
   
