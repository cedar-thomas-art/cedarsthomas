class RandomNumber {
  constructor() {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    this.number = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  get float() {
    return this.number / 100;
  }
}

module.exports = RandomNumber;
