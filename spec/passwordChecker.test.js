import { Main } from '../src/passwordChecker.js';

describe("simple test function should return ok", function() {
    
    it("should return ok", function() {
        let main = new Main();

        let result = main.test("");

        expect(result).toBe("ok");
    });
    it("should verify if the email contains at least 8 caracthers", function() {
        let main = new Main();

        let result = main.emailChercker("test@gmail.com");

        expect(result).toBe(true);
    });
    it("should verify if the email contains at least 8 caracthers", function() {
        let main = new Main();

        let result = main.emailChercker("test@");

        expect(result).toBe(false);
    });
});
