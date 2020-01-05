class PassGen {
    constructor(range, number, symbols, uppercase) {
        this.range = range;
        this.number = number;
        this.symbols = symbols;
        this.uppercase = uppercase;
    }
    getCharacters(from, to) {
        const characters = [];
        for (let index = from; index <= to; index++) {
            const char = index;
            characters.push(char);
        }
        return characters
    }
    assignCharacters() {
        let characters = this.getCharacters(97, 122);
        if (this.number) {
            characters = characters.concat(this.getCharacters(48, 57));
        }
        if (this.uppercase) {
            characters = characters.concat(this.getCharacters(65, 90));
        }
        if (this.symbols) {
            characters = [
                ...characters,
                ...this.getCharacters(33, 47),
                ...this.getCharacters(58, 64),
                ...this.getCharacters(91, 96)
            ];
        }
        return characters;
    }
    getPassword() {
        const characters = this.assignCharacters();
        let password = "";
        for (let index = 0; index < this.range; index++) {
            let generatedRandomNumber = Math.floor(Math.random() * Math.floor(characters.length));
            password = password + String.fromCharCode(characters[generatedRandomNumber]);
        }
        return password;
    }
}

function syncValue(haveChange, toChange) {
    toChange.value = haveChange.value
}

export default PassGen
export {
    syncValue
}