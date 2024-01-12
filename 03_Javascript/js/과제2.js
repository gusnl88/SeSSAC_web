let todos=document.querySelectorAll('.todo span')
console.log(todos)
for(let todo of todos){
    todo.style=`color:#bbb;
    font-style:italic;
    background-color:white;
    text-decoration: line-through;
    `
    // todo.style.color='#bbb';
    // todo.style.fontStyle='italic';
    // todo.style.background='none'
    // todo.style.textDecoration='line-through';
}
let dones=document.querySelectorAll('.done span')
console.log(dones)
for(let done of dones){
    done.style=`text-decoration: none;
    background-color: rgb(255, 233, 111);
    font-weight: 700;
    font-style: none;
    color:black;


    `
    // done.style.textDecoration='none';
    // done.style.background='rgb(255, 233, 111)'
    // done.style.fontWeight='700'
    // done.style.fontStyle='normal';
    // done.style.color='black';

}
