(function(BytePushers) {
    BytePushers = BytePushers || {};
    BytePushers.models = BytePushers.models ||  BytePushers.namespace("software.bytepushers.models");

    BytePushers.models.Employee = function Employee(empConfig) {
        BytePushers.models.Employee.prototype.superclass.apply(this, [empConfig]);

        var id = (empConfig && empConfig.id)? empConfig.id: null;
        var salary = (empConfig && empConfig.salary)? empConfig.salary: 0;
        var title = (empConfig && empConfig.title)? empConfig.title: null;
        var department = (empConfig && empConfig.department) ? empConfig.department: null;


        this.getId = function () {
            return id;
        };

        this.setId = function (someId) {
            id = someId;
        };

        this.getSalary = function () {
            return salary;
        };

        this.setSalary = function (someSalary) {
            salary = someSalary;
        };

        this.getTitle = function () {
            return title;
        };

        this.setTitle = function (someTitle) {
            title = someTitle;
        };

        this.getDepartment = function () {
            return department;
        };

        this.setDepartment = function (someDepartment) {
            department = someDepartment;
        };
    }
    BytePushers.models.Employee.prototype = BytePushers.inherit(BytePushers.models.Person.prototype);
    BytePushers.models.Employee.prototype.constructor = BytePushers.models.Employee;
    BytePushers.models.Employee.prototype.superclass = BytePushers.models.Person;
})(BytePushers);