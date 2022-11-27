var form = document.getElementById('addForm');

var itemList = document.getElementById('items');

var filter = document.getElementById('filter');

function removeItem(e)
{
 if(e.target.ClassList.contains('delete'))
 {
  if(confirm(''are you sure?))
  {
   var li = e.target.parentElement;
   itemList.removeChild(li);
  }
 }
}
