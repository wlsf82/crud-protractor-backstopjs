# Backbase assignment

## Assignment description
QA Testing case.
We love to challenge our candidates, so we kindly ask that you complete the bellow assignment as part of your application for the QA Engineer position. The completed assignment is due by 26th of February, 2018.

### 0 Please access the following sample application - http://computer-database.herokuapp.com/computers

### 1 Create a series of manual test cases that cover the CRUD operation plus the edge cases. Make sure you give detailed instructions for each test case (pre conditions, steps, expected results). You can use any format you want.

### 2 Write scripts that would automate the manual test cases that you see fit to be included in a regression test set. Please use any of below programming languages:
Javascript (preferred)
Java (preferred)
Python Ruby

> Please avoid frameworks that only record test cases.

### 3 When the assessment is completed, please push the file containing the manual test cases and the automation project to GitHub and provide us a link to the repository.
Should you have any further questions, please do not hesitate to contact us.
___

## Manual test cases

The test cases from 'Assignment description - 1' are described here.

> In all test scenarios the relative URLs have to be concatenated with the following base URL: http://computer-database.herokuapp.com/

> Remember to delete all browser's cookies and clear any session or local storage before each test!

### Test suite: when accessing the relative URL 'computers/new'
- it shows an h1 element with text equal to 'Add a computer'
#### happy path
- when providing a random computer name, valid introduced and discontinued dates, and clicking submit
  - it displays a warning message confirming the computer's successfully creation

## Automated tests

> You need Node.js and Chrome installed to run the tests

### Installation

Run `npm i` to install the development dependencies

### Running the tests

Run `npm test` to run the automated tests

If everything ran well you should see a test result like this:
```
[21:58:58] I/launcher - Running 1 instances of WebDriver
[21:58:58] I/local - Starting selenium standalone server...
[21:58:59] I/local - Selenium standalone server started at http://192.168.0.15:59940/wd/hub
Started
Jasmine started
.
  when accessing the relative URL 'computers/new'
    ✓ shows an h1 element with text equal to 'Add a computer'
.
    happy path

      when providing a random computer name, valid introduced and discontinued dates, and clicking submit
        ✓ displays a warning message confirming the computer's successfully creation




2 specs, 0 failures
Finished in 2.499 seconds

Executed 2 of 2 specs SUCCESS in 2 secs.
```

>In case of test failures a HTML report with screenshots of the browser in the moment of the failure can be found at the `test-report` directory.
