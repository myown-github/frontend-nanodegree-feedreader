/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This test makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test allFeeds objects has a url defined
         * and that the url is not empty.
         */
         it ('feeds have url', function() {
            for (let i=0; i<allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
           };
         });

        /* Test allFeeds objects has a name defined
         * and that the name is not empty.
         */
         it ('feeds have name', function() {
            for (let i=0; i<allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
           };
         });
    });

    /* This suite will test Menu definition and behavior */
    describe('The Menu', function() {

        /* Test menu element is hidden by default. */
        it ('menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* Test menu changes visibility when the menu icon is clicked. */
        it ('menu is visible when menu icon is clicked', function() {
            $('.menu-icon-link').click()
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click()
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* This suite will test feeder definition. */
    describe('Initial Entries', function() {

        /* Test when the loadFeed function is called and completes
         * its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

         it ('feed container is not empty', function() {
            expect($('.feed .entry').length).not.toBe(0);
         });
    });

    /* This suite will test feeder behavior. */
    describe('New Feed Selection', function() {

        /* Test when a new feed is loaded by the loadFeed function
         * that the content actually changes.
         */
         let oldFeed, newFeed;

         beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed');
                loadFeed(1, function() {
                    newFeed = $('.feed');
                    done();
                });
            });
         });

         it ('different feed is loaded', function() {
            expect(oldFeed).not.toBe(newFeed);
         });
    });

}());
