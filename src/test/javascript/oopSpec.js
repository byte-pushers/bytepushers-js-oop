/**
 * Created by tonte on 2/5/18.
 */
define(['bytepushers'], function(BytePushers) {
    describe("Object Oriented Programming tests:", function() {

        describe('Namespaces', function () {
            it('should be created successfully', function() {
                var testNameSpace = ['software', 'bytepushers', 'test'];
                BytePushers.Test = BytePushers.namespace("software.test");

                expect(BytePushers.Test).toBe(BytePushers.software.test);
            });
        });
    });
});