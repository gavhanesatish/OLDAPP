const person = {
 firstName : 'john',
 lastName : 'doe',
 age : 30,
 hobbies : ['music','movies','sport'],
 address : {
 street : '50 main st',
 city : 'Boston',
 State : 'MA'
 }
}

console.log(person.hobbies[1]);
console.log(person.address.city);
console.log(person.age);
console.log(person.address.State);


const todos =[
{
 id : 1,
 text : 'Take out Trash',
 iscompleted : true
},
{
id : 2,
text : 'Meeting with boss',
iscompleted : true
},
{
 id : 3,
 text : 'Dentist appt',
 isCompleted : false
}
]

for(let i=0 ; i<todos.length ; i++)
{
 console.log(todos[i].id);
}

let i = 0;
while(i<todos.length)
{
 console.log(todos[i].id);
 i++;
}