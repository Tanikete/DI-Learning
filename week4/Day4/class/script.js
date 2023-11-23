class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
killerRabbit.speak("i need food & you seem the only viable option")
blackRabbit.speak('i am black & i am proud ')

now = new Date();
console.log(now.getTime()/1000);
