const Methods = require("./main");

// Group testing
describe("Check Names", () => {
    beforeEach(() => console.warn("Name checking..."));

    test("Name should be Jon", () => expect("Jon").toBe("Jon"));

    test("Name should be Bezos", () => expect("Bezos").toBe("Bezos"));

    test("Name should be Tom", () => expect("Tom").toBe("Tom"));
});

test("User should be in list", () => {
    users = ["Nazar", "Khazar"];
    expect(users).toContain("Nazar");
});

// test("Username should be Bret", async() => {
//     expect.assertions(1);
//     const user = await Methods.getUser(1);
//     expect(user.username).toEqual("Bret");
// });

it("Sum equals to 5", () => {
    expect(Methods.sum(2, 3)).toBe(5);
});

// Group testing
describe("Numbers testing", () => {
    test("Should be Greater 5 and Under 15", () => {
        const value = Methods.sum(11, 3);
        expect(value).toBeLessThan(15);
        expect(value).toBeGreaterThan(5);
        expect(value).toBe(16);
    });

    test("Float testing", () => {
        const value = Methods.sum(0.1, 0.2);
        expect(value).toBeCloseTo(0.29999999);
    });
});

describe("exception", () => {
    test("Test Error", () => {
        const error = Methods.getError();
        expect(error).toThrow();
    });
});

test("Sum NOT equals to 4", () => {
    expect(Methods.sum(2, 3)).not.toBe(4);
});

test("method returns null", () => {
    expect(Methods.getNull()).toBeNull();
});

test("method returns undefined", () => {
    expect(Methods.getUndefined()).toBeUndefined();
});

test("Should be truth", () => {
    expect(Methods.checkValue(4)).toBeTruthy();
});

test("There is NO T inside word", () => {
    expect("Hello").not.toMatch(/T/i);
});

test("There is NO T or t inside word", () => {
    expect("Hello").not.toMatch(/T/i); //case sensetive
});

test("User should be in list", () => {
    users = ["Nazar", "Khazar"];
    expect(users).toContain("Nazar");
});

test("Reverse function should be exist", async() => {
    expect(Methods.reverse("reverse")).toBeDefined();
});

test("Word should be reverse", async() => {
    expect(Methods.reverse("Nazar")).toEqual("razaN");
});