$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "\r\n//Background:\r\n//Given Validate the Browser\r\n//When Browser is triggered\r\n//Then Check if the browser is started",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 286400,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Home Page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user is on loading page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters username  and password",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_loading_page()"
});
formatter.result({
  "duration": 424470800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_enters_username_and_password()"
});
formatter.result({
  "duration": 93500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 94100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.cards_are_displayed()"
});
formatter.result({
  "duration": 265500,
  "status": "passed"
});
formatter.after({
  "duration": 312400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Home Page default login page enter username and password",
  "description": "",
  "id": "application-login;home-page-default-login-page-enter-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "user is on loading page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user enters username \"Srikanth\" and password \"Tangirala\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_loading_page()"
});
formatter.result({
  "duration": 328900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Srikanth",
      "offset": 22
    },
    {
      "val": "Tangirala",
      "offset": 46
    }
  ],
  "location": "stepDefination.user_enters_username_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 5743600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 269800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.cards_are_displayed()"
});
formatter.result({
  "duration": 72700,
  "status": "passed"
});
formatter.before({
  "duration": 90200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Home Page default login page enter username and password",
  "description": "",
  "id": "application-login;home-page-default-login-page-enter-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user is on loading page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user enters fills in form details",
  "rows": [
    {
      "cells": [
        "srikanth",
        "Tangirala",
        "srikanth.tangirala@gmail.com",
        "India",
        "9966001237"
      ],
      "line": 26
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_loading_page()"
});
formatter.result({
  "duration": 616400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_enters_fills_in_form_details(DataTable)"
});
formatter.result({
  "duration": 1739400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 91800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.cards_are_displayed()"
});
formatter.result({
  "duration": 66600,
  "status": "passed"
});
formatter.after({
  "duration": 69100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Home Page default login page enter username and password",
  "description": "",
  "id": "application-login;home-page-default-login-page-enter-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "user is on loading page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user enters Para name \u003cUserName\u003e and pass \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "cards are displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "application-login;home-page-default-login-page-enter-username-and-password;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 38,
      "id": "application-login;home-page-default-login-page-enter-username-and-password;;1"
    },
    {
      "cells": [
        "User1",
        "Pass1"
      ],
      "line": 39,
      "id": "application-login;home-page-default-login-page-enter-username-and-password;;2"
    },
    {
      "cells": [
        "User2",
        "Pass2"
      ],
      "line": 40,
      "id": "application-login;home-page-default-login-page-enter-username-and-password;;3"
    },
    {
      "cells": [
        "User3",
        "Pass3"
      ],
      "line": 41,
      "id": "application-login;home-page-default-login-page-enter-username-and-password;;4"
    },
    {
      "cells": [
        "User4",
        "Pass4"
      ],
      "line": 42,
      "id": "application-login;home-page-default-login-page-enter-username-and-password;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "Home Page default login page enter username and password",
  "description": "",
  "id": "application-login;home-page-default-login-page-enter-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "user is on loading page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user enters Para name User1 and pass Pass1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_loading_page()"
});
formatter.result({
  "duration": 305900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    },
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "stepDefination.user_enters_para_name_and_pass(String,String)"
});
formatter.result({
  "duration": 157200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 60800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.cards_are_displayed()"
});
formatter.result({
  "duration": 84500,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Home Page default login page enter username and password",
  "description": "",
  "id": "application-login;home-page-default-login-page-enter-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "user is on loading page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user enters Para name User2 and pass Pass2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_loading_page()"
});
formatter.result({
  "duration": 72500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "2",
      "offset": 41
    }
  ],
  "location": "stepDefination.user_enters_para_name_and_pass(String,String)"
});
formatter.result({
  "duration": 185300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 74000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.cards_are_displayed()"
});
formatter.result({
  "duration": 129300,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Home Page default login page enter username and password",
  "description": "",
  "id": "application-login;home-page-default-login-page-enter-username-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "user is on loading page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user enters Para name User3 and pass Pass3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_loading_page()"
});
formatter.result({
  "duration": 108600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 41
    }
  ],
  "location": "stepDefination.user_enters_para_name_and_pass(String,String)"
});
formatter.result({
  "duration": 219300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 185200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.cards_are_displayed()"
});
formatter.result({
  "duration": 193000,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Home Page default login page enter username and password",
  "description": "",
  "id": "application-login;home-page-default-login-page-enter-username-and-password;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "user is on loading page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user enters Para name User4 and pass Pass4",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_loading_page()"
});
formatter.result({
  "duration": 97700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 26
    },
    {
      "val": "4",
      "offset": 41
    }
  ],
  "location": "stepDefination.user_enters_para_name_and_pass(String,String)"
});
formatter.result({
  "duration": 385200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 161400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.cards_are_displayed()"
});
formatter.result({
  "duration": 61600,
  "status": "passed"
});
});