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
        console.log(`Name: ${this.name}, \nStomach: ${this.stomach}, \nWords: ${this.words}, \nSongs: ${this.songs}, \nSatisfied: ${this.satisfied}, \nAngry: ${this.angry}\n`);

        if (this.satisfied > 4 && this.satisfied > this.angry) {
            console.log(`${this.name} is satisfied as much as ${this.satisfied}. Happy End!\n`);
        } else if (this.angry > 4 && this.satisfied < this.angry) {
            console.log(`${this.name} is angry as much as ${this.angry}. Bed End!\n`);
        } else {
            console.log(`${this.name} is satisfied as much as ${this.satisfied}, and angry as much as ${this.angry}.\n`);
        };
    };

    feed(): void {
        this.stomach = this.stomach + 1;
        this.satisfied = this.satisfied + 2;
    };

    teachWords(words: string): void {
        if (words.length >= 10) {
            console.log(`The length of '${words}' is ${words.length}. Please teach words less than 10 letters`);
        } else {
            this.words.push(words);
            this.satisfied = this.satisfied + 1;
            console.log(`${this.name} is saying '${this.words[this.words.length - 1]}'`);    
        };
    };

    pet(): void {
        this.angry = this.angry + 1;
        console.log(`Petted ${this.name}`);
    };

    teachSongs(songs: string): void {
        let num1: number;
        let num2: number;
        let smallNum: number;
        let bigNum: number;

        if (songs.length > 10) {
            // 1 ~ songs 길이 사이의 랜덤 숫자 2개 생성하여, songs에서 일부 글자만 골라내고(substr), songs 배열에 저장
            num1 = Math.random() * songs.length;
            num2 = Math.random() * songs.length;

            if(num1 > num2) {
                smallNum = num2;
                bigNum = num1;
            } else {
                smallNum = num1;
                bigNum = num2;
            };

            if (smallNum < bigNum) {
                songs = songs.substr(smallNum, bigNum);
                this.songs.push(songs);
                this.satisfied = this.satisfied + 1;
                console.log(`${this.name} is singing '${this.songs}', which is edited by itself!`);
            } else {
                console.log("It refused to learn songs! Try again.");
            };
        } else {
            console.log(`The length of '${songs}' is ${songs.length}. Please teach song more than 10 letters.`);
        };
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
            result = "It is difficult to find who is happier.";
        };

        return result;
    };
};

const louis: Parrot = new Parrot("Louis");
const romi: Parrot = new Parrot("Romi");

console.log("[Teaching words]");
louis.teachWords("Hello!");
louis.teachWords("My tumblr!");
louis.teachWords("WHY?");
louis.teachWords("Where is papa?");
louis.teachWords("Good luck!");

console.log("");
console.log("[Petting]");
louis.pet();
louis.pet();
louis.pet();
louis.pet();
louis.pet();

console.log("");
console.log("[Teaching songs]");
louis.teachSongs("When I find myself in times of trouble, Mother Mary comes to me");

console.log("");
console.log("[Checking current status]");
louis.checkCurrentStatus();
romi.checkCurrentStatus();

console.log("");
console.log("[Who is happier?]");
let result: string = Parrot.whoIsHappier(louis, romi);
console.log(result);