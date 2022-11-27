/*var items = document.getElementsByClassName('list-group-item');

items[2].style.backgroundColor = 'green';

for(var i=0 ; i<items.length ; i++)

{
 items[i].style.fontWeight = 'bold';
}

items[4].style.fontWeight = 'bold';

items[4].style.backgroundColor = 'green';



//var secondItem = document.querySelector('.list-group-item:nth-child(2)');

//secondItem.style.backgroundColor = 'green';

//var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0 ; i<odd.length ; i++)
{
 odd[i].style.backgroundColor = 'green';
}

*/

//var itemList = document.querySelector('#items');

//console.log(itemList.parentElement);

//console.log(itemList.lastElementChild);

//console.log(itemList.lastChild);

//console.log(itemList.firstChild);

//console.log(itemList.firstElementChild);

//console.log(itemList.nextSibling);

//console.log(itemList.nextElementSibling);

//console.log(itemList.previousSibling);

//console.log(itemList.previousElementSibling);

var newDiv = document.createElement('div');

newDiv.ClassName = 'hello';

newDiv.id = 'hello1';

newDiv.setAttribute('title','Hello div');

//console.log(newDiv);

var newDivText = document.createTextNode('HelloWorld');

newDiv.appendChild(newDivText);

console.log(newDiv);



