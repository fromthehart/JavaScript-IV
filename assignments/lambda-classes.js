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

const michaelhart = new Person({name: 'Michael Hart', age: 43, location: 'MD'});
michaelhart.speak();

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
danlevy.grade(michaelhart, 'Prototypes');