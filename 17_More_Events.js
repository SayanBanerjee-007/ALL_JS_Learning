let btn = document.getElementById('btn');

btn.addEventListener('click',fun1);
btn.addEventListener('dblclick',fun2);
btn.addEventListener('mousedown',fun3);

function fun1(temp)
{
    console.log('Thanks',temp);
    temp.preventDefault(); // this will prevent from submiting on the button and move to the next page
}

function fun2(temp)
{
    console.log('This is double click',temp);
    temp.preventDefault();
}

function fun3(temp)
{
    console.log('This is mouse down',temp);
    temp.preventDefault();
}



// document.querySelector('.no').addEventListener('mouseenter',function(temp){
//     console.log('This is mouse entred');
// })

// document.querySelector('.no').addEventListener('mouseleave',function(temp){
//     console.log('This is mouse leave');
// })

document.querySelector('.container').addEventListener('mousemove',function(temp){

    console.log(temp.offsetX,temp.offsetY);
    document.body.style.backgroundColor = `rgb(${temp.offsetX}+${temp.offsetY}+154)`;
    console.log('This is mouse move');

})