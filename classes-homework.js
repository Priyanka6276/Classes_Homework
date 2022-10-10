class Cat {
    constructor(){
        this.name = 'Mr. Fluffy';
        this.color = 'Black';
        this.favFood = 'Fish';
    }
    eating () {
        console.log(`${this.name} is eating ${this.favFood}.`)
    }
    sleeping (){
        console.log (`${this.name} is sleeping.`)
    }
    playing (){
        console.log(`${this.name} is playing with toys.`)
    }
    
}

const cat1 = new Cat ()
console.log(cat1)

const cat2 = new Cat ()
cat2.name = 'Whiskers the Magnificent'
cat2.color = 'Orange Tabby'
cat2.favFood = 'Caviar'
console.log(cat2)

cat1.eating()
cat1.sleeping()
cat1.playing()

cat2.eating()
cat2.sleeping()
cat2.playing()

//_______________________________________________________________________

class Pirate {
    constructor (name, catchPhrase, skills){
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.skills = skills;
    }
    greet () {
        console.log(`Ahoy matey! I am ${this.name}.`)
    }
    attack () {
        console.log(`Ye have boarded the wrong ship! ${this.catchPhrase}!`)
    }
    singing (){
        console.log(`Yo ho ho! It's a pirate's life for me!`)
      }
}

const pirate1 = new Pirate('Old-Tide Sammy', 'Dead men tell no takes', ['spending money, stealing money'])
const pirate2 = new Pirate('Lady Tide', 'Cleave him to the brisket', ['sword fighting', 'singing'] )
const pirate3 = new Pirate('Barnacle Bill', 'Walk the plank', ['sleeping'])

jollyRoger = [pirate1, pirate2, pirate3]

const pirateOne = new Pirate ('Admiral Silver-Hook', 'Blow the man down', ['drinking ale', 'driving'])
const pirateTwo = new Pirate ('Roger Starky', 'Arg', ['dancing'])
const pirateThree = new Pirate ('Vera Sparrow', 'Feed the fish', ['gambling'] )

blackPearl = [pirateOne, pirateTwo, pirateThree]

for (let i = 0; i < blackPearl.length && i < jollyRoger.length ; i++){
    console.log(jollyRoger[i], blackPearl[i])
}

