# Using Jest's snapshot testing feature

When writing tests for a function that generates a formatted list of given elements. Before Jest snapshotting, when I wrote this kind of test, I would console log the results and then copy/paste it into my assertion .


With jest snapshot ,it is pretty straightforward
```
expect(formattedList).toMatchSnapshot()
```
When our tests run, we'll see the snapshot summary indicate that we wrote one snapshot and one test file. If we look at our file system now, we have a new snapshots directory with a corresponding .snap file for our test.If we open that up we can see that Jest effectively did the same kind of copy/paste we did, except that Jest did it for us. 
If u modify the formatted list and run ur test again,U will see that the Snapshot tests fail.The snapshot summary gives a message to either inspect the code change or update the snapshot by pressing the 'u' key.So we can press u key to update the stored snapshot or make code changes untill it matches ur snapshot.

One thing to note:If u are not running jest in watch mode u can still update the snapshot by running 
```
jest --updateSnapshot
//or
jest --u
```

In review, to use snapshot testing with Jest, you simply pass your serializable variable into expect and invoke toMatch(snapshot) on it. Then you develop normally, and update snapshots as needed. When you're ready to push your changes, make sure to include the updated snapshots in your pull requests, so reviewers can see how your changes impact the output.
