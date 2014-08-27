# jest with jasmine-reporters

This is a sample repo that contains the [getting started](http://facebook.github.io/jest/docs/getting-started.html#content) Jest example and outputs JUnit XML for each test using [jasmine-reporters](https://github.com/larrymyers/jasmine-reporters).

The problem is that Jest mocks everything by default and you have to [unmock](https://github.com/palcu/jest-example/blob/master/__tests__/sum-test.js) `fs` and `path`. Also you have to take care and use the `1.0.0` [version](https://github.com/palcu/jest-example/blob/master/package.json#L11) of `jasmine-reporters` because Jest is build on Jasmine 1.3

Finally, don't forget to create the `output` folder before running `jest` and initialise `jasmine-reporters` with the [right syntax](https://github.com/palcu/jest-example/blob/master/setup-jasmine-env.js#L10-L11)
