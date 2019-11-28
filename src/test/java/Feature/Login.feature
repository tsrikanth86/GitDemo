Feature: Application Login

//Background:
//Given Validate the Browser
//When Browser is triggered
//Then Check if the browser is started

@SmokeTest
Scenario: Home Page default login
Given  user is on loading page
When  user enters username  and password 
Then Home page is populated
And cards are displayed


Scenario: Home Page default login page enter username and password
Given  user is on loading page
When  user enters username "Srikanth" and password "Tangirala" 
Then Home page is populated
And cards are displayed

@SmokeTest
Scenario: Home Page default login page enter username and password
Given  user is on loading page
When  user enters fills in form details
|srikanth|Tangirala|srikanth.tangirala@gmail.com|India|9966001237|
Then Home page is populated
And cards are displayed


Scenario Outline: Home Page default login page enter username and password
Given  user is on loading page
When  user enters Para name <UserName> and pass <Password> 
Then Home page is populated
And cards are displayed

Examples:
|UserName|Password|
|User1|Pass1|
|User2|Pass2|
|User3|Pass3|
|User4|Pass4|

