# Add babel integration with jest
In this branch ,we are configuring babel to transpile our code using babelrc. We're running our code using Node 6 which has support for most of ES 6. 
But here in our code, we're using ES 6 modules here and a stage two feature which are both unavailable in Node 6.The same would apply also if you 
were using React in JSX or any additional Babel plugins.


For Jest to understand how to transpile our code, we need to have babel-jest installed.Incidently ,the jest-babel package would already be installed
when u install jest-cli as babel-jest is a dependency of jest-runtime which itself is a dependency of jest-cli
```
jest-cli@15.1.0 
  |_
     jest-runtime@15.1.0
      |_
        babel-jest@15.1.0
   
 ```  
jest-runtime is responsible for instrumenting our code for code-coverage and the way it does that is with a babel plugin and thats y babel-jest is used.

Because I'm using NPM 3 to install these dependencies, this particular dependency gets loaded into the root level of my node modules directory. Because of this, Jest will default to utilize Babel as a preprocessor.
Another thing to add is .babelrc file with the following contents:

```
{
  "presets": ["es2015", "stage-2"]
}
```
a preset is a set of plugins used to support particular language features. The two presets Babel uses by default:
```
es2015: Adds support for ES2015 (or ES6) JavaScript
react: Adds support for JSX
```
Beyond ES7, proposed JavaScript features can exist in various stages. A feature can be an experimental proposal, one that the community 
is still working out the details for ("stage 1"). Experimental proposals are at risk of being dropped or modified at any time. Or a feature might already be "ratified," which means it will be included in the next release of JavaScript ("stage 4").

From the Babel docs:
```
The TC39 categorizes proposals into the following stages:

stage-0 - Strawman: just an idea, possible Babel plugin.
stage-1 - Proposal: this is worth working on.
stage-2 - Draft: initial spec.
stage-3 - Candidate: complete spec and initial browser implementations.
stage-4 - Finished: will be added to the next yearly release.
```
We can customize Babel with presets and/or plugins to take advantage of these upcoming or experimental features.


So if we run ```npm run test```
 everything will work perfectly even though I'm using these features that aren't supported in Node 6 and that's because we have babel-jest.
 
Despite this, it's still recommended to explicitly add babel-jest as a dev dependency in your package.json to ensure that people using older 
versions of NPM don't have any trouble.
We'll go ahead and do that now by running ```npm install --save-dev babel-jest ```.

With that installed, we'll verify that in our package JSON. It has been added to our dev dependencies as 15.00.
We're all set to have Jest use Babel to transpile our test.
 
   
