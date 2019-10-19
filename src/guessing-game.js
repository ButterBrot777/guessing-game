class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.outsideElement = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.outsideElement = Math.round(this.max - (this.max - this.min)/2);
        return this.outsideElement;
    }

    lower() {
        this.max = this.outsideElement;
    }

    greater() {
        this.min = this.outsideElement;
    }
}

module.exports = GuessingGame;
