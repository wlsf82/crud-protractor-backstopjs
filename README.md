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

### When accessing the relative URL 'computers/new'
- it shows an h1 element with text equal to 'Add a computer'

## Automated tests

> You need Node.js and Chrome installed to run the tests

### Installation

Run `npm i` to install the development dependencies

### Running the tests

Run `npm test` to run the automated tests

If everything ran well you should see a test result like this:
```
[19:47:41] I/launcher - Running 1 instances of WebDriver
[19:47:41] I/local - Starting selenium standalone server...
[19:47:42] I/local - Selenium standalone server started at http://192.168.0.15:55545/wd/hub
Started
Jasmine started
.
  When accessing the relative URL 'computers/new'
    ✓ shows an h1 element with text equal to 'Add a computer'

1 spec, 0 failures
Finished in 0.942 seconds

Executed 1 of 1 spec SUCCESS in 0.942 sec.
```

>In case of test failures a HTML report with screenshots of the browser in the moment of the failure can be found at the `test-report` directory.
