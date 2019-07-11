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

