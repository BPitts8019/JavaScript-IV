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

class Instructor extends Person {
   constructor ({specialty, favLanguage, catchPhrase, ...rest}) {
      super(rest);
      this.specialty = specialty;
      this.favLanguage = favLanguage;
      this.catchPhrase = catchPhrase;
   }

   demo (subject) {
      console.log(`Today we are learning about ${subject}`);
   }

   grade (student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}`);
   }
}

class Student extends Person {
   constructor ({previousBackground, className, favSubjects, ...rest}) {
      super(rest);
      this.previousBackground = previousBackground;
      this.className = className;
      this.favSubjects = favSubjects;
   }

   listsSubjects () {
      this.favSubjects.forEach(subject => { console.log(subject); });
   }

   PRAssignment (subject) {
      console.log(`${this.name} has submitted a PR for ${subject}`);
   }
   
   sprintChallenge (subject) {
      console.log(`${this.name} has begun sprint challenge on ${subject}`);
   }
}

class TeamLead extends Instructor {
   constructor ({gradClassName, favInstructor, ...rest}) {
      super(rest);
      this.gradClassName = gradClassName;
      this.favInstructor = favInstructor;
   }

   standup (channel) {
      console.log(`${this.name} announces to ${channel}, "@channel standy times!"​​​​​`);
   }

   debugsCode (student, subject) {
      console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
   }
}

//=== Roster Tests ===//
   //== Instructors ==//
const joe = new Instructor({
   name: "Joe",
   age: 25,
   location: "Seattle",
   specialty: "User Interface",
   favLanguage: "CSS3",
   catchPhrase: "What's up my dudes?",
});

const betty = new Instructor({
   name: "Betty",
   age: 52,
   location: "New York",
   specialty: "User Interface",
   favLanguage: "CSS3",
   catchPhrase: "What's up peeps?",
});

   //== Team Leads ==//
const george = new TeamLead();
const rachel = new TeamLead();

   //== Students ==//
const bill = new Student({
   name: "Bill",
   age: 24,
   location: "California",
   previousBackground: "Excellent Adventure",
   className: "JS101",
   favSubjects: ["Html", "CSS", "JavaScript"],
});
const ted = new Student({
   name: "Ted",
   age: 25,
   location: "California",
   previousBackground: "Bogus Journey",
   className: "JS101",
   favSubjects: ["React", "Redux", "JavaScript", "C"],
});
const jen = new Student({
   name: "Jen",
   age: 34,
   location: "Michigan",
   previousBackground: "Seamstress",
   className: "JS102",
   favSubjects: ["C++", "Java", "OOP Concepts"],
});
const will = new Student({
   name: "Will",
   age: 43,
   location: "Florida",
   previousBackground: "Car Sales",
   className: "Java 101",
   favSubjects: ["UI design", "CSS", "HTML", "LESS"],
});
const sarah = new Student({
   name: "Sarah",
   age: 62,
   location: "Arizona",
   previousBackground: "Insurance",
   className: "Lambda Next",
   favSubjects: ["Comp Science", "AI", "React", "UX Design"],
});





joe.speak();
joe.demo("Web Fundamentals");

betty.speak();
betty.demo("UX Design");