---
layout: page
title: developer
permalink: /developer/
---

# Developer Guide

Developer guidelines and process for Hypenotic and freelancers.

## Development Tools

* [Bourbon](http://bourbon.io) - Sass library
* [Bower](http://bower.io) - Package manager
* [Git](http://git-scm.com/) - Distributed version control system
* [Github](https://github.com/) - Code collaboration, management and issue tracking
* [GistBox](http://www.gistboxapp.com) - Code Library
* [Gulp](http://gulpjs.com) - Task automation
* [Neat](http://neat.bourbon.io) - Grid layout
* [BackstopJS](https://garris.github.io/BackstopJS/) - Regression testing

## Typical Setup

#### Initial system setup:

###### Node.js
1. Make sure you have __Node.js__ installed. If you are unsure go to Terminal and run ```node -v```. If installed you should get a version # such as ```v0.10.35``` __npm__ is installed as part of node.

2. If not installed, install node.js globally by running ```sudo npm install npm -g```

###### Bower
3. Make sure you have __Bower__ installed by running ```bower -v```. If nothing appears, install Bower globally by running ```npm install -g bower```

###### Gulp
4. Next, make sure you have Gulp installed by running ```gulp -v```. If nothing appears, install globally by running ```npm install --global gulp```

#### Project setup:
1. Navigate to your site root or themes directory
2. Install Bower packages by running ```bower install```
3. Install Gulp by running ```npm install gulp```. You may have to run ```sudo npm install gulp``` depending on how your system is setup
4. Load all devDependencies from package.json by running ```sudo npm install```
5. Run ```gulp``` to create ```dist``` folder and files and some other neat stuff
6. Run ```gulp watch``` to watch 

## Git Workflow

The key to establishing a great team workflow with Git is communication. Deciding the workflow "rules of the road" ahead of time will help eliminate friction and confusion, and allow a team to take advantage of what Git does best: boost productivity.

#### Forking
All development/fixes/enhancements are worked on from a developers forked version of the repo. Once work is completed a "pull request" is issued. All pull requests should merge into the ```develop``` branch. Some good pull request principles are:
* Commit often
* Commit small

Once your work has been merged into ```develop``` branch, you will need to update your local ```develop``` branch from the project remote repo. You will essentially have two remotes. Pulling from projects remote and pushing to your forked remote once work is completed.

#### Master Branch
The ```master``` branch is always deployable. Always. 

A deployable ```master``` branch is important for many reasons:
* It enables anyone new to a project to pull and build immediately without errors. 
* ```master``` shows the current state of production and/or the shipped product.
* A deployable ```master``` is a safety net. If master is always deployable, then we can deploy without worry.

#### Develop Branch
---
The ```develop``` branch should be the main branch for ongoing development. 

Feature branches are created from and merged back into ```develop```, and ```develop``` represents the bleeding edge of our codebase. Since both ```master``` and ```develop``` are permanent and highly-trafficked branches, they should never be worked in directly. Instead, all work should be done in feature branches. When implementing a new feature, branch from ```develop``` and hack out the feature.

#### Branch naming, Commit messages and Pull requests

* In general, branch names should be descriptive.
* If a branch is a fix, it is probably best to prepend ```fix-[branch name]```
* If a branch is a release, you can follow this format: ```release-[branch name]```
* Commit messages should be written in the present tense: "Fix bug..." instead of "Fixed bug..." or "Fixes bug...".
* The first line (or subject line) should be a short summary of the commit.
* If the summary line needs elaboration, you can, after a blank line, write a description. The description should be in paragraph form, with proper capitalization and punctuation.
* Pull requests should reference the Github issue # with something like "Closes #123" or "Fixes #456"

#### Merging
---
Once your new feature is coded, it's time to get it back into a shared branch (let's assume we're merging into ```develop```). But before merging into develop, make sure that your feature branch has the latest changes from ```develop``` because there may be conflicts.

All conflict resolution should happen in your feature branch. If you branched to make a small change/fix and you have not pushed the branch to the remote, rebase ```develop``` into your feature branch, and then merge your feature branch into ```develop```. Push and then feel free to delete your local feature branch.

If you have pushed your branch to the remote, first merge ```develop``` into your branch (resolving conflicts), and then merge your branch into ```develop```. Push and feel free to delete both the local and remote feature branch.

When rebasing, keep in mind that it is a destructive action. Meaning... be careful! Rebasing is really useful for cleaning up commit histories, but you don't want to rewrite history on anything that has been shared with someone else.

Here are a couple of rules to keep you safe when rebasing:

* Never rebase anything that has been pushed to the remote. Is the branch you're on only local? Then it is good to rebase. Otherwise, no rebasing.
* Rebase shared branches in local branches. ```develop``` is a shared branch. ```my‑awesome-feature``` is a local branch. Now I'm ready to merge ```my‑awesome‑feature``` into ```develop```, but I want to make sure any changes that have happened in ```develop``` are merged into my feature branch first:


```
git checkout my-feature
git rebase develop
git checkout develop
git merge my‑awesome-feature
```

#### Peer Review
---
Code reviews are a good thing! They allow you to get valuable feedback on the work you’ve done, and—if nothing else—increase the probability of mistakes being caught and fixed.

This is where Git’s pull requests come in handy.  Pull requests can be much more than just reviewing changed code. Since pull requests are brand-based, they can become threads for discussing and collaborating on individual features. 

#### Ready to ship
---
Once develop is ready for a release, we merge into ```master```

#### Hotfixes
---
We should try and never ship mistakes...but when we do, it's best to fix them fast. Since ```develop``` may include unfinished features, hotfixes should be branched from the current release—which is ```master``` (because ```master``` is always deployable!).

To make a hotfix, branch off ```master```, make the fix, then do a non-fast-forward merge into ```master```. Tag it, then merge ```master``` back into develop (because we'll want develop to have the fix too). 

## Project File Structure

## HTML/CSS

All CSS and HTML will follow the [Google Style Guide](http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml)

## SCSS File Structure

_Break Into As Many Small Files As Makes Sense_
There is no penalty to splitting into many small files. Do it as much as feels good to the project. I know I find it easier to jump to small specific files and navigate through them than fewer/larger ones.

When planning your CSS architecture, folders are essential: you don’t just drop every Sass file into the same folder, you categorize them.

Here’s how we recommend organizing your files:

```
sass/
|
|– base/ 
|   |– _reset.scss       # Reset/normalize 
|   |– _typography.scss  # Typography rules 
|   ...                  # Etc… 
| 
|– components/ 
|   |– _buttons.scss     # Buttons 
|   |– _carousel.scss    # Carousel 
|   |– _cover.scss       # Cover 
|   |– _dropdown.scss    # Dropdown 
|   |– _navigation.scss  # Navigation 
|   ...                  # Etc… 
| 
|– helpers/ 
|   |– _variables.scss   # Sass Variables 
|   |– _functions.scss   # Sass Functions 
|   |– _mixins.scss      # Sass Mixins 
|   |– _helpers.scss     # Class & placeholders helpers 
|   ...                  # Etc… 
| 
|– layout/ 
|   |– _grid.scss        # Grid system 
|   |– _header.scss      # Header 
|   |– _footer.scss      # Footer 
|   |– _sidebar.scss     # Sidebar 
|   |– _forms.scss       # Forms 
|   ...                  # Etc… 
| 
|– states/ 
|   |– _home.scss        # Home specific styles 
|   |– _contact.scss     # Contact specific styles 
|   ...                  # Etc… 
| 
|– themes/ 
|   |– _theme.scss       # Default theme 
|   |– _admin.scss       # Admin theme 
|   ...                  # Etc… 
| 
|– vendors/ 
|   |– _bootstrap.scss   # Bootstrap 
|   |– _jquery-ui.scss   # jQuery UI 
|   ...                  # Etc… 
| 
| 
`– style.scss             # primary Sass file 
```

As you can see, there is only one Sass file at the root level: style.scss. All the other files are divided into appropriate folders and prefixed with an underscore (_) to tell Sass they are partial .scss files that shouldn’t be compiled to .css files. Indeed, it is the style.scss file’s role to import and merge all of those.


####Base

The base/ folder holds what we might call the boilerplate stuff for your project. In there, you might find some stuff dealing with typography, and, depending on the project, maybe some other files.

* _reset.scss or _normalize.scss
* _typography.scss

####Helpers

The helpers/ folder (sometimes called utils/) gathers all Sass tools and helpers we’ll use across the project. Got a function? A mixin? Put it in there. This folder also contains a _variables.scss file (sometimes _config.scss) which holds all global variables for the project (for typography, color schemes, and so on).

* _variables.scss
* _mixins.scss
* _functions.scss
* _placeholders.scss (frequently named _helpers.scss)

####Layout

The layout/ directory (sometimes called partials/) usually contains a number of files, each of them setting some styles for the main sections of the layout (header, footer, and so on). It also contains the _grid file which is the grid system used to build the layout.

* _grid.scss
* _header.scss
* _footer.scss
* _sidebar.scss
* _forms.scss

####Components

For smaller components, there is the components/ folder (frequently called modules/). While layout/ is kind of macro (defining the global wireframe), components/ is more micro. It can contain all kinds of specific modules like a slider, a loader, a widget, or anything along those lines. There are usually a lot of files in components/ since your site should be mostly composed of tiny modules.

* _carousel.scss
* _thumbnails.scss
* _buttons.scss
* _navigation.scss
* _pagination.scss

####Pages

If you have page-specific styles, you can put them in a pages/ folder and in a file named after the page. For example, it’s not uncommon to have very specific styles for the home page, so you’d have a _home.scss file in pages/ dealing with this.

* _home.scss
* _contact.scss

####Themes

If you are working on a large site with multiple themes, having a themes/ folder can make sense. You can stuff all your theme/design related styles in there. This is definitely project-specific. 

* _theme.scss
* _admin.scss

####Vendors

And last but not least, you will probably have a vendors/ folder containing all the CSS files from external libraries and frameworks – Bootstrap, jQueryUI, and so on. 

_Example:_

* bootstrap.scss
* jquery-ui.scss
* select2.scss
	
## SCSS

* The preferred Sass library to use is Bourbon and Neat for grids
* SCSS syntax only, no indented SASS syntax
* If a file is 150 lines or more, break it up into smaller files
* Nesting should go no deeper than three levels
* No nesting should be longer than 50 lines
* If Variables or Mixins are used in more than one file then they should go in a _variables or _mixins file, otherwise at the top of the file they are used in
* All vendor prefixes should use mixins
* All colors should be variables, variable names should describe the function not the color. We use a two-tier system, with both functional and descriptive variable names.

```
// first we set descriptive variables:
$darkgrey: #333333;
$blue: #001eff;

// then we set functional variables:
$text_color: $darkgrey;
$link_color: $lightblue;
$border_color: $lightblue;

.myClass {
	color: $text_color;
	border-color: $border_color;
	}
a {
	color: $link_color;
}
```


* List @extend(s) First. This way it is clear that this class inherits another whole set of rules from elsewhere else.
* List "Regular" styles next
* Next list @include statements
* Finally list nested selectors

Example

```	scss
.form-button {
	@extends %button;
	background: $light-blue;
	@include transition( all 0.3s ease );
	> a {
		border: 1px solid $border_color;
		@include transform(rotate( 90deg ));
	}
}
```

#### CSS
---
* Use soft-tabs with a four space indent.
* CSS properties should be listed in order of:
- dimensions (w,h)
- position (x,y)
- styling (alphabetical order)
* Avoid use of IDs in selectors wherever possible
* If you must use an id selector (#selector) make sure that you have no more than one in your rule declaration. A rule like #header .search #quicksearch { ... } is considered harmful.
* Never use the !important statement.
* Use BEM syntax:
- block__element_modifier
- masthead__intro_fullwidth

Here is a good example

```css
.nice-class-bro {

	width: 700px;
	height: 200px;
	box-sizing:border-box;
	//
	position:absolute;
	left:40vh;
	bottom:40vh;
	//
	background: rgba(0,0,0,0.5);
	border: 1px solid rgb(0, 255, 0);
	color: rgb(0, 0, 0);
}
```

## JavaScript & Filestructure

#### ES6
---
* Moving forward, we'll start to use ES6. Docs coming soon here.

#### Directory Structure
---
Since we're using a modular and component-based architecture, the directory structure below will do:

```
js/
|
|   |– index.js
|
|– components/ 
| 	| slideshow/
|   |	|– slideshow.js   # Sass Variables 
|   ...                  # Etc… 
| 
|– modules/
| 	| hero/
|   |	|– hero.js   # Sass Variables 
|   ...                  # Etc…  
|– states/ 
|	|- home.js
|	|- archive.js
|	...
|– helpers/ 
|	|- helpers.js

```

#### Variables
---
* Variables should all be declared at the top of their scope (function) to prevent variable [hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html).
* All variable which are jQuery objects should be prefixed with a $ for clarity. If using Wordpress all Jquery objects should be prefexied with _jQuery_
* If you are going to use a jQuery selector more than once, store it in a variable

#### Naming
---
* Variable names should be a clear description of what they are or do, even if that makes them verbose.
* Camelcase should also be used. In the case of referring to an HTML element in a Javascript variable, we should use BEM Syntax.
e.g. 

```
let $masthead__intro-fullwidth = $('.masthead .intro.fullwidth');

```

## Python and Django
DOCS COMING SOON

## WordPress

#### Assets
---
* All .js and .css files should be enqueued in the functions.php file
* Use the jQuery must be deregistered before enqueuing
* Scripts should be enqueued in the footer where possible
* In production all scripts and styles should be concatenated and minified

#### Custom Post Types
---
* All custom post types use the helper at: [https://github.com/gizburdt/wp-cuztom](https://github.com/gizburdt/wp-cuztom)

#### Plugins
---
As a general rule, we try and use as few plugins as necessary. Preferring to code functionality as necessary over using plugins. If plugins need to be used they need to be vetted by team first. 

## Resources
* [MindBEMding – getting your head ’round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
* [Focusing on a Team Workflow With Git](http://code.tutsplus.com/tutorials/focusing-on-a-team-workflow-with-git--cms-22514)
* [Architecture for a Sass Project](http://www.sitepoint.com/architecture-sass-project/)
* [Github Guides](https://guides.github.com/)
* [Every team needs kick-ass code reviews](http://blogs.atlassian.com/2014/03/every-team-needs-kick-ass-code-reviews/)
