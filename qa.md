---
layout: page
title: qa
permalink: /qa/
---

# Quality Assurance
Process and tools that we use to Quality Assurance test projects.

## Validation
Most webpages are written in languages (such as HTML) that allow contributors to structure text, add multimedia content, and specify the style or appearance of a website. As with every language, these have their own grammar, vocabulary and syntax, and every document written with these computer languages are supposed to follow these rules. These machine-readable grammars are called "Document Type Definition" or DTDs.

However, just as texts in a natural language can include spelling or grammar errors, documents using Markup languages may also have errors. The process of verifying whether a document actually follows the rules for the language(s) it uses is called validation, and the tool used for that is a validator. A document that passes this process with success is called valid. We can define "markup validation" as the process of checking a web document against the grammar it uses.

We use the **[W3C HTML Validation](https://validator.w3.org)** tool to validate our HTML and **[W3C Link Checker](https://validator.w3.org/checklink)** to check all links and anchors in a webpage.

## Browser Testing
Our projects currently support Internet Explorer 9+ and the latest two versions of Chrome, Safari, and Firefox on OS X and Windows. We use **[Browserstack](https://www.browserstack.com)** to test our responsive designs in multiple browsers.

## Automated Regression Testing
Regression testing is a set of automated tests to compare visual differences on websites. It’s an automated game of “Spot the Differences”, where your computer uses a web browser to render a page or portion of a page and highlights all the differences it finds between two sources.

We use **[BackstopJS](https://garris.github.io/BackstopJS/)** that we run manually or through our build process to report on any unintended visual differences when we make design/development changes to websites.

## Speed Testing
With more and more users accessing sites from a mobile device, website speed is critically important. We test our sites before and after launch using:

* [Google Page Speed](https://developers.google.com/speed/pagespeed/)
* [YSlow](http://yslow.org/)
* [Web Page Test](http://www.webpagetest.org/)

We aim to get a Google Page Speed score of **90+** and a YSlow score of **85+**

## Accessibility

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

## Bug reporting best practices

## QA Process

## Resources
* [Automated CSS Regression Testing](https://css-tricks.com/automating-css-regression-testing)
* [More Weight Doesn't Mean More Wait](http://www.filamentgroup.com/lab/weight-wait.html)
* [WAI-ARIA](http://www.w3.org/TR/wai-aria/)
* [Accessibility](http://code.tutsplus.com/tutorials/accessibility-part-1-introduction--cms-21791)
* [Considerations on Bug Reporting in Teams](https://css-tricks.com/considerations-on-bug-reporting-in-teams/)
