# Vitest / Mocha Coverage Question

based on this vitest question: https://github.com/vitest-dev/vitest/discussions/5496

trying to figure out how to merge a coverage report between mocha and vitest as we transition to vitest.

### to run

````
clone repo
npm ci
npm run coverage
````

report fails. look at test/unit/mocha.spec.js & test/unit/vitest.test.js. all branches / statements are covered but nyc thinks there are branches / statements not covered.