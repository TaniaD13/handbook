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
These are some of the high-level checks we make before launching and is not a complete list as each project is different. 

### Page Content
* Make sure web content has been proofread, and run through a spelling and grammar checker to check for correctness.

* Check that generic content, such as lorem ipsum, has been properly removed and replaced.

* See that all images are in the correct places, smushed, formatted, width and height specified and working on all devices.

* Confirm that videos and audio files are in the correct places, formatted and working on all devices.

* Test all linked content, such as case studies, ebooks, and whitepapers, and verify that they are correctly linked.

* Test to see that all internal links across web pages are working properly

### Optimize User Experience

* Ensure that Contact Us and other forms are submitting data properly. If form is sent to an email address ensure that email is received on a mailbox that is monitored, or ensure that content is correctly stored in database.

* Verify the Thank-you message or page displayed after form is submitted

* Check that Auto-responders are working properly and text in emails has been proofed

* External links across web pages are working properly, and open in a new tab.

* Ensure that Social media share icons are working properly – that there is a good image for sharing and that the description for sharing is appropriate.

* Correct your metadata as necessary to ensure social media sharing is working ok.

* Use the Facebook linter to ensure your Facebook sharing will work well

* Implement Twitter Cards and confirm it works well on the Preview tool

* Ensure that company logo is linked to the homepage.

* Check that load time for site pages is optimized.

* Try a non-existing address on your page to check the 404 page and 404 redirect pages are in place

* Integrations with third-party tools, such as your CRM, e-commerce software, and/or marketing platform should be tested to ensure they are running smoothly

* Choose www vs no-www and make sure that ONLY one of them is working to ensure you don’t get penalized for duplicate content. After choosing one, make sure one redirects to the other.

### Responsive and Mobile Friendly

* Make sure you are using the viewport meta tag: <meta name="viewport" content="initial-scale=1">

* Check that your website is mobile-friendly. Most of the mobile problems should have been fixed already by this stage.

* Use correct input types for email, phone and URL input form fields to ensure these are rendered correctly on mobile phones

* Check how the site looks on emulators such as: [http://beta.screenqueri.es/](screenqueries), [http://ipadpeek.com/](ipadpeek), [http://iphone4simulator.com/](iphonetester), [http://quirktools.com/screenfly/](screenfly)

* Test the site using real devices.

### Analytics

* Register and verify site with Google WebMasters

* Implement Google Analytics

* Make sure you link Google WebMasters and Google Analytics to be able to get better insights from within Google Analytics

* Exclude relevant IP addresses (such as office IP) from analytics tracking to ensure your own company’s and the client’s company do not inflate their stats.

* Set up any funnels, goals or tracking events which have been properly created in your analytics software

* Implement visitor tracking software such as HotJar, CrazyEgg, or Optimizely

* Implement any site uptime monitor such as Pingdom

### SEO

* Check that all pages have unique page titles (with a recommended length of fewer than 70 characters, including any keywords).

* Check that all pages have unique meta descriptions (with a recommended length of fewer than 156 characters, including keywords) – the meta description should be human-friendly – not optimized for search engines.

* Verify that pages have your chosen keywords included without any keyword stuffing

* See that all pages have metadata which is properly in place (with correct spelling and grammar) for any content which you want to be shared via Social

* Ensure that relevant Alt tags have been added to every image.

* Make sure that a dynamic XML sitemap (which gets updated with every post you make) has been created and verify that the XML sitemap has been submitted to search engines via Google WebMasters.

* If you have had another older website, make sure you have 301 redirects in place for all old URLs (redirecting old pages to new ones).

### Usability

* Check for HTML5 compatibility using [http://dev.modern.ie/tools/](modern.ie)

* Create a Favicon

* Enable user and search engine friendly URLs

* Set up a print stylesheet

* Add humans.txt

## Functional Testing

Coming Soon

* http://phantomjs.org/quick-start.html
* http://casperjs.org/
* https://blog.newrelic.com/2013/06/04/simpler-ui-testing-with-casperjs-2/

## Bug reporting best practices

As developers and team members, it's our responsibility to establish a workflow for reporting, cataloguing, and describing the bugs that people are likely to encounter.

Having a system for bug reports in a team environment has a ton of benefits:

* Knowing which bugs currently exist.
* Understand who is working on what (and what they need).
* Get an overview of how much time it will take to get things done.
* Find tasks that are blocked or those which require some kind of dependency before they're tackled.

With a solid bug-fixing system in place, we're in a much better position to do great work, yet it's important to note that good bug-reporting skills are not only a requirement for developers. Everyone on the team should be capable of finding a bug and providing as much information as possible about it. This means that designers, developers, and project managers of all experience levels shouldn't be afraid to use the bug tool and get an overview of the project as a whole.

Here at Hypenotic, we use Github Issues as our preferred bug reporting tool.

Here are some best practices in bug reporting.

### 1. Be short and to the point
Ideally we want bullet points rather than long sentences so that a developer can find the issue as quickly as they can although that doesn't give us an excuse to be curt. It's best to describe the problem as accurately and with as few deterrents as possible. If there is someone who built that particular feature and knows the in-and-outs of it, perhaps you should assign it them first.

### 2. Make sure to add screenshots

For animation and complex interaction bugs in particular, animated GIFs are almost essential to highlighting the flaw's peculiarities. However, for the most part, a simple screenshot will help us find which view or template the bug can be found in.

### 3. Identify the browser version

It's very helpful to quote the name of the browser and version such as "Chrome 42" or "IE8". But, if you can also figure out whether the bug isn't present in other browsers then that's even better, something like: "I found this bug in iOS 8.3 but I can't replicate it in any other Webkit browser." With this sort of information you might save a developer a lot of time and they can more quickly identify what's going wrong.

If you want to make sure you send along all the possible information, you could use a tool like [http://supportdetails.com/](Support Details) that snags a lot of stuff and allows you to email it or PDF it.

### 4. Make note of which template/page the bug is on

If it's on the /blog or the /contact-us page, or if it can be found in a specific partial such as the header or the footer, let the developer know that as quickly as possible.

A full URL is usually super helpful.

### 5. See if there are any console errors or notifications

Rather than copy/pasting the console error it's probably best to take a screenshot if there's any warnings. They might be unrelated to the particular bug you've found, but it might just be the thing that's messing everything up.

### 7. Double check if the bug has already been found

This task might also involve you going through and seeing which bugs are similar and tagging the problem in the app that you use. If the bug has been found then maybe it's worth adding more information or noting on the card as to where you found a new instance of the same problem.

### 8. Group tasks into specific categories

It's helpful to separate everyone's tasks into specific areas such as:

* Content
* Design
* Front-end
* Integration / Back-end
* Bugs
* Code Review
* Done

This gives us an overview of the project timeline and gives developers an opportunity to look at all the bugs with a single glance.

## Resources
* [Automated CSS Regression Testing](https://css-tricks.com/automating-css-regression-testing)
* [More Weight Doesn't Mean More Wait](http://www.filamentgroup.com/lab/weight-wait.html)
* [WAI-ARIA](http://www.w3.org/TR/wai-aria/)
* [Accessibility](http://code.tutsplus.com/tutorials/accessibility-part-1-introduction--cms-21791)
* [Considerations on Bug Reporting in Teams](https://css-tricks.com/considerations-on-bug-reporting-in-teams/)
* [Why the Speed of Your Site Should Be a Priority](http://www.blogherald.com/2015/08/07/why-the-speed-of-your-site-should-be-a-priority)
* [Thoughtbot playbook](https://playbook.thoughtbot.com/)
