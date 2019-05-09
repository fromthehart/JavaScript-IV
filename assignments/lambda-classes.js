// CODE here for your Lambda Classes



class Person {
  constructor({name, age, location}) {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

const michaelhartPerson = new Person({name: 'Michael Hart', age: 43, location: 'MD'});
michaelhartPerson.speak();

class Instructor extends Person {
  constructor({name, age, location, specialty, favLanguage, catchPhrase}) {
    super({name, age, location});
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

const danlevy = new Instructor({name: 'Dan Levy', age: 'unknown', location: 'Lambda', specialty: 'CS', favLanguage: 'Javascript', catchPhrase: "You'll get there"});
danlevy.speak();
danlevy.demo('Closures');

class Student extends Person {
  constructor({name, age, location, previousBackground, className, favSubjects}) {
    super({name, age, location});
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
  }

  listsSubjects() {
    console.log('Favorite subjects:');
    this.favSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

const michaelhartStudent = new Student({
  name: 'Michael Hart',
  age: 43,
  location: 'MD',
  previousBackground: 'Caretaking',
  className: 'WEB20',
  favSubjects: ['Python', 'Javascript', 'Lunch']
});

michaelhartStudent.speak();
michaelhartStudent.listsSubjects();
michaelhartStudent.PRAssignment('Python');
michaelhartStudent.sprintChallenge('Javascript');
danlevy.grade(michaelhartStudent, 'Prototypes');