const numbers = [5,2,6,9,4]

let max = -Infinity
let min = Infinity

for(let number of numbers)
{
 if(number<min)
 {
  min = number;
 }
 if(number>max)
 {
 max = number;
 }
}
 console.log('Minimum number is : '+min);
 console.log('maximum number is : '+max);

