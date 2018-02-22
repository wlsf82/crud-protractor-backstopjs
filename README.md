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
- it shows a form to create a computer
#### happy path
- when providing valid data and clicking submit
  - it displays a warning message confirming the computer's successfully creation
#### alternate paths
- when submitting the form without providing a computer name
  - it displays the 'Computer name' field in red (meaning error)
- when submitting the form providing a valid computer name but invalid dates(introduced and discontinued)
  - it displays the date fields in red (meaning error)
- when clicking 'Cancel'
  - it goes back to the homepage
- when clicking the header link
  - it goes back to the homepage

### Test suite: when accessing the relative URL 'computers'
- when clicking 'Next' in the pagination
  - the 'Previous' button gets enabled
- when clicking 'Next' and 'Previous' in the pagination
  - the 'Previous' button gets disabled
- when searching for a non existing computer name
  - it shows a 'Nothing to display' message
- when clicking 'Next' in the pagination until the last page
  - the 'Next' button gets disabled
- when filtering by a specific computer name
  - the table shows only the filtered computer and the pagination buttons get disabled
- when filtering by a string that returns more than one value, but less than 10 values
  - the table shows computers that match with the filtered string and the pagination buttons get disabled
- when filtering by a string that returns more than one value and more than 10 values
  - the table shows computers that match with the filtered string and the 'Next' pagination button gets enabled

### Test suite: when accessing the relative URL `computers/${computer-id}`
- when editing the computer name and clicking 'Save this computer'
  - it shows a message saying  'Done! Computer [new computer name] has been updated'
- when editing all information about a computer and clicking 'Save this computer'
  - when filtering by the just edited computer
    - the table shows only the filtered computer with all the new data
- when editing the computer name to an empty value and clicking 'Save this computer'
  - it displays the 'Computer name' field in red (meaning error)
- when clicking 'Delete this computer'
  - it shows a message saying 'Done! Computer has been deleted'
- when clicking 'Cancel'
  - it goes back to the homepage

## Automated tests

There are two kind of automated tests in this project (Protractor end-to-end tests and BackstopJS visual regression tests).

> You need Node.js and Chrome installed to run the tests

### Installation

Run `npm i` to install the development dependencies

### End-to-end tests with Protractor

#### Running the tests

Run `npm run test:e2e` to run the end-to-end tests

If everything ran well you should see a test result like this:
```
[22:50:15] I/launcher - Running 1 instances of WebDriver
[22:50:15] I/local - Starting selenium standalone server...
[22:50:16] I/local - Selenium standalone server started at http://192.168.0.15:63206/wd/hub
Started
Jasmine started
.
  when accessing the relative URL 'computers/new'
    ✓ shows an h1 element with text equal to 'Add a computer'
.
    happy path

      when providing valid data and clicking submit
        ✓ displays a warning message confirming the computer's successfully creation

.    alternate paths

      when submitting the form without providing a computer name
        ✓ displays the 'Computer name' field in red (meaning error)




3 specs, 0 failures
Finished in 3.763 seconds

Executed 3 of 3 specs SUCCESS in 4 secs.





[22:50:22] I/local - Shutting down selenium standalone server.
[22:50:22] I/launcher - 0 instance(s) of WebDriver still running
[22:50:22] I/launcher - chrome #01 passed
```

>In case of test failures a HTML report with screenshots of the browser in the moment of the failure can be found at the `test-report` directory.

### Visual regression tests with BackstopJS

#### Running the tests

Run `npm run test:visual` to run the visual regression tests

>After the test execution a report will be automatically opened.

#### Approving new bitmap references due to expected visual change or addition of new test

Run `npm run test:visual:approve` to new bitmap references

>After approving new bitmap references re-run the tests to check that they pass in the second run.
___

Note: all the test cases (manual and automated) are based on the application's behaviour in the following data: 22th of February, 2018.
