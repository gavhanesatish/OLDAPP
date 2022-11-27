const str = ["a","b","c","d","e"];
let l=0;
let r=str.length-1;
while(r>l)
{
 let temp=str[l];
 str[l]=str[r];
 str[r]=temp;
 l++;
r--;
}
console.log(str)
