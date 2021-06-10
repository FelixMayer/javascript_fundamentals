class Card {
    constructor(name, cost) {
        this.name = name
        this.cost = cost 
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name,cost);
        this.power = power;
        this.resilience = resilience
    }

    showStats() {
        console.log(`Name: ${this.name}, Cost: ${this.cost}, Power: ${this.power}, Resilience: ${this.resilience}`);
    }

    attack(target) {
        target.resilience -= this.power
        if (target.resilience <= 0) {
            console.log(`${this.name} has won`)
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude
    }

    play(target) {
        if( target instanceof Unit ) {
            console.log(this.text)
            if ( this.stat == "resilience") {
                target.resilience += this.magnitude
            }
            else {
                target.power += this.magnitude
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

var redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
var blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)

var hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3)
var unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
var pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)

hardAlgorithm.play(redBeltNinja)
unhandledPromiseRejection.play(redBeltNinja)
pairProgramming.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)

redBeltNinja.showStats()
blackBeltNinja.showStats()
