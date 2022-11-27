console.log(document.title);
document.title = 'form page';
console.log(document.title);
console.log(document.domain);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[5]);
console.log(document.forms);
console.log(document.links);
console.log(document.forms[0]);
console.log(document.images)

var headertitle = document.getElementById('Header title');
console.log(headertitle);

var items = document.getElementsByClassName('listitem-item');
console.log(items);

for(var i=0 ; i<items.length ; i++)
{
 items[i].style.fontWeight = "bold";
 items[i].style.color = "green";
}

var hedertitle = document.getElementById('header-title');

headertitle.style.borderBottom = 'solid 3px #000';