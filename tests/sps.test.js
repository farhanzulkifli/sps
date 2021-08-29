//import results function from JS file
const results = require("../src/sps");


//testing for any errors in game logic
describe("Test results function", () => {
  test("Both Stone", () => {
    expect(results.results("Stone", "Stone").type).toBe("No one");
  });
  test("Both Paper", () => {
    expect(results.results("Paper", "Paper").type).toBe("No one");
  });
  test("Both Scissors", () => {
    expect(results.results("Scissors", "Scissors").type).toBe("No one");
  });
  test("User Stone, Computer Scissors", () => {
    expect(results.results("Stone", "Scissors").type).toBe("User");
  });
  test("User Stone, Computer Paper", () => {
    expect(results.results("Stone", "Paper").type).toBe("Computer");
  });
  test("User Paper, Computer Scissors", () => {
    expect(results.results("Paper", "Scissors").type).toBe("Computer");
  });
  test("User Paper, Computer Stone", () => {
    expect(results.results("Stone", "Scissors").type).toBe("User");
  });
  test("User Scissors, Computer Stone", () => {
    expect(results.results("Scissors", "Stone").type).toBe("Computer");
  });
  test("User Scissors, Computer Paper", () => {
    expect(results.results("Stone", "Scissors").type).toBe("User");
  });
});
