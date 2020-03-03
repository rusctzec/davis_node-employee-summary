const types = require('../lib/employee-types');

describe("Employee class", function() {
    it("should set 'name' when created", function() {
        const obj = new types.Employee("Sean","sean@example.com");
        expect(obj.getName()).toEqual("Sean");
    });
  
    it("should set 'id' to a version 4 UUID", function() {
        const obj = new types.Employee("Sean","sean@example.com");
        expect(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(obj.getId())).toEqual(true)
    });

    it("should set 'email' when created", function() {
        const obj = new types.Employee("Sean","sean@example.com");
        expect(obj.getEmail()).toEqual("sean@example.com");
    });
});

describe("Manager class", function() {
    it("should set correct role", function() {
        const obj = new types.Manager("Sean","sean@example.com");
        expect(obj.getRole()).toEqual("Manager");
    });

    it("should set 'officeNumber'", function() {
        const obj = new types.Manager("Sean","sean@example.com", 100);
        expect(obj.getOfficeNumber()).toEqual(100);
    })
});

describe("Engineer class", function() {
    it("should set correct role", function() {
        const obj = new types.Engineer("Sean","sean@example.com");
        expect(obj.getRole()).toEqual("Engineer");
    });

    it("should set 'username'", function() {
        const obj = new types.Engineer("Sean","sean@example.com", "seanongithub");
        expect(obj.getGithub()).toEqual("seanongithub");
    })
});

describe("Intern class", function() {
    it("should set correct role", function() {
        const obj = new types.Intern("Sean","sean@example.com");
        expect(obj.getRole()).toEqual("Intern");
    });

    it("should set 'school'", function() {
        const obj = new types.Intern("Sean","sean@example.com", "Example University");
        expect(obj.getSchool()).toEqual("Example University");
    })
});