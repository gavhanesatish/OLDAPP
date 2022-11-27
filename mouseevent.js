console.log(document.getElementById('my-form'));

const btn = document.querySelector('.btn');


/*
btn.addEventListener('click',(e) =>
{
 e.preventDefault();
 document.querySelector('#my-form').style.background = '#ccc';
});



btn.addEventListener('mouseout' ,(e) =>
{
 e.preventDefault();
 document.querySelector('#my-form').style.background = '#ccc';
});

*/


btn.addEventListener('mouseover' ,(e) =>
{
 e.preventDefault();
 document.querySelector('#my-form').style.background = '#ccc';
})