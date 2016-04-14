/**
 * Unit test to validate site-skeleton using Chai expect interface.
 * expect(expr, error-message).
 * .to.equal(expr-b) text is expr === expr-b
 * .to.be.a(string) test expr is of type(string)
 * .to.have.length(int) test expr is evaluated to length()
 * .to.have.property(string) test expr is an object with property.string
 * See http://chaijs.com/api/bdd/ for more chains.
 * Created by john8301 on 2/17/16.
 */

define(function (require) {
  var registerSuite = require('intern!object'),
      expect = require('intern/chai!expect'),
      app = require('src/app/js/index'),
      dateformat = require('intern/dojo/node!dateformat'); // use the Dojo loader to get our node module

  registerSuite(function () {
    var testCounter = 0;
    return {
      name: 'common',

      /**
       * A set of unit tests to verify Chai+Intern are working properly.
       */
      ObjectUnitTest: function () {
        var obj = {id: 1, name: 'test', title: 'test', value: 500, items: [1, 2, 3, 4, 5, 6]};
        testCounter ++;
        expect(obj, 'Object test Chai expect interface on prop').to.have.property('title');
        expect(obj, 'Object test Chai expect interface on non-existent prop').not.to.have.property('info');
        expect(obj, 'Object test Chai expect interface on type').to.be.an('object');
        expect(obj.title, 'Object test Chai expect interface on type').to.be.a('string');
        expect(obj.items, 'Object test Chai expect interface on type').to.be.an('array');
        expect(obj.id, 'Object test Chai expect interface on type').to.be.a('number');
        expect(obj.id, 'Object test Chai expect interface on value').to.be.equal(1);
      },

      ChaiCoreUnitTest: function () {
        testCounter ++;
        expect(1, 'Integer 1').to.be.a('number');
        expect(1, 'Integer 1').to.equal(1);
        expect(true, 'Boolean/true').to.equal(1 == 1);
        expect(false, 'Boolean/false').to.equal(1 == 0);
        expect(true, 'Boolean/true').to.be.true;
        expect(false, 'Boolean/false').to.be.false;
      },

      DateFormatTest: function () {
        var value,
            testString;

        testCounter ++;
        expect(dateformat, 'DateFormatTest 1').to.be.a('Function');
        testString = "Jun 9 2007";
        value = dateformat(testString, "fullDate");
        expect(value, 'DateFormatTest "' + testString + '"').to.equal('Saturday, June 9, 2007');
      },

      TestCounterTest: function () {
        testCounter ++;
        expect(testCounter, 'testCounter should be 4').to.equal(4);
      },

      /**
       * General test of the CommonUtilities package
       * @constructor
       */
      AppTest: function () {
        var value;

        value = app.toString();
        expect(value, 'index.js to be not null').to.be.not.equal(null);
      },
    }
  });
});
