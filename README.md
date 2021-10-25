# jest-tutorial
Jest comes pre-packaged with the ability to track code coverage for the modules you're testing, but it takes a little extra work to make 
it track untested files as well. Let's look at what Jest can do for you, what you have to do yourself, and how to setup code 
coverage thresholds so you can work to improving the code coverage numbers for your projects.

To track code coverage for our project with Jest, we simply specify the command line flag of --coverage with our test command. Now, if we run npm t to run our test script, we'll see a coverage report output in our console. There's new coverage folder which we can open in our browser to explore the coverage report of a project.

Let's say that we're adding Jest to an existing project. It would get really tedious to add imports for every file by hand to get a more accurate measure of code coverage for the project.
In package.json we can configure Jest to instrument files for coverage even if they're not imported in our test. We'll do this by adding a new property called collectCoverageFrom. This is an array of globs.

