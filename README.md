# Faulty Code

The web page you're looking at is the entry on GitHub for this 'repository'. A repository is a collection of code in one place, and in Software Engineering it's standard practice to put our repositories in something like GitHub so we can effectively share our code under [version control](https://en.wikipedia.org/wiki/Version_control).

With our code in one place, we're able to work in teams to divide tasks and share the code without having to worry about which version of the changes is the most current.

**But here's the problem: With so many teams working on our code, the quality of the code is very different between teams so we need a way to make sure all of our code is consistent.**

There are some rules that we follow within our team that we would like enforced. Within this repository under the `src/` folder there are 2 files:

 - `badExtremelyComplicatedMath.js` (An example of what 'poor' code might look like for us)
 - `goodExtremelyComplicatedMath.js` (An example of what code that conforms to our standards would look like)

## The Challenge

This repository has some [unit tests](https://smartbear.com/learn/automated-testing/what-is-unit-testing/) in the file `test/extremelyComplicatedMath-test.js`, but we'd like a single test in here that will pass if the repository meets our standards, and fails with an appropriate error if it does not.

I've done some work to set up a framework for you to build on, but it's down to you to figure out the nuts and bolts of the checks.

---

### Getting started

This repository is written in [NodeJS](https://nodejs.org/en) (a server-side implementation of JavaScript, but that's not massively important), you'll need to download this to your machine so you can get started with the language.

You'll also need a text-editor, we typically use [Visual Studio Code](https://code.visualstudio.com/), but if you've got something else you prefer, feel free to use that.

Finally, this project is under version control so you'll need to install [Git](https://git-scm.com/) and create a public GitHub account (we can help you with this if required!).

### Installing and running the tests

Once everything is downloaded you should be able to run the following commands and see the tests run:

`npm i` - Downloads all of the dependencies this code relies on

`npm run test` - Runs the tests (there is a shorthand `npm t` which we typically use to save some typing)