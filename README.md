# Project Overview

This project is a web-based application that reads RSS feeds.

## Testing

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

A feedreader.js file is included in this project.  It contains test suites to test object definitions and behaviors.

1) The 'RSS Feeds' test suite is all about the RSS feeds definitions and the allFeeds variable in the application.
    a. The 'are defined' test makes sure that the allFeeds variable has been defined and that it is not empty.
    b. The 'feeds have name' test allFeeds objects has a name defined and that the name is not empty.
    c. The 'feeds have url' test allFeeds objects has a url defined and that the url is not empty.

2) The 'The Menu' test suite is all about Menu definition and behavior.
    a. The 'menu is hidden by default' test makes sure the menu is hidden by default.
    b. The 'menu is visible when menu icon is clicked' test makes sure menu toggles between shown and hidden when the menu button is clicked.

3) The 'Initial Entries' test suite is all about Feeder definition.
    a. The 'feed container is not empty' test makes sure there is at least one entry in the feed container when the loadFeed function is executed.

4) The 'New Feed Selection' test suite is all about Feeder behavior.
    a. The 'different feed is loaded' test makes when a new feed is loaded by the loadFeed function that the content actually changes.
