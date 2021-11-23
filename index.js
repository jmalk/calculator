const Operators = {
  PLUS: "PLUS",
  MINUS: "MINUS",
  EQUALS: "EQUALS",
};

const Calculator = () => {
  let state = {
    value: 0,
    previous: 0,
    operation: null,
    waiting: false,
  };

  return {
    press: (input) => {
      if (typeof input === "number") {
        if (state.waiting) {
          state.waiting = false;
          state.previous = state.value;
          state.value = input;
        } else {
          state.value = state.value * 10 + input;
        }
      }

      if (input === Operators.PLUS) {
        state.operation = Operators.PLUS;
        state.waiting = true;
      }

      if (input === Operators.MINUS) {
        state.operation = Operators.MINUS;
        state.waiting = true;
      }

      if (input === Operators.EQUALS) {
        if (state.operation === Operators.PLUS) {
          state.value = state.previous + state.value;
        }
        if (state.operation === Operators.MINUS) {
          state.value = state.previous - state.value;
        }
        state.operation = null;
      }
    },

    getDisplay: () => state.value,
  };
};

module.exports = { Calculator, Operators };
