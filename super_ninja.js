class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3
        this.strength = 3
    }

    sayName() {
        console.log(`The Ninjas name is ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }

    drinkSake() {
        this.health += 10
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10)
        this.wisdom = 10
    }

    speakWisdom() {
        this.drinkSake()
        console.log("You can never plan the future by the past.")
    }
}


const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();