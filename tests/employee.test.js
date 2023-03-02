const Employee = require("../lib/employee");

describe("Employee", () => {
    // testing getName
    describe("getName", () => {
        it("conName should return a same result as name", () => {
            const name = "Junho";
        
            const result = new Employee(name);
    
            expect(result.name).toBe(name);
        })
    }) // end of getName
})