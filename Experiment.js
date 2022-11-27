var form = document.getElementById('addForm');

var itemList = document.getElementById('items');

var filter = document.getElementById('filter');

//itemList.addEventListener('click',removeItem);

form.addEventListener('submit', addItem);

itemList.addEventListener('click' , removeItem);

function addItem(e)
{
 e.preventDefault();

 var newItem = document.getElementById('item').value;

 var li = document.createElement('li');

 li.className = 'list-group-item';

 li.appendChild(document.createTextNode(newItem));

 itemList.appendChild(li);
}

function removeItem(e)
{
 console.log(1);
}


//itemList.addEventListener('click',removeItem);