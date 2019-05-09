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

const michaelHartPerson = new Person({name: 'Michael Hart', age: 43, location: 'MD'});
michaelHartPerson.speak();

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

const danLevy = new Instructor({name: 'Dan Levy', age: 'unknown', location: 'Lambda', specialty: 'CS', favLanguage: 'Javascript', catchPhrase: "You'll get there"});
danLevy.speak();
danLevy.demo('Closures');

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

const michaelHartStudent = new Student({
  name: 'Michael Hart',
  age: 43,
  location: 'MD',
  previousBackground: 'Caretaking',
  className: 'Web20',
  favSubjects: ['Python', 'Javascript', 'Lunch']
});

michaelHartStudent.speak();
michaelHartStudent.listsSubjects();
michaelHartStudent.PRAssignment('Python');
michaelHartStudent.sprintChallenge('Javascript');
danLevy.grade(michaelHartStudent, 'Prototypes');

class ProjectManager extends Instructor {
  constructor({name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor}) {
    super({name, age, location, specialty, favLanguage, catchPhrase});
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }

  standup(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standup time!​​​​​`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }  
}

const ryanFreemanPM = new ProjectManager({name: 'Ryan Freeman', age: 'unknown', location: 'Salt Lake City', specialty: 'Full Stack Web Dev', favLanguage: 'Javascript', catchPhrase: "Don't worry if...", gradClassName: 'Web17', favInstructor: danLevy});

ryanFreemanPM.standup('#web20_ryan');
ryanFreemanPM.debugsCode(michaelHartStudent, 'Javascript');