# Vitest / Mocha Coverage Question

based on this vitest question: https://github.com/vitest-dev/vitest/discussions/5496

trying to figure out how to merge a coverage report between mocha and vitest as my team transitions to vitest. highlights issue we're seeing when trying to generate combined coverage reports on shared code thru nyc with vitest configured to report coverage with instanbul and mocha tests using @babel/register.

https://github.com/istanbuljs/nyc#combining-reports-from-multiple-runs


### to run

````
clone repo
npm ci
npm run coverage
````

report fails. look at test/unit/mocha.spec.js & test/unit/vitest.test.js. all branches / statements are covered but nyc thinks there are branches / statements not covered.
