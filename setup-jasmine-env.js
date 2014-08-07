/**
 * Add custom settings to Jasmine.
 */

/*globals jasmine*/

jasmine.VERBOSE = true;

require('jasmine-reporters');
var reporter = new jasmine.JUnitXmlReporter("output/");
jasmine.getEnv().addReporter(reporter);
