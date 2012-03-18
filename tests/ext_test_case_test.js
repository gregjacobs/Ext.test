/*global Ext, Y */
Ext.test.Session.addSuite( {
	name: 'Ext.test.TestCase',
	defaults: {
		configTestCase : {},
		
		// call before each tests
		setUp: function() {
			this.testSession = new Ext.test.SessionImpl();
			var conf = Ext.apply(this.configTestCase, {
				testSession : this.testSession
			});
			this.testCase = new Ext.test.TestCase(conf);
		},
		   
		// call after each tests
		tearDown: function() {
			this.testSession.destroy();
			delete this.testSession;
			delete this.testCase;
		}
	},
	  
	items: [
		{
			name : 'Default configuration after instantiation',
			// test is Ext.test.TestCase is correctly instanciated
			testDefaultConfiguration: function() {
				Y.Assert.isString(this.testCase.name, 'testCase: name');
				Y.ObjectAssert.areEqual(this.testSession, this.testCase.testSession, 'testCase: testSession');
			}
		}
	]
} );
