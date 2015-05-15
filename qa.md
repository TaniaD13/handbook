---
layout: page
title: qa
permalink: /qa/
---

# Quality Assurance
Process and tools that we use to Quality Assurance test projects.

## Validation
Most pages on the World Wide Web are written in computer languages (such as HTML) that allow Web authors to structure text, add multimedia content, and specify what appearance, or style, the result should have.

As for every language, these have their own grammar, vocabulary and syntax, and every document written with these computer languages are supposed to follow these rules. The (X)HTML languages, for all versions up to XHTML 1.1, are using machine-readable grammars called DTDs, a mechanism inherited from SGML.

However, Just as texts in a natural language can include spelling or grammar errors, documents using Markup languages may (for various reasons) not be following these rules. The process of verifying whether a document actually follows the rules for the language(s) it uses is called validation, and the tool used for that is a validator. A document that passes this process with success is called valid.

With these concepts in mind, we can define "markup validation" as the process of checking a Web document against the grammar (generally a DTD) it claims to be using.

We use the [W3C HTML Validation](https://validator.w3.org) tool to validate our HTML and [W3C Link Checker](https://validator.w3.org/checklink) to check all links and anchors in a webpage.

## Browser Testing
Our projects currently support Internet Explorer 9+ and the latest two versions of Chrome, Safari, and Firefox on OS X and Windows. We use [Browserstack](https://www.browserstack.com) to test our responsive designs in multiple browsers.

## Automated Regression Testing
Regression testing is a set of automated tests to compare visual differences on websites. It’s an automated game of “Spot the Differences”, where your computer uses a web browser to render a page or portion of a page and highlights all the differences it finds between two sources.

We use [BackstopJS](https://garris.github.io/BackstopJS/) that we run manually or through our build process to report on any unintended visual changes when we make design/development changes to websites.

## Speed Testing
* http://www.filamentgroup.com/lab/weight-wait.html
* http://www.webpagetest.org/
* YSlow and Google Page Speed

## Launch Checklist
* http://www.boxuk.com/blog/relaunching-the-ultimate-website-launch-checklist/
* http://www.startupcto.com/processes/web-qa-testing
* http://www.searchenginejournal.com/50-questions-to-evaluate-the-quality-of-your-website/
* http://thehive.beewits.com/the-ultimate-web-design-checklist-things-to-do-when-launching-a-website/#Stage 3 - Quality Assurance
* https://basecamp.com/1759522/projects/2012610 - Wordpress checklist

## Functional Testing
* http://phantomjs.org/quick-start.html
* http://casperjs.org/
* https://blog.newrelic.com/2013/06/04/simpler-ui-testing-with-casperjs-2/

## QA Process

## Resources
* [Automated CSS Regression Testing](https://css-tricks.com/automating-css-regression-testing)
