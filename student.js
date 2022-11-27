function student(firstname , lastname , dob)
{
 this.firstname = firstname;
 this.lastname = lastname;
 this.dob = dob;
}

student.prototype.getBirthYear = function(){
 return this.dob.getFUllYear();
}

student.prototype.getFullName = function(){
 return `${this.firstname} ${this.lastname}`;
}

const s1 = new student('satish','gavhane','23-6-1989');

console.log(s1);
console.log(s1.getBirthYear());
console.log(s1.getFullName());

class Student
{
 constructor(firstname , lastname , dob)
{
 this.firstname = firstname;
 this.lastname = lastname;
 this.dob = dob;
}
 getBirthYear()
 {
  return this.dob.getFUllYear();
 }

 getFullName()
 {
  return `${this.firstname} ${this.lastname}`;
 }
}

const s = new Student('satish','gavhane','23-6-1989');

console.log(s);
console.log(s.getBirthYear());
console.log(s.getFullName());