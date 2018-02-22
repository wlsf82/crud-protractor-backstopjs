# Backbase assignment

This document describes the Backbase assignment for the role of QA engineer and then demonstrates a possible solution. By Walmyr Filho.

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

The manual test cases from 'Assignment description - 1' are described here.

> Remember to access the page in test before each test case

> In all test scenarios the relative URLs have to be concatenated with the following base URL: http://computer-database.herokuapp.com/

> Remember to delete all browser's cookies and clear any session or local storage before each test!

### Test suite: when accessing the relative URL 'computers/new'
- it shows an h1 element with text equal to 'Add a computer'
- it shows a form to create a computer
#### happy path
- when providing valid data and clicking submit
  - it displays a warning message confirming the computer's successfully creation, and when filtering by the newly created computer it should display the correct date in the table
#### alternate paths
- when submitting the form without providing a computer name
  - it displays the 'Computer name' field in red (meaning error)
- when submitting the form providing a valid computer name but invalid dates (introduced and discontinued dates with invalid mask - e.g.: '20000101')
  - it displays the date fields in red (meaning error)
- when submitting the form providing valid computer and discontinued date but invalid introduced date (e.g.: '2000-02-30')
  - it displays the introduced date field in red (meaning error)
- when submitting the form providing valid computer and introduced date but invalid discontinued date (e.g.: '2000-04-31')
  - it displays the discontinued date field in red (meaning error)
- when clicking 'Cancel'
  - it goes back to the homepage
- when clicking the header link
  - it goes back to the homepage

Note: if there were limitations on the computer name and rules applied to the date fields I'd create the following test cases as well:

- when filling the computer name with a long name and submitting the form (exemple of long name: 'This is a computer with a loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong name')
  - the computer name field should have a limit size not allowing such a long computer name
- when filling a valid computer name, but an introduced date that is in the past when compared to the discontinued date and submitting the form
  - it should not allow the introduced date to be less than the discontinued date. This field could be shown in red (meaning error)

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
- when filtering by a string that returns more than 10 values
  - the table shows computers that match with the filtered string and the 'Next' pagination button gets enabled
    - when clicking 'Next' the computers shown continue to match the filter
      - when clicking 'Previous' the computers shown continue to match the filter
- when clicking a computer name link
  - it shows in the form the same data displayed in the previous table row of the clicked computer

Note: if there were rules for for ordering computers by name, introduced date, discontinued date and company I'd create test cases for each of these columns in ascendent and descendent order.

### Test suite: when accessing the relative URL `computers/${computer-id}` (change '${computer-id}' to a valid computer id)
- when editing the computer name with valid data and clicking 'Save this computer'
  - it shows a message saying  'Done! Computer [new computer name] has been updated'
- when editing all information about a computer with valid data and clicking 'Save this computer'
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

> Node.js and Chrome need to be installed to run the tests

### Installation

Run `npm i` to install the development dependencies

### End-to-end tests with Protractor

End-to-end tests simulate user's behaviours and check for expected results.

Note: these sample of tests are only to exemplify a well structured test architecture using the Protractor framework.

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

Visual regression tests check not only the application behaviour, but also its visual aspect.

Note: all test scenarios are executed in different viewports (desktop and mobile).

#### Running the tests

Run `npm run test:visual` to run the visual regression tests

>To have a HTML report automatically opened after test execution, set `"report": ["browser"]` on `visual/backstop.json` file.

#### Approving new bitmap references due to expected visual changes or addition of new visual tests

Run `npm run test:visual:approve` to approve new bitmap references

>After approving new bitmap references remember to re-run the tests to check that they pass in the second run.
___

Note: all the test cases (manual and automated) are based on the application's behaviour in the following date: 22nd of February, 2018.

Note 2: Some tests were not automated due to a not controlled environment.
