/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/**
 * Chooses a random number between 1 and the number of sides chosen.
 * @param {number} sides 
 */
const rollD = (sides) => {
   return Math.floor(Math.random() * sides) + 1;
};

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObject {
   constructor ({ name, nickname, dimensions }) {
      this.createdAt = new Date();
      this.name = name;
      this.nickname = nickname || "";
      this.dimensions = dimensions;
   }

   destroy () {
      return `${this.name} was removed from the game.`;
   }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
   constructor ({ healthPoints, ...rest }) {
      this.healthPoints = healthPoints;
      GameObject.call(this, rest);
   }

   takeDamage (damage) {
      return `${this.name} took ${damage} damage.`;
   }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats {
   constructor ({ team, weapons, language, ...rest }) {
      this.team = team;
      this.weapons = weapons;
      this.language = language;
      CharacterStats.call(this, rest);
   }

   greet () {
      return `${this.name} offers a greeting in ${this.language}.`;
   }

   attack (target) {
      const BASE_TO_HIT = 8;
   
      //which weapon do I use?
      //random choice for now
      // const weapon = this.weapons[rollD(this.weapons.length) - 1];
      const weapon = this.weapons[0];
   
      //did we hit the target?
      const hitTarget = rollD(20) >= BASE_TO_HIT + weapon.toHitMod;
      //how much damage is caused?
      let damage = 0;
      if (hitTarget) {
         damage = Math.floor(Math.random() * (weapon.maxDmg - weapon.minDmg + 1)) + weapon.minDmg
      }
   
      if (damage > 0) {
         console.log(`${this.nickname} hits ${target.nickname} with his ${weapon.type}.`);
      } else {
         console.log(`${this.nickname} misses ${target.nickname} with his ${weapon.type}.`);
      }
   
      //update target health
      target.healthPoints -= damage;
      console.log(target.takeDamage(damage));
      if (target.healthPoints <= 0) {
         console.log(target.destroy());
      }
   }
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

// * Weapons will contain three values: type, minDmg, maxDmg

const Villain = function (props) {
   Humanoid.call(this, props);
};
Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.berserk = function (target) {
   console.log(`${this.nickname} is berserking. They get two attacks!`);
   this.attack(target);
   this.attack(target);
};

const Hero = function (props) {
   this.maxHealth = props.healthPoints;
   Humanoid.call(this, props);
};
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.heal = function () {
   const healing = Math.round(this.maxHealth / 3);
   this.healthPoints += healing;
   if (this.healthPoints > this.maxHealth) {
      this.healthPoints = this.maxHealth;
   }

   console.log(`${this.nickname} heals for ${healing} points.`);
};




//---- Create Players ----//
const villain = new Villain({
   dimensions: {
      length: 2,
      width: 3,
      height: 4,
   },
   healthPoints: 100,
   name: 'Grommash Hellscream',
   nickname: "Grom",
   team: 'The Horde',
   weapons: [
      { type: "Battleaxe", toHitMod: 1, minDmg: 5, maxDmg: 9 },
      { type: "Mace", toHitMod: 0, minDmg: 3, maxDmg: 5 },
      { type: "Dagger", toHitMod: -2, minDmg: 1, maxDmg: 2 }
   ],
   language: 'Orcish',
});

const hero = new Hero({
   dimensions: {
      length: 2,
      width: 2,
      height: 3,
   },
   healthPoints: 80,
   name: 'Arthas Menethil',
   nickname: "Arthas",
   team: 'The Alliance',
   weapons: [
      { type: "Lightbringer", toHitMod: 0, minDmg: 5, maxDmg: 7 },
      { type: "shortsword", toHitMod: -1, minDmg: 3, maxDmg: 5 }
   ],
   language: 'Common',
});

//---- GAME LOOP ----//
do {
   //display Player Stats
   console.log(`---------------------`);
   console.log(`${villain.name}: ${villain.healthPoints}`);
   console.log(`${hero.name}: ${hero.healthPoints}`);

   //villain attacks first
   //berserk or attack?
   console.log(`---------------------`);
   if (rollD(20) >= 18) {
      villain.berserk(hero);
   } else {
      villain.attack(hero);
   }

   //hero attacks second
   //heal or attack
   console.log(`---------------------`);
   if (rollD(20) >= 17) {
      hero.heal();
   } else {
      hero.attack(villain);
   }
   console.log("\n\n");
} while (villain.healthPoints > 0 && hero.healthPoints > 0);

if (villain.healthPoints > 0) {
   console.log(`${villain.name} Has killed ${hero.name}.`);
   console.log(`${villain.team} Wins!`);
} else if (hero.healthPoints > 0) {
   console.log(`${hero.name} Has killed ${villain.name}.`);
   console.log(`${hero.team} Wins!`);
} else {
   console.log(`Both combatants have killed each other.`);
   console.log(`The battle is a draw!`);
}
console.log(`\nGAME OVER!!`);