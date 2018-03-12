(function() {
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

        this.setFirstName = function(firstName) {
            this.firstName = firstName;
        };

        this.getMiddleName = function() {
            return middleName;
        };

        this.setMiddleName = function(middleName) {
            this.middleName = middleName;
        };

        this.getLastName = function() {
            return lastName;
        };

        this.setLastName = function(lastName) {
            this.lastName = lastName;
        };

        this.getBirthDate = function () {
            return birthDate;
        };

        this.setBirthDate = function (birthDate) {
            this.birthDate = birthDate;
        };
    }
})();