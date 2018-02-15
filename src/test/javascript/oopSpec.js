/**
 * Created by tonte on 2/5/18.
 */
/*global expect, describe, it*/
define(['bytepushers'], function(BytePushers) {
    describe("Object Oriented Programming tests:", function() {

        describe('Namespaces', function () {
            it('should be created successfully', function() {
                BytePushers.Test = BytePushers.namespace("software.test");

                expect(BytePushers.Test).toBe(BytePushers.software.test);
            });
        });
    });
});