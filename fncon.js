function person(name,age)

{

 this.name = name;

this.age = age;

}



person.prototype.findeligibleornot = function findeligibleornot(minage)

{

 if(person.age>minage)

{

 document.write(this.name+' is eligible');

 }

else

{

 console.log(this.name+' is not eligible');

}

}





const p1 = new person('Satish',15);

const p2 = new person('Mahesh',22);



p1.findeligibleornot(18);

p2.findeligibleornot(18);


