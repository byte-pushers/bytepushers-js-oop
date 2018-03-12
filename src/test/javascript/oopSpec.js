/**
 * Created by tonte on 2/5/18.
 */
/*global expect, describe, it*/
define(['bytepushers', 'Person', 'Employee'], function (BytePushers, Person, Employee) {
    describe("Object Oriented Programming tests:", function () {

        describe('Namespaces', function () {
            it('should be created successfully', function () {
                BytePushers.Test = BytePushers.namespace("software.test");

                expect(BytePushers.Test).toBe(BytePushers.software.test);
            });
        });

        describe('Object Inheritance', function ()  {
            it('should be able to inherit from Person class', function () {
                var expectedBirthDate = new Date(1978, 04, 02);

                var emp = new BytePushers.models.Employee({
                    firstName: "Ken",
                    middleName: "J",
                    lastName: "James",
                    birthDate: expectedBirthDate,
                    id: 1,
                    salary: 80000,
                    title: "Full Stack Developer",
                    department: "IT"
                });

                expect(emp.getFirstName()).toBe("Ken");
                expect(emp.getMiddleName()).toBe("J");
                expect(emp.getLastName()).toBe("James");
                expect(emp.getBirthDate()).toBe(expectedBirthDate);
                expect(emp.getId()).toBe(1);
                expect(emp.getSalary()).toBe(80000);
                expect(emp.getTitle()).toBe("Full Stack Developer");
                expect(emp.getDepartment()).toBe("IT");

                emp.setId(2);
                expect(emp.getId()).toBe(2);
            })
        });
    });
});