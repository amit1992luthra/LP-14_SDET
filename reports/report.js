$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("google.feature");
formatter.feature({
  "line": 2,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Featuretag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "scenario4",
  "description": "",
  "id": "search-functionality;scenario4",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    },
    {
      "line": 5,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user write \"\u003csearchvalue\u003e\" in \"\u003cvariable1\u003e\", \"\u003cvariable2\u003e\" box",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on seach button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "results \"\u003cvariable3\u003e\" be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "search-functionality;scenario4;",
  "rows": [
    {
      "cells": [
        "searchvalue",
        "variable1",
        "variable2",
        "variable3"
      ],
      "line": 13,
      "id": "search-functionality;scenario4;;1"
    },
    {
      "cells": [
        "IBM",
        "sampledata",
        "value2",
        "value3"
      ],
      "line": 14,
      "id": "search-functionality;scenario4;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2578947100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "scenario4",
  "description": "",
  "id": "search-functionality;scenario4;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 1,
      "name": "@Featuretag"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user write \"IBM\" in \"sampledata\", \"value2\" box",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on seach button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "results \"value3\" be displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationclass.user_is_on_the_search_page()"
});
formatter.result({
  "duration": 1114930900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IBM",
      "offset": 12
    },
    {
      "val": "sampledata",
      "offset": 21
    },
    {
      "val": "value2",
      "offset": 35
    }
  ],
  "location": "stepdefinationclass.user_write_in_box(String,String,String)"
});
formatter.result({
  "duration": 14594900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinationclass.click_on_seach_button()"
});
formatter.result({
  "duration": 6475800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "value3",
      "offset": 9
    }
  ],
  "location": "stepdefinationclass.results_be_displayed(String)"
});
formatter.result({
  "duration": 7005400,
  "status": "passed"
});
formatter.after({
  "duration": 751166300,
  "status": "passed"
});
formatter.before({
  "duration": 1201757500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "scenario2",
  "description": "",
  "id": "search-functionality;scenario2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "click on seach button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "results should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationclass.click_on_seach_button()"
});
formatter.result({
  "duration": 10451500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinationclass.results_should_be_displayed()"
});
formatter.result({
  "duration": 101600,
  "status": "passed"
});
formatter.after({
  "duration": 724832800,
  "status": "passed"
});
});