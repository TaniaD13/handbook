---
layout: page
title: qa
permalink: /qa/
---

# Quality Assurance
Process and tools that we use to Quality Assurance test projects.

## Validation
Most webpages are written in languages (such as HTML) that allow contributors to structure the text, add multimedia content, and specify the style or appearance of a website. As with every language, these have their own grammar, vocabulary, and syntax, and every document written with these computer languages are supposed to follow these rules. These machine-readable grammars are called "Document Type Definition" or DTDs.

However, just as texts in a natural language can include spelling or grammar errors, documents using Markup languages may also have errors. The process of verifying whether a document actually follows the rules for the language(s) it uses is called validation, and the tool used for that is a validator. A document that passes this process with success is called valid. We can define "markup validation" as the process of checking a web document against the grammar it uses.

We use the **[W3C HTML Validation](https://validator.w3.org)** tool to validate our HTML and **[W3C Link Checker](https://validator.w3.org/checklink)** to check all links and anchors in a webpage.

## Browser Testing
Our projects currently support Internet Explorer 9+ and the latest two versions of Chrome, Safari, and Firefox on OS X and Windows. We use **[BrowserStack](https://www.browserstack.com)** to test our responsive designs in multiple browsers.

## Automated Regression Testing
Regression testing is a set of automated tests to compare visual differences on websites. It’s an automated game of “Spot the Differences”, where your computer uses a web browser to render a page or portion of a page and highlights all the differences it finds between two sources.

We use **[BackstopJS](https://garris.github.io/BackstopJS/)** that we run manually or through our build process to report on any unintended visual differences when we make design/development changes to websites.

## Performance Testing
With more and more users accessing sites from a mobile device, website speed is critically important. We test our sites before and after launch using:

* [Google Page Speed](https://developers.google.com/speed/pagespeed/)
* [YSlow](http://yslow.org/)
* [Web Page Test](http://www.webpagetest.org/)

We aim to get a Google Page Speed score of **90+** and a YSlow score of **85+**

## Accessibility

Coming Soon

## Launch Checklist/Process
# Page Content
* Make sure web copywriting has been proofread, and ran through a spelling and grammar checker to check for correctness. Use online tools such as Reverso, or Spellcheckplus.com

* Check that generic content, such as lorem ipsum, has been properly removed and replaced.

* See that all images are in the correct places, smushed, formatted, width and height specified and working on all devices.

* Confirm that videos and audio files are in the correct places, formatted and working on all devices.

* Test all linked content, such as case studies, ebooks, and whitepapers, and verify that they are correctly linked.

* Test to see that all internal links across web pages are working properly

# OPTIMIZED USER EXPERIENCE

* Ensure that Contact Us and other forms are submitting data properly. If form is sent to an email address ensure that email is received on a mailbox that is monitored, or ensure that content is correctly stored in database.

* Verify the Thank-you message or page displayed after form is submitted

* Check that Auto-responders are working properly and text in emails has been proofed

* External links across web pages are working properly, and open in a new tab (Fix any broken links using this tool)

* Ensure that Social media share icons are working properly – that there is a good image for sharing and that the description for sharing is appropriate.

* Correct your metadata as necessary to ensure social media sharing is working ok.

* Use the Facebook linter to ensure your Facebook sharing will work well

* Implement Twitter Cards and confirm it works well on the Preview tool

* Ensure that company logo is linked to the homepage.

* Check that load time for site pages is optimized (confirm with multiple sources) such as GTMetrix and Pingdom tools. 

* Try a non-existing address on your page to check the 404 page and 404 redirect pages are in place

* Integrations with third-party tools, such as your CRM, e-commerce software, and/or marketing platform should be tested to ensure they are running smoothly

* Choose www vs no-www and make sure that ONLY one of them is working to ensure you don’t get penalized for duplicate content. After choosing one, make sure one redirects to the other.

* http://thehive.beewits.com/the-ultimate-web-design-checklist-things-to-do-when-launching-a-website/#Stage 3 - Quality Assurance


## Functional Testing

Coming Soon

* http://phantomjs.org/quick-start.html
* http://casperjs.org/
* https://blog.newrelic.com/2013/06/04/simpler-ui-testing-with-casperjs-2/

## Bug reporting best practices

Coming Soon

## Resources
* [Automated CSS Regression Testing](https://css-tricks.com/automating-css-regression-testing)
* [More Weight Doesn't Mean More Wait](http://www.filamentgroup.com/lab/weight-wait.html)
* [WAI-ARIA](http://www.w3.org/TR/wai-aria/)
* [Accessibility](http://code.tutsplus.com/tutorials/accessibility-part-1-introduction--cms-21791)
* [Considerations on Bug Reporting in Teams](https://css-tricks.com/considerations-on-bug-reporting-in-teams/)
* [Why the Speed of Your Site Should Be a Priority](http://www.blogherald.com/2015/08/07/why-the-speed-of-your-site-should-be-a-priority)
