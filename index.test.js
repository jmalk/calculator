const { Calculator, Operators } = require("./index.js");

const pressAndLook = (calc, input) => {
  calc.press(input);
  return calc.getDisplay();
};

test("Pressing 1 shows 1", () => {
  const calc = Calculator();
  expect(pressAndLook(calc, 1)).toBe(1);
});

test("Pressing 1, 1 shows 11", () => {
  const calc = Calculator();
  expect(pressAndLook(calc, 1)).toBe(1);
  expect(pressAndLook(calc, 1)).toBe(11);
});

test("Pressing 1, 2 shows 12", () => {
  const calc = Calculator();
  expect(pressAndLook(calc, 1)).toBe(1);
  expect(pressAndLook(calc, 2)).toBe(12);
});

test("Pressing 1, + shows 1", () => {
  const calc = Calculator();
  expect(pressAndLook(calc, 1)).toBe(1);
  expect(pressAndLook(calc, Operators.PLUS)).toBe(1);
});

test("Pressing 1, +, 1 shows 1", () => {
  const calc = Calculator();
  expect(pressAndLook(calc, 1)).toBe(1);
  expect(pressAndLook(calc, Operators.PLUS)).toBe(1);
  expect(pressAndLook(calc, 1)).toBe(1);
});

test("Pressing 1, +, 1, = shows 2", () => {
  const calc = Calculator();
  expect(pressAndLook(calc, 1)).toBe(1);
  expect(pressAndLook(calc, Operators.PLUS)).toBe(1);
  expect(pressAndLook(calc, 1)).toBe(1);
  expect(pressAndLook(calc, Operators.EQUALS)).toBe(2);
});

test("Pressing 2, +, 3, = shows 5", () => {
  const calc = Calculator();
  expect(pressAndLook(calc, 2)).toBe(2);
  expect(pressAndLook(calc, Operators.PLUS)).toBe(2);
  expect(pressAndLook(calc, 3)).toBe(3);
  expect(pressAndLook(calc, Operators.EQUALS)).toBe(5);
});

test("Pressing 3, -, 2, = shows 1", () => {
  const calc = Calculator();
  expect(pressAndLook(calc, 3)).toBe(3);
  expect(pressAndLook(calc, Operators.MINUS)).toBe(3);
  expect(pressAndLook(calc, 2)).toBe(2);
  expect(pressAndLook(calc, Operators.EQUALS)).toBe(1);
});
