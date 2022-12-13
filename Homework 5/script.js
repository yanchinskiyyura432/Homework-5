//task 1

// let mentor = {
//   course: "JS fundamental",
//   duration: 3,
//   direction: "web-development",
// };
// function NumObject(mentor) {
//   console.log(Object.keys(mentor).length);
// }
// NumObject(mentor);

//task 2

// let randObject = {
//   field1: 12,
//   field2: "txt",
//   field3: 21,
//   field4: "txt2",
//   field5: 112,
// };
// function showProps(obj) {
//   objArr1 = Object.keys(obj);
//   objArr2 = Object.values(obj);
//   for (let i = 0; i < objArr1.length; i++) {
//     console.log(objArr1[i] + ": " + objArr2[i]);
//   }
// }
// showProps(randObject);

//task 3

// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   showFullName() {
//     return this.name + " " + this.surname;
//   }
// }
// class Student extends Person {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   showFullName(midleName) {
//     return super.showFullName() + " " + midleName;
//   }
//   showCourse() {
//     let todayDate = new Date();
//     let currYear = todayDate.getFullYear();
//     return currYear - this.year;
//   }
// }
// let stud1 = new Student("Andrew", "Johnson", 2016);
// console.log(stud1.showFullName("Alex"));
// console.log("Current course: " + stud1.showCourse());

//task 4 !!!!!

// class Worker {
//   constructor(fullName, dayRate, workingDays) {
//     this.fullName = fullName;
//     this.dayRate = dayRate;
//     this.workingDays = workingDays;
//   }
//   showSalary() {
//     return this.dayRate * this.workingDays;
//   }
//   #experience = 1.2;
//   get showSalaryWithExperience() {
//     return this.showSalary() * this.#experience;
//   }
//   get Experience() {
//     return this.#experience;
//   }
//   set Experience(exp) {
//     this.#experience = exp;
//   }
//   sortArr(workers) {
//     let workSort = workers.sort(function (a, b) {
//       return a.showSalaryWithExperience - b.showSalaryWithExperience;
//     });
//     console.log(workSort);
//   }
// }

// const worker1 = new Worker("Tom Brown", 200, 80);
// const worker2 = new Worker("Richard Crow", 25, 21);
// const worker3 = new Worker("Barry Smith", 42, 44);
// const worker4 = new Worker("Avery Zack", 50, 30);

// console.log(worker1.fullName);
// console.log(worker1.showSalary());
// console.log("New experience: " + worker1.Experience);
// console.log(worker1.showSalaryWithExperience);
// worker1.Experience = 1.5;
// console.log("New experience: " + worker1.Experience);
// console.log(worker1.showSalaryWithExperience);

// worker1.sortArr([worker1, worker2, worker3, worker4]);

// task 5

// class geometricFigure {
//   getArea() {
//     return 0;
//   }
//   toString() {
//     return Object.getPrototypeOf(this).constructor.name;
//   }
// }
// class Triangle extends geometricFigure {
//   constructor(a, h) {
//     super();
//     this.a = a;
//     this.h = h;
//   }
//   getArea() {
//     return 0.5 * (this.a * this.h);
//   }
// }
// class Square extends geometricFigure {
//   constructor(a) {
//     super();
//     this.a = a;
//   }
//   getArea() {
//     return Math.pow(this.a, 2);
//   }
// }
// class Circle extends geometricFigure {
//   constructor(r) {
//     super();
//     this.r = r;
//   }
//   getArea() {
//     return Math.pow(Math.PI * this.r, 2);
//   }
// }

// const figures = [new Triangle(3, 4), new Square(4), new Circle(4)];
// function handleFigures(figures) {
//   for (let i = 0; i < figures.length; i++) {
//     console.log(figures[i].toString() + " : " + figures[i].getArea());
//   }
//   console.log(
//     "Total area : " +
//       figures[0].getArea() +
//       figures[1].getArea() +
//       figures[2].getArea()
//   );
// }
// handleFigures(figures);
