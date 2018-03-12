(function(BytePushers) {
    BytePushers = BytePushers || {};
    BytePushers.models = BytePushers.models ||  BytePushers.namespace("software.bytepushers.models");

    BytePushers.models.Person = function Person(personConfig) {
        var firstName = (personConfig && personConfig.firstName)? personConfig.firstName: null;
        var middleName = (personConfig && personConfig.middleName)? personConfig.middleName: null;
        var lastName = (personConfig && personConfig.lastName)? personConfig.lastName: null;
        var birthDate = (personConfig && personConfig.birthDate)? personConfig.birthDate: null;

        this.getFirstName = function() {
            return firstName;
        };

        this.setFirstName = function(someFirstName) {
            firstName = someFirstName;
        };

        this.getMiddleName = function() {
            return middleName;
        };

        this.setMiddleName = function(someMiddleName) {
            middleName = someMiddleName;
        };

        this.getLastName = function() {
            return lastName;
        };

        this.setLastName = function(someLastName) {
            lastName = someLastName;
        };

        this.getBirthDate = function () {
            return birthDate;
        };

        this.setBirthDate = function (someBirthDate) {
            someBirthDate = someBirthDate;
        };
    }
})(BytePushers);