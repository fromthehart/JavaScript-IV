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

  assignsPoints(student) {
    let points = (Math.floor(Math.random() * 41)) - 20; // Random points from -20 to +20
    student.grade += points;
    student.grade = Math.min(student.grade, 100); // If over 100, set to 100
    student.grade = Math.max(student.grade, 0); // If below zero, set to 0
    console.log(`${this.name} gives ${student.name} ${points} points`);
  }
}

const danLevy = new Instructor({name: 'Dan Levy', age: 'unknown', location: 'Lambda', specialty: 'CS', favLanguage: 'Javascript', catchPhrase: "You'll get there"});
danLevy.speak();
danLevy.demo('Closures');

class Student extends Person {
  constructor({name, age, location, previousBackground, className, favSubjects, grade}) {
    super({name, age, location});
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
    this.grade = grade;
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

  checkGrade() {
    console.log(`${this.name}'s grade is ${this.grade}`);
  }

  graduate() {
    this.checkGrade();
    if (this.grade > 70) {
      console.log(`Congratulations, ${this.name} is ready to graduate! Where's that sweet Lambda t-shirt?`);
      return true;
    } else {
      console.log(`${this.name} needs to spend a little more time mastering the material`);
      return false;
    }
  }
}

const michaelHartStudent = new Student({
  name: 'Michael Hart',
  age: 43,
  location: 'MD',
  previousBackground: 'Caretaking',
  className: 'Web20',
  favSubjects: ['Python', 'Javascript', 'Lunch'],
  grade: 90
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
ryanFreemanPM.debugsCode(michaelHartStudent, 'HTML');
ryanFreemanPM.assignsPoints(michaelHartStudent);
michaelHartStudent.checkGrade();
ryanFreemanPM.debugsCode(michaelHartStudent, 'CSS');
ryanFreemanPM.assignsPoints(michaelHartStudent);
michaelHartStudent.checkGrade();
ryanFreemanPM.debugsCode(michaelHartStudent, 'Javascript');
ryanFreemanPM.assignsPoints(michaelHartStudent);
michaelHartStudent.checkGrade();
ryanFreemanPM.debugsCode(michaelHartStudent, 'React');
ryanFreemanPM.assignsPoints(michaelHartStudent);
michaelHartStudent.checkGrade();
while(!michaelHartStudent.graduate()) {
  ryanFreemanPM.assignsPoints(michaelHartStudent);
}