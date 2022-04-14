const initState = {
  price: 0,
  lottoList: [],
  winningNumber: {
    number: [],
    bonusNumber: null,
  },
  rankBoard: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  },
};

class Store {
  constructor() {
    this.state = { ...initState };
  }

  resetState() {
    this.state = { ...initState };
  }

  setState = (newState) => {
    this.state = { ...this.state, ...newState };
  };
}

export default Store;
