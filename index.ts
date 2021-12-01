interface Animal {
    name: string;
    stomach: number;
    words: string[];
    songs: string[];
    satisfied: number;
    angry: number;

    checkCurrentStatus(): void;
    feed(): void;
    teachWords(words: string): void;
    pet(): void;
    teachSongs(song: string): void;
};

class Parrot implements Animal {
    public name: string;
    public stomach: number;
    public words: string[];
    public songs: string[];
    public satisfied: number;
    public angry: number;

    constructor(name: string) {
        this.name = name;
        this.stomach = 0;
        this.words = [];
        this.songs = [];
        this.satisfied = 0;
        this.angry = 0;
    }

    checkCurrentStatus(): void {
        console.log(this.name, this.stomach, this.words, this.songs, this.satisfied, this.angry);
    };

    feed(): void {
        this.stomach = this.stomach + 1;
    };

    teachWords(words: string): void {
        this.words.push(words);
        console.log(`The latest word ${this.name} learned is ` +  this.words[this.words.length - 1]);
    };

    pet(): void {
        this.satisfied = this.satisfied + 1;
    };

    teachSongs(songs: string): void {
        this.songs.push(songs);
        console.log(`${this.name} is singing ` + this.songs);
    };

    static whoIsHappier(parrot1: Parrot, parrot2: Parrot): string {
        let result: string = "";

        if(parrot1.satisfied > parrot2.satisfied) {
            result = `${parrot1.name} is happier than ${parrot2.name}!`;
        } else if (parrot1.satisfied < parrot2.satisfied) {
            result = `${parrot2.name} is happier than ${parrot1.name}!`;          
        } else if (parrot1.satisfied === parrot2.satisfied) {
            result = `${parrot1.name} and ${parrot2.name} are at the same level of happiness!`;
        } else {
            result = "It is difficult to find who is happier";
        };

        return result;
    }
};

const louis: Parrot = new Parrot("Louis");
const romi: Parrot = new Parrot("Romi");

louis.teachWords("Hello World!");

let result: string = Parrot.whoIsHappier(louis, romi);
console.log(result);