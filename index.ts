interface animal {
    name: string;
    stomach: number;
    words: string[];
    songs: string[];
    satisfied: number;
    angry: number;

    abstract checkCurrentStatus;
    abstract feed;
    abstract teachWords;
    abstract pet;
    abstract teachSongs;
}

class parrot implements animal {
    constructor(name: string) {
        this.name = name;
        this.stomach = 0;
        this.words = [];
        this.songs = [];
        this.satisfied = 0;
        this.angry = 0;
    }

    name: string;
    stomach: number;
    words: string[];
    songs: string[];
    satisfied: number;
    angry: number;

    function checkCurrentStatus (): void {
        console.log(this.name, this.stomach, this.words, this.songs, this.satisfied, this.angry);
    };

    function feed (): void {
        this.stomach = this.stomach + 1;
    };

    function teachWords (words: string): void {
        this.words.push(words);
        console.log(`The latest word ${this.name} learned is ` +  words[words.length - 1]);
    };

    function pet (): void {
        this.satisfied = this.satisfied + 1;
    };

    function teachSongs(songs: string[]): void {
        this.songs.push(songs);
        console.log(`${this.name} is singing ` + this.songs);
    };
};

parrot.teachWords("Hello World!");
