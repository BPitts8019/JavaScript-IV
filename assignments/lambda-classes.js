// const fred = new Instructor({
//    name: 'Fred',
//    location: 'Bedrock',
//    age: 37,
//    favLanguage: 'JavaScript',
//    specialty: 'Front-end',
//    catchPhrase: `Don't forget the homies`
//  });

/**
 * Base Class for Lambda School Roster
 * @param {Object} props - An object with the following keys:
 * name: Person's name
 * age: Person's age in years
 * location: Where the person lives
 */
class Person {
   constructor ({name, age, location}) {
      this.name = name;
      this.age = age;
      this.location = location;
   }

   speak () {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
   }
}

/**
 * Instructor Class
 * @param {Object} props - An object with the following keys:
 * name: Person's name
 * age: Person's age in years
 * location: Where the person lives
 */
class Instructor extends Person {
   constructor ({specialty, favLanguage, catchPhrase, ...rest}) {
      super(rest);
      this.specialty = specialty;
      this.favLanguage = favLanguage;
      this.catchPhrase = catchPhrase;
   }

   /**
    * A simple speech bubble for the instructor
    * @param {string} subject 
    */
   demo (subject) {
      console.log(`Today we are learning about ${subject}`);
   }

   /**
    * Another speech bubble for the instructor
    * @param {Object} student 
    * @param {string} subject 
    */
   grade (student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}`);
   }
}

